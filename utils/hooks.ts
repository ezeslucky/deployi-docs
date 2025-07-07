"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to handle client-side only code and prevent hydration mismatches
 * @returns boolean indicating if the component is mounted on the client
 */
export function useIsClient() {
	const [isClient, setIsClient] = useState(false);
	
	useEffect(() => {
		setIsClient(true);
	}, []);
	
	return isClient;
}

/**
 * Custom hook to safely access window object
 * @returns window object or null if not available
 */
export function useWindow() {
	const [windowObj, setWindowObj] = useState<Window | null>(null);
	
	useEffect(() => {
		setWindowObj(window);
	}, []);
	
	return windowObj;
} 