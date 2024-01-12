"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="Configuration File Overview",l={unversionedId:"kusion/config-walkthrough/overview",id:"version-v0.9/kusion/config-walkthrough/overview",title:"Configuration File Overview",description:"Kusion consumes one or more declarative configuration files (written in KCL) that describe the application, and delivers intent to the target runtime including Kubernetes, clouds, or on-prem infrastructure.",source:"@site/versioned_docs/version-v0.9/kusion/config-walkthrough/overview.md",sourceDirName:"kusion/config-walkthrough",slug:"/kusion/config-walkthrough/overview",permalink:"/docs/kusion/config-walkthrough/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/config-walkthrough/overview.md",tags:[],version:"v0.9",lastUpdatedBy:"Forest",lastUpdatedAt:1705030319,formattedLastUpdatedAt:"Jan 12, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kusion",previous:{title:"Intent",permalink:"/docs/kusion/concepts/intent"},next:{title:"KCL Basics",permalink:"/docs/kusion/config-walkthrough/kcl_basics"}},s={},c=[{value:"Table of Content",id:"table-of-content",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"AppConfiguration Model",id:"appconfiguration-model",level:2},{value:"Authoring Configuration Files",id:"authoring-configuration-files",level:2},{value:"Identifying KCL file",id:"identifying-kcl-file",level:3},{value:"KCL Packages and Import",id:"kcl-packages-and-import",level:3},{value:"Understanding kcl.mod",id:"understanding-kclmod",level:3},{value:"Building Blocks",id:"building-blocks",level:3},{value:"Instantiating an application",id:"instantiating-an-application",level:3},{value:"Using <code>kusion init</code>",id:"using-kusion-init",level:3},{value:"Using references",id:"using-references",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration-file-overview"},"Configuration File Overview"),(0,i.kt)("p",null,"Kusion consumes one or more declarative configuration files (written in KCL) that describe the application, and delivers intent to the target runtime including Kubernetes, clouds, or on-prem infrastructure."),(0,i.kt)("p",null,"This documentation series walks you through the odds and ends of managing such configuration files."),(0,i.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#directory-structure"},"Directory Structure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#appconfiguration-model"},"AppConfiguration Model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#authoring-configuration-files"},"Authoring Configuration Files"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#identifying-kcl-file"},"Identifying KCL file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#kcl-packages-and-import"},"KCL Packages and imports")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#understanding-kclmod"},"Understanding kcl.mod")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#building-blocks"},"Building blocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#instantiating-an-application"},"Instantiate an application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-kusion-init"},"Using kusion init")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-references"},"Using references"))))),(0,i.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,i.kt)("p",null,"Kusion expects the configuration file to be placed in a certain directory structure because it might need some metadata (that is not stored in the application configuration itself) in order to proceed."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"../concepts/glossary"},"Glossary")," for more details about Project and Stack.")),(0,i.kt)("p",null,"A sample multi-stack directory structure looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/playground$ tree multi-stack-project/\nmulti-stack-project/\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod.lock\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u251c\u2500\u2500 prod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod.lock\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n")),(0,i.kt)("p",null,"In general, the directory structure follows a hierarchy where the top-level is the project configurations, and the sub-directories represent stack-level configurations."),(0,i.kt)("p",null,"You may notice there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"base")," directory besides all the stacks. The ",(0,i.kt)("inlineCode",{parentName:"p"},"base")," directory is not mandatory, but rather a place to store common configurations between different stacks. A common pattern we observed is to use stacks to represent different stages (dev, stage, prod, etc.) in the software development lifecycle, and/or different deployment targets (azure-eastus, aws-us-east-1, etc). A project can have as many stacks as needed."),(0,i.kt)("p",null,"In practice, the applications deployed into dev and prod might very likely end up with a similar set of configurations except a few fields such as the application image (dev might be on newer versions), resource requirements (prod might require more resources), etc."),(0,i.kt)("p",null,"As a general best practice, we recommend managing the common configurations in ",(0,i.kt)("inlineCode",{parentName:"p"},"base.k")," as much as possible to minimize duplicate code. We will cover how override works in ",(0,i.kt)("a",{parentName:"p",href:"base_override"},"Base and Override"),"."),(0,i.kt)("h2",{id:"appconfiguration-model"},"AppConfiguration Model"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," is the out-of-the-box model we build that describes an application. It serves as the declarative intent for a given application."),(0,i.kt)("p",null,"The schema for ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," is defined in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"KusionStack/catalog")," repository. It is designed as a unified, application-centric model that encapsulates the comprehensive configuration details and in the meantime, hides the complexity of the infrastructure as much as possible."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," consists of multiple sub-components that each represent either the application workload itself, its dependencies, relevant workflows or operational expectations. We will deep dive into the details on how to author each of these elements in this upcoming documentation series."),(0,i.kt)("p",null,"For more details on the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),", please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/pull/420/files"},"design documentation - WIP"),"."),(0,i.kt)("h2",{id:"authoring-configuration-files"},"Authoring Configuration Files"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL")," is the choice of configuration language consumed by Kusion. KCL is an open source constraint-based record and functional language. KCL works well with a large number of complex configurations via modern programming language technology and practice, and is committed to provide better modularity, scalability, stability and extensibility."),(0,i.kt)("h3",{id:"identifying-kcl-file"},"Identifying KCL file"),(0,i.kt)("p",null,"KCL files are identified with ",(0,i.kt)("inlineCode",{parentName:"p"},".k")," suffix in the filename."),(0,i.kt)("h3",{id:"kcl-packages-and-import"},"KCL Packages and Import"),(0,i.kt)("p",null,"Similar to most modern General Programming Languages (GPLs), KCL packages are used to organize collections of related KCL source files into modular and re-usable units."),(0,i.kt)("p",null,"In the context of Kusion, we use KCL packages to define models that could best abstract the behavior of an application. Specifically, we provide an official out-of-the-box KCL package(will keep iterating) with the name ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"catalog"),". When authoring an application configuration file, you can simply import the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"catalog")," package in the source code and use all the schemas (including AppConfiguration) defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"catalog")," package."),(0,i.kt)("p",null,"Similarly, if the schemas in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"catalog")," package does not meet your needs, you can always fork it and make modifications, then import the modified package; or create a brand new package altogether and import it."),(0,i.kt)("p",null,"The Kusion ecosystem can be easily expanded in this manner."),(0,i.kt)("p",null,"An example of the import looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"### import from the official catalog package\nimport catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\n\n### import my own modified package\nimport my_own_catalog.models.schema.v1 as moc\nimport my_other_package.schema.v1.redis as myredis\n")),(0,i.kt)("p",null,"Take ",(0,i.kt)("inlineCode",{parentName:"p"},"import catalog.models.schema.v1.workload as wl")," as an example, the ",(0,i.kt)("inlineCode",{parentName:"p"},".models.schema.v1.workload")," part after ",(0,i.kt)("inlineCode",{parentName:"p"},"import catalog")," represents the relative path of a specific schema to import. In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"workload")," schemas is defined under ",(0,i.kt)("inlineCode",{parentName:"p"},"models/schema/v1/workload")," directory in the ",(0,i.kt)("inlineCode",{parentName:"p"},"catalog")," package."),(0,i.kt)("h3",{id:"understanding-kclmod"},"Understanding kcl.mod"),(0,i.kt)("p",null,"Much similar to the concept of ",(0,i.kt)("inlineCode",{parentName:"p"},"go.mod"),", Kusion uses ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," as the source of truth to manage metadata (such as package name, dependencies, etc.) for the current package. Kusion will also auto-generate a ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," as the dependency lock file."),(0,i.kt)("p",null,"The most common usage for ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," is to manage the dependency of your application configurations. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please note this ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," will be automatically generated if you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," to initialize a project with a template. You will only need to modify this file if you are modifying the project metadata outside the initialization process, such as upgrading the dependency version or adding a new dependency altogether, etc.")),(0,i.kt)("p",null,"There are 3 sections in a ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package"),", representing the metadata for the current package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependencies"),", describing the packages the current package depend on. Supports  referencing either a git repository or an OCI artifact."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"profile"),", defining the behavior for Kusion. In the example below, it describes the list of files Kusion should look for when parsing the application configuration.")),(0,i.kt)("p",null,"An example of ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[package]\nname = "multi-stack-project"\nedition = "0.5.0"\nversion = "0.1.0"\n\n[dependencies]\ncatalog = { git = "https://github.com/KusionStack/catalog.git", tag = "0.1.0" }\n# Uncomment the line below to use your own modified package\n# my-package = ghcr.io/kcl-lang/my-package\n\n[profile]\nentries = ["../base/base.k", "main.k"]\n')),(0,i.kt)("h3",{id:"building-blocks"},"Building Blocks"),(0,i.kt)("p",null,"Configuration files consist of building blocks that are made of instances of schemas. An ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance consists of several child schemas, most of which are optional. The only mandatory one is the ",(0,i.kt)("inlineCode",{parentName:"p"},"workload")," instance. We will take a closer look in the ",(0,i.kt)("a",{parentName:"p",href:"workload"},"workload walkthrough"),". The order of the building blocks does NOT matter."),(0,i.kt)("p",null,"The major building blocks as of version ",(0,i.kt)("inlineCode",{parentName:"p"},"0.9.0"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "myapp": c.Container {}\n            ...\n        }\n        ports: []\n        secrets: {}\n    }\n    database: d.Database{}\n    monitoring: m.Prometheus{}\n    opsRule: t.OpsRule {}\n    ...\n}\n')),(0,i.kt)("p",null,"We will deep dive into each one of the building blocks in this documentation series."),(0,i.kt)("h3",{id:"instantiating-an-application"},"Instantiating an application"),(0,i.kt)("p",null,"In Kusion's out-of-the-box experience, an application is identified with an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),". You may have more than one application in the same project or stack."),(0,i.kt)("p",null,"Here's an example of a configuration that can be consumed by Kusion (assuming it is placed inside the proper directory structure that includes project and stack configurations, with a ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod")," present):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.workload.container as c\n\ngocity: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "gocity": c.Container {\n                image = "howieyuen/gocity:latest"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n        ports: [\n            n.Port {\n                port: 4000\n            }\n        ]\n    }\n}\n')),(0,i.kt)("p",null,"Don't worry about what ",(0,i.kt)("inlineCode",{parentName:"p"},"workload")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ports")," stand for at the moment. We will deep dive into each one of them in this upcoming documentation series."),(0,i.kt)("h3",{id:"using-kusion-init"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"kusion init")),(0,i.kt)("p",null,"Kusion offers a ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," sub-command which initializes a new project using some pre-built templates, which saves you from the hassle to manually build the aforementioned directory structure that Kusion expects."),(0,i.kt)("p",null,"There is a built-in template ",(0,i.kt)("inlineCode",{parentName:"p"},"single-stack-sample")," in the kusion binary that can be used offline. "),(0,i.kt)("p",null,"We also maintain a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion-templates"},"kusion-templates repository")," that hosts a list of more comprehensive project scaffolds. You can access them via ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init --online")," command which requires connectivity to ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com"),"."),(0,i.kt)("p",null,"The pre-built templates are meant to help you get off the ground quickly with some simple out-of-the-box examples. You can refer to the ",(0,i.kt)("a",{parentName:"p",href:"../getting-started/deliver-wordpress"},"QuickStart documentation")," for some step-by-step tutorials."),(0,i.kt)("h3",{id:"using-references"},"Using references"),(0,i.kt)("p",null,"The reference documentation for the ",(0,i.kt)("inlineCode",{parentName:"p"},"catalog")," package is located in ",(0,i.kt)("a",{parentName:"p",href:"../reference/model/catalog_models/doc_app_configuration"},"Reference"),"."),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("inlineCode",{parentName:"p"},"catalog")," package out of the box, the reference documentation provides a comprehensive view for each schema involved, including all the attribute names and description, their types, default value if any, and whether a particular attribute is required or not. There will also be an example attached to each schema reference."),(0,i.kt)("p",null,"We will also deep dive into some common examples in the upcoming sections."))}u.isMDXComponent=!0}}]);