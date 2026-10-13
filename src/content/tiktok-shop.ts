import { d2cTiles, type ReelTile, toRows } from "@/lib/creator-reel";

/** The live page shows every TikTok Shop (d2c) clip, split over two rows. */
export const creatorRows = toRows(d2cTiles, 2);

/** Each creator's first clip in the reel, in the order creators appear. */
export const featuredCreators: ReelTile[] = d2cTiles.filter(
	(tile, index) =>
		d2cTiles.findIndex((other) => other.handle === tile.handle) === index,
);

export const problem = {
	alone: [
		"Cold-DM 200 creators, get 3 replies",
		"Free samples sent, creators disappear",
		"Follower counts, zero sales data",
		"Agencies recycling the same 50 creators",
	],
	withTokgency: [
		"Matched with proven-selling creators",
		"Vetted for GMV history, not vanity",
		"Category-specific, data-driven fits",
		"A new creator pipeline every week",
	],
};

export type JobMock = "shortlist" | "brief" | "payouts";

export type Job = {
	mock: JobMock;
	label: string;
	/** Title is split so the second half can take the accent serif. */
	title: { lead: string; accent: string };
	body: string;
	points: string[];
	aside: string;
};

export const jobs: Job[] = [
	{
		mock: "shortlist",
		label: "Finding them, and getting the yes",
		title: {
			lead: "The right creators, and the",
			accent: "part after you find them.",
		},
		body: "A network of 50,000 vetted creators, filtered to the ones already selling in your category, then contacted, negotiated and signed. Finding a good creator is the easy half.",
		points: [
			"Shortlists built per brief, not a recycled roster",
			"Vetted on what they sell, not on follower count",
			"Category, location, language and format filters",
			"Outreach, negotiation and the chasing, handled for you",
			"Commission terms that reward selling, not posting",
			"A new creator pipeline every week",
		],
		aside:
			"Most agencies hand you a list. A list is not a booked creator, and the gap between the two is where TikTok Shop programmes stall.",
	},
	{
		mock: "brief",
		label: "What they actually make",
		title: { lead: "A brief that sells,", accent: "before anyone films." },
		body: "Content that converts rather than entertains is decided before the shoot. We write the hook, the angle and the proof, and every creator shoots to the same spec.",
		points: [
			"A hook written for the first three seconds",
			"Angles built from what already sells in your category",
			"One brief, one spec, so results are comparable",
			"Listing, commission and LIVE strategy alongside the content",
			"Versioned drafts and timestamped approvals",
			"Usage rights agreed before work starts",
		],
		aside:
			"Twenty videos with twenty different ideas teach you nothing. Twenty against one brief tell you which angle to put money behind.",
	},
	{
		mock: "payouts",
		label: "Delivery, and the money",
		title: { lead: "The videos land.", accent: "So do the payouts." },
		body: "You approve the cuts and we pay every creator. Dozens of small cross-border payments, each tied to an approval and each needing a record, is the part nobody plans for.",
		points: [
			"UGC, product demos and TikTok-native formats you own",
			"One invoice to you; we pay every creator",
			"Payouts released against approved milestones",
			"Cross-border payouts, with tax and identity checks handled",
			"A record per creator: what was agreed, delivered and paid",
			"Performance reported per creator, not per campaign",
		],
		aside:
			"Nobody gives up on TikTok Shop because the videos were hard. They give up because chasing forty payouts a month is.",
	},
];

/* Copy inside the product mock-ups of the "What we handle" section. */

export const shortlistSearch = {
	query: "creators who already sell skincare",
	filters: ["Beauty", "US", "Sells on Shop", "EN", "10k–500k"],
};

export const briefBeats = [
	{
		label: "Hook · first 3 seconds",
		text: "Problem stated before the product appears",
	},
	{ label: "Angle · demo", text: "The thing it fixes, shown once, close up" },
	{ label: "Proof · before / after", text: "Same frame, same light, no cut" },
];

export type WayArt = "split" | "seeding" | "library" | "live";

export type Way = { art: WayArt; title: string; body: string };

export const ways: Way[] = [
	{
		art: "split",
		title: "TikTok Shop affiliate",
		body: "Creators post to their own audience and earn commission on what they sell. The engine behind most Shop GMV.",
	},
	{
		art: "seeding",
		title: "Product seeding",
		body: "Get product into the right creators' hands, with tracking on who actually posts and what it earns.",
	},
	{
		art: "library",
		title: "UGC for ads and listings",
		body: "Video and images you own and can run as paid media, with rights agreed before work starts.",
	},
	{
		art: "live",
		title: "TikTok LIVE",
		body: "Live selling sessions with creators who already run them, briefed on your catalogue and offers.",
	},
];

export const steps = [
	{
		title: "Book a call",
		body: "Fifteen minutes. Product, market, margins. If TikTok Shop is not worth your money yet, we will say so on that call.",
	},
	{
		title: "We come back with a brief and a shortlist",
		body: "Hooks, angles, commission terms and named creators who already sell your category. You see all of it before you commit.",
	},
	{
		title: "Creators post, you approve, we pay them",
		body: "Drafts to approve on your schedule, performance tracked per creator, and one invoice at the end instead of forty payouts.",
	},
];
