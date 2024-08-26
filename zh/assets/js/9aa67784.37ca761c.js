"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(i,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={},o="probe",p={unversionedId:"reference/modules/developer-schemas/internal/container/probe/probe",id:"reference/modules/developer-schemas/internal/container/probe/probe",title:"probe",description:"Schema Probe",source:"@site/docs/kusion/6-reference/2-modules/1-developer-schemas/internal/container/probe/probe.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/internal/container/probe",slug:"/reference/modules/developer-schemas/internal/container/probe/",permalink:"/zh/docs/next/reference/modules/developer-schemas/internal/container/probe/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/1-developer-schemas/internal/container/probe/probe.md",tags:[],version:"current",lastUpdatedBy:"hexin",lastUpdatedAt:1724678822,formattedLastUpdatedAt:"2024\u5e748\u670826\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"lifecycle",permalink:"/zh/docs/next/reference/modules/developer-schemas/internal/container/lifecycle/"},next:{title:"secret",permalink:"/zh/docs/next/reference/modules/developer-schemas/internal/secret/"}},i={},s=[{value:"Schema Probe",id:"schema-probe",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3},{value:"Schema Exec",id:"schema-exec",level:2},{value:"Attributes",id:"attributes-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Schema Http",id:"schema-http",level:2},{value:"Attributes",id:"attributes-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"Schema Tcp",id:"schema-tcp",level:2},{value:"Attributes",id:"attributes-3",level:3},{value:"Examples",id:"examples-3",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"probe"},"probe"),(0,r.kt)("h2",{id:"schema-probe"},"Schema Probe"),(0,r.kt)("p",null,"Probe describes a health check to be performed against a container to determine whether it is",(0,r.kt)("br",null),"alive or ready to receive traffic. There are three probe types: readiness, liveness, and startup."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"failureThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum consecutive failures for the probe to be considered failed after having succeeded."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"initialDelaySeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of seconds before health checking is activated.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"periodSeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"How often (in seconds) to perform the probe."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"probeHandler")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#exec"},"Exec")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#http"},"Http")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#tcp"},"Tcp"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"successThreshold")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum consecutive successes for the probe to be considered successful after having failed."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"terminationGracePeriod")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration in seconds before terminate gracefully upon probe failure."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"timeoutSeconds")),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of seconds after which the probe times out.",(0,r.kt)("br",null),"More info: ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container.probe as p\n\nprobe = p.Probe {\n    probeHandler: p.Http {\n        path: "/healthz"\n    }\n    initialDelaySeconds: 10\n}\n')),(0,r.kt)("h2",{id:"schema-exec"},"Schema Exec"),(0,r.kt)("p",null,'Exec describes a "run in container" action.'),(0,r.kt)("h3",{id:"attributes-1"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"command")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"The command line to execute inside the container."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container.probe as p\n\nexecProbe = p.Exec {\n    command: ["probe.sh"]\n}\n')),(0,r.kt)("h2",{id:"schema-http"},"Schema Http"),(0,r.kt)("p",null,"Http describes an action based on HTTP Get requests."),(0,r.kt)("h3",{id:"attributes-2"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"headers")),(0,r.kt)("td",{parentName:"tr",align:null},"{str:str}"),(0,r.kt)("td",{parentName:"tr",align:null},"Collection of custom headers to set in the request"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"url")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The full qualified url to send HTTP requests."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples-2"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container.probe as p\n\nhttpProbe = p.Http {\n    url: "http://localhost:80"\n    headers: {\n        "X-HEADER": "VALUE"\n    }\n}\n')),(0,r.kt)("h2",{id:"schema-tcp"},"Schema Tcp"),(0,r.kt)("p",null,"Tcp describes an action based on opening a socket."),(0,r.kt)("h3",{id:"attributes-3"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"url")," ",(0,r.kt)("inlineCode",{parentName:"td"},"required")),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The full qualified url to open a socket."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"examples-3"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.workload.container.probe as p\n\ntcpProbe = p.Tcp {\n    url: "tcp://localhost:1234"\n}\n')))}c.isMDXComponent=!0}}]);