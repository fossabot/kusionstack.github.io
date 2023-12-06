"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="How Kusion Works",s={unversionedId:"user_docs/concepts/kusion",id:"user_docs/concepts/kusion",title:"How Kusion Works",description:"Kusion is the platform engineering engine of KusionStack. It delivers intentions described with Kusion Models defined in Catalog to Kubernetes, Clouds and On-Prem infrastructures.",source:"@site/docs/user_docs/concepts/kusion.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/kusion",permalink:"/docs/user_docs/concepts/kusion",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/kusion.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1701845339,formattedLastUpdatedAt:"Dec 6, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"Glossary",permalink:"/docs/user_docs/concepts/glossary"},next:{title:"AppConfiguration",permalink:"/docs/user_docs/concepts/appconfiguration"}},l={},p=[{value:"Operation Engine",id:"operation-engine",level:2},{value:"Runtimes",id:"runtimes",level:2},{value:"State",id:"state",level:2},{value:"How Kusion works",id:"how-kusion-works-1",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-kusion-works"},"How Kusion Works"),(0,o.kt)("p",null,"Kusion is the platform engineering engine of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack"},"KusionStack"),". It delivers intentions described with Kusion Models defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog")," to Kubernetes, Clouds and On-Prem infrastructures."),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/arch.png",width:"50%",height:"50%"})),(0,o.kt)("p",null," It consists of 3 parts: ",(0,o.kt)("inlineCode",{parentName:"p"},"Operation Engine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtimes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"State"),", we will describe each of these components below."),(0,o.kt)("h2",{id:"operation-engine"},"Operation Engine"),(0,o.kt)("p",null,"Operation Engine is the entry point of the Kusion Engine and is responsible for Kusion basic operations like ",(0,o.kt)("inlineCode",{parentName:"p"},"preview"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"apply"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"destroy"),", etc. The main workflow of this part is to parse resources described in the operation intention (Spec), figure out which resource should be modified according to the specified operation, and execute this operation to the real infra resources. During this workflow, Runtimes and State will be involved."),(0,o.kt)("h2",{id:"runtimes"},"Runtimes"),(0,o.kt)("p",null,"Runtime is an interface between the actual infrastructure and Kusion. All operations attempting to manipulate an infra resource should be delegated to one Runtime to make this operation affect the actual infrastructure. On the other hand, any infrastructure that implements the Runtime interfaces can be managed by Kusion."),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("p",null,"State is a record of an operation's result. It is a mapping between resources managed by Kusion and the actual infra resources. State is often used as a data source for 3-way merge/diff in operations like ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"preview"),"."),(0,o.kt)("p",null,"State can be stored in many storage mediums like filesystems, OSS, databases, HTTP servers, etc."),(0,o.kt)("h2",{id:"how-kusion-works-1"},"How Kusion works"),(0,o.kt)("p",null,"Let's get operation ",(0,o.kt)("inlineCode",{parentName:"p"},"Preview")," as an example to demonstrate how the three parts cooperate in an actual operation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Operation Engine")," parses resources in operation intentions(Spec) and converts them into a DAG"),(0,o.kt)("li",{parentName:"ol"},"Walk this DAG:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Get the latest ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," from the actual infra by the ",(0,o.kt)("inlineCode",{parentName:"li"},"Runtime")),(0,o.kt)("li",{parentName:"ol"},"Get the last operation ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," storage medium"))),(0,o.kt)("li",{parentName:"ol"},"Merge/Diff three states: desired state described in Spec, live state from ",(0,o.kt)("inlineCode",{parentName:"li"},"Runtime")," and prior state from ",(0,o.kt)("inlineCode",{parentName:"li"},"State")," storage medium, and return the diff result to the console.")))}u.isMDXComponent=!0}}]);