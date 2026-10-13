/*
 * Line-art flowers that grow from the corner of the stat cards. Each bloom is
 * described by a centre and a scale; petals are generated from that.
 */

type Bloom = {
	cx: number;
	cy: number;
	scale: number;
	opacity: number;
	/** Whole-flower tilt in degrees. */
	tilt?: number;
};

const turns = (count: number) =>
	Array.from({ length: count }, (_, i) => (360 / count) * i);

function FloraCanvas({ children }: { children: React.ReactNode }) {
	return (
		<svg
			viewBox="0 0 200 170"
			className="h-auto w-full"
			aria-hidden="true"
			focusable="false"
		>
			{children}
		</svg>
	);
}

const stemProps = {
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 1.6,
	strokeLinecap: "round",
} as const;

const DAISY_STEMS = [
	"M64 170 C 62 130, 58 108, 52 84",
	"M84 170 C 88 132, 96 110, 104 74",
	"M104 170 C 104 138, 112 120, 132 96",
	"M46 170 C 50 142, 46 126, 30 104",
	"M124 170 C 126 140, 140 126, 158 112",
];

const DAISY_LEAVES = [
	"M60 138 C 44 132, 38 120, 40 110 C 52 112, 60 124, 60 138 Z",
	"M92 128 C 108 124, 116 112, 114 100 C 100 104, 92 116, 92 128 Z",
	"M116 148 C 132 146, 142 136, 142 124 C 128 126, 118 136, 116 148 Z",
];

const DAISIES: Bloom[] = [
	{ cx: 52, cy: 80, scale: 0.9, tilt: 6, opacity: 0.95 },
	{ cx: 104, cy: 70, scale: 1.1, tilt: -12, opacity: 1 },
	{ cx: 132, cy: 92, scale: 0.8, tilt: 20, opacity: 0.9 },
	{ cx: 30, cy: 100, scale: 0.7, tilt: -8, opacity: 0.8 },
	{ cx: 158, cy: 110, scale: 0.65, tilt: 14, opacity: 0.75 },
];

/** Eight long ink petals around an accent centre. */
function Daisy({ cx, cy, scale, tilt = 0, opacity }: Bloom) {
	return (
		<g transform={`rotate(${tilt} ${cx} ${cy})`} opacity={opacity}>
			{turns(8).map((angle) => (
				<ellipse
					key={angle}
					cx={cx}
					cy={cy - 14.4 * scale}
					rx={5.2 * scale}
					ry={14.4 * scale}
					transform={`rotate(${angle} ${cx} ${cy})`}
					fill="currentColor"
					className="text-ink/70"
				/>
			))}
			<circle cx={cx} cy={cy} r={6.8 * scale} fill="var(--accent)" />
		</g>
	);
}

export function DaisyFlora() {
	return (
		<FloraCanvas>
			<g {...stemProps} className="text-ink/35">
				{DAISY_STEMS.map((d) => (
					<path key={d} d={d} />
				))}
				{DAISY_LEAVES.map((d) => (
					<path key={d} d={d} className="text-ink/25" />
				))}
			</g>
			{DAISIES.map((bloom) => (
				<Daisy key={`${bloom.cx}-${bloom.cy}`} {...bloom} />
			))}
		</FloraCanvas>
	);
}

const BLOSSOM_STEMS = [
	"M52 170 C 50 134, 44 112, 36 88",
	"M76 170 C 78 136, 74 112, 68 78",
	"M100 170 C 100 130, 104 104, 106 66",
	"M124 170 C 126 136, 134 114, 146 92",
	"M148 170 C 150 142, 158 126, 172 110",
];

/** Points on the stems where a pair of twig leaves branches off. */
const TWIGS = [
	{ x: 44, y: 120 },
	{ x: 70, y: 108 },
	{ x: 104, y: 96 },
	{ x: 136, y: 118 },
];

const BLOSSOMS: Bloom[] = [
	{ cx: 36, cy: 84, scale: 0.65, opacity: 0.85 },
	{ cx: 68, cy: 74, scale: 0.8, opacity: 1 },
	{ cx: 106, cy: 62, scale: 0.95, opacity: 1 },
	{ cx: 146, cy: 88, scale: 0.75, opacity: 0.9 },
	{ cx: 172, cy: 106, scale: 0.55, opacity: 0.75 },
];

const BUDS = [
	{ cx: 20, cy: 118 },
	{ cx: 88, cy: 108 },
	{ cx: 160, cy: 130 },
];

/** Five round accent petals around an ink centre. */
function Blossom({ cx, cy, scale, opacity }: Bloom) {
	return (
		<g opacity={opacity}>
			{turns(5).map((angle) => (
				<ellipse
					key={angle}
					cx={cx}
					cy={cy - 10 * scale}
					rx={8.8 * scale}
					ry={11.2 * scale}
					transform={`rotate(${angle} ${cx} ${cy})`}
					fill="var(--accent)"
					opacity={0.85}
				/>
			))}
			<circle
				cx={cx}
				cy={cy}
				r={5.2 * scale}
				fill="currentColor"
				className="text-ink/70"
			/>
		</g>
	);
}

export function BlossomFlora() {
	return (
		<FloraCanvas>
			<g {...stemProps} className="text-ink/35">
				{BLOSSOM_STEMS.map((d) => (
					<path key={d} d={d} />
				))}
				{TWIGS.map(({ x, y }) => (
					<g key={`${x}-${y}`}>
						<path d={`M${x} ${y} l -11 -8`} />
						<path d={`M${x} ${y} l 11 -8`} />
						<path d={`M${x} ${y + 12} l -10 -7`} />
						<path d={`M${x} ${y + 12} l 10 -7`} />
					</g>
				))}
			</g>
			{BLOSSOMS.map((bloom) => (
				<Blossom key={`${bloom.cx}-${bloom.cy}`} {...bloom} />
			))}
			{BUDS.map(({ cx, cy }) => (
				<circle
					key={`${cx}-${cy}`}
					cx={cx}
					cy={cy}
					r={3.4}
					fill="currentColor"
					className="text-ink/30"
				/>
			))}
		</FloraCanvas>
	);
}
