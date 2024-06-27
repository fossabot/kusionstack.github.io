"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77175],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={},o="probe",i={unversionedId:"reference/modules/developer-schemas/internal/container/probe/probe",id:"version-v0.12/reference/modules/developer-schemas/internal/container/probe/probe",title:"probe",description:"Schema Probe",source:"@site/docs_versioned_docs/version-v0.12/6-reference/2-modules/1-developer-schemas/internal/container/probe/probe.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/internal/container/probe",slug:"/reference/modules/developer-schemas/internal/container/probe/",permalink:"/docs/reference/modules/developer-schemas/internal/container/probe/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/6-reference/2-modules/1-developer-schemas/internal/container/probe/probe.md",tags:[],version:"v0.12",lastUpdatedBy:"Dayuan",lastUpdatedAt:1719479679,formattedLastUpdatedAt:"Jun 27, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"lifecycle",permalink:"/docs/reference/modules/developer-schemas/internal/container/lifecycle/"},next:{title:"secret",permalink:"/docs/reference/modules/developer-schemas/internal/secret/"}},p={},s=[{value:"Schema Probe",id:"schema-probe",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Schema Exec",id:"schema-exec",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Schema Http",id:"schema-http",level:2},{value:"Attributes",id:"attributes-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"Schema Tcp",id:"schema-tcp",level:2},{value:"Attributes",id:"attributes-3",level:3},{value:"Examples",id:"examples-3",level:3}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"probe"},"probe"),(0,r.kt)("h2",{id:"schema-probe"},"Schema Probe"),(0,r.kt)("p",null,"Probe describes a health check to be performed against a container to determine whether it is",(0,r.kt)("br",null),"alive or ready to receive traffic. There are three probe types: readiness, liveness, and startup."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"failureThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum consecutive failures for the probe to be considered failed after having succeeded."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"initialDelaySeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of seconds before health checking is activated.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"periodSeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"How often (in seconds) to perform the probe."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"probeHandler")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#exec"},"Exec")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#http"},"Http")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tcp"},"Tcp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"successThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum consecutive successes for the probe to be considered successful after having failed."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"terminationGracePeriod")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration in seconds before terminate gracefully upon probe failure."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"timeoutSeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of seconds after which the probe times out.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container.probe as p\n\nprobe = p.Probe {\n    probeHandler: p.Http {\n        path: "/healthz"\n    }\n    initialDelaySeconds: 10\n}\n')),(0,r.kt)("h2",{id:"schema-exec"},"Schema Exec"),(0,r.kt)("p",null,'Exec describes a "run in container" action.'),(0,r.kt)("h3",{id:"attributes-1"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"command")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"The command line to execute inside the container."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container.probe as p\n\nexecProbe = p.Exec {\n    command: ["probe.sh"]\n}\n')),(0,r.kt)("h2",{id:"schema-http"},"Schema Http"),(0,r.kt)("p",null,"Http describes an action based on HTTP Get requests."),(0,r.kt)("h3",{id:"attributes-2"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of custom headers to set in the request"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"url")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The full qualified url to send HTTP requests."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples-2"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container.probe as p\n\nhttpProbe = p.Http {\n    url: "http://localhost:80"\n    headers: {\n        "X-HEADER": "VALUE"\n    }\n}\n')),(0,r.kt)("h2",{id:"schema-tcp"},"Schema Tcp"),(0,r.kt)("p",null,"Tcp describes an action based on opening a socket."),(0,r.kt)("h3",{id:"attributes-3"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"url")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The full qualified url to open a socket."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples-3"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container.probe as p\n\ntcpProbe = p.Tcp {\n    url: "tcp://localhost:1234"\n}\n')))}c.isMDXComponent=!0}}]);