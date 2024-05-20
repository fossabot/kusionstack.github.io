"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:9},i="Operational Rules",l={unversionedId:"config-walkthrough/operational_rules",id:"version-v0.9/config-walkthrough/operational_rules",title:"Operational Rules",description:"The opsRule attribute in the AppConfiguration instance is used to describe the specification for the collection of operational rule requirements for the application. Operational rules are used as a preemptive measure to police and stop any unwanted changes.",source:"@site/docs_versioned_docs/version-v0.9/config-walkthrough/operational_rules.md",sourceDirName:"config-walkthrough",slug:"/config-walkthrough/operational_rules",permalink:"/docs/v0.9/config-walkthrough/operational_rules",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/config-walkthrough/operational_rules.md",tags:[],version:"v0.9",lastUpdatedBy:"elliotxx",lastUpdatedAt:1716172883,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"kusion",previous:{title:"Application Monitoring",permalink:"/docs/v0.9/config-walkthrough/monitoring"},next:{title:"User Guide",permalink:"/docs/v0.9/guides/"}},p={},s=[{value:"Import",id:"import",level:2},{value:"Max Unavailable Replicas",id:"max-unavailable-replicas",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"operational-rules"},"Operational Rules"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"opsRule")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance is used to describe the specification for the collection of operational rule requirements for the application. Operational rules are used as a preemptive measure to police and stop any unwanted changes."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"opsRules")," attribute requires the target cluster to have installed the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/operating"},"KusionStack-operating")," controllers properly.")),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," package. For more details on KCL package import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../config-walkthrough/overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport models.schema.v1.trait as t\n")),(0,r.kt)("h2",{id:"max-unavailable-replicas"},"Max Unavailable Replicas"),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("inlineCode",{parentName:"p"},"OpsRule")," supports setting a ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," parameter, which specifies the maximum number of pods that can be rendered unavailable at any time. It can be either a fraction of the total pods for the current application or a fixed number. This operational rule is particularly helpful against unexpected changes or deletes to the workloads. It can also prevents too many workloads from going down during an application upgrade."),(0,r.kt)("p",null,"More rules will be available in future versions of Kusion."),(0,r.kt)("p",null,"To set ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," to a percentage of pods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            # ...\n        }\n    }\n    opsRule: t.OpsRule {\n        maxUnavailable: "30%"\n    }\n}\n')),(0,r.kt)("p",null,"To set ",(0,r.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," to a fixed number of pods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n    }\n    opsRule: t.OpsRule {\n        maxUnavailable: 2\n    }\n}\n")))}u.isMDXComponent=!0}}]);