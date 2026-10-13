import { Check } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { ShieldNote } from "@/components/shared/shield-note";
import { guardrails } from "@/content/how-it-works";

export function Guardrails() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-5xl">
				<Reveal>
					<SectionHeading
						index="03"
						label="Built-in guardrails"
						title={
							<>
								Compliance is part of <Accent>the workflow.</Accent>
							</>
						}
						description="Not an afterthought bolted on at the end."
					/>
				</Reveal>

				<RevealStagger className="mx-auto mt-14 flex max-w-3xl min-w-0 flex-col rounded-2xl border border-hairline bg-card p-2 shadow-soft">
					{guardrails.map((rule) => (
						<RevealItem key={rule}>
							<div className="flex items-start gap-4 border-b border-hairline px-5 py-5 last:border-0">
								<Check
									aria-hidden
									className="mt-[3px] h-4 w-4 shrink-0 text-accent"
									strokeWidth={2.25}
								/>
								<span className="min-w-0 text-[0.95rem] leading-relaxed text-ink">
									{rule}
								</span>
							</div>
						</RevealItem>
					))}
				</RevealStagger>

				<Reveal>
					<ShieldNote className="mt-8">
						The accounts we build are handed over to you and never shared with
						another brand, reused or resold. Tokgency is not affiliated with,
						endorsed by, or an official partner of TikTok.
					</ShieldNote>
				</Reveal>
			</div>
		</section>
	);
}
