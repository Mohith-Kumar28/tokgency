import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

/*
 * The starting style is the same for every visitor so the server HTML and the
 * first client render agree. For people who ask for reduced motion, the lift
 * is skipped by giving it no duration: the element only fades.
 */
const noTravel = { y: { duration: 0 } };

type RevealProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	y?: number;
};

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({
	children,
	className,
	delay = 0,
	y = 18,
}: RevealProps) {
	const reduced = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.7,
				ease: EASE_OUT_EXPO,
				delay,
				...(reduced ? noTravel : {}),
			}}
		>
			{children}
		</motion.div>
	);
}

type RevealStaggerProps = {
	children: ReactNode;
	className?: string;
	step?: number;
};

/** Parent for a group of RevealItems that enter one after another. */
export function RevealStagger({
	children,
	className,
	step = 0.07,
}: RevealStaggerProps) {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, margin: "-60px" }}
			variants={{ hidden: {}, show: { transition: { staggerChildren: step } } }}
		>
			{children}
		</motion.div>
	);
}

export function RevealItem({
	children,
	className,
	y = 16,
}: Omit<RevealProps, "delay">) {
	const reduced = useReducedMotion();

	return (
		<motion.div
			className={className}
			variants={{
				hidden: { opacity: 0, y },
				show: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.6,
						ease: EASE_OUT_EXPO,
						...(reduced ? noTravel : {}),
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}
