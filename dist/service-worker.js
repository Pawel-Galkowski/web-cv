if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=e=>s(e,n),d={module:{uri:n},exports:o,require:c};i[n]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"131.js",revision:"98c3c6ea05f6a5bce409890c107ac354"},{url:"index.html",revision:"8e394d61ddf2ff8007d8db5d65c71474"},{url:"main.js",revision:"478666a0684debbc70bde4fd8275ad37"},{url:"main.js.LICENSE.txt",revision:"d74c7113d9707743800cbf953548905c"}],{})}));