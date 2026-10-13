import { Avatar, Bar, Chip, MiniButton } from "@/components/shared/mini-ui";
import { cn } from "@/lib/utils";

const panel = "rounded-[4px] border border-hairline bg-card";

const BRIEF_FIELDS = [
	{ label: "Product", flagged: false },
	{ label: "Goal", flagged: false },
	{ label: "Audience", flagged: true },
];

export function BriefMock() {
	return (
		<div className="flex h-full flex-col gap-2 p-3">
			<div className="flex items-center gap-1.5">
				<Chip active>Brief</Chip>
				<Bar width="34%" />
			</div>
			<div
				className={cn(
					panel,
					"flex flex-1 flex-col justify-center gap-1.5 p-2.5",
				)}
			>
				{BRIEF_FIELDS.map((field) => (
					<div key={field.label} className="flex items-center gap-2">
						<span className="w-12 shrink-0 text-[7px] text-muted">
							{field.label}
						</span>
						<span className="h-3 flex-1 rounded-[3px] bg-ink/[0.05] ring-1 ring-hairline" />
						{field.flagged && (
							<span className="h-1.5 w-1.5 rounded-full bg-accent" />
						)}
					</div>
				))}
			</div>
			<div className="flex items-center justify-end gap-1.5">
				<MiniButton className="px-2">Continue</MiniButton>
			</div>
		</div>
	);
}

const CANDIDATES = [
	{ rate: 180, name: "52%", niche: "30%" },
	{ rate: 240, name: "44%", niche: "26%" },
	{ rate: 300, name: "36%", niche: "22%" },
];

export function CreatorMatchMock() {
	return (
		<div className="flex h-full flex-col gap-1.5 p-3">
			<div className="flex items-center justify-between">
				<Bar width="30%" tone="ink" />
				<Chip active>6 vetted</Chip>
			</div>
			<div className={cn(panel, "flex flex-1 flex-col gap-1 p-1.5")}>
				{CANDIDATES.map((candidate, index) => {
					const selected = index === 0;
					return (
						<div
							key={candidate.rate}
							className={cn(
								"flex items-center gap-1.5 rounded-[3px] px-1.5 py-1",
								selected && "bg-accent/[0.07] ring-1 ring-accent/25",
							)}
						>
							<Avatar shade={index} />
							<div className="flex flex-1 flex-col gap-0.5">
								<Bar width={candidate.name} tone={selected ? "ink" : "muted"} />
								<Bar width={candidate.niche} />
							</div>
							<span className="text-[7px] text-muted">${candidate.rate}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

const DRAFT_VERSIONS = [true, false, false];

export function DraftMock() {
	return (
		<div className="flex h-full flex-col gap-2 p-3">
			<div className="flex items-center justify-between">
				<Bar width="26%" tone="ink" />
				<Chip>v3</Chip>
			</div>
			<div className="grid flex-1 grid-cols-3 gap-1.5">
				{DRAFT_VERSIONS.map((current, index) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative slots
						key={index}
						className={cn(
							"relative flex items-center justify-center rounded-[4px] border bg-card",
							current ? "border-accent/40" : "border-hairline",
						)}
					>
						<span
							className={cn(
								"h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent",
								current ? "border-l-accent" : "border-l-ink/25",
							)}
						/>
						<span className="absolute bottom-1 left-1 h-1 w-4 rounded-full bg-ink/15" />
					</div>
				))}
			</div>
		</div>
	);
}

export function ApprovalMock() {
	return (
		<div className="flex h-full flex-col gap-2 p-3">
			<div className={cn(panel, "flex flex-1 flex-col gap-1.5 p-2")}>
				<div className="flex items-start gap-1.5">
					<Avatar shade={1} />
					<div className="flex flex-1 flex-col gap-0.5">
						<Bar width="72%" />
						<Bar width="48%" />
					</div>
					<span className="text-[7px] text-muted">0:12</span>
				</div>
				<div className="h-px w-full bg-hairline" />
				<div className="flex items-start gap-1.5">
					<Avatar shade={3} />
					<div className="flex flex-1 flex-col gap-0.5">
						<Bar width="56%" />
					</div>
				</div>
			</div>
			<div className="flex items-center gap-1.5">
				<MiniButton className="flex-1 text-center">Approve</MiniButton>
				<span className="rounded-full border border-hairline px-2 py-1 text-[7px] text-muted">
					Request change
				</span>
			</div>
		</div>
	);
}

const PUBLISHING_STAGES = [
	{ label: "Setup", progress: 100 },
	{ label: "Warming", progress: 64 },
	{ label: "Posted", progress: 0 },
];

export function PublishingMock() {
	return (
		<div className="flex h-full flex-col gap-1.5 p-3">
			<div className="flex items-center justify-between">
				<Bar width="34%" tone="ink" />
				<span className="flex items-center gap-1">
					<span className="h-1 w-1 rounded-full bg-accent" />
					<span className="text-[7px] text-accent">live</span>
				</span>
			</div>
			<div
				className={cn(panel, "flex flex-1 flex-col justify-center gap-1 p-2")}
			>
				{PUBLISHING_STAGES.map((stage) => (
					<div key={stage.label} className="flex items-center gap-1.5">
						<span
							className={cn(
								"h-1.5 w-1.5 rounded-full",
								stage.progress > 0 ? "bg-accent" : "bg-ink/20",
							)}
						/>
						<span className="text-[7px] text-muted">{stage.label}</span>
						<span className="ml-auto h-1 max-w-[52%] flex-1 rounded-full bg-ink/[0.07]">
							<span
								className="block h-full rounded-full bg-accent/60"
								style={{ width: `${stage.progress}%` }}
							/>
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

const HOOK_SCORES = [38, 62, 90, 54, 72, 44];
const topHook = Math.max(...HOOK_SCORES);

export function ReportingMock() {
	return (
		<div className="flex h-full flex-col gap-2 p-3">
			<div className="flex items-center justify-between">
				<Bar width="28%" tone="ink" />
				<Chip active>top hooks</Chip>
			</div>
			<div className={cn(panel, "flex flex-1 items-end gap-1.5 p-2")}>
				{HOOK_SCORES.map((score) => (
					<span
						key={score}
						className={cn(
							"flex-1 rounded-t-[2px]",
							score === topHook ? "bg-accent/70" : "bg-ink/12",
						)}
						style={{ height: `${score}%` }}
					/>
				))}
			</div>
		</div>
	);
}
