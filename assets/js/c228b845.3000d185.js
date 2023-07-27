"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,k=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const s={},a="gce_persistent_disk_volume_source",i={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source",id:"reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source",title:"gce_persistent_disk_volume_source",description:"Source: base/pkg/kusionkubernetes/api/core/v1/gcepersistentdiskvolumesource.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1690428760,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{},sidebar:"reference",previous:{title:"flocker_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_flocker_volume_source"},next:{title:"git_repo_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_git_repo_volume_source"}},l={},u=[{value:"Schema GCEPersistentDiskVolumeSource",id:"schema-gcepersistentdiskvolumesource",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gce_persistent_disk_volume_source"},"gce_persistent_disk_volume_source"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/gce_persistent_disk_volume_source.k"},"base/pkg/kusion_kubernetes/api/core/v1/gce_persistent_disk_volume_source.k")),(0,o.kt)("p",null,"This is the gce","_","persistent","_","disk","_","volume","_","source module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-gcepersistentdiskvolumesource"},"Schema GCEPersistentDiskVolumeSource"),(0,o.kt)("p",null,"Represents a Persistent Disk resource in Google Compute Engine.",(0,o.kt)("br",null),"A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"fsType"),(0,o.kt)("br",null),'     Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: ',(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#gcepersistentdisk"},"https://kubernetes.io/docs/concepts/storage/volumes\\#gcepersistentdisk"),(0,o.kt)("br",null),"partition : int, default is Undefined, optional",(0,o.kt)("br",null),'     The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: ',(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#gcepersistentdisk"},"https://kubernetes.io/docs/concepts/storage/volumes\\#gcepersistentdisk"),(0,o.kt)("br",null),"pdName : str, default is Undefined, required",(0,o.kt)("br",null),"     Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#gcepersistentdisk"},"https://kubernetes.io/docs/concepts/storage/volumes\\#gcepersistentdisk"),(0,o.kt)("br",null),"readOnly : bool, default is Undefined, optional",(0,o.kt)("br",null),"     ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#gcepersistentdisk"},"https://kubernetes.io/docs/concepts/storage/volumes\\#gcepersistentdisk")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"partition")),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"pdName")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"readOnly")),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);