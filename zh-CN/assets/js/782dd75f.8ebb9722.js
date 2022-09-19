"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,u=new Array(c);u[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<c;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const c={},u="\u6784\u5efa KusionStack",i={unversionedId:"develop/build-from-source/build-from-source",id:"develop/build-from-source/build-from-source",title:"\u6784\u5efa KusionStack",description:"\u5f53\u7528\u6237\u5e0c\u671b\u81ea\u5df1\u4fee\u6539\u5e95\u5c42\u4ee3\u7801\u5e76\u67e5\u770b\u6548\u679c\u65f6\uff0c\u5e0c\u671b\u4ece\u4ee3\u7801\u6784\u5efa KusionStack \u5de5\u5177\u3002\u4ece\u4ee3\u7801\u6784\u5efa\u4e0d\u4ec5\u4ec5\u662f\u5f00\u53d1 KusionStack \u9879\u76ee\u7684\u5fc5\u8981\u6761\u4ef6\uff0c\u4e5f\u662f\u6b63\u5e38\u4e8c\u8fdb\u5236\u6253\u5305\u548c\u53d1\u5e03\u7684\u5fc5\u7ecf\u6d41\u7a0b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/develop/build-from-source/build-from-source.md",sourceDirName:"develop/build-from-source",slug:"/develop/build-from-source/",permalink:"/zh-CN/docs/develop/build-from-source/",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/build-from-source/build-from-source.md",tags:[],version:"current",lastUpdatedBy:"Hao Yuan",lastUpdatedAt:1663581487,formattedLastUpdatedAt:"2022/9/19",frontMatter:{},sidebar:"develop",previous:{title:"\u6784\u5efa\u6587\u6863",permalink:"/zh-CN/docs/develop/build-docs/"},next:{title:"Docker \u548c Ubuntu \u73af\u5883",permalink:"/zh-CN/docs/develop/build-from-source/docker"}},a={},l=[],s={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6784\u5efa-kusionstack"},"\u6784\u5efa KusionStack"),(0,o.kt)("p",null,"\u5f53\u7528\u6237\u5e0c\u671b\u81ea\u5df1\u4fee\u6539\u5e95\u5c42\u4ee3\u7801\u5e76\u67e5\u770b\u6548\u679c\u65f6\uff0c\u5e0c\u671b\u4ece\u4ee3\u7801\u6784\u5efa KusionStack \u5de5\u5177\u3002\u4ece\u4ee3\u7801\u6784\u5efa\u4e0d\u4ec5\u4ec5\u662f\u5f00\u53d1 KusionStack \u9879\u76ee\u7684\u5fc5\u8981\u6761\u4ef6\uff0c\u4e5f\u662f\u6b63\u5e38\u4e8c\u8fdb\u5236\u6253\u5305\u548c\u53d1\u5e03\u7684\u5fc5\u7ecf\u6d41\u7a0b\u3002"))}p.isMDXComponent=!0}}]);