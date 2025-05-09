const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
	flexsearch: {
		codeblock: true,
	},
	latex: true,
});

module.exports = withNextra({
	i18n: {
	        // English-only, for now.
		locales: ["en"/*, "vi", "zh", "hi", "es", "fr", "ar", "ru", "ja", "ko", "fa", "id"*/],
		defaultLocale: "en",
	},
});
