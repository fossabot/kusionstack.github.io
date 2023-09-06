"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="lifecycle",c={unversionedId:"reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle",id:"reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle",title:"lifecycle",description:"Source: base/pkg/kusionmodels/kube/frontend/container/lifecycle/lifecycle.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle.md",sourceDirName:"reference/model/kusion_models/kube/frontend/container/lifecycle",slug:"/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle",permalink:"/docs/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/container/lifecycle/doc_lifecycle.md",tags:[],version:"current",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1693970168,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{},sidebar:"reference",previous:{title:"env",permalink:"/docs/reference/model/kusion_models/kube/frontend/container/env/doc_env"},next:{title:"container_port",permalink:"/docs/reference/model/kusion_models/kube/frontend/container/port/doc_container_port"}},i={},p=[{value:"Schema Lifecycle",id:"schema-lifecycle",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lifecycle"},"lifecycle"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/container/lifecycle/lifecycle.k"},"base/pkg/kusion_models/kube/frontend/container/lifecycle/lifecycle.k")),(0,o.kt)("h2",{id:"schema-lifecycle"},"Schema Lifecycle"),(0,o.kt)("p",null,"Lifecycle describes actions that the management system should take in response ",(0,o.kt)("br",null),"to container lifecycle events."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"preStop"),(0,o.kt)("br",null),"A Container-level attribute.",(0,o.kt)("br",null),"The PreStop action is called immediately before a container is terminated."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-exec"},"probe.Exec")," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-http"},"probe.Http")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"postStart"),(0,o.kt)("br",null),"A Container-level attribute.",(0,o.kt)("br",null),"The PostStart action is called immediately after a container is created."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-exec"},"probe.Exec")," ","|"," ",(0,o.kt)("a",{parentName:"td",href:"../probe/doc_probe#schema-http"},"probe.Http")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend.container.lifecycle as lc\nimport base.pkg.kusion_models.kube.frontend.container.probe as p\n\np = lc.Lifecycle {\n    preStop = p.Exec {\n        command = [\n            "timeout"\n            "--signal=9"\n            "1800s"\n            "sh"\n            "-c"\n            "bash -x /tmp/image-builder/boot/boot.sh"\n        ]\n    }\n}\n')))}d.isMDXComponent=!0}}]);