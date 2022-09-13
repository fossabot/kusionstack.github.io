"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8013],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},c="horizontal_pod_autoscaler_spec",s={unversionedId:"reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler_spec",id:"reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler_spec",title:"horizontal_pod_autoscaler_spec",description:"Source: base/pkg/kusionkubernetes/api/autoscaling/v1/horizontalpodautoscalerspec.k",source:"@site/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler_spec.md",sourceDirName:"reference/model/kusion_kubernetes/api/autoscaling/v1",slug:"/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler_spec",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler_spec.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663071680,formattedLastUpdatedAt:"9/13/2022",frontMatter:{},sidebar:"reference",previous:{title:"horizontal_pod_autoscaler",permalink:"/docs/reference/model/kusion_kubernetes/api/autoscaling/v1/doc_horizontal_pod_autoscaler"},next:{title:"job",permalink:"/docs/reference/model/kusion_kubernetes/api/batch/v1/doc_job"}},u={},p=[{value:"Schema HorizontalPodAutoscalerSpec",id:"schema-horizontalpodautoscalerspec",level:2},{value:"Attributes",id:"attributes",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"horizontal_pod_autoscaler_spec"},"horizontal_pod_autoscaler_spec"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/autoscaling/v1/horizontal_pod_autoscaler_spec.k"},"base/pkg/kusion_kubernetes/api/autoscaling/v1/horizontal_pod_autoscaler_spec.k")),(0,o.kt)("p",null,"This is the horizontal","_","pod","_","autoscaler","_","spec module in kusion","_","kubernetes.api.autoscaling.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-horizontalpodautoscalerspec"},"Schema HorizontalPodAutoscalerSpec"),(0,o.kt)("p",null,"specification of a horizontal pod autoscaler."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"maxReplicas"),(0,o.kt)("br",null),"upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas."),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"minReplicas"),(0,o.kt)("br",null),"minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available."),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"targetCPUUtilizationPercentage"),(0,o.kt)("br",null),"target average CPU utilization (represented as a percentage of requested CPU) over all the pods; if not specified the default autoscaling policy will be used."),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"scaleTargetRef"),(0,o.kt)("br",null),"reference to scaled resource; horizontal pod autoscaler will learn the current resource consumption and will set the desired number of pods by using its Scale subresource."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_cross_version_object_reference#schema-crossversionobjectreference"},"CrossVersionObjectReference")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"required"))))))}m.isMDXComponent=!0}}]);