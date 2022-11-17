"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8729],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=u(t),g=o,m=l["".concat(p,".").concat(g)]||l[g]||d[g]||i;return t?n.createElement(m,s(s({ref:r},c),{},{components:t})):n.createElement(m,s({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=l;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},68241:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const i={},s="\u955c\u50cf\u5347\u7ea7",a={unversionedId:"user_docs/guides/working-with-k8s/image-upgrade",id:"user_docs/guides/working-with-k8s/image-upgrade",title:"\u955c\u50cf\u5347\u7ea7",description:"Server \u6a21\u578b\u4e2d\u7684 image \u5c5e\u6027\u7528\u4e8e\u58f0\u660e\u5e94\u7528\u7684\u4e1a\u52a1\u5bb9\u5668\u955c\u50cf\uff0c\u6709\u5173\u955c\u50cf\u7684\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b KCL Model \u4e2d base.pkg.kusionmodels.kube.frontend.server \u6a21\u5757\u7684\u6587\u6863\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/5-image-upgrade.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/image-upgrade",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/image-upgrade",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/5-image-upgrade.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1668663206,formattedLastUpdatedAt:"2022/11/17",sidebarPosition:5,frontMatter:{},sidebar:"user_docs",previous:{title:"Expose Service",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/service"},next:{title:"Configure Resource Specification",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/resource-spec"}},p={},u=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u955c\u50cf\u5347\u7ea7",id:"2-\u955c\u50cf\u5347\u7ea7",level:2},{value:"3. \u914d\u7f6e\u751f\u6548",id:"3-\u914d\u7f6e\u751f\u6548",level:2}],c={toc:u};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u955c\u50cf\u5347\u7ea7"},"\u955c\u50cf\u5347\u7ea7"),(0,o.kt)("p",null,"Server \u6a21\u578b\u4e2d\u7684 image \u5c5e\u6027\u7528\u4e8e\u58f0\u660e\u5e94\u7528\u7684\u4e1a\u52a1\u5bb9\u5668\u955c\u50cf\uff0c\u6709\u5173\u955c\u50cf\u7684\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b KCL Model \u4e2d ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/doc_server"},"base.pkg.kusion_models.kube.frontend.server")," \u6a21\u5757\u7684\u6587\u6863\u3002"),(0,o.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u53ef\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-server#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")),(0,o.kt)("h2",{id:"2-\u955c\u50cf\u5347\u7ea7"},"2. \u955c\u50cf\u5347\u7ea7"),(0,o.kt)("p",null,"\u7f16\u8f91 dev/main.k \u4e2d\u7684 image \u7684\u503c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\n\nappConfiguration: frontend.Server {\n    # \u4fee\u6539 image \u7684\u503c\u4e3a\u8981\u5347\u7ea7\u7684\u7248\u672c\n    # \u4fee\u6539\u524d\uff1aimage = "gcr.io/google-samples/gb-frontend:v4"\n    # \u4fee\u6539\u540e\uff1a\n    image = "gcr.io/google-samples/gb-frontend:v5"\n}\n')),(0,o.kt)("h2",{id:"3-\u914d\u7f6e\u751f\u6548"},"3. \u914d\u7f6e\u751f\u6548"),(0,o.kt)("p",null,"\u518d\u6b21\u6267\u884c\u3010",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-server#4-%E9%85%8D%E7%BD%AE%E7%94%9F%E6%95%88"},"\u914d\u7f6e\u751f\u6548"),"\u3011\u7684\u6b65\u9aa4\u5373\u53ef\u5347\u7ea7\u5e94\u7528\u7684\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion apply\nSUCCESS  Compiling in stack dev...\n\nStack: dev    Provider                Type              Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace              demo  UnChange\n      * \u251c\u2500  kubernetes          v1:Service      demo-service  UnChange\n      * \u2514\u2500  kubernetes  apps/v1:Deployment           demodev  Update\n\n\u2714 yes\nSUCCESS  Updating apps/v1:Deployment\nUpdating apps/v1:Deployment [1/1] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n")))}d.isMDXComponent=!0}}]);