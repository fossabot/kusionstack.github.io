"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[863],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},25876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const s={},o="ingress",i={unversionedId:"reference/model/kusion_models/kube/frontend/ingress/doc_ingress",id:"reference/model/kusion_models/kube/frontend/ingress/doc_ingress",title:"ingress",description:"Source: base/pkg/kusionmodels/kube/frontend/ingress/ingress.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/ingress/doc_ingress.md",sourceDirName:"reference/model/kusion_models/kube/frontend/ingress",slug:"/reference/model/kusion_models/kube/frontend/ingress/doc_ingress",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/ingress/doc_ingress",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/ingress/doc_ingress.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1673342563,formattedLastUpdatedAt:"2023/1/10",frontMatter:{},sidebar:"reference",previous:{title:"server",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/doc_server"},next:{title:"resource",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource"}},l={},c=[{value:"Schema Ingress",id:"schema-ingress",level:2},{value:"Base Schema",id:"base-schema",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ingress"},"ingress"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/ingress/ingress.k"},"base/pkg/kusion_models/kube/frontend/ingress/ingress.k")),(0,a.kt)("h2",{id:"schema-ingress"},"Schema Ingress"),(0,a.kt)("p",null,"Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. ",(0,a.kt)("br",null),"An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc."),(0,a.kt)("h3",{id:"base-schema"},"Base Schema"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../common/doc_metadata#schema-metadata"},"@base.pkg.kusion_models.kube.frontend.common.Metadata")),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"rules"),(0,a.kt)("br",null),"A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend."),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"../../../../kusion_kubernetes/api/networking/v1/doc_ingress_rule#schema-ingressrule"},"v1.IngressRule"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'ingress.Ingress {\n    name = "example-ingress"\n    rules = [\n        {\n            http.paths = [\n                {\n                    path = "/apple"\n                    pathType = "Prefix"\n                    backend.service: {\n                        name = "app-service"\n                        port.number = 5678\n                    }\n                }\n            ]\n        }\n    ]\n}\n')))}d.isMDXComponent=!0}}]);