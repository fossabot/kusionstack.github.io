"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6886],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="horizontal_pod_autoscaler",l={unversionedId:"reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler",id:"reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler",title:"horizontal_pod_autoscaler",description:"Source: base/pkg/kusionkubernetes/api/autoscaling/v1/horizontalpodautoscaler.k",source:"@site/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler.md",sourceDirName:"reference/model/kusion_kubernetes/api/autoscaling/v1",slug:"/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler",permalink:"/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663826453,formattedLastUpdatedAt:"9/22/2022",frontMatter:{},sidebar:"reference",previous:{title:"cross_version_object_reference",permalink:"/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference"},next:{title:"horizontal_pod_autoscaler_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler_spec"}},s={},c=[{value:"Schema HorizontalPodAutoscaler",id:"schema-horizontalpodautoscaler",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"horizontal_pod_autoscaler"},"horizontal_pod_autoscaler"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/autoscaling/v1/horizontal_pod_autoscaler.k"},"base/pkg/kusion_kubernetes/api/autoscaling/v1/horizontal_pod_autoscaler.k")),(0,a.kt)("p",null,"This is the horizontal","_","pod","_","autoscaler module in kusion","_","kubernetes.api.autoscaling.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-horizontalpodautoscaler"},"Schema HorizontalPodAutoscaler"),(0,a.kt)("p",null,"configuration of a horizontal pod autoscaler."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"apiVersion"),(0,a.kt)("br",null),"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#resources"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#resources")),(0,a.kt)("td",{parentName:"tr",align:null},'"autoscaling/v1"'),(0,a.kt)("td",{parentName:"tr",align:null},'"autoscaling/v1"'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kind"),(0,a.kt)("br",null),"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#types-kinds"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#types-kinds")),(0,a.kt)("td",{parentName:"tr",align:null},'"HorizontalPodAutoscaler"'),(0,a.kt)("td",{parentName:"tr",align:null},'"HorizontalPodAutoscaler"'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"metadata"),(0,a.kt)("br",null),"Standard object metadata. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#metadata"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#metadata")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_object_meta#schema-objectmeta"},"apis.ObjectMeta")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"spec"),(0,a.kt)("br",null),"behaviour of autoscaler. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#spec-and-status"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#spec-and-status"),"."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"doc_horizontal_pod_autoscaler_spec#schema-horizontalpodautoscalerspec"},"HorizontalPodAutoscalerSpec")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);