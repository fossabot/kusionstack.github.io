"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="monitoring",l={unversionedId:"kusion/reference/modules/workspace-configs/monitoring/prometheus",id:"version-v0.10/kusion/reference/modules/workspace-configs/monitoring/prometheus",title:"monitoring",description:"monitoring can be used to define workspace-level monitoring configurations.",source:"@site/versioned_docs/version-v0.10/kusion/6-reference/2-modules/2-workspace-configs/monitoring/prometheus.md",sourceDirName:"kusion/6-reference/2-modules/2-workspace-configs/monitoring",slug:"/kusion/reference/modules/workspace-configs/monitoring/prometheus",permalink:"/docs/kusion/reference/modules/workspace-configs/monitoring/prometheus",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.10/kusion/6-reference/2-modules/2-workspace-configs/monitoring/prometheus.md",tags:[],version:"v0.10",lastUpdatedBy:"KK",lastUpdatedAt:1711420915,formattedLastUpdatedAt:"Mar 26, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"postgres",permalink:"/docs/kusion/reference/modules/workspace-configs/database/postgres"},next:{title:"port",permalink:"/docs/kusion/reference/modules/workspace-configs/networking/port"}},s={},p=[{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring"},"monitoring"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"monitoring")," can be used to define workspace-level monitoring configurations."),(0,o.kt)("h2",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"operatorMode"),(0,o.kt)("br",null),"Whether the Prometheus instance installed in the cluster runs as a Kubernetes operator or not. This determines the different kinds of resources Kusion manages."),(0,o.kt)("td",{parentName:"tr",align:null},"true ","|"," false"),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"monitorType"),(0,o.kt)("br",null),"The kind of monitor to create. It only applies when operatorMode is set to True."),(0,o.kt)("td",{parentName:"tr",align:null},'"Service" ',"|",' "Pod"'),(0,o.kt)("td",{parentName:"tr",align:null},'"Service"'),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"interval"),(0,o.kt)("br",null),"The time interval which Prometheus scrapes metrics data. Only applicable when operator mode is set to true.",(0,o.kt)("br",null),"When operator mode is set to false, the scraping interval can only be set in the scraping job configuration, which kusion does not have permission to manage directly."),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"30s"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"timeout"),(0,o.kt)("br",null),"The timeout when Prometheus scrapes metrics data. Only applicable when operator mode is set to true.",(0,o.kt)("br",null),"When operator mode is set to false, the scraping timeout can only be set in the scraping job configuration, which kusion does not have permission to manage directly."),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"15s"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"scheme"),(0,o.kt)("br",null),"The scheme to scrape metrics from. Possible values are http and https."),(0,o.kt)("td",{parentName:"tr",align:null},'"http" ',"|",' "https"'),(0,o.kt)("td",{parentName:"tr",align:null},"http"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  monitoring:\n    default:\n      operatorMode: True\n      monitorType: Pod\n      scheme: http\n      interval: 30s\n      timeout: 15s\n    low_frequency:\n      operatorMode: False\n      interval: 2m\n      timeout: 1m\n      projectSelector:\n      - foo\n      - bar\n    high_frequency:\n      monitorType: Service\n      interval: 10s\n      timeout: 5s\n      projectSelector:\n      - helloworld\n      - wordpress\n      - prometheus-sample-app\n")))}m.isMDXComponent=!0}}]);