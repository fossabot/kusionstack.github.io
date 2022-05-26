"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7098],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,m=p["".concat(u,".").concat(d)]||p[d]||s[d]||i;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},u="affinity",c={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_affinity",id:"reference/model/kusion_kubernetes/api/core/v1/doc_affinity",title:"affinity",description:"Source: base/pkg/kusionkubernetes/api/core/v1/affinity.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_affinity.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_affinity",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_affinity",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_affinity.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653552030,formattedLastUpdatedAt:"2022/5/26",frontMatter:{},sidebar:"reference",previous:{title:"job_template_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/batch/v1beta1/doc_job_template_spec"},next:{title:"aws_elastic_block_store_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_aws_elastic_block_store_volume_source"}},f={},s=[{value:"Schema Affinity",id:"schema-affinity",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"affinity"},"affinity"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/affinity.k"},"base/pkg/kusion_kubernetes/api/core/v1/affinity.k")),(0,i.kt)("p",null,"This is the affinity module in kusion","_","kubernetes.api.core.v1 package.",(0,i.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,i.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,i.kt)("h2",{id:"schema-affinity"},"Schema Affinity"),(0,i.kt)("p",null,"Affinity is a group of affinity scheduling rules."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"nodeAffinity"),(0,i.kt)("br",null),"Describes node affinity scheduling rules for the pod."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"doc_node_affinity#schema-nodeaffinity"},"NodeAffinity")),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"podAffinity"),(0,i.kt)("br",null),"Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s))."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"doc_pod_affinity#schema-podaffinity"},"PodAffinity")),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"podAntiAffinity"),(0,i.kt)("br",null),"Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s))."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"doc_pod_anti_affinity#schema-podantiaffinity"},"PodAntiAffinity")),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")))))}d.isMDXComponent=!0}}]);