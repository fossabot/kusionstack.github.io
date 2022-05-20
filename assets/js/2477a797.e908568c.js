"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8958],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=s(n),p=i,m=c["".concat(d,".").concat(p)]||c[p]||f[p]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8076:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return s},assets:function(){return l},toc:function(){return f},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={},d="pod_anti_affinity",s={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity",id:"reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity",title:"pod_anti_affinity",description:"Source: base/pkg/kusionkubernetes/api/core/v1/podantiaffinity.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653039356,formattedLastUpdatedAt:"2022/5/20",frontMatter:{},sidebar:"reference",previous:{title:"pod_affinity_term",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_affinity_term"},next:{title:"pod_dns_config",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_dns_config"}},l={},f=[{value:"Schema PodAntiAffinity",id:"schema-podantiaffinity",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:f};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pod_anti_affinity"},"pod_anti_affinity"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/pod_anti_affinity.k"},"base/pkg/kusion_kubernetes/api/core/v1/pod_anti_affinity.k")),(0,o.kt)("p",null,"This is the pod","_","anti","_","affinity module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-podantiaffinity"},"Schema PodAntiAffinity"),(0,o.kt)("p",null,"Pod anti affinity is a group of inter pod anti affinity scheduling rules."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"preferredDuringSchedulingIgnoredDuringExecution"),(0,o.kt)("br",null),'The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.'),(0,o.kt)("td",{parentName:"tr",align:null},"[",(0,o.kt)("a",{parentName:"td",href:"doc_weighted_pod_affinity_term#schema-weightedpodaffinityterm"},"v1.WeightedPodAffinityTerm"),"]"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"requiredDuringSchedulingIgnoredDuringExecution"),(0,o.kt)("br",null),"If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied."),(0,o.kt)("td",{parentName:"tr",align:null},"[",(0,o.kt)("a",{parentName:"td",href:"doc_pod_affinity_term#schema-podaffinityterm"},"v1.PodAffinityTerm"),"]"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);