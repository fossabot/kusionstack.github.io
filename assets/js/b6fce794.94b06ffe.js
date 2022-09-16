"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1642],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>k});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),d=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=d(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},l=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),l=d(n),k=o,m=l["".concat(c,".").concat(k)]||l[k]||u[k]||i;return n?t.createElement(m,s(s({ref:r},p),{},{components:n})):t.createElement(m,s({ref:r},p))}));function k(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=l;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var d=2;d<i;d++)s[d]=n[d];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}l.displayName="MDXCreateElement"},57679:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(87462),o=(n(67294),n(3905));const i={},s="\u914d\u7f6e\u7f51\u7edc",a={unversionedId:"user_docs/guides/working-with-k8s/network",id:"user_docs/guides/working-with-k8s/network",title:"\u914d\u7f6e\u7f51\u7edc",description:"Server \u6a21\u578b\u4e2d\u7684 services \u5c5e\u6027\u7528\u4e8e\u58f0\u660e\u5e94\u7528\u7684\u7f51\u7edc\u914d\u7f6e\uff0c\u6709\u5173\u7f51\u7edc\u7684\u62bd\u8c61\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b KCL Model \u4e2d base.pkg.kusionmodels.kube.frontend.service \u6a21\u5757\u7684\u6587\u6863\u3002",source:"@site/docs/user_docs/guides/working-with-k8s/4-network.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/network",permalink:"/docs/user_docs/guides/working-with-k8s/network",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/4-network.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663313028,formattedLastUpdatedAt:"9/16/2022",sidebarPosition:4,frontMatter:{},sidebar:"user_docs",previous:{title:"\u914d\u7f6e\u76d1\u63a7",permalink:"/docs/user_docs/guides/working-with-k8s/monitoring"},next:{title:"\u955c\u50cf\u5347\u7ea7",permalink:"/docs/user_docs/guides/working-with-k8s/image-upgrade"}},c={},d=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u7f51\u7edc\u914d\u7f6e\u6837\u4f8b",id:"2-\u7f51\u7edc\u914d\u7f6e\u6837\u4f8b",level:2},{value:"3. \u914d\u7f6e\u751f\u6548",id:"3-\u914d\u7f6e\u751f\u6548",level:2}],p={toc:d};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6e\u7f51\u7edc"},"\u914d\u7f6e\u7f51\u7edc"),(0,o.kt)("p",null,"Server \u6a21\u578b\u4e2d\u7684 services \u5c5e\u6027\u7528\u4e8e\u58f0\u660e\u5e94\u7528\u7684\u7f51\u7edc\u914d\u7f6e\uff0c\u6709\u5173\u7f51\u7edc\u7684\u62bd\u8c61\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b KCL Model \u4e2d ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/service/doc_service"},"base.pkg.kusion_models.kube.frontend.service")," \u6a21\u5757\u7684\u6587\u6863\u3002"),(0,o.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u53ef\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")),(0,o.kt)("h2",{id:"2-\u7f51\u7edc\u914d\u7f6e\u6837\u4f8b"},"2. \u7f51\u7edc\u914d\u7f6e\u6837\u4f8b"),(0,o.kt)("p",null,"\u5728\u6837\u4f8b\u4ee3\u7801\u7684 dev/main.k \u6216\u8005 base/base.k \u4e2d\u6dfb\u52a0 Service \u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.service\n\nappConfiguration: frontend.Server {\n    # \u6dfb\u52a0 Service \u914d\u7f6e\n    services = [\n        service.Service {\n            name = "app"\n            type = "NodePort"\n            ports = [\n                {\n                    "port" = 80\n                }\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u662f\u6837\u4f8b\u914d\u7f6e\uff0c\u53ef\u4ee5\u6839\u636e ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/service/doc_service"},"Service")," \u6a21\u578b\u5b9a\u4e49\u548c\u5b9e\u9645\u60c5\u51b5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002"),(0,o.kt)("h2",{id:"3-\u914d\u7f6e\u751f\u6548"},"3. \u914d\u7f6e\u751f\u6548"),(0,o.kt)("p",null,"\u518d\u6b21\u6267\u884c\u3010",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#4-%E9%85%8D%E7%BD%AE%E7%94%9F%E6%95%88"},"\u914d\u7f6e\u751f\u6548"),"\u3011\u7684\u6b65\u9aa4\u5373\u53ef\u90e8\u7f72\u65b0\u7684 Service \u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion apply\nSUCCESS  Compiling in stack dev...\n\nStack: dev    Provider                Type              Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace              demo  UnChange\n      * \u251c\u2500  kubernetes          v1:Service      demo-service  Update\n      * \u2514\u2500  kubernetes  apps/v1:Deployment           demodev  UnChange\n\n\u2714 yes\nSUCCESS  Updating v1:Service\nUpdating v1:Service [1/1] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n")))}u.isMDXComponent=!0}}]);