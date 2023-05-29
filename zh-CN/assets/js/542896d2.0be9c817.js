"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,k=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o="http_ingress_path",s={unversionedId:"reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_path",id:"reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_path",title:"http_ingress_path",description:"Source: base/pkg/kusionkubernetes/api/networking/v1/httpingresspath.k",source:"@site/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_path.md",sourceDirName:"reference/model/kusion_kubernetes/api/networking/v1",slug:"/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_path",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_path",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_path.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685355131,formattedLastUpdatedAt:"2023/5/29",frontMatter:{},sidebar:"reference",previous:{title:"windows_security_context_options",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_windows_security_context_options"},next:{title:"http_ingress_rule_value",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_http_ingress_rule_value"}},l={},p=[{value:"Schema HTTPIngressPath",id:"schema-httpingresspath",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"http_ingress_path"},"http_ingress_path"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/networking/v1/http_ingress_path.k"},"base/pkg/kusion_kubernetes/api/networking/v1/http_ingress_path.k")),(0,a.kt)("p",null,"This is the http","_","ingress","_","path module in kusion","_","kubernetes.api.networking.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-httpingresspath"},"Schema HTTPIngressPath"),(0,a.kt)("p",null,"HTTPIngressPath associates a path with a backend. Incoming urls matching the path are forwarded to the backend."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"path"),(0,a.kt)("br",null),'      Path is matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a \'/\' and must be present when using PathType with value "Exact" or "Prefix".',(0,a.kt)("br",null)," pathType : str, default is Undefined, required",(0,a.kt)("br",null),"      PathType determines the interpretation of the Path matching. PathType can be one of the following values: ","*"," Exact: Matches the URL path exactly. ","*"," Prefix: Matches based on a URL path prefix split by '/'. Matching is",(0,a.kt)("br",null),"done on a path element by element basis. A path element refers is the",(0,a.kt)("br",null),"list of labels in the path split by the '/' separator. A request is a",(0,a.kt)("br",null),"match for path p if every p is an element-wise prefix of p of the",(0,a.kt)("br",null),"request path. Note that if the last element of the path is a substring",(0,a.kt)("br",null),"of the last element in request path, it is not a match (e.g. /foo/bar",(0,a.kt)("br",null),"matches /foo/bar/baz, but does not match /foo/barbaz)."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"pathType")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"backend")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"doc_ingress_backend#schema-ingressbackend"},"IngressBackend")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))))))}h.isMDXComponent=!0}}]);