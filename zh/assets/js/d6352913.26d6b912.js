"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,g=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(g,l(l({ref:t},d),{},{components:r})):n.createElement(g,l({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l="postgres",s={unversionedId:"reference/modules/workspace-configs/database/postgres",id:"version-v0.12/reference/modules/workspace-configs/database/postgres",title:"postgres",description:"Module PostgreSQL",source:"@site/docs_versioned_docs/version-v0.12/6-reference/2-modules/2-workspace-configs/database/postgres.md",sourceDirName:"6-reference/2-modules/2-workspace-configs/database",slug:"/reference/modules/workspace-configs/database/postgres",permalink:"/zh/docs/reference/modules/workspace-configs/database/postgres",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/6-reference/2-modules/2-workspace-configs/database/postgres.md",tags:[],version:"v0.12",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1722237898,formattedLastUpdatedAt:"2024\u5e747\u670829\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"mysql",permalink:"/zh/docs/reference/modules/workspace-configs/database/mysql"},next:{title:"monitoring",permalink:"/zh/docs/reference/modules/workspace-configs/monitoring/prometheus"}},i={},p=[{value:"Module PostgreSQL",id:"module-postgresql",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"postgres"},"postgres"),(0,a.kt)("h2",{id:"module-postgresql"},"Module PostgreSQL"),(0,a.kt)("p",null,"PostgreSQL describes the attributes to locally deploy or create a cloud provider managed postgres database instance for the workload. "),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"cloud"),(0,a.kt)("br",null),"Cloud specifies the type of the cloud vendor."),(0,a.kt)("td",{parentName:"tr",align:null},'"aws" ',"|",' "alicloud"'),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"username"),(0,a.kt)("br",null),"Username specifies the operation account for the postgres database."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'"root"'),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"category"),(0,a.kt)("br",null),"Category specifies the edition of the postgres instance provided by the cloud vendor."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'"Basic"'),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"securityIPs"),(0,a.kt)("br",null),"SecurityIPs specifies the list of IP addresses allowed to access the postgres instance provided by the cloud vendor."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},'["0.0.0.0/0"]'),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"privateRouting"),(0,a.kt)("br",null),"PrivateRouting specifies whether the host address of the cloud postgres instance for the workload to connect with is via public network or private network of the cloud vendor."),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"size"),(0,a.kt)("br",null),"Size specifies the allocated storage size of the postgres instance."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"subnetID"),(0,a.kt)("br",null),"SubnetID specifies the virtual subnet ID associated with the VPC that the cloud postgres instance will be created in."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"databaseName"),(0,a.kt)("br",null),"databaseName specifies the database name."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# PostgreSQL workspace configs for AWS RDS\nmodules: \n  postgres: \n    path: oci://ghcr.io/kusionstack/postgres\n    version: 0.2.0\n    configs: \n      default: \n        cloud: aws\n        size: 20\n        instanceType: db.t3.micro\n        securityIPs: \n          - 0.0.0.0/0\n        databaseName: "my-postgres"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# PostgreSQL workspace configs for Alicloud RDS\nmodules: \n  postgres: \n    path: oci://ghcr.io/kusionstack/postgres\n    version: 0.2.0\n    configs: \n      default:\n        cloud: alicloud\n        size: 20\n        instanceType: pg.n2.serverless.1c\n        category: serverless_basic\n        privateRouting: false\n        subnetID: [your-subnet-id]\n        securityIPs: \n          - 0.0.0.0/0\n        databaseName: "my-postgres"\n')))}c.isMDXComponent=!0}}]);