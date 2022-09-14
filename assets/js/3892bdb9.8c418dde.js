"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(n),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(k,p(p({ref:t},u),{},{components:n})):a.createElement(k,p({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={},p="daemon_set_update_strategy",s={unversionedId:"reference/model/kusion_kubernetes/api/apps/v1/doc_daemon_set_update_strategy",id:"reference/model/kusion_kubernetes/api/apps/v1/doc_daemon_set_update_strategy",title:"daemon_set_update_strategy",description:"Source: base/pkg/kusionkubernetes/api/apps/v1/daemonsetupdatestrategy.k",source:"@site/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_daemon_set_update_strategy.md",sourceDirName:"reference/model/kusion_kubernetes/api/apps/v1",slug:"/reference/model/kusion_kubernetes/api/apps/v1/doc_daemon_set_update_strategy",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_daemon_set_update_strategy",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_daemon_set_update_strategy.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663160649,formattedLastUpdatedAt:"9/14/2022",frontMatter:{},sidebar:"reference",previous:{title:"daemon_set_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_daemon_set_spec"},next:{title:"deployment",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment"}},l={},i=[{value:"Schema DaemonSetUpdateStrategy",id:"schema-daemonsetupdatestrategy",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"daemon_set_update_strategy"},"daemon_set_update_strategy"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/daemon_set_update_strategy.k"},"base/pkg/kusion_kubernetes/api/apps/v1/daemon_set_update_strategy.k")),(0,r.kt)("p",null,"This is the daemon","_","set","_","update","_","strategy module in kusion","_","kubernetes.api.apps.v1 package.",(0,r.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,r.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,r.kt)("h2",{id:"schema-daemonsetupdatestrategy"},"Schema DaemonSetUpdateStrategy"),(0,r.kt)("p",null,"DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type"),(0,r.kt)("br",null),'Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.'),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"rollingUpdate"),(0,r.kt)("br",null),'Rolling update config params. Present only if type = "RollingUpdate".'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_rolling_update_daemon_set#schema-rollingupdatedaemonset"},"RollingUpdateDaemonSet")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))))}d.isMDXComponent=!0}}]);