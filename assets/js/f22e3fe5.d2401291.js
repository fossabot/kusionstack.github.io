"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69044:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},o="rule_with_operations",s={unversionedId:"reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_rule_with_operations",id:"reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_rule_with_operations",title:"rule_with_operations",description:"Source: base/pkg/kusionkubernetes/api/admissionregistration/v1/rulewithoperations.k",source:"@site/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_rule_with_operations.md",sourceDirName:"reference/model/kusion_kubernetes/api/admissionregistration/v1",slug:"/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_rule_with_operations",permalink:"/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_rule_with_operations",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_rule_with_operations.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685353254,formattedLastUpdatedAt:"5/29/2023",frontMatter:{},sidebar:"reference",previous:{title:"mutating_webhook",permalink:"/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_mutating_webhook"},next:{title:"service_reference",permalink:"/docs/reference/model/kusion_kubernetes/api/admissionregistration/v1/doc_service_reference"}},l={},u=[{value:"Schema RuleWithOperations",id:"schema-rulewithoperations",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rule_with_operations"},"rule_with_operations"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/admissionregistration/v1/rule_with_operations.k"},"base/pkg/kusion_kubernetes/api/admissionregistration/v1/rule_with_operations.k")),(0,a.kt)("p",null,"This is the rule","_","with","_","operations module in kusion","_","kubernetes.api.admissionregistration.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-rulewithoperations"},"Schema RuleWithOperations"),(0,a.kt)("p",null,"RuleWithOperations is a tuple of Operations and Resources. It is recommended to make sure that all the tuple expansions are valid."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"apiGroups"),(0,a.kt)("br",null),"     APIGroups is the API groups the resources belong to. '","*","' is all groups. If '","*","' is present, the length of the slice must be one. Required.",(0,a.kt)("br",null),"apiVersions : ","[str]",", default is Undefined, optional",(0,a.kt)("br",null),"     APIVersions is the API versions the resources belong to. '","*","' is all versions. If '","*","' is present, the length of the slice must be one. Required.",(0,a.kt)("br",null),"operations : ","[str]",", default is Undefined, optional",(0,a.kt)("br",null),"     Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or ","*"," for all of those operations and any future admission operations that are added. If '","*","' is present, the length of the slice must be one. Required.",(0,a.kt)("br",null),"resources : ","[str]",", default is Undefined, optional",(0,a.kt)("br",null),"     Resources is a list of resources this rule applies to."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"apiVersions")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"operations")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"resources")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"scope")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);