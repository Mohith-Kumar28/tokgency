import { Check, type LucideIcon, X } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { problem } from "@/content/tiktok-shop";
import { cn } from "@/lib/utils";

type Tone = "muted" | "accent";

const TONES: Record<
	Tone,
	{ icon: LucideIcon; label: string; mark: string; text: string }
> = {
	muted: {
		icon: X,
		label: "text-muted",
		mark: "text-muted",
		text: "text-muted",
	},
	accent: {
		icon: Check,
		label: "text-accent",
		mark: "text-accent",
		text: "text-ink",
	},
};

function Column({
	label,
	items,
	tone,
}: {
	label: string;
	items: string[];
	tone: Tone;
}) {
	const { icon: Icon, ...styles } = TONES[tone];

	return (
		<>
			<div className="flex items-center gap-3">
				<span className={cn("mono-label", styles.label)}>{label}</span>
				<span className="h-px flex-1 bg-hairline" />
			</div>
			<ul className="mt-5 flex flex-col gap-4">
				{items.map((item) => (
					<li key={item} className="flex items-start gap-3">
						<Icon
							aria-hidden
							className={cn("mt-[3px] h-4 w-4 shrink-0", styles.mark)}
							strokeWidth={2.25}
						/>
						<span className={cn("text-[0.95rem] leading-relaxed", styles.text)}>
							{item}
						</span>
					</li>
				))}
			</ul>
		</>
	);
}

export function Problem() {
	return (
		<section className="w-full border-t border-hairline px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="01"
						label="The problem"
						title={
							<>
								You don’t have a TikTok problem. You have a{" "}
								<Accent>creator problem.</Accent>
							</>
						}
						description="The brands winning on TikTok Shop are not lucky. They have a system for finding creators who already sell in their category, and for keeping a pipeline of new ones."
					/>
				</Reveal>

				<Reveal>
					<div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
						<div className="rounded-[1.5rem] border border-hairline bg-surface p-7">
							<Column label="On your own" items={problem.alone} tone="muted" />
						</div>
						<div
							className="relative overflow-hidden rounded-[1.5rem] border border-hairline bg-card p-7"
							style={{
								backgroundImage:
									"radial-gradient(110% 90% at 88% 0%, var(--accent-soft) 0%, transparent 60%)",
							}}
						>
							<Column
								label="With Tokgency"
								items={problem.withTokgency}
								tone="accent"
							/>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
