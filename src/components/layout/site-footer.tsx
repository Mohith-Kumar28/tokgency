import { Logo } from "@/components/brand/logo";
import { SmartLink } from "@/components/shared/smart-link";
import {
	type FooterColumn,
	footerColumns,
	footerDisclaimer,
	siteConfig,
} from "@/config/site";

function FooterLinkColumn({ heading, links }: FooterColumn) {
	return (
		<div className="flex flex-col gap-3">
			<h3 className="text-[0.8rem] font-semibold uppercase tracking-wider text-muted">
				{heading}
			</h3>
			<ul className="flex flex-col gap-2">
				{links.map((link) => (
					<li key={link.label}>
						<SmartLink
							href={link.href}
							className="text-[0.9rem] text-ink/80 transition-colors hover:text-coral"
						>
							{link.label}
						</SmartLink>
					</li>
				))}
			</ul>
		</div>
	);
}

export function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-hairline bg-surface px-5 pb-10 pt-16">
			<div className="mx-auto w-full max-w-6xl">
				<div className="grid gap-10 md:grid-cols-[1.4fr_repeat(5,1fr)]">
					<div className="flex flex-col gap-4">
						<Logo />
						<p className="max-w-xs text-sm leading-relaxed text-muted">
							{siteConfig.tagline}
						</p>
						<a
							href={`mailto:${siteConfig.email}`}
							className="text-sm font-semibold text-ink underline decoration-1 underline-offset-2 hover:text-coral"
						>
							{siteConfig.email}
						</a>
					</div>

					{footerColumns.map((column) => (
						<FooterLinkColumn key={column.heading} {...column} />
					))}
				</div>

				<div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-6 text-sm text-muted md:flex-row md:items-center">
					<p>
						© {year} {siteConfig.name}. All rights reserved.
					</p>
					<p className="max-w-xl text-xs leading-relaxed text-muted/80">
						{footerDisclaimer}
					</p>
				</div>
			</div>
		</footer>
	);
}
