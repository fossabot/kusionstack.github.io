"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,h=u["".concat(c,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:4},i="Glossary",s={unversionedId:"user_docs/concepts/glossary",id:"user_docs/concepts/glossary",title:"Glossary",description:'This page lists and defines technical terms that are widely used across KusionStack. Words such as "project", "stack", etc. can be overloaded in the technical community, so this page attempts to clarify their meaning in the context of KusionStack.',source:"@site/docs/user_docs/concepts/glossary.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/glossary",permalink:"/docs/user_docs/concepts/glossary",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/glossary.md",tags:[],version:"current",lastUpdatedBy:"Kan Wu",lastUpdatedAt:1695794467,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"user_docs",previous:{title:"KCL",permalink:"/docs/user_docs/concepts/kcl-lang"},next:{title:"Configuration File Overview",permalink:"/docs/user_docs/config-walkthrough/overview"}},c={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossary"},"Glossary"),(0,a.kt)("p",null,'This page lists and defines technical terms that are widely used across KusionStack. Words such as "project", "stack", etc. can be overloaded in the technical community, so this page attempts to clarify their meaning in the context of KusionStack.'),(0,a.kt)("h1",{id:"project"},"Project"),(0,a.kt)("p",null,"A project in Kusion is any folder which contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"project.yaml")," file and is linked to a Git repository. Usually the mapping between project and repository is 1:1, also you can have multiple projects connected to a single repository (for example, a monorepo). And a project is composed of one or more applications."),(0,a.kt)("p",null,'The purpose of the "project" is to bundle application configurations and a refer to Git repository. Specifically, it includes logical configurations for internal pieces to orchestrate the application, and it bundles these configurations in a way to fit different roles, e.g. developer, SRE, to cover the whole life-cycle of application development.'),(0,a.kt)("p",null,"From the perspective of the application development life cycle, the configuration described by the project is decoupled from the application code, takes the immutable image as input, and users could conduct the operation, and maintenance of the application in an independent configuration code base."),(0,a.kt)("h1",{id:"stack"},"Stack"),(0,a.kt)("p",null,"A stack in Kusion is any folder which contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml")," file under belonging project directory. Stack provides a mechanism to isolate multiple deploys of same application, it's the target workspace that an application will be deployed to, also the the smallest operation unit that can be configured and deployed independently. Stacks are commonly used to denote different phases of software development lifecycle e.g. development, staging, and production."),(0,a.kt)("p",null,"A project can have as many stacks as you need. By default, Kusion creates a default stack for you when you start a new project using the kusion init command."),(0,a.kt)("p",null,"Stacks let's you chose on which cluster your applications will be deployed to."),(0,a.kt)("h1",{id:"application"},"Application"),(0,a.kt)("p",null,"An application in Kusion is declared using the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," schema and represents a basic unit that is deployed. "),(0,a.kt)("p",null,"You can create multiple applications within a single project so they can share common configurations. This can be useful if you have several applications that are closely related, such as a backend system for content management and a frontend system for content delivery and display."),(0,a.kt)("h1",{id:"high-level-schema"},"High Level Schema"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High_Level_Schema",src:n(4994).Z,width:"2390",height:"1487"})))}d.isMDXComponent=!0},4994:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/high-level-schema-ba34668ea6879003a582f15496c3ab6e.png"}}]);