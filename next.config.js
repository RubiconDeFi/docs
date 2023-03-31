const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
	flexsearch: {
		codeblock: true,
	},
});

module.exports = withNextra({
	i18n: {
		locales: ["en", "vi"],
		defaultLocale: "en",
	},
});
