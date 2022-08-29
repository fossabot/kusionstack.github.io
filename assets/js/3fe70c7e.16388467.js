"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9443],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16166:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={},l="stateful_set",u={unversionedId:"reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set",id:"reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set",title:"stateful_set",description:"Source: base/pkg/kusionkubernetes/api/apps/v1/statefulset.k",source:"@site/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set.md",sourceDirName:"reference/model/kusion_kubernetes/api/apps/v1",slug:"/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1661751584,formattedLastUpdatedAt:"2022/8/29",frontMatter:{},sidebar:"reference",previous:{title:"rolling_update_stateful_set_strategy",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_stateful_set_strategy"},next:{title:"stateful_set_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_spec"}},p={},c=[{value:"Schema StatefulSet",id:"schema-statefulset",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stateful_set"},"stateful_set"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/stateful_set.k"},"base/pkg/kusion_kubernetes/api/apps/v1/stateful_set.k")),(0,i.kt)("p",null,"This is the stateful","_","set module in kusion","_","kubernetes.api.apps.v1 package.",(0,i.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,i.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,i.kt)("h2",{id:"schema-statefulset"},"Schema StatefulSet"),(0,i.kt)("p",null,"StatefulSet represents a set of pods with consistent identities. Identities are defined as:",(0,i.kt)("br",null),"- Network: A single stable DNS and hostname.",(0,i.kt)("br",null),"- Storage: As many VolumeClaims as requested.The StatefulSet guarantees that a given network identity will always map to the same storage identity."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"apiVersion"),(0,i.kt)("br",null),"     APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: ",(0,i.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#resources"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#resources"),(0,i.kt)("br",null),'kind : "StatefulSet", default is "StatefulSet", required',(0,i.kt)("br",null),"     Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: ",(0,i.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#types-kinds"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#types-kinds"),(0,i.kt)("br",null),"metadata : apis.ObjectMeta, default is Undefined, optional",(0,i.kt)("br",null),"     Standard object's metadata. More info: ",(0,i.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#metadata"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#metadata"),(0,i.kt)("br",null),"spec : StatefulSetSpec, default is Undefined, optional",(0,i.kt)("br",null),"     Spec defines the desired identities of pods in this set."),(0,i.kt)("td",{parentName:"tr",align:null},'"apps/v1"'),(0,i.kt)("td",{parentName:"tr",align:null},'"apps/v1"'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"required"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"kind")),(0,i.kt)("td",{parentName:"tr",align:null},'"StatefulSet"'),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"required"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"metadata")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_object_meta#schema-objectmeta"},"apis.ObjectMeta")),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"spec")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"doc_stateful_set_spec#schema-statefulsetspec"},"StatefulSetSpec")),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")))))}m.isMDXComponent=!0}}]);