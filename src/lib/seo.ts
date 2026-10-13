import { siteConfig } from "@/config/site";

type SeoInput = {
	/** Page title without the site suffix. Omit on the home page. */
	title?: string;
	description: string;
	/** Route path, e.g. "/pricing". Used for the canonical and og:url. */
	path: string;
	/** Overrides for the social card. Fall back to title/description. */
	socialTitle?: string;
	socialDescription?: string;
	image?: string;
	keywords?: string[];
	type?: "website" | "article";
	noindex?: boolean;
	publishedTime?: string;
	modifiedTime?: string;
};

export const absoluteUrl = (path = "") =>
	path.startsWith("http")
		? path
		: `${siteConfig.url}${path === "/" ? "" : path}`;

/** Builds the `head` payload (meta + links) for a TanStack route. */
export function seo({
	title,
	description,
	path,
	socialTitle,
	socialDescription,
	image = siteConfig.ogImage,
	keywords,
	type = "website",
	noindex = false,
	publishedTime,
	modifiedTime,
}: SeoInput) {
	const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
	const url = absoluteUrl(path);
	const imageUrl = absoluteUrl(image);
	const cardTitle = socialTitle ?? fullTitle;
	const cardDescription = socialDescription ?? description;

	const meta = [
		{ title: fullTitle },
		{ name: "description", content: description },
		...(keywords?.length
			? [{ name: "keywords", content: keywords.join(",") }]
			: []),
		{
			name: "robots",
			content: noindex
				? "noindex, nofollow"
				: "index, follow, max-image-preview:large, max-snippet:-1",
		},
		{ property: "og:title", content: cardTitle },
		{ property: "og:description", content: cardDescription },
		{ property: "og:url", content: url },
		{ property: "og:site_name", content: siteConfig.name },
		{ property: "og:locale", content: siteConfig.locale },
		{ property: "og:image", content: imageUrl },
		{ property: "og:type", content: type },
		...(publishedTime
			? [{ property: "article:published_time", content: publishedTime }]
			: []),
		...(modifiedTime
			? [{ property: "article:modified_time", content: modifiedTime }]
			: []),
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: cardTitle },
		{ name: "twitter:description", content: cardDescription },
		{ name: "twitter:image", content: imageUrl },
	];

	return {
		meta,
		links: [{ rel: "canonical", href: url }],
	};
}

type JsonLd = Record<string, unknown>;

/** Wraps structured data as a head script entry. */
export const jsonLdScript = (data: JsonLd) => ({
	type: "application/ld+json",
	children: JSON.stringify(data),
});

export const organizationJsonLd = (): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "Organization",
	name: siteConfig.name,
	url: siteConfig.url,
	logo: absoluteUrl("/icon.png"),
	email: siteConfig.email,
	description: siteConfig.tagline,
});

export const websiteJsonLd = (): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: siteConfig.name,
	url: siteConfig.url,
	inLanguage: "en-US",
});

export const breadcrumbJsonLd = (
	trail: { name: string; path: string }[],
): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: trail.map((item, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: item.name,
		item: absoluteUrl(item.path),
	})),
});

export const faqJsonLd = (
	items: { question: string; answer: string }[],
): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: items.map((item) => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: { "@type": "Answer", text: item.answer },
	})),
});

export const articleJsonLd = (article: {
	title: string;
	description: string;
	path: string;
	image?: string;
	datePublished?: string;
	dateModified?: string;
}): JsonLd => ({
	"@context": "https://schema.org",
	"@type": "Article",
	headline: article.title,
	description: article.description,
	mainEntityOfPage: absoluteUrl(article.path),
	...(article.image ? { image: absoluteUrl(article.image) } : {}),
	...(article.datePublished ? { datePublished: article.datePublished } : {}),
	...(article.dateModified ? { dateModified: article.dateModified } : {}),
	author: { "@type": "Organization", name: siteConfig.name },
	publisher: {
		"@type": "Organization",
		name: siteConfig.name,
		logo: { "@type": "ImageObject", url: absoluteUrl("/icon.png") },
	},
});
