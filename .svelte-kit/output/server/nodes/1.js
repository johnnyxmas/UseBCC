

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.k_qUk8O2.js","_app/immutable/chunks/BcIFmHj0.js","_app/immutable/chunks/CFtyIDG2.js","_app/immutable/chunks/DyrXb6TS.js"];
export const stylesheets = [];
export const fonts = [];
