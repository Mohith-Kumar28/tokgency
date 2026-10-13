import { createFileRoute } from "@tanstack/react-router";
import { landingHead } from "@/components/sections/landing/landing-head";
import { LandingTemplate } from "@/components/sections/landing/landing-template";
import { tiktokShopAgencyFood as page } from "@/content/landing/tiktok-shop-agency-food";

export const Route = createFileRoute("/tiktok-shop-agency-food")({
	head: () => landingHead(page),
	component: Page,
});

function Page() {
	return <LandingTemplate page={page} />;
}
