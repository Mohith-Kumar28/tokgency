import type { WayArt } from "@/content/tiktok-shop";
import { cn } from "@/lib/utils";

/* Tiny abstract diagrams for the "Four ways to sell" cards. All decorative. */

/** Commission split between the creator and the brand. */
function SplitArt() {
	return (
		<div className="flex w-full flex-col gap-2.5">
			<div className="flex justify-between">
				<span className="mono-label !text-[8px] text-accent">Creator</span>
				<span className="mono-label !text-[8px] text-muted">You</span>
			</div>
			<div className="flex h-2.5 w-full overflow-hidden rounded-full bg-card">
				<span className="h-full w-[42%] bg-accent" />
				<span className="h-full w-px bg-surface" />
				<span className="h-full flex-1 bg-hairline-strong" />
			</div>
			<span className="mono-label !text-[8px] text-muted">
				Paid on what sells
			</span>
		</div>
	);
}

/* One product going out to three creators; the middle one posted. */
const SEEDED = [false, true, false];

function SeedingArt() {
	return (
		<div className="flex w-full items-center gap-2.5">
			<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-hairline bg-card">
				<span className="h-3.5 w-3.5 rounded-[3px] bg-accent" />
			</span>
			<span className="flex flex-1 flex-col gap-2.5">
				{SEEDED.map((posted, row) => (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative rows
						key={row}
						className="flex items-center gap-2"
					>
						<span className="h-px flex-1 bg-hairline-strong" />
						<span
							className={cn(
								"h-2 w-2 shrink-0 rounded-full",
								posted ? "bg-accent" : "bg-muted opacity-60",
							)}
						/>
						<span className="h-1.5 w-8 shrink-0 rounded-full bg-hairline-strong" />
					</span>
				))}
			</span>
		</div>
	);
}

/* A shelf of assets with the hero cut in the middle. Heights in px. */
const LIBRARY_HEIGHTS = [26, 40, 54, 68, 54, 40, 26];
const LIBRARY_PEAK = Math.max(...LIBRARY_HEIGHTS);

function LibraryArt() {
	return (
		<div className="flex w-full items-end justify-between gap-1.5">
			{LIBRARY_HEIGHTS.map((height, column) => (
				<span
					// biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative columns
					key={column}
					className={cn(
						"flex-1 rounded-[3px] border",
						height === LIBRARY_PEAK
							? "border-accent/70 bg-accent/25"
							: "border-hairline bg-card",
					)}
					style={{ height }}
				/>
			))}
		</div>
	);
}

/* Viewers climbing during a live session; the last bars are the spike. */
const LIVE_HEIGHTS = [12, 20, 16, 30, 26, 44, 58];
const LIVE_SPIKE_FROM = 5;

function LiveArt() {
	return (
		<div className="flex w-full items-end justify-between gap-3">
			<span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-hairline bg-card px-2 py-1">
				<span className="h-1.5 w-1.5 rounded-full bg-accent" />
				<span className="mono-label !text-[8px] text-accent">Live</span>
			</span>
			<span className="flex flex-1 items-end justify-end gap-1.5">
				{LIVE_HEIGHTS.map((height, column) => (
					<span
						// biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative columns
						key={column}
						className={cn(
							"w-2 rounded-full",
							column >= LIVE_SPIKE_FROM ? "bg-accent" : "bg-hairline-strong",
						)}
						style={{ height }}
					/>
				))}
			</span>
		</div>
	);
}

const ART = {
	split: SplitArt,
	seeding: SeedingArt,
	library: LibraryArt,
	live: LiveArt,
} satisfies Record<WayArt, () => React.JSX.Element>;

export function WayArtwork({ art }: { art: WayArt }) {
	const Art = ART[art];

	return (
		<div
			aria-hidden
			className="relative mb-5 flex h-[104px] w-full items-center overflow-hidden rounded-xl border border-hairline px-3"
			style={{
				background:
					"radial-gradient(95% 130% at 50% 0%, var(--accent-soft) 0%, transparent 64%), var(--surface)",
			}}
		>
			<Art />
		</div>
	);
}
