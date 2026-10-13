import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { ArticleCard } from "@/components/sections/resources/article-card";
import {
	ALL_CATEGORIES,
	type Article,
	type CategoryCount,
	countCategories,
} from "@/lib/articles";
import { cn } from "@/lib/utils";

/* Cards past the first row enter together instead of trailing down the page. */
const STAGGER_S = 0.04;
const MAX_STAGGERED = 5;

type FilterChipProps = {
	category: CategoryCount;
	active: boolean;
	onSelect: () => void;
};

function FilterChip({ category, active, onSelect }: FilterChipProps) {
	return (
		<button
			type="button"
			onClick={onSelect}
			aria-pressed={active}
			className={cn(
				"mono-label inline-flex items-center gap-2 rounded-full border px-3.5 py-2 transition-colors duration-200",
				active
					? "border-accent/40 bg-accent/10 text-accent"
					: "border-hairline text-muted hover:border-ink/25 hover:text-ink",
			)}
		>
			{category.name}
			<span className={active ? "text-accent/60" : "text-muted/50"}>
				{category.count}
			</span>
		</button>
	);
}

/** Category filter plus the grid of articles it controls. */
export function ResourceBrowser({ articles }: { articles: Article[] }) {
	const categories = useMemo(() => countCategories(articles), [articles]);
	const [selected, setSelected] = useState(ALL_CATEGORIES);

	const visible =
		selected === ALL_CATEGORIES
			? articles
			: articles.filter((article) => article.category === selected);

	return (
		<section className="w-full px-4 py-20 md:py-24">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					{/* biome-ignore lint/a11y/useSemanticElements: a fieldset would add default chrome; the group role names the control set */}
					<div
						role="group"
						aria-label="Filter guides by category"
						className="flex flex-wrap items-center justify-center gap-2"
					>
						{categories.map((category) => (
							<FilterChip
								key={category.name}
								category={category}
								active={category.name === selected}
								onSelect={() => setSelected(category.name)}
							/>
						))}
					</div>
				</Reveal>

				<div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{visible.map((article, index) => (
						<Reveal
							key={article.slug}
							delay={STAGGER_S * Math.min(index, MAX_STAGGERED)}
						>
							<ArticleCard article={article} />
						</Reveal>
					))}
				</div>

				{visible.length === 0 && (
					<p className="mt-16 text-center text-[0.95rem] text-muted">
						Nothing filed under {selected} yet.
					</p>
				)}
			</div>
		</section>
	);
}
