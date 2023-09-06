"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3061],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(u,".").concat(m)]||d[m]||l[m]||s;return t?n.createElement(g,i(i({ref:r},p),{},{components:t})):n.createElement(g,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48157:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const s={},i="Configure Resource Specification",a={unversionedId:"user_docs/guides/working-with-k8s/resource-spec",id:"user_docs/guides/working-with-k8s/resource-spec",title:"Configure Resource Specification",description:"The attribute schedulingStrategy of the Server model is used to declare the resource spec of an application's business container.",source:"@site/docs/user_docs/guides/working-with-k8s/6-resource-spec.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/resource-spec",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/resource-spec",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/6-resource-spec.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1693971740,formattedLastUpdatedAt:"2023\u5e749\u67086\u65e5",sidebarPosition:6,frontMatter:{},sidebar:"user_docs",previous:{title:"\u955c\u50cf\u5347\u7ea7",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/image-upgrade"},next:{title:"\u5dee\u5f02\u5316\u914d\u7f6e",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/differentiated-configuration"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2}],p={toc:c};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-resource-specification"},"Configure Resource Specification"),(0,o.kt)("p",null,"The attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulingStrategy")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Server")," model is used to declare the resource spec of an application's business container.\nAbout the definition of resource spec, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource"},"here")," for more details."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Re-assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"schedulingStrategy.resource")," value."),(0,o.kt)("p",null,"There are two ways to modify the resource spec, one is to modify the values of ",(0,o.kt)("inlineCode",{parentName:"p"},"cpu")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"memory")," in the resource expression:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.resource as res\n\nappConfiguration: frontend.Server {\n    # modify the values of cpu and memory in the resource expression\n    # before: schedulingStrategy.resource = "cpu=100m,memory=100Mi,disk=1Gi"\n    # after(scale up): \n    schedulingStrategy.resource = res.Resource {\n        cpu = 500m\n        memory = 500Mi\n        disk = 1Gi\n    }\n}\n')),(0,o.kt)("p",null,"The other is to use the preset resource value to replace the original value to expand the application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.templates.resource as res_tpl\n\nappConfiguration: frontend.Server {\n    # use the preset resource value\n    # before: schedulingStrategy.resource = "cpu=100m,memory=100Mi,disk=1Gi"\n    # after(scale up): \n    schedulingStrategy.resource = res_tpl.large\n}\n')),(0,o.kt)("p",null,"The code above is a sample configuration, you can add custom configurations according to the actual situation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend.resource as res\n\nschema SchedulingStrategy:\n    """ SchedulingStrategy represents scheduling strategy.\n\n    Attributes\n    ----------\n    resource: str | res.Resource, default is "1<cpu<2,1Gi<memory<2Gi,disk=20Gi", required.\n        A Pod-level attribute.\n        Main container resource.\n    """\n    resource: str | res.Resource = "1<cpu<2,1Gi<memory<2Gi,disk=20Gi"\n')),(0,o.kt)("h2",{id:"applying"},"Applying"),(0,o.kt)("p",null,"Re-run steps in ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#applying"},"Applying"),", resource scaling is completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion apply\nSUCCESS  Compiling in stack dev...\n\nStack: dev    Provider                Type              Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace              demo  UnChange\n      * \u251c\u2500  kubernetes          v1:Service      demo-service  UnChange\n      * \u2514\u2500  kubernetes  apps/v1:Deployment           demodev  Update\n\n\u2714 yes\nSUCCESS  Updating apps/v1:Deployment\nUpdating apps/v1:Deployment [1/1] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n")))}l.isMDXComponent=!0}}]);