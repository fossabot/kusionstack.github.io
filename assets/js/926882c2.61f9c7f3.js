"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},a="Kusion",s={unversionedId:"user_docs/concepts/kusion",id:"user_docs/concepts/kusion",title:"Kusion",description:"Kusion is the platform engineering engine of KusionStack. It delivers intentions described with Kusion Models defined in Catalog to Kubernetes, Clouds and On-Prem infrastructures.",source:"@site/docs/user_docs/concepts/kusion.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/kusion",permalink:"/docs/user_docs/concepts/kusion",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/kusion.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1695803180,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Architecture",permalink:"/docs/user_docs/concepts/arch"},next:{title:"KCL",permalink:"/docs/user_docs/concepts/kcl-lang"}},l={},c=[{value:"Operation Engine",id:"operation-engine",level:2},{value:"Runtimes",id:"runtimes",level:2},{value:"State",id:"state",level:2},{value:"How Kusion works",id:"how-kusion-works",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kusion"},"Kusion"),(0,i.kt)("p",null,"Kusion is the platform engineering engine of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack"},"KusionStack"),". It delivers intentions described with Kusion Models defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog")," to Kubernetes, Clouds and On-Prem infrastructures."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/arch.png",width:"50%",height:"50%"})),(0,i.kt)("p",null," It consists of 3 parts: ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation Engine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtimes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),", we will describe each of these components below."),(0,i.kt)("h2",{id:"operation-engine"},"Operation Engine"),(0,i.kt)("p",null,"Operation Engine is the entry point of the Kusion Engine and is responsible for Kusion basic operations like ",(0,i.kt)("inlineCode",{parentName:"p"},"preview"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"apply"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"destroy"),", etc. The main workflow of this part is to parse resources described in the operation intention (Spec), figure out which resource should be modified according to the specified operation, and execute this operation to the real infra resources. During this workflow, Runtimes and State will be involved."),(0,i.kt)("h2",{id:"runtimes"},"Runtimes"),(0,i.kt)("p",null,"Runtime is an interface between the actual infrastructure and Kusion. All operations attempting to manipulate an infra resource should be delegated to one Runtime to make this operation affect the actual infrastructure. On the other hand, any infrastructure that implements the Runtime interfaces can be managed by Kusion."),(0,i.kt)("h2",{id:"state"},"State"),(0,i.kt)("p",null,"State is a record of an operation's result. It is a mapping between resources managed by Kusion and the actual infra resources. State is often used as a data source for 3-way merge/diff in operations like ",(0,i.kt)("inlineCode",{parentName:"p"},"apply")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"preview"),"."),(0,i.kt)("p",null,"State can be stored in many storage mediums like filesystems, OSS, databases, HTTP servers, etc."),(0,i.kt)("h2",{id:"how-kusion-works"},"How Kusion works"),(0,i.kt)("p",null,"Let's get operation ",(0,i.kt)("inlineCode",{parentName:"p"},"Preview")," as an example to demonstrate how the three parts cooperate in an actual operation."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Operation Engine")," parses resources in operation intentions(Spec) and converts them into a DAG"),(0,i.kt)("li",{parentName:"ol"},"Walk this DAG:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Get the latest ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," from the actual infra by the ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime")),(0,i.kt)("li",{parentName:"ol"},"Get the last operation ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," storage medium"))),(0,i.kt)("li",{parentName:"ol"},"Merge/Diff three states: desired state described in Spec, live state from ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime")," and prior state from ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," storage medium, and return the diff result to the console.")))}u.isMDXComponent=!0}}]);