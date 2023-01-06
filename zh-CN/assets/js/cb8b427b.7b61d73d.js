"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3340],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},55037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},l="scheduling_strategy",s={unversionedId:"reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy",id:"reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy",title:"scheduling_strategy",description:"Source: base/pkg/kusionmodels/kube/frontend/strategy/schedulingstrategy.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy.md",sourceDirName:"reference/model/kusion_models/kube/frontend/strategy",slug:"/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1672990124,formattedLastUpdatedAt:"2023/1/6",frontMatter:{},sidebar:"reference",previous:{title:"simple_sidecar",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_simple_sidecar"},next:{title:"volume",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/volume/doc_volume"}},i={},u=[{value:"Schema SchedulingStrategy",id:"schema-schedulingstrategy",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduling_strategy"},"scheduling_strategy"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/strategy/scheduling_strategy.k"},"base/pkg/kusion_models/kube/frontend/strategy/scheduling_strategy.k")),(0,a.kt)("h2",{id:"schema-schedulingstrategy"},"Schema SchedulingStrategy"),(0,a.kt)("p",null,"SchedulingStrategy represents scheduling strategy."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"resource"),(0,a.kt)("br",null),"A Pod-level attribute.",(0,a.kt)("br",null),"Main container resource."),(0,a.kt)("td",{parentName:"tr",align:null},"str ","|"," ",(0,a.kt)("a",{parentName:"td",href:"../resource/doc_resource#schema-resource"},"resource.Resource")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}d.isMDXComponent=!0}}]);