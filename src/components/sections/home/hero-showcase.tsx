import { Clapperboard, Flame, type LucideIcon, Sparkles } from "lucide-react";
import {
	type MotionValue,
	motion,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import { type RefObject, useLayoutEffect, useRef } from "react";
import { useSettledReducedMotion } from "@/components/motion/use-settled-reduced-motion";
import { HeroPhone } from "@/components/sections/home/hero-phone";
import { cn } from "@/lib/utils";

type Offset = { x: number; y: number };

type ShowcaseCard = {
	icon: LucideIcon;
	title: string;
	meta: string;
	/** Resting position around the phone. */
	position: string;
	/** Distance to the phone centre, used until the real one is measured. */
	fallback: Offset;
};

const CARDS: ShowcaseCard[] = [
	{
		icon: Flame,
		title: "Warmed-up TikTok accounts",
		meta: "Real phones · real local SIMs",
		position: "left-0 top-[12%] sm:top-[16%]",
		fallback: { x: 320, y: 160 },
	},
	{
		icon: Clapperboard,
		title: "UGC videos",
		meta: "Vetted creators, briefed by you",
		position: "right-0 top-[38%]",
		fallback: { x: -320, y: 30 },
	},
	{
		icon: Sparkles,
		title: "AI videos",
		meta: "Infra for bulk virality",
		position: "left-[2%] bottom-[14%]",
		fallback: { x: 300, y: -150 },
	},
];

const floatingCardClass =
	"absolute z-0 flex w-[236px] items-center gap-3 rounded-2xl border border-hairline bg-card p-3.5 shadow-lift lg:w-[254px]";

const SPRING = { stiffness: 90, damping: 20, mass: 0.6 };
const STAGGER = 0.1;
const TRAVEL = 0.75;
const TUCKED_SCALE_LOSS = 0.45;

function CardBody({ card }: { card: ShowcaseCard }) {
	const Icon = card.icon;

	return (
		<>
			<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
				<Icon aria-hidden className="h-[18px] w-[18px]" strokeWidth={1.75} />
			</span>
			<span className="min-w-0">
				<span className="block text-[0.9rem] font-medium leading-tight text-ink">
					{card.title}
				</span>
				<span className="mono-label mt-1 block text-muted">{card.meta}</span>
			</span>
		</>
	);
}

type FloatingCardProps = {
	card: ShowcaseCard;
	index: number;
	progress: MotionValue<number>;
	phoneRef: RefObject<HTMLDivElement | null>;
};

/** Starts tucked behind the phone and slides out to its slot on scroll. */
function FloatingCard({ card, index, progress, phoneRef }: FloatingCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const toPhone = useRef<Offset>(card.fallback);

	useLayoutEffect(() => {
		const measure = () => {
			const el = ref.current;
			const phone = phoneRef.current;
			if (!el || !phone) return;

			toPhone.current = {
				x:
					phone.offsetLeft +
					phone.offsetWidth / 2 -
					(el.offsetLeft + el.offsetWidth / 2),
				y:
					phone.offsetTop +
					phone.offsetHeight / 2 -
					(el.offsetTop + el.offsetHeight / 2),
			};
		};

		measure();
		const stage = ref.current?.parentElement;
		const observer = stage ? new ResizeObserver(measure) : null;
		if (stage) observer?.observe(stage);
		return () => observer?.disconnect();
	}, [phoneRef]);

	const start = STAGGER * index;
	const end = Math.min(start + TRAVEL, 1);

	/* 1 = tucked behind the phone, 0 = resting in its slot. */
	const tucked = useTransform(progress, [start, end], [1, 0], { clamp: true });
	const x = useSpring(
		useTransform(tucked, (t) => toPhone.current.x * t),
		SPRING,
	);
	const y = useSpring(
		useTransform(tucked, (t) => toPhone.current.y * t),
		SPRING,
	);
	const scale = useTransform(tucked, (t) => 1 - TUCKED_SCALE_LOSS * t);

	return (
		<motion.div
			ref={ref}
			style={{ x, y, scale }}
			className={cn(floatingCardClass, card.position)}
		>
			<CardBody card={card} />
		</motion.div>
	);
}

export function HeroShowcase() {
	const stageRef = useRef<HTMLDivElement>(null);
	const phoneRef = useRef<HTMLDivElement>(null);
	const reduced = useSettledReducedMotion();
	const { scrollYProgress } = useScroll({
		target: stageRef,
		offset: ["start 0.95", "center 0.5"],
	});

	return (
		<div ref={stageRef} className="relative mx-auto w-full max-w-5xl px-4">
			<div className="relative hidden min-h-[560px] items-center justify-center py-6 sm:flex">
				{CARDS.map((card, index) =>
					reduced ? (
						<div
							key={card.title}
							className={cn(floatingCardClass, card.position)}
						>
							<CardBody card={card} />
						</div>
					) : (
						<FloatingCard
							key={card.title}
							card={card}
							index={index}
							progress={scrollYProgress}
							phoneRef={phoneRef}
						/>
					),
				)}
				<HeroPhone ref={phoneRef} />
			</div>

			<div className="sm:hidden">
				<HeroPhone />
				<div className="mt-8 flex flex-col gap-3">
					{CARDS.map((card) => (
						<div
							key={card.title}
							className="flex items-center gap-3 rounded-2xl border border-hairline bg-card p-3.5 shadow-soft"
						>
							<CardBody card={card} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
