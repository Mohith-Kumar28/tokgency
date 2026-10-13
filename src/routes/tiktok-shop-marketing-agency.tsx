import { createFileRoute } from "@tanstack/react-router";
import { landingHead } from "@/components/sections/landing/landing-head";
import { LandingTemplate } from "@/components/sections/landing/landing-template";
import { tiktokShopMarketingAgency as page } from "@/content/landing/tiktok-shop-marketing-agency";

export const Route = createFileRoute("/tiktok-shop-marketing-agency")({
	head: () => landingHead(page),
	component: Page,
});

function Page() {
	return <LandingTemplate page={page} />;
}
