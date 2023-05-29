"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5534],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={},l="node_selector",c={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_node_selector",id:"reference/model/kusion_kubernetes/api/core/v1/doc_node_selector",title:"node_selector",description:"Source: base/pkg/kusionkubernetes/api/core/v1/nodeselector.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_selector.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_node_selector",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_selector",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_selector.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685355131,formattedLastUpdatedAt:"5/29/2023",frontMatter:{},sidebar:"reference",previous:{title:"node_config_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_config_source"},next:{title:"node_selector_requirement",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_selector_requirement"}},s={},i=[{value:"Schema NodeSelector",id:"schema-nodeselector",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:i},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node_selector"},"node_selector"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/node_selector.k"},"base/pkg/kusion_kubernetes/api/core/v1/node_selector.k")),(0,o.kt)("p",null,"This is the node","_","selector module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-nodeselector"},"Schema NodeSelector"),(0,o.kt)("p",null,"A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"nodeSelectorTerms"),(0,o.kt)("br",null),"Required. A list of node selector terms. The terms are ORed."),(0,o.kt)("td",{parentName:"tr",align:null},"[",(0,o.kt)("a",{parentName:"td",href:"doc_node_selector_term#schema-nodeselectorterm"},"v1.NodeSelectorTerm"),"]"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))))))}p.isMDXComponent=!0}}]);