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
			// Set base path for GitHub Pages (replace 'UseBCC' with your repo name)
			base: process.env.NODE_ENV === 'production' ? '/UseBCC' : ''
		}
	}
};

export default config;