"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[23810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Glossary"},i=void 0,s={unversionedId:"concepts/glossary",id:"concepts/glossary",title:"Glossary",description:"Cluster",source:"@site/docs/karpor/2-concepts/3-glossary.md",sourceDirName:"2-concepts",slug:"/concepts/glossary",permalink:"/karpor/next/concepts/glossary",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Glossary"},sidebar:"karpor",previous:{title:"Architecture",permalink:"/karpor/next/concepts/architecture"},next:{title:"Multi-Cluster Management",permalink:"/karpor/next/user-guide/multi-cluster-management"}},l={},p=[{value:"Cluster",id:"cluster",level:2},{value:"Resource",id:"resource",level:2},{value:"Resource Group",id:"resource-group",level:2},{value:"Resource Group Rule",id:"resource-group-rule",level:2},{value:"Topology",id:"topology",level:2},{value:"Audit",id:"audit",level:2},{value:"Issue",id:"issue",level:2},{value:"Score",id:"score",level:2},{value:"Next Step",id:"next-step",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"cluster"},"Cluster"),(0,a.kt)("p",null,"Equivalent to the concept of a cluster in ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes"),", such as a cluster named ",(0,a.kt)("inlineCode",{parentName:"p"},"democluster"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Karpor")," can manage multiple clusters, including cluster registration, certificate rotation, generating and viewing insights, and other operations through a Dashboard. It also supports accessing any managed cluster using a unified certificate issued by ",(0,a.kt)("inlineCode",{parentName:"p"},"Karpor")," through command-line tools such as ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectx"),"."),(0,a.kt)("p",null,"For more details, please refer to the best practice: ",(0,a.kt)("a",{parentName:"p",href:"/karpor/next/user-guide/best-production-practices/one-pass-with-proxy"},"One Pass with Proxy"),"."),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("p",null,"Equivalent to the resource concept in ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes"),", such as a ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"mockDeployment"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Karpor")," performs real-time synchronization, search, and insights on resources within the managed clusters. A resource is the object with the smallest granularity for searching and insights in ",(0,a.kt)("inlineCode",{parentName:"p"},"Karpor"),"."),(0,a.kt)("h2",{id:"resource-group"},"Resource Group"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A resource group is a logical organizational structure")," used to combine related ",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes")," resources for a more intuitive view, search, and insight experience. For example, an ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"mockapp")," resource group can be created to includes a ",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment"),", and multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"Pods"),", all with a specific label such as ",(0,a.kt)("inlineCode",{parentName:"p"},"app.kubernetes.io/name: mockapp"),"."),(0,a.kt)("h2",{id:"resource-group-rule"},"Resource Group Rule"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A resource group rule is a set of conditions")," that groups specific resources into appropriate resource groups. These rules aim to organize resources into logical units based on properties such as ",(0,a.kt)("inlineCode",{parentName:"p"},"annotations"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"labels"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace"),", and so on. For example, to define an Application resource group rule, you can specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.kubernetes.io/name")," annotation as a grouping condition."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Karpor")," has a preset resource group rule - ",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace")," - as well as custom resource group rules."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(67548).Z,width:"1741",height:"534"})),(0,a.kt)("h2",{id:"topology"},"Topology"),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"Karpor"),", the topology refers to the ",(0,a.kt)("strong",{parentName:"p"},"relations and dependencies between relevant resources within a given resource group"),". Viewing and understanding the interior structure of a resource group is made easier with a visual topology diagram, which is helpful for troubleshooting and locating issues."),(0,a.kt)("h2",{id:"audit"},"Audit"),(0,a.kt)("p",null,"Audit refers to ",(0,a.kt)("strong",{parentName:"p"},"performing a compliance scan on all resources within a given resource group"),". The goal is to help users discover potential risks. The scanning tools and rules used for the audit are currently built into the system, but we will support customization in the future."),(0,a.kt)("h2",{id:"issue"},"Issue"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The output of the audit is referred to as issues"),". If there are no problems with the scanned object, the audit results will be empty. Otherwise, all identified risks will be categorized by their risk level and displayed, including descriptions of each risk, associated resources, etc., guiding users to fix the issues, ensure the security and compliance of the cluster resources."),(0,a.kt)("h2",{id:"score"},"Score"),(0,a.kt)("p",null,"The score is used to reflect the ",(0,a.kt)("strong",{parentName:"p"},"overall health status of a resource group or a resource"),", reminding users to take timely adjustments and measures. The health score is calculated based on the resource group's audit results. The factors that impact the score include: ",(0,a.kt)("strong",{parentName:"p"},"risk level"),", ",(0,a.kt)("strong",{parentName:"p"},"number of risks"),", and ",(0,a.kt)("strong",{parentName:"p"},"total number of resources"),"."),(0,a.kt)("h2",{id:"next-step"},"Next Step"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn Karpor's ",(0,a.kt)("a",{parentName:"li",href:"../concepts/architecture"},"Architecture"),"."),(0,a.kt)("li",{parentName:"ul"},"View ",(0,a.kt)("a",{parentName:"li",href:"../user-guide/multi-cluster-management"},"User Guide")," to look on more of what you can achieve with Karpor.")))}c.isMDXComponent=!0},67548:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image-20240326171327110-c4e200c759c6cf4f86d4a4b1296d3beb.png"}}]);