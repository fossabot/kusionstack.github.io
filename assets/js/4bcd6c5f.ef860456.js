"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l="opsrule",s={unversionedId:"kusion/reference/modules/developer-schemas/opsrule/opsrule",id:"kusion/reference/modules/developer-schemas/opsrule/opsrule",title:"opsrule",description:"Schema OpsRule",source:"@site/docs/kusion/6-reference/2-modules/1-developer-schemas/opsrule/opsrule.md",sourceDirName:"kusion/6-reference/2-modules/1-developer-schemas/opsrule",slug:"/kusion/reference/modules/developer-schemas/opsrule/",permalink:"/docs/next/kusion/reference/modules/developer-schemas/opsrule/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/1-developer-schemas/opsrule/opsrule.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1711964844,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"network",permalink:"/docs/next/kusion/reference/modules/developer-schemas/network/"},next:{title:"job",permalink:"/docs/next/kusion/reference/modules/developer-schemas/workload/job"}},i={},p=[{value:"Schema OpsRule",id:"schema-opsrule",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opsrule"},"opsrule"),(0,a.kt)("h2",{id:"schema-opsrule"},"Schema OpsRule"),(0,a.kt)("p",null,"OpsRule describes operation rules for various Day-2 Operations. Once declared, these",(0,a.kt)("br",null),"operation rules will be checked before any Day-2 operations."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"maxUnavailable")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum percentage of the total pod instances in the component that can be",(0,a.kt)("br",null),"simultaneously unhealthy.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import opsrule as o\nimport kam.v1.app_configuration\nimport kam.v1.workload as wl\nimport kam.v1.workload.container as c\n\nhelloworld : ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "nginx": c.Container {\n                image: "nginx:v1"\n            }\n        }\n    }\n    accessories: {\n        "opsrule" : o.OpsRule {\n            maxUnavailable: "30%"\n        }\n    }\n}\n')))}c.isMDXComponent=!0}}]);