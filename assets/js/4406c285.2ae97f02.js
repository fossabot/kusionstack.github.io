"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},l="opsrule",i={unversionedId:"kusion/reference/model/catalog_models/trait/doc_opsrule",id:"version-v0.9/kusion/reference/model/catalog_models/trait/doc_opsrule",title:"opsrule",description:"Schema OpsRule",source:"@site/versioned_docs/version-v0.9/kusion/reference/model/catalog_models/trait/doc_opsrule.md",sourceDirName:"kusion/reference/model/catalog_models/trait",slug:"/kusion/reference/model/catalog_models/trait/doc_opsrule",permalink:"/docs/v0.9/kusion/reference/model/catalog_models/trait/doc_opsrule",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/reference/model/catalog_models/trait/doc_opsrule.md",tags:[],version:"v0.9",lastUpdatedBy:"KK",lastUpdatedAt:1705317687,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"prometheus",permalink:"/docs/v0.9/kusion/reference/model/catalog_models/monitoring/doc_prometheus"},next:{title:"container",permalink:"/docs/v0.9/kusion/reference/model/catalog_models/internal/container/doc_container"}},s={},c=[{value:"Schema OpsRule",id:"schema-opsrule",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opsrule"},"opsrule"),(0,a.kt)("h2",{id:"schema-opsrule"},"Schema OpsRule"),(0,a.kt)("p",null,"OpsRule describes operation rules for various Day-2 Operations. Once declared, these",(0,a.kt)("br",null),"operation rules will be checked before any Day-2 operations."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"maxUnavailable"),(0,a.kt)("br",null),"The maximum percentage of the total pod instances in the component that can be",(0,a.kt)("br",null),"simultaneously unhealthy."),(0,a.kt)("td",{parentName:"tr",align:null},"int ","|"," str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1.component.trait as t\n\nopsRule = t.OpsRule {\n    maxUnavailable: "30%"\n}\n')))}p.isMDXComponent=!0}}]);