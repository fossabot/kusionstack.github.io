"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9738],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=l(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||r;return n?o.createElement(d,i(i({ref:e},u),{},{components:n})):o.createElement(d,i({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13097:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={slug:"2022-kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era",title:"KusionStack:\u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u5e94\u7528\u89c4\u6a21\u5316\u8fd0\u7ef4\u89e3\u51b3\u65b9\u6848",authors:{name:"\u674e\u5927\u5143",title:"Kusion \u9879\u76ee\u8d1f\u8d23\u4eba"},tags:["KusionStack","Kusion"]},i=void 0,s={permalink:"/zh-CN/blog/2022-kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/blog/2022-11-24-kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-11-24-kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era/index.md",title:"KusionStack:\u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u5e94\u7528\u89c4\u6a21\u5316\u8fd0\u7ef4\u89e3\u51b3\u65b9\u6848",description:"KusionStack:\u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u5e94\u7528\u89c4\u6a21\u5316\u8fd0\u7ef4\u89e3\u51b3\u65b9\u6848",date:"2022-11-24T00:00:00.000Z",formattedDate:"2022\u5e7411\u670824\u65e5",tags:[{label:"KusionStack",permalink:"/zh-CN/blog/tags/kusion-stack"},{label:"Kusion",permalink:"/zh-CN/blog/tags/kusion"}],readingTime:.11,truncated:!1,authors:[{name:"\u674e\u5927\u5143",title:"Kusion \u9879\u76ee\u8d1f\u8d23\u4eba"}],frontMatter:{slug:"2022-kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era",title:"KusionStack:\u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u5e94\u7528\u89c4\u6a21\u5316\u8fd0\u7ef4\u89e3\u51b3\u65b9\u6848",authors:{name:"\u674e\u5927\u5143",title:"Kusion \u9879\u76ee\u8d1f\u8d23\u4eba"},tags:["KusionStack","Kusion"]},nextItem:{title:"KusionStack Origin, present and future",permalink:"/zh-CN/blog/2022-origin-present-and-future"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/community/raw/main/2022/talkgo/kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era.pdf"},(0,a.kt)("img",{loading:"lazy",alt:"KusionStack:\u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u5e94\u7528\u89c4\u6a21\u5316\u8fd0\u7ef4\u89e3\u51b3\u65b9\u6848",src:n(48653).Z,width:"1100",height:"619"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/community/raw/main/2022/talkgo/kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era.pdf"},"Download PDF")))}p.isMDXComponent=!0},48653:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era-f1f693d4bb2d7609a6434ad99d790296.png"}}]);