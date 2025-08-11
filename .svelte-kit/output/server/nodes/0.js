

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.X4BZjlbe.js","_app/immutable/chunks/ZPoFe0rb.js"];
export const stylesheets = ["_app/immutable/assets/0.DqmKyEAt.css"];
export const fonts = [];
