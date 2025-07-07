export const baseUrl =
	process.env.NODE_ENV === "development"
		? "http://localhost:3000"
		: "https://docs.deployi.me";

export const url = (path: string): string => new URL(path, baseUrl).toString();
