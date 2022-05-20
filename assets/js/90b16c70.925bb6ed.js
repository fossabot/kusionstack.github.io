"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4454],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6371:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return l},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},s="node",u={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_node",id:"reference/model/kusion_kubernetes/api/core/v1/doc_node",title:"node",description:"Source: base/pkg/kusionkubernetes/api/core/v1/node.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_node",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653039356,formattedLastUpdatedAt:"2022/5/20",frontMatter:{},sidebar:"reference",previous:{title:"nfs_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_nfs_volume_source"},next:{title:"node_affinity",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_affinity"}},l={},d=[{value:"Schema Node",id:"schema-node",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node"},"node"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/node.k"},"base/pkg/kusion_kubernetes/api/core/v1/node.k")),(0,o.kt)("p",null,"This is the node module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-node"},"Schema Node"),(0,o.kt)("p",null,"Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd)."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"apiVersion"),(0,o.kt)("br",null),"APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: ",(0,o.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#resources"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#resources")),(0,o.kt)("td",{parentName:"tr",align:null},'"v1"'),(0,o.kt)("td",{parentName:"tr",align:null},'"v1"'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"kind"),(0,o.kt)("br",null),"Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: ",(0,o.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#types-kinds"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#types-kinds")),(0,o.kt)("td",{parentName:"tr",align:null},'"Node"'),(0,o.kt)("td",{parentName:"tr",align:null},'"Node"'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"metadata"),(0,o.kt)("br",null),"Standard object's metadata. More info: ",(0,o.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#metadata"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#metadata")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_object_meta#schema-objectmeta"},"apis.ObjectMeta")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"spec"),(0,o.kt)("br",null),"Spec defines the behavior of a node. ",(0,o.kt)("a",{parentName:"td",href:"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md%5C#spec-and-status"},"https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md\\#spec-and-status")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_node_spec#schema-nodespec"},"NodeSpec")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}m.isMDXComponent=!0}}]);