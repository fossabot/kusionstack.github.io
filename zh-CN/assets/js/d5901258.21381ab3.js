"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:3},i="Konfig",s={unversionedId:"user_docs/concepts/konfig",id:"user_docs/concepts/konfig",title:"Konfig",description:'Konfig is a monorepo that stores configurations about operation intentions mainly described by KCL. Users can write configuration (config), type (schema), function (lambda) and policy (rule) through the record and functional language KCL. Konfig provides an out-of-the-box cloud-native application model, allowing users to quickly start the journey of cloud-native delivery. Developers can write base models and application models through KCL\'s modular language features, which helps the platform side quickly reveal capabilities through "building blocks", and application developers can define application models as needed.',source:"@site/docs/user_docs/concepts/konfig.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/konfig",permalink:"/zh-CN/docs/user_docs/concepts/konfig",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/konfig.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1673342563,formattedLastUpdatedAt:"2023/1/10",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"\u67b6\u6784 & \u6982\u5ff5",permalink:"/zh-CN/docs/user_docs/concepts/"},next:{title:"Kusion \u6574\u4f53\u67b6\u6784",permalink:"/zh-CN/docs/user_docs/concepts/arch"}},c={},l=[{value:"Konfig Structure",id:"konfig-structure",level:2},{value:"Project &amp; Stack",id:"project--stack",level:2},{value:"Project",id:"project",level:3},{value:"Stack",id:"stack",level:3},{value:"Relationship between Project and Stack",id:"relationship-between-project-and-stack",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"konfig"},"Konfig"),(0,a.kt)("p",null,'Konfig is a monorepo that stores configurations about operation intentions mainly described by KCL. Users can write configuration (config), type (schema), function (lambda) and policy (rule) through the record and functional language KCL. Konfig provides an out-of-the-box cloud-native application model, allowing users to quickly start the journey of cloud-native delivery. Developers can write base models and application models through KCL\'s modular language features, which helps the platform side quickly reveal capabilities through "building blocks", and application developers can define application models as needed.'),(0,a.kt)("p",null,"Konfig repository is a unified programming interface for all operation scenarios and is a cooperation workspace for application developers, platform developers and SREs."),(0,a.kt)("p",null,"For more details, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://KusionStack.io/docs/reference/model/overview"},"Model Overview")),(0,a.kt)("h2",{id:"konfig-structure"},"Konfig Structure"),(0,a.kt)("p",null,"The overall structure of the configuration library is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Makefile            # use Makefile to encapsulate common commands\n\u251c\u2500\u2500 README.md           # configuration library instructions\n\u251c\u2500\u2500 appops              # application operation and maintenance directory\n\u2502   \u251c\u2500\u2500 guestbook-frontend\n\u2502   \u251c\u2500\u2500 http-echo\n\u2502   \u2514\u2500\u2500 nginx-example\n\u251c\u2500\u2500 base                # Kusion Model repository\n\u2502   \u251c\u2500\u2500 examples        # Kusion Model example code\n\u2502   \u2502   \u251c\u2500\u2500 monitoring  # monitoring configuration example\n\u2502   \u2502   \u251c\u2500\u2500 k8s         # Kubernetes resource configuration example\n\u2502   \u2502   \u2514\u2500\u2500 infra       # infrastructure configuration example\n\u2502   \u2514\u2500\u2500 pkg\n\u2502       \u251c\u2500\u2500 kusion_kubernetes   # Kubernetes low-level model library\n\u2502       \u251c\u2500\u2500 kusion_models       # core model library\n\u2502       \u251c\u2500\u2500 kusion_prometheus   # Prometheus low-level model library\n\u2502       \u2514\u2500\u2500 kusion_provider     # infrastructure low-level model library\n\u251c\u2500\u2500 hack                # python scripts\n\u2514\u2500\u2500 kcl.mod             # core library configuration file\n")),(0,a.kt)("h2",{id:"project--stack"},"Project & Stack"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(57569).Z,width:"1204",height:"764"})),(0,a.kt)("p",null,"Project and Stack are logical isolation concepts used to orginize the Konfig."),(0,a.kt)("h3",{id:"project"},"Project"),(0,a.kt)("p",null,"Any folder that contains the file ",(0,a.kt)("inlineCode",{parentName:"p"},"project.yaml")," will be regarded as a Project, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"project.yaml")," is used to describe the metadata of this Project like ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant"),". Projects must have clear business semantics and must belong to a tenant. Users can map an application or an operation scenario to a Project."),(0,a.kt)("h3",{id:"stack"},"Stack"),(0,a.kt)("p",null,"Like Project, any folder that contains the file ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml")," will be regarded as a Stack and ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml")," is used to describe the metadata of this Stack. Stack is a set of ",(0,a.kt)("inlineCode",{parentName:"p"},".k")," files that represents the smallest operation unit that can be configured and deployed individually. It tends to represent different stages in the CI/CD process, such as dev, gray, prod, etc."),(0,a.kt)("h3",{id:"relationship-between-project-and-stack"},"Relationship between Project and Stack"),(0,a.kt)("p",null,"A Project contains one or more Stacks, and a Stack must belong to and can only belong to one Project. Users can interpret the meaning of Project and Stack according to their own needs and flexibly organize the Konfig structure. We provide the following example as a best practice according to our experiences:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"appops/nginx-example\n\u251c\u2500\u2500 README.md       # Project readme\n\u251c\u2500\u2500 base            # common configurations for all stacks\n\u2502   \u2514\u2500\u2500 base.k      \n\u251c\u2500\u2500 dev             # dev stack \n\u2502   \u251c\u2500\u2500 ci-test     # CI test configs\n\u2502   \u2502   \u251c\u2500\u2500 settings.yaml       # test data \n\u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml  # expected test result\n\u2502   \u251c\u2500\u2500 kcl.yaml    # kcl config\n\u2502   \u251c\u2500\u2500 main.k      \n\u2502   \u2514\u2500\u2500 stack.yaml  # Stack metadata\n\u2514\u2500\u2500 project.yaml    # Project metadata\n")),(0,a.kt)("p",null,"The Project represents an application and Stack represents different environments of this application, such as dev, pre and prod, etc. Common configurations can be stored in a ",(0,a.kt)("inlineCode",{parentName:"p"},"base")," directory under this Project."))}d.isMDXComponent=!0},57569:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/project-stack-1538e650948e141eabc6d5cfa42aa54c.png"}}]);