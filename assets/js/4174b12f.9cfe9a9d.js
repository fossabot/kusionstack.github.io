"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),l=c(r),d=a,g=l["".concat(u,".").concat(d)]||l[d]||p[d]||s;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=l;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},30429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const s={title:"Summary"},i=void 0,o={unversionedId:"user-guide/insight/summary",id:"version-v0.5/user-guide/insight/summary",title:"Summary",description:"In this section, we will learn about the summary card on the Karpor insight page, which are used to quickly view and understand key metrics for the current resource group or resource.",source:"@site/karpor_versioned_docs/version-v0.5/3-user-guide/4-insight/3-summary.md",sourceDirName:"3-user-guide/4-insight",slug:"/user-guide/insight/summary",permalink:"/karpor/user-guide/insight/summary",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.5/3-user-guide/4-insight/3-summary.md",tags:[],version:"v0.5",lastUpdatedBy:"Yang Yang",lastUpdatedAt:1727679683,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:3,frontMatter:{title:"Summary"},sidebar:"karpor",previous:{title:"Custom Resource Group",permalink:"/karpor/user-guide/insight/custom-resource-group"},next:{title:"Compliance Report",permalink:"/karpor/user-guide/insight/compliance-report"}},u={},c=[],m={toc:c};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, we will learn about the ",(0,a.kt)("inlineCode",{parentName:"p"},"summary card")," on the Karpor insight page, which are used to quickly view and understand key metrics for the current resource group or resource."),(0,a.kt)("p",null,"Under different resource groups, the content displayed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"summary card")," may also vary."),(0,a.kt)("p",null,"If you are on:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Resource Group Insight Page"),":",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Cluster Insight Page"),", the summary card shows the ",(0,a.kt)("strong",{parentName:"li"},"Node, Pod numbers, CPU, memory capacity, and Kubernetes version of the cluster"),".\n",(0,a.kt)("img",{src:r(35692).Z,width:"1200",height:"500"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Resource Kind Insight Page"),", the summary card shows the ",(0,a.kt)("strong",{parentName:"li"},"affiliated cluster, GVK (Group Version Kind) information, and the number of that type of resource under the current cluster"),".\n",(0,a.kt)("img",{src:r(18634).Z,width:"1200",height:"500"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Namespace Insight Page"),", the summary card shows the ",(0,a.kt)("strong",{parentName:"li"},"affiliated cluster, namespace, and the most abundant resource types under the current namespace."),(0,a.kt)("img",{src:r(83804).Z,width:"1200",height:"500"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Custom Resource Group Insight Page"),", the summary card shows the ",(0,a.kt)("strong",{parentName:"li"},"key-value of each rule, and several resource statistics under the current resource group."),(0,a.kt)("img",{src:r(97433).Z,width:"1200",height:"500"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Resource Insight Page"),", the summary card shows the ",(0,a.kt)("strong",{parentName:"li"},"current resource's name, GVK information, affiliated cluster, and namespace."),(0,a.kt)("img",{src:r(76201).Z,width:"1200",height:"500"}))),(0,a.kt)("p",null,"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Attention"),": No matter which resource group insight page you are on, the summary card will always display a health score, calculated based on the risk compliance status of the subject."))}p.isMDXComponent=!0},35692:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-summary-cluster-8859cd4a6255df278d95082eb9f8ea8e.png"},97433:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-summary-custom-resource-group-fa0b4eb666f0238bb4228145eec38a2e.png"},18634:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-summary-kind-f41229191d2a3ef6607cefafeeb4b755.png"},83804:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-summary-namespace-0eef30444be096f666525a7c462e9ab1.png"},76201:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-summary-resource-110ef887505fe24d53cfde119131aa50.png"}}]);