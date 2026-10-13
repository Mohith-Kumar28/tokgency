import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SmartLink } from "@/components/shared/smart-link";
import type { Article } from "@/lib/articles";

function MetaDivider() {
	return <span className="h-px w-5 bg-hairline" aria-hidden />;
}

export function ArticleHeader({ article }: { article: Article }) {
	return (
		<header className="relative w-full px-4 pb-10 pt-28 md:pt-36">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[540px]"
				style={{
					background:
						"radial-gradient(1000px 420px at 50% -160px, var(--accent-soft) 0%, transparent 70%)",
				}}
			/>
			<div className="mx-auto w-full max-w-3xl">
				<Reveal>
					<SmartLink
						href="/resources"
						className="mono-label group inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
					>
						<ArrowLeft
							aria-hidden
							className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
						/>
						All resources
					</SmartLink>
				</Reveal>
				<Reveal>
					<h1 className="mt-7 text-balance text-[clamp(2.1rem,4.6vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.042em] text-ink">
						{article.title}
					</h1>
				</Reveal>
				<Reveal>
					<p className="mt-6 text-[1.08rem] leading-relaxed text-muted md:text-lg">
						{article.description}
					</p>
				</Reveal>
				<Reveal>
					<div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-hairline pt-5">
						<span className="mono-label text-accent">{article.category}</span>
						<MetaDivider />
						<time dateTime={article.date} className="mono-label text-muted">
							{article.dateLabel}
						</time>
						<MetaDivider />
						<span className="mono-label text-muted">
							{article.readMinutes} min read
						</span>
					</div>
				</Reveal>
			</div>
		</header>
	);
}

export function ArticleCover({ article }: { article: Article }) {
	return (
		<div className="w-full px-4 pb-4 pt-6">
			<div className="mx-auto w-full max-w-4xl">
				<Reveal>
					<div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] border border-hairline bg-surface">
						<img
							src={article.image}
							alt=""
							fetchPriority="high"
							decoding="async"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				</Reveal>
			</div>
		</div>
	);
}
