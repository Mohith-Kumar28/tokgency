import { Reveal } from "@/components/motion/reveal";
import { FaqList } from "@/components/shared/faq-list";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { homeFaqs } from "@/content/home";

export function HomeFaq() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="08"
						label="Questions & compliance"
						title={
							<>
								Clear on what we do — <Accent>and don't.</Accent>
							</>
						}
						description="What you own, what you control, and what we will never promise you."
					/>
				</Reveal>

				<Reveal className="mx-auto mt-12 max-w-3xl">
					<FaqList items={homeFaqs} />
				</Reveal>
			</div>
		</section>
	);
}
