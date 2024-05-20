"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1369],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={},i="Application Developer User Guide",l={unversionedId:"concepts/kusion-module/app-dev-guide",id:"version-v0.11/concepts/kusion-module/app-dev-guide",title:"Application Developer User Guide",description:"Choose modules you need",source:"@site/docs_versioned_docs/version-v0.11/3-concepts/3-kusion-module/3-app-dev-guide.md",sourceDirName:"3-concepts/3-kusion-module",slug:"/concepts/kusion-module/app-dev-guide",permalink:"/docs/concepts/kusion-module/app-dev-guide",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/3-concepts/3-kusion-module/3-app-dev-guide.md",tags:[],version:"v0.11",lastUpdatedBy:"elliotxx",lastUpdatedAt:1716172883,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:3,frontMatter:{},sidebar:"kusion",previous:{title:"Platform Engineer Develop Guide",permalink:"/docs/concepts/kusion-module/develop-guide"},next:{title:"Workspace",permalink:"/docs/concepts/workspace"}},s={},p=[{value:"Choose modules you need",id:"choose-modules-you-need",level:2},{value:"Import and initialize modules",id:"import-and-initialize-modules",level:2},{value:"Add dependencies",id:"add-dependencies",level:3},{value:"Initialize modules",id:"initialize-modules",level:3},{value:"Preview the result",id:"preview-the-result",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-developer-user-guide"},"Application Developer User Guide"),(0,o.kt)("h2",{id:"choose-modules-you-need"},"Choose modules you need"),(0,o.kt)("p",null,"For all KusionStack built-in modules, you can find all available versions and documents in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/modules/"},"reference")),(0,o.kt)("h2",{id:"import-and-initialize-modules"},"Import and initialize modules"),(0,o.kt)("h3",{id:"add-dependencies"},"Add dependencies"),(0,o.kt)("p",null,"Taking ",(0,o.kt)("inlineCode",{parentName:"p"},"kawesome")," as an example, the directory structure is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"example\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 example_workspace.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n")),(0,o.kt)("p",null,"Before importing modules in your AppConfiguration, you should add them to the dependencies part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "example"\n\n[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.1.0" }\nkawesome = { oci = "oci://ghcr.io/kusionstack/kawesome", tag = "0.1.0" }\n\n[profile]\nentries = ["main.k"]\n')),(0,o.kt)("p",null,"The kam dependency represents the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kam.git"},"Kusion Application Module")," which contains the AppConfiguration and other basic modules. The ",(0,o.kt)("inlineCode",{parentName:"p"},"kawesome")," is the Kusion module we are going to use in the AppConfiguration."),(0,o.kt)("h3",{id:"initialize-modules"},"Initialize modules"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import kam.v1.app_configuration as ac\nimport kam.v1.workload as wl\nimport kam.v1.workload.container as c\nimport kawesome.kawesome as ks\n\nkawesome: ac.AppConfiguration {\n    # Declare the workload configurations. \n    workload: wl.Service {\n        containers: {\n            kawesome: c.Container {\n                image: "hashicorp/http-echo"\n            }\n        }\n    }\n    # Declare the kawesome module configurations. \n    accessories: {\n        "kawesome": ks.Kawesome {\n            service: ks.Service{\n                port: 5678\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"kawesome")," module in the ",(0,o.kt)("inlineCode",{parentName:"p"},"accessories")," block of the AppConfiguration. The key of the ",(0,o.kt)("inlineCode",{parentName:"p"},"accessories")," item represents the module name and the value represents the actual module you required."),(0,o.kt)("h2",{id:"preview-the-result"},"Preview the result"),(0,o.kt)("p",null,"Execute the preview command to validate the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion preview\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"}," \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                           \nStack: dev                                                                   \nID                                                                           Action\nhashicorp:random:random_password:example-dev-kawesome                        Create\nv1:Namespace:example                                                         Create\nv1:Service:example:example-dev-kawesome                                      Create\napps.kusionstack.io/v1alpha1:PodTransitionRule:example:example-dev-kawesome  Create\napps.kusionstack.io/v1alpha1:CollaSet:example:example-dev-kawesome           Create\n\n\n? Which diff detail do you want to see?  [Use arrows to move, type to filter]\n> all\n  hashicorp:random:random_password:example-dev-kawesome Create\n  v1:Namespace:example Create\n  v1:Service:example:example-dev-kawesome Create\n  apps.kusionstack.io/v1alpha1:PodTransitionRule:example:example-dev-kawesome Create\n  apps.kusionstack.io/v1alpha1:CollaSet:example:example-dev-kawesome Create\n  cancel\n\n")))}d.isMDXComponent=!0}}]);