module.exports = {
	head: {
		title: 'Dinoshop',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Dinoshop' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},


	css: [
		{ src: '~/assets/scss/main.scss', lang: 'scss' }
	],


	loading: { color: '#3B8070' },


	build: {
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	server: {
		host: '192.168.1.234',
		port: 2888
	},
	plugins: [
		{ src: '~/plugins/fancybox', ssr: false },
		{ src: '~/plugins/swiper', ssr: false },
		{ src: '~/plugins/vue-yandex-maps', ssr: false },
	],
	modules: [
		'cookie-universal-nuxt',
	  ]
}

