/** A numbered card: a title with either a paragraph or a check list. */
export type LandingCard = {
	title: string;
	body?: string;
	bullets?: string[];
};

export type LandingLink = { label: string; href: string };

/** Everything that varies between the SEO landing pages. */
export type LandingPage = {
	/** Route path without the leading slash. Also names the hero image. */
	slug: string;
	meta: { title: string; description: string };
	hero: { eyebrow: string; title: string; description: string };
	/** Lead paragraph in the band under the hero. */
	intro: string;
	cards: LandingCard[];
	included: string[];
	related: LandingLink[];
	cta: { title: string; description: string };
};
