import { Check, ShieldCheck } from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { NetworkTicker } from "@/components/sections/warmed-tiktok-accounts/network-ticker";
import { OrderTracker } from "@/components/sections/warmed-tiktok-accounts/order-tracker";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import {
	type BuildStep,
	buildSteps,
	cleanRules,
} from "@/content/warmed-tiktok-accounts";

function BuildStepCard({ step, index }: { step: BuildStep; index: string }) {
	return (
		<div className="flex min-w-0 flex-col gap-2.5 border-t border-hairline pt-5">
			<span className="mono-label text-accent">{index}</span>
			<h3 className="text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
				{step.title}
			</h3>
			<p className="text-[0.92rem] leading-relaxed text-muted sm:max-w-[34ch]">
				{step.body}
			</p>
		</div>
	);
}

function CleanRules() {
	return (
		<div className="h-full rounded-[1.5rem] border border-hairline bg-surface p-6">
			<span className="mono-label flex items-center gap-2 text-accent">
				<ShieldCheck aria-hidden className="h-3.5 w-3.5" strokeWidth={1.75} />{" "}
				How we keep this clean
			</span>
			<ul className="mt-4 flex flex-col gap-2.5">
				{cleanRules.map((rule) => (
					<li
						key={rule}
						className="flex items-start gap-2.5 text-[0.9rem] text-muted"
					>
						<Check
							aria-hidden
							className="mt-[3px] h-4 w-4 shrink-0 text-accent"
							strokeWidth={2.25}
						/>
						{rule}
					</li>
				))}
			</ul>
		</div>
	);
}

export function HowBuilt() {
	return (
		<section className="w-full border-t border-hairline px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="01"
						label="How they're built"
						title={
							<>
								Accounts built in your market, warmed in{" "}
								<Accent>your exact niche.</Accent>
							</>
						}
						description={
							<>
								We create accounts from scratch in the country you’re targeting,
								warm them inside your category on{" "}
								<span className="hl hl-b">
									real phones with real local SIMs
								</span>{" "}
								run by real people, then hand them over to you — or keep posting
								your approved content through them, if you’d rather we ran it.
							</>
						}
					/>
				</Reveal>

				<div className="mt-16">
					<RevealStagger className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
						{buildSteps.map((step, position) => (
							<RevealItem key={step.title}>
								<BuildStepCard
									step={step}
									index={String(position + 1).padStart(2, "0")}
								/>
							</RevealItem>
						))}
					</RevealStagger>

					{/* The caption sits outside the figure, as on the live page, so it stays below the bordered frame. */}
					<Reveal>
						<figure className="mt-16 overflow-hidden rounded-[1.5rem] border border-hairline bg-surface">
							<img
								src="/product/accounts.png"
								alt="The account inventory in the Tokgency app, showing each warmed account's niche, city, days warmed and current state."
								width={1500}
								height={700}
								loading="lazy"
								decoding="async"
								className="h-auto w-full"
							/>
						</figure>
						<figcaption className="mono-label mt-3 text-center text-muted">
							Your account inventory, in the app
						</figcaption>
					</Reveal>

					<div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
						<Reveal>
							<OrderTracker />
						</Reveal>
						<Reveal>
							<CleanRules />
						</Reveal>
					</div>
				</div>

				<Reveal className="mx-auto mt-16 w-full max-w-3xl">
					<NetworkTicker />
				</Reveal>
			</div>
		</section>
	);
}
