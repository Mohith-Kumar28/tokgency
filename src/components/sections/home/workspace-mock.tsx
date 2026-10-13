import { StepMarker, type StepState } from "@/components/shared/step-marker";
import { cn } from "@/lib/utils";

type Step = { label: string; meta: string; state: StepState };

const BRIEF_FIELDS = ["Product", "Goal", "Audience", "Rights"];

const STEPS: Step[] = [
	{ label: "Creator match", meta: "6 vetted", state: "done" },
	{ label: "Draft", meta: "v3 submitted", state: "done" },
	{ label: "Approval", meta: "In review", state: "active" },
	{ label: "Publishing", meta: "US distribution", state: "todo" },
	{ label: "Learning", meta: "Top hooks", state: "todo" },
];

function LiveBadge() {
	return (
		<span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-2.5 py-1">
			<span className="relative flex h-1.5 w-1.5">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
				<span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
			</span>
			<span className="mono-label text-ink">Live</span>
		</span>
	);
}

/** A campaign mid-flight: brief at the top, pipeline below. */
export function WorkspaceMock() {
	return (
		<div className="w-full rounded-[1.75rem] border border-hairline bg-card p-2.5 shadow-lift">
			<div className="rounded-[1.4rem] border border-hairline bg-surface p-5 sm:p-6">
				<div className="flex items-center justify-between">
					<span className="mono-label text-muted">Campaign workspace</span>
					<LiveBadge />
				</div>

				<div className="mt-5 rounded-xl border border-hairline bg-card p-4">
					<p className="mono-label text-muted">Brief</p>
					<p className="mt-2 text-[0.95rem] font-medium leading-snug text-ink">
						US TikTok launch · retention goal
					</p>
					<div className="mt-3 flex flex-wrap gap-1.5">
						{BRIEF_FIELDS.map((field) => (
							<span
								key={field}
								className="rounded-md border border-hairline bg-surface px-2 py-1 text-[0.72rem] text-muted"
							>
								{field}
							</span>
						))}
					</div>
				</div>

				<ol className="mt-5">
					{STEPS.map((step, index) => {
						const isLast = index === STEPS.length - 1;
						return (
							<li
								key={step.label}
								className="relative flex items-center gap-3.5 py-2"
							>
								{!isLast && (
									<span
										aria-hidden
										className="absolute left-3 top-[2.1rem] h-[calc(100%-1.1rem)] w-px bg-hairline"
									/>
								)}
								<StepMarker state={step.state} />
								<div className="flex flex-1 items-center justify-between">
									<span
										className={cn(
											"text-[0.92rem] font-medium",
											step.state === "todo" ? "text-muted" : "text-ink",
										)}
									>
										{step.label}
									</span>
									<span
										className={cn(
											"mono-label",
											step.state === "active" ? "text-accent" : "text-muted",
										)}
									>
										{step.meta}
									</span>
								</div>
							</li>
						);
					})}
				</ol>

				<div className="mt-4 flex items-center justify-between border-t border-hairline pt-4">
					<span className="mono-label text-muted">Rights lock on approval</span>
					<span className="mono-label text-ink">#DR-2041</span>
				</div>
			</div>
		</div>
	);
}
