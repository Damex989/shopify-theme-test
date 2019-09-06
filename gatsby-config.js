module.exports = {
	siteMetadata: {
		siteTitle: 'Luxury Outlet',
		siteTitleAlt: 'Luxury Outlet by Plukke',
		siteDescription: 'Lo mejor en accesorios exclusiovos, al mejor precio directo a la puerta de tu casa.',
		siteUrl: 'https://master.d1dmegs06soawa.amplifyapp.com',
		siteImage: 'src/images/logo.png'
	},
	plugins: [
		{
			resolve: '@plukke/gatsby-theme-shopify',
			options: {
				shopName: 'luxuryoutlet-mx',
				accessToken: '7a58391353a4009f4ecaba0e90346a14',
				imagesPath: 'src/images',
				contentPath: 'data',
				email: '',
				headerImage: 'logo.png',
				socialMedia: {
					facebook: '',
					instagram: '',
					twitter: ''
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
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `Luxury outlet`,
				start_url: `/`,
				background_color: `#232129`,
				theme_color: `#E4C581`,
				display: `minimal-ui`,
				icon: `src/images/icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				env: {
					development: {
						policy: [ { userAgent: '*', disallow: [ '/' ] } ]
					},
					production: {
						policy: [ { userAgent: '*', allow: '/' } ]
					}
				}
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: 'G-XL3TCTL560'
			}
		},
		{
			resolve: `gatsby-plugin-google-tagmanager`,
			options: {
				id: 'GTM-K8SD65X'
			}
		}
	]
};
