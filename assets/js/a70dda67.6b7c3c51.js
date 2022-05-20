"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1974],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(r),c=o,k=m["".concat(s,".").concat(c)]||m[c]||p[c]||a;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7517:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return d},toc:function(){return p},default:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={},s="rbd_volume_source",u={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_rbd_volume_source",id:"reference/model/kusion_kubernetes/api/core/v1/doc_rbd_volume_source",title:"rbd_volume_source",description:"Source: base/pkg/kusionkubernetes/api/core/v1/rbdvolumesource.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_rbd_volume_source.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_rbd_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_rbd_volume_source",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_rbd_volume_source.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653043736,formattedLastUpdatedAt:"2022/5/20",frontMatter:{},sidebar:"reference",previous:{title:"quobyte_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_quobyte_volume_source"},next:{title:"resource_field_selector",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_resource_field_selector"}},d={},p=[{value:"Schema RBDVolumeSource",id:"schema-rbdvolumesource",level:2},{value:"Attributes",id:"attributes",level:3}],m={toc:p};function c(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rbd_volume_source"},"rbd_volume_source"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/rbd_volume_source.k"},"base/pkg/kusion_kubernetes/api/core/v1/rbd_volume_source.k")),(0,a.kt)("p",null,"This is the rbd","_","volume","_","source module in kusion","_","kubernetes.api.core.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-rbdvolumesource"},"Schema RBDVolumeSource"),(0,a.kt)("p",null,"Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"fsType"),(0,a.kt)("br",null),'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: ',(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#rbd"},"https://kubernetes.io/docs/concepts/storage/volumes\\#rbd")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"image"),(0,a.kt)("br",null),"The rados image name. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/rbd/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/rbd/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"keyring"),(0,a.kt)("br",null),"Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/rbd/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/rbd/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"monitors"),(0,a.kt)("br",null),"A collection of Ceph monitors. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/rbd/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/rbd/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"pool"),(0,a.kt)("br",null),"The rados pool name. Default is rbd. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/rbd/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/rbd/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"readOnly"),(0,a.kt)("br",null),"ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/rbd/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/rbd/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"user"),(0,a.kt)("br",null),"The rados user name. Default is admin. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/rbd/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/rbd/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"secretRef"),(0,a.kt)("br",null),"SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://examples.k8s.io/volumes/rbd/README.md%5C#how-to-use-it"},"https://examples.k8s.io/volumes/rbd/README.md\\#how-to-use-it")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"doc_local_object_reference#schema-localobjectreference"},"LocalObjectReference")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);