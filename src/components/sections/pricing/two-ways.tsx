import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { Accent, SectionHeading } from "@/components/shared/section-heading";
import { ShieldNote } from "@/components/shared/shield-note";
import { SmartLink } from "@/components/shared/smart-link";
import { TickList } from "@/components/shared/tick-list";
import { headerActions } from "@/config/site";
import { agencyFeatures, selfServeFeatures } from "@/content/pricing";

function SelfServeCard() {
	return (
		<div className="flex h-full min-w-0 flex-col gap-5 rounded-[1.75rem] border border-hairline bg-card p-8 shadow-soft">
			<div className="flex items-center gap-3">
				<span className="h-px w-7 bg-hairline" aria-hidden />
				<span className="mono-label text-muted">Self-serve</span>
			</div>
			<div>
				<h3 className="font-serif text-[clamp(1.5rem,2.6vw,2rem)] font-normal not-italic leading-[1.1] tracking-[-0.015em] text-ink">
					Run it yourself
				</h3>
				<p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
					Pay per campaign, order, and credit pack.
				</p>
			</div>
			<TickList items={selfServeFeatures} />
			<div className="mt-auto pt-2">
				<ButtonLink
					href={headerActions.primary.href}
					external
					className="w-full"
				>
					Start a campaign
				</ButtonLink>
			</div>
		</div>
	);
}

function AgencyCard() {
	return (
		<div className="flex h-full min-w-0 flex-col gap-5 rounded-[1.75rem] bg-contrast p-8">
			<div className="flex items-center gap-3">
				<span className="h-px w-7 bg-white/25" aria-hidden />
				<span className="mono-label text-on-contrast/60">Agency program</span>
			</div>
			<div>
				<p className="text-[clamp(2rem,4vw,2.8rem)] font-medium leading-none tracking-[-0.04em] text-on-contrast">
					From $10,000
					<span className="text-[1.1rem] font-normal tracking-normal text-on-contrast/50">
						/mo
					</span>
				</p>
				<p className="mt-3 text-[0.95rem] leading-relaxed text-on-contrast/65">
					We run your TikTok growth engine.
				</p>
			</div>
			<TickList items={agencyFeatures} tone="contrast" />
			<div className="mt-auto pt-2">
				{/* ContrastButtonLink, stretched to the card width. */}
				<SmartLink
					href="/agency"
					className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-on-contrast px-6 py-3 text-[0.95rem] font-semibold text-contrast transition-transform duration-300 ease-out-expo hover:-translate-y-0.5"
				>
					Explore the agency program
				</SmartLink>
			</div>
		</div>
	);
}

export function TwoWays() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-5xl">
				<Reveal>
					<SectionHeading
						index="02"
						label="Two ways to work with us"
						title={
							<>
								Self-serve, or <Accent>fully managed.</Accent>
							</>
						}
						description="Run it yourself from the dashboard, or hand the whole engine to a Tokgency team."
					/>
				</Reveal>

				<RevealStagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
					<RevealItem>
						<SelfServeCard />
					</RevealItem>
					<RevealItem>
						<AgencyCard />
					</RevealItem>
				</RevealStagger>

				<Reveal>
					<ShieldNote className="mt-10">
						A qualified brand can create a campaign and pay the displayed amount
						without talking to sales. The agency program is the exception — it
						starts from a qualification call.
					</ShieldNote>
				</Reveal>
			</div>
		</section>
	);
}
