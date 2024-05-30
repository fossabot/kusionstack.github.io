"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39095],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={id:"how-kusion-works",sidebar_label:"How Kusion Works?"},i="How Kusion Works?",s={unversionedId:"concepts/how-kusion-works",id:"concepts/how-kusion-works",title:"How Kusion Works?",description:"Kusion is the platform engineering engine of KusionStack. It delivers intentions described with Kusion Modules defined in Catalog to Kubernetes, Clouds and On-Prem infrastructures.",source:"@site/docs/kusion/3-concepts/9-how-kusion-works.md",sourceDirName:"3-concepts",slug:"/concepts/how-kusion-works",permalink:"/docs/next/concepts/how-kusion-works",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/9-how-kusion-works.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1717041280,formattedLastUpdatedAt:"May 30, 2024",sidebarPosition:9,frontMatter:{id:"how-kusion-works",sidebar_label:"How Kusion Works?"},sidebar:"kusion",previous:{title:"Configuration",permalink:"/docs/next/concepts/configuration"},next:{title:"Configuration File Overview",permalink:"/docs/next/configuration-walkthrough/overview"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Platform Developer\u2019s Workflow",id:"platform-developers-workflow",level:2},{value:"Design Kusion Modules",id:"design-kusion-modules",level:3},{value:"Instantiate and Set Up Workspaces",id:"instantiate-and-set-up-workspaces",level:3},{value:"Application Developer\u2019s Workflow",id:"application-developers-workflow",level:2},{value:"Instantiate AppConfiguration and Apply",id:"instantiate-appconfiguration-and-apply",level:3}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-kusion-works"},"How Kusion Works?"),(0,a.kt)("p",null,"Kusion is the platform engineering engine of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack"},"KusionStack"),". It delivers intentions described with Kusion Modules defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog")," to Kubernetes, Clouds and On-Prem infrastructures."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/workflow.png",alt:"arch"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The workflow of KusionStack is illustrated in the diagram above, and it consists of three steps. The first step is ",(0,a.kt)("inlineCode",{parentName:"p"},"Write"),", where platform engineers provide Kusion Modules and application developers write AppConfigurations based on the Kusion Modules to describe their operational intent."),(0,a.kt)("p",null,"The second step is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Build")," process, which results in the creation of the SSoT (Single Source of Truth), also known as the ",(0,a.kt)("a",{parentName:"p",href:"spec"},"Intent")," of the current operational task. If you need version management of the SSoT, we recommend you manage the Intent with a VCS (Version Control System) tool like git."),(0,a.kt)("p",null,"The third step is ",(0,a.kt)("inlineCode",{parentName:"p"},"Apply")," which makes the Intent effective. Kusion parses the operational intent based on the Intent produced in the previous step. Before applying the intent, Kusion will execute the Preview command (you can also execute this command manually) which will use a three-way diff algorithm to preview changes and prompt users to make sure all changes meet expectations; the Apply command will then actualize the operational intent onto various infrastructure platforms. Currently, it supports three runtimes: Terraform, Kubernetes, and on-prem infrastructures."),(0,a.kt)("p",null,"As a user of Kusion, if you prefer not to be conscious of so many steps, you can simply use ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply"),", and Kusion will automatically execute all the aforementioned steps for you."),(0,a.kt)("h2",{id:"platform-developers-workflow"},"Platform Developer\u2019s Workflow"),(0,a.kt)("h3",{id:"design-kusion-modules"},"Design Kusion Modules"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"kusion-module/overview"},"Kusion Module")," is a reusable building block designed by platform engineers and contains two components: an application developer-oriented schema and a Kusion module generator. When platform engineers have developed a Kusion module, they can push it to a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"catalog")," repository to make it into a KCL package."),(0,a.kt)("p",null,"Given a database Kusion module as an example, the schema definition is shown below and the generator logic can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/pkg/modules/generators/accessories/database_generator.go"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema MySQL: \n    """ MySQL describes the attributes to locally deploy or create a cloud provider\n    managed mysql database instance for the workload. \n\n    Attributes\n    ----------\n    type: "local" | "cloud", defaults to Undefined, required. \n        Type defines whether the mysql database is deployed locally or provided by \n        cloud vendor. \n    version: str, defaults to Undefined, required. \n        Version defines the mysql version to use. \n\n    Examples\n    --------\n    Instantiate a local mysql database with version of 5.7. \n\n    import models.schema.v1.accessories.mysql\n\n    mysql: mysql.MySQL {\n        type: "local"\n        version: "5.7"\n    }\n    """\n\n    # The deployment mode of the mysql database. \n    type:       "local" | "cloud"\n\n    # The mysql database version to use. \n    version:    str\n')),(0,a.kt)("h3",{id:"instantiate-and-set-up-workspaces"},"Instantiate and Set Up Workspaces"),(0,a.kt)("p",null,"Each ",(0,a.kt)("a",{parentName:"p",href:"workspace"},"workspace")," includes a corresponding Platform config file maintained by platform engineers.\nPlatform engineers should instantiate all workspaces and fulfill all fields with platform default values. Kusion will merge the workspace configuration with AppConfiguration in the Stack of the same name. An example is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'runtimes: \n   # your kubeconfig file path\n  kubernetes:\n    kubeConfig: /etc/kubeconfig.yaml\n   # metadat of used terraform providers\n  terraform: \n    random: \n      version: 3.5.1\n      source: hashicorp/random\n    aws: \n      version: 5.0.1\n      source: hashicorp/aws\n      region: us-east-1\n\nmodules: \n  # platform configuration of AWS RDS MySQL\n  mysql: \n    default: \n      cloud: aws\n      size: 20\n      instanceType: db.t3.micro\n      privateRouting: false\n      suffix: "-mysql"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," block represents a Kusion module. The fields inside are parts of the inputs for the Kusion module generator. For more details about the workspace, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"workspace"},"workspace")," section."),(0,a.kt)("h2",{id:"application-developers-workflow"},"Application Developer\u2019s Workflow"),(0,a.kt)("h3",{id:"instantiate-appconfiguration-and-apply"},"Instantiate AppConfiguration and Apply"),(0,a.kt)("p",null,"Application developers choose Kusion modules they need and instantiate them in the AppConfiguration to describe their operation intentions. We have built some built-in Kusion modules in the repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog")," and we warmly welcome you to join us in building this ecosystem together."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"main.k")," is the ",(0,a.kt)("strong",{parentName:"p"},"only")," configuration maintained by application developers and schemas in this file are defined from the application developer's perspective to reduce their cognitive load. An example is as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-pthyon"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.accessories.mysql\n\n# main.k declares customized configurations for dev stacks.\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            wordpress: c.Container {\n                image: "wordpress:6.3"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_USER": "$(KUSION_DB_USERNAME_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_NAME": "mysql"\n                }\n                ......\n            }\n        }\n        ......\n    }\n    database: {\n        wordpress: mysql.MySQL {\n            type: "cloud"\n            version: "8.0"\n        }\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"workload")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"database")," are both Kusion modules provided by platform engineers and Kusion will convert them into actual infrastructure API calls eventually."),(0,a.kt)("p",null,"Finally, application developers can deliver their operational intent to infrastructures with one command ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply"),"."))}c.isMDXComponent=!0}}]);