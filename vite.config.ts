import { readFileSync } from "node:fs";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const SITE_URL = "https://tokgency.com";

type Changefreq = "weekly" | "monthly" | "yearly";
type Tier = { priority: number; changefreq: Changefreq };

const readJson = <T>(path: string): T =>
	JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8")) as T;

const articles = readJson<{ slug: string; date: string }[]>(
	"./src/content/articles/index.json",
);
const policies = readJson<{ slug: string }[]>("./src/content/legal/index.json");

const CORE_PAGES = [
	"/warmed-tiktok-accounts",
	"/tiktok-shop",
	"/how-it-works",
	"/pricing",
	"/agency",
	"/creators",
	"/creator-marketplace",
	"/resources",
];

const LANDING_PAGES = [
	"/tiktok-shop-marketing-agency",
	"/tiktok-affiliate-management",
	"/tiktok-creator-database",
	"/tiktok-shop-agency-beauty",
	"/tiktok-shop-agency-supplements",
	"/tiktok-shop-agency-fashion",
	"/tiktok-shop-agency-home",
	"/tiktok-shop-agency-food",
];

const page = (path: string, tier: Tier, lastmod?: string) => ({
	path,
	sitemap: { ...tier, ...(lastmod ? { lastmod } : {}) },
});

/* Every public URL, so each one is prerendered and listed in sitemap.xml. */
const pages = [
	page("/", { priority: 1, changefreq: "weekly" }),
	...CORE_PAGES.map((path) =>
		page(path, { priority: 0.8, changefreq: "weekly" }),
	),
	...LANDING_PAGES.map((path) =>
		page(path, { priority: 0.7, changefreq: "monthly" }),
	),
	...articles.map((article) =>
		page(
			`/resources/${article.slug}`,
			{ priority: 0.6, changefreq: "monthly" },
			article.date,
		),
	),
	{ path: "/404", sitemap: { exclude: true } },
	page("/legal", { priority: 0.3, changefreq: "yearly" }),
	...policies.map((policy) =>
		page(`/legal/${policy.slug}`, { priority: 0.3, changefreq: "yearly" }),
	),
];

export default defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		tailwindcss(),
		tanstackStart({
			pages,
			/* The site is fully static: every page is rendered to HTML at build time. */
			prerender: {
				enabled: true,
				crawlLinks: true,
				/* `pages` is the full list; discovery would add index routes a second time as "/resources/". */
				autoStaticPathsDiscovery: false,
				/* Flat files (pricing.html) so the host serves /pricing with no trailing slash. */
				autoSubfolderIndex: false,
				failOnError: true,
			},
			sitemap: { enabled: true, host: SITE_URL },
		}),
		viteReact(),
	],
});
