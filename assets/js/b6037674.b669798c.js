"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6733],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(o),h=r,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||i;return o?n.createElement(d,a(a({ref:t},c),{},{components:o})):n.createElement(d,a({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1409:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:8},a="Application Monitoring",s={unversionedId:"user_docs/config-walkthrough/monitoring",id:"user_docs/config-walkthrough/monitoring",title:"Application Monitoring",description:"The monitoring attribute in the AppConfiguration instance is used to describe the specification for the collection of monitoring requirements for the application.",source:"@site/docs/user_docs/config-walkthrough/monitoring.md",sourceDirName:"user_docs/config-walkthrough",slug:"/user_docs/config-walkthrough/monitoring",permalink:"/docs/next/user_docs/config-walkthrough/monitoring",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/config-walkthrough/monitoring.md",tags:[],version:"current",lastUpdatedBy:"WeichengWang1",lastUpdatedAt:1704782400,formattedLastUpdatedAt:"Jan 9, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"user_docs",previous:{title:"Secret Management",permalink:"/docs/next/user_docs/config-walkthrough/secret"},next:{title:"Operational Rules",permalink:"/docs/next/user_docs/config-walkthrough/operational_rules"}},p={},l=[{value:"Import",id:"import",level:2},{value:"Project-level configurations",id:"project-level-configurations",level:2},{value:"Operator mode",id:"operator-mode",level:3},{value:"Monitor types",id:"monitor-types",level:3},{value:"Managing Scraping Configuration",id:"managing-scraping-configuration",level:2}],c={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-monitoring"},"Application Monitoring"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance is used to describe the specification for the collection of monitoring requirements for the application."),(0,r.kt)("p",null,"As of version 0.9.0, Kusion supports integration with Prometheus by managing scraping behaviors in the configuration file."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring")," attribute requires the target cluster to have installed Prometheus correctly, either as a Kubernetes operator or a server/agent."),(0,r.kt)("p",{parentName:"admonition"},"More about how to set up Prometheus can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/observability/prometheus"},"Prometheus User Guide for Kusion"))),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," package. For more details on KCL package import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/user_docs/config-walkthrough/overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.monitoring as m\n")),(0,r.kt)("h2",{id:"project-level-configurations"},"Project-level configurations"),(0,r.kt)("p",null,"In addition to the KCL configuration file, there are also project-level configurations that can be set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," in hte project root directory."),(0,r.kt)("p",null,"By separating configurations that the developers are interested in and those that platform owners are interested in, we can reduce the cognitive complexity of the application configuration and achieve separation of concern."),(0,r.kt)("p",null,"In the context of ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring"),", there are two flags you can set in ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," that will alter the behavior of Kusion."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you have initialized the projects with ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion init"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," should be automatically created for you.")),(0,r.kt)("h3",{id:"operator-mode"},"Operator mode"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," flag indicates to Kusion whether the Prometheus instance installed in the cluster runs as a Kubernetes operator or not. This determines the different kinds of resources Kusion manages."),(0,r.kt)("p",null,"To see more about different ways to run Prometheus in the Kubernetes cluster, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/docs/prometheus.md#prometheus-installation"},"design documentation"),"."),(0,r.kt)("p",null,"Most cloud vendors provide an out-of-the-box monitoring solutions for workloads running in a managed-Kubernetes cluster (EKS, AKS, etc), such as AWS CloudWatch, Azure Monitor, etc. These solutions mostly involve installing an agent (CloudWatch Agent, OMS Agent, etc) in the cluster and collecting the metrics to a centralized monitoring server. In those cases, you don't need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". It only needs to be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," when you have an installation of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus operator")," running inside the Kubernetes cluster."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For differences between ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus operator"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus"},"kube-prometheus")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"community kube-prometheus-stack helm chart"),", the details are documented ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator#prometheus-operator-vs-kube-prometheus-vs-community-helm-chart"},"here"),".")),(0,r.kt)("h3",{id:"monitor-types"},"Monitor types"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"monitorType")," flag indicates the kind of monitor Kusion will create. It only applies when ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". As of version 0.9.0, Kusion provides options to scrape metrics from either the application pods or its corresponding Kubernetes services. This determines the different kinds of resources Kusion manages when Prometheus runs as an operator in the target cluster."),(0,r.kt)("p",null,"A sample ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," with Prometheus settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The project basic info\nname: multi-stack-project\ngenerator:\n  type: AppConfiguration\nprometheus:\n  operatorMode: True\n  monitorType: Service\n")),(0,r.kt)("p",null,"To instruct Prometheus to scrape from pod targets instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# The project basic info\nname: multi-stack-project\ngenerator:\n  type: AppConfiguration\nprometheus:\n  operatorMode: True\n  monitorType: Pod\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus")," section is missing from the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml"),", Kusion defaults ",(0,r.kt)("inlineCode",{parentName:"p"},"operatorMode")," to false."),(0,r.kt)("h2",{id:"managing-scraping-configuration"},"Managing Scraping Configuration"),(0,r.kt)("p",null,"To create scrape configuration for the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n    }\n    monitoring: m.Prometheus{\n        interval:       "30s"\n        timeout:        "15s"\n        path:           "/metrics"\n        port:           "web"\n        scheme:         "http"\n    }\n}\n')),(0,r.kt)("p",null,"The example above will instruct the Prometheus job to scrape metrics from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint of the application every 30 seconds."),(0,r.kt)("p",null,"To instruct Prometheus to scrape from ",(0,r.kt)("inlineCode",{parentName:"p"},"actuator/metrics")," on port ",(0,r.kt)("inlineCode",{parentName:"p"},"9099")," instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n    }\n    monitoring: m.Prometheus{\n        interval:       "10s"\n        timeout:        "5s"\n        path:           "/actuator/metrics"\n        port:           "9099"\n        scheme:         "http"\n    }\n}\n')),(0,r.kt)("p",null,"More details about how the Prometheus integration works can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/docs/prometheus.md"},"design documentation"),"."))}u.isMDXComponent=!0}}]);