import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Align = "center" | "left";

type EyebrowProps = {
	/** Two-digit section index, e.g. "01". */
	index?: string;
	label: string;
	align?: Align;
};

/** Numbered mono label that sits above a section title. */
export function Eyebrow({ index, label, align = "center" }: EyebrowProps) {
	return (
		<div
			className={cn(
				"flex items-center gap-3",
				align === "center" && "justify-center",
			)}
		>
			{index && (
				<>
					<span className="mono-label text-accent">{index}</span>
					<span className="h-px w-7 bg-hairline" aria-hidden />
				</>
			)}
			<span className="mono-label text-muted">{label}</span>
		</div>
	);
}

const titleClass =
	"text-balance font-display text-[clamp(2rem,4.2vw,3.15rem)] font-medium leading-[1.04] tracking-[-0.038em] text-ink";

type SectionTitleProps = {
	children: ReactNode;
	className?: string;
	as?: "h1" | "h2";
};

export function SectionTitle({
	children,
	className,
	as: Tag = "h2",
}: SectionTitleProps) {
	return <Tag className={cn(titleClass, className)}>{children}</Tag>;
}

/** Italic serif run in the accent colour, used inside titles. */
export function Accent({ children }: { children: ReactNode }) {
	return <span className="serif text-accent">{children}</span>;
}

type SectionHeadingProps = {
	index?: string;
	label: string;
	title: ReactNode;
	description?: ReactNode;
	align?: Align;
	className?: string;
	as?: "h1" | "h2";
	/**
	 * A block set directly under the title, inside the title's type context
	 * so it picks up the same tight tracking and leading.
	 */
	band?: ReactNode;
};

export function SectionHeading({
	index,
	label,
	title,
	description,
	align = "center",
	className,
	as,
	band,
}: SectionHeadingProps) {
	const centered = align === "center";

	return (
		<div
			className={cn(
				"flex flex-col gap-5",
				centered && "mx-auto max-w-2xl items-center text-center",
				className,
			)}
		>
			<Eyebrow index={index} label={label} align={align} />
			{band ? (
				<div className={titleClass}>
					{/* Inline, and inheriting the wrapper's metrics, so the words lay out as they would in a plain heading. */}
					<h2 className="inline leading-[inherit] tracking-[inherit]">
						{title}
					</h2>
					{band}
				</div>
			) : (
				<SectionTitle as={as}>{title}</SectionTitle>
			)}
			{description && (
				<p
					className={cn(
						"max-w-xl text-[1.05rem] leading-relaxed text-muted md:text-lg",
						centered && "mx-auto",
					)}
				>
					{description}
				</p>
			)}
		</div>
	);
}
