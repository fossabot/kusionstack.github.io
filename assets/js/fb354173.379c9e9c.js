"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8414],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,g=d["".concat(l,".").concat(k)]||d[k]||p[k]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5044:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return k}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},l="ingress_rule",u={unversionedId:"reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_rule",id:"reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_rule",title:"ingress_rule",description:"Source: base/pkg/kusionkubernetes/api/networking/v1/ingressrule.k",source:"@site/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_rule.md",sourceDirName:"reference/model/kusion_kubernetes/api/networking/v1",slug:"/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_rule",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_rule",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_rule.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1652084378,formattedLastUpdatedAt:"2022/5/9",frontMatter:{},sidebar:"reference",previous:{title:"ingress_backend",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_backend"},next:{title:"ingress_service_backend",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_service_backend"}},c={},p=[{value:"Schema IngressRule",id:"schema-ingressrule",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ingress_rule"},"ingress_rule"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/networking/v1/ingress_rule.k"},"base/pkg/kusion_kubernetes/api/networking/v1/ingress_rule.k")),(0,i.kt)("p",null,"This is the ingress","_","rule module in kusion","_","kubernetes.api.networking.v1 package.",(0,i.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,i.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,i.kt)("h2",{id:"schema-ingressrule"},"Schema IngressRule"),(0,i.kt)("p",null,"IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"host"),(0,i.kt)("br",null),'     Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to',(0,i.kt)("br",null),"the IP in the Spec of the parent Ingress."),(0,i.kt)("td",{parentName:"tr",align:null},"str"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"http")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"doc_http_ingress_rule_value#schema-httpingressrulevalue"},"HTTPIngressRuleValue")),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")))))}k.isMDXComponent=!0}}]);