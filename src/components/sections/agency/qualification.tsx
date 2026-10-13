import { ArrowUpRight, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { Accent, Eyebrow } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { qualificationQuestions } from "@/content/agency";

export function Qualification() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto grid w-full max-w-6xl items-start gap-14 lg:grid-cols-2">
				<Reveal>
					<div className="flex flex-col gap-6">
						<Eyebrow index="04" label="Qualification" align="left" />
						<h2 className="text-balance text-[clamp(1.85rem,3.4vw,2.6rem)] font-medium leading-[1.04] tracking-[-0.035em] text-ink">
							What we ask before <Accent>a strategy call.</Accent>
						</h2>
						<p className="max-w-lg text-[1rem] leading-relaxed text-muted">
							Answer a few questions so we can scope the right program. If it’s
							a fit we book the call, then follow up with a proposal, scope,
							creator and content volume, strategy cadence, and an invoice
							schedule.
						</p>
						<div className="pt-1">
							<ButtonLink href={siteConfig.bookingUrl} external>
								Start the qualification form
								<ArrowUpRight aria-hidden className="h-4 w-4" />
							</ButtonLink>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<div className="flex flex-col rounded-2xl border border-hairline bg-card p-7">
						{qualificationQuestions.map((question) => (
							<div
								key={question}
								className="flex items-start gap-3 border-b border-hairline py-3.5 first:pt-0 last:border-0 last:pb-0"
							>
								<CircleCheck
									aria-hidden
									className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent"
									strokeWidth={1.75}
								/>
								<span className="text-[0.95rem] leading-snug text-ink">
									{question}
								</span>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
