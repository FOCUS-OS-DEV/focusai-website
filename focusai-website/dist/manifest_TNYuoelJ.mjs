import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_CX4f0l_Y.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/sites/maderfuker/focusai-website/","cacheDir":"file:///C:/sites/maderfuker/focusai-website/node_modules/.astro/","outDir":"file:///C:/sites/maderfuker/focusai-website/dist/","srcDir":"file:///C:/sites/maderfuker/focusai-website/src/","publicDir":"file:///C:/sites/maderfuker/focusai-website/public/","buildClientDir":"file:///C:/sites/maderfuker/focusai-website/dist/client/","buildServerDir":"file:///C:/sites/maderfuker/focusai-website/dist/server/","adapterName":"","routes":[{"file":"file:///C:/sites/maderfuker/focusai-website/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/academy/ai-first/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/academy/ai-first","isIndex":false,"type":"page","pattern":"^\\/academy\\/ai-first\\/?$","segments":[[{"content":"academy","dynamic":false,"spread":false}],[{"content":"ai-first","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/academy/ai-first.astro","pathname":"/academy/ai-first","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/academy/ai-ready/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/academy/ai-ready","isIndex":false,"type":"page","pattern":"^\\/academy\\/ai-ready\\/?$","segments":[[{"content":"academy","dynamic":false,"spread":false}],[{"content":"ai-ready","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/academy/ai-ready.astro","pathname":"/academy/ai-ready","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/academy/bot-camp/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/academy/bot-camp","isIndex":false,"type":"page","pattern":"^\\/academy\\/bot-camp\\/?$","segments":[[{"content":"academy","dynamic":false,"spread":false}],[{"content":"bot-camp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/academy/bot-camp.astro","pathname":"/academy/bot-camp","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/sadnaot/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/sadnaot","isIndex":false,"type":"page","pattern":"^\\/sadnaot\\/?$","segments":[[{"content":"sadnaot","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/sadnaot.astro","pathname":"/sadnaot","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/services/ai-agents/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/ai-agents","isIndex":false,"type":"page","pattern":"^\\/services\\/ai-agents\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"ai-agents","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/ai-agents.astro","pathname":"/services/ai-agents","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/services/development/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/development","isIndex":false,"type":"page","pattern":"^\\/services\\/development\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"development","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/development.astro","pathname":"/services/development","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/services/strategy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/strategy","isIndex":false,"type":"page","pattern":"^\\/services\\/strategy\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"strategy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/strategy.astro","pathname":"/services/strategy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/tools/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tools","isIndex":false,"type":"page","pattern":"^\\/tools\\/?$","segments":[[{"content":"tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tools.astro","pathname":"/tools","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/sites/maderfuker/focusai-website/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://focusai.co.il","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/sites/maderfuker/focusai-website/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/sites/maderfuker/focusai-website/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/sites/maderfuker/focusai-website/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/academy/ai-first.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/academy/ai-ready.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/academy/bot-camp.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/sadnaot.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/services/ai-agents.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/services/development.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/services/strategy.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/terms.astro",{"propagation":"none","containsHead":true}],["C:/sites/maderfuker/focusai-website/src/pages/tools.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/academy/ai-first@_@astro":"pages/academy/ai-first.astro.mjs","\u0000@astro-page:src/pages/academy/ai-ready@_@astro":"pages/academy/ai-ready.astro.mjs","\u0000@astro-page:src/pages/academy/bot-camp@_@astro":"pages/academy/bot-camp.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/sadnaot@_@astro":"pages/sadnaot.astro.mjs","\u0000@astro-page:src/pages/services/ai-agents@_@astro":"pages/services/ai-agents.astro.mjs","\u0000@astro-page:src/pages/services/development@_@astro":"pages/services/development.astro.mjs","\u0000@astro-page:src/pages/services/strategy@_@astro":"pages/services/strategy.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/tools@_@astro":"pages/tools.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_TNYuoelJ.mjs","C:\\sites\\maderfuker\\focusai-website\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\sites\\maderfuker\\focusai-website\\.astro\\content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D8UGu-Ch.mjs","C:/sites/maderfuker/focusai-website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BrQpfNLp.mjs","C:/sites/maderfuker/focusai-website/src/components/HeroSection.tsx":"_astro/HeroSection.B8I2s7dS.js","C:/sites/maderfuker/focusai-website/src/components/ClientLogos.tsx":"_astro/ClientLogos.Cxo2BUNb.js","@astrojs/react/client.js":"_astro/client.Dc9Vh3na.js","C:/sites/maderfuker/focusai-website/src/pages/academy/bot-camp.astro?astro&type=script&index=0&lang.ts":"_astro/bot-camp.astro_astro_type_script_index_0_lang.BhYIvaOU.js","C:/sites/maderfuker/focusai-website/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CDkbOQX7.js","C:/sites/maderfuker/focusai-website/src/pages/tools.astro?astro&type=script&index=0&lang.ts":"_astro/tools.astro_astro_type_script_index_0_lang.zCiA3zBz.js","C:/sites/maderfuker/focusai-website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.SIsdayjc.js","C:/sites/maderfuker/focusai-website/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.C9kP18_1.js","C:/sites/maderfuker/focusai-website/src/components/CTAContact.astro?astro&type=script&index=0&lang.ts":"_astro/CTAContact.astro_astro_type_script_index_0_lang.BGl5sJ22.js","C:/sites/maderfuker/focusai-website/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts":"_astro/CookieConsent.astro_astro_type_script_index_0_lang.BnBax3yp.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/sites/maderfuker/focusai-website/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts","const a=document.querySelectorAll(\".category-btn\"),l=document.querySelectorAll(\".post-card\");a[0]?.setAttribute(\"data-active\",\"true\");a.forEach(e=>{e.addEventListener(\"click\",()=>{a.forEach(t=>t.setAttribute(\"data-active\",\"false\")),e.setAttribute(\"data-active\",\"true\");const s=e.getAttribute(\"data-category\");l.forEach(t=>{const c=t.getAttribute(\"data-tags\")?.toLowerCase()||\"\";s===\"all\"||c.includes(s.replace(\"-\",\"\"))?t.style.display=\"block\":t.style.display=\"none\"})})});"],["C:/sites/maderfuker/focusai-website/src/pages/tools.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const c=document.getElementById(\"searchInput\"),l=document.querySelectorAll(\".filter-pill\"),f=document.querySelectorAll(\".tool-card\"),r=document.getElementById(\"resultsCount\"),o=document.getElementById(\"noResults\"),n=document.getElementById(\"toolsGrid\");let d=\"all\",t=\"\";function i(){let e=0;f.forEach(a=>{const s=a,u=s.dataset.category||\"\",m=s.dataset.name||\"\",y=s.dataset.description||\"\",L=d===\"all\"||u===d,h=t===\"\"||m.includes(t)||y.includes(t)||u.toLowerCase().includes(t);L&&h?(s.style.display=\"flex\",e++):s.style.display=\"none\"}),r&&(r.innerHTML=`מציג <span class=\"text-white font-bold\">${e}</span> כלים`),o&&n&&(e===0?(o.classList.remove(\"hidden\"),n.classList.add(\"hidden\")):(o.classList.add(\"hidden\"),n.classList.remove(\"hidden\")))}c&&c.addEventListener(\"input\",e=>{t=e.target.value.toLowerCase(),i()}),l.forEach(e=>{e.addEventListener(\"click\",()=>{l.forEach(a=>{a.classList.remove(\"active\",\"bg-[#a855f7]/10\",\"text-[#a855f7]\",\"border-[#a855f7]\"),a.classList.add(\"border-[#2a2a3a]\",\"text-[#d0d0e0]\")}),e.classList.add(\"active\",\"bg-[#a855f7]/10\",\"text-[#a855f7]\",\"border-[#a855f7]\"),e.classList.remove(\"border-[#2a2a3a]\",\"text-[#d0d0e0]\"),d=e.dataset.category||\"all\",i()})})});"],["C:/sites/maderfuker/focusai-website/src/components/Header.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"mobile-menu-button\"),e=document.getElementById(\"mobile-menu\"),l=document.getElementById(\"menu-icon-open\"),o=document.getElementById(\"menu-icon-close\");let t=!1;function d(){t=!t,t?(e?.classList.remove(\"-translate-x-full\"),e?.classList.add(\"translate-x-0\"),e?.setAttribute(\"aria-hidden\",\"false\"),l?.classList.add(\"hidden\"),o?.classList.remove(\"hidden\"),s?.setAttribute(\"aria-expanded\",\"true\"),document.body.style.overflow=\"hidden\"):(e?.classList.add(\"-translate-x-full\"),e?.classList.remove(\"translate-x-0\"),e?.setAttribute(\"aria-hidden\",\"true\"),l?.classList.remove(\"hidden\"),o?.classList.add(\"hidden\"),s?.setAttribute(\"aria-expanded\",\"false\"),document.body.style.overflow=\"\")}s?.addEventListener(\"click\",d);document.addEventListener(\"keydown\",n=>{n.key===\"Escape\"&&t&&d()});const a=e?.querySelectorAll(\"a\");a?.forEach(n=>{n.addEventListener(\"click\",()=>{t&&d()})});const i=document.getElementById(\"main-header\");window.addEventListener(\"scroll\",()=>{window.scrollY>50?i?.classList.add(\"header-scrolled\"):i?.classList.remove(\"header-scrolled\")});"],["C:/sites/maderfuker/focusai-website/src/components/CTAContact.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"contact-form\");t?.addEventListener(\"submit\",async n=>{n.preventDefault();const r=new FormData(t),a=Object.fromEntries(r.entries()),e=t.querySelector(\".submit-btn\"),s=e.innerHTML;e.innerHTML=`\n      <svg class=\"animate-spin w-5 h-5\" fill=\"none\" viewBox=\"0 0 24 24\">\n        <circle class=\"opacity-25\" cx=\"12\" cy=\"12\" r=\"10\" stroke=\"currentColor\" stroke-width=\"4\"></circle>\n        <path class=\"opacity-75\" fill=\"currentColor\" d=\"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z\"></path>\n      </svg>\n      <span>PROCESSING...</span>\n    `,e.disabled=!0,e.classList.add(\"opacity-80\");try{const o=t.action;o&&o!==\"#\"&&await fetch(o,{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(a)}),e.innerHTML=`\n        <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 13l4 4L19 7\" />\n        </svg>\n        <span>SUCCESS_TRANSMITTED</span>\n      `,e.style.boxShadow=\"0 0 30px rgba(168, 85, 247, 0.7)\",setTimeout(()=>{t.reset(),e.innerHTML=s,e.disabled=!1,e.classList.remove(\"opacity-80\"),e.style.boxShadow=\"0 0 30px rgba(168, 85, 247, 0.5)\"},3e3)}catch{e.innerHTML=`\n        <svg class=\"w-5 h-5\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 18L18 6M6 6l12 12\" />\n        </svg>\n        <span>ERROR_RETRY</span>\n      `,e.style.background=\"#ff3366\",e.style.boxShadow=\"0 0 30px rgba(255, 51, 102, 0.5)\",setTimeout(()=>{e.innerHTML=s,e.disabled=!1,e.classList.remove(\"opacity-80\"),e.style.background=\"#a855f7\",e.style.boxShadow=\"0 0 30px rgba(168, 85, 247, 0.5)\"},3e3)}});"],["C:/sites/maderfuker/focusai-website/src/components/CookieConsent.astro?astro&type=script&index=0&lang.ts","const i=\"focus_ai_cookie_consent\";function s(){const e=localStorage.getItem(i);return e?JSON.parse(e):null}function a(e){localStorage.setItem(i,JSON.stringify(e)),l(e),d()}function l(e){e.analytics&&document.dispatchEvent(new CustomEvent(\"analytics-consent-granted\")),e.marketing&&document.dispatchEvent(new CustomEvent(\"marketing-consent-granted\"))}function m(){const e=document.getElementById(\"cookie-banner\");e&&e.classList.remove(\"translate-y-full\")}function d(){const e=document.getElementById(\"cookie-banner\");e&&e.classList.add(\"translate-y-full\")}function r(){const e=document.getElementById(\"cookie-modal\");e&&(e.classList.remove(\"hidden\"),e.classList.add(\"flex\"))}function c(){const e=document.getElementById(\"cookie-modal\");e&&(e.classList.add(\"hidden\"),e.classList.remove(\"flex\"))}document.addEventListener(\"DOMContentLoaded\",()=>{const e=s();e?l(e):setTimeout(m,1e3),document.getElementById(\"cookie-accept-all\")?.addEventListener(\"click\",()=>{a({essential:!0,analytics:!0,marketing:!0,timestamp:Date.now()})}),document.getElementById(\"cookie-accept-essential\")?.addEventListener(\"click\",()=>{a({essential:!0,analytics:!1,marketing:!1,timestamp:Date.now()})}),document.getElementById(\"cookie-settings\")?.addEventListener(\"click\",()=>{d(),r();const t=s(),n=document.getElementById(\"analytics-toggle\"),o=document.getElementById(\"marketing-toggle\");n&&(n.checked=t?.analytics??!1),o&&(o.checked=t?.marketing??!1)}),document.getElementById(\"modal-close\")?.addEventListener(\"click\",c),document.getElementById(\"save-preferences\")?.addEventListener(\"click\",()=>{const t=document.getElementById(\"analytics-toggle\"),n=document.getElementById(\"marketing-toggle\");a({essential:!0,analytics:t?.checked??!1,marketing:n?.checked??!1,timestamp:Date.now()}),c()}),document.getElementById(\"accept-all-modal\")?.addEventListener(\"click\",()=>{a({essential:!0,analytics:!0,marketing:!0,timestamp:Date.now()}),c()}),document.getElementById(\"cookie-modal\")?.addEventListener(\"click\",t=>{t.target===t.currentTarget&&c()})});"]],"assets":["/file:///C:/sites/maderfuker/focusai-website/dist/about/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/academy/ai-first/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/academy/ai-ready/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/academy/bot-camp/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/blog/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/privacy/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/sadnaot/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/services/ai-agents/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/services/development/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/services/strategy/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/terms/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/tools/index.html","/file:///C:/sites/maderfuker/focusai-website/dist/index.html"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["he"],"defaultLocale":"he","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"serverIslandNameMap":[],"key":"54NV5S2iAS1pfZcGLmJgTHm8NGt1WVYpWDBWnZZ3Zok="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
