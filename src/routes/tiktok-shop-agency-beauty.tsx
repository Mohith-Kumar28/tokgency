import { createFileRoute } from "@tanstack/react-router";
import { landingHead } from "@/components/sections/landing/landing-head";
import { LandingTemplate } from "@/components/sections/landing/landing-template";
import { tiktokShopAgencyBeauty as page } from "@/content/landing/tiktok-shop-agency-beauty";

export const Route = createFileRoute("/tiktok-shop-agency-beauty")({
	head: () => landingHead(page),
	component: Page,
});

function Page() {
	return <LandingTemplate page={page} />;
}
