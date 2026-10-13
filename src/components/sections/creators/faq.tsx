import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { FaqList } from "@/components/shared/faq-list";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { creatorFaqs } from "@/content/creators";

export function CreatorsFaq() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="04"
						label="FAQ"
						title={
							<>
								Creator <Accent>questions.</Accent>
							</>
						}
					/>
				</Reveal>

				<Reveal className="mx-auto mt-12 max-w-3xl">
					<FaqList items={creatorFaqs} />
				</Reveal>

				<Reveal>
					<div className="mx-auto mt-10 flex max-w-2xl items-start justify-center gap-2.5 text-center text-[0.85rem] leading-relaxed text-muted">
						<ShieldCheck
							aria-hidden
							className="mt-[3px] h-4 w-4 shrink-0 text-accent"
							strokeWidth={1.75}
						/>
						<span>
							Tokgency is an independent agency and platform. We are not
							affiliated with, endorsed by, or an official partner of TikTok,
							and paid partnerships are disclosed as platform rules and law
							require.
						</span>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
