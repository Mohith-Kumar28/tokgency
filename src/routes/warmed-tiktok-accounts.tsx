import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { FounderStory } from "@/components/sections/warmed-tiktok-accounts/founder-story";
import { Hero } from "@/components/sections/warmed-tiktok-accounts/hero";
import { HowBuilt } from "@/components/sections/warmed-tiktok-accounts/how-built";
import { SignalComparison } from "@/components/sections/warmed-tiktok-accounts/signal-comparison";
import { ClosingCta } from "@/components/shared/closing-cta";
import { Accent } from "@/components/shared/section-heading";
import { headerActions, siteConfig } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/warmed-tiktok-accounts")({
	head: () =>
		seo({
			title:
				"Warmed-up US TikTok accounts — built for your brand, handed to you",
			description:
				"US TikTok accounts built from scratch on real phones with real local SIMs, warmed inside your niche by people in that market, then handed over to you. Order status you can read, one brand per account, no promise of reach.",
			path: "/warmed-tiktok-accounts",
		}),
	component: WarmedTikTokAccountsPage,
});

function WarmedTikTokAccountsPage() {
	return (
		<PageShell>
			<Hero />
			<FounderStory />
			<HowBuilt />
			<SignalComparison />
			<ClosingCta
				className="pt-20 md:pt-24"
				badge="Order in minutes"
				title={
					<>
						Order accounts <Accent>in your niche.</Accent>
					</>
				}
				description="Place the order, watch it move through setup and warming, and take the logins when it’s ready. No sales call needed to begin."
				primary={{
					label: "Order US accounts",
					href: headerActions.primary.href,
				}}
				secondary={{
					label: "Book a demo call",
					href: siteConfig.bookingUrl,
					external: true,
				}}
			/>
		</PageShell>
	);
}
