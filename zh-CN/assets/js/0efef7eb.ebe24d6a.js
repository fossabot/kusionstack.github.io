"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},27222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"base64",linkTitle:"base64",type:"docs",description:"base64 \u7f16\u7801\u89e3\u7801",weight:100},c=void 0,i={unversionedId:"reference/lang/model/base64",id:"reference/lang/model/base64",title:"base64",description:"base64 \u7f16\u7801\u89e3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/model/base64.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/base64",permalink:"/zh-CN/docs/reference/lang/model/base64",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/base64.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663160649,formattedLastUpdatedAt:"2022/9/14",frontMatter:{title:"base64",linkTitle:"base64",type:"docs",description:"base64 \u7f16\u7801\u89e3\u7801",weight:100},sidebar:"reference",previous:{title:"builtin",permalink:"/zh-CN/docs/reference/lang/model/builtin"},next:{title:"crypto",permalink:"/zh-CN/docs/reference/lang/model/crypto"}},l={},s=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'encode(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Encode the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using the codec registered for encoding."),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},'decode(value: str, encoding: str = "utf-8") -> str')),(0,o.kt)("p",null,"Decode the string ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," using the codec registered for encoding."))}p.isMDXComponent=!0}}]);