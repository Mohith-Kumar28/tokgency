import { ShieldCheck } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { FilterPanel } from "@/components/sections/creator-marketplace/filter-panel";
import { Eyebrow } from "@/components/shared/section-heading";
import {
	type SourcingCategory,
	sourcingCategories,
} from "@/content/creator-marketplace";

function CategoryRow({ name, depth }: SourcingCategory) {
	return (
		<div className="flex items-center gap-4 border-b border-hairline py-3">
			<span className="min-w-0 flex-1 truncate text-[0.95rem] text-ink">
				{name}
			</span>
			<span className="h-1 w-24 shrink-0 overflow-hidden rounded-full bg-surface">
				<span
					className="block h-full rounded-full bg-accent/70"
					style={{ width: `${depth}%` }}
				/>
			</span>
		</div>
	);
}

function SourcingCategories() {
	return (
		<div className="rounded-2xl border border-hairline bg-card p-7 md:p-9">
			<span className="mono-label text-muted">Categories we source in</span>
			<h3 className="mt-3 font-serif text-[clamp(1.5rem,2.8vw,2.1rem)] font-normal not-italic leading-[1.1] tracking-[-0.015em] text-ink">
				50,000 vetted creators, deepest where TikTok Shop converts.
			</h3>
			<p className="mt-3 max-w-[52ch] text-[0.95rem] leading-relaxed text-muted">
				Ordered by how much of our sourcing pool sits in each category. Beauty
				and health are the deepest, which is where short-form commerce is
				densest.
			</p>
			<div className="mt-8">
				<RevealStagger className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
					{sourcingCategories.map((category) => (
						<RevealItem key={category.name}>
							<CategoryRow {...category} />
						</RevealItem>
					))}
				</RevealStagger>
			</div>
		</div>
	);
}

function MatchingNote() {
	return (
		<div className="mt-4 flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-card px-6 py-6 text-center">
			<span className="mono-label flex items-center gap-2 text-accent">
				<ShieldCheck aria-hidden className="h-3.5 w-3.5" strokeWidth={1.75} />{" "}
				How matching works
			</span>
			<p className="max-w-xl text-[0.9rem] leading-relaxed text-muted">
				Every creator is reviewed by a person before they can be booked, and a
				rate card is agreed before a brief goes out. Public pages never carry an
				email, phone number, or any other private contact detail.
			</p>
		</div>
	);
}

export function Roster() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-20 md:py-28">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<Eyebrow index="01" label="The roster" align="left" />
				</Reveal>

				<div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-[248px_1fr] lg:gap-10">
					<Reveal>
						<FilterPanel />
					</Reveal>

					<div className="min-w-0">
						<Reveal>
							<SourcingCategories />
						</Reveal>
						<Reveal>
							<MatchingNote />
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}
