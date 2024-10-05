"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return r?n.createElement(h,s(s({ref:t},m),{},{components:r})):n.createElement(h,s({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},31474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},s="prometheus",i={unversionedId:"reference/modules/developer-schemas/monitoring/prometheus",id:"version-v0.13/reference/modules/developer-schemas/monitoring/prometheus",title:"prometheus",description:"Schema Prometheus",source:"@site/docs_versioned_docs/version-v0.13/6-reference/2-modules/1-developer-schemas/monitoring/prometheus.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/monitoring",slug:"/reference/modules/developer-schemas/monitoring/prometheus",permalink:"/docs/reference/modules/developer-schemas/monitoring/prometheus",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.13/6-reference/2-modules/1-developer-schemas/monitoring/prometheus.md",tags:[],version:"v0.13",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"Oct 5, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"k8s_manifest",permalink:"/docs/reference/modules/developer-schemas/k8s_manifest/"},next:{title:"network",permalink:"/docs/reference/modules/developer-schemas/network/"}},l={},p=[{value:"Schema Prometheus",id:"schema-prometheus",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prometheus"},"prometheus"),(0,o.kt)("h2",{id:"schema-prometheus"},"Schema Prometheus"),(0,o.kt)("p",null,"Prometheus can be used to define monitoring requirements"),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"description"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"path")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"The path to scrape metrics from."),(0,o.kt)("td",{parentName:"tr",align:null},'"/metrics"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"port")),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"The port to scrape metrics from. When using Prometheus operator, this needs to be the port NAME. Otherwise, this can be a port name or a number."),(0,o.kt)("td",{parentName:"tr",align:null},"container ports when scraping pod (monitorType is pod) and service port when scraping service (monitorType is service)")))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import monitoring as m\n\n"monitoring": m.Prometheus {\n    path:           "/metrics"\n    port:           "web"\n}\n')))}c.isMDXComponent=!0}}]);