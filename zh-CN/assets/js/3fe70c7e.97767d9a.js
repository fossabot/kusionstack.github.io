"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={},i="stateful_set",o={unversionedId:"reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set",id:"reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set",title:"stateful_set",description:"Source: base/pkg/kusionkubernetes/api/apps/v1/statefulset.k",source:"@site/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set.md",sourceDirName:"reference/model/kusion_kubernetes/api/apps/v1",slug:"/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1672385429,formattedLastUpdatedAt:"2022/12/30",frontMatter:{},sidebar:"reference",previous:{title:"rolling_update_stateful_set_strategy",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_stateful_set_strategy"},next:{title:"stateful_set_spec",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_spec"}},l={},u=[{value:"Schema StatefulSet",id:"schema-statefulset",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stateful_set"},"stateful_set"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/stateful_set.k"},"base/pkg/kusion_kubernetes/api/apps/v1/stateful_set.k")),(0,r.kt)("p",null,"This is the stateful","_","set module in kusion","_","kubernetes.api.apps.v1 package.",(0,r.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,r.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,r.kt)("h2",{id:"schema-statefulset"},"Schema StatefulSet"),(0,r.kt)("p",null,"StatefulSet represents a set of pods with consistent identities. Identities are defined as:",(0,r.kt)("br",null),"- Network: A single stable DNS and hostname.",(0,r.kt)("br",null),"- Storage: As many VolumeClaims as requested.The StatefulSet guarantees that a given network identity will always map to the same storage identity."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"apiVersion"),(0,r.kt)("br",null),"     APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#resources"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#resources"),(0,r.kt)("br",null),'kind : "StatefulSet", default is "StatefulSet", required',(0,r.kt)("br",null),"     Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#types-kinds"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#types-kinds"),(0,r.kt)("br",null),"metadata : apis.ObjectMeta, default is Undefined, optional",(0,r.kt)("br",null),"     Standard object's metadata. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#metadata"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#metadata"),(0,r.kt)("br",null),"spec : StatefulSetSpec, default is Undefined, optional",(0,r.kt)("br",null),"     Spec defines the desired identities of pods in this set."),(0,r.kt)("td",{parentName:"tr",align:null},'"apps/v1"'),(0,r.kt)("td",{parentName:"tr",align:null},'"apps/v1"'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kind")),(0,r.kt)("td",{parentName:"tr",align:null},'"StatefulSet"'),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_object_meta#schema-objectmeta"},"apis.ObjectMeta")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"spec")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_stateful_set_spec#schema-statefulsetspec"},"StatefulSetSpec")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);