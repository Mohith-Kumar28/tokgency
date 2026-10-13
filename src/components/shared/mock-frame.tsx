import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const GRID_MASK =
	"radial-gradient(80% 70% at 50% 40%, #000 0%, transparent 100%)";

type MockFrameProps = {
	children: ReactNode;
	/** Mono caption centred under the mock. */
	caption?: string;
	className?: string;
};

/** Tinted stage with a faint grid, used behind product mock-ups. */
export function MockFrame({ children, caption, className }: MockFrameProps) {
	return (
		<div
			className={cn(
				"relative isolate overflow-hidden rounded-[1.75rem] border border-hairline bg-surface p-5 sm:p-7",
				className,
			)}
			style={{
				backgroundImage:
					"radial-gradient(120% 80% at 82% 6%, var(--accent-soft) 0%, transparent 58%)",
			}}
		>
			<span
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
				style={{
					backgroundImage:
						"linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px)",
					backgroundSize: "44px 44px",
					maskImage: GRID_MASK,
					WebkitMaskImage: GRID_MASK,
				}}
			/>
			{children}
			{caption && (
				<p className="mono-label mt-3 text-center text-muted">{caption}</p>
			)}
		</div>
	);
}
