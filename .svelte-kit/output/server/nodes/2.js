

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D-yPqD3e.js","_app/immutable/chunks/DyWyZjvP.js","_app/immutable/chunks/DhpRGRtx.js"];
export const stylesheets = ["_app/immutable/assets/2.DMD06yP0.css"];
export const fonts = [];
