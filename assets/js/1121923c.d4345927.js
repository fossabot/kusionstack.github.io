"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,k=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o="sidecar",i={unversionedId:"reference/model/kusion_models/kube/frontend/sidecar/doc_sidecar",id:"reference/model/kusion_models/kube/frontend/sidecar/doc_sidecar",title:"sidecar",description:"Source: base/pkg/kusionmodels/kube/frontend/sidecar/sidecar.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_sidecar.md",sourceDirName:"reference/model/kusion_models/kube/frontend/sidecar",slug:"/reference/model/kusion_models/kube/frontend/sidecar/doc_sidecar",permalink:"/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_sidecar",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_sidecar.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1680091886,formattedLastUpdatedAt:"3/29/2023",frontMatter:{},sidebar:"reference",previous:{title:"service_account",permalink:"/docs/reference/model/kusion_models/kube/frontend/serviceaccount/doc_service_account"},next:{title:"simple_sidecar",permalink:"/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_simple_sidecar"}},d={},s=[{value:"Schema Sidecar",id:"schema-sidecar",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sidecar"},"sidecar"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/sidecar/sidecar.k"},"base/pkg/kusion_models/kube/frontend/sidecar/sidecar.k")),(0,a.kt)("h2",{id:"schema-sidecar"},"Schema Sidecar"),(0,a.kt)("p",null,"Sidecar describes the sidecar container configuration that is expected to be run on the host."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The container name. Each container in a pod must have a unique name."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"command"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The startup command of main process. The image's entrypoint is used if this is not provided."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"args"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The startup arguments of main process. The image's cmd is used if this is not provided."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"env"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"List of environment variables in the container."),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"../container/env/doc_env#schema-env"},"env.Env"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"envFrom"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"List of sources to populate environment variables in the container."),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"../container/env/doc_env#schema-envfromsource"},"env.EnvFromSource"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"ports")),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"../container/port/doc_container_port#schema-containerport"},"port.ContainerPort"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"resource"),(0,a.kt)("br",null),"A Pod-level attribute.",(0,a.kt)("br",null),"Sidecar container resource."),(0,a.kt)("td",{parentName:"tr",align:null},"str ","|"," ",(0,a.kt)("a",{parentName:"td",href:"../resource/doc_resource#schema-resource"},"resource.Resource")),(0,a.kt)("td",{parentName:"tr",align:null},'"1<cpu<2,1Gi<memory<2Gi,disk=20Gi"'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"image"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"Docker image name. More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images"},"https://kubernetes.io/docs/concepts/containers/images")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"readinessProbe"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The probe to check whether container is ready or not."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../container/probe/doc_probe#schema-probe"},"p.Probe")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"livenessProbe"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The probe to check whether container is live or not."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../container/probe/doc_probe#schema-probe"},"p.Probe")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"startupProbe"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The probe to indicates that the Pod has successfully initialized."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../container/probe/doc_probe#schema-probe"},"p.Probe")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lifecycle"),(0,a.kt)("br",null),"Actions that the management system should take in response to container lifecycle events.",(0,a.kt)("br",null),"Cannot be updated."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../container/lifecycle/doc_lifecycle#schema-lifecycle"},"lc.Lifecycle")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"workingDir"),(0,a.kt)("br",null),"Container's working directory. If not specified, the container runtime's default will be used, ",(0,a.kt)("br",null),"which might be configured in the container image. Cannot be updated."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"securityContext"),(0,a.kt)("br",null),"SecurityContext defines the security options the container should be run with.",(0,a.kt)("br",null),"If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"},"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/")),(0,a.kt)("td",{parentName:"tr",align:null},"{str: any}"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend.sidecar as s\nimport base.pkg.kusion_models.kube.frontend.container.probe as p\n\nsidecar = s.Sidecar {\n    name = "test"\n    livenessProbe = p.Probe {\n        handler = p.Http {\n            httpPath = "/healthz"\n        }\n        initialDelaySeconds = 10\n    }\n}\n')))}u.isMDXComponent=!0}}]);