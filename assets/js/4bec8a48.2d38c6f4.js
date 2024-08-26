"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63072],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5025:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:2},i="Installation",o={unversionedId:"started/install",id:"version-v0.4/started/install",title:"Installation",description:"Install with helm",source:"@site/kuperator_versioned_docs/version-v0.4/started/install.md",sourceDirName:"started",slug:"/started/install",permalink:"/kuperator/v0.4/started/install",draft:!1,tags:[],version:"v0.4",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"kuperator",previous:{title:"What is KusionStack Kuperator?",permalink:"/kuperator/v0.4/introduction/"},next:{title:"Using KusionStack Kuperator to operate Pods gracefully",permalink:"/kuperator/v0.4/started/demo-graceful-operation"}},p={},u=[{value:"Install with helm",id:"install-with-helm",level:2},{value:"Optional: chart parameters",id:"optional-chart-parameters",level:3},{value:"Upgrade",id:"upgrade",level:3},{value:"Uninstall",id:"uninstall",level:3}],s={toc:u};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"install-with-helm"},"Install with helm"),(0,r.kt)("p",null,"KusionStack Kuperator requires ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.18")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Firstly add charts repository if you haven't do this.\n$ helm repo add kusionstack https://kusionstack.github.io/charts\n\n# To update the kusionstack repo.\n$ helm repo update kusionstack\n\n# Install the latest version.\n$ helm install kuperator kusionstack/kuperator \n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},"Helm")," is a tool for managing packages of pre-configured Kubernetes resources."),(0,r.kt)("h3",{id:"optional-chart-parameters"},"Optional: chart parameters"),(0,r.kt)("p",null,"The following table lists the configurable parameters of the chart and their default values."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespace")),(0,r.kt)("td",{parentName:"tr",align:null},"namespace for Kuperator installation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kusionstack-system"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespaceEnabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to create the installation.namespace"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"managerReplicas")),(0,r.kt)("td",{parentName:"tr",align:null},"Replicas of Kuperator deployment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.repo")),(0,r.kt)("td",{parentName:"tr",align:null},"Repository for kuperator image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kusionstack/kuperator"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.pullPolicy")),(0,r.kt)("td",{parentName:"tr",align:null},"Image pull policy for kuperator-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IfNotPresent"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.tag")),(0,r.kt)("td",{parentName:"tr",align:null},"Tag for kuperator-manager image"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"v0.1.0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.limits.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource limit of kuperator-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.limits.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource limit of kuperator-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"128Mi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.requests.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"CPU resource request of kuperator-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10m"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.requests.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Memory resource request of kuperator-manager container"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"64Mi"))))),(0,r.kt)("h3",{id:"upgrade"},"Upgrade"),(0,r.kt)("p",null,"Run following command to upgrade KusionStack Kuperator to the latest version."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Upgrade to the latest version \n$ helm upgrade kuperator kusionstack/kuperator \n")),(0,r.kt)("h3",{id:"uninstall"},"Uninstall"),(0,r.kt)("p",null,"Run following command to uninstall KusionStack Kuperator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Uninstall\n$ helm uninstall kuperator\n")))}m.isMDXComponent=!0}}]);