import index from "@/content/articles/index.json";

export type Article = {
	slug: string;
	title: string;
	description: string;
	category: string;
	/** ISO date, e.g. "2026-07-18". */
	date: string;
	/** Display form of `date`, e.g. "Jul 18, 2026". */
	dateLabel: string;
	readMinutes: number;
	/** Cover shown on the page (WebP). */
	image: string;
	/** JPEG copy of the cover for social cards, which do not all read WebP. */
	socialImage: string;
	/** Search-result title and description; can differ from the on-page ones. */
	metaTitle: string;
	metaDescription: string;
};

export type TocItem = { id: string; text: string; level: 2 | 3 };

export type ArticleBody = {
	/** Rendered article markup. Authored in-house, so it is trusted. */
	html: string;
	toc: TocItem[];
	/** Slugs shown under "Keep reading". */
	related: string[];
};

/** Every article, newest first. The first one is featured on the index. */
export const articles = index as Article[];

const bySlug = new Map(articles.map((article) => [article.slug, article]));

export const getArticle = (slug: string) => bySlug.get(slug);

export const articlePath = (slug: string) => `/resources/${slug}`;

/* One chunk per article, so a reader only downloads the one they open. */
const bodies = import.meta.glob<{ default: ArticleBody }>(
	"../content/articles/bodies/*.json",
);

export async function loadArticleBody(
	slug: string,
): Promise<ArticleBody | null> {
	const load = bodies[`../content/articles/bodies/${slug}.json`];
	if (!load) return null;
	return (await load()).default;
}

export type CategoryCount = { name: string; count: number };

export const ALL_CATEGORIES = "All";

/** "All" first, then categories from most to fewest articles. */
export function countCategories(list: Article[]): CategoryCount[] {
	const counts = new Map<string, number>();
	for (const article of list) {
		counts.set(article.category, (counts.get(article.category) ?? 0) + 1);
	}

	return [
		{ name: ALL_CATEGORIES, count: list.length },
		...[...counts.entries()]
			.sort((a, b) => b[1] - a[1])
			.map(([name, count]) => ({ name, count })),
	];
}
