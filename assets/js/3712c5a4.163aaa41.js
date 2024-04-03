"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l="lifecycle",c={unversionedId:"kusion/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle",id:"version-v0.9/kusion/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle",title:"lifecycle",description:"Schema Lifecycle",source:"@site/versioned_docs/version-v0.9/kusion/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle.md",sourceDirName:"kusion/reference/model/catalog_models/internal/container/lifecycle",slug:"/kusion/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle",permalink:"/docs/v0.9/kusion/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle.md",tags:[],version:"v0.9",lastUpdatedBy:"elliotxx",lastUpdatedAt:1712142954,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"container",permalink:"/docs/v0.9/kusion/reference/model/catalog_models/internal/container/doc_container"},next:{title:"probe",permalink:"/docs/v0.9/kusion/reference/model/catalog_models/internal/container/probe/doc_probe"}},i={},s=[{value:"Schema Lifecycle",id:"schema-lifecycle",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lifecycle"},"lifecycle"),(0,o.kt)("h2",{id:"schema-lifecycle"},"Schema Lifecycle"),(0,o.kt)("p",null,"Lifecycle describes actions that the management system should take in response",(0,o.kt)("br",null),"to container lifecycle events."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"preStop"),(0,o.kt)("br",null),"The action to be taken before a container is terminated due to an API request or",(0,o.kt)("br",null),"management event such as liveness/startup probe failure, preemption, resource contention, etc.",(0,o.kt)("br",null),"More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/%5C#container-hooks"},"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/\\#container-hooks")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-exec"},"probe.Exec")," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-http"},"probe.Http")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"postStart"),(0,o.kt)("br",null),"The action to be taken after a container is created.",(0,o.kt)("br",null),"More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/%5C#container-hooks"},"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/\\#container-hooks")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-exec"},"probe.Exec")," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-http"},"probe.Http")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.container.lifecycle as lc\n\nlifecycleHook = lc.Lifecycle {\n    preStop: p.Exec {\n        command: ["preStop.sh"]\n    }\n    postStart: p.Http {\n        url: "http://localhost:80"\n    }\n}\n')))}d.isMDXComponent=!0}}]);