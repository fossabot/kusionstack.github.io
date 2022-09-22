"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9594],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>m});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),c=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(a,".").concat(m)]||d[m]||l[m]||s;return n?t.createElement(k,i(i({ref:r},p),{},{components:n})):t.createElement(k,i({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<s;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60028:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const s={},i="\u5e94\u7528\u6269\u7f29\u5bb9",u={unversionedId:"user_docs/guides/working-with-k8s/resource",id:"user_docs/guides/working-with-k8s/resource",title:"\u5e94\u7528\u6269\u7f29\u5bb9",description:"Server \u6a21\u578b\u4e2d\u7684 schedulingStrategy.resource \u5c5e\u6027\u7528\u4e8e\u58f0\u660e\u5e94\u7528\u7684\u4e1a\u52a1\u5bb9\u5668\u7684\u8d44\u6e90\u89c4\u683c\uff0c\u6709\u5173\u8d44\u6e90\u89c4\u683c\u7684\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b KCL Model \u4e2d base.pkg.kusionmodels.kube.frontend.resource \u6a21\u5757\u7684\u6587\u6863\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/6-resource.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/resource",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/resource",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/6-resource.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663850372,formattedLastUpdatedAt:"2022/9/22",sidebarPosition:6,frontMatter:{},sidebar:"user_docs",previous:{title:"\u955c\u50cf\u5347\u7ea7",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/image-upgrade"},next:{title:"\u5dee\u5f02\u5316\u914d\u7f6e",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/differentiated-configuration"}},a={},c=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u6269\u7f29\u5bb9\u914d\u7f6e\u6837\u4f8b",id:"2-\u6269\u7f29\u5bb9\u914d\u7f6e\u6837\u4f8b",level:2},{value:"3. \u914d\u7f6e\u751f\u6548",id:"3-\u914d\u7f6e\u751f\u6548",level:2}],p={toc:c};function l(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e94\u7528\u6269\u7f29\u5bb9"},"\u5e94\u7528\u6269\u7f29\u5bb9"),(0,o.kt)("p",null,"Server \u6a21\u578b\u4e2d\u7684 schedulingStrategy.resource \u5c5e\u6027\u7528\u4e8e\u58f0\u660e\u5e94\u7528\u7684\u4e1a\u52a1\u5bb9\u5668\u7684\u8d44\u6e90\u89c4\u683c\uff0c\u6709\u5173\u8d44\u6e90\u89c4\u683c\u7684\u5b9a\u4e49\uff0c\u53ef\u4ee5\u67e5\u770b KCL Model \u4e2d ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource"},"base.pkg.kusion_models.kube.frontend.resource")," \u6a21\u5757\u7684\u6587\u6863\u3002"),(0,o.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u53ef\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-server#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")),(0,o.kt)("h2",{id:"2-\u6269\u7f29\u5bb9\u914d\u7f6e\u6837\u4f8b"},"2. \u6269\u7f29\u5bb9\u914d\u7f6e\u6837\u4f8b"),(0,o.kt)("p",null,"\u901a\u8fc7\u7f16\u8f91 schedulingStrategy.resource \u7684\u503c\u6765\u8bbe\u7f6e\u4e1a\u52a1\u5bb9\u5668\u7684\u8d44\u6e90\u89c4\u683c\u3002"),(0,o.kt)("p",null,"\u6709\u4e24\u4e2a\u65b9\u6cd5\u4fee\u6539\u8d44\u6e90\u89c4\u683c\uff0c\u4e00\u79cd\u662f\u4fee\u6539 resource \u8868\u8fbe\u5f0f\u4e2d cpu\u3001memory \u7684\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.resource as res\n\nappConfiguration: frontend.Server {\n    # \u4fee\u6539 resource \u8868\u8fbe\u5f0f\u4e2d cpu\u3001memory \u7684\u503c\n    # \u539f\u503c\uff1aschedulingStrategy.resource = "cpu=100m,memory=100Mi,disk=1Gi"\n    # \u65b0\u7684\u503c\uff08\u5e94\u7528\u6269\u5bb9\uff09\uff1a\n    schedulingStrategy.resource = res.Resource {\n        cpu = 500m\n        memory = 500Mi\n        disk = 1Gi\n    }\n}\n')),(0,o.kt)("p",null,"\u53e6\u4e00\u79cd\u662f\u4f7f\u7528\u9884\u7f6e\u7684 resource \u503c\u66ff\u4ee3\u539f\u503c\u6765\u8fdb\u884c\u5e94\u7528\u6269\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.templates.resource as res_tpl\n\nappConfiguration: frontend.Server {\n    # \u4f7f\u7528\u9884\u7f6e\u7684 resource \u503c\u66ff\u4ee3\u539f\u503c\u6765\u8fdb\u884c\u5e94\u7528\u6269\u5bb9\uff1a\n    # \u539f\u503c\uff1aschedulingStrategy.resource = "cpu=100m,memory=100Mi,disk=1Gi"\n    # \u65b0\u7684\u503c\uff08\u5e94\u7528\u6269\u5bb9\uff09\uff1a\n    schedulingStrategy.resource = res_tpl.large\n}\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u662f\u6837\u4f8b\u914d\u7f6e\uff0c\u53ef\u4ee5\u6839\u636e SchedulingStrategy \u6a21\u578b\u5b9a\u4e49\u548c\u5b9e\u9645\u60c5\u51b5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend.resource as res\n\nschema SchedulingStrategy:\n    """ SchedulingStrategy represents scheduling strategy.\n\n    Attributes\n    ----------\n    resource: str | res.Resource, default is "1<cpu<2,1Gi<memory<2Gi,disk=20Gi", required.\n        A Pod-level attribute.\n        Main container resource.\n    """\n    resource: str | res.Resource = "1<cpu<2,1Gi<memory<2Gi,disk=20Gi"\n')),(0,o.kt)("h2",{id:"3-\u914d\u7f6e\u751f\u6548"},"3. \u914d\u7f6e\u751f\u6548"),(0,o.kt)("p",null,"\u518d\u6b21\u6267\u884c\u3010",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-server#4-%E9%85%8D%E7%BD%AE%E7%94%9F%E6%95%88"},"\u914d\u7f6e\u751f\u6548"),"\u3011\u7684\u6b65\u9aa4\u5373\u53ef\u8fdb\u884c\u8d44\u6e90\u6269\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion apply\nSUCCESS  Compiling in stack dev...\n\nStack: dev    Provider                Type              Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace              demo  UnChange\n      * \u251c\u2500  kubernetes          v1:Service      demo-service  UnChange\n      * \u2514\u2500  kubernetes  apps/v1:Deployment           demodev  Update\n\n\u2714 yes\nSUCCESS  Updating apps/v1:Deployment\nUpdating apps/v1:Deployment [1/1] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n")))}l.isMDXComponent=!0}}]);