"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89319],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},i="service",o={unversionedId:"reference/modules/developer-schemas/workload/service",id:"version-v0.11/reference/modules/developer-schemas/workload/service",title:"service",description:"Schemas",source:"@site/docs_versioned_docs/version-v0.11/6-reference/2-modules/1-developer-schemas/workload/service.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/workload",slug:"/reference/modules/developer-schemas/workload/service",permalink:"/docs/reference/modules/developer-schemas/workload/service",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/6-reference/2-modules/1-developer-schemas/workload/service.md",tags:[],version:"v0.11",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718107126,formattedLastUpdatedAt:"Jun 11, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"job",permalink:"/docs/reference/modules/developer-schemas/workload/job"},next:{title:"mysql",permalink:"/docs/reference/modules/workspace-configs/database/mysql"}},p={},s=[{value:"Schemas",id:"schemas",level:2},{value:"Schema Service",id:"schema-service",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Base Schema",id:"base-schema",level:3},{value:"Schema Container",id:"schema-container",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Schema FileSpec",id:"schema-filespec",level:2},{value:"Attributes",id:"attributes-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"Schema Lifecycle",id:"schema-lifecycle",level:3},{value:"Attributes",id:"attributes-3",level:4},{value:"Examples",id:"examples-3",level:4},{value:"Schema Exec",id:"schema-exec",level:3},{value:"Attributes",id:"attributes-4",level:4},{value:"Examples",id:"examples-4",level:4},{value:"Schema Http",id:"schema-http",level:3},{value:"Attributes",id:"attributes-5",level:4},{value:"Examples",id:"examples-5",level:4},{value:"Schema Probe",id:"schema-probe",level:3},{value:"Attributes",id:"attributes-6",level:4},{value:"Examples",id:"examples-6",level:4},{value:"Schema Tcp",id:"schema-tcp",level:3},{value:"Attributes",id:"attributes-7",level:4},{value:"Examples",id:"examples-7",level:4},{value:"Schema Secret",id:"schema-secret",level:2},{value:"Attributes",id:"attributes-8",level:3},{value:"Examples",id:"examples-8",level:3}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"service"},"service"),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema-service"},"Service"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema-container"},"Container"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema-filespec"},"Filespec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema-lifecycle"},"LifeCycle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema-probe"},"Probe"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema-exec"},"Exec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema-http"},"Http")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema-tcp"},"Tcp")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schema-secret"},"Secret"))))),(0,r.kt)("h2",{id:"schema-service"},"Schema Service"),(0,r.kt)("p",null,"Service is a kind of workload profile that describes how to run your application code. This",(0,r.kt)("br",null),'is typically used for long-running web applications that should "never" go down, and handle',(0,r.kt)("br",null),"short-lived latency-sensitive web requests, or events."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"annotations")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Annotations are key/value pairs that attach arbitrary non-identifying metadata to the workload."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"containers")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:}"),(0,r.kt)("td",{parentName:"tr",align:null},"Containers defines the templates of containers to be ran.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers"},"https://kubernetes.io/docs/concepts/containers")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"labels")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Labels are key/value pairs that are attached to the workload."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"replicas")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of container replicas based on this configuration that should be ran."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"secrets")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/modules/developer-schemas/internal/secret/#schema-secret"},"Secret"),"}"),(0,r.kt)("td",{parentName:"tr",align:null},"Secrets can be used to store small amount of sensitive data e.g. password, token."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Instantiate a long-running service and its image is "nginx:v1"\n\nimport kam.workload as wl\nimport kam.workload.container as c\n\nnginxSvc : wl.Service {\n    containers: {\n        "nginx": c.Container {\n            image: "nginx:v1"\n        }\n    }\n}\n')),(0,r.kt)("h3",{id:"base-schema"},"Base Schema"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../internal/common#schema-workloadbase"},"WorkloadBase")),(0,r.kt)("h2",{id:"schema-container"},"Schema Container"),(0,r.kt)("p",null,"Container describes how the Application's tasks are expected to be run. Depending on",(0,r.kt)("br",null),"the replicas parameter 1 or more containers can be created from each template."),(0,r.kt)("h3",{id:"attributes-1"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Arguments to the entrypoint.",(0,r.kt)("br",null),"Args will overwrite the CMD value set in the Dockfile, otherwise the Docker",(0,r.kt)("br",null),"image's CMD is used if this is not provided."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"command")),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Entrypoint array. Not executed within a shell.",(0,r.kt)("br",null),"Command will overwrite the ENTRYPOINT value set in the Dockfile, otherwise the Docker",(0,r.kt)("br",null),"image's ENTRYPOINT is used if this is not provided."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"dirs")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of volumes mount into the container's filesystem.",(0,r.kt)("br",null),"The dirs parameter is a dict with the key being the folder name in the container and the value",(0,r.kt)("br",null),"being the referenced volume."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"List of environment variables to set in the container.",(0,r.kt)("br",null),"The value of the environment variable may be static text or a value from a secret."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"files")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:",(0,r.kt)("a",{parentName:"td",href:"#filespec"},"FileSpec"),"}"),(0,r.kt)("td",{parentName:"tr",align:null},"List of files to create in the container.",(0,r.kt)("br",null),"The files parameter is a dict with the key being the file name in the container and the value",(0,r.kt)("br",null),"being the target file specification."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"image")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Image refers to the Docker image name to run for this container.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images"},"https://kubernetes.io/docs/concepts/containers/images")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lifecycle")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/modules/developer-schemas/internal/container/lifecycle/#schema-lifecycle"},"lc.Lifecycle")),(0,r.kt)("td",{parentName:"tr",align:null},"Lifecycle refers to actions that the management system should take in response to container lifecycle events."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"livenessProbe")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/modules/developer-schemas/internal/container/probe/#schema-probe"},"p.Probe")),(0,r.kt)("td",{parentName:"tr",align:null},"LivenessProbe indicates if a running process is healthy.",(0,r.kt)("br",null),"Container will be restarted if the probe fails."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"readinessProbe")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/modules/developer-schemas/internal/container/probe/#schema-probe"},"p.Probe")),(0,r.kt)("td",{parentName:"tr",align:null},"ReadinessProbe indicates whether an application is available to handle requests."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"resources")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Map of resource requirements the container should run with.",(0,r.kt)("br",null),"The resources parameter is a dict with the key being the resource name and the value being",(0,r.kt)("br",null),"the resource value."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"startupProbe")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/modules/developer-schemas/internal/container/probe/#schema-probe"},"p.Probe")),(0,r.kt)("td",{parentName:"tr",align:null},"StartupProbe indicates that the container has started for the first time.",(0,r.kt)("br",null),"Container will be restarted if the probe fails."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"workingDir")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The working directory of the running process defined in entrypoint.",(0,r.kt)("br",null),"Default container runtime will be used if this is not specified."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container as c\n\nweb = c.Container {\n    image:   "nginx:latest"\n    command: ["/bin/sh", "-c", "echo hi"]\n    env: {\n        "name": "value"\n    }\n    resources: {\n        "cpu": "2"\n        "memory": "4Gi"\n    }\n}\n')),(0,r.kt)("h2",{id:"schema-filespec"},"Schema FileSpec"),(0,r.kt)("p",null,"FileSpec defines the target file in a Container."),(0,r.kt)("h3",{id:"attributes-2"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"content")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"File content in plain text."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"contentFrom")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Source for the file content, reference to a secret of configmap value."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"mode")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Mode bits used to set permissions on this file, must be an octal value",(0,r.kt)("br",null),"between 0000 and 0777 or a decimal value between 0 and 511"),(0,r.kt)("td",{parentName:"tr",align:null},'"0644"')))),(0,r.kt)("h3",{id:"examples-2"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container as c\n\ntmpFile = c.FileSpec {\n    content: "some file contents"\n    mode: "0777"\n}\n')),(0,r.kt)("h3",{id:"schema-lifecycle"},"Schema Lifecycle"),(0,r.kt)("p",null,"Lifecycle describes actions that the management system should take in response to container lifecycle events."),(0,r.kt)("h4",{id:"attributes-3"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"postStart")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The action to be taken after a container is created.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"},"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"preStop")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The action to be taken before a container is terminated due to an API request or",(0,r.kt)("br",null),"management event such as liveness/startup probe failure, preemption, resource contention, etc.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"},"https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"))))),(0,r.kt)("h4",{id:"examples-3"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.workload.container.probe as p\nimport kam.workload.container.lifecycle as lc\n\nlifecycleHook = lc.Lifecycle {\n    preStop: p.Exec {\n        command: ["preStop.sh"]\n    }\n    postStart: p.Http {\n        url: "http://localhost:80"\n    }\n}\n')),(0,r.kt)("h3",{id:"schema-exec"},"Schema Exec"),(0,r.kt)("p",null,'Exec describes a "run in container" action.'),(0,r.kt)("h4",{id:"attributes-4"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"command")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"The command line to execute inside the container."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples-4"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.workload.container.probe as p\n\nexecProbe = p.Exec {\n    command: ["probe.sh"]\n}\n')),(0,r.kt)("h3",{id:"schema-http"},"Schema Http"),(0,r.kt)("p",null,"Http describes an action based on HTTP Get requests."),(0,r.kt)("h4",{id:"attributes-5"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of custom headers to set in the request"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"url")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The full qualified url to send HTTP requests."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples-5"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.workload.container.probe as p\n\nhttpProbe = p.Http {\n    url: "http://localhost:80"\n    headers: {\n        "X-HEADER": "VALUE"\n    }\n}\n')),(0,r.kt)("h3",{id:"schema-probe"},"Schema Probe"),(0,r.kt)("p",null,"Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. There are three probe types: readiness, liveness, and startup."),(0,r.kt)("h4",{id:"attributes-6"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"failureThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum consecutive failures for the probe to be considered failed after having succeeded."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"initialDelaySeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of seconds before health checking is activated.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"periodSeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"How often (in seconds) to perform the probe."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"probeHandler")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#exec"},"Exec")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#http"},"Http")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tcp"},"Tcp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"successThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum consecutive successes for the probe to be considered successful after having failed."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"terminationGracePeriod")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration in seconds before terminate gracefully upon probe failure."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"timeoutSeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of seconds after which the probe times out.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples-6"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.workload.container.probe as p\n\nprobe = p.Probe {\n    probeHandler: p.Http {\n        path: "/healthz"\n    }\n    initialDelaySeconds: 10\n}\n')),(0,r.kt)("h3",{id:"schema-tcp"},"Schema Tcp"),(0,r.kt)("p",null,"Tcp describes an action based on opening a socket."),(0,r.kt)("h4",{id:"attributes-7"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"url")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The full qualified url to open a socket."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"examples-7"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.workload.container.probe as p\n\ntcpProbe = p.Tcp {\n    url: "tcp://localhost:1234"\n}\n')),(0,r.kt)("h2",{id:"schema-secret"},"Schema Secret"),(0,r.kt)("p",null,"Secret can be used to store sensitive data."),(0,r.kt)("h3",{id:"attributes-8"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Data contains the non-binary secret data in string form."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"immutable")),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Immutable, if set to true, ensures that data stored in the Secret cannot be updated."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of parameters used to facilitate programmatic handling of secret data."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},'"basic"'),(0,r.kt)("td",{parentName:"tr",align:null},'"token"'),(0,r.kt)("td",{parentName:"tr",align:null},'"opaque"')))),(0,r.kt)("h3",{id:"examples-8"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.secret as sec\n\nbasicAuth = sec.Secret {\n    type: "basic"\n    data: {\n        "username": ""\n        "password": ""\n    }\n}\n')))}d.isMDXComponent=!0}}]);