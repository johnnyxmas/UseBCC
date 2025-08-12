

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e3cp_9Dz.js","_app/immutable/chunks/BcIFmHj0.js","_app/immutable/chunks/DyrXb6TS.js"];
export const stylesheets = ["_app/immutable/assets/2.BlCXFKOW.css"];
export const fonts = [];
