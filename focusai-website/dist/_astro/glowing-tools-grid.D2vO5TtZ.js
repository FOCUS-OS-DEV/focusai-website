import{j as r}from"./clsx.Bq1LokoP.js";import{G as g}from"./glowing-effect.B7kUAqNG.js";import{r as l}from"./index.CS35mVw2.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(...e)=>e.filter((t,o,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===o).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,a)=>a?a.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=e=>{const t=b(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=l.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:a,className:i="",children:s,iconNode:h,...c},x)=>l.createElement("svg",{ref:x,...w,width:t,height:t,stroke:e,strokeWidth:a?Number(o)*24/Number(t):o,className:p("lucide",i),...!s&&!k(c)&&{"aria-hidden":"true"},...c},[...h.map(([m,u])=>l.createElement(m,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=(e,t)=>{const o=l.forwardRef(({className:a,...i},s)=>l.createElement(y,{ref:s,iconNode:t,className:p(`lucide-${f(d(e))}`,`lucide-${e}`,a),...i}));return o.displayName=d(e),o};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],j=n("bot",v);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],A=n("layers",C);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],M=n("sparkles",N),_=[{icon:r.jsx(A,{className:"h-5 w-5"}),title:"מרכז כלי AI",description:"כלי ה-AI המומלצים שלנו. סיננו, חיפשנו ובחרנו את הכלי המתאים לכם",label:"כלי AI",href:"/tools",iconColor:"text-purple-400 border-purple-500/30 bg-purple-500/10",titleColor:"text-white"},{icon:r.jsx(j,{className:"h-5 w-5"}),title:"Prompt Master V3",description:"סוכן AI חכם מבית Focus AI, הנדסת פרומפטים מקצועית",label:"ChatGPT",href:"https://chatgpt.com/g/g-68c7d685d6e081918de17b06b52e8a5e-focus-ai-prompt-master-v3",iconColor:"text-emerald-400 border-emerald-500/30 bg-emerald-500/10",titleColor:"text-white"},{icon:r.jsx(M,{className:"h-5 w-5"}),title:"Prompt Master",description:"סוכן AI חכם מבית Focus AI, גרסת Gemini",label:"Gemini",href:"https://gemini.google.com/gem/c9c0363a0699?usp=sharing",iconColor:"text-blue-400 border-blue-500/30 bg-blue-500/10",titleColor:"text-white"}];function L(){return r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:_.map((e,t)=>{const o=e.href.startsWith("http");return r.jsxs("a",{href:e.href,target:o?"_blank":void 0,rel:o?"noopener noreferrer":void 0,className:"group relative list-none rounded-[1.25rem] border-[0.75px] border-white/[0.06] p-1.5 md:rounded-[1.5rem] md:p-2 block no-underline",children:[r.jsx(g,{spread:40,glow:!0,disabled:!1,proximity:64,inactiveZone:.01,borderWidth:3}),r.jsxs("div",{className:"relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-white/[0.06] bg-[#0d0d14] p-6 shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]",children:[r.jsxs("div",{className:"flex flex-col gap-3",children:[r.jsx("div",{className:`w-fit rounded-lg border-[0.75px] p-2 ${e.iconColor}`,children:e.icon}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("h3",{className:"text-xl font-semibold text-white tracking-tight group-hover:text-[#c084fc] transition-colors",children:e.title}),r.jsx("p",{className:"text-sm leading-relaxed text-[#b0b0c0]/70",children:e.description})]})]}),r.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-white/30",children:e.label})]})]},t)})})}export{L as default};
