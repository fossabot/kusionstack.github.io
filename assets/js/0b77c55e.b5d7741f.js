"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=i(r),p=o,k=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={},l="resource",u={unversionedId:"reference/model/kusion_models/kube/frontend/resource/doc_resource",id:"reference/model/kusion_models/kube/frontend/resource/doc_resource",title:"resource",description:"Source: base/pkg/kusionmodels/kube/frontend/resource/resource.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource.md",sourceDirName:"reference/model/kusion_models/kube/frontend/resource",slug:"/reference/model/kusion_models/kube/frontend/resource/doc_resource",permalink:"/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663311235,formattedLastUpdatedAt:"9/16/2022",frontMatter:{},sidebar:"reference",previous:{title:"ingress",permalink:"/docs/reference/model/kusion_models/kube/frontend/ingress/doc_ingress"},next:{title:"resource_requirements",permalink:"/docs/reference/model/kusion_models/kube/frontend/resource/doc_resource_requirements"}},s={},i=[{value:"Schema Resource",id:"schema-resource",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],c={toc:i};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource"},"resource"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/resource/resource.k"},"base/pkg/kusion_models/kube/frontend/resource/resource.k")),(0,o.kt)("h2",{id:"schema-resource"},"Schema Resource"),(0,o.kt)("p",null,"Resource describes the compute resource requirements."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"cpu"),(0,o.kt)("br",null),"A Container-level attribute.",(0,o.kt)("br",null),"CPU, in cores, default 1 core. (500m = .5 cores)"),(0,o.kt)("td",{parentName:"tr",align:null},"int ","|"," number_multiplier"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"memory"),(0,o.kt)("br",null),"A Container-level attribute.",(0,o.kt)("br",null),"Memory, in bytes, default 1024Mi. (500Gi = 500GiB = 500 ","*"," 1024 ","*"," 1024 ","*"," 1024)"),(0,o.kt)("td",{parentName:"tr",align:null},"number","_","multiplier"),(0,o.kt)("td",{parentName:"tr",align:null},"1024Mi"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"disk"),(0,o.kt)("br",null),"A Container-level attribute.",(0,o.kt)("br",null),"Local disk storage, in bytes, default 10Gi. (500Gi = 500GiB = 500 ","*"," 1024 ","*"," 1024 ","*"," 1024)"),(0,o.kt)("td",{parentName:"tr",align:null},"number","_","multiplier"),(0,o.kt)("td",{parentName:"tr",align:null},"10Gi"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import base.pkg.kusion_models.kube.frontend.resource as res\n\nres = res.Resource {\n    cpu = 2\n    memory = 2048Mi\n    disk = 20Gi\n}\n")))}d.isMDXComponent=!0}}]);