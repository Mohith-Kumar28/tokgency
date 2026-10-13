import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { WayArtwork } from "@/components/sections/tiktok-shop/way-art";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { ways } from "@/content/tiktok-shop";

export function WaysToSell() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="03"
						label="What you can run"
						title={
							<>
								Four ways to sell on <Accent>TikTok Shop.</Accent>
							</>
						}
						description="Every one of them briefs, approves and pays through the same workspace."
					/>
				</Reveal>

				<RevealStagger className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{ways.map((way) => (
						<RevealItem key={way.title}>
							<div className="flex h-full min-w-0 flex-col rounded-[1.5rem] border border-hairline bg-card p-6">
								<WayArtwork art={way.art} />
								<h3 className="font-serif text-[1.3rem] font-normal not-italic leading-tight tracking-[-0.015em] text-ink">
									{way.title}
								</h3>
								<p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted">
									{way.body}
								</p>
							</div>
						</RevealItem>
					))}
				</RevealStagger>
			</div>
		</section>
	);
}
