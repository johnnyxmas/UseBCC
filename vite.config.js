import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default defineConfig({
	plugins: [
		sveltekit()
	],
	build: {
		target: 'es2020',
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace']
			}
		},
		rollupOptions: {
			output: {
				manualChunks: {
					'lucide': ['lucide-svelte']
				}
				// Note: SvelteKit overrides entryFileNames, chunkFileNames, and assetFileNames
				// so we don't set them here to avoid conflicts
			}
		},
		// Use 'hidden' for production debugging without exposing source maps publicly
		sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true,
		chunkSizeWarningLimit: 1000,
		// Additional security options
		reportCompressedSize: false, // Disable gzip size reporting for faster builds
		assetsInlineLimit: 0 // Don't inline any assets to avoid potential XSS
	},
	server: {
		port: 5173,
		strictPort: false
	},
	optimizeDeps: {
		include: ['lucide-svelte']
	},
	css: {
		devSourcemap: false,
		postcss: {
			plugins: [
				autoprefixer(),
				...(process.env.NODE_ENV === 'production'
					? [cssnano({ preset: 'default' })]
					: [])
			]
		}
	}
});