import { X } from "lucide-react";
import type { ReactNode } from "react";
import { LogoMark } from "@/components/brand/logo";
import { Reveal } from "@/components/motion/reveal";
import { Accent } from "@/components/shared/section-heading";
import {
	type FailedAttempt,
	failedAttempts,
} from "@/content/warmed-tiktok-accounts";

function TeamCard() {
	return (
		<div className="flex flex-col gap-5 lg:sticky lg:top-28">
			<div className="flex aspect-square w-full max-w-[280px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-hairline bg-surface">
				<LogoMark className="h-20 w-20" />
			</div>
			<div>
				<p className="font-display text-[1.05rem] font-medium tracking-[-0.02em] text-ink">
					The Tokgency team
				</p>
				<p className="mt-0.5 text-[0.88rem] text-muted">
					Account infrastructure · U.S.
				</p>
			</div>
		</div>
	);
}

function Prose({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col gap-4 text-[1.02rem] leading-[1.65] text-muted">
			{children}
		</div>
	);
}

function AttemptRow({ tried, got }: FailedAttempt) {
	return (
		<li className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4">
			<span className="flex shrink-0 items-center gap-2 sm:w-[46%]">
				<X
					aria-hidden
					className="h-3.5 w-3.5 shrink-0 text-accent"
					strokeWidth={2.5}
				/>
				<span className="text-[0.92rem] font-medium text-ink">{tried}</span>
			</span>
			<span className="pl-[1.4rem] text-[0.88rem] leading-snug text-muted sm:pl-0">
				{got}
			</span>
		</li>
	);
}

export function FounderStory() {
	return (
		<section className="w-full border-t border-hairline px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-5xl">
				<Reveal>
					<p className="mono-label mb-8 text-center text-muted">
						Why we built this
					</p>
				</Reveal>

				<div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
					<Reveal>
						<TeamCard />
					</Reveal>

					<Reveal>
						<div className="flex flex-col gap-6">
							<h2 className="text-balance text-[clamp(1.85rem,3.6vw,2.7rem)] font-medium leading-[1.04] tracking-[-0.035em] text-ink">
								We burned months getting this wrong{" "}
								<Accent>before it worked.</Accent>
							</h2>

							<Prose>
								<p>
									We are a team in India trying to reach an audience in the
									United States. On paper that is a distribution problem. In
									practice it is an{" "}
									<span className="hl">infrastructure problem</span>, and it is
									the one that quietly kills most of these attempts.
								</p>
								<p>
									We tried the obvious things first, in the order everybody
									tries them. Every one of them failed in the same way: not with
									a ban notice, but with reach simply going quiet. A video that
									should have done fifty thousand does four hundred. Nobody
									tells you why.
								</p>
							</Prose>

							<ul className="mt-1 flex flex-col divide-y divide-hairline overflow-hidden rounded-[1.1rem] border border-hairline bg-card">
								{failedAttempts.map((attempt) => (
									<AttemptRow key={attempt.tried} {...attempt} />
								))}
							</ul>

							<Prose>
								<p>
									The lesson took a while to accept: the platform is not reading
									one signal, it is reading the whole device. The IP, the SIM,
									the GPS, the fingerprint, the behaviour of the person holding
									it. Fake any one of them and the rest still disagree — and a
									brand-new account with a mismatched story gets shown to almost
									nobody.
								</p>
								<p className="text-ink">
									So we stopped trying to trick it and{" "}
									<span className="hl hl-b">built the real thing instead</span>:
									physical phones in-market, real local SIMs, real people
									running them, warmed inside the niche before a single post
									goes out. That is the setup we now run for ourselves — and it
									is the same one you can order here, without spending the
									months we did finding out what does not work.
								</p>
							</Prose>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
