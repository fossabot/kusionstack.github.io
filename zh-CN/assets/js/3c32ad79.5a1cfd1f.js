"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7377],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),s=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),k=s(n),m=i,d=k["".concat(l,".").concat(m)]||k[m]||p[m]||r;return n?o.createElement(d,a(a({ref:e},u),{},{components:n})):o.createElement(d,a({ref:e},u))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,a=new Array(r);a[0]=k;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:i,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},83193:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:1},a="\u4ed3\u5e93\u7ed3\u6784",c={unversionedId:"develop/repos",id:"develop/repos",title:"\u4ed3\u5e93\u7ed3\u6784",description:"1. \u4e3b\u8981\u4ed3\u5e93",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/develop/repos.md",sourceDirName:"develop",slug:"/develop/repos",permalink:"/zh-CN/docs/develop/repos",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/repos.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685505679,formattedLastUpdatedAt:"2023/5/31",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"develop",next:{title:"\u6784\u5efa\u6587\u6863",permalink:"/zh-CN/docs/develop/build-docs/"}},l={},s=[{value:"1. \u4e3b\u8981\u4ed3\u5e93",id:"1-\u4e3b\u8981\u4ed3\u5e93",level:2},{value:"2. \u6587\u6863\u4ed3\u5e93",id:"2-\u6587\u6863\u4ed3\u5e93",level:2},{value:"3. KCLVM \u4ed3\u5e93",id:"3-kclvm-\u4ed3\u5e93",level:2}],u={toc:s};function p(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4ed3\u5e93\u7ed3\u6784"},"\u4ed3\u5e93\u7ed3\u6784"),(0,i.kt)("h2",{id:"1-\u4e3b\u8981\u4ed3\u5e93"},"1. \u4e3b\u8981\u4ed3\u5e93"),(0,i.kt)("p",null,"Kusion \u7684\u9876\u7ea7\u4ed3\u5e93\u5305\u542b Kusion \u4e3b\u4ed3\u5e93\u3001Konfig \u6a21\u578b\u4ed3\u5e93\u3001\u6587\u6863\u4ed3\u5e93\u7b49\u3001IDE \u6269\u5c55\u4ed3\u5e93\u3001KCLVM \u76f8\u5173\u4ed3\u5e93\u7b49\uff0c\u5173\u7cfb\u5982\u4e0b\u56fe\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(8054).Z,width:"1484",height:"464"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kusion \u4e3b\u5e93\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"https://github.com/KusionStack/kusion")),(0,i.kt)("li",{parentName:"ul"},"Kusion \u7f51\u7ad9\u4ed3\u5e93\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io"},"https://github.com/KusionStack/kusionstack.io")),(0,i.kt)("li",{parentName:"ul"},"Kusion \u6a21\u578b\u5e93\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"https://github.com/KusionStack/konfig")),(0,i.kt)("li",{parentName:"ul"},"KCLVM \u4e3b\u5e93\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/KCLVM"},"https://github.com/KusionStack/KCLVM")),(0,i.kt)("li",{parentName:"ul"},"IDE \u6269\u5c55\u4ed3\u5e93\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/vscode-kcl"},"https://github.com/KusionStack/vscode-kcl"))),(0,i.kt)("h2",{id:"2-\u6587\u6863\u4ed3\u5e93"},"2. \u6587\u6863\u4ed3\u5e93"),(0,i.kt)("p",null,"\u6587\u6863\u76f8\u5173\u7684\u4ed3\u5e93\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(73693).Z,width:"1464",height:"464"})),(0,i.kt)("p",null,"\u6587\u6863\u4e3b\u8981\u5305\u542b\u7f51\u5740\u7684\u6587\u6863\u3001\u76f8\u5173\u7684\u6848\u4f8b\u4ee3\u7801\u6587\u6863\u3001\u8bed\u8a00\u89c4\u8303\u6587\u6863\u548c Kusion \u6a21\u578b\u5e93\u81ea\u5e26\u7684\u6587\u6863\u7b49\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6587\u6863\u4e3b\u4ed3\u5e93\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io"},"https://github.com/KusionStack/kusionstack.io")),(0,i.kt)("li",{parentName:"ul"},"\u7535\u5b50\u4e66\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion-in-action-book"},"https://github.com/KusionStack/kusion-in-action-book"))),(0,i.kt)("h2",{id:"3-kclvm-\u4ed3\u5e93"},"3. KCLVM \u4ed3\u5e93"),(0,i.kt)("p",null,"\u5176\u4e2d KCLVM \u76f8\u5173\u4ed3\u5e93\u662f KCL \u914d\u7f6e\u8bed\u8a00\u3001\u89c4\u8303\u3001\u5de5\u5177\u7b49\u5b9e\u73b0\u7684\u4ed3\u5e93\uff0c\u5176\u5c55\u5f00\u7684\u5b50\u4ed3\u5e93\u5173\u7cfb\u5982\u4e0b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(6794).Z,width:"1164",height:"964"})),(0,i.kt)("p",null,"\u6700\u4e0a\u9762\u63d0\u4f9b KCLVM \u5b9e\u73b0\u7684\u591a\u8bed\u8a00\u7ed1\u5b9a\u63a5\u53e3\uff0c\u76ee\u524d\u4e3b\u8981\u63d0\u4f9b Go\u3001Python \u7b49\u7ed1\u5b9a\uff0c\u540e\u7eed\u8ba1\u5212\u63d0\u4f9b Java\u3001NodeJS \u7b49\u66f4\u591a\u7684\u8bed\u8a00\u7ed1\u5b9a\u3002\u4e2d\u95f4\u90e8\u5206\u662f KCL \u8bed\u8a00\u7684\u5b9e\u73b0\u548c\u8bed\u8a00\u89c4\u8303\u90e8\u5206\u3002\u6b64\u5916\u3001\u8fd8\u6709 KCL \u8bed\u8a00\u7684\u63d2\u4ef6\u548c\u914d\u5957\u7684 IDE \u63d2\u4ef6\u7b49\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"KCLVM \u4e3b\u5e93\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/KCLVM"},"https://github.com/KusionStack/KCLVM")),(0,i.kt)("li",{parentName:"ul"},"kclvm-go\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kclvm-go"},"https://github.com/KusionStack/kclvm-go")),(0,i.kt)("li",{parentName:"ul"},"KCL \u63d2\u4ef6\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kcl-plugin"},"https://github.com/KusionStack/kcl-plugin"))))}p.isMDXComponent=!0},8054:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/repo-dag-01-0b3cc1c38f70c8f1f834de39172501a8.png"},6794:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/repo-dag-02-136d4e3e857880eafaa663555dfc177a.png"},73693:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/repo-dag-docs-2c61f4c5a214d7d824ed51230d5d4fe3.png"}}]);