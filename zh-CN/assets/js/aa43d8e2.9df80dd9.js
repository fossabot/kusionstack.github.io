"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6886],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=d(n),c=r,s=k["".concat(p,".").concat(c)]||k[c]||u[c]||l;return n?a.createElement(s,i(i({ref:e},m),{},{components:n})):a.createElement(s,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8315:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"naming-conventions",sidebar_label:"\u547d\u540d\u89c4\u5219"},i="\u547d\u540d\u89c4\u5219",o={unversionedId:"reference/model/naming-conventions",id:"reference/model/naming-conventions",title:"\u547d\u540d\u89c4\u5219",description:"Kubernetes \u8d44\u6e90",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/model/naming-conventions.md",sourceDirName:"reference/model",slug:"/reference/model/naming-conventions",permalink:"/zh-CN/docs/reference/model/naming-conventions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/naming-conventions.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1694162751,formattedLastUpdatedAt:"2023\u5e749\u67088\u65e5",frontMatter:{id:"naming-conventions",sidebar_label:"\u547d\u540d\u89c4\u5219"},sidebar:"reference",previous:{title:"secret",permalink:"/zh-CN/docs/reference/model/catalog_models/internal/secret/doc_secret"},next:{title:"Project \u4e0e Stack \u914d\u7f6e\u9879",permalink:"/zh-CN/docs/reference/model/project-stack-config-items"}},p={},d=[{value:"Kubernetes \u8d44\u6e90",id:"kubernetes-\u8d44\u6e90",level:2},{value:"Terraform \u8d44\u6e90",id:"terraform-\u8d44\u6e90",level:2},{value:"Apply \u9009\u9879",id:"apply-\u9009\u9879",level:2},{value:"\u9b54\u672f\u53d8\u91cf",id:"\u9b54\u672f\u53d8\u91cf",level:2},{value:"\u6982\u5ff5\u8bf4\u660e",id:"\u6982\u5ff5\u8bf4\u660e",level:3},{value:"\u9b54\u672f\u53d8\u91cf\u5217\u8868",id:"\u9b54\u672f\u53d8\u91cf\u5217\u8868",level:3},{value:"\u6570\u636e\u5e93\u654f\u611f\u4fe1\u606f",id:"\u6570\u636e\u5e93\u654f\u611f\u4fe1\u606f",level:4}],m={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u547d\u540d\u89c4\u5219"},"\u547d\u540d\u89c4\u5219"),(0,r.kt)("h2",{id:"kubernetes-\u8d44\u6e90"},"Kubernetes \u8d44\u6e90"),(0,r.kt)("p",null,"Kusion \u5728\u4e3a\u7528\u6237\u7684\u5e94\u7528\u751f\u6210 Kubernetes \u8d44\u6e90\u65f6\u9075\u5faa\u7279\u5b9a\u7684\u547d\u540d\u89c4\u5219\uff0c\u4e0b\u8868\u5217\u51fa\u4e86\u4e00\u4e9b\u5e38\u89c1\u7684 Kubernetes \u8d44\u6e90\u547d\u540d\u89c4\u8303\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90"),(0,r.kt)("th",{parentName:"tr",align:null},"\u62fc\u63a5\u89c4\u5219"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b\u8d44\u6e90 ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project name")),(0,r.kt)("td",{parentName:"tr",align:null},"v1:Namespace:wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"stack name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"apps/v1:Deployment:wordpress:wordpress-dev-wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CronJob"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"stack name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"batch/v1:CronJob:helloworld:helloworld-dev-helloworld")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"stack name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"app name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"public"),"/",(0,r.kt)("inlineCode",{parentName:"td"},"private")),(0,r.kt)("td",{parentName:"tr",align:null},"v1:Service:helloworld:helloworld-dev-helloworld-public")))),(0,r.kt)("h2",{id:"terraform-\u8d44\u6e90"},"Terraform \u8d44\u6e90"),(0,r.kt)("p",null,"\u7c7b\u4f3c\u5730\uff0cKusion \u5728\u751f\u6210 Terraform \u8d44\u6e90\u65f6\u4e5f\u9075\u5faa\u7279\u5b9a\u7684\u547d\u540d\u89c4\u5219\uff0c\u4e0b\u8868\u5217\u51fa\u4e86\u4e00\u4e9b\u5e38\u89c1\u7684 Terraform \u8d44\u6e90\u547d\u540d\u89c4\u8303\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90"),(0,r.kt)("th",{parentName:"tr",align:null},"\u62fc\u63a5\u89c4\u5219"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b\u8d44\u6e90 ID"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"random_password"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"db")),(0,r.kt)("td",{parentName:"tr",align:null},"hashicorp:random:random_password:wordpress-db")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws_security_group"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name"),"-",(0,r.kt)("inlineCode",{parentName:"td"},"db")),(0,r.kt)("td",{parentName:"tr",align:null},"hashicorp:aws:aws_security_group:wordpress-db")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"aws_db_instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"hashicorp:aws:aws_db_instance:wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alicloud_db_instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"aliyun:alicloud:alicloud_db_instance:wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alicloud_db_connection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"aliyun:alicloud:alicloud_db_connection:wordpress")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alicloud_rds_account"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"app name")),(0,r.kt)("td",{parentName:"tr",align:null},"aliyun:alicloud:alicloud_rds_account:wordpress")))),(0,r.kt)("h2",{id:"apply-\u9009\u9879"},"Apply \u9009\u9879"),(0,r.kt)("p",null,"\u5728 Apply \u5e94\u7528\u4e4b\u524d\uff0c\u7528\u6237\u53ef\u80fd\u9700\u8981\u5bfc\u5165\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\u6765\u6307\u5b9a\u4e91\u8d44\u6e90\u7684 Provider \u4fe1\u606f\uff0c\u4e0b\u8868\u5217\u51fa\u4e86\u76f8\u5173\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_PROVIDER_REGION"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Provider \u751f\u6548\u8d44\u6e90\u6240\u5728\u533a\u57df"),(0,r.kt)("td",{parentName:"tr",align:null},"us-east-1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_ACCESS_KEY_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Provider \u751f\u6548\u8d44\u6e90\u4f7f\u7528\u7684 Access Key"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_SECRET_ACCESS_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS Provider \u751f\u6548\u8d44\u6e90\u4f7f\u7528\u7684 Secret Key"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALICLOUD_PROVIDER_REGION"),(0,r.kt)("td",{parentName:"tr",align:null},"\u963f\u91cc\u4e91 Provider \u751f\u6548\u8d44\u6e90\u6240\u5728\u533a\u57df"),(0,r.kt)("td",{parentName:"tr",align:null},"cn-beijing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALICLOUD_ACCESS_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u963f\u91cc\u4e91 Provider \u751f\u6548\u8d44\u6e90\u4f7f\u7528\u7684 Access Key"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALICLOUD_SECRET_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u963f\u91cc\u4e91 Provider \u751f\u6548\u8d44\u6e90\u4f7f\u7528\u7684 Secret Key"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"\u9b54\u672f\u53d8\u91cf"},"\u9b54\u672f\u53d8\u91cf"),(0,r.kt)("h3",{id:"\u6982\u5ff5\u8bf4\u660e"},"\u6982\u5ff5\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9b54\u672f\u53d8\u91cf"),"\u662f Kusion \u9884\u7f6e\u7684\u53d8\u91cf\uff0c\u4ee3\u8868\u4e86\u57fa\u7840\u5143\u6570\u636e\uff0c\u6216\u7531 Kusion \u81ea\u52a8\u751f\u6210\u5e76\u6ce8\u5165\u5230\u5e94\u7528\u5bb9\u5668\u4e2d\u7684\u73af\u5883\u53d8\u91cf\uff0c\u901a\u5e38\u53ef\u7528\u4e8e\u4f7f\u7528\u6570\u636e\u5e93\u7b49\u914d\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u9b54\u672f\u53d8\u91cf\u5217\u8868"},"\u9b54\u672f\u53d8\u91cf\u5217\u8868"),(0,r.kt)("h4",{id:"\u6570\u636e\u5e93\u654f\u611f\u4fe1\u606f"},"\u6570\u636e\u5e93\u654f\u611f\u4fe1\u606f"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6570\u636e\u5e93\u5b9e\u4f8b\u7684",(0,r.kt)("strong",{parentName:"p"},"\u8fde\u63a5\u5730\u5740"),"\u3001",(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u540d"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u5bc6\u7801"),"\u7b49\u654f\u611f\u4fe1\u606f\uff0cKusion \u5c06\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u81ea\u52a8\u5c06\u5b83\u4eec\u6ce8\u5165\u5230\u7528\u6237\u7684\u5e94\u7528\u5bb9\u5668\u4e2d\uff0c\u76f8\u5173\u73af\u5883\u53d8\u91cf\u5982\u4e0b\u8868\u6240\u793a\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB_HOST"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u7684\u8fde\u63a5\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB_USERNAME"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KUSION_DB_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u5b9e\u4f8b\u5bc6\u7801")))))}u.isMDXComponent=!0}}]);