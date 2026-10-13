import { ButtonLink } from "@/components/shared/button-link";

export function NotFound() {
	return (
		<section className="flex min-h-[70vh] w-full flex-col items-center justify-center px-4 pb-24 pt-36 text-center">
			<span className="mono-label text-muted">Error 404</span>
			<h1 className="mt-6 text-balance text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink">
				This page <span className="serif text-accent">doesn’t exist.</span>
			</h1>
			<p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">
				The link may be old, or the page may have moved.
			</p>
			<div className="mt-9 flex flex-col gap-3 sm:flex-row">
				<ButtonLink href="/">Back to home</ButtonLink>
				<ButtonLink href="/resources" variant="ghost">
					Read the blog
				</ButtonLink>
			</div>
		</section>
	);
}
