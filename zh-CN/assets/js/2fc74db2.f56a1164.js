"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},l="\u8bb0\u5f55\u4e0e\u544a\u8b66",s={unversionedId:"user_docs/guides/prometheus/recording-and-alerting",id:"user_docs/guides/prometheus/recording-and-alerting",title:"\u8bb0\u5f55\u4e0e\u544a\u8b66",description:"\u672c\u6307\u5357\u5c06\u5411\u4f60\u5c55\u793a\u5982\u4f55\u57fa\u4e8e Prometheus Operator \u4e00\u952e\u90e8\u7f72 Alertmanager \u96c6\u7fa4\u5e76\u96c6\u6210 Prometheus\uff0c\u5e76\u4f7f\u7528 PrometheusRules \u8bb0\u5f55\u6307\u6807\u6570\u636e\u548c\u63a8\u9001\u544a\u8b66\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/prometheus/recording-and-alerting.md",sourceDirName:"user_docs/guides/prometheus",slug:"/user_docs/guides/prometheus/recording-and-alerting",permalink:"/zh-CN/docs/user_docs/guides/prometheus/recording-and-alerting",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/prometheus/recording-and-alerting.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1690428760,formattedLastUpdatedAt:"2023\u5e747\u670827\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u4f7f\u7528 ArgoCD \u8fdb\u884c\u6f02\u79fb\u68c0\u67e5",permalink:"/zh-CN/docs/user_docs/guides/argocd/drift-detection-by-argocd"},next:{title:"\u6258\u7ba1\u5e76\u53d6\u56de\u654f\u611f\u4fe1\u606f",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets"}},p={},i=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u51c6\u5907\u5f00\u59cb",id:"\u51c6\u5907\u5f00\u59cb",level:2},{value:"\u7ec4\u4ef6\u90e8\u7f72",id:"\u7ec4\u4ef6\u90e8\u7f72",level:2},{value:"\u914d\u7f6e Alertmanager",id:"\u914d\u7f6e-alertmanager",level:3},{value:"\u914d\u7f6e Prometheus",id:"\u914d\u7f6e-prometheus",level:3},{value:"\u4e00\u952e\u90e8\u7f72",id:"\u4e00\u952e\u90e8\u7f72",level:3},{value:"PrometheusRule",id:"prometheusrule",level:2},{value:"\u8bb0\u5f55\u89c4\u5219",id:"\u8bb0\u5f55\u89c4\u5219",level:3},{value:"\u62d3\u5c55\u9605\u8bfb",id:"\u62d3\u5c55\u9605\u8bfb",level:4},{value:"\u62a5\u8b66\u89c4\u5219",id:"\u62a5\u8b66\u89c4\u5219",level:3}],m={toc:i};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8bb0\u5f55\u4e0e\u544a\u8b66"},"\u8bb0\u5f55\u4e0e\u544a\u8b66"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u5411\u4f60\u5c55\u793a\u5982\u4f55\u57fa\u4e8e Prometheus Operator \u4e00\u952e\u90e8\u7f72 Alertmanager \u96c6\u7fa4\u5e76\u96c6\u6210 Prometheus\uff0c\u5e76\u4f7f\u7528 PrometheusRules \u8bb0\u5f55\u6307\u6807\u6570\u636e\u548c\u63a8\u9001\u544a\u8b66\u3002"),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"Prometheus \u662f\u4e00\u4e2a\u5f00\u6e90\u7cfb\u7edf\u76d1\u63a7\u548c\u8b66\u62a5\u5de5\u5177\u5305\u3002\u5b83\u5c06\u5176\u6307\u6807\u6536\u96c6\u5e76\u5b58\u50a8\u4e3a\u65f6\u95f4\u5e8f\u5217\u6570\u636e\uff0c\u5373\u6307\u6807\u4fe1\u606f\u4e0e\u8bb0\u5f55\u5b83\u7684\u65f6\u95f4\u6233\u4e00\u8d77\u5b58\u50a8\uff0c\u4ee5\u53ca\u79f0\u4e3a\u6807\u7b7e\u7684\u53ef\u9009\u952e\u503c\u5bf9\u3002"),(0,r.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86 Prometheus \u7684\u67b6\u6784\u53ca\u5176\u4e00\u4e9b\u751f\u6001\u7cfb\u7edf\u7ec4\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(63191).Z,width:"1351",height:"811"})),(0,r.kt)("p",null,"Prometheus \u4ece\u68c0\u6d4b\u4f5c\u4e1a\u4e2d\u76f4\u63a5\u6216\u901a\u8fc7\u4e2d\u95f4\u63a8\u9001\u7f51\u5173\u4ece\u77ed\u671f\u4f5c\u4e1a\u4e2d\u6293\u53d6\u6307\u6807\u3002\u5b83\u5728\u672c\u5730\u5b58\u50a8\u6240\u6709\u6293\u53d6\u7684\u6837\u672c\uff0c\u5e76\u5bf9\u8fd9\u4e9b\u6570\u636e\u8fd0\u884c\u89c4\u5219\uff0c\u4ee5\u4ece\u73b0\u6709\u6570\u636e\u805a\u5408\u548c\u8bb0\u5f55\u65b0\u7684\u65f6\u95f4\u5e8f\u5217\u6216\u751f\u6210\u8b66\u62a5\u3002Grafana \u6216\u5176\u4ed6 API \u4f7f\u7528\u8005\u53ef\u7528\u4e8e\u53ef\u89c6\u5316\u6536\u96c6\u7684\u6570\u636e\u3002"),(0,r.kt)("h2",{id:"\u51c6\u5907\u5f00\u59cb"},"\u51c6\u5907\u5f00\u59cb"),(0,r.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,r.kt)("p",null,"1\u3001\u5b89\u88c5 Kusion \u5de5\u5177\u94fe"),(0,r.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 kusion \u7684\u5b98\u65b9\u5b89\u88c5\u5de5\u5177 ",(0,r.kt)("inlineCode",{parentName:"p"},"kusionup"),"\uff0c\u53ef\u5b9e\u73b0 kusion \u591a\u7248\u672c\u7ba1\u7406\u7b49\u5173\u952e\u80fd\u529b\u3002\u8be6\u60c5\u4fe1\u606f\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"\u4e0b\u8f7d\u548c\u5b89\u88c5"),"\u3002"),(0,r.kt)("p",null,"2\u3001\u4e0b\u8f7d\u5f00\u6e90 Konfig \u5927\u5e93"),(0,r.kt)("p",null,"\u5728\u672c\u7bc7\u6307\u5357\u4e2d\uff0c\u9700\u8981\u7528\u5230\u90e8\u5206\u5df2\u7ecf\u62bd\u8c61\u5b9e\u73b0\u7684 KCL \u6a21\u578b\uff0c\u6709\u5173 KCL \u8bed\u8a00\u7684\u4ecb\u7ecd\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"Tour of KCL"),"\u3002"),(0,r.kt)("p",null,"\u4ed3\u5e93\u5730\u5740\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"https://github.com/KusionStack/konfig.git")),(0,r.kt)("p",null,"3\u3001\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4"),(0,r.kt)("p",null,"\u5fc5\u987b\u8981\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u540c\u65f6 Kubernetes \u96c6\u7fa4\u6700\u597d\u5e26\u6709 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\n\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u96c6\u7fa4\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," \u6784\u5efa\u4e00\u4e2a\u4f60\u81ea\u5df1\u7684\u96c6\u7fa4\u3002"),(0,r.kt)("p",null,"4\u3001\u5b89\u88c5 Prometheus Operator"),(0,r.kt)("p",null,"Prometheus Operator \u5b89\u88c5\u5f88\u7b80\u5355\uff0c\u53ea\u9700\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f bundle.yaml\n")),(0,r.kt)("p",null,"\u8be6\u89c1 Prometheus Operator ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator#quickstart"},"\u5feb\u901f\u5f00\u59cb"),"\u3002"),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u90e8\u7f72"},"\u7ec4\u4ef6\u90e8\u7f72"),(0,r.kt)("p",null,"\u5728 konfig \u5927\u5e93\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-install")," \u9879\u76ee\u4e2d\uff0c\u4fdd\u5b58\u4e86\u8bbe\u7f6e Prometheus \u548c Alertmanager \u7684\u5b8c\u6574\u7684\u914d\u7f6e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Alertmanager \u96c6\u7fa4"),(0,r.kt)("li",{parentName:"ul"},"AlertmanagerConfig"),(0,r.kt)("li",{parentName:"ul"},"Alertmanager \u670d\u52a1"),(0,r.kt)("li",{parentName:"ul"},"Prometheus \u96c6\u7fa4"),(0,r.kt)("li",{parentName:"ul"},"Prometheus \u4f9d\u8d56\u7684 RBAC"),(0,r.kt)("li",{parentName:"ul"},"Prometheus \u670d\u52a1")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u60f3\u8981\u4f53\u9a8c\u5feb\u901f\u90e8\u7f72\u7ed3\u679c\uff0c\u53ef\u76f4\u63a5\u8df3\u5230",(0,r.kt)("a",{parentName:"p",href:"#%E4%B8%80%E9%94%AE%E9%83%A8%E7%BD%B2"},"\u4e00\u952e\u90e8\u7f72"),"\u5c0f\u8282\u3002")),(0,r.kt)("h3",{id:"\u914d\u7f6e-alertmanager"},"\u914d\u7f6e Alertmanager"),(0,r.kt)("p",null,"Alertmanager \u9ed8\u8ba4\u542f\u52a8\u662f\u6309\u7167\u6700\u4f4e\u914d\u7f6e\uff0c\u8fd9\u5e76\u6ca1\u4ec0\u4e48\u7528\u5904\uff0c\u56e0\u4e3a\u5b83\u5728\u63a5\u6536\u62a5\u8b66\u65f6\u4e0d\u4f1a\u53d1\u9001\u4efb\u4f55\u901a\u77e5\u3002"),(0,r.kt)("p",null,"\u4f60\u6709 3 \u79cd\u65b9\u5f0f\u6765\u63d0\u4f9b ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/configuration/"},"Alertmanager \u914d\u7f6e"),"\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5b58\u50a8\u5728 Kubernetes \u5bc6\u94a5\u4e2d\u7684\u672c\u673a Alertmanager \u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfiguration")," \u5728\u5b9a\u4e49\u4e3b Alertmanager \u914d\u7f6e\u7684\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u5f15\u7528 AlertmanagerConfig \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfigSelector")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfigNamespaceSelector")," \u544a\u8bc9 Operator \u5e94\u8be5\u9009\u62e9\u54ea\u4e9b AlertmanagerConfigs \u5bf9\u8c61\u5e76\u5c06\u5176\u4e0e\u4e3b Alertmanager \u914d\u7f6e\u5408\u5e76\u3002")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/tree/main/base/examples/monitoring/prometheus-install"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install"))," \u9879\u76ee\u4e2d\u4f7f\u7528\u7684\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ee5\u4e0b\u662f AlertmanagerConfig \u914d\u7f6e\uff0cAlertmanager \u5c06\u901a\u77e5\u53d1\u9001\u5230\u865a\u6784\u7684 webhook \u670d\u52a1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager_config: monitoringv1alpha1.AlertmanagerConfig{\n    metadata = {\n        name = "main"\n        namespace = _common_namespace\n        labels = {\n            "alertmanagerConfig" = "main"\n        }\n    }\n    spec = {\n        route = {\n            groupBy = ["job"]\n            groupWait = "30s"\n            groupInterval = "5m"\n            repeatInterval = "12h"\n            receiver = "webhook"\n        }\n        receivers = [\n            {\n                name = "webhook"\n                webhookConfigs = [\n                    {\n                        url = "http://example.com/"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e 3 \u4e2a\u526f\u672c\u7684 Alertmanager \u96c6\u7fa4\uff0c\u5e76\u5f15\u7528 AlertmanagerConfig \u5bf9\u8c61\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager: monitoringv1.Alertmanager{\n    metadata = {\n        name = "main"\n        namespace = "default"\n    }\n    spec = {\n        replicas = 3\n        # \u4f7f\u7528 AlertmanagerConfig \u4f5c\u4e3a\u5168\u5c40\u914d\u7f6e\n        alertmanagerConfiguration = {\n            name = _alertmanager_config.metadata.name\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u516c\u5f00 Alertmanager \u670d\u52a1\uff0c\u7528\u4e8e\u88ab\u540e\u7eed\u7684 Prometheus \u5b9e\u4f8b\u96c6\u6210\u3002\n\u521b\u5efa Kubernetes Service\uff0c\u76d1\u542c\u76ee\u6807\u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"9093"),"\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager_svc: corev1.Service{\n    metadata = {\n        name = "alertmanager"\n        namespace = "default"\n    }\n    spec = {\n        selector = {\n            "alertmanager" = _alertmanager.metadata.name\n        }\n        ports = [\n            {\n                name = "web"\n                port = 9093\n                targetPort = "web"\n            }\n            {\n                name = "reloader-web"\n                port = 8080\n                targetPort = "reloader-web"\n            }\n        ]\n        sessionAffinity = "ClientIP"\n    }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u914d\u7f6e\uff0c\u8bf7\u67e5\u770b\u6e90\u7801\u6587\u4ef6: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/prod/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/prod/main.k")),"\u3002")),(0,r.kt)("p",null,"\u6b64 Alertmanager \u96c6\u7fa4\u73b0\u5728\u529f\u80fd\u9f50\u5168\u4e14\u9ad8\u53ef\u7528\uff0c\u4f46\u4e0d\u4f1a\u9488\u5bf9\u5b83\u89e6\u53d1\u4efb\u4f55\u62a5\u8b66\u3002\u8fd9\u662f\u56e0\u4e3a\u4f60\u8fd8\u6ca1\u6709\u8bbe\u7f6e Prometheus \u5e94\u7528\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e-prometheus"},"\u914d\u7f6e Prometheus"),(0,r.kt)("p",null,"\u5728\u521b\u5efa Prometheus \u4e4b\u524d\uff0c\u5fc5\u987b\u5148\u4e3a Prometheus \u670d\u52a1\u5e10\u6237\u521b\u5efa RBAC \u89c4\u5219\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prometheus ClusterRole \u914d\u7f6e\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus_clusterrole: rbac.ClusterRole {\n    metadata = {\n        name = "prometheus"\n        namespace = "default"\n    }\n    rules = [\n        {\n            apiGroups = [""]\n            resources = ["nodes", "nodes/metrics", "services", "endpoints", "pods"]\n            verbs = ["get", "list", "watch"]\n        }\n        {\n            apiGroups = [""]\n            resources = ["configmaps"]\n            verbs = ["get"]\n        }\n        {\n            apiGroups = ["networking.k8s.io"]\n            resources = ["ingresses"]\n            verbs = ["get", "list", "watch"]\n        }\n        {\n            nonResourceURLs = ["/metrics"]\n            verbs = ["get"]\n        }\n    ]\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"RBAC \u7684\u5b8c\u6574\u914d\u7f6e\uff0c\u8bf7\u67e5\u770b\u6e90\u7801\u6587\u4ef6\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/base/base.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/base/base.k")),"\u3002")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa Prometheus\uff0c\u5b83\u5c06\u5411 Alertmanger \u96c6\u7fa4\u53d1\u9001\u62a5\u8b66\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus: monitoringv1.Prometheus{\n    metadata = {\n        name = "main"\n        namespace = "default"\n    }\n    spec = {\n        # \u6307\u5b9a ServiceAccount\n        serviceAccountName = "prometheus"\n        replicas = 2\n        # ruleSelector \u4e3a\u7a7a\uff0c\u8868\u793a\u4e0d\u9009\u62e9\u4efb\u4f55 PrometheusRule\u3002\n        ruleSelector = {\n            matchLabels = {\n                "role" = "alert-rules"\n                "prometheus" = "main"\n            }\n        }\n        serviceMonitorSelector = {\n            matchLabels = {\n                "prometheus" = "main"\n            }\n        }\n        # \u901a\u8fc7 Alertmanager \u7684\u516c\u5f00\u7684 Service\uff0c\u914d\u7f6e Alertmanager\n        alerting = {\n            alertmanagers = [\n                {\n                    name = _alertmanager_svc.metadata.name\n                    namespace = _alertmanager_svc.metadata.namespace\n                    port = _alertmanager_svc.spec.ports[0].name\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6700\u540e\uff0c\u4e3a\u4e86\u65b9\u4fbf\u9a8c\u8bc1\uff0c\u987a\u4fbf\u516c\u5f00 Prometheus Admin API\u3002\n\u521b\u5efa Kubernetes Service\uff0c\u76d1\u542c\u76ee\u6807\u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"9090"),"\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus_svc: corev1.Service{\n    metadata = {\n        name = "prometheus"\n        namespace = "default"\n    }\n    spec = {\n        selector = {\n            "prometheus" = _prometheus.metadata.name\n        }\n        ports = [\n            {\n                name = "web"\n                port = 9090\n                targetPort = "web"\n            }\n            {\n                name = "reloader-web"\n                port = 8080\n                targetPort = "reloader-web"\n            }\n        ]\n        sessionAffinity = "ClientIP"\n    }\n}\n')),(0,r.kt)("p",null,"Prometheus admin API \u5141\u8bb8\u8bbf\u95ee\u5220\u9664\u67d0\u4e2a\u65f6\u95f4\u8303\u56f4\u5185\u7684\u7cfb\u5217\u3001\u6e05\u7406\u5893\u7891\u3001\u6355\u83b7\u5feb\u7167\u7b49\u3002\n\u6709\u5173 admin API \u7684\u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/api/#tsdb-admin-apis"},"Prometheus \u5b98\u65b9\u6587\u6863"),"\u4e2d\u627e\u5230\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u914d\u7f6e\uff0c\u8bf7\u67e5\u770b\u6e90\u7801\u6587\u4ef6: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/prod/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/prod/main.k")),"\u3002")),(0,r.kt)("h3",{id:"\u4e00\u952e\u90e8\u7f72"},"\u4e00\u952e\u90e8\u7f72"),(0,r.kt)("p",null,"\u76ee\u524d\u5df2\u7ecf\u5b8c\u6210\u6240\u6709\u76d1\u63a7\u62a5\u8b66\u76f8\u5173\u914d\u7f6e\uff0c\u73b0\u5728\u5f00\u59cb\u4e00\u952e\u90e8\u7f72\u3002\u9996\u5148\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-install")," stack \u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd konfig/base/examples/monitoring/prometheus-install/prod\n")),(0,r.kt)("p",null,"\u518d\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7c7b\u4f3c\u4e8e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2714\ufe0e  Compiling in stack prod...                                                                                                                            \n\nStack: prod  ID                                                                        Action  \n * \u251c\u2500        rbac.authorization.k8s.io/v1:ClusterRole:default:prometheus               Create\n * \u251c\u2500        monitoring.coreos.com/v1:Alertmanager:default:main                        Create\n * \u251c\u2500        monitoring.coreos.com/v1alpha1:AlertmanagerConfig:default:main            Create\n * \u251c\u2500        monitoring.coreos.com/v1:Prometheus:default:main                          Create\n * \u251c\u2500        rbac.authorization.k8s.io/v1:ClusterRoleBinding:default:prometheus        Create\n * \u251c\u2500        v1:ServiceAccount:default:prometheus                                      Create\n * \u251c\u2500        v1:Service:default:alertmanager                                           Create\n * \u2514\u2500        v1:Service:default:prometheus                                             Create\n\n? Do you want to apply these diffs?  [Use arrows to move, type to filter]\n  yes\n> details\n  no\n")),(0,r.kt)("p",null,"\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"p"},"yes"),"\uff0c\u5f00\u59cb\u90e8\u7f72\u3002\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff0c\u5c06\u672c\u5730\u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"30900")," \u8f6c\u53d1\u5230 k8s Service \u7aef\u53e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"9090"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/prometheus-example 30900:9090\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:30900/"},"http://127.0.0.1:30900"),"\uff0c\u8bbf\u95ee Prometheus \u754c\u9762\uff0c\u8fdb\u5165 \u201cStatus > Runtime & Build Information\u201d \u9875\u9762\uff0c\u68c0\u67e5 Prometheus \u662f\u5426\u53d1\u73b0\u4e86 3 \u4e2a Alertmanager \u793a\u4f8b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57650).Z,width:"3582",height:"1964"})),(0,r.kt)("h2",{id:"prometheusrule"},"PrometheusRule"),(0,r.kt)("p",null,"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49 (CRD) ",(0,r.kt)("inlineCode",{parentName:"p"},"PrometheusRule")," \u58f0\u660e\u5f0f\u5b9a\u4e49 Prometheus \u5b9e\u4f8b\u4f7f\u7528\u7684\u6240\u9700 Prometheus \u89c4\u5219\uff0c\u5305\u62ec\u8bb0\u5f55\u89c4\u5219\u548c\u62a5\u8b66\u89c4\u5219\u3002\u8fd9\u4e9b\u89c4\u5219\u7531 Operator \u534f\u8c03\u5e76\u52a8\u6001\u52a0\u8f7d\uff0c\u65e0\u9700\u91cd\u65b0\u542f\u52a8 Prometheus\u3002"),(0,r.kt)("h3",{id:"\u8bb0\u5f55\u89c4\u5219"},"\u8bb0\u5f55\u89c4\u5219"),(0,r.kt)("p",null,"\u8bb0\u5f55\u89c4\u5219\u53ef\u4ee5\u9884\u5148\u8ba1\u7b97\u7ecf\u5e38\u9700\u8981\u6216\u8ba1\u7b97\u91cf\u5927\u7684\u8868\u8fbe\u5f0f\uff0c\u5e76\u5c06\u5176\u7ed3\u679c\u4fdd\u5b58\u4e3a\u4e00\u7ec4\u65b0\u7684\u65f6\u95f4\u5e8f\u5217\u3002\u67e5\u8be2\u9884\u5148\u8ba1\u7b97\u7684\u7ed3\u679c\u901a\u5e38\u6bd4\u6bcf\u6b21\u9700\u8981\u65f6\u6267\u884c\u539f\u59cb\u8868\u8fbe\u5f0f\u8981\u5feb\u5f97\u591a\u3002\u8fd9\u5bf9\u4e8e\u4eea\u8868\u677f\u7279\u522b\u6709\u7528\uff0c\u4eea\u8868\u677f\u6bcf\u6b21\u5237\u65b0\u65f6\u90fd\u9700\u8981\u91cd\u590d\u67e5\u8be2\u76f8\u540c\u7684\u8868\u8fbe\u5f0f\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u662f\u4ee5\u8282\u70b9\u4fe1\u606f\u4e3a\u4f8b\u7684\u8bb0\u5f55\u89c4\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_sum_of_node_memory = """\\\nsum(\n  node_memory_MemAvailable_bytes{job="node-exporter"} or\n  (\n    node_memory_Buffers_bytes{job="node-exporter"} +\n    node_memory_Cached_bytes{job="node-exporter"} +\n    node_memory_MemFree_bytes{job="node-exporter"} +\n    node_memory_Slab_bytes{job="node-exporter"}\n  )\n) by (cluster)\n"""\n\n_node_cpu = """\\\nsum(rate(node_cpu_seconds_total{job="node-exporter",mode!="idle",mode!="iowait",mode!="steal"}[5m])) /\ncount(sum(node_cpu_seconds_total{job="node-exporter"}) by (cluster, instance, cpu))\n"""\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"_sum_of_node_memory")," \u8bb0\u5f55\u8282\u70b9\u53ef\u7528\u5185\u5b58\u603b\u91cf\uff0c\u4ee5 byte \u4e3a\u5355\u4f4d\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"_node_cpu")," \u8ba1\u7b97\u6bcf 5 \u5206\u949f\u8282\u70b9 CPU \u7684\u5e73\u5747\u589e\u957f\u7387\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u914d\u7f6e, \u8bf7\u67e5\u770b\u6e90\u7801\u6587\u4ef6: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-rules/record/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-rules/record/main.k")),".")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e0a\u9762\u7684\u8bb0\u5f55\u89c4\u5219\u3002"),(0,r.kt)("p",null,"1\u3001\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-rules")," \u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"record")," \u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd konfig/base/examples/monitoring/prometheus-rules/record\n")),(0,r.kt)("p",null,"2\u3001\u521b\u5efa\u89c4\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply --yes\n")),(0,r.kt)("p",null,"3\u3001\u68c0\u67e5 Prometheus \u5df2\u52a0\u8f7d\u89c4\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/prometheus-example 30900:9090\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:30900/"},"http://127.0.0.1:30900"),"\uff0c\u8bbf\u95ee Prometheus \u754c\u9762\uff0c\u8fdb\u5165 \u201cStatus > Rules\u201d \u9875\u9762\uff0c\u68c0\u67e5 Prometheus \u662f\u5426\u5df2\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"node.rules"),"\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(68039).Z,width:"3582",height:"980"})),(0,r.kt)("h4",{id:"\u62d3\u5c55\u9605\u8bfb"},"\u62d3\u5c55\u9605\u8bfb"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u770b\u5230",(0,r.kt)("a",{parentName:"p",href:"#%E8%AE%B0%E5%BD%95%E8%A7%84%E5%88%99"},"\u8bb0\u5f55\u89c4\u5219"),"\u5c0f\u8282\u6240\u751f\u6210\u7684\u6298\u7ebf\u56fe\uff0c\u4f60\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," \u547d\u540d\u7a7a\u95f4\u90e8\u7f72 ",(0,r.kt)("inlineCode",{parentName:"p"},"node-exporter")," \u670d\u52a1\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u4f55\u5b89\u88c5 node-exporter? \u8bf7\u67e5\u770b\u8fd9\u91cc: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/examples/blob/main/prometheus/node-exporter.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"node-exporter.yaml")))),(0,r.kt)("p",null,"\u90a3\u4e48\uff0c\u4f60\u5c06\u4f1a\u770b\u5230\uff0c\u8282\u70b9\u53ef\u7528\u5185\u5b58\u7684\u6298\u7ebf\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3291).Z,width:"3582",height:"1722"})),(0,r.kt)("p",null,"\u548c\u8282\u70b9 CPU \u6bcf 5 \u5206\u949f\u5e73\u5747\u589e\u957f\u7387\u7684\u6298\u7ebf\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(20243).Z,width:"3582",height:"1736"})),(0,r.kt)("h3",{id:"\u62a5\u8b66\u89c4\u5219"},"\u62a5\u8b66\u89c4\u5219"),(0,r.kt)("p",null,"\u62a5\u8b66\u89c4\u5219\u53ef\u4ee5\u6839\u636e Prometheus \u8868\u8fbe\u5f0f\u8bed\u8a00\u8868\u8fbe\u5f0f\u5b9a\u4e49\u62a5\u8b66\u6761\u4ef6\uff0c\u5e76\u5c06\u6709\u5173\u89e6\u53d1\u62a5\u8b66\u7684\u901a\u77e5\u53d1\u9001\u5230\u5916\u90e8\u670d\u52a1\u3002\u6bcf\u5f53\u62a5\u8b66\u8868\u8fbe\u5f0f\u5728\u7ed9\u5b9a\u65f6\u95f4\u70b9\u4ea7\u751f\u4e00\u4e2a\u6216\u591a\u4e2a\u77e2\u91cf\u5143\u7d20\u65f6\uff0c\u5bf9\u4e8e\u8fd9\u4e9b\u5143\u7d20\u7684\u6807\u7b7e\u96c6\uff0c\u62a5\u8b66\u5c31\u4f1a\u88ab\u89c6\u4e3a\u5df2\u6fc0\u6d3b\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u662f\u62a5\u8b66\u89c4\u5219\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alerts: monitoringv1.PrometheusRule {\n    metadata = {\n        name = "example-alert"\n        namespace = "default"\n        labels: {\n            "prometheus": "example",\n            "role": "alert-rules",\n        }\n    }\n    spec = {\n        groups = [\n            {\n                name = "alert.rules"\n                rules = [\n                    {\n                        alert: "ExampleAlert"\n                        # vector() \u51fd\u6570\u5c06\u6807\u91cf\u4f5c\u4e3a\u6ca1\u6709\u6807\u7b7e\u7684\u5411\u91cf\u8fd4\u56de\u3002\n                        expr: "vector(1)"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"\u793a\u4f8b\u62a5\u8b66\u7684\u8868\u8fbe\u5f0f\u4f7f\u7528\u5185\u90e8\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"vertor()"),"\uff0c\u5b83\u5c06\u603b\u662f\u8fd4\u56de\u5411\u91cf 1\uff0c\u5373\u603b\u662f\u4f1a\u89e6\u53d1\u62a5\u8b66\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8be6\u7ec6\u914d\u7f6e, \u8bf7\u67e5\u770b\u6e90\u7801\u6587\u4ef6: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-rules/alert/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-rules/alert/main.k")),".")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u62a5\u8b66\u89c4\u5219\uff1a"),(0,r.kt)("p",null,"1\u3001\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-rules")," \u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," \u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd konfig/base/examples/monitoring/prometheus-rules/alert\n")),(0,r.kt)("p",null,"2\u3001\u521b\u5efa\u89c4\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply --yes\n")),(0,r.kt)("p",null,"3\u3001\u68c0\u67e5 Prometheus \u5df2\u52a0\u8f7d\u89c4\u5219\uff1a"),(0,r.kt)("p",null,"\u7531\u4e8e\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u7aef\u53e3\u8f6c\u53d1\u7684\u6b65\u9aa4\uff0c\u56e0\u6b64\u53ea\u9700\u8981\u5237\u65b0 \u201cStatus > Rules\u201d \u9875\u9762\uff0c\u68c0\u67e5 Prometheus \u662f\u5426\u5df2\u52a0\u8f7d ",(0,r.kt)("inlineCode",{parentName:"p"},"alert.rules"),"\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(61555).Z,width:"3574",height:"612"})),(0,r.kt)("p",null,"4\u3001\u68c0\u67e5 Alertmanager \u6210\u529f\u63a5\u6536\u62a5\u8b66\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/alertmanager-example 30903:9093\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:30903/"},"http://127.0.0.1:30903"),"\uff0c\u8bbf\u95ee Alertmanager \u754c\u9762\uff0c\u53d1\u73b0\u793a\u4f8b\u62a5\u8b66\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(39596).Z,width:"2272",height:"994"})))}u.isMDXComponent=!0},61555:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-rules-8c473525b886280782e5d90914bb5ace.jpg"},39596:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-6bd1ea8b8b1c384a9f6087a4a80f27c7.jpg"},57650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alertmanager-00138d0c7748fd0c74455c8dffa9fc80.jpg"},20243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-cpu-c03fc2068364d9e80cdc4247d324e4d1.jpg"},3291:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-memory-adef95ade87e3a15b6d271c736747943.jpg"},68039:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-rules-b33e988766ff9caef07ff12e45d6cc3b.jpg"},63191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/structure-573eb9edf2f37984e264cc3c2d4bd3a6.png"}}]);