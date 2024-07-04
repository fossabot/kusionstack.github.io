"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),d=n,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return r?a.createElement(g,s(s({ref:t},c),{},{components:r})):a.createElement(g,s({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},68079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"How to Search"},s=void 0,i={unversionedId:"user-guide/search",id:"version-v0.4/user-guide/search",title:"How to Search",description:"Within this section, we will explore how to perform multi-cluster resource searches using Karpor, with this guide being done entirely through the Dashboard.",source:"@site/karpor_versioned_docs/version-v0.4/3-user-guide/2-search.md",sourceDirName:"3-user-guide",slug:"/user-guide/search",permalink:"/karpor/user-guide/search",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/3-user-guide/2-search.md",tags:[],version:"v0.4",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1720065334,formattedLastUpdatedAt:"Jul 4, 2024",sidebarPosition:2,frontMatter:{title:"How to Search"},sidebar:"karpor",previous:{title:"Multi-Cluster Management",permalink:"/karpor/user-guide/multi-cluster-management"},next:{title:"How to Insight",permalink:"/karpor/user-guide/insight/"}},l={},u=[{value:"Search by SQL",id:"search-by-sql",level:2},{value:"Search by DSL",id:"search-by-dsl",level:2},{value:"Search by Natural Language",id:"search-by-natural-language",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Within this section, we will explore how to perform multi-cluster resource searches using Karpor, with this guide being done entirely through the Dashboard."),(0,n.kt)("p",null,"We support three methods of search:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Search by SQL"),": Perform resource searches using SQL query language."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Search by DSL"),": Conduct resource searches through ",(0,n.kt)("inlineCode",{parentName:"li"},"Karpor"),"'s Domain Specific Language (DSL)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Search by Natural Language"),": Using natural language for resource search.")),(0,n.kt)("h2",{id:"search-by-sql"},"Search by SQL"),(0,n.kt)("p",null,"Karpor offers a nifty SQL query feature that allows you to search and filter all Kubernetes resources within managed clusters using familiar SQL syntax and provides targeted optimizations and enhancements for multi-cluster resource searches."),(0,n.kt)("p",null,"SQL is one of the easily accessible skills for practitioners in the software engineering industry, theoretically making the learning curve quite low. As such, this search method is prepared for you! It is particularly well-suited for beginners to Karpor."),(0,n.kt)("p",null,"Below are the steps to use Search by SQL:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Enter the Search page"),": We designed the homepage as the entry point for search, so opening ",(0,n.kt)("inlineCode",{parentName:"li"},"Karpor"),"'s Web UI immediately presents you with the search page.\n",(0,n.kt)("img",{src:r(17193).Z,width:"1620",height:"1080"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Compose SQL query statements"),": Write your query statement using SQL syntax, specifying the cluster name, resource type, conditions, and filters you wish to search for. Additionally, if you enter a keyword and press a space, the search box will pop up with a dropdown with auto-completion, suggesting possible keywords you can type next.\n",(0,n.kt)("img",{src:r(73730).Z,width:"1620",height:"1080"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Execute the query"),": Click the 'search' button to execute the query and be sent to the search results page. Karpor will return a list of resources that match the SQL query.\n",(0,n.kt)("img",{src:r(15004).Z,width:"1620",height:"1080"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Advanced features"),": Utilize our built-in advanced SQL syntax, such as sorting, full-text search, etc., to refine your search further. For details, please refer to: ",(0,n.kt)("a",{parentName:"li",href:"/karpor/references/search-methods"},"Search Methodology Documentation"),".")),(0,n.kt)("h2",{id:"search-by-dsl"},"Search by DSL"),(0,n.kt)("p",null,"Coming soon. \ud83d\udea7"),(0,n.kt)("h2",{id:"search-by-natural-language"},"Search by Natural Language"),(0,n.kt)("p",null,"Coming soon. \ud83d\udea7"))}p.isMDXComponent=!0},73730:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/search-auto-complete-7d14657e2f21a62806f034ba84337080.png"},17193:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/search-home-a8f5b070e7b508cef4fc78ba1215fc5f.png"},15004:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/search-result-58bd2c0b969e1223c47de9c59a55599d.png"}}]);