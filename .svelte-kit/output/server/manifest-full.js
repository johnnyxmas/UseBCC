export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "UseBCC/_app",
	assets: new Set([".nojekyll","favicon.png","favicon.svg","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BEUcGXfV.js",app:"_app/immutable/entry/app.CtilSUCU.js",imports:["_app/immutable/entry/start.BEUcGXfV.js","_app/immutable/chunks/DDMoBmsu.js","_app/immutable/chunks/DWtOUCMg.js","_app/immutable/chunks/CO4I7OLn.js","_app/immutable/entry/app.CtilSUCU.js","_app/immutable/chunks/DWtOUCMg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
