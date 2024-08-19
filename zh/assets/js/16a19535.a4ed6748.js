"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,h=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={id:"app-configuration",sidebar_label:"AppConfiguration"},r="AppConfiguration",l={unversionedId:"concepts/app-configuration",id:"version-v0.10/concepts/app-configuration",title:"AppConfiguration",description:"As a modern cloud-native application delivery toolchain, declarative intent-based actuation is the central idea of Kusion, and AppConfiguration model plays the role of describing the intent, which provides a simpler path for on-boarding developers to the platform without leaking low level details in runtime infrastructure and allows developers to fully focus on the application logic itself.",source:"@site/docs_versioned_docs/version-v0.10/3-concepts/5-appconfiguration.md",sourceDirName:"3-concepts",slug:"/concepts/app-configuration",permalink:"/zh/docs/v0.10/concepts/app-configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/3-concepts/5-appconfiguration.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1724060961,formattedLastUpdatedAt:"2024\u5e748\u670819\u65e5",sidebarPosition:5,frontMatter:{id:"app-configuration",sidebar_label:"AppConfiguration"},sidebar:"kusion",previous:{title:"Workspace",permalink:"/zh/docs/v0.10/concepts/workspace"},next:{title:"Intent",permalink:"/zh/docs/v0.10/concepts/intent"}},s={},p=[{value:"Component",id:"component",level:4},{value:"Pipeline",id:"pipeline",level:4},{value:"Topologies",id:"topologies",level:4},{value:"PolicySets",id:"policysets",level:4},{value:"Dependency",id:"dependency",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"appconfiguration"},"AppConfiguration"),(0,i.kt)("p",null,"As a modern cloud-native application delivery toolchain, declarative intent-based actuation is the central idea of Kusion, and ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model plays the role of describing the intent, which provides a simpler path for on-boarding developers to the platform without leaking low level details in runtime infrastructure and allows developers to fully focus on the application logic itself."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model consolidates all the necessary components and their dependent accessories for the application deployment, along with any workflow, policy and operational requirements into one standardized, infrastructure-independent declarative specification. This declarative specification represents the intuitive user intent for the application, which drives a standardized and efficient application delivery and operation process in a hybrid environment."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"appconfig.png",src:n(57091).Z,width:"5512",height:"3390"})),(0,i.kt)("p",null,"AppConfiguration consists of five core concepts, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"Components"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Topologies"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Pipeline"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicySets"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Dependency"),". We will walk through these concepts one by one."),(0,i.kt)("h4",{id:"component"},"Component"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Components")," defines the foundation of any application configuration. Generally speaking, we believe that a comprehensive application description should at least consist of a core deployable workload that is frequently iterated and a collection of any other core services that the workload depends on, such as databases, caches or any other cloud services."),(0,i.kt)("p",null,"Components are conceptually split into two categories, ",(0,i.kt)("inlineCode",{parentName:"p"},"Workload")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Accessories"),". The former revolves around the configuration for the computing resource. The latter represents any third-party runtime capabilities and operational requirements that the application needs. Each AppConfiguration consists of exactly one workload and any number of accessories."),(0,i.kt)("p",null,"Simply put, we can define ",(0,i.kt)("inlineCode",{parentName:"p"},"Components")," with the following expression:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Components = Workload + Accessories")),(0,i.kt)("p",null,"The concept of ",(0,i.kt)("inlineCode",{parentName:"p"},"Components")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Accessories")," itself is implicit when ",(0,i.kt)("a",{parentName:"p",href:"../configuration-walkthrough/overview"},"authoring the configuration files"),". You can define the workload and any type of accessories (such as database or monitoring) directly under the AppConfiguration model."),(0,i.kt)("p",null,"From a collaboration perspective, platform developers and SREs are responsible for continuously adding any new schema (as abstractions for the underlying infrastructure) and implementations that can be used out-of-the-box. Application developers SREs should be able to leverage the corresponding schemas to cover the evolving application needs. This helps software organizations achieve separation of concern, so that different roles can focus on the subject matter they are an expert of."),(0,i.kt)("h4",{id:"pipeline"},"Pipeline"),(0,i.kt)("p",null,"In most of the cases, the platform is capable of providing a consistent application delivery process that can meet most application needs. In the case that an application warrants any customization in the delivery workflow, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pipeline")," section in AppConfiguration provides an approach to extend the workflow as needed. "),(0,i.kt)("p",null,"A typical delivery workflow is made of several stages, each corresponds to some logic that needs to be executed, such as manual approval, data transfer, coordinated multi-cluster release, notification, etc. Implementation-wise, the execution of each stage should be carried out with a plugin, developed and managed by the platform owners."),(0,i.kt)("h4",{id:"topologies"},"Topologies"),(0,i.kt)("p",null,"In reality, what we have observed for production-grade applications is that they usually need to be deployed to a wide range of different targets including different clouds, regions, availability zones or runtimes for availability/cost/regulation/performance or disaster recovery related reasons. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Topologies")," section in AppConfiguration highlights the different deployment targets in the application delivery and provides a single pane of glass that overlooks the entire deployment topology."),(0,i.kt)("h4",{id:"policysets"},"PolicySets"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicySets")," section is responsible for defining the set of rules and procedures that should be followed in the application delivery process. They generally represent the guidelines with the purpose of minimizing any technical, security or compliance risks. Some examples include release strategies, risk management policies, and self-healing strategies. The collections of policies are expected to be managed as a joint effort from all the stakeholders, including platform owners, infrastructure owners, and security and compliance stakeholders. Some policy sets (usually security and compliance related) are expected to be mandatory. Some can be switched on and off by the application owner (self-healing strategy for instance) depending on their specific needs."),(0,i.kt)("h4",{id:"dependency"},"Dependency"),(0,i.kt)("p",null,"In a production-scale environment, there are usually intricate dependencies between multiple applications. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Dependency")," section is responsible for describing the dependencies between multiple applications."))}d.isMDXComponent=!0},57091:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/appconfig-04e20b2e12ca7d5c3bc3992b2d602416.png"}}]);