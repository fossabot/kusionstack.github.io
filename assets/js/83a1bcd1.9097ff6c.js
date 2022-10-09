"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),s=a,k=c["".concat(p,".").concat(s)]||c[s]||m[s]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={},o="probe",i={unversionedId:"reference/model/kusion_models/kube/frontend/container/probe/doc_probe",id:"reference/model/kusion_models/kube/frontend/container/probe/doc_probe",title:"probe",description:"Source: base/pkg/kusionmodels/kube/frontend/container/probe/probe.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/container/probe/doc_probe.md",sourceDirName:"reference/model/kusion_models/kube/frontend/container/probe",slug:"/reference/model/kusion_models/kube/frontend/container/probe/doc_probe",permalink:"/docs/reference/model/kusion_models/kube/frontend/container/probe/doc_probe",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/container/probe/doc_probe.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1665299274,formattedLastUpdatedAt:"10/9/2022",frontMatter:{},sidebar:"reference",previous:{title:"container_port",permalink:"/docs/reference/model/kusion_models/kube/frontend/container/port/doc_container_port"},next:{title:"server",permalink:"/docs/reference/model/kusion_models/kube/frontend/doc_server"}},p={},d=[{value:"Schema Probe",id:"schema-probe",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Schema Exec",id:"schema-exec",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Schema Http",id:"schema-http",level:2},{value:"Attributes",id:"attributes-2",level:3},{value:"Schema Tcp",id:"schema-tcp",level:2},{value:"Attributes",id:"attributes-3",level:3}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"probe"},"probe"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/container/probe/probe.k"},"base/pkg/kusion_models/kube/frontend/container/probe/probe.k")),(0,a.kt)("h2",{id:"schema-probe"},"Schema Probe"),(0,a.kt)("p",null,"Probe describes a health check to be performed against a container ",(0,a.kt)("br",null),"to determine whether it is alive or ready to receive traffic."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"handler"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The action taken to determine the health of a container."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#schema-exec"},"probe.Exec")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"#schema-http"},"probe.Http")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"#schema-tcp"},"probe.Tcp")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"initialDelaySeconds"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The length of time before health checking is activated.  In seconds."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"timeoutSeconds"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The length of time before health checking times out.  In seconds."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"periodSeconds"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"How often (in seconds) to perform the probe."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"successThreshold"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"Minimum consecutive successes for the probe to be considered successful after having failed."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"failureThreshold"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"Minimum consecutive failures for the probe to be considered failed after having succeeded."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend.container.probe as p\n\nprobe = p.Probe {\n    handler = p.Http {\n        path = "/healthz"\n    }\n    initialDelaySeconds = 10\n}\n')),(0,a.kt)("h2",{id:"schema-exec"},"Schema Exec"),(0,a.kt)("p",null,'Exec describes a "run in container" action. '),(0,a.kt)("h3",{id:"attributes-1"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"command"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The command line to execute inside the container."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))))),(0,a.kt)("h2",{id:"schema-http"},"Schema Http"),(0,a.kt)("p",null,"Http describes an action based on HTTP Get requests."),(0,a.kt)("h3",{id:"attributes-2"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"path"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The Path to access on the HTTP server. e.g /healthz"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"port"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The Number of the port to access on the container."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"scheme"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"Scheme to use for connecting to the host, defaults to HTTP."),(0,a.kt)("td",{parentName:"tr",align:null},'"HTTP" ',"|",' "HTTPS"'),(0,a.kt)("td",{parentName:"tr",align:null},'"HTTP"'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))))),(0,a.kt)("h2",{id:"schema-tcp"},"Schema Tcp"),(0,a.kt)("p",null,"Tcp describes an action based on opening a socket."),(0,a.kt)("h3",{id:"attributes-3"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"tcpSocket"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The TCP socket port to connect to."),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))))))}m.isMDXComponent=!0}}]);