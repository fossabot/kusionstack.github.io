"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},o="opsrule",i={unversionedId:"kusion/reference/modules/trait/opsrule",id:"kusion/reference/modules/trait/opsrule",title:"opsrule",description:"Schema OpsRule",source:"@site/docs/kusion/6-reference/2-modules/5-trait/opsrule.md",sourceDirName:"kusion/6-reference/2-modules/5-trait",slug:"/kusion/reference/modules/trait/opsrule",permalink:"/docs/next/kusion/reference/modules/trait/opsrule",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/5-trait/opsrule.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1704877157,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"prometheus",permalink:"/docs/next/kusion/reference/modules/monitoring/prometheus"},next:{title:"lifecycle",permalink:"/docs/next/kusion/reference/modules/internal/container/lifecycle/lifecycle"}},u={},s=[{value:"Schema OpsRule",id:"schema-opsrule",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opsrule"},"opsrule"),(0,a.kt)("h2",{id:"schema-opsrule"},"Schema OpsRule"),(0,a.kt)("p",null,"OpsRule describes operation rules for various Day-2 Operations. Once declared, these",(0,a.kt)("br",null),"operation rules will be checked before any Day-2 operations."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"maxUnavailable"),(0,a.kt)("br",null),"The maximum percentage of the total pod instances in the component that can be",(0,a.kt)("br",null),"simultaneously unhealthy."),(0,a.kt)("td",{parentName:"tr",align:null},"int ","|"," str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1.component.trait as t\n\nopsRule = t.OpsRule {\n    maxUnavailable: "30%"\n}\n')))}c.isMDXComponent=!0}}]);