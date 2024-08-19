"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"overview"},i="Overview",p={unversionedId:"concepts/overview",id:"concepts/overview",title:"Overview",description:"In this article, we will provide an overview of the core concepts of Kusion from the perspective of the Kusion workflow.",source:"@site/docs/kusion/3-concepts/0-overview.md",sourceDirName:"3-concepts",slug:"/concepts/overview",permalink:"/docs/next/concepts/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/0-overview.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1724060961,formattedLastUpdatedAt:"Aug 19, 2024",sidebarPosition:0,frontMatter:{id:"overview"},sidebar:"kusion",previous:{title:"Run Your First App on Kubernetes with Kusion",permalink:"/docs/next/getting-started/deliver-quickstart"},next:{title:"Overview",permalink:"/docs/next/concepts/project/overview"}},s={},c=[],l={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In this article, we will provide an overview of the core concepts of Kusion from the perspective of the Kusion workflow. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kusion workflow",src:n(16793).Z,width:"5644",height:"1816"})),(0,o.kt)("p",null,"The workflow of Kusion is illustrated in the diagram above, which consists of three steps. "),(0,o.kt)("p",null,"The first step is ",(0,o.kt)("strong",{parentName:"p"},"Write"),", where the platform engineers build the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts/module/overview"},"Kusion Modules")," and initialize a ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts/workspace"},"Workspace"),". And the application developers declare their operational intent in ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts/app-configuration"},"AppConfiguration")," under a specific ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts/project/overview"},"Project")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts/stack/overview"},"Stack")," path. "),(0,o.kt)("p",null,"The second step is the ",(0,o.kt)("strong",{parentName:"p"},"Build")," process, which results in the creation of the ",(0,o.kt)("strong",{parentName:"p"},"SSoT")," (Single Source of Truth), also known as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts/spec"},"Spec")," of the current operational task. If you need version management of the SSoT, we recommend you manage the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," with a VCS (Version Control System) tool like ",(0,o.kt)("strong",{parentName:"p"},"Git"),". "),(0,o.kt)("p",null,"The third step is ",(0,o.kt)("strong",{parentName:"p"},"Apply"),", which makes the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," effective. Kusion parses the operational intent based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec")," produced in the previous step. Before applying the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec"),", Kusion will execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"Preview")," command (you can also execute this command manually) which will use a three-way diff algorithm to preview changes and prompt users to make sure all changes meet their expectations. And the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apply")," command will then actualize the operation intent onto various infrastructure platforms, currently supporting ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes"),", ",(0,o.kt)("strong",{parentName:"p"},"Terraform"),", and ",(0,o.kt)("strong",{parentName:"p"},"On-Prem")," infrastructures. A ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts/release"},"Release")," file will be created in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/concepts/backend"},"Storage Backend")," to record an operation. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Destroy")," command will delete the resources recorded in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Release")," file of a project in a specific workspace. "),(0,o.kt)("p",null,"A more detailed demonstration of the Kusion engine can be seen below. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kusion engine",src:n(32923).Z,width:"2284",height:"2084"})))}u.isMDXComponent=!0},32923:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kusion_engine-b390af62281c096c7a4755984639b5a6.png"},16793:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kusion_workflow-f829510962d48bea9e6a658987ab90ed.png"}}]);