"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},s="Roadmap",i={unversionedId:"kusion/reference/roadmap",id:"kusion/reference/roadmap",title:"Roadmap",description:"For a finer-grained view into our roadmap and what is being worked on for a release, please refer to the GitHub Issue Tracker",source:"@site/docs/kusion/6-reference/3-roadmap.md",sourceDirName:"kusion/6-reference",slug:"/kusion/reference/roadmap",permalink:"/docs/next/kusion/reference/roadmap",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/3-roadmap.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1709209592,formattedLastUpdatedAt:"Feb 29, 2024",sidebarPosition:3,frontMatter:{},sidebar:"kusion",previous:{title:"Resource Naming Conventions",permalink:"/docs/next/kusion/reference/modules/naming-conventions"},next:{title:"Installation",permalink:"/docs/next/kusion/faq/install-error"}},l={},u=[{value:"Resource Ecosystem",id:"resource-ecosystem",level:2},{value:"App Progressive Rollout",id:"app-progressive-rollout",level:2},{value:"Custom Pipelines",id:"custom-pipelines",level:2},{value:"Runtime Plugin",id:"runtime-plugin",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"For a finer-grained view into our roadmap and what is being worked on for a release, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/issues"},"GitHub Issue Tracker")),(0,o.kt)("h2",{id:"resource-ecosystem"},"Resource Ecosystem"),(0,o.kt)("p",null,"We plan to expand the range of resource types that our platform can handle. This includes not only traditional cloud IaaS resources, but also popular cloud-native products such as Prometheus, istio and Argo. By supporting a wider variety of resources, we aim to address the heterogeneous needs of modern applications and allow users to harness the full power of the cloud-native technologies."),(0,o.kt)("h2",{id:"app-progressive-rollout"},"App Progressive Rollout"),(0,o.kt)("p",null,"One of the key challenges in delivering applications at scale is to balance the need for speed with the need for reliability. To help our users achieve this balance, we will introduce progressive rollout strategies, such as canary release, rolling release, and percentage release. These techniques enable users to test new features or versions on a small subset of their users or infrastructure before rolling them out to the entire system. By doing so, users can minimize the risk of downtime or errors caused by untested changes."),(0,o.kt)("h2",{id:"custom-pipelines"},"Custom Pipelines"),(0,o.kt)("p",null,"Thie current workflow of KusionStack is ",(0,o.kt)("inlineCode",{parentName:"p"},"write"),",",(0,o.kt)("inlineCode",{parentName:"p"},"preview")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"apply"),", but to handle more complex deployments we need to empower users to customize the deployment pipelines to fit their specific workflows and requirements. This includes the ability to define custom stages, add or remove steps, and integrate with third-party tools. With customizable pipelines, users can streamline their deployment process, automate repetitive tasks, and satisfy their own needs by themselves."),(0,o.kt)("h2",{id:"runtime-plugin"},"Runtime Plugin"),(0,o.kt)("p",null,"We have already supported IaaS cloud resources and Kubernetes resources, but we need a more flexible mechanism to support a broader range of on-premise infrastructure. By supporting a diverse set of infrastructures, we can help users avoid vendor lock-in, optimize their resource usage, and scale their applications across different regions and geographies."))}c.isMDXComponent=!0}}]);