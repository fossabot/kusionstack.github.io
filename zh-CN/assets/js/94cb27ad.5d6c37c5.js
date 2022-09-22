"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1943],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="container_port",i={unversionedId:"reference/model/kusion_models/kube/frontend/container/port/doc_container_port",id:"reference/model/kusion_models/kube/frontend/container/port/doc_container_port",title:"container_port",description:"Source: base/pkg/kusionmodels/kube/frontend/container/port/containerport.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/container/port/doc_container_port.md",sourceDirName:"reference/model/kusion_models/kube/frontend/container/port",slug:"/reference/model/kusion_models/kube/frontend/container/port/doc_container_port",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/container/port/doc_container_port",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/container/port/doc_container_port.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663850372,formattedLastUpdatedAt:"2022/9/22",frontMatter:{},sidebar:"reference",previous:{title:"lifecycle",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle"},next:{title:"probe",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/container/probe/doc_probe"}},c={},p=[{value:"Schema ContainerPort",id:"schema-containerport",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"container_port"},"container_port"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/container/port/container_port.k"},"base/pkg/kusion_models/kube/frontend/container/port/container_port.k")),(0,o.kt)("h2",{id:"schema-containerport"},"Schema ContainerPort"),(0,o.kt)("p",null,"ContainerPort represents a network port in a single container."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"name"),(0,o.kt)("br",null),"If specified, this must be an IANA","_","SVC","_","NAME and unique within the pod. ",(0,o.kt)("br",null),"Each named port in a pod must have a unique name. ",(0,o.kt)("br",null),"Name for the port that can be referred to by services."),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"protocol"),(0,o.kt)("br",null),"A Container-level attribute.",(0,o.kt)("br",null),"The protocol for port. Must be UDP, TCP or SCTP. Default is TCP."),(0,o.kt)("td",{parentName:"tr",align:null},'"TCP" ',"|",' "UDP" ',"|",' "SCTP"'),(0,o.kt)("td",{parentName:"tr",align:null},'"TCP"'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"containerPort"),(0,o.kt)("br",null),"A Container-level attribute.",(0,o.kt)("br",null),"The number of port to expose on the container's IP address."),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'p = ContainerPort {\n    name = "test"\n    protocol = "TCP"\n    containerPort = 8080\n}\n')))}d.isMDXComponent=!0}}]);