"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Release Process And Cadence"},l=void 0,o={unversionedId:"developer-guide/conventions/release-process",id:"version-v0.4/developer-guide/conventions/release-process",title:"Release Process And Cadence",description:"Release Planning",source:"@site/karpor_versioned_docs/version-v0.4/4-developer-guide/2-conventions/1-release-process.md",sourceDirName:"4-developer-guide/2-conventions",slug:"/developer-guide/conventions/release-process",permalink:"/karpor/developer-guide/conventions/release-process",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/4-developer-guide/2-conventions/1-release-process.md",tags:[],version:"v0.4",lastUpdatedBy:"hexin",lastUpdatedAt:1724678822,formattedLastUpdatedAt:"Aug 26, 2024",sidebarPosition:1,frontMatter:{title:"Release Process And Cadence"},sidebar:"karpor",previous:{title:"Roles",permalink:"/karpor/developer-guide/contribution-guide/roles"},next:{title:"Code Conventions",permalink:"/karpor/developer-guide/conventions/code-conventions"}},s={},p=[{value:"Release Planning",id:"release-planning",level:2},{value:"Release Standards",id:"release-standards",level:2},{value:"Release Standard Procedure",id:"release-standard-procedure",level:2},{value:"Gate Testing",id:"gate-testing",level:2},{value:"Semantic Versioning",id:"semantic-versioning",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"release-planning"},"Release Planning"),(0,r.kt)("p",null,"We will establish and continuously follow up on the release plan through ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/karpor/milestones"},"GitHub Milestones"),". Each release milestone will include two types of tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tasks Maintainers commit to complete. Maintainers will decide on the features they are committed to implementing before the next release based on their available time and effort. Usually, tasks are finalized after offline discussions and then added to the milestone. These tasks will be assigned to the Maintainer who plans to implement or test them."),(0,r.kt)("li",{parentName:"ul"},"Additional items contributed by community contributors, typically non-urgent features or optimizations. Maintainers do not commit to completing these issues within the release cycle but will commit to reviewing submissions from the community.")),(0,r.kt)("p",null,"The milestones will clearly describe the most important features and their expected completion dates. This will clearly inform end-users about the timing and contents of the next release."),(0,r.kt)("p",null,"In addition to the next milestone, we will also maintain drafts of future release milestones."),(0,r.kt)("h2",{id:"release-standards"},"Release Standards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("strong",{parentName:"li"},"official releases")," should be tagged on the ",(0,r.kt)("inlineCode",{parentName:"li"},"main")," branch, with optional pre-release version suffixes such as: ",(0,r.kt)("inlineCode",{parentName:"li"},"alpha"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"beta"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rc"),", for example, a regular official release version might be ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.2.3"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.2.3-alpha.0"),". For instance, if we want to perform some validations before releasing the official version ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.2.3"),", we could first release a pre-release version like ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.2.3-alpha.0"),", followed by ",(0,r.kt)("inlineCode",{parentName:"li"},"v1.2.3")," after the validation is complete."),(0,r.kt)("li",{parentName:"ul"},"Maintainers commit to completing certain features and enhancements, tracking progress through ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/karpor/milestones"},"GitHub Milestones"),"."),(0,r.kt)("li",{parentName:"ul"},"We will do our best to avoid release delays; thus, if we cannot complete a feature on time, it will be moved to the next release."),(0,r.kt)("li",{parentName:"ul"},"A new version will be released every ",(0,r.kt)("strong",{parentName:"li"},"1 month"),".")),(0,r.kt)("h2",{id:"release-standard-procedure"},"Release Standard Procedure"),(0,r.kt)("p",null,"Maintainers are responsible for driving the release process and following standard operating procedures to ensure the quality of the release."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tag the git commit designated for release and push it upstream; the tag needs to comply with ",(0,r.kt)("a",{parentName:"li",href:"#semantic-versioning"},"Semantic Versioning"),"."),(0,r.kt)("li",{parentName:"ol"},"Ensure that the triggered Github Actions pipeline is executed successfully. Once successful, it will automatically generate a new Github Release, which includes the Changelog calculated from commit messages, as well as artifacts such as images and tar.gz files."),(0,r.kt)("li",{parentName:"ol"},"Write clear release notes based on the ",(0,r.kt)("strong",{parentName:"li"},"Github Release"),", including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User-friendly release highlights."),(0,r.kt)("li",{parentName:"ul"},"Deprecated and incompatible changes."),(0,r.kt)("li",{parentName:"ul"},"Brief instructions on how to install and upgrade.")))),(0,r.kt)("h2",{id:"gate-testing"},"Gate Testing"),(0,r.kt)("p",null,"Before creating the release branch, we will have a ",(0,r.kt)("strong",{parentName:"p"},"1-week")," code freeze period. During this period, we will refrain from merging any feature PRs and will only fix bugs."),(0,r.kt)("p",null,"Maintainers will test and fix these last-minute issues before each release."),(0,r.kt)("h2",{id:"semantic-versioning"},"Semantic Versioning"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Karpor")," adopts ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," for its version numbers."),(0,r.kt)("p",null,"The version format: ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH"),", for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.2.3"),". The version number ",(0,r.kt)("strong",{parentName:"p"},"incrementing rules")," are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MAJOR version when you make incompatible API changes."),(0,r.kt)("li",{parentName:"ul"},"MINOR version when you add functionality in a backwards-compatible manner."),(0,r.kt)("li",{parentName:"ul"},"PATCH version when you make backwards-compatible bug fixes.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-release version numbers and build metadata")," can be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH")," as an extension, like ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.2.3-alpha.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.2.3-beta.1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.2.3-rc.2"),", where ",(0,r.kt)("inlineCode",{parentName:"p"},"-alpha.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-beta.1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-rc.2")," are pre-release versions."))}c.isMDXComponent=!0}}]);