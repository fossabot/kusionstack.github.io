"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(n),c=i,m=u["".concat(s,".").concat(c)]||u[c]||f[c]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={},o="pod_anti_affinity",d={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity",id:"reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity",title:"pod_anti_affinity",description:"Source: base/pkg/kusionkubernetes/api/core/v1/podantiaffinity.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1680091886,formattedLastUpdatedAt:"2023/3/29",frontMatter:{},sidebar:"reference",previous:{title:"pod_affinity_term",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_affinity_term"},next:{title:"pod_dns_config",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_dns_config"}},s={},l=[{value:"Schema PodAntiAffinity",id:"schema-podantiaffinity",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:l};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pod_anti_affinity"},"pod_anti_affinity"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/pod_anti_affinity.k"},"base/pkg/kusion_kubernetes/api/core/v1/pod_anti_affinity.k")),(0,i.kt)("p",null,"This is the pod","_","anti","_","affinity module in kusion","_","kubernetes.api.core.v1 package.",(0,i.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,i.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,i.kt)("h2",{id:"schema-podantiaffinity"},"Schema PodAntiAffinity"),(0,i.kt)("p",null,"Pod anti affinity is a group of inter pod anti affinity scheduling rules."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"preferredDuringSchedulingIgnoredDuringExecution"),(0,i.kt)("br",null),'The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.'),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("a",{parentName:"td",href:"doc_weighted_pod_affinity_term#schema-weightedpodaffinityterm"},"v1.WeightedPodAffinityTerm"),"]"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"requiredDuringSchedulingIgnoredDuringExecution"),(0,i.kt)("br",null),"If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied."),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("a",{parentName:"td",href:"doc_pod_affinity_term#schema-podaffinityterm"},"v1.PodAffinityTerm"),"]"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")))))}f.isMDXComponent=!0}}]);