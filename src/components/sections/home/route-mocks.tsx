import { Check, MousePointer2 } from "lucide-react";
import { MockFrame } from "@/components/shared/mock-frame";
import { cn } from "@/lib/utils";

const frameClass = "!p-4 sm:!p-5";

const WORKSPACE_NAV = ["Creators", "Campaign", "Content", "Accounts"];
const ACTIVE_NAV = "Campaign";
const BRIEF_LINES = [
	{ width: "58%", strong: true },
	{ width: "82%", strong: false },
	{ width: "41%", strong: false },
];
const CREATOR_SLOTS = [true, true, false, false];

/** Self-serve route: a miniature of the campaign builder. */
export function PortalMock() {
	return (
		<MockFrame
			caption="Everything open. Nobody in the way."
			className={frameClass}
		>
			<div className="flex overflow-hidden rounded-xl border border-hairline bg-card">
				<div className="hidden w-[104px] shrink-0 flex-col gap-1 border-r border-hairline p-3 sm:flex">
					<span className="mono-label mb-1 block !text-[8px] text-muted">
						Workspace
					</span>
					{WORKSPACE_NAV.map((item) => {
						const active = item === ACTIVE_NAV;
						return (
							<span
								key={item}
								className={cn(
									"flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[0.68rem]",
									active ? "bg-surface text-ink" : "text-muted",
								)}
							>
								<span
									className={cn(
										"h-1 w-1 rounded-full",
										active ? "bg-accent" : "bg-muted opacity-60",
									)}
								/>
								{item}
							</span>
						);
					})}
				</div>

				<div className="min-w-0 flex-1 p-3.5">
					<div className="flex items-center justify-between">
						<span className="mono-label !text-[8px] text-muted">
							New campaign
						</span>
						<span className="mono-label rounded-full bg-accent-soft px-1.5 py-0.5 !text-[8px] text-accent">
							Draft
						</span>
					</div>

					<div className="mt-2.5 flex flex-col gap-1.5 rounded-lg border border-hairline bg-surface p-2.5">
						{BRIEF_LINES.map((line) => (
							<span
								key={line.width}
								className={cn(
									"block h-1.5 rounded-full",
									line.strong ? "bg-hairline-strong" : "bg-hairline",
								)}
								style={{ width: line.width }}
							/>
						))}
					</div>

					<div className="mt-2.5 grid grid-cols-4 gap-1.5">
						{CREATOR_SLOTS.map((selected, index) => (
							<span
								// biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative slots
								key={index}
								className={cn(
									"aspect-[9/13] rounded-md border",
									selected
										? "border-accent/60 bg-accent/10"
										: "border-hairline bg-surface",
								)}
							/>
						))}
					</div>

					<div className="relative mt-3 flex items-center gap-2">
						<span className="rounded-full bg-primary px-2.5 py-1 text-[0.64rem] font-semibold text-on-primary">
							Send briefs
						</span>
						<span className="mono-label !text-[8px] text-muted">
							2 selected
						</span>
						<MousePointer2
							aria-hidden
							className="absolute left-[46px] top-[13px] h-4 w-4 text-accent"
							strokeWidth={1}
							fill="currentColor"
						/>
					</div>
				</div>
			</div>
		</MockFrame>
	);
}

const MANAGED_STEPS = [
	"Brief written",
	"Creators hired",
	"Accounts warmed",
	"Content produced",
	"Posted",
];

/** Managed route: everything Tokgency does, handing one approval to you. */
export function ManagedMock() {
	return (
		<MockFrame caption="One decision stays with you." className={frameClass}>
			<div className="flex items-stretch gap-3 sm:gap-4">
				<div className="min-w-0 flex-1 rounded-xl border border-hairline bg-card p-3.5">
					<div className="flex items-center gap-2">
						<span className="mono-label !text-[8px] text-accent">
							Tokgency runs
						</span>
						<span className="h-px flex-1 bg-hairline" />
					</div>
					<ul className="mt-2.5 flex flex-col gap-2">
						{MANAGED_STEPS.map((step) => (
							<li key={step} className="flex items-center gap-2">
								<span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-accent-soft">
									<Check
										aria-hidden
										className="h-2 w-2 text-accent"
										strokeWidth={4}
									/>
								</span>
								<span className="truncate text-[0.72rem] text-muted">
									{step}
								</span>
							</li>
						))}
					</ul>
				</div>

				<div className="flex w-8 shrink-0 flex-col items-center justify-center">
					<span className="h-full w-px bg-hairline-strong" />
					<span className="my-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline bg-accent-soft">
						<span className="text-[0.7rem] leading-none text-accent">→</span>
					</span>
					<span className="h-full w-px bg-hairline-strong" />
				</div>

				<div className="flex w-[38%] shrink-0 flex-col rounded-xl border border-hairline bg-card p-3.5">
					<div className="flex items-center gap-2">
						<span className="mono-label !text-[8px] text-muted">You</span>
						<span className="h-px flex-1 bg-hairline" />
					</div>
					<div className="mt-2.5 flex flex-1 flex-col justify-center gap-2 rounded-lg border border-hairline bg-surface p-2.5">
						<span className="aspect-[9/12] w-full rounded-md border border-hairline bg-card" />
						<span className="block rounded-full bg-primary px-2 py-1 text-center text-[0.64rem] font-semibold text-on-primary">
							Approve
						</span>
					</div>
				</div>
			</div>
		</MockFrame>
	);
}
