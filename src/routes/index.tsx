import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/page-shell";
import { AgencyBand } from "@/components/sections/home/agency-band";
import { ByTheNumbers } from "@/components/sections/home/by-the-numbers";
import { Comparison } from "@/components/sections/home/comparison";
import { CreatorHiring } from "@/components/sections/home/creator-hiring";
import { DemoCall } from "@/components/sections/home/demo-call";
import { HomeFaq } from "@/components/sections/home/faq";
import { FormatsWall } from "@/components/sections/home/formats-wall";
import { GrowthLoop } from "@/components/sections/home/growth-loop";
import { Hero } from "@/components/sections/home/hero";
import { InvestorMarquee } from "@/components/sections/home/investor-marquee";
import { TwoWaysIn } from "@/components/sections/home/two-ways-in";
import { ClosingCta } from "@/components/shared/closing-cta";
import { Accent } from "@/components/shared/section-heading";
import { headerActions } from "@/config/site";
import { homeFaqs } from "@/content/home";
import { faqJsonLd, jsonLdScript, seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
	head: () => ({
		...seo({
			path: "/",
			description:
				"Run TikTok campaigns from one place: hire real creators, make content, manage US distribution, and see what to make next. Built for consumer apps, SaaS, and tech brands.",
			socialTitle: "Tokgency — TikTok growth, run properly",
			socialDescription:
				"Hire real creators, make content, manage publishing, and keep every campaign moving from one Tokgency workspace.",
			keywords: [
				"TikTok campaign platform",
				"TikTok creators",
				"UGC creators",
				"TikTok Shop agency",
				"managed US TikTok distribution",
				"creator marketplace",
			],
		}),
		scripts: [jsonLdScript(faqJsonLd(homeFaqs))],
	}),
	component: HomePage,
});

function HomePage() {
	return (
		<PageShell>
			<Hero />
			<InvestorMarquee />
			<ByTheNumbers />
			<FormatsWall />
			<TwoWaysIn />
			<DemoCall />
			<CreatorHiring />
			<GrowthLoop />
			<Comparison />
			<AgencyBand />
			<HomeFaq />
			<ClosingCta
				badge="Start in minutes"
				title={
					<>
						Put your app on <Accent>US TikTok.</Accent>
					</>
				}
				description="Start a creator campaign and add managed distribution when you're ready. No sales call needed to begin."
				primary={{
					label: "Start a campaign",
					href: headerActions.primary.href,
				}}
				secondary={{ label: "Explore creators", href: "/creator-marketplace" }}
			/>
		</PageShell>
	);
}
