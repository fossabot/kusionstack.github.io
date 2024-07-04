"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,s(s({ref:t},p),{},{components:n})):o.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},s="Kusion Module",i={unversionedId:"concepts/kusion-module",id:"version-v0.10/concepts/kusion-module",title:"Kusion Module",description:"A Kusion module is a reusable building block designed by platform engineers to standardize application deployments and enable app developers to self-service. It consists of two parts:",source:"@site/docs_versioned_docs/version-v0.10/3-concepts/3-kusion-module.md",sourceDirName:"3-concepts",slug:"/concepts/kusion-module",permalink:"/zh/docs/v0.10/concepts/kusion-module",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/3-concepts/3-kusion-module.md",tags:[],version:"v0.10",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1720065334,formattedLastUpdatedAt:"2024\u5e747\u67084\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"kusion",previous:{title:"Stack Configuration",permalink:"/zh/docs/v0.10/concepts/stack/configuration"},next:{title:"Workspace",permalink:"/zh/docs/v0.10/concepts/workspace"}},c={},l=[],p={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-module"},"Kusion Module"),(0,r.kt)("p",null,"A Kusion module is a reusable building block designed by platform engineers to standardize application deployments and enable app developers to self-service. It consists of two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"App developer-oriented schema: It is a ",(0,r.kt)("a",{parentName:"li",href:"https://kcl-lang.io/docs/user_docs/guides/schema-definition/"},"KCL schema"),". Fields in this schema are recommended to be understandable to application developers and workspace-agnostic. For example, a database Kusion module schema only contains fields like database engine type and database version."),(0,r.kt)("li",{parentName:"ul"},"Kusion module generator: It is a piece of logic that generates the Intent with an instantiated schema mentioned above, along with platform configurations (",(0,r.kt)("a",{parentName:"li",href:"workspace"},"workspace"),"). As a building block, Kusion module hides the complexity of infrastructures. A database Kusion module not only represents a cloud RDS, but it also contains logic to configure other resources such as security groups and IAM policies. Additionally, it seamlessly injects the database host address, username, and password into the workload's environment variables. The generator logic can be very complex in some situations so we recommend implementing it in a GPL like ",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/"},"go"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusion-module",src:n(63623).Z,width:"1443",height:"429"})))}d.isMDXComponent=!0},63623:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/kusion-module-635aee19e95fcd57ebebeaa106fa04ee.png"}}]);