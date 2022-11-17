"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7389],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),s=d(a),k=l,N=s["".concat(i,".").concat(k)]||s[k]||p[k]||r;return a?n.createElement(N,o(o({ref:e},m),{},{components:a})):n.createElement(N,o({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=s;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,o[1]=u;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},51062:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={},o="volume",u={unversionedId:"reference/model/kusion_models/kube/frontend/volume/doc_volume",id:"reference/model/kusion_models/kube/frontend/volume/doc_volume",title:"volume",description:"Source: base/pkg/kusionmodels/kube/frontend/volume/volume.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/volume/doc_volume.md",sourceDirName:"reference/model/kusion_models/kube/frontend/volume",slug:"/reference/model/kusion_models/kube/frontend/volume/doc_volume",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/volume/doc_volume",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/volume/doc_volume.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1668663206,formattedLastUpdatedAt:"2022/11/17",frontMatter:{},sidebar:"reference",previous:{title:"scheduling_strategy",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy"},next:{title:"Overview",permalink:"/zh-CN/docs/reference/konfig/overview"}},i={},d=[{value:"Schema Volume",id:"schema-volume",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Schema Mount",id:"schema-mount",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Schema EmptyDir",id:"schema-emptydir",level:2},{value:"Attributes",id:"attributes-2",level:3},{value:"Schema Secret",id:"schema-secret",level:2},{value:"Attributes",id:"attributes-3",level:3},{value:"Schema ConfigMap",id:"schema-configmap",level:2},{value:"Attributes",id:"attributes-4",level:3},{value:"Schema FlexVolume",id:"schema-flexvolume",level:2},{value:"Attributes",id:"attributes-5",level:3},{value:"Schema HostPath",id:"schema-hostpath",level:2},{value:"Attributes",id:"attributes-6",level:3},{value:"Schema DownwardAPI",id:"schema-downwardapi",level:2},{value:"Attributes",id:"attributes-7",level:3},{value:"Schema CSI",id:"schema-csi",level:2},{value:"Attributes",id:"attributes-8",level:3}],m={toc:d};function p(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"volume"},"volume"),(0,l.kt)("p",null,"Source: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/volume/volume.k"},"base/pkg/kusion_models/kube/frontend/volume/volume.k")),(0,l.kt)("h2",{id:"schema-volume"},"Schema Volume"),(0,l.kt)("p",null,"Volume represents a named volume and corresponding mounts in containers."),(0,l.kt)("h3",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name"),(0,l.kt)("br",null),"Volume's name. Must be a DNS","_","LABEL and unique within the pod. ",(0,l.kt)("br",null),"More info: ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/%5C#names"},"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/\\#names")),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"volumeSource"),(0,l.kt)("br",null),"VolumeSource represents the location and type of the mounted volume."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#schema-emptydir"},"volume.EmptyDir")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"#schema-secret"},"volume.Secret")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"#schema-configmap"},"volume.ConfigMap")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"#schema-flexvolume"},"volume.FlexVolume")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"#schema-hostpath"},"volume.HostPath")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"#schema-downwardapi"},"volume.DownwardAPI")," ","|"," ",(0,l.kt)("a",{parentName:"td",href:"#schema-csi"},"volume.CSI")),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mounts"),(0,l.kt)("br",null),"Volumes to mount into the container's filesystem."),(0,l.kt)("td",{parentName:"tr",align:null},"[",(0,l.kt)("a",{parentName:"td",href:"#schema-mount"},"volume.Mount"),"]"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'volume = v.Volume {\n    name = "kubeconfig"\n    volumeSource = v.Secret {\n        secretName = "kubeconfig"\n        defaultMode =  420\n    }\n    mounts = [\n        v.Mount {\n            path = "/etc/kubernetes/kubeconfig"\n            readOnly = true\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"schema-mount"},"Schema Mount"),(0,l.kt)("p",null,"Mount represents a mounting of a Volume within a container."),(0,l.kt)("h3",{id:"attributes-1"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"container"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Name of container to mount, ","*"," represents all containers."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"*"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"path"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"Path within the container at which the volume should be mounted."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"subPath"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"Path within the volume from which the container's volume should be mounted."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"readOnly"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"Mounted read-only if true, read-write otherwise."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h2",{id:"schema-emptydir"},"Schema EmptyDir"),(0,l.kt)("p",null,"EmptyDir represents a temporary directory that shares a pod's lifetime."),(0,l.kt)("h3",{id:"attributes-2"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"medium"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"What type of storage medium should back this directory."),(0,l.kt)("td",{parentName:"tr",align:null},'"" ',"|",' "Memory"'),(0,l.kt)("td",{parentName:"tr",align:null},'""'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"sizeLimit"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Total amount of local storage required for this EmptyDir volume."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h2",{id:"schema-secret"},"Schema Secret"),(0,l.kt)("p",null,"Secret represents a secret that should populate this volume."),(0,l.kt)("h3",{id:"attributes-3"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"secretName"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Name of the secret in the pod's namespace to use."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"items"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Key-value pairs projected into the volume."),(0,l.kt)("td",{parentName:"tr",align:null},"[{str: str}]"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"defaultMode"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Mode bits used to set permissions on created files by default."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h2",{id:"schema-configmap"},"Schema ConfigMap"),(0,l.kt)("p",null,"ConfigMap represents a secret that should populate this volume."),(0,l.kt)("h3",{id:"attributes-4"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Name of the configMap in the pod's namespace to use."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"items"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Key-value pairs projected into the volume."),(0,l.kt)("td",{parentName:"tr",align:null},"[{str: str}]"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"defaultMode"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Mode bits used to set permissions on created files by default."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h2",{id:"schema-flexvolume"},"Schema FlexVolume"),(0,l.kt)("p",null,"FlexVolume represents a secret that should populate this volume."),(0,l.kt)("h3",{id:"attributes-5"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"driver"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Driver is the name of the driver to use for this volume."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"fsType"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". ',(0,l.kt)("br",null),"The default filesystem depends on FlexVolume script."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"options"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Extra command options if any."),(0,l.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"readOnly"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h2",{id:"schema-hostpath"},"Schema HostPath"),(0,l.kt)("p",null,"HostPath represents a secret that should populate this volume."),(0,l.kt)("h3",{id:"attributes-6"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"path"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. ",(0,l.kt)("br",null),"More info: ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#hostpath"},"https://kubernetes.io/docs/concepts/storage/volumes\\#hostpath")),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"type"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),'Type for HostPath Volume Defaults to "" ',(0,l.kt)("br",null),"More info: ",(0,l.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#hostpath"},"https://kubernetes.io/docs/concepts/storage/volumes\\#hostpath")),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h2",{id:"schema-downwardapi"},"Schema DownwardAPI"),(0,l.kt)("p",null,"DownwardAPI represents a secret that should populate this volume."),(0,l.kt)("h3",{id:"attributes-7"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"defaultMode"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Mode bits used to set permissions on created files by default."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"items"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Items is a list of downward API volume file"),(0,l.kt)("td",{parentName:"tr",align:null},"[{str: any}]"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h2",{id:"schema-csi"},"Schema CSI"),(0,l.kt)("p",null,"CSI (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature)."),(0,l.kt)("h3",{id:"attributes-8"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"driver"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Driver is the name of the driver to use for this volume."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"fsType"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". ',(0,l.kt)("br",null),"The default filesystem depends on FlexVolume script."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"readOnly"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"volumeAttributes"),(0,l.kt)("br",null),"A Pod-level attribute.",(0,l.kt)("br",null),"Extra command options if any."),(0,l.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);