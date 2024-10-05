"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(r),k=o,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"\u975e\u4ee3\u7801\u8d21\u732e\u6307\u5357"},a=void 0,u={unversionedId:"developer-guide/contribution-guide/non-code-contribute",id:"version-v0.4/developer-guide/contribution-guide/non-code-contribute",title:"\u975e\u4ee3\u7801\u8d21\u732e\u6307\u5357",description:"\u4f60\u53ef\u4ee5\u7528\u4ee5\u4e0b\u4efb\u4f55\u611f\u5174\u8da3\u7684\u65b9\u5f0f\u8d21\u732e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.4/4-developer-guide/1-contribution-guide/1-non-code-contribute.md",sourceDirName:"4-developer-guide/1-contribution-guide",slug:"/developer-guide/contribution-guide/non-code-contribute",permalink:"/zh/karpor/v0.4/developer-guide/contribution-guide/non-code-contribute",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/4-developer-guide/1-contribution-guide/1-non-code-contribute.md",tags:[],version:"v0.4",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728109585,formattedLastUpdatedAt:"2024\u5e7410\u67085\u65e5",sidebarPosition:1,frontMatter:{title:"\u975e\u4ee3\u7801\u8d21\u732e\u6307\u5357"},sidebar:"karpor",previous:{title:"\u8d21\u732e\u6307\u5357",permalink:"/zh/karpor/v0.4/developer-guide/contribution-guide/"},next:{title:"\u4ee3\u7801\u8d21\u732e\u6307\u5357",permalink:"/zh/karpor/v0.4/developer-guide/contribution-guide/code-contribute"}},l={},p=[{value:"\u8d21\u732e\u7528\u6237\u793a\u4f8b\u548c Demo",id:"\u8d21\u732e\u7528\u6237\u793a\u4f8b\u548c-demo",level:2},{value:"\u62a5\u544a\u6f0f\u6d1e",id:"\u62a5\u544a\u6f0f\u6d1e",level:2},{value:"\u5b89\u5168\u6027 issue",id:"\u5b89\u5168\u6027-issue",level:2},{value:"\u63d0\u8bae\u589e\u5f3a\u7279\u6027",id:"\u63d0\u8bae\u589e\u5f3a\u7279\u6027",level:2},{value:"\u56de\u7b54\u95ee\u9898",id:"\u56de\u7b54\u95ee\u9898",level:2},{value:"\u8d21\u732e\u6587\u6863",id:"\u8d21\u732e\u6587\u6863",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528\u4ee5\u4e0b\u4efb\u4f55\u611f\u5174\u8da3\u7684\u65b9\u5f0f\u8d21\u732e\u3002"),(0,o.kt)("h2",{id:"\u8d21\u732e\u7528\u6237\u793a\u4f8b\u548c-demo"},"\u8d21\u732e\u7528\u6237\u793a\u4f8b\u548c Demo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Karpor\uff0c\u6700\u7b80\u5355\u7684\u8d21\u732e\u65b9\u5f0f\u5c31\u662f ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues/343"},"\u5411\u793e\u533a\u8868\u8fbe\u611f\u8c22"),"\u3002")),(0,o.kt)("h2",{id:"\u62a5\u544a\u6f0f\u6d1e"},"\u62a5\u544a\u6f0f\u6d1e"),(0,o.kt)("p",null,"\u5728\u63d0\u4ea4\u65b0\u7684 issue \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u8be5\u95ee\u9898\u6ca1\u6709\u88ab\u63d0\u4ea4\u8fc7\u3002"),(0,o.kt)("p",null,"\u68c0\u67e5 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/issues"},"Issue \u5217\u8868")," \u662f\u5426\u6709\u7c7b\u4f3c issue\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/issues/new?assignees=&labels=kind%2Fbug&projects=&template=bug-report.yaml"},"\u62a5\u544a\u6f0f\u6d1e")," \u63d0\u4ea4\u6f0f\u6d1e\u62a5\u544a\uff0c\u786e\u4fdd\u4f60\u63d0\u4f9b\u4e86\u8db3\u591f\u7684\u4fe1\u606f\u5e2e\u52a9\u590d\u73b0\u8be5\u6f0f\u6d1e\u3002"),(0,o.kt)("p",null,"\u9075\u5faa\u4e0b\u9762\u7684 issue \u6a21\u677f\u5e76\u4e14\u6dfb\u52a0\u989d\u5916\u4fe1\u606f\u6765\u5e2e\u52a9\u6211\u4eec\u590d\u73b0\u8be5\u95ee\u9898\u3002"),(0,o.kt)("h2",{id:"\u5b89\u5168\u6027-issue"},"\u5b89\u5168\u6027 issue"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u786e\u4fe1\u53d1\u73b0\u4e86\u5b89\u5168\u6f0f\u6d1e\uff0c\u8bf7\u9605\u8bfb\u6211\u4eec\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/blob/main/SECURITY.md"},"\u5b89\u5168\u7b56\u7565")," \u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002"),(0,o.kt)("h2",{id:"\u63d0\u8bae\u589e\u5f3a\u7279\u6027"},"\u63d0\u8bae\u589e\u5f3a\u7279\u6027"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u63d0\u5347 Karpor \u7684\u597d\u70b9\u5b50\uff0c\u8bf7\u63d0\u4ea4 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/issues/new?assignees=&labels=kind%2Ffeature&projects=&template=enhancement.yaml"},"\u7279\u6027\u8bf7\u6c42"),"\u3002"),(0,o.kt)("h2",{id:"\u56de\u7b54\u95ee\u9898"},"\u56de\u7b54\u95ee\u9898"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u7591\u95ee\u5e76\u4e14\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/karpor/"},"\u6587\u6863")," \u4e2d\u627e\u4e0d\u5230\u7b54\u6848\uff0c\u4e0b\u4e00\u6b65\u662f\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/discussions"},"GitHub \u8bba\u575b")," \u4e2d\u63d0\u95ee\u3002"),(0,o.kt)("p",null,"\u5e2e\u52a9\u8fd9\u4e9b\u7528\u6237\u5bf9\u6211\u4eec\u5f88\u91cd\u8981\uff0c\u6211\u4eec\u5f88\u9700\u8981\u4f60\u7684\u5e2e\u52a9\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u56de\u7b54 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/discussions"},"\u4ed6\u4eec\u7684\u95ee\u9898")," \u6765\u5e2e\u52a9\u5176\u4ed6\u7684 Karpor \u7528\u6237\u3002"),(0,o.kt)("h2",{id:"\u8d21\u732e\u6587\u6863"},"\u8d21\u732e\u6587\u6863"),(0,o.kt)("p",null,"\u8d21\u732e\u6587\u6863\u9700\u8981\u4e00\u4e9b\u63d0\u4ea4 pull request \u5230 Github \u7684\u77e5\u8bc6\uff0c\u6309\u7167\u4e0b\u9762\u7684\u6307\u5357\u8fd9\u5c06\u4f1a\u975e\u5e38\u7b80\u5355\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/README.md"},"kusionstack.io \u5f00\u53d1\u8005\u6307\u5357"))),(0,o.kt)("p",null,"\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://opensource.guide/how-to-contribute/"},"\u5f00\u6e90\u6307\u5357")," \u83b7\u53d6\u66f4\u591a\u8d21\u732e\u65b9\u5f0f\u3002"))}c.isMDXComponent=!0}}]);