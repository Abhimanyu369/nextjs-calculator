"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[365],{88068:(e,r,o)=>{o.d(r,{s:()=>s,t:()=>l});var t=o(12115);function n(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}function l(...e){return r=>{let o=!1,t=e.map(e=>{let t=n(e,r);return o||"function"!=typeof t||(o=!0),t});if(o)return()=>{for(let r=0;r<t.length;r++){let o=t[r];"function"==typeof o?o():n(e[r],null)}}}}function s(...e){return t.useCallback(l(...e),e)}},12317:(e,r,o)=>{o.d(r,{DX:()=>s});var t=o(12115),n=o(88068),l=o(95155),s=t.forwardRef((e,r)=>{let{children:o,...n}=e,s=t.Children.toArray(o),a=s.find(d);if(a){let e=a.props.children,o=s.map(r=>r!==a?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,l.jsx)(i,{...n,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,o):null})}return(0,l.jsx)(i,{...n,ref:r,children:o})});s.displayName="Slot";var i=t.forwardRef((e,r)=>{let{children:o,...l}=e;if(t.isValidElement(o)){let e=function(e){let r=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(o),s=function(e,r){let o={...r};for(let t in r){let n=e[t],l=r[t];/^on[A-Z]/.test(t)?n&&l?o[t]=(...e)=>{l(...e),n(...e)}:n&&(o[t]=n):"style"===t?o[t]={...n,...l}:"className"===t&&(o[t]=[n,l].filter(Boolean).join(" "))}return{...e,...o}}(l,o.props);return o.type!==t.Fragment&&(s.ref=r?(0,n.t)(r,e):e),t.cloneElement(o,s)}return t.Children.count(o)>1?t.Children.only(null):null});i.displayName="SlotClone";var a=({children:e})=>(0,l.jsx)(l.Fragment,{children:e});function d(e){return t.isValidElement(e)&&e.type===a}},31027:(e,r,o)=>{o.d(r,{F:()=>s});var t=o(43463);let n=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=t.$,s=(e,r)=>o=>{var t;if((null==r?void 0:r.variants)==null)return l(e,null==o?void 0:o.class,null==o?void 0:o.className);let{variants:s,defaultVariants:i}=r,a=Object.keys(s).map(e=>{let r=null==o?void 0:o[e],t=null==i?void 0:i[e];if(null===r)return null;let l=n(r)||n(t);return s[e][l]}),d=o&&Object.entries(o).reduce((e,r)=>{let[o,t]=r;return void 0===t||(e[o]=t),e},{});return l(e,a,null==r?void 0:null===(t=r.compoundVariants)||void 0===t?void 0:t.reduce((e,r)=>{let{class:o,className:t,...n}=r;return Object.entries(n).every(e=>{let[r,o]=e;return Array.isArray(o)?o.includes({...i,...d}[r]):({...i,...d})[r]===o})?[...e,o,t]:e},[]),null==o?void 0:o.class,null==o?void 0:o.className)}},43463:(e,r,o)=>{function t(){for(var e,r,o=0,t="",n=arguments.length;o<n;o++)(e=arguments[o])&&(r=function e(r){var o,t,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r)){var l=r.length;for(o=0;o<l;o++)r[o]&&(t=e(r[o]))&&(n&&(n+=" "),n+=t)}else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(e))&&(t&&(t+=" "),t+=r);return t}o.d(r,{$:()=>t,A:()=>n});let n=t},69795:(e,r,o)=>{o.d(r,{QP:()=>ep});let t=e=>{let r=i(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:e=>{let o=e.split("-");return""===o[0]&&1!==o.length&&o.shift(),n(o,r)||s(e)},getConflictingClassGroupIds:(e,r)=>{let n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}},n=(e,r)=>{if(0===e.length)return r.classGroupId;let o=e[0],t=r.nextPart.get(o),l=t?n(e.slice(1),t):void 0;if(l)return l;if(0===r.validators.length)return;let s=e.join("-");return r.validators.find(({validator:e})=>e(s))?.classGroupId},l=/^\[(.+)\]$/,s=e=>{if(l.test(e)){let r=l.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}},i=e=>{let{theme:r,classGroups:o}=e,t={nextPart:new Map,validators:[]};for(let e in o)a(o[e],t,e,r);return t},a=(e,r,o,t)=>{e.forEach(e=>{if("string"==typeof e){(""===e?r:d(r,e)).classGroupId=o;return}if("function"==typeof e){if(c(e)){a(e(t),r,o,t);return}r.validators.push({validator:e,classGroupId:o});return}Object.entries(e).forEach(([e,n])=>{a(n,d(r,e),o,t)})})},d=(e,r)=>{let o=e;return r.split("-").forEach(e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o},c=e=>e.isThemeGetter,p=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let r=0,o=new Map,t=new Map,n=(n,l)=>{o.set(n,l),++r>e&&(r=0,t=o,o=new Map)};return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}},u=e=>{let{prefix:r,experimentalParseClassName:o}=e,t=e=>{let r;let o=[],t=0,n=0,l=0;for(let s=0;s<e.length;s++){let i=e[s];if(0===t&&0===n){if(":"===i){o.push(e.slice(l,s)),l=s+1;continue}if("/"===i){r=s;continue}}"["===i?t++:"]"===i?t--:"("===i?n++:")"===i&&n--}let s=0===o.length?e:e.substring(l),i=b(s);return{modifiers:o,hasImportantModifier:i!==s,baseClassName:i,maybePostfixModifierPosition:r&&r>l?r-l:void 0}};if(r){let e=r+":",o=t;t=r=>r.startsWith(e)?o(r.substring(e.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:r,maybePostfixModifierPosition:void 0}}if(o){let e=t;t=r=>o({className:r,parseClassName:e})}return t},b=e=>e.endsWith("!")?e.substring(0,e.length-1):e.startsWith("!")?e.substring(1):e,f=e=>{let r=Object.fromEntries(e.orderSensitiveModifiers.map(e=>[e,!0]));return e=>{if(e.length<=1)return e;let o=[],t=[];return e.forEach(e=>{"["===e[0]||r[e]?(o.push(...t.sort(),e),t=[]):t.push(e)}),o.push(...t.sort()),o}},m=e=>({cache:p(e.cacheSize),parseClassName:u(e),sortModifiers:f(e),...t(e)}),g=/\s+/,h=(e,r)=>{let{parseClassName:o,getClassGroupId:t,getConflictingClassGroupIds:n,sortModifiers:l}=r,s=[],i=e.trim().split(g),a="";for(let e=i.length-1;e>=0;e-=1){let r=i[e],{isExternal:d,modifiers:c,hasImportantModifier:p,baseClassName:u,maybePostfixModifierPosition:b}=o(r);if(d){a=r+(a.length>0?" "+a:a);continue}let f=!!b,m=t(f?u.substring(0,b):u);if(!m){if(!f||!(m=t(u))){a=r+(a.length>0?" "+a:a);continue}f=!1}let g=l(c).join(":"),h=p?g+"!":g,x=h+m;if(s.includes(x))continue;s.push(x);let w=n(m,f);for(let e=0;e<w.length;++e){let r=w[e];s.push(h+r)}a=r+(a.length>0?" "+a:a)}return a};function x(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=w(e))&&(t&&(t+=" "),t+=r);return t}let w=e=>{let r;if("string"==typeof e)return e;let o="";for(let t=0;t<e.length;t++)e[t]&&(r=w(e[t]))&&(o&&(o+=" "),o+=r);return o},v=e=>{let r=r=>r[e]||[];return r.isThemeGetter=!0,r},y=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,k=/^\((?:(\w[\w-]*):)?(.+)\)$/i,z=/^\d+\/\d+$/,j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,C=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,N=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,E=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,M=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,P=e=>z.test(e),$=e=>!!e&&!Number.isNaN(Number(e)),G=e=>!!e&&Number.isInteger(Number(e)),O=e=>e.endsWith("%")&&$(e.slice(0,-1)),S=e=>j.test(e),I=()=>!0,W=e=>C.test(e)&&!N.test(e),A=()=>!1,R=e=>E.test(e),_=e=>M.test(e),V=e=>!F(e)&&!Z(e),D=e=>ee(e,es,A),F=e=>y.test(e),T=e=>ee(e,ei,W),q=e=>ee(e,ea,$),B=e=>ee(e,eo,A),Q=e=>ee(e,en,_),X=e=>ee(e,A,R),Z=e=>k.test(e),H=e=>er(e,ei),J=e=>er(e,ed),K=e=>er(e,eo),L=e=>er(e,es),U=e=>er(e,en),Y=e=>er(e,ec,!0),ee=(e,r,o)=>{let t=y.exec(e);return!!t&&(t[1]?r(t[1]):o(t[2]))},er=(e,r,o=!1)=>{let t=k.exec(e);return!!t&&(t[1]?r(t[1]):o)},eo=e=>"position"===e,et=new Set(["image","url"]),en=e=>et.has(e),el=new Set(["length","size","percentage"]),es=e=>el.has(e),ei=e=>"length"===e,ea=e=>"number"===e,ed=e=>"family-name"===e,ec=e=>"shadow"===e;Symbol.toStringTag;let ep=function(e,...r){let o,t,n;let l=function(i){return t=(o=m(r.reduce((e,r)=>r(e),e()))).cache.get,n=o.cache.set,l=s,s(i)};function s(e){let r=t(e);if(r)return r;let l=h(e,o);return n(e,l),l}return function(){return l(x.apply(null,arguments))}}(()=>{let e=v("color"),r=v("font"),o=v("text"),t=v("font-weight"),n=v("tracking"),l=v("leading"),s=v("breakpoint"),i=v("container"),a=v("spacing"),d=v("radius"),c=v("shadow"),p=v("inset-shadow"),u=v("drop-shadow"),b=v("blur"),f=v("perspective"),m=v("aspect"),g=v("ease"),h=v("animate"),x=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],y=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto","contain","none"],z=()=>[P,"px","full","auto",Z,F,a],j=()=>[G,"none","subgrid",Z,F],C=()=>["auto",{span:["full",G,Z,F]},Z,F],N=()=>[G,"auto",Z,F],E=()=>["auto","min","max","fr",Z,F],M=()=>[Z,F,a],W=()=>["start","end","center","between","around","evenly","stretch","baseline"],A=()=>["start","end","center","stretch"],R=()=>[Z,F,a],_=()=>["px",...R()],ee=()=>["px","auto",...R()],er=()=>[P,"auto","px","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",Z,F,a],eo=()=>[e,Z,F],et=()=>[O,T],en=()=>["","none","full",d,Z,F],el=()=>["",$,H,T],es=()=>["solid","dashed","dotted","double"],ei=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ea=()=>["","none",b,Z,F],ed=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z,F],ec=()=>["none",$,Z,F],ep=()=>["none",$,Z,F],eu=()=>[$,Z,F],eb=()=>[P,"full","px",Z,F,a];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[S],breakpoint:[S],color:[I],container:[S],"drop-shadow":[S],ease:["in","out","in-out"],font:[V],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[S],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[S],shadow:[S],spacing:[$],text:[S],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",P,F,Z,m]}],container:["container"],columns:[{columns:[$,F,Z,i]}],"break-after":[{"break-after":x()}],"break-before":[{"break-before":x()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...w(),F,Z]}],overflow:[{overflow:y()}],"overflow-x":[{"overflow-x":y()}],"overflow-y":[{"overflow-y":y()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:z()}],"inset-x":[{"inset-x":z()}],"inset-y":[{"inset-y":z()}],start:[{start:z()}],end:[{end:z()}],top:[{top:z()}],right:[{right:z()}],bottom:[{bottom:z()}],left:[{left:z()}],visibility:["visible","invisible","collapse"],z:[{z:[G,"auto",Z,F]}],basis:[{basis:[P,"full","auto",Z,F,i,a]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[$,P,"auto","initial","none",F]}],grow:[{grow:["",$,Z,F]}],shrink:[{shrink:["",$,Z,F]}],order:[{order:[G,"first","last","none",Z,F]}],"grid-cols":[{"grid-cols":j()}],"col-start-end":[{col:C()}],"col-start":[{"col-start":N()}],"col-end":[{"col-end":N()}],"grid-rows":[{"grid-rows":j()}],"row-start-end":[{row:C()}],"row-start":[{"row-start":N()}],"row-end":[{"row-end":N()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":E()}],"auto-rows":[{"auto-rows":E()}],gap:[{gap:M()}],"gap-x":[{"gap-x":M()}],"gap-y":[{"gap-y":M()}],"justify-content":[{justify:[...W(),"normal"]}],"justify-items":[{"justify-items":[...A(),"normal"]}],"justify-self":[{"justify-self":["auto",...A()]}],"align-content":[{content:["normal",...W()]}],"align-items":[{items:[...A(),"baseline"]}],"align-self":[{self:["auto",...A(),"baseline"]}],"place-content":[{"place-content":W()}],"place-items":[{"place-items":[...A(),"baseline"]}],"place-self":[{"place-self":["auto",...A()]}],p:[{p:_()}],px:[{px:_()}],py:[{py:_()}],ps:[{ps:_()}],pe:[{pe:_()}],pt:[{pt:_()}],pr:[{pr:_()}],pb:[{pb:_()}],pl:[{pl:_()}],m:[{m:ee()}],mx:[{mx:ee()}],my:[{my:ee()}],ms:[{ms:ee()}],me:[{me:ee()}],mt:[{mt:ee()}],mr:[{mr:ee()}],mb:[{mb:ee()}],ml:[{ml:ee()}],"space-x":[{"space-x":R()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":R()}],"space-y-reverse":["space-y-reverse"],size:[{size:er()}],w:[{w:[i,"screen",...er()]}],"min-w":[{"min-w":[i,"screen","none",...er()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[s]},...er()]}],h:[{h:["screen",...er()]}],"min-h":[{"min-h":["screen","none",...er()]}],"max-h":[{"max-h":["screen",...er()]}],"font-size":[{text:["base",o,H,T]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[t,Z,q]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",O,F]}],"font-family":[{font:[J,F,r]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[n,Z,F]}],"line-clamp":[{"line-clamp":[$,"none",Z,q]}],leading:[{leading:[Z,F,l,a]}],"list-image":[{"list-image":["none",Z,F]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Z,F]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:eo()}],"text-color":[{text:eo()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...es(),"wavy"]}],"text-decoration-thickness":[{decoration:[$,"from-font","auto",Z,T]}],"text-decoration-color":[{decoration:eo()}],"underline-offset":[{"underline-offset":[$,"auto",Z,F]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:["px",...R()]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z,F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z,F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...w(),K,B]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",L,D]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},G,Z,F],radial:["",Z,F],conic:[G,Z,F]},U,Q]}],"bg-color":[{bg:eo()}],"gradient-from-pos":[{from:et()}],"gradient-via-pos":[{via:et()}],"gradient-to-pos":[{to:et()}],"gradient-from":[{from:eo()}],"gradient-via":[{via:eo()}],"gradient-to":[{to:eo()}],rounded:[{rounded:en()}],"rounded-s":[{"rounded-s":en()}],"rounded-e":[{"rounded-e":en()}],"rounded-t":[{"rounded-t":en()}],"rounded-r":[{"rounded-r":en()}],"rounded-b":[{"rounded-b":en()}],"rounded-l":[{"rounded-l":en()}],"rounded-ss":[{"rounded-ss":en()}],"rounded-se":[{"rounded-se":en()}],"rounded-ee":[{"rounded-ee":en()}],"rounded-es":[{"rounded-es":en()}],"rounded-tl":[{"rounded-tl":en()}],"rounded-tr":[{"rounded-tr":en()}],"rounded-br":[{"rounded-br":en()}],"rounded-bl":[{"rounded-bl":en()}],"border-w":[{border:el()}],"border-w-x":[{"border-x":el()}],"border-w-y":[{"border-y":el()}],"border-w-s":[{"border-s":el()}],"border-w-e":[{"border-e":el()}],"border-w-t":[{"border-t":el()}],"border-w-r":[{"border-r":el()}],"border-w-b":[{"border-b":el()}],"border-w-l":[{"border-l":el()}],"divide-x":[{"divide-x":el()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":el()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...es(),"hidden","none"]}],"divide-style":[{divide:[...es(),"hidden","none"]}],"border-color":[{border:eo()}],"border-color-x":[{"border-x":eo()}],"border-color-y":[{"border-y":eo()}],"border-color-s":[{"border-s":eo()}],"border-color-e":[{"border-e":eo()}],"border-color-t":[{"border-t":eo()}],"border-color-r":[{"border-r":eo()}],"border-color-b":[{"border-b":eo()}],"border-color-l":[{"border-l":eo()}],"divide-color":[{divide:eo()}],"outline-style":[{outline:[...es(),"none","hidden"]}],"outline-offset":[{"outline-offset":[$,Z,F]}],"outline-w":[{outline:["",$,H,T]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",c,Y,X]}],"shadow-color":[{shadow:eo()}],"inset-shadow":[{"inset-shadow":["none",Z,F,p]}],"inset-shadow-color":[{"inset-shadow":eo()}],"ring-w":[{ring:el()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:eo()}],"ring-offset-w":[{"ring-offset":[$,T]}],"ring-offset-color":[{"ring-offset":eo()}],"inset-ring-w":[{"inset-ring":el()}],"inset-ring-color":[{"inset-ring":eo()}],opacity:[{opacity:[$,Z,F]}],"mix-blend":[{"mix-blend":[...ei(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ei()}],filter:[{filter:["","none",Z,F]}],blur:[{blur:ea()}],brightness:[{brightness:[$,Z,F]}],contrast:[{contrast:[$,Z,F]}],"drop-shadow":[{"drop-shadow":["","none",u,Z,F]}],grayscale:[{grayscale:["",$,Z,F]}],"hue-rotate":[{"hue-rotate":[$,Z,F]}],invert:[{invert:["",$,Z,F]}],saturate:[{saturate:[$,Z,F]}],sepia:[{sepia:["",$,Z,F]}],"backdrop-filter":[{"backdrop-filter":["","none",Z,F]}],"backdrop-blur":[{"backdrop-blur":ea()}],"backdrop-brightness":[{"backdrop-brightness":[$,Z,F]}],"backdrop-contrast":[{"backdrop-contrast":[$,Z,F]}],"backdrop-grayscale":[{"backdrop-grayscale":["",$,Z,F]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[$,Z,F]}],"backdrop-invert":[{"backdrop-invert":["",$,Z,F]}],"backdrop-opacity":[{"backdrop-opacity":[$,Z,F]}],"backdrop-saturate":[{"backdrop-saturate":[$,Z,F]}],"backdrop-sepia":[{"backdrop-sepia":["",$,Z,F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":R()}],"border-spacing-x":[{"border-spacing-x":R()}],"border-spacing-y":[{"border-spacing-y":R()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Z,F]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[$,"initial",Z,F]}],ease:[{ease:["linear","initial",g,Z,F]}],delay:[{delay:[$,Z,F]}],animate:[{animate:["none",h,Z,F]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[f,Z,F]}],"perspective-origin":[{"perspective-origin":ed()}],rotate:[{rotate:ec()}],"rotate-x":[{"rotate-x":ec()}],"rotate-y":[{"rotate-y":ec()}],"rotate-z":[{"rotate-z":ec()}],scale:[{scale:ep()}],"scale-x":[{"scale-x":ep()}],"scale-y":[{"scale-y":ep()}],"scale-z":[{"scale-z":ep()}],"scale-3d":["scale-3d"],skew:[{skew:eu()}],"skew-x":[{"skew-x":eu()}],"skew-y":[{"skew-y":eu()}],transform:[{transform:[Z,F,"","none","gpu","cpu"]}],"transform-origin":[{origin:ed()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:eb()}],"translate-x":[{"translate-x":eb()}],"translate-y":[{"translate-y":eb()}],"translate-z":[{"translate-z":eb()}],"translate-none":["translate-none"],accent:[{accent:eo()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:eo()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z,F]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z,F]}],fill:[{fill:["none",...eo()]}],"stroke-w":[{stroke:[$,H,T,q]}],stroke:[{stroke:["none",...eo()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}})}}]);