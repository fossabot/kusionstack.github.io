"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5278],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>p});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(t),p=o,k=d["".concat(i,".").concat(p)]||d[p]||m[p]||s;return t?n.createElement(k,a(a({ref:r},l),{},{components:t})):n.createElement(k,a({ref:r},l))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<s;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75384:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const s={},a="resource_requirements",u={unversionedId:"reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements",id:"reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements",title:"resource_requirements",description:"Source: base/pkg/kusionmodels/kube/frontend/resource/resourcerequirements.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements.md",sourceDirName:"reference/model/kusion_models/kube/frontend/resource",slug:"/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663850372,formattedLastUpdatedAt:"2022/9/22",frontMatter:{},sidebar:"reference",previous:{title:"resource",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource"},next:{title:"secret",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/secret/doc_secret"}},i={},c=[{value:"Schema ResourceRequirements",id:"schema-resourcerequirements",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],l={toc:c};function m(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource_requirements"},"resource_requirements"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/resource/resource_requirements.k"},"base/pkg/kusion_models/kube/frontend/resource/resource_requirements.k")),(0,o.kt)("h2",{id:"schema-resourcerequirements"},"Schema ResourceRequirements"),(0,o.kt)("p",null,"ResourceRequirements describes the compute resource requirements.."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"limits"),(0,o.kt)("br",null),"A Container-level attribute.",(0,o.kt)("br",null),"Limits describes the maximum amount of compute resources allowed. ",(0,o.kt)("br",null),"More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_resource#schema-resource"},"Resource")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"requests"),(0,o.kt)("br",null),"A Container-level attribute.",(0,o.kt)("br",null),"Requests describes the minimum amount of compute resources required. ",(0,o.kt)("br",null),"If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. ",(0,o.kt)("br",null),"More info: ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/"},"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_resource#schema-resource"},"Resource")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import base.pkg.kusion_models.kube.frontend.resource as res\n\nres = res.ResourceRequirements {\n    limits = {\n        cpu = 1\n        memory = 1Gi\n        disk = 20Gi\n    }\n    requests = {\n        cpu = 500m\n        memory = 512Mi\n        disk = 10Gi\n    }\n}\n")))}m.isMDXComponent=!0}}]);