"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="deployment_strategy",p={unversionedId:"reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_strategy",id:"reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_strategy",title:"deployment_strategy",description:"Source: base/pkg/kusionkubernetes/api/apps/v1/deploymentstrategy.k",source:"@site/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_strategy.md",sourceDirName:"reference/model/kusion_kubernetes/api/apps/v1",slug:"/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_strategy",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_strategy",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_strategy.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663160649,formattedLastUpdatedAt:"9/14/2022",frontMatter:{},sidebar:"reference",previous:{title:"deployment_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_deployment_spec"},next:{title:"rolling_update_daemon_set",permalink:"/docs/reference/model/kusion_kubernetes/api/apps/v1/doc_rolling_update_daemon_set"}},i={},s=[{value:"Schema DeploymentStrategy",id:"schema-deploymentstrategy",level:2},{value:"Attributes",id:"attributes",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment_strategy"},"deployment_strategy"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/deployment_strategy.k"},"base/pkg/kusion_kubernetes/api/apps/v1/deployment_strategy.k")),(0,a.kt)("p",null,"This is the deployment","_","strategy module in kusion","_","kubernetes.api.apps.v1 package.",(0,a.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,a.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,a.kt)("h2",{id:"schema-deploymentstrategy"},"Schema DeploymentStrategy"),(0,a.kt)("p",null,"DeploymentStrategy describes how to replace existing pods with new ones."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"type"),(0,a.kt)("br",null),'Type of deployment. Can be "Recreate" or "RollingUpdate". Default is RollingUpdate.'),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"rollingUpdate"),(0,a.kt)("br",null),"Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"doc_rolling_update_deployment#schema-rollingupdatedeployment"},"RollingUpdateDeployment")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))))}d.isMDXComponent=!0}}]);