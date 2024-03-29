"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,k=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l="common",s={unversionedId:"kusion/reference/modules/developer-schemas/internal/common",id:"kusion/reference/modules/developer-schemas/internal/common",title:"common",description:"Schema WorkloadBase",source:"@site/docs/kusion/6-reference/2-modules/1-developer-schemas/internal/common.md",sourceDirName:"kusion/6-reference/2-modules/1-developer-schemas/internal",slug:"/kusion/reference/modules/developer-schemas/internal/common",permalink:"/docs/next/kusion/reference/modules/developer-schemas/internal/common",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/1-developer-schemas/internal/common.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1711703238,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"postgres",permalink:"/docs/next/kusion/reference/modules/developer-schemas/database/postgres"},next:{title:"container",permalink:"/docs/next/kusion/reference/modules/developer-schemas/internal/container/"}},i={},c=[{value:"Schema WorkloadBase",id:"schema-workloadbase",level:2},{value:"Attributes",id:"attributes",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common"},"common"),(0,a.kt)("h2",{id:"schema-workloadbase"},"Schema WorkloadBase"),(0,a.kt)("p",null,"WorkloadBase defines set of attributes shared by different workload profile, e.g Service",(0,a.kt)("br",null),"and Job. You can inherit this Schema to reuse these common attributes."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"annotations")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Annotations are key/value pairs that attach arbitrary non-identifying metadata to the workload."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"containers")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:}"),(0,a.kt)("td",{parentName:"tr",align:null},"Containers defines the templates of containers to be ran.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers"},"https://kubernetes.io/docs/concepts/containers")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"labels")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Labels are key/value pairs that are attached to the workload."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"replicas")),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of container replicas based on this configuration that should be ran."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"secrets")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:",(0,a.kt)("a",{parentName:"td",href:"#schema-secret"},"s.Secret"),"}"),(0,a.kt)("td",{parentName:"tr",align:null},"Secrets can be used to store small amount of sensitive data e.g. password, token."),(0,a.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);