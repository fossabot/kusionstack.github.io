"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},l="topology_spread_constraint",i={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_topology_spread_constraint",id:"reference/model/kusion_kubernetes/api/core/v1/doc_topology_spread_constraint",title:"topology_spread_constraint",description:"Source: base/pkg/kusionkubernetes/api/core/v1/topologyspreadconstraint.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_topology_spread_constraint.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_topology_spread_constraint",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_topology_spread_constraint",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_topology_spread_constraint.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1680091886,formattedLastUpdatedAt:"2023/3/29",frontMatter:{},sidebar:"reference",previous:{title:"toleration",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_toleration"},next:{title:"typed_local_object_reference",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/core/v1/doc_typed_local_object_reference"}},s={},d=[{value:"Schema TopologySpreadConstraint",id:"schema-topologyspreadconstraint",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topology_spread_constraint"},"topology_spread_constraint"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/topology_spread_constraint.k"},"base/pkg/kusion_kubernetes/api/core/v1/topology_spread_constraint.k")),(0,a.kt)("p",null,"This is the topology","_","spread","_","constraint module in kusion","_","kubernetes.api.core.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-topologyspreadconstraint"},"Schema TopologySpreadConstraint"),(0,a.kt)("p",null,"TopologySpreadConstraint specifies how to spread matching pods among the given topology."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"maxSkew"),(0,a.kt)("br",null),"     MaxSkew describes the degree to which pods may be unevenly distributed. When ",(0,a.kt)("inlineCode",{parentName:"td"},"whenUnsatisfiable=DoNotSchedule"),", it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 1/1/0: ","|"," zone1 ","|"," zone2 ","|"," zone3 ","|"," ","|","   P   ","|","   P   ","|","       ","|"," - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 1/1/1; scheduling it onto zone1(zone2) would make the ActualSkew(2-0) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When ",(0,a.kt)("inlineCode",{parentName:"td"},"whenUnsatisfiable=ScheduleAnyway"),", it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.",(0,a.kt)("br",null),"topologyKey : str, default is Undefined, required",(0,a.kt)("br",null),"     TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each \\<key, value",">",' as a "bucket", and try to put balanced number of pods into each bucket. It\'s a required field.',(0,a.kt)("br",null),"whenUnsatisfiable : str, default is Undefined, required",(0,a.kt)("br",null),"     WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location,"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"topologyKey")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"whenUnsatisfiable")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"labelSelector")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_label_selector#schema-labelselector"},"apis.LabelSelector")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}c.isMDXComponent=!0}}]);