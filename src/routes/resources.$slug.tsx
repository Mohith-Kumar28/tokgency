import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { ArticleBody } from "@/components/sections/article/article-body";
import {
	ArticleCover,
	ArticleHeader,
} from "@/components/sections/article/article-header";
import { KeepReading } from "@/components/sections/article/keep-reading";
import { ReadingProgress } from "@/components/sections/article/reading-progress";
import { ClosingCta } from "@/components/shared/closing-cta";
import { Accent } from "@/components/shared/section-heading";
import { headerActions, siteConfig } from "@/config/site";
import {
	type Article,
	articlePath,
	getArticle,
	loadArticleBody,
} from "@/lib/articles";
import { articleJsonLd, breadcrumbJsonLd, jsonLdScript, seo } from "@/lib/seo";

const TITLE_SUFFIX = ` | ${siteConfig.name}`;

export const Route = createFileRoute("/resources/$slug")({
	loader: async ({ params }) => {
		const article = getArticle(params.slug);
		const body = article ? await loadArticleBody(article.slug) : null;
		if (!article || !body) throw notFound();

		const related = body.related
			.map(getArticle)
			.filter((item): item is Article => item !== undefined);

		return { article, body, related };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const { article } = loaderData;
		const path = articlePath(article.slug);

		return {
			...seo({
				title: article.metaTitle.replace(TITLE_SUFFIX, ""),
				description: article.metaDescription,
				path,
				image: article.socialImage,
				type: "article",
				publishedTime: article.date,
				modifiedTime: article.date,
			}),
			scripts: [
				jsonLdScript(
					articleJsonLd({
						title: article.title,
						description: article.metaDescription,
						path,
						image: article.socialImage,
						datePublished: article.date,
						dateModified: article.date,
					}),
				),
				jsonLdScript(
					breadcrumbJsonLd([
						{ name: "Home", path: "/" },
						{ name: "Resources", path: "/resources" },
						{ name: article.title, path },
					]),
				),
			],
		};
	},
	component: ArticlePage,
});

function ArticlePage() {
	const { article, body, related } = Route.useLoaderData();

	return (
		<PageShell>
			<ReadingProgress />
			<ArticleHeader article={article} />
			<ArticleCover article={article} />
			<ArticleBody body={body} />
			<KeepReading articles={related} />
			<ClosingCta
				badge="No sales call to begin"
				title={
					<>
						Want this <Accent>run for you?</Accent>
					</>
				}
				description="Start a campaign, or talk to us about a managed TikTok growth program."
				primary={{
					label: "Start a campaign",
					href: headerActions.primary.href,
					external: true,
				}}
				secondary={{ label: "Explore the agency program", href: "/agency" }}
			/>
		</PageShell>
	);
}
