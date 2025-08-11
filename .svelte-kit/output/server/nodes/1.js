

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.2ivIL1gd.js","_app/immutable/chunks/DWtOUCMg.js","_app/immutable/chunks/DrEry3nn.js","_app/immutable/chunks/DWrI71WU.js"];
export const stylesheets = [];
export const fonts = [];
