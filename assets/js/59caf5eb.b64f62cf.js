"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={},r="Introduction to KusionStack",s={unversionedId:"user_docs/intro/kusion-intro",id:"user_docs/intro/kusion-intro",title:"Introduction to KusionStack",description:"What is KusionStack?",source:"@site/docs/user_docs/intro/kusion-intro.md",sourceDirName:"user_docs/intro",slug:"/user_docs/intro/kusion-intro",permalink:"/docs/user_docs/intro/kusion-intro",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/intro/kusion-intro.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663552708,formattedLastUpdatedAt:"9/19/2022",frontMatter:{},sidebar:"user_docs",previous:{title:"\u7b80\u4ecb",permalink:"/docs/user_docs/intro/"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/user_docs/getting-started/"}},l={},c=[{value:"What is KusionStack?",id:"what-is-kusionstack",level:2},{value:"Why use KusionStack?",id:"why-use-kusionstack",level:2},{value:"Composition of KusionStack",id:"composition-of-kusionstack",level:2},{value:"KusionStack core features",id:"kusionstack-core-features",level:2},{value:"Kusion vs. X",id:"kusion-vs-x",level:2},{value:"Development status",id:"development-status",level:2},{value:"Next step",id:"next-step",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-kusionstack"},"Introduction to KusionStack"),(0,o.kt)("h2",{id:"what-is-kusionstack"},"What is KusionStack?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KusionStack is an open-source cloud-native programmable technology stack!")),(0,o.kt)("p",null,"KusionStack is a highly flexible programmable technology stack to enable unified application delivery and operation, inspired by the word Fusion, which aims to help enterprises build an application-centric configuration management plane and DevOps ecosystem."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fusion of hybrid scenarios of ",(0,o.kt)("strong",{parentName:"li"},"private cloud"),", ",(0,o.kt)("strong",{parentName:"li"},"hybrid cloud"),", and ",(0,o.kt)("strong",{parentName:"li"},"multi-cloud")," "),(0,o.kt)("li",{parentName:"ol"},"Fusion of hybrid platform technologies of ",(0,o.kt)("strong",{parentName:"li"},"cloud-native")," and a variety of other platform technologies"),(0,o.kt)("li",{parentName:"ol"},"Fusion of enterprise-level demands of ",(0,o.kt)("strong",{parentName:"li"},"multi-project"),", ",(0,o.kt)("strong",{parentName:"li"},"multi-team"),", ",(0,o.kt)("strong",{parentName:"li"},"multi-role"),", ",(0,o.kt)("strong",{parentName:"li"},"multi-tenant"),", and ",(0,o.kt)("strong",{parentName:"li"},"multi-environment"))),(0,o.kt)("p",null,"Based on the concept of Platform as Code, developers can quickly unify the full configuration schemas, constraints, policies and configs across the application life cycle, work with the ",(0,o.kt)("strong",{parentName:"p"},"hybrid technologies and cloud environment"),", walk through the ",(0,o.kt)("strong",{parentName:"p"},"end-to-end workflow")," from programming to launch, and truly achieve ",(0,o.kt)("strong",{parentName:"p"},"write once, deliver anywhere"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(44549).Z,width:"1882",height:"742"})),(0,o.kt)("p",null,"KusionStack originated from the large-scale platform engineering practice within Ant Group and has been widely used in Ant Group's SaaS application delivery, computing and data infrastructure delivery, site construction, database operation and other operation scenarios, helping Ant Group to complete upgrades from the traditional operation model to the programmable and collaborative DevOps model."),(0,o.kt)("h2",{id:"why-use-kusionstack"},"Why use KusionStack?"),(0,o.kt)("p",null,"Cloud-native technology represented by Kubernetes is becoming the first-party technology for modern enterprises and cloud vendors and has formed a global community ecology. Kubernetes supports a final-state, data-oriented API definition mechanism, declarative, versioned, and resource-schema-oriented definition and extension mechanism, and a terminable and predictable server-side verification and simulation mechanism. These excellent designs naturally have consistent API access mechanisms, perfect resource definition and extension capabilities, and client-friendly verification and execution mechanisms, natively possessing the typical capabilities of traditional third-party API access technology. But from another point of view, modern applications will also rely on non-cloud-native PaaS and IaaS services for a long time, which makes the application delivery and operation in the enterprise rely on scattered and changing technologies and platforms, and complex and fragmented working interfaces and processes. In addition, Kubernetes is a platform for building platforms. For non-expert application developers, the technical complexity of Kubernetes itself and a growing number of resource-oriented user interfaces restrict the growth of a broader DevOps ecosystem openly and democratically within the enterprise. Finally, there is a lack of effective means on the platform side to open growing platform capabilities to application developers in a simple, unified and manageable manner, and reduce the cognitive burden of application developers through high app-oriented abstraction, enabling them to complete app delivery and operation in a self-service way."),(0,o.kt)("p",null,"At Ant Group, we have experienced all the above problems. We have built large-scale ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bare-metal_server"},"Bare Metal")," Kubernetes clusters, a large-scale service mesh system based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mosn/mosn"},"MOSN")," sidecar, but also relies heavily on PaaS services such as middleware and some IaaS cloud services. In the field of operation, we have made many attempts to adapt to scale, complexity and rapid changes, such as using cloud-native tools to improve the classic ops platforms, such as adopting the Kubernetes community's native YAML-based DevOps solution, but none of them can meet the needs of internal application-centric, high-efficiency, low-awareness, and taking into account the open, flexible, scalable, and portable large-scale delivery and operation requirements."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(49370).Z,width:"2852",height:"962"})),(0,o.kt)("p",null,"KusionStack fusions platform developers, application developers and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Site_reliability_engineering"},"SRE"),' with the platform engineering concept, through a one-stop technology stack targeting "modeling on platforms, compile to cloud". KusionStack enables the platform developers to open platform capabilities simply and flexibly, allowing application developers to design app-centric abstraction, reduce the cognitive burden on infrastructure, and at the same time give them sufficient flexibility. Overall, KusionStack, like other as-Code technologies, provides the convenience of ',(0,o.kt)("strong",{parentName:"p"},"versioned"),", ",(0,o.kt)("strong",{parentName:"p"},"auditable"),", ",(0,o.kt)("strong",{parentName:"p"},"reusable"),", ",(0,o.kt)("strong",{parentName:"p"},"replayable")," and ",(0,o.kt)("strong",{parentName:"p"},"sharable"),", and at the same time KusionStack is committed to building ",(0,o.kt)("strong",{parentName:"p"},"application-centric abstraction"),", ",(0,o.kt)("strong",{parentName:"p"},"consistent management tools and automation mechanisms")," and ",(0,o.kt)("strong",{parentName:"p"},"simpler end-to-end user experience and workflow"),", and hopes to approach the state:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fusion of ",(0,o.kt)("strong",{parentName:"li"},"platform technologies"),": Running on a variety of cloud-native and non-cloud-native technologies and services, the application operation life cycle is modeled and configured based on differentiated PaaS and IaaS APIs. And shipping with the container image, applications can be configured in one place and delivered anywhere."),(0,o.kt)("li",{parentName:"ul"},"Fusion of  ",(0,o.kt)("strong",{parentName:"li"},"multiple roles"),': Help the platform and application developers break the boundaries and move closer, through the engineering way of "platform developers produce the base models, and the application developers define their application model and configs", the division of labor and collaboration jointly form a DevOps system around application delivery.'),(0,o.kt)("li",{parentName:"ul"},"Fusion of ",(0,o.kt)("strong",{parentName:"li"},"workflow"),": For diverse operation scenarios, based on scalable project structure and programming support, the typical end-to-end workflow includes the development phase: manual or automatic code modification, testing, commit, PR submission and review; CI phase: integration testing and deployment verification; CD phase: runtime-oriented preview, apply, observation, etc."),(0,o.kt)("li",{parentName:"ul"},"Fusion of ",(0,o.kt)("strong",{parentName:"li"},"operation methods"),": Adopting platform-based CI, CD, and CDRA capabilities to form an end-to-end GitOps solution, and also provide toolchains, service APIs, and GUI products, which can be supplied on demand and used flexibly, taking into account the needs of internal private clouds, external hybrid clouds, and multi-cloud scenarios, gradually replace fragmented products with a set of cohesive solutions."),(0,o.kt)("li",{parentName:"ul"},"Fusion of ",(0,o.kt)("strong",{parentName:"li"},"technical concepts"),": Create more possibilities on diverse platform technologies for diverse roles through open operation concepts, culture and open source technologies.")),(0,o.kt)("h2",{id:"composition-of-kusionstack"},"Composition of KusionStack"),(0,o.kt)("p",null,"KusionStack fusions the platform and the application developers through the platform engineering concept, technology and workflow to achieve a balance between platform capability openness and application self-service operation efficiency. KusionStack builds a programmable, extensible, and portable technology stack based on language \u200b\u200band toolchains. Its core components include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/KCLVM"},"KCL"),": Configuration and policy programming language, protocols, toolchains and IDE plugins"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion"),": Operation engine, toolchains, service, IDE workspace and community technology integration suite"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig"},"Konfig"),": Shared repository of application models and base models, and CI suite for GitOps workflows (such as GitHub Actions suite)")),(0,o.kt)("p",null,"It can also be divided from the perspective of the language protocol layer, operation capability layer, and user interface layer, as shown in the following figure:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(28529).Z,width:"2790",height:"1124"})),(0,o.kt)("h2",{id:"kusionstack-core-features"},"KusionStack core features"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Flexible organization, modeling on demand")),(0,o.kt)("p",null,"KusionStack works in a pure client-side way, through the simple engineering way of directories and files, provides a scalable engineering structure based on ",(0,o.kt)("strong",{parentName:"p"},"project")," and ",(0,o.kt)("strong",{parentName:"p"},"stack")," design and supports flexible management of the on-demand organization. Developers can write ",(0,o.kt)("strong",{parentName:"p"},"configuration (config)"),", ",(0,o.kt)("strong",{parentName:"p"},"type (schema)"),", ",(0,o.kt)("strong",{parentName:"p"},"function (lambda)")," and ",(0,o.kt)("strong",{parentName:"p"},"policy (rule)"),' through the record and functional language KCL. KusionStack provides an out-of-the-box cloud-native application model, allowing users to quickly start the journey of cloud-native delivery. In addition, KusionStack is not limited to a single, fixed model or standard. Developers can write base models and application models through KCL\'s modular language features, which helps the platform side quickly reveal capabilities through "building blocks", and application developers can define application models as needed. Finally, KusionStack meets the multi-tenant and multi-environment configuration writing requirements in the enterprise through isolated configuration blocks with rich auto merging strategies. KusionStack helps enterprises flexibly respond to complex scenarios and rapid changes.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Write once, deliver anywhere")),(0,o.kt)("p",null,'KusionStack helps application developers centrally converge the full configuration around their application, and deliver the application to the private cloud, hybrid cloud, and multi-cloud environment through the simple method of "container image with KCL code". End users work with abstract application models, which are automatically interpreted by renders for different runtimes at different platforms and generate low-level resource models at compile time. At execution time, the Kusion engine applies and manages hybrid resources of various runtimes including Kubernetes and Terraform. The Kusion engine natively supports multi-cluster resource management and manages non-Kubernetes resources by integrating Terraform. Finally, KusionStack natively supports automation mechanisms such as command line execution, CI pipelines, service (to be open-source) APIs, and GUI product (to be open-source), and can meet any delivery needs through flexible automation solutions.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enterprise practice, ecological integration")),(0,o.kt)("p",null,"Relying on the accumulation of practice within Ant Group, KusionStack provides an end-to-end workflow from development to delivery on Platform APIs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Platform integration: Self-generate KCL schema code through the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kcl-openapi"},"KCL-OpenAPI")," tool"),(0,o.kt)("li",{parentName:"ol"},"Dev assistance: Rapid development and testing through KCL IDE plug-ins, lint, vet, compile, test tools"),(0,o.kt)("li",{parentName:"ol"},"CI pipelines: Accurate dependency analysis and automated integration test through KCL dep and test tools"),(0,o.kt)("li",{parentName:"ol"},"CD execution: Use the KusionCtl tool to implement authentication, RBAC permission configuration, and the workflow of preview, apply, observe, and destroy")),(0,o.kt)("p",null,"In addition, KCL provides CRUD APIs, multi-language SDK and a dynamic plugin expansion mechanism to meet the personalized automation needs in the enterprise. KusionStack will continue to improve the extensibility and integrate with more community technologies."),(0,o.kt)("h2",{id:"kusion-vs-x"},"Kusion vs. X"),(0,o.kt)("p",null,"KusionStack is a pure client-side programmable technology stack. Compared with other technologies, its characteristics can be summarized as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application-centric"),": Meet the abstraction and definition requirements of differentiated application models"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Pure client solution"),": Lightweight, extensible, flexible, and portable"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hybrid resources and cloud"),": Provides resource abstraction and management functions on multi-runtime and multi-cloud"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Highly automatable"),": Provide rich APIs, SDK, and extension mechanisms to meet the automation needs of developers and platforms")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(73812).Z,width:"2806",height:"1200"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. Terraform")),(0,o.kt)("p",null,"KusionStack is a cloud-native programmable technology stack, which aims to define an application-centric abstract interface and an end-to-end management mechanism."),(0,o.kt)("p",null,"KusionStack provides the ability to write configuration (config), type (schema), function (lambda), and policy (rule) as the core elements through the record and functional language KCL. KCL is a modern compiled static language. It adopts modern programming language design elements from Python and Golang, but does not have system functions such as native threads and IO. It can be applied in scenarios such as configuration, modeling, and policy with low noise and low side effects. And KCL is designed to provide cloud-native affinity language functions."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(45814).Z,width:"597",height:"576"})),(0,o.kt)("p",null,"KusionStack provides an operation engine and API layer that is completely decoupled from KCL, which is designed to work with hybrid resources. KusionStack has developed its resource management capabilities based on the Kubernetes API server, and supports 3-way diff-based preview, runtime dry-run and other necessary cloud-native management capabilities; for non-Kubernetes control planes (such as IaaS APIs) KusionStack integrates the Terraform toolchain to complete automated management, and treat Terraform as a resource runtime management engine."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(48149).Z,width:"551",height:"831"})),(0,o.kt)("p",null,"Terraform is a programmable operation product widely used in cloud resource delivery scenarios. It uses the code block written in the dynamic interpreted language HCL as the entry to interpret to drive the engine and provider framework. With its well-designed and unique API access mechanism, it reduces the difficulty of using imperative APIs of cloud vendors and provides a good declarative operation experience with a concise workflow."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. CD systems (eg KubeVela, ArgoCD)")),(0,o.kt)("p",null,"KusionStack is a client-side programmable technology stack. It provides management workflows for cloud-native and non-native resources through the Kusion engine and KusionCtl tools. Therefore, the Kusion engine can be regarded as a CD engine implementation in the push mode."),(0,o.kt)("p",null,"CD systems are usually sourced in some declarative format, and complete automated delivery and configuration drift reconciliation through Pull, Push, or a combination of the two. If you have adopted the CD system, KusionStack can be used with it, such as reconciling KCL definitions through ArgoCD, such as using KusionCtl with KubeVela, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. Helm")),(0,o.kt)("p",null,"KusionStack is a client-side programmable technology stack, which aims to define an application-oriented configuration interface through rich language-level programming abstraction capabilities and automated integration mechanisms and to apply and manage through the engine and toolchains."),(0,o.kt)("p",null,"The concept of Helm originates from the package management mechanism of the operating system. It is a package management tool based on templated YAML files and supports the execution and management of resources in the package. KusionStack naturally provides a superset of Helm capabilities, You can use KusionStack directly as an alternative. For users who have adopted Helm, the stack compilation results in KusionStack can be packaged and used in Helm format."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. OAM")),(0,o.kt)("p",null,"KusionStack is a client-side programmable technology stack, which includes an out-of-the-box cloud-native application model based on OCI and other specifications. Developers can also design and implement differentiated cloud-native application models according to their own needs easily."),(0,o.kt)("p",null,"OAM is an open-source open application model specification. It is mainly used in the cloud-native CD control plane KubeVela. It is usually implemented by cloud-native technology CRD and operator and supports any custom resource as a payload. KusionStack can also become technical to implement the OAM model on the client and use it with the KubeVela control plane."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. CrossPlane")),(0,o.kt)("p",null,"KusionStack is a client-side programmable technology stack that provides management functions for hybrid resources through Kusion Engine, which natively provides abstraction and management functions for Kubernetes API Server, and also supports non-Kubernetes services by integrating the Terraform toolchain, and provides unified resource abstraction with orchestration and management capabilities."),(0,o.kt)("p",null,"CrossPlane is an open-source cloud-native control plane framework. Based on the Kubernetes API extension mechanism, it connects imperative APIs into the Kubernetes API extension system in a unified paradigm and technical way and redefines and reconciles them in the native Kubernetes API Server mode. In contrast, KusionStack adopts the client-side approach in terms of API access and manages non-cloud-native resources by reusing Terraform capabilities, without forcing the redefinition within the Kubernetes API layer. Thanks to KusionStack's native support for work with the Kubernetes API, KusionStack works seamlessly with CrossPlane."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. Kubernetes")),(0,o.kt)("p",null,"KusionStack is a client-side programmable technology stack, which aims to provide ",(0,o.kt)("strong",{parentName:"p"},"abstract"),", ",(0,o.kt)("strong",{parentName:"p"},"management")," methods and better ",(0,o.kt)("strong",{parentName:"p"},"user experience")," and ",(0,o.kt)("strong",{parentName:"p"},"workflow")," for various operational needs. KusionStack is used to programmatically and flexibly define and manage application delivery."),(0,o.kt)("p",null,'Kubernetes is a container scheduling and management runtime widely used around the world, an "operating system" for containers, and a platform for building platforms. On the Kubernetes API layer, KusionStack provides capabilities to help developers complete application delivery and operation more easily:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KCL: backward compatible with YAML specification, YAML can be used as a downstream static data format"),(0,o.kt)("li",{parentName:"ul"},"KCL-OpenAPI tool: Native OpenAPI, CRD specification support, support for automatic generation of KCL schema code"),(0,o.kt)("li",{parentName:"ul"},"Konfig repository: Provides base models based on Kubernetes, Prometheus and other cloud-native technologies, and also an out-of-the-box application model"),(0,o.kt)("li",{parentName:"ul"},"Kusion: Provide Kubernetes-oriented login, RABC, sensitive information management, 3-way preview, apply, observe, destroy, etc")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. App PaaS")),(0,o.kt)("p",null,"Compared with application deployment and operation products or platforms, KusionStack is a client-side programmable technology stack, which provides technical components, automated support and recommended workflows. Based on solid practices within Ant Group, it can meet the demands of the enterprise-level application operation. KusionStack can be used as the basis of the application PaaS, in which the Konfig repository can become its programmable interface, operation business layer and external workspace."),(0,o.kt)("h2",{id:"development-status"},"Development status"),(0,o.kt)("p",null,"KusionStack is in the early days of open source, you can see the releases of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/releases"},"Kusion")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/releases"},"KCLVM")," here version, you can also join us via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/community"},"Community"),"."),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install/kusionup"},"Install using KusionCtl")),(0,o.kt)("li",{parentName:"ul"},"Learn about ",(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/concepts/project-stack"},"core concepts")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/concepts/arch"},"technical architecture"))))}d.isMDXComponent=!0},45814:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kcl-79d6584aff8f7dcf814ba187f3d276ef.png"},28529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-arch-88d410718999fd4cc9e4f9660eb02b14.png"},48149:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-engine-15507656c4346ff89fe9351f46deda2d.png"},44549:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-stack-0-39b9a2963395bd1493b58f715a5047d0.png"},49370:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-stack-1-204845c7b75b56c2e39acf57b2554c33.png"},73812:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-vs-x-c958aba32f7e11ea7248810312be3a5b.png"}}]);