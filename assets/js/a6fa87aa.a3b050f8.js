"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6250],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return t?n.createElement(g,s(s({ref:r},u),{},{components:t})):n.createElement(g,s({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83124:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const o={},s="Expose Service",a={unversionedId:"user_docs/guides/working-with-k8s/service",id:"user_docs/guides/working-with-k8s/service",title:"Expose Service",description:"The attribute services of the Server model is used to declare your app's network configuration.",source:"@site/docs/user_docs/guides/working-with-k8s/4-service.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/service",permalink:"/docs/user_docs/guides/working-with-k8s/service",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/4-service.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685526885,formattedLastUpdatedAt:"5/31/2023",sidebarPosition:4,frontMatter:{},sidebar:"user_docs",previous:{title:"Enable Monitoring",permalink:"/docs/user_docs/guides/working-with-k8s/monitoring"},next:{title:"Upgrade Image",permalink:"/docs/user_docs/guides/working-with-k8s/image-upgrade"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2}],u={toc:c};function l(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expose-service"},"Expose Service"),(0,i.kt)("p",null,"The attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"services")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Server")," model is used to declare your app's network configuration.\nFor the abstract definition of ",(0,i.kt)("inlineCode",{parentName:"p"},"service"),", please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/service/doc_service"},"here")," for more details."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Add the Service configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"dev/main.k")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"base/base.k")," of the sample code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.service\n\nappConfiguration: frontend.Server {\n    # \u6dfb\u52a0 Service \u914d\u7f6e\n    services = [\n        service.Service {\n            name = "app"\n            type = "NodePort"\n            ports = [\n                {\n                    "port" = 80\n                }\n            ]\n        }\n    ]\n}\n')),(0,i.kt)("p",null,"The code above is a sample configuration, you can add custom configuration according to the actual situation."),(0,i.kt)("h2",{id:"applying"},"Applying"),(0,i.kt)("p",null,"Re-run steps in ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#applying"},"Applying"),", new service configuration can be applied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kusion apply\nSUCCESS  Compiling in stack dev...\n\nStack: dev    Provider                Type              Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace              demo  UnChange\n      * \u251c\u2500  kubernetes          v1:Service      demo-service  Update\n      * \u2514\u2500  kubernetes  apps/v1:Deployment           demodev  UnChange\n\n\u2714 yes\nSUCCESS  Updating v1:Service\nUpdating v1:Service [1/1] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n")))}l.isMDXComponent=!0}}]);