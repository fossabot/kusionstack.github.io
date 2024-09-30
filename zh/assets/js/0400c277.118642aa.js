"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71372],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),f=n,v=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return o?r.createElement(v,a(a({ref:t},l),{},{components:o})):r.createElement(v,a({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},58072:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const i={sidebar_label:"Overview",id:"overview"},a="Overview",c={unversionedId:"concepts/project/overview",id:"version-v0.10/concepts/project/overview",title:"Overview",description:"A project in Kusion is defined as any folder that contains a project.yaml file and is linked to a Git repository. Typically, the mapping between a project and a repository is 1:1, however, it is possible to have multiple projects connected to a single repository\u2014for example, in the case of a monorepo. A project consists of one or more applications.",source:"@site/docs_versioned_docs/version-v0.10/3-concepts/1-project/1-overview.md",sourceDirName:"3-concepts/1-project",slug:"/concepts/project/overview",permalink:"/zh/docs/v0.10/concepts/project/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/3-concepts/1-project/1-overview.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727679725,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",id:"overview"},sidebar:"kusion",previous:{title:"Deliver the WordPress Application on Kubernetes",permalink:"/zh/docs/v0.10/getting-started/deliver-wordpress"},next:{title:"Project Configuration",permalink:"/zh/docs/v0.10/concepts/project/configuration"}},s={},p=[],l={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"A project in Kusion is defined as any folder that contains a project.yaml file and is linked to a Git repository. Typically, the mapping between a project and a repository is 1:1, however, it is possible to have multiple projects connected to a single repository\u2014for example, in the case of a monorepo. A project consists of one or more applications."),(0,n.kt)("p",null,"The purpose of the project is to bundle application configurations and refer to a Git repository. Specifically, it organizes logical configurations for internal components to orchestrate the application and assembles these configurations to suit different roles, such as developers and SREs, thereby covering the entire life cycle of application development."),(0,n.kt)("p",null,"From the perspective of the application development life cycle, the configuration delineated by the project is decoupled from the application code. It takes an immutable image as input, allowing users to perform operations and maintain the application within an independent configuration codebase."))}d.isMDXComponent=!0}}]);