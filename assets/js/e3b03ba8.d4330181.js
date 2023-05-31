"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,g=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,c(c({ref:t},u),{},{components:n})):r.createElement(g,c({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const o={},c="KCL Plugin Release Policy",a={unversionedId:"governance/release-policy/kcl_plugin",id:"governance/release-policy/kcl_plugin",title:"KCL Plugin Release Policy",description:"KCL \u63d2\u4ef6\u7684\u8bbe\u8ba1\u521d\u8877\u53ea\u662f\u4e3a\u4e86\u6269\u5c55 KCL \u8bed\u8a00\u7684\u529f\u80fd\uff0c\u5176\u5b9a\u4f4d\u5e76\u4e0d\u662f\u5b8c\u5168\u590d\u523b\u901a\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u5168\u90e8\u751f\u6001\u3002\u56e0\u6b64 KCL \u63d2\u4ef6\u523b\u610f\u505a\u4e86\u4e00\u4e9b\u5fc5\u8981\u7684\u9650\u5236\uff1a\u9996\u5148\u63d2\u4ef6\u4e4b\u95f4\u4e0d\u80fd\u76f8\u4e92\u5bfc\u5165\uff1b\u5176\u6b21\u5728\u540c\u4e00\u4e2a\u6a21\u5757\u4e2d\u63d2\u4ef6\u4e0d\u80fd\u540c\u540d\uff1b\u6700\u540ePython\u5b9e\u73b0\u7684\u63d2\u4ef6\u6307\u5357\u4f7f\u7528\u6807\u51c6\u5e93\u548c\u63d2\u4ef6\u6846\u67b6\u63d0\u4f9b\u7684\u529f\u80fd\u3002",source:"@site/docs/governance/release-policy/kcl_plugin.md",sourceDirName:"governance/release-policy",slug:"/governance/release-policy/kcl_plugin",permalink:"/docs/governance/release-policy/kcl_plugin",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/governance/release-policy/kcl_plugin.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685517977,formattedLastUpdatedAt:"5/31/2023",frontMatter:{},sidebar:"governance",previous:{title:"Release Policy",permalink:"/docs/governance/release-policy/"},next:{title:"KCLVM Release Policy",permalink:"/docs/governance/release-policy/kclvm"}},i={},p=[{value:"1. \u6bcf\u4e2a\u63d2\u4ef6\u72ec\u7acb\u7ef4\u62a4\u7248\u672c",id:"1-\u6bcf\u4e2a\u63d2\u4ef6\u72ec\u7acb\u7ef4\u62a4\u7248\u672c",level:2},{value:"2. kcl.mod \u6307\u5b9a\u4f9d\u8d56\u7684\u63d2\u4ef6\u4fe1\u606f",id:"2-kclmod-\u6307\u5b9a\u4f9d\u8d56\u7684\u63d2\u4ef6\u4fe1\u606f",level:2},{value:"3. \u63d2\u4ef6\u5bf9 KCLVM \u7684\u7248\u672c\u4f9d\u8d56",id:"3-\u63d2\u4ef6\u5bf9-kclvm-\u7684\u7248\u672c\u4f9d\u8d56",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kcl-plugin-release-policy"},"KCL Plugin Release Policy"),(0,l.kt)("p",null,"KCL \u63d2\u4ef6\u7684\u8bbe\u8ba1\u521d\u8877\u53ea\u662f\u4e3a\u4e86\u6269\u5c55 KCL \u8bed\u8a00\u7684\u529f\u80fd\uff0c\u5176\u5b9a\u4f4d\u5e76\u4e0d\u662f\u5b8c\u5168\u590d\u523b\u901a\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u5168\u90e8\u751f\u6001\u3002\u56e0\u6b64 KCL \u63d2\u4ef6\u523b\u610f\u505a\u4e86\u4e00\u4e9b\u5fc5\u8981\u7684\u9650\u5236\uff1a\u9996\u5148\u63d2\u4ef6\u4e4b\u95f4\u4e0d\u80fd\u76f8\u4e92\u5bfc\u5165\uff1b\u5176\u6b21\u5728\u540c\u4e00\u4e2a\u6a21\u5757\u4e2d\u63d2\u4ef6\u4e0d\u80fd\u540c\u540d\uff1b\u6700\u540ePython\u5b9e\u73b0\u7684\u63d2\u4ef6\u6307\u5357\u4f7f\u7528\u6807\u51c6\u5e93\u548c\u63d2\u4ef6\u6846\u67b6\u63d0\u4f9b\u7684\u529f\u80fd\u3002"),(0,l.kt)("h2",{id:"1-\u6bcf\u4e2a\u63d2\u4ef6\u72ec\u7acb\u7ef4\u62a4\u7248\u672c"},"1. \u6bcf\u4e2a\u63d2\u4ef6\u72ec\u7acb\u7ef4\u62a4\u7248\u672c"),(0,l.kt)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u7684\u8bbe\u8ba1\u80cc\u666f\uff0c\u540c\u4e00\u4e2a kcl.mod \u5b9a\u4e49\u7684\u6a21\u5757\u4e2d\u6bcf\u4e2a\u63d2\u4ef6\u662f\u76f8\u4e92\u72ec\u7acb\u7684\uff0c\u63d2\u4ef6\u4e4b\u95f4\u548c\u5176\u4f9d\u8d56\u5747\u4e0d\u4f1a\u51fa\u73b0\u4f9d\u8d56\u51b2\u7a81\u7684\u95ee\u9898\u3002\u56e0\u6b64\uff0c\u6bcf\u4e2a KCL \u63d2\u4ef6\u53ef\u4ee5\u72ec\u7acb\u53d1\u5e03\u72ec\u7acb\u7ef4\u62a4\u3002"),(0,l.kt)("h2",{id:"2-kclmod-\u6307\u5b9a\u4f9d\u8d56\u7684\u63d2\u4ef6\u4fe1\u606f"},"2. kcl.mod \u6307\u5b9a\u4f9d\u8d56\u7684\u63d2\u4ef6\u4fe1\u606f"),(0,l.kt)("p",null,"kcl.mod \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"[kcl_plugin]")," \u5b57\u6bb5\u6807\u6ce8\u63d2\u4ef6\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'# kcl.mod\n\n[kcl_plugin]\nhello = { git = "https://github.com/KusionStack/kcl-plugin.git", path = "hello", branch = "master" }\nproject_context = { git = "https://github.com/KusionStack/kcl-plugin.git", path = "project_context", version = "0.1.0"}\nutils = { path = "${PATH}/plugins/utils" }\n')),(0,l.kt)("h2",{id:"3-\u63d2\u4ef6\u5bf9-kclvm-\u7684\u7248\u672c\u4f9d\u8d56"},"3. \u63d2\u4ef6\u5bf9 KCLVM \u7684\u7248\u672c\u4f9d\u8d56"),(0,l.kt)("p",null,"\u63d2\u4ef6\u672c\u8eab\u53ef\u4ee5\u6307\u5b9a\u4f9d\u8d56\u7684 KCL \u8bed\u8a00\u7684\u7248\u672c\uff0c\u76f8\u5173\u5de5\u5177\u505a\u68c0\u67e5\u3002"))}s.isMDXComponent=!0}}]);