import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * The visitor's reduced-motion preference, reported only once the page has
 * hydrated. The server cannot know the preference, so the first client render
 * must ignore it too or React reports a mismatch.
 */
export function useSettledReducedMotion(): boolean {
	const prefersReduced = useReducedMotion();
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => setHydrated(true), []);

	return hydrated && Boolean(prefersReduced);
}
