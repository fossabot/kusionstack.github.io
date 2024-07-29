"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31825],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return t?n.createElement(k,o(o({ref:r},i),{},{components:t})):n.createElement(k,o({ref:r},i))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52398:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const s={title:"Search Methods"},o=void 0,l={unversionedId:"references/search-methods",id:"references/search-methods",title:"Search Methods",description:"Karpor is an open-source project that offers robust capabilities for searching resources across multiple clusters. This document outlines the two main search methods supported by Karpor: DSL (Domain Specific Language) and SQL (Structured Query Language), and explains how to utilize them for resource searches.",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/current/5-references/3-search-methods.md",sourceDirName:"5-references",slug:"/references/search-methods",permalink:"/zh/karpor/next/references/search-methods",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/5-references/3-search-methods.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1722237898,formattedLastUpdatedAt:"2024\u5e747\u670829\u65e5",sidebarPosition:3,frontMatter:{title:"Search Methods"},sidebar:"karpor",previous:{title:"OpenAPI",permalink:"/zh/karpor/next/references/openapi"},next:{title:"\u8def\u7ebf\u56fe",permalink:"/zh/karpor/next/roadmap/"}},c={},p=[{value:"Keywords",id:"keywords",level:2},{value:"SQL",id:"sql",level:2}],i={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Karpor is an open-source project that offers robust capabilities for searching resources across multiple clusters. This document outlines the two main search methods supported by Karpor: DSL (Domain Specific Language) and SQL (Structured Query Language), and explains how to utilize them for resource searches."),(0,a.kt)("h2",{id:"keywords"},"Keywords"),(0,a.kt)("p",null,"Karpor facilitates resource searches using two methods: DSL and SQL. Both methodologies leverage the following keywords for resource discovery:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cluster"),(0,a.kt)("li",{parentName:"ul"},"apiVersion"),(0,a.kt)("li",{parentName:"ul"},"kind"),(0,a.kt)("li",{parentName:"ul"},"namespace"),(0,a.kt)("li",{parentName:"ul"},"name"),(0,a.kt)("li",{parentName:"ul"},"creationTimestamp"),(0,a.kt)("li",{parentName:"ul"},"deletionTimestamp"),(0,a.kt)("li",{parentName:"ul"},"ownerReferences"),(0,a.kt)("li",{parentName:"ul"},"resourceVersion"),(0,a.kt)("li",{parentName:"ul"},"labels.",(0,a.kt)("inlineCode",{parentName:"li"},"key")),(0,a.kt)("li",{parentName:"ul"},"annotations.",(0,a.kt)("inlineCode",{parentName:"li"},"key")),(0,a.kt)("li",{parentName:"ul"},"content")),(0,a.kt)("h2",{id:"sql"},"SQL"),(0,a.kt)("p",null,"Karpor offers a SQL-like approach for querying Kubernetes resources, enabling users to employ SQL syntax for their searches. Below are examples illustrating the use of SQL syntax for various search scenarios:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources of the Namespace kind")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where kind='Namespace'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources where the labels contain the key 'key1' with value 'value1'")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where labels.key1='value1'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources where the annotations contain the key 'key1' with value 'value1'")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where annotations.key1='value1'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources that are not of the Pod kind")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where kind!='Pod'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources of the Pod kind within a specific cluster")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where cluster='demo' and kind='Pod'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources of kind within a specified list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where kind in ('pod','service')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources of kinds not within a specified list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where kind not in ('pod','service')\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources where the namespace starts with appl (where % represents any number of characters)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where namespace like 'appl%'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources where the namespace contains banan (where ","_"," represents any single character)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where namespace like 'banan_'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources where the namespace does not start with appl")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where namespace not like 'appl%'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources where the namespace does not contain banan")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where namespace notlike 'banan_'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources of kind Deployment and created before January 1, 2024, at 18:00:00")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where kind='Deployment' and creationTimestamp < '2024-01-01T18:00:00Z'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources of kind Service and order by creation timestamp in descending order")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where kind='Service' order by creationTimestamp desc\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Query resources whose content contains apple")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from resources where contains(content, 'apple')\n")))}u.isMDXComponent=!0}}]);