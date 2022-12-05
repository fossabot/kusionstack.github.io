"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2301],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=u(r),d=a,g=k["".concat(l,".").concat(d)]||k[d]||c[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3915:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},o="http_ingress_rule_value",s={unversionedId:"reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value",id:"reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value",title:"http_ingress_rule_value",description:"Source: base/pkg/kusionkubernetes/api/networking/v1/httpingressrulevalue.k",source:"@site/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value.md",sourceDirName:"reference/model/kusion_kubernetes/api/networking/v1",slug:"/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1670242264,formattedLastUpdatedAt:"12/5/2022",frontMatter:{},sidebar:"reference",previous:{title:"http_ingress_path",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_path"},next:{title:"ingress",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress"}},l={},u=[{value:"Schema HTTPIngressRuleValue",id:"schema-httpingressrulevalue",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http_ingress_rule_value"},"http_ingress_rule_value"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/networking/v1/http_ingress_rule_value.k"},"base/pkg/kusion_kubernetes/api/networking/v1/http_ingress_rule_value.k")),(0,a.kt)("p",null,"This is the http","_","ingress","_","rule","_","value module in kusion","_","kubernetes.api.networking.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-httpingressrulevalue"},"Schema HTTPIngressRuleValue"),(0,a.kt)("p",null,"HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://\\<host",">","/\\<path",">","?\\<searchpart",">"," -",">"," backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '","#","'."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"paths"),(0,a.kt)("br",null),"A collection of paths that map requests to backends."),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"doc_http_ingress_path#schema-httpingresspath"},"v1.HTTPIngressPath"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))))))}c.isMDXComponent=!0}}]);