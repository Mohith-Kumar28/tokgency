import { PageShell } from "@/components/layout/page-shell";
import { LandingCards } from "@/components/sections/landing/landing-cards";
import { LandingHero } from "@/components/sections/landing/landing-hero";
import { LandingIncluded } from "@/components/sections/landing/landing-included";
import { LandingIntro } from "@/components/sections/landing/landing-intro";
import { LandingRelated } from "@/components/sections/landing/landing-related";
import { ClosingCta } from "@/components/shared/closing-cta";
import type { LandingPage } from "@/content/landing/types";

/** The one layout shared by every SEO landing page. */
export function LandingTemplate({ page }: { page: LandingPage }) {
	return (
		<PageShell>
			<LandingHero slug={page.slug} hero={page.hero} />
			<LandingIntro text={page.intro} />
			<LandingCards cards={page.cards} />
			<LandingIncluded items={page.included} />
			<LandingRelated links={page.related} />
			<ClosingCta
				badge="Talk to the team"
				title={page.cta.title}
				description={page.cta.description}
				primary={{ label: "Book a call", href: "/agency" }}
				secondary={{ label: "Explore creators", href: "/creator-marketplace" }}
			/>
		</PageShell>
	);
}
