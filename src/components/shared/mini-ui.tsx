import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/*
 * Tiny, text-free UI atoms for the miniature product mocks. They suggest an
 * interface without pretending to be a screenshot.
 */

/** 16:9 card that holds one miniature mock. */
export function MiniScreen({ children }: { children: ReactNode }) {
	return (
		<div className="group relative overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-hairline transition-shadow duration-500 hover:shadow-lift hover:ring-hairline-strong">
			<div className="relative aspect-[16/9] w-full">{children}</div>
		</div>
	);
}

const BAR_TONES = {
	muted: "bg-ink/15",
	ink: "bg-ink/35",
	accent: "bg-accent/70",
} as const;

type BarProps = { width?: string; tone?: keyof typeof BAR_TONES };

/** A line of placeholder text. */
export function Bar({ width = "60%", tone = "muted" }: BarProps) {
	return (
		<span
			className={cn("block h-1.5 rounded-full", BAR_TONES[tone])}
			style={{ width }}
		/>
	);
}

type ChipProps = { children: ReactNode; active?: boolean };

export function Chip({ children, active = false }: ChipProps) {
	return (
		<span
			className={cn(
				"rounded-[4px] px-1.5 py-0.5 text-[7px] font-medium tracking-wide",
				active ? "bg-accent/15 text-accent" : "bg-ink/[0.06] text-muted",
			)}
		>
			{children}
		</span>
	);
}

/** Placeholder avatar. `shade` steps the tone so a list reads as different people. */
export function Avatar({ shade }: { shade: number }) {
	return (
		<span
			className="inline-block h-4 w-4 shrink-0 rounded-full ring-1 ring-hairline"
			style={{ background: `hsl(${349 + 6 * shade} 8% ${44 + 9 * shade}%)` }}
		/>
	);
}

/** Small solid pill, the mocks' primary button. */
export function MiniButton({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<span
			className={cn(
				"rounded-full bg-ink py-1 text-[7px] font-medium text-background",
				className,
			)}
		>
			{children}
		</span>
	);
}
