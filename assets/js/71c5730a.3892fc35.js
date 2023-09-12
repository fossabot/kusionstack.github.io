"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,u=m["".concat(i,".").concat(f)]||m[f]||d[f]||o;return n?r.createElement(u,c(c({ref:t},s),{},{components:n})):r.createElement(u,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},c="lifecycle",l={unversionedId:"reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle",id:"reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle",title:"lifecycle",description:"Schema Lifecycle",source:"@site/docs/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle.md",sourceDirName:"reference/model/catalog_models/internal/container/lifecycle",slug:"/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle",permalink:"/docs/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1694522671,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{},sidebar:"reference",previous:{title:"container",permalink:"/docs/reference/model/catalog_models/internal/container/doc_container"},next:{title:"probe",permalink:"/docs/reference/model/catalog_models/internal/container/probe/doc_probe"}},i={},p=[{value:"Schema Lifecycle",id:"schema-lifecycle",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lifecycle"},"lifecycle"),(0,a.kt)("h2",{id:"schema-lifecycle"},"Schema Lifecycle"),(0,a.kt)("p",null,"Lifecycle describes actions that the management system should take in response",(0,a.kt)("br",null),"to container lifecycle events."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"preStop"),(0,a.kt)("br",null),"The action to be taken before a container is terminated due to an API request or",(0,a.kt)("br",null),"management event such as liveness/startup probe failure, preemption, resource contention, etc.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/%5C#container-hooks"},"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/\\#container-hooks")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-exec"},"probe.Exec")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-http"},"probe.Http")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"postStart"),(0,a.kt)("br",null),"The action to be taken after a container is created.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/%5C#container-hooks"},"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/\\#container-hooks")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-exec"},"probe.Exec")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-http"},"probe.Http")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.container.lifecycle as lc\n\nlifecycleHook = lc.Lifecycle {\n    preStop: p.Exec {\n        command: ["preStop.sh"]\n    }\n    postStart: p.Http {\n        url: "http://localhost:80"\n    }\n}\n')))}d.isMDXComponent=!0}}]);