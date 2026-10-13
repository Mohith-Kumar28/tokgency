import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { FeaturedArticle } from "@/components/sections/resources/featured-article";
import { ResourceBrowser } from "@/components/sections/resources/resource-browser";
import { ClosingCta } from "@/components/shared/closing-cta";
import { PageHero } from "@/components/shared/page-hero";
import { Accent } from "@/components/shared/section-heading";
import { headerActions, siteConfig } from "@/config/site";
import { articlePath, articles } from "@/lib/articles";
import { absoluteUrl, breadcrumbJsonLd, jsonLdScript, seo } from "@/lib/seo";

const [featured, ...rest] = articles;

const blogJsonLd = {
	"@context": "https://schema.org",
	"@type": "Blog",
	name: `${siteConfig.name} resources`,
	url: absoluteUrl("/resources"),
	blogPost: articles.map((article) => ({
		"@type": "BlogPosting",
		headline: article.title,
		url: absoluteUrl(articlePath(article.slug)),
		datePublished: article.date,
	})),
};

export const Route = createFileRoute("/resources/")({
	head: () => ({
		...seo({
			title: "Resources — TikTok Shop & creator growth guides",
			description:
				"Practical guides on TikTok Shop growth, creator recruiting, affiliate management, seeding, and UGC — from the Tokgency team.",
			path: "/resources",
		}),
		scripts: [
			jsonLdScript(blogJsonLd),
			jsonLdScript(
				breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Resources", path: "/resources" },
				]),
			),
		],
	}),
	component: ResourcesPage,
});

function ResourcesPage() {
	return (
		<PageShell>
			<PageHero
				size="compact"
				eyebrow="Resources"
				title={
					<>
						TikTok growth, <Accent>explained.</Accent>
					</>
				}
				description="What we’ve learned running creator programs and warmed US accounts — creator recruiting, affiliate management, seeding, and what actually sells."
				footnote={`${articles.length} guides · Written by the team that runs the campaigns`}
			/>
			<FeaturedArticle article={featured} />
			<ResourceBrowser articles={rest} />
			<ClosingCta
				badge="Reading is optional"
				title={
					<>
						Prefer we just <Accent>run it?</Accent>
					</>
				}
				description="Start a campaign in minutes, or talk to us about a managed program. No sales call needed to begin."
				primary={{
					label: "Start a campaign",
					href: headerActions.primary.href,
					external: true,
				}}
				secondary={{ label: "Explore creators", href: "/creator-marketplace" }}
			/>
		</PageShell>
	);
}
