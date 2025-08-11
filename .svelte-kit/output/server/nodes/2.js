

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DwCfpfgR.js","_app/immutable/chunks/DWtOUCMg.js","_app/immutable/chunks/CO4I7OLn.js"];
export const stylesheets = ["_app/immutable/assets/2.BeN4AH1O.css"];
export const fonts = [];
