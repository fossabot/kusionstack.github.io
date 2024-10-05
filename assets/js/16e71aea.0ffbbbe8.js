"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="appconfiguration",l={unversionedId:"reference/modules/developer-schemas/app-configuration",id:"version-v0.12/reference/modules/developer-schemas/app-configuration",title:"appconfiguration",description:"Schema AppConfiguration",source:"@site/docs_versioned_docs/version-v0.12/6-reference/2-modules/1-developer-schemas/app-configuration.md",sourceDirName:"6-reference/2-modules/1-developer-schemas",slug:"/reference/modules/developer-schemas/app-configuration",permalink:"/docs/v0.12/reference/modules/developer-schemas/app-configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/6-reference/2-modules/1-developer-schemas/app-configuration.md",tags:[],version:"v0.12",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728109585,formattedLastUpdatedAt:"Oct 5, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"Kusion Modules",permalink:"/docs/v0.12/reference/modules/"},next:{title:"mysql",permalink:"/docs/v0.12/reference/modules/developer-schemas/database/mysql"}},p={},s=[{value:"Schema AppConfiguration",id:"schema-appconfiguration",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"appconfiguration"},"appconfiguration"),(0,a.kt)("h2",{id:"schema-appconfiguration"},"Schema AppConfiguration"),(0,a.kt)("p",null,"AppConfiguration is a developer-centric definition that describes how to run an Application.",(0,a.kt)("br",null),"This application model builds upon a decade of experience at AntGroup running super large scale",(0,a.kt)("br",null),"internal developer platform, combined with best-of-breed ideas and practices from the community."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"accessories")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:any}"),(0,a.kt)("td",{parentName:"tr",align:null},"Accessories defines a collection of accessories that will be attached to the workload."),(0,a.kt)("td",{parentName:"tr",align:null},"{}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"annotations")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Annotations are key/value pairs that attach arbitrary non-identifying metadata to resources."),(0,a.kt)("td",{parentName:"tr",align:null},"{}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"labels")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Labels can be used to attach arbitrary metadata as key-value pairs to resources."),(0,a.kt)("td",{parentName:"tr",align:null},"{}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"workload")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"workload/service#schema-service"},"service.Service")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"workload/job#schema-job"},"wl.Job")),(0,a.kt)("td",{parentName:"tr",align:null},"Workload defines how to run your application code. Currently supported workload profile",(0,a.kt)("br",null),"includes Service and Job."),(0,a.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Instantiate an App with a long-running service and its image is "nginx:v1"\n\nimport kam as ac\nimport kam.workload as wl\nimport kam.workload.container as c\n\nhelloworld : ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "nginx": c.Container {\n                image: "nginx:v1"\n            }\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);