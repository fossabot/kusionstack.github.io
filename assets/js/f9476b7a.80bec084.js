"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={},i="container",o={unversionedId:"kusion/reference/model/catalog_models/internal/container/doc_container",id:"version-v0.9/kusion/reference/model/catalog_models/internal/container/doc_container",title:"container",description:"Schema Container",source:"@site/versioned_docs/version-v0.9/kusion/reference/model/catalog_models/internal/container/doc_container.md",sourceDirName:"kusion/reference/model/catalog_models/internal/container",slug:"/kusion/reference/model/catalog_models/internal/container/doc_container",permalink:"/docs/kusion/reference/model/catalog_models/internal/container/doc_container",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/reference/model/catalog_models/internal/container/doc_container.md",tags:[],version:"v0.9",lastUpdatedBy:"KK",lastUpdatedAt:1704973905,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"opsrule",permalink:"/docs/kusion/reference/model/catalog_models/trait/doc_opsrule"},next:{title:"lifecycle",permalink:"/docs/kusion/reference/model/catalog_models/internal/container/lifecycle/doc_lifecycle"}},d={},s=[{value:"Schema Container",id:"schema-container",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Schema FileSpec",id:"schema-filespec",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Examples",id:"examples-1",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"container"},"container"),(0,r.kt)("h2",{id:"schema-container"},"Schema Container"),(0,r.kt)("p",null,"Container describes how the Application's tasks are expected to be run. Depending on",(0,r.kt)("br",null),"the replicas parameter 1 or more containers can be created from each template."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"image"),(0,r.kt)("br",null),"Image refers to the Docker image name to run for this container.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images"},"https://kubernetes.io/docs/concepts/containers/images")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"command"),(0,r.kt)("br",null),"Entrypoint array. Not executed within a shell.",(0,r.kt)("br",null),"Command will overwrite the ENTRYPOINT value set in the Dockfile, otherwise the Docker",(0,r.kt)("br",null),"image's ENTRYPOINT is used if this is not provided."),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"args"),(0,r.kt)("br",null),"Arguments to the entrypoint.",(0,r.kt)("br",null),"Args will overwrite the CMD value set in the Dockfile, otherwise the Docker",(0,r.kt)("br",null),"image's CMD is used if this is not provided."),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"env"),(0,r.kt)("br",null),"List of environment variables to set in the container.",(0,r.kt)("br",null),"The value of the environment variable may be static text or a value from a secret."),(0,r.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"workingDir"),(0,r.kt)("br",null),"The working directory of the running process defined in entrypoint.",(0,r.kt)("br",null),"Default container runtime will be used if this is not specified."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"resources"),(0,r.kt)("br",null),"Map of resource requirements the container should run with.",(0,r.kt)("br",null),"The resources parameter is a dict with the key being the resource name and the value being",(0,r.kt)("br",null),"the resource value."),(0,r.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"files"),(0,r.kt)("br",null),"List of files to create in the container.",(0,r.kt)("br",null),"The files parameter is a dict with the key being the file name in the container and the value",(0,r.kt)("br",null),"being the target file specification."),(0,r.kt)("td",{parentName:"tr",align:null},"{str: ",(0,r.kt)("a",{parentName:"td",href:"#schema-filespec"},"container.FileSpec"),"}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"dirs"),(0,r.kt)("br",null),"Collection of volumes mount into the container's filesystem.",(0,r.kt)("br",null),"The dirs parameter is a dict with the key being the folder name in the container and the value",(0,r.kt)("br",null),"being the referenced volume."),(0,r.kt)("td",{parentName:"tr",align:null},"{str: str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"livenessProbe"),(0,r.kt)("br",null),"LivenessProbe indicates if a running process is healthy.",(0,r.kt)("br",null),"Container will be restarted if the probe fails."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"probe/doc_probe#schema-probe"},"p.Probe")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"readinessProbe"),(0,r.kt)("br",null),"ReadinessProbe indicates whether an application is available to handle requests."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"probe/doc_probe#schema-probe"},"p.Probe")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"startupProbe"),(0,r.kt)("br",null),"StartupProbe indicates that the container has started for the first time.",(0,r.kt)("br",null),"Container will be restarted if the probe fails."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"probe/doc_probe#schema-probe"},"p.Probe")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lifecycle"),(0,r.kt)("br",null),"Lifecycle refers to actions that the management system should take in response to container lifecycle events."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"lifecycle/doc_lifecycle#schema-lifecycle"},"lc.Lifecycle")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1.workload.container as c\n\nweb = c.Container {\n    image:   "nginx:latest"\n    command: ["/bin/sh", "-c", "echo hi"]\n    env: {\n        "name": "value"\n    }\n    resources: {\n        "cpu": "2"\n        "memory": "4Gi"\n    }\n}\n')),(0,r.kt)("h2",{id:"schema-filespec"},"Schema FileSpec"),(0,r.kt)("p",null,"FileSpec defines the target file in a Container."),(0,r.kt)("h3",{id:"attributes-1"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"content"),(0,r.kt)("br",null),"File content in plain text."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"contentFrom"),(0,r.kt)("br",null),"Source for the file content, reference to a secret of configmap value."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"mode"),(0,r.kt)("br",null),"Mode bits used to set permissions on this file, must be an octal value",(0,r.kt)("br",null),"between 0000 and 0777 or a decimal value between 0 and 511"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required"))))),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1.workload.container as c\n\ntmpFile = c.FileSpec {\n    content: "some file contents"\n    mode: "0777"\n}\n')))}c.isMDXComponent=!0}}]);