import { Reveal } from "@/components/motion/reveal";
import { HeroShowcase } from "@/components/sections/home/hero-showcase";
import { ButtonLink } from "@/components/shared/button-link";
import { Circled, HandNote } from "@/components/shared/scribbles";
import { Accent } from "@/components/shared/section-heading";
import { headerActions } from "@/config/site";

export function Hero() {
	return (
		<section className="relative w-full px-4 pb-16 pt-28 md:pb-20 md:pt-36">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
				style={{
					background:
						"radial-gradient(1100px 520px at 50% -140px, var(--accent-soft) 0%, transparent 68%)",
				}}
			/>

			<div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
				<Reveal>
					<span className="mono-label text-muted">
						For consumer apps · SaaS · tech brands
					</span>
				</Reveal>

				<Reveal>
					<h1 className="mt-6 text-balance text-[clamp(2.7rem,6.6vw,5rem)] font-medium leading-[0.98] tracking-[-0.045em] text-ink">
						Build your viral growth channel <Accent>in the U.S.</Accent>
					</h1>
				</Reveal>

				<Reveal>
					<p className="mx-auto mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-muted md:text-xl">
						Scale your software brand or app with{" "}
						<span className="hl">warmed-up</span> US TikTok accounts and vetted
						creators — on real phones, real local SIMs, run by real people on
						our team.
					</p>
				</Reveal>

				<Reveal>
					<p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-ink">
						We’ve done <Circled>1B+ views</Circled> for the brands we run
						short-form for.
					</p>
				</Reveal>

				<Reveal className="mt-9 w-full">
					<div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
						<ButtonLink href={headerActions.primary.href}>
							Start a campaign
						</ButtonLink>
						<ButtonLink href="/agency" variant="ghost">
							Or have us run it
						</ButtonLink>
					</div>
				</Reveal>

				<Reveal className="mt-4 hidden sm:block">
					<HandNote>no sales call, start today</HandNote>
				</Reveal>

				<Reveal className="mt-7">
					<span className="mono-label text-muted">
						Self-serve from day one · Managed agency from $10k/mo · Rights built
						in
					</span>
				</Reveal>
			</div>

			<div className="mt-16 md:mt-20">
				<HeroShowcase />
			</div>
		</section>
	);
}
