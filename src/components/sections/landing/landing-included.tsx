import { Check } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";

/** "What's included": one bordered panel of ticked deliverables. */
export function LandingIncluded({ items }: { items: string[] }) {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-5xl">
				<Reveal>
					<SectionHeading
						index="02"
						label="What's included"
						title={
							<>
								Everything runs <Accent>end to end.</Accent>
							</>
						}
					/>
				</Reveal>

				<RevealStagger className="mx-auto mt-14 flex max-w-3xl flex-col rounded-2xl border border-hairline bg-card p-2">
					{items.map((item) => (
						<RevealItem key={item}>
							<div className="flex items-start gap-4 border-b border-hairline px-5 py-5 last:border-0">
								<Check
									aria-hidden
									className="mt-[3px] h-4 w-4 shrink-0 text-accent"
									strokeWidth={2.25}
								/>
								<span className="min-w-0 text-[0.95rem] leading-relaxed text-ink">
									{item}
								</span>
							</div>
						</RevealItem>
					))}
				</RevealStagger>
			</div>
		</section>
	);
}
