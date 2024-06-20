"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},o="mysql",i={unversionedId:"reference/modules/catalog-models/database/mysql",id:"version-v0.10/reference/modules/catalog-models/database/mysql",title:"mysql",description:"Schema MySQL",source:"@site/docs_versioned_docs/version-v0.10/6-reference/2-modules/1-catalog-models/database/mysql.md",sourceDirName:"6-reference/2-modules/1-catalog-models/database",slug:"/reference/modules/catalog-models/database/mysql",permalink:"/docs/v0.10/reference/modules/catalog-models/database/mysql",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/6-reference/2-modules/1-catalog-models/database/mysql.md",tags:[],version:"v0.10",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1718866078,formattedLastUpdatedAt:"Jun 20, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"appconfiguration",permalink:"/docs/v0.10/reference/modules/catalog-models/app-configuration"},next:{title:"postgres",permalink:"/docs/v0.10/reference/modules/catalog-models/database/postgres"}},s={},d=[{value:"Schema MySQL",id:"schema-mysql",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Credentials and Connectivity",id:"credentials-and-connectivity",level:3}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql"},"mysql"),(0,r.kt)("h2",{id:"schema-mysql"},"Schema MySQL"),(0,r.kt)("p",null,"MySQL describes the attributes to locally deploy or create a cloud provider",(0,r.kt)("br",null),"managed mysql database instance for the workload. "),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type"),(0,r.kt)("br",null),"Type defines whether the mysql database is deployed locally or provided by ",(0,r.kt)("br",null),"cloud vendor."),(0,r.kt)("td",{parentName:"tr",align:null},'"local" ',"|",' "cloud"'),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"version"),(0,r.kt)("br",null),"Version defines the mysql version to use."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required"))))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'Instantiate a local mysql database with version of 5.7. \n\nimport catalog.models.schema.v1.accessories.mysql\n\nmysql: mysql.MySQL {\n    type: "local"\n    version: "5.7"\n}\n')),(0,r.kt)("h3",{id:"credentials-and-connectivity"},"Credentials and Connectivity"),(0,r.kt)("p",null,"For sensitive information such as the ",(0,r.kt)("strong",{parentName:"p"},"host"),", ",(0,r.kt)("strong",{parentName:"p"},"username")," and ",(0,r.kt)("strong",{parentName:"p"},"password")," for the database instance, Kusion will automatically inject them into the application container for users through environment variables. The relevant environment variables are listed in the table below. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB","_","HOST","_",(0,r.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,r.kt)("td",{parentName:"tr",align:null},"Host address for accessing the database instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB","_","USERNAME","_",(0,r.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,r.kt)("td",{parentName:"tr",align:null},"Account username for accessing the database instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB","_","PASSWORD","_",(0,r.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,r.kt)("td",{parentName:"tr",align:null},"Account password for accessing the database instance")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<DATABASE_NAME>")," is composed of two parts, one of which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," of database declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," and the other is the ",(0,r.kt)("inlineCode",{parentName:"p"},"suffix")," declared in ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace")," configuration. Kusion will concatenate the database key and suffix, convert them to uppercase, and replace ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),". And the ",(0,r.kt)("inlineCode",{parentName:"p"},"<DATABASE_TYPE>")," supported now includes ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres"),"."))}c.isMDXComponent=!0}}]);