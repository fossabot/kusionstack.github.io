"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(g,u(u({ref:t},c),{},{components:n})):o.createElement(g,u({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,u=new Array(i);u[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={title:"Non-code Contribution Guide"},u=void 0,a={unversionedId:"developer-guide/contribution-guide/non-code-contribute",id:"version-v0.4/developer-guide/contribution-guide/non-code-contribute",title:"Non-code Contribution Guide",description:"You can contribute in any of the following ways that interest you.",source:"@site/karpor_versioned_docs/version-v0.4/4-developer-guide/1-contribution-guide/1-non-code-contribute.md",sourceDirName:"4-developer-guide/1-contribution-guide",slug:"/developer-guide/contribution-guide/non-code-contribute",permalink:"/karpor/developer-guide/contribution-guide/non-code-contribute",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/4-developer-guide/1-contribution-guide/1-non-code-contribute.md",tags:[],version:"v0.4",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718359438,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:1,frontMatter:{title:"Non-code Contribution Guide"},sidebar:"karpor",previous:{title:"Contributing Guide",permalink:"/karpor/developer-guide/contribution-guide/"},next:{title:"Code Contribution Guide",permalink:"/karpor/developer-guide/contribution-guide/code-contribute"}},s={},l=[{value:"Contributing Use Cases and Demos",id:"contributing-use-cases-and-demos",level:2},{value:"Reporting Bugs",id:"reporting-bugs",level:2},{value:"Security Issues",id:"security-issues",level:2},{value:"Suggesting Enhancements",id:"suggesting-enhancements",level:2},{value:"Answering Questions",id:"answering-questions",level:2},{value:"Contributing Documentation",id:"contributing-documentation",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can contribute in any of the following ways that interest you."),(0,r.kt)("h2",{id:"contributing-use-cases-and-demos"},"Contributing Use Cases and Demos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are using Karpor, the simplest way to contribute is to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/issues/343"},"express gratitude to the community"),".")),(0,r.kt)("h2",{id:"reporting-bugs"},"Reporting Bugs"),(0,r.kt)("p",null,"Before submitting a new issue, please make sure that no one has already reported the problem."),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/issues"},"Issue list")," for any similar issues."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/issues/new?assignees=&labels=kind%2Fbug&projects=&template=bug-report.yaml"},"Report bugs")," by submitting a Bug report, ensuring you provide as much information as possible to help reproduce the Bug."),(0,r.kt)("p",null,"Follow the issue template and add additional information to help us replicate the issue."),(0,r.kt)("h2",{id:"security-issues"},"Security Issues"),(0,r.kt)("p",null,"If you believe you have discovered a security vulnerability, please read our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/blob/main/SECURITY.md"},"security policy")," for more detailed information."),(0,r.kt)("h2",{id:"suggesting-enhancements"},"Suggesting Enhancements"),(0,r.kt)("p",null,"If you have ideas to improve Karpor, please submit a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/issues/new?assignees=&labels=kind%2Ffeature&projects=&template=enhancement.yaml"},"feature request"),"."),(0,r.kt)("h2",{id:"answering-questions"},"Answering Questions"),(0,r.kt)("p",null,"If you have a question and cannot find the answer in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/karpor/"},"documentation"),", the next step is to ask on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/discussions"},"GitHub Discussions"),"."),(0,r.kt)("p",null,"Helping these users is important to us, and we would love to have your help. You can contribute by answering ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/discussions"},"their questions")," to help other Karpor users."),(0,r.kt)("h2",{id:"contributing-documentation"},"Contributing Documentation"),(0,r.kt)("p",null,"Contributing to the documentation requires some knowledge on how to submit a pull request to Github, which I think won't be difficult if you follow the guide."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/README.md"},"kusionstack.io Developer's Guide"))),(0,r.kt)("p",null,"For more ways to contribute, please look at the ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.guide/how-to-contribute/"},"Open Source Guide"),"."))}p.isMDXComponent=!0}}]);