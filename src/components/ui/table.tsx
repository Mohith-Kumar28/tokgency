import type * as React from "react";
import { cn } from "@/lib/utils";

/*
 * Table primitives. Deliberately unopinionated about padding and borders:
 * the comparison and pricing tables size their own cells.
 */

function Table({ className, ...props }: React.ComponentProps<"table">) {
	return (
		<table
			data-slot="table"
			className={cn("relative w-full border-collapse text-left", className)}
			{...props}
		/>
	);
}

function TableHeader(props: React.ComponentProps<"thead">) {
	return <thead data-slot="table-header" {...props} />;
}

function TableBody(props: React.ComponentProps<"tbody">) {
	return <tbody data-slot="table-body" {...props} />;
}

function TableRow(props: React.ComponentProps<"tr">) {
	return <tr data-slot="table-row" {...props} />;
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
	return (
		<th
			data-slot="table-head"
			className={cn("font-medium", className)}
			{...props}
		/>
	);
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
	return (
		<td
			data-slot="table-cell"
			className={cn("align-middle", className)}
			{...props}
		/>
	);
}

function TableCaption({
	className,
	...props
}: React.ComponentProps<"caption">) {
	return (
		<caption
			data-slot="table-caption"
			className={cn("sr-only", className)}
			{...props}
		/>
	);
}

export {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
};
