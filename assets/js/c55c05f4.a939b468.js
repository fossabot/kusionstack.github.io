"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),b=o,d=f["".concat(u,".").concat(b)]||f[b]||p[b]||c;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const c={},a="\u8d21\u732e\u6307\u5357",i={unversionedId:"governance/contribute/contribute",id:"governance/contribute/contribute",title:"\u8d21\u732e\u6307\u5357",description:"\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u53c2\u4e0e\u5f00\u6e90\u793e\u533a\uff0c\u53ef\u4ee5\u5148\u67e5\u770b Issue \u548c PR\uff08PullRequest\uff09\u4e2d\u76f8\u4f3c\u7684\u4fee\u6539\u3002\u7136\u540e\u9488\u5bf9\u81ea\u5df1\u7684\u95ee\u9898\u548c\u793e\u533a\u6216\u5f00\u53d1\u56e2\u961f\u540c\u5b66\u5145\u5206\u8ba8\u8bba\uff0c\u4e5f\u53ef\u4ee5\u540c\u521b\u5efa Issue \u7684\u65b9\u5f0f\u53cd\u9988\u9047\u5230\u7684\u95ee\u9898\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u9488\u5bf9\u76f8\u5173\u7684 Issue \u63d0\u4f9b\u4ee3\u7801\u8865\u4e01\u3002\u521a\u5f00\u59cb\u53ef\u4ee5\u4ece\u6587\u6863\u5b8c\u5584\u548c\u5c40\u90e8\u4ee3\u7801\u6539\u8fdb\u5f00\u59cb\uff0c\u6bd4\u5982\uff1a\u6587\u6863\u3001Examples\u3001\u591a\u8bed\u8a00 Binding\u7b49\u3002\u540c\u65f6\u8fd9\u5bf9\u5e0c\u671b\u6df1\u5165\u53c2\u4e0e\u7684\u540c\u5b66\u80fd\u591f\u9488\u5bf9\u8bed\u8a00\u529f\u80fd\u3001\u8bed\u8a00\u6d4b\u8bd5\u3001\u7f16\u7a0b\u6846\u67b6\u3001\u591a\u79cd\u540e\u7aef\u7b49\u6838\u5fc3\u7279\u6027\u505a\u8d21\u732e\u3002",source:"@site/docs/governance/contribute/contribute.md",sourceDirName:"governance/contribute",slug:"/governance/contribute/",permalink:"/docs/governance/contribute/",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/governance/contribute/contribute.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1663817930,formattedLastUpdatedAt:"9/22/2022",frontMatter:{},sidebar:"governance",previous:{title:"kusionctl \u53d1\u7248\u7b56\u7565",permalink:"/docs/governance/release-policy/kusion"},next:{title:"\u5982\u4f55\u8d21\u732e\u6587\u6863",permalink:"/docs/governance/contribute/contribute-docs"}},u={},s=[],l={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8d21\u732e\u6307\u5357"},"\u8d21\u732e\u6307\u5357"),(0,o.kt)("p",null,"\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u53c2\u4e0e\u5f00\u6e90\u793e\u533a\uff0c\u53ef\u4ee5\u5148\u67e5\u770b Issue \u548c PR\uff08PullRequest\uff09\u4e2d\u76f8\u4f3c\u7684\u4fee\u6539\u3002\u7136\u540e\u9488\u5bf9\u81ea\u5df1\u7684\u95ee\u9898\u548c\u793e\u533a\u6216\u5f00\u53d1\u56e2\u961f\u540c\u5b66\u5145\u5206\u8ba8\u8bba\uff0c\u4e5f\u53ef\u4ee5\u540c\u521b\u5efa Issue \u7684\u65b9\u5f0f\u53cd\u9988\u9047\u5230\u7684\u95ee\u9898\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u9488\u5bf9\u76f8\u5173\u7684 Issue \u63d0\u4f9b\u4ee3\u7801\u8865\u4e01\u3002\u521a\u5f00\u59cb\u53ef\u4ee5\u4ece\u6587\u6863\u5b8c\u5584\u548c\u5c40\u90e8\u4ee3\u7801\u6539\u8fdb\u5f00\u59cb\uff0c\u6bd4\u5982\uff1a\u6587\u6863\u3001Examples\u3001\u591a\u8bed\u8a00 Binding\u7b49\u3002\u540c\u65f6\u8fd9\u5bf9\u5e0c\u671b\u6df1\u5165\u53c2\u4e0e\u7684\u540c\u5b66\u80fd\u591f\u9488\u5bf9\u8bed\u8a00\u529f\u80fd\u3001\u8bed\u8a00\u6d4b\u8bd5\u3001\u7f16\u7a0b\u6846\u67b6\u3001\u591a\u79cd\u540e\u7aef\u7b49\u6838\u5fc3\u7279\u6027\u505a\u8d21\u732e\u3002"))}p.isMDXComponent=!0}}]);