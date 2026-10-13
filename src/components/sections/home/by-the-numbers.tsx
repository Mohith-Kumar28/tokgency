import { Quote } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import {
	BlossomFlora,
	DaisyFlora,
} from "@/components/sections/home/stat-flora";
import { ScribbleSparkle } from "@/components/shared/scribbles";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const cardBase =
	"relative flex h-full min-h-[300px] min-w-0 flex-col overflow-hidden rounded-[1.6rem] border border-hairline p-7 sm:p-9";

type StatCardProps = {
	value: string;
	label: string;
	/** Background tint for the card. */
	tone: string;
	flora: ReactNode;
};

function StatCard({ value, label, tone, flora }: StatCardProps) {
	return (
		<div className={cn(cardBase, "lg:aspect-square", tone)}>
			<p className="text-[clamp(3.5rem,7.4vw,5.25rem)] font-medium leading-[0.86] tracking-[-0.055em] text-ink">
				{value}
			</p>
			<p className="mt-3 max-w-[16ch] text-[clamp(1.05rem,1.5vw,1.25rem)] font-medium leading-[1.3] tracking-[-0.015em] text-ink/80">
				{label}
			</p>
			<div className="pointer-events-none absolute -bottom-2 right-0 w-[62%] max-w-[230px] translate-x-[6%] sm:w-[58%]">
				{flora}
			</div>
		</div>
	);
}

type QuoteCardProps = {
	children: ReactNode;
	name: string;
	title: string;
	/** Photo path, or initials when there is no single person to show. */
	avatar: { src: string } | { initials: string };
};

function QuoteCard({ children, name, title, avatar }: QuoteCardProps) {
	return (
		<figure className={cn(cardBase, "justify-between bg-card")}>
			<Quote
				aria-hidden
				fill="currentColor"
				strokeWidth={0}
				className="absolute right-6 top-6 h-11 w-11 text-ink/[0.09]"
			/>
			<blockquote className="relative max-w-[46ch] pr-12 text-[clamp(1.15rem,1.55vw,1.4rem)] leading-[1.45] tracking-[-0.011em] text-ink">
				{children}
			</blockquote>
			<figcaption className="mt-8 flex items-center gap-3.5">
				{"src" in avatar ? (
					<img
						src={avatar.src}
						alt={name}
						width={80}
						height={80}
						loading="lazy"
						decoding="async"
						className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-hairline"
					/>
				) : (
					<span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[color-mix(in_oklab,var(--accent)_14%,var(--surface))] text-[0.85rem] font-medium text-ink">
						{avatar.initials}
					</span>
				)}
				<span className="min-w-0">
					<span className="block truncate text-[1.02rem] font-medium text-ink">
						{name}
					</span>
					<span className="block truncate text-[0.9rem] text-muted">
						{title}
					</span>
				</span>
			</figcaption>
		</figure>
	);
}

export function ByTheNumbers() {
	return (
		<section className="relative w-full px-4 pb-24 md:pb-32">
			<div className="relative mx-auto w-full max-w-6xl">
				<ScribbleSparkle className="absolute right-6 top-6 hidden h-8 w-8 text-accent opacity-60 lg:block" />

				<Reveal>
					<SectionHeading
						index="01"
						label="By the numbers"
						title={
							<>
								A growth channel built by <Accent>people who run it.</Accent>
							</>
						}
						description="The reach we move, the creators we can reach, and the account infrastructure behind both."
					/>
				</Reveal>

				<RevealStagger className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-5">
					<RevealItem className="min-w-0 lg:col-span-2">
						<StatCard
							value="1B+"
							label="Views in the last 30 days"
							tone="bg-[color-mix(in_oklab,var(--accent)_13%,var(--card))]"
							flora={<DaisyFlora />}
						/>
					</RevealItem>

					<RevealItem className="min-w-0 lg:col-span-3">
						<QuoteCard
							name="The Tokgency founding team"
							title="Consumer-app growth"
							avatar={{ initials: "TG" }}
						>
							We have spent four years on consumer app growth, taking Merlin,
							Rocket AI and Scalio AI past <span className="hl">$20M ARR</span>.
							Tokgency is that same playbook, run for you.
						</QuoteCard>
					</RevealItem>

					<RevealItem className="min-w-0 lg:col-span-3">
						<QuoteCard
							name="The Tokgency operating team"
							title="Account infrastructure · U.S."
							avatar={{ initials: "TG" }}
						>
							Warmed US accounts, built one brand at a time on real phones with
							real local SIMs — then{" "}
							<span className="hl">handed over to you</span>. That is the
							infrastructure, and we run it ourselves.
						</QuoteCard>
					</RevealItem>

					<RevealItem className="min-w-0 lg:col-span-2">
						<StatCard
							value="50,000"
							label="Vetted creators in our network"
							tone="bg-[color-mix(in_oklab,var(--accent)_5%,var(--surface))]"
							flora={<BlossomFlora />}
						/>
					</RevealItem>
				</RevealStagger>

				<Reveal>
					<p className="mx-auto mt-7 max-w-2xl text-center text-[0.82rem] leading-relaxed text-muted">
						The views figure is our team’s own total across the short-form
						programs we run, not any single brand’s result. Past performance is
						not a promise of reach.
					</p>
				</Reveal>
			</div>
		</section>
	);
}
