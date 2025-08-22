

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.v5j1QWw8.js","_app/immutable/chunks/BcIFmHj0.js","_app/immutable/chunks/BITpKYye.js","_app/immutable/chunks/Civne8M9.js"];
export const stylesheets = [];
export const fonts = [];
