"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3261:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const r={id:"how-kusion-works",sidebar_label:"How Kusion Works?"},a="How Kusion Works?",s={unversionedId:"kusion/concepts/how-kusion-works",id:"kusion/concepts/how-kusion-works",title:"How Kusion Works?",description:"Kusion is the platform engineering engine of KusionStack. It delivers intentions described with Kusion Models defined in Catalog to Kubernetes, Clouds and On-Prem infrastructures.",source:"@site/docs/kusion/3-concepts/8-how-kusion-works.md",sourceDirName:"kusion/3-concepts",slug:"/kusion/concepts/how-kusion-works",permalink:"/docs/next/kusion/concepts/how-kusion-works",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/8-how-kusion-works.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1705049329,formattedLastUpdatedAt:"Jan 12, 2024",sidebarPosition:8,frontMatter:{id:"how-kusion-works",sidebar_label:"How Kusion Works?"},sidebar:"kusion",previous:{title:"Backend Configuration",permalink:"/docs/next/kusion/concepts/backend-configuration"},next:{title:"Configuration File Overview",permalink:"/docs/next/kusion/configuration-walkthrough/overview"}},l={},u=[{value:"Operation Engine",id:"operation-engine",level:2},{value:"Runtimes",id:"runtimes",level:2},{value:"State",id:"state",level:2},{value:"How Kusion works",id:"how-kusion-works-1",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-kusion-works"},"How Kusion Works?"),(0,i.kt)("p",null,"Kusion is the platform engineering engine of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack"},"KusionStack"),". It delivers intentions described with Kusion Models defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog")," to Kubernetes, Clouds and On-Prem infrastructures."),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/arch.png",width:"50%",height:"50%"})),(0,i.kt)("p",null," It consists of 3 parts: ",(0,i.kt)("inlineCode",{parentName:"p"},"Operation Engine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtimes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"State"),", we will describe each of these components below."),(0,i.kt)("h2",{id:"operation-engine"},"Operation Engine"),(0,i.kt)("p",null,"Operation Engine is the entry point of the Kusion Engine and is responsible for Kusion basic operations like ",(0,i.kt)("inlineCode",{parentName:"p"},"preview"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"apply"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"destroy"),", etc. The main workflow of this part is to parse resources described in the operation intention (Spec), figure out which resource should be modified according to the specified operation, and execute this operation to the real infra resources. During this workflow, Runtimes and State will be involved."),(0,i.kt)("h2",{id:"runtimes"},"Runtimes"),(0,i.kt)("p",null,"Runtime is an interface between the actual infrastructure and Kusion. All operations attempting to manipulate an infra resource should be delegated to one Runtime to make this operation affect the actual infrastructure. On the other hand, any infrastructure that implements the Runtime interfaces can be managed by Kusion."),(0,i.kt)("h2",{id:"state"},"State"),(0,i.kt)("p",null,"State is a record of an operation's result. It is a mapping between resources managed by Kusion and the actual infra resources. State is often used as a data source for 3-way merge/diff in operations like ",(0,i.kt)("inlineCode",{parentName:"p"},"apply")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"preview"),"."),(0,i.kt)("p",null,"State can be stored in many storage mediums like filesystems, OSS, databases, HTTP servers, etc."),(0,i.kt)("h2",{id:"how-kusion-works-1"},"How Kusion works"),(0,i.kt)("p",null,"Let's get operation ",(0,i.kt)("inlineCode",{parentName:"p"},"Preview")," as an example to demonstrate how the three parts cooperate in an actual operation."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Operation Engine")," parses resources in operation intentions(Spec) and converts them into a DAG"),(0,i.kt)("li",{parentName:"ol"},"Walk this DAG:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Get the latest ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," from the actual infra by the ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime")),(0,i.kt)("li",{parentName:"ol"},"Get the last operation ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," storage medium"))),(0,i.kt)("li",{parentName:"ol"},"Merge/Diff three states: desired state described in Spec, live state from ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime")," and prior state from ",(0,i.kt)("inlineCode",{parentName:"li"},"State")," storage medium, and return the diff result to the console.")))}c.isMDXComponent=!0}}]);