

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e5SZWvXr.js","_app/immutable/chunks/ZPoFe0rb.js"];
export const stylesheets = ["_app/immutable/assets/2.B7J-Oabc.css"];
export const fonts = [];
