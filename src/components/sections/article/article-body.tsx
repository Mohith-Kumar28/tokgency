import { useRouter } from "@tanstack/react-router";
import type { MouseEvent } from "react";
import { ArticleToc } from "@/components/sections/article/article-toc";
import type { ArticleBody as Body } from "@/lib/articles";

const isPlainLeftClick = (event: MouseEvent) =>
	event.button === 0 &&
	!event.metaKey &&
	!event.ctrlKey &&
	!event.shiftKey &&
	!event.altKey;

/** Article prose with the sticky table of contents beside it. */
export function ArticleBody({ body }: { body: Body }) {
	const router = useRouter();

	/* The prose is static HTML, so route its internal links on the client by hand. */
	const onClick = (event: MouseEvent<HTMLElement>) => {
		if (event.defaultPrevented || !isPlainLeftClick(event)) return;

		const anchor = (event.target as HTMLElement).closest("a");
		const href = anchor?.getAttribute("href");
		if (!href?.startsWith("/") || anchor?.target === "_blank") return;

		event.preventDefault();
		router.navigate({ href });
	};

	return (
		<div className="w-full px-4 py-14 md:py-20">
			<div className="mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[minmax(0,1fr)_15rem]">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: delegated handler; the links inside are natively keyboard-operable */}
				<article
					className="prose-tkg mx-auto w-full min-w-0"
					onClick={onClick}
					// biome-ignore lint/security/noDangerouslySetInnerHtml: markup comes from our own content files, not user input
					dangerouslySetInnerHTML={{ __html: body.html }}
				/>
				<aside className="hidden lg:block">
					<div className="sticky top-28 border-l border-hairline pl-5">
						<ArticleToc items={body.toc} />
					</div>
				</aside>
			</div>
		</div>
	);
}
