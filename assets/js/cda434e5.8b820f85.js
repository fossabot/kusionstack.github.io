"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=m(n),c=a,k=s["".concat(i,".").concat(c)]||s[c]||d[c]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},l="volume_mount",u={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_volume_mount",id:"reference/model/kusion_kubernetes/api/core/v1/doc_volume_mount",title:"volume_mount",description:"Source: base/pkg/kusionkubernetes/api/core/v1/volumemount.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_mount.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_volume_mount",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_mount",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_mount.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1668663206,formattedLastUpdatedAt:"11/17/2022",frontMatter:{},sidebar:"reference",previous:{title:"volume_device",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_device"},next:{title:"volume_projection",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_projection"}},i={},m=[{value:"Schema VolumeMount",id:"schema-volumemount",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"volume_mount"},"volume_mount"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/volume_mount.k"},"base/pkg/kusion_kubernetes/api/core/v1/volume_mount.k")),(0,a.kt)("p",null,"This is the volume","_","mount module in kusion","_","kubernetes.api.core.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-volumemount"},"Schema VolumeMount"),(0,a.kt)("p",null,"VolumeMount describes a mounting of a Volume within a container."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"mountPath"),(0,a.kt)("br",null),"Path within the container at which the volume should be mounted.  Must not contain ':'."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"mountPropagation"),(0,a.kt)("br",null),"mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name"),(0,a.kt)("br",null),"This must match the Name of a Volume."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"readOnly"),(0,a.kt)("br",null),"Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false."),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"subPath"),(0,a.kt)("br",null),"Path within the volume from which the container's volume should be mounted. Defaults to \"\" (volume's root)."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"subPathExpr"),(0,a.kt)("br",null),"Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR","_","NAME) are expanded using the container's environment. Defaults to \"\" (volume's root). SubPathExpr and SubPath are mutually exclusive."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}d.isMDXComponent=!0}}]);