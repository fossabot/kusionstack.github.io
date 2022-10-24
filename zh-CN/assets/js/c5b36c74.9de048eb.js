"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const c={},o="service_account",s={unversionedId:"reference/model/kusion_models/kube/frontend/serviceaccount/doc_service_account",id:"reference/model/kusion_models/kube/frontend/serviceaccount/doc_service_account",title:"service_account",description:"Source: base/pkg/kusionmodels/kube/frontend/serviceaccount/serviceaccount.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/serviceaccount/doc_service_account.md",sourceDirName:"reference/model/kusion_models/kube/frontend/serviceaccount",slug:"/reference/model/kusion_models/kube/frontend/serviceaccount/doc_service_account",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/serviceaccount/doc_service_account",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/serviceaccount/doc_service_account.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1666603369,formattedLastUpdatedAt:"2022/10/24",frontMatter:{},sidebar:"reference",previous:{title:"service",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/service/doc_service"},next:{title:"sidecar",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_sidecar"}},i={},l=[{value:"Schema ServiceAccount",id:"schema-serviceaccount",level:2},{value:"Base Schema",id:"base-schema",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"service_account"},"service_account"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/serviceaccount/service_account.k"},"base/pkg/kusion_models/kube/frontend/serviceaccount/service_account.k")),(0,a.kt)("h2",{id:"schema-serviceaccount"},"Schema ServiceAccount"),(0,a.kt)("p",null,"A service account provides an identity for processes that run in a Pod.",(0,a.kt)("br",null)," ServiceAccount binds together:",(0,a.kt)("br",null),"    - a name, understood by users, and perhaps by peripheral systems, for an identity",(0,a.kt)("br",null),"    - a principal that can be authenticated and authorized",(0,a.kt)("br",null),"    - a set of secrets",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubernetes-api/authentication-resources/service-account-v1/%5C#ServiceAccount"},"https://kubernetes.io/docs/reference/kubernetes-api/authentication-resources/service-account-v1/\\#ServiceAccount")),(0,a.kt)("h3",{id:"base-schema"},"Base Schema"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../common/doc_metadata#schema-metadata"},"@base.pkg.kusion_models.kube.frontend.common.Metadata")),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"imagePullSecrets"),(0,a.kt)("br",null),"ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images/%5C#specifying-imagepullsecrets-on-a-pod"},"https://kubernetes.io/docs/concepts/containers/images/\\#specifying-imagepullsecrets-on-a-pod"),(0,a.kt)("br",null),"secrets: ","[{str:str}]",", default is Undefined, optional.",(0,a.kt)("br",null),"Secrets is the list of secrets allowed to be used by pods running using this ServiceAccount.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/secret"},"https://kubernetes.io/docs/concepts/configuration/secret")),(0,a.kt)("td",{parentName:"tr",align:null},"[{str: str}]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"secrets")),(0,a.kt)("td",{parentName:"tr",align:null},"[{str: str}]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'my_service_account = ServiceAccount {\n    name: "my-service-account"\n    namespace = "my-service-account-namespace"\n    labels: {\n        tier: "monitoring"\n    }\n    imagePullSecrets: [\n        {\n            name: "my-secret"\n        }\n    ]\n    secrets: [\n        {\n            name: "my-secret"\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);