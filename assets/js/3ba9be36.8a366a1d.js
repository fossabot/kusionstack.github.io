"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3407],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),u=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return t?o.createElement(f,a(a({ref:r},p),{},{components:t})):o.createElement(f,a({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<s;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7371:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=t(7462),n=(t(7294),t(3905));const s={},a="Roadmap",i={unversionedId:"kusion/reference/roadmap",id:"version-v0.9/kusion/reference/roadmap",title:"Roadmap",description:"For a finer-grained view into our roadmap and what is being worked on for a release, please refer to the GitHub Issue Tracker",source:"@site/versioned_docs/version-v0.9/kusion/reference/roadmap.md",sourceDirName:"kusion/reference",slug:"/kusion/reference/roadmap",permalink:"/docs/kusion/reference/roadmap",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/reference/roadmap.md",tags:[],version:"v0.9",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1705302018,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"Project & Stack Config Items",permalink:"/docs/kusion/reference/model/project-stack-config-items"},next:{title:"FAQ",permalink:"/docs/kusion/support/"}},l={},u=[{value:"Resource Ecosystem",id:"resource-ecosystem",level:2},{value:"App Progressive Rollout",id:"app-progressive-rollout",level:2},{value:"Custom Pipelines",id:"custom-pipelines",level:2},{value:"Runtime Plugin",id:"runtime-plugin",level:2}],p={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"roadmap"},"Roadmap"),(0,n.kt)("p",null,"For a finer-grained view into our roadmap and what is being worked on for a release, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/issues"},"GitHub Issue Tracker")),(0,n.kt)("h2",{id:"resource-ecosystem"},"Resource Ecosystem"),(0,n.kt)("p",null,"We plan to expand the range of resource types that our platform can handle. This includes not only traditional cloud IaaS resources, but also popular cloud-native products such as Prometheus, istio and Argo. By supporting a wider variety of resources, we aim to address the heterogeneous needs of modern applications and allow users to harness the full power of the cloud-native technologies."),(0,n.kt)("h2",{id:"app-progressive-rollout"},"App Progressive Rollout"),(0,n.kt)("p",null,"One of the key challenges in delivering applications at scale is to balance the need for speed with the need for reliability. To help our users achieve this balance, we will introduce progressive rollout strategies, such as canary release, rolling release, and percentage release. These techniques enable users to test new features or versions on a small subset of their users or infrastructure before rolling them out to the entire system. By doing so, users can minimize the risk of downtime or errors caused by untested changes."),(0,n.kt)("h2",{id:"custom-pipelines"},"Custom Pipelines"),(0,n.kt)("p",null,"Thie current workflow of KusionStack is ",(0,n.kt)("inlineCode",{parentName:"p"},"write"),",",(0,n.kt)("inlineCode",{parentName:"p"},"preview")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"apply"),", but to handle more complex deployments we need to empower users to customize the deployment pipelines to fit their specific workflows and requirements. This includes the ability to define custom stages, add or remove steps, and integrate with third-party tools. With customizable pipelines, users can streamline their deployment process, automate repetitive tasks, and satisfy their own needs by themself."),(0,n.kt)("h2",{id:"runtime-plugin"},"Runtime Plugin"),(0,n.kt)("p",null,"We have already supported IaaS cloud resources and Kubernetes resources, but we need a more flexible mechanism to support a broader range of on-premise infrastructure. By supporting a diverse set of infrastructures, we can help users avoid vendor lock-in, optimize their resource usage, and scale their applications across different regions and geographies."))}c.isMDXComponent=!0}}]);