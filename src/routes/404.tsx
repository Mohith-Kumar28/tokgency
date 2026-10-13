import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/layout/not-found";
import { seo } from "@/lib/seo";

/* Prerendered to 404.html, which the static host serves for unknown URLs. */
export const Route = createFileRoute("/404")({
	head: () =>
		seo({
			title: "Page not found",
			description: "The page you were looking for does not exist.",
			path: "/404",
			noindex: true,
		}),
	component: NotFound,
});
