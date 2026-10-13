import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SmartLink } from "@/components/shared/smart-link";
import type { NavMenuItem } from "@/config/site";
import { cn } from "@/lib/utils";

type PlatformMenuProps = {
	label: string;
	items: NavMenuItem[];
};

/** Desktop dropdown: opens on hover or click, closes on Escape or outside press. */
export function PlatformMenu({ label, items }: PlatformMenuProps) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false);
		};
		const onPointerDown = (event: PointerEvent) => {
			if (!ref.current?.contains(event.target as Node)) setOpen(false);
		};

		document.addEventListener("keydown", onKeyDown);
		document.addEventListener("pointerdown", onPointerDown);
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.removeEventListener("pointerdown", onPointerDown);
		};
	}, [open]);

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: hover is an enhancement; the button below is the keyboard path
		<div
			ref={ref}
			className="relative"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<button
				type="button"
				aria-haspopup="menu"
				aria-expanded={open}
				onClick={() => setOpen((value) => !value)}
				className={cn(
					"inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.9rem] font-medium transition-colors hover:bg-surface hover:text-ink",
					open ? "bg-surface text-ink" : "text-muted",
				)}
			>
				{label}
				<ChevronDown
					aria-hidden
					className={cn(
						"h-3.5 w-3.5 transition-transform duration-200",
						open && "rotate-180",
					)}
				/>
			</button>

			{open && (
				<div role="menu" className="absolute left-0 top-full w-[22rem] pt-2">
					<div className="overflow-hidden rounded-2xl border border-hairline bg-card p-2 shadow-lift">
						{items.map((item) => (
							<SmartLink
								key={item.href}
								href={item.href}
								role="menuitem"
								onClick={() => setOpen(false)}
								className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-surface"
							>
								<span className="text-[0.92rem] font-semibold text-ink">
									{item.label}
								</span>
								<span className="text-[0.82rem] leading-snug text-muted">
									{item.desc}
								</span>
							</SmartLink>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
