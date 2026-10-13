import { createFileRoute } from "@tanstack/react-router";
import { landingHead } from "@/components/sections/landing/landing-head";
import { LandingTemplate } from "@/components/sections/landing/landing-template";
import { tiktokShopAgencySupplements as page } from "@/content/landing/tiktok-shop-agency-supplements";

export const Route = createFileRoute("/tiktok-shop-agency-supplements")({
	head: () => landingHead(page),
	component: Page,
});

function Page() {
	return <LandingTemplate page={page} />;
}
