import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { SmartLink } from "@/components/shared/smart-link";

type Props = { href: string; children: ReactNode; external?: boolean };

/* Buttons for use on the dark `bg-contrast` bands. */

export function ContrastButtonLink({ href, children, external }: Props) {
	return (
		<SmartLink
			href={href}
			external={external}
			className="inline-flex items-center justify-center gap-2 rounded-full bg-on-contrast px-6 py-3 text-[0.95rem] font-semibold text-contrast transition-transform duration-300 ease-out-expo hover:-translate-y-0.5"
		>
			{children}
		</SmartLink>
	);
}

export function ContrastOutlineLink({ href, children, external }: Props) {
	return (
		<SmartLink
			href={href}
			external={external}
			className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[0.95rem] font-semibold text-on-contrast/80 transition-colors hover:bg-white/5 hover:text-on-contrast"
		>
			{children}
			<ArrowUpRight
				aria-hidden
				className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
			/>
		</SmartLink>
	);
}
