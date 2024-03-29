"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(i,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},55054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},o="mysql",s={unversionedId:"kusion/reference/modules/workspace-configs/database/mysql",id:"kusion/reference/modules/workspace-configs/database/mysql",title:"mysql",description:"Module MySQL",source:"@site/docs/kusion/6-reference/2-modules/2-workspace-configs/database/mysql.md",sourceDirName:"kusion/6-reference/2-modules/2-workspace-configs/database",slug:"/kusion/reference/modules/workspace-configs/database/mysql",permalink:"/docs/next/kusion/reference/modules/workspace-configs/database/mysql",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/2-workspace-configs/database/mysql.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1711703238,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"service",permalink:"/docs/next/kusion/reference/modules/developer-schemas/workload/service"},next:{title:"postgres",permalink:"/docs/next/kusion/reference/modules/workspace-configs/database/postgres"}},i={},d=[{value:"Module MySQL",id:"module-mysql",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql"},"mysql"),(0,r.kt)("h2",{id:"module-mysql"},"Module MySQL"),(0,r.kt)("p",null,"MySQL describes the attributes to locally deploy or create a cloud provider managed mysql database instance for the workload. "),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"cloud"),(0,r.kt)("br",null),"Cloud specifies the type of the cloud vendor."),(0,r.kt)("td",{parentName:"tr",align:null},'"aws" ',"|",' "alicloud"'),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"username"),(0,r.kt)("br",null),"Username specifies the operation account for the mysql database."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'"root"'),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"category"),(0,r.kt)("br",null),"Category specifies the edition of the mysql instance provided by the cloud vendor."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'"Basic"'),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"securityIPs"),(0,r.kt)("br",null),"SecurityIPs specifies the list of IP addresses allowed to access the mysql instance provided by the cloud vendor."),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},'["0.0.0.0/0"]'),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"privateRouting"),(0,r.kt)("br",null),"PrivateRouting specifies whether the host address of the cloud mysql instance for the workload to connect with is via public network or private network of the cloud vendor."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"size"),(0,r.kt)("br",null),"Size specifies the allocated storage size of the mysql instance."),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"subnetID"),(0,r.kt)("br",null),"SubnetID specifies the virtual subnet ID associated with the VPC that the cloud mysql instance will be created in."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"databaseName"),(0,r.kt)("br",null),"databaseName specifies the database name."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# MySQL workspace configs for AWS RDS\nmodules: \n  kusionstack@mysql@0.1.0: \n    default: \n      cloud: aws\n      size: 20\n      instanceType: db.t3.micro\n      privateRouting: false\n      databaseName: "my-mysql"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# MySQL workspace configs for Alicloud RDS\nmodules: \n  kusionstack@mysql@0.1.0: \n    default: \n      cloud: alicloud\n      size: 20\n      instanceType: mysql.n2.serverless.1c\n      category: serverless_basic\n      privateRouting: false\n      subnetID: [your-subnet-id]\n      databaseName: "my-mysql"\n')))}p.isMDXComponent=!0}}]);