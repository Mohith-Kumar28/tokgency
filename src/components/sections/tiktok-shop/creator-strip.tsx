import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SmartLink } from "@/components/shared/smart-link";
import { VideoMarquee } from "@/components/shared/video-marquee";
import { creatorRows } from "@/content/tiktok-shop";

/** Two marquee rows of real posts from TikTok Shop creators. */
export function CreatorStrip() {
	return (
		<section className="w-full px-4 pb-20">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<div className="mb-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
						<span className="mono-label text-muted">
							TikTok Shop creators we work with
						</span>
						<SmartLink
							href="/creator-marketplace"
							className="mono-label group inline-flex items-center gap-1.5 text-ink transition-colors hover:text-accent"
						>
							See the creator database
							<ArrowUpRight
								aria-hidden
								className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
							/>
						</SmartLink>
					</div>
				</Reveal>
			</div>

			<Reveal className="-mx-4">
				<VideoMarquee rows={creatorRows} />
			</Reveal>
		</section>
	);
}
