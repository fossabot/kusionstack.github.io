"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||s;return r?o.createElement(h,a(a({ref:t},l),{},{components:r})):o.createElement(h,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const s={},a="\u4f7f\u7528 Prometheus \u914d\u7f6e\u76d1\u63a7",i={unversionedId:"user_docs/guides/prometheus/monitoring",id:"user_docs/guides/prometheus/monitoring",title:"\u4f7f\u7528 Prometheus \u914d\u7f6e\u76d1\u63a7",description:"\u672c\u7bc7\u6307\u5357\u5411\u60a8\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 Kusion\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7ba1\u7406\u57fa\u4e8e Prometheus \u7684\u5e94\u7528\u76d1\u63a7\u914d\u7f6e\u3002\u672a\u6765\u6211\u4eec\u4f1a\u6dfb\u52a0\u66f4\u591a\u4e0e\u4e91\u670d\u52a1\u5546\u6574\u5408\u7684\u76d1\u63a7\u65b9\u6848\uff0c\u5305\u62ec AWS CloudWatch\uff0c Azure Monitor\u7b49\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/prometheus/monitoring.md",sourceDirName:"user_docs/guides/prometheus",slug:"/user_docs/guides/prometheus/monitoring",permalink:"/zh-CN/docs/user_docs/guides/prometheus/monitoring",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/prometheus/monitoring.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1694522671,formattedLastUpdatedAt:"2023\u5e749\u670812\u65e5",frontMatter:{},sidebar:"user_docs",previous:{title:"\u5dee\u5f02\u5316\u914d\u7f6e",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/differentiated-configuration"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh-CN/docs/user_docs/support/"}},p={},u=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u51c6\u5907 Prometheus \u670d\u52a1",id:"2-\u51c6\u5907-prometheus-\u670d\u52a1",level:2},{value:"\u5b89\u88c5 Prometheus operator<sup>3</sup>.",id:"\u5b89\u88c5-prometheus-operator3",level:3},{value:"\u786e\u8ba4 RBAC \u8bbe\u7f6e\u6b63\u786e",id:"\u786e\u8ba4-rbac-\u8bbe\u7f6e\u6b63\u786e",level:3},{value:"\u901a\u8fc7 operator \u914d\u7f6e Prometheus \u5b9e\u4f8b",id:"\u901a\u8fc7-operator-\u914d\u7f6e-prometheus-\u5b9e\u4f8b",level:3},{value:"\u66b4\u9732 Prometheus \u754c\u9762 (\u53ef\u9009)",id:"\u66b4\u9732-prometheus-\u754c\u9762-\u53ef\u9009",level:3},{value:"\u4f7f\u7528 kusion \u90e8\u7f72\u5305\u542b\u76d1\u63a7\u914d\u7f6e\u7684\u5e94\u7528",id:"\u4f7f\u7528-kusion-\u90e8\u7f72\u5305\u542b\u76d1\u63a7\u914d\u7f6e\u7684\u5e94\u7528",level:2},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:2}],l={toc:u};function m(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4f7f\u7528-prometheus-\u914d\u7f6e\u76d1\u63a7"},"\u4f7f\u7528 Prometheus \u914d\u7f6e\u76d1\u63a7"),(0,n.kt)("p",null,"\u672c\u7bc7\u6307\u5357\u5411\u60a8\u5c55\u793a\uff0c\u5982\u4f55\u4f7f\u7528 Kusion\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7ba1\u7406\u57fa\u4e8e Prometheus \u7684\u5e94\u7528\u76d1\u63a7\u914d\u7f6e\u3002\u672a\u6765\u6211\u4eec\u4f1a\u6dfb\u52a0\u66f4\u591a\u4e0e\u4e91\u670d\u52a1\u5546\u6574\u5408\u7684\u76d1\u63a7\u65b9\u6848\uff0c\u5305\u62ec AWS CloudWatch\uff0c Azure Monitor\u7b49\u3002"),(0,n.kt)("p",null,"\u672c\u7bc7\u793a\u4f8b\u4e2d\u5305\u542b\u4e86\u4ee5\u4e0bKubernetes\u8d44\u6e90\u7684\u521b\u5efa\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Namespace"),(0,n.kt)("li",{parentName:"ul"},"Deployment"),(0,n.kt)("li",{parentName:"ul"},"Service"),(0,n.kt)("li",{parentName:"ul"},"ServiceMonitor")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u8fd9\u7bc7\u6307\u5357\u5047\u8bbe\u60a8\u5df2\u719f\u6089Kubernetes\u7684\u4e00\u4e9b\u57fa\u672c\u6982\u5ff5\u3002\u5982\u679c\u4e0d\u719f\u6089\uff0c\u53ef\u4ee5\u524d\u5f80 Kubernetes \u548c Prometheus \u5b98\u65b9\u7f51\u7ad9\uff0c\u67e5\u770b\u76f8\u5173\u8bf4\u660e\uff1a"),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus Introduction")))),(0,n.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,n.kt)("p",null,"\u53ef\u53c2\u8003\uff1a",(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")),(0,n.kt)("p",null,"\u4e0b\u6587\u4e2d\u6848\u4f8b\u9700\u8981\u60a8\u5df2\u7ecf\u6b63\u786e\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"kusion init"),(0,n.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-application#2-%E5%88%9D%E5%A7%8B%E5%8C%96"},"\u521d\u59cb\u5316\u9879\u76ee"),"\u3002\u521d\u59cb\u5316\u4f1a\u81ea\u52a8\u751f\u6210\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"kcl.mod"),"\u6587\u4ef6\u4f4d\u4e8e\u5f53\u524d\u7684\u914d\u7f6e\u6808(Stack)\u4e0b\u3002"),(0,n.kt)("h2",{id:"2-\u51c6\u5907-prometheus-\u670d\u52a1"},"2. \u51c6\u5907 Prometheus \u670d\u52a1"),(0,n.kt)("p",null,"Prometheus \u53ef\u4ee5\u4ee5\u591a\u79cd\u65b9\u5f0f\u5728\u96c6\u7fa4\u5185\u63d0\u4f9b\u670d\u52a1\uff0c\u5305\u62ec\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4e00\u4e2aPrometheus operator\u5728\u96c6\u7fa4\u5185"),(0,n.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4e00\u4e2aPrometheus server\u5728\u96c6\u7fa4\u5185"),(0,n.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4e00\u4e2aPrometheus agent\u5728\u96c6\u7fa4\u5185\uff0c\u8fde\u63a5\u5230\u4e00\u4e2a\u8fdc\u7aef\u7684Prometheus server")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/issues/1547#issuecomment-401092041"},"Prometheus\u56e2\u961f\u5efa\u8bae"),"\u901a\u8fc7 Prometheus operator \u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"PodMonitor")," \u7684 Kubernetes CR \u6765\u7ba1\u7406\u76d1\u63a7\u6293\u53d6\u7684\u914d\u7f6e",(0,n.kt)("sup",null,"[2]"),"\u3002"),(0,n.kt)("p",null,"\u65e0\u8bba\u4f7f\u7528\u54ea\u79cd\u5b89\u88c5\u65b9\u5f0f\uff0cPrometheus \u670d\u52a1\u6bcf\u4e2a\u96c6\u7fa4\u53ea\u9700\u8981\u5b89\u88c5\u4e00\u6b21\u3002\u672c\u7bc7\u6307\u5357\u4f7f\u7528minikube\u96c6\u7fa4\u548cPrometheus operator\u4e3a\u6848\u4f8b\u3002"),(0,n.kt)("h3",{id:"\u5b89\u88c5-prometheus-operator3"},"\u5b89\u88c5 Prometheus operator",(0,n.kt)("sup",null,"[3]"),"."),(0,n.kt)("p",null,"\u8981\u5b8c\u6210\u672c\u7bc7\u4e2d\u7684\u6848\u4f8b\uff0c\u60a8\u53ea\u9700\u8981\u4e00\u4e2a\u8fd0\u884c\u4e2d\u7684 Prometheus operator\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"LATEST=$(curl -s https://api.github.com/repos/prometheus-operator/prometheus-operator/releases/latest | jq -cr .tag_name)\ncurl -sL https://github.com/prometheus-operator/prometheus-operator/releases/download/${LATEST}/bundle.yaml | kubectl create -f -\n")),(0,n.kt)("p",null,"\u4ee5\u4e0a\u547d\u4ee4\u4f1a\u5728\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\u4e2d\u5b89\u88c5\u6240\u6709\u9700\u8981\u7684 Kubernetes CRD \u548c Prometheus operator\u3002\u51e0\u5206\u949f\u4e4b\u5185\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u786e\u8ba4 Prometheus operator \u6b63\u5728\u8fd0\u884c\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl wait --for=condition=Ready pods -l  app.kubernetes.io/name=prometheus-operator -n default\n")),(0,n.kt)("h3",{id:"\u786e\u8ba4-rbac-\u8bbe\u7f6e\u6b63\u786e"},"\u786e\u8ba4 RBAC \u8bbe\u7f6e\u6b63\u786e"),(0,n.kt)("p",null,"\u5982\u679c\u5728\u96c6\u7fa4\u4e2d\u542f\u7528\u4e86 RBAC\uff0c\u5982\u4e0b RBAC \u8d44\u6e90\u9700\u8981\u88ab\u6b63\u786e\u521b\u5efa\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: prometheus\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: prometheus\nrules:\n- apiGroups: [""]\n  resources:\n  - nodes\n  - nodes/metrics\n  - services\n  - endpoints\n  - pods\n  verbs: ["get", "list", "watch"]\n- apiGroups: [""]\n  resources:\n  - configmaps\n  verbs: ["get"]\n- apiGroups:\n  - networking.k8s.io\n  resources:\n  - ingresses\n  verbs: ["get", "list", "watch"]\n- nonResourceURLs: ["/metrics"]\n  verbs: ["get"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: prometheus\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: prometheus\nsubjects:\n- kind: ServiceAccount\n  name: prometheus\n  namespace: default\n')),(0,n.kt)("h3",{id:"\u901a\u8fc7-operator-\u914d\u7f6e-prometheus-\u5b9e\u4f8b"},"\u901a\u8fc7 operator \u914d\u7f6e Prometheus \u5b9e\u4f8b"),(0,n.kt)("p",null,"\u5b8c\u6210 RBAC \u8bbe\u7f6e\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 operator \u76d1\u63a7\u7684 Kubernetes CR \u914d\u7f6e Prometheus \u5b9e\u4f8b\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"apiVersion: monitoring.coreos.com/v1\nkind: Prometheus\nmetadata:\n  name: prometheus\nspec:\n  serviceAccountName: prometheus\n  serviceMonitorNamespaceSelector: {}\n  serviceMonitorSelector: {}\n  podMonitorNamespaceSelector: {}\n  podMonitorSelector: {}\n  resources:\n    requests:\n      memory: 400Mi\n")),(0,n.kt)("p",null,"\u4ee5\u4e0a Prometheus \u5b9e\u4f8b\u4f1a\u8986\u76d6\u6574\u4e2a\u96c6\u7fa4\u5185\u6240\u6709\u547d\u540d\u7a7a\u95f4\u7684\u6240\u6709",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceMonitor"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"PodMonitor"),"\u8d44\u6e90\u3002"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u6309\u7167\u96c6\u7fa4\u7684\u89c4\u6a21\u9002\u5f53\u7684\u589e\u51cf requests \u548c limits\u3002"),(0,n.kt)("h3",{id:"\u66b4\u9732-prometheus-\u754c\u9762-\u53ef\u9009"},"\u66b4\u9732 Prometheus \u754c\u9762 (\u53ef\u9009)"),(0,n.kt)("p",null,"\u5f53\u4ee5\u4e0a Prometheus \u5b9e\u4f8b\u88ab\u521b\u5efa\u540e\uff0c\u60a8\u5e94\u8be5\u53ef\u4ee5\u770b\u89c1\u4e00\u4e2a\u540d\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"prometheus-operated"),"\u7684\u670d\u52a1\u88ab\u521b\u5efa\u51fa\u6765\uff1a\n",(0,n.kt)("img",{alt:"prometheus-operated",src:r(1512).Z,width:"631",height:"52"})),(0,n.kt)("p",null,"\u5728minikube\u4e0a, \u60a8\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u7aef\u53e3\u8f6c\u53d1\u4ece\u672c\u5730\u8bbf\u95ee\u8fd9\u4e2a Prometheus \u754c\u9762:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl port-forward svc/prometheus-operated 9099:9090\n")),(0,n.kt)("p",null,"\u60a8\u5e94\u5f53\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,n.kt)("inlineCode",{parentName:"p"},"localhost:9099"),"\u6765\u8bbf\u95ee Prometheus \u754c\u9762\uff1a\n",(0,n.kt)("img",{alt:"prometheus-portal",src:r(5443).Z,width:"2878",height:"1096"})),(0,n.kt)("p",null,"\u5982\u679c\u4e0d\u5728minikube\u4e0a\u8fd0\u884c\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u522b\u7684\u65b9\u5f0f\u66b4\u9732 Prometheus \u7684\u754c\u9762\uff0c\u6bd4\u5982\u901a\u8fc7 Ingress Controller\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528-kusion-\u90e8\u7f72\u5305\u542b\u76d1\u63a7\u914d\u7f6e\u7684\u5e94\u7528"},"\u4f7f\u7528 kusion \u90e8\u7f72\u5305\u542b\u76d1\u63a7\u914d\u7f6e\u7684\u5e94\u7528"),(0,n.kt)("p",null,"\u5230\u8fd9\u4e00\u6b65\u65f6\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u96c6\u7fa4\u5c42\u9762\u9700\u8981\u7684\u6240\u6709\u51c6\u5907\u5de5\u4f5c\uff01\u4efb\u4f55\u4e4b\u540e\u901a\u8fc7 kusion \u90e8\u7f72\u7684\u5e94\u7528\u90fd\u53ef\u4ee5\u81ea\u52a8\u521b\u5efa\u76d1\u63a7\u76f8\u5173\u7684\u8d44\u6e90\uff0c\u53ea\u8981\u60a8\u5728\u5e94\u7528\u914d\u7f6e(AppConfiguration)\u4e2d\u58f0\u660e\u4e86\u9700\u8981\u901a\u8fc7 kusion \u7ba1\u7406\u76d1\u63a7\u914d\u7f6e\u3002"),(0,n.kt)("p",null,"AppConfiguration\u4e2d\uff0c\u76d1\u63a7\u914d\u7f6e\u662f\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"monitoring"),"\u5b57\u6bb5\u7ba1\u7406\u3002\u4e0b\u6587\u4f1a\u63d0\u4f9b\u4e00\u4e2a\u5b8c\u6574\u7684\uff0c\u53ef\u90e8\u7f72\u7684\u793a\u4f8b\uff1a"),(0,n.kt)("p",null,"\u6211\u4eec\u8fd9\u91cc\u4f7f\u7528\u4e86\u4e00\u4e2a\u65b0\u7684\u63d0\u4f9b\u4e86 Prometheus \u76d1\u63a7\u6570\u636e\u7684\u5e94\u7528\u955c\u50cf ",(0,n.kt)("inlineCode",{parentName:"p"},"quay.io/brancz/prometheus-example-app"),":"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"helloworld/dev/main.k"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.monitoring as m\nimport catalog.models.schema.v1.workload.network as n\n\nhelloworld: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "monitoring-sample-app": c.Container {\n                image: "quay.io/brancz/prometheus-example-app:v0.3.0"\n            }\n        }\n        ports: [\n            n.Port {\n                port: 8080\n            }\n        ]\n    }\n    monitoring: m.Prometheus{\n        interval:       "30s"\n        timeout:        "15s"\n        path:           "/metrics"\n        scheme:         "http"\n    }\n}\n')),(0,n.kt)("p",null,"\u4ee5\u4e0a\u8fd9\u4efd\u914d\u7f6e\u5305\u542b\u4e86\u4e00\u4e2a Service \u7c7b\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5bf9\u5916\u66b4\u97328080\u7684\u7aef\u53e3\uff0c\u5e76\u4e14\u5e0c\u671b Prometheus \u6bcf30\u79d2\u6293\u53d6\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"/metrics"),"\u63a5\u53e3\u7684\u76d1\u63a7\u6570\u636e\u3002"),(0,n.kt)("p",null,"\u6267\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"kusion apply"),"\u4f1a\u521b\u5efa\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"Namespace"),"\uff0c\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"Deployment"),"\uff0c\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"Service"),"\u548c\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceMonitor"),"\uff1a\n",(0,n.kt)("img",{alt:"kusion-apply-with-monitor",src:r(448).Z,width:"705",height:"224"})),(0,n.kt)("p",null,"\u7ee7\u7eed\u6267\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"kusion apply"),":\n",(0,n.kt)("img",{alt:"kusion-apply-success",src:r(6816).Z,width:"1047",height:"564"})),(0,n.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u9a8c\u8bc1",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceMonitor"),"\u88ab\u6210\u529f\u521b\u5efa:\n",(0,n.kt)("img",{alt:"service-monitor",src:r(8232).Z,width:"693",height:"463"})),(0,n.kt)("p",null,"\u51e0\u79d2\u4e2d\u4e4b\u5185\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 Prometheus \u7684\u524d\u7aef\u754c\u9762\u770b\u5230\u6211\u4eec\u521a\u521a\u90e8\u7f72\u7684\u670d\u52a1\u88ab Prometheus \u6355\u6349\u5230\u5e76\u7eb3\u5165\u76d1\u63a7\u4e86\uff1a\n",(0,n.kt)("img",{alt:"prometheus-targets",src:r(7594).Z,width:"2880",height:"1636"})),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u7b80\u5355\u7684 query \u67e5\u8be2 Prometheus \u6293\u53d6\u7684\u76d1\u63a7\u914d\u7f6e\uff1a\n",(0,n.kt)("img",{alt:"prometheus-simple-query",src:r(7695).Z,width:"2880",height:"1634"})),(0,n.kt)("p",null,"\u66f4\u591a\u5173\u4e8e PromQL \u7684\u4fe1\u606f, \u53ef\u4ee5\u5728",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"\u8fd9\u91cc"),(0,n.kt)("sup",null,"[4]")," \u67e5\u770b\u3002"),(0,n.kt)("h2",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Prometheus \u6587\u6863: ",(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/overview/"},"https://prometheus.io/docs/introduction/overview/")),(0,n.kt)("li",{parentName:"ol"},"Prometheus team \u5efa\u8bae: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator/issues/1547#issuecomment-446691500"},"https://github.com/prometheus-operator/prometheus-operator/issues/1547#issuecomment-446691500")),(0,n.kt)("li",{parentName:"ol"},"Prometheus operator getting started \u6587\u6863: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md"},"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md")),(0,n.kt)("li",{parentName:"ol"},"PromQL \u57fa\u7840: ",(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"https://prometheus.io/docs/prometheus/latest/querying/basics/"))))}m.isMDXComponent=!0},6816:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/kusion-apply-success-52d04db670fd184959c3ea5c9e54f69d.png"},448:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/kusion-apply-with-monitor-d27cd1443e1a324d514983d52c055b15.png"},1512:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/prometheus-operated-4cf8308703e4ec9d06a5078bbceb8d5d.png"},5443:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/prometheus-portal-b60d8654c309e675fc04f1e74c5c127a.png"},7695:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/prometheus-simple-query-60205589e762105ebc850e70d8ea7b56.png"},7594:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/prometheus-targets-05964bad58af16f2e02c57cafa8565e7.png"},8232:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/service-monitor-2374625bfd1180a978a2be50ad4648ce.png"}}]);