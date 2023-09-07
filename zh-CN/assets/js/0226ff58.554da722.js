"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4280],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||l;return r?a.createElement(g,o(o({ref:t},p),{},{components:r})):a.createElement(g,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={},o="rolling_update_stateful_set_strategy",i={unversionedId:"reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_stateful_set_strategy",id:"reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_stateful_set_strategy",title:"rolling_update_stateful_set_strategy",description:"Source: base/pkg/kusionkubernetes/api/apps/v1/rollingupdatestatefulsetstrategy.k",source:"@site/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_stateful_set_strategy.md",sourceDirName:"reference/model/kusion_kubernetes/api/apps/v1",slug:"/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_stateful_set_strategy",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_stateful_set_strategy",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_stateful_set_strategy.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1694077538,formattedLastUpdatedAt:"2023\u5e749\u67087\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"rolling_update_deployment",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_deployment"},next:{title:"stateful_set",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set"}},s={},u=[{value:"Schema RollingUpdateStatefulSetStrategy",id:"schema-rollingupdatestatefulsetstrategy",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rolling_update_stateful_set_strategy"},"rolling_update_stateful_set_strategy"),(0,n.kt)("p",null,"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/rolling_update_stateful_set_strategy.k"},"base/pkg/kusion_kubernetes/api/apps/v1/rolling_update_stateful_set_strategy.k")),(0,n.kt)("p",null,"This is the rolling","_","update","_","stateful","_","set","_","strategy module in kusion","_","kubernetes.api.apps.v1 package.",(0,n.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,n.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,n.kt)("h2",{id:"schema-rollingupdatestatefulsetstrategy"},"Schema RollingUpdateStatefulSetStrategy"),(0,n.kt)("p",null,"RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType."),(0,n.kt)("h3",{id:"attributes"},"Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"partition"),(0,n.kt)("br",null),"Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0."),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);