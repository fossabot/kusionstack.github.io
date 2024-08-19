"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u53d1\u5e03\u6d41\u7a0b\u548c\u8282\u594f"},l=void 0,o={unversionedId:"developer-guide/conventions/release-process",id:"developer-guide/conventions/release-process",title:"\u53d1\u5e03\u6d41\u7a0b\u548c\u8282\u594f",description:"\u53d1\u5e03\u8ba1\u5212",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/current/4-developer-guide/2-conventions/1-release-process.md",sourceDirName:"4-developer-guide/2-conventions",slug:"/developer-guide/conventions/release-process",permalink:"/zh/karpor/next/developer-guide/conventions/release-process",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/4-developer-guide/2-conventions/1-release-process.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1724060961,formattedLastUpdatedAt:"2024\u5e748\u670819\u65e5",sidebarPosition:1,frontMatter:{title:"\u53d1\u5e03\u6d41\u7a0b\u548c\u8282\u594f"},sidebar:"karpor",previous:{title:"\u89d2\u8272",permalink:"/zh/karpor/next/developer-guide/contribution-guide/roles"},next:{title:"\u4ee3\u7801\u89c4\u7ea6",permalink:"/zh/karpor/next/developer-guide/conventions/code-conventions"}},p={},u=[{value:"\u53d1\u5e03\u8ba1\u5212",id:"\u53d1\u5e03\u8ba1\u5212",level:2},{value:"\u53d1\u5e03\u6807\u51c6",id:"\u53d1\u5e03\u6807\u51c6",level:2},{value:"\u53d1\u5e03\u6807\u51c6\u6d41\u7a0b",id:"\u53d1\u5e03\u6807\u51c6\u6d41\u7a0b",level:2},{value:"\u95e8\u63a7\u6d4b\u8bd5",id:"\u95e8\u63a7\u6d4b\u8bd5",level:2},{value:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236",id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u53d1\u5e03\u8ba1\u5212"},"\u53d1\u5e03\u8ba1\u5212"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/milestones"},"GitHub \u91cc\u7a0b\u7891")," \u5efa\u7acb\u5e76\u6301\u7eed\u6839\u636e\u53d1\u5e03\u8ba1\u5212\u3002\u6bcf\u4e2a\u53d1\u5e03\u91cc\u7a0b\u7891\u5c06\u5305\u62ec\u4e24\u7c7b\u4efb\u52a1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maintainer \u627f\u8bfa\u5b8c\u6210\u7684\u4efb\u52a1\u3002Maintainer \u4f1a\u5728\u6839\u636e\u4ed6\u4eec\u7684\u65f6\u95f4\u548c\u7cbe\u529b\u627f\u8bfa\u4e0b\u6b21\u53d1\u5e03\u8981\u5b9e\u73b0\u7684\u7279\u6027\u3002\u901a\u5e38\uff0c\u8fd9\u4e9b\u4efb\u52a1\u4f1a\u7ecf\u8fc7\u79bb\u7ebf\u8ba8\u8bba\u5e76\u6dfb\u52a0\u5230\u91cc\u7a0b\u7891\u3002\u8fd9\u4e9b\u4efb\u52a1\u4f1a\u88ab\u5206\u914d\u7ed9\u8ba1\u5212\u5b9e\u65bd\u548c\u6d4b\u8bd5\u5b83\u4eec\u7684 Maintainer\u3002"),(0,a.kt)("li",{parentName:"ul"},"Contributor \u63d0\u51fa\u7684\u989d\u5916\u4e8b\u9879\uff0c\u901a\u5e38\u662f\u4e0d\u7d27\u6025\u7684\u7279\u6027\u548c\u4f18\u5316\u3002Maintainer \u4e0d\u627f\u8bfa\u5728\u5f53\u524d release \u5468\u671f\u5185\u5b8c\u6210\uff0c\u4f46\u627f\u8bfa\u4f1a\u5bf9\u8fd9\u4e9b\u793e\u533a\u63d0\u4ea4\u8fdb\u884c\u4ee3\u7801\u5ba1\u67e5\u3002")),(0,a.kt)("p",null,"\u91cc\u7a0b\u7891\u4f1a\u6e05\u6670\u5730\u63cf\u8ff0\u6700\u7ec8\u8981\u7684\u7279\u6027\u548c\u671f\u671b\u5b8c\u6210\u65e5\u671f\u3002\u8fd9\u5c06\u6e05\u695a\u5730\u544a\u77e5\u7ec8\u7aef\u7528\u6237\u4e0b\u4e00\u7248\u672c\u7684\u53d1\u5e03\u65f6\u95f4\u548c\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u4e0b\u4e00\u6b21\u91cc\u7a0b\u7891\u4e4b\u5916\uff0c\u6211\u4eec\u4e5f\u4f1a\u7ef4\u62a4\u672a\u6765\u51e0\u4e2a\u53d1\u5e03\u91cc\u7a0b\u7891\u7684\u8349\u7a3f\u3002"),(0,a.kt)("h2",{id:"\u53d1\u5e03\u6807\u51c6"},"\u53d1\u5e03\u6807\u51c6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u7684 ",(0,a.kt)("strong",{parentName:"li"},"\u5b98\u65b9\u53d1\u5e03")," \u90fd\u5e94\u8be5\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," \u5206\u652f\u6dfb\u52a0\u6807\u7b7e\uff0c\u5e76\u4e14\u643a\u5e26\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"alpha"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"beta"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"rc")," \u7684\u53ef\u9009\u5148\u884c\u7248\u672c\u540e\u7f00\uff0c\u4f8b\u5982\uff0c\u4e00\u4e2a\u901a\u5e38\u7684\u5b98\u65b9\u53d1\u5e03\u7248\u672c\u53ef\u80fd\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.2.3"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.2.3-alpha.0"),"\u3002\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u60f3\u8981\u5728\u53d1\u5e03\u6b63\u5f0f\u7248\u672c ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.2.3")," \u4e4b\u524d\u8fdb\u884c\u4e00\u4e9b\u9a8c\u8bc1\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u53d1\u5e03\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.2.3-alpha.0")," \u7684\u5148\u884c\u7248\u672c\uff0c\u5728\u9a8c\u8bc1\u5b8c\u6210\u4e4b\u540e\u518d\u53d1\u5e03 ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.2.3")," \u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"Maintainer \u627f\u8bfa\u5b8c\u6210\u7279\u5b9a\u7684\u7279\u6027\u548c\u589e\u5f3a\uff0c\u7531 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/milestones"},"GitHub \u91cc\u7a0b\u7891")," \u8ddf\u8e2a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u4f1a\u5c3d\u53ef\u80fd\u9632\u6b62\u53d1\u5e03\u5ef6\u671f\uff1b\u5982\u679c\u4e00\u4e2a\u7279\u6027\u65e0\u6cd5\u6309\u65f6\u5b8c\u6210\uff0c\u5b83\u5c06\u4f1a\u88ab\u632a\u5230\u4e0b\u6b21\u53d1\u5e03\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6bcf\u6708")," \u53d1\u5e03\u4e00\u4e2a\u65b0\u7248\u672c\u3002")),(0,a.kt)("h2",{id:"\u53d1\u5e03\u6807\u51c6\u6d41\u7a0b"},"\u53d1\u5e03\u6807\u51c6\u6d41\u7a0b"),(0,a.kt)("p",null,"Maintainer \u8d1f\u8d23\u63a8\u52a8\u53d1\u5e03\u8fc7\u7a0b\u5e76\u9075\u5faa\u6807\u51c6\u64cd\u4f5c\u7a0b\u5e8f\u4ee5\u786e\u4fdd\u53d1\u5e03\u7684\u8d28\u91cf\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u6307\u5b9a\u53d1\u5e03\u7684 git commit \u6dfb\u52a0\u6807\u7b7e\u5e76\u63a8\u5230\u4e0a\u6e38\uff1b\u8be5\u6807\u7b7e\u9700\u8981\u6ee1\u8db3",(0,a.kt)("a",{parentName:"li",href:"#%E8%AF%AD%E4%B9%89%E5%8C%96%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6"},"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u89e6\u53d1\u7684 Github Action \u6d41\u6c34\u7ebf\u6267\u884c\u6210\u529f\u3002\u4e00\u65e6\u6210\u529f\uff0c\u5c06\u4f1a\u81ea\u52a8\u89e6\u53d1\u4e00\u6b21 Github \u53d1\u5e03\uff0c\u5176\u4e2d\u5305\u62ec\u6839\u636e\u63d0\u4ea4\u4fe1\u606f\u8ba1\u7b97\u51fa\u7684 Changelog\uff0c\u4ee5\u53ca\u955c\u50cf\u548c tar.gz \u6587\u4ef6\u7b49\u5236\u54c1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e ",(0,a.kt)("strong",{parentName:"li"},"Github \u53d1\u5e03")," \u7f16\u5199\u6e05\u6670\u7684\u53d1\u5e03\u8bf4\u660e\uff0c\u5305\u62ec\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u53cb\u597d\u7684\u53d1\u5e03\u4eae\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5df2\u5f03\u7528\u548c\u4e0d\u517c\u5bb9\u7684\u66f4\u6539\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u5173\u5982\u4f55\u5b89\u88c5\u548c\u5347\u7ea7\u7684\u7b80\u8981\u8bf4\u660e\u3002")))),(0,a.kt)("h2",{id:"\u95e8\u63a7\u6d4b\u8bd5"},"\u95e8\u63a7\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u5728\u521b\u5efa\u53d1\u5e03\u5206\u652f\u4e4b\u524d\uff1a\u6211\u4eec\u4f1a\u6709\u4e00\u4e2a ",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u5468")," \u7684\u4ee3\u7801\u51bb\u7ed3\u671f\u3002\u5728\u8fd9\u671f\u95f4\uff0c\u6211\u4eec\u5c06\u907f\u514d\u5408\u5e76\u4efb\u4f55\u529f\u80fd PR\uff0c\u53ea\u4f1a\u4fee\u590d\u9519\u8bef\u3002"),(0,a.kt)("p",null,"Maintainer \u4f1a\u8d1f\u8d23\u6d4b\u8bd5\u5e76\u4fee\u590d\u90a3\u4e9b\u5728\u4e34\u8fd1\u53d1\u5e03\u65f6\u95f4\u53d1\u73b0\u7684\u7d27\u6025\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236"},"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Karpor")," \u91c7\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/lang/zh-CN/"},"\u8bed\u4e49\u5316\u7248\u672c\u63a7\u5236")," \u4f5c\u4e3a\u7248\u672c\u53f7\u3002"),(0,a.kt)("p",null,"\u7248\u672c\u683c\u5f0f\u4e3a\uff1a\u4e3b\u7248\u672c\u53f7.\u6b21\u7248\u672c\u53f7.\u4fee\u8ba2\u53f7\uff0c\u4f8b\u5982\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.3"),"\u3002\u7248\u672c\u53f7  ",(0,a.kt)("strong",{parentName:"p"},"\u9012\u589e\u89c4\u5219")," \u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3b\u7248\u672c\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u4e0d\u517c\u5bb9\u7684 API \u4fee\u6539\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6b21\u7248\u672c\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684\u529f\u80fd\u6027\u65b0\u589e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u8ba2\u53f7\uff1a\u5f53\u4f60\u505a\u4e86\u5411\u4e0b\u517c\u5bb9\u7684\u95ee\u9898\u4fee\u6b63\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5148\u884c\u7248\u672c\u53f7\u53ca\u7248\u672c\u7f16\u8bd1\u4fe1\u606f")," \u53ef\u4ee5\u4f5c\u4e3a\u52a0\u5230\u201c\u4e3b\u7248\u672c\u53f7.\u6b21\u7248\u672c\u53f7.\u4fee\u8ba2\u53f7\u201d\u7684\u540e\u9762\uff0c\u4f5c\u4e3a\u5ef6\u4f38\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.3-alpha.0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.3-beta.1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"v1.2.3-rc.2"),", \u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"-alpha.0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-beta.1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-rc.2")," \u662f\u5148\u884c\u7248\u672c\u53f7\u3002"))}c.isMDXComponent=!0}}]);