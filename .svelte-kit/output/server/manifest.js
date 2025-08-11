export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "UseBCC/_app",
	assets: new Set([".nojekyll","favicon.png","favicon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Bar7cx65.js",app:"_app/immutable/entry/app.CCPWkhm2.js",imports:["_app/immutable/entry/start.Bar7cx65.js","_app/immutable/chunks/DrEry3nn.js","_app/immutable/chunks/DWtOUCMg.js","_app/immutable/chunks/DWrI71WU.js","_app/immutable/entry/app.CCPWkhm2.js","_app/immutable/chunks/DWtOUCMg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
