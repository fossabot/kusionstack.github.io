"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(u,".").concat(k)]||d[k]||o[k]||l;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},s="Vault CSI Provider",i={unversionedId:"user_docs/guides/sensitive-data-solution/vault-csi-provider",id:"user_docs/guides/sensitive-data-solution/vault-csi-provider",title:"Vault CSI Provider",description:"\u672c\u6307\u5357\u5c06\u5411\u4f60\u5c55\u793a\uff0cKCL/Kusion \u901a\u8fc7\u96c6\u6210 Vault CSI Provider\uff0c\u89e3\u51b3\u654f\u611f\u4fe1\u606f\u7684\u4f20\u8f93\u95ee\u9898\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/sensitive-data-solution/vault-csi-provider.md",sourceDirName:"user_docs/guides/sensitive-data-solution",slug:"/user_docs/guides/sensitive-data-solution/vault-csi-provider",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/vault-csi-provider",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/sensitive-data-solution/vault-csi-provider.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1690428760,formattedLastUpdatedAt:"2023\u5e747\u670827\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"Vault Agent",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/vault-agent"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh-CN/docs/user_docs/support/"}},u={},p=[{value:"1. \u51c6\u5907\u5f00\u59cb",id:"1-\u51c6\u5907\u5f00\u59cb",level:2},{value:"2. \u5b89\u88c5 Vault \u548c CSI Driver",id:"2-\u5b89\u88c5-vault-\u548c-csi-driver",level:2},{value:"2.1 \u5b89\u88c5 Vault",id:"21-\u5b89\u88c5-vault",level:3},{value:"2.2 \u5b89\u88c5 CSI Driver",id:"22-\u5b89\u88c5-csi-driver",level:3},{value:"3. \u914d\u7f6e Vault",id:"3-\u914d\u7f6e-vault",level:2},{value:"3.1 \u914d\u7f6e\u673a\u5bc6\u6570\u636e",id:"set-secret-data",level:3},{value:"3.2 \u542f\u7528 kubernetes \u8eab\u4efd\u8ba4\u8bc1",id:"32-\u542f\u7528-kubernetes-\u8eab\u4efd\u8ba4\u8bc1",level:3},{value:"4. \u7ed3\u679c\u9a8c\u8bc1",id:"verify-result",level:2},{value:"4.1 \u521b\u5efa\u6302\u8f7d Vault Secret \u7684 Pod",id:"create-pod-with-secret-mounted",level:3},{value:"4.2 \u6821\u9a8c\u6ce8\u5165\u7ed3\u679c",id:"42-\u6821\u9a8c\u6ce8\u5165\u7ed3\u679c",level:3}],c={toc:p};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vault-csi-provider"},"Vault CSI Provider"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u5411\u4f60\u5c55\u793a\uff0cKCL/Kusion \u901a\u8fc7\u96c6\u6210 Vault CSI Provider\uff0c\u89e3\u51b3\u654f\u611f\u4fe1\u606f\u7684\u4f20\u8f93\u95ee\u9898\u3002\n\u672c\u6b21\u6f14\u793a\u662f\u5c06\u6570\u636e\u5e93\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u4f20\u8f93\u5230 Pod \u4e2d\uff0c\u6d89\u53ca 3 \u4e2a Kubernetes \u5185\u7f6e\u8d44\u6e90\u548c 1 \u4e2a \u81ea\u5b9a\u4e49\u8d44\u6e90\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\uff08Namespace\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u5e94\u7528\uff08Deployment\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8d26\u53f7\uff08ServiceAccount\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u8d44\u6e90\uff08SecretProviderClass\uff09")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6307\u5357\u8981\u6c42\u4f60\u5bf9 Kubernetes \u6709\u57fa\u672c\u7684\u4e86\u89e3\u3002\u4e0d\u6e05\u695a\u76f8\u5173\u6982\u5ff5\u7684\uff0c\u53ef\u4ee5\u524d\u5f80 Kubernetes \u5b98\u65b9\u7f51\u7ad9\uff0c\u67e5\u770b\u76f8\u5173\u8bf4\u660e\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"ServiceAccount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://secrets-store-csi-driver.sigs.k8s.io/concepts.html#custom-resource-definitions-crds"},"SecretProviderClass")))),(0,r.kt)("h2",{id:"1-\u51c6\u5907\u5f00\u59cb"},"1. \u51c6\u5907\u5f00\u59cb"),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,r.kt)("p",null,"1\u3001\u5b89\u88c5 Kusion \u5de5\u5177\u94fe"),(0,r.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 kusion \u7684\u5b98\u65b9\u5b89\u88c5\u5de5\u5177 ",(0,r.kt)("inlineCode",{parentName:"p"},"kusionup"),"\uff0c\u53ef\u5b9e\u73b0 kusion \u591a\u7248\u672c\u7ba1\u7406\u7b49\u5173\u952e\u80fd\u529b\u3002\n\u8be6\u60c5\u4fe1\u606f\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"\u4e0b\u8f7d\u548c\u5b89\u88c5"),"\u3002"),(0,r.kt)("p",null,"2\u3001\u4e0b\u8f7d\u5f00\u6e90 Konfig \u5927\u5e93"),(0,r.kt)("p",null,"\u5728\u672c\u7bc7\u6307\u5357\u4e2d\uff0c\u9700\u8981\u7528\u5230\u90e8\u5206\u5df2\u7ecf\u62bd\u8c61\u5b9e\u73b0\u7684 KCL \u6a21\u578b\u3002\n\u6709\u5173 KCL \u8bed\u8a00\u7684\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"Tour of KCL"),"\u3002"),(0,r.kt)("p",null,"\u4ed3\u5e93\u5730\u5740\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"https://github.com/KusionStack/konfig.git")),(0,r.kt)("p",null,"3\u3001\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4"),(0,r.kt)("p",null,"\u5fc5\u987b\u8981\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u540c\u65f6 Kubernetes \u96c6\u7fa4\u6700\u597d\u5e26\u6709\n",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\n\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube"),"\n\u6784\u5efa\u4e00\u4e2a\u4f60\u81ea\u5df1\u7684\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"4\u3001\u53ef\u7528\u7684 Helm CLI"),(0,r.kt)("p",null,"Helm \u5de5\u5177\u7528\u6765\u90e8\u7f72 Vault Server \u548c CSI Driver\u3002\n\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 Helm\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm \u5b98\u65b9\u5730\u5740"),"\u3002"),(0,r.kt)("h2",{id:"2-\u5b89\u88c5-vault-\u548c-csi-driver"},"2. \u5b89\u88c5 Vault \u548c CSI Driver"),(0,r.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 Helm Chart \u5728 Kubernetes \u4e0a\u90e8\u7f72 Vault Server \u548c CSI Driver\n",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/"},"Helm")," \u662f\u4e00\u4e2a\u5305\u7ba1\u7406\u5668\uff0c\n\u5b83\u53ef\u4ee5\u5b89\u88c5\u548c\u914d\u7f6e Vault \u53ca\u5176\u76f8\u5173\u7ec4\u4ef6\uff0c\u4ee5\u4e0d\u540c\u6a21\u5f0f\u8fd0\u884c\u3002\nHelm Chart \u5b9e\u73b0\u4e86\u6a21\u677f\u7684\u6761\u4ef6\u5316\u548c\u53c2\u6570\u5316\u3002\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u8bbe\u7f6e\u6216\u5728 YAML \u4e2d\u5b9a\u4e49\u3002"),(0,r.kt)("h3",{id:"21-\u5b89\u88c5-vault"},"2.1 \u5b89\u88c5 Vault"),(0,r.kt)("p",null,"1\u3001\u6dfb\u52a0 HashiCorp Helm \u5b58\u50a8\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add hashicorp https://helm.releases.hashicorp.com\n")),(0,r.kt)("p",null,"2\u3001\u66f4\u65b0\u6240\u6709\u5b58\u50a8\u5e93\u4ee5\u786e\u4fdd helm \u7f13\u5b58\u4e86\u6700\u65b0\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,r.kt)("p",null,"3\u3001\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Vault Server\uff0c\u4ee5\u5f00\u53d1\u6a21\u5f0f\u8fd0\u884c\uff0c\u7981\u7528 Injector \u670d\u52a1\u5e76\u542f\u7528 CSI\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm install vault hashicorp/vault \\\n    --set "server.dev.enabled=true" \\\n    --set "injector.enabled=false" \\\n    --set "csi.enabled=true"\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"server.dev.enabled=true")," \u8868\u793a Vault \u5728\u5355 Pod \u4e0a\u4ee5\u5f00\u53d1\u8005\u6a21\u5f0f\u542f\u52a8\uff1b\n",(0,r.kt)("inlineCode",{parentName:"p"},"injector.enabled=false")," \u8868\u793a\u7981\u7528 Injector \u670d\u52a1\uff1b\n",(0,r.kt)("inlineCode",{parentName:"p"},"csi.enabled=true")," \u8868\u793a\u542f\u7528 Vault CSI Pod\u3002\n\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 Vault\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade")," \u547d\u4ee4\u6765\u66f4\u65b0 Vault \u7684\u90e8\u7f72\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"4\u3001\u68c0\u67e5 Default \u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709 Pod\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\nNAME                       READY   STATUS    RESTARTS   AGE\nvault-0                    1/1     Running   0          17m\nvault-csi-provider-456hl   1/1     Running   0          17m\n")),(0,r.kt)("p",null,"\u7b49\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"vault-0")," \u7684\u72b6\u6001\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," \u5e76\u4e14\u51c6\u5907\u5c31\u7eea\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"1/1"),"\uff09\uff0c\u518d\u7ee7\u7eed\u672c\u6307\u5357\u3002"),(0,r.kt)("h3",{id:"22-\u5b89\u88c5-csi-driver"},"2.2 \u5b89\u88c5 CSI Driver"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://secrets-store-csi-driver.sigs.k8s.io/introduction.html"},"Secrets Store CSI \u9a71\u52a8\u7a0b\u5e8f"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"secrets-store.csi.k8s.io")," \u5141\u8bb8 Kubernetes \u5c06\u5b58\u50a8\u5728\u5916\u90e8\u673a\u5bc6\u5b58\u50a8\u4e2d\u7684\u591a\u4e2a\u673a\u5bc6\u3001\u5bc6\u94a5\u548c\u8bc1\u4e66\u4f5c\u4e3a\u5377\u6302\u8f7d\u5230\u5176 Pod \u4e2d\u3002\n\u9644\u52a0\u5377\u540e\uff0c\u5176\u4e2d\u7684\u6570\u636e\u5c06\u88ab\u6302\u8f7d\u5230\u5bb9\u5668\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/container-storage-interface/spec/blob/master/spec.md"},"\u5bb9\u5668\u5b58\u50a8\u63a5\u53e3\uff08CSI\uff09"),"\n\u662f\u4e00\u79cd\u6807\u51c6\uff0c\u7528\u4e8e\u5c06\u4efb\u610f\u5757\u548c\u6587\u4ef6\u5b58\u50a8\u7cfb\u7edf\u66b4\u9732\u7ed9 Kubernetes \u7b49\u5bb9\u5668\u7f16\u6392\u7cfb\u7edf (CO) \u4e0a\u7684\u5bb9\u5668\u5316\u5de5\u4f5c\u8d1f\u8f7d\u3002\n\u4f7f\u7528 CSI \u7b2c\u4e09\u65b9\u5b58\u50a8\u63d0\u4f9b\u5546\u53ef\u4ee5\u7f16\u5199\u548c\u90e8\u7f72\u63d2\u4ef6\uff0c\u5728 Kubernetes \u4e2d\u516c\u5f00\u65b0\u7684\u5b58\u50a8\u7cfb\u7edf\uff0c\u800c\u65e0\u9700\u63a5\u89e6\u6838\u5fc3 Kubernetes \u4ee3\u7801\u3002")),(0,r.kt)("p",null,"1\u3001\u6dfb\u52a0 CSI \u9a71\u52a8\u7684 Helm \u5b58\u50a8\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add secrets-store-csi-driver https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts\n")),(0,r.kt)("p",null,"2\u3001\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Kubernetes-Secrets-Store-CSI-Driver\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install csi secrets-store-csi-driver/secrets-store-csi-driver --namespace kube-system\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"csi-secrets-store-csi-driver")," \u662f\u4ee5 DemonSet \u5f62\u5f0f\u90e8\u7f72\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-system")," \u547d\u540d\u7a7a\u95f4\u3002"),(0,r.kt)("p",null,"3\u3001\u68c0\u67e5 CSI Driver \u7684 Pod \u662f\u5426\u542f\u52a8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl --namespace=kube-system get pods -l "app=secrets-store-csi-driver"\nNAME                                 READY   STATUS    RESTARTS   AGE\ncsi-secrets-store-csi-driver-2wl2f   3/3     Running   0          2m\n')),(0,r.kt)("p",null,"\u7b49\u5f85 ",(0,r.kt)("inlineCode",{parentName:"p"},"csi-secrets-store-csi-driver-2wl2f")," \u7684\u72b6\u6001\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),"\uff0c\u5e76\u4e14\u5df2\u7ecf\u51c6\u5907\u5c31\u7eea\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"3/3"),"\uff09\uff0c\u518d\u7ee7\u7eed\u672c\u6307\u5357\u3002"),(0,r.kt)("h2",{id:"3-\u914d\u7f6e-vault"},"3. \u914d\u7f6e Vault"),(0,r.kt)("p",null,"Vault \u5c06\u673a\u5bc6\u6570\u636e\u4fdd\u5b58\u5728\u81ea\u5df1\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u7528\u6237\u9700\u8981\u5148\u914d\u7f6e\u76f8\u5173\u673a\u5bc6\u6570\u636e\uff0c\u5e76\u542f\u7528 Vault \u7684 Kubernetes \u8ba4\u8bc1\u3002"),(0,r.kt)("h3",{id:"set-secret-data"},"3.1 \u914d\u7f6e\u673a\u5bc6\u6570\u636e"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"#create-pod-with-secret-mounted"},"\u521b\u5efa\u6302\u8f7d Vault Secret \u7684 Pod"),"\u5c0f\u8282\uff0c\u6302\u8f7d\u5230 Pod \u4e2d\u7684\u5377\uff0c\n\u5f15\u7528\u4e86\u4fdd\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"secret/data/db-pass")," \u8def\u5f84\u4e0b\u7684 secret \u3002\nVault \u4ee5\u5f00\u53d1\u6a21\u5f0f\u8fd0\u884c\u65f6\uff0ckv \u5f15\u64ce\u4f1a\u542f\u7528\u9ed8\u8ba4\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"/secret"),"\u3002"),(0,r.kt)("p",null,"1\u3001\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"vault-0")," \u542f\u52a8\u4ea4\u4e92\u5f0f shell \u7ec8\u7aef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it vault-0 -- /bin/sh\n")),(0,r.kt)("p",null,"2\u3001\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"secret/db-pass")," \u8def\u5f84\u521b\u5efa\u5e26\u6709\u5bc6\u7801\u7684 secret\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vault kv put secret/db-pass password="db-secret-password"\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Key                Value\n---                -----\ncreated_time       2022-03-17T07:45:06.3767973Z\ncustom_metadata    <nil>\ndeletion_time      n/a\ndestroyed          false\nversion            1\n")),(0,r.kt)("p",null,"3\u3001\u9a8c\u8bc1 secret \u5728\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"/secret/db-pass")," \u4e0a\u662f\u5426\u53ef\u8bfb\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault kv get secret/db-pass\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"======= Metadata =======\nKey                Value\n---                -----\ncreated_time       2022-03-17T07:45:06.3767973Z\ncustom_metadata    <nil>\ndeletion_time      n/a\ndestroyed          false\nversion            1\n\n====== Data ======\nKey         Value\n---         -----\npassword    db-secret-password\n")),(0,r.kt)("p",null,"\u5230\u6b64\uff0c\u673a\u5bc6\u6570\u636e\u521b\u5efa\u5b8c\u6bd5\uff0c\u6682\u4e14\u4e0d\u9700\u8981\u9000\u51fa Pod\u3002"),(0,r.kt)("h3",{id:"32-\u542f\u7528-kubernetes-\u8eab\u4efd\u8ba4\u8bc1"},"3.2 \u542f\u7528 kubernetes \u8eab\u4efd\u8ba4\u8bc1"),(0,r.kt)("p",null,"Vault \u63d0\u4f9b\u4e86 Kubernetes \u8eab\u4efd\u9a8c\u8bc1\u65b9\u6cd5\uff0c\u4f7f\u5ba2\u6237\u7aef\u80fd\u591f\u4f7f\u7528 Kubernetes ServiceAccount \u4ee4\u724c\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\n\u6b64\u4ee4\u724c\u5728\u521b\u5efa\u65f6\u63d0\u4f9b\u7ed9\u6bcf\u4e2a Pod\u3002"),(0,r.kt)("p",null,"1\u3001\u7ee7\u7eed\u4e0a\u4e00\u5c0f\u8282\u7684 Terminal\uff0c\u542f\u7528 Kubernetes \u8eab\u4efd\u9a8c\u8bc1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault auth enable kubernetes\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Success! Enabled kubernetes auth method at: kubernetes/\n")),(0,r.kt)("p",null,"2\u3001\u914d\u7f6e kubernetes \u8eab\u4efd\u8ba4\u8bc1\u89c4\u5219\uff0c\u4f9d\u8d56 Kubernetes API \u5730\u5740\u3001ServiceAccount \u4ee4\u724c\u3001\n\u8bc1\u4e66\u4ee5\u53ca Kubernetes ServiceAccount \u7684\u9881\u53d1\u8005\uff08Kubernetes 1.21+ \u9700\u8981\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vault write auth/kubernetes/config \\\n    kubernetes_host="https://$KUBERNETES_PORT_443_TCP_ADDR:443" \\\n    token_reviewer_jwt="$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" \\\n    kubernetes_ca_cert=@/var/run/secrets/kubernetes.io/serviceaccount/ca.crt \\\n    issuer="https://kubernetes.default.svc.cluster.local"\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Success! Data written to: auth/kubernetes/config\n")),(0,r.kt)("p",null,"Kubernetes \u521b\u5efa\u5bb9\u5668\u65f6\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"token_reviewer_jwt")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes_ca_cert")," \u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u3002\n\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBERNETES_PORT_443_TCP_ADDR")," \u5f15\u7528\u7684\u662f Kubernetes \u4e3b\u673a\u7684\u5185\u90e8\u7f51\u7edc\u5730\u5740\u3002"),(0,r.kt)("p",null,"3\u3001\u8bbe\u7f6e\u8bfb\u6743\u9650\u7684 ",(0,r.kt)("em",{parentName:"p"},"policy")),(0,r.kt)("p",null,"Kubernetes-Secrets-Store-CSI-Driver \u9700\u8981\u8bfb\u53d6\u5bc6\u94a5\uff0c\u4fdd\u8bc1\u5b83\u5bf9\u6302\u8f7d\u7684\u5377\u548c\u5377\u4e2d\u5bc6\u94a5\u6709\u8bfb\u6743\u9650\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-csi-policy")," \u7684 ",(0,r.kt)("em",{parentName:"p"},"policy"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'vault policy write kcl-vault-csi-policy - <<EOF\npath "secret/data/db-pass" {\n  capabilities = ["read"]\n}\nEOF\n')),(0,r.kt)("p",null,"4\u3001\u518d\u521b\u5efa\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl-vault-csi-role")," \u7684 ",(0,r.kt)("em",{parentName:"p"},"role")," \uff0c\u5173\u8054\u4e0a\u4e00\u6b65\u521b\u5efa\u7684 ",(0,r.kt)("em",{parentName:"p"},"policy"),"\uff0c\u5e76\u7ed1\u5b9a Namespace \u548c ServiceAccount\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vault write auth/kubernetes/role/kcl-vault-csi-role \\\n    bound_service_account_names=kcl-vault-csi-sa \\\n    bound_service_account_namespaces=kcl-vault-csi \\\n    policies=kcl-vault-csi-policy \\\n    ttl=24h\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Success! Data written to: auth/kubernetes/role/kcl-vault-csi-role\n")),(0,r.kt)("p",null,"\u8be5\u89d2\u8272\u5c06 Kubernetes \u670d\u52a1\u5e10\u6237 ",(0,r.kt)("em",{parentName:"p"},"kcl-vault-csi-sa")," \u548c\u547d\u540d\u7a7a\u95f4 ",(0,r.kt)("em",{parentName:"p"},"kcl-vault-csi")," \u4e0e Vault \u7b56\u7565 ",(0,r.kt)("em",{parentName:"p"},"kcl-vault-csi-role")," \u5173\u8054\u8d77\u6765\u3002\n\u6b64  Kubernetes \u670d\u52a1\u5e10\u6237\u5c06\u4f1a\u5728\u540e\u9762\u521b\u5efa\u3002\u8ba4\u8bc1\u6210\u529f\u540e\u8fd4\u56de\u7684\u4ee4\u724c\u6709\u6548\u671f\u4e3a 24 \u5c0f\u65f6\u3002\u6700\u540e\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"exit")," \u9000\u51fa Pod\u3002"),(0,r.kt)("h2",{id:"verify-result"},"4. \u7ed3\u679c\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4e0a\u4e00\u8282\u6211\u4eec\u5df2\u7ecf\u5728 Vault \u4e2d\u4fdd\u5b58\u673a\u5bc6\u6570\u636e\uff0c\u5e76\u4e14\u914d\u7f6e Vault \u89d2\u8272\uff0c\u5b8c\u6210\u4e86 Namespace + ServiceAccount + Policy \u7684\u7ed1\u5b9a\u3002\n\u8fd9\u4e00\u8282\uff0c\u6211\u4eec\u76f4\u63a5\u4f7f\u7528\u5f00\u6e90\u5927\u5e93\u4e2d\u7684 Vault \u6f14\u793a\u9879\u76ee\uff0c\u90e8\u7f72\u5e94\u7528\u5e76\u68c0\u9a8c\u7ed3\u679c\u3002"),(0,r.kt)("h3",{id:"create-pod-with-secret-mounted"},"4.1 \u521b\u5efa\u6302\u8f7d Vault Secret \u7684 Pod"),(0,r.kt)("p",null,"1\u3001\u8fdb\u5165\u5f00\u6e90\u5927\u5e93\u7684 Vault \u6f14\u793a\u9879\u76ee\u7684 Stack \u76ee\u5f55 ",(0,r.kt)("inlineCode",{parentName:"p"},"base/examples/kcl-vault-csi/dev"),"\uff0c\u5e76\u4e0b\u53d1\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd base/examples/kcl-vault-csi/dev && kusion apply --yes=true\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," SUCCESS  Compiling in stack dev...                                                                                                   \n\nStack: dev    Provider                                               Type                       Name    Plan\n      * \u251c\u2500  kubernetes                                       v1:Namespace           kcl-vault-csi[0]  Create\n      * \u251c\u2500  kubernetes                                  v1:ServiceAccount        kcl-vault-csi-sa[0]  Create\n      * \u251c\u2500  kubernetes  secrets-store.csi.x-k8s.io/v1:SecretProviderClass  kcl-vault-csi-database[0]  Create\n      * \u2514\u2500  kubernetes                                 apps/v1:Deployment       kcl-vault-csi-dev[0]  Create\n\nStart applying diffs......\n SUCCESS  Creating Namespace/kcl-vault-csi                                                                                            \n SUCCESS  Creating ServiceAccount/kcl-vault-csi-sa                                                                                    \n SUCCESS  Creating SecretProviderClass/kcl-vault-csi-database                                                                         \n SUCCESS  Creating Deployment/kcl-vault-csi-dev                                                                                       \nCreating Deployment/kcl-vault-csi-dev [4/4] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n\nApply complete! Resources: 4 created, 0 updated, 0 deleted.\n")),(0,r.kt)("p",null,"\u56db\u4e2a\u8d44\u6e90\u521b\u5efa\u6210\u529f\uff0c\u5f85 Deployment \u521b\u5efa\u51fa Pod \u540e\uff0c\u4f1a\u5c06 SecretProviderClass \u4e2d\u58f0\u660e\u7684\u5377\u6302\u8f7d\u5230\u5bb9\u5668\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\u3002"),(0,r.kt)("h3",{id:"42-\u6821\u9a8c\u6ce8\u5165\u7ed3\u679c"},"4.2 \u6821\u9a8c\u6ce8\u5165\u7ed3\u679c"),(0,r.kt)("p",null,"1\u3001\u68c0\u67e5\u5b9e\u9a8c Pod \u662f\u5426\u8fd0\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod -n kcl-vault-csi \n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                 READY   STATUS    RESTARTS   AGE\nkcl-vault-csi-dev-64b66968d8-p27fv   1/1     Running   0          12s\n")),(0,r.kt)("p",null,"2\u3001\u67e5\u770b\u5199\u5165 Pod \u7684\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84 ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/secrets-store/db-password")," \u7684\u5185\u5bb9\uff0c\n\u68c0\u67e5\u662f\u5426\u662f",(0,r.kt)("a",{parentName:"p",href:"#set-secret-data"},"\u914d\u7f6e\u673a\u5bc6\u6570\u636e")," \u5c0f\u8282\u5199\u5165\u7684 paasword\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it kcl-vault-csi-dev-64b66968d8-p27fv -n kcl-vault-csi -- cat /mnt/secrets-store/db-password\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"db-secret-password\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u6210\u529f\u5730\u5c06\u673a\u5bc6\u6570\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," \u901a\u8fc7 CSI \u5377\u7684\u65b9\u5f0f\uff0c\u6210\u529f\u6ce8\u5165\u5230 Pod \u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0c\u5b8c\u6210\u4e86\u673a\u5bc6\u4fe1\u606f\u7684\u4f20\u8f93\u3002"))}o.isMDXComponent=!0}}]);