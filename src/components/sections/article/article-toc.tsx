import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/articles";
import { cn } from "@/lib/utils";

/* A heading counts as "current" once it passes this fraction of the viewport. */
const ACTIVE_LINE = 0.32;

function useActiveHeading(items: TocItem[]) {
	const [activeId, setActiveId] = useState(items[0]?.id ?? "");

	useEffect(() => {
		const headings = items
			.map((item) => document.getElementById(item.id))
			.filter((el): el is HTMLElement => el !== null);
		if (headings.length === 0) return;

		const update = () => {
			const line = window.innerHeight * ACTIVE_LINE;
			let current = headings[0].id;
			for (const heading of headings) {
				if (heading.getBoundingClientRect().top > line) break;
				current = heading.id;
			}
			setActiveId(current);
		};

		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	}, [items]);

	return activeId;
}

/** Sticky "On this page" list that highlights the section being read. */
export function ArticleToc({ items }: { items: TocItem[] }) {
	const activeId = useActiveHeading(items);

	return (
		<nav className="flex flex-col gap-1" aria-label="On this page">
			<p className="mono-label mb-3 text-muted">On this page</p>
			{items.map((item) => {
				const active = item.id === activeId;
				return (
					<a
						key={item.id}
						href={`#${item.id}`}
						aria-current={active ? "location" : undefined}
						className={cn(
							"group flex items-start gap-2.5 py-1.5 text-[0.85rem] leading-snug transition-colors duration-200",
							item.level === 3 && "pl-3",
							active ? "text-ink" : "text-muted hover:text-ink",
						)}
					>
						<span
							aria-hidden
							className={cn(
								"mt-[0.5em] h-px shrink-0 transition-all duration-300",
								active ? "w-4 bg-accent" : "w-2 bg-hairline group-hover:w-3",
							)}
						/>
						<span className="min-w-0">{item.text}</span>
					</a>
				);
			})}
		</nav>
	);
}
