"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1643],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93921:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={},u="\u5dee\u5f02\u5316\u914d\u7f6e",c={unversionedId:"user_docs/guides/working-with-k8s/differentiated-configuration",id:"user_docs/guides/working-with-k8s/differentiated-configuration",title:"\u5dee\u5f02\u5316\u914d\u7f6e",description:"\u5e94\u7528\u7684 KCL \u914d\u7f6e\u4ee3\u7801\u4e2d\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 if-else \u8bed\u53e5\u642d\u914d\u9b54\u672f\u53d8\u91cf\u8bbe\u7f6e\u9700\u8981\u7684\u5dee\u5f02\u5316\u914d\u7f6e\uff0c\u6bd4\u5982\u6839\u636e\u5b9e\u9645\u90e8\u7f72\u7684\u96c6\u7fa4\u540d\u79f0\u8bbe\u7f6e\u4e0d\u540c\u7684 labels\u3002",source:"@site/docs/user_docs/guides/working-with-k8s/7-differentiated-configuration.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/differentiated-configuration",permalink:"/docs/user_docs/guides/working-with-k8s/differentiated-configuration",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/7-differentiated-configuration.md",tags:[],version:"current",lastUpdatedBy:"Hao Yuan",lastUpdatedAt:1660147491,formattedLastUpdatedAt:"2022/8/10",sidebarPosition:7,frontMatter:{},sidebar:"user_docs",previous:{title:"\u5e94\u7528\u6269\u7f29\u5bb9",permalink:"/docs/user_docs/guides/working-with-k8s/resource"},next:{title:"\u9879\u76ee\u7ec4\u7ec7\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/user_docs/guides/organizing-projects-stacks/"}},l={},d=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u5dee\u5f02\u5316\u914d\u7f6e\u6837\u4f8b",id:"2-\u5dee\u5f02\u5316\u914d\u7f6e\u6837\u4f8b",level:2}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5dee\u5f02\u5316\u914d\u7f6e"},"\u5dee\u5f02\u5316\u914d\u7f6e"),(0,i.kt)("p",null,"\u5e94\u7528\u7684 KCL \u914d\u7f6e\u4ee3\u7801\u4e2d\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 if-else \u8bed\u53e5\u642d\u914d\u9b54\u672f\u53d8\u91cf\u8bbe\u7f6e\u9700\u8981\u7684\u5dee\u5f02\u5316\u914d\u7f6e\uff0c\u6bd4\u5982\u6839\u636e\u5b9e\u9645\u90e8\u7f72\u7684\u96c6\u7fa4\u540d\u79f0\u8bbe\u7f6e\u4e0d\u540c\u7684 labels\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6709\u5173 KCL \u8bed\u4e49\u76f8\u5173\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/lang/lang/spec/expressions"},"\u8868\u8fbe\u5f0f"),"\u3002")),(0,i.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("p",null,"\u53ef\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")),(0,i.kt)("h2",{id:"2-\u5dee\u5f02\u5316\u914d\u7f6e\u6837\u4f8b"},"2. \u5dee\u5f02\u5316\u914d\u7f6e\u6837\u4f8b"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"base/bask.k")," \u4e2d Pod Label \u7684\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'appConfiguration: frontend.Server {\n    podMetadata.labels = {\n        if __META_CLUSTER_NAME in ["minikube", "kind"]:\n            cluster = __META_CLUSTER_NAME\n        else:\n            cluster = "other"\n    }\n}\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a KCL \u4ee3\u7801\uff0c\u6211\u4eec\u6839\u636e\u914d\u7f6e\u5927\u5e93\uff08Konfig\uff09\u4e2d\u7684\u9b54\u672f\u53d8\u91cf\u5224\u65ad\u5b9e\u9645\u90e8\u7f72\u65f6\u7684\u96c6\u7fa4\u540d\u79f0\u6765\u9009\u62e9\u6027\u7684\u4e3a\u5e94\u7528\u5bb9\u5668\u4e2d\u6ce8\u5165\u6807\u7b7e\uff0c\u6765\u505a\u5230\u88ab\u7b2c\u4e09\u65b9\u670d\u52a1\u8bc6\u522b\u6216\u8005\u5176\u4ed6\u76ee\u7684\u3002"))}f.isMDXComponent=!0}}]);