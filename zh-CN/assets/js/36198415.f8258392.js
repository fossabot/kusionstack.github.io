"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),k=i,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},a="webhook_client_config",l={unversionedId:"reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_webhook_client_config",id:"reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_webhook_client_config",title:"webhook_client_config",description:"Source: base/pkg/kusionkubernetes/api/admissionregistration/v1/webhookclientconfig.k",source:"@site/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_webhook_client_config.md",sourceDirName:"reference/model/kusion_kubernetes/api/admissionregistration/v1",slug:"/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_webhook_client_config",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_webhook_client_config",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_webhook_client_config.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685537782,formattedLastUpdatedAt:"2023/5/31",frontMatter:{},sidebar:"reference",previous:{title:"validating_webhook",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_validating_webhook"},next:{title:"daemon_set",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_daemon_set"}},s={},c=[{value:"Schema WebhookClientConfig",id:"schema-webhookclientconfig",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webhook_client_config"},"webhook_client_config"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/admissionregistration/v1/webhook_client_config.k"},"base/pkg/kusion_kubernetes/api/admissionregistration/v1/webhook_client_config.k")),(0,i.kt)("p",null,"This is the webhook","_","client","_","config module in kusion","_","kubernetes.api.admissionregistration.v1 package.",(0,i.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,i.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,i.kt)("h2",{id:"schema-webhookclientconfig"},"Schema WebhookClientConfig"),(0,i.kt)("p",null,"WebhookClientConfig contains the information to make a TLS connection with the webhook"),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"caBundle"),(0,i.kt)("br",null),"     ",(0,i.kt)("inlineCode",{parentName:"td"},"caBundle")," is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.",(0,i.kt)("br",null),"url : str, default is Undefined, optional",(0,i.kt)("br",null),"     ",(0,i.kt)("inlineCode",{parentName:"td"},"url")," gives the location of the webhook, in standard URL form (",(0,i.kt)("inlineCode",{parentName:"td"},"scheme://host:port/path"),"). Exactly one of ",(0,i.kt)("inlineCode",{parentName:"td"},"url")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"service")," must be specified."),(0,i.kt)("td",{parentName:"tr",align:null},"str"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"url")),(0,i.kt)("td",{parentName:"tr",align:null},"str"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"service")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"doc_service_reference#schema-servicereference"},"ServiceReference")),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")))))}d.isMDXComponent=!0}}]);