"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,v=p["".concat(i,".").concat(d)]||p[d]||c[d]||a;return r?n.createElement(v,l(l({ref:t},m),{},{components:r})):n.createElement(v,l({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},61549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},l="persistent_volume_claim_volume_source",s={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_volume_source",id:"reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_volume_source",title:"persistent_volume_claim_volume_source",description:"Source: base/pkg/kusionkubernetes/api/core/v1/persistentvolumeclaimvolumesource.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_volume_source.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_volume_source",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_volume_source.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685544974,formattedLastUpdatedAt:"5/31/2023",frontMatter:{},sidebar:"reference",previous:{title:"persistent_volume_claim_template",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_template"},next:{title:"photon_persistent_disk_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_photon_persistent_disk_volume_source"}},i={},u=[{value:"Schema PersistentVolumeClaimVolumeSource",id:"schema-persistentvolumeclaimvolumesource",level:2},{value:"Attributes",id:"attributes",level:3}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"persistent_volume_claim_volume_source"},"persistent_volume_claim_volume_source"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/persistent_volume_claim_volume_source.k"},"base/pkg/kusion_kubernetes/api/core/v1/persistent_volume_claim_volume_source.k")),(0,o.kt)("p",null,"This is the persistent","_","volume","_","claim","_","volume","_","source module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-persistentvolumeclaimvolumesource"},"Schema PersistentVolumeClaimVolumeSource"),(0,o.kt)("p",null,"PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system)."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"claimName"),(0,o.kt)("br",null),"ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes%5C#persistentvolumeclaims"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes\\#persistentvolumeclaims")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"readOnly"),(0,o.kt)("br",null),"Will force the ReadOnly setting in VolumeMounts. Default false."),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);