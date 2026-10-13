import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { Eligibility } from "@/components/sections/agency/eligibility";
import { Fit } from "@/components/sections/agency/fit";
import { HowItRuns } from "@/components/sections/agency/how-it-runs";
import { Operations } from "@/components/sections/agency/operations";
import { Qualification } from "@/components/sections/agency/qualification";
import { ButtonLink } from "@/components/shared/button-link";
import { PageHero } from "@/components/shared/page-hero";
import { Accent } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/agency")({
	head: () =>
		seo({
			title: "Agency program — we engineer virality for you",
			description:
				"For teams investing $10,000+/month. Tokgency runs account warm-up, creative strategy, ads management, format and angle testing, real-time performance tracking, and scales what works.",
			path: "/agency",
		}),
	component: AgencyPage,
});

function AgencyPage() {
	return (
		<PageShell>
			<PageHero
				eyebrow="Agency program · from $10,000/month"
				title={
					<>
						We don’t hope for virality. <Accent>We engineer it.</Accent>
					</>
				}
				description={
					<>
						Tokgency runs the whole engine —{" "}
						<span className="hl">warmed accounts</span>, creative strategy, ads,
						testing, tracking, and scaling the winners. You get a shared
						roadmap, weekly reporting, and a team accountable for the work.
					</>
				}
				actions={
					<>
						<ButtonLink href={siteConfig.bookingUrl} external>
							Start the qualification form
						</ButtonLink>
						<ButtonLink href="/pricing" variant="ghost">
							See pricing
						</ButtonLink>
					</>
				}
				footnote="Qualification call required · US first · Rights built in"
			/>
			<Operations />
			<Eligibility />
			<HowItRuns />
			<Fit />
			<Qualification />
		</PageShell>
	);
}
