"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8566],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),i=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=i(r),f=n,m=d["".concat(o,".").concat(f)]||d[f]||c[f]||s;return r?a.createElement(m,u(u({ref:t},p),{},{components:r})):a.createElement(m,u({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,u=new Array(s);u[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,u[1]=l;for(var i=2;i<s;i++)u[i]=r[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7506:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return i},assets:function(){return p},toc:function(){return c},default:function(){return f}});var a=r(7462),n=r(3366),s=(r(7294),r(3905)),u=["components"],l={},o="stateful_set_update_strategy",i={unversionedId:"reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy",id:"reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy",title:"stateful_set_update_strategy",description:"Source: base/pkg/kusionkubernetes/api/apps/v1/statefulsetupdatestrategy.k",source:"@site/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy.md",sourceDirName:"reference/model/kusion_kubernetes/api/apps/v1",slug:"/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_update_strategy.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1652084378,formattedLastUpdatedAt:"2022/5/9",frontMatter:{},sidebar:"reference",previous:{title:"stateful_set_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_stateful_set_spec"},next:{title:"cross_version_object_reference",permalink:"/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_cross_version_object_reference"}},p={},c=[{value:"Schema StatefulSetUpdateStrategy",id:"schema-statefulsetupdatestrategy",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,u);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"stateful_set_update_strategy"},"stateful_set_update_strategy"),(0,s.kt)("p",null,"Source: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/stateful_set_update_strategy.k"},"base/pkg/kusion_kubernetes/api/apps/v1/stateful_set_update_strategy.k")),(0,s.kt)("p",null,"This is the stateful","_","set","_","update","_","strategy module in kusion","_","kubernetes.api.apps.v1 package.",(0,s.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,s.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,s.kt)("h2",{id:"schema-statefulsetupdatestrategy"},"Schema StatefulSetUpdateStrategy"),(0,s.kt)("p",null,"StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy."),(0,s.kt)("h3",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"type"),(0,s.kt)("br",null),"Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate."),(0,s.kt)("td",{parentName:"tr",align:null},"str"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"rollingUpdate"),(0,s.kt)("br",null),"RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType."),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"doc_rolling_update_stateful_set_strategy#schema-rollingupdatestatefulsetstrategy"},"RollingUpdateStatefulSetStrategy")),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")))))}f.isMDXComponent=!0}}]);