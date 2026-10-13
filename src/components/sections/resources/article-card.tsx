import { ArrowUpRight } from "lucide-react";
import { SmartLink } from "@/components/shared/smart-link";
import { type Article, articlePath } from "@/lib/articles";
import { cn } from "@/lib/utils";

const cardBase =
	"group flex h-full flex-col rounded-[1.35rem] border border-hairline bg-card transition-[transform,border-color] duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent/35";

function CardMeta({ article }: { article: Article }) {
	return (
		<div className="flex items-center gap-2.5">
			<span className="mono-label text-accent">{article.category}</span>
			<span className="h-px w-4 bg-hairline" aria-hidden />
			<span className="mono-label text-muted">{article.readMinutes} min</span>
		</div>
	);
}

function ReadMore() {
	return (
		<span className="mono-label mt-auto inline-flex items-center gap-1.5 pt-3 text-muted transition-colors group-hover:text-accent">
			Read
			<ArrowUpRight
				aria-hidden
				className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
			/>
		</span>
	);
}

/** Card with a cover image, used in the blog index grid. */
export function ArticleCard({ article }: { article: Article }) {
	return (
		<SmartLink
			href={articlePath(article.slug)}
			className={cn(cardBase, "overflow-hidden")}
		>
			<div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-surface">
				<img
					src={article.image}
					alt=""
					loading="lazy"
					decoding="async"
					className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.04]"
				/>
			</div>
			<div className="flex flex-1 flex-col gap-3 p-5">
				<CardMeta article={article} />
				<h3 className="text-balance font-display text-[1.12rem] font-medium leading-[1.22] tracking-[-0.025em] text-ink">
					{article.title}
				</h3>
				<p className="line-clamp-2 text-[0.9rem] leading-relaxed text-muted">
					{article.description}
				</p>
				<ReadMore />
			</div>
		</SmartLink>
	);
}

/** Text-only card, used under "Keep reading" at the end of an article. */
export function ArticleTeaser({ article }: { article: Article }) {
	return (
		<SmartLink
			href={articlePath(article.slug)}
			className={cn(cardBase, "gap-3 p-6")}
		>
			<CardMeta article={article} />
			<h3 className="text-balance font-display text-[1.05rem] font-medium leading-[1.24] tracking-[-0.025em] text-ink">
				{article.title}
			</h3>
			<p className="line-clamp-2 text-[0.88rem] leading-relaxed text-muted">
				{article.description}
			</p>
			<ReadMore />
		</SmartLink>
	);
}
