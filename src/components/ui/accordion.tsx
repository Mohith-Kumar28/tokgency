import { Plus } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";
import type * as React from "react";
import { cn } from "@/lib/utils";

function Accordion(
	props: React.ComponentProps<typeof AccordionPrimitive.Root>,
) {
	return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
	className,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn(
				"overflow-hidden rounded-2xl border border-hairline bg-card transition-colors data-[state=open]:bg-surface",
				className,
			)}
			{...props}
		/>
	);
}

function AccordionTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cn(
					"group flex flex-1 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left",
					className,
				)}
				{...props}
			>
				<span className="font-display text-[1.02rem] font-semibold tracking-[-0.01em] text-ink">
					{children}
				</span>
				<Plus
					aria-hidden
					className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-data-[state=open]:rotate-45"
				/>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
	// forceMount keeps closed answers in the HTML for search engines and find-in-page.
	return (
		<AccordionPrimitive.Content
			data-slot="accordion-content"
			forceMount
			className="data-[state=closed]:hidden"
			{...props}
		>
			<p
				className={cn(
					"px-5 pb-5 text-[0.95rem] leading-relaxed text-muted",
					className,
				)}
			>
				{children}
			</p>
		</AccordionPrimitive.Content>
	);
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
