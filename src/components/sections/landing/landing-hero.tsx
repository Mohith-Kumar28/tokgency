import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { HeroGlow } from "@/components/shared/page-hero";
import type { LandingPage } from "@/content/landing/types";

/* Intrinsic size of the landing illustrations, so the frame never shifts. */
const IMAGE_WIDTH = 1400;
const IMAGE_HEIGHT = 933;

type LandingHeroProps = Pick<LandingPage, "slug" | "hero">;

/** Split hero: copy on the left, illustration on the right. */
export function LandingHero({ slug, hero }: LandingHeroProps) {
	return (
		<section className="relative w-full px-4 pb-20 pt-28 md:pb-24 md:pt-36">
			<HeroGlow className="h-[700px]" />

			<div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
				<Reveal>
					<div className="flex flex-col items-start gap-6">
						<span className="mono-label text-muted">{hero.eyebrow}</span>
						<h1 className="text-balance text-[clamp(2.4rem,5.4vw,4.1rem)] font-medium leading-[1] tracking-[-0.045em] text-ink">
							{hero.title}
						</h1>
						<p className="max-w-xl text-[1.08rem] leading-relaxed text-muted md:text-lg">
							{hero.description}
						</p>
						<div className="flex flex-col gap-3 pt-1 sm:flex-row">
							<ButtonLink href="/agency">
								Book a call
								<ArrowUpRight aria-hidden className="h-4 w-4" />
							</ButtonLink>
							<ButtonLink href="/creator-marketplace" variant="ghost">
								Explore creators
							</ButtonLink>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-hairline bg-surface">
						{/* Decorative illustration: it repeats the copy beside it. */}
						<img
							src={`/blog-images/landing-${slug}.webp`}
							alt=""
							width={IMAGE_WIDTH}
							height={IMAGE_HEIGHT}
							loading="eager"
							fetchPriority="high"
							decoding="async"
							className="absolute inset-0 h-full w-full object-cover"
						/>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
