export type FilterGroup = { label: string; options: string[] };

export const filterGroups: FilterGroup[] = [
	{
		label: "Category",
		options: ["Beauty", "Supplements", "Fashion", "Home", "Food", "Apps"],
	},
	{
		label: "Style",
		options: [
			"Product demo",
			"Testimonial",
			"Founder-style",
			"Unboxing",
			"Routine",
			"Voiceover",
		],
	},
	{ label: "Format", options: ["On-camera", "Hands-only", "Voiceover"] },
	{ label: "Rights", options: ["Paid usage available"] },
];

/** `depth` is the category's share of the sourcing pool relative to the deepest one, in percent. */
export type SourcingCategory = { name: string; depth: number };

export const sourcingCategories: SourcingCategory[] = [
	{ name: "Beauty & Personal Care", depth: 100 },
	{ name: "Health & Supplements", depth: 60 },
	{ name: "Womenswear & Apparel", depth: 32 },
	{ name: "Food & Beverages", depth: 27 },
	{ name: "Sports & Outdoor", depth: 26 },
	{ name: "Home Supplies", depth: 24 },
	{ name: "Phones & Electronics", depth: 20 },
	{ name: "Fashion Accessories", depth: 17 },
	{ name: "Household Appliances", depth: 14 },
	{ name: "Pet Supplies", depth: 13 },
];
