"use client";

import { useEffect } from "react";
import NoSSR from "@/components/NoSSR";
import initializeGA from ".";

function GoogleAnalyticsInner() {
	useEffect(() => {
		// @ts-ignore
		if (!window.GA_INITIALIZED) {
			initializeGA();
			// @ts-ignore
			window.GA_INITIALIZED = true;
		}
	}, []);

	return null;
}

export default function GoogleAnalytics() {
	return (
		<NoSSR>
			<GoogleAnalyticsInner />
		</NoSSR>
	);
}
