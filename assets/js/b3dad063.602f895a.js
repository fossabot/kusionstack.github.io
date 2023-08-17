"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="cross_version_object_reference",s={unversionedId:"reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference",id:"reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference",title:"cross_version_object_reference",description:"Source: base/pkg/kusionkubernetes/api/autoscaling/v1/crossversionobjectreference.k",source:"@site/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference.md",sourceDirName:"reference/model/kusion_kubernetes/api/autoscaling/v1",slug:"/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference",permalink:"/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference.md",tags:[],version:"current",lastUpdatedBy:"zoumo",lastUpdatedAt:1692261210,formattedLastUpdatedAt:"Aug 17, 2023",frontMatter:{},sidebar:"reference",previous:{title:"stateful_set_update_strategy",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy"},next:{title:"horizontal_pod_autoscaler",permalink:"/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler"}},c={},l=[{value:"Schema CrossVersionObjectReference",id:"schema-crossversionobjectreference",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cross_version_object_reference"},"cross_version_object_reference"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/autoscaling/v1/cross_version_object_reference.k"},"base/pkg/kusion_kubernetes/api/autoscaling/v1/cross_version_object_reference.k")),(0,o.kt)("p",null,"This is the cross","_","version","_","object","_","reference module in kusion","_","kubernetes.api.autoscaling.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-crossversionobjectreference"},"Schema CrossVersionObjectReference"),(0,o.kt)("p",null,"CrossVersionObjectReference contains enough information to let you identify the referred resource."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"apiVersion"),(0,o.kt)("br",null),"API version of the referent"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"kind"),(0,o.kt)("br",null),"Kind of the referent; More info: ",(0,o.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#types-kinds%22"},'https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#types-kinds"')),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"name"),(0,o.kt)("br",null),"Name of the referent; More info: ",(0,o.kt)("a",{parentName:"td",href:"http://kubernetes.io/docs/user-guide/identifiers%5C#names"},"http://kubernetes.io/docs/user-guide/identifiers\\#names")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))))))}p.isMDXComponent=!0}}]);