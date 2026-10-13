import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { type Benefit, benefits } from "@/content/creators";

type BenefitCardProps = { benefit: Benefit; index: string };

function BenefitCard({ benefit, index }: BenefitCardProps) {
	const { icon: Icon, title, body } = benefit;

	return (
		<div className="flex h-full min-w-0 flex-col gap-4 bg-card p-7">
			<div className="flex items-center justify-between">
				<span className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-surface text-accent">
					<Icon aria-hidden className="h-5 w-5" strokeWidth={1.75} />
				</span>
				<span className="mono-label text-accent">{index}</span>
			</div>
			<div>
				<h3 className="text-[1.05rem] font-medium tracking-[-0.01em] text-ink">
					{title}
				</h3>
				<p className="mt-2 text-[0.9rem] leading-relaxed text-muted">{body}</p>
			</div>
		</div>
	);
}

export function Benefits() {
	return (
		<section className="w-full border-y border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="01"
						label="What you get"
						title={
							<>
								Paid work with the terms <Accent>written down.</Accent>
							</>
						}
						description="The fee, the deliverables, the timeline and the usage rights are on the brief before you accept it."
					/>
				</Reveal>

				<RevealStagger className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
					{benefits.map((benefit, position) => (
						<RevealItem key={benefit.title}>
							<BenefitCard
								benefit={benefit}
								index={String(position + 1).padStart(2, "0")}
							/>
						</RevealItem>
					))}
				</RevealStagger>
			</div>
		</section>
	);
}
