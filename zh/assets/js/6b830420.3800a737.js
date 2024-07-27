"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[50992],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(o),h=r,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||a;return o?n.createElement(d,i(i({ref:t},u),{},{components:o})):n.createElement(d,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2386:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={id:"prometheus"},i="Configure Monitoring Behavior With Prometheus",s={unversionedId:"user-guides/observability/prometheus",id:"user-guides/observability/prometheus",title:"Configure Monitoring Behavior With Prometheus",description:"This document provides the step-by-step instruction to set up monitoring for your application.",source:"@site/docs/kusion/5-user-guides/3-observability/1-prometheus.md",sourceDirName:"5-user-guides/3-observability",slug:"/user-guides/observability/prometheus",permalink:"/zh/docs/next/user-guides/observability/prometheus",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/5-user-guides/3-observability/1-prometheus.md",tags:[],version:"current",lastUpdatedBy:"Ekjot Singh",lastUpdatedAt:1722091057,formattedLastUpdatedAt:"2024\u5e747\u670827\u65e5",sidebarPosition:1,frontMatter:{id:"prometheus"},sidebar:"kusion",previous:{title:"Schedule a Job",permalink:"/zh/docs/next/user-guides/working-with-k8s/job"},next:{title:"Using Cloud Secrets Manager",permalink:"/zh/docs/next/user-guides/secrets-management/using-cloud-secrets"}},p={},l=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Setting up your own Prometheus",id:"setting-up-your-own-prometheus",level:2},{value:"Installing Prometheus operator<sup>3</sup>.",id:"installing-prometheus-operator3",level:3},{value:"Make sure RBAC is properly set up",id:"make-sure-rbac-is-properly-set-up",level:3},{value:"Configure Prometheus instance via the operator",id:"configure-prometheus-instance-via-the-operator",level:3},{value:"Exposing the Prometheus portal (optional)",id:"exposing-the-prometheus-portal-optional",level:3},{value:"Setting up workspace configs",id:"setting-up-workspace-configs",level:2},{value:"Operator mode",id:"operator-mode",level:3},{value:"Monitor types",id:"monitor-types",level:3},{value:"Overriding with projectSelector",id:"overriding-with-projectselector",level:3},{value:"Updating the workspace config",id:"updating-the-workspace-config",level:2},{value:"Using kusion to deploy your application with monitoring requirements",id:"using-kusion-to-deploy-your-application-with-monitoring-requirements",level:2},{value:"References",id:"references",level:2}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-monitoring-behavior-with-prometheus"},"Configure Monitoring Behavior With Prometheus"),(0,r.kt)("p",null,"This document provides the step-by-step instruction to set up monitoring for your application. "),(0,r.kt)("p",null,"As of today, Kusion supports the configuration of Prometheus scraping behaviors for the target application. In the future, we will add more cloud-provider-native solutions, such as AWS CloudWatch, Azure Monitor, etc."),(0,r.kt)("p",null,"The user guide below is composed of the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespace"),(0,r.kt)("li",{parentName:"ul"},"Deployment"),(0,r.kt)("li",{parentName:"ul"},"Service"),(0,r.kt)("li",{parentName:"ul"},"ServiceMonitor")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This guide requires you to have a basic understanding of Kubernetes and Prometheus.\nIf you are not familiar with the relevant concepts, please refer to the links below:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus Introduction")))),(0,r.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../working-with-k8s/deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,r.kt)("p",null,"The example below also requires you to have ",(0,r.kt)("a",{parentName:"p",href:"../working-with-k8s/deploy-application#initializing"},"initialized the project")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,r.kt)("a",{parentName:"p",href:"../working-with-k8s/deploy-application#kclmod"},(0,r.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the project directory."),(0,r.kt)("h2",{id:"setting-up-your-own-prometheus"},"Setting up your own Prometheus"),(0,r.kt)("p",null,"There a quite a few ways to set up Prometheus in your cluster:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Installing a Prometheus operator"),(0,r.kt)("li",{parentName:"ol"},"Installing a standalone Prometheus server"),(0,r.kt)("li",{parentName:"ol"},"Installing a Prometheus agent and connect to a remote Prometheus server")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/issues/1547#issuecomment-401092041"},"The advice from the Prometheus team")," is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PodMonitor")," CRs via the Prometheus operator to manage scrape configs going forward",(0,r.kt)("sup",null,"[2]"),"."),(0,r.kt)("p",null,"In either case, you only have to do this setup once per cluster. This doc will use a minikube cluster and Prometheus operator as an example."),(0,r.kt)("h3",{id:"installing-prometheus-operator3"},"Installing Prometheus operator",(0,r.kt)("sup",null,"[3]"),"."),(0,r.kt)("p",null,"To get the example in this user guide working, all you need is a running Prometheus operator. You can have that installed by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"LATEST=$(curl -s https://api.github.com/repos/prometheus-operator/prometheus-operator/releases/latest | jq -cr .tag_name)\ncurl -sL https://github.com/prometheus-operator/prometheus-operator/releases/download/${LATEST}/bundle.yaml | kubectl create -f -\n")),(0,r.kt)("p",null,"This will install all the necessary CRDs and the Prometheus operator itself in the default namespace. Wait a few minutes, you can confirm the operator is up by running: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl wait --for=condition=Ready pods -l  app.kubernetes.io/name=prometheus-operator -n default\n")),(0,r.kt)("h3",{id:"make-sure-rbac-is-properly-set-up"},"Make sure RBAC is properly set up"),(0,r.kt)("p",null,"If you have RBAC enabled on the cluster, the following must be created for Prometheus to work properly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: prometheus\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: prometheus\nrules:\n- apiGroups: [""]\n  resources:\n  - nodes\n  - nodes/metrics\n  - services\n  - endpoints\n  - pods\n  verbs: ["get", "list", "watch"]\n- apiGroups: [""]\n  resources:\n  - configmaps\n  verbs: ["get"]\n- apiGroups:\n  - networking.k8s.io\n  resources:\n  - ingresses\n  verbs: ["get", "list", "watch"]\n- nonResourceURLs: ["/metrics"]\n  verbs: ["get"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: prometheus\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: prometheus\nsubjects:\n- kind: ServiceAccount\n  name: prometheus\n  namespace: default\n')),(0,r.kt)("h3",{id:"configure-prometheus-instance-via-the-operator"},"Configure Prometheus instance via the operator"),(0,r.kt)("p",null,"Once all of the above is set up, you can then configure the Prometheus instance via the operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: monitoring.coreos.com/v1\nkind: Prometheus\nmetadata:\n  name: prometheus\nspec:\n  serviceAccountName: prometheus\n  serviceMonitorNamespaceSelector: {}\n  serviceMonitorSelector: {}\n  podMonitorNamespaceSelector: {}\n  podMonitorSelector: {}\n  resources:\n    requests:\n      memory: 400Mi\n")),(0,r.kt)("p",null,"This Prometheus instance above will be cluster-wide, picking up ALL the service monitors and pod monitors across ALL the namespaces.\nYou can adjust the requests and limits accordingly if you have a larger cluster."),(0,r.kt)("h3",{id:"exposing-the-prometheus-portal-optional"},"Exposing the Prometheus portal (optional)"),(0,r.kt)("p",null,"Once you have the managed Prometheus instance created via the Prometheus CR above, you should be able to see a service created called ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus-operated"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"prometheus-operated",src:o(91512).Z,width:"631",height:"52"})),(0,r.kt)("p",null,"If you are also running on minikube, you can expose it onto your localhost via kubectl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl port-forward svc/prometheus-operated 9099:9090\n")),(0,r.kt)("p",null,"You should then be able to see the Prometheus portal via ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:9099")," in your browser:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"prometheus-portal",src:o(35443).Z,width:"2878",height:"1096"})),(0,r.kt)("p",null,"If you are running a non-local cluster, you can try to expose it via another way, through an ingress controller for example."),(0,r.kt)("h2",{id:"setting-up-workspace-configs"},"Setting up workspace configs"),(0,r.kt)("p",null,"Since v0.10.0, we have introduced the concept of ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/concepts/workspace"},"workspaces"),", whose configurations represent the part of the application behaviors that platform teams are interested in standardizing, or the ones to eliminate from developer's mind to make their lives easier."),(0,r.kt)("p",null,"In the case of setting up Prometheus, there are a few things to set up on the workspace level:"),(0,r.kt)("h3",{id:"operator-mode"},"Operator mode"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," flag indicates to Kusion whether the Prometheus instance installed in the cluster runs as a Kubernetes operator or not. This determines the different kinds of resources Kusion manages."),(0,r.kt)("p",null,"To see more about different ways to run Prometheus in the Kubernetes cluster, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/docs/prometheus.md#prometheus-installation"},"design documentation"),"."),(0,r.kt)("p",null,"Most cloud vendors provide an out-of-the-box monitoring solutions for workloads running in a managed-Kubernetes cluster (EKS, AKS, etc), such as AWS CloudWatch, Azure Monitor, etc. These solutions mostly involve installing an agent (CloudWatch Agent, OMS Agent, etc) in the cluster and collecting the metrics to a centralized monitoring server. In those cases, you don't need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". It only needs to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," when you have an installation of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus operator")," running inside the Kubernetes cluster."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For differences between ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus operator"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus"},"kube-prometheus")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"community kube-prometheus-stack helm chart"),", the details are documented ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator#prometheus-operator-vs-kube-prometheus-vs-community-helm-chart"},"here"),".")),(0,r.kt)("h3",{id:"monitor-types"},"Monitor types"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"monitorType")," flag indicates the kind of monitor Kusion will create. It only applies when ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". As of version 0.10.0, Kusion provides options to scrape metrics from either the application pods or its corresponding Kubernetes services. This determines the different kinds of resources Kusion manages when Prometheus runs as an operator in the target cluster."),(0,r.kt)("p",null,"A sample ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml")," with Prometheus settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  ...\n  kusionstack/monitoring@0.1.0:\n    default:\n      operatorMode: True\n      monitorType: Service\n      scheme: http\n      interval: 30s\n      timeout: 15s\n...\n")),(0,r.kt)("p",null,"To instruct Prometheus to scrape from pod targets instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  ...\n  kusionstack/monitoring@0.1.0:\n    default:\n      operatorMode: True\n      monitorType: Pod\n      scheme: http\n      interval: 30s\n      timeout: 15s\n...\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," is omitted from the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml"),", Kusion defaults ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," to false."),(0,r.kt)("h3",{id:"overriding-with-projectselector"},"Overriding with projectSelector"),(0,r.kt)("p",null,"Workspace configurations contain a set of default setting group for all projects in the workspace, with means to override them by Projects using a ",(0,r.kt)("inlineCode",{parentName:"p"},"projectSelector")," keyword."),(0,r.kt)("p",null,"Projects with the name matching those in projectSelector will use the values defined in that override group instead of the default. If a key is not present in the override group, the default value will be used."),(0,r.kt)("p",null,"Take a look at the sample ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  ...\n  kusionstack/monitoring@0.1.0:\n    default:\n      operatorMode: True\n      monitorType: Pod\n      scheme: http\n      interval: 30s\n      timeout: 15s\n    low_frequency:\n      operatorMode: False\n      interval: 2m\n      projectSelector:\n      - foobar\n    high_frequency:\n      monitorType: Service\n      projectSelector:\n      - helloworld\n...\n")),(0,r.kt)("p",null,"In the example above, a project with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld")," will have the monitoring settings where ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),", a 2 minute scraping interval, 15 seconds timeout (coming from default) and http scheme (coming from default)."),(0,r.kt)("p",null,"You cannot have the same project appear in two projectSelectors."),(0,r.kt)("p",null,"For a full reference of what can be configured in the workspace level, please see the ",(0,r.kt)("a",{parentName:"p",href:"../../reference/modules/workspace-configs/monitoring/prometheus"},"workspace reference"),"."),(0,r.kt)("h2",{id:"updating-the-workspace-config"},"Updating the workspace config"),(0,r.kt)("p",null,"Assuming you now have a ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml")," that looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  kusionstack/monitoring@0.1.0:\n    default:\n      operatorMode: True\n      monitorType: Service\n      scheme: http\n      interval: 30s\n      timeout: 15s\n...\n")),(0,r.kt)("p",null,"Update the workspace configuration by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion workspace update dev -f workspace.yaml\n")),(0,r.kt)("p",null,"Verify the workspace config is properly updated by running the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion workspace show dev\n")),(0,r.kt)("h2",{id:"using-kusion-to-deploy-your-application-with-monitoring-requirements"},"Using kusion to deploy your application with monitoring requirements"),(0,r.kt)("p",null,"At this point we are set up for good! Any new applications you deploy via kusion will now automatically have the monitoring-related resources created, should you declare you want it via the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model."),(0,r.kt)("p",null,"The monitoring in an AppConfiguration is declared in the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring")," field. See the example below for a full, deployable AppConfiguration."),(0,r.kt)("p",null,"Please note we are using a new image ",(0,r.kt)("inlineCode",{parentName:"p"},"quay.io/brancz/prometheus-example-app")," since the app itself need to expose metrics for Prometheus to scrape:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helloworld/dev/kcl.mod"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[package]\nname = "helloworld"\n\n[dependencies]\nmonitoring = { oci = "oci://ghcr.io/kusionstack/monitoring", tag = "0.2.0" }\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.2.0" }\nservice = { oci = "oci://ghcr.io/kusionstack/service", tag = "0.1.0" }\n\n[profile]\nentries = ["main.k"]\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helloworld/dev/main.k"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport monitoring as m\nimport network.network as n\n\nhelloworld: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "monitoring-sample-app": c.Container {\n                image: "quay.io/brancz/prometheus-example-app:v0.3.0"\n            }\n        }\n    }\n    # Add the monitoring configuration backed by Prometheus\n    accessories: {\n        "monitoring": m.Prometheus {\n            path:           "/metrics"\n        }\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 8080\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The KCL file above represents an application with a service type workload, exposing the port 8080, and would like Prometheus to scrape the ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint every 2 minutes."),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply")," would show that kusion will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment"),", a ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceMonitor"),":\n",(0,r.kt)("img",{alt:"kusion-apply-with-monitor",src:o(448).Z,width:"705",height:"224"})),(0,r.kt)("p",null,"Continue applying all resources:\n",(0,r.kt)("img",{alt:"kusion-apply-success",src:o(56816).Z,width:"1047",height:"564"})),(0,r.kt)("p",null,"If we want to, we can verify the service monitor has been created successfully:\n",(0,r.kt)("img",{alt:"service-monitor",src:o(58232).Z,width:"693",height:"463"})),(0,r.kt)("p",null,"In a few seconds, you should be able to see in the Prometheus portal that the service we just deployed has now been discovered and monitored by Prometheus:\n",(0,r.kt)("img",{alt:"prometheus-targets",src:o(87594).Z,width:"2880",height:"1636"})),(0,r.kt)("p",null,"You can run a few simply queries for the data that Prometheus scraped from your application:\n",(0,r.kt)("img",{alt:"prometheus-simple-query",src:o(87695).Z,width:"2880",height:"1634"})),(0,r.kt)("p",null,"For more info about PromQL, you can find them ",(0,r.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"here"),(0,r.kt)("sup",null,"[4]"),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prometheus: ",(0,r.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/overview/"},"https://prometheus.io/docs/introduction/overview/")),(0,r.kt)("li",{parentName:"ol"},"Prometheus team advise: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator/issues/1547#issuecomment-446691500"},"https://github.com/prometheus-operator/prometheus-operator/issues/1547#issuecomment-446691500")),(0,r.kt)("li",{parentName:"ol"},"Prometheus operator getting started doc: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md"},"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/user-guides/getting-started.md")),(0,r.kt)("li",{parentName:"ol"},"PromQL basics: ",(0,r.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"https://prometheus.io/docs/prometheus/latest/querying/basics/"))))}c.isMDXComponent=!0},56816:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/kusion-apply-success-52d04db670fd184959c3ea5c9e54f69d.png"},448:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/kusion-apply-with-monitor-d27cd1443e1a324d514983d52c055b15.png"},91512:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/prometheus-operated-4cf8308703e4ec9d06a5078bbceb8d5d.png"},35443:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/prometheus-portal-b60d8654c309e675fc04f1e74c5c127a.png"},87695:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/prometheus-simple-query-60205589e762105ebc850e70d8ea7b56.png"},87594:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/prometheus-targets-05964bad58af16f2e02c57cafa8565e7.png"},58232:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/service-monitor-2374625bfd1180a978a2be50ad4648ce.png"}}]);