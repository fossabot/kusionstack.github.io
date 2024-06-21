"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,N=u["".concat(p,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(N,i(i({ref:t},k),{},{components:n})):a.createElement(N,i({ref:t},k))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u6d4b\u8bd5\u89c4\u7ea6"},i=void 0,o={unversionedId:"developer-guide/conventions/test-conventions",id:"developer-guide/conventions/test-conventions",title:"\u6d4b\u8bd5\u89c4\u7ea6",description:"\u6d4b\u8bd5\u539f\u5219",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/current/4-developer-guide/2-conventions/3-test-conventions.md",sourceDirName:"4-developer-guide/2-conventions",slug:"/developer-guide/conventions/test-conventions",permalink:"/zh/karpor/next/developer-guide/conventions/test-conventions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/4-developer-guide/2-conventions/3-test-conventions.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718940543,formattedLastUpdatedAt:"2024\u5e746\u670821\u65e5",sidebarPosition:3,frontMatter:{title:"\u6d4b\u8bd5\u89c4\u7ea6"},sidebar:"karpor",previous:{title:"\u4ee3\u7801\u89c4\u7ea6",permalink:"/zh/karpor/next/developer-guide/conventions/code-conventions"},next:{title:"Commit \u89c4\u7ea6",permalink:"/zh/karpor/next/developer-guide/conventions/commit-conventions"}},p={},s=[{value:"\u6d4b\u8bd5\u539f\u5219",id:"\u6d4b\u8bd5\u539f\u5219",level:2},{value:"\u6280\u672f\u9009\u62e9",id:"\u6280\u672f\u9009\u62e9",level:2},{value:"Ginkgo/Gomega",id:"ginkgogomega",level:3},{value:"Testify",id:"testify",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"\u7f16\u5199\u89c4\u8303",id:"\u7f16\u5199\u89c4\u8303",level:2},{value:"\u6d4b\u8bd5\u98ce\u683c",id:"\u6d4b\u8bd5\u98ce\u683c",level:3},{value:"\u6587\u4ef6\u547d\u540d",id:"\u6587\u4ef6\u547d\u540d",level:3},{value:"\u6d4b\u8bd5\u51fd\u6570\u547d\u540d",id:"\u6d4b\u8bd5\u51fd\u6570\u547d\u540d",level:3},{value:"\u6d4b\u8bd5\u51fd\u6570\u7b7e\u540d",id:"\u6d4b\u8bd5\u51fd\u6570\u7b7e\u540d",level:3},{value:"\u6d4b\u8bd5\u7ec4\u7ec7",id:"\u6d4b\u8bd5\u7ec4\u7ec7",level:3},{value:"Test Coverage",id:"test-coverage",level:3},{value:"\u6027\u80fd\u6d4b\u8bd5",id:"\u6027\u80fd\u6d4b\u8bd5",level:3},{value:"\u5e76\u53d1\u6d4b\u8bd5",id:"\u5e76\u53d1\u6d4b\u8bd5",level:3},{value:"\u6d4b\u8bd5\u5e2e\u52a9\u51fd\u6570",id:"\u6d4b\u8bd5\u5e2e\u52a9\u51fd\u6570",level:3},{value:"\u907f\u514d\u4f7f\u7528\u5168\u5c40\u53d8\u91cf",id:"\u907f\u514d\u4f7f\u7528\u5168\u5c40\u53d8\u91cf",level:3},{value:"\u6e05\u6670\u7684\u9519\u8bef\u4fe1\u606f",id:"\u6e05\u6670\u7684\u9519\u8bef\u4fe1\u606f",level:3}],k={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u539f\u5219"},"\u6d4b\u8bd5\u539f\u5219"),(0,r.kt)("p",null,"\u5728 Karpor \u4e2d\uff0c\u6211\u4eec\u4e3b\u8981\u5173\u6ce8\u4ee5\u4e0b\u4e09\u79cd\u6d4b\u8bd5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u5143\u6d4b\u8bd5\uff1a\u4e3b\u8981\u5173\u6ce8 ",(0,r.kt)("strong",{parentName:"li"},"\u6700\u5c0f\u53ef\u6d4b\u8bd5\u5355\u5143"),"\uff08\u4f8b\u5982\u51fd\u6570\uff0c\u65b9\u6cd5\uff0c\u5b9e\u7528\u7c7b\u7b49\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u6210\u6d4b\u8bd5\uff1a\u9488\u5bf9 ",(0,r.kt)("strong",{parentName:"li"},"\u591a\u4e2a\u5355\u5143\uff08\u6216\u6a21\u5757\uff09"),"\u95f4\u76f8\u4e92\u4f5c\u7528\u548c\u96c6\u6210\u7684\u6d4b\u8bd5"),(0,r.kt)("li",{parentName:"ul"},"\u7aef\u5230\u7aef\u6d4b\u8bd5\uff08e2e tests\uff09\uff1a \u9488\u5bf9 ",(0,r.kt)("strong",{parentName:"li"},"\u6574\u4e2a\u7cfb\u7edf\u884c\u4e3a")," \u7684\u6d4b\u8bd5\uff0c\u901a\u5e38\u9700\u8981\u6a21\u62df\u771f\u5b9e\u7528\u6237\u573a\u666f\u3002")),(0,r.kt)("p",null,"\u6bcf\u79cd\u6d4b\u8bd5\u90fd\u6709\u4f18\u52bf\uff0c\u52a3\u52bf\u548c\u9002\u7528\u573a\u666f\u3002\u4e3a\u4e86\u5b9e\u73b0\u66f4\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\uff0c\u6211\u4eec\u5728\u7f16\u5199\u6d4b\u8bd5\u65f6\u5e94\u9075\u5faa\u4ee5\u4e0b\u539f\u5219\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u539f\u5219"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u6d4b\u8bd5\u7528\u4f8b\u5e94\u8be5\u4ec5\u8986\u76d6\u5355\u4e2a\u573a\u666f"),(0,r.kt)("li",{parentName:"ul"},"\u9075\u5faa ",(0,r.kt)("strong",{parentName:"li"},"7-2-1 \u539f\u5219"),"\uff0c\u5373 70% \u7684\u5355\u5143\u6d4b\u8bd5\uff0c20% \u7684\u96c6\u6210\u6d4b\u8bd5\u548c 10% \u7684\u7aef\u5230\u7aef\u6d4b\u8bd5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u975e\u5fc5\u8981\u60c5\u51b5\u4e0b\uff0c\u907f\u514d\u5728\u5355\u5143\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u6846\u67b6"),"\uff08\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"golang/mock"),"\uff09\u3002\u5982\u679c\u4f60\u89c9\u5f97\u9700\u8981\u5728\u5355\u5143\u6d4b\u8bd5\u4e2d\u4f7f\u7528 mock \u6846\u67b6\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u5e94\u8be5\u5b9e\u73b0\u7684\u662f\u96c6\u6210\u6d4b\u8bd5\u751a\u81f3\u7aef\u5230\u7aef\u6d4b\u8bd5\u3002")),(0,r.kt)("h2",{id:"\u6280\u672f\u9009\u62e9"},"\u6280\u672f\u9009\u62e9"),(0,r.kt)("p",null,"\u5728\u5f53\u524d\u65f6\u95f4\u70b9\uff0c\u5728 Go \u8bed\u8a00\u751f\u6001\u4e2d\u6700\u6d41\u884c\u7684\u6d4b\u8bd5\u6846\u67b6\u4e3b\u8981\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/"},"Ginkgo"),"/",(0,r.kt)("a",{parentName:"p",href:"https://onsi.github.io/gomega/"},"Gomega")," \u548c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stretchr/testify"},"Testify"),"\u3002\u56e0\u6b64\uff0c\u672c\u8282\u4e3b\u8981\u8ba8\u8bba\u8fd9\u4e24\u4e2a\u6d4b\u8bd5\u6846\u67b6\u7684\u7684\u7279\u70b9\u3001\u4f18\u7f3a\u70b9\u4ee5\u53ca\u6700\u7ec8\u7684\u9009\u62e9\u3002"),(0,r.kt)("h3",{id:"ginkgogomega"},"Ginkgo/Gomega"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f18\u70b9"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"BDD \u652f\u6301"),"\uff1aGinkgo \u56e0\u4e3a\u652f\u6301\u884c\u4e3a\u9a71\u52a8\u5f00\u53d1\uff08Behavior-Driven Development\uff0cBDD\uff09\u98ce\u683c\u800c\u6536\u5230\u8bb8\u591a\u5f00\u53d1\u4eba\u5458\u7684\u9752\u7750\u3002\u5b83\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684 DSL \u8bed\u6cd5\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"Describe"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"Context"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"It")," \u7b49\u5173\u952e\u5b57\u4f7f\u6d4b\u8bd5\u7528\u4f8b\u66f4\u5177\u63cf\u8ff0\u6027\u548c\u53ef\u8bfb\u6027\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5e76\u884c\u6267\u884c"),"\uff1aGinkgo \u80fd\u591f\u4ee5\u591a\u8fdb\u7a0b\u5e76\u884c\u6267\u884c\u6d4b\u8bd5\uff0c\u63d0\u9ad8\u4e86\u6d4b\u8bd5\u6267\u884c\u7684\u6548\u7387\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4e30\u5bcc\u7684\u5339\u914d\u5668"),"\uff1a\u4e0e Gomega \u5339\u914d\u5668\u5e93\u7ed3\u5408\u4f7f\u7528\u65f6\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u65ad\u8a00\u80fd\u529b\uff0c\u4f7f\u6d4b\u8bd5\u66f4\u52a0\u76f4\u89c2\u548c\u65b9\u4fbf\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u652f\u6301"),"\uff1aGinkgo \u63d0\u4f9b\u4e86\u5bf9\u5904\u7406\u590d\u6742\u5f02\u6b65\u573a\u666f\u7684\u539f\u751f\u652f\u6301\uff0c\u964d\u4f4e\u4e86\u6b7b\u9501\u548c\u8d85\u65f6\u7684\u98ce\u9669\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u6d4b\u8bd5\u7528\u4f8b\u7ec4\u7ec7"),"\uff1a\u652f\u6301\u5c06\u6d4b\u8bd5\u7528\u4f8b\u7ec4\u7ec7\u5230\u6d4b\u8bd5\u5957\u4ef6\u4e2d\uff0c\u4fbf\u4e8e\u7ba1\u7406\u548c\u6269\u5c55\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5b66\u4e60\u66f2\u7ebf\u8fc7\u4e8e\u9661\u5ced"),"\uff1a\u5bf9\u4e0d\u719f\u6089 BDD \u6d4b\u8bd5\u6846\u67b6\u7684\u5f00\u53d1\u8005\u6765\u8bf4\uff0cGinkgo \u7684 DSL \u8bed\u6cd5\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u719f\u6089\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u5e76\u884c\u6d4b\u8bd5\u7684\u590d\u6742\u6027"),"\uff1a\u5c3d\u7ba1 Ginkgo \u652f\u6301\u5e76\u884c\u6d4b\u8bd5\uff0c\u4f46\u662f\u7ba1\u7406\u7528\u4e8e\u5e76\u884c\u6d4b\u8bd5\u7684\u8d44\u6e90\u548c\u73af\u5883\u53ef\u80fd\u4f1a\u5f15\u5165\u989d\u5916\u7684\u590d\u6742\u6027\u3002")),(0,r.kt)("h3",{id:"testify"},"Testify"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f18\u70b9"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7b80\u5316\u7684\u63a5\u53e3 API"),": Testify \u63d0\u4f9b\u4e86\u7b80\u5355\u660e\u4e86\u7684 API\uff0c\u5bb9\u6613\u4e0a\u624b\uff0c\u7279\u522b\u662f\u5bf9\u4e8e\u719f\u6089\u4e86 ",(0,r.kt)("inlineCode",{parentName:"li"},"testing")," \u5305\u7684\u5f00\u53d1\u8005\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Mock \u652f\u6301"),": \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684 Mock \u529f\u80fd\uff0c\u4fbf\u4e8e\u6a21\u62df\u4f9d\u8d56\u548c\u63a5\u53e3\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u8868\u683c\u9a71\u52a8\u6d4b\u8bd5"),": \u652f\u6301\u8868\u683c\u9a71\u52a8\u6d4b\u8bd5\uff0c\u5141\u8bb8\u6d4b\u8bd5\u540c\u4e00\u4e2a\u51fd\u6570\u4f7f\u7528\u5404\u79cd\u4e0d\u540c\u8f93\u5165\u548c\u9884\u671f\u8f93\u51fa\uff0c\u589e\u5f3a\u4e86\u6d4b\u8bd5\u7528\u4f8b\u7684\u53ef\u91cd\u7528\u6027\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u4e0e ",(0,r.kt)("inlineCode",{parentName:"strong"},"testing")," \u5305\u7684\u517c\u5bb9\u6027"),": Testify \u4e0e Go \u6807\u51c6\u5e93\u7684 testing \u5305\u9ad8\u5ea6\u517c\u5bb9\uff0c\u53ef\u4ee5\u65e0\u7f1d\u96c6\u6210\u5230\u73b0\u6709\u7684\u6d4b\u8bd5\u5de5\u4f5c\u6d41\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u6587\u6863"),": Testify \u7684 ",(0,r.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/stretchr/testify"},"\u5b98\u65b9\u6587\u6863")," \u4e5f\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u4ecb\u7ecd\uff0c\u5982\u4f55\u4f7f\u7528\u5176\u65ad\u8a00\u548c Mock \u529f\u80fd\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7f3a\u5c11 BDD \u652f\u6301"),": Testify \u4e0d\u652f\u6301 BDD \u98ce\u683c\uff0c\u5bf9\u4e8e\u5bfb\u6c42\u63d0\u9ad8\u6d4b\u8bd5\u7528\u4f8b\u53ef\u8bfb\u6027\u7684\u5f00\u53d1\u4eba\u5458\u53ef\u80fd\u76f4\u89c2\u6027\u8f83\u5dee\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u529f\u80fd\u76f8\u5bf9\u7b80\u5355"),": \u4e0e Ginkgo \u76f8\u6bd4\uff0cTestify \u7684\u529f\u80fd\u76f8\u5bf9\u7b80\u5355\uff0c\u53ef\u80fd\u4e0d\u6ee1\u8db3\u4e00\u4e9b\u590d\u6742\u6d4b\u8bd5\u573a\u666f\u7684\u9700\u6c42\u3002")),(0,r.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0cGinkgo/Gomega \u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u53ef\u8bfb\u6027\u548c\u53ef\u7ef4\u62a4\u6027\uff0c\u4ea7\u751f\u6e05\u6670\u660e\u4e86\u7684\u6d4b\u8bd5\u4ee3\u7801\uff0c\u4f46\u9700\u8981\u719f\u6089 BDD \u98ce\u683c\uff0c\u5b66\u4e60\u66f2\u7ebf\u6bd4\u8f83\u9661\u5ced\u3002Testify \u66f4\u7b80\u5355\u3001\u66f4\u5b9e\u7528\uff0c\u5b66\u4e60\u66f2\u7ebf\u8f83\u4e3a\u5e73\u7f13\uff0c\u4f46\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u6d4b\u8bd5\u4ee3\u7801\u98ce\u683c\u53ef\u80fd\u53d8\u5f97\u66f4\u52a0\u591a\u6837\u5316\uff0c\u964d\u4f4e\u53ef\u7ef4\u62a4\u6027\u3002"),(0,r.kt)("p",null,"\u8003\u8651\u5230 Karpor \u7684\u5b9e\u9645\u60c5\u51b5\u548c\u4e24\u79cd\u6846\u67b6\u7684\u4f18\u7f3a\u70b9\uff0c\u6211\u4eec\u51b3\u5b9a\u7ed3\u5408\u4f7f\u7528\u8fd9\u4e24\u4e2a\u6846\u67b6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Testify \u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\uff0c\u575a\u6301\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/wiki/TableDrivenTests"},"\u8868\u683c\u9a71\u52a8\u6d4b\u8bd5")," \u6765\u7ea6\u675f\u4ee3\u7801\u98ce\u683c\uff0c\u9632\u6b62\u9000\u5316\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5229\u7528 Ginkgo \u7684 BDD \u7279\u6027\u7f16\u5199\u66f4\u9ad8\u7ea7\u522b\u7684\u96c6\u6210\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5\uff1b")),(0,r.kt)("p",null,"\u8fd9\u79cd\u7ec4\u5408\u5145\u5206\u53d1\u6325\u4e86\u4e24\u79cd\u6846\u67b6\u7684\u4f18\u52bf\uff0c\u63d0\u9ad8\u4e86\u6d4b\u8bd5\u7684\u6574\u4f53\u6548\u7387\u3001\u53ef\u8bfb\u6027\u548c\u8d28\u91cf\u3002"),(0,r.kt)("h2",{id:"\u7f16\u5199\u89c4\u8303"},"\u7f16\u5199\u89c4\u8303"),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u98ce\u683c"},"\u6d4b\u8bd5\u98ce\u683c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://go.dev/wiki/TableDrivenTests"},"\u8868\u683c\u9a71\u52a8\u6d4b\u8bd5")," \u662f\u7f16\u5199\u6d4b\u8bd5\u7528\u4f8b\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u7c7b\u4f3c\u4e8e\u7f16\u7a0b\u4e2d\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u5b83\u4e5f\u662f\u5b98\u65b9 Go \u8bed\u8a00\u63a8\u8350\u7684\u98ce\u683c\u3002\u8868\u683c\u9a71\u52a8\u6d4b\u8bd5\u4f7f\u7528\u8868\u683c\u63d0\u4f9b\u5404\u79cd\u8f93\u5165\u548c\u9884\u671f\u8f93\u51fa\uff0c\u5141\u8bb8\u540c\u4e00\u4e2a\u6d4b\u8bd5\u51fd\u6570\u9a8c\u8bc1\u4e0d\u540c\u7684\u573a\u666f\u3002\u8fd9\u79cd\u65b9\u6cd5\u7684\u4f18\u70b9\u662f\u5b83\u589e\u52a0\u4e86\u6d4b\u8bd5\u7528\u4f8b\u7684\u53ef\u91cd\u7528\u6027\uff0c\u51cf\u5c11\u4e86\u91cd\u590d\u4ee3\u7801\uff0c\u5e76\u4f7f\u6d4b\u8bd5\u66f4\u52a0\u6e05\u6670\u6613\u4e8e\u7ef4\u62a4\u3002"),(0,r.kt)("p",null,"\u867d\u7136 Go \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"testing")," \u5305\u4e2d\u6ca1\u6709\u76f4\u63a5\u652f\u6301\u8868\u683c\u9a71\u52a8\u6d4b\u8bd5\u7684\u8bed\u6cd5\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u8f85\u52a9\u51fd\u6570\u548c\u4f7f\u7528\u533f\u540d\u51fd\u6570\u6765\u6a21\u62df\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u5728 Go \u6807\u51c6\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"fmt")," \u5305\u4e2d\u5b9e\u73b0\u7684\u8868\u683c\u9a71\u52a8\u6d4b\u8bd5\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var flagtests = []struct {\n    in  string\n    out string\n}{\n    {"%a", "[%a]"},\n    {"%-a", "[%-a]"},\n    {"%+a", "[%+a]"},\n    {"%#a", "[%#a]"},\n    {"% a", "[% a]"},\n    {"%0a", "[%0a]"},\n    {"%1.2a", "[%1.2a]"},\n    {"%-1.2a", "[%-1.2a]"},\n    {"%+1.2a", "[%+1.2a]"},\n    {"%-+1.2a", "[%+-1.2a]"},\n    {"%-+1.2abc", "[%+-1.2a]bc"},\n    {"%-1.2abc", "[%-1.2a]bc"},\n}\nfunc TestFlagParser(t *testing.T) {\n    var flagprinter flagPrinter\n    for _, tt := range flagtests {\n        t.Run(tt.in, func(t *testing.T) {\n            s := Sprintf(tt.in, &flagprinter)\n            if s != tt.out {\n                t.Errorf("got %q, want %q", s, tt.out)\n            }\n        })\n    }\n}\n')),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u76ee\u524d\u5927\u90e8\u5206\u4e3b\u6d41 IDE \u90fd\u5df2\u7ecf\u96c6\u6210\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cweill/gotests"},"gotests"),"\uff0c\u53ef\u4ee5\u81ea\u52a8\u751f\u6210\u8868\u683c\u9a71\u52a8\u98ce\u683c\u7684 Go \u5355\u5143\u6d4b\u8bd5\uff0c\u76f8\u4fe1\u8fd9\u53ef\u4ee5\u63d0\u5347\u5927\u5bb6\u7f16\u5199\u5355\u5143\u6d4b\u8bd5\u7684\u6548\u7387\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.jetbrains.com/go/2020/03/13/test-driven-development-with-goland/"},"GoLand")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juandes.com/go-test-vsc/"},"Visual Studio Code"))),(0,r.kt)("h3",{id:"\u6587\u4ef6\u547d\u540d"},"\u6587\u4ef6\u547d\u540d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u8303\u5185\u5bb9"),"\uff1a\u6d4b\u8bd5\u51fd\u6570\u5fc5\u987b\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Test")," \u5f00\u5934\uff0c\u540e\u9762\u8ddf\u7740\u88ab\u6d4b\u8bd5\u51fd\u6570\u7684\u540d\u79f0\uff0c\u4f7f\u7528\u9a7c\u5cf0\u5f0f\u547d\u540d\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"xxx_test.go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"testFile.go"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"test_xxx.go"))),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u51fd\u6570\u547d\u540d"},"\u6d4b\u8bd5\u51fd\u6570\u547d\u540d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u8303\u5185\u5bb9"),"\uff1a\u6d4b\u8bd5\u51fd\u6570\u540d\u5fc5\u987b\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Test")," \u5f00\u5934\uff0c\u540e\u9762\u8ddf\u7740\u88ab\u6d4b\u8bd5\u51fd\u6570\u7684\u540d\u79f0\uff0c\u4f7f\u7528\u9a7c\u5cf0\u5f0f\u547d\u540d\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestAdd(t *testing.T) {\n    // \u6d4b\u8bd5\u903b\u8f91 ...\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestAddWrong(t *testing.T) {\n    // \u6d4b\u8bd5\u903b\u8f91 ...\n}\n")))),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u51fd\u6570\u7b7e\u540d"},"\u6d4b\u8bd5\u51fd\u6570\u7b7e\u540d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u8303\u5185\u5bb9"),"\uff1a\u6d4b\u8bd5\u51fd\u6570\u7b7e\u540d\u5fc5\u987b\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"func TestXxx(t *testing.T)")," \u5f62\u5f0f\uff0c\u5176\u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"t")," \u662f\u7c7b\u578b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"*testing.T")," \u7684\u5bf9\u8c61\uff0c\u5e76\u4e14\u4e0d\u5e94\u8be5\u6709\u5176\u4ed6\u7684\u53c2\u6570\u548c\u8fd4\u56de\u503c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestSubtraction(t *testing.T) {\n    // \u6d4b\u8bd5\u903b\u8f91 ...\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestSubtraction(value int) {\n    // \u6d4b\u8bd5\u903b\u8f91 ...\n}\n")))),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u7ec4\u7ec7"},"\u6d4b\u8bd5\u7ec4\u7ec7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u8303\u5185\u5bb9"),"\uff1a\u6d4b\u8bd5\u7528\u4f8b\u5e94\u5f53\u76f8\u4e92\u72ec\u7acb\uff0c\u907f\u514d\u6d4b\u8bd5\u4e4b\u95f4\u76f8\u4e92\u5f71\u54cd\uff1b\u4f7f\u7528\u5b50\u6d4b\u8bd5 ",(0,r.kt)("inlineCode",{parentName:"li"},"t.Run")," \u6765\u7ec4\u7ec7\u590d\u6742\u7684\u6d4b\u8bd5\u573a\u666f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestMathOperations(t *testing.T) {\n    t.Run("Addition", func(t *testing.T) {\n        // addition \u7684\u6d4b\u8bd5\u903b\u8f91 ...\n    })\n    t.Run("Subtraction", func(t *testing.T) {\n        // subtraction \u7684\u6d4b\u8bd5\u903b\u8f91 ...\n    })\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestMathOperations(t *testing.T) {\n    // \u6df7\u5408 addition \u548c subtraction \u7684\u6d4b\u8bd5\u903b\u8f91 ...\n}\n")))),(0,r.kt)("h3",{id:"test-coverage"},"Test Coverage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u89c4\u8303\u5185\u5bb9"),"\uff1a\u9700\u8981\u6ce8\u610f\u6d4b\u8bd5\u8986\u76d6\u7387\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"go test -cover")," \u547d\u4ee4\u68c0\u67e5\u4ee3\u7801\u7684\u6d4b\u8bd5\u8986\u76d6\u7387\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ go test -cover\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ go test # \u4e0d\u68c0\u67e5\u6d4b\u8bd5\u8986\u76d6\u7387\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": Karpor \u5c06\u6b64\u547d\u4ee4\u5305\u88c5\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"make cover"),"\uff0c\u5b83\u5c06\u5728\u547d\u4ee4\u884c\u4e2d\u8f93\u51fa\u6bcf\u4e2a\u5305\u7684\u8986\u76d6\u7387\u548c\u603b\u8986\u76d6\u7387\u3002\u5982\u679c\u4f60\u60f3\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u8986\u76d6\u7387\u62a5\u544a\uff0c\u8bf7\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"make cover-html"),"\u3002"))),(0,r.kt)("h3",{id:"\u6027\u80fd\u6d4b\u8bd5"},"\u6027\u80fd\u6d4b\u8bd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u8303\u5185\u5bb9"),"\uff1a\u6027\u80fd\u6d4b\u8bd5\u5e94\u5f53\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"Benchmark")," \u5f00\u5934\uff0c\u5e76\u4e14\u63a5\u53d7 ",(0,r.kt)("inlineCode",{parentName:"li"},"*testing.B")," \u7c7b\u578b\u7684\u53c2\u6570\uff0c\u4e13\u6ce8\u4e8e\u6027\u80fd\u6d4b\u8bd5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func BenchmarkAdd(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        add(1, 1)\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func BenchmarkAddWrong(b *testing.B) {\n    for i := 0; i < 1000; i++ {\n        add(1, 1)\n    }\n}\n")))),(0,r.kt)("h3",{id:"\u5e76\u53d1\u6d4b\u8bd5"},"\u5e76\u53d1\u6d4b\u8bd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u8303\u5185\u5bb9"),"\uff1a\u5bf9\u4e8e\u5e76\u53d1\u4ee3\u7801\uff0c\u5e94\u8be5\u7f16\u5199\u9002\u5f53\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u4ee5\u786e\u4fdd\u5e76\u53d1\u903b\u8f91\u7684\u6b63\u786e\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestConcurrentAccess(t *testing.T) {\n    // \u8bbe\u7f6e\u5e76\u53d1\u73af\u5883 ... \n    // \u5e76\u53d1\u8bbf\u95ee\u6d4b\u8bd5\u903b\u8f91 ...\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestConcurrentAccess(t *testing.T) {\n    // \u4ec5\u6d4b\u8bd5\u5355\u7ebf\u7a0b\u903b\u8f91...\n}\n")))),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u5e2e\u52a9\u51fd\u6570"},"\u6d4b\u8bd5\u5e2e\u52a9\u51fd\u6570"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u89c4\u8303\u5185\u5bb9"),"\uff1a\u53ef\u4ee5\u5728\u6d4b\u8bd5\u6587\u4ef6\u4e2d\u5b9a\u4e49\u8f85\u52a9\u51fd\u6570\u6765\u5e2e\u52a9\u8bbe\u7f6e\u6d4b\u8bd5\u73af\u5883\u6216\u6e05\u7406\u8d44\u6e90\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func setupTest(t *testing.T) {\n    // \u8bbe\u7f6e\u6d4b\u8bd5\u73af\u5883 ...\n}\n\nfunc tearDownTest(t *testing.T) {\n    // \u6e05\u7406\u8d44\u6e90 ...\n}\n\nfunc TestMyFunction(t *testing.T) {\n    t.Run("TestSetup", func(t *testing.T) {\n        setupTest(t)\n        // \u6d4b\u8bd5\u903b\u8f91 ...\n    })\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u53cd\u9762\u793a\u4f8b"),"\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// \u76f4\u63a5\u5728\u6d4b\u8bd5\u4e2d\u8bbe\u7f6e\u73af\u5883\u548c\u6e05\u7406\u8d44\u6e90\nfunc TestMyFunction(t *testing.T) {\n    // \u8bbe\u7f6e\u6d4b\u8bd5\u73af\u5883 ... \n    // \u6d4b\u8bd5\u903b\u8f91 ... \n    // \u6e05\u7406\u8d44\u6e90 ...\n}\n")))),(0,r.kt)("h3",{id:"\u907f\u514d\u4f7f\u7528\u5168\u5c40\u53d8\u91cf"},"\u907f\u514d\u4f7f\u7528\u5168\u5c40\u53d8\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u8303\u5185\u5bb9"),": \u5c3d\u91cf\u907f\u514d\u5728\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u5168\u5c40\u53d8\u91cf\u4ee5\u786e\u4fdd\u6d4b\u8bd5\u72ec\u7acb\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),": \u5728\u6d4b\u8bd5\u51fd\u6570\u5185\u90e8\u58f0\u660e\u5e76\u4f7f\u7528\u5fc5\u8981\u7684\u53d8\u91cf\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),": \u5728\u6d4b\u8bd5\u6587\u4ef6\u7684\u9876\u90e8\u58f0\u660e\u5168\u5c40\u53d8\u91cf\u3002")),(0,r.kt)("h3",{id:"\u6e05\u6670\u7684\u9519\u8bef\u4fe1\u606f"},"\u6e05\u6670\u7684\u9519\u8bef\u4fe1\u606f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u8303\u5185\u5bb9"),": \u5f53\u6d4b\u8bd5\u5931\u8d25\u65f6\uff0c\u8f93\u51fa\u6e05\u6670\u6613\u61c2\u7684\u9519\u8bef\u4fe1\u606f\uff0c\u5e2e\u52a9\u5f00\u53d1\u4eba\u5458\u5b9a\u4f4d\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'t.Errorf("Expected value %d, but got %d", expected, real)')))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53cd\u9762\u793a\u4f8b"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'t.Errorf("Error occurred")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'fmt.Println("Error occurred")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'panic("Error occurred")'))))))}m.isMDXComponent=!0}}]);