import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 rounded-full font-semibold disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary: "btn-primary",
				ghost: "btn-ghost",
			},
			size: {
				default: "px-6 py-3 text-[0.95rem]",
				sm: "px-5 py-2.5 text-[0.88rem]",
				lg: "px-6 py-3.5 text-base",
				/* Pill with a trailing icon chip, as in the header CTA. */
				chip: "py-2 pl-4 pr-1.5 text-[0.9rem]",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	},
);

type ButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	};

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot.Root : "button";

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
