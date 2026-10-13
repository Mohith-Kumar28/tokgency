import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { Benefits } from "@/components/sections/creators/benefits";
import { CreatorsFaq } from "@/components/sections/creators/faq";
import { JoiningSteps } from "@/components/sections/creators/joining-steps";
import { RateCard } from "@/components/sections/creators/rate-card";
import { ButtonLink } from "@/components/shared/button-link";
import { ClosingCta } from "@/components/shared/closing-cta";
import { PageHero } from "@/components/shared/page-hero";
import { Accent } from "@/components/shared/section-heading";
import { appUrl } from "@/config/site";
import { creatorFaqs } from "@/content/creators";
import { faqJsonLd, jsonLdScript, seo } from "@/lib/seo";

const applyUrl = appUrl("/portal/apply");

export const Route = createFileRoute("/creators")({
	head: () => ({
		...seo({
			title: "Get paid to make TikTok content for brands",
			description:
				"Join Tokgency as a UGC creator. Find clear paid opportunities, submit deliverables against real briefs, set your own rate card, and get paid reliably in USD.",
			path: "/creators",
		}),
		scripts: [jsonLdScript(faqJsonLd(creatorFaqs))],
	}),
	component: CreatorsPage,
});

function CreatorsPage() {
	return (
		<PageShell>
			<PageHero
				eyebrow="For creators"
				title={
					<>
						Get paid to make TikTok content{" "}
						<Accent>for brands you want to work with.</Accent>
					</>
				}
				description="Clear briefs, fair rights, and reliable payouts. Set your own rate card, pick the styles you’re best at, and build a portfolio of paid work."
				actions={
					<>
						<ButtonLink href={applyUrl} external>
							Apply now
						</ButtonLink>
						<ButtonLink href="/how-it-works" variant="ghost">
							How it works
						</ButtonLink>
					</>
				}
				footnote="Paid in USD · Rights agreed up front · Manually reviewed"
			/>
			<Benefits />
			<JoiningSteps />
			<RateCard />
			<CreatorsFaq />
			<ClosingCta
				badge="Applications reviewed by hand"
				title={
					<>
						Start earning <Accent>with Tokgency.</Accent>
					</>
				}
				description="Apply once, get reviewed, and start receiving matched paid opportunities."
				primary={{ label: "Apply now", href: applyUrl, external: true }}
				secondary={{ label: "How it works", href: "/how-it-works" }}
			/>
		</PageShell>
	);
}
