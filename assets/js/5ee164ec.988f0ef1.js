"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(f,a(a({ref:t},u),{},{components:n})):i.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={sidebar_position:3},a="How Kusion Works",s={unversionedId:"kusion/concepts/kusion",id:"version-v0.9/kusion/concepts/kusion",title:"How Kusion Works",description:"Kusion is the platform engineering engine of KusionStack. It delivers intentions described with Kusion Models defined in Catalog to Kubernetes, Clouds and On-Prem infrastructures.",source:"@site/versioned_docs/version-v0.9/kusion/concepts/kusion.md",sourceDirName:"kusion/concepts",slug:"/kusion/concepts/kusion",permalink:"/docs/v0.9/kusion/concepts/kusion",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/concepts/kusion.md",tags:[],version:"v0.9",lastUpdatedBy:"KK",lastUpdatedAt:1711714561,formattedLastUpdatedAt:"Mar 29, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"kusion",previous:{title:"Glossary",permalink:"/docs/v0.9/kusion/concepts/glossary"},next:{title:"AppConfiguration",permalink:"/docs/v0.9/kusion/concepts/appconfiguration"}},l={},p=[{value:"Operation Engine",id:"operation-engine",level:2},{value:"Runtimes",id:"runtimes",level:2},{value:"State",id:"state",level:2},{value:"How Kusion works",id:"how-kusion-works-1",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-kusion-works"},"How Kusion Works"),(0,o.kt)("p",null,"Kusion is the platform engineering engine of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack"},"KusionStack"),". It delivers intentions described with Kusion Models defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog")," to Kubernetes, Clouds and On-Prem infrastructures."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/arch.png",width:"50%",height:"50%"})),(0,o.kt)("p",null," It consists of 3 parts: ",(0,o.kt)("inlineCode",{parentName:"p"},"Operation Engine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtimes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),", we will describe each of these components below."),(0,o.kt)("h2",{id:"operation-engine"},"Operation Engine"),(0,o.kt)("p",null,"Operation Engine is the entry point of the Kusion Engine and is responsible for Kusion basic operations like ",(0,o.kt)("inlineCode",{parentName:"p"},"preview"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"apply"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy"),", etc. The main workflow of this part is to parse resources described in the operation intention (Spec), figure out which resource should be modified according to the specified operation, and execute this operation to the real infra resources. During this workflow, Runtimes and State will be involved."),(0,o.kt)("h2",{id:"runtimes"},"Runtimes"),(0,o.kt)("p",null,"Runtime is an interface between the actual infrastructure and Kusion. All operations attempting to manipulate an infra resource should be delegated to one Runtime to make this operation affect the actual infrastructure. On the other hand, any infrastructure that implements the Runtime interfaces can be managed by Kusion."),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("p",null,"State is a record of an operation's result. It is a mapping between resources managed by Kusion and the actual infra resources. State is often used as a data source for 3-way merge/diff in operations like ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"preview"),"."),(0,o.kt)("p",null,"State can be stored in many storage mediums like filesystems, OSS, databases, HTTP servers, etc."),(0,o.kt)("h2",{id:"how-kusion-works-1"},"How Kusion works"),(0,o.kt)("p",null,"Let's get operation ",(0,o.kt)("inlineCode",{parentName:"p"},"Preview")," as an example to demonstrate how the three parts cooperate in an actual operation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Operation Engine")," parses resources in operation intentions(Spec) and converts them into a DAG"),(0,o.kt)("li",{parentName:"ol"},"Walk this DAG:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Get the latest ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," from the actual infra by the ",(0,o.kt)("inlineCode",{parentName:"li"},"Runtime")),(0,o.kt)("li",{parentName:"ol"},"Get the last operation ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," storage medium"))),(0,o.kt)("li",{parentName:"ol"},"Merge/Diff three states: desired state described in Spec, live state from ",(0,o.kt)("inlineCode",{parentName:"li"},"Runtime")," and prior state from ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," storage medium, and return the diff result to the console.")))}c.isMDXComponent=!0}}]);