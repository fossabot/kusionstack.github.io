"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,k=m["".concat(s,".").concat(p)]||m[p]||c[p]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},l="metadata",i={unversionedId:"reference/model/kusion_models/kube/frontend/common/doc_metadata",id:"reference/model/kusion_models/kube/frontend/common/doc_metadata",title:"metadata",description:"Source: base/pkg/kusionmodels/kube/frontend/common/metadata.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/common/doc_metadata.md",sourceDirName:"reference/model/kusion_models/kube/frontend/common",slug:"/reference/model/kusion_models/kube/frontend/common/doc_metadata",permalink:"/docs/reference/model/kusion_models/kube/frontend/common/doc_metadata",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/common/doc_metadata.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663730210,formattedLastUpdatedAt:"9/21/2022",frontMatter:{},sidebar:"reference",previous:{title:"owner_reference",permalink:"/docs/reference/model/kusion_kubernetes/apimachinery/apis/doc_owner_reference"},next:{title:"configmap",permalink:"/docs/reference/model/kusion_models/kube/frontend/configmap/doc_configmap"}},s={},u=[{value:"Schema Metadata",id:"schema-metadata",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"metadata"},"metadata"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/common/metadata.k"},"base/pkg/kusion_models/kube/frontend/common/metadata.k")),(0,a.kt)("h2",{id:"schema-metadata"},"Schema Metadata"),(0,a.kt)("p",null,"Metadata is the base schema of all models, which contains data",(0,a.kt)("br",null),"that helps uniquely identify the object."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name"),(0,a.kt)("br",null),"The name of the resource.",(0,a.kt)("br",null),"Name must be unique within a namespace. It's required when creating",(0,a.kt)("br",null),"resources, although some resources may allow a client to request the",(0,a.kt)("br",null),"generation of an appropriate name automatically.",(0,a.kt)("br",null),"Name is primarily intended for creation idempotence and configuration",(0,a.kt)("br",null),"definition. Cannot be updated. More info:",(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"td",href:"http://kubernetes.io/docs/user-guide/identifiers%5C#names"},"http://kubernetes.io/docs/user-guide/identifiers\\#names")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"labels"),(0,a.kt)("br",null),"Labels is a map of string keys and values that can be used to",(0,a.kt)("br",null),"organize and categorize (scope and select) objects.",(0,a.kt)("br",null),"May match selectors of replication controllers and services.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"http://kubernetes.io/docs/user-guide/labels"},"http://kubernetes.io/docs/user-guide/labels")),(0,a.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"annotations"),(0,a.kt)("br",null),"Annotations is an unstructured key value map stored with a",(0,a.kt)("br",null),"resource that may be set by external tools to store and retrieve",(0,a.kt)("br",null),"arbitrary metadata. They are not queryable and should be preserved",(0,a.kt)("br",null),"when modifying objects.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"http://kubernetes.io/docs/user-guide/annotations"},"http://kubernetes.io/docs/user-guide/annotations")),(0,a.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"namespace"),(0,a.kt)("br",null),"Namespaces are intended for use in environments with many users spread",(0,a.kt)("br",null),"across multiple teams, or projects.",(0,a.kt)("br",null),"For clusters with a few to tens of users, you should not need to create",(0,a.kt)("br",null),"or think about namespaces at all. Start using namespaces when you need the features they provide.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);