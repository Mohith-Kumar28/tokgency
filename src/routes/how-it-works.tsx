import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { CampaignLoop } from "@/components/sections/how-it-works/campaign-loop";
import { HowItWorksFaq } from "@/components/sections/how-it-works/faq";
import { Guardrails } from "@/components/sections/how-it-works/guardrails";
import { OrderStatus } from "@/components/sections/how-it-works/order-status";
import { ButtonLink } from "@/components/shared/button-link";
import { ClosingCta } from "@/components/shared/closing-cta";
import { PageHero } from "@/components/shared/page-hero";
import { Accent } from "@/components/shared/section-heading";
import { headerActions } from "@/config/site";
import { howItWorksFaqs } from "@/content/how-it-works";
import { faqJsonLd, jsonLdScript, seo } from "@/lib/seo";

export const Route = createFileRoute("/how-it-works")({
	head: () => ({
		...seo({
			title: "How it works",
			description:
				"How Tokgency turns a campaign brief into creator-made TikTok content and a measurable growth loop: brief, creator match, draft, approval, publishing, and learning.",
			path: "/how-it-works",
		}),
		scripts: [jsonLdScript(faqJsonLd(howItWorksFaqs))],
	}),
	component: HowItWorksPage,
});

function HowItWorksPage() {
	return (
		<PageShell>
			<PageHero
				eyebrow="How it works"
				title={
					<>
						Turn a brief into a <Accent>measurable growth loop.</Accent>
					</>
				}
				description="Six clear steps take a campaign from idea to posted content and back to a sharper next brief."
				actions={
					<>
						<ButtonLink href={headerActions.primary.href} external>
							Start a campaign
						</ButtonLink>
						<ButtonLink href="/pricing" variant="ghost">
							See pricing
						</ButtonLink>
					</>
				}
				footnote="No sales call to begin · Rights built in · Nothing posts unapproved"
			/>
			<CampaignLoop />
			<OrderStatus />
			<Guardrails />
			<HowItWorksFaq />
			<ClosingCta
				badge="Start in minutes"
				title={
					<>
						Ready to run TikTok <Accent>properly?</Accent>
					</>
				}
				description="Start a campaign in minutes, or talk to us about a managed program. No sales call needed to begin."
				primary={{
					label: "Start a campaign",
					href: headerActions.primary.href,
					external: true,
				}}
				secondary={{ label: "Explore creators", href: "/creator-marketplace" }}
			/>
		</PageShell>
	);
}
