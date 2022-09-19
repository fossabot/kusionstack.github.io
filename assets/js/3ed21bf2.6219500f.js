"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="node_spec",i={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_node_spec",id:"reference/model/kusion_kubernetes/api/core/v1/doc_node_spec",title:"node_spec",description:"Source: base/pkg/kusionkubernetes/api/core/v1/nodespec.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_spec.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_node_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_spec",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_spec.md",tags:[],version:"current",lastUpdatedBy:"HeiPa",lastUpdatedAt:1663588219,formattedLastUpdatedAt:"9/19/2022",frontMatter:{},sidebar:"reference",previous:{title:"node_selector_term",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_node_selector_term"},next:{title:"object_field_selector",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_object_field_selector"}},d={},s=[{value:"Schema NodeSpec",id:"schema-nodespec",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"node_spec"},"node_spec"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/node_spec.k"},"base/pkg/kusion_kubernetes/api/core/v1/node_spec.k")),(0,a.kt)("p",null,"This is the node","_","spec module in kusion","_","kubernetes.api.core.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-nodespec"},"Schema NodeSpec"),(0,a.kt)("p",null,"NodeSpec describes the attributes that a node is created with."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"externalID"),(0,a.kt)("br",null),"Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: ",(0,a.kt)("a",{parentName:"td",href:"https://issues.k8s.io/61966"},"https://issues.k8s.io/61966")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"podCIDR"),(0,a.kt)("br",null),"PodCIDR represents the pod IP range assigned to the node."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"podCIDRs"),(0,a.kt)("br",null),"podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"providerID"),(0,a.kt)("br",null),"ID of the node assigned by the cloud provider in the format: \\<ProviderName",">","://\\<ProviderSpecificNodeID",">"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"taints"),(0,a.kt)("br",null),"If specified, the node's taints."),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"doc_taint#schema-taint"},"v1.Taint"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"unschedulable"),(0,a.kt)("br",null),"Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/nodes/node/%5C#manual-node-administration"},"https://kubernetes.io/docs/concepts/nodes/node/\\#manual-node-administration")),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"configSource"),(0,a.kt)("br",null),"Deprecated. If specified, the source of the node's configuration. The DynamicKubeletConfig feature gate must be enabled for the Kubelet to use this field. This field is deprecated as of 1.22: ",(0,a.kt)("a",{parentName:"td",href:"https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration"},"https://git.k8s.io/enhancements/keps/sig-node/281-dynamic-kubelet-configuration")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"doc_node_config_source#schema-nodeconfigsource"},"NodeConfigSource")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);