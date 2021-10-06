(()=>{"use strict";var e,t,n,r,a,i,o,c,s,l,d,u,p,m,f={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),i=n(645),o=n.n(i)()(a());o.push([e.id,".center {\n    justify-content: center;\n    align-items: center;\n    display:flex;\n}\n\n.footer {\n    background-color: lightgray;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n.gallery {\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n}\n\n.gallery__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}",""]);const c=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=n(i[o]);t[c].references--}for(var s=r(e,a),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},g={};function v(e){var t=g[e];if(void 0!==t)return t.exports;var n=g[e]={id:e,exports:{}};return f[e](n,n.exports,v),n.exports}v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=v(379),t=v.n(e),n=v(795),r=v.n(n),a=v(569),i=v.n(a),o=v(565),c=v.n(o),s=v(216),l=v.n(s),d=v(589),u=v.n(d),p=v(426),(m={}).styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,console.log("webpack test OK"),function(){let e=document.getElementById("content"),t=document.createElement("div");t.classList.add("center");let n=document.createElement("h1");n.innerText="Lugi's Pasta",t.appendChild(n);let r=document.createElement("div");r.classList.add("gallery");let a=document.createElement("figure");a.classList.add("gallery__item");let i=document.createElement("img");i.classList.add("gallery__img"),i.setAttribute("src","../src/img/luigi1.jpg"),i.setAttribute("alt","Lugi1"),a.appendChild(i);let o=document.createElement("figure");o.classList.add("gallery__item");let c=document.createElement("img");c.classList.add("gallery__img"),c.setAttribute("src","../src/img/pizza.jpg"),c.setAttribute("alt","pizzer"),o.appendChild(c);let s=document.createElement("figure");s.classList.add("gallery__item");let l=document.createElement("img");l.classList.add("gallery__img"),l.setAttribute("src","../src/img/luigi2.jpg"),l.setAttribute("alt","Lugi2"),s.appendChild(l),r.append(a,o,s);let d=document.createElement("div");d.classList.add("center"),d.classList.add("footer"),d.innerText="4600 150th Ave NE Redmond, WA 98052",e.append(t,r,d)}()})();