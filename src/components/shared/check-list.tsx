import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CheckListProps = {
	items: ReactNode[];
	className?: string;
};

/** Bulleted list with accent check marks. */
export function CheckList({ items, className }: CheckListProps) {
	return (
		<ul className={cn("flex flex-col gap-2.5", className)}>
			{items.map((item, index) => (
				<li
					// biome-ignore lint/suspicious/noArrayIndexKey: static copy, never reordered
					key={index}
					className="flex items-start gap-2.5 text-[0.92rem] leading-relaxed text-muted"
				>
					<Check
						aria-hidden
						className="mt-[4px] h-4 w-4 shrink-0 text-accent"
						strokeWidth={2.25}
					/>
					{item}
				</li>
			))}
		</ul>
	);
}
