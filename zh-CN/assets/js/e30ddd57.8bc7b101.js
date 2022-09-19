"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),k=l,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={},s="Vault Agent",i={unversionedId:"user_docs/guides/sensitive-data-solution/vault-agent",id:"user_docs/guides/sensitive-data-solution/vault-agent",title:"Vault Agent",description:"\u672c\u6307\u5357\u5c06\u5411\u4f60\u5c55\u793a\uff0cKCL/Kusion \u901a\u8fc7\u96c6\u6210 Vault\uff0c\u89e3\u51b3\u654f\u611f\u4fe1\u606f\u7684\u4f20\u8f93\u95ee\u9898\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/sensitive-data-solution/vault-agent.md",sourceDirName:"user_docs/guides/sensitive-data-solution",slug:"/user_docs/guides/sensitive-data-solution/vault-agent",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/vault-agent",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/sensitive-data-solution/vault-agent.md",tags:[],version:"current",lastUpdatedBy:"HeiPa",lastUpdatedAt:1663588219,formattedLastUpdatedAt:"2022/9/19",frontMatter:{},sidebar:"user_docs",previous:{title:"\u654f\u611f\u4fe1\u606f\u7ba1\u7406",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/"},next:{title:"Vault CSI Provider",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/vault-csi-provider"}},o={},u=[{value:"1. \u51c6\u5907\u5f00\u59cb",id:"1-\u51c6\u5907\u5f00\u59cb",level:2},{value:"2. \u5b89\u88c5 Vault",id:"2-\u5b89\u88c5-vault",level:2},{value:"3. \u914d\u7f6e Vault",id:"3-\u914d\u7f6e-vault",level:2},{value:"3.1 \u914d\u7f6e\u673a\u5bc6\u6570\u636e",id:"set-secret-data",level:3},{value:"3.2 \u542f\u7528 kubernetes \u8eab\u4efd\u8ba4\u8bc1",id:"32-\u542f\u7528-kubernetes-\u8eab\u4efd\u8ba4\u8bc1",level:3},{value:"4. \u7ed3\u679c\u9a8c\u8bc1",id:"4-\u7ed3\u679c\u9a8c\u8bc1",level:2},{value:"4.1 \u521b\u5efa\u5e26\u6ce8\u89e3\u7684 Pod",id:"create-pod-with-annotation",level:3},{value:"4.2 \u9a8c\u8bc1\u7ed3\u679c",id:"42-\u9a8c\u8bc1\u7ed3\u679c",level:3},{value:"4.2.1 \u975e\u683c\u5f0f\u5316\u8f93\u51fa",id:"421-\u975e\u683c\u5f0f\u5316\u8f93\u51fa",level:4},{value:"4.2.2 \u683c\u5f0f\u5316\u8f93\u51fa",id:"422-\u683c\u5f0f\u5316\u8f93\u51fa",level:4}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vault-agent"},"Vault Agent"),(0,l.kt)("p",null,"\u672c\u6307\u5357\u5c06\u5411\u4f60\u5c55\u793a\uff0cKCL/Kusion \u901a\u8fc7\u96c6\u6210 Vault\uff0c\u89e3\u51b3\u654f\u611f\u4fe1\u606f\u7684\u4f20\u8f93\u95ee\u9898\u3002\n\u672c\u6b21\u6f14\u793a\u662f\u5c06\u6570\u636e\u5e93\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u4f20\u8f93\u5230 Pod \u4e2d\uff0c\u6d89\u53ca 3 \u4e2a Kubernetes \u8d44\u6e90\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u547d\u540d\u7a7a\u95f4\uff08Namespace\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u72b6\u6001\u5e94\u7528\uff08Deployment\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u8d26\u53f7\uff08ServiceAccount\uff09")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u672c\u6307\u5357\u8981\u6c42\u4f60\u5bf9 Kubernetes \u6709\u57fa\u672c\u7684\u4e86\u89e3\u3002\u4e0d\u6e05\u695a\u76f8\u5173\u6982\u5ff5\u7684\uff0c\u53ef\u4ee5\u524d\u5f80 Kubernetes \u5b98\u65b9\u7f51\u7ad9\uff0c\u67e5\u770b\u76f8\u5173\u8bf4\u660e\uff1a"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"ServiceAccount"))))),(0,l.kt)("h2",{id:"1-\u51c6\u5907\u5f00\u59cb"},"1. \u51c6\u5907\u5f00\u59cb"),(0,l.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,l.kt)("p",null,"1\u3001\u5b89\u88c5 Kusion \u5de5\u5177\u94fe"),(0,l.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 kusion \u7684\u5b98\u65b9\u5b89\u88c5\u5de5\u5177 ",(0,l.kt)("inlineCode",{parentName:"p"},"kusionup"),"\uff0c\u53ef\u5b9e\u73b0 kusion \u591a\u7248\u672c\u7ba1\u7406\u7b49\u5173\u952e\u80fd\u529b\u3002\n\u8be6\u60c5\u4fe1\u606f\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"\u4e0b\u8f7d\u548c\u5b89\u88c5"),"\u3002"),(0,l.kt)("p",null,"2\u3001\u4e0b\u8f7d\u5f00\u6e90 Konfig \u5927\u5e93"),(0,l.kt)("p",null,"\u5728\u672c\u7bc7\u6307\u5357\u4e2d\uff0c\u9700\u8981\u7528\u5230\u90e8\u5206\u5df2\u7ecf\u62bd\u8c61\u5b9e\u73b0\u7684 KCL \u6a21\u578b\u3002\n\u6709\u5173 KCL \u8bed\u8a00\u7684\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/lang/lang/tour"},"Tour of KCL"),"\u3002"),(0,l.kt)("p",null,"\u4ed3\u5e93\u5730\u5740\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"https://github.com/KusionStack/konfig.git")),(0,l.kt)("p",null,"3\u3001\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4"),(0,l.kt)("p",null,"\u5fc5\u987b\u8981\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u540c\u65f6 Kubernetes \u96c6\u7fa4\u6700\u597d\u5e26\u6709\n",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\n\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube"),"\n\u6784\u5efa\u4e00\u4e2a\u4f60\u81ea\u5df1\u7684\u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"4\u3001\u53ef\u7528\u7684 Helm CLI"),(0,l.kt)("p",null,"Helm \u5de5\u5177\u7528\u6765\u90e8\u7f72 Vault Server \u548c Agent Injector\u3002\n\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b89\u88c5 Helm\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Helm \u5b98\u65b9\u5730\u5740"),"\u3002"),(0,l.kt)("h2",{id:"2-\u5b89\u88c5-vault"},"2. \u5b89\u88c5 Vault"),(0,l.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 Helm Chart \u5728 Kubernetes \u4e0a\u90e8\u7f72 Vault Server \u548c Agent\u3002\n",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/"},"Helm")," \u662f\u4e00\u4e2a\u5305\u7ba1\u7406\u5668\uff0c\n\u5b83\u53ef\u4ee5\u5b89\u88c5\u548c\u914d\u7f6e Vault \u53ca\u5176\u76f8\u5173\u7ec4\u4ef6\uff0c\u4ee5\u4e0d\u540c\u6a21\u5f0f\u8fd0\u884c\u3002\nHelm Chart \u5b9e\u73b0\u4e86\u6a21\u677f\u7684\u6761\u4ef6\u5316\u548c\u53c2\u6570\u5316\u3002\u8fd9\u4e9b\u53c2\u6570\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u8bbe\u7f6e\u6216\u5728 YAML \u4e2d\u5b9a\u4e49\u3002"),(0,l.kt)("p",null,"1\u3001\u6dfb\u52a0 HashiCorp Helm \u5b58\u50a8\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add hashicorp https://helm.releases.hashicorp.com\n")),(0,l.kt)("p",null,"2\u3001\u66f4\u65b0\u6240\u6709\u5b58\u50a8\u5e93\u4ee5\u786e\u4fdd helm \u7f13\u5b58\u4e86\u6700\u65b0\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\n")),(0,l.kt)("p",null,"3\u3001\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Vault Server \u548c Agent\uff0c\u5e76\u4ee5\u5f00\u53d1\u6a21\u5f0f\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'helm install vault hashicorp/vault --set "server.dev.enabled=true"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"server.dev.enabled=true")," \u8868\u793a Vault \u5728\u5355 Pod \u4e0a\u4ee5\u5f00\u53d1\u8005\u6a21\u5f0f\u542f\u52a8\u3002"),(0,l.kt)("p",null,"4\u3001\u68c0\u67e5 Default \u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709 Pod\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pod\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                                  READY   STATUS    RESTARTS      AGE\nvault-0                               1/1     Running   0             2d1h\nvault-agent-injector-58b6d499-k9x9r   1/1     Running   0             2d1h\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"vault-0")," \u662f\u4ee5 ",(0,l.kt)("strong",{parentName:"p"},"dev")," \u6a21\u5f0f\u8fd0\u884c\u7684 Vault \u670d\u52a1\u5668\uff0c\n",(0,l.kt)("inlineCode",{parentName:"p"},"vault-agent-injector-58b6d499-k9x9r")," \u662f Agent\uff0c\u4f1a\u6839\u636e Annotation \u6267\u884c\u6570\u636e\u6ce8\u5165\u3002"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u672c\u4f8b\u4e3a\u4e86\u7b80\u5316\u6f14\u793a\uff0c\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"dev")," \u6a21\u5f0f\u542f\u52a8 Vault \u670d\u52a1\u5668\uff0c\n\u6b64\u6a21\u5f0f\u4e0b\uff0cVault \u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u5e76\u89e3\u5c01\uff08Unseal\uff09\u3002\u8bf7\u52ff\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u3002"))),(0,l.kt)("h2",{id:"3-\u914d\u7f6e-vault"},"3. \u914d\u7f6e Vault"),(0,l.kt)("p",null,"Vault \u5c06\u673a\u5bc6\u6570\u636e\u4fdd\u5b58\u5728\u81ea\u5df1\u7684\u6570\u636e\u5e93\u4e2d\uff0c\u7528\u6237\u9700\u8981\u5148\u914d\u7f6e\u76f8\u5173\u673a\u5bc6\u6570\u636e\uff0c\u5e76\u542f\u7528 Vault \u7684 Kubernetes \u8ba4\u8bc1\u3002"),(0,l.kt)("h3",{id:"set-secret-data"},"3.1 \u914d\u7f6e\u673a\u5bc6\u6570\u636e"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("a",{parentName:"p",href:"#create-pod-with-annotation"},"\u521b\u5efa\u5e26\u6ce8\u89e3\u7684 Pod")," \u5c0f\u8282\uff0c\u5c06\u4f1a\u628a\u6570\u636e\u5e93\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u4f5c\u4e3a\u673a\u5bc6\u6570\u636e\u6ce8\u5165 Pod\uff0c\n\u800c Vault \u5c06\u6b64\u673a\u5bc6\u6570\u636e\u4fdd\u5b58\u3002\u8981\u521b\u5efa\u6b64\u7c7b\u6570\u636e\uff0c\u9700\u8981 Vault \u542f\u7528 kv \u5f15\u64ce\uff0c\u5e76\u5c06\u7528\u6237\u540d\u548c\u5bc6\u7801\u4fdd\u5b58\u5728\u6307\u5b9a\u7684\u8def\u5f84\u4e2d\u3002"),(0,l.kt)("p",null,"1\u3001\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"vault-0")," \u542f\u52a8\u4ea4\u4e92\u5f0f shell \u7ec8\u7aef\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it vault-0 -- /bin/sh\n")),(0,l.kt)("p",null,"2\u3001\u6307\u5b9a\u8def\u5f84 ",(0,l.kt)("inlineCode",{parentName:"p"},"path=internal")," \u542f\u52a8 kv \u5f15\u64ce\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault secrets enable -path=internal kv-v2\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Success! Enabled the kv-v2 secrets engine at: internal/\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6709\u5173 kv secrets \u5f15\u64ce\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\n",(0,l.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/vault/static-secrets"},"Static Secrets: Key/Value Secret"),"\u3002"))),(0,l.kt)("p",null,"3\u3001\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"internal/database/config")," \u8def\u5f84\u521b\u5efa secret\uff0c\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"password"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'vault kv put internal/database/config username="db-readonly-username" password="db-secret-password"\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Key              Value\n---              -----\ncreated_time     2022-03-13T08:40:02.1133715Z\ndeletion_time    n/a\ndestroyed        false\nversion          1\n")),(0,l.kt)("p",null,"4\u3001\u68c0\u67e5\u521b\u5efa\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault kv get internal/database/config\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"======= Metadata =======\nKey                Value\n---                -----\ncreated_time       2022-03-13T08:40:02.1133715Z\ncustom_metadata    <nil>\ndeletion_time      n/a\ndestroyed          false\nversion            1\n\n====== Data ======\nKey         Value\n---         -----\npassword    db-secret-password\nusername    db-readonly-username\n")),(0,l.kt)("p",null,"\u5230\u6b64\uff0c\u673a\u5bc6\u6570\u636e\u521b\u5efa\u5b8c\u6bd5\uff0c\u6682\u4e14\u4e0d\u9700\u8981\u9000\u51fa Pod\u3002"),(0,l.kt)("h3",{id:"32-\u542f\u7528-kubernetes-\u8eab\u4efd\u8ba4\u8bc1"},"3.2 \u542f\u7528 kubernetes \u8eab\u4efd\u8ba4\u8bc1"),(0,l.kt)("p",null,"Vault \u63d0\u4f9b\u4e86 Kubernetes \u8eab\u4efd\u9a8c\u8bc1\u65b9\u6cd5\uff0c\u4f7f\u5ba2\u6237\u7aef\u80fd\u591f\u4f7f\u7528 Kubernetes ServiceAccount \u4ee4\u724c\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002\n\u6b64\u4ee4\u724c\u5728\u521b\u5efa\u65f6\u63d0\u4f9b\u7ed9\u6bcf\u4e2a Pod\u3002"),(0,l.kt)("p",null,"1\u3001\u7ee7\u7eed\u4e0a\u4e00\u5c0f\u8282\u7684 Terminal\uff0c\u542f\u7528 Kubernetes \u8eab\u4efd\u9a8c\u8bc1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault auth enable kubernetes\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Success! Enabled kubernetes auth method at: kubernetes/\n")),(0,l.kt)("p",null,"2\u3001\u914d\u7f6e kubernetes \u8eab\u4efd\u8ba4\u8bc1\u89c4\u5219\uff0c\n\u4f9d\u8d56 Kubernetes API \u5730\u5740\u3001ServiceAccount \u4ee4\u724c\u3001\u8bc1\u4e66\u4ee5\u53ca Kubernetes ServiceAccount \u7684\u9881\u53d1\u8005\uff08Kubernetes 1.21+ \u9700\u8981\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'vault write auth/kubernetes/config \\\n    kubernetes_host="https://$KUBERNETES_PORT_443_TCP_ADDR:443" \\\n    token_reviewer_jwt="$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)" \\\n    kubernetes_ca_cert=@/var/run/secrets/kubernetes.io/serviceaccount/ca.crt \\\n    issuer="https://kubernetes.default.svc.cluster.local"\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Success! Data written to: auth/kubernetes/config\n")),(0,l.kt)("p",null,"Kubernetes \u521b\u5efa\u5bb9\u5668\u65f6\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"token_reviewer_jwt")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"kubernetes_ca_cert")," \u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u3002\n\u73af\u5883\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"KUBERNETES_PORT_443_TCP_ADDR")," \u5f15\u7528\u7684\u662f Kubernetes \u4e3b\u673a\u7684\u5185\u90e8\u7f51\u7edc\u5730\u5740\u3002"),(0,l.kt)("p",null,"3\u3001\u8bbe\u7f6e\u8bfb\u6743\u9650\u7684 ",(0,l.kt)("em",{parentName:"p"},"policy")),(0,l.kt)("p",null,"\u540e\u9762\u8981\u90e8\u7f72\u7684\u670d\u52a1\uff0c\u9700\u8981\u8bfb\u53d6\u8def\u5f84 ",(0,l.kt)("inlineCode",{parentName:"p"},"internal/database/config")," \u4e2d\u4fdd\u5b58\u7684\u673a\u5bc6\u6570\u636e\uff0c\u5148\u7ed9\u8be5\u8def\u5f84\u6dfb\u52a0\u8bfb\u6743\u9650\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'vault policy write kcl-vault-agent-agent-policy - <<EOF\npath "internal/data/database/config" {\n  capabilities = ["read"]\n}\nEOF\n')),(0,l.kt)("p",null,"4\u3001\u518d\u521b\u5efa\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl-vault-agent-agent-role")," \u7684 ",(0,l.kt)("em",{parentName:"p"},"role")," \uff0c\u5173\u8054\u4e0a\u4e00\u6b65\u521b\u5efa\u7684 ",(0,l.kt)("em",{parentName:"p"},"policy"),"\uff0c\u5e76\u7ed1\u5b9a Namespace \u548c ServiceAccount\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vault write auth/kubernetes/role/kcl-vault-agent-agent-role \\\n    bound_service_account_names=kcl-vault-agent-agent-sa \\\n    bound_service_account_namespaces=kcl-vault-agent-agent \\\n    policies=kcl-vault-agent-agent-policy \\\n    ttl=24h\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Success! Data written to: auth/kubernetes/role/kcl-vault-agent-role\n")),(0,l.kt)("p",null,"\u8be5\u89d2\u8272\u5c06 Kubernetes \u670d\u52a1\u5e10\u6237 ",(0,l.kt)("em",{parentName:"p"},"kcl-vault-agent-sa")," \u548c\u547d\u540d\u7a7a\u95f4 ",(0,l.kt)("em",{parentName:"p"},"kcl-vault")," \u4e0e Vault \u7b56\u7565 ",(0,l.kt)("em",{parentName:"p"},"kcl-vault-agent-role")," \u5173\u8054\u8d77\u6765\u3002\n\u6b64  Kubernetes \u670d\u52a1\u5e10\u6237\u5c06\u4f1a\u5728\u540e\u9762\u521b\u5efa\u3002\u8ba4\u8bc1\u6210\u529f\u540e\u8fd4\u56de\u7684\u4ee4\u724c\u6709\u6548\u671f\u4e3a 24 \u5c0f\u65f6\u3002\u6700\u540e\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"exit")," \u9000\u51fa Pod\u3002"),(0,l.kt)("h2",{id:"4-\u7ed3\u679c\u9a8c\u8bc1"},"4. \u7ed3\u679c\u9a8c\u8bc1"),(0,l.kt)("p",null,"\u4e0a\u4e00\u8282\u6211\u4eec\u5df2\u7ecf\u5728 Vault \u4e2d\u4fdd\u5b58\u673a\u5bc6\u6570\u636e\uff0c\u5e76\u4e14\u914d\u7f6e Vault \u89d2\u8272\uff0c\u5b8c\u6210\u4e86 Namespace + ServiceAccount + Policy \u7684\u7ed1\u5b9a\u3002\n\u8fd9\u4e00\u8282\uff0c\u6211\u4eec\u76f4\u63a5\u4f7f\u7528\u5f00\u6e90\u5927\u5e93\u4e2d\u7684 Vault \u6f14\u793a\u9879\u76ee\uff0c\u90e8\u7f72\u5e94\u7528\u5e76\u68c0\u9a8c\u7ed3\u679c\u3002"),(0,l.kt)("h3",{id:"create-pod-with-annotation"},"4.1 \u521b\u5efa\u5e26\u6ce8\u89e3\u7684 Pod"),(0,l.kt)("p",null,"1\u3001\u8fdb\u5165\u5f00\u6e90\u5927\u5e93\u7684 Vault \u6f14\u793a\u9879\u76ee\u7684 Stack \u76ee\u5f55 ",(0,l.kt)("inlineCode",{parentName:"p"},"base/examples/kcl-vault-agent/dev"),"\uff0c\u5e76\u4e0b\u53d1\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd base/examples/kcl-vault/dev && kusion apply --yes=true\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SUCCESS  Compiling in stack dev...\nStack: dev    Provider                Type                    Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace      kcl-vault-agent[0]  Create\n      * \u251c\u2500  kubernetes  apps/v1:Deployment  kcl-vault-agent-dev[0]  Create\n      * \u2514\u2500  kubernetes   v1:ServiceAccount   kcl-vault-agent-sa[0]  Create\n\nStart applying diffs......\n SUCCESS  Creating Namespace/kcl-vault-agent\n SUCCESS  Creating Deployment/kcl-vault-agent-dev\n SUCCESS  Creating ServiceAccount/kcl-vault-agent-sa\nCreating ServiceAccount/kcl-vault-agent-sa [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e09\u4e2a\u8d44\u6e90\u5df2\u5168\u90e8\u4e0b\u53d1\uff0cDeployment \u8fd8\u9700\u8981\u521b\u5efa ReplicaSet \u548c Pod\uff0c\u5e76\u4e14 Pod \u9700\u8981\u4e00\u5b9a\u7684\u65f6\u95f4\u542f\u52a8\u3002"),(0,l.kt)("p",{parentName:"div"},"\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get po -n kcl-vault-agent")," \u786e\u5b9a Pod \u8fdb\u5165\u5230 ",(0,l.kt)("em",{parentName:"p"},"Running")," \u72b6\u6001\uff0c\u5e76\u4e14\u5df2\u7ecf\u51c6\u5907\u5c31\u7eea\uff082/2\uff09\u3002"))),(0,l.kt)("h3",{id:"42-\u9a8c\u8bc1\u7ed3\u679c"},"4.2 \u9a8c\u8bc1\u7ed3\u679c"),(0,l.kt)("h4",{id:"421-\u975e\u683c\u5f0f\u5316\u8f93\u51fa"},"4.2.1 \u975e\u683c\u5f0f\u5316\u8f93\u51fa"),(0,l.kt)("p",null,"1\u3001\u68c0\u67e5\u7ed3\u679c\u673a\u5bc6\u4fe1\u606f\u6ce8\u5165\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl exec -n kcl-vault \\\n    $(kubectl get pod -n kcl-vault-agent -l app=kcl-vault-agent-test -o jsonpath="{.items[0].metadata.name}") \\\n    --container kcl-vault-agent-test -- cat /vault/secrets/database-config.txt\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"data: map[password:db-secret-password username:db-readonly-username]\nmetadata: map[created_time:2022-03-13T08:40:02.1133715Z custom_metadata:<nil> deletion_time: destroyed:false version:1]\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u672a\u683c\u5f0f\u5316\u7684\u6570\u636e\u5e93\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u8fd9\u4e5f\u662f",(0,l.kt)("a",{parentName:"p",href:"#set-secret-data"},"\u914d\u7f6e\u673a\u5bc6\u6570\u636e"),"\u5c0f\u8282\u914d\u7f6e\u7684\u5185\u5bb9\u3002"),(0,l.kt)("h4",{id:"422-\u683c\u5f0f\u5316\u8f93\u51fa"},"4.2.2 \u683c\u5f0f\u5316\u8f93\u51fa"),(0,l.kt)("p",null,"\u6ca1\u6709\u683c\u5f0f\u5316\u7684\u6570\u636e\u663e\u7136\u662f\u4e0d\u5408\u7406\u7684\uff0c\u7ed9\u4e1a\u52a1\u5e94\u7528\u5728\u8bfb\u53d6\u914d\u7f6e\u65b9\u9762\u4e5f\u6dfb\u52a0\u4e86\u4e0d\u5fc5\u8981\u7684\u969c\u788d\u3002\n\u6570\u636e\u683c\u5f0f\u5316\uff0cVault \u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e9b",(0,l.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/agent/template"},"\u6a21\u677f\u8bf4\u660e"),"\u3002\n\u5728\u672c\u4f8b\u5b50\u4e2d\uff0c\u53ea\u9700\u8981\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"main.k")," \u4e2d\u88ab\u6ce8\u91ca\u7684\u90e8\u5206\uff0c\u518d\u6b21\u4e0b\u53d1\u914d\u7f6e\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u5c55\u793a\u7684\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"main.k")," \u4e2d\u7684\u90e8\u5206\u914d\u7f6e\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'podMetadata = apis.ObjectMeta {\n        annotations = {\n            "vault.hashicorp.com/agent-inject" = "true"\n            "vault.hashicorp.com/role" = "kcl-vault-agent-role"\n            "vault.hashicorp.com/agent-inject-secret-database-config.txt" = "internal/data/database/config"\n            "vault.hashicorp.com/agent-inject-status" = "update"\n            "vault.hashicorp.com/agent-inject-template-database-config.txt" = """\\\n{{- with secret "internal/data/database/config" -}}\npostgresql://{{ .Data.data.username }}:{{ .Data.data.password }}@postgres:5432/wizard\n{{- end -}}"""\n')),(0,l.kt)("p",null,"\u91cd\u65b0\u4e0b\u53d1\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply --yes=true\n")),(0,l.kt)("p",null,"\u5f85 Deployment \u6eda\u52a8\u66f4\u65b0\u5b8c\u6210\u540e\uff0c\u68c0\u67e5\u673a\u5bc6\u6570\u636e\u6ce8\u5165\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl exec -n kcl-vault-agent \\\n    $(kubectl get pod -n kcl-vault-agent -l app=kcl-vault-agent-test -o jsonpath="{.items[0].metadata.name}") \\\n    --container kcl-vault-agent-test -- cat /vault/secrets/database-config.txt\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"postgresql://db-readonly-username:db-secret-password@postgres:5432/wizard\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u4e0d\u4ec5\u6210\u529f\u6ce8\u5165\u4e86\u673a\u5bc6\u6570\u636e\uff0c\u800c\u4e14\u6309\u7167 Pod \u6a21\u677f\u4e2d\u7684 Annotation \u5b57\u6bb5\u6307\u5b9a\u7684\u683c\u5f0f\u6e32\u67d3\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u5230\u6b64\u6211\u4eec\u5c31\u5b8c\u6210\u4e86 KCL/Kusion \u96c6\u6210 Vault Agent Injector \u5b9e\u73b0\u4e86\u654f\u611f\u4fe1\u606f\u7684\u4f20\u8f93\u3002"))}c.isMDXComponent=!0}}]);