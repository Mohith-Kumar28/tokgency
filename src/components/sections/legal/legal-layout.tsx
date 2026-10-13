import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

type LegalLayoutProps = {
	title: string;
	children: ReactNode;
};

/** Narrow single-column page used by the legal index and every policy. */
export function LegalLayout({ title, children }: LegalLayoutProps) {
	return (
		<section className="relative w-full px-4 pb-28 pt-28 md:pt-36">
			<div
				aria-hidden
				className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
				style={{
					background:
						"radial-gradient(900px 360px at 50% -160px, var(--accent-soft) 0%, transparent 72%)",
				}}
			/>
			<div className="mx-auto w-full max-w-3xl">
				<Reveal>
					<span className="mono-label text-muted">Legal</span>
					<h1 className="mt-6 text-balance text-[clamp(2.2rem,4.6vw,3.4rem)] font-medium leading-[1.02] tracking-[-0.042em] text-ink">
						{title}
					</h1>
					{children}
				</Reveal>
			</div>
		</section>
	);
}
