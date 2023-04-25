"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,a(a({ref:t},l),{},{components:n})):r.createElement(k,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={},a="\u914d\u7f6e\u76d1\u63a7",s={unversionedId:"user_docs/guides/working-with-k8s/monitoring",id:"user_docs/guides/working-with-k8s/monitoring",title:"\u914d\u7f6e\u76d1\u63a7",description:"\u672c\u7bc7\u6307\u5357\u5411\u4f60\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 KCL \u8bed\u8a00\u4e0e\u5176\u76f8\u5bf9\u5e94\u7684 CLI \u5de5\u5177 Kusion\uff0c\u5b8c\u6210\u4e00\u4e2a Kubernetes \u5e94\u7528 Prometheus \u76d1\u63a7\u90e8\u7f72\u3002\u672c\u6b21\u6f14\u793a\u7684\u6837\u4f8b\u4e3b\u8981\u7531\u4ee5\u4e0b\u7ec4\u4ef6\u6784\u6210\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/3-monitoring.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/monitoring",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/monitoring",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/3-monitoring.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1682392078,formattedLastUpdatedAt:"2023/4/25",sidebarPosition:3,frontMatter:{},sidebar:"user_docs",previous:{title:"\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/container"},next:{title:"Expose Service",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/service"}},p={},u=[{value:"1. \u51c6\u5907\u5f00\u59cb",id:"1-\u51c6\u5907\u5f00\u59cb",level:2},{value:"2. \u76d1\u63a7\u914d\u7f6e\u6837\u4f8b",id:"2-\u76d1\u63a7\u914d\u7f6e\u6837\u4f8b",level:2},{value:"3. \u914d\u7f6e\u751f\u6548",id:"3-\u914d\u7f6e\u751f\u6548",level:2},{value:"4. \u67e5\u770b\u76d1\u63a7\u9762\u677f",id:"4-\u67e5\u770b\u76d1\u63a7\u9762\u677f",level:2}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6e\u76d1\u63a7"},"\u914d\u7f6e\u76d1\u63a7"),(0,o.kt)("p",null,"\u672c\u7bc7\u6307\u5357\u5411\u4f60\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 KCL \u8bed\u8a00\u4e0e\u5176\u76f8\u5bf9\u5e94\u7684 CLI \u5de5\u5177 Kusion\uff0c\u5b8c\u6210\u4e00\u4e2a Kubernetes \u5e94\u7528 Prometheus \u76d1\u63a7\u90e8\u7f72\u3002\u672c\u6b21\u6f14\u793a\u7684\u6837\u4f8b\u4e3b\u8981\u7531\u4ee5\u4e0b\u7ec4\u4ef6\u6784\u6210\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\uff08Namespace\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u5e94\u7528\uff08Deployment\uff09"),(0,o.kt)("li",{parentName:"ul"},"Pod \u76d1\u63a7\uff08PodMonitor\uff09")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6307\u5357\u8981\u6c42\u4f60\u5bf9 Kubernetes \u548c Prometheus \u6709\u57fa\u672c\u7684\u4e86\u89e3\u3002\u4e0d\u6e05\u695a\u76f8\u5173\u6982\u5ff5\u7684\uff0c\u53ef\u4ee5\u524d\u5f80 Kubernetes \u548c Prometheus \u5b98\u65b9\u7f51\u7ad9\uff0c\u67e5\u770b\u76f8\u5173\u8bf4\u660e\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus Introduction"))),(0,o.kt)("h2",{id:"1-\u51c6\u5907\u5f00\u59cb"},"1. \u51c6\u5907\u5f00\u59cb"),(0,o.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u9664\u4e86\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-server#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")," \u7684\u51c6\u5907\u5de5\u4f5c\uff0c\u8fd8\u9700\u8981\u5b8c\u6210\u5982\u4e0b\u51c6\u5907\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5728 Kubernetes \u96c6\u4e2d\u90e8\u7f72 Prometheus Operator")),(0,o.kt)("p",null,"\u6839\u636e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus"},"kube-prometheus")," \u4e2d\u7684\u63d0\u793a\u6b65\u9aa4\u5728\u60a8\u7684\u96c6\u7fa4\u5f53\u4e2d\u90e8\u7f72 Prometheus Operator"),(0,o.kt)("h2",{id:"2-\u76d1\u63a7\u914d\u7f6e\u6837\u4f8b"},"2. \u76d1\u63a7\u914d\u7f6e\u6837\u4f8b"),(0,o.kt)("p",null,"\u901a\u8fc7\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"enableMonitoring")," \u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"True")," \u4f7f\u80fd\u914d\u7f6e\uff0c\u5e76\u6dfb\u52a0\u4e1a\u52a1\u5bb9\u5668\u7aef\u53e3\u53f7\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"8080")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.container\nimport base.pkg.kusion_models.kube.frontend.container.env as e\nimport base.pkg.kusion_models.kube.frontend.container.port as cp\nimport base.pkg.kusion_models.kube.frontend.container.probe as p\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    # Main container configuration\n    mainContainer: container.Main {\n        name = "prometheus-example-app"\n        ports = [\n            cp.ContainerPort {\n                name = "web"\n                containerPort = 8080\n            }\n        ]\n    }\n    enableMonitoring = True\n}\n')),(0,o.kt)("h2",{id:"3-\u914d\u7f6e\u751f\u6548"},"3. \u914d\u7f6e\u751f\u6548"),(0,o.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,o.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," SUCCESS  Compiling in stack prod...                                                                                                  \n\nStack: prod    Provider                                 Type                           Name    Plan\n       * \u251c\u2500  kubernetes                         v1:Namespace      prometheus-example-app[0]  Create\n       * \u251c\u2500  kubernetes  monitoring.coreos.com/v1:PodMonitor  prometheus-example-appprod[0]  Create\n       * \u2514\u2500  kubernetes                   apps/v1:Deployment  prometheus-example-appprod[0]  Create\n")),(0,o.kt)("h2",{id:"4-\u67e5\u770b\u76d1\u63a7\u9762\u677f"},"4. \u67e5\u770b\u76d1\u63a7\u9762\u677f"),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u9664\u4e86\u90e8\u7f72 kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace")," \u8d44\u6e90\u5916\uff0c\u8fd8\u989d\u5916\u90e8\u7f72\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"PodMonitor")," \u8d44\u6e90\u7528\u4e8e\u914d\u7f6e Prometheus \u76d1\u542c\u5e94\u7528 Pod\uff0c\u5f53\u8d44\u6e90\u90fd\u521b\u5efa\u5b8c\u6210\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u67e5\u770b Prometheus \u76d1\u63a7\u9762\u677f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090\n")),(0,o.kt)("p",null,"\u6700\u540e\u901a\u8fc7 http://localhost:9090 \u8bbf\u95ee\u76d1\u63a7\u9762\u677f\u5e76\u67e5\u770b\u5e94\u7528\u7a0b\u5e8f\u7684\u76d1\u63a7\u6307\u6807\u3002"))}c.isMDXComponent=!0}}]);