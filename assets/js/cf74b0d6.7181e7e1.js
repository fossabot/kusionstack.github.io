"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},14546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={slug:"2022-lean-from-scale-practice",title:"What We Learned From Large-scale Platform Engineering Practices",authors:{name:"Xiaodong, Duo",title:"Kusion Creator"},tags:["KusionStack","Kusion","Large-scale","Platform Engineering"]},r=void 0,s={permalink:"/blog/2022-lean-from-scale-practice",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/blog/2022-09-16-learn-from-scale-practice/index.md",source:"@site/blog/2022-09-16-learn-from-scale-practice/index.md",title:"What We Learned From Large-scale Platform Engineering Practices",description:"Abstraction: This paper attempts to talk about the challenges and best practices in the process of large-scale platform engineering from the perspectives of engineering, programing language, divide-and-conquer, modeling, automation, and collaborative culture. Hopefully by sharing the concepts and practices of our platform engineering with more companies and teams, we can make some interesting changes happen together.",date:"2022-09-16T00:00:00.000Z",formattedDate:"September 16, 2022",tags:[{label:"KusionStack",permalink:"/blog/tags/kusion-stack"},{label:"Kusion",permalink:"/blog/tags/kusion"},{label:"Large-scale",permalink:"/blog/tags/large-scale"},{label:"Platform Engineering",permalink:"/blog/tags/platform-engineering"}],readingTime:17.75,truncated:!1,authors:[{name:"Xiaodong, Duo",title:"Kusion Creator"}],frontMatter:{slug:"2022-lean-from-scale-practice",title:"What We Learned From Large-scale Platform Engineering Practices",authors:{name:"Xiaodong, Duo",title:"Kusion Creator"},tags:["KusionStack","Kusion","Large-scale","Platform Engineering"]},prevItem:{title:"KusionStack Origin, present and future",permalink:"/blog/2022-origin-present-and-future"},nextItem:{title:"KusionStack \u5f00\u6e90\u6709\u611f",permalink:"/blog/2022-sense-of-open-day"}},l={authorsImageUrls:[void 0]},c=[{value:"1. Platform Engineering: Making Enterprise DevOps Happen",id:"1-platform-engineering-making-enterprise-devops-happen",level:2},{value:"2. Domain Language: A Pole of the Engineering Thought",id:"2-domain-language-a-pole-of-the-engineering-thought",level:2},{value:"3. Divide and Conquer: Deconstructing the Scaling Problem",id:"3-divide-and-conquer-deconstructing-the-scaling-problem",level:2},{value:"4. Modeling: Marginal Revenue and the Long Tail",id:"4-modeling-marginal-revenue-and-the-long-tail",level:2},{value:"5. Automation: New Challenges",id:"5-automation-new-challenges",level:2},{value:"6. Collaborative Culture: A More Important Thing",id:"6-collaborative-culture-a-more-important-thing",level:2},{value:"7. Summary",id:"7-summary",level:2},{value:"8. Reference",id:"8-reference",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Abstraction:")," This paper attempts to talk about the challenges and best practices in the process of large-scale platform engineering from the perspectives of engineering, programing language, divide-and-conquer, modeling, automation, and collaborative culture. Hopefully by sharing the concepts and practices of our platform engineering with more companies and teams, we can make some interesting changes happen together."),(0,o.kt)("p",null,"This article is based on the platform engineering and automation practice of ",(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/user_docs/intro/kusion-intro"},"KusionStack")," in Ant Group."),(0,o.kt)("h2",{id:"1-platform-engineering-making-enterprise-devops-happen"},"1. Platform Engineering: Making Enterprise DevOps Happen"),(0,o.kt)("p",null,"The concept of DevOps was proposed more than 10 years ago. From KVM to container to the cloud-native era, a large number of enterprises have invested in the DevOps wave to solve the dilemma of internal large-scale operation efficiency and platform construction efficiency. Most of them have fallen into some kind of Anti-Pattern based on an inappropriate understanding of DevOps, while some companies have explored their golden paths. I have experienced Anti-Patterns as shown in the figure below, where the Dev and Ops teams go their separate ways, or simply force the Dev team to handle Ops work independently. More typical classifications can be found ",(0,o.kt)("a",{parentName:"p",href:"https://web.devopstopologies.com/#anti-types"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(75606).Z,width:"988",height:"410"})),(0,o.kt)("p",null,"There are various reasons for difficulties achieving DevOps at scale within the enterprise, especially for companies that maintain their infrastructure within the enterprise while adopting technology platforms on the cloud. Among which, the following situations are quite common:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The dev team and the ops team are often isolated at work and cannot reach a consensus due to team silos, lack of leaders\u2019 insight, etc."),(0,o.kt)("li",{parentName:"ul"},"The dev team leaders underestimate the professionalism, complexity and rapid changes of platform and infrastructure technology, operation and reliability work so that they push application developers to become experts with a simple DevOps understanding"),(0,o.kt)("li",{parentName:"ul"},"The leaders established a DevOps team, but became just middle executors, failing to make the Dev and Ops teams move forward and work closely together"),(0,o.kt)("li",{parentName:"ul"},"The platform dev team responds insufficiently to the business complexity due to the scale as well as the tech complexity as a result of technological evolution, thus cannot provide effective support to application developers"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"Unlike small teams working on cloud-hosted Infra services and DevOps-as-a-Service products, medium and large enterprises often need to establish an appropriate DevOps system based on their team structure and culture. Judging from the successful cases, whether Meta fully assumes the Ops function by Dev, or Google introduces the SRE team as the middle layer, ",(0,o.kt)("a",{parentName:"p",href:"https://platformengineering.org/blog/what-is-platform-engineering"},"Platform Engineering")," plays a very important role. Platform engineering aims to help enterprises build a self-service operation system for application developers, and try to solve the following key problems through engineering tech means and workflows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Design a reasonable abstraction to help application developers reduce the cognitive burden on the delivery, operation, and reliability based on Infra, platform and other technologies"),(0,o.kt)("li",{parentName:"ul"},"Provide application developers with a unified working interface and space to avoid falling into fragmented product interfaces and complex workflows"),(0,o.kt)("li",{parentName:"ul"},"Help developers carry out work quickly based on ",(0,o.kt)("a",{parentName:"li",href:"https://internaldeveloperplatform.org/what-is-an-internal-developer-platform/"},"internal engineering platform")," through effective workflow and recommended path"),(0,o.kt)("li",{parentName:"ul"},"Help developers manage the application life cycle through self-service CI, CD, CDRA products"),(0,o.kt)("li",{parentName:"ul"},"Help the platform dev team to open fundamental platform capabilities in a simple, efficient and consistent manner"),(0,o.kt)("li",{parentName:"ul"},"Create a culture of collaboration and sharing through training, evangelism, operations, etc.")),(0,o.kt)("p",null,"The fact is that not everyone should or can be an expert in this field, and it's pretty difficult. Even the experts of the platform technology team are usually only good at their professional fields, especially in today's wide adoption of cloud-native concepts and technologies, hundreds of thousands of application configurations brought by a large number of highly open and configurable platform technologies, the business complexity of the PaaS field, and the high stability and governance requirements, and the purpose of platform engineering is to allow application developers to participate in such large-scale DevOps work as easily and painlessly as possible. In Ant Group's practice, we tend to the following cooperative state, which is closer to Google's best practices in team structure and work mode. Platform developers and SREs become \"Enablers\" to support application developers to complete dev, delivery and operation in self-service. At the same time, the work results of application developers making applications deliverable and operational also become the basis for the ops team to handle application ops work. The SRE, application dev, and ops team periodically feedback the problems and pain points in the work process to the platform dev team to form a positive cycle."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(485).Z,width:"694",height:"666"})),(0,o.kt)("h2",{id:"2-domain-language-a-pole-of-the-engineering-thought"},"2. Domain Language: A Pole of the Engineering Thought"),(0,o.kt)("p",null,"Compared with a domain language there's no better way for open, self-service, domain-oriented business problem definitions, as well as meeting the enterprise's internal requirements of automation, low-security-risk, low noise, and easy governance. Just as there are staves for recording music, and time-series databases for storing time-series data, within the problem domain of platform engineering, a set of configuration and policy languages \u200b\u200bare created to write and manage configurations and policies at scale. Different from high-level general-purpose languages \u200b\u200bwith mixed paradigms and engineering capabilities, the core logic of such domain languages \u200b\u200bis to solve the near-infinite variation and complexity of domain problems with a convergent and limited set of syntax and semantics, and to precipitate the ideas and methods of large-scale complex configuration and policies writing into language features."),(0,o.kt)("p",null,"In the platform engineering practice of Ant Group, we have strengthened the client-side working mode. We write and maintain the models, orchestration, constraints and policies around the application ops life cycle in the shared codebase ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")," through the record and functional language ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM"},"KCL"),". KCL is a static and strongly typed language for application developers with programming ability, providing the writing experience of a modern high-level language with limited functionality around domain purposes. Under such practices, KCL is not a language just for writing K-V pairs, but a language for platform engineering development. Application developers, SREs, and platform developers conduct collaborative dev based on Konfig. They write configurations, and ",(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#schema"},"schema")," abstractions, ",(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#function"},"functions"),", ",(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#validation"},"constraints")," and ",(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#rule"},"rules")," which are frequent and complex in the PaaS field through KCL native functions, that is, write stable and scalable business models, business logic, error-proofing constraints, and environmental rules. The Konfig repository becomes a unified programming interface, workspace and business layer, while the KCL-oriented secure, low-noise, low-side effect and unified writing paradigm are more conducive to long-term management and governance."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(18565).Z,width:"1500",height:"910"})),(0,o.kt)("h2",{id:"3-divide-and-conquer-deconstructing-the-scaling-problem"},"3. Divide and Conquer: Deconstructing the Scaling Problem"),(0,o.kt)("p",null,"The idea of \u200b\u200bdivide and conquer is the key to solving the problem of scale, whose efficiency is reflected from MapReduce to Kubernetes. In the field of large-scale delivery and operation, the classic operation platform tries to use the built-in unified model, orchestration, and provision technology in a black-box product to deal with full-scale business scenarios. Such a practice can be started easily and quickly and turns out to be effective on a small scale. However, as the adoption rate of different business groups increases and different requirements are put forward, it gradually enters into a state of fatigue with the constantly growing platform technology."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(35441).Z,width:"1500",height:"901"})),(0,o.kt)("p",null,"In Ant Group's practice, Konfig monorepo is the programming workspace opened by the internal engineering platform to developers, helping application developers to write configurations and policies around the application operation life cycle with a unified programming interface and tech stack, to integrate with existing and future platform and infrastructure, to create and manage cloud-native environments and RBAC-based permissions on demand, and to manage the delivery workflow through GitOps. Konfig monorepo provides an independent white-box programming space for different scenarios, projects and applications, whose intrinsic scalability comes from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flexible, scalable, independent client-side ",(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/user_docs/concepts/project-stack"},"engineering structure design")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#-operators-1"},"automatic merging")," technology of isolated config blocks supports the arbitrary and scalable organization of config blocks"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#type-system"},"Static type system")," technology provides reusable and scalable type-based modeling and constraints in a modern programming language manner"),(0,o.kt)("li",{parentName:"ul"},"Project-grained Gitops CI workflow definition support (add a link?)"),(0,o.kt)("li",{parentName:"ul"},"Provision technology selection based on Kusion engine (add a link?)")),(0,o.kt)("p",null,"Konfig monorepo provides divide-and-conquer, composable engineering structure design, code organization, modeling, workflow and provision tech selection support, meanwhile, it carries scalable business requirements with a consistent development model and workflow. The client-side working method ensures flexibility, scalability, and portability while reducing the pressure on server-side extension mechanisms, such as Kubernetes API Machinery, to continue to grow."),(0,o.kt)("p",null,"The following figure illustrates a typical automated workflow with a Gitops approach in the Konfig monorepo, starting from application-oriented code changes and reaching the runtime through configurable CI and CD processes. This mechanism is compared to centralized black-box products. The method is much more open, customizable, and extensible, and it also eliminates the need to design clumsy configuration management portals for different business scenarios, projects, and applications."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"image.png",src:a(71081).Z,width:"1500",height:"985"})),(0,o.kt)("h2",{id:"4-modeling-marginal-revenue-and-the-long-tail"},"4. Modeling: Marginal Revenue and the Long Tail"),(0,o.kt)("p",null,"With the divide-and-conquer white-box engineering structure design, code organization, modeling, workflow and provision tech selection, we also need to consider how to work with platform APIs. The typical dispute within the enterprise is whether to face directly the platform details or to design an abstraction, which eventually grows into such kind of dispute between explicit and implicit concepts."),(0,o.kt)("p",null,"The abstract implicit method is a usual choice for platform engineers for non-expert end users, who want to design an easy-to-understand and easy-to-use application model or Spec abstraction, which isolates specific platform technical details, to reduce the end-user cognitive burden and enhance error proofing by reducing detail perception. However, most operation platform developers tend to design a powerful and unified application model or Spec abstraction. In practice, they often encounter the following obstacles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With the increasing adoption rate of different business groups within the enterprise, it is difficult to implement unified modeling. The most typical case in Ant Group is the huge difference between Infra projects and SaaS applications. Java-based SaaS applications are easy to unify, while Infra applications often need to be designed separately."),(0,o.kt)("li",{parentName:"ul"},"Faced with a large number of platform technologies in the enterprise, the unified model itself is difficult to stabilize, especially in response to continuously changing business needs and platform technology-driven demand growth. In Ant Group's practice, delivery and operation requirements are affected by various factors and have strong instability. At the same time, the business requirements for ",(0,o.kt)("inlineCode",{parentName:"li"},"deliverable"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"runtime"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"security"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"instrumentation")," around the application operation life cycle are also growing. Taking instrumentation as an example, the rapid growth in demand for application runtime observability and SLO definition in the past two years directly drives changes in end-user usage."),(0,o.kt)("li",{parentName:"ul"},"The general problem of abstract models is that a reasonable model needs to be well designed for end users, and meanwhile, the API details of the platform must be kept in sync.")),(0,o.kt)("p",null,"In Ant Group's practice, we adopt an abstract model for end-users, and application developers, and solve several key problems through the following ideas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modeling for typical applications or scenarios (such as Ant Group's Sofa application), these models are developed by platform developers and platform SREs and maintained together with application developers to achieve a balance between user experience, cost and standard compatibility. In Ant Group's practice, the information entropy convergence ratio of the abstract model is about 1:5, and the marginal benefit of modeling investment is guaranteed through extensive high-frequency usage."),(0,o.kt)("li",{parentName:"ul"},"For non-typical user applications or scenarios, platform developers and platform SRE support application developers to design application models. Mechanisms such as KCL ",(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#schema"},"schema")," and ",(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour#protocol--mixin"},"mixin"),' help users to model, abstract, inherit, combine, reuse, and reduce repetitive code. Such modeling design work is one of the key points to building an application PaaS. A large number of "non-standard" platform applications were managed consistently within Ant Group for the first time, effectively solving the long tail problem. In a typical collaborative mode, platform developers and platform SREs write base components of platform capability to become "Enablers", which help application developers use base components to quickly "build building blocks" to complete their application models.'),(0,o.kt)("li",{parentName:"ul"},"For platform technology, we provide the ",(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/cli/openapi/"},"generator")," from platform API Spec to KCL schema code, natively support the compile-time selection of different Kubernetes API versions through ",(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#multi-file-compilation"},"combined compilation"),", and solve the flexible requirements of mapping application models to different versions of Kubernetes clusters in internal practice. At the same time, KCL supports the writing of in-schema ",(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#validation"},"constraints")," and independent environment ",(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#rule"},"rules"),". In addition, KCL also provides the ",(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#decorators"},"deprecated decorator")," to support the force deprecation of the model or model attribute. Through robust and complete modeling and constraint mechanism on the client side, general problems such as configuration errors and schema drift are exposed at compile time. Due to the left-shifted problem which is found before runtime, runtime errors or failures are avoided when pushing to the cluster. This is also a must-have requirement for the stability of the production environment within an enterprise, especially in an enterprise with requirements of high stability.")),(0,o.kt)("p",null,"Expert users of the underlying platform technology are usually very familiar with a specific technical domain and prefer to work in an explicit way that faces platform details. The KCL language provides the necessary dynamic and modular support and ensures stability through a static type system and constraint mechanisms. However, the explicit method cannot solve the problem that expert users are not familiar with the details of using cross-domain platform technologies, nor can it solve the problem of the scalability and complexity of platform technologies today. In Ant Group's small-scale YAML-based explicit engineering practice, facing a large number of highly open and configurable platform technologies, the complexity continues to accumulate with the utilization rate of platform technologies, and ends up in a rigid state that is hard to read, write, constrain, test, and maintain."),(0,o.kt)("h2",{id:"5-automation-new-challenges"},"5. Automation: New Challenges"),(0,o.kt)("p",null,'Automation is a classic domain in the field of infrastructure operation. With the wide and rapid adoption of cloud-native concepts and technologies, the ability to automatically integrate turns out to be the basic requirement of enterprise operation practice. Open source, highly configurable CI and CD technologies are gradually adopted by enterprises. The black-box "product" approach that cannot be integrated is gradually weakened and replaced by a flexible orchestration approach. The main advantages of this practice lie in its powerful customize orchestration and linking capabilities, high scalability, and good portability. Especially in the Kubernetes ecosystem, the GitOps method has a high adoption rate and has a natural affinity with configurable CI and CD technologies. Such changes are also promoting the gradual transformation of the work order and product centric workflow into a self-service and engineering efficiency platform centric workflow, and the operational capability of the production environment has become an important part of the automatic workflow. In the open source community, the technology innovation of the abstraction layer for different engineering efficiency platforms is also actively in progress. The developers on the platform side hope to get through the CI and CD process applied to the cloud environment through the shortest cognitive and practical path.'),(0,o.kt)("p",null,"In Ant Group's engineering practice, the engineering efficiency platform is deeply involved in the open automation practice of Konfig monorepo, and our practice direction is also highly aligned with the technological roadmap of the engineering efficiency platform. In the collaborative work of several people to dozens to hundreds of people, workflow design for operation scenarios, high-frequency code submission and pipeline execution, real-time automated testing and deployment pose several challenges to the engineering efficiency platform. especially the diverse businesses in monorepo require independent and powerful workflow customization and operation support, as well as parallel workflow execution capabilities with high real-time and strong SLO guarantee. The requirements of the single-repository mode are hugely different and troublesome. Most configuration languages are interpreted languages, while KCL is designed as a compiled language, implemented by Rust, C and LLVM optimizer, to provide high-performance compile-time and runtime execution for large-scale KCL files. At the same time, KCL supports compiling native code and wasm binary to meet various runtimes execution requirements. In addition, the storage and architecture design of Git is different from the ",(0,o.kt)("a",{parentName:"p",href:"https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext"},"Citc/Piper")," architecture, and it is not suitable for monorepo of large-scale code. Fortunately, we have not encountered a big problem with the scale of code today. We are working together to solve problems and hope to solve them gradually as the practice deepens."),(0,o.kt)("h2",{id:"6-collaborative-culture-a-more-important-thing"},"6. Collaborative Culture: A More Important Thing"),(0,o.kt)("p",null,"The above technologies, tools and mechanisms are very important, but I must say that for engineering and DevOps, the more important thing is the culture of collaboration, cooperation and sharing of groups and teams because this is a work composed of people, people and culture is the key point. Within an enterprise full of team silos or isolated teams, people tend to pursue a closed and bad engineering culture, thus we usually see a large number of private code bases and private documents, the judging and working method of small isolated groups. Teams that are supposed to work closely together actually do their own thing and chase after their own private goals. In a culture like this, I think it's going to be very difficult to do anything at scale. So if your company or team wants to adopt DevOps at scale, I think the most important thing is to do broad communication and start building a culture, because it's not just a few people's businesses, and it's very difficult and uncontrollable."),(0,o.kt)("p",null,'In Ant Group\'s practice, there are always various difficulties in the initial stage, and everyone\'s concerns about the self-service mechanism and collaborative culture are particularly obvious, such as "I need to write code?" "My code is actually in the same codebase with other teams?", "The job I\'m in charge of is not easy, it won\'t work this way" are typical concerns. Fortunately, we ended up with a virtual organization for common goals, with full support from partners and leaders, and we reached a consensus in the mass. It\u2019s improper to regard application developers as obstacles in practice. Undeniable that they will complain about the technology, workflow and mechanism, and hope to obtain a better user experience, which is understandable. The real obstacle first comes from the operation platform dev team itself. I see that the DevOps ideal of some companies turns into that the operation platform team does all the work for the application developers, even prevents users from accessing labor tools such as code and toolchains, and rushes to bridge to the existing GUI product, which deviates from the original intention and underestimates the capabilities and creativity of the users. Secondly, the obstacles also come from the technical leaders of some platform technical teams. It is difficult for them to give up focusing on the existing work that has lasted for many years, and then accept a new user service model. The feasible way is to let them understand the meaning and vision of the work, and gradually affect them in stages.'),(0,o.kt)("h2",{id:"7-summary"},"7. Summary"),(0,o.kt)("p",null,"After more than a year of practice, 400+ developers have directly participated in the code contribution of Konfig monorepo, and managed more than 1500 projects. Among them, the ratio of platform developers together with platform SREs to application developers is less than 1:9. Some of these application developers are the application owners themselves, and some are representatives of the application dev team, which is up to the application team itself. Through continuous automation capability building, 200-300 commits occur every day based on the Konfig monorepo, most of which are automated code modifications, about 1k pipeline task executions and nearly 10k KCL compilation executions. Today, if you compile the full code in Config once and output it, 300W+ lines of YAML text will be generated. A release operation process requires multiple compilations with different parameter combinations. Through the lightweight and portable code base and toolchains, we have completed a significant external private cloud delivery, eliminating the pain of transforming and porting a series of old operation platforms. Inside Ant Group, we have served several different operation scenarios, and are expanding the scale and exploring more possibilities."),(0,o.kt)("p",null,"Finally, I would like to talk about the next step. There\u2019re still possibilities and potentialities for us to keep improving our technology and tools in terms of usability and user experience. More user feedback and continuous improvement are always needed, and there is no shortcut for experience work. In the aspect of testing, we provide simple integration testing methods, which play the role of smoke testing, however, it is far from enough. We are trying to ensure correctness based on schema constraints and environmental rules rather than tests. In terms of work interface, we hope to build an IDE-based dev workspace and continue to enhance and optimize the internal workflow experience. At the same time, we hope to continue to improve coverage and technical capabilities. In addition, we also hope to apply the practice method more widely in CI and operation workflow, and other scenarios, to shorten end-user awareness and end-to-end workflow. At present, KusionStack is still in the very early stage of open source, and there is a lot of work to be done in the future. The most important thing is that we hope to share the concepts and practices of our platform engineering with more companies and teams, to help bring about and witness some interesting changes together."),(0,o.kt)("h2",{id:"8-reference"},"8. Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/user_docs/intro/kusion-intro"},"https://kusionstack.io/docs/user_docs/intro/kusion-intro")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://platformengineering.org/blog/what-is-platform-engineering"},"https://platformengineering.org/blog/what-is-platform-engineering")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://internaldeveloperplatform.org/what-is-an-internal-developer-platform/"},"https://internaldeveloperplatform.org/what-is-an-internal-developer-platform/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://web.devopstopologies.com/#anti-types"},"https://web.devopstopologies.com/#anti-types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/KCLVM"},"https://github.com/KusionStack/KCLVM")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#%E9%85%8D%E7%BD%AE%E6%93%8D%E4%BD%9C"},"https://kusionstack.io/docs/reference/lang/lang/tour")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/user_docs/concepts/project-stack"},"https://kusionstack.io/docs/user_docs/concepts/project-stack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext"},"https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext"))))}d.isMDXComponent=!0},35441:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/classic-plats-0e5580742fe5fb7b9d832a1dc235eb36.png"},71081:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/d-c-overview-0d3ba9e610b9a7497e5044e7de60124d.png"},75606:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devops-anti-pattern-a9159a518bb8f608b79a505dad7f2aaa.png"},485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devops-cycle-8923aa81a904e40ee30ede0c0d4c16b2.png"},18565:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kcl-dev-f53b8dffa98db3aeba220f1403c6eaed.png"}}]);