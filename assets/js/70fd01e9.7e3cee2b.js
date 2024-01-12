"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Overview",id:"overview"},i="Overview",c={unversionedId:"kusion/concepts/stack/overview",id:"kusion/concepts/stack/overview",title:"Overview",description:"A stack in Kusion is any folder that contains a stack.yaml file within the corresponding project directory. A stack provides a mechanism to isolate multiple deployments of the same application, serving as the target workspace to which an application will be deployed. It is also the smallest operational unit that can be configured and deployed independently. Stacks are commonly used to denote different phases of the software development lifecycle, such as development, staging, and production.",source:"@site/docs/kusion/3-concepts/2-stack/1-overview.md",sourceDirName:"kusion/3-concepts/2-stack",slug:"/kusion/concepts/stack/overview",permalink:"/docs/next/kusion/concepts/stack/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/2-stack/1-overview.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1705049329,formattedLastUpdatedAt:"Jan 12, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",id:"overview"},sidebar:"kusion",previous:{title:"Project Configuration",permalink:"/docs/next/kusion/concepts/project/configuration"},next:{title:"Stack Configuration",permalink:"/docs/next/kusion/concepts/stack/configuration"}},s={},l=[{value:"High Level Schema",id:"high-level-schema",level:2}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A stack in Kusion is any folder that contains a stack.yaml file within the corresponding project directory. A stack provides a mechanism to isolate multiple deployments of the same application, serving as the target workspace to which an application will be deployed. It is also the smallest operational unit that can be configured and deployed independently. Stacks are commonly used to denote different phases of the software development lifecycle, such as development, staging, and production."),(0,r.kt)("h2",{id:"high-level-schema"},"High Level Schema"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"High_Level_Schema",src:n(4994).Z,width:"2390",height:"1487"})))}d.isMDXComponent=!0},4994:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/high-level-schema-ba34668ea6879003a582f15496c3ab6e.png"}}]);