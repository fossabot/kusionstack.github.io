"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||r;return n?l.createElement(m,o(o({ref:t},c),{},{components:n})):l.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const r={},o="\u90e8\u7f72\u5e94\u7528",i={unversionedId:"user_docs/guides/working-with-k8s/deploy-application",id:"user_docs/guides/working-with-k8s/deploy-application",title:"\u90e8\u7f72\u5e94\u7528",description:"\u672c\u7bc7\u6307\u5357\u5411\u60a8\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 Kusion\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b8c\u6210\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u5e94\u7528\u7684\u90e8\u7f72\u3002\u6211\u4eec\u5c06\u7ec4\u7ec7\u914d\u7f6e\u7684\u5355\u4f4d\u53eb\u505a\u5e94\u7528\uff08Application\uff09\uff0c\u63cf\u8ff0\u5e94\u7528\u4ea4\u4ed8\u548c\u8fd0\u7ef4\u7ec6\u8282\u7684\u914d\u7f6e\u96c6\u5408\u53eb\u505a\u5e94\u7528\u914d\u7f6e\uff08AppConfiguration\uff09\uff0c\u5b83\u672c\u8d28\u4e0a\u662f\u901a\u8fc7 KCL \u5b9a\u4e49\u7684\u5e94\u7528\u6a21\u578b\u3002\u5b8c\u6574\u7684 AppConfiguration \u6a21\u578b\u5b9a\u4e49\u53ef\u89c1\uff1aAppConfiguration",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/1-deploy-application.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/deploy-application",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/1-deploy-application.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1694160251,formattedLastUpdatedAt:"2023\u5e749\u67088\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"user_docs",previous:{title:"Kubernetes",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/"},next:{title:"\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/container"}},p={},s=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u521d\u59cb\u5316",id:"2-\u521d\u59cb\u5316",level:2},{value:"kcl.mod",id:"kclmod",level:3},{value:"3. \u914d\u7f6e\u7f16\u8bd1",id:"3-\u914d\u7f6e\u7f16\u8bd1",level:2},{value:"4. \u914d\u7f6e\u751f\u6548",id:"4-\u914d\u7f6e\u751f\u6548",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u90e8\u7f72\u5e94\u7528"},"\u90e8\u7f72\u5e94\u7528"),(0,a.kt)("p",null,"\u672c\u7bc7\u6307\u5357\u5411\u60a8\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 Kusion\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5b8c\u6210\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u5e94\u7528\u7684\u90e8\u7f72\u3002\u6211\u4eec\u5c06\u7ec4\u7ec7\u914d\u7f6e\u7684\u5355\u4f4d\u53eb\u505a\u5e94\u7528\uff08Application\uff09\uff0c\u63cf\u8ff0\u5e94\u7528\u4ea4\u4ed8\u548c\u8fd0\u7ef4\u7ec6\u8282\u7684\u914d\u7f6e\u96c6\u5408\u53eb\u505a\u5e94\u7528\u914d\u7f6e\uff08AppConfiguration\uff09\uff0c\u5b83\u672c\u8d28\u4e0a\u662f\u901a\u8fc7 KCL \u5b9a\u4e49\u7684\u5e94\u7528\u6a21\u578b\u3002\u5b8c\u6574\u7684 AppConfiguration \u6a21\u578b\u5b9a\u4e49\u53ef\u89c1\uff1a",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/model/catalog_models/doc_app_configuration"},"AppConfiguration")),(0,a.kt)("p",null,"\u8981\u5c06\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u7684\u5e94\u7528\u5b8c\u5168\u90e8\u7f72\u8d77\u6765\uff0c\u4e00\u822c\u9700\u8981\u4e0b\u53d1\u591a\u4e2a Kubernetes \u8d44\u6e90\uff0c\u672c\u6b21\u6f14\u793a\u7684\u6837\u4f8b\u6d89\u53ca\u4ee5\u4e0b Kubernetes \u8d44\u6e90\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\uff08Namespace\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u5de5\u4f5c\u8d1f\u8f7d\uff08Deployment\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\uff08Service\uff09")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u7bc7\u6307\u5357\u5047\u8bbe\u60a8\u5df2\u719f\u6089Kubernetes\u7684\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5\u3002\u5982\u679c\u4e0d\u719f\u6089\uff0c\u53ef\u4ee5\u524d\u5f80 Kubernetes \u5b98\u65b9\u7f51\u7ad9\uff0c\u67e5\u770b\u76f8\u5173\u8bf4\u660e\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service"))),(0,a.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,a.kt)("p",null,"1\u3001\u5b89\u88c5 Kusion \u5de5\u5177\u94fe"),(0,a.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 HomeBrew(Mac)\uff0cScoop(Windows)\uff0c\u6216\u8005\u5b89\u88c5\u811a\u672c\u5b89\u88c5Kusion\u3002\u8be6\u60c5\u4fe1\u606f\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"\u4e0b\u8f7d\u548c\u5b89\u88c5"),"\u3002"),(0,a.kt)("p",null,"2\u3001\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4"),(0,a.kt)("p",null,"\u5fc5\u987b\u8981\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u540c\u65f6 Kubernetes \u96c6\u7fa4\u6700\u597d\u5e26\u6709 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\n\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u96c6\u7fa4\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," \u6784\u5efa\u4e00\u4e2a\u60a8\u81ea\u5df1\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("h2",{id:"2-\u521d\u59cb\u5316"},"2. \u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u672c\u6307\u5357\u662f\u4ee5Kusion CLI\u7684\u65b9\u5f0f\u90e8\u7f72\u5e94\u7528\u670d\u52a1\uff0c\u4f9d\u8d56 kusion \u547d\u4ee4\u884c\u5de5\u5177\u548c\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u521d\u59cb\u5316 KCL \u9879\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kusion init\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," \u547d\u4ee4\u4f1a\u63d0\u793a\u60a8\u8f93\u5165\u53ef\u80fd\u9700\u8981\u7684\u53c2\u6570\uff0c\u4f8b\u5982\u9879\u76ee\u540d\u79f0\uff0c\u5e94\u7528\u540d\u79f0\uff0c\u955c\u50cf\u5730\u5740\u7b49\uff1b\u4e5f\u53ef\u4ee5\u4e00\u8def\u70b9\u51fb ",(0,a.kt)("em",{parentName:"p"},"\u56de\u8f66")," \u4f7f\u7528\u9ed8\u8ba4\u503c\u3002\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2714 single-stack-sample    A minimal kusion project of single stack\nThis command will walk you through creating a new kusion project.\n\nEnter a value or leave blank to accept the (default), and press <ENTER>.\nPress ^C at any time to quit.\n\nProject Config:\n\u2714 Project Name: helloworld\n\u2714 AppName: helloworld\n\u2714 ProjectName: helloworld\nStack Config: dev\n\u2714 Image: gcr.io/google-samples/gb-frontend:v4\n\nCreated project 'helloworld'\n")),(0,a.kt)("p",null,"\u5230\u6b64\uff0c\u6211\u4eec\u5c31\u6210\u529f\u5730\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"single-stack-sample"),"\u6a21\u7248\u521d\u59cb\u5316\u4e86\u4e00\u4e2a\u9879\u76ee\uff1ahelloworld\uff0c\u5305\u542b\u4e00\u4e2a Project \u548c\u4e00\u4e2a Stack\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AppName")," \u4ee3\u8868\u4e86\u793a\u4f8b\u5e94\u7528\u540d\u79f0,\u4f1a\u88ab\u5199\u5165\u81ea\u52a8\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"li"},"main.k"),"\u4f5c\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"AppConfiguration"),"\u5b9e\u4f8b\u7684\u540d\u5b57."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ProjectName")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Project Name")," \u4ee3\u8868\u4e86\u793a\u4f8b\u9879\u76ee\u7684\u540d\u79f0\uff0c\u4f1a\u88ab\u7528\u4f5c\u81ea\u52a8\u751f\u6210\u7684\u76ee\u5f55\u540d\uff0c\u5e76\u4e14\u5f55\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"project.yaml"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Image")," \u4ee3\u8868\u4e86\u793a\u4f8b\u5e94\u7528\u7684\u955c\u50cf\u5730\u5740\u3002")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6709\u5173 Project \u548c Stack \u7684\u8bbe\u8ba1\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/concepts/glossary"},"Project&Stack"),"\u3002")),(0,a.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"helloworld\n  \u251c\u2500\u2500 README.md\n  \u251c\u2500\u2500 dev\n  \u2502   \u251c\u2500\u2500 main.k\n  \u2502   \u251c\u2500\u2500 kcl.mod\n  \u2502   \u251c\u2500\u2500 kcl.mod.lock\n  \u2502   \u2514\u2500\u2500 stack.yaml\n  \u2514\u2500\u2500 project.yaml\n\n1 directory, 6 files\n")),(0,a.kt)("p",null,"\u9879\u76ee\u76ee\u5f55\u5305\u542b\u4e00\u7cfb\u5217\u81ea\u52a8\u751f\u6210\u7684\u6587\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"README.md")," \u5305\u62ec\u4e86\u4ece\u6a21\u7248\u751f\u6210\u7684README\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project.yaml")," \u4ee3\u8868\u4e86\u9879\u76ee(Project)\u7ea7\u522b\u7684\u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev")," \u76ee\u5f55\u4ee3\u8868\u4e00\u4e2a\u914d\u7f6e\u6808(Stack)\uff0c\u5305\u62ec\u4e86\u914d\u7f6e\u6808(Stack)\u7ea7\u522b\u7684\u901a\u7528\u914d\u7f6e\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev/main.k")," \u5305\u542b\u4e86\u5f53\u524d\u914d\u7f6e\u6808(Stack)\u4e2d\u7684\u5e94\u7528\u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev/stack.yaml")," \u5305\u542b\u4e86\u5f53\u524d\u914d\u7f6e\u6808(Stack)\u7ea7\u522b\u7684\u901a\u7528\u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev/kcl.mod")," \u5305\u542b\u4e86\u5f53\u524d\u914d\u7f6e\u6808(Stack)\u7684\u4f9d\u8d56\uff0c\u9ed8\u8ba4\u5305\u542b\u4e86\u5bf9\u6a21\u578b\u4ed3\u5e93\u7684\u4f9d\u8d56\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev/kcl.mod.lock")," \u662f\u7528\u6765\u56fa\u5b9a\u4f9d\u8d56\u7248\u672c\u7684\u6587\u4ef6\u3002")))),(0,a.kt)("p",null,"\u6574\u4f53\u6765\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},".k")," \u6587\u4ef6\u662f\u4ee3\u8868\u5e94\u7528\u7ea7\u522b\uff0c\u5e94\u7528\u914d\u7f6e\u7684 KCL \u6e90\u7801\u3002",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," \u662f\u9879\u76ee\u6216\u8005\u914d\u7f6e\u6808\u7ea7\u522b\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("h3",{id:"kclmod"},"kcl.mod"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kusion init"),"\u8fc7\u7a0b\u4e2d\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u63cf\u8ff0\u4e86\u5f53\u524d\u9879\u76ee\u6216\u8005\u914d\u7f6e\u6808\u7684\u4f9d\u8d56\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6587\u4ef6\u4e2d\u4f1a\u5305\u542b\u4e00\u4e2a\u5bf9",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},(0,a.kt)("inlineCode",{parentName:"a"},"Catalog"),"\u4ed3\u5e93"),"\u6216\u8005OCI\u5236\u54c1\u7684\u4f9d\u8d56\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"Catalog"),"\u4ed3\u5e93\u662fKusion\u7684\u6a21\u578b\u4ed3\u5e93\uff0c\u5f53\u4e2d\u5305\u542b\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u548c\u7b26\u5408\u6700\u4f73\u5b9e\u8df5\u7684\u6a21\u578b\u5b9a\u4e49\u3002\u5f53\u5b83\u65e0\u6cd5\u6ee1\u8db3\u60a8\u7684\u81ea\u52a8\u5316\u9700\u6c42\u65f6\uff0c\u60a8\u4e5f\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u6a21\u578b\u4ed3\u5e93\u5e76\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\u4e2d\u5f15\u7528\u5b83\u3002"),(0,a.kt)("h2",{id:"3-\u914d\u7f6e\u7f16\u8bd1"},"3. \u914d\u7f6e\u7f16\u8bd1"),(0,a.kt)("p",null,"\u5230\u6b64\uff0c\u6211\u4eec\u5df2\u7ecf\u501f\u52a9 ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion")," \u63d0\u4f9b\u7684\u5185\u7f6e\u6a21\u677f\uff0c\u5b8c\u6210\u4e86\u9879\u76ee\u7684\u914d\u7f6e\u521d\u59cb\u5316\u3002"),(0,a.kt)("p",null,"\u9879\u76ee\u7684\u7f16\u7a0b\u8bed\u8a00\u662f KCL\uff0c\u4e0d\u662f Kubernetes \u8ba4\u8bc6\u7684 JSON/YAML\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u7ecf\u8fc7\u7f16\u8bd1\u5f97\u5230\u6700\u7ec8\u8f93\u51fa\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u8fdb\u5165\u5230\u9879\u76ee\u7684 Stack \u76ee\u5f55\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"helloworld/dev"),"\uff09\u5e76\u6267\u884c\u7f16\u8bd1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd helloworld/dev && kusion compile\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u9ed8\u8ba4\u5230stdout\u3002\u60a8\u53ef\u4ee5\u5728\u547d\u4ee4\u4e2d\u52a0\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"-o/--output"),"\u4ee5\u8f93\u51fa\u5230\u4e00\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kusion compile")," \u7684\u8f93\u51fa\u9ed8\u8ba4\u662f\u4e00\u79cd\u53eb Spec \u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u6709\u5173 kusion \u547d\u4ee4\u884c\u5de5\u5177\u7684\u8bf4\u660e\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion -h"),"\uff0c\u6216\u8005\u53c2\u8003\u5de5\u5177\u7684\u5728\u7ebf\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/cli/kusion/index"},"Overview of Kusion CLI"),"\u3002")),(0,a.kt)("h2",{id:"4-\u914d\u7f6e\u751f\u6548"},"4. \u914d\u7f6e\u751f\u6548"),(0,a.kt)("p",null,"\u5b8c\u6210\u7f16\u8bd1\uff0c\u73b0\u5728\u5f00\u59cb\u4e0b\u53d1\u914d\u7f6e\u3002\u901a\u8fc7\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion compile")," \u7684\u8f93\u51fa\uff0c\u53ef\u4ee5\u770b\u5230 3 \u4e2a\u8d44\u6e90\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a name \u4e3a helloworld \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Namespace")),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5728 helloworld \u547d\u540d\u7a7a\u95f4\u4e2d\uff0cname \u4e3a helloworld-dev-helloworld \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Deployment")),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u5728 helloworld \u547d\u540d\u7a7a\u95f4\u4e2d\uff0cname \u4e3a helloworld-dev-helloworld-private \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Service"))),(0,a.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SUCCESS  Compiling in stack dev...\n\nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  Create\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  Create\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Create\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  Create v1:Namespace:helloworld success                                                                                                                                                                                                                                \n SUCCESS  Create v1:Service:helloworld:helloworld-dev-helloworld-private success                                                                                                                                                                                                \n SUCCESS  Create apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nCreate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 3 created, 0 updated, 0 deleted.\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5c31\u5b8c\u6210\u4e86\u914d\u7f6e\u751f\u6548\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5de5\u5177\u68c0\u67e5\u8d44\u6e90\u7684\u5b9e\u9645\u72b6\u6001\u3002"),(0,a.kt)("p",null,"1\u3001 \u68c0\u67e5\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                   STATUS   AGE\ndefault                Active   117d\nhelloworld             Active   63s\nkube-system            Active   117d\n...\n")),(0,a.kt)("p",null,"2\u3001\u68c0\u67e5 Deployment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deploy -n helloworld\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                        READY   UP-TO-DATE   AVAILABLE   AGE\nhelloworld-dev-helloworld   2/2     2            2           111s\n")),(0,a.kt)("p",null,"3\u3001\u68c0\u67e5 Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n helloworld\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE\nhelloworld-dev-helloworld-private   ClusterIP   10.111.183.0   <none>        80/TCP   2m6s\n")),(0,a.kt)("p",null,"4\u3001\u68c0\u67e5\u5e94\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5de5\u5177\uff0c\u5c06\u672c\u673a\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"30000")," \u6620\u5c04\u5230 Service \u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"80")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/helloworld-dev-helloworld-private -n helloworld 30000:80\n")),(0,a.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:30000"},"http://127.0.0.1:30000"),"\uff1a\n",(0,a.kt)("img",{alt:"app-preview",src:n(2287).Z,width:"1830",height:"330"})))}u.isMDXComponent=!0},2287:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/app-preview-de5274f4267fa725d2a65099e47c6c2c.png"}}]);