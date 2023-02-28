"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5180],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),k=a,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||i;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69623:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={},s="ingress_service_backend",o={unversionedId:"reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_service_backend",id:"reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_service_backend",title:"ingress_service_backend",description:"Source: base/pkg/kusionkubernetes/api/networking/v1/ingressservicebackend.k",source:"@site/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_service_backend.md",sourceDirName:"reference/model/kusion_kubernetes/api/networking/v1",slug:"/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_service_backend",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_service_backend",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_service_backend.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1677568146,formattedLastUpdatedAt:"2023/2/28",frontMatter:{},sidebar:"reference",previous:{title:"ingress_rule",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_rule"},next:{title:"ingress_spec",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_spec"}},c={},l=[{value:"Schema IngressServiceBackend",id:"schema-ingressservicebackend",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ingress_service_backend"},"ingress_service_backend"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/networking/v1/ingress_service_backend.k"},"base/pkg/kusion_kubernetes/api/networking/v1/ingress_service_backend.k")),(0,a.kt)("p",null,"This is the ingress","_","service","_","backend module in kusion","_","kubernetes.api.networking.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-ingressservicebackend"},"Schema IngressServiceBackend"),(0,a.kt)("p",null,"IngressServiceBackend references a Kubernetes Service as a Backend."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name"),(0,a.kt)("br",null),"Name is the referenced service. The service must exist in the same namespace as the Ingress object."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"port"),(0,a.kt)("br",null),"Port of the referenced service. A port name or port number is required for a IngressServiceBackend."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"doc_service_backend_port#schema-servicebackendport"},"ServiceBackendPort")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);