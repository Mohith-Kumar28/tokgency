import { Reveal } from "@/components/motion/reveal";
import { CallBand } from "@/components/shared/call-band";
import { FaqList } from "@/components/shared/faq-list";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { howItWorksFaqs } from "@/content/how-it-works";

export function HowItWorksFaq() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="04"
						label="FAQ"
						title={
							<>
								Getting <Accent>started.</Accent>
							</>
						}
						band={<CallBand eyebrow="Not sure which route fits?" />}
					/>
				</Reveal>

				<Reveal className="mx-auto mt-12 max-w-3xl">
					<FaqList items={howItWorksFaqs} />
				</Reveal>
			</div>
		</section>
	);
}
