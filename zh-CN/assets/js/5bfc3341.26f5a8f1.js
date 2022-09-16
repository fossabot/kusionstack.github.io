"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8249],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?t.createElement(f,a(a({ref:n},l),{},{components:r})):t.createElement(f,a({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43707:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var t=r(87462),o=(r(67294),r(3905));const i={},a="\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668",s={unversionedId:"user_docs/guides/working-with-k8s/container",id:"user_docs/guides/working-with-k8s/container",title:"\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668",description:"Server \u6a21\u578b\u4e2d\u7684 mainContainer \u5c5e\u6027\u7528\u4e8e\u58f0\u660e\u5e94\u7528\u7684\u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\uff0c\u6709\u5173\u4e1a\u52a1\u5bb9\u5668\u7684\u62bd\u8c61\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b KCL Model \u4e2d base.pkg.kusionmodels.kube.frontend.container \u6a21\u5757\u7684\u6587\u6863\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/2-container.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/container",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/container",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/2-container.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1663312831,formattedLastUpdatedAt:"2022/9/16",sidebarPosition:2,frontMatter:{},sidebar:"user_docs",previous:{title:"\u90e8\u7f72\u5e94\u7528",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-server"},next:{title:"\u914d\u7f6e\u76d1\u63a7",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/monitoring"}},c={},u=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\u6837\u4f8b",id:"2-\u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\u6837\u4f8b",level:2}],l={toc:u};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668"},"\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668"),(0,o.kt)("p",null,"Server \u6a21\u578b\u4e2d\u7684 mainContainer \u5c5e\u6027\u7528\u4e8e\u58f0\u660e\u5e94\u7528\u7684\u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\uff0c\u6709\u5173\u4e1a\u52a1\u5bb9\u5668\u7684\u62bd\u8c61\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b KCL Model \u4e2d ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/container/doc_container"},"base.pkg.kusion_models.kube.frontend.container")," \u6a21\u5757\u7684\u6587\u6863\u3002"),(0,o.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u53ef\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-server#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")),(0,o.kt)("h2",{id:"2-\u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\u6837\u4f8b"},"2. \u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\u6837\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'appConfiguration: frontend.Server {\n    # \u4e1a\u52a1\u5bb9\u5668\u914d\u7f6e\n    mainContainer = container.Main {\n        # \u4e1a\u52a1\u5bb9\u5668\u540d\u79f0\n        name = "main"\n        # \u73af\u5883\u53d8\u91cf\n        env = [\n            {\n                name = "HOST_NAME"\n                value = "example.com"\n            }\n        ]\n        # \u7aef\u53e3\u53f7\u914d\u7f6e\n        ports = [\n            { containerPort = 80 }\n        ]\n    }\n}\n')))}d.isMDXComponent=!0}}]);