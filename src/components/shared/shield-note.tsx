import { ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ShieldNoteProps = { children: ReactNode; className?: string };

/** Small centred reassurance line with a shield icon. */
export function ShieldNote({ children, className }: ShieldNoteProps) {
	return (
		<div
			className={cn(
				"mx-auto flex max-w-2xl items-start justify-center gap-2.5 text-center text-[0.85rem] leading-relaxed text-muted",
				className,
			)}
		>
			<ShieldCheck
				aria-hidden
				className="mt-[3px] h-4 w-4 shrink-0 text-accent"
				strokeWidth={1.75}
			/>
			<span>{children}</span>
		</div>
	);
}
