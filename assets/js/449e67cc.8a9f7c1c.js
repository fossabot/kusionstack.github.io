"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i="Getting Started",s={unversionedId:"user_docs/guides/prometheus/getting-started",id:"user_docs/guides/prometheus/getting-started",title:"Getting Started",description:"The Prometheus Operator\u2019s goal is to make running Prometheus on top of Kubernetes as easy as possible while preserving Kubernetes-native configuration options.",source:"@site/docs/user_docs/guides/prometheus/getting-started.md",sourceDirName:"user_docs/guides/prometheus",slug:"/user_docs/guides/prometheus/getting-started",permalink:"/docs/user_docs/guides/prometheus/getting-started",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/prometheus/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1666755388,formattedLastUpdatedAt:"10/26/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"Drift Detection by ArgoCD",permalink:"/docs/user_docs/guides/argocd/drift-detection-by-argocd"},next:{title:"Information Security",permalink:"/docs/user_docs/guides/sensitive-data-solution/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Full Configuration",id:"full-configuration",level:2},{value:"Configure Alertmanager",id:"configure-alertmanager",level:3},{value:"Configure Prometheus",id:"configure-prometheus",level:3},{value:"One-click Deployment",id:"one-click-deployment",level:2}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The Prometheus Operator\u2019s goal is to make running Prometheus on top of Kubernetes as easy as possible while preserving Kubernetes-native configuration options."),(0,r.kt)("p",null,"This guide will show you how to set up an Alertmanager cluster integrating with a Prometheus instance."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To follow this guide, you need to complete the following steps:"),(0,r.kt)("p",null,"1\u3001Install Kusion"),(0,r.kt)("p",null,"We recommend using the official installation tool ",(0,r.kt)("em",{parentName:"p"},"kusionup")," which supports multi-version management.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"Download and Install")," for more details."),(0,r.kt)("p",null,"2\u3001Clone Konfig repo"),(0,r.kt)("p",null,"In this guide, we need some KCL models that ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"Konfig")," offers.\nFor more details on KCL language, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/lang/lang/tour"},"Tour of KCL"),"."),(0,r.kt)("p",null,"3\u3001Running Kubernetes cluster"),(0,r.kt)("p",null,"There must be a running Kubernetes cluster and a ",(0,r.kt)("a",{parentName:"p",href:"https://Kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," command line tool.\nIf you don't have a cluster yet, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," to start one of your own."),(0,r.kt)("p",null,"4\u3001Install Prometheus Operator"),(0,r.kt)("p",null,"Install Prometheus Operator is quite simple, you only need to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create -f bundle.yaml\n")),(0,r.kt)("p",null,"For more details, please check ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator#quickstart"},"Prometheus Operator Quickstart"),"."),(0,r.kt)("h2",{id:"full-configuration"},"Full Configuration"),(0,r.kt)("p",null,"There is a project named ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-install")," in Konfig mono repo, which contains the full configuration of setting up Prometheus and Alertmanager:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an Alertmanager cluster "),(0,r.kt)("li",{parentName:"ul"},"an AlertmanagerConfig object"),(0,r.kt)("li",{parentName:"ul"},"an Alertmanager Service"),(0,r.kt)("li",{parentName:"ul"},"a Prometheus cluster "),(0,r.kt)("li",{parentName:"ul"},"Required RBAC"),(0,r.kt)("li",{parentName:"ul"},"a Prometheus Service")),(0,r.kt)("p",null,"If you can't wait to experience one-click deployment, please jump to the ",(0,r.kt)("a",{parentName:"p",href:"#one-click-deployment"},"One-click Deployment")," section."),(0,r.kt)("h3",{id:"configure-alertmanager"},"Configure Alertmanager"),(0,r.kt)("p",null,"By default, the Alertmanager instances will start with a minimal configuration which isn\u2019t useful since it doesn\u2019t send any notification when receiving alerts."),(0,r.kt)("p",null,"You have 3 options to provide the ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/configuration/"},"Alertmanager configuration"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can use a native Alertmanager configuration file stored in a Kubernetes secret."),(0,r.kt)("li",{parentName:"ol"},"You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfiguration")," to reference an AlertmanagerConfig object in the same namespace which defines the main Alertmanager configuration."),(0,r.kt)("li",{parentName:"ol"},"You can define ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfigSelector")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.alertmanagerConfigNamespaceSelector")," to tell the operator which AlertmanagerConfigs objects should be selected and merged with the main Alertmanager configuration.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Option 2 is chosen in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/tree/main/base/examples/monitoring/prometheus-install"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install"))," project. "))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The following code snippet is AlertmanagerConfig, which will send notifications to a fictitious webhook service:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager_config: monitoringv1alpha1.AlertmanagerConfig{\n    metadata = {\n        name = "config-example"\n        namespace = _common_namespace\n        labels = {\n            "alertmanagerConfig" = "example"\n        }\n    }\n    spec = {\n        route = {\n            groupBy = ["job"]\n            groupWait = "30s"\n            groupInterval = "5m"\n            repeatInterval = "12h"\n            receiver = "webhook"\n        }\n        receivers = [\n            {\n                name = "webhook"\n                webhookConfigs = [\n                    {\n                        url = "http://example.com/"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Setting up an Alertmanager cluster with 3 replicas, reference the AlertmanagerConfig object:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager: monitoringv1.Alertmanager{\n    metadata = {\n        name = "example"\n        namespace = "default"\n    }\n    spec = {\n        replicas = 3\n        # using AlertmanagerConfig for global configuration\n        alertmanagerConfiguration = {\n            name = _alertmanager_config.metadata.name\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Expose Alertmanager service for integrating with Prometheus instances.\nCreating a Kubernetes Service listening target port ",(0,r.kt)("inlineCode",{parentName:"li"},"9093"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_alertmanager_svc: corev1.Service{\n    metadata = {\n        name = "alertmanager-example"\n        namespace = _common_namespace\n    }\n    spec = {\n        selector = {\n            "alertmanager" = _alertmanager.metadata.name\n        }\n        ports = [\n            {\n                name = "web"\n                port = 9093\n                targetPort = "web"\n            }\n            {\n                name = "reloader-web"\n                port = 8080\n                targetPort = "reloader-web"\n            }\n        ]\n        sessionAffinity = "ClientIP"\n    }\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For complete configuration, please check source code file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/prod/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/prod/main.k")),"."))),(0,r.kt)("p",null,"This Alertmanager cluster is now fully functional and highly available, but no alerts are fired against it. Because you have not set up Prometheus yet."),(0,r.kt)("h3",{id:"configure-prometheus"},"Configure Prometheus"),(0,r.kt)("p",null,"Before you set up Prometheus, you must first create the RBAC rules for the Prometheus service account beforehand."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ClusterRole:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus_clusterrole: rbac.ClusterRole {\n    metadata = {\n        name = "prometheus"\n        namespace = "default"\n    }\n    rules = [\n        {\n            apiGroups = [""]\n            resources = ["nodes", "nodes/metrics", "services", "endpoints", "pods"]\n            verbs = ["get", "list", "watch"]\n        }\n        {\n            apiGroups = [""]\n            resources = ["configmaps"]\n            verbs = ["get"]\n        }\n        {\n            apiGroups = ["networking.k8s.io"]\n            resources = ["ingresses"]\n            verbs = ["get", "list", "watch"]\n        }\n        {\n            nonResourceURLs = ["/metrics"]\n            verbs = ["get"]\n        }\n    ]\n}\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For full configuration of RBAC rules\uff0cplease check source code file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/base/base.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/base/base.k")),"."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Setting up a Prometheus object with 2 replicas which will send alerts to the Alertmanager cluster:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus: monitoringv1.Prometheus{\n    metadata = {\n        name = "example"\n        namespace = "default"\n    }\n    spec = {\n        # specify service account, default sa has no permissions\n        serviceAccountName = "prometheus"\n        replicas = 2\n        # ruleSelector is nil meaning that the operator picks up no rule\n        ruleSelector = {\n            matchLabels = {\n                "role" = "alert-rules"\n                "prometheus" = "example"\n            }\n        }\n        serviceMonitorSelector = {\n            matchLabels = {\n                "prometheus" = "example"\n            }\n        }\n        # intergating with alert manager by its service\n        alerting = {\n            alertmanagers = [\n                {\n                    name = _alertmanager_svc.metadata.name\n                    namespace = _alertmanager_svc.metadata.namespace\n                    port = _alertmanager_svc.spec.ports[0].name\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Lastly, for easy validation, expose the Prometheus admin API.\nCreating a Kubernetes service listening target port ",(0,r.kt)("inlineCode",{parentName:"li"},"9090"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'_prometheus_svc: corev1.Service{\n    metadata = {\n        name = "prometheus-example"\n        namespace = "default"\n    }\n    spec = {\n        selector = {\n            "prometheus" = _prometheus.metadata.name\n        }\n        ports = [\n            {\n                name = "web"\n                port = 9090\n                targetPort = "web"\n            }\n            {\n                name = "reloader-web"\n                port = 8080\n                targetPort = "reloader-web"\n            }\n        ]\n        sessionAffinity = "ClientIP"\n    }\n}\n')),(0,r.kt)("p",null,"Prometheus Admin API allows access to delete series for a certain time range, clean up tombstones, capture snapshots, etc.\nMore information about the admin API can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/api/#tsdb-admin-apis"},"Prometheus official documentation"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For complete congfiugration, please check source code file: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/examples/monitoring/prometheus-install/prod/main.k"},(0,r.kt)("inlineCode",{parentName:"a"},"prometheus-install/prod/main.k")),"."))),(0,r.kt)("h2",{id:"one-click-deployment"},"One-click Deployment"),(0,r.kt)("p",null,"Now you can deploy them with one click. Firstly, enter the stack dir of project ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-install")," in the konfig repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd base/examples/monitoring/prometheus-install/prod\n")),(0,r.kt)("p",null,"Then, run ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u2714\ufe0e  Compiling in stack prod...                                                                                                                            \n\nStack: prod  ID                                                                        Action  \n * \u251c\u2500        rbac.authorization.k8s.io/v1:ClusterRole:default:prometheus               Create\n * \u251c\u2500        monitoring.coreos.com/v1:Alertmanager:default:example                     Create  \n * \u251c\u2500        monitoring.coreos.com/v1alpha1:AlertmanagerConfig:default:config-example  Create\n * \u251c\u2500        monitoring.coreos.com/v1:Prometheus:default:example                       Create\n * \u251c\u2500        rbac.authorization.k8s.io/v1:ClusterRoleBinding:default:prometheus        Create\n * \u251c\u2500        v1:ServiceAccount:default:prometheus                                      Create\n * \u251c\u2500        v1:Service:default:alertmanager-example                                   Create\n * \u2514\u2500        v1:Service:default:prometheus-example                                     Create\n\n? Do you want to apply these diffs?  [Use arrows to move, type to filter]\n  yes\n> details\n  no\n")),(0,r.kt)("p",null,"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," to start deploying. After finishing deploying, run the following command, which will forward local port ",(0,r.kt)("inlineCode",{parentName:"p"},"30900")," to k8s service port ",(0,r.kt)("inlineCode",{parentName:"p"},"9090"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/prometheus-example 30900:9090\n")),(0,r.kt)("p",null,"Now, you can open the Prometheus web interface, ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:30900/"},"http://127.0.0.1:30900"),', and go to the "Status > Runtime & Build Information" page and check that Prometheus has discovered 3 Alertmanager instances.'),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(57650).Z,width:"3582",height:"1964"})))}c.isMDXComponent=!0},57650:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alertmanager-7f83c7f4987e6325bec3cd568e6cee4d.jpg"}}]);