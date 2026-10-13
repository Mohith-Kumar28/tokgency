import type { LandingPage } from "@/content/landing/types";

export const tiktokShopAgencyHome: LandingPage = {
	slug: "tiktok-shop-agency-home",
	meta: {
		title: "TikTok Shop Agency for Home & Kitchen Brands",
		description:
			"A TikTok Shop marketing agency for home, kitchen, and household brands. We recruit creators who sell with satisfying-demo content and scale GMV.",
	},
	hero: {
		eyebrow: "Home & kitchen",
		title: "TikTok Shop Agency for Home & Kitchen Brands",
		description:
			"Home and kitchen products thrive on the satisfying-demo format. We recruit the creators who sell them and run your affiliate program.",
	},
	intro:
		"Household, home, and kitchen products are strong TikTok Shop performers because they demo well, cleaning, organization, and clever gadgets are made for the satisfying short-form format. We recruit creators who nail that content and run the program that turns it into GMV.",
	cards: [
		{
			title: "Why home products sell on TikTok Shop",
			body: "The satisfying-demo format is native to TikTok, and useful home products convert on impulse when the benefit is shown clearly in seconds.",
		},
		{
			title: "What we do for home brands",
			bullets: [
				"Recruit home and household creators who sell",
				"Run seeding with tracking and follow-up",
				"Set commissions by margin and manage the roster",
				"Amplify winning demo videos with ads",
			],
		},
	],
	included: [
		"Creator recruiting matched to your category and price point",
		"Product seeding with tracking and follow-up",
		"Commission strategy set by margin, per product",
		"Content briefs that keep creators native and on-message",
		"Winning videos amplified with Spark Ads and GMV Max",
		"Reporting on GMV, not messages sent",
	],
	related: [
		{
			label: "Best TikTok Shop categories",
			href: "/resources/best-tiktok-shop-categories",
		},
		{
			label: "TikTok video scripts for selling",
			href: "/resources/tiktok-product-video-script",
		},
		{
			label: "How to run a seeding campaign",
			href: "/resources/tiktok-creator-seeding",
		},
	],
	cta: {
		title: "Scale your home brand on TikTok Shop",
		description: "Book a call, or find home and kitchen creators who sell.",
	},
};
