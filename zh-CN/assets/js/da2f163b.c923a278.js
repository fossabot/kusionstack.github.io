"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5609],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,b=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99658:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},p="rolling_update_deployment",u={unversionedId:"reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_deployment",id:"reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_deployment",title:"rolling_update_deployment",description:"Source: base/pkg/kusionkubernetes/api/apps/v1/rollingupdatedeployment.k",source:"@site/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_deployment.md",sourceDirName:"reference/model/kusion_kubernetes/api/apps/v1",slug:"/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_deployment",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_deployment",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_deployment.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663071680,formattedLastUpdatedAt:"2022/9/13",frontMatter:{},sidebar:"reference",previous:{title:"rolling_update_daemon_set",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_daemon_set"},next:{title:"rolling_update_stateful_set_strategy",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_stateful_set_strategy"}},d={},s=[{value:"Schema RollingUpdateDeployment",id:"schema-rollingupdatedeployment",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rolling_update_deployment"},"rolling_update_deployment"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/rolling_update_deployment.k"},"base/pkg/kusion_kubernetes/api/apps/v1/rolling_update_deployment.k")),(0,o.kt)("p",null,"This is the rolling","_","update","_","deployment module in kusion","_","kubernetes.api.apps.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-rollingupdatedeployment"},"Schema RollingUpdateDeployment"),(0,o.kt)("p",null,"Spec to control the desired behavior of rolling update."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"maxSurge"),(0,o.kt)("br",null),"The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods."),(0,o.kt)("td",{parentName:"tr",align:null},"int ","|"," str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"maxUnavailable"),(0,o.kt)("br",null),"The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods."),(0,o.kt)("td",{parentName:"tr",align:null},"int ","|"," str"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}m.isMDXComponent=!0}}]);