import { useEffect, useRef } from "react";

/** Thin accent bar across the top that fills as the page is read. */
export function ReadingProgress() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let frame = 0;

		const paint = () => {
			frame = 0;
			const bar = ref.current;
			if (!bar) return;

			const scrollable =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress =
				scrollable > 0
					? Math.min(1, Math.max(0, window.scrollY / scrollable))
					: 0;
			bar.style.transform = `scaleX(${progress})`;
		};

		/* Coalesce bursts of scroll events into one paint per frame. */
		const schedule = () => {
			if (!frame) frame = requestAnimationFrame(paint);
		};

		paint();
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule);
		return () => {
			if (frame) cancelAnimationFrame(frame);
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
		};
	}, []);

	return (
		<div
			ref={ref}
			aria-hidden
			className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-accent"
			style={{ transform: "scaleX(0)" }}
		/>
	);
}
