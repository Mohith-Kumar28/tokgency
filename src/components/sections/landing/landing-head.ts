import type { LandingPage } from "@/content/landing/types";
import { seo } from "@/lib/seo";

/** Route `head` for a landing page. The social card uses the bare title. */
export function landingHead({ slug, meta }: LandingPage) {
	return seo({
		title: meta.title,
		description: meta.description,
		path: `/${slug}`,
		socialTitle: meta.title,
	});
}
