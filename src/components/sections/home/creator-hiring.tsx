import { ArrowUpRight, Layers, Send, ShieldCheck, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { WorkspaceMock } from "@/components/sections/home/workspace-mock";
import { ButtonLink } from "@/components/shared/button-link";
import { type Feature, FeatureList } from "@/components/shared/feature-list";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { SmartLink } from "@/components/shared/smart-link";
import { VideoMarquee } from "@/components/shared/video-marquee";
import { headerActions } from "@/config/site";
import { rosterTiles } from "@/lib/creator-reel";

const FEATURES: Feature[] = [
	{
		icon: Users,
		title: "Vetted before they ever reach search",
		body: "Every creator is reviewed by us, with a public rate card you can read before you commit.",
	},
	{
		icon: Send,
		title: "Brief them in the same workspace",
		body: "Product, goal, audience, hook direction and rights go in once and travel with the campaign.",
	},
	{
		icon: Layers,
		title: "Versioned drafts, timestamped notes",
		body: "Comment on the exact second, request a change, or approve. No DM threads, no lost files.",
	},
	{
		icon: ShieldCheck,
		title: "Rights lock on approval",
		body: "Organic, brand-owned or paid usage with a duration and territory, accepted before work starts.",
	},
];

export function CreatorHiring() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
					<Reveal>
						<div className="flex flex-col gap-8">
							<SectionHeading
								align="left"
								index="04"
								label="Creator hiring"
								title={
									<>
										Hire vetted creators who already make content for{" "}
										<Accent>apps like yours.</Accent>
									</>
								}
								description="Real creators, real output. Brief one in the workspace, watch versioned drafts come back, then approve — rights lock the moment you do, with a duration and a territory."
							/>
							<FeatureList features={FEATURES} />
							<div className="flex flex-col gap-3 sm:flex-row">
								<ButtonLink href="/creator-marketplace">
									Meet the creators
								</ButtonLink>
								<ButtonLink href={headerActions.primary.href} variant="ghost">
									Start a brief
								</ButtonLink>
							</div>
						</div>
					</Reveal>

					<Reveal>
						<WorkspaceMock />
					</Reveal>
				</div>

				<Reveal className="mt-16">
					<div className="mb-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
						<span className="mono-label text-muted">Creators we work with</span>
						<SmartLink
							href="/creator-marketplace"
							className="mono-label group inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
						>
							See the marketplace
							<ArrowUpRight
								aria-hidden
								className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</SmartLink>
					</div>
					<VideoMarquee rows={[rosterTiles]} />
				</Reveal>
			</div>
		</section>
	);
}
