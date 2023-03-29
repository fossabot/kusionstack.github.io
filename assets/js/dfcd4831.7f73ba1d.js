"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9103],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(t),g=i,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return t?n.createElement(m,a(a({ref:r},l),{},{components:t})):n.createElement(m,a({ref:r},l))}));function g(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=c;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1168:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(87462),i=(t(67294),t(3905));const o={},a="Upgrade Image",s={unversionedId:"user_docs/guides/working-with-k8s/image-upgrade",id:"user_docs/guides/working-with-k8s/image-upgrade",title:"Upgrade Image",description:"The attribute image of the Server model is used to declare your app's business container image.",source:"@site/docs/user_docs/guides/working-with-k8s/5-image-upgrade.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/image-upgrade",permalink:"/docs/user_docs/guides/working-with-k8s/image-upgrade",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/5-image-upgrade.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1680091886,formattedLastUpdatedAt:"3/29/2023",sidebarPosition:5,frontMatter:{},sidebar:"user_docs",previous:{title:"Expose Service",permalink:"/docs/user_docs/guides/working-with-k8s/service"},next:{title:"Configure Resource Specification",permalink:"/docs/user_docs/guides/working-with-k8s/resource-spec"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2}],l={toc:u};function d(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upgrade-image"},"Upgrade Image"),(0,i.kt)("p",null,"The attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Server")," model is used to declare your app's business container image.\nFor the definition of ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),", please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/doc_server"},"here")," for more details."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Re-assign the image value in ",(0,i.kt)("inlineCode",{parentName:"p"},"dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\n\nappConfiguration: frontend.Server {\n    # set image to your want\n    # before: image = "gcr.io/google-samples/gb-frontend:v4"\n    # after: \n    image = "gcr.io/google-samples/gb-frontend:v5"\n}\n')),(0,i.kt)("h2",{id:"applying"},"Applying"),(0,i.kt)("p",null,"Re-run steps in ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#applying"},"Applying"),", update image is completed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kusion apply\nSUCCESS  Compiling in stack dev...\n\nStack: dev    Provider                Type              Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace              demo  UnChange\n      * \u251c\u2500  kubernetes          v1:Service      demo-service  UnChange\n      * \u2514\u2500  kubernetes  apps/v1:Deployment           demodev  Update\n\n\u2714 yes\nSUCCESS  Updating apps/v1:Deployment\nUpdating apps/v1:Deployment [1/1] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n")))}d.isMDXComponent=!0}}]);