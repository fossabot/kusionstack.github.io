"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},l),{},{components:n})):o.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={},i="Application Monitoring",p={unversionedId:"configuration-walkthrough/monitoring",id:"version-v0.12/configuration-walkthrough/monitoring",title:"Application Monitoring",description:"You could also specify the collection of monitoring requirements for the application. That can be achieved via a monitoring module (or bring-your-own-module) in the accessories field in AppConfiguration to achieve that.",source:"@site/docs_versioned_docs/version-v0.12/4-configuration-walkthrough/8-monitoring.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/monitoring",permalink:"/docs/configuration-walkthrough/monitoring",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/4-configuration-walkthrough/8-monitoring.md",tags:[],version:"v0.12",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1719756905,formattedLastUpdatedAt:"Jun 30, 2024",sidebarPosition:8,frontMatter:{},sidebar:"kusion",previous:{title:"Secrets",permalink:"/docs/configuration-walkthrough/secret"},next:{title:"Operational Rules",permalink:"/docs/configuration-walkthrough/operational-rules"}},s={},u=[{value:"Import",id:"import",level:2},{value:"Workspace configurations",id:"workspace-configurations",level:2},{value:"Managing Scraping Configuration",id:"managing-scraping-configuration",level:2},{value:"Default values",id:"default-values",level:2}],l={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-monitoring"},"Application Monitoring"),(0,r.kt)("p",null,"You could also specify the collection of monitoring requirements for the application. That can be achieved via a ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring")," module (or bring-your-own-module) in the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessories")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," to achieve that."),(0,r.kt)("p",null,"As of version 0.11.0, Kusion supports integration with Prometheus by managing scraping behaviors in the configuration file."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For the monitoring configuration to work (more specifically, consumed by Prometheus), this requires the target cluster to have installed Prometheus correctly, either as a Kubernetes operator or a server/agent."),(0,r.kt)("p",{parentName:"admonition"},"More about how to set up Prometheus can be found in the ",(0,r.kt)("a",{parentName:"p",href:"../user-guides/observability/prometheus"},"Prometheus User Guide for Kusion"))),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kam")," package and the ",(0,r.kt)("inlineCode",{parentName:"p"},"monitoring")," Kusion Module. For more details on KCL package and module import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import kam.v1.app_configuration as ac\nimport kam.v1.workload as wl\nimport monitoring as m\n")),(0,r.kt)("h2",{id:"workspace-configurations"},"Workspace configurations"),(0,r.kt)("p",null,"In addition to the KCL configuration file, there are also workspace-level configurations that should be set first. In an ideal scenario, this step is done by the platform engineers. "),(0,r.kt)("p",null,"In the event that they do not exist for you or your organization, e.g. if you are an individual developer, you can either do it yourself or use the ",(0,r.kt)("a",{parentName:"p",href:"#default-values"},"default values")," provided by the KusionStack team. The steps to do this yourself can be found in the ",(0,r.kt)("a",{parentName:"p",href:"../user-guides/observability/prometheus#setting-up-workspace-configs"},"Prometheus User Guide for Kusion"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more details on how workspaces work, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/workspace"},"workspace concept"))),(0,r.kt)("p",null,"By separating configurations that the developers are interested in and those that platform owners are interested in, we can reduce the cognitive complexity of the application configuration and achieve separation of concern."),(0,r.kt)("p",null,"You can append the following YAML file to your own workspace configurations and update the corresponding workspace with command ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion workspace update"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  kusionstack/monitoring@v0.1.0:\n    default:\n      interval: 30s\n        monitorType: Pod\n        operatorMode: true\n        scheme: http\n        timeout: 15s\n")),(0,r.kt)("h2",{id:"managing-scraping-configuration"},"Managing Scraping Configuration"),(0,r.kt)("p",null,"To manage scrape configuration for the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: service.Service {\n        # ...\n    }\n    # Add the monitoring configuration backed by Prometheus\n    accessories: {\n        "monitoring": m.Prometheus {\n            path:           "/metrics"\n            port:           "web"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The example above will instruct the Prometheus job to scrape metrics from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint of the application on the port named ",(0,r.kt)("inlineCode",{parentName:"p"},"web"),"."),(0,r.kt)("p",null,"To instruct Prometheus to scrape from ",(0,r.kt)("inlineCode",{parentName:"p"},"/actuator/metrics")," on port ",(0,r.kt)("inlineCode",{parentName:"p"},"9099")," instead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: service.Service {\n        # ...\n    }\n    # Add the monitoring configuration backed by Prometheus\n    accessories: {\n        "monitoring": m.Prometheus {\n            path:           "/actuator/metrics"\n            port:           "9099"\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Note that numbered ports only work when your Prometheus is not running as an operator. "),(0,r.kt)("p",null,"Neither ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," are required fields if Prometheus runs as an operator. If omitted, ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"/metrics"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," defaults to the container port or service port, depending on which resource is being monitored. If Prometheus does not run as an operator, both fields are required."),(0,r.kt)("p",null,"Scraping scheme, interval and timeout are considered platform-managed configurations and are therefore managed as part of the ",(0,r.kt)("a",{parentName:"p",href:"../user-guides/observability/prometheus#setting-up-workspace-configs"},"workspace configurations"),"."),(0,r.kt)("p",null,"More details about how the Prometheus integration works can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/docs/prometheus.md"},"design documentation"),"."),(0,r.kt)("h2",{id:"default-values"},"Default values"),(0,r.kt)("p",null,"If no workspace configurations are found, the default values provided by the KusionStack team are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scraping interval defaults to 30 seconds"),(0,r.kt)("li",{parentName:"ul"},"Scraping timeout defaults to 15 seconds"),(0,r.kt)("li",{parentName:"ul"},"Scraping scheme defaults to http"),(0,r.kt)("li",{parentName:"ul"},"Defaults to NOT running as an operator")),(0,r.kt)("p",null,"If any of the default values does not meet your need, you can change them by ",(0,r.kt)("a",{parentName:"p",href:"../user-guides/observability/prometheus#setting-up-workspace-configs"},"setting up the workspace configuration"),"."))}c.isMDXComponent=!0}}]);