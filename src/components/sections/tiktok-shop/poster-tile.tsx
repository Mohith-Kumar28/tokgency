import { Check } from "lucide-react";
import { formatPlays, type ReelTile } from "@/lib/creator-reel";
import { cn } from "@/lib/utils";

type PosterTileProps = {
	tile: ReelTile;
	/** Accent ring and tick, as if picked for a shortlist. */
	selected?: boolean;
};

/** Still frame of a creator's post that links to the original on TikTok. */
export function PosterTile({ tile, selected = false }: PosterTileProps) {
	return (
		<a
			href={tile.href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`View @${tile.handle}'s post on TikTok`}
			className="block focus-visible:outline-none"
		>
			<div
				className={cn(
					"relative aspect-[9/16] overflow-hidden rounded-xl bg-card ring-1 transition-transform duration-300",
					selected ? "ring-accent" : "ring-hairline",
				)}
			>
				<img
					src={tile.poster}
					alt=""
					loading="lazy"
					className="h-full w-full object-cover"
				/>
				<span
					aria-hidden
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(180deg, transparent 44%, rgba(0,0,0,0.72) 100%)",
					}}
				/>
				{selected && (
					<span className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent">
						<Check aria-hidden className="h-3 w-3 text-white" strokeWidth={3} />
					</span>
				)}
				<span className="absolute inset-x-2 bottom-1.5">
					<span className="mono-label block truncate !text-[8px] text-white/90">
						@{tile.handle}
					</span>
					<span className="block text-[8px] leading-tight text-white/55">
						{formatPlays(tile.plays)} plays
					</span>
				</span>
			</div>
		</a>
	);
}
