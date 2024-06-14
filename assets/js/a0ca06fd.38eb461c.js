"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:8},a="Application Monitoring",p={unversionedId:"config-walkthrough/monitoring",id:"version-v0.9/config-walkthrough/monitoring",title:"Application Monitoring",description:"The monitoring attribute in the AppConfiguration instance is used to describe the specification for the collection of monitoring requirements for the application.",source:"@site/docs_versioned_docs/version-v0.9/config-walkthrough/monitoring.md",sourceDirName:"config-walkthrough",slug:"/config-walkthrough/monitoring",permalink:"/docs/v0.9/config-walkthrough/monitoring",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/config-walkthrough/monitoring.md",tags:[],version:"v0.9",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718359438,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"kusion",previous:{title:"Secret Management",permalink:"/docs/v0.9/config-walkthrough/secret"},next:{title:"Operational Rules",permalink:"/docs/v0.9/config-walkthrough/operational_rules"}},s={},l=[{value:"Import",id:"import",level:2},{value:"Project-level configurations",id:"project-level-configurations",level:2},{value:"Operator mode",id:"operator-mode",level:3},{value:"Monitor types",id:"monitor-types",level:3},{value:"Managing Scraping Configuration",id:"managing-scraping-configuration",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-monitoring"},"Application Monitoring"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance is used to describe the specification for the collection of monitoring requirements for the application."),(0,r.kt)("p",null,"As of version 0.9.0, Kusion supports integration with Prometheus by managing scraping behaviors in the configuration file."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring")," attribute requires the target cluster to have installed Prometheus correctly, either as a Kubernetes operator or a server/agent."),(0,r.kt)("p",{parentName:"admonition"},"More about how to set up Prometheus can be found in the ",(0,r.kt)("a",{parentName:"p",href:"../guides/observability/prometheus"},"Prometheus User Guide for Kusion"))),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," package. For more details on KCL package import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../config-walkthrough/overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.monitoring as m\n")),(0,r.kt)("h2",{id:"project-level-configurations"},"Project-level configurations"),(0,r.kt)("p",null,"In addition to the KCL configuration file, there are also project-level configurations that can be set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," in hte project root directory."),(0,r.kt)("p",null,"By separating configurations that the developers are interested in and those that platform owners are interested in, we can reduce the cognitive complexity of the application configuration and achieve separation of concern."),(0,r.kt)("p",null,"In the context of ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring"),", there are two flags you can set in ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," that will alter the behavior of Kusion."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you have initialized the projects with ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion init"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," should be automatically created for you.")),(0,r.kt)("h3",{id:"operator-mode"},"Operator mode"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," flag indicates to Kusion whether the Prometheus instance installed in the cluster runs as a Kubernetes operator or not. This determines the different kinds of resources Kusion manages."),(0,r.kt)("p",null,"To see more about different ways to run Prometheus in the Kubernetes cluster, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/docs/prometheus.md#prometheus-installation"},"design documentation"),"."),(0,r.kt)("p",null,"Most cloud vendors provide an out-of-the-box monitoring solutions for workloads running in a managed-Kubernetes cluster (EKS, AKS, etc), such as AWS CloudWatch, Azure Monitor, etc. These solutions mostly involve installing an agent (CloudWatch Agent, OMS Agent, etc) in the cluster and collecting the metrics to a centralized monitoring server. In those cases, you don't need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". It only needs to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," when you have an installation of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus operator")," running inside the Kubernetes cluster."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For differences between ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus operator"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus"},"kube-prometheus")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"community kube-prometheus-stack helm chart"),", the details are documented ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator#prometheus-operator-vs-kube-prometheus-vs-community-helm-chart"},"here"),".")),(0,r.kt)("h3",{id:"monitor-types"},"Monitor types"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"monitorType")," flag indicates the kind of monitor Kusion will create. It only applies when ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". As of version 0.9.0, Kusion provides options to scrape metrics from either the application pods or its corresponding Kubernetes services. This determines the different kinds of resources Kusion manages when Prometheus runs as an operator in the target cluster."),(0,r.kt)("p",null,"A sample ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," with Prometheus settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The project basic info\nname: multi-stack-project\ngenerator:\n  type: AppConfiguration\nprometheus:\n  operatorMode: True\n  monitorType: Service\n")),(0,r.kt)("p",null,"To instruct Prometheus to scrape from pod targets instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The project basic info\nname: multi-stack-project\ngenerator:\n  type: AppConfiguration\nprometheus:\n  operatorMode: True\n  monitorType: Pod\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," section is missing from the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml"),", Kusion defaults ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," to false."),(0,r.kt)("h2",{id:"managing-scraping-configuration"},"Managing Scraping Configuration"),(0,r.kt)("p",null,"To create scrape configuration for the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n    }\n    monitoring: m.Prometheus{\n        interval:       "30s"\n        timeout:        "15s"\n        path:           "/metrics"\n        port:           "web"\n        scheme:         "http"\n    }\n}\n')),(0,r.kt)("p",null,"The example above will instruct the Prometheus job to scrape metrics from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint of the application every 30 seconds."),(0,r.kt)("p",null,"To instruct Prometheus to scrape from ",(0,r.kt)("inlineCode",{parentName:"p"},"actuator/metrics")," on port ",(0,r.kt)("inlineCode",{parentName:"p"},"9099")," instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n    }\n    monitoring: m.Prometheus{\n        interval:       "10s"\n        timeout:        "5s"\n        path:           "/actuator/metrics"\n        port:           "9099"\n        scheme:         "http"\n    }\n}\n')),(0,r.kt)("p",null,"More details about how the Prometheus integration works can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/docs/prometheus"},"design documentation"),"."))}u.isMDXComponent=!0}}]);