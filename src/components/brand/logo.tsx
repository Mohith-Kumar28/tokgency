import { useId } from "react";
import { SmartLink } from "@/components/shared/smart-link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
	const gradientId = useId();

	return (
		<svg
			viewBox="0 0 48 48"
			fill="none"
			aria-hidden="true"
			className={className}
		>
			<defs>
				<linearGradient
					id={gradientId}
					x1="8"
					y1="8"
					x2="32"
					y2="40"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="var(--logo-cyan-from)" />
					<stop offset="1" stopColor="var(--logo-cyan-to)" />
				</linearGradient>
			</defs>
			<path
				d="M10 10 L30 24 L10 38 Z"
				stroke={`url(#${gradientId})`}
				strokeWidth="5.5"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
			<path
				d="M26.5 12.5 L39 24 L26.5 35.5"
				stroke="var(--logo-coral)"
				strokeWidth="5.5"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
		</svg>
	);
}

export function Logo({ className }: { className?: string }) {
	return (
		<SmartLink
			href="/"
			aria-label={`${siteConfig.name} home`}
			className={cn("group inline-flex items-center gap-2", className)}
		>
			<LogoMark className="h-7 w-7 transition-transform duration-300 group-hover:scale-105" />
			<span className="text-[1.15rem] font-extrabold tracking-tight text-ink">
				{siteConfig.name}
			</span>
		</SmartLink>
	);
}
