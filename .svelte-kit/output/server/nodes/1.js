

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.JMzffBRc.js","_app/immutable/chunks/DWtOUCMg.js","_app/immutable/chunks/SUDAym43.js","_app/immutable/chunks/i1GeGQ5F.js"];
export const stylesheets = [];
export const fonts = [];
