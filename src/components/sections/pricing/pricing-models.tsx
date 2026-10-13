import { Reveal } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { type Offering, offerings } from "@/content/pricing";

const COLUMN_LABELS = ["Offering", "Pricing model", "Detail"];

function OfferingRow({ offering }: { offering: Offering }) {
	return (
		<div className="grid grid-cols-1 gap-2 border-b border-hairline px-7 py-6 last:border-0 md:grid-cols-[1.05fr_1.3fr_1.35fr] md:items-center md:gap-6">
			<span className="min-w-0 text-[1.02rem] font-medium tracking-[-0.015em] text-ink">
				{offering.name}
			</span>
			<span className="min-w-0 text-[0.95rem] font-medium text-accent">
				{offering.model}
			</span>
			<span className="min-w-0 text-[0.9rem] leading-relaxed text-muted">
				{offering.detail}
			</span>
		</div>
	);
}

export function PricingModels() {
	return (
		<section className="w-full border-y border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-5xl">
				<Reveal>
					<SectionHeading
						index="01"
						label="Pricing models"
						title={
							<>
								Six things you can buy, <Accent>priced per order.</Accent>
							</>
						}
						description="Everything below is charged when you order it. Nothing renews on its own except the agency engagement."
					/>
				</Reveal>

				<Reveal className="mt-14">
					<div className="overflow-hidden rounded-[1.5rem] border border-hairline bg-card">
						<div className="hidden grid-cols-[1.05fr_1.3fr_1.35fr] gap-6 border-b border-hairline bg-surface px-7 py-4 md:grid">
							{COLUMN_LABELS.map((label) => (
								<span key={label} className="mono-label text-muted">
									{label}
								</span>
							))}
						</div>
						{offerings.map((offering) => (
							<OfferingRow key={offering.name} offering={offering} />
						))}
					</div>
				</Reveal>

				<Reveal>
					<p className="mx-auto mt-8 max-w-2xl text-center text-[0.85rem] leading-relaxed text-muted">
						Accounts are built for your brand and handed over to you — never
						shared with another client, reused or resold. We don’t promise reach
						or any algorithmic advantage.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
