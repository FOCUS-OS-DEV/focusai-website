import{o as h,k as e,l as f}from"./proxy.hACQCkQg.js";import{r as p}from"./index.DiEladB3.js";const v={some:0,all:1};function y(o,s,{root:r,margin:n,amount:t="some"}={}){const c=h(o),i=new WeakMap,m=d=>{d.forEach(a=>{const g=i.get(a.target);if(a.isIntersecting!==!!g)if(a.isIntersecting){const u=s(a.target,a);typeof u=="function"?i.set(a.target,u):l.unobserve(a.target)}else typeof g=="function"&&(g(a),i.delete(a.target))})},l=new IntersectionObserver(m,{root:r,rootMargin:n,threshold:typeof t=="number"?t:v[t]});return c.forEach(d=>l.observe(d)),()=>l.disconnect()}function b(o,{root:s,margin:r,amount:n,once:t=!1,initial:c=!1}={}){const[i,m]=p.useState(c);return p.useEffect(()=>{if(!o.current||t&&i)return;const l=()=>(m(!0),t?void 0:()=>m(!1)),d={root:s&&s.current||void 0,margin:r,amount:n};return y(o.current,l,d)},[s,o,r,t,n]),i}const x=[{name:"אוניברסיטת חיפה",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239338/41_nufstk.png"},{name:"הטכניון",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239319/24_fcxmpa.png"},{name:"אגודת הסטודנטים חיפה",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239331/37_xm34qd.png"},{name:"דיקנאט הסטודנטים",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239329/36_ddwaud.png"},{name:"ויצו הדסים",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239325/32_fy3shq.png"},{name:"דיקיפר",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239335/40_xskhce.png"},{name:"ג'ונגל סיטי",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239334/38_ornkqc.png"},{name:"בי בי בייבי",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239327/35_gopg6v.png"},{name:"דרכא",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239326/34_hfdzkq.png"},{name:"היסוד הבסיסי",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239324/31_brygr5.png"},{name:"ניו מארק",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239322/28_wg1jv8.png"},{name:"לקוח 30",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239323/30_ahmcfn.png"},{name:"לקוח 27",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239321/27_gzwe5z.png"},{name:"לקוח 26",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239320/26_opmxu4.png"},{name:"לקוח 25",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239320/25_nxubzg.png"},{name:"לקוח 39",logo:"https://res.cloudinary.com/dfudxxzlj/image/upload/v1764239334/39_oc5dfg.png"}],z=()=>{const o=p.useRef(null),s=b(o,{once:!0,margin:"-100px"}),r=[...x,...x];return e.jsxs("section",{ref:o,className:"relative py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f] overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent"}),e.jsxs(f.div,{className:"container relative z-10 mb-20 text-center",initial:{opacity:0,y:20},animate:s?{opacity:1,y:0}:{},transition:{duration:.6},children:[e.jsx("p",{className:"text-xs font-mono text-[#a855f7]/70 uppercase tracking-[0.4em] mb-4",children:"Trusted By"}),e.jsx("h3",{className:"text-2xl md:text-3xl font-semibold text-[#f5f5fa]/90",children:"חלק מהלקוחות שסומכים עלינו"})]}),e.jsx("div",{className:"relative logo-marquee",style:{maskImage:"linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",WebkitMaskImage:"linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"},children:e.jsx(f.div,{className:"flex items-center gap-20 lg:gap-28 logo-track",animate:{x:["0%","-50%"]},transition:{x:{duration:45,repeat:1/0,ease:"linear"}},children:r.map((n,t)=>e.jsx("div",{className:"flex-shrink-0 logo-item",children:e.jsx("img",{src:n.logo,alt:n.name,className:"h-14 md:h-16 lg:h-20 w-auto object-contain transition-all duration-500 ease-out",loading:"lazy"})},`${n.name}-${t}`))})}),e.jsx("style",{children:`
        /* Base state: multiply blend mode makes white transparent on dark bg */
        .logo-item img {
          mix-blend-mode: multiply;
          filter: grayscale(100%) brightness(2) contrast(1.2);
          opacity: 0.85;
          transition: all 0.4s ease;
        }

        /* Hover state: show with better visibility */
        .logo-item:hover img {
          filter: grayscale(0%) brightness(1.1) contrast(1.1);
          opacity: 1;
        }

        /* Pause animation on hover */
        .logo-marquee:hover .logo-track {
          animation-play-state: paused;
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none !important;
            transform: none !important;
          }
          .logo-marquee {
            mask-image: none !important;
            -webkit-mask-image: none !important;
          }
        }
      `})]})};export{z as default};
