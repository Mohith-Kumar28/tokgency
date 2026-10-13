import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/sections/legal/legal-layout";
import { PolicyIndexList } from "@/components/sections/legal/policy-links";
import { siteConfig } from "@/config/site";
import { policies } from "@/lib/legal";
import { breadcrumbJsonLd, jsonLdScript, seo } from "@/lib/seo";

export const Route = createFileRoute("/legal/")({
	head: () => ({
		...seo({
			title: "Policies",
			description:
				"Tokgency's terms, privacy, content, rights, cancellation and disclosure policies.",
			path: "/legal",
		}),
		scripts: [
			jsonLdScript(
				breadcrumbJsonLd([
					{ name: "Home", path: "/" },
					{ name: "Policies", path: "/legal" },
				]),
			),
		],
	}),
	component: LegalIndexPage,
});

function LegalIndexPage() {
	return (
		<LegalLayout title="Policies">
			<p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">
				These pages are the plain-language version of the rules we work by. The
				binding terms are presented in the application at sign-up; where the two
				differ, the in-app version is the one that governs.
			</p>
			<PolicyIndexList policies={policies} />
			<p className="mt-10 text-[0.9rem] leading-relaxed text-muted">
				Questions about any of these:{" "}
				<a
					href={`mailto:${siteConfig.email}`}
					className="text-ink underline decoration-hairline underline-offset-4 hover:text-accent"
				>
					{siteConfig.email}
				</a>
				.
			</p>
		</LegalLayout>
	);
}
