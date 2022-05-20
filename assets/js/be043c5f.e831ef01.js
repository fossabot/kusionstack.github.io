"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4782],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=d(n),k=a,s=p["".concat(u,".").concat(k)]||p[k]||c[k]||l;return n?r.createElement(s,o(o({ref:t},m),{},{components:n})):r.createElement(s,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7513:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},assets:function(){return m},toc:function(){return c},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},u="env",d={unversionedId:"reference/model/kusion_models/kube/frontend/container/env/doc_env",id:"reference/model/kusion_models/kube/frontend/container/env/doc_env",title:"env",description:"Source: base/pkg/kusionmodels/kube/frontend/container/env/env.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/container/env/doc_env.md",sourceDirName:"reference/model/kusion_models/kube/frontend/container/env",slug:"/reference/model/kusion_models/kube/frontend/container/env/doc_env",permalink:"/docs/reference/model/kusion_models/kube/frontend/container/env/doc_env",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/container/env/doc_env.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653043736,formattedLastUpdatedAt:"2022/5/20",frontMatter:{},sidebar:"reference",previous:{title:"container",permalink:"/docs/reference/model/kusion_models/kube/frontend/container/doc_container"},next:{title:"lifecycle",permalink:"/docs/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle"}},m={},c=[{value:"Schema Env",id:"schema-env",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Schema EnvValueFrom",id:"schema-envvaluefrom",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Schema ObjectKeySelector",id:"schema-objectkeyselector",level:2},{value:"Attributes",id:"attributes-2",level:3},{value:"Schema ObjectFieldSelector",id:"schema-objectfieldselector",level:2},{value:"Attributes",id:"attributes-3",level:3},{value:"Schema EnvFromSource",id:"schema-envfromsource",level:2},{value:"Attributes",id:"attributes-4",level:3}],p={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"env"},"env"),(0,l.kt)("p",null,"Source: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/container/env/env.k"},"base/pkg/kusion_models/kube/frontend/container/env/env.k")),(0,l.kt)("h2",{id:"schema-env"},"Schema Env"),(0,l.kt)("p",null,"Env represents an environment variable present in a Container."),(0,l.kt)("h3",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"The env name. This must be a C","_","IDENTIFIER."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"value"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"The simple literal value."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"valueFrom"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"The ref source of this env."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#schema-envvaluefrom"},"EnvValueFrom")),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h2",{id:"schema-envvaluefrom"},"Schema EnvValueFrom"),(0,l.kt)("p",null,"EnvValueFrom represents the source of the value of an Env."),(0,l.kt)("h3",{id:"attributes-1"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"fieldRef"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"Selects a key of a field."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#schema-objectfieldselector"},"ObjectFieldSelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"configMapKeyRef"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"Selects a key of a ConfigMap."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#schema-objectkeyselector"},"ObjectKeySelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"secretKeyRef"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"Selects a key of a secret."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#schema-objectkeyselector"},"ObjectKeySelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))),(0,l.kt)("h2",{id:"schema-objectkeyselector"},"Schema ObjectKeySelector"),(0,l.kt)("p",null,"ObjectKeySelector contains enough information to let you locate the referenced object."),(0,l.kt)("h3",{id:"attributes-2"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"The name of object, typically a ConfigMap or Secret name."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"key"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"The key of the object to select from."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))))),(0,l.kt)("h2",{id:"schema-objectfieldselector"},"Schema ObjectFieldSelector"),(0,l.kt)("p",null,"ObjectFieldSelector contains enough information to let you select field of an object."),(0,l.kt)("h3",{id:"attributes-3"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"apiVersion"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"Version of the schema the FieldPath is written in terms of."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"fieldPath"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"Path of the field to select of an object."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))))),(0,l.kt)("h2",{id:"schema-envfromsource"},"Schema EnvFromSource"),(0,l.kt)("p",null,"EnvFromSource represents the source of a set of ConfigMaps or Secrets."),(0,l.kt)("h3",{id:"attributes-4"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"configMapRef"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"The ConfigMap name to select from."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"secretRef"),(0,l.kt)("br",null),"A Container-level attribute.",(0,l.kt)("br",null),"The Secret name to select from."),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")))))}k.isMDXComponent=!0}}]);