const CONTACT_EMAIL = "soaib@tokgency.com";

/** Where "book a call" and sign-up style buttons lead: an email to the team. */
const CONTACT_URL = `mailto:${CONTACT_EMAIL}`;

/**
 * Link for buttons that used to open the product app (campaign builder,
 * creator portal). There is no public sign-up yet, so they start a
 * conversation instead. The path is kept so callers stay self-describing and
 * can be pointed back at the app in one place.
 */
export const appUrl = (_path = "") => CONTACT_URL;

export const siteConfig = {
	name: "Tokgency",
	legalName: "Tokgency",
	url: "https://tokgency.com",
	title: "Tokgency — The TikTok campaign operating system for apps and brands",
	tagline:
		"The TikTok campaign operating system for consumer apps, SaaS, and tech brands. Hire creators, make content, manage US distribution.",
	email: CONTACT_EMAIL,
	locale: "en_US",
	themeColor: "#080808",
	ogImage: "/og.jpg",
	bookingUrl: CONTACT_URL,
} as const;

export type NavItem = {
	label: string;
	href: string;
	external?: boolean;
};

export type NavMenuItem = NavItem & { desc: string };

export const platformMenu: NavMenuItem[] = [
	{
		label: "Creator Database",
		href: "/creator-marketplace",
		desc: "Browse vetted TikTok Shop & UGC creators",
	},
	{
		label: "Warmed Accounts",
		href: "/warmed-tiktok-accounts",
		desc: "Warmed US TikTok accounts on real phones",
	},
	{
		label: "How it works",
		href: "/how-it-works",
		desc: "From brief to posted, step by step",
	},
];

export const primaryNav: NavItem[] = [
	{ label: "Creators that sell", href: "/tiktok-shop" },
	{ label: "Agency", href: "/agency" },
	{ label: "Pricing", href: "/pricing" },
	{ label: "Blog", href: "/resources" },
];

/**
 * Log in / Start a campaign in the header and mobile menu. Off while the
 * product app is not open to the public; set to true to bring them back.
 */
export const showAccountActions = false;

export const headerActions = {
	login: { label: "Log in", href: appUrl("/login") },
	primary: { label: "Start a campaign", href: appUrl("/campaigns/new") },
} as const;

export type FooterColumn = { heading: string; links: NavItem[] };

export const footerColumns: FooterColumn[] = [
	{
		heading: "Product",
		links: [
			{ label: "For apps & SaaS", href: "/" },
			{ label: "For TikTok Shop", href: "/tiktok-shop" },
			{ label: "Warmed TikTok accounts", href: "/warmed-tiktok-accounts" },
			{ label: "How it works", href: "/how-it-works" },
			{ label: "Pricing", href: "/pricing" },
			{ label: "Creator marketplace", href: "/creator-marketplace" },
		],
	},
	{
		heading: "Creators",
		links: [
			{ label: "Become a creator", href: "/creators" },
			{ label: "Apply now", href: appUrl("/portal/apply") },
			{ label: "Browse creators", href: "/creator-marketplace" },
		],
	},
	{
		heading: "Solutions",
		links: [
			{
				label: "TikTok Shop marketing agency",
				href: "/tiktok-shop-marketing-agency",
			},
			{
				label: "TikTok affiliate management",
				href: "/tiktok-affiliate-management",
			},
			{ label: "TikTok creator database", href: "/tiktok-creator-database" },
			{ label: "Agency program", href: "/agency" },
		],
	},
	{
		heading: "By category",
		links: [
			{ label: "Beauty & skincare", href: "/tiktok-shop-agency-beauty" },
			{
				label: "Supplements & wellness",
				href: "/tiktok-shop-agency-supplements",
			},
			{ label: "Fashion & apparel", href: "/tiktok-shop-agency-fashion" },
			{ label: "Home & kitchen", href: "/tiktok-shop-agency-home" },
			{ label: "Food & beverage", href: "/tiktok-shop-agency-food" },
		],
	},
	{
		heading: "Company",
		links: [
			{ label: "Resources", href: "/resources" },
			{ label: "Privacy", href: "/legal/privacy" },
			{ label: "Terms", href: "/legal/terms" },
			{ label: "All policies", href: "/legal" },
		],
	},
];

export const footerDisclaimer =
	"Tokgency is an independent agency and platform. It is not affiliated with, endorsed by, or an official partner of TikTok. Results depend on product, creative, audience, and platform dynamics; no reach or revenue outcome is guaranteed.";
