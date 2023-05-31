"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2699],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),i=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(r),h=n,d=m["".concat(u,".").concat(h)]||m[h]||c[h]||a;return r?o.createElement(d,s(s({ref:t},p),{},{components:r})):o.createElement(d,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={},s="host_path_volume_source",l={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_host_path_volume_source",id:"reference/model/kusion_kubernetes/api/core/v1/doc_host_path_volume_source",title:"host_path_volume_source",description:"Source: base/pkg/kusionkubernetes/api/core/v1/hostpathvolumesource.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_host_path_volume_source.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_host_path_volume_source",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_host_path_volume_source",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_host_path_volume_source.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685503692,formattedLastUpdatedAt:"2023/5/31",frontMatter:{},sidebar:"reference",previous:{title:"host_alias",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_host_alias"},next:{title:"http_get_action",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_http_get_action"}},u={},i=[{value:"Schema HostPathVolumeSource",id:"schema-hostpathvolumesource",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"host_path_volume_source"},"host_path_volume_source"),(0,n.kt)("p",null,"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/host_path_volume_source.k"},"base/pkg/kusion_kubernetes/api/core/v1/host_path_volume_source.k")),(0,n.kt)("p",null,"This is the host","_","path","_","volume","_","source module in kusion","_","kubernetes.api.core.v1 package.",(0,n.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,n.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,n.kt)("h2",{id:"schema-hostpathvolumesource"},"Schema HostPathVolumeSource"),(0,n.kt)("p",null,"Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling."),(0,n.kt)("h3",{id:"attributes"},"Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"path"),(0,n.kt)("br",null),"Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: ",(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#hostpath"},"https://kubernetes.io/docs/concepts/storage/volumes\\#hostpath")),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"required"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"type"),(0,n.kt)("br",null),'Type for HostPath Volume Defaults to "" More info: ',(0,n.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#hostpath"},"https://kubernetes.io/docs/concepts/storage/volumes\\#hostpath")),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);