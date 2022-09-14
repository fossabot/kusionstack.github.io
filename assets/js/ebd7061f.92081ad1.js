"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(c,".").concat(f)]||d[f]||l[f]||s;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const s={},a="\u5feb\u901f\u5f00\u59cb",i={unversionedId:"user_docs/getting-started/getting-started",id:"user_docs/getting-started/getting-started",title:"\u5feb\u901f\u5f00\u59cb",description:"\u5feb\u901f\u5f00\u59cb\u4ee5\u6700\u5feb\u6d41\u7a0b\u5bf9 Kusion \u6709\u4e00\u4e2a\u7b80\u5355\u76f4\u89c2\u7684\u4f53\u9a8c\uff0c\u5176\u4e2d\u5305\u542b Kusion \u7684\u5feb\u901f\u5b89\u88c5\u3001KCL \u914d\u7f6e\u8bed\u8a00\u7684\u901f\u89c8\u3001Kusion \u6a21\u578b\u5e93\u548c\u5982\u4f55\u901a\u8fc7 Kusion \u5de5\u5177\u5feb\u901f\u90e8\u7f72 Kubernetes \u5b98\u65b9\u7684 Guestbook \u4f8b\u5b50\u3002",source:"@site/docs/user_docs/getting-started/getting-started.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/",permalink:"/docs/user_docs/getting-started/",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/getting-started.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663160649,formattedLastUpdatedAt:"9/14/2022",frontMatter:{},sidebar:"user_docs",previous:{title:"Introduction to KusionStack",permalink:"/docs/user_docs/intro/kusion-intro"},next:{title:"\u4e0b\u8f7d\u548c\u5b89\u88c5",permalink:"/docs/user_docs/getting-started/install/"}},c={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("p",null,"\u5feb\u901f\u5f00\u59cb\u4ee5\u6700\u5feb\u6d41\u7a0b\u5bf9 ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/intro/kusion-intro"},"Kusion")," \u6709\u4e00\u4e2a\u7b80\u5355\u76f4\u89c2\u7684\u4f53\u9a8c\uff0c\u5176\u4e2d\u5305\u542b Kusion \u7684\u5feb\u901f\u5b89\u88c5\u3001KCL \u914d\u7f6e\u8bed\u8a00\u7684\u901f\u89c8\u3001Kusion \u6a21\u578b\u5e93\u548c\u5982\u4f55\u901a\u8fc7 Kusion \u5de5\u5177\u5feb\u901f\u90e8\u7f72 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," \u5b98\u65b9\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/tutorials/stateless-application/guestbook"},"Guestbook")," \u4f8b\u5b50\u3002"))}l.isMDXComponent=!0}}]);