"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},l="aws_elastic_block_store_volume_source",s={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_aws_elastic_block_store_volume_source",id:"reference/model/kusion_kubernetes/api/core/v1/doc_aws_elastic_block_store_volume_source",title:"aws_elastic_block_store_volume_source",description:"Source: base/pkg/kusionkubernetes/api/core/v1/awselasticblockstorevolumesource.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_aws_elastic_block_store_volume_source.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_aws_elastic_block_store_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_aws_elastic_block_store_volume_source",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_aws_elastic_block_store_volume_source.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1672715784,formattedLastUpdatedAt:"1/3/2023",frontMatter:{},sidebar:"reference",previous:{title:"affinity",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_affinity"},next:{title:"azure_disk_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_azure_disk_volume_source"}},i={},u=[{value:"Schema AWSElasticBlockStoreVolumeSource",id:"schema-awselasticblockstorevolumesource",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws_elastic_block_store_volume_source"},"aws_elastic_block_store_volume_source"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/aws_elastic_block_store_volume_source.k"},"base/pkg/kusion_kubernetes/api/core/v1/aws_elastic_block_store_volume_source.k")),(0,o.kt)("p",null,"This is the aws","_","elastic","_","block","_","store","_","volume","_","source module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-awselasticblockstorevolumesource"},"Schema AWSElasticBlockStoreVolumeSource"),(0,o.kt)("p",null,"Represents a Persistent Disk resource in AWS.",(0,o.kt)("br",null),"An AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"fsType"),(0,o.kt)("br",null),'     Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: ',(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#awselasticblockstore"},"https://kubernetes.io/docs/concepts/storage/volumes\\#awselasticblockstore"),(0,o.kt)("br",null),"partition : int, default is Undefined, optional",(0,o.kt)("br",null),'     The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).',(0,o.kt)("br",null),"readOnly : bool, default is Undefined, optional",(0,o.kt)("br",null),'     Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: ',(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#awselasticblockstore"},"https://kubernetes.io/docs/concepts/storage/volumes\\#awselasticblockstore"),(0,o.kt)("br",null),"volumeID : str, default is Undefined, required",(0,o.kt)("br",null),"     Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/volumes%5C#awselasticblockstore"},"https://kubernetes.io/docs/concepts/storage/volumes\\#awselasticblockstore")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"partition")),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"readOnly")),(0,o.kt)("td",{parentName:"tr",align:null},"bool"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"volumeID")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))))))}p.isMDXComponent=!0}}]);