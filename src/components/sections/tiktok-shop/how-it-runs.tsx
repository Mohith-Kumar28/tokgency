import { ShieldCheck } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { steps } from "@/content/tiktok-shop";
import { ordinal } from "@/lib/utils";

export function HowItRuns() {
	return (
		<section className="w-full border-t border-hairline px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="04"
						label="How it runs"
						title={
							<>
								From the call to <Accent>the first post.</Accent>
							</>
						}
						description="No onboarding project, no six-week discovery. The shortlist is usually the second thing you see."
					/>
				</Reveal>

				<RevealStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
					{steps.map((step, position) => (
						<RevealItem key={step.title}>
							<div className="flex min-w-0 flex-col gap-3 border-t border-hairline pt-5">
								<span className="mono-label text-accent">
									{ordinal(position)}
								</span>
								<h3 className="text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
									{step.title}
								</h3>
								<p className="text-[0.93rem] leading-relaxed text-muted">
									{step.body}
								</p>
							</div>
						</RevealItem>
					))}
				</RevealStagger>

				<Reveal>
					<div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-3 rounded-2xl border border-hairline bg-card px-6 py-6 text-center">
						<span className="mono-label flex items-center gap-2 text-accent">
							<ShieldCheck
								aria-hidden
								className="h-3.5 w-3.5"
								strokeWidth={1.75}
							/>{" "}
							How we keep this clean
						</span>
						<p className="max-w-xl text-[0.9rem] leading-relaxed text-muted">
							Creators are reviewed by a person before they can be booked, rates
							are agreed up front, and paid-partnership disclosure is required
							on every post. Nothing goes live without your approval.
						</p>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
