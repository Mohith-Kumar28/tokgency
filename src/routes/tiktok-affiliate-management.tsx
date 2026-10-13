import { createFileRoute } from "@tanstack/react-router";
import { landingHead } from "@/components/sections/landing/landing-head";
import { LandingTemplate } from "@/components/sections/landing/landing-template";
import { tiktokAffiliateManagement as page } from "@/content/landing/tiktok-affiliate-management";

export const Route = createFileRoute("/tiktok-affiliate-management")({
	head: () => landingHead(page),
	component: Page,
});

function Page() {
	return <LandingTemplate page={page} />;
}
