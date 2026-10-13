import { Reveal } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { VideoMarquee } from "@/components/shared/video-marquee";
import { toRows, wallTiles } from "@/lib/creator-reel";

const rows = toRows(wallTiles, 2);

export function FormatsWall() {
	return (
		<section className="w-full border-y border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="02"
						label="Formats we make"
						title={
							<>
								Short-form, <Accent>built for apps.</Accent>
							</>
						}
						description="Demos, skits, voiceovers, testimonials, POVs and unboxings, made by creators, approved by you, posted through your warmed US accounts. The wall below is real work from creators on our roster; each tile links to the original post."
					/>
				</Reveal>
			</div>

			<Reveal className="-mx-4 mt-14">
				<VideoMarquee rows={rows} />
			</Reveal>
		</section>
	);
}
