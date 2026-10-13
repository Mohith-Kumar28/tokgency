import type { ReactNode } from "react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import {
	ApprovalMock,
	BriefMock,
	CreatorMatchMock,
	DraftMock,
	PublishingMock,
	ReportingMock,
} from "@/components/sections/home/step-mocks";
import { MiniScreen } from "@/components/shared/mini-ui";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { type LoopStepId, loopSteps } from "@/content/how-it-works";

/* The same miniature mocks as the home page's growth loop. */
const MOCKS: Record<LoopStepId, ReactNode> = {
	brief: <BriefMock />,
	match: <CreatorMatchMock />,
	draft: <DraftMock />,
	approval: <ApprovalMock />,
	publishing: <PublishingMock />,
	reporting: <ReportingMock />,
};

export function CampaignLoop() {
	return (
		<section className="w-full border-y border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="01"
						label="The campaign loop"
						title={
							<>
								Brief in. <Accent>Growth loop</Accent> out.
							</>
						}
						description="Every campaign moves through the same visible path, so nothing stalls in a spreadsheet — and nothing posts without your approval."
					/>
				</Reveal>

				<RevealStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
					{loopSteps.map((step) => (
						<RevealItem key={step.id}>
							<article className="flex min-w-0 flex-col">
								<MiniScreen>{MOCKS[step.id]}</MiniScreen>
								<h3 className="mt-6 font-serif text-[clamp(1.75rem,3vw,2.35rem)] font-normal not-italic leading-[1.08] tracking-[-0.015em] text-ink">
									{step.title}
								</h3>
								<p className="mt-2.5 max-w-[34ch] text-[0.95rem] leading-relaxed text-muted">
									{step.body}
								</p>
							</article>
						</RevealItem>
					))}
				</RevealStagger>
			</div>
		</section>
	);
}
