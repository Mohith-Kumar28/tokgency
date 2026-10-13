import reel from "@/content/creator-reel.json";

export type ReelItem = (typeof reel.items)[number];

/** The trimmed shape a video tile needs. */
export type ReelTile = {
	src: string;
	poster?: string;
	handle: string;
	plays: number;
	href: string;
};

const toTile = (item: ReelItem): ReelTile => ({
	src: item.src,
	poster: item.poster ?? undefined,
	handle: item.handle,
	plays: item.plays,
	href: item.postUrl ?? item.profileUrl,
});

const techReel = reel.items.filter((item) => item.segment === "tech");
const d2cReel = reel.items.filter((item) => item.segment === "d2c");

/** Builds a row where every fifth tile comes from the secondary pool. */
function interleave(
	primary: ReelItem[],
	secondary: ReelItem[],
	length: number,
): ReelTile[] {
	const row: ReelItem[] = [];
	let p = 0;
	let s = 0;

	for (let i = 0; i < length; i++) {
		if ((i + 1) % 5 === 0 && s < secondary.length) row.push(secondary[s++]);
		else if (p < primary.length) row.push(primary[p++]);
		else if (s < secondary.length) row.push(secondary[s++]);
	}

	return row.map(toTile);
}

const ROW_LENGTH = 20;
const D2C_PER_ROW = Math.floor(ROW_LENGTH / 5);
const TECH_PER_ROW = ROW_LENGTH - D2C_PER_ROW;

/** Tiles for the "formats we make" wall. */
export const wallTiles = interleave(
	techReel.slice(0, TECH_PER_ROW),
	d2cReel.slice(0, D2C_PER_ROW),
	ROW_LENGTH,
);

/** Tiles for the "creators we work with" strip. */
export const rosterTiles = interleave(
	techReel.slice(TECH_PER_ROW, TECH_PER_ROW * 2),
	d2cReel.slice(D2C_PER_ROW, D2C_PER_ROW * 2),
	ROW_LENGTH,
);

/** Splits tiles into `count` equal marquee rows. */
export function toRows<T>(tiles: T[], count: number): T[][] {
	const size = Math.ceil(tiles.length / count);
	return Array.from({ length: count }, (_, row) =>
		tiles.slice(row * size, (row + 1) * size),
	);
}

export const d2cTiles = d2cReel.map(toTile);

const MAX_FEATURE_SECONDS = 30;

/** Short, captioned, most-played clips, one per creator. */
function pickFeatured(pool: ReelItem[], count: number): ReelItem[] {
	const ranked = pool
		.filter((item) => (item.durationSeconds ?? 99) <= MAX_FEATURE_SECONDS)
		.sort((a, b) => {
			const byCaption = Number(Boolean(b.caption)) - Number(Boolean(a.caption));
			return byCaption !== 0 ? byCaption : b.plays - a.plays;
		});

	const picked: ReelItem[] = [];
	for (const item of ranked) {
		if (picked.some((other) => other.handle === item.handle)) continue;
		picked.push(item);
		if (picked.length === count) break;
	}
	return picked;
}

/** Clips cycled inside the hero phone. */
export const heroClips = [
	...pickFeatured(techReel, 2),
	...pickFeatured(d2cReel, 1),
];

/** 227800 -> "227.8K", 1200000 -> "1.2M" */
export function formatPlays(plays: number): string {
	const trim = (value: number) => value.toFixed(1).replace(/\.0$/, "");
	if (plays >= 1_000_000) return `${trim(plays / 1_000_000)}M`;
	if (plays >= 1_000) return `${trim(plays / 1_000)}K`;
	return String(plays);
}
