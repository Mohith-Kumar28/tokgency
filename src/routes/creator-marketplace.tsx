import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { BookMeeting } from "@/components/sections/creator-marketplace/book-meeting";
import { Roster } from "@/components/sections/creator-marketplace/roster";
import { ButtonLink } from "@/components/shared/button-link";
import { ClosingCta } from "@/components/shared/closing-cta";
import { PageHero } from "@/components/shared/page-hero";
import { Accent } from "@/components/shared/section-heading";
import { headerActions } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/creator-marketplace")({
	head: () =>
		seo({
			title: "Creator marketplace — browse TikTok UGC creators",
			description:
				"Browse vetted TikTok UGC creators by niche, content style, product type, location, language, rate, and turnaround. See public rate cards and add creators to a campaign.",
			path: "/creator-marketplace",
		}),
	component: CreatorMarketplacePage,
});

function CreatorMarketplacePage() {
	return (
		<PageShell>
			<PageHero
				size="compact"
				eyebrow="Creator marketplace"
				title={
					<>
						Browse creators who fit your <Accent>brand and budget.</Accent>
					</>
				}
				description="Public rate cards, content styles, and delivery speed — filter to a shortlist, then add creators straight to a campaign. Private contact details stay protected."
				actions={
					<>
						<ButtonLink href={headerActions.primary.href} external>
							Start a campaign
						</ButtonLink>
						<ButtonLink href="/how-it-works" variant="ghost">
							How it works
						</ButtonLink>
					</>
				}
				footnote="Vetted creators · Public rate cards · No private contact info"
			/>
			<Roster />
			<ClosingCta
				className="pt-24"
				badge="Rights lock on approval"
				title={
					<>
						Found creators <Accent>you like?</Accent>
					</>
				}
				description="Start a campaign and add them to your brief, or open the brief to matching applicants."
				primary={{
					label: "Start a campaign",
					href: headerActions.primary.href,
					external: true,
				}}
				secondary={{ label: "For app & SaaS teams", href: "/" }}
			/>
			<BookMeeting />
		</PageShell>
	);
}
