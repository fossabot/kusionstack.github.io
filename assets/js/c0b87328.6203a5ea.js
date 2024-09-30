"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[99870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"Compliance Report"},a=void 0,s={unversionedId:"user-guide/insight/compliance-report",id:"version-v0.4/user-guide/insight/compliance-report",title:"Compliance Report",description:"This section will introduce the compliance scan feature, primarily used to detect and assess whether all resources in the current resource or resource group comply with specific compliance standards and security policies. In this section, you will understand how to effectively utilize the compliance scan feature to ensure the security and compliance of the cluster and resources.",source:"@site/karpor_versioned_docs/version-v0.4/3-user-guide/3-insight/4-compliance-report.md",sourceDirName:"3-user-guide/3-insight",slug:"/user-guide/insight/compliance-report",permalink:"/karpor/v0.4/user-guide/insight/compliance-report",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/3-user-guide/3-insight/4-compliance-report.md",tags:[],version:"v0.4",lastUpdatedBy:"Yang Yang",lastUpdatedAt:1727679683,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:4,frontMatter:{title:"Compliance Report"},sidebar:"karpor",previous:{title:"Summary",permalink:"/karpor/v0.4/user-guide/insight/summary"},next:{title:"Topology",permalink:"/karpor/v0.4/user-guide/insight/topology"}},c={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section will introduce the compliance scan feature, primarily used to detect and assess whether all resources in the current resource or resource group comply with specific compliance standards and security policies. In this section, you will understand how to effectively utilize the compliance scan feature to ensure the security and compliance of the cluster and resources."),(0,i.kt)("p",null,"If you're not familiar with ",(0,i.kt)("strong",{parentName:"p"},"Compliance Report")," or ",(0,i.kt)("strong",{parentName:"p"},"Risk")," related concepts, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"/karpor/v0.4/concepts/glossary"},"Glossary")," section."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Follow the guidance on ",(0,i.kt)("a",{parentName:"li",href:"#inspecting-any-resource-group-and-resource"},"Inspecting Any Resource Group and Resource")," and resource to navigate to the insights page of a particular resource group/resource."),(0,i.kt)("li",{parentName:"ol"},"You can see the ",(0,i.kt)("strong",{parentName:"li"},"Compliance Report")," card of the resource.\n",(0,i.kt)("img",{src:r(55899).Z,width:"1620",height:"1080"})),(0,i.kt)("li",{parentName:"ol"},"This card displays the ",(0,i.kt)("strong",{parentName:"li"},"Risk")," identified during the scan of the current resource or all the resources under the resource group, categorized by risk level. Under each risk level tag, risks are sorted from highest to lowest occurrence. Each risk entry shows the title, description, number of occurrences, and the scanning tool that discovered the issue."),(0,i.kt)("li",{parentName:"ol"},"Clicking on a specific risk will display a popup with the details of the risk.\n",(0,i.kt)("img",{src:r(80261).Z,width:"1620",height:"1080"})),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("kbd",null,"View All Risks"),", and a drawer will pop out listing all the risks. Here, you can search, categorize, paginate, etc\n",(0,i.kt)("img",{src:r(75323).Z,width:"1620",height:"1080"})),(0,i.kt)("li",{parentName:"ol"},"Once you have resolved a risk following its indications, you can click the ","[Rescan]"," button, which will trigger a comprehensive compliance scan of all resources under the resource group. The Dashboard will display the new results once the scan is completed.")))}u.isMDXComponent=!0},75323:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-all-issues-0643d2b8089b684821364a293f8388ec.png"},55899:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-home-68b10537ffdc4adbe6ab33392d1ec7d0.png"},80261:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-single-issue-91580fa18758524b38ef7477adf280fe.png"}}]);