"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8566],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(a),f=n,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||s;return a?r.createElement(m,l(l({ref:t},i),{},{components:a})):r.createElement(m,l({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<s;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const s={},l="stateful_set_update_strategy",o={unversionedId:"reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy",id:"reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy",title:"stateful_set_update_strategy",description:"Source: base/pkg/kusionkubernetes/api/apps/v1/statefulsetupdatestrategy.k",source:"@site/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy.md",sourceDirName:"reference/model/kusion_kubernetes/api/apps/v1",slug:"/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663160649,formattedLastUpdatedAt:"9/14/2022",frontMatter:{},sidebar:"reference",previous:{title:"stateful_set_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_spec"},next:{title:"cross_version_object_reference",permalink:"/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference"}},p={},u=[{value:"Schema StatefulSetUpdateStrategy",id:"schema-statefulsetupdatestrategy",level:2},{value:"Attributes",id:"attributes",level:3}],i={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stateful_set_update_strategy"},"stateful_set_update_strategy"),(0,n.kt)("p",null,"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/stateful_set_update_strategy.k"},"base/pkg/kusion_kubernetes/api/apps/v1/stateful_set_update_strategy.k")),(0,n.kt)("p",null,"This is the stateful","_","set","_","update","_","strategy module in kusion","_","kubernetes.api.apps.v1 package.",(0,n.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,n.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,n.kt)("h2",{id:"schema-statefulsetupdatestrategy"},"Schema StatefulSetUpdateStrategy"),(0,n.kt)("p",null,"StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy."),(0,n.kt)("h3",{id:"attributes"},"Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"type"),(0,n.kt)("br",null),"Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate."),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"rollingUpdate"),(0,n.kt)("br",null),"RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"doc_rolling_update_stateful_set_strategy#schema-rollingupdatestatefulsetstrategy"},"RollingUpdateStatefulSetStrategy")),(0,n.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,n.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);