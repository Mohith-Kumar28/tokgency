import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SvgProps = { className?: string };

const scribbleBase = "pointer-events-none select-none";

/** Hand-drawn arrow. Points down-right; flip with -scale-x-100. */
function ScribbleArrow({ className }: SvgProps) {
	return (
		<svg
			viewBox="0 0 96 84"
			fill="none"
			aria-hidden="true"
			className={cn(scribbleBase, className)}
		>
			<path
				d="M8 7c14 26 34 44 62 52"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M52 62c8 0 15-1 18-3M70 59c-2-6-5-11-9-15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

/** Loose pen loop drawn around a phrase. Position it over a relative parent. */
function ScribbleCircle({ className }: SvgProps) {
	return (
		<svg
			viewBox="0 0 210 92"
			fill="none"
			aria-hidden="true"
			preserveAspectRatio="none"
			className={cn(scribbleBase, className)}
		>
			<path
				d="M107 6c-38-4-79 5-93 22-13 16-2 38 26 49 30 12 84 14 122 3 33-9 47-27 39-42C192 21 158 9 118 6 96 4 71 6 55 13"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				vectorEffect="non-scaling-stroke"
			/>
		</svg>
	);
}

/** Two four-point sparkles. */
export function ScribbleSparkle({ className }: SvgProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
			className={cn(scribbleBase, className)}
		>
			<path
				d="M12 2.5c.6 5 1.9 6.3 6.9 6.9-5 .6-6.3 1.9-6.9 6.9-.6-5-1.9-6.3-6.9-6.9 5-.6 6.3-1.9 6.9-6.9Z"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinejoin="round"
			/>
			<path
				d="M19 15.5c.3 2.3.9 2.9 3.2 3.2-2.3.3-2.9.9-3.2 3.2-.3-2.3-.9-2.9-3.2-3.2 2.3-.3 2.9-.9 3.2-3.2Z"
				stroke="currentColor"
				strokeWidth="1.44"
				strokeLinejoin="round"
				opacity="0.7"
			/>
		</svg>
	);
}

/** Phrase circled with a pen loop, e.g. the "1B+ views" callout. */
export function Circled({ children }: { children: ReactNode }) {
	return (
		<span className="relative inline-block whitespace-nowrap">
			<span className="font-medium text-accent">{children}</span>
			<ScribbleCircle className="absolute -inset-x-4 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+2rem)] text-accent opacity-70" />
		</span>
	);
}

type HandNoteProps = {
	children: ReactNode;
	/** Tilt in degrees. */
	rotate?: number;
	className?: string;
};

/** Handwritten aside with an arrow pointing back at the thing it annotates. */
export function HandNote({ children, rotate = -5, className }: HandNoteProps) {
	const style: CSSProperties = { transform: `rotate(${rotate}deg)` };

	return (
		<span
			className={cn("inline-flex items-end gap-1.5 text-accent", className)}
			style={style}
			aria-hidden
		>
			<ScribbleArrow className="-scale-x-100 h-7 w-7 shrink-0 opacity-80" />
			<span className="hand whitespace-nowrap text-[1.15rem] leading-none">
				{children}
			</span>
		</span>
	);
}
