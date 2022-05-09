"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[844],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7814:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},p="deployment_spec",s={unversionedId:"reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_spec",id:"reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_spec",title:"deployment_spec",description:"Source: base/pkg/kusionkubernetes/api/apps/v1/deploymentspec.k",source:"@site/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_spec.md",sourceDirName:"reference/model/kusion_kubernetes/api/apps/v1",slug:"/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_spec",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_spec.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1652084378,formattedLastUpdatedAt:"2022/5/9",frontMatter:{},sidebar:"reference",previous:{title:"deployment",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment"},next:{title:"deployment_strategy",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_strategy"}},d={},u=[{value:"Schema DeploymentSpec",id:"schema-deploymentspec",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deployment_spec"},"deployment_spec"),(0,l.kt)("p",null,"Source: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/deployment_spec.k"},"base/pkg/kusion_kubernetes/api/apps/v1/deployment_spec.k")),(0,l.kt)("p",null,"This is the deployment","_","spec module in kusion","_","kubernetes.api.apps.v1 package.",(0,l.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,l.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,l.kt)("h2",{id:"schema-deploymentspec"},"Schema DeploymentSpec"),(0,l.kt)("p",null,"DeploymentSpec is the specification of the desired behavior of the Deployment."),(0,l.kt)("h3",{id:"attributes"},"Attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"minReadySeconds"),(0,l.kt)("br",null),"Minimum number of seconds for which a newly created pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready)"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"paused"),(0,l.kt)("br",null),"Indicates that the deployment is paused."),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"progressDeadlineSeconds"),(0,l.kt)("br",null),"The maximum time in seconds for a deployment to make progress before it is considered to be failed. The deployment controller will continue to process failed deployments and a condition with a ProgressDeadlineExceeded reason will be surfaced in the deployment status. Note that progress will not be estimated during the time a deployment is paused. Defaults to 600s."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"replicas"),(0,l.kt)("br",null),"Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"revisionHistoryLimit"),(0,l.kt)("br",null),"The number of old ReplicaSets to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10."),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"selector"),(0,l.kt)("br",null),"Label selector for pods. Existing ReplicaSets whose pods are selected by this will be the ones affected by this deployment. It must match the pod template's labels."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../../apimachinery/apis/doc_label_selector#schema-labelselector"},"apis.LabelSelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"strategy"),(0,l.kt)("br",null),"The deployment strategy to use to replace existing pods with new ones."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"doc_deployment_strategy#schema-deploymentstrategy"},"DeploymentStrategy")),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"optional")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"template"),(0,l.kt)("br",null),"Template describes the pods that will be created."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../../core/v1/doc_pod_template_spec#schema-podtemplatespec"},"v1.PodTemplateSpec")),(0,l.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"required"))))))}m.isMDXComponent=!0}}]);