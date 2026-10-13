import { Reveal } from "@/components/motion/reveal";
import { ContrastButtonLink } from "@/components/shared/contrast-buttons";
import { Accent } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

export function Eligibility() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-5xl">
				<Reveal>
					<div className="overflow-hidden rounded-[2rem] bg-contrast px-8 py-14 text-center md:px-14 md:py-16">
						<p className="mono-label text-on-contrast/50">Eligibility</p>
						<p className="mx-auto mt-5 max-w-2xl text-balance text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.03em] text-on-contrast">
							For teams investing <Accent>$10,000+/month</Accent> in TikTok
							growth.
						</p>
						<p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-on-contrast/60">
							The agency program is a high-touch managed engagement, not a tool
							you run. It starts with a qualification form and a strategy call,
							then a scoped proposal and an invoice schedule.
						</p>
						<div className="mt-9 flex justify-center">
							<ContrastButtonLink href={siteConfig.bookingUrl} external>
								Book a qualification call
							</ContrastButtonLink>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
