"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84300],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={},o="secret",s={unversionedId:"reference/modules/developer-schemas/internal/secret/secret",id:"reference/modules/developer-schemas/internal/secret/secret",title:"secret",description:"Schema Secret",source:"@site/docs/kusion/6-reference/2-modules/1-developer-schemas/internal/secret/secret.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/internal/secret",slug:"/reference/modules/developer-schemas/internal/secret/",permalink:"/zh/docs/next/reference/modules/developer-schemas/internal/secret/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/1-developer-schemas/internal/secret/secret.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1719481502,formattedLastUpdatedAt:"2024\u5e746\u670827\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"probe",permalink:"/zh/docs/next/reference/modules/developer-schemas/internal/container/probe/"},next:{title:"prometheus",permalink:"/zh/docs/next/reference/modules/developer-schemas/monitoring/prometheus"}},i={},c=[{value:"Schema Secret",id:"schema-secret",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"secret"},"secret"),(0,a.kt)("h2",{id:"schema-secret"},"Schema Secret"),(0,a.kt)("p",null,"Secrets are used to provide data that is considered sensitive like passwords, API keys,",(0,a.kt)("br",null),"TLS certificates, tokens or other credentials."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"data")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Data contains the non-binary secret data in string form."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"immutable")),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Immutable, if set to true, ensures that data stored in the Secret cannot be updated."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"params")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Collection of parameters used to facilitate programmatic handling of secret data."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"type")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},'"basic"'),(0,a.kt)("td",{parentName:"tr",align:null},'"token"'),(0,a.kt)("td",{parentName:"tr",align:null},'"opaque"')))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.secret as sec\n\nbasicAuth = sec.Secret {\n    type: "basic"\n    data: {\n        "username": ""\n        "password": ""\n    }\n}\n')))}d.isMDXComponent=!0}}]);