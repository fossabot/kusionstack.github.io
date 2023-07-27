"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5614],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},a="client_ip_config",c={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_client_ip_config",id:"reference/model/kusion_kubernetes/api/core/v1/doc_client_ip_config",title:"client_ip_config",description:"Source: base/pkg/kusionkubernetes/api/core/v1/clientipconfig.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_client_ip_config.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_client_ip_config",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_client_ip_config",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_client_ip_config.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1690428760,formattedLastUpdatedAt:"2023\u5e747\u670827\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"cinder_volume_source",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_cinder_volume_source"},next:{title:"config_map",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_config_map"}},l={},u=[{value:"Schema ClientIPConfig",id:"schema-clientipconfig",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"client_ip_config"},"client_ip_config"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/client_ip_config.k"},"base/pkg/kusion_kubernetes/api/core/v1/client_ip_config.k")),(0,i.kt)("p",null,"This is the client","_","ip","_","config module in kusion","_","kubernetes.api.core.v1 package.",(0,i.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,i.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,i.kt)("h2",{id:"schema-clientipconfig"},"Schema ClientIPConfig"),(0,i.kt)("p",null,"ClientIPConfig represents the configurations of Client IP based session affinity."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"timeoutSeconds"),(0,i.kt)("br",null),"timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be ",">",'0 && \\<=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).'),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")))))}s.isMDXComponent=!0}}]);