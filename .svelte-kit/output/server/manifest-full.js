export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","banner.jpg","favicon.png","favicon.svg","robots.txt","sitemap.xml","theme-test.html"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".xml":"text/xml",".html":"text/html"},
	_: {
		client: {start:"_app/immutable/entry/start.BeyzbGfg.js",app:"_app/immutable/entry/app.BqkTpCCC.js",imports:["_app/immutable/entry/start.BeyzbGfg.js","_app/immutable/chunks/B6P6Co0U.js","_app/immutable/chunks/BcIFmHj0.js","_app/immutable/chunks/C-giaxz-.js","_app/immutable/entry/app.BqkTpCCC.js","_app/immutable/chunks/BcIFmHj0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
