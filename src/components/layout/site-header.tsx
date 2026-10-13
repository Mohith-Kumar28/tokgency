import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { PlatformMenu } from "@/components/layout/platform-menu";
import { ChipButtonLink } from "@/components/shared/button-link";
import { SmartLink } from "@/components/shared/smart-link";
import {
	headerActions,
	platformMenu,
	primaryNav,
	showAccountActions,
} from "@/config/site";
import { cn } from "@/lib/utils";

const SCROLLED_AFTER_PX = 12;

function useScrolled(threshold: number) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const update = () => setScrolled(window.scrollY > threshold);
		update();
		window.addEventListener("scroll", update, { passive: true });
		return () => window.removeEventListener("scroll", update);
	}, [threshold]);

	return scrolled;
}

function useBodyScrollLock(locked: boolean) {
	useEffect(() => {
		document.body.style.overflow = locked ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [locked]);
}

export function SiteHeader() {
	const scrolled = useScrolled(SCROLLED_AFTER_PX);
	const [menuOpen, setMenuOpen] = useState(false);
	useBodyScrollLock(menuOpen);

	return (
		<header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4">
			<nav
				aria-label="Main"
				className={cn(
					"pointer-events-auto mt-3 flex w-full max-w-5xl items-center justify-between rounded-full border border-hairline bg-card/70 py-1.5 pl-4 pr-1.5 backdrop-blur-xl transition-[box-shadow,transform] duration-300 ease-out-expo",
					scrolled ? "shadow-lift" : "shadow-soft",
				)}
			>
				<Logo />

				<div className="hidden items-center gap-1 lg:flex">
					<PlatformMenu label="Platform" items={platformMenu} />
					{primaryNav.map((item) => (
						<SmartLink
							key={item.href}
							href={item.href}
							external={item.external}
							className="rounded-full px-3 py-2 text-[0.9rem] font-medium text-muted transition-colors hover:bg-surface hover:text-ink"
						>
							{item.label}
						</SmartLink>
					))}
				</div>

				{showAccountActions && (
					<div className="hidden items-center gap-1.5 lg:flex">
						<SmartLink
							href={headerActions.login.href}
							className="rounded-full px-3 py-2 text-[0.9rem] font-semibold text-ink transition-colors hover:text-accent"
						>
							{headerActions.login.label}
						</SmartLink>
						<ChipButtonLink href={headerActions.primary.href}>
							{headerActions.primary.label}
						</ChipButtonLink>
					</div>
				)}

				<div className="flex items-center gap-1 lg:hidden">
					<button
						type="button"
						aria-label="Menu"
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((value) => !value)}
						className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink"
					>
						{menuOpen ? (
							<X aria-hidden className="h-5 w-5" />
						) : (
							<Menu aria-hidden className="h-5 w-5" />
						)}
					</button>
				</div>
			</nav>

			{menuOpen && <MobileMenu onNavigate={() => setMenuOpen(false)} />}
		</header>
	);
}
