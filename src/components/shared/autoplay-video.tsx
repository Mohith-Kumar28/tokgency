import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AutoplayVideoProps = {
	src: string;
	poster?: string;
	className?: string;
	/** How far outside the viewport the clip starts loading. */
	rootMargin?: string;
};

/**
 * Muted looping clip that only loads and plays while it is near the viewport,
 * so a wall of dozens of videos costs nothing until it is scrolled to.
 */
export function AutoplayVideo({
	src,
	poster,
	className,
	rootMargin = "200px",
}: AutoplayVideoProps) {
	const ref = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = ref.current;
		if (!video) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					video.preload = "auto";
					video.play().catch(() => {});
				} else {
					video.pause();
				}
			},
			{ rootMargin, threshold: 0.01 },
		);

		observer.observe(video);
		return () => observer.disconnect();
	}, [rootMargin]);

	return (
		<video
			ref={ref}
			src={src}
			poster={poster}
			muted
			loop
			playsInline
			preload="none"
			className={cn("h-full w-full object-cover", className)}
		/>
	);
}
