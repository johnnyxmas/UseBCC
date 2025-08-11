

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BbL-MrV_.js","_app/immutable/chunks/ZPoFe0rb.js","_app/immutable/chunks/CDg9_q98.js"];
export const stylesheets = [];
export const fonts = [];
