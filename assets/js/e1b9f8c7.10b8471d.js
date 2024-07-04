"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="Set up Operational Rules",l={unversionedId:"user-guides/working-with-k8s/set-up-operational-rules",id:"version-v0.10/user-guides/working-with-k8s/set-up-operational-rules",title:"Set up Operational Rules",description:"You can set up operational rules in the AppConfiguration model via the opsRule field and corresponding platform configurations in the workspace directory. The opsRule is the collection of operational rule requirements for the application that are used as a preemptive measure to police and stop any unwanted changes.",source:"@site/docs_versioned_docs/version-v0.10/5-user-guides/2-working-with-k8s/6-set-up-operational-rules.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/set-up-operational-rules",permalink:"/docs/v0.10/user-guides/working-with-k8s/set-up-operational-rules",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/5-user-guides/2-working-with-k8s/6-set-up-operational-rules.md",tags:[],version:"v0.10",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1720065334,formattedLastUpdatedAt:"Jul 4, 2024",sidebarPosition:6,frontMatter:{},sidebar:"kusion",previous:{title:"Configure Resource Specification",permalink:"/docs/v0.10/user-guides/working-with-k8s/resource-spec"},next:{title:"Schedule a Job",permalink:"/docs/v0.10/user-guides/working-with-k8s/job"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managing Workspace Configuration",id:"managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"set-up-operational-rules"},"Set up Operational Rules"),(0,i.kt)("p",null,"You can set up operational rules in the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,i.kt)("inlineCode",{parentName:"p"},"opsRule")," field and corresponding platform configurations in the workspace directory. The ",(0,i.kt)("inlineCode",{parentName:"p"},"opsRule")," is the collection of operational rule requirements for the application that are used as a preemptive measure to police and stop any unwanted changes."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,i.kt)("p",null,"The example below also requires you to have ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will create a workspace and also generate a ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,i.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,i.kt)("h2",{id:"managing-workspace-configuration"},"Managing Workspace Configuration"),(0,i.kt)("p",null,"In the first guide in this series, we introduced a step to ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing-workspace-configuration"},"initialize a workspace")," with an empty configuration. The same empty configuration will still work in this guide, no changes are required there."),(0,i.kt)("p",null,"However, if you (or the platform team) would like to set default values for the opsRule to standardize the behavior of applications, you can do so by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/dev.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'modules:\n    opsRule:\n        default:\n            maxUnavailable: "40%"\n')),(0,i.kt)("p",null,"Please note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," in the workspace configuration only works as a default value and will be overridden by the value set in the application configuration."),(0,i.kt)("p",null,"The workspace configuration need to be updated with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kusion workspace update dev -f ~/dev.yaml\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If the platform engineers have set the default workload to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/operating"},"Kusion Operation")," and installed the Kusion Operation controllers properly, the ",(0,i.kt)("inlineCode",{parentName:"p"},"opsRules")," module will generate a ",(0,i.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/operating/manuals/podtransitionrule"},"PodTransitionRule")," instead of updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," value in the deployment")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"opsRule")," snippet to the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-service/dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.trait as t\n\nhelloworld: ac.AppConfiguration {\n    workload: wl.Service {\n        ...\n    }\n    # Configure the maxUnavailable rule\n    opsRule = t.OpsRule {\n        maxUnavailable: "30%"\n    }\n}\n')),(0,i.kt)("h2",{id:"applying"},"Applying"),(0,i.kt)("p",null,"Re-run steps in ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", resource scaling is completed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kusion apply\n\u2714\ufe0e  Generating Intent in the Stack dev...                                                                                                                                                                                                     \nStack: dev  ID                                                               Action\n* \u251c\u2500     v1:Namespace:simple-service                                      UnChanged\n* \u251c\u2500     v1:Service:simple-service:simple-service-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:simple-service:simple-service-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:simple-service, skip                                                                                                                                                                                         \n SUCCESS  UnChanged v1:Service:simple-service:simple-service-dev-helloworld-private, skip                                                                                                                                                     \n SUCCESS  Update apps/v1:Deployment:simple-service:simple-service-dev-helloworld success                                                                                                                                                      \nUpdate apps/v1:Deployment:simple-service:simple-service-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"We can verify the application deployment strategy now has the updated attributes ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable: 30%")," in the container configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment -n simple-service -o yaml\n...\napiVersion: apps/v1\n    kind: Deployment\n...\n  spec:\n    strategy:\n      rollingUpdate:\n        maxUnavailable: 30%\n      type: RollingUpdate\n\n...\n")))}c.isMDXComponent=!0}}]);