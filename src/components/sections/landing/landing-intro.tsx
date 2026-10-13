import { Reveal } from "@/components/motion/reveal";

/** Band with the page's lead paragraph. */
export function LandingIntro({ text }: { text: string }) {
	return (
		<section className="w-full border-y border-hairline bg-surface px-4 py-20 md:py-24">
			<div className="mx-auto w-full max-w-3xl">
				<Reveal>
					<p className="text-balance text-center text-[1.25rem] leading-[1.55] tracking-[-0.02em] text-ink md:text-[1.45rem]">
						{text}
					</p>
				</Reveal>
			</div>
		</section>
	);
}
