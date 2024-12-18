import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const apiBaseUrl = "http://localhost:3001";

export const isDesktopMediaQueryString = "(min-width: 1024px)";
