import type { ReactNode } from "react";

/** Wraps a page's sections. Clips horizontal overflow from marquees and glows. */
export function PageShell({ children }: { children: ReactNode }) {
	return (
		<div className="relative min-h-[100dvh] overflow-x-clip">{children}</div>
	);
}
