"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[84068],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(h,a(a({ref:n},c),{},{components:t})):o.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const r={id:"job"},a="Schedule a Job",l={unversionedId:"user-guides/working-with-k8s/job",id:"version-v0.12/user-guides/working-with-k8s/job",title:"Schedule a Job",description:"The guides above provide examples on how to configure workloads of the type wl.Service, which is typically used for long-running web applications that should never go down. Alternatively, you could also schedule another kind of workload profile, namely wl.Job which corresponds to a one-off or recurring execution of tasks that run to completion and then stop.",source:"@site/docs_versioned_docs/version-v0.12/5-user-guides/2-working-with-k8s/7-job.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/job",permalink:"/docs/user-guides/working-with-k8s/job",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/5-user-guides/2-working-with-k8s/7-job.md",tags:[],version:"v0.12",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718370150,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:7,frontMatter:{id:"job"},sidebar:"kusion",previous:{title:"Set up Operational Rules",permalink:"/docs/user-guides/working-with-k8s/set-up-operational-rules"},next:{title:"Configure Monitoring Behavior With Prometheus",permalink:"/docs/user-guides/observability/prometheus"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managing Workspace Configuration",id:"managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"schedule-a-job"},"Schedule a Job"),(0,i.kt)("p",null,"The guides above provide examples on how to configure workloads of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"wl.Service"),", which is typically used for long-running web applications that should ",(0,i.kt)("strong",{parentName:"p"},"never")," go down. Alternatively, you could also schedule another kind of workload profile, namely ",(0,i.kt)("inlineCode",{parentName:"p"},"wl.Job")," which corresponds to a one-off or recurring execution of tasks that run to completion and then stop."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for scheduling a job."),(0,i.kt)("p",null,"The example below also requires you to have ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will create a workspace and also generate a ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,i.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,i.kt)("h2",{id:"managing-workspace-configuration"},"Managing Workspace Configuration"),(0,i.kt)("p",null,"In the first guide in this series, we introduced a step to ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing-workspace-configuration"},"initialize a workspace")," with an empty configuration. The same empty configuration will still work in this guide, no changes are required there. Alternatively, if you have updated your workspace config in the previous guides, no changes need to be made either."),(0,i.kt)("p",null,"However, if you (or the platform team) would like to set default values for the workloads to standardize the behavior of applications in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," workspace, you can do so by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/dev.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  service:\n    default:\n      replicas: 3\n      labels:\n        label-key: label-value\n      annotations:\n        annotation-key: annotation-value\n")),(0,i.kt)("p",null,"Please note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas")," in the workspace configuration only works as a default value and will be overridden by the value set in the application configuration."),(0,i.kt)("p",null,"The workspace configuration need to be updated with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kusion workspace update dev -f ~/dev.yaml\n")),(0,i.kt)("p",null,"For a full reference of what can be configured in the workspace level, please see the ",(0,i.kt)("a",{parentName:"p",href:"../../reference/modules/workspace-configs/workload/job"},"workspace reference"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"To schedule a job with cron expression, update ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-service/dev/kcl.mod")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-service/dev/main.k")," to the following:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"simple-service/dev/kcl.mod"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'[package]\nname = "simple-service"\nversion = "0.1.0"\n\n[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.2.0" }\njob = { oci = "oci://ghcr.io/kusionstack/job", tag = "0.1.0" }\nnetwork = { oci = "oci://ghcr.io/kusionstack/network", tag = "0.2.0" }\n\n[profile]\nentries = ["main.k"]\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"simple-service/dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import kam.v1.app_configuration as ac\nimport job\nimport job.container as c\n\nhelloworld: ac.AppConfiguration {\n    workload: job.Job {\n        containers: {\n            "busybox": c.Container {\n                # The target image\n                image: "busybox:1.28"\n                # Run the following command as defined\n                command: ["/bin/sh", "-c", "echo hello"]\n            }\n        }\n        # Run every minute.\n        schedule: "* * * * *"\n    }\n}\n')),(0,i.kt)("p",null,"The KCL snippet above schedules a job. Alternatively, if you want a one-time job without cron, simply remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule")," from the configuration."),(0,i.kt)("p",null,"You can find the full example in here in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/tree/main/example/simple-job"},"konfig repo"),"."),(0,i.kt)("h2",{id:"applying"},"Applying"),(0,i.kt)("p",null,"Re-run steps in ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying")," and schedule the job. Your output might look like one of the following:"),(0,i.kt)("p",null,"If you are starting from scratch, all resources are created on the spot:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                     \nStack: dev  ID                                                    Action\n* \u251c\u2500     v1:Namespace:simple-service                               Create\n* \u2514\u2500     batch/v1:CronJob:simple-service:simple-service-dev-helloworld  Create\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  Create v1:Namespace:simple-service success                                                                                                                                                                                              \n SUCCESS  Create batch/v1:CronJob:simple-service:helloworld-dev-helloworld success                                                                                                                                                                 \nCreate batch/v1:CronJob:simple-service:simple-service-dev-helloworld success [2/2] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 2 created, 0 updated, 0 deleted.\n")),(0,i.kt)("p",null,"If you are starting from the last guide which configures an ",(0,i.kt)("inlineCode",{parentName:"p"},"opsrule"),", the output looks like the following which destroys the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," and replace it with a ",(0,i.kt)("inlineCode",{parentName:"p"},"CronJob"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                     \nStack: dev  ID                                                               Action\n* \u251c\u2500     v1:Namespace:simple-service                                      UnChanged\n* \u251c\u2500     batch/v1:CronJob:simple-service:simple-service-dev-helloworld     Create\n* \u251c\u2500     apps/v1:Deployment:simple-service:simple-service-dev-helloworld  Delete\n* \u2514\u2500     v1:Service:simple-service:simple-service-dev-helloworld-private  Delete\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:simple-service, skip                                                                                                                                                                                         \n SUCCESS  Delete apps/v1:Deployment:simple-service:simple-service-dev-helloworld success                                                                                                                                                      \n SUCCESS  Create batch/v1:CronJob:simple-service:simple-service-dev-helloworld success                                                                                                                                                         \n SUCCESS  Delete v1:Service:simple-service:simple-service-dev-helloworld-private success                                                                                                                                                      \nDelete v1:Service:simple-service:simple-service-dev-helloworld-private success [4/4] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 1 created, 0 updated, 2 deleted.\n")),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"We can verify the job has now been scheduled:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get cronjob -n simple-service\nNAME                       SCHEDULE    SUSPEND   ACTIVE   LAST SCHEDULE   AGE\nsimple-service-dev-helloworld   * * * * *   False     0        <none>          2m18s\n")),(0,i.kt)("p",null,"Verify the job has been triggered after the minute mark since we scheduled it to run every minute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get job -n simple-service\nNAME                                COMPLETIONS   DURATION   AGE\nsimple-service-dev-helloworld-28415748   1/1           5s         11s\n")))}u.isMDXComponent=!0}}]);