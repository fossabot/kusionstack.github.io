"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=c,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,i[1]=a;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>k,default:()=>N,frontMatter:()=>O,metadata:()=>E,toc:()=>j});var r=n(87462),c=n(67294),o=n(3905),i=n(86010),a=n(78259),s=n(83699),l=n(2735),p=n(97325);const u="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function f(e){let{href:t,children:n}=e;return c.createElement(s.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},n)}function y(e){let{href:t,icon:n,title:r,description:o}=e;return c.createElement(f,{href:t},c.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:r},n," ",r),o&&c.createElement("p",{className:(0,i.Z)("text--truncate",m),title:o},o))}function h(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?c.createElement(y,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,p.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return c.createElement(y,{href:t.href,icon:n,title:t.label,description:t.description??(null==r?void 0:r.description)})}function b(e){let{item:t}=e;switch(t.type){case"link":return c.createElement(v,{item:t});case"category":return c.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return c.createElement(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return c.createElement(g,e);const r=(0,a.MN)(t);return c.createElement("section",{className:(0,i.Z)("row",n)},r.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(b,{item:e})))))}const O={},k="Concepts",E={unversionedId:"concepts/index",id:"version-v0.9/concepts/index",title:"Concepts",description:"In this section, we will introduce the architecture of KusionStack and some core concepts.",source:"@site/docs_versioned_docs/version-v0.9/concepts/index.md",sourceDirName:"concepts",slug:"/concepts/",permalink:"/zh/docs/v0.9/concepts/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/concepts/index.md",tags:[],version:"v0.9",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"2024\u5e7410\u67085\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"Deliver the WordPress Application on Kubernetes",permalink:"/zh/docs/v0.9/getting-started/deliver-wordpress"},next:{title:"Architecture",permalink:"/zh/docs/v0.9/concepts/arch"}},x={},j=[],P={toc:j};function N(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"In this section, we will introduce the architecture of KusionStack and some core concepts."),(0,o.kt)(w,{mdxType:"DocCardList"}))}N.isMDXComponent=!0}}]);