"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="lifecycle",c={unversionedId:"reference/modules/developer-schemas/internal/container/lifecycle/lifecycle",id:"version-v0.13/reference/modules/developer-schemas/internal/container/lifecycle/lifecycle",title:"lifecycle",description:"Schema Lifecycle",source:"@site/docs_versioned_docs/version-v0.13/6-reference/2-modules/1-developer-schemas/internal/container/lifecycle/lifecycle.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/internal/container/lifecycle",slug:"/reference/modules/developer-schemas/internal/container/lifecycle/",permalink:"/zh/docs/reference/modules/developer-schemas/internal/container/lifecycle/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.13/6-reference/2-modules/1-developer-schemas/internal/container/lifecycle/lifecycle.md",tags:[],version:"v0.13",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"container",permalink:"/zh/docs/reference/modules/developer-schemas/internal/container/"},next:{title:"probe",permalink:"/zh/docs/reference/modules/developer-schemas/internal/container/probe/"}},i={},s=[{value:"Schema Lifecycle",id:"schema-lifecycle",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lifecycle"},"lifecycle"),(0,a.kt)("h2",{id:"schema-lifecycle"},"Schema Lifecycle"),(0,a.kt)("p",null,"Lifecycle describes actions that the management system should take in response",(0,a.kt)("br",null),"to container lifecycle events."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"postStart")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The action to be taken after a container is created.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"},"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"preStop")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The action to be taken before a container is terminated due to an API request or",(0,a.kt)("br",null),"management event such as liveness/startup probe failure, preemption, resource contention, etc.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"},"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"))))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container.probe as p\nimport kam.workload.container.lifecycle as lc\n\nlifecycleHook = lc.Lifecycle {\n    preStop: p.Exec {\n        command: ["preStop.sh"]\n    }\n    postStart: p.Http {\n        url: "http://localhost:80"\n    }\n}\n')))}u.isMDXComponent=!0}}]);