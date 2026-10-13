import { Reveal } from "@/components/motion/reveal";
import { CallBand } from "@/components/shared/call-band";
import { FaqList } from "@/components/shared/faq-list";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { pricingFaqs } from "@/content/pricing";

export function PricingFaq() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="03"
						label="FAQ"
						title={
							<>
								Pricing <Accent>questions.</Accent>
							</>
						}
						band={<CallBand eyebrow="Still weighing it up?" />}
					/>
				</Reveal>

				<Reveal className="mx-auto mt-12 max-w-3xl">
					<FaqList items={pricingFaqs} />
				</Reveal>
			</div>
		</section>
	);
}
