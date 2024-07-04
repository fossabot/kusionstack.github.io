"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},c="Architecture",i={unversionedId:"concepts/arch",id:"version-v0.9/concepts/arch",title:"Architecture",description:"KusionStack includes two core components:",source:"@site/docs_versioned_docs/version-v0.9/concepts/arch.md",sourceDirName:"concepts",slug:"/concepts/arch",permalink:"/docs/v0.9/concepts/arch",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/concepts/arch.md",tags:[],version:"v0.9",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1720085825,formattedLastUpdatedAt:"Jul 4, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kusion",previous:{title:"Concepts",permalink:"/docs/v0.9/concepts/"},next:{title:"Glossary",permalink:"/docs/v0.9/concepts/glossary"}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/workflow.png",alt:null})),(0,o.kt)("p",null,"KusionStack includes two core components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion"),": The engine to deliver intentions to Kubernetes and Clouds"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/catalog"},"Catalog"),": Catalog of shared Kusion Models and Generators.")),(0,o.kt)("p",null,"The image above illustrates the workflow of KusionStack and how it works. In the next section, we will describe each of these components in detail."))}u.isMDXComponent=!0}}]);