import { Bar, Chip } from "@/components/shared/mini-ui";
import { cn } from "@/lib/utils";

/* Miniature, mostly text-free mocks: one per job the agency team runs. */

const shell = "flex h-full flex-col gap-2 p-3";
const header = "flex items-center justify-between";
const panel = "rounded-[4px] border border-hairline bg-card p-2";

const DEVICES = [
	{ label: "us-01", state: "warmed", progress: "100%", done: true },
	{ label: "us-02", state: "warming", progress: "58%", done: false },
	{ label: "us-03", state: "setup", progress: "18%", done: false },
];

export function WarmupMock() {
	return (
		<div className="flex h-full flex-col gap-1.5 p-3">
			<div className={header}>
				<Bar width="30%" tone="ink" />
				<Chip active>3 devices</Chip>
			</div>
			<div className={cn(panel, "flex flex-1 flex-col justify-center gap-1.5")}>
				{DEVICES.map((device) => (
					<div key={device.label} className="flex items-center gap-2">
						<span className="h-3.5 w-2 shrink-0 rounded-[2px] border border-hairline bg-ink/[0.06]" />
						<span className="w-8 shrink-0 text-[7px] text-muted">
							{device.label}
						</span>
						<span className="h-1 flex-1 rounded-full bg-ink/[0.07]">
							<span
								className="block h-full rounded-full bg-accent/70"
								style={{ width: device.progress }}
							/>
						</span>
						<span
							className={cn(
								"text-[7px]",
								device.done ? "text-accent" : "text-muted",
							)}
						>
							{device.state}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

/* Backlog lines, longest first; the first one is up next. */
const BACKLOG_WIDTHS = ["68%", "57%", "46%", "35%"];

export function StrategyMock() {
	return (
		<div className={shell}>
			<div className={header}>
				<Bar width="26%" tone="ink" />
				<Chip active>backlog</Chip>
			</div>
			<div className={cn(panel, "flex flex-1 flex-col gap-1")}>
				{BACKLOG_WIDTHS.map((width, index) => {
					const next = index === 0;
					return (
						<div key={width} className="flex items-center gap-1.5">
							<span
								className={cn(
									"h-1.5 w-1.5 shrink-0 rounded-full",
									next ? "bg-accent" : "bg-ink/20",
								)}
							/>
							<Bar width={width} tone={next ? "ink" : "muted"} />
							{next && (
								<span className="ml-auto text-[7px] text-accent">next</span>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

const AD_SETS = [
	{ spend: "$1.2k", share: "82%", leading: true },
	{ spend: "$480", share: "46%", leading: false },
	{ spend: "$210", share: "28%", leading: false },
];

export function AdsMock() {
	return (
		<div className={shell}>
			<div className={header}>
				<Bar width="24%" tone="ink" />
				<Chip active>live</Chip>
			</div>
			<div className={cn(panel, "flex flex-1 flex-col justify-center gap-1.5")}>
				{AD_SETS.map((adSet) => (
					<div key={adSet.spend} className="flex items-center gap-2">
						<span className="h-3 w-3 shrink-0 rounded-[2px] bg-ink/[0.07]" />
						<span className="h-1.5 flex-1 rounded-full bg-ink/[0.06]">
							<span
								className={cn(
									"block h-full rounded-full",
									adSet.leading ? "bg-accent/75" : "bg-ink/20",
								)}
								style={{ width: adSet.share }}
							/>
						</span>
						<span className="w-7 text-right text-[7px] text-muted">
							{adSet.spend}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

const FORMATS = ["DEMO", "SKIT", "TESTI", "VO"];
const WINNING_FORMAT = "SKIT";

export function TestingMock() {
	return (
		<div className={shell}>
			<div className={header}>
				<Bar width="30%" tone="ink" />
				<Chip>same offer</Chip>
			</div>
			<div className="grid flex-1 grid-cols-4 gap-1.5">
				{FORMATS.map((format) => {
					const winning = format === WINNING_FORMAT;
					return (
						<div
							key={format}
							className={cn(
								"flex flex-col items-center justify-center gap-1 rounded-[4px] border bg-card",
								winning ? "border-accent/45" : "border-hairline",
							)}
						>
							<span
								className={cn(
									"h-0 w-0 border-y-[4px] border-l-[7px] border-y-transparent",
									winning ? "border-l-accent" : "border-l-ink/25",
								)}
							/>
							<span
								className={cn(
									"text-[6px]",
									winning ? "text-accent" : "text-muted",
								)}
							>
								{format}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export function TrackingMock() {
	return (
		<div className={shell}>
			<div className={header}>
				<Bar width="28%" tone="ink" />
				<span className="flex items-center gap-1">
					<span className="h-1 w-1 rounded-full bg-accent" />
					<span className="text-[7px] text-accent">live</span>
				</span>
			</div>
			<div className={cn(panel, "relative flex-1 overflow-hidden")}>
				<svg
					viewBox="0 0 100 40"
					preserveAspectRatio="none"
					className="h-full w-full"
					aria-hidden="true"
				>
					<polyline
						points="0,32 12,28 24,30 36,20 48,23 60,12 72,15 84,6 100,9"
						fill="none"
						stroke="var(--accent)"
						strokeWidth="1.6"
						vectorEffect="non-scaling-stroke"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<polyline
						points="0,36 12,35 24,36 36,33 48,34 60,31 72,32 84,29 100,30"
						fill="none"
						stroke="currentColor"
						className="text-ink/15"
						strokeWidth="1.2"
						vectorEffect="non-scaling-stroke"
					/>
				</svg>
				<span className="absolute right-2 top-1.5 text-[7px] text-muted">
					last 24h
				</span>
			</div>
		</div>
	);
}

const VARIANT_SLOTS = ["a", "b", "c", "d"];

export function ScalingMock() {
	return (
		<div className={shell}>
			<div className={header}>
				<Bar width="26%" tone="ink" />
				<Chip active>winner</Chip>
			</div>
			<div className={cn(panel, "flex flex-1 items-center gap-2")}>
				<div className="flex h-full w-8 shrink-0 items-center justify-center rounded-[3px] border border-accent/45 bg-accent/[0.07]">
					<span className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-accent" />
				</div>
				<span className="text-[9px] text-muted">→</span>
				<div className="grid flex-1 grid-cols-4 gap-1">
					{VARIANT_SLOTS.map((slot) => (
						<div
							key={slot}
							className="flex h-full items-center justify-center rounded-[3px] border border-hairline bg-surface"
						>
							<span className="h-0 w-0 border-y-[3px] border-l-[5px] border-y-transparent border-l-ink/25" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
