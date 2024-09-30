"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||i;return r?o.createElement(m,a(a({ref:t},l),{},{components:r})):o.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94673:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_label:"Overview",id:"overview"},a="Overview",c={unversionedId:"concepts/project/overview",id:"concepts/project/overview",title:"Overview",description:"A project in Kusion is defined as a folder that contains a project.yaml file and is generally recommended to be linked to a Git repository. Typically, the mapping between a project and a repository is 1:1, however, it is possible to have multiple projects connected to a single repository \u2014 for example, in the case of a monorepo. A project consists of one or more applications.",source:"@site/docs/kusion/3-concepts/1-project/1-overview.md",sourceDirName:"3-concepts/1-project",slug:"/concepts/project/overview",permalink:"/zh/docs/next/concepts/project/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/1-project/1-overview.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",id:"overview"},sidebar:"kusion",previous:{title:"Overview",permalink:"/zh/docs/next/concepts/overview"},next:{title:"Project file reference",permalink:"/zh/docs/next/concepts/project/configuration"}},p={},s=[],l={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"A project in Kusion is defined as a folder that contains a ",(0,n.kt)("inlineCode",{parentName:"p"},"project.yaml")," file and is generally recommended to be linked to a Git repository. Typically, the mapping between a project and a repository is 1:1, however, it is possible to have multiple projects connected to a single repository \u2014 for example, in the case of a monorepo. A project consists of one or more applications."),(0,n.kt)("p",null,"The purpose of the project is to bundle application configurations there are relevant. Specifically, it organizes logical configurations for internal components to orchestrate the application and assembles these configurations to suit different roles, such as developers and SREs, thereby covering the entire lifecycle of application development."),(0,n.kt)("p",null,"From the perspective of the application development lifecycle, the configurations delineated by the project is decoupled from the application code. It takes an immutable image as input, allowing users to perform operations and maintain the application within an independent configuration codebase."))}d.isMDXComponent=!0}}]);