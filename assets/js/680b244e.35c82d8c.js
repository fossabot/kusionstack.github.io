"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5278],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return p}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||u;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,s=new Array(u);s[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<u;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75384:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return m}});var n=t(87462),o=t(63366),u=(t(67294),t(3905)),s=["components"],a={},i="resource_requirements",c={unversionedId:"reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements",id:"reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements",title:"resource_requirements",description:"Source: base/pkg/kusionmodels/kube/frontend/resource/resourcerequirements.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements.md",sourceDirName:"reference/model/kusion_models/kube/frontend/resource",slug:"/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements",permalink:"/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1657596779,formattedLastUpdatedAt:"2022/7/12",frontMatter:{},sidebar:"reference",previous:{title:"resource",permalink:"/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource"},next:{title:"secret",permalink:"/docs/reference/model/kusion_models/kube/frontend/secret/doc_secret"}},l={},m=[{value:"Schema ResourceRequirements",id:"schema-resourcerequirements",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],d={toc:m};function p(e){var r=e.components,t=(0,o.Z)(e,s);return(0,u.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"resource_requirements"},"resource_requirements"),(0,u.kt)("p",null,"Source: ",(0,u.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/resource/resource_requirements.k"},"base/pkg/kusion_models/kube/frontend/resource/resource_requirements.k")),(0,u.kt)("h2",{id:"schema-resourcerequirements"},"Schema ResourceRequirements"),(0,u.kt)("p",null,"ResourceRequirements describes the compute resource requirements.."),(0,u.kt)("h3",{id:"attributes"},"Attributes"),(0,u.kt)("table",null,(0,u.kt)("thead",{parentName:"table"},(0,u.kt)("tr",{parentName:"thead"},(0,u.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,u.kt)("th",{parentName:"tr",align:null},"Type"),(0,u.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,u.kt)("th",{parentName:"tr",align:null},"Required"))),(0,u.kt)("tbody",{parentName:"table"},(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("strong",{parentName:"td"},"limits"),(0,u.kt)("br",null),"A Container-level attribute.",(0,u.kt)("br",null),"Limits describes the maximum amount of compute resources allowed. ",(0,u.kt)("br",null),"More info: ",(0,u.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/")),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("a",{parentName:"td",href:"doc_resource#schema-resource"},"Resource")),(0,u.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("strong",{parentName:"td"},"required"))),(0,u.kt)("tr",{parentName:"tbody"},(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("strong",{parentName:"td"},"requests"),(0,u.kt)("br",null),"A Container-level attribute.",(0,u.kt)("br",null),"Requests describes the minimum amount of compute resources required. ",(0,u.kt)("br",null),"If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. ",(0,u.kt)("br",null),"More info: ",(0,u.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/")),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("a",{parentName:"td",href:"doc_resource#schema-resource"},"Resource")),(0,u.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,u.kt)("td",{parentName:"tr",align:null},(0,u.kt)("strong",{parentName:"td"},"required"))))),(0,u.kt)("h3",{id:"examples"},"Examples"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"import base.pkg.kusion_models.kube.frontend.resource as res\n\nres = res.ResourceRequirements {\n    limits = {\n        cpu = 1\n        memory = 1Gi\n        disk = 20Gi\n    }\n    requests = {\n        cpu = 500m\n        memory = 512Mi\n        disk = 10Gi\n    }\n}\n")))}p.isMDXComponent=!0}}]);