"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"naming-conventions",sidebar_label:"Naming Conventions"},o="Naming Conventions",i={unversionedId:"kusion/reference/model/naming-conventions",id:"version-v0.9/kusion/reference/model/naming-conventions",title:"Naming Conventions",description:"Kubernetes Resources",source:"@site/versioned_docs/version-v0.9/kusion/reference/model/naming-conventions.md",sourceDirName:"kusion/reference/model",slug:"/kusion/reference/model/naming-conventions",permalink:"/docs/kusion/reference/model/naming-conventions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/reference/model/naming-conventions.md",tags:[],version:"v0.9",lastUpdatedBy:"Forest",lastUpdatedAt:1705299749,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{id:"naming-conventions",sidebar_label:"Naming Conventions"},sidebar:"kusion",previous:{title:"secret",permalink:"/docs/kusion/reference/model/catalog_models/internal/secret/doc_secret"},next:{title:"Project & Stack Config Items",permalink:"/docs/kusion/reference/model/project-stack-config-items"}},s={},p=[{value:"Kubernetes Resources",id:"kubernetes-resources",level:2},{value:"Terraform Resources",id:"terraform-resources",level:2},{value:"Apply Options",id:"apply-options",level:2},{value:"Magic Variables",id:"magic-variables",level:2},{value:"Concept Explanation",id:"concept-explanation",level:3},{value:"List of Magic Variables",id:"list-of-magic-variables",level:3},{value:"Sensitive Database Information",id:"sensitive-database-information",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"naming-conventions"},"Naming Conventions"),(0,r.kt)("h2",{id:"kubernetes-resources"},"Kubernetes Resources"),(0,r.kt)("p",null,"Kusion adheres to specific rules when generating the Kubernetes resources for users' applications. The table below lists some common Kubernetes resource naming conventions. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"Concatenation Rule"),(0,r.kt)("th",{parentName:"tr",align:null},"Example ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project name")),(0,r.kt)("td",{parentName:"tr",align:null},"v1:Namespace:wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"stack name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"apps/v1:Deployment:wordpress:wordpress-dev-wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CronJob"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"stack name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"batch/v1:CronJob:helloworld:helloworld-dev-helloworld")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"stack name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"app name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"public"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"private")),(0,r.kt)("td",{parentName:"tr",align:null},"v1:Service:helloworld:helloworld-dev-helloworld-public")))),(0,r.kt)("h2",{id:"terraform-resources"},"Terraform Resources"),(0,r.kt)("p",null,"Similarly, Kusion also adheres to specific naming conventions when generating the Terraform Resources. Some common resources are listed below. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"Concatenation Rule"),(0,r.kt)("th",{parentName:"tr",align:null},"Example ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"random_password"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"db")),(0,r.kt)("td",{parentName:"tr",align:null},"hashicorp:random:random_password:wordpress-db")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws_security_group"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"db")),(0,r.kt)("td",{parentName:"tr",align:null},"hashicorp:aws:aws_security_group:wordpress-db")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws_db_instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"hashicorp:aws:aws_db_instance:wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alicloud_db_instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"aliyun:alicloud:alicloud_db_instance:wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alicloud_db_connection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"aliyun:alicloud:alicloud_db_connection:wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alicloud_rds_account"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"aliyun:alicloud:alicloud_rds_account:wordpress")))),(0,r.kt)("h2",{id:"apply-options"},"Apply Options"),(0,r.kt)("p",null,"Before applying the project, users may need to export some environment variables to specify the Provider information for provisioning cloud resources. The relevant environment variables are listed in the table below. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_PROVIDER_REGION"),(0,r.kt)("td",{parentName:"tr",align:null},"The region where the aws provider provisions the resources"),(0,r.kt)("td",{parentName:"tr",align:null},"us-east-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_ACCESS_KEY_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"The access key for the aws provider to provision the resources"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_SECRET_ACCESS_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"The secret key for the aws provider to provision the resources"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALICLOUD_PROVIDER_REGION"),(0,r.kt)("td",{parentName:"tr",align:null},"The region where the alicloud provider provisions the resources"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-beijing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALICLOUD_ACCESS_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"The access key for the alicloud provider to provision the resources"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALICLOUD_SECRET_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"The secret key for the alicloud provider to provision the resources"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"magic-variables"},"Magic Variables"),(0,r.kt)("h3",{id:"concept-explanation"},"Concept Explanation"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Magic variables")," are preconfigured variables representing fundamental metadata or environment variables automatically generated and injected into the application container by Kusion, which are typically used for accessories such as databases. "),(0,r.kt)("h3",{id:"list-of-magic-variables"},"List of Magic Variables"),(0,r.kt)("h4",{id:"sensitive-database-information"},"Sensitive Database Information"),(0,r.kt)("p",null,"For sensitive information such as the ",(0,r.kt)("strong",{parentName:"p"},"host address"),", ",(0,r.kt)("strong",{parentName:"p"},"username")," and ",(0,r.kt)("strong",{parentName:"p"},"password")," for the database instance, Kusion will automatically inject them into the application container for users through environment variables. The relevant environment variables are listed in the table below. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"Host address for accessing the database instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB_USERNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"Account username for accessing the database instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"Account password for accessing the database instance")))))}m.isMDXComponent=!0}}]);