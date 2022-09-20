"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},o="persistent_volume_claim_spec",i={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_spec",id:"reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_spec",title:"persistent_volume_claim_spec",description:"Source: base/pkg/kusionkubernetes/api/core/v1/persistentvolumeclaimspec.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_spec.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_spec",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_spec",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_spec.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663641091,formattedLastUpdatedAt:"2022/9/20",frontMatter:{},sidebar:"reference",previous:{title:"persistent_volume_claim",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim"},next:{title:"persistent_volume_claim_template",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_persistent_volume_claim_template"}},s={},c=[{value:"Schema PersistentVolumeClaimSpec",id:"schema-persistentvolumeclaimspec",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"persistent_volume_claim_spec"},"persistent_volume_claim_spec"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/persistent_volume_claim_spec.k"},"base/pkg/kusion_kubernetes/api/core/v1/persistent_volume_claim_spec.k")),(0,r.kt)("p",null,"This is the persistent","_","volume","_","claim","_","spec module in kusion","_","kubernetes.api.core.v1 package.",(0,r.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,r.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,r.kt)("h2",{id:"schema-persistentvolumeclaimspec"},"Schema PersistentVolumeClaimSpec"),(0,r.kt)("p",null,"PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes"),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"accessModes"),(0,r.kt)("br",null),"      AccessModes contains the desired access modes the volume should have. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes%5C#access-modes-1"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes\\#access-modes-1"),(0,r.kt)("br",null)," storageClassName : str, default is Undefined, optional",(0,r.kt)("br",null),"      Name of the StorageClass required by the claim. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes%5C#class-1"},"https://kubernetes.io/docs/concepts/storage/persistent-volumes\\#class-1"),(0,r.kt)("br",null)," volumeMode : str, default is Undefined, optional",(0,r.kt)("br",null),"      volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.",(0,r.kt)("br",null)," volumeName : str, default is Undefined, optional",(0,r.kt)("br",null),"      VolumeName is the binding reference to the PersistentVolume backing this claim.",(0,r.kt)("br",null)," dataSource : TypedLocalObjectReference, default is Undefined, optional",(0,r.kt)("br",null),"      This field can be used to specify either: ","*"," An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) ","*"," An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.",(0,r.kt)("br",null)," dataSourceRef : TypedLocalObjectReference, default is Undefined, optional",(0,r.kt)("br",null),"      Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: ","*"," While DataSource only allows two specific types of objects, DataSourceRef",(0,r.kt)("br",null),"allows any non-core object, as well as PersistentVolumeClaim objects."),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"storageClassName")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"volumeMode")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"volumeName")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"dataSource")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_typed_local_object_reference#schema-typedlocalobjectreference"},"TypedLocalObjectReference")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"dataSourceRef")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_typed_local_object_reference#schema-typedlocalobjectreference"},"TypedLocalObjectReference")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"resources")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_resource_requirements#schema-resourcerequirements"},"ResourceRequirements")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"selector")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_label_selector#schema-labelselector"},"apis.LabelSelector")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))))}u.isMDXComponent=!0}}]);