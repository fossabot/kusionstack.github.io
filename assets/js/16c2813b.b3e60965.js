"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8947],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),s=a,k=u["".concat(c,".").concat(s)]||u[s]||m[s]||l;return n?r.createElement(k,i(i({ref:e},d),{},{components:n})):r.createElement(k,i({ref:e},d))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73049:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1},i="Overview",o={unversionedId:"reference/cli/kcl/overview",id:"reference/cli/kcl/overview",title:"Overview",description:"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and testing of KCL.",source:"@site/docs/reference/cli/kcl/overview.md",sourceDirName:"reference/cli/kcl",slug:"/reference/cli/kcl/overview",permalink:"/docs/reference/cli/kcl/overview",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kcl/overview.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1668663206,formattedLastUpdatedAt:"11/17/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"KCL Language Tools",permalink:"/docs/reference/cli/kcl/"},next:{title:"Format",permalink:"/docs/reference/cli/kcl/fmt"}},c={},p=[],d={toc:p};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"KCL toolchain is a toolset of KCL language, which aims to improve the efficiency of batch migration, writing, compiling and testing of KCL."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Main Toolset"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"kcl")),(0,a.kt)("td",{parentName:"tr",align:null},"Provide support for KCL in coding, compiling and testing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl build"),(0,a.kt)("td",{parentName:"tr",align:null},"Build KCL code(not yet)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl test"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide unit test(not yet) and integration test")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl fmt"),(0,a.kt)("td",{parentName:"tr",align:null},"Formoat KCL code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl list"),(0,a.kt)("td",{parentName:"tr",align:null},"Parse the KCL code and lists the option parameter/schema attributes information. \uff08kcl list-options and kcl list-attributes)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Automation Toolset"),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-lint"),(0,a.kt)("td",{parentName:"tr",align:null},"Check code style for KCL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-doc"),(0,a.kt)("td",{parentName:"tr",align:null},"Parses the KCL code and generate documents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"kcl-fmt"),(0,a.kt)("td",{parentName:"tr",align:null},"Same as ",(0,a.kt)("inlineCode",{parentName:"td"},"kcl fmt"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IDE Plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"IntelliJ IDEA KCL plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on IntelliJ IDEA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"VS Code KCL plugin"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide assistance for KCL in coding and compiling on VS Code")))))}m.isMDXComponent=!0}}]);