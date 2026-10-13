import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { PricingFaq } from "@/components/sections/pricing/faq";
import { PricingModels } from "@/components/sections/pricing/pricing-models";
import { TwoWays } from "@/components/sections/pricing/two-ways";
import { ButtonLink } from "@/components/shared/button-link";
import { ClosingCta } from "@/components/shared/closing-cta";
import { PageHero } from "@/components/shared/page-hero";
import { Accent } from "@/components/shared/section-heading";
import { headerActions } from "@/config/site";
import { pricingFaqs } from "@/content/pricing";
import { faqJsonLd, jsonLdScript, seo } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
	head: () => ({
		...seo({
			title: "Pricing",
			description:
				"Transparent, order-based pricing: creator fee plus Tokgency campaign fee, one-time account setup and warming, per-post managed posting, AI credit packs, and an agency program from $10,000/month.",
			path: "/pricing",
		}),
		scripts: [jsonLdScript(faqJsonLd(pricingFaqs))],
	}),
	component: PricingPage,
});

function PricingPage() {
	return (
		<PageShell>
			<PageHero
				eyebrow="Pricing"
				title={
					<>
						Transparent pricing, <Accent>no subscription.</Accent>
					</>
				}
				description="You see a detailed total before you pay. Billing is tied to a campaign, a distribution order, or a credit purchase — not a monthly seat."
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
				footnote="USD · Detailed total before checkout · No monthly seat"
			/>
			<PricingModels />
			<TwoWays />
			<PricingFaq />
			<ClosingCta
				className="pt-24"
				badge="No sales call to begin"
				title={
					<>
						Ready to run TikTok <Accent>properly?</Accent>
					</>
				}
				description="Start a campaign in minutes, or talk to us about a managed program."
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
