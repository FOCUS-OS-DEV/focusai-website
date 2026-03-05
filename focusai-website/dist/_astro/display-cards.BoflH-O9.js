import{j as a}from"./clsx.Bq1LokoP.js";import{c as f}from"./utils.uesQNo7G.js";import{r as i}from"./index.CRC3r6US.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(...t)=>t.filter((e,r,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===r).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,o)=>o?o.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t=>{const e=y(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:l="",children:s,iconNode:p,...n},c)=>i.createElement("svg",{ref:c,...w,width:e,height:e,stroke:t,strokeWidth:o?Number(r)*24/Number(e):r,className:b("lucide",l),...!s&&!k(n)&&{"aria-hidden":"true"},...n},[...p.map(([d,x])=>i.createElement(d,x)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(t,e)=>{const r=i.forwardRef(({className:o,...l},s)=>i.createElement(v,{ref:s,iconNode:e,className:b(`lucide-${g(u(t))}`,`lucide-${t}`,o),...l}));return r.displayName=u(t),r};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],N=h("bot",C);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],A=h("layers",j);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],m=h("sparkles",M);function z({className:t,icon:e=a.jsx(m,{className:"size-4 text-purple-300"}),title:r="Featured",description:o="Discover amazing content",date:l="Just now",iconClassName:s="bg-purple-500/20",titleClassName:p="text-purple-400",href:n}){const c=a.jsxs("div",{className:f("relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-[#0a0a0f] after:to-transparent after:content-[''] hover:border-purple-500/30 hover:bg-white/[0.06] [&>*]:flex [&>*]:items-center [&>*]:gap-2",t),children:[a.jsxs("div",{children:[a.jsx("span",{className:f("relative inline-block rounded-full p-1",s),children:e}),a.jsx("p",{className:f("text-lg font-medium",p),children:r})]}),a.jsx("p",{className:"whitespace-nowrap text-lg text-white/90",children:o}),a.jsx("p",{className:"text-white/40 text-sm",children:l})]});if(n){const d=n.startsWith("http");return a.jsx("a",{href:n,target:d?"_blank":void 0,rel:d?"noopener noreferrer":void 0,className:"no-underline",children:c})}return c}function E({cards:t}){const r=t||[{icon:a.jsx(A,{className:"size-4 text-purple-300"}),title:"מרכז כלי AI",description:"כלים מומלצים, מסוננים ומוכנים לעבודה",date:"כלי AI",iconClassName:"bg-purple-500/20",titleClassName:"text-purple-400",href:"/tools",className:"[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/[0.06] before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#0a0a0f]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"},{icon:a.jsx(N,{className:"size-4 text-emerald-300"}),title:"Prompt Master V3",description:"סוכן AI חכם מבית Focus AI",date:"ChatGPT",iconClassName:"bg-emerald-500/20",titleClassName:"text-emerald-400",href:"https://chatgpt.com/g/g-68c7d685d6e081918de17b06b52e8a5e-focus-ai-prompt-master-v3",className:"[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/[0.06] before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-[#0a0a0f]/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"},{icon:a.jsx(m,{className:"size-4 text-blue-300"}),title:"Prompt Master",description:"סוכן AI חכם מבית Focus AI",date:"Gemini",iconClassName:"bg-blue-500/20",titleClassName:"text-blue-400",href:"https://gemini.google.com/gem/c9c0363a0699?usp=sharing",className:"[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10"}];return a.jsx("div",{className:"grid [grid-template-areas:'stack'] place-items-center",children:r.map((o,l)=>a.jsx(z,{...o},l))})}export{E as default};
