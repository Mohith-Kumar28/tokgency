import type { CSSProperties } from "react";
import { AutoplayVideo } from "@/components/shared/autoplay-video";
import { formatPlays, type ReelTile } from "@/lib/creator-reel";

/** Deterministic warm backdrop so neighbouring tiles never look identical. */
function tileTint(index: number) {
	const hue = 349 + (((7 * index) % 29) - 14);
	const light = 11 + ((5 * index) % 7);

	return {
		from: `hsl(${hue} 14% ${light + 5}%)`,
		to: `hsl(${(hue + 8) % 360} 10% ${Math.max(6, light - 4)}%)`,
	};
}

function Tile({ tile, index }: { tile: ReelTile; index: number }) {
	const tint = tileTint(index);

	return (
		<a
			href={tile.href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`View @${tile.handle}'s post on TikTok`}
			className="contents"
		>
			<div
				className="relative mr-3 aspect-[9/16] w-[150px] shrink-0 overflow-hidden rounded-2xl ring-1 ring-hairline md:mr-4 md:w-[190px]"
				style={{
					background: `linear-gradient(155deg, ${tint.from} 0%, ${tint.to} 100%)`,
				}}
			>
				<AutoplayVideo src={tile.src} poster={tile.poster} rootMargin="150px" />
				<span
					aria-hidden
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(180deg, transparent 46%, rgba(0,0,0,0.6) 100%)",
					}}
				/>
				<span className="absolute bottom-2.5 left-3 right-3">
					<span className="mono-label block truncate !text-[9px] text-white/90">
						@{tile.handle}
					</span>
					<span className="block text-[9px] leading-tight text-white/60">
						{formatPlays(tile.plays)} plays
					</span>
				</span>
			</div>
		</a>
	);
}

/* Enough copies to overfill a wide screen, then doubled for a seamless loop. */
const MIN_TRACK_PX = 2600;
const TILE_PX = 206;

function loopTiles<T>(tiles: T[]): T[] {
	const copies = Math.max(
		1,
		Math.ceil(MIN_TRACK_PX / Math.max(1, TILE_PX * tiles.length)),
	);
	const filled = Array.from({ length: copies }, () => tiles).flat();
	return [...filled, ...filled];
}

type RowProps = {
	tiles: ReelTile[];
	reverse: boolean;
	duration: number;
};

function Row({ tiles, reverse, duration }: RowProps) {
	const style = {
		animationDirection: reverse ? "reverse" : "normal",
		"--lw-dur": `${duration}s`,
	} as CSSProperties;

	return (
		<div className="lw-row group relative overflow-hidden">
			<div className="vm-fade overflow-hidden">
				<div
					className="lw-track flex w-max motion-reduce:animate-none"
					style={style}
				>
					{loopTiles(tiles).map((tile, position) => (
						<Tile
							// biome-ignore lint/suspicious/noArrayIndexKey: tiles repeat by design, position is the only stable identity
							key={position}
							tile={tile}
							index={position % tiles.length}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

const BASE_DURATION_S = 52;
const DURATION_STEP_S = 9;

type VideoMarqueeProps = {
	/** One array per row. Rows alternate direction and slow down downwards. */
	rows: ReelTile[][];
};

export function VideoMarquee({ rows }: VideoMarqueeProps) {
	return (
		<div className="flex flex-col gap-3 md:gap-4">
			{rows
				.filter((tiles) => tiles.length > 0)
				.map((tiles, row) => (
					<Row
						// biome-ignore lint/suspicious/noArrayIndexKey: rows are positional and never reorder
						key={row}
						tiles={tiles}
						reverse={row % 2 === 1}
						duration={BASE_DURATION_S + DURATION_STEP_S * row}
					/>
				))}
		</div>
	);
}
