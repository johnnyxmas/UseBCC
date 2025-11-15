

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BF30JmSF.js","_app/immutable/chunks/BcIFmHj0.js","_app/immutable/chunks/CKuWquAN.js","_app/immutable/chunks/DaO2Yab_.js"];
export const stylesheets = [];
export const fonts = [];
