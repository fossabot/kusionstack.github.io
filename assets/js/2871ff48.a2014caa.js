"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={id:"configuration",sidebar_label:"Stack Configuration"},i="Stack Configuration",c={unversionedId:"concepts/stack/configuration",id:"version-v0.10/concepts/stack/configuration",title:"Stack Configuration",description:"Users can add config items of the stack in stack.yaml, such as the stack name, etc.",source:"@site/docs_versioned_docs/version-v0.10/3-concepts/2-stack/2-configuration.md",sourceDirName:"3-concepts/2-stack",slug:"/concepts/stack/configuration",permalink:"/docs/v0.10/concepts/stack/configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/3-concepts/2-stack/2-configuration.md",tags:[],version:"v0.10",lastUpdatedBy:"elliotxx",lastUpdatedAt:1712803775,formattedLastUpdatedAt:"Apr 11, 2024",sidebarPosition:2,frontMatter:{id:"configuration",sidebar_label:"Stack Configuration"},sidebar:"kusion",previous:{title:"Overview",permalink:"/docs/v0.10/concepts/stack/overview"},next:{title:"Kusion Module",permalink:"/docs/v0.10/concepts/kusion-module"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stack-configuration"},"Stack Configuration"),(0,a.kt)("p",null,"Users can add config items of the stack in ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml"),", such as the stack name, etc."),(0,a.kt)("p",null,"Here is an example of ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# The stack basic info\nname: dev\n")),(0,a.kt)("p",null,"The config items in ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml")," are explained below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),": The name of the stack, should be same as the workspace name, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"pre")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"prod"),".")))}u.isMDXComponent=!0}}]);