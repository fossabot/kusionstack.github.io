"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61506],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return a?r.createElement(c,i(i({ref:e},m),{},{components:a})):r.createElement(c,i({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21002:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={title:"Installation"},i=void 0,o={unversionedId:"getting-started/installation",id:"version-v0.5/getting-started/installation",title:"Installation",description:"Install with helm",source:"@site/karpor_versioned_docs/version-v0.5/1-getting-started/2-installation.md",sourceDirName:"1-getting-started",slug:"/getting-started/installation",permalink:"/karpor/getting-started/installation",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.5/1-getting-started/2-installation.md",tags:[],version:"v0.5",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:2,frontMatter:{title:"Installation"},sidebar:"karpor",previous:{title:"Overview",permalink:"/karpor/"},next:{title:"Quick Start",permalink:"/karpor/getting-started/quick-start"}},p={},s=[{value:"Install with helm",id:"install-with-helm",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Remote Installation",id:"remote-installation",level:3},{value:"Search all available versions",id:"search-all-available-versions",level:3},{value:"Upgrade specified version",id:"upgrade-specified-version",level:3},{value:"Local Installation",id:"local-installation",level:3},{value:"Uninstall",id:"uninstall",level:3},{value:"Image Registry Proxy for China",id:"image-registry-proxy-for-china",level:3},{value:"Chart Parameters",id:"chart-parameters",level:3},{value:"General Parameters",id:"general-parameters",level:4},{value:"Global Parameters",id:"global-parameters",level:4},{value:"Karpor Server",id:"karpor-server",level:4},{value:"Karpor Syncer",id:"karpor-syncer",level:4},{value:"ElasticSearch",id:"elasticsearch",level:4},{value:"ETCD",id:"etcd",level:4},{value:"Job",id:"job",level:4}],m={toc:s};function d(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"install-with-helm"},"Install with helm"),(0,n.kt)("p",null,"If you have a kubernetes cluster, helm is the recommended installation method."),(0,n.kt)("p",null,"The following tutorial will guide you to install Karpor using Helm, which will install the chart with the release name ",(0,n.kt)("inlineCode",{parentName:"p"},"karpor-release")," in namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"karpor"),"."),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Helm v3+"),(0,n.kt)("li",{parentName:"ul"},"A Kubernetes Cluster (The simplest way is to deploy a kubernetes cluster locally using ",(0,n.kt)("inlineCode",{parentName:"li"},"kind")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"minikube"),")")),(0,n.kt)("h3",{id:"remote-installation"},"Remote Installation"),(0,n.kt)("p",null,"First, add the karpor chart repo to your local repository."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add kusionstack https://kusionstack.github.io/charts\nhelm repo update\n")),(0,n.kt)("p",null,"Then you can use the following command to install the latest version of Karpor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install karpor-release kusionstack/karpor\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Install",src:a(57706).Z,width:"1136",height:"720"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")," that installing this chart directly means it will use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/charts/blob/master/charts/karpor/values.yaml"},"default template values")," for Karpor."),(0,n.kt)("p",null,"You may have to set your specific configurations if it is deployed into a production cluster, or you want to customize the chart configuration, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"resources"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"replicas"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"port")," etc."),(0,n.kt)("p",null,"All configurable parameters of the Karpor chart are detailed ",(0,n.kt)("a",{parentName:"p",href:"#chart-parameters"},"here"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install karpor-release kusionstack/karpor --set server.replicas=3 --set syncer.port=7654\n")),(0,n.kt)("h3",{id:"search-all-available-versions"},"Search all available versions"),(0,n.kt)("p",null,"You can use the following command to view all installable chart versions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm search repo kusionstack/karpor --versions\n")),(0,n.kt)("h3",{id:"upgrade-specified-version"},"Upgrade specified version"),(0,n.kt)("p",null,"You can specify the version to be upgraded through the ",(0,n.kt)("inlineCode",{parentName:"p"},"--version"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# Upgrade to the latest version.\nhelm upgrade karpor-release kusionstack/karpor\n\n# Upgrade to the specified version.\nhelm upgrade karpor-release kusionstack/karpor --version 1.2.3\n")),(0,n.kt)("h3",{id:"local-installation"},"Local Installation"),(0,n.kt)("p",null,"If you have problem connecting to ",(0,n.kt)("a",{parentName:"p",href:"https://kusionstack.github.io/charts/"},"https://kusionstack.github.io/charts/")," in production, you may need to manually download the chart from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/charts"},"here")," and use it to install or upgrade locally."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/KusionStack/charts.git\nhelm install karpor-release charts/karpor\nhelm upgrade karpor-release charts/karpor\n")),(0,n.kt)("h3",{id:"uninstall"},"Uninstall"),(0,n.kt)("p",null,"To uninstall/delete the ",(0,n.kt)("inlineCode",{parentName:"p"},"karpor-release")," helm release in namespace ",(0,n.kt)("inlineCode",{parentName:"p"},"karpor"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall karpor-release\n")),(0,n.kt)("h3",{id:"image-registry-proxy-for-china"},"Image Registry Proxy for China"),(0,n.kt)("p",null,"If you are in China and have problem to pull image from official DockerHub, you can use the registry proxy:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install karpor-release kusionstack/karpor --set registryProxy=docker.m.daocloud.io\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE"),": The above is just an example, you can replace the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"registryProxy")," as needed."),(0,n.kt)("h3",{id:"chart-parameters"},"Chart Parameters"),(0,n.kt)("p",null,"The following table lists the configurable parameters of the chart and their default values."),(0,n.kt)("h4",{id:"general-parameters"},"General Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"namespace"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"karpor"')),(0,n.kt)("td",{parentName:"tr",align:null},"Which namespace to be deployed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"namespaceEnabled"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"Whether to generate namespace.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"registryProxy"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'""')),(0,n.kt)("td",{parentName:"tr",align:null},"Image registry proxy will be the prefix as all component image.")))),(0,n.kt)("h4",{id:"global-parameters"},"Global Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"global.image.imagePullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"IfNotPresent"')),(0,n.kt)("td",{parentName:"tr",align:null},"Image pull policy to be applied to all Karpor components.")))),(0,n.kt)("h4",{id:"karpor-server"},"Karpor Server"),(0,n.kt)("p",null,"The Karpor Server Component is main backend server. It itself is an ",(0,n.kt)("inlineCode",{parentName:"p"},"apiserver"),", which also provides ",(0,n.kt)("inlineCode",{parentName:"p"},"/rest-api")," to serve Dashboard."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"kusionstack/karpor"')),(0,n.kt)("td",{parentName:"tr",align:null},"Repository for Karpor server image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'""')),(0,n.kt)("td",{parentName:"tr",align:null},"Tag for Karpor server image. Defaults to the chart's appVersion if not specified.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"karpor-server"')),(0,n.kt)("td",{parentName:"tr",align:null},"Component name for karpor server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"7443")),(0,n.kt)("td",{parentName:"tr",align:null},"Port for karpor server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.replicas"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of karpor server pods to run.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.resources"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"limits":{"cpu":"500m","ephemeral-storage":"10Gi","memory":"1Gi"},"requests":{"cpu":"250m","ephemeral-storage":"2Gi","memory":"256Mi"}}')),(0,n.kt)("td",{parentName:"tr",align:null},"Resource limits and requests for the karpor server pods.")))),(0,n.kt)("h4",{id:"karpor-syncer"},"Karpor Syncer"),(0,n.kt)("p",null,"The Karpor Syncer Component is independent server to synchronize cluster resources in real-time."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"kusionstack/karpor"')),(0,n.kt)("td",{parentName:"tr",align:null},"Repository for Karpor syncer image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'""')),(0,n.kt)("td",{parentName:"tr",align:null},"Tag for Karpor syncer image. Defaults to the chart's appVersion if not specified.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"karpor-syncer"')),(0,n.kt)("td",{parentName:"tr",align:null},"Component name for Karpor syncer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"7443")),(0,n.kt)("td",{parentName:"tr",align:null},"Port for Karpor syncer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.replicas"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of karpor syncer pods to run.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.resources"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"limits":{"cpu":"500m","ephemeral-storage":"10Gi","memory":"1Gi"},"requests":{"cpu":"250m","ephemeral-storage":"2Gi","memory":"256Mi"}}')),(0,n.kt)("td",{parentName:"tr",align:null},"Resource limits and requests for the karpor syncer pods.")))),(0,n.kt)("h4",{id:"elasticsearch"},"ElasticSearch"),(0,n.kt)("p",null,"The ElasticSearch Component to store the synchronized resources and user data."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"docker.elastic.co/elasticsearch/elasticsearch"')),(0,n.kt)("td",{parentName:"tr",align:null},"Repository for ElasticSearch image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"8.6.2"')),(0,n.kt)("td",{parentName:"tr",align:null},"Specific tag for ElasticSearch image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"elasticsearch"')),(0,n.kt)("td",{parentName:"tr",align:null},"Component name for ElasticSearch.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"9200")),(0,n.kt)("td",{parentName:"tr",align:null},"Port for ElasticSearch.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.replicas"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of ElasticSearch pods to run.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.resources"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"limits":{"cpu":"2","ephemeral-storage":"10Gi","memory":"4Gi"},"requests":{"cpu":"2","ephemeral-storage":"10Gi","memory":"4Gi"}}')),(0,n.kt)("td",{parentName:"tr",align:null},"Resource limits and requests for the karpor elasticsearch pods.")))),(0,n.kt)("h4",{id:"etcd"},"ETCD"),(0,n.kt)("p",null,"The ETCD Component is the storage of Karpor Server as ",(0,n.kt)("inlineCode",{parentName:"p"},"apiserver"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"quay.io/coreos/etcd"')),(0,n.kt)("td",{parentName:"tr",align:null},"Repository for ETCD image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"v3.5.11"')),(0,n.kt)("td",{parentName:"tr",align:null},"Specific tag for ETCD image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"etcd"')),(0,n.kt)("td",{parentName:"tr",align:null},"Component name for ETCD.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"2379")),(0,n.kt)("td",{parentName:"tr",align:null},"Port for ETCD.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.replicas"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:null},"The number of etcd pods to run.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.resources"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"limits":{"cpu":"500m","ephemeral-storage":"10Gi","memory":"1Gi"},"requests":{"cpu":"250m","ephemeral-storage":"2Gi","memory":"256Mi"}}')),(0,n.kt)("td",{parentName:"tr",align:null},"Resource limits and requests for the karpor etcd pods.")))),(0,n.kt)("h4",{id:"job"},"Job"),(0,n.kt)("p",null,"This one-time job is used to generate root certificates and some preliminary work."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"job.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"kusionstack/karpor"')),(0,n.kt)("td",{parentName:"tr",align:null},"Repository for the Job image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"job.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'""')),(0,n.kt)("td",{parentName:"tr",align:null},"Tag for Karpor image. Defaults to the chart's appVersion if not specified.")))))}d.isMDXComponent=!0},57706:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/install-88bc3ca743abac3d801e8e6f7f23471c.gif"}}]);