"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="What is KusionStack Operating?",s={unversionedId:"operating/introduction/introduction",id:"operating/introduction/introduction",title:"What is KusionStack Operating?",description:"KusionStack Operating consists of workloads and operators built on Kubernetes Custom Resource Definitions,",source:"@site/docs/operating/introduction/introduction.md",sourceDirName:"operating/introduction",slug:"/operating/introduction/",permalink:"/docs/operating/introduction/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/operating/introduction/introduction.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1695816572,formattedLastUpdatedAt:"Sep 27, 2023",frontMatter:{},sidebar:"operating",next:{title:"Installation",permalink:"/docs/operating/started/install"}},l={},c=[{value:"Key features",id:"key-features",level:2},{value:"Advanced workloads",id:"advanced-workloads",level:3},{value:"Streamlined Pod Operation",id:"streamlined-pod-operation",level:3},{value:"Integrated risk management",id:"integrated-risk-management",level:3},{value:"Future works",id:"future-works",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-kusionstack-operating"},"What is KusionStack Operating?"),(0,o.kt)("p",null,"KusionStack Operating consists of workloads and operators built on Kubernetes Custom Resource Definitions,\nwith a primary aim of bridging the gap between platform development and Kubernetes."),(0,o.kt)("p",null,"By keeping more operation works finished in Kubernetes layer,\nKusionStack Operating reduces complexity when interacting with Kubernetes\nand enhances convenience for platform developers."),(0,o.kt)("h2",{id:"key-features"},"Key features"),(0,o.kt)("p",null,"KusionStack Operating currently provides the following features,\nstreamlining application operations when developing platforms based on Kubernetes:"),(0,o.kt)("h3",{id:"advanced-workloads"},"Advanced workloads"),(0,o.kt)("p",null,"KusionStack Operating offers several workloads to ensure it is convenient and effective to delivery and operate application resources."),(0,o.kt)("p",null,"Recently, Operating introduced the workload CollaSet.\nBesides the basic ability of scaling and updating Pods like Deployment and StatefulSet of Kubernetes,\nCollaSet also provides a range of scale and update strategies,\nlike in-place update with container image and pod revision consistency."),(0,o.kt)("h3",{id:"streamlined-pod-operation"},"Streamlined Pod Operation"),(0,o.kt)("p",null,"KusionStack Operating introduces PodOpsLifecycle that facilitates the graceful participation\nof multiple resources related to Pods in a Pod operation process.\nFor instance, the resource consist framework in PodOpsLifecycle is able to incorporate traffic management\ninto each Pod operation process.\nIt simplifies the work for platform developers dealing with Pod operation details. KusionStack also adapt some resources\nby default, such as Aliyun SLB."),(0,o.kt)("h3",{id:"integrated-risk-management"},"Integrated risk management"),(0,o.kt)("p",null,"Building upon the PodOpsLifecycle, KusionStack Operating introduces the workload named PodTransitionRule\nwhich will keep risks of pod operation under control.\nBy providing a MaxUnavailable rule similar to Kubernetes' PodDisruptionBudget (PDB),\nit ensures there are always enough Pods available for service.\nFurthermore, it allows for custom rules through extension via webhooks and label hooks."),(0,o.kt)("h2",{id:"future-works"},"Future works"),(0,o.kt)("p",null,"KusionStack Operating project is currently in its early stages.\nOur goal is to simplify platform development. We will continue building in areas such as application operations,\nobservability, and insight. We hope the Operating will make it easier for you to build platforms."))}p.isMDXComponent=!0}}]);