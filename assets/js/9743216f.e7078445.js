"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},l="ceph_fs_volume_source",s={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_ceph_fs_volume_source",id:"reference/model/kusion_kubernetes/api/core/v1/doc_ceph_fs_volume_source",title:"ceph_fs_volume_source",description:"Source: base/pkg/kusionkubernetes/api/core/v1/cephfsvolumesource.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_ceph_fs_volume_source.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_ceph_fs_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_ceph_fs_volume_source",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_ceph_fs_volume_source.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1694145554,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{},sidebar:"reference",previous:{title:"capabilities",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_capabilities"},next:{title:"cinder_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_cinder_volume_source"}},i={},u=[{value:"Schema CephFSVolumeSource",id:"schema-cephfsvolumesource",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ceph_fs_volume_source"},"ceph_fs_volume_source"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/ceph_fs_volume_source.k"},"base/pkg/kusion_kubernetes/api/core/v1/ceph_fs_volume_source.k")),(0,a.kt)("p",null,"This is the ceph","_","fs","_","volume","_","source module in kusion","_","kubernetes.api.core.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-cephfsvolumesource"},"Schema CephFSVolumeSource"),(0,a.kt)("p",null,"Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"monitors"),(0,a.kt)("br",null),"Required: Monitors is a collection of Ceph monitors More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/cephfs/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/cephfs/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"path"),(0,a.kt)("br",null),"Optional: Used as the mounted root, rather than the full Ceph tree, default is /"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"readOnly"),(0,a.kt)("br",null),"Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/cephfs/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/cephfs/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"secretFile"),(0,a.kt)("br",null),"Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/cephfs/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/cephfs/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"user"),(0,a.kt)("br",null),"Optional: User is the rados user name, default is admin More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/cephfs/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/cephfs/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"secretRef"),(0,a.kt)("br",null),"Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/cephfs/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/cephfs/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"doc_local_object_reference#schema-localobjectreference"},"LocalObjectReference")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);