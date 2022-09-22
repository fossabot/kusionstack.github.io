"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={sidebar_position:4},a="Kusion",s={unversionedId:"user_docs/concepts/kusion",id:"user_docs/concepts/kusion",title:"Kusion",description:"Kusion engine is to compile and deliver intents in Konfig to hybrid runtime on multi-cloud with less complexity and a consistent experience.",source:"@site/docs/user_docs/concepts/kusion.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/kusion",permalink:"/zh-CN/docs/user_docs/concepts/kusion",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/kusion.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663852902,formattedLastUpdatedAt:"2022/9/22",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"user_docs",previous:{title:"KCL",permalink:"/zh-CN/docs/user_docs/concepts/kcl-lang"},next:{title:"\u7528\u6237\u6307\u5357",permalink:"/zh-CN/docs/user_docs/guides/"}},l={},c=[{value:"Operation Engine",id:"operation-engine",level:2},{value:"Runtimes",id:"runtimes",level:2},{value:"State",id:"state",level:2},{value:"How Kusion works",id:"how-kusion-works",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion"},"Kusion"),(0,r.kt)("p",null,"Kusion engine is to compile and deliver intents in Konfig to hybrid runtime on multi-cloud with less complexity and a consistent experience."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(48149).Z,width:"551",height:"831"})),(0,r.kt)("p",null," It consists of 3 parts: ",(0,r.kt)("inlineCode",{parentName:"p"},"Operation Engine"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Runtimes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"State"),", we will describe each of these components below."),(0,r.kt)("h2",{id:"operation-engine"},"Operation Engine"),(0,r.kt)("p",null,"Operation Engine is the entry point of the whole Kusion Engine and is responsible for Kusion basic operations like Preview, Apply, Destroy, etc. The main workflow of this part is to parse resources described in Konfig, figure out which resource should be modified according to the specified operation type, and execute this operation to the real infra resources. During this workflow, Runtimes and State will be involved."),(0,r.kt)("h2",{id:"runtimes"},"Runtimes"),(0,r.kt)("p",null,"Runtime is an interface between the actual infrastructure and Kusion. All operations attempting to manipulate an infra resource should be delegated to one Runtime to make this operation affect the actual infrastructure. On the other hand, any runtime that implements this interface can be manipulated by Kusion."),(0,r.kt)("h2",{id:"state"},"State"),(0,r.kt)("p",null,"State is a record of an operation's result. It is a mapping between resources in Konfig and the actual infra resource. State is often used as a data source for 3-way merge/diff in operations like Apply or Preview."),(0,r.kt)("p",null,"State can be stored in many storage mediums like filesystems, OSS, HTTP servers, etc."),(0,r.kt)("h2",{id:"how-kusion-works"},"How Kusion works"),(0,r.kt)("p",null,"Let's get operation ",(0,r.kt)("inlineCode",{parentName:"p"},"Preview")," as an example to demonstrate how the three parts cooperate in an actual operation."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Operation Engine")," parses resources in Konfig and converts them into a DAG"),(0,r.kt)("li",{parentName:"ol"},"Walk this DAG:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Get the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"State")," from the actual infra by the ",(0,r.kt)("inlineCode",{parentName:"li"},"Runtime")),(0,r.kt)("li",{parentName:"ol"},"Get the last operation ",(0,r.kt)("inlineCode",{parentName:"li"},"State")," from the ",(0,r.kt)("inlineCode",{parentName:"li"},"State")," storage medium"))),(0,r.kt)("li",{parentName:"ol"},"Merge/Diff three states: desired state described in Konfig, live state from ",(0,r.kt)("inlineCode",{parentName:"li"},"Runtime")," and prior state from ",(0,r.kt)("inlineCode",{parentName:"li"},"State")," storage medium, and return the diff result to the console")))}p.isMDXComponent=!0},48149:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/kusion-engine-15507656c4346ff89fe9351f46deda2d.png"}}]);