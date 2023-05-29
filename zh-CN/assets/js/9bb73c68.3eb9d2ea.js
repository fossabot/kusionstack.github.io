"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i="horizontal_pod_autoscaler",l={unversionedId:"reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler",id:"reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler",title:"horizontal_pod_autoscaler",description:"Source: base/pkg/kusionkubernetes/api/autoscaling/v1/horizontalpodautoscaler.k",source:"@site/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler.md",sourceDirName:"reference/model/kusion_kubernetes/api/autoscaling/v1",slug:"/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685356618,formattedLastUpdatedAt:"2023/5/29",frontMatter:{},sidebar:"reference",previous:{title:"cross_version_object_reference",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference"},next:{title:"horizontal_pod_autoscaler_spec",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler_spec"}},s={},c=[{value:"Schema HorizontalPodAutoscaler",id:"schema-horizontalpodautoscaler",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"horizontal_pod_autoscaler"},"horizontal_pod_autoscaler"),(0,n.kt)("p",null,"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/autoscaling/v1/horizontal_pod_autoscaler.k"},"base/pkg/kusion_kubernetes/api/autoscaling/v1/horizontal_pod_autoscaler.k")),(0,n.kt)("p",null,"This is the horizontal","_","pod","_","autoscaler module in kusion","_","kubernetes.api.autoscaling.v1 package.",(0,n.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,n.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,n.kt)("h2",{id:"schema-horizontalpodautoscaler"},"Schema HorizontalPodAutoscaler"),(0,n.kt)("p",null,"configuration of a horizontal pod autoscaler."),(0,n.kt)("h3",{id:"attributes"},"Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"apiVersion"),(0,n.kt)("br",null),"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: ",(0,n.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#resources"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#resources")),(0,n.kt)("td",{parentName:"tr",align:null},'"autoscaling/v1"'),(0,n.kt)("td",{parentName:"tr",align:null},'"autoscaling/v1"'),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"required"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"kind"),(0,n.kt)("br",null),"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: ",(0,n.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#types-kinds"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#types-kinds")),(0,n.kt)("td",{parentName:"tr",align:null},'"HorizontalPodAutoscaler"'),(0,n.kt)("td",{parentName:"tr",align:null},'"HorizontalPodAutoscaler"'),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"required"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"metadata"),(0,n.kt)("br",null),"Standard object metadata. More info: ",(0,n.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#metadata"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#metadata")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_object_meta#schema-objectmeta"},"apis.ObjectMeta")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"spec"),(0,n.kt)("br",null),"behaviour of autoscaler. More info: ",(0,n.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#spec-and-status"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#spec-and-status"),"."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_horizontal_pod_autoscaler_spec#schema-horizontalpodautoscalerspec"},"HorizontalPodAutoscalerSpec")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")))))}d.isMDXComponent=!0}}]);