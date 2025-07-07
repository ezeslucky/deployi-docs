"use client";

import { useEffect, useState, type ReactNode } from "react";

interface NoSSRProps {
	children: ReactNode;
	fallback?: ReactNode;
}

/**
 * Component that only renders its children on the client side
 * Useful for preventing hydration mismatches with client-only code
 */
export default function NoSSR({ children, fallback = null }: NoSSRProps) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return <>{fallback}</>;
	}

	return <>{children}</>;
} 