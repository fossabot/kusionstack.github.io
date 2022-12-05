"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,s(s({ref:t},l),{},{components:n})):r.createElement(k,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},s="namespace_spec",c={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_namespace_spec",id:"reference/model/kusion_kubernetes/api/core/v1/doc_namespace_spec",title:"namespace_spec",description:"Source: base/pkg/kusionkubernetes/api/core/v1/namespacespec.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_namespace_spec.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_namespace_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_namespace_spec",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_namespace_spec.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1670242264,formattedLastUpdatedAt:"12/5/2022",frontMatter:{},sidebar:"reference",previous:{title:"namespace",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_namespace"},next:{title:"nfs_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_nfs_volume_source"}},i={},p=[{value:"Schema NamespaceSpec",id:"schema-namespacespec",level:2},{value:"Attributes",id:"attributes",level:3}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"namespace_spec"},"namespace_spec"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/namespace_spec.k"},"base/pkg/kusion_kubernetes/api/core/v1/namespace_spec.k")),(0,a.kt)("p",null,"This is the namespace","_","spec module in kusion","_","kubernetes.api.core.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-namespacespec"},"Schema NamespaceSpec"),(0,a.kt)("p",null,"NamespaceSpec describes the attributes on a Namespace."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"finalizers"),(0,a.kt)("br",null),"Finalizers is an opaque list of values that must be empty to permanently remove object from storage. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/administer-cluster/namespaces/"},"https://kubernetes.io/docs/tasks/administer-cluster/namespaces/")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}u.isMDXComponent=!0}}]);