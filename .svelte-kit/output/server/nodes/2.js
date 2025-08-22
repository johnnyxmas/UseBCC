

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DuXhsWMG.js","_app/immutable/chunks/BcIFmHj0.js","_app/immutable/chunks/Civne8M9.js"];
export const stylesheets = ["_app/immutable/assets/2.DSjZO19R.css"];
export const fonts = [];
