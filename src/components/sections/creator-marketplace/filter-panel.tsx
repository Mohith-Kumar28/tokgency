import { SlidersHorizontal } from "lucide-react";
import { type FilterGroup, filterGroups } from "@/content/creator-marketplace";

function FilterGroupChips({ label, options }: FilterGroup) {
	return (
		<div className="flex min-w-0 flex-col gap-2.5">
			<span className="mono-label text-muted">{label}</span>
			<div className="flex flex-wrap gap-1.5">
				{options.map((option) => (
					<span
						key={option}
						className="rounded-md border border-hairline bg-surface px-2 py-1 text-[0.75rem] text-muted transition-colors hover:border-accent/40 hover:text-ink"
					>
						{option}
					</span>
				))}
			</div>
		</div>
	);
}

/**
 * Preview of the filters available in the campaign wizard. The chips are
 * illustrative, as on the live page: real filtering happens in the app.
 */
export function FilterPanel() {
	return (
		<aside className="min-w-0 rounded-2xl border border-hairline bg-card p-5 shadow-soft lg:sticky lg:top-28">
			<div className="flex items-center gap-2 border-b border-hairline pb-4">
				<SlidersHorizontal
					aria-hidden
					className="h-4 w-4 text-accent"
					strokeWidth={1.75}
				/>
				<span className="text-[0.95rem] font-medium tracking-[-0.01em] text-ink">
					Filters
				</span>
			</div>
			<div className="flex flex-col gap-5 pt-5">
				{filterGroups.map((group) => (
					<FilterGroupChips key={group.label} {...group} />
				))}
			</div>
			<p className="mt-6 border-t border-hairline pt-4 text-[0.78rem] leading-relaxed text-muted">
				Live filtering, availability, and shortlisting run inside the campaign
				wizard.
			</p>
		</aside>
	);
}
