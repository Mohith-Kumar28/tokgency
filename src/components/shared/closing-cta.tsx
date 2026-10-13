import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import {
	ContrastButtonLink,
	ContrastOutlineLink,
} from "@/components/shared/contrast-buttons";
import { cn } from "@/lib/utils";

type Action = { label: string; href: string; external?: boolean };

type ClosingCtaProps = {
	badge: string;
	title: ReactNode;
	description: string;
	primary: Action;
	secondary?: Action;
	/** Overrides the default gap above the band, e.g. "pt-24". */
	className?: string;
};

/** Dark full-width band that ends a page with one clear next step. */
export function ClosingCta({
	badge,
	title,
	description,
	primary,
	secondary,
	className,
}: ClosingCtaProps) {
	return (
		<section className={cn("w-full px-4 pb-32 pt-4", className)}>
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<div className="overflow-hidden rounded-[2.5rem] bg-contrast px-8 py-16 text-center md:px-12 md:py-24">
						<div className="mx-auto flex max-w-2xl flex-col items-center gap-7">
							<span className="mono-label inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-on-contrast/70">
								<span className="h-1.5 w-1.5 rounded-full bg-accent" /> {badge}
							</span>
							<h2 className="text-balance text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.04em] text-on-contrast">
								{title}
							</h2>
							<p className="max-w-xl text-[1.05rem] text-on-contrast/65 md:text-lg">
								{description}
							</p>
							<div className="flex flex-col gap-3 pt-1 sm:flex-row">
								<ContrastButtonLink
									href={primary.href}
									external={primary.external}
								>
									{primary.label}
								</ContrastButtonLink>
								{secondary && (
									<ContrastOutlineLink
										href={secondary.href}
										external={secondary.external}
									>
										{secondary.label}
									</ContrastOutlineLink>
								)}
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
