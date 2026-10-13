import { Check, Play, Search, Sparkles } from "lucide-react";
import { PosterTile } from "@/components/sections/tiktok-shop/poster-tile";
import { MockFrame } from "@/components/shared/mock-frame";
import {
	briefBeats,
	featuredCreators,
	type JobMock,
	shortlistSearch,
} from "@/content/tiktok-shop";
import { ordinal } from "@/lib/utils";

/* The shortlist shows three results with the first two already picked. */
const SEARCH_RESULTS = featuredCreators.slice(0, 3);
const SHORTLISTED = 2;
const REFERENCE_CUT = featuredCreators[featuredCreators.length - 1];

function ShortlistMock() {
	return (
		<MockFrame>
			<div className="flex items-center gap-2.5 rounded-full border border-hairline bg-card px-4 py-2.5">
				<Search aria-hidden className="h-3.5 w-3.5 shrink-0 text-muted" />
				<span className="truncate text-[0.82rem] text-muted">
					{shortlistSearch.query}
				</span>
				<span className="ml-auto hidden h-4 w-px bg-hairline sm:block" />
				<span className="mono-label hidden shrink-0 text-accent sm:block">
					Search
				</span>
			</div>
			<div className="mt-3 flex flex-wrap gap-1.5">
				{shortlistSearch.filters.map((filter) => (
					<span
						key={filter}
						className="rounded-full border border-hairline bg-card px-2.5 py-1 text-[0.72rem] text-muted"
					>
						{filter}
					</span>
				))}
			</div>
			<div className="mt-5 grid grid-cols-3 gap-2.5">
				{SEARCH_RESULTS.map((tile, position) => (
					<PosterTile
						key={tile.href}
						tile={tile}
						selected={position < SHORTLISTED}
					/>
				))}
			</div>
			<div className="mt-4 flex items-center justify-between gap-3 border-t border-hairline pt-3.5">
				<span className="mono-label text-muted">{SHORTLISTED} shortlisted</span>
				<span className="mono-label flex items-center gap-1.5 text-accent">
					<Sparkles aria-hidden className="h-3 w-3" /> Reviewed by a person
				</span>
			</div>
		</MockFrame>
	);
}

function BriefMock() {
	return (
		<MockFrame>
			<div className="flex items-start gap-4 sm:gap-5">
				<div className="w-[34%] shrink-0 sm:w-[30%]">
					<PosterTile tile={REFERENCE_CUT} />
					<span className="mono-label mt-2 block text-center text-muted">
						Reference cut
					</span>
				</div>
				<div className="min-w-0 flex-1">
					<div className="flex items-center gap-2">
						<span className="mono-label text-accent">Brief</span>
						<span className="h-px flex-1 bg-hairline" />
					</div>
					<div className="mt-3 flex flex-col gap-2">
						{briefBeats.map((beat, position) => (
							<div
								key={beat.label}
								className="rounded-xl border border-hairline bg-card p-3"
							>
								<div className="flex items-baseline gap-2">
									<span className="mono-label text-accent">
										{ordinal(position)}
									</span>
									<span className="mono-label truncate text-muted">
										{beat.label}
									</span>
								</div>
								<p className="mt-1.5 text-[0.82rem] leading-snug text-ink">
									{beat.text}
								</p>
							</div>
						))}
					</div>
					<p className="mt-3 text-[0.78rem] leading-relaxed text-muted">
						One brief, shot by every creator to the same spec.
					</p>
				</div>
			</div>
		</MockFrame>
	);
}

function PayoutRow({ handle }: { handle: string }) {
	return (
		<li className="flex items-center gap-3 border-t border-hairline py-2 first:border-t-0">
			<span className="min-w-0 flex-1 truncate text-[0.82rem] text-ink">
				@{handle}
			</span>
			<span className="mono-label hidden text-muted sm:block">Approved</span>
			<span className="hidden text-muted sm:block">→</span>
			<span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5">
				<Check aria-hidden className="h-3 w-3 text-accent" strokeWidth={3} />
				<span className="mono-label text-accent">Paid</span>
			</span>
		</li>
	);
}

function PayoutsMock() {
	return (
		<MockFrame>
			<div className="flex items-center gap-2">
				<span className="mono-label text-accent">Delivered</span>
				<span className="h-px flex-1 bg-hairline" />
				<span className="mono-label text-muted">Approved by you</span>
			</div>
			<div className="mt-3 grid grid-cols-4 gap-2">
				{featuredCreators.map((tile) => (
					<div key={tile.href} className="relative">
						<PosterTile tile={tile} />
						<span className="absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
							<Play
								aria-hidden
								className="h-2.5 w-2.5 text-white"
								fill="currentColor"
							/>
						</span>
					</div>
				))}
			</div>
			<div className="mt-5 rounded-xl border border-hairline bg-card p-3.5">
				<div className="flex items-center justify-between">
					<span className="mono-label text-muted">Creator payouts</span>
					<span className="mono-label text-accent">Released on approval</span>
				</div>
				<ul className="mt-2.5 flex flex-col">
					{featuredCreators.map((tile) => (
						<PayoutRow key={tile.handle} handle={tile.handle} />
					))}
				</ul>
			</div>
			<div className="mt-3.5 flex items-center justify-between gap-3 rounded-xl border border-hairline bg-card px-3.5 py-3">
				<span className="text-[0.85rem] text-muted">You pay</span>
				<span className="font-serif text-[1.35rem] not-italic leading-none text-ink">
					one invoice
				</span>
			</div>
		</MockFrame>
	);
}

const MOCKS = {
	shortlist: ShortlistMock,
	brief: BriefMock,
	payouts: PayoutsMock,
} satisfies Record<JobMock, () => React.JSX.Element>;

export function JobMockup({ mock }: { mock: JobMock }) {
	const Mock = MOCKS[mock];
	return <Mock />;
}
