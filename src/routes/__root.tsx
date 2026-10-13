import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { NotFound } from "@/components/layout/not-found";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { jsonLdScript, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import appCss from "@/styles/globals.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ name: "theme-color", content: siteConfig.themeColor },
			{ name: "color-scheme", content: "dark" },
			{ name: "format-detection", content: "telephone=no" },
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", href: "/favicon.ico", sizes: "48x48" },
			{ rel: "icon", href: "/icon.png", sizes: "192x192", type: "image/png" },
			{ rel: "apple-touch-icon", href: "/apple-icon.png", sizes: "180x180" },
			{ rel: "manifest", href: "/site.webmanifest" },
		],
		scripts: [
			jsonLdScript(organizationJsonLd()),
			jsonLdScript(websiteJsonLd()),
		],
	}),
	shellComponent: RootDocument,
	component: RootLayout,
	notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}

function RootLayout() {
	return (
		<>
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
			>
				Skip to content
			</a>
			<SiteHeader />
			<main id="main" className="relative z-10">
				<Outlet />
			</main>
			<SiteFooter />
		</>
	);
}
