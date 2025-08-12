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
		client: {start:"_app/immutable/entry/start.60-b3n59.js",app:"_app/immutable/entry/app.BoPk_G4M.js",imports:["_app/immutable/entry/start.60-b3n59.js","_app/immutable/chunks/CFtyIDG2.js","_app/immutable/chunks/BcIFmHj0.js","_app/immutable/chunks/DyrXb6TS.js","_app/immutable/entry/app.BoPk_G4M.js","_app/immutable/chunks/BcIFmHj0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
