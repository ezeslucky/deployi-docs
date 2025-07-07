"use client";

import ReactGA from "react-ga4";

const initializeGA = () => {
	// Check if we're on the client side
	if (typeof window === "undefined") {
		return;
	}

	// Replace with your Measurement ID
	// It ideally comes from an environment variable
	ReactGA.initialize("G-HZ71HG38HN");

	// Don't forget to remove the console.log() statements
	// when you are done
};

interface Props {
	category: string;
	action: string;
	label: string;
}
const trackGAEvent = ({ category, action, label }: Props) => {
	// Check if we're on the client side
	if (typeof window === "undefined") {
		return;
	}

	console.log("GA event:", category, ":", action, ":", label);
	// Send GA4 Event
	ReactGA.event({
		category: category,
		action: action,
		label: label,
	});
};

export default initializeGA;
export { initializeGA, trackGAEvent };
