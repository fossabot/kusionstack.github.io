"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={id:"overview",title:"Overview",slug:"/"},i="Overview",s={unversionedId:"what-is-kusion/overview",id:"what-is-kusion/overview",title:"Overview",description:"Welcome to Kusion! This introduction section covers what Kusion is, the Kusion workflow, and how Kusion compares to other software. If you just want to dive into using Kusion, feel free to skip ahead to the Getting Started section.",source:"@site/docs/kusion/1-what-is-kusion/1-overview.md",sourceDirName:"1-what-is-kusion",slug:"/",permalink:"/docs/next/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/1-what-is-kusion/1-overview.md",tags:[],version:"current",lastUpdatedBy:"hexin",lastUpdatedAt:1720601103,formattedLastUpdatedAt:"Jul 10, 2024",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"kusion",next:{title:"Kusion vs Other Software",permalink:"/docs/next/what-is-kusion/kusion-vs-x"}},l={},p=[{value:"What is Kusion?",id:"what-is-kusion",level:2},{value:"How does Kusion work?",id:"how-does-kusion-work",level:2},{value:"Kusion Highlights",id:"kusion-highlights",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Welcome to Kusion! This introduction section covers what Kusion is, the Kusion workflow, and how Kusion compares to other software. If you just want to dive into using Kusion, feel free to skip ahead to the ",(0,r.kt)("a",{parentName:"p",href:"getting-started/install-kusion"},"Getting Started")," section."),(0,r.kt)("h2",{id:"what-is-kusion"},"What is Kusion?"),(0,r.kt)("p",null,"Kusion is an intent-driven ",(0,r.kt)("a",{parentName:"p",href:"https://internaldeveloperplatform.org/platform-orchestrators/"},"Platform Orchestrator"),", which sits at the core of an ",(0,r.kt)("a",{parentName:"p",href:"https://internaldeveloperplatform.org/what-is-an-internal-developer-platform/"},"Internal Developer Platform (IDP)"),". With Kusion you can enable app-centric development, your developers only need to write a single application specification - ",(0,r.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/concepts/app-configuration"},"AppConfiguration"),". ",(0,r.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/concepts/app-configuration"},"AppConfiguration")," defines the workload and all resource dependencies without needing to supply environment-specific values, Kusion ensures it provides everything needed for the application to run."),(0,r.kt)("p",null,"Kusion helps app developers who are responsible for creating applications and the platform engineers responsible for maintaining the infrastructure the applications run on. These roles may overlap or align differently in your organization, but Kusion is intended to ease the workload for any practitioner responsible for either set of tasks."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/overview.jpg",alt:"arch"})),(0,r.kt)("h2",{id:"how-does-kusion-work"},"How does Kusion work?"),(0,r.kt)("p",null,"As a Platform Orchestrator, Kusion enables you to address challenges often associated with Day 0 and Day 1. Both platform engineers and application engineers can benefit from Kusion."),(0,r.kt)("p",null,"There are two key workflows for Kusion:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Day 0 - Set up the modules and workspaces:")," Platform engineers create shared modules for deploying applications and their underlying infrastructure, and workspace definitions for target landing zone. These standardized, shared modules codify the requirements from stakeholders across the organization including security, compliance, and finance."),(0,r.kt)("p",{parentName:"li"},"Kusion modules abstract the complexity of underlying infrastructure tooling, enabling app developers to deploy their applications using a self-service model."),(0,r.kt)("div",{align:"center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/platform_workflow.jpg",alt:"workflow"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Day 1 - Set up the application:")," Application developers leverage the workspaces and modules created by the platform engineers to deploy applications and their supporting infrastructure. The platform team maintains the workspaces and modules, which allows application developers to focus on building applications using a repeatable process on standardized infrastructure."),(0,r.kt)("div",{align:"center"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/app_workflow.jpg",alt:"workflow"}))))),(0,r.kt)("h2",{id:"kusion-highlights"},"Kusion Highlights"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Platform as Code")),(0,r.kt)("p",{parentName:"li"},"Specify desired application intent through declarative configuration code, drive continuous deployment with any CI/CD systems or GitOps to match that intent. No ad-hoc scripts, no hard maintain custom workflows, just declarative configuration code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Dynamic Configuration Management")),(0,r.kt)("p",{parentName:"li"},"Enable platform teams to set baseline-templates, control how and where to deploy application workloads and provision accessory resources. While still enabling application developers freedom via workload-centric specification and deployment. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Security & Compliance Built In")),(0,r.kt)("p",{parentName:"li"},"Enforce security and infrastructure best practices with out-of-box ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"base models"),", create security and compliance guardrails for any Kusion deploy with third-party Policy as Code tools. All accessory resource secrets are automatically injected into Workloads.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Lightweight and Open Model Ecosystem")),(0,r.kt)("p",{parentName:"li"},"Pure client-side solution ensures good portability and the rich APIs make it easier to integrate and automate. Large growing model ecosystem covers all stages in  application lifecycle, with extensive connections to various infrastructure capabilities. "))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Kusion is an early project.")," The end goal of Kusion is to boost ",(0,r.kt)("a",{parentName:"p",href:"https://internaldeveloperplatform.org/"},"Internal Developer Platform")," revolution, and we are iterating on Kusion quickly to strive towards this goal. For any help or feedback, please contact us in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/community/discussions/categories/meeting"},"Slack")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/issues"},"issues"),".")))}u.isMDXComponent=!0}}]);