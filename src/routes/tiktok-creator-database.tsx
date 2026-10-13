import { createFileRoute } from "@tanstack/react-router";
import { landingHead } from "@/components/sections/landing/landing-head";
import { LandingTemplate } from "@/components/sections/landing/landing-template";
import { tiktokCreatorDatabase as page } from "@/content/landing/tiktok-creator-database";

export const Route = createFileRoute("/tiktok-creator-database")({
	head: () => landingHead(page),
	component: Page,
});

function Page() {
	return <LandingTemplate page={page} />;
}
