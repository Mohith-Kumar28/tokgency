import type { Faq } from "@/components/shared/faq-list";

export type Offering = { name: string; model: string; detail: string };

export const offerings: Offering[] = [
	{
		name: "Creator campaigns",
		model: "Creator fee + Tokgency campaign fee",
		detail: "Both shown before checkout. No subscription.",
	},
	{
		name: "TikTok account setup",
		model: "One-time order price",
		detail: "Apps only. Charged per account.",
	},
	{
		name: "Warming",
		model: "One-time niche-warming add-on",
		detail: "With an expected fulfilment window.",
	},
	{
		name: "Managed posting",
		model: "Per-post / per-order pricing",
		detail: "For approved content routed to distribution.",
	},
	{
		name: "AI Content Studio",
		model: "Credit packs",
		detail: "Buy credits as needed. No subscription.",
	},
	{
		name: "Agency Program",
		model: "From $10,000/month",
		detail: "Qualification call required.",
	},
];

export const selfServeFeatures = [
	"Browse public creator rate cards",
	"Build a brief and pay the displayed total",
	"Add managed US distribution (apps)",
	"Buy AI credit packs as needed",
];

export const agencyFeatures = [
	"Strategy, creative, and creator program",
	"Production, review, and managed posting",
	"Weekly reporting and iteration",
	"Shared roadmap and monthly plan",
];

export const pricingFaqs: Faq[] = [
	{
		question: "Is there a subscription?",
		answer:
			"No. Billing is order-, campaign-, and service-based. You pay for creator campaigns, distribution orders, and AI credit packs as you use them. The agency program is a monthly engagement.",
	},
	{
		question: "What currency do you bill in?",
		answer:
			"USD is the launch currency. You'll see a detailed total before paying: creator fees, the Tokgency campaign fee, any account, warming, or posting services, AI credits, and taxes.",
	},
	{
		question: "How is the Tokgency campaign fee calculated?",
		answer:
			"The fee is shown alongside the creator fee before checkout, so the full campaign cost is clear before you pay. Exact fee structure depends on the campaign scope.",
	},
	{
		question: "What does the agency program include?",
		answer:
			"Strategy, creative, creator recruiting and hiring, briefs, production, content review, managed posting, weekly reporting, and iteration — run by a Tokgency team. It starts from a qualification call and a scoped proposal.",
	},
];
