"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12623],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},44273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"naming-conventions",sidebar_label:"Resource Naming Conventions"},l="Resource Naming Conventions",i={unversionedId:"reference/modules/naming-conventions",id:"version-v0.11/reference/modules/naming-conventions",title:"Resource Naming Conventions",description:"Kusion will automatically create Kubernetes or Terraform resources for the applications, many of which do not require users' awareness. This document will introduce the naming conventions for these related resources.",source:"@site/docs_versioned_docs/version-v0.11/6-reference/2-modules/3-naming-conventions.md",sourceDirName:"6-reference/2-modules",slug:"/reference/modules/naming-conventions",permalink:"/docs/v0.11/reference/modules/naming-conventions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/6-reference/2-modules/3-naming-conventions.md",tags:[],version:"v0.11",lastUpdatedBy:"cheny-alf",lastUpdatedAt:1722600707,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:3,frontMatter:{id:"naming-conventions",sidebar_label:"Resource Naming Conventions"},sidebar:"kusion",previous:{title:"service",permalink:"/docs/v0.11/reference/modules/workspace-configs/workload/service"},next:{title:"Roadmap",permalink:"/docs/v0.11/reference/roadmap"}},s={},d=[{value:"Kubernetes Resources",id:"kubernetes-resources",level:2},{value:"Terraform Resources",id:"terraform-resources",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resource-naming-conventions"},"Resource Naming Conventions"),(0,a.kt)("p",null,"Kusion will automatically create Kubernetes or Terraform resources for the applications, many of which do not require users' awareness. This document will introduce the naming conventions for these related resources. "),(0,a.kt)("h2",{id:"kubernetes-resources"},"Kubernetes Resources"),(0,a.kt)("p",null,"Kusion adheres to specific rules when generating the Kubernetes resources for users' applications. The table below lists some common Kubernetes resource naming conventions. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace")," can now be specified by users. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Concatenation Rule"),(0,a.kt)("th",{parentName:"tr",align:null},"Example ID"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<PROJECT_NAME>")),(0,a.kt)("td",{parentName:"tr",align:null},"v1:Namespace:wordpress-local-db")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<PROJECT_NAME>"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"<STACK_NAME>"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"<APP_NAME>")),(0,a.kt)("td",{parentName:"tr",align:null},"apps/v1:Deployment:wordpress-local-db:wordpress-local-db-dev-wordpress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CronJob"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<PROJECT_NAME>"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"<STACK_NAME>"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"<APP_NAME>")),(0,a.kt)("td",{parentName:"tr",align:null},"batch/v1:CronJob:helloworld:helloworld-dev-helloworld")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<PROJECT_NAME>"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"<STACK_NAME>"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"<APP_NAME>"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"<public> or <private>")),(0,a.kt)("td",{parentName:"tr",align:null},"v1:Service:helloworld:helloworld-dev-helloworld-public")))),(0,a.kt)("h2",{id:"terraform-resources"},"Terraform Resources"),(0,a.kt)("p",null,"Similarly, Kusion also adheres to specific naming conventions when generating the Terraform Resources. Some common resources are listed below. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"Concatenation Rule"),(0,a.kt)("th",{parentName:"tr",align:null},"Example ID"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"random_password"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"<DATABASE_TYPE>")),(0,a.kt)("td",{parentName:"tr",align:null},"hashicorp:random:random_password:wordpress-db-mysql")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"aws_security_group"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"<DATABASE_TYPE>")),(0,a.kt)("td",{parentName:"tr",align:null},"hashicorp:aws:aws_security_group:wordpress-db-mysql")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"aws_db_instance"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,a.kt)("td",{parentName:"tr",align:null},"hashicorp:aws:aws_db_instance:wordpress-db")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alicloud_db_instance"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,a.kt)("td",{parentName:"tr",align:null},"aliyun:alicloud:alicloud_db_instance:wordpress-db")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alicloud_db_connection"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,a.kt)("td",{parentName:"tr",align:null},"aliyun:alicloud:alicloud_db_connection:wordpress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alicloud_rds_account"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"<DATABASE_NAME>")),(0,a.kt)("td",{parentName:"tr",align:null},"aliyun:alicloud:alicloud_rds_account:wordpress")))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<DATABASE_NAME>")," is composed of two parts, one of which is the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," of database declared in ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," and the other is the ",(0,a.kt)("inlineCode",{parentName:"p"},"suffix")," declared in ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace")," configuration. Kusion will concatenate the database key and suffix, convert them to uppercase, and replace ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"_"),". And the ",(0,a.kt)("inlineCode",{parentName:"p"},"<DATABASE_TYPE>")," supported now includes ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"postgres"),"."))}c.isMDXComponent=!0}}]);