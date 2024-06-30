"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"operational-rules"},i="Operational Rules",l={unversionedId:"configuration-walkthrough/operational-rules",id:"version-v0.11/configuration-walkthrough/operational-rules",title:"Operational Rules",description:"You could also specify the collection of operational rule requirements for the application. That can be achieved via a opsrule module (or bring-your-own-module) in the accessories field in AppConfiguration to achieve that. Operational rules are used as a preemptive measure to police and stop any unwanted changes.",source:"@site/docs_versioned_docs/version-v0.11/4-configuration-walkthrough/9-operational-rules.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/operational-rules",permalink:"/zh/docs/v0.11/configuration-walkthrough/operational-rules",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/4-configuration-walkthrough/9-operational-rules.md",tags:[],version:"v0.11",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1719756905,formattedLastUpdatedAt:"2024\u5e746\u670830\u65e5",sidebarPosition:9,frontMatter:{id:"operational-rules"},sidebar:"kusion",previous:{title:"Application Monitoring",permalink:"/zh/docs/v0.11/configuration-walkthrough/monitoring"},next:{title:"Deliver the WordPress Application with Cloud RDS",permalink:"/zh/docs/v0.11/user-guides/cloud-resources/database"}},p={},s=[{value:"Import",id:"import",level:2},{value:"Max Unavailable Replicas",id:"max-unavailable-replicas",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"operational-rules"},"Operational Rules"),(0,r.kt)("p",null,"You could also specify the collection of operational rule requirements for the application. That can be achieved via a ",(0,r.kt)("inlineCode",{parentName:"p"},"opsrule")," module (or bring-your-own-module) in the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessories")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," to achieve that. Operational rules are used as a preemptive measure to police and stop any unwanted changes."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kam")," package and the ",(0,r.kt)("inlineCode",{parentName:"p"},"opsrule")," Kusion Module. For more details on KCL package and module import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import kam.v1.app_configuration as ac\nimport kam.v1.workload as wl\nimport opsrule as o\n")),(0,r.kt)("h2",{id:"max-unavailable-replicas"},"Max Unavailable Replicas"),(0,r.kt)("p",null,"Currently, the ",(0,r.kt)("inlineCode",{parentName:"p"},"opsrule")," module supports setting a ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," parameter, which specifies the maximum number of pods that can be rendered unavailable at any time. It can be either a fraction of the total pods for the current application or a fixed number. This operational rule is particularly helpful against unexpected changes or deletes to the workloads. It can also prevent too many workloads from going down during an application upgrade."),(0,r.kt)("p",null,"More rules will be available in future versions of Kusion."),(0,r.kt)("p",null,"To set ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," to a percentage of pods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            # ...\n        }\n    }\n    accessories: {\n        "opsRule": o.OpsRule {\n            maxUnavailable: "30%"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"To set ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," to a fixed number of pods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n    }\n    accessories: {\n        "opsRule": o.OpsRule {\n            maxUnavailable: 2\n        }\n    }\n}\n')))}c.isMDXComponent=!0}}]);