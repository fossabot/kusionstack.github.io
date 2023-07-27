"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3956],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),k=a,b=d["".concat(c,".").concat(k)]||d[k]||p[k]||i;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},o="service_backend_port",l={unversionedId:"reference/model/kusion_kubernetes/api/networking/v1/doc_service_backend_port",id:"reference/model/kusion_kubernetes/api/networking/v1/doc_service_backend_port",title:"service_backend_port",description:"Source: base/pkg/kusionkubernetes/api/networking/v1/servicebackendport.k",source:"@site/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_service_backend_port.md",sourceDirName:"reference/model/kusion_kubernetes/api/networking/v1",slug:"/reference/model/kusion_kubernetes/api/networking/v1/doc_service_backend_port",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_service_backend_port",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_service_backend_port.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1690428760,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{},sidebar:"reference",previous:{title:"ingress_tls",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_tls"},next:{title:"aggregation_rule",permalink:"/docs/reference/model/kusion_kubernetes/api/rbac/v1/doc_aggregation_rule"}},c={},s=[{value:"Schema ServiceBackendPort",id:"schema-servicebackendport",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"service_backend_port"},"service_backend_port"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/networking/v1/service_backend_port.k"},"base/pkg/kusion_kubernetes/api/networking/v1/service_backend_port.k")),(0,a.kt)("p",null,"This is the service","_","backend","_","port module in kusion","_","kubernetes.api.networking.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-servicebackendport"},"Schema ServiceBackendPort"),(0,a.kt)("p",null,"ServiceBackendPort is the service port being referenced."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name"),(0,a.kt)("br",null),'Name is the name of the port on the Service. This is a mutually exclusive setting with "Number".'),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"number"),(0,a.kt)("br",null),'Number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".'),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);