"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},81246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},p="KEP \u63d0\u6848",c={unversionedId:"develop/kep",id:"develop/kep",title:"KEP \u63d0\u6848",description:"KEP \u662f KCL \u8bed\u8a00\u589e\u5f3a\u5efa\u8bae\uff08KCL Enhancement Proposals\uff09\u7684\u7f29\u5199\u3002\u4e00\u4e2a KEP \u662f\u4e00\u4efd\u4e3a KCL \u793e\u533a\u63d0\u4f9b\u5404\u79cd\u589e\u5f3a\u529f\u80fd\u7684\u6280\u672f\u89c4\u683c\uff0c\u4e5f\u662f\u63d0\u4ea4\u65b0\u7279\u6027\uff0c\u4ee5\u4fbf\u8ba9\u793e\u533a\u6307\u51fa\u95ee\u9898\uff0c\u7cbe\u786e\u5316\u6280\u672f\u6587\u6863\u7684\u63d0\u6848\u3002\u53ef\u4ee5\u53c2\u8003 KEP-1 \u6587\u4ef6\u683c\u5f0f\u4e66\u5199\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/develop/kep.md",sourceDirName:"develop",slug:"/develop/kep",permalink:"/zh-CN/docs/develop/kep",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/kep.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685503692,formattedLastUpdatedAt:"2023/5/31",frontMatter:{},sidebar:"develop",previous:{title:"KCLVM \u6574\u4f53\u67b6\u6784",permalink:"/zh-CN/docs/develop/design/kclvm"}},i={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kep-\u63d0\u6848"},"KEP \u63d0\u6848"),(0,o.kt)("p",null,"KEP \u662f KCL \u8bed\u8a00\u589e\u5f3a\u5efa\u8bae\uff08KCL Enhancement Proposals\uff09\u7684\u7f29\u5199\u3002\u4e00\u4e2a KEP \u662f\u4e00\u4efd\u4e3a KCL \u793e\u533a\u63d0\u4f9b\u5404\u79cd\u589e\u5f3a\u529f\u80fd\u7684\u6280\u672f\u89c4\u683c\uff0c\u4e5f\u662f\u63d0\u4ea4\u65b0\u7279\u6027\uff0c\u4ee5\u4fbf\u8ba9\u793e\u533a\u6307\u51fa\u95ee\u9898\uff0c\u7cbe\u786e\u5316\u6280\u672f\u6587\u6863\u7684\u63d0\u6848\u3002\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KEP/blob/main/keps/KEP-0001.md"},"KEP-1")," \u6587\u4ef6\u683c\u5f0f\u4e66\u5199\u3002"),(0,o.kt)("p",null,"KEP \u4ed3\u5e93\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KEP"},"https://github.com/KusionStack/KEP")))}u.isMDXComponent=!0}}]);