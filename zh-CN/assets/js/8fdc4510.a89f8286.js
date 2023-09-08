"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2960],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),k=u(n),m=r,g=k["".concat(p,".").concat(m)]||k[m]||c[m]||o;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6984:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={slug:"2022-post-cloud-native-era-operation",title:"\u5df2\u6765\u5230 \u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u7684\u6211\u4eec\uff0c\u5982\u4f55\u89c4\u6a21\u5316\u8fd0\u7ef4\uff1f",authors:{name:"\u674e\u5927\u5143",title:"Kusion \u9879\u76ee\u8d1f\u8d23\u4eba"},tags:["KusionStack","Kusion"]},i="\u540e\u4e91\u539f\u751f\u65f6\u4ee3",l={permalink:"/zh-CN/blog/2022-post-cloud-native-era-operation",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/blog/2022-12-12-post-cloud-native-era-operation/index.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-12-12-post-cloud-native-era-operation/index.md",title:"\u5df2\u6765\u5230 \u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u7684\u6211\u4eec\uff0c\u5982\u4f55\u89c4\u6a21\u5316\u8fd0\u7ef4\uff1f",description:"\u8ddd\u79bb Kubernetes \u7b2c\u4e00\u4e2a commit \u5df2\u7ecf\u8fc7\u53bb\u516b\u5e74\u591a\u4e86\uff0c\u4ee5\u5176\u4e3a\u4ee3\u8868\u7684\u4e91\u539f\u751f\u6280\u672f\u65e9\u5df2\u4e0d\u518d\u662f\u4ec0\u4e48\u65b0\u6280\u672f\uff0c\u800c\u662f\u73b0\u4ee3\u5316\u5e94\u7528\u7684\u201c\u6807\u914d\u201d\u3002\u73b0\u4ee3\u5316\u5e94\u7528\u4f9d\u8d56\u7684\u57fa\u7840\u670d\u52a1\u8fdc\u4e0d\u6b62 Kubernetes \u4e00\u79cd\uff0c\u7a0d\u5fae\u590d\u6742\u70b9\u7684\u5e94\u7528\u5f80\u5f80\u4f1a\u540c\u65f6\u4f7f\u7528\u5230 Kubernetes \u751f\u6001\u4e91\u539f\u751f\u6280\u672f\u3001IaaS \u4e91\u670d\u52a1\u3001\u4f01\u4e1a\u5185\u90e8\u81ea\u5efa\u7cfb\u7edf\u7b49\u5404\u79cd\u5f02\u6784\u57fa\u7840\u8bbe\u65bd\uff0c\u53ef\u80fd\u8fd8\u4f1a\u6709\u591a\u4e91\u3001\u6df7\u5408\u4e91\u7684\u90e8\u7f72\u9700\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u8fdb\u5165\u5230\u4e86 \u201d\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d\uff0c\u53ea\u9488\u5bf9 Kubernetes \u7684\u8fd0\u7ef4\u5de5\u5177\u65e9\u5df2\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u8bc9\u6c42\u3002",date:"2022-12-12T00:00:00.000Z",formattedDate:"2022\u5e7412\u670812\u65e5",tags:[{label:"KusionStack",permalink:"/zh-CN/blog/tags/kusion-stack"},{label:"Kusion",permalink:"/zh-CN/blog/tags/kusion"}],readingTime:14.695,hasTruncateMarker:!1,authors:[{name:"\u674e\u5927\u5143",title:"Kusion \u9879\u76ee\u8d1f\u8d23\u4eba"}],frontMatter:{slug:"2022-post-cloud-native-era-operation",title:"\u5df2\u6765\u5230 \u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u7684\u6211\u4eec\uff0c\u5982\u4f55\u89c4\u6a21\u5316\u8fd0\u7ef4\uff1f",authors:{name:"\u674e\u5927\u5143",title:"Kusion \u9879\u76ee\u8d1f\u8d23\u4eba"},tags:["KusionStack","Kusion"]},prevItem:{title:"\u8682\u8681\u96c6\u56e2\u5e73\u53f0\u5de5\u7a0b\u89c4\u6a21\u5316\u5b9e\u8df5",permalink:"/zh-CN/blog/2023-05-26-qcon-guangzhou"},nextItem:{title:"KusionStack:\u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u5e94\u7528\u89c4\u6a21\u5316\u8fd0\u7ef4\u89e3\u51b3\u65b9\u6848",permalink:"/zh-CN/blog/2022-kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era"}},p={authorsImageUrls:[void 0]},u=[{value:"\u6211\u4eec\u7684\u5b9e\u8df5",id:"\u6211\u4eec\u7684\u5b9e\u8df5",level:2}],s={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8ddd\u79bb Kubernetes \u7b2c\u4e00\u4e2a commit \u5df2\u7ecf\u8fc7\u53bb\u516b\u5e74\u591a\u4e86\uff0c\u4ee5\u5176\u4e3a\u4ee3\u8868\u7684\u4e91\u539f\u751f\u6280\u672f\u65e9\u5df2\u4e0d\u518d\u662f\u4ec0\u4e48\u65b0\u6280\u672f\uff0c\u800c\u662f\u73b0\u4ee3\u5316\u5e94\u7528\u7684\u201c\u6807\u914d\u201d\u3002\u73b0\u4ee3\u5316\u5e94\u7528\u4f9d\u8d56\u7684\u57fa\u7840\u670d\u52a1\u8fdc\u4e0d\u6b62 Kubernetes \u4e00\u79cd\uff0c\u7a0d\u5fae\u590d\u6742\u70b9\u7684\u5e94\u7528\u5f80\u5f80\u4f1a\u540c\u65f6\u4f7f\u7528\u5230 Kubernetes \u751f\u6001\u4e91\u539f\u751f\u6280\u672f\u3001IaaS \u4e91\u670d\u52a1\u3001\u4f01\u4e1a\u5185\u90e8\u81ea\u5efa\u7cfb\u7edf\u7b49\u5404\u79cd\u5f02\u6784\u57fa\u7840\u8bbe\u65bd\uff0c\u53ef\u80fd\u8fd8\u4f1a\u6709\u591a\u4e91\u3001\u6df7\u5408\u4e91\u7684\u90e8\u7f72\u9700\u6c42\uff0c\u6211\u4eec\u5df2\u7ecf\u8fdb\u5165\u5230\u4e86 \u201d\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d\uff0c\u53ea\u9488\u5bf9 Kubernetes \u7684\u8fd0\u7ef4\u5de5\u5177\u65e9\u5df2\u4e0d\u80fd\u6ee1\u8db3\u6211\u4eec\u7684\u8bc9\u6c42\u3002"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/blog/2022-12-12-post-cloud-native-era-operation/modern-app.png",width:"60%"})),(0,r.kt)("p",null,"\u66f4\u590d\u6742\u7684\u662f\uff0c\u5728\u4f01\u4e1a\u5185\u90e8\uff0c\u8fd9\u4e9b\u670d\u52a1\u4e00\u822c\u662f\u7531\u4e0d\u540c\u56e2\u961f\u7ef4\u62a4\u7684\uff0c\u4e00\u6b21\u89c4\u6a21\u5316\u8fd0\u7ef4\u9700\u8981\u591a\u4e2a\u56e2\u961f\u7684\u6210\u5458\u4e92\u76f8\u914d\u5408\u624d\u80fd\u5b8c\u6210\uff0c\u4f46\u662f App Dev\uff0cPlatform Dev\uff0cSRE \u5404\u4e2a\u56e2\u961f\u4e4b\u95f4\u7f3a\u5c11\u9ad8\u6548\u7684\u534f\u4f5c\u65b9\u5f0f\u3002\u6280\u672f\u81ea\u8eab\u7684\u590d\u6742\u6027\u52a0\u4e0a\u4f4e\u6548\u7684\u56e2\u961f\u534f\u4f5c\uff0c\u4f7f\u5f97 \u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u7684\u89c4\u6a21\u5316\u8fd0\u7ef4\u96be\u5ea6\u6709\u4e86\u6307\u6570\u7ea7\u7684\u63d0\u9ad8\u3002"),(0,r.kt)("h1",{id:"\u89c4\u6a21\u5316\u8fd0\u7ef4\u7684\u95ee\u9898\u4e00\u76f4\u90fd\u5728"},"\u89c4\u6a21\u5316\u8fd0\u7ef4\u7684\u95ee\u9898\u4e00\u76f4\u90fd\u5728"),(0,r.kt)("p",null,"\u590d\u6742\u5f02\u6784\u57fa\u7840\u8bbe\u65bd\u7684\u89c4\u6a21\u5316\u8fd0\u7ef4\uff0c\u8fd9\u5e76\u4e0d\u662f\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u7279\u6709\u7684\u95ee\u9898\uff0c\u81ea\u5206\u5e03\u5f0f\u7cfb\u7edf\u8bde\u751f\u4ee5\u6765\uff0c\u4e00\u76f4\u90fd\u662f\u4e00\u4e2a\u96be\u9898\uff0c\u53ea\u662f\u5728\u540e\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u8fd9\u4e2a\u95ee\u9898\u53d8\u5f97\u66f4\u52a0\u56f0\u96be\u3002\u5341\u591a\u5e74\u524d\u4e1a\u754c\u63d0\u51fa\u4e86 DevOps \u7406\u5ff5\uff0c\u65e0\u6570\u4f01\u4e1a\u57fa\u4e8e\u6b64\u7406\u5ff5\u6784\u5efa\u4e86\u81ea\u5df1\u7684 DevOps \u5e73\u53f0\uff0c\u5e0c\u671b\u89e3\u51b3\u6b64\u95ee\u9898\uff0c\u4f46\u5728\u5b9e\u9645\u843d\u5730\u7684\u8fc7\u7a0b\u4e2d\u5f80\u5f80\u4e0d\u5c3d\u4eba\u610f\uff0cDev \u56e2\u961f\u548c Ops \u56e2\u961f\u4e4b\u95f4\u5982\u4f55\u5408\u4f5c\uff1f\u804c\u8d23\u5982\u4f55\u5212\u5206\uff1f\u51e0\u5341\u4eba\u7684\u5e73\u53f0\u56e2\u961f\uff0c\u5982\u4f55\u652f\u6301\u51e0\u4e07\u5de5\u7a0b\u5e08\u7684\u8fd0\u7ef4\u8bc9\u6c42\uff1f\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\u590d\u6742\u591a\u6837\uff0c\u80fd\u529b\u65e5\u65b0\u6708\u5f02\uff0c\u5982\u4f55\u5feb\u901f\u8ba9\u4e00\u7ebf Dev \u4eab\u53d7\u5230\u6280\u672f\u7ea2\u5229\uff1f\u8fd9\u4e9b\u95ee\u9898\u4e00\u76f4\u6ca1\u6709\u5f97\u5230\u5f88\u597d\u7684\u89e3\u51b3\uff0c\u6700\u8fd1\u53c8\u6709\u4eba\u63d0\u51fa\u4e86 DevOps \u5df2\u6b7b\uff0cPlatform Engineering \u624d\u662f\u672a\u6765\u7684\u8bf4\u6cd5\u3002\u629b\u5f00\u6982\u5ff5\u5b9a\u4e49\uff0c\u65e0\u8bba\u662f DevOps \u8fd8\u662f Platform Engineering\uff0c\u672c\u8d28\u4e0a\u90fd\u662f\u4f01\u4e1a\u89c4\u6a21\u5316\u8fd0\u7ef4\u8fd9\u540c\u4e00\u547d\u9898\u4e0b\u7684\u4e0d\u540c\u7406\u5ff5\uff0c\u6211\u4eec\u66f4\u9700\u8981\u7684\u662f\u4e00\u4e2a\u7b26\u5408\u6280\u672f\u53d1\u5c55\u8d8b\u52bf\uff0c\u80fd\u89e3\u51b3\u5f53\u524d\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h1",{id:"\u4f20\u7edf\u67b6\u6784\u4e0d\u518d\u9002\u7528"},"\u4f20\u7edf\u67b6\u6784\u4e0d\u518d\u9002\u7528"),(0,r.kt)("p",null,"\u5728\u4f20\u7edf\u7684\u8fd0\u7ef4\u601d\u8def\u4e2d\uff0c\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\u7684\u65b9\u6cd5\u4e00\u822c\u662f\u6784\u5efa\u4e00\u4e2a PaaS \u5e73\u53f0\uff0c\u4f8b\u5982\u6211\u4eec\u65e9\u671f\u7684\u8682\u8681 PaaS \u5e73\u53f0\uff0c\u4ed6\u662f\u4e00\u4e2a Web \u63a7\u5236\u53f0\uff0c\u6709 UI \u754c\u9762\uff0c\u7528\u6237\uff08\u901a\u5e38\u662f App Dev \u6216 SRE\uff09\u901a\u8fc7 UI \u4ea4\u4e92\u53ef\u4ee5\u5b8c\u6210\u8bf8\u5982\u53d1\u5e03\u3001\u91cd\u542f\u3001\u6269\u7f29\u5bb9\u7b49\u64cd\u4f5c\u3002\u5728\u6280\u672f\u5b9e\u73b0\u4e0a\u5927\u4f53\u53ef\u4ee5\u5206\u4e3a\u4e09\u90e8\u5206\uff0c\u4e00\u4e2a\u524d\u7aef\u7cfb\u7edf\uff0c\u63d0\u4f9b\u7528\u6237\u4ea4\u4e92\u7684\u80fd\u529b\uff0c\u4f5c\u4e3a\u7cfb\u7edf\u5165\u53e3\uff1b\u4e2d\u95f4\u662f\u4e00\u4e2a\u540e\u7aef\u7cfb\u7edf\uff0c\u5bf9\u63a5\u5404\u4e2a\u57fa\u7840\u8bbe\u65bd\uff1b\u5e95\u5c42\u662f\u5404\u4e2a\u57fa\u7840\u8bbe\u7684 API\u3002\u8fd9\u79cd\u67b6\u6784\u8fd0\u884c\u4e86\u8fd1\u5341\u5e74\uff0c\u4e00\u76f4\u8fd0\u884c\u7684\u5f88\u597d\uff0c\u65e2\u6709\u7528\u6237\u53cb\u597d\u7684\u4ea4\u4e92\u754c\u9762\uff0c\u53c8\u53ef\u4ee5\u5c4f\u853d\u57fa\u7840\u8bbe\u65bd\u590d\u6742\u6027\uff0c\u800c\u4e14\u5404\u4e2a\u56e2\u961f\u4e4b\u95f4\u8fd8\u804c\u8d23\u5206\u660e\uff0c\u4f46\u662f\u5230\u4e86\u5982\u4eca\u540e\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u8fd9\u79cd\u67b6\u6784\u4e0d\u518d\u9002\u7528\uff0c\u66b4\u9732\u51fa\u6709\u4e24\u4e2a\u81f4\u547d\u7f3a\u70b9\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u201c\u8d39\u4eba\u201d\u3001\u201c\u8d39\u65f6\u201d"),"\u3002"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/blog/2022-12-12-post-cloud-native-era-operation/classic.png",width:"30%"})),(0,r.kt)("p",null,"\u4e3e\u4e00\u4e2a\u5e38\u89c1\u7684\u4f8b\u5b50\uff0c\u7f51\u7edc\u56e2\u961f\u4e3a\u5176\u8d1f\u8d23\u7684 Loadbalancer\uff08\u8d1f\u8f7d\u5747\u8861\u5668\uff09\u5f00\u53d1\u4e86\u4e00\u79cd\u65b0\u7684\u8d1f\u8f7d\u7b97\u6cd5\uff0c\u9700\u8981\u63d0\u4f9b\u7ed9\u7528\u6237\u4f7f\u7528\u3002\u5728\u4e0a\u8ff0\u67b6\u6784\u4e0b\uff0c\u6574\u4e2a\u5de5\u4f5c\u6d41\u7a0b\u662f\u8fd9\u4e2a\u6837\u5b50\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u56e2\u961f\u5f00\u53d1\u597d\u80fd\u529b\uff0c\u63d0\u4f9b\u51fa API"),(0,r.kt)("li",{parentName:"ol"},"PaaS \u540e\u7aef\u901a\u8fc7\u7f16\u7801\u5bf9\u63a5\u5e95\u5c42 API\uff0c\u8fdb\u884c\u4e92\u8054\u4e92\u901a\uff0c\u5c4f\u853d\u590d\u6742\u6027\uff0c\u63d0\u4f9b\u9762\u5411\u7528\u6237\u7684\u66f4\u9ad8\u7ea7\u522b API"),(0,r.kt)("li",{parentName:"ol"},"PaaS \u524d\u7aef\u6839\u636e\u65b0\u529f\u80fd\u4fee\u6539 UI\uff0c\u5229\u7528\u540e\u7aef API \u628a\u80fd\u529b\u900f\u51fa\u7ed9\u6700\u7ec8\u7528\u6237")),(0,r.kt)("p",null,"\u8fd9\u91cc\u5b58\u5728\u4e00\u4e2a\u95ee\u9898\uff0c\u5373\u4f7f\u4e00\u4e2a\u518d\u5c0f\u7684\u529f\u80fd\uff0c\u4e5f\u9700\u8981 PaaS \u540e\u7aef\u548c\u524d\u7aef\u4fee\u6539\u4ee3\u7801\uff0c\u6574\u4e2a\u6d41\u7a0b\u4e0b\u6765\u6700\u5feb\u4e5f\u8981\u4e00\u5468\u624d\u80fd\u4e0a\u7ebf\uff0c\u800c\u4e14\u6d89\u53ca\u7684\u57fa\u7840\u8bbe\u65bd\u56e2\u961f\u8d8a\u591a\uff0c\u6548\u7387\u8d8a\u4f4e\u3002\u8fd9\u4e2a\u95ee\u9898\u5728\u5341\u5e74\u524d\u5e76\u4e0d\u7b97\u662f\u4e00\u4e2a\u95ee\u9898\uff0c\u4f46\u662f\u5728\u4eca\u5929\u5c31\u662f\u4e00\u4e2a\u5f88\u5927\u7684\u95ee\u9898\uff0c\u4e00\u4e2a\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u7684\u73b0\u4ee3\u5316\u5e94\u7528\uff0c\u4f7f\u7528\u4e09\u4e2a\u4e91\u539f\u751f\u6280\u672f\uff08Kubernetes + Istio + Prometheus\uff09\uff0c\u4e24\u4e2a\u4e91\u670d\u52a1\uff08Loadbalancer + Database\uff09\uff0c\u4e00\u4e2a\u5185\u90e8\u81ea\u5efa\u670d\u52a1\uff0c\u5df2\u7ecf\u662f\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u5f62\u6001\u4e86\uff0c\u590d\u6742\u5e94\u7528\u53ea\u4f1a\u4f9d\u8d56\u7684\u66f4\u591a\u3002\u5982\u679c\u6bcf\u4e2a\u57fa\u7840\u8bbe\u65bd\u90fd\u7531 PaaS \u56e2\u961f\u786c\u7f16\u7801\u5bf9\u63a5\u4e00\u904d\uff0cPaaS \u56e2\u961f\u7684\u4eba\u518d\u6269\u5927\u5341\u500d\u4e5f\u4e0d\u591f\u7528\u3002"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/blog/2022-12-12-post-cloud-native-era-operation/circle.png",width:"50%"})),(0,r.kt)("p",null,"\u201c\u8d39\u4eba\u201d\u8bb2\u5b8c\u4e86\uff0c\u6211\u4eec\u518d\u770b\u770b\u201c\u8d39\u65f6\u201d\u7684\u95ee\u9898\u3002\u4e0a\u9762\u4f8b\u5b50\u91cc\u7684\u4e00\u4e2a\u5c0f\u529f\u80fd\uff0c\u9700\u8981\u8fdb\u884c\u4e24\u6b21\u8de8\u56e2\u961f\u7684\u534f\u4f5c\uff0c\u4e00\u6b21\u57fa\u7840\u8bbe\u65bd\u548c PaaS \u540e\u7aef\uff0c\u53e6\u4e00\u6b21\u662f PaaS \u540e\u7aef\u4e0e PaaS \u524d\u7aef\u3002\u56e2\u961f\u534f\u4f5c\u662f\u4e00\u4e2a\u5f88\u96be\u7684\u95ee\u9898\uff0c\u6709\u65f6\u5019\u6bd4\u6280\u672f\u672c\u8eab\u8fd8\u8981\u96be\u3002\u5e94\u7528\u7684\u67b6\u6784\u5df2\u7ecf\u5f88\u590d\u6742\u4e86\uff0c\u5982\u679c\u8981\u505a\u4e00\u6b21\u89c4\u6a21\u5316\u8fd0\u7ef4\uff0c\u4e00\u6b21\u8fd0\u7ef4 100 \u4e2a\u5e94\u7528\uff0c\u8fd9\u8981\u548c\u591a\u5c11\u4e2a\u56e2\u961f\u6c9f\u901a\u534f\u4f5c\uff1f\u8981\u82b1\u8d39\u591a\u5c11\u65f6\u95f4\uff1f\u6ca1\u6709\u597d\u7684\u534f\u4f5c\u673a\u5236\uff0c\u8fd9\u5c31\u53d8\u6210\u4e86\u4e00\u4e2a\u4e0d\u53ef\u80fd\u5b8c\u6210\u7684\u4efb\u52a1\u3002"),(0,r.kt)("h1",{id:"\u63a2\u7d22\u4e0e\u5b9e\u8df5"},"\u63a2\u7d22\u4e0e\u5b9e\u8df5"),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u8682\u8681\u96c6\u56e2\u5185\u90e8\u8fdb\u884c\u4e86\u8fd1\u4e24\u5e74\u7684\u63a2\u7d22\uff0ckustomize\u3001helm\u3001argoCD\u3001Terraform \u8fd9\u4e9b\u5e38\u89c1\u7684\u5de5\u5177\u6211\u4eec\u90fd\u5b9e\u8df5\u8fc7\uff0c\u751a\u81f3\u8fd8\u4e3a\u4e00\u4e9b\u5de5\u5177\u81ea\u7814\u4e86\u4e00\u4e9b\u8f85\u52a9\u7cfb\u7edf\uff0c\u4f46\u7ed3\u679c\u5e76\u4e0d\u5c3d\u4eba\u610f\u3002\u8fd9\u4e9b\u5de5\u5177\u8981\u4e48\u592a\u5c40\u9650\u4e8e Kubernetes \u751f\u6001\uff0c\u8fd0\u7ef4\u4e0d\u4e86\u5176\u4ed6\u7c7b\u578b\u7684\u57fa\u7840\u8bbe\u65bd\uff0c\u8981\u4e48\u5c31\u662f\u652f\u6301\u4e86\u5f02\u6784\u57fa\u7840\u8bbe\u65bd\uff0c\u4f46\u5bf9\u4e8e Kubernetes \u751f\u6001\u652f\u6301\u7684\u4e0d\u53cb\u597d\uff0c\u65e0\u6cd5\u53d1\u6325\u51fa\u4e91\u539f\u751f\u6280\u672f\u7684\u4f18\u52bf\uff0c\u800c\u4e14\u53ea\u662f\u8fd0\u7ef4\u5de5\u5177\u7684\u5347\u7ea7\u5bf9\u4e8e\u56e2\u961f\u534f\u4f5c\u6548\u7387\u51e0\u4e4e\u6ca1\u6709\u63d0\u5347\uff0c\u6211\u4eec\u9700\u8981\u4e00\u5957\u66f4\u52a0\u4f53\u7cfb\u5316\u7684\u65b9\u6848\u3002\n\u56de\u5230\u95ee\u9898\u672c\u8eab\uff0c\u9488\u5bf9\u201c\u8d39\u4eba\u201d\u3001\u201c\u8d39\u65f6\u201d\u7684\u95ee\u9898\uff0c\u6211\u4eec\u63d0\u51fa\u4e24\u4e2a\u601d\u8def\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u80fd\u5426\u4e0d\u8ba9 PaaS \u505a\u4e2d\u8f6c\uff0c\u800c\u662f\u7531 App Dev \u901a\u8fc7\u4e00\u79cd\u9ad8\u6548\u81ea\u52a9\u7684\u65b9\u5f0f\uff0c\u4f7f\u7528\u5230\u4e92\u8054\u4e92\u901a\u7684\u5404\u79cd\u57fa\u7840\u8bbe\u65bd\u80fd\u529b\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u80fd\u5426\u6784\u5efa\u4e00\u4e2a\u4e2d\u5fc3\u5316\u7684\u534f\u4f5c\u5e73\u53f0\uff0c\u7528\u6280\u672f\u7684\u624b\u6bb5\u89c4\u8303\u5927\u5bb6\u7684\u884c\u4e3a\uff0c\u6807\u51c6\u5316\u7684\u8fdb\u884c\u6c9f\u901a\uff1f")),(0,r.kt)("p",null,"\u4ece\u6280\u672f\u7684\u89d2\u5ea6\u6765\u770b\uff0cPaaS \u5e73\u53f0\u9700\u8981\u63d0\u4f9b\u7075\u6d3b\u7684\u5de5\u5177\u94fe\u548c\u5de5\u4f5c\u6d41\uff0c\u57fa\u7840\u8bbe\u65bd\u6240\u6709\u80fd\u529b\u90fd\u901a\u8fc7\u6a21\u5757\u5316\u7684\u65b9\u5f0f\u66b4\u9732\u51fa\u6765\uff0cApp Dev \u5229\u7528\u8fd9\u4e9b\u5e73\u53f0\u7684\u57fa\u672c\u80fd\u529b\uff0c\u81ea\u5df1\u7ec4\u5408\u3001\u7f16\u6392\u6765\u89e3\u51b3\u81ea\u5df1\u7684\u95ee\u9898\uff0c\u8fc7\u7a0b\u4e2d\u4e0d\u9700\u8981\u5e73\u53f0\u5c42\u7684\u53c2\u4e0e\u3002\u5e76\u4e14\u6574\u4e2a\u8fc7\u7a0b\u4e2d\u6d89\u53ca\u7684\u6240\u6709\u56e2\u961f\uff0c\u90fd\u4f7f\u7528\u7edf\u4e00\u7684\u8bed\u8a00\u548c\u63a5\u53e3\u8fdb\u884c\u4ea4\u6d41\uff0c\u5168\u7a0b\u65e0\u9700\u4eba\u5de5\u53c2\u4e0e\u3002"),(0,r.kt)("h2",{id:"\u6211\u4eec\u7684\u5b9e\u8df5"},"\u6211\u4eec\u7684\u5b9e\u8df5"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/arch.png",alt:null})),(0,r.kt)("p",null,"\u7ecf\u8fc7\u5728\u8682\u8681\u5185\u90e8 PaaS \u5e73\u53f0\u8fd1\u4e24\u5e74\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5\uff0c\u6c89\u6dc0\u51fa\u4e00\u5957\u7aef\u5230\u7aef\u7684\u5b8c\u6574\u65b9\u6848\uff0c \u53d6\u540d\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion"},"KusionStack")," \uff0c\u76ee\u524d\u5df2\u7ecf\u5f00\u6e90\u3002\u8bd5\u56fe\u4ece\u7edf\u4e00\u5f02\u6784\u57fa\u7840\u8bbe\u65bd\u8fd0\u7ef4\u4e0e\u56e2\u961f\u534f\u4f5c\u4e24\u4e2a\u89d2\u5ea6\u89e3\u51b3\u4f20\u7edf PaaS \u201c\u8d39\u4eba\u201d\u3001\u201c\u8d39\u65f6\u201d\u7684\u95ee\u9898\u3002\u6574\u4e2a\u4f53\u7cfb\u4e3b\u8981\u5206\u4e3a\u4e09\u4e2a\u90e8\u5206\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig"),"\uff1aGit \u5927\u5e93\uff0c\u662f\u591a\u56e2\u961f\u534f\u4f5c\u7684\u4e2d\u5fc3\u5316\u5e73\u53f0\uff0c\u5b58\u653e\u7740\u5404\u4e2a\u56e2\u961f\u7684\u8fd0\u7ef4\u610f\u56fe"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/KCLVM"},"KCL"),"\uff1a\u8682\u8681\u81ea\u7814\u7684\u914d\u7f6e\u7b56\u7565 DSL\uff0c\u6240\u6709\u56e2\u961f\u95f4\u4ea4\u6d41\u7684\u5de5\u5177"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion"),"\uff1aKusionStack \u5f15\u64ce\uff0c\u8d1f\u8d23\u6240\u6709\u7684\u8fd0\u7ef4\u64cd\u4f5c")),(0,r.kt)("p",null,"Platform Dev \u901a\u8fc7 KCL \u5b9a\u4e49\u597d\u57fa\u7840\u80fd\u529b\u6a21\u578b\uff0cApp Dev \u901a\u8fc7 import\u3001mixin \u7b49\u8bed\u8a00\u7279\u6027\u5728\u5e94\u7528\u914d\u7f6e\u6a21\u578b\uff08AppConfig\uff09\u91cc\u590d\u7528\u8fd9\u4e9b\u9884\u5b9a\u4e49\u597d\u7684\u80fd\u529b\uff0c\u5feb\u901f\u5728 Konfig \u91cc\u63cf\u8ff0\u8fd0\u7ef4\u610f\u56fe\u3002AppConfig \u662f\u4e00\u4e2a\u7cbe\u5fc3\u8bbe\u8ba1\u8fc7\u7684\u6a21\u578b\uff0c\u53ea\u66b4\u9732 App Dev \u9700\u8981\u5173\u5fc3\u7684\u5c5e\u6027\uff0c\u5c4f\u853d\u57fa\u7840\u8bbe\u65bd\u7684\u590d\u6742\u6027\u3002"),(0,r.kt)("p",null,"\u6c38\u8fdc\u4e0d\u8981\u4f4e\u4f30\u57fa\u7840\u8bbe\u65bd\u7684\u4e13\u4e1a\u6027\u4e0e\u590d\u6742\u6027\uff0c\u5373\u4f7f\u5df2\u7ecf\u6210\u4e3a\u4e91\u539f\u751f\u6280\u672f\u6807\u51c6\u7684 Kubernetes\uff0c\u5bf9\u666e\u901a\u7528\u6237\u6765\u8bf4\u4f9d\u7136\u6709\u5f88\u9ad8\u7684\u95e8\u69db\uff0c\u4e00\u4e2a Deployment \u5c31\u6709\u51e0\u5341\u4e2a\u5b57\u6bb5\uff0c\u518d\u52a0\u4e0a\u81ea\u5b9a\u4e49\u7684 labels\u3001annotations \u5c31\u66f4\u591a\u4e86\uff0c\u666e\u901a\u7528\u6237\u6839\u672c\u65e0\u6cd5\u5168\u90e8\u7406\u89e3\u3002\u6216\u8005\u8bf4\u666e\u901a AppDev \u4e0d\u5e94\u8be5\u53bb\u4e86\u89e3 Kubernetes\uff0c\u4ed6\u4eec\u9700\u8981\u7684\u53ea\u662f\u53d1\u5e03\uff0c\u751a\u81f3\u4e0d\u9700\u8981\u5173\u5fc3\u5e95\u5c42\u662f\u4e0d\u662f Kubernetes\u3002"),(0,r.kt)("p",null,"AppConfig \u7ecf\u8fc7\u7f16\u8bd1\u540e\u4f1a\u751f\u6210\u591a\u4e2a\u5f02\u6784\u57fa\u7840\u8bbe\u65bd\u7684\u8d44\u6e90\uff0c\u901a\u8fc7 CI\u3001CLI\u3001GUI \u7b49\u65b9\u5f0f\u628a\u6570\u636e\u4f20\u8f93\u7ed9 KusionStack \u5f15\u64ce\u3002\u5f15\u64ce\u662f\u6574\u4e2a\u4f53\u7cfb\u7684\u6838\u5fc3\uff0c\u8d1f\u8d23\u6240\u6709\u8fd0\u7ef4\u64cd\u4f5c\uff0c\u662f\u8fd0\u7ef4\u610f\u56fe\u771f\u6b63\u751f\u6548\u5230\u57fa\u7840\u8bbe\u65bd\u7684\u5730\u65b9\u3002\u4ed6\u901a\u8fc7\u7edf\u4e00\u7684\u65b9\u5f0f\u5bf9\u63a5\u5f02\u6784\u57fa\u7840\u8bbe\u65bd\uff0c\u5e76\u5bf9\u8fd9\u4e9b\u8d44\u6e90\u8fdb\u884c\u6821\u9a8c\u3001\u7f16\u6392\u3001\u9884\u89c8\u3001\u751f\u6548\u3001\u89c2\u6d4b\u3001\u5065\u5eb7\u68c0\u67e5\u7b49\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u6574\u4e2a\u8fc7\u7a0b\u5bf9\u8fd0\u7ef4 Kubernetes \u8d44\u6e90\u975e\u5e38\u53cb\u597d\u3002\u4f7f\u7528\u8fc7 Kubernetes \u7684\u540c\u5b66\u90fd\u77e5\u9053\uff0c\u7531\u4e8e\u5176\u9762\u5411\u7ec8\u6001\u3001\u81ea\u8c03\u548c\u7684\u7279\u70b9\uff0capply \u6210\u529f\u5e76\u4e0d\u4ee3\u8868\u8d44\u6e90\u5df2\u7ecf\u53ef\u4ee5\u7528\uff0c\u9700\u8981\u7b49\u8d44\u6e90\u8c03\u548c\u6210\u529f\u540e\u624d\u80fd\u63d0\u4f9b\u670d\u52a1\uff0c\u5982\u679c\u8c03\u548c\u5931\u8d25\u4e86\uff0c\u8fd8\u9700\u8981\u767b\u9646\u5230\u96c6\u7fa4\u4e2d\uff0c\u901a\u8fc7 get\u3001describe\u3001log \u7b49\u547d\u4ee4\u67e5\u770b\u5177\u4f53\u62a5\u9519\uff0c\u6574\u4e2a\u8fc7\u7a0b\u5341\u5206\u7e41\u7410\u3002\u6211\u4eec\u901a\u8fc7\u6280\u672f\u7684\u624b\u6bb5\u5bf9\u8fd9\u4e9b\u64cd\u4f5c\u8fdb\u884c\u4e86\u7b80\u5316\uff0c\u628a\u8c03\u548c\u8fc7\u7a0b\u4e2d\u7684\u91cd\u8981\u4fe1\u606f\u4ee5\u7528\u6237\u53cb\u597d\u7684\u65b9\u5f0f\u900f\u9732\u51fa\u6765\u3002\u4e0b\u9762\u7684\u52a8\u56fe\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u5f53\u547d\u4ee4\u4e0b\u53d1\u540e\uff0c\u53ef\u4ee5\u6e05\u6670\u7684\u770b\u5230\u6240\u6709\u8d44\u6e90\u53ca\u5176\u5173\u8054\u8d44\u6e90\u8c03\u548c\u8fc7\u7a0b\uff0c\u76f4\u5230\u8d44\u6e90\u771f\u6b63\u7684\u53ef\u7528\u3002"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:"/img/docs/user_docs/getting-started/apply.gif"})),(0,r.kt)("p",null,"\u6574\u4e2a\u4f53\u7cfb\u6709\u5982\u4e0b\u51e0\u4e2a\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5168\u65b9\u4f4d\u914d\u7f6e\u7ba1\u7406\uff0c\u5305\u62ec\u8ba1\u7b97\u3001\u7f51\u7edc\u3001\u5b58\u50a8\u7b49\u6240\u6709\u4e0e\u5e94\u7528\u6709\u5173\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u5168\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u4ece\u7b2c\u4e00\u884c\u914d\u7f6e\u4ee3\u7801\u5230\u751f\u4ea7\u53ef\u7528"))),(0,r.kt)("li",{parentName:"ol"},"\u7edf\u4e00\u8fd0\u7ef4\u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d\u5e94\u7528\u7684\u5f02\u6784\u57fa\u7840\u8bbe\u65bd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Kubernetes \u53cb\u597d\u7684\u5de5\u4f5c\u6d41\uff0c\u4e3a Kubernetes \u8d44\u6e90\u63d0\u4f9b\u53ef\u89c2\u6d4b\u6027\u3001\u5065\u5eb7\u68c0\u67e5\u7b49\u9ad8\u9636\u80fd\u529b\uff0c\u91ca\u653e\u4e91\u539f\u751f\u6280\u672f\u7ea2\u5229"),(0,r.kt)("li",{parentName:"ul"},"\u590d\u7528 Terraform \u751f\u6001\uff0c\u7edf\u4e00\u7684\u5de5\u4f5c\u6d41\u8fd0\u7ef4 Kubernetes\u3001Terraform \u591a\u8fd0\u884c\u65f6\u8d44\u6e90"))),(0,r.kt)("li",{parentName:"ol"},"\u89c4\u6a21\u5316\u534f\u540c\u5e73\u53f0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u5de5\u4f5c\u6d41\uff0c\u7528\u6237\u53ef\u5229\u7528\u5e73\u53f0\u7684\u57fa\u672c\u80fd\u529b\uff0c\u81ea\u5df1\u7ec4\u5408\u3001\u7f16\u6392\u6765\u89e3\u51b3\u81ea\u5df1\u7684\u95ee\u9898"),(0,r.kt)("li",{parentName:"ul"},"App Dev \u548c Platform Dev \u5173\u6ce8\u70b9\u5206\u79bb\uff0c\u5e95\u5c42\u80fd\u529b\u8fed\u4ee3\u65e0\u9700\u5e73\u53f0\u4ecb\u5165\uff0c\u76f4\u63a5\u4f9b App Dev \u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u7eaf\u5ba2\u6237\u7aef\u65b9\u6848\uff0c\u98ce\u9669\u201c\u5de6\u79fb\u201d\uff0c\u5c3d\u65e9\u53d1\u73b0\u95ee\u9898")))),(0,r.kt)("h1",{id:"\u4e00\u5207\u624d\u521a\u521a\u5f00\u59cb"},"\u4e00\u5207\u624d\u521a\u521a\u5f00\u59cb"),(0,r.kt)("p",null,"\u8fd9\u5957\u4f53\u7cfb\u7ecf\u8fc7\u8fd1\u4e24\u5e74\u7684\u63a2\u7d22\uff0c\u5df2\u5e7f\u6cdb\u5e94\u7528\u5728\u8682\u8681\u591a\u4e91\u5e94\u7528\u4ea4\u4ed8\u8fd0\u7ef4\uff0c\u8ba1\u7b97\u53ca\u6570\u636e\u57fa\u7840\u8bbe\u65bd\u4ea4\u4ed8\uff0c\u5efa\u7ad9\u8fd0\u7ef4\uff0c\u6570\u636e\u5e93\u8fd0\u7ef4\u7b49\u591a\u4e2a\u4e1a\u52a1\u9886\u57df\uff0c\u76ee\u524d 400+ \u7814\u53d1\u8005\u76f4\u63a5\u53c2\u4e0e\u4e86 Konfig \u5927\u5e93\u4ee3\u7801\u8d21\u732e\uff0c\u7d2f\u8ba1\u8fd1 800K Commits\uff0c\u5176\u4e2d\u5927\u90e8\u5206\u4e3a\u673a\u5668\u81ea\u52a8\u5316\u4ee3\u7801\u4fee\u6539\uff0c\u65e5\u5747 1K pipeline \u4efb\u52a1\u6267\u884c\u548c\u8fd1 10K KCL \u7f16\u8bd1\u6267\u884c\uff0c\u5168\u91cf\u7f16\u8bd1\u540e\u53ef\u4ea7\u751f 3M+ \u884c\u7684 YAML \u6587\u672c\u3002"),(0,r.kt)("p",null,"\u4e0d\u8fc7\uff0c\u8fd9\u4e00\u5207\u624d\u521a\u521a\u5f00\u59cb\uff0c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u4e5f\u624d\u521a\u521a\u5230\u6765\uff0c\u6211\u4eec\u628a\u8fd9\u5957\u7cfb\u7edf\u5f00\u6e90\u7684\u76ee\u7684\u4e5f\u662f\u5e0c\u671b\u9080\u8bf7\u4e1a\u5185\u5404\u65b9\u7684\u529b\u91cf\uff0c\u4e00\u8d77\u6784\u5efa\u4e00\u4e2a\u7b26\u5408\u6280\u672f\u53d1\u5c55\u8d8b\u52bf\uff0c\u80fd\u771f\u6b63\u89e3\u51b3\u5f53\u4e0b\u4f01\u4e1a\u89c4\u6a21\u5316\u8fd0\u7ef4\u8fd9\u4e2a\u96be\u9898\u7684\u89e3\u51b3\u65b9\u6848\u3002\u8682\u8681 PaaS \u56e2\u961f\u8fd8\u6709\u5f88\u591a\u7ecf\u8fc7\u5185\u90e8\u89c4\u6a21\u5316\u9a8c\u8bc1\u7684\u6280\u672f\u6c89\u6dc0\uff0c\u540e\u7eed\u4e5f\u4f1a\u5f00\u6e90\u51fa\u6765\uff0c\u53ea\u6709\u6211\u4eec\u8fdc\u8fdc\u4e0d\u591f\uff0c\u771f\u8bda\u7684\u9080\u8bf7\u5927\u5bb6\u4e00\u8d77\u6765\u73a9\u3002"),(0,r.kt)("h1",{id:"ref"},"Ref"),(0,r.kt)("p",null,"Github\uff1a\u6b22\u8fce Star\u2b50\ufe0f "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"https://github.com/KusionStack/kusion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/KCLVM"},"https://github.com/KusionStack/KCLVM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"https://github.com/KusionStack/konfig"))),(0,r.kt)("p",null,"\u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://kusionstack.io/"},"https://kusionstack.io")),(0,r.kt)("p",null,"B\u7ad9\u5c0f\u89c6\u9891\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Vv4y127Re/"},"https://www.bilibili.com/video/BV1Vv4y127Re/")),(0,r.kt)("p",null,"PPT\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://kusionstack.io/blog/2022-kusionstack-application-scale-operation-solution-in-the-post-cloudnative-era"},"KusionStack\uff1a\u201c\u540e\u4e91\u539f\u751f\u65f6\u4ee3\u201d \u5e94\u7528\u89c4\u6a21\u5316\u8fd0\u7ef4\u89e3\u51b3\u65b9\u6848")))}c.isMDXComponent=!0}}]);