import index from "@/content/legal/index.json";

export type Policy = {
	slug: string;
	title: string;
	/** One-line description, shown on the index and as the meta description. */
	summary: string;
	/** Month the policy last changed, e.g. "August 2026". */
	updated: string;
	metaTitle: string;
	metaDescription: string;
};

/** Every policy, in the order the legal index lists them. */
export const policies = index as Policy[];

const bySlug = new Map(policies.map((policy) => [policy.slug, policy]));

export const getPolicy = (slug: string) => bySlug.get(slug);

export const policyPath = (slug: string) => `/legal/${slug}`;

const bodies = import.meta.glob<{ default: { html: string } }>(
	"../content/legal/bodies/*.json",
);

/** Policy markup. Authored in-house, so it is trusted. */
export async function loadPolicyHtml(slug: string): Promise<string | null> {
	const load = bodies[`../content/legal/bodies/${slug}.json`];
	if (!load) return null;
	return (await load()).default.html;
}
