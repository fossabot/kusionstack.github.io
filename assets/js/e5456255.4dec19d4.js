"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i="Recording and Alerting",s={unversionedId:"user_docs/guides/prometheus/recording-and-alerting",id:"user_docs/guides/prometheus/recording-and-alerting",title:"Recording and Alerting",description:"This guide will show you how to set up an Alertmanager cluster integrating with a Prometheus instance based on Prometheus Operator, and use PromethuesRules to record metrics and push alerts.",source:"@site/docs/user_docs/guides/prometheus/recording-and-alerting.md",sourceDirName:"user_docs/guides/prometheus",slug:"/user_docs/guides/prometheus/recording-and-alerting",permalink:"/docs/user_docs/guides/prometheus/recording-and-alerting",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/prometheus/recording-and-alerting.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685532776,formattedLastUpdatedAt:"5/31/2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"Drift Detection by ArgoCD",permalink:"/docs/user_docs/guides/argocd/drift-detection-by-argocd"},next:{title:"Hosting and Retrieving Secrets",permalink:"/docs/user_docs/guides/sensitive-data-solution/hosting-and-retrieving-secrets"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Setup Alertmanager",id:"setup-alertmanager",level:3},{value:"Setup Prometheus",id:"setup-prometheus",level:3},{value:"One-click Setup",id:"one-click-setup",level:3},{value:"PrometheusRule",id:"prometheusrule",level:2},{value:"Recording Rules",id:"recording-rules",level:3},{value:"Further Reading",id:"further-reading",level:4},{value:"Alerting Rules",id:"alerting-rules",level:3}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"recording-and-alerting"},"Recording and Alerting"),(0,r.kt)("p",null,"This guide will show you how to set up an Alertmanager cluster integrating with a Prometheus instance based on Prometheus Operator, and use PromethuesRules to record metrics and push alerts."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Prometheus is an open-source system monitoring and alerting toolkit. It collects and stores its metrics as time series data, i.e. metrics information is stored with the timestamp at which it was recorded, alongside optional key-value pairs called labels."),(0,r.kt)("p",null,"This diagram illustrates the architecture of Prometheus and some of its ecosystem components:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(63191).Z,width:"1351",height:"811"})),(0,r.kt)("p",null,"Prometheus scrapes metrics from instrumented jobs, either directly or via an intermediary push gateway for short-lived jobs. It stores all scraped samples locally and runs rules over this data to either aggregate and record new time series from existing data or generate alerts. Grafana or other API consumers can be used to visualize the collected data."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow this guide, you need to complete the following steps:"),(0,r.kt)("p",null,"1\u3001Install Kusion"),(0,r.kt)("p",null,"We recommend using the official installation tool ",(0,r.kt)("em",{parentName:"p"},"kusionup")," which supports multi-version management.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"Download and Install")," for more details."),(0,r.kt)("p",null,"2\u3001Clone Konfig repo"),(0,r.kt)("p",null,"In this guide, we need some KCL models that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"Konfig")," offers.\nFor more details on KCL language, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/lang/lang/tour"},"Tour of KCL"),"."),(0,r.kt)("p",null,"3\u3001Running Kubernetes cluster"),(0,r.kt)("p",null,"There must be a running Kubernetes cluster and a ",(0,r.kt)("a",{parentName:"p",href:"https://Kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," command line tool.\nIf you don't have a cluster yet, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," to start one of your own."),(0,r.kt)("p",null,"4\u3001Install Prometheus Operator"),(0,r.kt)("p",null,"Install Prometheus Operator is quite simple, you only need to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f bundle.yaml\n")),(0,r.kt)("p",null,"For more details, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator#quickstart"},"Prometheus Operator Quickstart"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"There is a project named ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-install")," in Konfig mono repo, which contains the full configuration of setting up Prometheus and Alertmanager:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an Alertmanager cluster "),(0,r.kt)("li",{parentName:"ul"},"an AlertmanagerConfig object"),(0,r.kt)("li",{parentName:"ul"},"an Alertmanager Service"),(0,r.kt)("li",{parentName:"ul"},"a Prometheus cluster "),(0,r.kt)("li",{parentName:"ul"},"required RBAC"),(0,r.kt)("li",{parentName:"ul"},"a Prometheus Service")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you can't wait to experience one-click setup, please jump to the ",(0,r.kt)("a",{parentName:"p",href:"#one-click-setup"},"One-click Setup")," section."))),(0,r.kt)("h3",{id:"setup-alertmanager"},"Setup Alertmanager"),(0,r.kt)("p",null,"By default, the Alertmanager instances will start with a minimal configuration which isn\u2019t useful since it doesn\u2019t send any notification when receiving alerts."),(0,r.kt)("p",null,"You have 3 options to provide the ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/configuration/"},"Alertmanager configuration"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can use a native Alertmanager configuration file stored in a Kubernetes secret."),(0,r.kt)("li",{parentName:"ol"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfiguration")," to reference an AlertmanagerConfig object in the same namespace which defines the main Alertmanager configuration."),(0,r.kt)("li",{parentName:"ol"},"You can define ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfigSelector")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfigNamespaceSelector")," to tell the operator which AlertmanagerConfigs objects should be selected and merged with the main Alertmanager configuration.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Option 2 is chosen in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/tree/main/base/examples/monitoring/prometheus-install"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install"))," project. "))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The following code snippet is AlertmanagerConfig, which will send notifications to a fictitious webhook service:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager_config: monitoringv1alpha1.AlertmanagerConfig{\n    metadata = {\n        name = "main"\n        namespace = _common_namespace\n        labels = {\n            "alertmanagerConfig" = "main"\n        }\n    }\n    spec = {\n        route = {\n            groupBy = ["job"]\n            groupWait = "30s"\n            groupInterval = "5m"\n            repeatInterval = "12h"\n            receiver = "webhook"\n        }\n        receivers = [\n            {\n                name = "webhook"\n                webhookConfigs = [\n                    {\n                        url = "http://example.com/"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Setting up an Alertmanager cluster with 3 replicas, reference the AlertmanagerConfig object:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager: monitoringv1.Alertmanager{\n    metadata = {\n        name = "main"\n        namespace = "default"\n    }\n    spec = {\n        replicas = 3\n        # using AlertmanagerConfig for global configuration\n        alertmanagerConfiguration = {\n            name = _alertmanager_config.metadata.name\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Expose Alertmanager service for integrating with Prometheus instances.\nCreating a Kubernetes Service listening target port ",(0,r.kt)("inlineCode",{parentName:"li"},"9093"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager_svc: corev1.Service{\n    metadata = {\n        name = "alertmanager"\n        namespace = _common_namespace\n    }\n    spec = {\n        selector = {\n            "alertmanager" = _alertmanager.metadata.name\n        }\n        ports = [\n            {\n                name = "web"\n                port = 9093\n                targetPort = "web"\n            }\n            {\n                name = "reloader-web"\n                port = 8080\n                targetPort = "reloader-web"\n            }\n        ]\n        sessionAffinity = "ClientIP"\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For complete configuration, please check source code file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/prod/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/prod/main.k")),"."))),(0,r.kt)("p",null,"This Alertmanager cluster is now fully functional and highly available, but no alerts are fired against it. Because you have not set up Prometheus yet."),(0,r.kt)("h3",{id:"setup-prometheus"},"Setup Prometheus"),(0,r.kt)("p",null,"Before you set up Prometheus, you must first create the RBAC rules for the Prometheus service account beforehand."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ClusterRole:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus_clusterrole: rbac.ClusterRole {\n    metadata = {\n        name = "prometheus"\n        namespace = "default"\n    }\n    rules = [\n        {\n            apiGroups = [""]\n            resources = ["nodes", "nodes/metrics", "services", "endpoints", "pods"]\n            verbs = ["get", "list", "watch"]\n        }\n        {\n            apiGroups = [""]\n            resources = ["configmaps"]\n            verbs = ["get"]\n        }\n        {\n            apiGroups = ["networking.k8s.io"]\n            resources = ["ingresses"]\n            verbs = ["get", "list", "watch"]\n        }\n        {\n            nonResourceURLs = ["/metrics"]\n            verbs = ["get"]\n        }\n    ]\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For full configuration of RBAC rules\uff0cplease check source code file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/base/base.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/base/base.k")),"."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Setting up a Prometheus object with 2 replicas which will send alerts to the Alertmanager cluster:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus: monitoringv1.Prometheus{\n    metadata = {\n        name = "main"\n        namespace = "default"\n    }\n    spec = {\n        # specify service account, default sa has no permissions\n        serviceAccountName = "prometheus"\n        replicas = 2\n        # ruleSelector is nil meaning that the operator picks up no rule\n        ruleSelector = {\n            matchLabels = {\n                "role" = "alert-rules"\n                "prometheus" = "main"\n            }\n        }\n        serviceMonitorSelector = {\n            matchLabels = {\n                "prometheus" = "main"\n            }\n        }\n        # intergating with alert manager by its service\n        alerting = {\n            alertmanagers = [\n                {\n                    name = _alertmanager_svc.metadata.name\n                    namespace = _alertmanager_svc.metadata.namespace\n                    port = _alertmanager_svc.spec.ports[0].name\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Lastly, for easy validation, expose the Prometheus admin API.\nCreating a Kubernetes service listening target port ",(0,r.kt)("inlineCode",{parentName:"li"},"9090"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus_svc: corev1.Service{\n    metadata = {\n        name = "prometheus"\n        namespace = "default"\n    }\n    spec = {\n        selector = {\n            "prometheus" = _prometheus.metadata.name\n        }\n        ports = [\n            {\n                name = "web"\n                port = 9090\n                targetPort = "web"\n            }\n            {\n                name = "reloader-web"\n                port = 8080\n                targetPort = "reloader-web"\n            }\n        ]\n        sessionAffinity = "ClientIP"\n    }\n}\n')),(0,r.kt)("p",null,"Prometheus Admin API allows access to delete series for a certain time range, clean up tombstones, capture snapshots, etc.\nMore information about the admin API can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/api/#tsdb-admin-apis"},"Prometheus official documentation"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For complete configuration, please check source code file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/prod/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/prod/main.k")),"."))),(0,r.kt)("h3",{id:"one-click-setup"},"One-click Setup"),(0,r.kt)("p",null,"Now you can deploy them with one click. Firstly, enter the stack dir of project ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-install")," in the konfig repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd konfig/base/examples/monitoring/prometheus-install/prod\n")),(0,r.kt)("p",null,"Then, run ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2714\ufe0e  Compiling in stack prod...                                                                                                                            \n\nStack: prod  ID                                                                        Action  \n * \u251c\u2500        rbac.authorization.k8s.io/v1:ClusterRole:default:prometheus               Create\n * \u251c\u2500        monitoring.coreos.com/v1:Alertmanager:default:main                        Create\n * \u251c\u2500        monitoring.coreos.com/v1alpha1:AlertmanagerConfig:default:main            Create\n * \u251c\u2500        monitoring.coreos.com/v1:Prometheus:default:main                          Create\n * \u251c\u2500        rbac.authorization.k8s.io/v1:ClusterRoleBinding:default:prometheus        Create\n * \u251c\u2500        v1:ServiceAccount:default:prometheus                                      Create\n * \u251c\u2500        v1:Service:default:alertmanager                                           Create\n * \u2514\u2500        v1:Service:default:prometheus                                             Create\n\n? Do you want to apply these diffs?  [Use arrows to move, type to filter]\n  yes\n> details\n  no\n")),(0,r.kt)("p",null,"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," to start deploying. After finishing deploying, run the following command, which will forward local port ",(0,r.kt)("inlineCode",{parentName:"p"},"30900")," to k8s service port ",(0,r.kt)("inlineCode",{parentName:"p"},"9090"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/prometheus-example 30900:9090\n")),(0,r.kt)("p",null,"Now, you can open the Prometheus web interface, ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:30900/"},"http://127.0.0.1:30900"),', and go to the "Status > Runtime & Build Information" page and check that Prometheus has discovered 3 Alertmanager instances.'),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(57650).Z,width:"3582",height:"1964"})),(0,r.kt)("h2",{id:"prometheusrule"},"PrometheusRule"),(0,r.kt)("p",null,"The PrometheusRule custom resource definition (CRD) declaratively defines desired Prometheus rules to be consumed by Prometheus instances, including alerting and recording rules. These rules are reconciled by the Operator and dynamically loaded without requiring any restart of Prometheus Rules."),(0,r.kt)("h3",{id:"recording-rules"},"Recording Rules"),(0,r.kt)("p",null,"Recording rules allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series. Querying the precomputed result will then often be much faster than executing the original expression every time it is needed. This is especially useful for dashboards, which need to query the same expression repeatedly every time they refresh."),(0,r.kt)("p",null,"The following code snippet takes the node information as an example to the recording rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_sum_of_node_memory = """\\\nsum(\n  node_memory_MemAvailable_bytes{job="node-exporter"} or\n  (\n    node_memory_Buffers_bytes{job="node-exporter"} +\n    node_memory_Cached_bytes{job="node-exporter"} +\n    node_memory_MemFree_bytes{job="node-exporter"} +\n    node_memory_Slab_bytes{job="node-exporter"}\n  )\n) by (cluster)\n"""\n\n_node_cpu = """\\\nsum(rate(node_cpu_seconds_total{job="node-exporter",mode!="idle",mode!="iowait",mode!="steal"}[5m])) /\ncount(sum(node_cpu_seconds_total{job="node-exporter"}) by (cluster, instance, cpu))\n"""\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"_sum_of_node_memory")," records the sum of node available memory in bytes. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"_node_cpu")," calculates the average rate of increase of node CPU every 5 minutes."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For complete configuration, please check source code file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-rules/record/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-rules/record/main.k")),"."))),(0,r.kt)("p",null,"Now, you can create the recording rule above."),(0,r.kt)("p",null,"1\u3001Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"record")," directory of project ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-rules"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd konfig/base/examples/monitoring/prometheus-rules/record\n")),(0,r.kt)("p",null,"2\u3001Apply these rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply --yes\n")),(0,r.kt)("p",null,"3\u3001Check the Prometheus instance has loaded these rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/prometheus-example 30900:9090\n")),(0,r.kt)("p",null,"Now, you can open the Prometheus web interface, ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:30900/"},"http://127.0.0.1:30900"),', and go to the "Status > Rules" page and check that Prometheus has loaded ',(0,r.kt)("inlineCode",{parentName:"p"},"node.rules"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(68039).Z,width:"3582",height:"980"})),(0,r.kt)("h4",{id:"further-reading"},"Further Reading"),(0,r.kt)("p",null,"If you want to see the generating line graph from the ",(0,r.kt)("a",{parentName:"p",href:"#recording-rules"},"Recording Rules")," section, you need to deploy a ",(0,r.kt)("inlineCode",{parentName:"p"},"node-exporter")," server in the default namespace. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"How to install node-exporter? Please check here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/examples/blob/main/prometheus/node-exporter.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"node-exporter.yaml"))))),(0,r.kt)("p",null,"Then, you will see, the sum of node memory in bytes\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(3291).Z,width:"3582",height:"1722"})),(0,r.kt)("p",null,"and the average rate of increase of node CPU every 5 minutes:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(20243).Z,width:"3582",height:"1736"})),(0,r.kt)("h3",{id:"alerting-rules"},"Alerting Rules"),(0,r.kt)("p",null,"Alerting rules allow you to define alert conditions based on Prometheus expression language expressions and to send notifications about firing alerts to an external service. Whenever the alert expression results in one or more vector elements at a given point in time, the alert counts as active for these elements' label sets."),(0,r.kt)("p",null,"The following code snippet is an example of alerting rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alerts: monitoringv1.PrometheusRule {\n    metadata = {\n        name = "alert"\n        namespace = "default"\n        labels: {\n            "prometheus": "main",\n            "role": "alert-rules",\n        }\n    }\n    spec = {\n        groups = [\n            {\n                name = "alert.rules"\n                rules = [\n                    {\n                        alert: "WebhookAlert"\n                        # vector(s scalar) returns the scalar s as a vector with no labels.\n                        expr: "vector(1)"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"Using internal function ",(0,r.kt)("inlineCode",{parentName:"p"},"vector(1)")," will always return a vector 1, which means always triggering an alert."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For complete configuration, please check source code file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-rules/alert/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-rules/alert/main.k")),"."))),(0,r.kt)("p",null,"Now, you can apply the alerting rules:"),(0,r.kt)("p",null,"1\u3001Enter the stack ",(0,r.kt)("inlineCode",{parentName:"p"},"alert")," of project ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-rules"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd konfig/base/examples/monitoring/prometheus-rules/alert\n")),(0,r.kt)("p",null,"2\u3001Apply these rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply --yes\n")),(0,r.kt)("p",null,"3\u3001Check the Prometheus instance has loaded these rules:"),(0,r.kt)("p",null,'Since you have already done the port forward step, you just need to refresh the "Status > Rules" page and check that Prometheus has loaded ',(0,r.kt)("inlineCode",{parentName:"p"},"alert.rules"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(61555).Z,width:"3574",height:"612"})),(0,r.kt)("p",null,"4\u3001Check the Alertmanager has received the alert successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/alertmanager-example 30903:9093\n")),(0,r.kt)("p",null,"Now, you can open the Alertmanager web interface, ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:30903/"},"http://127.0.0.1:30903")," and see the example alert:"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(39596).Z,width:"2272",height:"994"})))}c.isMDXComponent=!0},61555:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-rules-8c473525b886280782e5d90914bb5ace.jpg"},39596:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alert-6bd1ea8b8b1c384a9f6087a4a80f27c7.jpg"},57650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alertmanager-00138d0c7748fd0c74455c8dffa9fc80.jpg"},20243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-cpu-c03fc2068364d9e80cdc4247d324e4d1.jpg"},3291:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-memory-adef95ade87e3a15b6d271c736747943.jpg"},68039:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-rules-b33e988766ff9caef07ff12e45d6cc3b.jpg"},63191:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/structure-573eb9edf2f37984e264cc3c2d4bd3a6.png"}}]);