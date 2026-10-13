import type { VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { SmartLink } from "@/components/shared/smart-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonLinkProps = VariantProps<typeof buttonVariants> & {
	href: string;
	children: ReactNode;
	className?: string;
	external?: boolean;
	onClick?: () => void;
};

/** A link that looks like a button. */
export function ButtonLink({
	href,
	variant,
	size,
	className,
	external,
	onClick,
	children,
}: ButtonLinkProps) {
	return (
		<SmartLink
			href={href}
			external={external}
			onClick={onClick}
			className={cn(buttonVariants({ variant, size }), className)}
		>
			{children}
		</SmartLink>
	);
}

/** Primary pill with the arrow chip on the right (header and mobile menu). */
export function ChipButtonLink({
	href,
	children,
	className,
}: Pick<ButtonLinkProps, "href" | "children" | "className">) {
	return (
		<ButtonLink href={href} size="chip" className={cn("group", className)}>
			{children}
			<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--on-primary)]/15">
				<ArrowUpRight
					aria-hidden
					className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				/>
			</span>
		</ButtonLink>
	);
}
