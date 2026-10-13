import { Check } from "lucide-react";

export type StepState = "done" | "active" | "todo";

/** Dot that leads a row in a progress list: ticked, pulsing, or empty. */
export function StepMarker({ state }: { state: StepState }) {
	if (state === "done") {
		return (
			<span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-on-primary">
				<Check aria-hidden className="h-3.5 w-3.5" strokeWidth={2.75} />
			</span>
		);
	}

	if (state === "active") {
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
