"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4681],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},85697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},i="downward_api_projection",c={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_downward_api_projection",id:"reference/model/kusion_kubernetes/api/core/v1/doc_downward_api_projection",title:"downward_api_projection",description:"Source: base/pkg/kusionkubernetes/api/core/v1/downwardapiprojection.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_downward_api_projection.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_downward_api_projection",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_downward_api_projection",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_downward_api_projection.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663160649,formattedLastUpdatedAt:"9/14/2022",frontMatter:{},sidebar:"reference",previous:{title:"csi_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_csi_volume_source"},next:{title:"downward_api_volume_file",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_downward_api_volume_file"}},l={},p=[{value:"Schema DownwardAPIProjection",id:"schema-downwardapiprojection",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"downward_api_projection"},"downward_api_projection"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/downward_api_projection.k"},"base/pkg/kusion_kubernetes/api/core/v1/downward_api_projection.k")),(0,o.kt)("p",null,"This is the downward","_","api","_","projection module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-downwardapiprojection"},"Schema DownwardAPIProjection"),(0,o.kt)("p",null,"Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"items"),(0,o.kt)("br",null),"Items is a list of DownwardAPIVolume file"),(0,o.kt)("td",{parentName:"tr",align:null},"[",(0,o.kt)("a",{parentName:"td",href:"doc_downward_api_volume_file#schema-downwardapivolumefile"},"v1.DownwardAPIVolumeFile"),"]"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}u.isMDXComponent=!0}}]);