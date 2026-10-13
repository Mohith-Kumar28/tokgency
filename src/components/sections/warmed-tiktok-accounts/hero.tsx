import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { HeroGlow } from "@/components/shared/page-hero";
import { HandNote } from "@/components/shared/scribbles";
import { Accent } from "@/components/shared/section-heading";
import { headerActions, siteConfig } from "@/config/site";

/*
 * Local copy of the shared PageHero layout: this page stretches the buttons
 * full-width on mobile and adds a handwritten note under them, neither of
 * which PageHero's slots can express.
 */
export function Hero() {
	return (
		<section className="relative w-full px-4 pb-20 pt-28 md:pb-24 md:pt-36">
			<HeroGlow />

			<div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
				<Reveal>
					<span className="mono-label text-muted">
						Warmed US TikTok accounts
					</span>
				</Reveal>
				<Reveal>
					<h1 className="mt-6 text-balance text-[clamp(2.6rem,6.2vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-ink">
						US TikTok accounts, built for your brand and{" "}
						<Accent>handed to you.</Accent>
					</h1>
				</Reveal>
				<Reveal>
					<p className="mx-auto mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-muted md:text-xl">
						We create the accounts from scratch in the U.S. on{" "}
						<span className="hl">real phones with real local SIMs</span>, warm
						them inside your niche, then hand them over. Post your own content
						through them, or leave the posting with us and approve every video.
					</p>
				</Reveal>
				<Reveal className="mt-9 w-full">
					<div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
						<ButtonLink href={headerActions.primary.href}>
							Order US accounts
						</ButtonLink>
						<ButtonLink href={siteConfig.bookingUrl} variant="ghost" external>
							Book a demo call
						</ButtonLink>
					</div>
				</Reveal>
				<Reveal className="mt-4 hidden sm:block">
					<HandNote>one brand per account</HandNote>
				</Reveal>
				<Reveal className="mt-7">
					<span className="mono-label text-muted">
						Logins handed over · One brand per account · No promise of reach
					</span>
				</Reveal>
			</div>
		</section>
	);
}
