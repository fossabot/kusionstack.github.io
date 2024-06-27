"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},i="container",o={unversionedId:"reference/modules/developer-schemas/internal/container/container",id:"version-v0.12/reference/modules/developer-schemas/internal/container/container",title:"container",description:"Schema Container",source:"@site/docs_versioned_docs/version-v0.12/6-reference/2-modules/1-developer-schemas/internal/container/container.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/internal/container",slug:"/reference/modules/developer-schemas/internal/container/",permalink:"/zh/docs/reference/modules/developer-schemas/internal/container/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/6-reference/2-modules/1-developer-schemas/internal/container/container.md",tags:[],version:"v0.12",lastUpdatedBy:"Dayuan",lastUpdatedAt:1719479679,formattedLastUpdatedAt:"2024\u5e746\u670827\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"common",permalink:"/zh/docs/reference/modules/developer-schemas/internal/common"},next:{title:"lifecycle",permalink:"/zh/docs/reference/modules/developer-schemas/internal/container/lifecycle/"}},s={},p=[{value:"Schema Container",id:"schema-container",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Schema FileSpec",id:"schema-filespec",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Examples",id:"examples-1",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"container"},"container"),(0,a.kt)("h2",{id:"schema-container"},"Schema Container"),(0,a.kt)("p",null,"Container describes how the Application's tasks are expected to be run. Depending on",(0,a.kt)("br",null),"the replicas parameter 1 or more containers can be created from each template."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"args")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Arguments to the entrypoint.",(0,a.kt)("br",null),"Args will overwrite the CMD value set in the Dockfile, otherwise the Docker",(0,a.kt)("br",null),"image's CMD is used if this is not provided."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"command")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Entrypoint array. Not executed within a shell.",(0,a.kt)("br",null),"Command will overwrite the ENTRYPOINT value set in the Dockfile, otherwise the Docker",(0,a.kt)("br",null),"image's ENTRYPOINT is used if this is not provided."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"dirs")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Collection of volumes mount into the container's filesystem.",(0,a.kt)("br",null),"The dirs parameter is a dict with the key being the folder name in the container and the value",(0,a.kt)("br",null),"being the referenced volume."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"env")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,a.kt)("td",{parentName:"tr",align:null},"List of environment variables to set in the container.",(0,a.kt)("br",null),"The value of the environment variable may be static text or a value from a secret."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"files")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:",(0,a.kt)("a",{parentName:"td",href:"#filespec"},"FileSpec"),"}"),(0,a.kt)("td",{parentName:"tr",align:null},"List of files to create in the container.",(0,a.kt)("br",null),"The files parameter is a dict with the key being the file name in the container and the value",(0,a.kt)("br",null),"being the target file specification."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"image")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Image refers to the Docker image name to run for this container.",(0,a.kt)("br",null),"More info: ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images"},"https://kubernetes.io/docs/concepts/containers/images")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lifecycle")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/docs/reference/modules/developer-schemas/internal/container/lifecycle/#schema-lifecycle"},"lc.Lifecycle")),(0,a.kt)("td",{parentName:"tr",align:null},"Lifecycle refers to actions that the management system should take in response to container lifecycle events."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"livenessProbe")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/docs/reference/modules/developer-schemas/internal/container/probe/#schema-probe"},"p.Probe")),(0,a.kt)("td",{parentName:"tr",align:null},"LivenessProbe indicates if a running process is healthy.",(0,a.kt)("br",null),"Container will be restarted if the probe fails."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"readinessProbe")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/docs/reference/modules/developer-schemas/internal/container/probe/#schema-probe"},"p.Probe")),(0,a.kt)("td",{parentName:"tr",align:null},"ReadinessProbe indicates whether an application is available to handle requests."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"resources")),(0,a.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,a.kt)("td",{parentName:"tr",align:null},"Map of resource requirements the container should run with.",(0,a.kt)("br",null),"The resources parameter is a dict with the key being the resource name and the value being",(0,a.kt)("br",null),"the resource value."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"startupProbe")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/docs/reference/modules/developer-schemas/internal/container/probe/#schema-probe"},"p.Probe")),(0,a.kt)("td",{parentName:"tr",align:null},"StartupProbe indicates that the container has started for the first time.",(0,a.kt)("br",null),"Container will be restarted if the probe fails."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"workingDir")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"The working directory of the running process defined in entrypoint.",(0,a.kt)("br",null),"Default container runtime will be used if this is not specified."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container as c\n\nweb = c.Container {\n    image:   "nginx:latest"\n    command: ["/bin/sh", "-c", "echo hi"]\n    env: {\n        "name": "value"\n    }\n    resources: {\n        "cpu": "2"\n        "memory": "4Gi"\n    }\n}\n')),(0,a.kt)("h2",{id:"schema-filespec"},"Schema FileSpec"),(0,a.kt)("p",null,"FileSpec defines the target file in a Container."),(0,a.kt)("h3",{id:"attributes-1"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"content")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"File content in plain text."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"contentFrom")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Source for the file content, reference to a secret of configmap value."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"mode")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Mode bits used to set permissions on this file, must be an octal value",(0,a.kt)("br",null),"between 0000 and 0777 or a decimal value between 0 and 511"),(0,a.kt)("td",{parentName:"tr",align:null},'"0644"')))),(0,a.kt)("h3",{id:"examples-1"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container as c\n\ntmpFile = c.FileSpec {\n    content: "some file contents"\n    mode: "0777"\n}\n')))}c.isMDXComponent=!0}}]);