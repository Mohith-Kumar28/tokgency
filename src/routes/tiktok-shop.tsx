import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { CreatorStrip } from "@/components/sections/tiktok-shop/creator-strip";
import { Hero } from "@/components/sections/tiktok-shop/hero";
import { HowItRuns } from "@/components/sections/tiktok-shop/how-it-runs";
import { Problem } from "@/components/sections/tiktok-shop/problem";
import { WaysToSell } from "@/components/sections/tiktok-shop/ways-to-sell";
import { WhatWeHandle } from "@/components/sections/tiktok-shop/what-we-handle";
import { ClosingCta } from "@/components/shared/closing-cta";
import { Accent } from "@/components/shared/section-heading";
import { siteConfig } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/tiktok-shop")({
	head: () =>
		seo({
			title: "TikTok Shop creators & affiliate campaigns",
			description:
				"Hire TikTok Shop creators and affiliates who already sell in your category. Product seeding, affiliate campaigns, UGC and TikTok LIVE, briefed, approved and tracked in one place.",
			path: "/tiktok-shop",
			/* The live page keeps the site-wide social card. */
			socialTitle: "Tokgency — TikTok growth, run properly",
			socialDescription:
				"Hire real creators, make content, manage publishing, and keep every campaign moving from one Tokgency workspace.",
		}),
	component: TikTokShopPage,
});

function TikTokShopPage() {
	return (
		<PageShell>
			<Hero />
			<CreatorStrip />
			<Problem />
			<WhatWeHandle />
			<WaysToSell />
			<HowItRuns />
			<ClosingCta
				badge="TikTok Shop"
				title={
					<>
						Ready to put creators <Accent>behind your catalogue?</Accent>
					</>
				}
				description="Book a demo call. Tell us the product and the market, and we will say plainly whether TikTok Shop is worth your money."
				primary={{
					label: "Book a demo call",
					href: siteConfig.bookingUrl,
					external: true,
				}}
				secondary={{
					label: "See the creator network",
					href: "/creator-marketplace",
				}}
			/>
		</PageShell>
	);
}
