"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6088],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),s=o,v=m["".concat(l,".").concat(s)]||m[s]||d[s]||a;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86683:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={},l="volume_device",c={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_volume_device",id:"reference/model/kusion_kubernetes/api/core/v1/doc_volume_device",title:"volume_device",description:"Source: base/pkg/kusionkubernetes/api/core/v1/volumedevice.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_device.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_volume_device",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_device",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_device.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1661751584,formattedLastUpdatedAt:"2022/8/29",frontMatter:{},sidebar:"reference",previous:{title:"volume",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume"},next:{title:"volume_mount",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_volume_mount"}},p={},d=[{value:"Schema VolumeDevice",id:"schema-volumedevice",level:2},{value:"Attributes",id:"attributes",level:3}],m={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"volume_device"},"volume_device"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/volume_device.k"},"base/pkg/kusion_kubernetes/api/core/v1/volume_device.k")),(0,a.kt)("p",null,"This is the volume","_","device module in kusion","_","kubernetes.api.core.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-volumedevice"},"Schema VolumeDevice"),(0,a.kt)("p",null,"volumeDevice describes a mapping of a raw block device within a container."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"devicePath"),(0,a.kt)("br",null),"devicePath is the path inside of the container that the device will be mapped to."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name"),(0,a.kt)("br",null),"name must match the name of a persistentVolumeClaim in the pod"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))))))}s.isMDXComponent=!0}}]);