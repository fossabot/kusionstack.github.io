"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},i="Set up operational rules",l={unversionedId:"user_docs/guides/working-with-k8s/set-up-operational-rules",id:"user_docs/guides/working-with-k8s/set-up-operational-rules",title:"Set up operational rules",description:"You can set up operational rules in the AppConfiguration model via the opsRule field and corresponding platform configurations in the workspace directory. The opsRule is the collection of operational rule requirements for the application that are used as a preemptive measure to police and stop any unwanted changes.",source:"@site/docs/user_docs/guides/working-with-k8s/6-set-up-operational-rules.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/set-up-operational-rules",permalink:"/docs/next/user_docs/guides/working-with-k8s/set-up-operational-rules",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/6-set-up-operational-rules.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1704783020,formattedLastUpdatedAt:"Jan 9, 2024",sidebarPosition:6,frontMatter:{},sidebar:"user_docs",previous:{title:"Configure Resource Specification",permalink:"/docs/next/user_docs/guides/working-with-k8s/resource-spec"},next:{title:"Configure Monitoring Behavior With Prometheus",permalink:"/docs/next/user_docs/guides/observability/prometheus"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"App Configuration",id:"app-configuration",level:3},{value:"Platform configuration",id:"platform-configuration",level:3},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-up-operational-rules"},"Set up operational rules"),(0,a.kt)("p",null,"You can set up operational rules in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,a.kt)("inlineCode",{parentName:"p"},"opsRule")," field and corresponding platform configurations in the workspace directory. The ",(0,a.kt)("inlineCode",{parentName:"p"},"opsRule")," is the collection of operational rule requirements for the application that are used as a preemptive measure to police and stop any unwanted changes."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/user_docs/guides/working-with-k8s/deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,a.kt)("p",null,"The example below also requires you to have ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/user_docs/guides/working-with-k8s/deploy-application#initializing"},"initialized the project")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/user_docs/guides/working-with-k8s/deploy-application#kclmod"},(0,a.kt)("inlineCode",{parentName:"a"},"kcl.mod"))," file under the project directory."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"app-configuration"},"App Configuration"),(0,a.kt)("p",null," Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"opsRule")," snippet to the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"dev/main.k")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.trait as t\n\nhelloworld: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "helloworld": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v4"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512M"\n                }\n            }\n        }\n        replicas: 2\n    }\n    # config the maxUnavailable rule\n    opsRule = t.OpsRule {\n        maxUnavailable: "30%"\n    }\n}\n')),(0,a.kt)("h3",{id:"platform-configuration"},"Platform configuration"),(0,a.kt)("p",null,"For platform engineers, you can also set default values of the opsRule in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.kusion/workspace/dev.yaml")," to standardize the behavior of applications. The ",(0,a.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," in the platform configuration will be overridden by the value set in the application configuration."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the platform engineers have set the default workload to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/operating"},"Kusion Operation")," and installed the Kusion Operation controllers properly, the ",(0,a.kt)("inlineCode",{parentName:"p"},"opsRules")," module will generate a ",(0,a.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/operating/manuals/podtransitionrule"},"PodTransitionRule")," instead of updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," value in the deployment")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'modules:\n    opsRule:\n        default:\n            maxUnavailable: "40%"\n')),(0,a.kt)("h2",{id:"applying"},"Applying"),(0,a.kt)("p",null,"Re-run steps in ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/user_docs/guides/working-with-k8s/deploy-application#applying"},"Applying"),", resource scaling is completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kusion apply\n\u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                                                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  UnChanged\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:helloworld, skip                                                                                                                                                                                                                               \n SUCCESS  UnChanged v1:Service:helloworld:helloworld-dev-helloworld-private, skip                                                                                                                                                                                               \n SUCCESS  Update apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nUpdate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,"We can verify the application deployment strategy now has the updated attributes ",(0,a.kt)("inlineCode",{parentName:"p"},"maxUnavailable: 30%")," in the container configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deployment -n helloworld -o yaml\n...\napiVersion: apps/v1\n    kind: Deployment\n...\n  spec:\n    strategy:\n      rollingUpdate:\n        maxUnavailable: 30%\n      type: RollingUpdate\n\n...\n")))}d.isMDXComponent=!0}}]);