var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector('input[name="delay"]'),u=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');function d(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{n?o(r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)):i(r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`))}),t)}))}document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();let t=+i.value;for(let e=1;e<=l.value;e++)d(e,t),t+=+u.value}));
//# sourceMappingURL=03-promises.d1db1c14.js.map
