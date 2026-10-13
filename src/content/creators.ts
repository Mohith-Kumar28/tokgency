import {
	CalendarCheck,
	DollarSign,
	type LucideIcon,
	MessageSquareText,
	Wallet,
} from "lucide-react";
import type { Faq } from "@/components/shared/faq-list";

export type Benefit = { icon: LucideIcon; title: string; body: string };

export const benefits: Benefit[] = [
	{
		icon: DollarSign,
		title: "Clear paid opportunities",
		body: "See the fee, deliverables, timeline, and rights before you accept. No guessing.",
	},
	{
		icon: MessageSquareText,
		title: "Real briefs, real feedback",
		body: "Timestamped comments and a defined revision scope protect your time.",
	},
	{
		icon: CalendarCheck,
		title: "Your rate, your turnaround",
		body: "Set your own rate card and standard delivery time. Work the styles you're best at.",
	},
	{
		icon: Wallet,
		title: "Reliable payouts",
		body: "Payment moves to scheduled when a milestone is approved. Paid in USD, international payouts supported.",
	},
];

export const joinSteps: string[] = [
	"Apply with your identity, payout profile, portfolio, and a short intro video.",
	"We manually review every application for quality, reliability, and category fit.",
	"Once approved, you appear in search and start receiving matched opportunities.",
	"Accept work, submit drafts, respond to feedback, and mark a final version ready.",
	"On approval, payment moves to scheduled and pays out after verification.",
];

export type RateCardField = { label: string; detail: string };

export const rateCardFields: RateCardField[] = [
	{
		label: "Display name",
		detail: "First name or creator name. Never your legal name.",
	},
	{
		label: "Location & language",
		detail: "City-level only, plus the languages you deliver in.",
	},
	{
		label: "Content styles",
		detail: "Demo, testimonial, founder-style, skit, voiceover, unboxing.",
	},
	{ label: "Format", detail: "On-camera, hands-only, or voiceover." },
	{
		label: "Your rate",
		detail: "Set by you, per video. Brands see it before they brief you.",
	},
	{ label: "Turnaround", detail: "The delivery window you commit to." },
	{
		label: "Usage rights",
		detail: "Whether you offer paid-ads usage, and for how long.",
	},
	{ label: "Work samples", detail: "The clips you choose to publish." },
];

export const creatorFaqs: Faq[] = [
	{
		question: "How do I get approved?",
		answer:
			"Every application is manually reviewed before you appear in search or receive paid opportunities. We look at content quality, reliability signals, category fit, communication, identity and payout verification, and policy safety.",
	},
	{
		question: "How and when do I get paid?",
		answer:
			"Earnings show in USD. Payment becomes eligible when the agreed milestone is approved, then pays out through a supported provider after required tax and identity verification.",
	},
	{
		question: "What do I need to apply?",
		answer:
			"An identity and payout profile, your country and languages, three to five work samples, a short intro video, your content styles and niches, and a rate card. You'll also agree to platform terms and paid-partnership disclosure requirements.",
	},
];
