import { createFileRoute, notFound } from "@tanstack/react-router";
import { LegalLayout } from "@/components/sections/legal/legal-layout";
import { OtherPolicies } from "@/components/sections/legal/policy-links";
import { siteConfig } from "@/config/site";
import { getPolicy, loadPolicyHtml, policies, policyPath } from "@/lib/legal";
import { breadcrumbJsonLd, jsonLdScript, seo } from "@/lib/seo";

const TITLE_SUFFIX = ` | ${siteConfig.name}`;

export const Route = createFileRoute("/legal/$slug")({
	loader: async ({ params }) => {
		const policy = getPolicy(params.slug);
		const html = policy ? await loadPolicyHtml(policy.slug) : null;
		if (!policy || !html) throw notFound();

		return { policy, html };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return {};
		const { policy } = loaderData;
		const path = policyPath(policy.slug);

		return {
			...seo({
				title: policy.metaTitle.replace(TITLE_SUFFIX, ""),
				description: policy.metaDescription,
				path,
			}),
			scripts: [
				jsonLdScript(
					breadcrumbJsonLd([
						{ name: "Home", path: "/" },
						{ name: "Policies", path: "/legal" },
						{ name: policy.title, path },
					]),
				),
			],
		};
	},
	component: PolicyPage,
});

function PolicyPage() {
	const { policy, html } = Route.useLoaderData();
	const others = policies.filter((other) => other.slug !== policy.slug);

	return (
		<LegalLayout title={policy.title}>
			<div className="mt-7 border-t border-hairline pt-5">
				<span className="mono-label text-muted">
					Last updated: {policy.updated}
				</span>
			</div>
			<div
				className="prose-tkg mt-12 max-w-none"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: markup comes from our own content files, not user input
				dangerouslySetInnerHTML={{ __html: html }}
			/>
			<OtherPolicies policies={others} />
		</LegalLayout>
	);
}
