"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:0},a="Overview",l={unversionedId:"reference/lang/model/overview",id:"reference/lang/model/overview",title:"Overview",description:"KCL \u662f\u9762\u5411\u914d\u7f6e\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u901a\u8fc7\u5185\u7f6e\u6a21\u5757\u3001KCL \u6a21\u5757\u548c\u63d2\u4ef6\u6a21\u5757\u63d0\u4f9b\u5de5\u7a0b\u5316\u7684\u6269\u5c55\u80fd\u529b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/model/overview.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/overview",permalink:"/zh-CN/docs/reference/lang/model/overview",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/overview.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1685674152,formattedLastUpdatedAt:"2023/6/2",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"reference",previous:{title:"Module System",permalink:"/zh-CN/docs/reference/lang/model/"},next:{title:"builtin",permalink:"/zh-CN/docs/reference/lang/model/builtin"}},c={},p=[],s={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"KCL \u662f\u9762\u5411\u914d\u7f6e\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u901a\u8fc7\u5185\u7f6e\u6a21\u5757\u3001KCL \u6a21\u5757\u548c\u63d2\u4ef6\u6a21\u5757\u63d0\u4f9b\u5de5\u7a0b\u5316\u7684\u6269\u5c55\u80fd\u529b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:r(89105).Z,width:"1544",height:"884"})),(0,o.kt)("p",null,"\u7528\u6237\u4ee3\u7801\u4e2d\u4e0d\u7528\u5bfc\u5165\u76f4\u63a5\u4f7f\u7528 builtin \u7684\u51fd\u6570\uff08\u6bd4\u5982\u7528 len \u8ba1\u7b97\u5217\u8868\u7684\u957f\u5ea6\u3001\u901a\u8fc7 typeof \u83b7\u53d6\u503c\u7684\u7c7b\u578b\u7b49\uff09\uff0c\u800c\u5bf9\u4e8e\u5b57\u7b26\u4e32\u7b49\u57fa\u7840\u7c7b\u578b\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5185\u7f6e\u65b9\u6cd5\uff08\u6bd4\u5982\u8f6c\u5316\u5b57\u7b26\u4e32\u7684\u5927\u5c0f\u5199\u7b49\u65b9\u6cd5\uff09\u3002\u5bf9\u4e8e\u76f8\u5bf9\u590d\u6742\u7684\u901a\u7528\u5de5\u4f5c\u5219\u901a\u8fc7\u6807\u51c6\u5e93\u63d0\u4f9b\uff0c\u6bd4\u5982\u901a\u8fc7 import \u5bfc\u5165 math \u5e93\u5c31\u53ef\u4ee5\u4f7f\u7528\u76f8\u5173\u7684\u6570\u5b66\u51fd\u6570\uff0c\u53ef\u4ee5\u901a\u8fc7\u5bfc\u5165 regex \u5e93\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5e93\u3002\u800c\u9488\u5bf9 KCL \u4ee3\u7801\u4e5f\u53ef\u4ee5\u7ec4\u7ec7\u4e3a\u6a21\u5757\uff0c\u6bd4\u5982 Konfig \u5927\u5e93\u4e2d\u5c06\u57fa\u7840\u8bbe\u65bd\u548c\u5404\u79cd\u6807\u51c6\u7684\u5e94\u7528\u62bd\u8c61\u4e3a\u6a21\u5757\u4f9b\u4e0a\u5c42\u7528\u6237\u4f7f\u7528\u3002\u6b64\u5916\u8fd8\u53ef\u4ee5\u901a\u8fc7 Plugin \u673a\u5236\uff0c\u91c7\u7528 Python \u4e3a KCL \u5f00\u53d1\u63d2\u4ef6\uff0c\u6bd4\u5982\u76ee\u524d\u6709 meta \u63d2\u4ef6\u53ef\u4ee5\u901a\u8fc7\u7f51\u7edc\u67e5\u8be2\u4e2d\u5fc3\u914d\u7f6e\u4fe1\u606f\uff0capp-context \u63d2\u4ef6\u5219\u53ef\u4ee5\u7528\u4e8e\u83b7\u53d6\u5f53\u524d\u5e94\u7528\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u4ece\u800c\u7b80\u5316\u4ee3\u7801\u7684\u7f16\u5199\u3002"))}u.isMDXComponent=!0},89105:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kcl-module-5ec74277ff23c98d06956ab10f3f2fb6.png"}}]);