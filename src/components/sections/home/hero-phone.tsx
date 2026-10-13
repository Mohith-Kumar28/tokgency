import { Heart, MessageCircle, Music2, Share2 } from "lucide-react";
import type { Ref } from "react";
import { AutoplayVideo } from "@/components/shared/autoplay-video";
import { heroClips } from "@/lib/creator-reel";

/** Backdrop gradients, shown behind each clip while its video loads. */
const BACKDROPS = [
	{ from: "#2a1626", to: "#0f1220" },
	{ from: "#132630", to: "#0d1118" },
	{ from: "#2b1a17", to: "#111014" },
];

const clips = heroClips.map((clip, index) => ({
	handle: `@${clip.handle}`,
	caption: clip.caption || "original post on TikTok",
	src: clip.src,
	poster: clip.poster ?? undefined,
	...BACKDROPS[index % BACKDROPS.length],
}));

/* The first clip is repeated at the end so the loop restarts seamlessly. */
const feed = [...clips, clips[0]].map((clip, position) => ({
	...clip,
	key: `${clip.handle}-${position}`,
}));

const ACTION_ICONS = [Heart, MessageCircle, Share2];

type Clip = (typeof feed)[number];

function FeedClip({ clip }: { clip: Clip }) {
	return (
		<div
			className="relative h-full w-full shrink-0 overflow-hidden"
			style={{
				background: `linear-gradient(160deg, ${clip.from}, ${clip.to})`,
			}}
		>
			<AutoplayVideo
				src={clip.src}
				poster={clip.poster}
				className="absolute inset-0"
			/>

			<div className="absolute bottom-16 right-2 z-20 flex flex-col items-center gap-3.5 text-white/85">
				{ACTION_ICONS.map((Icon) => (
					<Icon
						key={Icon.displayName}
						aria-hidden
						className="h-[18px] w-[18px]"
						strokeWidth={1.75}
					/>
				))}
			</div>

			<div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/75 to-transparent px-3 pb-6 pt-10">
				<p className="text-[10px] font-medium text-white">{clip.handle}</p>
				<p className="mt-1 text-[9.5px] leading-snug text-white/75">
					{clip.caption}
				</p>
				<p className="mt-1.5 flex items-center gap-1 text-[8.5px] text-white/60">
					<Music2 aria-hidden className="h-2.5 w-2.5" /> original sound
				</p>
			</div>
		</div>
	);
}

/** Phone mock that steps through real creator clips like a TikTok feed. */
export function HeroPhone({ ref }: { ref?: Ref<HTMLDivElement> }) {
	return (
		<div ref={ref} className="relative z-10 mx-auto w-[232px] sm:w-[258px]">
			<div
				aria-hidden
				className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] blur-3xl"
				style={{
					background:
						"radial-gradient(60% 55% at 50% 45%, var(--accent-soft), transparent 70%)",
				}}
			/>
			<div className="rounded-[2.3rem] border border-hairline bg-contrast p-[6px] shadow-lift">
				<div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.95rem] bg-black">
					<div className="absolute left-1/2 top-2 z-30 h-4 w-[34%] -translate-x-1/2 rounded-full bg-black/80" />
					<div className="hs-feed absolute inset-0 h-full w-full">
						{feed.map((clip) => (
							<FeedClip key={clip.key} clip={clip} />
						))}
					</div>
					<div className="absolute inset-x-0 bottom-0 z-30 h-[2px] bg-white/15">
						<div className="hs-bar h-full w-full bg-accent" />
					</div>
				</div>
			</div>
		</div>
	);
}
