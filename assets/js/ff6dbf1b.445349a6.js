"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8576],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},933:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},u="csi_volume_source",c={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_csi_volume_source",id:"reference/model/kusion_kubernetes/api/core/v1/doc_csi_volume_source",title:"csi_volume_source",description:"Source: base/pkg/kusionkubernetes/api/core/v1/csivolumesource.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_csi_volume_source.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_csi_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_csi_volume_source",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_csi_volume_source.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1652084378,formattedLastUpdatedAt:"2022/5/9",frontMatter:{},sidebar:"reference",previous:{title:"container_port",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_container_port"},next:{title:"downward_api_projection",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_downward_api_projection"}},s={},p=[{value:"Schema CSIVolumeSource",id:"schema-csivolumesource",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"csi_volume_source"},"csi_volume_source"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/csi_volume_source.k"},"base/pkg/kusion_kubernetes/api/core/v1/csi_volume_source.k")),(0,a.kt)("p",null,"This is the csi","_","volume","_","source module in kusion","_","kubernetes.api.core.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-csivolumesource"},"Schema CSIVolumeSource"),(0,a.kt)("p",null,"Represents a source location of a volume to mount, managed by an external CSI driver"),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"driver"),(0,a.kt)("br",null),"Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"fsType"),(0,a.kt)("br",null),'Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.'),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"readOnly"),(0,a.kt)("br",null),"Specifies a read-only configuration for the volume. Defaults to false (read/write)."),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"volumeAttributes"),(0,a.kt)("br",null),"VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values."),(0,a.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"nodePublishSecretRef"),(0,a.kt)("br",null),"NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"doc_local_object_reference#schema-localobjectreference"},"LocalObjectReference")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}m.isMDXComponent=!0}}]);