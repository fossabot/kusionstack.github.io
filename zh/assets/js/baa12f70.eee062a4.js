"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65641],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7009:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={},s="Roadmap",i={unversionedId:"reference/roadmap",id:"reference/roadmap",title:"Roadmap",description:"For a finer-grained view of our roadmap and what is being worked on for a release, please refer to the Roadmap",source:"@site/docs/kusion/6-reference/3-roadmap.md",sourceDirName:"6-reference",slug:"/reference/roadmap",permalink:"/zh/docs/next/reference/roadmap",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/3-roadmap.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"2024\u5e7410\u67085\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"kusion",previous:{title:"Resource Naming Conventions",permalink:"/zh/docs/next/reference/modules/naming-conventions"},next:{title:"Installation",permalink:"/zh/docs/next/faq/install-error"}},l={},c=[{value:"Expand Kusion Module Ecosystem to meet more scenarios",id:"expand-kusion-module-ecosystem-to-meet-more-scenarios",level:2},{value:"LLM (Large Language Models) Operation",id:"llm-large-language-models-operation",level:2},{value:"Kusion Server",id:"kusion-server",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"For a finer-grained view of our roadmap and what is being worked on for a release, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/KusionStack/projects/24"},"Roadmap")),(0,o.kt)("h2",{id:"expand-kusion-module-ecosystem-to-meet-more-scenarios"},"Expand Kusion Module Ecosystem to meet more scenarios"),(0,o.kt)("p",null,"We plan to expand the range of Kusion modules. This includes not only cloud services but also popular cloud-native projects such as Prometheus, Backstage, Crossplane, etc. By leveraging the ecosystem of CNCF projects and Terraform providers, we aim to enrich the Kusion module ecosystem to meet more scenarios."),(0,o.kt)("h2",{id:"llm-large-language-models-operation"},"LLM (Large Language Models) Operation"),(0,o.kt)("p",null,"Kusion is essentially designed to tackle team collaboration challenges. The LLM operations also involve many collaborative tasks. We believe Kusion can boost the operational efficiency of LLM engineers in this setting as well."),(0,o.kt)("h2",{id:"kusion-server"},"Kusion Server"),(0,o.kt)("p",null,"Currently, Kusion is a command-line tool, which has its pros and cons. Through our discussions with community users, we\u2018ve discovered that some of them prefer a long-running service with a web portal. We\u2019re planning to build this form of Kusion, and have already started developing some features."))}p.isMDXComponent=!0}}]);