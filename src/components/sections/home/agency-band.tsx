import { Reveal } from "@/components/motion/reveal";
import {
	ContrastButtonLink,
	ContrastOutlineLink,
} from "@/components/shared/contrast-buttons";
import { Accent, SectionTitle } from "@/components/shared/section-heading";

const tile = "border border-white/10 bg-white/[0.04]";

export function AgencyBand() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<div className="overflow-hidden rounded-[2.5rem] bg-contrast p-8 md:p-14">
						<div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
							<div className="flex flex-col gap-7">
								<div className="flex flex-col gap-5">
									<div className="flex items-center gap-3">
										<span className="mono-label text-on-contrast">07</span>
										<span className="h-px w-7 bg-white/25" aria-hidden />
										<span className="mono-label text-on-contrast/60">
											Agency program
										</span>
									</div>
									<SectionTitle className="text-on-contrast">
										We don't hope for virality. <Accent>We engineer it.</Accent>
									</SectionTitle>
									<p className="max-w-xl text-[1.05rem] leading-relaxed text-on-contrast/65 md:text-lg">
										Tokgency runs the strategy, the creative, the creator
										program, the account network, the posting and the iteration.
										You get a shared roadmap, weekly reporting, and a team
										accountable for the work.
									</p>
								</div>

								<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
									<ContrastButtonLink href="/agency">
										Explore the agency program
									</ContrastButtonLink>
									<ContrastOutlineLink href="/agency">
										Book a qualification call
									</ContrastOutlineLink>
								</div>
							</div>

							<div className="flex flex-col gap-4">
								<div className={`rounded-[1.75rem] p-8 text-center ${tile}`}>
									<p className="mono-label text-on-contrast/50">Track record</p>
									<p className="mt-3 text-[clamp(3.6rem,10vw,6rem)] font-medium leading-[0.9] tracking-[-0.05em] text-accent">
										1B+
									</p>
									<p className="mono-label mt-4 text-on-contrast/60">
										Views generated to date
									</p>
									<p className="mx-auto mt-4 max-w-[34ch] text-xs leading-relaxed text-on-contrast/40">
										Across the short-form programs our team has run. Past
										performance is not a promise of reach for any future
										campaign.
									</p>
								</div>

								<div
									className={`flex items-center justify-between gap-4 rounded-[1.25rem] px-6 py-5 ${tile}`}
								>
									<div className="flex flex-col">
										<span className="mono-label text-on-contrast/50">
											Starting from
										</span>
										<span className="mt-1.5 text-[1.9rem] font-medium leading-none tracking-[-0.035em] text-on-contrast">
											$10,000
										</span>
									</div>
									<span className="max-w-[16ch] text-right text-xs leading-relaxed text-on-contrast/50">
										per month · qualification call required
									</span>
								</div>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
