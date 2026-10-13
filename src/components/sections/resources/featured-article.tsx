import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { HandNote } from "@/components/shared/scribbles";
import { SmartLink } from "@/components/shared/smart-link";
import { type Article, articlePath } from "@/lib/articles";

/** Wide card for the newest article, shown above the grid. */
export function FeaturedArticle({ article }: { article: Article }) {
	return (
		<section className="w-full px-4 pb-6">
			<div className="relative mx-auto w-full max-w-6xl">
				<HandNote
					rotate={7}
					className="absolute -top-9 right-6 hidden lg:inline-flex"
				>
					start here
				</HandNote>

				<Reveal>
					<SmartLink
						href={articlePath(article.slug)}
						className="group grid overflow-hidden rounded-[1.75rem] border border-hairline bg-card transition-[transform,border-color] duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent/35 md:grid-cols-2"
					>
						<div className="relative aspect-[16/10] overflow-hidden bg-surface md:aspect-auto md:min-h-[320px]">
							<img
								src={article.image}
								alt=""
								fetchPriority="high"
								decoding="async"
								className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
							/>
						</div>
						<div className="flex flex-col justify-center gap-5 p-7 md:p-11">
							<div className="flex items-center gap-3">
								<span className="mono-label text-accent">Latest</span>
								<span className="h-px w-6 bg-hairline" aria-hidden />
								<span className="mono-label text-muted">
									{article.category}
								</span>
							</div>
							<h2 className="text-balance font-display text-[clamp(1.5rem,2.8vw,2.15rem)] font-medium leading-[1.08] tracking-[-0.035em] text-ink">
								{article.title}
							</h2>
							<p className="text-[0.98rem] leading-relaxed text-muted">
								{article.description}
							</p>
							<span className="mono-label inline-flex items-center gap-2 text-muted transition-colors group-hover:text-accent">
								Read the guide · {article.readMinutes} min
								<ArrowUpRight
									aria-hidden
									className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								/>
							</span>
						</div>
					</SmartLink>
				</Reveal>
			</div>
		</section>
	);
}
