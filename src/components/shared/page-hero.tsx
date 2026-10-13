import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const SIZES = {
	/* Most inner pages. */
	default: {
		section: "pb-20 md:pb-24",
		glowHeight: "h-[680px]",
		glow: "radial-gradient(1100px 500px at 50% -140px, var(--accent-soft) 0%, transparent 68%)",
	},
	/* Pages whose first content block sits close under the hero. */
	compact: {
		section: "pb-16 md:pb-20",
		glowHeight: "h-[620px]",
		glow: "radial-gradient(1100px 480px at 50% -140px, var(--accent-soft) 0%, transparent 68%)",
	},
} as const;

type HeroGlowProps = { size?: keyof typeof SIZES; className?: string };

/** Soft accent wash behind the top of a page. */
export function HeroGlow({ size = "default", className }: HeroGlowProps) {
	return (
		<div
			aria-hidden
			className={cn(
				"pointer-events-none absolute inset-x-0 top-0 -z-10",
				SIZES[size].glowHeight,
				className,
			)}
			style={{ background: SIZES[size].glow }}
		/>
	);
}

type PageHeroProps = {
	eyebrow: string;
	title: ReactNode;
	description: ReactNode;
	/** Buttons. Rendered in a row from the sm breakpoint. */
	actions?: ReactNode;
	/** Mono line of reassurances under the buttons. */
	footnote?: ReactNode;
	size?: keyof typeof SIZES;
	/** Extra content rendered below the copy, inside the hero section. */
	children?: ReactNode;
};

/** Centred hero used at the top of every inner page. */
export function PageHero({
	eyebrow,
	title,
	description,
	actions,
	footnote,
	size = "default",
	children,
}: PageHeroProps) {
	return (
		<section
			className={cn("relative w-full px-4 pt-28 md:pt-36", SIZES[size].section)}
		>
			<HeroGlow size={size} />

			<div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
				<Reveal>
					<span className="mono-label text-muted">{eyebrow}</span>
				</Reveal>
				<Reveal>
					<h1 className="mt-6 text-balance text-[clamp(2.6rem,6.2vw,4.7rem)] font-medium leading-[0.98] tracking-[-0.045em] text-ink">
						{title}
					</h1>
				</Reveal>
				<Reveal>
					<p className="mx-auto mt-7 max-w-2xl text-[1.08rem] leading-relaxed text-muted md:text-xl">
						{description}
					</p>
				</Reveal>
				{actions && (
					<Reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
						{actions}
					</Reveal>
				)}
				{footnote && (
					<Reveal className="mt-7">
						<span className="mono-label text-muted">{footnote}</span>
					</Reveal>
				)}
			</div>

			{children}
		</section>
	);
}
