import { Check } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import type { LandingCard } from "@/content/landing/types";

function CardBullets({ items }: { items: string[] }) {
	return (
		<ul className="mt-1 flex flex-col gap-2.5">
			{items.map((item) => (
				<li
					key={item}
					className="flex items-start gap-2.5 text-[0.92rem] text-ink"
				>
					<Check
						aria-hidden
						className="mt-[3px] h-3.5 w-3.5 shrink-0 text-accent"
						strokeWidth={2.5}
					/>
					<span className="min-w-0 leading-relaxed">{item}</span>
				</li>
			))}
		</ul>
	);
}

function Card({ card, index }: { card: LandingCard; index: string }) {
	return (
		<div className="flex h-full flex-col gap-4 rounded-[1.35rem] border border-hairline bg-card p-8">
			<span className="mono-label text-accent">{index}</span>
			<h3 className="text-balance font-display text-[1.3rem] font-medium leading-[1.15] tracking-[-0.03em] text-ink">
				{card.title}
			</h3>
			{card.body && (
				<p className="text-[0.95rem] leading-relaxed text-muted">{card.body}</p>
			)}
			{card.bullets && <CardBullets items={card.bullets} />}
		</div>
	);
}

/** "How we think about it": numbered cards of prose or check lists. */
export function LandingCards({ cards }: { cards: LandingCard[] }) {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="01"
						label="How we think about it"
						title={
							<>
								The parts that <Accent>actually move it.</Accent>
							</>
						}
					/>
				</Reveal>

				<RevealStagger className="mt-14 grid gap-5 md:grid-cols-2">
					{cards.map((card, position) => (
						<RevealItem key={card.title}>
							<Card card={card} index={String(position + 1).padStart(2, "0")} />
						</RevealItem>
					))}
				</RevealStagger>
			</div>
		</section>
	);
}
