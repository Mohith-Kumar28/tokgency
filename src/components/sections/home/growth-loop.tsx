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

type Step = { title: string; body: string; mock: ReactNode };

const STEPS: Step[] = [
	{
		title: "Brief",
		body: "Product, goal, audience, rights and prohibited claims go into a guided wizard once.",
		mock: <BriefMock />,
	},
	{
		title: "Creator match",
		body: "Shortlist vetted creators from public rate cards, or open the brief to applicants.",
		mock: <CreatorMatchMock />,
	},
	{
		title: "Draft",
		body: "Creators submit versioned drafts against your brief, in the workspace, not a DM thread.",
		mock: <DraftMock />,
	},
	{
		title: "Approval",
		body: "Comment on the exact second, request a change, or approve. Nothing posts before you do.",
		mock: <ApprovalMock />,
	},
	{
		title: "Publishing",
		body: "Approved content routes into the posting queue on your warmed US accounts.",
		mock: <PublishingMock />,
	},
	{
		title: "Reporting",
		body: "Post links, status timestamps, and the hooks and formats worth making again.",
		mock: <ReportingMock />,
	},
];

export function GrowthLoop() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="05"
						label="How it works"
						title={
							<>
								Brief in. <Accent>Growth loop</Accent> out.
							</>
						}
						description="Every campaign moves through the same visible path, so nothing stalls in a spreadsheet — and nothing posts without your approval."
					/>
				</Reveal>

				<RevealStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
					{STEPS.map((step) => (
						<RevealItem key={step.title}>
							<article className="flex min-w-0 flex-col">
								<MiniScreen>{step.mock}</MiniScreen>
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
