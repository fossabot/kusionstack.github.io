"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3340],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},55037:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),u=["components"],l={},s="scheduling_strategy",i={unversionedId:"reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy",id:"reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy",title:"scheduling_strategy",description:"Source: base/pkg/kusionmodels/kube/frontend/strategy/schedulingstrategy.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy.md",sourceDirName:"reference/model/kusion_models/kube/frontend/strategy",slug:"/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy",permalink:"/docs/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/strategy/doc_scheduling_strategy.md",tags:[],version:"current",lastUpdatedBy:"Hao Yuan",lastUpdatedAt:1660147491,formattedLastUpdatedAt:"2022/8/10",frontMatter:{},sidebar:"reference",previous:{title:"simple_sidecar",permalink:"/docs/reference/model/kusion_models/kube/frontend/sidecar/doc_simple_sidecar"},next:{title:"volume",permalink:"/docs/reference/model/kusion_models/kube/frontend/volume/doc_volume"}},c={},d=[{value:"Schema SchedulingStrategy",id:"schema-schedulingstrategy",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scheduling_strategy"},"scheduling_strategy"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/strategy/scheduling_strategy.k"},"base/pkg/kusion_models/kube/frontend/strategy/scheduling_strategy.k")),(0,a.kt)("h2",{id:"schema-schedulingstrategy"},"Schema SchedulingStrategy"),(0,a.kt)("p",null,"SchedulingStrategy represents scheduling strategy."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"resource"),(0,a.kt)("br",null),"A Pod-level attribute.",(0,a.kt)("br",null),"Main container resource."),(0,a.kt)("td",{parentName:"tr",align:null},"str ","|"," ",(0,a.kt)("a",{parentName:"td",href:"../resource/doc_resource#schema-resource"},"resource.Resource")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}m.isMDXComponent=!0}}]);