"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7869],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={},s="pod_affinity_term",p={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_pod_affinity_term",id:"reference/model/kusion_kubernetes/api/core/v1/doc_pod_affinity_term",title:"pod_affinity_term",description:"Source: base/pkg/kusionkubernetes/api/core/v1/podaffinityterm.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_affinity_term.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_pod_affinity_term",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_affinity_term",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_affinity_term.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663071680,formattedLastUpdatedAt:"2022/9/13",frontMatter:{},sidebar:"reference",previous:{title:"pod_affinity",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_affinity"},next:{title:"pod_anti_affinity",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_pod_anti_affinity"}},c={},d=[{value:"Schema PodAffinityTerm",id:"schema-podaffinityterm",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pod_affinity_term"},"pod_affinity_term"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/pod_affinity_term.k"},"base/pkg/kusion_kubernetes/api/core/v1/pod_affinity_term.k")),(0,o.kt)("p",null,"This is the pod","_","affinity","_","term module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-podaffinityterm"},"Schema PodAffinityTerm"),(0,o.kt)("p",null,"Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key \\<topologyKey",">"," matches that of any node on which a pod of the set of pods is running"),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"namespaces"),(0,o.kt)("br",null),'namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod\'s namespace"'),(0,o.kt)("td",{parentName:"tr",align:null},"[str]"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"topologyKey"),(0,o.kt)("br",null),"This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed."),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"labelSelector"),(0,o.kt)("br",null),"A label query over a set of resources, in this case pods."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_label_selector#schema-labelselector"},"apis.LabelSelector")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"namespaceSelector"),(0,o.kt)("br",null),'A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod\'s namespace". An empty selector ({}) matches all namespaces. This field is beta-level and is only honored when PodAffinityNamespaceSelector feature is enabled.'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_label_selector#schema-labelselector"},"apis.LabelSelector")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}f.isMDXComponent=!0}}]);