import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { HandNote } from "@/components/shared/scribbles";
import { Accent } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

export function DemoCall() {
	return (
		<section className="w-full border-y border-hairline bg-surface px-4 py-16 md:py-20">
			<div className="mx-auto w-full max-w-4xl">
				<Reveal>
					<div className="flex flex-col items-center gap-5 rounded-[2rem] border border-hairline bg-card px-6 py-10 text-center shadow-soft md:px-12">
						<span className="mono-label text-muted">
							Not sure which route fits
						</span>
						<h2 className="text-balance text-[clamp(1.55rem,3.4vw,2.3rem)] font-medium leading-[1.06] tracking-[-0.035em] text-ink">
							Confused? <Accent>Book a demo call</Accent> with us.
						</h2>
						<p className="max-w-md text-[0.98rem] leading-relaxed text-muted">
							Fifteen minutes with the person who runs the work. We’ll tell you
							which route suits your product, or tell you it isn’t a fit.
						</p>
						<div className="flex flex-col items-center gap-3 pt-1 sm:flex-row sm:gap-5">
							<ButtonLink href={siteConfig.bookingUrl} external>
								Book a demo call
							</ButtonLink>
							<span className="hidden sm:inline-block">
								<HandNote rotate={-4}>15 min, no deck</HandNote>
							</span>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
