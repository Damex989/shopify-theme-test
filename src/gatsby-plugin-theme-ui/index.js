import baseTheme from '@plukke/gatsby-theme-shopify/src/gatsby-plugin-theme-ui';

export default {
	...baseTheme,
	colors: {
		...baseTheme.colors,
		primary: '#E4C581',
		primaryDark: '#7f6e48',
		primaryLight: '#eedbb1',
		backgroundPrimary: '#fbf5e9',
		primaryLighter: '#f7edd7',
		secondary: '#e6cb8f',
		background: '#232129',
		brandLight: '#f5f3f7',
		boxShadowCard: '#fbf5e9'
	}
};
