import { Reveal } from "@/components/motion/reveal";
import { ArticleTeaser } from "@/components/sections/resources/article-card";
import { Eyebrow } from "@/components/shared/section-heading";
import type { Article } from "@/lib/articles";

export function KeepReading({ articles }: { articles: Article[] }) {
	if (articles.length === 0) return null;

	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-20 md:py-24">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<Eyebrow index="Next" label="Keep reading" align="left" />
				</Reveal>
				<div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{articles.map((article) => (
						<Reveal key={article.slug}>
							<ArticleTeaser article={article} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
