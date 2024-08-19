"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={id:"overview"},r="Configuration File Overview",l={unversionedId:"configuration-walkthrough/overview",id:"version-v0.12/configuration-walkthrough/overview",title:"Configuration File Overview",description:"Kusion consumes one or more declarative configuration files (written in KCL) that describe the application, and delivers intent to the target runtime including Kubernetes, clouds, or on-prem infrastructure.",source:"@site/docs_versioned_docs/version-v0.12/4-configuration-walkthrough/1-overview.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/overview",permalink:"/zh/docs/configuration-walkthrough/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/4-configuration-walkthrough/1-overview.md",tags:[],version:"v0.12",lastUpdatedBy:"hexin",lastUpdatedAt:1724066016,formattedLastUpdatedAt:"2024\u5e748\u670819\u65e5",sidebarPosition:1,frontMatter:{id:"overview"},sidebar:"kusion",previous:{title:"Releases",permalink:"/zh/docs/concepts/release"},next:{title:"KCL Basics",permalink:"/zh/docs/configuration-walkthrough/kcl-basics"}},s={},p=[{value:"Table of Content",id:"table-of-content",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"AppConfiguration Model",id:"appconfiguration-model",level:2},{value:"Authoring Configuration Files",id:"authoring-configuration-files",level:2},{value:"Identifying KCL file",id:"identifying-kcl-file",level:3},{value:"KCL Schemas and KAM",id:"kcl-schemas-and-kam",level:3},{value:"Kusion Modules",id:"kusion-modules",level:3},{value:"Import Statements",id:"import-statements",level:3},{value:"Understanding kcl.mod",id:"understanding-kclmod",level:3},{value:"Building Blocks",id:"building-blocks",level:3},{value:"Instantiating an application",id:"instantiating-an-application",level:3},{value:"Using <code>kusion init</code>",id:"using-kusion-init",level:3},{value:"Using references",id:"using-references",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration-file-overview"},"Configuration File Overview"),(0,a.kt)("p",null,"Kusion consumes one or more declarative configuration files (written in KCL) that describe the application, and delivers intent to the target runtime including Kubernetes, clouds, or on-prem infrastructure."),(0,a.kt)("p",null,"This documentation series walks you through the odds and ends of managing such configuration files."),(0,a.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuration-file-overview"},"Configuration File Overview"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#table-of-content"},"Table of Content")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#directory-structure"},"Directory Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#appconfiguration-model"},"AppConfiguration Model")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#authoring-configuration-files"},"Authoring Configuration Files"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#identifying-kcl-file"},"Identifying KCL file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#kcl-schemas-and-kam"},"KCL Schemas and KAM")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#kusion-modules"},"Kusion Modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#import-statements"},"Import Statements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#understanding-kclmod"},"Understanding kcl.mod")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#building-blocks"},"Building Blocks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#instantiating-an-application"},"Instantiating an application")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#using-kusion-init"},"Using ",(0,a.kt)("inlineCode",{parentName:"a"},"kusion init"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#using-references"},"Using references"))))))),(0,a.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,a.kt)("p",null,"Kusion expects the configuration file to be placed in a certain directory structure because it might need some metadata (that is not stored in the application configuration itself) in order to proceed."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"../concepts/project/overview"},"Project")," and ",(0,a.kt)("a",{parentName:"p",href:"../concepts/stack/overview"},"Stack")," for more details about Project and Stack.")),(0,a.kt)("p",null,"A sample multi-stack directory structure looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/playground$ tree multi-stack-project/\nmulti-stack-project/\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u251c\u2500\u2500 prod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n")),(0,a.kt)("p",null,"In general, the directory structure follows a hierarchy where the top-level is the project configurations, and the sub-directories represent stack-level configurations."),(0,a.kt)("p",null,"You may notice there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"base")," directory besides all the stacks. The ",(0,a.kt)("inlineCode",{parentName:"p"},"base")," directory is not mandatory, but rather a place to store common configurations between different stacks. A common pattern we observed is to use stacks to represent different stages (dev, stage, prod, etc.) in the software development lifecycle, and/or different deployment targets (azure-eastus, aws-us-east-1, etc). A project can have as many stacks as needed."),(0,a.kt)("p",null,"In practice, the applications deployed into dev and prod might very likely end up with a similar set of configurations except a few fields such as the application image (dev might be on newer versions), resource requirements (prod might require more resources), etc."),(0,a.kt)("p",null,"As a general best practice, we recommend managing the common configurations in ",(0,a.kt)("inlineCode",{parentName:"p"},"base.k")," as much as possible to minimize duplicate code. We will cover how override works in ",(0,a.kt)("a",{parentName:"p",href:"base-override"},"Base and Override"),"."),(0,a.kt)("h2",{id:"appconfiguration-model"},"AppConfiguration Model"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," is the out-of-the-box model we build that describes an application. It serves as the declarative intent for a given application."),(0,a.kt)("p",null,"The schema for ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," is defined in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kam/blob/main/v1/app_configuration.k"},"KusionStack/kam")," repository. It is designed as a unified, application-centric model that encapsulates the comprehensive configuration details and in the meantime, hides the complexity of the infrastructure as much as possible."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," consists of multiple sub-components that each represent either the application workload itself, its dependencies (in the form of ",(0,a.kt)("a",{parentName:"p",href:"../concepts/module/overview"},"Kusion Modules"),"), relevant workflows or operational expectations. We will deep dive into the details on how to author each of these elements in this upcoming documentation series."),(0,a.kt)("p",null,"For more details on the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),", please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../concepts/app-configuration"},"design documentation"),"."),(0,a.kt)("h2",{id:"authoring-configuration-files"},"Authoring Configuration Files"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kcl-lang.io/"},"KCL")," is the choice of configuration language consumed by Kusion. KCL is an open-source constraint-based record and functional language. KCL works well with a large number of complex configurations via modern programming language technology and practice, and is committed to provide better modularity, scalability, stability and extensibility."),(0,a.kt)("h3",{id:"identifying-kcl-file"},"Identifying KCL file"),(0,a.kt)("p",null,"KCL files are identified with ",(0,a.kt)("inlineCode",{parentName:"p"},".k")," suffix in the filename."),(0,a.kt)("h3",{id:"kcl-schemas-and-kam"},"KCL Schemas and KAM"),(0,a.kt)("p",null,"Similar to most modern General Programming Languages (GPLs), KCL provide packages that are used to organize collections of related KCL source files into modular and re-usable units."),(0,a.kt)("p",null,"In the context of Kusion, we abstracted a core set of KCL Schemas (such as the aforementioned ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Workload"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Container"),", etc)that represent the concepts that we believe that are relatively universal and developer-friendly, also known as ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kam"},"Kusion Application Model"),", or KAM."),(0,a.kt)("h3",{id:"kusion-modules"},"Kusion Modules"),(0,a.kt)("p",null,"To extend the capabilities beyond the core KAM model, we use a concept known as ",(0,a.kt)("a",{parentName:"p",href:"../concepts/module/overview"},"Kusion Modules")," to define components that could best abstract the capabilities during an application delivery. We provide a collection of official out-of-the-box Kusion Modules that represents the most common capabilities. They are maintained in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/orgs/KusionStack/packages"},"KusionStack's GitHub container registry"),". When authoring an application configuration file, you can simply declare said Kusion Modules as dependencies and import them to declare ship-time capabilities that the application requires."),(0,a.kt)("p",null,"If the modules in the KusionStack container registry does not meet the needs of your applications, Kusion provides the necessary mechanisms to extend with custom-built Kusion Modules. You can always create and publish your own module, then import the new module in your application configuration written in KCL."),(0,a.kt)("p",null,"For the steps to develop your own module, please refer to the Module developer guide."),(0,a.kt)("h3",{id:"import-statements"},"Import Statements"),(0,a.kt)("p",null,"An example of the import looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"### import from the official kam package\nimport kam.v1.app_configuration as ac\n\n### import kusion modules\nimport service\nimport service.container as c\nimport monitoring as m\nimport network as n\n")),(0,a.kt)("p",null,"Take ",(0,a.kt)("inlineCode",{parentName:"p"},"import kam.v1.app_configuration as ac")," as an example, the ",(0,a.kt)("inlineCode",{parentName:"p"},".v1.app_configuration")," part after ",(0,a.kt)("inlineCode",{parentName:"p"},"import kam")," represents the relative path of a specific schema to import. In this case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," schema is defined under ",(0,a.kt)("inlineCode",{parentName:"p"},"v1/app_configuration")," directory in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kam")," package."),(0,a.kt)("h3",{id:"understanding-kclmod"},"Understanding kcl.mod"),(0,a.kt)("p",null,"Much similar to the concept of ",(0,a.kt)("inlineCode",{parentName:"p"},"go.mod"),", Kusion uses ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," as the source of truth to manage metadata (such as package name, dependencies, etc.) for the current package. Kusion will also auto-generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod.lock")," as the dependency lock file."),(0,a.kt)("p",null,"The most common usage for ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," is to manage the dependency of your application configuration file. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Please note this ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," will be automatically generated if you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," to initialize a project with a template. You will only need to modify this file if you are modifying the project metadata outside the initialization process, such as upgrading the dependency version or adding a new dependency altogether, etc.")),(0,a.kt)("p",null,"There are 3 sections in a ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package"),", representing the metadata for the current package."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dependencies"),", describing the packages the current package depends on. Supports referencing either a git repository or an OCI artifact."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"profile"),", defining the behavior for Kusion. In the example below, it describes the list of files Kusion should look for when parsing the application configuration.")),(0,a.kt)("p",null,"An example of ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[package]\nname = "multi-stack-project"\nedition = "0.5.0"\nversion = "0.1.0"\n\n[dependencies]\nmonitoring = { oci = "oci://ghcr.io/kusionstack/monitoring", tag = "0.1.0" }\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.1.0" }\n# Uncomment the line below to use your own modified module\n# my-module = { oci = "oci://ghcr.io/my-repository/my-package", tag = "my-version" }\n\n[profile]\nentries = ["../base/base.k", "main.k"]\n')),(0,a.kt)("h3",{id:"building-blocks"},"Building Blocks"),(0,a.kt)("p",null,"Configuration files consist of building blocks that are made of instances of schemas. An ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance consists of several child schemas, most of which are optional. The only mandatory one is the ",(0,a.kt)("inlineCode",{parentName:"p"},"workload")," instance. We will take a closer look in the ",(0,a.kt)("a",{parentName:"p",href:"workload"},"workload walkthrough"),". The order of the building blocks does NOT matter."),(0,a.kt)("p",null,"The major building blocks as of version ",(0,a.kt)("inlineCode",{parentName:"p"},"0.12.0"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "myapp": c.Container {}\n            ...\n        }\n        secrets: {}\n        ...\n    }\n    # optional dependencies, usually expressed in kusion modules\n    accessories: {\n        ...\n    }\n    ...\n}\n')),(0,a.kt)("p",null,"We will deep dive into each one of the building blocks in this documentation series."),(0,a.kt)("h3",{id:"instantiating-an-application"},"Instantiating an application"),(0,a.kt)("p",null,"In Kusion's out-of-the-box experience, an application is identified with an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),". You may have more than one application in the same project or stack."),(0,a.kt)("p",null,"Here's an example of a configuration that can be consumed by Kusion (assuming it is placed inside the proper directory structure that includes project and stack configurations, with a ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," present):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n\ngocity: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "gocity": c.Container {\n                image = "howieyuen/gocity:latest"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 80\n                    public: True\n                }\n            ]\n        }\n    }\n}\n')),(0,a.kt)("p",null,"Don't worry about what ",(0,a.kt)("inlineCode",{parentName:"p"},"workload")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"n.Network")," stand for at the moment. We will deep dive into each one of them in this upcoming documentation series."),(0,a.kt)("h3",{id:"using-kusion-init"},"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"kusion init")),(0,a.kt)("p",null,"Kusion offers a ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," sub-command which initializes a new project using a pre-built template, which saves you from the hassle of manually building the aforementioned directory structure that Kusion expects."),(0,a.kt)("p",null,"There is a built-in template ",(0,a.kt)("inlineCode",{parentName:"p"},"quickstart")," in the Kusion binary that can be used offline. "),(0,a.kt)("p",null,"The pre-built templates are meant to help you get off the ground quickly with some simple out-of-the-box examples. You can refer to the ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/deliver-quickstart"},"QuickStart documentation")," for some step-by-step tutorials."),(0,a.kt)("h3",{id:"using-references"},"Using references"),(0,a.kt)("p",null,"The reference documentation for the ",(0,a.kt)("inlineCode",{parentName:"p"},"kam")," package and the official Kusion Modules is located in ",(0,a.kt)("a",{parentName:"p",href:"../reference/modules/developer-schemas/app-configuration"},"Reference"),"."),(0,a.kt)("p",null,"If you are using them out of the box, the reference documentation provides a comprehensive view for each schema involved, including all the attribute names and description, their types, default value if any, and whether a particular attribute is required or not. There will also be an example attached to each schema reference."),(0,a.kt)("p",null,"We will also deep dive into some common examples in the upcoming sections."))}u.isMDXComponent=!0}}]);