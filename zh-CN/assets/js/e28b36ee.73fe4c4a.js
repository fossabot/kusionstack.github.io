"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto \u5305 - \u63d0\u4f9b SHA \u76f8\u5173\u7684\u54c8\u5e0c\u51fd\u6570",weight:100},o=void 0,l={unversionedId:"reference/lang/model/crypto",id:"reference/lang/model/crypto",title:"crypto",description:"crypto \u5305 - \u63d0\u4f9b SHA \u76f8\u5173\u7684\u54c8\u5e0c\u51fd\u6570",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/model/crypto.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/crypto",permalink:"/zh-CN/docs/reference/lang/model/crypto",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/crypto.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685526885,formattedLastUpdatedAt:"2023/5/31",frontMatter:{title:"crypto",linkTitle:"crypto",type:"docs",description:"crypto \u5305 - \u63d0\u4f9b SHA \u76f8\u5173\u7684\u54c8\u5e0c\u51fd\u6570",weight:100},sidebar:"reference",previous:{title:"base64",permalink:"/zh-CN/docs/reference/lang/model/base64"},next:{title:"datetime",permalink:"/zh-CN/docs/reference/lang/model/datetime"}},c={},p=[{value:"md5",id:"md5",level:2},{value:"sha1",id:"sha1",level:2},{value:"sha224",id:"sha224",level:2},{value:"sha256",id:"sha256",level:2},{value:"sha384",id:"sha384",level:2},{value:"sha512",id:"sha512",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"md5"},"md5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'md5(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"MD5")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha1"},"sha1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha1(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA1")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha224"},"sha224"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha224(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA224")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha256"},"sha256"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha256(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA256")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha384"},"sha384"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha384(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA384")," and the codec registered for encoding."),(0,a.kt)("h2",{id:"sha512"},"sha512"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'sha512(value: str, encoding: str = "utf-8") -> str')),(0,a.kt)("p",null,"Encrypt the string ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"SHA512")," and the codec registered for encoding."))}d.isMDXComponent=!0}}]);