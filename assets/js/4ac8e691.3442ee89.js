"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3677],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67584:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1},i="Installation",o={unversionedId:"ctrlmesh/started/install",id:"ctrlmesh/started/install",title:"Installation",description:"Install with helm",source:"@site/docs/ctrlmesh/started/install.md",sourceDirName:"ctrlmesh/started",slug:"/ctrlmesh/started/install",permalink:"/docs/next/ctrlmesh/started/install",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/ctrlmesh/started/install.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1709188611,formattedLastUpdatedAt:"Feb 29, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ctrlmesh",previous:{title:"Concepts",permalink:"/docs/next/ctrlmesh/concepts/"},next:{title:"Try a Sample",permalink:"/docs/next/ctrlmesh/started/try"}},m={},p=[{value:"Install with helm",id:"install-with-helm",level:2},{value:"Optional: chart parameters",id:"optional-chart-parameters",level:3}],s={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"install-with-helm"},"Install with helm"),(0,r.kt)("p",null,"Controller Mesh requires ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.18")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add charts repository if you haven't do this.\n$ helm repo add kusionstack https://kusionstack.github.io/charts\n\n# To update the kusionstack repo.\n$ helm repo update kusionstack\n\n# Install the latest version.\n$ helm install ctrlmesh kusionstack/ctrlmesh\n\n# Upgrade to the latest version \n$ helm upgrade ctrlmesh kusionstack/ctrlmesh \n\n# Uninstall\n$ helm uninstall ctrlmesh\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},"Helm")," is a tool for managing packages of pre-configured Kubernetes resources."),(0,r.kt)("h3",{id:"optional-chart-parameters"},"Optional: chart parameters"),(0,r.kt)("p",null,"The following table lists the configurable parameters of the chart and their default values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"namespace for controller mesh installation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ctrlmesh"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespaceEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to create the installation.namespace"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.replicas")),(0,r.kt)("td",{parentName:"tr",align:null},"Replicas of ctrlmesh-manager deployment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.image.repo")),(0,r.kt)("td",{parentName:"tr",align:null},"Repository for ctrlmesh-manager image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kusionstack/ctrlmesh-manager"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.image.pullPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"Image pull policy for ctrlmesh-manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IfNotPresent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Tag for ctrlmesh-manager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v0.1.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource limit of ctrlmesh-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource limit of ctrlmesh-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"512Mi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource request of ctrlmesh-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource request of ctrlmesh-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"64Mi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxy.image.repo")),(0,r.kt)("td",{parentName:"tr",align:null},"Repository for ctrlmesh-proxy image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kusionstack/ctrlmesh-proxy"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxy.image.pullPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"Image pull policy for ctrlmesh-proxy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IfNotPresent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxy.image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Tag for ctrlmesh-proxy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v0.1.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxy.resources.limits.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource requests of ctrlmesh-proxy container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"proxy.resources.limits.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource requests of ctrlmesh-proxy container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100Mi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"init.image.repo")),(0,r.kt)("td",{parentName:"tr",align:null},"Repository for ctrlmesh-init image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kusionstack/ctrlmesh-init"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"init.image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Tag for ctrlmesh-init"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v0.1.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"shardingGroupVersionKinds")),(0,r.kt)("td",{parentName:"tr",align:null},"Sharding resource lists\uff08yaml\uff09"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"config ",(0,r.kt)("inlineCode",{parentName:"p"},"groupVersionKinds")," in file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"ctrlmesh.kusionstack.io/v1alpha1:\n- '*'\nv1:\n- Pod\n- PersistentVolumeClaim\n- Service\n- ConfigMap\n- Endpoint\napps/v1:\n- StatefulSet\n- ReplicaSet\n- ControllerRevision\n")),(0,r.kt)("p",null,"Specify each parameter using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--set key=value")," argument to ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"."))}d.isMDXComponent=!0}}]);