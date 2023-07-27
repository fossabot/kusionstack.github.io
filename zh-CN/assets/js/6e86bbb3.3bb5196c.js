"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},o="lifecycle",c={unversionedId:"reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle",id:"reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle",title:"lifecycle",description:"Source: base/pkg/kusionmodels/kube/frontend/container/lifecycle/lifecycle.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle.md",sourceDirName:"reference/model/kusion_models/kube/frontend/container/lifecycle",slug:"/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1690429013,formattedLastUpdatedAt:"2023\u5e747\u670827\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"env",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/container/env/doc_env"},next:{title:"container_port",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/container/port/doc_container_port"}},i={},p=[{value:"Schema Lifecycle",id:"schema-lifecycle",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lifecycle"},"lifecycle"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/container/lifecycle/lifecycle.k"},"base/pkg/kusion_models/kube/frontend/container/lifecycle/lifecycle.k")),(0,a.kt)("h2",{id:"schema-lifecycle"},"Schema Lifecycle"),(0,a.kt)("p",null,"Lifecycle describes actions that the management system should take in response ",(0,a.kt)("br",null),"to container lifecycle events."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"preStop"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The PreStop action is called immediately before a container is terminated."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-exec"},"probe.Exec")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-http"},"probe.Http")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"postStart"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The PostStart action is called immediately after a container is created."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-exec"},"probe.Exec")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-http"},"probe.Http")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend.container.lifecycle as lc\nimport base.pkg.kusion_models.kube.frontend.container.probe as p\n\np = lc.Lifecycle {\n    preStop = p.Exec {\n        command = [\n            "timeout"\n            "--signal=9"\n            "1800s"\n            "sh"\n            "-c"\n            "bash -x /tmp/image-builder/boot/boot.sh"\n        ]\n    }\n}\n')))}d.isMDXComponent=!0}}]);