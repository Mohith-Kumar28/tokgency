import type { LandingPage } from "@/content/landing/types";

export const tiktokCreatorDatabase: LandingPage = {
	slug: "tiktok-creator-database",
	meta: {
		title: "TikTok Creator Database & Discovery Tool",
		description:
			"Search a database of TikTok Shop creators by niche, GMV, and engagement. Find proven category sellers and reveal contact details when you are ready to reach out.",
	},
	hero: {
		eyebrow: "Creator discovery tool",
		title: "Find TikTok Shop Creators Who Actually Sell",
		description:
			"Search creators by niche, GMV, and engagement. Build a shortlist of proven sellers in minutes instead of scrolling for hours.",
	},
	intro:
		"The hardest part of TikTok Shop is finding creators who sell your category, not just creators with big followings. Our creator finder filters for selling behavior so your shortlist is real sellers, and reveals contact details when you are ready to reach out.",
	cards: [
		{
			title: "Filter for what predicts sales",
			bullets: [
				"Category and niche, so you find sellers in your space",
				"GMV band, to sort proven sellers from tourists",
				"Audience and engagement, to catch fake or dead followings",
			],
		},
		{
			title: "From shortlist to sales",
			body: "Discovery is step one. Once you have a shortlist, you still need outreach, seeding, and management. Use the finder yourself, or have us run the whole program end to end.",
		},
	],
	included: [
		"Search millions of TikTok Shop creators",
		"Filter by niche, GMV, audience, and engagement",
		"Reveal email and contact details on demand",
		"Build and export a target shortlist",
	],
	related: [
		{
			label: "How to find TikTok Shop creators",
			href: "/resources/how-to-find-tiktok-shop-creators",
		},
		{
			label: "Best TikTok creator discovery tools",
			href: "/resources/tiktok-creator-discovery-tools",
		},
		{
			label: "How to vet TikTok creators",
			href: "/resources/how-to-vet-tiktok-creators",
		},
		{
			label: "Free vs paid creator search",
			href: "/resources/free-vs-paid-tiktok-creator-search",
		},
	],
	cta: {
		title: "Start finding creators in your niche",
		description:
			"Try the creator finder free, or book a call to have the roster built for you.",
	},
};
