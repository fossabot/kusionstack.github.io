"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="container",l={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_container",id:"reference/model/kusion_kubernetes/api/core/v1/doc_container",title:"container",description:"Source: base/pkg/kusionkubernetes/api/core/v1/container.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_container.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_container",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_container",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_container.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1685674152,formattedLastUpdatedAt:"2023/6/2",frontMatter:{},sidebar:"reference",previous:{title:"config_map_volume_source",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_config_map_volume_source"},next:{title:"container_port",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_container_port"}},s={},d=[{value:"Schema Container",id:"schema-container",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"container"},"container"),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/container.k"},"base/pkg/kusion_kubernetes/api/core/v1/container.k")),(0,r.kt)("p",null,"This is the container module in kusion","_","kubernetes.api.core.v1 package.",(0,r.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,r.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,r.kt)("h2",{id:"schema-container"},"Schema Container"),(0,r.kt)("p",null,"A single application container that you want to run within a pod."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"args"),(0,r.kt)("br",null),"Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR","_","NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR","_",'NAME) syntax: i.e. "$$(VAR',"_",'NAME)" will produce the string literal "$(VAR',"_",'NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: ',(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/%5C#running-a-command-in-a-shell"},"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/\\#running-a-command-in-a-shell")),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"command"),(0,r.kt)("br",null),"Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR","_","NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR","_",'NAME) syntax: i.e. "$$(VAR',"_",'NAME)" will produce the string literal "$(VAR',"_",'NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: ',(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/%5C#running-a-command-in-a-shell"},"https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/\\#running-a-command-in-a-shell")),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"env"),(0,r.kt)("br",null),"List of environment variables to set in the container. Cannot be updated."),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"doc_env_var#schema-envvar"},"v1.EnvVar"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"envFrom"),(0,r.kt)("br",null),"List of sources to populate environment variables in the container. The keys defined within a source must be a C","_","IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated."),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"doc_env_from_source#schema-envfromsource"},"v1.EnvFromSource"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"image"),(0,r.kt)("br",null),"Docker image name. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images"},"https://kubernetes.io/docs/concepts/containers/images")," This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"imagePullPolicy"),(0,r.kt)("br",null),"Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/containers/images%5C#updating-images"},"https://kubernetes.io/docs/concepts/containers/images\\#updating-images")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name"),(0,r.kt)("br",null),"Name of the container specified as a DNS","_","LABEL. Each container in a pod must have a unique name (DNS","_","LABEL). Cannot be updated."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"required"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ports"),(0,r.kt)("br",null),'List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.'),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"doc_container_port#schema-containerport"},"v1.ContainerPort"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"stdin"),(0,r.kt)("br",null),"Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"stdinOnce"),(0,r.kt)("br",null),"Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"terminationMessagePath"),(0,r.kt)("br",null),"Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"terminationMessagePolicy"),(0,r.kt)("br",null),"Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"tty"),(0,r.kt)("br",null),"Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false."),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"volumeDevices"),(0,r.kt)("br",null),"volumeDevices is the list of block devices to be used by the container."),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"doc_volume_device#schema-volumedevice"},"v1.VolumeDevice"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"volumeMounts"),(0,r.kt)("br",null),"Pod volumes to mount into the container's filesystem. Cannot be updated."),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"doc_volume_mount#schema-volumemount"},"v1.VolumeMount"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"workingDir"),(0,r.kt)("br",null),"Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated."),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lifecycle"),(0,r.kt)("br",null),"Actions that the management system should take in response to container lifecycle events. Cannot be updated."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_lifecycle#schema-lifecycle"},"Lifecycle")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"livenessProbe"),(0,r.kt)("br",null),"Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle%5C#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle\\#container-probes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_probe#schema-probe"},"Probe")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"readinessProbe"),(0,r.kt)("br",null),"Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle%5C#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle\\#container-probes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_probe#schema-probe"},"Probe")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"resources"),(0,r.kt)("br",null),"Compute Resources required by this container. Cannot be updated. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_resource_requirements#schema-resourcerequirements"},"ResourceRequirements")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"securityContext"),(0,r.kt)("br",null),"SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"},"https://kubernetes.io/docs/tasks/configure-pod-container/security-context/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_security_context#schema-securitycontext"},"SecurityContext")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"startupProbe"),(0,r.kt)("br",null),"StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle%5C#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle\\#container-probes")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"doc_probe#schema-probe"},"Probe")),(0,r.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);