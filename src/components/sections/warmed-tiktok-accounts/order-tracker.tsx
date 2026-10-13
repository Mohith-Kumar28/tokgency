import { StepMarker } from "@/components/shared/step-marker";
import {
	type OrderStepState,
	orderSteps,
} from "@/content/warmed-tiktok-accounts";
import { cn } from "@/lib/utils";

const META_TONE: Record<OrderStepState, string> = {
	done: "text-muted",
	active: "text-accent",
	todo: "text-muted/70",
};

/** A distribution order part-way through: setup and warming done, posting queued. */
export function OrderTracker() {
	return (
		<div className="w-full rounded-[1.75rem] border border-hairline bg-card p-2.5 shadow-lift">
			<div className="rounded-[1.4rem] border border-hairline bg-surface p-5 sm:p-6">
				<div className="flex items-center justify-between">
					<span className="mono-label text-muted">Distribution order</span>
					<span className="mono-label text-ink">#DR-2041</span>
				</div>

				<ol className="mt-5">
					{orderSteps.map((step, index) => {
						const isLast = index === orderSteps.length - 1;
						return (
							<li
								key={step.label}
								className="relative flex items-center gap-3.5 py-2.5"
							>
								{!isLast && (
									<span
										aria-hidden
										className="absolute left-3 top-[2.3rem] h-[calc(100%-1.1rem)] w-px bg-hairline"
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
									<span className={cn("mono-label", META_TONE[step.state])}>
										{step.meta}
									</span>
								</div>
							</li>
						);
					})}
				</ol>

				<div className="mt-4 flex items-center justify-between gap-4 border-t border-hairline pt-4">
					<span className="mono-label truncate text-muted">
						Setup → Warming → Ready → Posted
					</span>
					<span className="mono-label shrink-0 text-accent">On track</span>
				</div>
			</div>
		</div>
	);
}
