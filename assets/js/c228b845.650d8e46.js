"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4710],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,k=d["".concat(u,".").concat(m)]||d[m]||p[m]||s;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59545:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],a={},u="gce_persistent_disk_volume_source",l={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source",id:"reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source",title:"gce_persistent_disk_volume_source",description:"Source: base/pkg/kusionkubernetes/api/core/v1/gcepersistentdiskvolumesource.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_gce_persistent_disk_volume_source.md",tags:[],version:"current",lastUpdatedBy:"\u6768\u82f1\u660e",lastUpdatedAt:1659932183,formattedLastUpdatedAt:"2022/8/8",frontMatter:{},sidebar:"reference",previous:{title:"flocker_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_flocker_volume_source"},next:{title:"git_repo_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_git_repo_volume_source"}},c={},p=[{value:"Schema GCEPersistentDiskVolumeSource",id:"schema-gcepersistentdiskvolumesource",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"gce_persistent_disk_volume_source"},"gce_persistent_disk_volume_source"),(0,s.kt)("p",null,"Source: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/gce_persistent_disk_volume_source.k"},"base/pkg/kusion_kubernetes/api/core/v1/gce_persistent_disk_volume_source.k")),(0,s.kt)("p",null,"This is the gce","_","persistent","_","disk","_","volume","_","source module in kusion","_","kubernetes.api.core.v1 package.",(0,s.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,s.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,s.kt)("h2",{id:"schema-gcepersistentdiskvolumesource"},"Schema GCEPersistentDiskVolumeSource"),(0,s.kt)("p",null,"Represents a Persistent Disk resource in Google Compute Engine.",(0,s.kt)("br",null),"A GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling."),(0,s.kt)("h3",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"fsType"),(0,s.kt)("br",null),'     Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: ',(0,s.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#gcepersistentdisk"},"https://kubernetes.io/docs/concepts/storage/volumes\\#gcepersistentdisk"),(0,s.kt)("br",null),"partition : int, default is Undefined, optional",(0,s.kt)("br",null),'     The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: ',(0,s.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#gcepersistentdisk"},"https://kubernetes.io/docs/concepts/storage/volumes\\#gcepersistentdisk"),(0,s.kt)("br",null),"pdName : str, default is Undefined, required",(0,s.kt)("br",null),"     Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: ",(0,s.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#gcepersistentdisk"},"https://kubernetes.io/docs/concepts/storage/volumes\\#gcepersistentdisk"),(0,s.kt)("br",null),"readOnly : bool, default is Undefined, optional",(0,s.kt)("br",null),"     ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: ",(0,s.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#gcepersistentdisk"},"https://kubernetes.io/docs/concepts/storage/volumes\\#gcepersistentdisk")),(0,s.kt)("td",{parentName:"tr",align:null},"str"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"partition")),(0,s.kt)("td",{parentName:"tr",align:null},"int"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"pdName")),(0,s.kt)("td",{parentName:"tr",align:null},"str"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"required"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"readOnly")),(0,s.kt)("td",{parentName:"tr",align:null},"bool"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")))))}m.isMDXComponent=!0}}]);