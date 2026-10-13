import { SmartLink } from "@/components/shared/smart-link";
import { headerActions, siteConfig } from "@/config/site";

const pill =
	"inline-flex items-center rounded-full px-6 py-3 text-[0.95rem] font-semibold";

/** Invitation to book an intro call, with the two self-serve ways out. */
export function CallBand({ eyebrow }: { eyebrow: string }) {
	return (
		<section className="w-full border-t border-hairline bg-surface px-4 py-16 md:py-20">
			<div className="mx-auto w-full max-w-3xl text-center">
				<p className="mono-label text-accent">{eyebrow}</p>
				<h2 className="mt-3 font-serif text-[clamp(1.75rem,3.4vw,2.5rem)] font-normal not-italic leading-[1.06] tracking-[-0.02em] text-ink">
					Get on a call with us
				</h2>
				<p className="mx-auto mt-3 max-w-xl text-[1.02rem] leading-relaxed text-muted">
					Fifteen minutes, no deck. Tell us the product and the market and we'll
					say plainly whether creators, warmed accounts, or the managed
					programme is the right first move.
				</p>
				<div className="mt-7 flex flex-wrap items-center justify-center gap-3">
					<SmartLink
						href={siteConfig.bookingUrl}
						external
						className={`btn-primary ${pill}`}
					>
						Book a meeting with us
					</SmartLink>
					<SmartLink
						href={headerActions.primary.href}
						className={`btn-ghost ${pill}`}
					>
						Start a campaign instead
					</SmartLink>
					<SmartLink
						href="/agency"
						className="inline-flex items-center rounded-full px-4 py-3 text-[0.95rem] font-semibold text-ink underline decoration-hairline underline-offset-4 hover:text-accent"
					>
						See the agency plan
					</SmartLink>
				</div>
			</div>
		</section>
	);
}
