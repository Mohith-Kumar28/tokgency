import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import {
	ManagedMock,
	PortalMock,
} from "@/components/sections/home/route-mocks";
import { ButtonLink } from "@/components/shared/button-link";
import { CheckList } from "@/components/shared/check-list";
import {
	Accent,
	Eyebrow,
	SectionHeading,
} from "@/components/shared/section-heading";
import { headerActions, siteConfig } from "@/config/site";

type Action = { label: string; href: string; external?: boolean };

type RouteCardProps = {
	index: string;
	label: string;
	mock: ReactNode;
	title: string;
	body: ReactNode;
	points: string[];
	primary: Action;
	secondary: Action;
};

function RouteCard({
	index,
	label,
	mock,
	title,
	body,
	points,
	primary,
	secondary,
}: RouteCardProps) {
	return (
		<article className="flex h-full min-w-0 flex-col gap-5 rounded-[2rem] border border-hairline bg-card p-8 shadow-soft md:p-10">
			<Eyebrow index={index} label={label} align="left" />
			{mock}
			<h3 className="font-display text-[clamp(1.5rem,3vw,2.05rem)] font-medium leading-[1.06] tracking-[-0.035em] text-ink">
				{title}
			</h3>
			<p className="max-w-[46ch] text-[1rem] leading-relaxed text-muted">
				{body}
			</p>
			<CheckList items={points} />
			<div className="mt-auto flex flex-col gap-3 pt-3 sm:flex-row">
				<ButtonLink href={primary.href} external={primary.external}>
					{primary.label}
				</ButtonLink>
				<ButtonLink href={secondary.href} variant="ghost">
					{secondary.label}
				</ButtonLink>
			</div>
		</article>
	);
}

export function TwoWaysIn() {
	return (
		<section className="w-full px-4 py-24 md:py-32">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<SectionHeading
						index="03"
						label="Two ways in"
						title={
							<>
								How Tokgency works <Accent>for brands.</Accent>
							</>
						}
						description="Take the accounts, or take the creators. Both run out of the same workspace, and most brands end up running both."
					/>
				</Reveal>

				<div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
					<Reveal>
						<RouteCard
							index="01"
							label="Run it yourself"
							mock={<PortalMock />}
							title="You run the whole thing."
							body={
								<>
									Run your entire operation{" "}
									<span className="hl hl-b">from the portal</span>. Set up the
									campaign, talk to creators, buy and manage your warmed-up US
									TikTok accounts, make the content and push it live. Every part
									of it, in one place, on your own schedule.
								</>
							}
							points={[
								"Set up campaigns and brief creators yourself, from the portal",
								"Buy warmed-up US TikTok accounts and post through them",
								"Make content in the app, approve it, and push it live",
							]}
							primary={{
								label: "Open the portal",
								href: headerActions.primary.href,
							}}
							secondary={{ label: "See how it works", href: "/how-it-works" }}
						/>
					</Reveal>

					<Reveal>
						<RouteCard
							index="02"
							label="Done for you"
							mock={<ManagedMock />}
							title="Or we run it for you."
							body={
								<>
									Hand the whole operation over. We write the briefs, hire the{" "}
									<span className="hl">vetted US creators</span>, build and warm
									the accounts, run the approvals and post the work. You stay in
									the loop for one thing only: signing off.
								</>
							}
							points={[
								"We write the briefs, hire the creators and run the approvals",
								"We build and warm the accounts, then post your approved content",
								"You review and sign off. Nothing goes live before you do",
							]}
							primary={{
								label: "Talk to us",
								href: siteConfig.bookingUrl,
								external: true,
							}}
							secondary={{ label: "See the agency program", href: "/agency" }}
						/>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
