"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},l="Application Developer User Guide",i={unversionedId:"concepts/module/app-dev-guide",id:"version-v0.12/concepts/module/app-dev-guide",title:"Application Developer User Guide",description:"Prerequisites",source:"@site/docs_versioned_docs/version-v0.12/3-concepts/3-module/3-app-dev-guide.md",sourceDirName:"3-concepts/3-module",slug:"/concepts/module/app-dev-guide",permalink:"/zh/docs/concepts/module/app-dev-guide",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/3-concepts/3-module/3-app-dev-guide.md",tags:[],version:"v0.12",lastUpdatedBy:"hexin",lastUpdatedAt:1724066016,formattedLastUpdatedAt:"2024\u5e748\u670819\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"kusion",previous:{title:"Platform Engineer Develop Guide",permalink:"/zh/docs/concepts/module/develop-guide"},next:{title:"Workspace",permalink:"/zh/docs/concepts/workspace"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Browse available modules",id:"browse-available-modules",level:2},{value:"Add modules to your Stack",id:"add-modules-to-your-stack",level:2},{value:"Initialize modules",id:"initialize-modules",level:2},{value:"Apply the result",id:"apply-the-result",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-developer-user-guide"},"Application Developer User Guide"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kusion v0.12 or higher installed locally")),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"As an application developer, the workflow of using a Kusion module looks like this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Browse available modules registered by platform engineers in the workspace"),(0,o.kt)("li",{parentName:"ol"},"Add modules you need to your Stack"),(0,o.kt)("li",{parentName:"ol"},"Initialize modules"),(0,o.kt)("li",{parentName:"ol"},"Apply the AppConfiguration")),(0,o.kt)("h2",{id:"browse-available-modules"},"Browse available modules"),(0,o.kt)("p",null,"For all KusionStack built-in modules, you can find all available modules and documents in the ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/reference/modules/"},"reference")),(0,o.kt)("p",null,"Since the platform engineers have already registered the available modules in the workspace, app developers can execute ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion mod list")," to list the available modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion mod list --workspace dev\n\nName      Version  URL\nkawesome  0.2.0    oci://ghcr.io/kusionstack/kawesome\n")),(0,o.kt)("h2",{id:"add-modules-to-your-stack"},"Add modules to your Stack"),(0,o.kt)("p",null,"Taking ",(0,o.kt)("inlineCode",{parentName:"p"},"kawesome")," as an example, the directory structure is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"example\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 example_workspace.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n")),(0,o.kt)("p",null,"Select the module you need from the result of ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion mod list")," and execute ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion mod add kawesome")," to add ",(0,o.kt)("inlineCode",{parentName:"p"},"kawesome")," into your Stack."),(0,o.kt)("p",null,"Once you have added the ",(0,o.kt)("inlineCode",{parentName:"p"},"kawesome")," module, the ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file will be updated to look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "example"\n\n[dependencies]\nkawesome = { oci = "oci://ghcr.io/kusionstack/kawesome", tag = "0.2.0" }\nservice = {oci = "oci://ghcr.io/kusionstack/service", tag = "0.1.0" }\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.2.0" }\n\n[profile]\nentries = ["main.k"]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"kam")," dependency represents the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kam.git"},"Kusion Application Module")," which contains the AppConfiguration."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"service")," dependency represents the service workload module."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"kawesome")," is the Kusion module we are going to use in the AppConfiguration.")),(0,o.kt)("h2",{id:"initialize-modules"},"Initialize modules"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# The configuration codes in perspective of developers. \nimport kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport kawesome.v1.kawesome\n\nkawesome: ac.AppConfiguration {\n    # Declare the workload configurations. \n    workload: service.Service {\n        containers: {\n            kawesome: c.Container {\n                image: "hashicorp/http-echo"\n                env: {\n                    "ECHO_TEXT": "$(KUSION_KAWESOME_RANDOM_PASSWORD)"\n                }\n            }\n        }\n        replicas: 1\n    }\n    # Declare the kawesome module configurations. \n    accessories: {\n        "kawesome": kawesome.Kawesome {\n            service: kawesome.Service{\n                port: 5678\n            }\n            randomPassword: kawesome.RandomPassword {\n                length: 20\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"kawesome")," module in the ",(0,o.kt)("inlineCode",{parentName:"p"},"accessories")," block of the AppConfiguration. The key of the ",(0,o.kt)("inlineCode",{parentName:"p"},"accessories")," item represents the module name and the value represents the actual module you required."),(0,o.kt)("h2",{id:"apply-the-result"},"Apply the result"),(0,o.kt)("p",null,"Execute the preview command to validate the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...\nStack: dev\nID                                                     Action\nhashicorp:random:random_password:example-dev-kawesome  Create\nv1:Namespace:example                                   Create\nv1:Service:example:example-dev-kawesome                Create\napps/v1:Deployment:example:example-dev-kawesome        Create\n\n\nDo you want to apply these diffs?:\n  > details\nWhich diff detail do you want to see?:\n> all\n  hashicorp:random:random_password:example-dev-kawesome Create\n  v1:Namespace:example Create\n  v1:Service:example:example-dev-kawesome Create\n  apps/v1:Deployment:example:example-dev-kawesome Create\n")))}c.isMDXComponent=!0}}]);