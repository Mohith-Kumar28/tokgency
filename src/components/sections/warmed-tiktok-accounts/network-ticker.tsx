import { motion, useReducedMotion } from "motion/react";
import {
	type ActivityRow,
	activityRows,
} from "@/content/warmed-tiktok-accounts";

function TickerRow({ row }: { row: ActivityRow }) {
	return (
		<div className="flex items-center gap-2.5 whitespace-nowrap px-4 py-[0.55rem] text-[0.78rem] sm:gap-3 sm:px-5 sm:text-[0.82rem]">
			<span className="font-mono tabular-nums text-on-contrast/35">
				{row.time}
			</span>
			<span className="text-accent" aria-hidden>
				›
			</span>
			<span className="truncate font-mono text-on-contrast/85">
				{row.handle}
			</span>
			<span aria-hidden className="shrink-0 text-[0.75rem]">
				{row.flag}
			</span>
			<span className="ml-auto flex shrink-0 items-center gap-1.5 font-mono">
				{row.value && <span className="text-accent">{row.value}</span>}
				<span className="text-on-contrast/50">{row.text}</span>
			</span>
		</div>
	);
}

/* The list is rendered twice and slid up by half its height, so the loop is seamless. */
const LOOPED_ROWS = [...activityRows, ...activityRows];
const LOOP_SECONDS = 34;

/** Dark terminal-style feed of sample account activity that scrolls forever. */
export function NetworkTicker() {
	const reduced = useReducedMotion();

	return (
		<div className="w-full rounded-[1.75rem] border border-hairline bg-card p-2.5 shadow-lift">
			<div className="overflow-hidden rounded-[1.4rem] bg-contrast">
				<div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
					<span className="inline-flex items-center gap-2">
						<span className="relative flex h-1.5 w-1.5">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
							<span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
						</span>
						<span className="mono-label text-on-contrast/70">
							Network activity
						</span>
					</span>
					<span className="mono-label rounded-full border border-white/10 bg-white/5 px-2 py-1 text-on-contrast/45">
						Sample feed
					</span>
				</div>

				<div className="relative h-[248px] overflow-hidden sm:h-[286px]">
					<motion.div
						animate={reduced ? undefined : { y: ["0%", "-50%"] }}
						transition={{
							duration: LOOP_SECONDS,
							ease: "linear",
							repeat: Number.POSITIVE_INFINITY,
						}}
					>
						{LOOPED_ROWS.map((row, position) => (
							<TickerRow
								// biome-ignore lint/suspicious/noArrayIndexKey: rows repeat by design, position is the only stable identity
								key={position}
								row={row}
							/>
						))}
					</motion.div>
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 top-0 h-10"
						style={{
							background:
								"linear-gradient(to bottom, var(--contrast), transparent)",
						}}
					/>
					<div
						aria-hidden
						className="pointer-events-none absolute inset-x-0 bottom-0 h-12"
						style={{
							background:
								"linear-gradient(to top, var(--contrast), transparent)",
						}}
					/>
				</div>

				<div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 sm:px-5">
					<span className="mono-label text-on-contrast/45">
						Real phones · real local SIMs · real people
					</span>
					<span className="mono-label hidden text-on-contrast/45 sm:inline">
						US · more markets on request
					</span>
				</div>
			</div>
		</div>
	);
}
