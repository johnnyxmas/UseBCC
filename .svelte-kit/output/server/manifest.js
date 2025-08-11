export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "UseBCC/_app",
	assets: new Set([".nojekyll","banner.jpg","favicon.png","favicon.svg","robots.txt","sitemap.xml"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Bf5G-3yw.js",app:"_app/immutable/entry/app.DgB2nJz-.js",imports:["_app/immutable/entry/start.Bf5G-3yw.js","_app/immutable/chunks/CnkNLDKH.js","_app/immutable/chunks/DyWyZjvP.js","_app/immutable/chunks/DhpRGRtx.js","_app/immutable/entry/app.DgB2nJz-.js","_app/immutable/chunks/DyWyZjvP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/UseBCC/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
