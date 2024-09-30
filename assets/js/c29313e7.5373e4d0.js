"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},17622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={title:"Architecture"},s=void 0,i={unversionedId:"concepts/architecture",id:"version-v0.5/concepts/architecture",title:"Architecture",description:"Components",source:"@site/karpor_versioned_docs/version-v0.5/2-concepts/1-architecture.md",sourceDirName:"2-concepts",slug:"/concepts/architecture",permalink:"/karpor/concepts/architecture",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.5/2-concepts/1-architecture.md",tags:[],version:"v0.5",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:1,frontMatter:{title:"Architecture"},sidebar:"karpor",previous:{title:"Quick Start",permalink:"/karpor/getting-started/quick-start"},next:{title:"Glossary",permalink:"/karpor/concepts/glossary"}},c={},l=[{value:"Components",id:"components",level:2},{value:"How Karpor Works",id:"how-karpor-works",level:2},{value:"Next Step",id:"next-step",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4573).Z,width:"1480",height:"1315"})),(0,a.kt)("h2",{id:"components"},"Components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Dashboard"),": Web UI for Karpor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Server"),": Main Backend Server for Karpor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Syncer"),": Independent Server to synchronize cluster resources in real-time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Storage"),": Storage Backend to store the synchronized resources and user data.")),(0,a.kt)("h2",{id:"how-karpor-works"},"How Karpor Works"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"After installation, users can register clusters of interest into Karpor."),(0,a.kt)("li",{parentName:"ol"},"The Syncer runs and automatically synchronizes the resources of interest from the cluster to Storage. It also ensures the real-time changes to the resources are automatically sync-ed to Karpor Storage."),(0,a.kt)("li",{parentName:"ol"},"When a user wishes to locate specific resource(s), a search query can be typed into the search box in the Dashboard. The Dashboard interacts with the search endpoint of the Server. The search module within the Server parses the search query, searches for relevant resources in Storage, and returns the results to the Dashboard."),(0,a.kt)("li",{parentName:"ol"},"Upon clicking a search result, the user is directed to a resource insight page. The Dashboard calls the insight endpoint of the Server, where the Server's insight module performs a static scan of the resource, generates issue reports, and locates its relevant resources to draw a resource topology map with all of its parents and children."),(0,a.kt)("li",{parentName:"ol"},"The insight page also applies to groups of resources, such as all resources in a cluster, a Group-Version-Kind combination, a namespace or a custom-defined resource group.")),(0,a.kt)("h2",{id:"next-step"},"Next Step"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn Karpor's ",(0,a.kt)("a",{parentName:"li",href:"../concepts/glossary"},"Glossary"),"."),(0,a.kt)("li",{parentName:"ul"},"View ",(0,a.kt)("a",{parentName:"li",href:"../user-guide/multi-cluster-management"},"User Guide")," to look on more of what you can achieve with Karpor.")))}u.isMDXComponent=!0},4573:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture-2377b11d778021730235919830b3c7ab.png"}}]);