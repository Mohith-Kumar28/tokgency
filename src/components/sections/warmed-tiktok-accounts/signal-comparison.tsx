import { Check, X } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { type SignalRow, signalRows } from "@/content/warmed-tiktok-accounts";
import { cn } from "@/lib/utils";

/* Shared by the header and every row so the three columns stay aligned. */
const columns =
	"grid grid-cols-[1.15fr_1fr_1fr] gap-2 px-4 py-4 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]";

/* Below sm only the tick or cross shows; the explanation appears from sm up. */
const cellText = "hidden text-[0.85rem] leading-snug sm:inline";

function SignalRowItem({ signal, farm, ours }: SignalRow) {
	return (
		<div
			className={cn(
				columns,
				"items-start transition-colors hover:bg-surface/60",
			)}
		>
			<span className="pr-2 text-[0.88rem] font-medium leading-snug text-ink sm:text-[0.95rem]">
				{signal}
			</span>
			<span className="flex items-start gap-2">
				<X
					aria-hidden
					className="mt-[3px] h-4 w-4 shrink-0 text-muted/70"
					strokeWidth={2.25}
				/>
				<span className={cn(cellText, "text-muted")}>{farm}</span>
			</span>
			<span className="flex items-start gap-2">
				<Check
					aria-hidden
					className="mt-[3px] h-4 w-4 shrink-0 text-accent"
					strokeWidth={2.5}
				/>
				<span className={cn(cellText, "text-ink")}>{ours}</span>
			</span>
		</div>
	);
}

function SignalTable() {
	return (
		<div className="overflow-hidden rounded-[1.75rem] border border-hairline bg-card shadow-soft">
			<div
				className={cn(columns, "items-end border-b border-hairline bg-surface")}
			>
				<span className="mono-label text-muted">Signal</span>
				<span className="mono-label text-muted">VPN / phone farm</span>
				<span className="mono-label flex items-center gap-1.5 text-accent">
					<span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
					Tokgency
				</span>
			</div>

			<div className="divide-y divide-hairline">
				{signalRows.map((row) => (
					<SignalRowItem key={row.signal} {...row} />
				))}
			</div>

			<div className="flex flex-wrap items-center justify-between gap-2 border-t border-hairline bg-surface px-4 py-4 sm:px-6">
				<span className="mono-label text-muted">
					Warmed by Tokgency · handed over to you
				</span>
				<span className="mono-label text-accent">Built, not bought</span>
			</div>
		</div>
	);
}

export function SignalComparison() {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-5xl">
				<Reveal>
					<SectionHeading
						index="02"
						label="Signal comparison"
						title={
							<>
								You can't fake <Accent>local.</Accent>
							</>
						}
						description="Most 'US accounts' are a proxy and a spoofed pin on a map. Here is what sits behind ours instead, signal by signal."
					/>
				</Reveal>

				<Reveal className="mt-14">
					<SignalTable />
				</Reveal>

				<Reveal>
					<p className="mx-auto mt-6 max-w-2xl text-center text-[0.85rem] leading-relaxed text-muted">
						None of this guarantees a result. It removes the reasons a brand-new
						account gets treated like a bot before your content ever gets a fair
						look.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
