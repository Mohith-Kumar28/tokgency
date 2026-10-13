import type { LucideIcon } from "lucide-react";

export type Feature = {
	icon: LucideIcon;
	title: string;
	body: string;
};

/** Vertical list of icon + title + one-line explanation. */
export function FeatureList({ features }: { features: Feature[] }) {
	return (
		<ul className="flex flex-col gap-6">
			{features.map(({ icon: Icon, title, body }) => (
				<li key={title} className="flex items-start gap-3.5">
					<span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline bg-card text-accent">
						<Icon aria-hidden className="h-4 w-4" strokeWidth={1.6} />
					</span>
					<span className="flex min-w-0 flex-col gap-1">
						<span className="text-[0.98rem] font-medium tracking-[-0.015em] text-ink">
							{title}
						</span>
						<span className="text-[0.92rem] leading-relaxed text-muted sm:max-w-[46ch]">
							{body}
						</span>
					</span>
				</li>
			))}
		</ul>
	);
}
