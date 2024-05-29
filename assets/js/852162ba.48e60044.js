"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58067],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=p(t),h=s,d=g["".concat(c,".").concat(h)]||g[h]||l[h]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function h(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=g;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},29300:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=t(87462),s=(t(67294),t(3905));const o={title:"Inspecting Any Resource Group and Resource"},i=void 0,a={unversionedId:"user-guide/insight/inspecting-any-resource-group-and-resource",id:"version-v0.4/user-guide/insight/inspecting-any-resource-group-and-resource",title:"Inspecting Any Resource Group and Resource",description:"In this part, we will explain in detail through clear steps and examples how to use Karpor to inspect any resource group or resource.",source:"@site/karpor_versioned_docs/version-v0.4/3-user-guide/3-insight/1-inspecting-any-resource-group-and-resource.md",sourceDirName:"3-user-guide/3-insight",slug:"/user-guide/insight/inspecting-any-resource-group-and-resource",permalink:"/karpor/user-guide/insight/inspecting-any-resource-group-and-resource",draft:!1,tags:[],version:"v0.4",sidebarPosition:1,frontMatter:{title:"Inspecting Any Resource Group and Resource"},sidebar:"karpor",previous:{title:"How to Insight",permalink:"/karpor/user-guide/insight/"},next:{title:"Custom Resource Group",permalink:"/karpor/user-guide/insight/custom-resource-group"}},c={},p=[{value:"Inspecting Specific Resources",id:"inspecting-specific-resources",level:2},{value:"Inspecting Specific Resource Groups",id:"inspecting-specific-resource-groups",level:2},{value:"Flexible Switching Between Resource Groups/Resources",id:"flexible-switching-between-resource-groupsresources",level:2}],u={toc:p};function l(e){let{components:r,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this part, we will explain in detail through clear steps and examples how to use Karpor to inspect any resource group or resource."),(0,s.kt)("p",null,"If you are not familiar with relevant concepts, you can refer to the ",(0,s.kt)("a",{parentName:"p",href:"/karpor/concepts/glossary"},"Glossary")," section."),(0,s.kt)("h2",{id:"inspecting-specific-resources"},"Inspecting Specific Resources"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Search for the resource you are interested in:\n",(0,s.kt)("img",{src:t(17193).Z,width:"1620",height:"1080"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"On the search results page, all resources filtered by the criteria will be listed:\n",(0,s.kt)("img",{src:t(15004).Z,width:"1620",height:"1080"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click on any resource name to jump to that resource's insight page:\n",(0,s.kt)("img",{src:t(55899).Z,width:"1620",height:"1080"})))),(0,s.kt)("h2",{id:"inspecting-specific-resource-groups"},"Inspecting Specific Resource Groups"),(0,s.kt)("p",null,"You may notice that in each search result entry, tags for ",(0,s.kt)("inlineCode",{parentName:"p"},"Cluster"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Kind"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Namespace"),", etc., of the resource are listed. Please note that these tags are ",(0,s.kt)("strong",{parentName:"p"},"hyperlinks"),', which we refer to as "',(0,s.kt)("strong",{parentName:"p"},"anchor points"),'". These represent the links to a particular resource group or a resource. By clicking on these ',(0,s.kt)("strong",{parentName:"p"},"anchor points"),", you can quickly jump to the insight page of that resource group or resource."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(15004).Z,width:"1620",height:"1080"})),(0,s.kt)("h2",{id:"flexible-switching-between-resource-groupsresources"},"Flexible Switching Between Resource Groups/Resources"),(0,s.kt)("p",null,"In fact, besides the tags in the mentioned search results, any resource/resource group names you see on any page can be re-directed to as ",(0,s.kt)("strong",{parentName:"p"},"anchor points"),", which serve like space-time wormholes, allowing you to traverse back and forth through any dimension until you find the resources you are searching for. Both search and anchor points are means to expedite the retrieval, which are key features of Karpor as a Kubernetes Explorer."),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(85681).Z,width:"1620",height:"1080"})))}l.isMDXComponent=!0},85681:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/insight-breadcrumbs-78f6e0adefb8fe33d3e9b3283f0826c1.png"},55899:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/insight-home-68b10537ffdc4adbe6ab33392d1ec7d0.png"},17193:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/search-home-a8f5b070e7b508cef4fc78ba1215fc5f.png"},15004:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/search-result-58bd2c0b969e1223c47de9c59a55599d.png"}}]);