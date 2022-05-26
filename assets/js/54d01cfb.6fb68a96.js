"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9657],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},68145:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={},s="simple_sidecar",d={unversionedId:"reference/model/kusion_models/kube/frontend/sidecar/doc_simple_sidecar",id:"reference/model/kusion_models/kube/frontend/sidecar/doc_simple_sidecar",title:"simple_sidecar",description:"Source: base/pkg/kusionmodels/kube/frontend/sidecar/simplesidecar.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_simple_sidecar.md",sourceDirName:"reference/model/kusion_models/kube/frontend/sidecar",slug:"/reference/model/kusion_models/kube/frontend/sidecar/doc_simple_sidecar",permalink:"/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_simple_sidecar",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_simple_sidecar.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653552030,formattedLastUpdatedAt:"2022/5/26",frontMatter:{},sidebar:"reference",previous:{title:"sidecar",permalink:"/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_sidecar"},next:{title:"scheduling_strategy",permalink:"/docs/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy"}},c={},u=[{value:"Schema SimpleSidecar",id:"schema-simplesidecar",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simple_sidecar"},"simple_sidecar"),(0,i.kt)("p",null,"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/sidecar/simple_sidecar.k"},"base/pkg/kusion_models/kube/frontend/sidecar/simple_sidecar.k")),(0,i.kt)("h2",{id:"schema-simplesidecar"},"Schema SimpleSidecar"),(0,i.kt)("p",null,"Simple sidecar describes the sidecar container configuration that is expected to be run on the host."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"name"),(0,i.kt)("br",null),"The sidecar name. e.g. 'odp','kmi','antmonitor'."),(0,i.kt)("td",{parentName:"tr",align:null},"str"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"required"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"version"),(0,i.kt)("br",null),"The sidecar version. e.g. 'v1.2.3'."),(0,i.kt)("td",{parentName:"tr",align:null},"str"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"required"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"extInfo"),(0,i.kt)("br",null),"The extended information."),(0,i.kt)("td",{parentName:"tr",align:null},"{str: any}"),(0,i.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,i.kt)("td",{parentName:"tr",align:null},"optional")))),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend.sidecar as s\n\nsidecar = s.SimpleSidecar {\n    name = "test"\n    version = "v1.2.3"\n}\n')))}m.isMDXComponent=!0}}]);