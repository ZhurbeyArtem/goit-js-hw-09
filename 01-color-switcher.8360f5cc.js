const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;t.addEventListener("click",(function(){n=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.8360f5cc.js.map