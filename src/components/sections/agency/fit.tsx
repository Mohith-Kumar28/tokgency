import { Building2, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/shared/section-heading";
import { TickList } from "@/components/shared/tick-list";
import { handledByTokgency } from "@/content/agency";

const cardTitle =
	"font-serif text-[clamp(1.5rem,2.6vw,2rem)] font-normal not-italic leading-[1.1] tracking-[-0.015em]";
const audienceCopy = "max-w-[44ch] text-[0.95rem] leading-relaxed text-muted";

function AudienceCard() {
	return (
		<div className="flex h-full min-w-0 flex-col gap-4 rounded-[1.5rem] border border-hairline bg-card p-7 shadow-soft">
			<span className="flex h-10 w-10 items-center justify-center rounded-xl border border-hairline bg-surface text-accent">
				<Building2
					aria-hidden
					className="h-[19px] w-[19px]"
					strokeWidth={1.6}
				/>
			</span>
			<h3 className={`${cardTitle} text-ink`}>Who this is for</h3>
			<p className={audienceCopy}>
				Consumer apps, SaaS and tech brands that want US TikTok content and
				distribution now, and would rather not spend a quarter hiring a creator
				team, an editor and an ops manager to find out whether it works.
			</p>
			<p className={audienceCopy}>
				You keep approval control, you own the rights you buy, and the accounts
				we build for you are handed over to you.
			</p>
		</div>
	);
}

function HandledCard() {
	return (
		<div className="flex h-full min-w-0 flex-col gap-4 rounded-[1.5rem] bg-contrast p-7">
			<span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-accent">
				<ShieldCheck
					aria-hidden
					className="h-[19px] w-[19px]"
					strokeWidth={1.6}
				/>
			</span>
			<h3 className={`${cardTitle} text-on-contrast`}>What Tokgency handles</h3>
			<TickList items={handledByTokgency} tone="contrast" />
			<p className="mt-auto pt-2 text-[0.82rem] leading-relaxed text-on-contrast/45">
				Tokgency is an independent agency and platform. We are not affiliated
				with, endorsed by, or an official partner of TikTok, and we never
				promise reach.
			</p>
		</div>
	);
}

export function Fit() {
	return (
		<section className="w-full border-t border-hairline px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<Eyebrow index="03" label="Fit" />
				</Reveal>

				<div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
					<Reveal>
						<AudienceCard />
					</Reveal>
					<Reveal>
						<HandledCard />
					</Reveal>
				</div>
			</div>
		</section>
	);
}
