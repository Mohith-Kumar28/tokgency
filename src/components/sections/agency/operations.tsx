import type { ReactNode } from "react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import {
	AdsMock,
	ScalingMock,
	StrategyMock,
	TestingMock,
	TrackingMock,
	WarmupMock,
} from "@/components/sections/agency/operation-mocks";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { type OperationId, operations } from "@/content/agency";
import { cn } from "@/lib/utils";

const MOCKS: Record<OperationId, ReactNode> = {
	warmup: <WarmupMock />,
	strategy: <StrategyMock />,
	ads: <AdsMock />,
	testing: <TestingMock />,
	tracking: <TrackingMock />,
	scaling: <ScalingMock />,
};

const CORNERS = [
	"left-0 top-0 border-l border-t",
	"right-0 top-0 border-r border-t",
	"bottom-0 left-0 border-b border-l",
	"bottom-0 right-0 border-b border-r",
];

/** 16:9 stage held by four corner brackets that pick up the accent on hover. */
function BracketFrame({ children }: { children: ReactNode }) {
	return (
		<div className="group relative p-3.5">
			{CORNERS.map((corner) => (
				<span
					key={corner}
					aria-hidden
					className={cn(
						"pointer-events-none absolute h-4 w-4 border-ink/30 transition-colors duration-500 group-hover:border-accent/70",
						corner,
					)}
				/>
			))}
			<div className="relative aspect-[16/9] w-full overflow-hidden rounded-[3px] bg-surface ring-1 ring-hairline">
				{children}
			</div>
		</div>
	);
}

export function Operations() {
	return (
		<section className="w-full border-y border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="01"
						label="What we run"
						title={
							<>
								Six jobs, run for you <Accent>every week.</Accent>
							</>
						}
						description="Not a strategy deck and a handover. This is the operating work of a TikTok growth team, done by us."
					/>
				</Reveal>

				<RevealStagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-20">
					{operations.map((operation) => (
						<RevealItem key={operation.id}>
							<article className="flex min-w-0 flex-col">
								<BracketFrame>{MOCKS[operation.id]}</BracketFrame>
								<h3 className="mt-6 font-serif text-[clamp(1.75rem,3vw,2.35rem)] font-normal not-italic leading-[1.08] tracking-[-0.015em] text-ink">
									{operation.title}
								</h3>
								<p className="mt-2.5 max-w-[36ch] text-[0.95rem] leading-relaxed text-muted">
									{operation.body}
								</p>
							</article>
						</RevealItem>
					))}
				</RevealStagger>

				<Reveal>
					<p className="mx-auto mt-10 max-w-2xl text-center text-[0.85rem] leading-relaxed text-muted">
						Accounts are built for your brand and handed over to you — never
						shared with another client, reused or resold. We don’t promise reach
						or any algorithmic advantage.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
