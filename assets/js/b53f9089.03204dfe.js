"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2301],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),k=a,g=d["".concat(s,".").concat(k)]||d[k]||c[k]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3915:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],u={},s="http_ingress_rule_value",l={unversionedId:"reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value",id:"reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value",title:"http_ingress_rule_value",description:"Source: base/pkg/kusionkubernetes/api/networking/v1/httpingressrulevalue.k",source:"@site/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value.md",sourceDirName:"reference/model/kusion_kubernetes/api/networking/v1",slug:"/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1661751584,formattedLastUpdatedAt:"2022/8/29",frontMatter:{},sidebar:"reference",previous:{title:"http_ingress_path",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_path"},next:{title:"ingress",permalink:"/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress"}},p={},c=[{value:"Schema HTTPIngressRuleValue",id:"schema-httpingressrulevalue",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:c};function k(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http_ingress_rule_value"},"http_ingress_rule_value"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/networking/v1/http_ingress_rule_value.k"},"base/pkg/kusion_kubernetes/api/networking/v1/http_ingress_rule_value.k")),(0,i.kt)("p",null,"This is the http","_","ingress","_","rule","_","value module in kusion","_","kubernetes.api.networking.v1 package.",(0,i.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,i.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,i.kt)("h2",{id:"schema-httpingressrulevalue"},"Schema HTTPIngressRuleValue"),(0,i.kt)("p",null,"HTTPIngressRuleValue is a list of http selectors pointing to backends. In the example: http://\\<host",">","/\\<path",">","?\\<searchpart",">"," -",">"," backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '","#","'."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"paths"),(0,i.kt)("br",null),"A collection of paths that map requests to backends."),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("a",{parentName:"td",href:"doc_http_ingress_path#schema-httpingresspath"},"v1.HTTPIngressPath"),"]"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"required"))))))}k.isMDXComponent=!0}}]);