"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88880],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return t?n.createElement(f,s(s({ref:r},p),{},{components:t})):n.createElement(f,s({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},41916:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={},s="Roadmap",i={unversionedId:"reference/roadmap",id:"version-v0.11/reference/roadmap",title:"Roadmap",description:"For a finer-grained view into our roadmap and what is being worked on for a release, please refer to the GitHub Issue Tracker",source:"@site/docs_versioned_docs/version-v0.11/6-reference/3-roadmap.md",sourceDirName:"6-reference",slug:"/reference/roadmap",permalink:"/zh/docs/v0.11/reference/roadmap",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/6-reference/3-roadmap.md",tags:[],version:"v0.11",lastUpdatedBy:"YuKang",lastUpdatedAt:1719920351,formattedLastUpdatedAt:"2024\u5e747\u67082\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"kusion",previous:{title:"Resource Naming Conventions",permalink:"/zh/docs/v0.11/reference/modules/naming-conventions"},next:{title:"Installation",permalink:"/zh/docs/v0.11/faq/install-error"}},l={},u=[{value:"Resource Ecosystem",id:"resource-ecosystem",level:2},{value:"App Progressive Rollout",id:"app-progressive-rollout",level:2},{value:"Custom Pipelines",id:"custom-pipelines",level:2},{value:"Runtime Plugin",id:"runtime-plugin",level:2}],p={toc:u};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"For a finer-grained view into our roadmap and what is being worked on for a release, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/issues"},"GitHub Issue Tracker")),(0,o.kt)("h2",{id:"resource-ecosystem"},"Resource Ecosystem"),(0,o.kt)("p",null,"We plan to expand the range of resource types that our platform can handle. This includes not only traditional cloud IaaS resources, but also popular cloud-native products such as Prometheus, istio and Argo. By supporting a wider variety of resources, we aim to address the heterogeneous needs of modern applications and allow users to harness the full power of the cloud-native technologies."),(0,o.kt)("h2",{id:"app-progressive-rollout"},"App Progressive Rollout"),(0,o.kt)("p",null,"One of the key challenges in delivering applications at scale is to balance the need for speed with the need for reliability. To help our users achieve this balance, we will introduce progressive rollout strategies, such as canary release, rolling release, and percentage release. These techniques enable users to test new features or versions on a small subset of their users or infrastructure before rolling them out to the entire system. By doing so, users can minimize the risk of downtime or errors caused by untested changes."),(0,o.kt)("h2",{id:"custom-pipelines"},"Custom Pipelines"),(0,o.kt)("p",null,"Thie current workflow of KusionStack is ",(0,o.kt)("inlineCode",{parentName:"p"},"write"),",",(0,o.kt)("inlineCode",{parentName:"p"},"preview")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"apply"),", but to handle more complex deployments we need to empower users to customize the deployment pipelines to fit their specific workflows and requirements. This includes the ability to define custom stages, add or remove steps, and integrate with third-party tools. With customizable pipelines, users can streamline their deployment process, automate repetitive tasks, and satisfy their own needs by themselves."),(0,o.kt)("h2",{id:"runtime-plugin"},"Runtime Plugin"),(0,o.kt)("p",null,"We have already supported IaaS cloud resources and Kubernetes resources, but we need a more flexible mechanism to support a broader range of on-premise infrastructure. By supporting a diverse set of infrastructures, we can help users avoid vendor lock-in, optimize their resource usage, and scale their applications across different regions and geographies."))}c.isMDXComponent=!0}}]);