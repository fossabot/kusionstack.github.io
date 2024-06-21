"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},o="mysql",i={unversionedId:"reference/modules/developer-schemas/database/mysql",id:"version-v0.12/reference/modules/developer-schemas/database/mysql",title:"mysql",description:"Schema MySQL",source:"@site/docs_versioned_docs/version-v0.12/6-reference/2-modules/1-developer-schemas/database/mysql.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/database",slug:"/reference/modules/developer-schemas/database/mysql",permalink:"/docs/reference/modules/developer-schemas/database/mysql",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/6-reference/2-modules/1-developer-schemas/database/mysql.md",tags:[],version:"v0.12",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718940543,formattedLastUpdatedAt:"Jun 21, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"appconfiguration",permalink:"/docs/reference/modules/developer-schemas/app-configuration"},next:{title:"postgres",permalink:"/docs/reference/modules/developer-schemas/database/postgres"}},s={},d=[{value:"Schema MySQL",id:"schema-mysql",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Credentials and Connectivity",id:"credentials-and-connectivity",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql"},"mysql"),(0,r.kt)("h2",{id:"schema-mysql"},"Schema MySQL"),(0,r.kt)("p",null,"MySQL describes the attributes to locally deploy or create a cloud provider",(0,r.kt)("br",null),"managed mysql database instance for the workload. "),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},'"local"'),(0,r.kt)("td",{parentName:"tr",align:null},'"cloud"'),(0,r.kt)("td",{parentName:"tr",align:null},"Type defines whether the mysql database is deployed locally or provided by",(0,r.kt)("br",null),"cloud vendor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"version")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Version defines the mysql version to use."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Instantiate a local mysql database with version of 5.7. \n\nimport mysql\n\naccessories: {\n    "mysql": mysql.MySQL {\n        type:   "local"\n        version: "8.0"\n    }\n}\n')),(0,r.kt)("h3",{id:"credentials-and-connectivity"},"Credentials and Connectivity"),(0,r.kt)("p",null,"For sensitive information such as the ",(0,r.kt)("strong",{parentName:"p"},"host"),", ",(0,r.kt)("strong",{parentName:"p"},"username")," and ",(0,r.kt)("strong",{parentName:"p"},"password")," for the database instance, Kusion will automatically inject them into the application container for users through environment variables. The relevant environment variables are listed in the table below. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB","_","HOST","_",(0,r.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,r.kt)("td",{parentName:"tr",align:null},"Host address for accessing the database instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB","_","USERNAME","_",(0,r.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,r.kt)("td",{parentName:"tr",align:null},"Account username for accessing the database instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB","_","PASSWORD","_",(0,r.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,r.kt)("td",{parentName:"tr",align:null},"Account password for accessing the database instance")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"databaseName")," can be declared in ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/modules/workspace-configs/database/mysql"},"workspace configs of mysql"),", and Kusion will automatically concatenate the ",(0,r.kt)("inlineCode",{parentName:"p"},"<PROJECT_NAME>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<STACK_NAME>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<APP_NAME>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," if not specified. When injecting the credentials into containers' environment variables, Kusion will convert the ",(0,r.kt)("inlineCode",{parentName:"p"},"databaseName")," to uppercase, and replace ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"."))}c.isMDXComponent=!0}}]);