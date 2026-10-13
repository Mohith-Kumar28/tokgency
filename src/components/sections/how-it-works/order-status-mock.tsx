import { Check } from "lucide-react";
import { type OrderStage, orderStages } from "@/content/how-it-works";
import { cn } from "@/lib/utils";

type State = OrderStage["state"];

const STATUS: Record<State, { text: string; className: string }> = {
	done: { text: "Done", className: "text-muted" },
	now: { text: "Now", className: "text-accent" },
	queued: { text: "Queued", className: "text-muted/70" },
};

function StageMarker({ state }: { state: State }) {
	if (state === "done") {
		return (
			<span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-on-primary">
				<Check aria-hidden className="h-3.5 w-3.5" strokeWidth={2.75} />
			</span>
		);
	}

	if (state === "now") {
		return (
			<span className="relative flex h-6 w-6 items-center justify-center">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
				<span className="relative h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/20" />
			</span>
		);
	}

	return (
		<span className="flex h-6 w-6 items-center justify-center">
			<span className="h-2.5 w-2.5 rounded-full border border-hairline bg-surface" />
		</span>
	);
}

type StageRowProps = { stage: OrderStage; last: boolean };

function StageRow({ stage, last }: StageRowProps) {
	const status = STATUS[stage.state];

	return (
		<div className="relative flex items-center gap-3.5 py-2.5">
			{/* Rail down to the next stage. */}
			{!last && (
				<span
					aria-hidden
					className="absolute left-3 top-[2.3rem] h-[calc(100%-1.1rem)] w-px bg-hairline"
				/>
			)}
			<StageMarker state={stage.state} />
			<div className="flex flex-1 items-center justify-between">
				<span
					className={cn(
						"text-[0.92rem] font-medium",
						stage.state === "queued" ? "text-muted" : "text-ink",
					)}
				>
					{stage.label}
				</span>
				<span className={cn("mono-label", status.className)}>
					{status.text}
				</span>
			</div>
		</div>
	);
}

/** A sample order card: every stage, with the one in progress pulsing. */
export function OrderStatusMock() {
	return (
		<div className="w-full rounded-[1.75rem] border border-hairline bg-card p-2.5 shadow-lift">
			<div className="rounded-[1.4rem] border border-hairline bg-surface p-5 sm:p-6">
				<div className="flex items-center justify-between">
					<span className="mono-label text-muted">Creator campaign</span>
					<span className="mono-label text-ink">#CC-1188</span>
				</div>
				<div className="mt-5">
					{orderStages.map((stage, index) => (
						<StageRow
							key={stage.label}
							stage={stage}
							last={index === orderStages.length - 1}
						/>
					))}
				</div>
				<div className="mt-4 flex items-center justify-between gap-4 border-t border-hairline pt-4">
					<span className="mono-label truncate text-muted">
						Brief → Match → Draft → Approval → Posted
					</span>
					<span className="mono-label shrink-0 text-accent">On track</span>
				</div>
			</div>
		</div>
	);
}
