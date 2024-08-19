"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[10155],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={sidebar_position:4,sidebar_label:"AppConfiguration"},r="Declarative Application Configuration Model - AppConfiguration",s={unversionedId:"concepts/appconfiguration",id:"version-v0.9/concepts/appconfiguration",title:"Declarative Application Configuration Model - AppConfiguration",description:"Abstract",source:"@site/docs_versioned_docs/version-v0.9/concepts/appconfiguration.md",sourceDirName:"concepts",slug:"/concepts/appconfiguration",permalink:"/zh/docs/v0.9/concepts/appconfiguration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/concepts/appconfiguration.md",tags:[],version:"v0.9",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1724060961,formattedLastUpdatedAt:"2024\u5e748\u670819\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"AppConfiguration"},sidebar:"kusion",previous:{title:"How Kusion Works",permalink:"/zh/docs/v0.9/concepts/kusion"},next:{title:"Intent",permalink:"/zh/docs/v0.9/concepts/intent"}},l={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Design",id:"design",level:2},{value:"Core Principles",id:"core-principles",level:3},{value:"Developer First",id:"developer-first",level:4},{value:"Application-Centric",id:"application-centric",level:4},{value:"Platform Agnostic",id:"platform-agnostic",level:4},{value:"Model Architecture",id:"model-architecture",level:3},{value:"Core Concepts",id:"core-concepts",level:3},{value:"Component",id:"component",level:4},{value:"Pipeline",id:"pipeline",level:4},{value:"Topologies",id:"topologies",level:4},{value:"PolicySets",id:"policysets",level:4},{value:"Dependency",id:"dependency",level:4},{value:"References",id:"references",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"declarative-application-configuration-model---appconfiguration"},"Declarative Application Configuration Model - AppConfiguration"),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"Kusion consumes the declarative configuration that describes the application, and delivers intent to the target runtime including Kubernetes, clouds, or on-prem infrastructure. In order to do that, we need a declarative model that can best describe the intent for a given application."),(0,i.kt)("p",null,"This design document elaborates on the core design considerations and a high-level architecture of the next-generation declarative application configuration model. The AppConfiguration model is expected to continuously iterate over time, with the purpose to better encapsulate the application configuration needs declaratively in its full lifecycle and reduce cognitive complexity as much as possible for the developers."),(0,i.kt)("p",null,"AppConfiguration consists of multiple elements that each represents a significant portion in the application lifecycle, either the application workload itself, its dependencies, relevant deployment workflows or operational expectations."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"In AntGroup, we have heavily invested in the efforts to enable application delivery on a massive scale. What we have observed in the past few years is a trend of continuous evolution of infrastructure complexity over time, as a result of the increasing business needs."),(0,i.kt)("p",null,"We are motivated to find a new paradigm that highlights collaborations between different parts of the software organizations and enables self-service ability as much as possible to get to a mature level of standardization and efficiency in application delivery."),(0,i.kt)("p",null,"The centerpiece of this paradigm is a consistent, comprehensive and declarative application model that captures the application needs in an intuitive and self-explanatory way."),(0,i.kt)("p",null,"This paradigm will also require a core workflow that KusionStack advocates, an effort of retrofitting that workflow based on different organizational needs, a golden path that represents industry best practices, and a shift in organizational culture. We won't go into those details in this document."),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("h3",{id:"core-principles"},"Core Principles"),(0,i.kt)("h4",{id:"developer-first"},"Developer First"),(0,i.kt)("p",null,"The AppConfiguration model serves as the interface for the application developers. The model design should favor the perspective of application developers, rather than platform or infrastructure developers. The primary purpose of a unified and abstract application delivery model is to be able to define an application with concepts and semantics that are intuitive and easy for developers to understand, without the need for any advanced knowledge on infrastructure. The goal is to reduce the cognitive burden of application developers by hiding the increasing complexity of the underlying infrastructure, be it different clouds, runtimes, or product offerings."),(0,i.kt)("p",null,'Developers should be able to describe an application as simple as "I want a database of type X and version Y to go along my application".'),(0,i.kt)("h4",{id:"application-centric"},"Application-Centric"),(0,i.kt)("p",null,"In practice, the end-to-end delivery of a production-grade application typically involves more than provisioning the computing resource and bootstrapping the workload. It also includes managing a variety of dependent resources the application workload depends on, such as networking, storage, database, middleware, monitoring and alerting, etc."),(0,i.kt)("p",null,"AppConfiguration proposes an application-centric approach, where the dependencies of an application can be kept together along with any operational (Day2) expectations. Everything the application needs to be production-available is captured inside a single, declarative source of truth centered around the AppConfiguration model. AppConfiguration should serve as the consistent and comprehensive abstraction of the application needs through its entire lifecycle."),(0,i.kt)("h4",{id:"platform-agnostic"},"Platform Agnostic"),(0,i.kt)("p",null,"AppConfiguration should avoid locking into any specific tooling, technology stack or infrastructure providers. Kusion is built with the philosophy that benefits from an open and diverse ecosystem, where any infrastructure provider can be included in the form of plugins."),(0,i.kt)("p",null,'The design of AppConfiguration should emphasize separation of concern between the roles that write application business logic and those that manage platform level configurations. In the context of using public cloud, the AppConfiguration model should support multi-cloud deployment out-of-the-box. The configurations should be "Write Once Deploy Everywhere".'),(0,i.kt)("h3",{id:"model-architecture"},"Model Architecture"),(0,i.kt)("p",null,"The AppConfiguration model consolidates all the necessary components and their dependent accessories for the application deployment, along with any workflow, policy and operational requirements into one standardized, infrastructure-independent declarative specification. This declarative specification represents the intuitive user intent for the application, which drives a standardized and efficient application delivery and operation process in a hybrid environment. This enables application developers the ability to self-service based on concepts and semantics that are intuitive and self-explanatory."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"appconfig.png",src:n(57091).Z,width:"5512",height:"3390"})),(0,i.kt)("p",null,"AppConfiguration consists of five core concepts, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"Components"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Topologies"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Pipeline"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicySets"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Dependency"),". We will walk through these concepts one by one."),(0,i.kt)("h3",{id:"core-concepts"},"Core Concepts"),(0,i.kt)("h4",{id:"component"},"Component"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Components")," defines the foundation of any application configuration. Generally speaking, we believe that a comprehensive application description should at least consist of a core deployable workload that is frequently iterated and a collection of any other core services that the workload depends on, such as databases, caches or any other cloud services."),(0,i.kt)("p",null,"Components are conceptually split into two categories, ",(0,i.kt)("inlineCode",{parentName:"p"},"Workload")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Accessories"),". The former revolves around the configuration for the computing resource. The latter represents any third-party runtime capabilities and operational requirements that the application needs. Each AppConfiguration consists of exactly one workload and any number of accessories."),(0,i.kt)("p",null,"Simply put, we can define ",(0,i.kt)("inlineCode",{parentName:"p"},"Components")," with the following expression:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Components = Workload + Accessories")),(0,i.kt)("p",null,"The concept of ",(0,i.kt)("inlineCode",{parentName:"p"},"Components")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Accessories")," itself is implicit when ",(0,i.kt)("a",{parentName:"p",href:"../config-walkthrough/overview"},"authoring the configuration files"),". You can define the workload and any type of accessories (such as database or monitoring) directly under the AppConfiguration model."),(0,i.kt)("p",null,"From a collaboration perspective, platform developers and SREs are responsible for continuously adding any new schema (as abstractions for the underlying infrastructure) and implementations that can be used out-of-the-box. Application developers SREs should be able to leverage the corresponding schemas to cover the evolving application needs. This helps software organizations achieve separation of concern, so that different roles can focus on the subject matter they are an expert of."),(0,i.kt)("h4",{id:"pipeline"},"Pipeline"),(0,i.kt)("p",null,"In most of the cases, the platform is capable of providing a consistent application delivery process that can meet most application needs. In the case that an application warrants any customization in the delivery workflow, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pipeline")," section in AppConfiguration provides an approach to extend the workflow as needed. "),(0,i.kt)("p",null,"A typical delivery workflow is made of several stages, each corresponds to some logic that needs to be executed, such as manual approval, data transfer, coordinated multi-cluster release, notification, etc. Implementation-wise, the execution of each stage should be carried out with a plugin, developed and managed by the platform owners."),(0,i.kt)("h4",{id:"topologies"},"Topologies"),(0,i.kt)("p",null,"In reality, what we have observed for production-grade applications is that they usually need to be deployed to a wide range of different targets including different clouds, regions, availability zones or runtimes for availability/cost/regulation/performance or disaster recovery related reasons. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Topologies")," section in AppConfiguration highlights the different deployment targets in the application delivery and provides a single pane of glass that overlooks the entire deployment topology."),(0,i.kt)("h4",{id:"policysets"},"PolicySets"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicySets")," section is responsible for defining the set of rules and procedures that should be followed in the application delivery process. They generally represent the guidelines with the purpose of minimizing any technical, security or compliance risks. Some of examples include release strategies, risk management policies, and self-healing strategies. The collections of policies are expected to be managed as a joint effort from all the stakeholders, including platform owners, infrastructure owners, and security and compliance stakeholders. Some policy sets (usually security and compliance related) are expected to be mandatory. Some can be switched on and off by the application owner (self-healing strategy for instance) depending on their specific needs."),(0,i.kt)("h4",{id:"dependency"},"Dependency"),(0,i.kt)("p",null,"In a production-scale environment, there are usually intricate dependencies between multiple applications. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Dependency")," section is responsible for describing the dependencies between multiple applications."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Score - ",(0,i.kt)("a",{parentName:"li",href:"https://docs.score.dev/docs/overview/"},"https://docs.score.dev/docs/overview/")),(0,i.kt)("li",{parentName:"ol"},"Acornfile - ",(0,i.kt)("a",{parentName:"li",href:"https://docs.acorn.io/authoring/overview"},"https://docs.acorn.io/authoring/overview")),(0,i.kt)("li",{parentName:"ol"},"KubeVela - ",(0,i.kt)("a",{parentName:"li",href:"https://kubevela.io/docs/getting-started/core-concept"},"https://kubevela.io/docs/getting-started/core-concept"))))}d.isMDXComponent=!0},57091:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/appconfig-04e20b2e12ca7d5c3bc3992b2d602416.png"}}]);