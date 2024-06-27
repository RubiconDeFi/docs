const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
	flexsearch: {
		codeblock: true,
	},
});

module.exports = withNextra({
	i18n: {
		locales: ["en", "vi", "zh", "hi", "es", "fr", "ar", "ru", "ja", "ko", "fa", "id"],
		defaultLocale: "en",
	},
	sidebar: {
		items: [
		  { title: 'Overview', href: '/' },
		  { title: 'FAQ', href: '/faq' },
		  { title: 'Protocol', href: '/protocol' },
		  { title: 'API Guides', href: '/api-guides' },
		  { title: 'Market Making', href: '/market-making' },
		  { title: 'Guides', href: '/guides' },
		  { title: 'Rubicon Liquidity Program', href: '/rubiconLiquidityProgram' },
		  { title: 'Rubicon RFQ', href: '/rubiconRfq' },
		],
	  },
});
