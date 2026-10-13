import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { appUrl } from "@/config/site";
import { joinSteps } from "@/content/creators";

type StepRowProps = { index: string; children: string };

function StepRow({ index, children }: StepRowProps) {
	return (
		<div className="flex items-start gap-5 border-b border-hairline px-5 py-6 last:border-0">
			<span className="mono-label mt-1 shrink-0 text-accent">{index}</span>
			<p className="min-w-0 text-[0.98rem] leading-relaxed text-ink">
				{children}
			</p>
		</div>
	);
}

export function JoiningSteps() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
					<Reveal>
						<div className="flex flex-col gap-8 lg:sticky lg:top-28">
							<SectionHeading
								align="left"
								index="02"
								label="From application to paid"
								title={
									<>
										How joining <Accent>works.</Accent>
									</>
								}
								description="Five steps, all of them visible to you. Nothing about the fee or the rights is decided after you have shot the video."
							/>
							<div className="flex flex-col gap-3 sm:flex-row">
								<ButtonLink href={appUrl("/portal/apply")} external>
									Apply now
									<ArrowUpRight aria-hidden className="h-4 w-4" />
								</ButtonLink>
								<ButtonLink href="/creator-marketplace" variant="ghost">
									See the marketplace
								</ButtonLink>
							</div>
						</div>
					</Reveal>

					<RevealStagger className="flex min-w-0 flex-col rounded-2xl border border-hairline bg-card p-2 shadow-soft">
						{joinSteps.map((step, position) => (
							<RevealItem key={step}>
								<StepRow index={String(position + 1).padStart(2, "0")}>
									{step}
								</StepRow>
							</RevealItem>
						))}
					</RevealStagger>
				</div>
			</div>
		</section>
	);
}
