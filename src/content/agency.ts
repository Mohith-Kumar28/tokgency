import {
	CalendarClock,
	ClipboardList,
	type LucideIcon,
	MessagesSquare,
	Users,
} from "lucide-react";

export type OperationId =
	| "warmup"
	| "strategy"
	| "ads"
	| "testing"
	| "tracking"
	| "scaling";

export type Operation = { id: OperationId; title: string; body: string };

export const operations: Operation[] = [
	{
		id: "warmup",
		title: "Account warm-up",
		body: "We build US accounts from scratch and warm them inside your niche on real phones with real local SIMs, run by real people, before a single post goes out.",
	},
	{
		id: "strategy",
		title: "Creative strategy",
		body: "The angles, hooks and formats worth making — set against your product and audience, then kept as a running backlog rather than a one-off deck.",
	},
	{
		id: "ads",
		title: "Ads management",
		body: "Organic winners get put behind spend and managed as paid: setup, targeting, budget pacing and creative rotation, reported back with the organic side.",
	},
	{
		id: "testing",
		title: "Format & angle testing",
		body: "The same offer shot as a demo, a skit, a testimonial and a voiceover, so you learn which format carries it — not just which video happened to land.",
	},
	{
		id: "tracking",
		title: "Real-time performance tracking",
		body: "Post links, status and available platform metrics tracked as they come in, so a run is read while it is still running.",
	},
	{
		id: "scaling",
		title: "Scale what works",
		body: "Winners get cloned into new variants and pushed across more accounts and more spend. Losers get cut early instead of quietly finishing the month.",
	},
];

export type Pillar = { icon: LucideIcon; title: string; body: string };

export const pillars: Pillar[] = [
	{
		icon: ClipboardList,
		title: "Shared roadmap",
		body: "A campaign roadmap and monthly plan you can see, not a black box.",
	},
	{
		icon: Users,
		title: "Creator program",
		body: "Recruiting, briefs and a production tracker run end to end by us.",
	},
	{
		icon: CalendarClock,
		title: "Approval queue",
		body: "A publishing calendar with decision deadlines. Nothing posts unapproved.",
	},
	{
		icon: MessagesSquare,
		title: "Direct channel",
		body: "A client channel with response expectations, not a ticket queue.",
	},
];

export const handledByTokgency = [
	"Creator sourcing, briefs and production tracking",
	"US account setup and niche warming, then handover to you",
	"Posting of content you have already approved, if you want it run for you",
	"Content review, rights capture and campaign reporting",
];

export const qualificationQuestions = [
	"Current product stage and growth target",
	"TikTok history and existing assets",
	"Monthly budget",
	"Target countries and audiences",
	"Internal approver availability",
	"Required launch date",
];
