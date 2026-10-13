import { ButtonLink } from "@/components/shared/button-link";
import { HeroGlow } from "@/components/shared/page-hero";
import { Accent } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";

/* Local hero: the live page renders this one without reveal animations and
   with its own h1 scale, so the shared PageHero does not fit. */
export function Hero() {
	return (
		<section className="relative w-full px-4 pb-16 pt-28 md:pb-20 md:pt-36">
			<HeroGlow size="compact" />

			<div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
				<span className="mono-label text-muted">
					TikTok Shop · affiliates · UGC · LIVE
				</span>
				<h1 className="mt-6 text-balance text-[clamp(2.6rem,6.4vw,4.6rem)] font-medium leading-[0.98] tracking-[-0.045em] text-ink">
					Creators who <Accent>sell</Accent>, not just film.
				</h1>
				<p className="mt-7 max-w-2xl text-[1.05rem] leading-relaxed text-muted md:text-[1.15rem]">
					We help brands sell faster, sell more, and sell more often on TikTok
					Shop. Shortlist from a network of{" "}
					<span className="hl">50,000 vetted creators</span>, brief the ones who
					already move product in your category, and track what each one
					actually earns.
				</p>
				<div className="mt-9 flex flex-col gap-3 sm:flex-row">
					<ButtonLink href={siteConfig.bookingUrl} external>
						Book a demo call
					</ButtonLink>
					<ButtonLink href="/creator-marketplace" variant="ghost">
						See the creator network
					</ButtonLink>
				</div>
				<p className="mono-label mt-7 text-muted">
					Fifteen minutes · No deck · We tell you if it will not work
				</p>
			</div>
		</section>
	);
}
