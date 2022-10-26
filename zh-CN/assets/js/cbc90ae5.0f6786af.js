"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,g=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var m=2;m<o;m++)s[m]=n[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},s="\u5feb\u901f\u5f00\u59cb",l={unversionedId:"user_docs/guides/prometheus/getting-started",id:"user_docs/guides/prometheus/getting-started",title:"\u5feb\u901f\u5f00\u59cb",description:"Prometheus Operator \u7684\u76ee\u6807\u662f\u5c3d\u53ef\u80fd\u7b80\u5355\u5730\u5728 Kubernetes \u4e0a\u8fd0\u884c Prometheus\uff0c\u540c\u65f6\u4fdd\u7559 Kubernetes \u539f\u751f\u914d\u7f6e\u9009\u9879\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/prometheus/getting-started.md",sourceDirName:"user_docs/guides/prometheus",slug:"/user_docs/guides/prometheus/getting-started",permalink:"/zh-CN/docs/user_docs/guides/prometheus/getting-started",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/prometheus/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1666755388,formattedLastUpdatedAt:"2022/10/26",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u4f7f\u7528 ArgoCD \u8fdb\u884c\u6f02\u79fb\u68c0\u67e5",permalink:"/zh-CN/docs/user_docs/guides/argocd/drift-detection-by-argocd"},next:{title:"\u654f\u611f\u4fe1\u606f\u7ba1\u7406",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/"}},i={},m=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u914d\u7f6e\u8be6\u60c5",id:"\u914d\u7f6e\u8be6\u60c5",level:2},{value:"\u914d\u7f6e Alertmanager",id:"\u914d\u7f6e-alertmanager",level:3},{value:"\u914d\u7f6e Prometheus",id:"\u914d\u7f6e-prometheus",level:3},{value:"\u4e00\u952e\u90e8\u7f72",id:"\u4e00\u952e\u90e8\u7f72",level:2}],p={toc:m};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,r.kt)("p",null,"Prometheus Operator \u7684\u76ee\u6807\u662f\u5c3d\u53ef\u80fd\u7b80\u5355\u5730\u5728 Kubernetes \u4e0a\u8fd0\u884c Prometheus\uff0c\u540c\u65f6\u4fdd\u7559 Kubernetes \u539f\u751f\u914d\u7f6e\u9009\u9879\u3002"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u5411\u4f60\u5c55\u793a\u5982\u4f55\u4e00\u952e Alertmanager \u96c6\u7fa4\u5e76\u96c6\u6210 Prometheus \u5b9e\u4f8b\u3002"),(0,r.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,r.kt)("p",null,"1\u3001\u5b89\u88c5 Kusion \u5de5\u5177\u94fe"),(0,r.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 kusion \u7684\u5b98\u65b9\u5b89\u88c5\u5de5\u5177 ",(0,r.kt)("inlineCode",{parentName:"p"},"kusionup"),"\uff0c\u53ef\u5b9e\u73b0 kusion \u591a\u7248\u672c\u7ba1\u7406\u7b49\u5173\u952e\u80fd\u529b\u3002\u8be6\u60c5\u4fe1\u606f\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"\u4e0b\u8f7d\u548c\u5b89\u88c5"),"\u3002"),(0,r.kt)("p",null,"2\u3001\u4e0b\u8f7d\u5f00\u6e90 Konfig \u5927\u5e93"),(0,r.kt)("p",null,"\u5728\u672c\u7bc7\u6307\u5357\u4e2d\uff0c\u9700\u8981\u7528\u5230\u90e8\u5206\u5df2\u7ecf\u62bd\u8c61\u5b9e\u73b0\u7684 KCL \u6a21\u578b\uff0c\u6709\u5173 KCL \u8bed\u8a00\u7684\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/lang/lang/tour"},"Tour of KCL"),"\u3002"),(0,r.kt)("p",null,"\u4ed3\u5e93\u5730\u5740\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"https://github.com/KusionStack/konfig.git")),(0,r.kt)("p",null,"3\u3001\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4"),(0,r.kt)("p",null,"\u5fc5\u987b\u8981\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u540c\u65f6 Kubernetes \u96c6\u7fa4\u6700\u597d\u5e26\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\n\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," \u6784\u5efa\u4e00\u4e2a\u4f60\u81ea\u5df1\u7684\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"4\u3001\u5b89\u88c5 Prometheus Operator"),(0,r.kt)("p",null,"Prometheus Operator \u5b89\u88c5\u5f88\u7b80\u5355\uff0c\u53ea\u9700\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f bundle.yaml\n")),(0,r.kt)("p",null,"\u8be6\u89c1 Prometheus Operator ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator#quickstart"},"\u5feb\u901f\u5f00\u59cb"),"\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e\u8be6\u60c5"},"\u914d\u7f6e\u8be6\u60c5"),(0,r.kt)("p",null,"\u5728 konfig \u5927\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-install")," \u9879\u76ee\u4e2d\uff0c\u4fdd\u5b58\u4e86\u8bbe\u7f6e Prometheus \u548c Alertmanager \u7684\u5b8c\u6574\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alertmanager \u96c6\u7fa4"),(0,r.kt)("li",{parentName:"ul"},"AlertmanagerConfig"),(0,r.kt)("li",{parentName:"ul"},"Alertmanager \u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"Prometheus \u96c6\u7fa4"),(0,r.kt)("li",{parentName:"ul"},"Prometheus \u4f9d\u8d56\u7684 RBAC"),(0,r.kt)("li",{parentName:"ul"},"Prometheus \u670d\u52a1")),(0,r.kt)("p",null,"\u60f3\u8981\u4f53\u9a8c\u5feb\u901f\u90e8\u7f72\u7ed3\u679c\uff0c\u53ef\u76f4\u63a5\u8df3\u5230",(0,r.kt)("a",{parentName:"p",href:"#%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2"},"\u4e00\u952e\u90e8\u7f72"),"\u5c0f\u8282\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e-alertmanager"},"\u914d\u7f6e Alertmanager"),(0,r.kt)("p",null,"Alertmanager \u9ed8\u8ba4\u542f\u52a8\u662f\u6309\u7167\u6700\u4f4e\u914d\u7f6e\uff0c\u8fd9\u5e76\u6ca1\u4ec0\u4e48\u7528\u5904\uff0c\u56e0\u4e3a\u5b83\u5728\u63a5\u6536\u62a5\u8b66\u65f6\u4e0d\u4f1a\u53d1\u9001\u4efb\u4f55\u901a\u77e5\u3002"),(0,r.kt)("p",null,"\u4f60\u6709 3 \u79cd\u65b9\u5f0f\u6765\u63d0\u4f9b ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/configuration/"},"Alertmanager \u914d\u7f6e"),"\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5b58\u50a8\u5728 Kubernetes \u5bc6\u94a5\u4e2d\u7684\u672c\u673a Alertmanager \u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfiguration")," \u5728\u5b9a\u4e49\u4e3b Alertmanager \u914d\u7f6e\u7684\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u5f15\u7528 AlertmanagerConfig \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfigSelector")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfigNamespaceSelector")," \u544a\u8bc9 Operator \u5e94\u8be5\u9009\u62e9\u54ea\u4e9b AlertmanagerConfigs \u5bf9\u8c61\u5e76\u5c06\u5176\u4e0e\u4e3b Alertmanager \u914d\u7f6e\u5408\u5e76\u3002")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/tree/main/base/examples/monitoring/prometheus-install"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install"))," \u9879\u76ee\u4e2d\u4f7f\u7528\u7684\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u3002"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ee5\u4e0b\u662f AlertmanagerConfig \u914d\u7f6e\uff0cAlertmanager \u5c06\u901a\u77e5\u53d1\u9001\u5230\u865a\u6784\u7684 webhook \u670d\u52a1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager_config: monitoringv1alpha1.AlertmanagerConfig{\n    metadata = {\n        name = "config-example"\n        namespace = _common_namespace\n        labels = {\n            "alertmanagerConfig" = "example"\n        }\n    }\n    spec = {\n        route = {\n            groupBy = ["job"]\n            groupWait = "30s"\n            groupInterval = "5m"\n            repeatInterval = "12h"\n            receiver = "webhook"\n        }\n        receivers = [\n            {\n                name = "webhook"\n                webhookConfigs = [\n                    {\n                        url = "http://example.com/"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e 3 \u4e2a\u526f\u672c\u7684 Alertmanager \u96c6\u7fa4\uff0c\u5e76\u5f15\u7528 AlertmanagerConfig \u5bf9\u8c61\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager: monitoringv1.Alertmanager{\n    metadata = {\n        name = "example"\n        namespace = "default"\n    }\n    spec = {\n        replicas = 3\n        # \u4f7f\u7528 AlertmanagerConfig \u4f5c\u4e3a\u5168\u5c40\u914d\u7f6e\n        alertmanagerConfiguration = {\n            name = _alertmanager_config.metadata.name\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u516c\u5f00 Alertmanager \u670d\u52a1\uff0c\u7528\u4e8e\u88ab\u540e\u7eed\u7684 Prometheus \u5b9e\u4f8b\u96c6\u6210\u3002\n\u521b\u5efa Kubernetes Service\uff0c\u76d1\u542c\u76ee\u6807\u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"9093"),"\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager_svc: corev1.Service{\n    metadata = {\n        name = "alertmanager-example"\n        namespace = "default"\n    }\n    spec = {\n        selector = {\n            "alertmanager" = _alertmanager.metadata.name\n        }\n        ports = [\n            {\n                name = "web"\n                port = 9093\n                targetPort = "web"\n            }\n            {\n                name = "reloader-web"\n                port = 8080\n                targetPort = "reloader-web"\n            }\n        ]\n        sessionAffinity = "ClientIP"\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8be6\u7ec6\u914d\u7f6e\uff0c\u8bf7\u67e5\u770b\u6e90\u7801\u6587\u4ef6: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/prod/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/prod/main.k")),"\u3002"))),(0,r.kt)("p",null,"\u6b64 Alertmanager \u96c6\u7fa4\u73b0\u5728\u529f\u80fd\u9f50\u5168\u4e14\u9ad8\u53ef\u7528\uff0c\u4f46\u4e0d\u4f1a\u9488\u5bf9\u5b83\u89e6\u53d1\u4efb\u4f55\u8b66\u62a5\u3002\u8fd9\u662f\u56e0\u4e3a\u4f60\u8fd8\u6ca1\u6709\u8bbe\u7f6e Prometheus \u5e94\u7528\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e-prometheus"},"\u914d\u7f6e Prometheus"),(0,r.kt)("p",null,"\u5728\u521b\u5efa Prometheus \u4e4b\u524d\uff0c\u5fc5\u987b\u5148\u4e3a Prometheus \u670d\u52a1\u5e10\u6237\u521b\u5efa RBAC \u89c4\u5219\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prometheus ClusterRole \u914d\u7f6e\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus_clusterrole: rbac.ClusterRole {\n    metadata = {\n        name = "prometheus"\n        namespace = "default"\n    }\n    rules = [\n        {\n            apiGroups = [""]\n            resources = ["nodes", "nodes/metrics", "services", "endpoints", "pods"]\n            verbs = ["get", "list", "watch"]\n        }\n        {\n            apiGroups = [""]\n            resources = ["configmaps"]\n            verbs = ["get"]\n        }\n        {\n            apiGroups = ["networking.k8s.io"]\n            resources = ["ingresses"]\n            verbs = ["get", "list", "watch"]\n        }\n        {\n            nonResourceURLs = ["/metrics"]\n            verbs = ["get"]\n        }\n    ]\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"RBAC \u7684\u5b8c\u6574\u914d\u7f6e\uff0c\u8bf7\u67e5\u770b\u6e90\u7801\u6587\u4ef6\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/base/base.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/base/base.k")),"\u3002"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa Prometheus\uff0c\u5b83\u5c06\u5411 Alertmanger \u96c6\u7fa4\u53d1\u9001\u8b66\u62a5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus: monitoringv1.Prometheus{\n    metadata = {\n        name = "example"\n        namespace = "default"\n    }\n    spec = {\n        # \u6307\u5b9a ServiceAccount\n        serviceAccountName = "prometheus"\n        replicas = 2\n        # ruleSelector \u4e3a\u7a7a\uff0c\u8868\u793a\u4e0d\u9009\u62e9\u4efb\u4f55 PrometheusRule\u3002\n        ruleSelector = {\n            matchLabels = {\n                "role" = "alert-rules"\n                "prometheus" = "example"\n            }\n        }\n        serviceMonitorSelector = {\n            matchLabels = {\n                "prometheus" = "example"\n            }\n        }\n        # \u901a\u8fc7 Alertmanager \u7684\u516c\u5f00\u7684 Service\uff0c\u914d\u7f6e Alertmanager\n        alerting = {\n            alertmanagers = [\n                {\n                    name = _alertmanager_svc.metadata.name\n                    namespace = _alertmanager_svc.metadata.namespace\n                    port = _alertmanager_svc.spec.ports[0].name\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6700\u540e\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9a8c\u8bc1\uff0c\u987a\u4fbf\u516c\u5f00 Prometheus Admin API\u3002\n\u521b\u5efa Kubernetes Service\uff0c\u76d1\u542c\u76ee\u6807\u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"9090"),"\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus_svc: corev1.Service{\n    metadata = {\n        name = "prometheus-example"\n        namespace = "default"\n    }\n    spec = {\n        selector = {\n            "prometheus" = _prometheus.metadata.name\n        }\n        ports = [\n            {\n                name = "web"\n                port = 9090\n                targetPort = "web"\n            }\n            {\n                name = "reloader-web"\n                port = 8080\n                targetPort = "reloader-web"\n            }\n        ]\n        sessionAffinity = "ClientIP"\n    }\n}\n')),(0,r.kt)("p",null,"Prometheus admin API \u5141\u8bb8\u8bbf\u95ee\u5220\u9664\u67d0\u4e2a\u65f6\u95f4\u8303\u56f4\u5185\u7684\u7cfb\u5217\u3001\u6e05\u7406\u5893\u7891\u3001\u6355\u83b7\u5feb\u7167\u7b49\u3002\n\u6709\u5173 admin API \u7684\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/api/#tsdb-admin-apis"},"Prometheus \u5b98\u65b9\u6587\u6863"),"\u4e2d\u627e\u5230\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8be6\u7ec6\u914d\u7f6e\uff0c\u8bf7\u67e5\u770b\u6e90\u7801\u6587\u4ef6: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/prod/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/prod/main.k")),"\u3002"))),(0,r.kt)("h2",{id:"\u4e00\u952e\u90e8\u7f72"},"\u4e00\u952e\u90e8\u7f72"),(0,r.kt)("p",null,"\u76ee\u524d\u5df2\u7ecf\u5b8c\u6210\u6240\u6709\u76d1\u63a7\u62a5\u8b66\u76f8\u5173\u914d\u7f6e\uff0c\u73b0\u5728\u5f00\u59cb\u4e00\u952e\u90e8\u7f72\u3002\u9996\u5148\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-install")," stack \u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd base/examples/monitoring/prometheus-install/prod\n")),(0,r.kt)("p",null,"\u518d\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2714\ufe0e  Compiling in stack prod...                                                                                                                            \n\nStack: prod  ID                                                                        Action  \n * \u251c\u2500        rbac.authorization.k8s.io/v1:ClusterRole:default:prometheus               Create\n * \u251c\u2500        monitoring.coreos.com/v1:Alertmanager:default:example                     Create  \n * \u251c\u2500        monitoring.coreos.com/v1alpha1:AlertmanagerConfig:default:config-example  Create\n * \u251c\u2500        monitoring.coreos.com/v1:Prometheus:default:example                       Create\n * \u251c\u2500        rbac.authorization.k8s.io/v1:ClusterRoleBinding:default:prometheus        Create\n * \u251c\u2500        v1:ServiceAccount:default:prometheus                                      Create\n * \u251c\u2500        v1:Service:default:alertmanager-example                                   Create\n * \u2514\u2500        v1:Service:default:prometheus-example                                     Create\n\n? Do you want to apply these diffs?  [Use arrows to move, type to filter]\n  yes\n> details\n  no\n")),(0,r.kt)("p",null,"\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"yes"),"\uff0c\u5f00\u59cb\u90e8\u7f72\u3002\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u5c06\u672c\u5730\u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"30900")," \u8f6c\u53d1\u5230 k8s Service \u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"9090"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/prometheus-example 30900:9090\n")),(0,r.kt)("p",null,"\u7136\u540e\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:30900/"},"http://127.0.0.1:30900"),"\uff0c\u8bbf\u95ee Prometheus \u754c\u9762\uff0c\u8fdb\u5165 \u201cStatus > Runtime & Build Information\u201d \u9875\u9762\uff0c\u68c0\u67e5 Prometheus \u662f\u5426\u53d1\u73b0\u4e86 3 \u4e2a Alertmanager \u793a\u4f8b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(57650).Z,width:"3582",height:"1964"})))}u.isMDXComponent=!0},57650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alertmanager-7f83c7f4987e6325bec3cd568e6cee4d.jpg"}}]);