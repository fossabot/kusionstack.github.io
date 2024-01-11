"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"app-configuration",sidebar_label:"AppConfiguration"},l="AppConfiguration",i={unversionedId:"kusion/reference/modules/catalog-models/app-configuration",id:"kusion/reference/modules/catalog-models/app-configuration",title:"AppConfiguration",description:"Schema AppConfiguration",source:"@site/docs/kusion/6-reference/2-modules/1-catalog-models/1-app-configuration.md",sourceDirName:"kusion/6-reference/2-modules/1-catalog-models",slug:"/kusion/reference/modules/catalog-models/app-configuration",permalink:"/docs/next/kusion/reference/modules/catalog-models/app-configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/1-catalog-models/1-app-configuration.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1704964742,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:1,frontMatter:{id:"app-configuration",sidebar_label:"AppConfiguration"},sidebar:"kusion",previous:{title:"Kusion Modules",permalink:"/docs/next/kusion/reference/modules/"},next:{title:"Job",permalink:"/docs/next/kusion/reference/modules/catalog-models/workload/job"}},p={},s=[{value:"Schema AppConfiguration",id:"schema-appconfiguration",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"appconfiguration"},"AppConfiguration"),(0,r.kt)("h2",{id:"schema-appconfiguration"},"Schema AppConfiguration"),(0,r.kt)("p",null,"AppConfiguration is a developer-centric definition that describes how to run an Application.",(0,r.kt)("br",null),"This application model builds upon a decade of experience at AntGroup running super large scale",(0,r.kt)("br",null),"internal developer platform, combined with best-of-breed ideas and practices from the community."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"workload"),(0,r.kt)("br",null),"Workload defines how to run your application code. Currently supported workload profile",(0,r.kt)("br",null),"includes Service and Job."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"workload/service#schema-service"},"workload.Service")," \\ "),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"workload/job#schema-job"},"workload.Job")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"opsRule"),(0,r.kt)("br",null),"OpsRule specifies collection of rules that will be checked for Day-2 operation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"trait/opsrule#schema-opsrule"},"trait.OpsRule")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"database"),(0,r.kt)("br",null),"Database describes a locally deployed or a cloud provider managed database instance for the workload."),(0,r.kt)("td",{parentName:"tr",align:null},"{str: ",(0,r.kt)("a",{parentName:"td",href:"database/mysql#schema-mysql"},"mysql.MySQL")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"database/postgres#schema-postgresql"},"postgres.PostgreSQL"),"}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"monitoring")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"monitoring/prometheus#schema-prometheus"},"monitoring.Prometheus")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"labels")),(0,r.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"annotations")),(0,r.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Instantiate an App with a long-running service and its image is "nginx:v1"\n\nimport catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.accessories.database as db\nimport catalog.models.schema.v1.accessories.monitoring as m\nimport catalog.models.schema.v1.accessories.trait as t\n\nappConfiguration = ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "nginx": c.Container {\n                image: "nginx:v1"\n            }\n        }\n        type: "CollaSet"\n    }\n    opsRule: t.OpsRule {\n        maxUnavailable: "30%"\n    }\n    database: db.Database {\n        type: "aws"\n        engine: "mysql"\n        version: "5.7"\n        instanceType: "db.t3.micro"\n    }\n    monitoring: m.Prometheus{\n        interval:       "30s"\n        timeout:        "15s"\n        path:           "/metrics"\n        port:           "web"\n        scheme:         "http"\n    }\n}\n')))}c.isMDXComponent=!0}}]);