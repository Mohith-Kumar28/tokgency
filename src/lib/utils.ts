import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/** Zero-based position to a two-digit label: 0 -> "01". */
export const ordinal = (position: number) =>
	String(position + 1).padStart(2, "0");
