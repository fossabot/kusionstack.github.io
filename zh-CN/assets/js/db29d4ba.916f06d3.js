"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>s});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=o,k=d["".concat(c,".").concat(s)]||d[s]||m[s]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="volume_projection",l={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_volume_projection",id:"reference/model/kusion_kubernetes/api/core/v1/doc_volume_projection",title:"volume_projection",description:"Source: base/pkg/kusionkubernetes/api/core/v1/volumeprojection.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_projection.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_volume_projection",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_projection",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_projection.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1682392078,formattedLastUpdatedAt:"2023/4/25",frontMatter:{},sidebar:"reference",previous:{title:"volume_mount",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_mount"},next:{title:"vsphere_virtual_disk_volume_source",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_vsphere_virtual_disk_volume_source"}},c={},u=[{value:"Schema VolumeProjection",id:"schema-volumeprojection",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"volume_projection"},"volume_projection"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/volume_projection.k"},"base/pkg/kusion_kubernetes/api/core/v1/volume_projection.k")),(0,o.kt)("p",null,"This is the volume","_","projection module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-volumeprojection"},"Schema VolumeProjection"),(0,o.kt)("p",null,"Projection that may be projected along with other supported volume types"),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"configMap"),(0,o.kt)("br",null),"information about the configMap data to project"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_config_map_projection#schema-configmapprojection"},"ConfigMapProjection")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"downwardAPI"),(0,o.kt)("br",null),"information about the downwardAPI data to project"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_downward_api_projection#schema-downwardapiprojection"},"DownwardAPIProjection")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"secret"),(0,o.kt)("br",null),"information about the secret data to project"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_secret_projection#schema-secretprojection"},"SecretProjection")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"serviceAccountToken"),(0,o.kt)("br",null),"information about the serviceAccountToken data to project"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_service_account_token_projection#schema-serviceaccounttokenprojection"},"ServiceAccountTokenProjection")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}m.isMDXComponent=!0}}]);