export type FailedAttempt = { tried: string; got: string };

export const failedAttempts: FailedAttempt[] = [
	{
		tried: "A VPN and a US IP",
		got: "Flagged. The rest of the device still said India.",
	},
	{
		tried: "Bought US phone numbers",
		got: "Verified once, then throttled within days.",
	},
	{
		tried: "Aged accounts off the market",
		got: "Someone else's history, someone else's strikes.",
	},
	{
		tried: "Email and profile warm-up",
		got: "Looked warm to us. Not to the feed.",
	},
];

export type BuildStep = { title: string; body: string };

export const buildSteps: BuildStep[] = [
	{
		title: "A real device",
		body: "One physical phone per account, held by a person in your target market. Not an emulator rack.",
	},
	{
		title: "A local SIM",
		body: "A residential mobile connection in-country, so the feed the account sees is the feed you want.",
	},
	{
		title: "Warmed in your niche",
		body: "Before anything posts, it watches, follows and engages inside your category.",
	},
	{
		title: "Ready for content",
		body: "The account reaches a normal-looking history and opens up for posting.",
	},
	{
		title: "Your approved post",
		body: "Creator video or Content Studio output goes into the queue. Nothing posts before you approve it.",
	},
	{
		title: "Run, not abandoned",
		body: "The account keeps being managed after launch, with post links and timestamps you can read.",
	},
];

export type OrderStepState = "done" | "active" | "todo";
export type OrderStep = { label: string; meta: string; state: OrderStepState };

export const orderSteps: OrderStep[] = [
	{ label: "Paid", meta: "Done", state: "done" },
	{ label: "Account setup", meta: "Done", state: "done" },
	{ label: "Niche warming", meta: "Done", state: "done" },
	{ label: "Ready for content", meta: "Now", state: "active" },
	{ label: "Posted", meta: "Queued", state: "todo" },
];

export const cleanRules: string[] = [
	"Accounts are built for you and handed over — they are yours",
	"One brand per account, never shared, reused or resold",
	"You approve every video before it posts",
	"No promise of reach or algorithmic advantage",
	"Independent of TikTok, and we say so everywhere",
];

/** `value` is the highlighted figure or tick shown before the text. */
export type ActivityRow = {
	time: string;
	handle: string;
	flag: string;
	text: string;
	value?: string;
};

const US = "🇺🇸";

/** Illustrative rows for the "Sample feed" ticker, not live data. */
export const activityRows: ActivityRow[] = [
	{
		time: "14:03:09",
		handle: "@dailyfocus.app",
		flag: US,
		text: "posted · demo v2",
	},
	{
		time: "14:02:41",
		handle: "@lift.tracker",
		flag: US,
		text: "views",
		value: "+11.2K",
	},
	{
		time: "14:01:58",
		handle: "@budgetbuddy.hq",
		flag: US,
		text: "warmed",
		value: "✓",
	},
	{
		time: "13:58:12",
		handle: "@ai.notes",
		flag: US,
		text: "warming · productivity",
	},
	{
		time: "13:55:30",
		handle: "@sleepcycle.us",
		flag: US,
		text: "profile visits",
		value: "+3.4K",
	},
	{
		time: "13:54:07",
		handle: "@cardgame.live",
		flag: US,
		text: "content queued · 4 posts",
	},
	{
		time: "13:51:44",
		handle: "@formfit.coach",
		flag: US,
		text: "warming · fitness",
	},
	{
		time: "13:49:02",
		handle: "@invoicely.app",
		flag: US,
		text: "account ready",
		value: "✓",
	},
	{
		time: "13:47:55",
		handle: "@petcare.daily",
		flag: US,
		text: "views",
		value: "+27.8K",
	},
	{
		time: "13:45:21",
		handle: "@studybar.io",
		flag: US,
		text: "SIM active · local carrier",
	},
	{
		time: "13:42:38",
		handle: "@moodjournal",
		flag: US,
		text: "posted · testimonial",
	},
	{
		time: "13:40:16",
		handle: "@runmate.app",
		flag: US,
		text: "saves",
		value: "+1.9K",
	},
	{
		time: "13:38:04",
		handle: "@tinyhabits.co",
		flag: US,
		text: "setup started · device 41",
	},
	{
		time: "13:35:52",
		handle: "@deskflow.ai",
		flag: US,
		text: "warmed",
		value: "✓",
	},
];

export type SignalRow = { signal: string; farm: string; ours: string };

export const signalRows: SignalRow[] = [
	{
		signal: "IP address",
		farm: "Datacenter or recycled proxy",
		ours: "Residential mobile IP in-country",
	},
	{
		signal: "SIM carrier",
		farm: "None, or one SIM shared across accounts",
		ours: "A real local SIM per account",
	},
	{
		signal: "GPS signal",
		farm: "Spoofed, or missing entirely",
		ours: "Matches where the phone actually sits",
	},
	{
		signal: "Device fingerprint",
		farm: "Cloned across a rack of emulators",
		ours: "One physical phone, one account",
	},
	{
		signal: "Real human behind the device",
		farm: "A script on a timer",
		ours: "A person in that market runs it daily",
	},
	{
		signal: "Posting behavior",
		farm: "Bulk uploads, identical intervals",
		ours: "Native pace, watched and adjusted",
	},
];
