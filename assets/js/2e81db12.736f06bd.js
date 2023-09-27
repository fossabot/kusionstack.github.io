"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7544],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8039:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={id:"doc_app_configuration",sidebar_label:"App Configuration",sidebar_position:1},l="app_configuration",i={unversionedId:"user_docs/reference/model/catalog_models/doc_app_configuration",id:"user_docs/reference/model/catalog_models/doc_app_configuration",title:"app_configuration",description:"Schema AppConfiguration",source:"@site/docs/user_docs/reference/model/catalog_models/doc_app_configuration.md",sourceDirName:"user_docs/reference/model/catalog_models",slug:"/user_docs/reference/model/catalog_models/doc_app_configuration",permalink:"/docs/user_docs/reference/model/catalog_models/doc_app_configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/reference/model/catalog_models/doc_app_configuration.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1695803180,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:1,frontMatter:{id:"doc_app_configuration",sidebar_label:"App Configuration",sidebar_position:1},sidebar:"user_docs",previous:{title:"Overview",permalink:"/docs/user_docs/reference/model/overview"},next:{title:"Job",permalink:"/docs/user_docs/reference/model/catalog_models/workload/doc_job"}},s={},d=[{value:"Schema AppConfiguration",id:"schema-appconfiguration",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app_configuration"},"app_configuration"),(0,r.kt)("h2",{id:"schema-appconfiguration"},"Schema AppConfiguration"),(0,r.kt)("p",null,"AppConfiguration is a developer-centric definition that describes how to run an Application.",(0,r.kt)("br",null),"This application model builds upon a decade of experience at AntGroup running super large scale",(0,r.kt)("br",null),"internal developer platform, combined with best-of-breed ideas and practices from the community."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"workload"),(0,r.kt)("br",null),"Workload defines how to run your application code. Currently supported workload profile",(0,r.kt)("br",null),"includes Service and Job."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/user_docs/reference/model/catalog_models/workload/doc_service#schema-service"},"workload.Service")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/user_docs/reference/model/catalog_models/workload/doc_job#schema-job"},"workload.Job")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"opsRule"),(0,r.kt)("br",null),"OpsRule specifies collection of rules that will be checked for Day-2 operation."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/user_docs/reference/model/catalog_models/trait/doc_opsrule#schema-opsrule"},"trait.OpsRule")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"database")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/user_docs/reference/model/catalog_models/database/doc_database#schema-database"},"database.Database")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"monitoring")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/user_docs/reference/model/catalog_models/monitoring/doc_prometheus#schema-prometheus"},"monitoring.Prometheus")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"labels")),(0,r.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"annotations")),(0,r.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Instantiate an App with a long-running service and its image is "nginx:v1"\n\nimport catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.accessories.database as db\nimport catalog.models.schema.v1.accessories.monitoring as m\nimport catalog.models.schema.v1.accessories.trait as t\n\nappConfiguration = ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "nginx": c.Container {\n                image: "nginx:v1"\n            }\n        }\n        type: "CollaSet"\n    }\n    opsRule: t.OpsRule {\n        maxUnavailable: "30%"\n    }\n    database: db.Database {\n        type: "aws"\n        engine: "mysql"\n        version: "5.7"\n        instanceType: "db.t3.micro"\n    }\n    monitoring: m.Prometheus{\n        interval:       "30s"\n        timeout:        "15s"\n        path:           "/metrics"\n        port:           "web"\n        scheme:         "http"\n    }\n}\n')))}p.isMDXComponent=!0}}]);