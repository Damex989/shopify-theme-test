module.exports = {
	siteMetadata: {
		siteTitleAlt: 'TC Pork'
	},
	plugins: [
		{
			resolve: '@plukke/gatsby-theme-shopify',
			options: {
				shopName: 'luxuryoutlet-mx',
				accessToken: '7a58391353a4009f4ecaba0e90346a14',
				imagesPath: 'src/images',
				contentPath: 'data',
				email: 'damex989@gmail.com',
				headerImage: 'logo.png',
				socialMedia: {
					facebook: 'https://github.com/jlengstorf/gatsby-theme-jam-example',
					instagram: 'https://help.shopify.com/en/api/reference/store-properties/shop#show-2019-07',
					twitter: 'https://blog.logrocket.com/how-to-build-a-custom-gatsbyjs-theme-e9b9529f217b/'
				},
				apiData: {
					url: '/contactForm_submit',
					baseURL: 'https://kwbbw9uwub.execute-api.us-east-1.amazonaws.com/default/',
					auth: {
						username: process.env.API_USERNAME_SEND_EMAIL,
						password: process.env.API_PASSWORD_SEND_EMAIL
					}
				}
			}
		}
	]
};
