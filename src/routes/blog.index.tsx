import { createFileRoute, redirect } from "@tanstack/react-router";

/* The blog used to live at /blog. Keep old links and search results working. */
export const Route = createFileRoute("/blog/")({
	beforeLoad: () => {
		throw redirect({ to: "/resources", statusCode: 308 });
	},
});
