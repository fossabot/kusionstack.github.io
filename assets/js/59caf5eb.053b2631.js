"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8643],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={},i="KusionStack",s={unversionedId:"user_docs/intro/kusion-intro",id:"user_docs/intro/kusion-intro",title:"KusionStack",description:"What is KusionStack?",source:"@site/docs/user_docs/intro/kusion-intro.md",sourceDirName:"user_docs/intro",slug:"/user_docs/intro/kusion-intro",permalink:"/docs/user_docs/intro/kusion-intro",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/intro/kusion-intro.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1694522671,formattedLastUpdatedAt:"Sep 12, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Introduction",permalink:"/docs/user_docs/intro/"},next:{title:"Get Started",permalink:"/docs/user_docs/getting-started/"}},l={},p=[{value:"What is KusionStack?",id:"what-is-kusionstack",level:2},{value:"What can be done with KusionStack?",id:"what-can-be-done-with-kusionstack",level:2},{value:"KusionStack Highlights",id:"kusionstack-highlights",level:2},{value:"KusionStack Composition",id:"kusionstack-composition",level:2},{value:"KusionStack vs. X",id:"kusionstack-vs-x",level:2},{value:"Development status",id:"development-status",level:2},{value:"Next step",id:"next-step",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusionstack"},"KusionStack"),(0,o.kt)("h2",{id:"what-is-kusionstack"},"What is KusionStack?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"KusionStack is an open-source cloud-native programmable technology stack!")),(0,o.kt)("p",null,"KusionStack is an open-source programmable engineering stack to facilitate app-centric development and unified operation, inspired by the phrase 'Fusion on the Kubernetes'. The main motivation is to help platform and app developers to develop and deliver in a self-serviceable, fast, reliable, and collaborative way."),(0,o.kt)("p",null,"To put it simply, KusionStack aims to help developers:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Codify")," and ",(0,o.kt)("strong",{parentName:"li"},"unify")," configurations, topologies, workflows and policies around a modern app delivery"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Organize")," application's resources and ensure secure access by ",(0,o.kt)("strong",{parentName:"li"},"identities")," throughout the entire delivery process"),(0,o.kt)("li",{parentName:"ol"},"Streamline app delivers workflow to ",(0,o.kt)("strong",{parentName:"li"},"Kubernetes"),", ",(0,o.kt)("strong",{parentName:"li"},"Cloud")," and ",(0,o.kt)("strong",{parentName:"li"},"On-premises")," with a dev-friendly experience")),(0,o.kt)("p",null,"Based on the concept of ",(0,o.kt)("strong",{parentName:"p"},"Platform as Code"),", developers could define the app delivery life cycle with a unified organization and operation interface, fully leverage the hybrid capability of Kubernetes, cloud and on-premises, go through the end-to-end delivery workflow, and truly achieve the ",(0,o.kt)("strong",{parentName:"p"},"centralized definition, arbitrary delivery"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/workflow.png",alt:null})),(0,o.kt)("h2",{id:"what-can-be-done-with-kusionstack"},"What can be done with KusionStack?"),(0,o.kt)("p",null,"We have two perspectives to perceive the value of KusionStack."),(0,o.kt)("p",null,"As an out-of-box product, KusionStack helps to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Config")," your app with an app-centric model above Kubernetes and cloud resources"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deliver")," your app with dev-friendly tools and IDE products to Kubernetes and clouds")),(0,o.kt)("p",null,"As an engineering stack, KusionStack helps to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Build")," your apps' abstraction models with the ",(0,o.kt)("strong",{parentName:"li"},"collaboration")," of multiple roles "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Orchestrate")," your automation workflow with ",(0,o.kt)("strong",{parentName:"li"},"hybrid")," resources across Kubernetes and clouds"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Integrate")," into your homegrown or public systems")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(9370).Z,width:"2456",height:"908"})),(0,o.kt)("h2",{id:"kusionstack-highlights"},"KusionStack Highlights"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"App-centric"),"\nApp is the first-class citizen of KusionStack. KusionStack provides an out-of-the-box ",(0,o.kt)("strong",{parentName:"p"},"app delivery model")," based on best practices and also supports customizing your application models. With the simple application model definition, KusionStack provides sufficient automation support to help developers turn the blueprint into reality."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Flexible"),"\nBased on the increasing model ecosystem, the powerful engine and a variety of extensible mechanisms, KusionStack provides full flexibility for developers undertaking ops work. KusionStack can meet the needs of individual developers, small teams and large groups with good scalability and manageability through the standard ",(0,o.kt)("strong",{parentName:"p"},"project")," and ",(0,o.kt)("strong",{parentName:"p"},"stack")," structures. The pure client-side solution also ensures good portability and the rich APIs make it easier to integrate and automate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Collaborative"),"\nIn addition to the general advantages of as-code solutions, KusionStack hopes to help to define the application model with the platform team and application team collaboratively. With the ",(0,o.kt)("strong",{parentName:"p"},"separation of concerns"),", different roles could focus on their work based on their knowledge and responsibility. Through such a division of labor, the platform team can better manage the differences and complexities of the platform, and app developers could participate in ops work with less cognitive load."),(0,o.kt)("h2",{id:"kusionstack-composition"},"KusionStack Composition"),(0,o.kt)("p",null,"KusionStack consists of a series of tools and products. Among them, Kusion turns blueprints into reality with powerful engines and orchestration capabilities, and Konfig holds app delivery models and components. You can choose to use one of them or use them in combination."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusion"},"Kusion"),": Operation engine, toolchains, service, IDE workspace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/cata"},"Catalog"),": Catalog of shared Kusion Models and Generators")),(0,o.kt)("h2",{id:"kusionstack-vs-x"},"KusionStack vs. X"),(0,o.kt)("p",null,"KusionStack is a pure client-side programmable technology stack, which aims to define an app-centric delivery model and an end-to-end automation workflow."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(3812).Z,width:"2806",height:"1200"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. Terraform")),(0,o.kt)("p",null,"Terraform is a programmable operation product widely used in cloud resource delivery scenarios. It helps operators access different cloud APIs easily with programmable resource blocks, state management, and API providers. Terraform reduces the difficulty of using imperative APIs of various cloud vendors and provides a good declarative operation experience with a concise workflow."),(0,o.kt)("p",null,"In contrast, KusionStack attempts to help developers work with an abstract app delivery model and also makes it easier for different roles to collaborate to build and manage the abstraction. KusionStack natively supports scalability, automation, and high performance for enterprise-level requirements. KusionStack works in a Kubernetes-first way and leverages Terraform to manage non-Kubernetes resources."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. CD systems (eg KubeVela, ArgoCD)")),(0,o.kt)("p",null,"CD systems are usually sourced in some declarative format and complete automated delivery and configuration drift reconciliation through Pull, Push, or the combination of Pull & Push. The Kusion engine can be regarded as a CD engine implementation in the push mode. If you have adopted a CD system, KusionStack can be integrated with it, such as reconciling Kusion models through ArgoCD or writing codify OAM model and running with KubeVela, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. Helm")),(0,o.kt)("p",null,"The concept of Helm originates from the package management mechanism of the operating system. It is a package management tool based on templated YAML files and supports the execution and management of resources in the package. KusionStack naturally provides a superset of Helm capabilities with the modeled key-value pairs, so that developers can use KusionStack directly as a programable alternative to avoid the pain of writing text templates. For users who have adopted Helm, the stack compilation results in KusionStack can be packaged and used in Helm format."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"vs. App PaaS")),(0,o.kt)("p",null,"Compared with application delivery products or platforms, KusionStack is a client-side programmable technology stack, which is not a complete App PaaS. KusionStack's products can be used as part of App PaaS, or as the basis for building your App PaaS as a platform engineering solution."),(0,o.kt)("h2",{id:"development-status"},"Development status"),(0,o.kt)("p",null,"KusionStack is at an early stage of open source. We will continue to focus on providing a better and more usable ",(0,o.kt)("strong",{parentName:"p"},"application delivery model"),", supporting ",(0,o.kt)("strong",{parentName:"p"},"multiple clusters")," and more ",(0,o.kt)("strong",{parentName:"p"},"clouds"),", and natively providing ",(0,o.kt)("strong",{parentName:"p"},"identity")," and ",(0,o.kt)("strong",{parentName:"p"},"resource")," management mechanisms."),(0,o.kt)("p",null,"You can check out the release versions of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/releases"},"Kusion")," and are also welcome to join us via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/community"},"Community"),"."),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Installation")),(0,o.kt)("li",{parentName:"ul"},"Learn about ",(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/concepts/glossary"},"core concepts")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/concepts/arch"},"technical architecture"))))}u.isMDXComponent=!0},9370:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusion-stack-1-26768333b3ae145800d1acf5fb1d9929.png"},3812:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusion-vs-x-c958aba32f7e11ea7248810312be3a5b.png"}}]);