"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4050],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(p,".").concat(d)]||u[d]||k[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o="\u90e8\u7f72\u5e94\u7528",i={unversionedId:"user_docs/guides/working-with-k8s/deploy-server",id:"user_docs/guides/working-with-k8s/deploy-server",title:"\u90e8\u7f72\u5e94\u7528",description:"\u672c\u7bc7\u6307\u5357\u5411\u4f60\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 KCL \u8bed\u8a00\u4e0e\u5176\u76f8\u5bf9\u5e94\u7684 CLI \u5de5\u5177 Kusion\uff0c\u5b8c\u6210\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u7684 Long-Running \u5e94\u7528\u7684\u90e8\u7f72\uff0c\u6211\u4eec\u5c06\u7ec4\u7ec7\u914d\u7f6e\u7684\u5355\u4f4d\u53eb\u505a\u5e94\u7528\uff08Application\uff09\uff0c\u63cf\u8ff0\u5e94\u7528\u90e8\u7f72\u548c\u8fd0\u7ef4\u7ec6\u8282\u7684\u914d\u7f6e\u96c6\u5408\u53eb\u505a\u5e94\u7528\u670d\u52a1\uff08Server\uff09\uff0c\u5b83\u672c\u8d28\u4e0a\u662f\u901a\u8fc7 KCL \u5b9a\u4e49\u7684\u8fd0\u7ef4\u6a21\u578b\uff0c\u5b8c\u6574\u7684 Server \u6a21\u578b\u5b9a\u4e49\u53ef\u89c1\uff1aserver",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/1-deploy-server.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/deploy-server",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-server",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/1-deploy-server.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663850372,formattedLastUpdatedAt:"2022/9/22",sidebarPosition:1,frontMatter:{},sidebar:"user_docs",previous:{title:"Kubernetes",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/"},next:{title:"\u914d\u7f6e\u4e1a\u52a1\u5bb9\u5668",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/container"}},p={},s=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u521d\u59cb\u5316",id:"2-\u521d\u59cb\u5316",level:2},{value:"3. \u914d\u7f6e\u7f16\u8bd1",id:"3-\u914d\u7f6e\u7f16\u8bd1",level:2},{value:"4. \u914d\u7f6e\u751f\u6548",id:"4-\u914d\u7f6e\u751f\u6548",level:2}],c={toc:s};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u90e8\u7f72\u5e94\u7528"},"\u90e8\u7f72\u5e94\u7528"),(0,a.kt)("p",null,"\u672c\u7bc7\u6307\u5357\u5411\u4f60\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 KCL \u8bed\u8a00\u4e0e\u5176\u76f8\u5bf9\u5e94\u7684 CLI \u5de5\u5177 Kusion\uff0c\u5b8c\u6210\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u7684 Long-Running \u5e94\u7528\u7684\u90e8\u7f72\uff0c\u6211\u4eec\u5c06\u7ec4\u7ec7\u914d\u7f6e\u7684\u5355\u4f4d\u53eb\u505a\u5e94\u7528\uff08Application\uff09\uff0c\u63cf\u8ff0\u5e94\u7528\u90e8\u7f72\u548c\u8fd0\u7ef4\u7ec6\u8282\u7684\u914d\u7f6e\u96c6\u5408\u53eb\u505a\u5e94\u7528\u670d\u52a1\uff08Server\uff09\uff0c\u5b83\u672c\u8d28\u4e0a\u662f\u901a\u8fc7 KCL \u5b9a\u4e49\u7684\u8fd0\u7ef4\u6a21\u578b\uff0c\u5b8c\u6574\u7684 Server \u6a21\u578b\u5b9a\u4e49\u53ef\u89c1\uff1a",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/doc_server"},"server")),(0,a.kt)("p",null,"\u8981\u5c06\u4e00\u4e2a\u8fd0\u884c\u5728 Kubernetes \u4e2d\u7684\u5e94\u7528\u5b8c\u5168\u90e8\u7f72\u8d77\u6765\uff0c\u4e00\u822c\u9700\u8981\u4e0b\u53d1\u591a\u4e2a Kubernetes \u8d44\u6e90\uff0c\u672c\u6b21\u6f14\u793a\u7684\u6837\u4f8b\u6d89\u53ca\u4ee5\u4e0b Kubernetes \u8d44\u6e90\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\uff08Namespace\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u5de5\u4f5c\u8d1f\u8f7d\uff08Deployment\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\uff08Service\uff09")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e0d\u6e05\u695a\u76f8\u5173\u6982\u5ff5\u7684\uff0c\u53ef\u4ee5\u524d\u5f80 Kubernetes \u5b98\u65b9\u7f51\u7ad9\uff0c\u67e5\u770b\u76f8\u5173\u8bf4\u660e\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service"))),(0,a.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,a.kt)("p",null,"1\u3001\u5b89\u88c5 Kusion \u5de5\u5177\u94fe"),(0,a.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 kusion \u7684\u5b98\u65b9\u5b89\u88c5\u5de5\u5177 ",(0,a.kt)("inlineCode",{parentName:"p"},"kusionup"),"\uff0c\u53ef\u5b9e\u73b0 kusion \u591a\u7248\u672c\u7ba1\u7406\u7b49\u5173\u952e\u80fd\u529b\u3002\u8be6\u60c5\u4fe1\u606f\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"\u4e0b\u8f7d\u548c\u5b89\u88c5"),"\u3002"),(0,a.kt)("p",null,"2\u3001\u4e0b\u8f7d\u5f00\u6e90 Konfig \u5927\u5e93"),(0,a.kt)("p",null,"\u5728\u672c\u7bc7\u6307\u5357\u4e2d\uff0c\u9700\u8981\u7528\u5230\u90e8\u5206\u5df2\u7ecf\u62bd\u8c61\u5b9e\u73b0\u7684 KCL \u6a21\u578b\uff0c\u6709\u5173 KCL \u8bed\u8a00\u7684\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/lang/lang/tour"},"Tour of KCL"),"\u3002"),(0,a.kt)("p",null,"\u4ed3\u5e93\u5730\u5740\uff1a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"https://github.com/KusionStack/konfig.git")),(0,a.kt)("p",null,"3\u3001\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4"),(0,a.kt)("p",null,"\u5fc5\u987b\u8981\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u540c\u65f6 Kubernetes \u96c6\u7fa4\u6700\u597d\u5e26\u6709 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\n\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," \u6784\u5efa\u4e00\u4e2a\u4f60\u81ea\u5df1\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("h2",{id:"2-\u521d\u59cb\u5316"},"2. \u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u672c\u6307\u5357\u662f\u4ee5 KCL \u548c Kusion \u7684\u65b9\u5f0f\u90e8\u7f72\u5e94\u7528\u670d\u52a1\uff0c\u4f9d\u8d56 kusion \u5de5\u5177\u3001Konfig \u5927\u5e93\u548c Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u6253\u5f00 Konfig \u5927\u5e93\u9879\u76ee\uff0c\u8fdb\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"appops")," \u76ee\u5f55\uff0c\u521d\u59cb\u5316 KCL \u9879\u76ee\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd appops && kusion init\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," \u547d\u4ee4\u4f1a\u63d0\u793a\u4f60\u8f93\u5165\u53ef\u80fd\u9700\u8981\u7684\u53c2\u6570\uff0c\u4f8b\u5982\u9879\u76ee\u540d\u79f0\u3001\u9879\u76ee\u63cf\u8ff0\uff0c\u955c\u50cf\u5730\u5740\u7b49\uff1b\u4e5f\u53ef\u4ee5\u4e00\u8def\u70b9\u51fb ",(0,a.kt)("em",{parentName:"p"},"\u56de\u8f66")," \u4f7f\u7528\u9ed8\u8ba4\u503c\u3002\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2714 deployment-single-stack    A minimal kusion project of single stack\nThis command will walk you through creating a new kusion project.\n\nEnter a value or leave blank to accept the (default), and press <ENTER>.\nPress ^C at any time to quit.\n\n\u2714 project name: deployment-single-stack\n\u2714 project description: A minimal kusion project of single stack\n\u2714 Stack: dev\n\u2714 ClusterName: kubernetes-dev\n\u2714 Image: gcr.io/google-samples/gb-frontend:v4\nCreated project 'deployment-single-stack'\n")),(0,a.kt)("p",null,"\u5230\u6b64\uff0c\u6211\u4eec\u5c31\u6210\u529f\u521d\u59cb\u5316\u4e00\u4e2a KCL \u9879\u76ee\uff1adeployment-single-stack\uff0c\u8be5\u4ee3\u7801\u5305\u542b\u4e00\u4e2a Project \u548c\u4e00\u4e2a Stack\u3002\n\u5176\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"project name")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"project description")," \u662f\u6bcf\u4e2a\u6a21\u677f\u90fd\u9700\u8981\u8bbe\u7f6e\u7684\u5c5e\u6027\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u6a21\u677f\u5171\u4eab\u3002\n\u5269\u4f59\u4e09\u4e2a\u5b57\u6bb5\uff0c\u662f\u6a21\u677f\u4e2d\u9700\u8981\u7528\u6237\u586b\u5165\u7684\u4e09\u4e2a\u5c5e\u6027\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Stack")," \u8868\u793a\u914d\u7f6e\u6808\u7684\u540d\u79f0\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u914d\u7f6e\u7684\u9694\u79bb\u6807\u8bc6\uff1b\n",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterName")," \u662f\u6307\u96c6\u7fa4\u540d\u79f0\uff0c\u5728\u672c\u4f8b\u4e2d\u6682\u672a\u4f7f\u7528\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"Image")," \u8868\u793a\u5e94\u7528\u7684\u4e1a\u52a1\u5bb9\u5668\u7684\u955c\u50cf\u5730\u5740\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6709\u5173 Project \u548c Stack \u7684\u8bbe\u8ba1\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/concepts/konfig"},"Project&Stack"),"\u3002")),(0,a.kt)("p",null,"\u8be5\u9879\u76ee\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deployment-single-stack\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 base\n\u2502   \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502   \u251c\u2500\u2500 ci-test\n\u2502   \u2502   \u2514\u2500\u2500 settings.yaml\n\u2502   \u251c\u2500\u2500 kcl.yaml\n\u2502   \u251c\u2500\u2500 main.k\n\u2502   \u2514\u2500\u2500 stack.yaml\n\u251c\u2500\u2500 kusion.yaml\n\u2514\u2500\u2500 project.yaml\n\n3 directories, 8 files\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u76ee\u5f55\u5171\u5206\u6210\u4e09\u5c42\uff0c\u6bcf\u5c42\u76ee\u5f55\u90fd\u6709\u5404\u81ea\u7684\u8bbe\u8ba1\u610f\u4e49\u3002\n\u6839\u76ee\u5f55\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"project.yaml")," \u8868\u793a\u9879\u76ee\u7ea7\u522b\u7684\u5c5e\u6027\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"kusion.yaml")," \u662f\u6a21\u677f\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4e0e\u672c\u6307\u5357\u7684\u64cd\u4f5c\u5185\u5bb9\u65e0\u5173\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"base")," \u76ee\u5f55\u5b58\u653e\u7684\u662f\u516c\u5171\u914d\u7f6e\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u76ee\u5f55\u5b58\u653e\u7684\u662f\u5b9a\u5236\u5316\u914d\u7f6e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," \u662f\u9759\u6001\u7f16\u8bd1\u914d\u7f6e\uff0c\u6307\u5b9a\u4e86\u7f16\u8bd1\u6587\u4ef6\uff0c\n",(0,a.kt)("inlineCode",{parentName:"p"},"main.k")," \u662f\u5b9a\u5236\u5316\u914d\u7f6e\u7684\u5177\u4f53\u4ee3\u7801\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml")," \u5b58\u653e\u7684\u662f\u662f\u914d\u7f6e\u6808\u7684\u63cf\u8ff0\u4fe1\u606f\uff1b\n",(0,a.kt)("inlineCode",{parentName:"p"},"dev/ci-test")," \u76ee\u5f55\u5b58\u653e\u7684\u662f\u52a8\u6001\u7f16\u8bd1\u914d\u7f6e\u548c\u6700\u7ec8\u8f93\u51fa\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7f16\u8bd1\u8f93\u51fa\u5230\u8be5\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout.golden.yaml")," \u6587\u4ef6\u3002\n\u6574\u4f53\u6765\u8bf4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},".k")," \u6587\u4ef6\u662f KCL \u6e90\u7801\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," \u662f\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"3-\u914d\u7f6e\u7f16\u8bd1"},"3. \u914d\u7f6e\u7f16\u8bd1"),(0,a.kt)("p",null,"\u5230\u6b64\uff0c\u5df2\u7ecf\u501f\u52a9 kusion \u63d0\u4f9b\u7684\u5185\u7f6e\u6a21\u677f\uff0c\u5b8c\u6210\u4e86\u9879\u76ee\u7684\u5f00\u53d1\u3002\n\u9879\u76ee\u7684\u7f16\u7a0b\u8bed\u8a00\u662f KCL\uff0c\u4e0d\u662f Kubernetes \u8ba4\u8bc6\u7684 JSON/YAML\uff0c\u56e0\u6b64\u8fd8\u9700\u8981\u7f16\u8bd1\u5f97\u5230\u6700\u7ec8\u8f93\u51fa\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u8fdb\u5165\u5230\u9879\u76ee\u7684 Stack \u76ee\u5f55\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"deployment-single-stack/dev"),"\uff09\u5e76\u6267\u884c\u7f16\u8bd1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd deployment-single-stack/dev && kusion compile\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u9ed8\u8ba4\u4fdd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment-single-stack/dev/ci-test/stdout.golden.yaml")," \u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6709\u5173 kusion \u547d\u4ee4\u884c\u5de5\u5177\u7684\u8bf4\u660e\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion -h"),"\uff0c\u6216\u8005\u53c2\u8003\u5de5\u5177\u7684\u5728\u7ebf\u6587\u6863 ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/cli/kusionctl/overview"},"Overview of Kusion CLI"),"\u3002")),(0,a.kt)("h2",{id:"4-\u914d\u7f6e\u751f\u6548"},"4. \u914d\u7f6e\u751f\u6548"),(0,a.kt)("p",null,"\u5b8c\u6210\u7f16\u8bd1\uff0c\u73b0\u5728\u5f00\u59cb\u4e0b\u53d1\u914d\u7f6e\u3002\u901a\u8fc7\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout.golden.yaml")," \u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230 3 \u4e2a\u8d44\u6e90\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a name \u4e3a deployment-single-stackdev \u7684 Deployment"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a name \u4e3a deployment-single-stack \u7684 Namespace"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a name \u4e3a frontend-service \u7684 Service")),(0,a.kt)("p",null,"\u8be5\u6587\u4ef6\u7684\u5185\u5bb9\u5df2\u7ecf\u662f Kubernetes \u80fd\u591f\u8bc6\u522b\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f stdout.golden.yaml")," \u76f4\u63a5\u4e0b\u53d1\u914d\u7f6e\uff0c\n\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply")," \u5b8c\u6210\u914d\u7f6e\u7f16\u8bd1\u5e76\u4e0b\u53d1\uff08\u8be5\u547d\u4ee4\u5305\u542b\u4e86\u914d\u7f6e\u7f16\u8bd1\uff09\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u63a8\u8350\u4f7f\u7528 kusion \u5de5\u5177\uff0c\u672c\u4f8b\u4e2d\u7684\u7f16\u8bd1\u8f93\u51fa\u662f\u5b8c\u6574\u7684 YAML \u58f0\u660e\uff0c\u4f46\u4e0d\u662f\u6240\u6709\u7684 KCL \u9879\u76ee\u7f16\u8bd1\u7ed3\u679c\u90fd\u662f\u5982\u6b64\u3002")),(0,a.kt)("p",null,"\u6267\u884c\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SUCCESS  Compiling in stack dev...\n\nStack: dev    Provider                Type                           Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace     deployment-single-stack[0]  Create\n      * \u251c\u2500  kubernetes  apps/v1:Deployment  deployment-single-stackdev[0]  Create\n      * \u2514\u2500  kubernetes          v1:Service            frontend-service[0]  Create\n\n\u2714 yes\nStart applying diffs......\n SUCCESS  Creating Namespace/deployment-single-stack     \n SUCCESS  Creating Deployment/deployment-single-stackdev\n SUCCESS  Creating Service/frontend-service\nCreating Service/frontend-service [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n\nApply complete! Resources: 3 created, 0 updated, 0 deleted.\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u5c31\u5b8c\u6210\u4e86\u914d\u7f6e\u751f\u6548\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5de5\u5177\u68c0\u67e5\u8d44\u6e90\u7684\u5b9e\u9645\u72b6\u6001\u3002"),(0,a.kt)("p",null,"1\u3001 \u68c0\u67e5 Namespace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                      STATUS        AGE\nargocd                    Active        59d\ndefault                   Active        72d\ndeployment-single-stack   Active        10m\n")),(0,a.kt)("p",null,"2\u3001\u68c0\u67e5 Deployment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deploy -n deployment-single-stack\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                         READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment-single-stackdev   1/1     1            1           11m\n")),(0,a.kt)("p",null,"3\u3001\u68c0\u67e5 Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n deployment-single-stack\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME               TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE\nfrontend-service   NodePort   10.0.0.0       <none>        80:10001/TCP   11m\n")),(0,a.kt)("p",null,"4\u3001\u68c0\u67e5\u5e94\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubecl")," \u5de5\u5177\uff0c\u5c06\u672c\u673a\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"30000")," \u6620\u5c04\u5230 Service \u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"80")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/frontend-service -n deployment-single-stack-xx 30000:80\n")),(0,a.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:30000"},"http://127.0.0.1:30000"),"\uff1a\n",(0,a.kt)("img",{loading:"lazy",src:n(66834).Z,width:"1830",height:"330"})))}k.isMDXComponent=!0},66834:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app-preview-de5274f4267fa725d2a65099e47c6c2c.jpg"}}]);