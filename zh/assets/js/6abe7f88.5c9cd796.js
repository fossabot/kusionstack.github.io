"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(r),d=a,m=k["".concat(u,".").concat(d)]||k[d]||c[d]||l;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},28706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={},i="\u8d21\u732e\u6307\u5357",o={unversionedId:"developer-guide/contribution-guide/index",id:"version-v0.4/developer-guide/contribution-guide/index",title:"\u8d21\u732e\u6307\u5357",description:"\u8d21\u732e\u6307\u5357\u4ecb\u7ecd\u4e86\u5982\u4f55\u53c2\u4e0e\u793e\u533a\u53d1\u5c55\u548c\u5411\u793e\u533a\u8d21\u732e\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.4/4-developer-guide/1-contribution-guide/index.md",sourceDirName:"4-developer-guide/1-contribution-guide",slug:"/developer-guide/contribution-guide/",permalink:"/zh/karpor/developer-guide/contribution-guide/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/4-developer-guide/1-contribution-guide/index.md",tags:[],version:"v0.4",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1718866078,formattedLastUpdatedAt:"2024\u5e746\u670820\u65e5",frontMatter:{},sidebar:"karpor",previous:{title:"\u544a\u522b\u96c6\u7fa4\u8bc1\u4e66\u5207\u6362\uff0c\u8ba9\u4f60\u201c\u4e00\u5361\u901a\u884c\u201d",permalink:"/zh/karpor/user-guide/best-production-practices/one-pass-with-proxy"},next:{title:"\u975e\u4ee3\u7801\u8d21\u732e\u6307\u5357",permalink:"/zh/karpor/developer-guide/contribution-guide/non-code-contribute"}},u={},p=[{value:"\u5f00\u59cb\u8d21\u732e\u4e4b\u524d",id:"\u5f00\u59cb\u8d21\u732e\u4e4b\u524d",level:2},{value:"\u627e\u5230\u4e00\u4e2a\u8d21\u732e\u70b9",id:"\u627e\u5230\u4e00\u4e2a\u8d21\u732e\u70b9",level:3},{value:"\u5982\u4f55\u8fdb\u884c\u975e\u4ee3\u7801\u8d21\u732e",id:"\u5982\u4f55\u8fdb\u884c\u975e\u4ee3\u7801\u8d21\u732e",level:3},{value:"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u8d21\u732e",id:"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u8d21\u732e",level:3},{value:"\u8d21\u732e\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09",id:"\u8d21\u732e\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42pull-request",level:2},{value:"Fork \u4ed3\u5e93",id:"fork-\u4ed3\u5e93",level:3},{value:"\u5f00\u53d1\u4ee3\u7801\u548c\u975e\u4ee3\u7801",id:"\u5f00\u53d1\u4ee3\u7801\u548c\u975e\u4ee3\u7801",level:3},{value:"\u6253\u5f00\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09",id:"\u6253\u5f00\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42pull-request",level:3},{value:"\u7b7e\u7f72\u8d21\u732e\u8005\u8bb8\u53ef\u534f\u8bae\uff08Contributor License Agreement\uff0cCLA\uff09",id:"\u7b7e\u7f72\u8d21\u732e\u8005\u8bb8\u53ef\u534f\u8baecontributor-license-agreementcla",level:3},{value:"PR \u68c0\u67e5",id:"pr-\u68c0\u67e5",level:3},{value:"\u6210\u4e3a\u793e\u533a\u6210\u5458",id:"\u6210\u4e3a\u793e\u533a\u6210\u5458",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8d21\u732e\u6307\u5357"},"\u8d21\u732e\u6307\u5357"),(0,a.kt)("p",null,"\u8d21\u732e\u6307\u5357\u4ecb\u7ecd\u4e86\u5982\u4f55\u53c2\u4e0e\u793e\u533a\u53d1\u5c55\u548c\u5411\u793e\u533a\u8d21\u732e\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5e2e\u52a9\u6211\u4eec\u4e3a\u6240\u6709\u4eba\u5efa\u7acb\u5b89\u5168\u548c\u79ef\u6781\u7684\u793e\u533a\u4f53\u9a8c\uff0c\u6211\u4eec\u8981\u6c42\u6240\u6709\u7684\u53c2\u4e0e\u8005\u9075\u5b88 CNCF \u793e\u533a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cncf/foundation/blob/main/code-of-conduct-languages/zh.md"},"\u884c\u4e3a\u51c6\u5219"),"\u3002"),(0,a.kt)("h2",{id:"\u5f00\u59cb\u8d21\u732e\u4e4b\u524d"},"\u5f00\u59cb\u8d21\u732e\u4e4b\u524d"),(0,a.kt)("h3",{id:"\u627e\u5230\u4e00\u4e2a\u8d21\u732e\u70b9"},"\u627e\u5230\u4e00\u4e2a\u8d21\u732e\u70b9"),(0,a.kt)("p",null,"\u6709\u591a\u79cd\u65b9\u5f0f\u5bf9 Karpor \u8d21\u732e\uff0c\u5305\u62ec\u4ee3\u7801\u548c\u975e\u4ee3\u7801\u8d21\u732e\uff0c\u6211\u4eec\u5bf9\u4efb\u4f55\u4eba\u5bf9\u793e\u533a\u7684\u4efb\u4f55\u65b9\u5f0f\u7684\u52aa\u529b\u90fd\u975e\u5e38\u611f\u8c22\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u662f\u4e00\u4e9b\u793a\u4f8b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8d21\u732e\u4ee3\u7801\u4ed3\u5e93\u548c\u6587\u6863\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u62a5\u544a\u548c\u5206\u7c7b issue\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684\u5730\u533a\u7ec4\u7ec7\u4f1a\u8bae\u548c\u7528\u6237\u7fa4\u7ec4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u56de\u7b54 Karpor \u76f8\u5173\u95ee\u9898\u5e2e\u52a9\u522b\u4eba\u3002")),(0,a.kt)("p",null,"\u5e76\u4e14\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u5982\u4f55\u5f00\u59cb\uff0c\u6211\u4eec\u51c6\u5907\u4e86\u4e00\u4efd ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues/463"},"\u65b0\u624b\u4efb\u52a1\u6e05\u5355 | Community tasks \ud83c\udf96\ufe0e"),"\uff0c\u6216\u8005\u4f60\u53ef\u4ee5\u901a\u8fc7 issue \u8ddf\u8e2a\u5668\u8fc7\u6ee4 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22"},"help wanted | \u9700\u8981\u5e2e\u52a9")," \u6216 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues?q=is%3Aopen+is%3Aissue++label%3A%22good+first+issue%22"},"good first issue | \u65b0\u624b\u4efb\u52a1")," \u6807\u7b7e. \u4f60\u53ef\u4ee5\u4ece\u4efb\u4f55\u611f\u5174\u8da3\u7684 issue \u5f00\u59cb\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u6b22\u8fce ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues/new/choose"},"\u63d0\u4ea4 Issue")," \u6216\u8005 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/discussions/new/choose"},"\u53d1\u5e16\u8ba8\u8bba"),"\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u56de\u7b54\u3002")),(0,a.kt)("h3",{id:"\u5982\u4f55\u8fdb\u884c\u975e\u4ee3\u7801\u8d21\u732e"},"\u5982\u4f55\u8fdb\u884c\u975e\u4ee3\u7801\u8d21\u732e"),(0,a.kt)("p",null,"\u6211\u4eec\u8ba4\u4e3a\u5bf9\u793e\u533a\u5b58\u7eed\u548c\u672a\u6765\u53d1\u5c55\u800c\u8a00\uff0c\u975e\u4ee3\u7801\u8d21\u732e\u548c\u4ee3\u7801\u8d21\u732e\u540c\u6837\u91cd\u8981\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"./non-code-contribute"},"\u975e\u4ee3\u7801\u8d21\u732e\u6307\u5357")," \u83b7\u53d6\u66f4\u591a\u7ec6\u8282")),(0,a.kt)("h3",{id:"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u8d21\u732e"},"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u8d21\u732e"),(0,a.kt)("p",null,"\u4e0d\u786e\u5b9a\u4ece\u54ea\u91cc\u5f00\u59cb\u5411 Karpor \u4ee3\u7801\u5e93\u8d21\u732e\uff1f\u53ef\u4ee5\u4ece\u6d4f\u89c8\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"good first issue")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"help wanted")," \u6807\u7b7e\u7684 issue \u5f00\u59cb\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/labels/good%20first%20issue"},"Good first issue | \u65b0\u624b\u4efb\u52a1")," \u901a\u5e38\u5f88\u5bb9\u6613\u89e3\u51b3\u7684\u4efb\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/labels/help%20wanted"},"Help wantet | \u9700\u8981\u5e2e\u52a9")," \u548c\u590d\u6742\u7a0b\u5ea6\u65e0\u5173\uff0c \u6211\u4eec\u5e0c\u671b\u80fd\u591f\u5728\u793e\u533a\u89e3\u51b3\u7684\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"./code-contribute"},"\u4ee3\u7801\u8d21\u732e\u6307\u5357")," \u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002")),(0,a.kt)("p",null,"\u5b66\u4e60 ",(0,a.kt)("a",{parentName:"p",href:"../conventions/code-conventions"},"\u4ee3\u7801\u89c4\u7ea6")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"../conventions/test-conventions"},"\u6d4b\u8bd5\u89c4\u7ea6"),"\uff0c\u5e76\u4e86\u89e3\u5728\u5199\u4ee3\u7801\u65f6\u8981\u6ce8\u610f\u7684\u5730\u65b9\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"../conventions/release-process"},"\u53d1\u5e03\u6d41\u7a0b\u4e0e\u8282\u594f\u6307\u5357"),"\uff0c\u4e86\u89e3\u4f60\u7684\u4ee3\u7801\u4ec0\u4e48\u65f6\u5019\u4f1a\u53d1\u5e03\u3002"),(0,a.kt)("h2",{id:"\u8d21\u732e\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42pull-request"},"\u8d21\u732e\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09"),(0,a.kt)("p",null,"\u5728\u6253\u5f00\u6216\u8005\u8ba4\u9886 issue \u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u63d0\u4ea4\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09\u4e3a karpor \u8fdb\u884c\u4ee3\u7801\u6216\u975e\u4ee3\u7801\u8d21\u732e\u3002\u8fd9\u91cc\u662f\u4f60\u5e94\u8be5\u9075\u5faa\u7684\u4e00\u4e9b\u6b65\u9aa4\uff1a"),(0,a.kt)("h3",{id:"fork-\u4ed3\u5e93"},"Fork \u4ed3\u5e93"),(0,a.kt)("p",null,"Karpor \u9075\u5faa\u4e3b\u5e72\u5f00\u53d1\u6a21\u5f0f\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u7528\u4e8e\u53d1\u5e03\u7684\u4ee3\u7801\u7ef4\u62a4\u5728 main \u5206\u652f\u3002"),(0,a.kt)("p",null,"\u90a3\u4e48\uff0c\u4e3a\u4e86\u5f00\u53d1 Karpor\uff0c\u4f60\u9700\u8981\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor"},"karpor")," Fork \u4e00\u4e2a\u9879\u76ee\u5230\u4f60\u81ea\u5df1\u7684\u5de5\u4f5c\u7a7a\u95f4\uff0c\u7136\u540e\u68c0\u51fa\u4e00\u4e2a\u65b0\u7684\u5206\u652f\u7528\u4e8e\u5f00\u53d1\u4ee3\u7801\u3002"),(0,a.kt)("h3",{id:"\u5f00\u53d1\u4ee3\u7801\u548c\u975e\u4ee3\u7801"},"\u5f00\u53d1\u4ee3\u7801\u548c\u975e\u4ee3\u7801"),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5f00\u59cb\u89e3\u51b3 issue \u3002\u4e3a\u4e86\u7ef4\u62a4 Karpor \u7684\u4ee3\u7801\u8d28\u91cf\uff0c\u63d0\u4ea4 PR \u4e4b\u540e\uff0c\u4e00\u4e9b\u5fc5\u8981\u7684\u68c0\u67e5\u4f1a\u88ab\u89e6\u53d1\u3002"),(0,a.kt)("p",null,"\u5f00\u53d1\u7ed3\u675f\u4e4b\u540e\uff0c\u4f60\u9700\u8981 commit \u4ee3\u7801\u7136\u540e\u5c06\u4ee3\u7801 push \u5230\u4f60 fork \u51fa\u7684\u4ed3\u5e93\u3002\u7531\u4e8e PR \u7684\u6807\u9898\u5c06\u4f5c\u4e3a commit message\uff0c\u4f60\u7684 PR \u6807\u9898\u9700\u8981\u7b26\u5408 ",(0,a.kt)("a",{parentName:"p",href:"/zh/karpor/developer-guide/conventions/commit-conventions"},"commit \u89c4\u7ea6"),"\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u7b80\u5355\u7684\u89e3\u91ca\uff1a"),(0,a.kt)("p",null,"PR \u7684\u6807\u9898\u9700\u8981\u6309\u7167\u4ee5\u4e0b\u7ed3\u6784\u7ec4\u7ec7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<\u7c7b\u578b>[\u53ef\u9009 \u8303\u56f4]: <\u63cf\u8ff0>\n\n[\u53ef\u9009 \u6b63\u6587]\n")),(0,a.kt)("p",null,"\u8981\u6c42\u4e2d\u7684\u7c7b\u578b\u53ef\u4ee5\u5e2e\u52a9\u66f4\u597d\u5730\u786e\u8ba4\u8fd9\u6b21\u63d0\u4ea4\u7684\u8303\u56f4\uff0c\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines"},"Angular \u6307\u5357"),"\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u5c0f\u5199\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<\u7c7b\u578b>"),"\uff0c\u4ee5\u907f\u514d\u5728\u5927\u5c0f\u5199\u654f\u611f\u7684\u95ee\u9898\u4e0a\u6d6a\u8d39\u65f6\u95f4\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"<\u7c7b\u578b>")," \u53ef\u4ee5\u662f\u4ee5\u4e0b\u4e4b\u4e00\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"feat: \u65b0\u7279\u6027\nfix: \u6f0f\u6d1e\u4fee\u590d\ndocs: \u4ec5\u6587\u6863\u6539\u52a8\nbuild: \u5173\u4e8e\u6784\u5efa\u7cfb\u7edf\u548c\u5916\u90e8\u4f9d\u8d56\u7684\u6539\u52a8\nstyle: \u4e0d\u5f71\u54cd\u4ee3\u7801\u542b\u4e49\u7684\u6539\u52a8\uff08\u5982\u7a7a\u884c\u3001\u683c\u5f0f\u3001\u7f3a\u5c11\u5206\u53f7\u7b49\uff09\nrefactor: \u4e0d\u5c5e\u4e8e\u6f0f\u6d1e\u4fee\u590d\u6216\u8005\u589e\u52a0\u7279\u6027\u7684\u4ee3\u7801\u6539\u52a8\nperf: \u63d0\u5347\u6027\u80fd\u7684\u4ee3\u7801\u6539\u52a8\ntest: \u589e\u52a0\u7f3a\u5c11\u7684\u6d4b\u8bd5\u7528\u4f8b\u6216\u8005\u4fee\u6b63\u73b0\u6709\u7684\u6d4b\u8bd5\u7528\u4f8b\nchore: \u6784\u5efa\u8fc7\u7a0b\u6216\u8f85\u52a9\u5de5\u5177\u548c\u5e93\uff08\u5982\u6587\u6863\u751f\u6210\uff09\u7684\u4fee\u6539\n")),(0,a.kt)("h3",{id:"\u6253\u5f00\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42pull-request"},"\u6253\u5f00\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/pulls"},"\u6253\u5f00\u4e00\u4e2a\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09"),"\uff1a\u6253\u5f00\u4e00\u4e2a\u4ece\u4f60 fork \u7684\u4ed3\u5e93\u7684\u5f00\u53d1\u5206\u652f\u5230 karpor main \u5206\u652f\u7684\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09\u3002\u4f60\u9700\u8981\u6e05\u695a\u5730\u63cf\u8ff0\u4f60\u7684 PR \u505a\u4e86\u4ec0\u4e48\uff0c\u5e76\u4e14\u94fe\u63a5\u5230\u4e00\u4e2a issue\u3002\u9664\u6b64\u4e4b\u5916\uff0cPR \u7684\u6807\u9898\u5e94\u8be5\u6309\u7167\u524d\u9762\u63d0\u5230\u7684 commit \u89c4\u7ea6\uff0c\u5e76\u4e14\u957f\u5ea6\u5728 5-256 \u4e2a\u5b57\u7b26\u4e4b\u95f4\uff0c\u4e0d\u5141\u8bb8\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"WIP")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"[WIP]")," \u524d\u7f00\u3002"),(0,a.kt)("h3",{id:"\u7b7e\u7f72\u8d21\u732e\u8005\u8bb8\u53ef\u534f\u8baecontributor-license-agreementcla"},"\u7b7e\u7f72\u8d21\u732e\u8005\u8bb8\u53ef\u534f\u8bae\uff08Contributor License Agreement\uff0cCLA\uff09"),(0,a.kt)("p",null,"\u5982\u679c\u8fd9\u662f\u4f60\u7684\u7b2c\u4e00\u4e2a PR \uff0c\u4f60\u9700\u8981\u7b7e\u7f72\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/.github/blob/main/CLA.md"},"CLA\uff08\u8d21\u732e\u8005\u8bb8\u53ef\u534f\u8bae\uff09"),"\u3002 \u4f60\u552f\u4e00\u9700\u8981\u505a\u7684\u4e8b\u60c5\u7684\u662f\u5728\u5f53\u524d PR \u6309\u4ee5\u4e0b\u683c\u5f0f\u53d1\u8868\u8bc4\u8bba\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"I have read the CLA Document and I hereby sign the CLA")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684 CLA \u7b7e\u7f72\u5931\u8d25\u4e86\uff0c\u53ef\u80fd\u6709\u4ee5\u4e0b\u539f\u56e0\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bc4\u8bba\u7684\u683c\u5f0f\u5fc5\u987b\u4e0e\u4e0a\u9762\u5b8c\u5168\u4e00\u81f4\uff0c\u4f8b\u5982\u4e0d\u80fd\u6709\u989d\u5916\u7684\u7a7a\u683c\u3001\u7a7a\u884c\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"git commit \u7684\u4f5c\u8005\u548c Karpor PR \u7684\u4f5c\u8005\u5fc5\u987b\u4e00\u81f4\u3002")),(0,a.kt)("h3",{id:"pr-\u68c0\u67e5"},"PR \u68c0\u67e5"),(0,a.kt)("p",null,"\u4e3a\u4e86\u7ef4\u6301 karpor \u9879\u76ee\u7684\u53ef\u9760\u6027\uff0c\u4ee5\u4e0b\u68c0\u67e5\u5c06\u4f1a\u81ea\u52a8\u89e6\u53d1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("li",{parentName:"ul"},"Golang \u4ee3\u7801\u98ce\u683c\u68c0\u67e5"),(0,a.kt)("li",{parentName:"ul"},"Commit \u98ce\u683c\u68c0\u67e5"),(0,a.kt)("li",{parentName:"ul"},"PR \u6807\u9898\u68c0\u67e5"),(0,a.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u8bb8\u53ef\u8bc1\u68c0\u67e5"),(0,a.kt)("li",{parentName:"ul"},"Markdown \u683c\u5f0f\u68c0\u67e5")),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u7684 PR \u901a\u8fc7\u8fd9\u4e9b\u68c0\u67e5\u3002"),(0,a.kt)("h2",{id:"\u6210\u4e3a\u793e\u533a\u6210\u5458"},"\u6210\u4e3a\u793e\u533a\u6210\u5458"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u6210\u4e3a\u793e\u533a\u6210\u5458\u611f\u5174\u8da3\u6216\u8005\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u6cbb\u7406\u7684\u5185\u5bb9\uff0c\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"/zh/karpor/developer-guide/contribution-guide/roles"},"\u89d2\u8272")," \u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u3002"),(0,a.kt)("p",null,"\u5728 Karpor \u7684\u4e16\u754c\u4e2d\u4eab\u53d7\u7f16\u7801\u548c\u534f\u4f5c\u5427\uff01"))}c.isMDXComponent=!0}}]);