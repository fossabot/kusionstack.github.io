"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={id:"app-configuration",sidebar_label:"AppConfiguration"},a="AppConfiguration",s={unversionedId:"concepts/app-configuration",id:"version-v0.13/concepts/app-configuration",title:"AppConfiguration",description:"As a modern cloud-native application delivery toolchain, declarative intent-based actuation is the central idea of Kusion, and AppConfiguration model plays the role of describing the intent, which provides a simpler path for on-boarding developers to the platform without leaking low-level details in runtime infrastructure and allows developers to fully focus on the application logic itself.",source:"@site/docs_versioned_docs/version-v0.13/3-concepts/5-appconfiguration.md",sourceDirName:"3-concepts",slug:"/concepts/app-configuration",permalink:"/docs/concepts/app-configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.13/3-concepts/5-appconfiguration.md",tags:[],version:"v0.13",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:5,frontMatter:{id:"app-configuration",sidebar_label:"AppConfiguration"},sidebar:"kusion",previous:{title:"Workspace",permalink:"/docs/concepts/workspace"},next:{title:"Spec",permalink:"/docs/concepts/spec"}},l={},p=[{value:"Workload",id:"workload",level:4},{value:"Accessory",id:"accessory",level:4},{value:"Pipeline",id:"pipeline",level:4},{value:"Topologies",id:"topologies",level:4}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"appconfiguration"},"AppConfiguration"),(0,i.kt)("p",null,"As a modern cloud-native application delivery toolchain, declarative intent-based actuation is the central idea of Kusion, and ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model plays the role of describing the intent, which provides a simpler path for on-boarding developers to the platform without leaking low-level details in runtime infrastructure and allows developers to fully focus on the application logic itself."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model consolidates workload and their dependent accessories for the application deployment, along with any pipeline and operational requirements into one standardized, infrastructure-independent declarative specification. This declarative specification represents the intuitive user intent for the application, which drives a standardized and efficient application delivery and operation process in a hybrid environment."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"appconfig.png",src:n(57091).Z,width:"5512",height:"3390"})),(0,i.kt)("p",null,"AppConfiguration consists of four core concepts, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"Workload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Accessory"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Pipeline"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Dependency"),". Each of them represents a ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/module/overview"},"Kusion module"),". We will walk through these concepts one by one."),(0,i.kt)("h4",{id:"workload"},"Workload"),(0,i.kt)("p",null,"Workload is a representation of the business logic that runs in the cluster. Common workload types include long-running services that should \u201cnever\u201d go down and batch jobs that take from a few seconds to a few days to complete. "),(0,i.kt)("p",null,"In most cases, a Workload is a backend service or the frontend of an Application. For example, in a micro-service architecture, each service would be represented by a distinct Workload. This allows developers to manage and deploy their code in a more organized and efficient manner."),(0,i.kt)("h4",{id:"accessory"},"Accessory"),(0,i.kt)("p",null,"Using the analogy of a car, workload is the core engine of the application, but only having the engine isn\u2019t enough for the application to function properly. In most cases, there must be other supporting parts for the workload to operate as intended. For those supporting parts, we call them Accessory. Accessory refers to various runtime capabilities and operational requirements provided by the underlying infrastructure, such as database, network load-balancer, storage and so on."),(0,i.kt)("p",null,"From the perspective of team collaboration, the platform team should be responsible for creating and maintaining various accessory definitions, providing reusable building blocks out-of-the-box. Application developers just need to leverage the existing accessories to cover the evolving application needs. This helps software organizations achieve separation of concern so that different roles can focus on the subject matter they are an expert in."),(0,i.kt)("h4",{id:"pipeline"},"Pipeline"),(0,i.kt)("p",null,"Running reliable applications requires reliable delivery pipelines. By default, Kusion provides a relatively fixed built-in application delivery pipeline, which should be sufficient for most use cases. However, as the application scale and complexity grow, so does the need for a customizable delivery pipeline. Developers wish for more fine-tuned control and customization over the workflow to deliver their applications. That\u2019s why we introduced the Pipeline section in AppConfiguration model."),(0,i.kt)("p",null,"A customized delivery pipeline is made of several steps, each corresponding to an operation that needs to be executed, such as running certain tests after a deployment, scanning artifacts for vulnerabilities prior to deployment, and so on. Implementation-wise, the execution of each step should be carried out in the form of a plugin, developed and managed by the platform owners."),(0,i.kt)("h4",{id:"topologies"},"Topologies"),(0,i.kt)("p",null,"Application dependencies refer to the external services or other software that an application relies on to function properly. These dependencies may be required to provide certain functionality or to use certain features in the application."),(0,i.kt)("p",null,"Similar to declaring a dependency from an application to an accessory, AppConfiguration lets you declare the dependencies between different applications in the same way."))}d.isMDXComponent=!0},57091:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/appconfig-04e20b2e12ca7d5c3bc3992b2d602416.png"}}]);