import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { JobMockup } from "@/components/sections/tiktok-shop/job-mocks";
import {
	Accent,
	Eyebrow,
	SectionHeading,
} from "@/components/shared/section-heading";
import { type Job, jobs } from "@/content/tiktok-shop";
import { cn, ordinal } from "@/lib/utils";

type JobRowProps = {
	job: Job;
	index: string;
	/** Puts the mock-up on the right from the md breakpoint. */
	flipped: boolean;
	/** Rule and spacing above every row but the first. */
	divided: boolean;
};

function JobRow({ job, index, flipped, divided }: JobRowProps) {
	return (
		<div
			className={cn(
				"grid items-center gap-9 md:grid-cols-2 md:gap-14 lg:gap-20",
				divided && "mt-16 border-t border-hairline pt-16 md:mt-24 md:pt-24",
			)}
		>
			<div className={cn(flipped && "md:order-2")}>
				<JobMockup mock={job.mock} />
			</div>

			<div
				className={cn("flex min-w-0 flex-col gap-5", flipped && "md:order-1")}
			>
				<Eyebrow index={index} label={job.label} align="left" />
				<h3 className="text-balance font-display text-[clamp(1.7rem,3.2vw,2.4rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
					{job.title.lead} <Accent>{job.title.accent}</Accent>
				</h3>
				<p className="max-w-[46ch] text-[1.02rem] leading-relaxed text-muted">
					{job.body}
				</p>
				<ul className="flex flex-col gap-2.5">
					{job.points.map((point) => (
						<li
							key={point}
							className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink/85"
						>
							<Check
								aria-hidden
								className="mt-[5px] h-4 w-4 shrink-0 text-accent"
								strokeWidth={2.5}
							/>
							{point}
						</li>
					))}
				</ul>
				<p className="max-w-[46ch] border-l-2 border-hairline pl-4 text-[0.9rem] leading-relaxed text-muted">
					{job.aside}
				</p>
			</div>
		</div>
	);
}

export function WhatWeHandle() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="02"
						label="What we handle"
						title={
							<>
								Hunting, strategy, <Accent>and the money.</Accent>
							</>
						}
						description="Three jobs sit between a product and a TikTok Shop channel that actually sells. Take one, take all three, or watch us run them and copy it."
					/>
				</Reveal>

				<div className="mt-16 md:mt-24">
					<div className="flex flex-col">
						{jobs.map((job, position) => (
							<Reveal key={job.mock}>
								<JobRow
									job={job}
									index={ordinal(position)}
									flipped={position % 2 === 1}
									divided={position > 0}
								/>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
