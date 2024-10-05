"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,u=f["".concat(c,".").concat(m)]||f[m]||d[m]||i;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_label:"Overview",id:"overview"},o="Overview",s={unversionedId:"concepts/stack/overview",id:"concepts/stack/overview",title:"Overview",description:"A stack in Kusion is defined as a folder within the project directory that contains a stack.yaml file. Stacks provide a mechanism to isolate multiple sets of different configurations in the same project. It is also the smallest unit of operation that can be configured and deployed independently.",source:"@site/docs/kusion/3-concepts/2-stack/1-overview.md",sourceDirName:"3-concepts/2-stack",slug:"/concepts/stack/overview",permalink:"/docs/next/concepts/stack/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/2-stack/1-overview.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"Oct 5, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",id:"overview"},sidebar:"kusion",previous:{title:"Project file reference",permalink:"/docs/next/concepts/project/configuration"},next:{title:"Stack file reference",permalink:"/docs/next/concepts/stack/configuration"}},c={},l=[{value:"High Level Schema",id:"high-level-schema",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"A stack in Kusion is defined as a folder within the project directory that contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml")," file. Stacks provide a mechanism to isolate multiple sets of different configurations in the same project. It is also the smallest unit of operation that can be configured and deployed independently. "),(0,a.kt)("p",null,"The most common way to leverage stacks is to denote different phases of the software development lifecycle, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"development"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"staging"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"production"),", etc. For instance, in the case where the image and resource requirements for an application workload might be different across different phases in the SDLC, they can be represented by different stacks in the same project, namely ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stage")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"prod"),"."),(0,a.kt)("p",null,'To distinguish this from the deploy-time concept of a "target environment" - which Kusion defines as ',(0,a.kt)("inlineCode",{parentName:"p"},"workspaces"),", ",(0,a.kt)("strong",{parentName:"p"},"stack")," is a development-time concept for application developers to manage different configurations. One way to illustrate the difference is that you can easily be deploying the ",(0,a.kt)("inlineCode",{parentName:"p"},"prod")," stack to multiple target environments, for example, ",(0,a.kt)("inlineCode",{parentName:"p"},"aws-prod-us-east"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"aws-prod-us-east-2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"azure-prod-westus"),"."),(0,a.kt)("h2",{id:"high-level-schema"},"High Level Schema"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High_Level_Schema",src:n(4994).Z,width:"2390",height:"1487"})))}d.isMDXComponent=!0},4994:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/high-level-schema-ba34668ea6879003a582f15496c3ab6e.png"}}]);