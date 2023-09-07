"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=s,k=d["".concat(l,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={},i="ingress_spec",o={unversionedId:"reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_spec",id:"reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_spec",title:"ingress_spec",description:"Source: base/pkg/kusionkubernetes/api/networking/v1/ingressspec.k",source:"@site/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_spec.md",sourceDirName:"reference/model/kusion_kubernetes/api/networking/v1",slug:"/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_spec",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_spec",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_spec.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1694077538,formattedLastUpdatedAt:"2023\u5e749\u67087\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"ingress_service_backend",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_service_backend"},next:{title:"ingress_tls",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_tls"}},l={},c=[{value:"Schema IngressSpec",id:"schema-ingressspec",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ingress_spec"},"ingress_spec"),(0,s.kt)("p",null,"Source: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/networking/v1/ingress_spec.k"},"base/pkg/kusion_kubernetes/api/networking/v1/ingress_spec.k")),(0,s.kt)("p",null,"This is the ingress","_","spec module in kusion","_","kubernetes.api.networking.v1 package.",(0,s.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,s.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,s.kt)("h2",{id:"schema-ingressspec"},"Schema IngressSpec"),(0,s.kt)("p",null,"IngressSpec describes the Ingress the user wishes to exist."),(0,s.kt)("h3",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"ingressClassName"),(0,s.kt)("br",null),"IngressClassName is the name of the IngressClass cluster resource. The associated IngressClass defines which controller will implement the resource. This replaces the deprecated ",(0,s.kt)("inlineCode",{parentName:"td"},"kubernetes.io/ingress.class")," annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation."),(0,s.kt)("td",{parentName:"tr",align:null},"str"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"rules"),(0,s.kt)("br",null),"A list of host rules used to configure the Ingress. If unspecified, or no rule matches, all traffic is sent to the default backend."),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("a",{parentName:"td",href:"doc_ingress_rule#schema-ingressrule"},"v1.IngressRule"),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"tls"),(0,s.kt)("br",null),"TLS configuration. Currently the Ingress only supports a single TLS port, 443. If multiple members of this list specify different hosts, they will be multiplexed on the same port according to the hostname specified through the SNI TLS extension, if the ingress controller fulfilling the ingress supports SNI."),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("a",{parentName:"td",href:"doc_ingress_tls#schema-ingresstls"},"v1.IngressTLS"),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"defaultBackend"),(0,s.kt)("br",null),"DefaultBackend is the backend that should handle requests that don't match any rule. If Rules are not specified, DefaultBackend must be specified. If DefaultBackend is not set, the handling of requests that do not match any of the rules will be up to the Ingress controller."),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"doc_ingress_backend#schema-ingressbackend"},"IngressBackend")),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);