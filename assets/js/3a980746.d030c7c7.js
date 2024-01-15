"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(r),p=a,y=m["".concat(i,".").concat(p)]||m[p]||u[p]||l;return r?n.createElement(y,o(o({ref:t},d),{},{components:r})):n.createElement(y,o({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7540:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const l={},o="mysql",s={unversionedId:"kusion/reference/modules/catalog-models/database/mysql",id:"kusion/reference/modules/catalog-models/database/mysql",title:"mysql",description:"Schema MySQL",source:"@site/docs/kusion/6-reference/2-modules/1-catalog-models/database/mysql.md",sourceDirName:"kusion/6-reference/2-modules/1-catalog-models/database",slug:"/kusion/reference/modules/catalog-models/database/mysql",permalink:"/docs/next/kusion/reference/modules/catalog-models/database/mysql",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/1-catalog-models/database/mysql.md",tags:[],version:"current",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1705302018,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"appconfiguration",permalink:"/docs/next/kusion/reference/modules/catalog-models/app-configuration"},next:{title:"postgres",permalink:"/docs/next/kusion/reference/modules/catalog-models/database/postgres"}},i={},c=[{value:"Schema MySQL",id:"schema-mysql",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql"},"mysql"),(0,a.kt)("h2",{id:"schema-mysql"},"Schema MySQL"),(0,a.kt)("p",null,"MySQL describes the attributes to locally deploy or create a cloud provider",(0,a.kt)("br",null),"managed mysql database instance for the workload. "),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"type"),(0,a.kt)("br",null),"Type defines whether the mysql database is deployed locally or provided by ",(0,a.kt)("br",null),"cloud vendor."),(0,a.kt)("td",{parentName:"tr",align:null},'"local" ',"|",' "cloud"'),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"version"),(0,a.kt)("br",null),"Version defines the mysql version to use."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'Instantiate a local mysql database with version of 5.7. \n\nimport catalog.models.schema.v1.accessories.mysql\n\nmysql: mysql.MySQL {\n    type: "local"\n    version: "5.7"\n}\n')))}u.isMDXComponent=!0}}]);