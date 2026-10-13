import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type SmartLinkProps = Omit<ComponentProps<"a">, "href"> & {
	href: string;
	/** Open in a new tab. Off by default, even for absolute URLs. */
	external?: boolean;
};

const isInternal = (href: string) => href.startsWith("/");

/**
 * One link component for the whole site: client-side routing for internal
 * paths, a plain anchor for everything else (app, mailto, external).
 */
export function SmartLink({ href, external, ...props }: SmartLinkProps) {
	if (isInternal(href) && !external) {
		// The router tags current links with an "active" class by default; nothing styles it.
		return <Link to={href} activeProps={{}} {...props} />;
	}

	/* An email link opened in a new tab leaves an empty tab behind. */
	const newTab =
		external && !href.startsWith("mailto:")
			? { target: "_blank", rel: "noopener noreferrer" }
			: {};

	return <a href={href} {...newTab} {...props} />;
}
