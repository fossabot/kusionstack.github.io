"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(r),f=i,m=s["".concat(l,".").concat(f)]||s[f]||c[f]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},84179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={},o="weighted_pod_affinity_term",d={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_weighted_pod_affinity_term",id:"reference/model/kusion_kubernetes/api/core/v1/doc_weighted_pod_affinity_term",title:"weighted_pod_affinity_term",description:"Source: base/pkg/kusionkubernetes/api/core/v1/weightedpodaffinityterm.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_weighted_pod_affinity_term.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_weighted_pod_affinity_term",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_weighted_pod_affinity_term",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_weighted_pod_affinity_term.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1689248321,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{},sidebar:"reference",previous:{title:"vsphere_virtual_disk_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_vsphere_virtual_disk_volume_source"},next:{title:"windows_security_context_options",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_windows_security_context_options"}},l={},p=[{value:"Schema WeightedPodAffinityTerm",id:"schema-weightedpodaffinityterm",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"weighted_pod_affinity_term"},"weighted_pod_affinity_term"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/weighted_pod_affinity_term.k"},"base/pkg/kusion_kubernetes/api/core/v1/weighted_pod_affinity_term.k")),(0,i.kt)("p",null,"This is the weighted","_","pod","_","affinity","_","term module in kusion","_","kubernetes.api.core.v1 package.",(0,i.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,i.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,i.kt)("h2",{id:"schema-weightedpodaffinityterm"},"Schema WeightedPodAffinityTerm"),(0,i.kt)("p",null,"The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)"),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"weight"),(0,i.kt)("br",null),"weight associated with matching the corresponding podAffinityTerm, in the range 1-100."),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"required"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"podAffinityTerm"),(0,i.kt)("br",null),"Required. A pod affinity term, associated with the corresponding weight."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"doc_pod_affinity_term#schema-podaffinityterm"},"PodAffinityTerm")),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"required"))))))}c.isMDXComponent=!0}}]);