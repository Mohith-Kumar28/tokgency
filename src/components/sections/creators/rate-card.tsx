import { Reveal } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { type RateCardField, rateCardFields } from "@/content/creators";

function FieldRow({ label, detail }: RateCardField) {
	return (
		<div className="flex flex-col gap-1 border-b border-hairline py-3.5">
			<span className="text-[0.9rem] font-medium text-ink">{label}</span>
			<span className="text-[0.82rem] leading-relaxed text-muted">
				{detail}
			</span>
		</div>
	);
}

export function RateCard() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="03"
						label="Who's already here"
						title={
							<>
								Public rate cards, <Accent>set by the creator.</Accent>
							</>
						}
						description="Approved creators appear in the marketplace with their own rate, turnaround and content styles — this is the card brands read before they brief you."
					/>
				</Reveal>

				<Reveal className="mt-14">
					<div className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-card p-7 md:p-9">
						<span className="mono-label text-muted">
							What your card shows a brand
						</span>
						<div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
							{rateCardFields.map((field) => (
								<FieldRow key={field.label} {...field} />
							))}
						</div>
					</div>
				</Reveal>

				<Reveal>
					<p className="mx-auto mt-8 max-w-2xl text-center text-[0.85rem] leading-relaxed text-muted">
						Your email, phone number and payout details are never published on a
						public page.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
