"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53605],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u67b6\u6784"},i=void 0,l={unversionedId:"concepts/architecture",id:"version-v0.4/concepts/architecture",title:"\u67b6\u6784",description:"\u7ec4\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.4/2-concepts/1-architecture.md",sourceDirName:"2-concepts",slug:"/concepts/architecture",permalink:"/zh/karpor/concepts/architecture",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/2-concepts/1-architecture.md",tags:[],version:"v0.4",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718359438,formattedLastUpdatedAt:"2024\u5e746\u670814\u65e5",sidebarPosition:1,frontMatter:{title:"\u67b6\u6784"},sidebar:"karpor",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/karpor/getting-started/quick-start"},next:{title:"\u672f\u8bed\u8868",permalink:"/zh/karpor/concepts/glossary"}},c={},p=[{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"Karpor \u7684\u5de5\u4f5c\u539f\u7406",id:"karpor-\u7684\u5de5\u4f5c\u539f\u7406",level:2},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",level:2}],s={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(92341).Z,width:"1480",height:"1315"})),(0,a.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Dashboard"),"\uff1aKarpor \u7684 Web UI \u754c\u9762\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Server"),"\uff1aKarpor \u7684\u6838\u5fc3\u540e\u7aef\u670d\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Syncer"),"\uff1a\u7528\u4e8e\u5b9e\u65f6\u540c\u6b65\u96c6\u7fa4\u8d44\u6e90\u7684\u72ec\u7acb\u670d\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Storage"),"\uff1a\u7528\u4e8e\u5b58\u50a8\u5df2\u540c\u6b65\u7684\u8d44\u6e90\u548c\u7528\u6237\u6570\u636e\u7684\u5b58\u50a8\u540e\u7aef\u3002")),(0,a.kt)("h2",{id:"karpor-\u7684\u5de5\u4f5c\u539f\u7406"},"Karpor \u7684\u5de5\u4f5c\u539f\u7406"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u540e\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u611f\u5174\u8da3\u7684\u96c6\u7fa4\u6ce8\u518c\u5230 Karpor \u4e2d\u3002"),(0,a.kt)("li",{parentName:"ol"},"Syncer \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u5c06\u5df2\u6ce8\u518c\u96c6\u7fa4\u4e2d\u7684\u8d44\u6e90\u5b9e\u65f6\u540c\u6b65\u5230 Storage \u4e2d\uff0c\u540c\u65f6\u4f1a\u786e\u4fdd\u8d44\u6e90\u7684\u5b9e\u65f6\u53d8\u5316\u4e5f\u4f1a\u81ea\u52a8\u540c\u6b65\u5230 Storage \u4e2d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u7528\u6237\u9700\u8981\u67e5\u627e\u7279\u5b9a\u8d44\u6e90\u65f6\uff0c\u53ea\u9700\u5728 Dashboard \u7684\u641c\u7d22\u6846\u4e2d\u8f93\u5165\u67e5\u8be2\u8bed\u53e5\u3002Dashboard \u4f1a\u4e0e Server \u7684\u641c\u7d22\u63a5\u53e3\u4ea4\u4e92\uff0cServer \u5185\u7684\u641c\u7d22\u6a21\u5757\u5c06\u89e3\u6790\u8fd9\u4e9b\u8bed\u53e5\uff0c\u5e76\u5728 Storage \u4e2d\u67e5\u627e\u76f8\u5e94\u7684\u8d44\u6e90\uff0c\u7136\u540e\u5c06\u641c\u7d22\u7ed3\u679c\u8fd4\u56de\u7ed9 Dashboard\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u641c\u7d22\u7ed3\u679c\u540e\uff0c\u7528\u6237\u5c06\u88ab\u5f15\u5bfc\u81f3\u8d44\u6e90\u6d1e\u5bdf\u9875\u9762\u3002Dashboard \u8c03\u7528 Server \u7684\u6d1e\u5bdf\u63a5\u53e3\uff0c\u5176\u4e2d Server \u7684\u6d1e\u5bdf\u6a21\u5757\u5bf9\u8d44\u6e90\u8fdb\u884c\u9759\u6001\u626b\u63cf\uff0c\u751f\u6210\u95ee\u9898\u62a5\u544a\uff0c\u5e76\u5b9a\u4f4d\u5176\u76f8\u5173\u8d44\u6e90\uff0c\u4ee5\u7ed8\u5236\u5305\u542b\u6240\u6709\u7236\u8d44\u6e90\u548c\u5b50\u8d44\u6e90\u7684\u8d44\u6e90\u62d3\u6251\u56fe\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6d1e\u5bdf\u9875\u9762\u540c\u6837\u9002\u7528\u4e8e\u8d44\u6e90\u7ec4\uff0c\u6bd4\u5982\u6d1e\u5bdf\u7279\u5b9a Group-Version-Kind \u7684\u8d44\u6e90\u7ec4\u3001\u5355\u4e2a\u547d\u540d\u7a7a\u95f4\uff0c\u6216\u662f\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u8d44\u6e90\u7ec4\u3002")),(0,a.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60 Karpor \u7684 ",(0,a.kt)("a",{parentName:"li",href:"../concepts/glossary"},"\u672f\u8bed\u8868"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b ",(0,a.kt)("a",{parentName:"li",href:"../user-guide/multi-cluster-management"},"\u7528\u6237\u6307\u5357")," \u4ee5\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4f60\u80fd\u591f\u901a\u8fc7 Karpor \u5b9e\u73b0\u7684\u5185\u5bb9\u3002")))}u.isMDXComponent=!0},92341:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-2377b11d778021730235919830b3c7ab.png"}}]);