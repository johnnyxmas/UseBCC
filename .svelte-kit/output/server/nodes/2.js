

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BFjYsPRZ.js","_app/immutable/chunks/BfuVX42-.js","_app/immutable/chunks/Blu3HxFo.js"];
export const stylesheets = ["_app/immutable/assets/2.BwRGswYq.css"];
export const fonts = [];
