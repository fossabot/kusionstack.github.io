"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4306],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),k=a,m=u["".concat(o,".").concat(k)]||u[k]||p[k]||i;return r?n.createElement(m,l(l({ref:t},d),{},{components:r})):n.createElement(m,l({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={},l="service",s={unversionedId:"reference/model/kusion_models/kube/frontend/service/doc_service",id:"reference/model/kusion_models/kube/frontend/service/doc_service",title:"service",description:"Source: base/pkg/kusionmodels/kube/frontend/service/service.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/service/doc_service.md",sourceDirName:"reference/model/kusion_models/kube/frontend/service",slug:"/reference/model/kusion_models/kube/frontend/service/doc_service",permalink:"/docs/reference/model/kusion_models/kube/frontend/service/doc_service",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/service/doc_service.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1673342563,formattedLastUpdatedAt:"1/10/2023",frontMatter:{},sidebar:"reference",previous:{title:"secret",permalink:"/docs/reference/model/kusion_models/kube/frontend/secret/doc_secret"},next:{title:"service_account",permalink:"/docs/reference/model/kusion_models/kube/frontend/serviceaccount/doc_service_account"}},o={},c=[{value:"Schema Service",id:"schema-service",level:2},{value:"Base Schema",id:"base-schema",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"service"},"service"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/service/service.k"},"base/pkg/kusion_models/kube/frontend/service/service.k")),(0,a.kt)("h2",{id:"schema-service"},"Schema Service"),(0,a.kt)("p",null,"Service are Kubernetes objects which partition a single Kubernetes cluster into multiple virtual clusters.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubernetes-api/service-resources/service-v1/%5C#Service"},"https://kubernetes.io/docs/reference/kubernetes-api/service-resources/service-v1/\\#Service")),(0,a.kt)("h3",{id:"base-schema"},"Base Schema"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../common/doc_metadata#schema-metadata"},"@base.pkg.kusion_models.kube.frontend.common.Metadata")),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"selector"),(0,a.kt)("br",null),"Route service traffic to pods with label keys and values matching this selector.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"https://kubernetes.io/docs/concepts/services-networking/service/")),(0,a.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"ports"),(0,a.kt)("br",null),"The list of ports that are exposed by this service. ",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/services-networking/service/%5C#virtual-ips-and-service-proxies"},"https://kubernetes.io/docs/concepts/services-networking/service/\\#virtual-ips-and-service-proxies")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"../../../../kusion_kubernetes/api/core/v1/doc_service_port#schema-serviceport"},"v1.ServicePort"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"clusterIP"),(0,a.kt)("br",null),"clusterIP is the IP address of the service and is usually assigned randomly by the master.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/services-networking/service/%5C#virtual-ips-and-service-proxies"},"https://kubernetes.io/docs/concepts/services-networking/service/\\#virtual-ips-and-service-proxies")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"type"),(0,a.kt)("br",null),"determines how the Service is exposed.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/services-networking/service/%5C#publishing-services-service-types"},"https://kubernetes.io/docs/concepts/services-networking/service/\\#publishing-services-service-types")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'"ClusterIP"'),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"externalIPs"),(0,a.kt)("br",null),"externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"externalName"),(0,a.kt)("br",null),"externalName is the external reference that discovery mechanisms will return as an alias for this service (e.g. a DNS CNAME record)."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"externalTrafficPolicy"),(0,a.kt)("br",null),"externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"healthCheckNodePort"),(0,a.kt)("br",null),"healthCheckNodePort specifies the healthcheck nodePort for the service."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"ipFamilyPolicy"),(0,a.kt)("br",null),'ipFamilyPolicy represents the dual-stack-ness requested or required by this Service, and is gated by the "IPv6DualStack" feature gate.'),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"loadBalancerIP"),(0,a.kt)("br",null),"Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"loadBalancerSourceRanges"),(0,a.kt)("br",null),"If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.",(0,a.kt)("br",null),"This field will be ignored if the cloud-provider does not support the feature.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/"},"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"publishNotReadyAddresses"),(0,a.kt)("br",null),"publishNotReadyAddresses indicates that any agent which deals with endpoints for this Service should disregard any indications of ready/not-ready."),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"sessionAffinity"),(0,a.kt)("br",null),'Supports "ClientIP" and "None". Used to maintain session affinity.',(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/services-networking/service/%5C#virtual-ips-and-service-proxies"},"https://kubernetes.io/docs/concepts/services-networking/service/\\#virtual-ips-and-service-proxies")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"sessionAffinityConfig"),(0,a.kt)("br",null),"sessionAffinityConfig contains the configurations of session affinity."),(0,a.kt)("td",{parentName:"tr",align:null},"{str: any}"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'service = Service {\n    name = "my-service-name"\n    namespace = "my-service-name"\n    labels.env = "dev"\n    ports = [\n        {\n            name = "grpc-xds"\n            port = 15010\n        }\n        {\n            name = "https-xds"\n            port = 15011\n        }\n    ]\n}\n')))}p.isMDXComponent=!0}}]);