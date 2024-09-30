"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=m(n),s=r,d=c["".concat(o,".").concat(s)]||c[s]||u[s]||l;return n?a.createElement(d,i(i({ref:t},k),{},{components:n})):a.createElement(d,i({ref:t},k))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u4ee3\u7801\u89c4\u7ea6"},i=void 0,p={unversionedId:"developer-guide/conventions/code-conventions",id:"version-v0.4/developer-guide/conventions/code-conventions",title:"\u4ee3\u7801\u89c4\u7ea6",description:"\u5728\u8fd9\u90e8\u5206\uff0c\u4f60\u5c06\u4f1a\u4e86\u89e3 Karpor \u9879\u76ee\u4e2d\u6240\u6709\u7c7b\u578b\u7684\u4ee3\u7801\u89c4\u7ea6\u3002\u4e0d\u5fc5\u4e00\u6b21\u628a\u8fd9\u4e9b\u89c4\u5219\u5168\u90e8\u4e86\u89e3\uff0c\u786e\u4fdd\u4f60\u5728\u7f16\u5199\u4ee3\u7801\u524d\u9605\u8bfb\u5bf9\u5e94\u7684\u90e8\u5206\u5c31\u53ef\u4ee5\u4e86\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.4/4-developer-guide/2-conventions/2-code-conventions.md",sourceDirName:"4-developer-guide/2-conventions",slug:"/developer-guide/conventions/code-conventions",permalink:"/zh/karpor/v0.4/developer-guide/conventions/code-conventions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/4-developer-guide/2-conventions/2-code-conventions.md",tags:[],version:"v0.4",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:2,frontMatter:{title:"\u4ee3\u7801\u89c4\u7ea6"},sidebar:"karpor",previous:{title:"\u53d1\u5e03\u6d41\u7a0b\u548c\u8282\u594f",permalink:"/zh/karpor/v0.4/developer-guide/conventions/release-process"},next:{title:"\u6d4b\u8bd5\u89c4\u7ea6",permalink:"/zh/karpor/v0.4/developer-guide/conventions/test-conventions"}},o={},m=[{value:"Go \u4ee3\u7801\u89c4\u7ea6",id:"go-\u4ee3\u7801\u89c4\u7ea6",level:2},{value:"Bash \u6216\u811a\u672c\u89c4\u7ea6",id:"bash-\u6216\u811a\u672c\u89c4\u7ea6",level:2},{value:"\u76ee\u5f55\u548c\u6587\u4ef6\u89c4\u7ea6",id:"\u76ee\u5f55\u548c\u6587\u4ef6\u89c4\u7ea6",level:2},{value:"Linting \u548c\u683c\u5f0f\u5316",id:"linting-\u548c\u683c\u5f0f\u5316",level:2}],k={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u8fd9\u90e8\u5206\uff0c\u4f60\u5c06\u4f1a\u4e86\u89e3 Karpor \u9879\u76ee\u4e2d\u6240\u6709\u7c7b\u578b\u7684\u4ee3\u7801\u89c4\u7ea6\u3002\u4e0d\u5fc5\u4e00\u6b21\u628a\u8fd9\u4e9b\u89c4\u5219\u5168\u90e8\u4e86\u89e3\uff0c\u786e\u4fdd\u4f60\u5728\u7f16\u5199\u4ee3\u7801\u524d\u9605\u8bfb\u5bf9\u5e94\u7684\u90e8\u5206\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#go-%E4%BB%A3%E7%A0%81%E8%A7%84%E7%BA%A6"},"Go \u4ee3\u7801\u89c4\u7ea6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bash-%E6%88%96%E8%84%9A%E6%9C%AC%E8%A7%84%E7%BA%A6"},"Bash \u6216\u811a\u672c\u89c4\u7ea6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E7%9B%AE%E5%BD%95%E5%92%8C%E6%96%87%E4%BB%B6%E8%A7%84%E7%BA%A6"},"\u76ee\u5f55\u548c\u6587\u4ef6\u89c4\u7ea6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#linting-%E5%92%8C%E6%A0%BC%E5%BC%8F%E5%8C%96"},"Linting \u548c\u683c\u5f0f\u5316"))),(0,r.kt)("h2",{id:"go-\u4ee3\u7801\u89c4\u7ea6"},"Go \u4ee3\u7801\u89c4\u7ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://go.dev/wiki/CodeReviewComments"},"Go \u4ee3\u7801\u8bc4\u5ba1\u8bc4\u8bba"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://golang.org/doc/effective_go.html"},"\u9ad8\u6548\u7684 Go"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e86\u89e3\u5e76\u4e14\u907f\u514d ",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/lavalamp/4bd23295a9f32706a48f"},"Go \u5730\u96f7"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u4f60\u7684\u4ee3\u7801\u7f16\u5199\u6ce8\u91ca."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://go.dev/blog/godoc"},"Go's \u6ce8\u91ca\u89c4\u7ea6")),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4ee3\u7801\u8bc4\u9605\u8005\u8be2\u95ee\u4f60\u4ee3\u7801\u4e3a\u4ec0\u4e48\u8981\u8fd9\u4e48\u5b9e\u73b0\uff0c\u8fd9\u53ef\u80fd\u8bf4\u660e\u4f60\u5e94\u5f53\u4e3a\u4f60\u7684\u4ee3\u7801\u7f16\u5199\u6ce8\u91ca\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u547d\u4ee4\u884c\u6807\u5fd7\u5e94\u8be5\u7528\u53cc\u8fde\u63a5\u53f7 ",(0,r.kt)("inlineCode",{parentName:"p"},"--"),"\uff0c\u800c\u4e0d\u662f\u4e0b\u5212\u7ebf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u53e3"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e RFC3986\uff0cURL \u662f\u5927\u5c0f\u5199\u654f\u611f\u7684\u3002Karpor \u4f7f\u7528\u201c\u77ed\u6a2a\u7ebf\u547d\u540d\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"kebab-case"),"\uff09\u201d\u4f5c\u4e3a URL\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"POST /rest-api/v1/resource-group-rule")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u547d\u540d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u63a5\u53e3\u9009\u62e9\u540d\u79f0\u65f6\u8bf7\u8003\u8651\u5305\u540d\u79f0\uff0c\u907f\u514d\u5197\u4f59\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"storage.Interface")," \u4f18\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"storage.StorageInterface"),"\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u8981\u5728\u5305\u540d\u79f0\u4e2d\u4f7f\u7528\u5927\u5199\u5b57\u7b26\u3001\u4e0b\u5212\u7ebf\u548c\u7834\u6298\u53f7\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u5305\u540d\u79f0\u65f6\uff0c\u8bf7\u8003\u8651\u7236\u76ee\u5f55\u540d\u79f0\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"pkg/manager/cluster/foo.go")," \u5e94\u8be5\u547d\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"package cluster"),"\n\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"package clustermanager"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9664\u975e\u6709\u5145\u5206\u7406\u7531\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"package foo")," \u884c\u5e94\u8be5\u4e0e .go \u6587\u4ef6\u6240\u5728\u76ee\u5f55\u7684\u540d\u79f0\u76f8\u540c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u907f\u514d\u6b67\u4e49\uff0c\u5bfc\u5165\u5305\u65f6\u53ef\u4ee5\u6307\u5b9a\u522b\u540d\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9501\u5e94\u8be5\u88ab\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"lock"),"\uff0c\u5e76\u4e14\u6c38\u8fdc\u4e0d\u5e94\u8be5\u88ab\u5d4c\u5165\uff08\u603b\u662f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"lock sync.Mutex")," \u7684\u5f62\u5f0f\u660e\u786e\u58f0\u660e\uff09\u3002\u5f53\u5b58\u5728\u591a\u4e2a\u9501\u65f6\uff0c\u5e94\u8be5\u9075\u5faa Go \u7684\u547d\u540d\u7ea6\u5b9a\u7ed9\u6bcf\u4e2a\u9501\u4e00\u4e2a buts \u7684\u540d\u79f0 - ",(0,r.kt)("inlineCode",{parentName:"p"},"stateLock"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"mapLock")," \u7b49\u3002"))))),(0,r.kt)("h2",{id:"bash-\u6216\u811a\u672c\u89c4\u7ea6"},"Bash \u6216\u811a\u672c\u89c4\u7ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://google.github.io/styleguide/shell.xml"},"Shell \u6837\u5f0f\u6307\u5357")),(0,r.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6784\u5efa\u3001\u53d1\u5e03\u3001\u6d4b\u8bd5\u548c\u96c6\u7fa4\u7ba1\u7406\u811a\u672c\u53ef\u4ee5\u5728 macOS \u4e0a\u8fd0\u884c")),(0,r.kt)("h2",{id:"\u76ee\u5f55\u548c\u6587\u4ef6\u89c4\u7ea6"},"\u76ee\u5f55\u548c\u6587\u4ef6\u89c4\u7ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u907f\u514d\u8f6f\u4ef6\u5305\u65e0\u5e8f\u6269\u5c55\u3002\u4e3a\u65b0\u7684\u5305\u627e\u5230\u5408\u9002\u7684\u5b50\u76ee\u5f55\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u66f4\u5408\u9002\u653e\u7f6e\u4f4d\u7f6e\u7684\u65b0\u5305\u5e94\u8be5\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"pkg/util")," \u4e0b\u7684\u5b50\u76ee\u5f55\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u907f\u514d\u4f7f\u7528\u901a\u7528\u5305\u3002\u4f7f\u7528\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"util")," \u7684\u5305\u8ba9\u4eba\u7591\u60d1\u3002\u76f8\u53cd\u5730\uff0c\u5e94\u5f53\u6839\u636e\u4f60\u671f\u671b\u7684\u529f\u80fd\u63a8\u5bfc\u51fa\u5305\u540d\n\u4f8b\u5982\uff0c\u5904\u7406\u7b49\u5f85\u64cd\u4f5c\u7684\u4f7f\u7528\u529f\u80fd\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"wait")," \u5305\u4e2d\uff0c\u5305\u62ec\u7c7b\u4f3c Poll \u8fd9\u6837\u7684\u529f\u80fd\uff0c\u6240\u4ee5\u5b8c\u6574\u540d\u79f0\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"wait.Poll"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u7684\u6587\u4ef6\u540d\u90fd\u5e94\u8be5\u662f\u5c0f\u5199")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go \u6e90\u7801\u6587\u4ef6\u540d\u548c\u76ee\u5f55\u540d\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"-")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5305\u76ee\u5f55\u540d\u901a\u5e38\u5e94\u5f53\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u5206\u9694\u7b26\uff08\u5f53\u5305\u76ee\u5f55\u540d\u542b\u591a\u4e2a\u5355\u8bcd\u65f6\uff0c\u5b83\u4eec\u901a\u5e38\u5e94\u8be5\u88ab\u653e\u5728\u5d4c\u5957\u7684\u5b50\u76ee\u5f55\uff09"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6587\u6863\u7684\u6587\u4ef6\u540d\u548c\u76ee\u5f55\u540d\u4e2d\u5e94\u8be5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),"\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"_"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7528\u4e8e\u8bf4\u660e\u7cfb\u7edf\u7279\u6027\u7684\u793a\u4f8b\u5e94\u8be5\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/user-guide")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs/admin"),"\uff0c \u53d6\u51b3\u4e8e\u5b83\u662f\u4e3b\u8981\u9762\u5411\u90e8\u7f72\u5e94\u7528\u7684\u7528\u6237\u8fd8\u662f\u96c6\u7fa4\u7ba1\u7406\u5458\u3002\u5b9e\u9645\u7684\u5e94\u7528\u793a\u4f8b\u5e94\u4f4d\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"/example")," \u4e2d"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u793a\u4f8b\u8fd8\u5e94\u8be5\u5c55\u793a ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/overview/"},"\u914d\u7f6e\u548c\u4f7f\u7528\u7cfb\u7edf\u7684\u6700\u4f73\u5b9e\u8df5")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e09\u65b9\u4ee3\u7801"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u666e\u901a\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56 Go \u4ee3\u7801 \u7531 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules"},"go modules")," \u7ba1\u7406")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5176\u4ed6\u7684\u7b2c\u4e09\u65b9\u4ee3\u7801\u5e94\u8be5\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"/third_party")," \u76ee\u5f55\u4e0b"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fork \u7684\u7b2c\u4e09\u65b9 Go \u4ee3\u7801\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"/third_party/forked")," \u76ee\u5f55\u4e0b"),(0,r.kt)("li",{parentName:"ul"},"fork \u7684",(0,r.kt)("em",{parentName:"li"},"golang stdlib")," \u4ee3\u7801\u653e\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"/third_party/forked/golang")," \u76ee\u5f55\u4e0b"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e09\u65b9\u4ee3\u7801\u5fc5\u987b\u5305\u542b\u8bb8\u53ef\u8bc1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e5f\u5305\u62ec\u4fee\u6539\u8fc7\u7684\u7b2c\u4e09\u65b9\u4ee3\u7801\u548c\u5f15\u7528"))))),(0,r.kt)("h2",{id:"linting-\u548c\u683c\u5f0f\u5316"},"Linting \u548c\u683c\u5f0f\u5316"),(0,r.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd Go \u4ee3\u7801\u5e93\u4e4b\u95f4\u7684\u4e00\u81f4\u6027\uff0c\u6211\u4eec\u8981\u6c42\u6240\u6709\u4ee3\u7801\u901a\u8fc7\u591a\u4e2a linter \u68c0\u67e5\u3002"),(0,r.kt)("p",null,"\u8981\u8fd0\u884c\u6240\u6709\u7684 linter\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"lint")," \u4f5c\u4e3a Makefile \u76ee\u6807\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make lint\n")),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u5c06\u6e05\u7406\u4ee3\u7801\u5e76\u8fdb\u884c\u4e00\u4e9b lint \u68c0\u67e5\u3002\u68c0\u67e5\u7ed3\u675f\u540e\u8bf7\u8bb0\u5f97\u68c0\u67e5\u6240\u6709\u53d8\u66f4\u3002"))}u.isMDXComponent=!0}}]);