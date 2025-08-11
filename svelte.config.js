import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// GitHub Pages configuration
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		alias: {
			$lib: 'src/lib'
		},
		paths: {
			// No base path needed when using custom domain
			base: ''
		}
	}
};

export default config;