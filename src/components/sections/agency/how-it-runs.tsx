import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { type Pillar, pillars } from "@/content/agency";

function PillarCard({ pillar }: { pillar: Pillar }) {
	const Icon = pillar.icon;

	return (
		<div className="flex h-full min-w-0 flex-col gap-3 rounded-2xl border border-hairline bg-card p-6">
			<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
				<Icon aria-hidden className="h-[18px] w-[18px]" strokeWidth={1.75} />
			</span>
			<h3 className="text-[0.98rem] font-medium tracking-[-0.01em] text-ink">
				{pillar.title}
			</h3>
			<p className="text-[0.875rem] leading-relaxed text-muted">
				{pillar.body}
			</p>
		</div>
	);
}

export function HowItRuns() {
	return (
		<section className="w-full border-t border-hairline px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="02"
						label="How it runs"
						title={
							<>
								A managed engine, <Accent>not another dashboard.</Accent>
							</>
						}
						description="You keep approval control and the rights. We carry the operating load."
					/>
				</Reveal>

				<RevealStagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{pillars.map((pillar) => (
						<RevealItem key={pillar.title}>
							<PillarCard pillar={pillar} />
						</RevealItem>
					))}
				</RevealStagger>
			</div>
		</section>
	);
}
