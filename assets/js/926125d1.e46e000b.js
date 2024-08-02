"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={},o="mysql",s={unversionedId:"reference/modules/workspace-configs/database/mysql",id:"version-v0.10/reference/modules/workspace-configs/database/mysql",title:"mysql",description:"Module MySQL",source:"@site/docs_versioned_docs/version-v0.10/6-reference/2-modules/2-workspace-configs/database/mysql.md",sourceDirName:"6-reference/2-modules/2-workspace-configs/database",slug:"/reference/modules/workspace-configs/database/mysql",permalink:"/docs/v0.10/reference/modules/workspace-configs/database/mysql",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/6-reference/2-modules/2-workspace-configs/database/mysql.md",tags:[],version:"v0.10",lastUpdatedBy:"cheny-alf",lastUpdatedAt:1722600707,formattedLastUpdatedAt:"Aug 2, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"service",permalink:"/docs/v0.10/reference/modules/catalog-models/workload/service"},next:{title:"postgres",permalink:"/docs/v0.10/reference/modules/workspace-configs/database/postgres"}},i={},d=[{value:"Module MySQL",id:"module-mysql",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql"},"mysql"),(0,a.kt)("h2",{id:"module-mysql"},"Module MySQL"),(0,a.kt)("p",null,"MySQL describes the attributes to locally deploy or create a cloud provider managed mysql database instance for the workload. "),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"cloud"),(0,a.kt)("br",null),"Cloud specifies the type of the cloud vendor."),(0,a.kt)("td",{parentName:"tr",align:null},'"aws" ',"|",' "alicloud"'),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"username"),(0,a.kt)("br",null),"Username specifies the operation account for the mysql database."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'"root"'),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"category"),(0,a.kt)("br",null),"Category specifies the edition of the mysql instance provided by the cloud vendor."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'"Basic"'),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"securityIPs"),(0,a.kt)("br",null),"SecurityIPs specifies the list of IP addresses allowed to access the mysql instance provided by the cloud vendor."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},'["0.0.0.0/0"]'),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"privateRouting"),(0,a.kt)("br",null),"PrivateRouting specifies whether the host address of the cloud mysql instance for the workload to connect with is via public network or private network of the cloud vendor."),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"size"),(0,a.kt)("br",null),"Size specifies the allocated storage size of the mysql instance."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"subnetID"),(0,a.kt)("br",null),"SubnetID specifies the virtual subnet ID associated with the VPC that the cloud mysql instance will be created in."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"suffix"),(0,a.kt)("br",null),"Suffix specifies the suffix of the database name."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'runtimes: \n  terraform: \n    random: \n      version: 3.5.1\n      source: hashicorp/random\n    aws: \n      version: 5.0.1\n      source: hashicorp/aws\n      region: us-east-1\n\n# MySQL workspace configs for AWS RDS\nmodules: \n  mysql: \n    default: \n      cloud: aws\n      size: 20\n      instanceType: db.t3.micro\n      privateRouting: false\n      suffix: "-mysql"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'runtimes: \n  terraform: \n    random: \n      version: 3.5.1\n      source: hashicorp/random\n    alicloud: \n      version: 1.209.1\n      source: aliyun/alicloud\n      region: cn-beijing\n\n# MySQL workspace configs for Alicloud RDS\nmodules: \n  mysql: \n    default: \n      cloud: alicloud\n      size: 20\n      instanceType: mysql.n2.serverless.1c\n      category: serverless_basic\n      privateRouting: false\n      subnetID: [your-subnet-id]\n      suffix: "-mysql"\n')))}c.isMDXComponent=!0}}]);