import type { Faq } from "@/components/shared/faq-list";

export type LoopStepId =
	| "brief"
	| "match"
	| "draft"
	| "approval"
	| "publishing"
	| "reporting";

export type LoopStep = { id: LoopStepId; title: string; body: string };

export const loopSteps: LoopStep[] = [
	{
		id: "brief",
		title: "Create a campaign brief",
		body: "Sign up, set up your organisation, and open the campaign wizard. Add your goal, product, assets, content request, and the usage rights you need. It stays a draft until checkout.",
	},
	{
		id: "match",
		title: "Match with creators",
		body: "Browse public rate cards and shortlist vetted creators, or open the brief to matching applicants. Every creator is manually reviewed before they appear in search.",
	},
	{
		id: "draft",
		title: "Review drafts",
		body: "Creators submit versioned drafts against the brief. Leave timestamped comments, request changes within the agreed revision scope, or approve.",
	},
	{
		id: "approval",
		title: "Approve and lock rights",
		body: "Approving a deliverable locks the rights and payment milestone. Creators accept the exact rights terms before they ever start.",
	},
	{
		id: "publishing",
		title: "Publish (optional)",
		body: "Route approved content to managed US TikTok distribution (apps only), or take the assets and post them yourself. Nothing posts without review.",
	},
	{
		id: "reporting",
		title: "Learn and iterate",
		body: "See the top creator, hook, format, and angle for the campaign, plus post links and available performance signals — so your next brief is sharper.",
	},
];

export type OrderStage = { label: string; state: "done" | "now" | "queued" };

export const orderStages: OrderStage[] = [
	{ label: "Brief submitted", state: "done" },
	{ label: "Creator matched", state: "done" },
	{ label: "Draft in review", state: "now" },
	{ label: "Approved", state: "queued" },
	{ label: "Posted", state: "queued" },
];

export const guardrails = [
	"Every delivery and post passes defined approval rules before it goes live.",
	"Creators disclose paid partnerships as required by platform rules and law.",
	"Rights are explicit: scope, duration, and territory, accepted before work starts.",
	"Accounts we build are handed over to you, and never shared with another brand or reused.",
	"No reach, install, or revenue outcome is guaranteed.",
];

export const howItWorksFaqs: Faq[] = [
	{
		question: "How long does a campaign take to start?",
		answer:
			"You can create a campaign and pay the displayed amount in one session. Creator delivery timelines depend on the turnaround shown on each creator's card.",
	},
	{
		question: "What do I need before I start?",
		answer:
			"A product to promote, a goal, and any assets you want creators to use (screenshots, screen recordings, product photos, or reference videos). The wizard walks you through the rest.",
	},
	{
		question: "Can I only order content and post it myself?",
		answer:
			"Yes. You can choose content-only deliverables and handle posting yourself, or add managed US distribution if you're a consumer app or SaaS brand.",
	},
];
