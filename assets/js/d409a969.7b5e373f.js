"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3376],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?t.createElement(k,i(i({ref:n},d),{},{components:r})):t.createElement(k,i({ref:n},d))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62827:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var t=r(87462),o=(r(67294),r(3905));const a={},i="\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u6a21\u578b(Server)",l={unversionedId:"reference/model/core/server",id:"reference/model/core/server",title:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u6a21\u578b(Server)",description:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u6a21\u578b\uff08Server\uff09\u4e25\u683c\u6765\u8bf4\u5c5e\u4e8e KusionStack \u6a21\u578b\u5206\u5c42\u4e2d\u7684\u524d\u7aef\u6a21\u578b\uff08Front-end Model\uff09\uff0c\u5b83\u88ab\u7528\u6765\u58f0\u660e\u5e94\u7528\u542f\u52a8\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u5176\u4e2d\u7701\u7565\u4e86\u542f\u52a8\u4e00\u4e2a\u4e91\u539f\u751f\u5e94\u7528\u8fc7\u7a0b\u4e2d\u4e00\u4e9b\u91cd\u590d\u7684\u3001\u53ef\u63a8\u5bfc\u7684\u914d\u7f6e\uff0c\u62bd\u8c61\u51fa\u5fc5\u8981\u5c5e\u6027\u66b4\u9732\u7ed9\u7528\u6237\uff0c\u5177\u6709\u7528\u6237\u53cb\u597d\u7684\u7279\u6027\u3002",source:"@site/docs/reference/model/core/1-server.md",sourceDirName:"reference/model/core",slug:"/reference/model/core/server",permalink:"/docs/reference/model/core/server",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/core/1-server.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1663830802,formattedLastUpdatedAt:"9/22/2022",sidebarPosition:1,frontMatter:{},sidebar:"reference",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/docs/reference/model/concept"},next:{title:"mutating_webhook",permalink:"/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_mutating_webhook"}},s={},p=[{value:"1. \u6a21\u578b\u5168\u666f",id:"1-\u6a21\u578b\u5168\u666f",level:2},{value:"1.1 \u6a21\u578b\u5b9a\u4e49",id:"11-\u6a21\u578b\u5b9a\u4e49",level:3},{value:"1.2 \u6700\u5c0f\u793a\u4f8b",id:"12-\u6700\u5c0f\u793a\u4f8b",level:3},{value:"1.3 \u5b8c\u6574\u793a\u4f8b",id:"13-\u5b8c\u6574\u793a\u4f8b",level:3},{value:"2. \u5bf9\u5bb9\u5668\u7684\u5b9a\u4e49",id:"2-\u5bf9\u5bb9\u5668\u7684\u5b9a\u4e49",level:2},{value:"2.1 \u6a21\u578b\u5b9a\u4e49",id:"21-\u6a21\u578b\u5b9a\u4e49",level:3},{value:"2.2 \u793a\u4f8b",id:"22-\u793a\u4f8b",level:3},{value:"3. \u8d44\u6e90\u89c4\u683c",id:"3-\u8d44\u6e90\u89c4\u683c",level:2},{value:"3.1 \u6a21\u578b\u5b9a\u4e49",id:"31-\u6a21\u578b\u5b9a\u4e49",level:3},{value:"3.2 \u793a\u4f8b",id:"32-\u793a\u4f8b",level:3},{value:"4. \u8c03\u5ea6\u7b56\u7565",id:"4-\u8c03\u5ea6\u7b56\u7565",level:2},{value:"4.1 \u6a21\u578b\u5b9a\u4e49",id:"41-\u6a21\u578b\u5b9a\u4e49",level:3},{value:"4.2 \u793a\u4f8b",id:"42-\u793a\u4f8b",level:3},{value:"5. Volume \u6302\u8f7d",id:"5-volume-\u6302\u8f7d",level:2},{value:"5.1 \u6a21\u578b\u5b9a\u4e49",id:"51-\u6a21\u578b\u5b9a\u4e49",level:3},{value:"5.2 \u793a\u4f8b",id:"52-\u793a\u4f8b",level:3}],d={toc:p};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u6a21\u578bserver"},"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u6a21\u578b(Server)"),(0,o.kt)("p",null,"\u4e91\u539f\u751f\u5e94\u7528\u8fd0\u7ef4\u6a21\u578b\uff08Server\uff09\u4e25\u683c\u6765\u8bf4\u5c5e\u4e8e KusionStack \u6a21\u578b\u5206\u5c42\u4e2d\u7684\u524d\u7aef\u6a21\u578b\uff08Front-end Model\uff09\uff0c\u5b83\u88ab\u7528\u6765\u58f0\u660e\u5e94\u7528\u542f\u52a8\u7684\u53c2\u6570\u914d\u7f6e\uff0c\u5176\u4e2d\u7701\u7565\u4e86\u542f\u52a8\u4e00\u4e2a\u4e91\u539f\u751f\u5e94\u7528\u8fc7\u7a0b\u4e2d\u4e00\u4e9b\u91cd\u590d\u7684\u3001\u53ef\u63a8\u5bfc\u7684\u914d\u7f6e\uff0c\u62bd\u8c61\u51fa\u5fc5\u8981\u5c5e\u6027\u66b4\u9732\u7ed9\u7528\u6237\uff0c\u5177\u6709\u7528\u6237\u53cb\u597d\u7684\u7279\u6027\u3002\n\u7528\u6237\u53ea\u9700\u8981\u50cf\u5b9e\u4f8b\u5316\u4e00\u4e2a\u7c7b\uff08Class\uff09\u4e00\u6837\uff0c\u4f20\u5165\u5fc5\u8981\u53c2\u6570\u6784\u6210\u4e00\u4efd\u5e94\u7528\u7684\u300c\u914d\u7f6e\u300d\uff0c\u7ecf\u8fc7 KCL \u7f16\u8bd1\u5373\u53ef\u5f97\u5230\u5b8c\u6574\u7684\u90e8\u7f72 YAML\uff0c\u5176\u4e2d\u5305\u542b\u7684 Kubernetes \u8d44\u6e90\u5305\u542b Deployment\u3001Service \u7b49\uff1b"),(0,o.kt)("h2",{id:"1-\u6a21\u578b\u5168\u666f"},"1. \u6a21\u578b\u5168\u666f"),(0,o.kt)("h3",{id:"11-\u6a21\u578b\u5b9a\u4e49"},"1.1 \u6a21\u578b\u5b9a\u4e49"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u6a21\u578b\u5f00\u653e\u7684\u5c5e\u6027\u9075\u5b88\u6700\u5c0f\u5316\u539f\u5219"))),(0,o.kt)("p",null,"\u8bf7\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/doc_server"},"Server")," \u6a21\u578b\u5b9a\u4e49\u3002"),(0,o.kt)("h3",{id:"12-\u6700\u5c0f\u793a\u4f8b"},"1.2 \u6700\u5c0f\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.container\nimport base.pkg.kusion_models.kube.templates.resource as res_tpl\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    image = "gcr.io/google-samples/gb-frontend:v4"\n    schedulingStrategy = {\n        # \u8c03\u5ea6\u7b56\u7565\uff0c\u5373\u8d44\u6e90\u8981\u6c42\n        resource = res_tpl.tiny\n    }\n    mainContainer = container.Main {\n        # \u4e3b\u5bb9\u5668\u540d\u79f0\n        name = "php-redis"\n        # \u4e3b\u5bb9\u5668\u73af\u5883\u53d8\u91cf\n        env = [{name = "GET_HOSTS_FROM", value = "dns"}]\n        # \u4e3b\u5bb9\u5668\u7aef\u53e3\n        ports = [{containerPort = 80}]\n    }\n}\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u793a\u4f8b\uff0c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfiguration")," \u7684\u5bf9\u8c61\uff0c\u5b83\u662f\u6a21\u578b ",(0,o.kt)("inlineCode",{parentName:"p"},"Server")," \u7684\u5b9e\u4f8b\u3002\n\u6307\u5b9a\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"image"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"schedulingStrategy")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"mainContainer")," \u4e09\u4e2a\u5b57\u6bb5\uff0c\n\u5e76\u4e14\u540e 2 \u4e2a\u5b57\u6bb5\u662f\u5176\u4ed6 ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," \u7684\u5b9e\u4f8b\u3002\n\u8fd9\u6bb5\u4ee3\u7801\u5c31\u5b9a\u4e49\u4e86\u4e00\u4e2a Kubernetes \u7684 Deployment \u5bf9\u8c61\u7684\u6700\u5c0f\u5c5e\u6027\u96c6\uff0c\u5373\u955c\u50cf\u3001\u8c03\u5ea6\u7b56\u7565\u548c\u4e3b\u5bb9\u5668\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"13-\u5b8c\u6574\u793a\u4f8b"},"1.3 \u5b8c\u6574\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.container\nimport base.pkg.kusion_models.kube.templates.resource as res_tpl\nimport base.pkg.kusion_models.kube.frontend.service\n\n# Application Configuration\nappConfiguration: frontend.Server {\n    # Main Container Configuration\n    mainContainer: container.Main {\n        # \u4e3b\u5bb9\u5668\u540d\u79f0\n        name = "php-redis"\n        # \u4e3b\u5bb9\u5668\u73af\u5883\u53d8\u91cf\n        env = [\n            {\n                name = "GET_HOSTS_FROM"\n                value = "dns"\n            }\n        ]\n        # \u4e3b\u5bb9\u5668\u7aef\u53e3\n        ports = [\n            {\n                containerPort = 80\n            }\n        ]\n    }\n    # Server \u6807\u7b7e\u9009\u62e9\u5668\n    selector = {\n        tier = "frontend"\n    }\n    # Pod \u6a21\u7248\n    podMetadata = {\n        # Pod \u6807\u7b7e\n        labels = {\n            tier = "frontend"\n        }\n    }\n    # \u8c03\u5ea6\u7b56\u7565\n    schedulingStrategy = {\n        resource = res_tpl.medium\n    }\n    # \u5fae\u670d\u52a1\n    services = [\n        service.Service {\n            # \u5fae\u670d\u52a1\u540d\u79f0\n            name = "frontend-service"\n            # \u5fae\u670d\u52a1\u7c7b\u578b\n            type = "NodePort"\n            # \u5fae\u670d\u52a1\u7aef\u53e3\u6620\u5c04\n            ports = [\n                {\n                    port = 80\n                }\n            ]\n        }\n    ]\n    image = "gcr.io/google-samples/gb-frontend:v4"\n}\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u5728\u6700\u5c0f\u793a\u4f8b\u7684\u57fa\u7840\u4e0a\uff0c\u6dfb\u52a0\u4e86\u66f4\u591a\u5c5e\u6027\u7684\u58f0\u660e\u3002\n\u6307\u5b9a\u4e86 Deployment \u53ca\u5176\u884d\u751f\u51fa\u7684 Pod \u4e4b\u95f4\u7684\u6807\u7b7e\u9009\u62e9\u5173\u7cfb\uff08selector/label\uff09\uff0c\n\u8fd8\u6307\u5b9a\u4e86\u8bbf\u95ee Pod \u7684\u5fae\u670d\u52a1\uff0c\u7c7b\u578b\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"NodePort"),"\uff0c\u6620\u5c04\u5230\u5bb9\u5668\u7684\u7aef\u53e3\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"80"),"\u3002"),(0,o.kt)("h2",{id:"2-\u5bf9\u5bb9\u5668\u7684\u5b9a\u4e49"},"2. \u5bf9\u5bb9\u5668\u7684\u5b9a\u4e49"),(0,o.kt)("h3",{id:"21-\u6a21\u578b\u5b9a\u4e49"},"2.1 \u6a21\u578b\u5b9a\u4e49"),(0,o.kt)("p",null,"\u8bf7\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/container/doc_container"},"Container")," \u6a21\u578b\u5b9a\u4e49\u3002"),(0,o.kt)("h3",{id:"22-\u793a\u4f8b"},"2.2 \u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.container\nimport base.pkg.kusion_models.kube.frontend.container.env as e\nimport base.pkg.kusion_models.kube.frontend.container.port as cp\nimport base.pkg.kusion_models.kube.frontend.container.probe as p\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    # Main container configuration\n    mainContainer = container.Main {\n        # \u4e3b\u5bb9\u5668\u540d\u79f0\uff0c\u53ef\u9009\n        name = "main"\n        # \u4e3b\u5bb9\u5668\u542f\u52a8\u547d\u4ee4\uff0c\u53ef\u9009\n        command = ["/home/admin/server.sh"]\n        # \u4e3b\u5bb9\u5668\u542f\u52a8\u53c2\u6570\uff0c\u53ef\u9009\n        args = ["start"]\n        # \u4e3b\u5bb9\u5668\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u9009\n        env = [\n            e.Env {\n                name = "app.version"\n                value = "v1.0.0"\n            }\n        ]\n        envFrom = [\n            e.EnvFromSource {\n                configMapRef = "my-configmap"\n            }\n        ]\n        # \u4e3b\u5bb9\u5668\u7aef\u53e3\uff0c\u53ef\u9009\n        ports = [\n            cp.ContainerPort {\n                containerPort = 12201\n                protocol = "TCP"\n            }\n        ]\n        # \u4e3b\u5bb9\u5668\u5b58\u6d3b\u63a2\u9488\uff0c\u53ef\u9009\n        livenessProbe = p.Probe {\n            # \u63a2\u6d3b\u8fde\u7eed\u5931\u8d25\u9608\u503c\n            failureThreshold = 3\n            # \u9996\u6b21\u63a2\u6d3b\u5ef6\u8fdf\n            initialDelaySeconds = 30\n            # \u63a2\u6d3b\u95f4\u9694\n            periodSeconds = 5\n            # \u63a2\u6d3b\u8fde\u7eed\u6210\u529f\u9608\u503c\n            successThreshold = 1\n            # \u63a2\u6d3b\u8d85\u65f6\u65f6\u95f4\n            timeoutSeconds = 10\n            # \u63a2\u6d3b\u64cd\u4f5c\n            handler = p.Exec {\n                command = ["/bin/sh", "-c", "echo livenessProbe"]\n            }\n        }\n        # \u4e3b\u5bb9\u5668\u5c31\u7eea\u63a2\u9488\uff0c\u53ef\u9009\n        readinessProbe = p.Probe {\n            failureThreshold = 3\n            initialDelaySeconds = 30\n            periodSeconds = 5\n            successThreshold = 2\n            timeoutSeconds = 10\n            handler = p.Exec {\n                command = ["/bin/sh", "-c", "echo readinessProbe"]\n            }\n        }\n        # \u4e3b\u5bb9\u5668\u542f\u52a8\u63a2\u9488, \u542f\u52a8\u63a2\u9488\u63a2\u6d4b\u6210\u529f\u4e4b\u540e\u5b58\u6d3b\u63a2\u6d4b\u624d\u5f00\u59cb\u5de5\u4f5c\uff0c\u53ef\u9009\n        startupProbe = p.Probe {\n            failureThreshold = 3\n            initialDelaySeconds = 30\n            periodSeconds = 5\n            successThreshold = 2\n            timeoutSeconds = 10\n            handler = p.Exec {\n                command = ["/bin/sh", "-c", "echo startupProbe"]\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u662f\u628a\u4e3b\u5bb9\u5668\u7684\u5e38\u7528\u5c5e\u6027\u5168\u90fd\u5217\u4e86\u51fa\u6765\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e3b\u5bb9\u5668\u7684\u540d\u79f0\u3001\u542f\u52a8\u547d\u4ee4\u3001\u9759\u6001\u73af\u5883\u53d8\u91cf\u3001\u52a8\u6001\u73af\u5883\u53d8\u91cf\u548c\u63a2\u9488\u3002\n\u6211\u4eec\u4e00\u822c\u4e0d\u4f1a\u76f4\u63a5\u4f7f\u7528\u4e3b\u5bb9\u5668\uff0c\u5c31\u50cf Kubernetes \u4e2d\u9664\u4e86\u9759\u6001 Pod\uff0c\u4e00\u822c\u4e0d\u4f1a\u76f4\u63a5\u521b\u5efa Pod \u4e00\u6837\u3002"),(0,o.kt)("h2",{id:"3-\u8d44\u6e90\u89c4\u683c"},"3. \u8d44\u6e90\u89c4\u683c"),(0,o.kt)("h3",{id:"31-\u6a21\u578b\u5b9a\u4e49"},"3.1 \u6a21\u578b\u5b9a\u4e49"),(0,o.kt)("p",null,"\u8bf7\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource"},"Resource")," \u6a21\u578b\u5b9a\u4e49\u3002"),(0,o.kt)("h3",{id:"32-\u793a\u4f8b"},"3.2 \u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import base.pkg.kusion_models.kube.frontend.resource as res\n\nres = res.Resource {\n    # CPU\n    cpu = 2\n    # \u5185\u5b58\n    memory = 2048Mi\n    # \u78c1\u76d8\n    disk = 20Gi\n}\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u5b9a\u4e49\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," \u53d8\u91cf\uff0c\u5b83\u662f\u5c06 Kubernetes \u7684\u4e09\u79cd\u5e38\u7528\u8d44\u6e90\uff1aCPU\u3001\u5185\u5b58\u548c\u78c1\u76d8\uff0c\u62bd\u8c61\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"Resource")," \u6a21\u578b\u7684\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"4-\u8c03\u5ea6\u7b56\u7565"},"4. \u8c03\u5ea6\u7b56\u7565"),(0,o.kt)("h3",{id:"41-\u6a21\u578b\u5b9a\u4e49"},"4.1 \u6a21\u578b\u5b9a\u4e49"),(0,o.kt)("p",null,"\u8bf7\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy"},"Scheduling Strategy")," \u6a21\u578b\u5b9a\u4e49\u3002"),(0,o.kt)("h3",{id:"42-\u793a\u4f8b"},"4.2 \u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.resource as res\n\nappConfiguration: frontend.Server {\n    # \u8c03\u5ea6\u7b56\u7565\uff0c\u5373\u8d44\u6e90\u8bf7\u6c42\n    schedulingStrategy.resource = res.Resource {\n        cpu = 100m\n        memory = 100Mi\n        disk = 1Gi\n    }\n}\n")),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u662f\u5c06 3.2 \u5c0f\u8282\u7684\u8d44\u6e90\u89c4\u683c\u5bf9\u8c61\u8d4b\u503c\u7ed9\u4e86\u8c03\u5ea6\u7b56\u7565\uff0c\u660e\u786e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Server")," \u6a21\u578b\u4e0b\u53d1\u5230\u96c6\u7fa4\u540e\u7684\u8d44\u6e90\u8c03\u5ea6\u8bf7\u6c42\u3002"),(0,o.kt)("h2",{id:"5-volume-\u6302\u8f7d"},"5. Volume \u6302\u8f7d"),(0,o.kt)("p",null,"\u5bf9 Kubernetes \u539f\u751f\u7684 Volume \u548c VolumeMount \u8fdb\u884c\u4e86\u5c01\u88c5\uff1b"),(0,o.kt)("h3",{id:"51-\u6a21\u578b\u5b9a\u4e49"},"5.1 \u6a21\u578b\u5b9a\u4e49"),(0,o.kt)("p",null,"\u8bf7\u67e5\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/volume/doc_volume"},"Volume")," \u6a21\u578b\u5b9a\u4e49\u3002"),(0,o.kt)("h3",{id:"52-\u793a\u4f8b"},"5.2 \u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.volume as v\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    # \u5377\u5b9a\u4e49\n    volumes = [\n        v.Volume {\n            # \u5377\u540d\u79f0\n            name = "log-volume"\n            # \u5377\u7c7b\u578b\n            volumeSource = v.EmptyDir{}\n            # \u6302\u8f7d\u70b9\n            mounts = [\n                v.Mount{\n                    container = "main"\n                    path = "/home/admin/logs"\n                }\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"EmptyDir")," \u5377\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"appConfiguration")," \u4e2d\u6307\u5b9a\u4e86\u6302\u8f7d\u7684\u5bb9\u5668\u548c\u6302\u8f7d\u8def\u5f84\u3002"))}c.isMDXComponent=!0}}]);