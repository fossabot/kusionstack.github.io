"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={id:"set-up-operational-rules"},o="Set up Operational Rules",l={unversionedId:"user-guides/working-with-k8s/set-up-operational-rules",id:"version-v0.13/user-guides/working-with-k8s/set-up-operational-rules",title:"Set up Operational Rules",description:"You can set up operational rules in the AppConfiguration model with the opsrule accessory and corresponding platform configurations in the workspace directory. The opsrule is the collection of operational rule requirements for the application that are used as a preemptive measure to police and stop any unwanted changes.",source:"@site/docs_versioned_docs/version-v0.13/5-user-guides/2-working-with-k8s/6-set-up-operational-rules.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/set-up-operational-rules",permalink:"/docs/user-guides/working-with-k8s/set-up-operational-rules",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.13/5-user-guides/2-working-with-k8s/6-set-up-operational-rules.md",tags:[],version:"v0.13",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"Oct 5, 2024",sidebarPosition:6,frontMatter:{id:"set-up-operational-rules"},sidebar:"kusion",previous:{title:"Configure Resource Specification",permalink:"/docs/user-guides/working-with-k8s/resource-spec"},next:{title:"Schedule a Job",permalink:"/docs/user-guides/working-with-k8s/job"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managing Workspace Configuration",id:"managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set-up-operational-rules"},"Set up Operational Rules"),(0,i.kt)("p",null,"You can set up operational rules in the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model with the ",(0,i.kt)("inlineCode",{parentName:"p"},"opsrule")," accessory and corresponding platform configurations in the workspace directory. The ",(0,i.kt)("inlineCode",{parentName:"p"},"opsrule")," is the collection of operational rule requirements for the application that are used as a preemptive measure to police and stop any unwanted changes."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,i.kt)("p",null,"The example below also requires you to have ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will create a workspace and also generate a ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,i.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,i.kt)("h2",{id:"managing-workspace-configuration"},"Managing Workspace Configuration"),(0,i.kt)("p",null,"In the first guide in this series, we introduced a step to ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing-workspace-configuration"},"initialize a workspace")," with an empty configuration. The same empty configuration will still work in this guide, no changes are required there."),(0,i.kt)("p",null,"However, if you (or the platform team) would like to set default values for the opsrule to standardize the behavior of applications, you can do so by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/dev.yaml"),".\nNote that the platform engineers should set the default workload to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/operating"},"Kusion Operation CollaSet")," and installed the Kusion Operation controllers properly, the ",(0,i.kt)("inlineCode",{parentName:"p"},"opsrules")," module will generate a ",(0,i.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/operating/manuals/podtransitionrule"},"PodTransitionRule")," instead of updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," value in the deployment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  service:\n    default:\n      type: CollaSet\n  kusionstack/opsrule@0.1.0:\n    default:\n      maxUnavailable: 30%\n")),(0,i.kt)("p",null,"Please note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," in the workspace configuration only works as a default value and will be overridden by the value set in the application configuration."),(0,i.kt)("p",null,"The workspace configuration need to be updated with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kusion workspace update dev -f ~/dev.yaml\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"opsrule")," module dependency to ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "simple-service"\nversion = "0.1.0"\n\n[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.2.0" }\nservice = { oci = "oci://ghcr.io/kusionstack/service", tag = "0.1.0" }\nnetwork = { oci = "oci://ghcr.io/kusionstack/network", tag = "0.2.0" }\nopsrule = { oci = "oci://ghcr.io/kusionstack/opsrule", tag = "0.1.0" }\n\n[profile]\nentries = ["main.k"]\n')),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"opsrule")," snippet to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-service/dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport opsrule\n\nhelloworld: ac.AppConfiguration {\n    workload: service.Service {\n        ...\n    }\n    # Configure the maxUnavailable rule\n    accessories: {\n        "opsrule": opsrule.OpsRule {\n            "maxUnavailable": 50%\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"applying"},"Applying"),(0,i.kt)("p",null,"Re-run steps in ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", resource scaling is completed."),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"We can verify the application deployment strategy now has the updated attributes ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable: 50%")," in the container configuration."))}c.isMDXComponent=!0}}]);