!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),u=document.querySelector('input[name="delay"]'),i=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');function a(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();for(var n=+u.value,t=1;t<=c.value;t++)a(t,n).then((function(e){return r.Notify.success(e)})).catch((function(e){return r.Notify.failure(e)})),n+=+i.value}))}();
//# sourceMappingURL=03-promises.8ca00fb7.js.map