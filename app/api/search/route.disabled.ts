// Disable the search API when doing static export
if (process.env.NEXT_STATIC_EXPORT) {
	// Prevent static export failure
	throw new Error("Search API is disabled during static export.");
  }
  
  import { getPages } from "@/app/source";
  import { createI18nSearchAPI } from "fumadocs-core/search/server";
  import { languages } from "@/i18n";
  
  export const { GET } = createI18nSearchAPI("advanced", {
	indexes: languages.map((lang) => {
	  return {
		language: lang,
		indexes: getPages(lang).map((page) => ({
		  id: page.url,
		  url: page.url,
		  title: page.data.title,
		  structuredData: page.data.exports.structuredData,
		})),
	  };
	}),
  });
  
