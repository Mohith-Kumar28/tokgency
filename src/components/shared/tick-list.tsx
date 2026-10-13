import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const TONES = {
	muted: "text-muted",
	/* For lists on the dark `bg-contrast` cards. */
	contrast: "leading-relaxed text-on-contrast/70",
} as const;

type TickListProps = { items: string[]; tone?: keyof typeof TONES };

/** Compact check-marked list for plan and fit cards. */
export function TickList({ items, tone = "muted" }: TickListProps) {
	return (
		<ul className="flex flex-col gap-2.5">
			{items.map((item) => (
				<li
					key={item}
					className={cn("flex items-start gap-2.5 text-[0.93rem]", TONES[tone])}
				>
					<Check
						aria-hidden
						className="mt-[3px] h-4 w-4 shrink-0 text-accent"
						strokeWidth={2.25}
					/>
					{item}
				</li>
			))}
		</ul>
	);
}
