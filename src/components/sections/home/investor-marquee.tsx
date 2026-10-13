import type { CSSProperties } from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type Investor = {
	name: string;
	src: string;
	/** Optical correction so marks of different shapes read at one size. */
	scale?: number;
	/** Wordmark set next to icon-only logos. */
	wordmark?: string;
};

const INVESTORS: Investor[] = [
	{ name: "Left Lane Capital", src: "/vc/left-lane.svg" },
	{ name: "Vertex Ventures", src: "/vc/vertex.png" },
	{
		name: "Fireside Ventures",
		src: "/vc/fireside.png",
		scale: 0.78,
		wordmark: "Fireside",
	},
	{ name: "Sixth Sense Ventures", src: "/vc/sixth-sense.svg" },
	{
		name: "3one4 Capital",
		src: "/vc/3one4.svg",
		scale: 0.85,
		wordmark: "3one4",
	},
	{ name: "360 ONE", src: "/vc/360-one.svg" },
	{ name: "VMG Partners", src: "/vc/vmg.png", scale: 0.8 },
	{ name: "RPSG Ventures", src: "/vc/rpsg.png", scale: 0.9 },
	{ name: "Elev8 Venture Partners", src: "/vc/elev8.webp" },
];

function InvestorLogo({ investor }: { investor: Investor }) {
	return (
		<span className="flex h-8 w-[158px] shrink-0 items-center justify-center gap-2 md:w-[178px]">
			<img
				src={investor.src}
				alt={investor.name}
				width={200}
				height={32}
				loading="lazy"
				decoding="async"
				className={cn(
					"w-auto object-contain opacity-55 transition-opacity duration-500 [filter:brightness(0)_invert(1)] hover:opacity-100",
					investor.wordmark ? "max-h-6" : "max-h-8",
				)}
				style={
					investor.scale ? { transform: `scale(${investor.scale})` } : undefined
				}
			/>
			{investor.wordmark && (
				<span className="whitespace-nowrap text-[0.78rem] font-medium tracking-[-0.01em] text-ink opacity-55">
					{investor.wordmark}
				</span>
			)}
		</span>
	);
}

/* Two copies back to back; the track scrolls exactly one copy, then loops. */
const loop = [0, 1].flatMap((copy) =>
	INVESTORS.map((investor) => ({ investor, key: `${investor.name}-${copy}` })),
);

export function InvestorMarquee() {
	return (
		<section className="w-full px-4 pb-20 md:pb-24">
			<div className="mx-auto w-full max-w-6xl">
				<Reveal>
					<div className="lw-row group relative">
						<div className="overflow-hidden">
							<div
								className="lw-track flex w-max items-center motion-reduce:animate-none"
								style={{ "--lw-dur": "42s" } as CSSProperties}
							>
								{loop.map(({ investor, key }) => (
									<InvestorLogo key={key} investor={investor} />
								))}
							</div>
						</div>

						<div
							className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pr-16"
							style={{
								background:
									"linear-gradient(90deg, var(--background) 0%, var(--background) 68%, transparent 100%)",
							}}
						>
							<span className="max-w-[11rem] text-[0.9rem] font-semibold leading-snug tracking-[-0.01em] text-ink md:max-w-[13rem]">
								Brands we work with have raised from:
							</span>
						</div>
						<span
							aria-hidden
							className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24"
							style={{
								background:
									"linear-gradient(270deg, var(--background) 0%, transparent 100%)",
							}}
						/>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
