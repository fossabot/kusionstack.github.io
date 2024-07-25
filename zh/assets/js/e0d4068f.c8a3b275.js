"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="Overview",s={unversionedId:"concepts/kusion-module/overview",id:"version-v0.11/concepts/kusion-module/overview",title:"Overview",description:"A Kusion module is a reusable building block designed by platform engineers to standardize application deployments and enable app developers to self-service. It consists of two parts:",source:"@site/docs_versioned_docs/version-v0.11/3-concepts/3-kusion-module/1-overview.md",sourceDirName:"3-concepts/3-kusion-module",slug:"/concepts/kusion-module/overview",permalink:"/zh/docs/v0.11/concepts/kusion-module/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/3-concepts/3-kusion-module/1-overview.md",tags:[],version:"v0.11",lastUpdatedBy:"elliotxx",lastUpdatedAt:1721873571,formattedLastUpdatedAt:"2024\u5e747\u670825\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"kusion",previous:{title:"Stack file reference",permalink:"/zh/docs/v0.11/concepts/stack/configuration"},next:{title:"Platform Engineer Develop Guide",permalink:"/zh/docs/v0.11/concepts/kusion-module/develop-guide"}},l={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A Kusion module is a reusable building block designed by platform engineers to standardize application deployments and enable app developers to self-service. It consists of two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App developer-oriented schema: It is a ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/guides/schema-definition/"},"KCL schema"),". Fields in this schema are recommended to be understandable to application developers and workspace-agnostic. For example, a database Kusion module schema only contains fields like database engine type and database version."),(0,r.kt)("li",{parentName:"ul"},"Kusion module generator: It is a piece of logic that generates the Intent with an instantiated schema mentioned above, along with platform configurations (",(0,r.kt)("a",{parentName:"li",href:"../workspace"},"workspace"),"). As a building block, Kusion module hides the complexity of infrastructures. A database Kusion module not only represents a cloud RDS, but it also contains logic to configure other resources such as security groups and IAM policies. Additionally, it seamlessly injects the database host address, username, and password into the workload's environment variables. The generator logic can be very complex in some situations so we recommend implementing it in a GPL like ",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/"},"go"),".")),(0,r.kt)("p",null,"Here are some explanations of the Kusion Module:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It represents an independent unit that provides a specific capability to the application with clear business semantics."),(0,r.kt)("li",{parentName:"ol"},"It consists of one or multiple infrastructure resources (K8s/Terraform resources), but it is not merely a collection of unrelated resources. For instance, a database, monitoring capabilities, and network access are typical Kusion Modules."),(0,r.kt)("li",{parentName:"ol"},"Modules should not have dependencies or be nested within each other."),(0,r.kt)("li",{parentName:"ol"},"AppConfig is not a Module."),(0,r.kt)("li",{parentName:"ol"},"Kusion Module is a superset of ",(0,r.kt)("a",{parentName:"li",href:"https://www.kcl-lang.io/docs/user_docs/guides/package-management/quick-start"},"KPM"),". It leverages the KPM to manage KCL schemas in the Kusion module.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusion-module",src:n(63623).Z,width:"1443",height:"429"})))}u.isMDXComponent=!0},63623:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kusion-module-635aee19e95fcd57ebebeaa106fa04ee.png"}}]);