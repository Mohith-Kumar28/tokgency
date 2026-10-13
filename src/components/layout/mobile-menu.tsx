import { ButtonLink, ChipButtonLink } from "@/components/shared/button-link";
import { SmartLink } from "@/components/shared/smart-link";
import {
	headerActions,
	platformMenu,
	primaryNav,
	showAccountActions,
} from "@/config/site";

/** Full-screen navigation shown below the lg breakpoint. */
export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
	return (
		<div className="pointer-events-auto fixed inset-0 top-0 z-40 flex flex-col overflow-y-auto bg-background px-6 pb-8 pt-24 lg:hidden">
			<p className="mono-label px-4 pb-1 text-muted">Platform</p>
			<div className="flex flex-col gap-1">
				{platformMenu.map((item) => (
					<SmartLink
						key={item.href}
						href={item.href}
						onClick={onNavigate}
						className="flex flex-col rounded-2xl px-4 py-3 hover:bg-surface"
					>
						<span className="text-lg font-semibold text-ink">{item.label}</span>
						<span className="text-[0.85rem] text-muted">{item.desc}</span>
					</SmartLink>
				))}
			</div>

			<div className="mt-3 flex flex-col gap-1 border-t border-hairline pt-3">
				{primaryNav.map((item) => (
					<SmartLink
						key={item.href}
						href={item.href}
						external={item.external}
						onClick={onNavigate}
						className="rounded-2xl px-4 py-3.5 text-lg font-semibold text-ink hover:bg-surface"
					>
						{item.label}
					</SmartLink>
				))}
			</div>

			{showAccountActions && (
				<div className="mt-6 flex flex-col gap-3">
					<ChipButtonLink
						href={headerActions.primary.href}
						className="w-full justify-between text-base"
					>
						{headerActions.primary.label}
					</ChipButtonLink>
					<ButtonLink
						href={headerActions.login.href}
						variant="ghost"
						size="lg"
						onClick={onNavigate}
					>
						{headerActions.login.label}
					</ButtonLink>
				</div>
			)}
		</div>
	);
}
