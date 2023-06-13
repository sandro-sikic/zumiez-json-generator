import{f as j,i as d,b as g,A as h,t as v,e as f,g as T,s as C}from"./index-d927c143.js";import{Z as L}from"./Button-23785f8b.js";const N=v('<header class="bg-white"><div class="container mx-auto flex flex-col md:flex-row justify-between items-center p-3"><nav class="flex items-center">');function H(){const r=j(),a=n=>n==r.pathname?"border-gray-600":"border-transparent hover:border-gray-600";return(()=>{const n=N(),e=n.firstChild,s=e.firstChild;return d(e,g(h,{className:"text-xl font-bold text-gray-600",href:"/",children:"Json generator"}),s),d(e,g(L,{className:"h-8"}),s),d(s,g(h,{get className(){return`border-b-2 ${a("/static")} mx-1.5`},href:"/static",children:"Static"}),null),d(s,g(h,{get className(){return`border-b-2 ${a("/events")} mx-1.5`},href:"/events",children:"Event"}),null),n})()}const S=v('<label><span class="text-gray-600 select-none"></span><input class="px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200" type="text">');function I(r){return(()=>{const a=S(),n=a.firstChild,e=n.nextSibling;return d(n,()=>r.label),e.$$input=s=>r.onInput(s.target.value),f(()=>a.className=`flex flex-col ${r.className}`),f(()=>e.value=r.value),a})()}T(["input"]);const F=v("<pre>");function D(r){return(()=>{const a=F();return f(n=>{const e=r.id,s=`p-4 whitespace-pre-wrap w-full overflow-auto ${r.className}`;return e!==n._v$&&C(a,"id",n._v$=e),s!==n._v$2&&(a.className=n._v$2=s),n},{_v$:void 0,_v$2:void 0}),a})()}const O=v('<label class="flex flex-col"><span class="text-gray-600 select-none"></span><textarea type="text">');function q(r){return(()=>{const a=O(),n=a.firstChild,e=n.nextSibling;return d(n,()=>r.label),e.$$input=s=>r.onInput(s.target.value),f(()=>e.className=`px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 h-32 ${r.className}`),f(()=>e.value=r.value),a})()}T(["input"]);const U=v('<fieldset><legend class="text-lg font-medium text-gray-700">');function G(r){return(()=>{const a=U(),n=a.firstChild;return d(n,()=>r.legend),d(a,()=>r.children,null),f(()=>a.className=`border border-gray-300 p-4 rounded-lg ${r.className}`),a})()}var m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A={exports:{}};(function(r,a){(function(n,e){e()})(m,function(){function n(t,o){return typeof o>"u"?o={autoBom:!1}:typeof o!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),o={autoBom:!o}),o.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function e(t,o,u){var l=new XMLHttpRequest;l.open("GET",t),l.responseType="blob",l.onload=function(){y(l.response,o,u)},l.onerror=function(){console.error("could not download file")},l.send()}function s(t){var o=new XMLHttpRequest;o.open("HEAD",t,!1);try{o.send()}catch{}return 200<=o.status&&299>=o.status}function b(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(o)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof m=="object"&&m.global===m?m:void 0,$=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),y=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!$?function(t,o,u){var l=c.URL||c.webkitURL,i=document.createElement("a");o=o||t.name||"download",i.download=o,i.rel="noopener",typeof t=="string"?(i.href=t,i.origin===location.origin?b(i):s(i.href)?e(t,o,u):b(i,i.target="_blank")):(i.href=l.createObjectURL(t),setTimeout(function(){l.revokeObjectURL(i.href)},4e4),setTimeout(function(){b(i)},0))}:"msSaveOrOpenBlob"in navigator?function(t,o,u){if(o=o||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(n(t,u),o);else if(s(t))e(t,o,u);else{var l=document.createElement("a");l.href=t,l.target="_blank",setTimeout(function(){b(l)})}}:function(t,o,u,l){if(l=l||open("","_blank"),l&&(l.document.title=l.document.body.innerText="downloading..."),typeof t=="string")return e(t,o,u);var i=t.type==="application/octet-stream",R=/constructor/i.test(c.HTMLElement)||c.safari,_=/CriOS\/[\d]+/.test(navigator.userAgent);if((_||i&&R||$)&&typeof FileReader<"u"){var x=new FileReader;x.onloadend=function(){var p=x.result;p=_?p:p.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=p:location=p,l=null},x.readAsDataURL(t)}else{var E=c.URL||c.webkitURL,w=E.createObjectURL(t);l?l.location=w:location.href=w,l=null,setTimeout(function(){E.revokeObjectURL(w)},4e4)}});c.saveAs=y.saveAs=y,r.exports=y})})(A);var k=A.exports;function J(r){const a=n=>{const e=document.createElement("textarea");e.value=n,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{return document.execCommand("copy"),document.body.removeChild(e),"success"}catch(s){return console.error(s),document.body.removeChild(e),"error"}};if(!navigator.clipboard){a(r);return}return navigator.clipboard.writeText(r)}function P(r,a){const n=new FileReader;n.onload=e=>{try{a(JSON.parse(e.target.result))}catch{}},n.readAsText(r.target.files[0])}function X(r,a){const n=new Blob([a],{type:"text/plain;charset=utf-8"});k.saveAs(n,r)}export{G as F,H,I,D as P,q as T,X as a,J as c,P as f};