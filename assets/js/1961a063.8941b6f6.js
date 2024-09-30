"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8025],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(87462),o=(t(67294),t(3905));const i={},r="Workload",l={unversionedId:"configuration-walkthrough/workload",id:"configuration-walkthrough/workload",title:"Workload",description:"The workload attribute in the AppConfiguration instance is used to describe the specification for the application workload. The application workload generally represents the computing component for the application.",source:"@site/docs/kusion/4-configuration-walkthrough/4-workload.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/workload",permalink:"/docs/next/configuration-walkthrough/workload",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/4-configuration-walkthrough/4-workload.md",tags:[],version:"current",lastUpdatedBy:"Yang Yang",lastUpdatedAt:1727679683,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:4,frontMatter:{},sidebar:"kusion",previous:{title:"Base and Override",permalink:"/docs/next/configuration-walkthrough/base-override"},next:{title:"Application Networking",permalink:"/docs/next/configuration-walkthrough/networking"}},p={},s=[{value:"Table of Content",id:"table-of-content",level:2},{value:"Import",id:"import",level:2},{value:"Types of Workloads",id:"types-of-workloads",level:2},{value:"Configure containers",id:"configure-containers",level:2},{value:"Application image",id:"application-image",level:3},{value:"Resource Requirements",id:"resource-requirements",level:3},{value:"Health Probes",id:"health-probes",level:3},{value:"Lifecycle Hooks",id:"lifecycle-hooks",level:3},{value:"Create Files",id:"create-files",level:3},{value:"Customize container initialization",id:"customize-container-initialization",level:3},{value:"Configure Replicas",id:"configure-replicas",level:2},{value:"Differences between Service and Job",id:"differences-between-service-and-job",level:2},{value:"Exposure",id:"exposure",level:3},{value:"Job Schedule",id:"job-schedule",level:3},{value:"Workload References",id:"workload-references",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workload"},"Workload"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"workload")," attribute in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance is used to describe the specification for the application workload. The application workload generally represents the computing component for the application."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"workload")," maps to an ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance 1:1. If there are more than one workload, they should be considered different applications."),(0,o.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#import"},"Import")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#types-of-workloads"},"Types of workloads")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configure-containers"},"Configure containers"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#application-image"},"Application image")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#resource-requirements"},"Resource Requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#health-probes"},"Health Probes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#lifecycle-hooks"},"Lifecycle Hooks")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#create-files"},"Create Files")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#customize-container-initialization"},"Customize container initialization")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configure-replicas"},"Configure Replicas")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#differences-between-service-and-job"},"Differences between Service and Job")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#workload-references"},"Workload References"))),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog")," package. For more details on KCL package import, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"overview"},"Configuration File Overview"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport service.container.probe as p\nimport service.container.lifecycle as lc\n")),(0,o.kt)("h2",{id:"types-of-workloads"},"Types of Workloads"),(0,o.kt)("p",null,"There are currently two types of workloads:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Service"),', representing a long-running, scalable workload type that should "never" go down and respond to short-lived latency-sensitive requests. This workload type is commonly used for web applications and services that expose APIs.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Job"),", representing batch tasks that take from a few seconds to days to complete and then stop. These are commonly used for batch processing that is less sensitive to short-term performance fluctuations.")),(0,o.kt)("p",null,"To instantiate a ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {}\n}\n")),(0,o.kt)("p",null,"To instantiate a ",(0,o.kt)("inlineCode",{parentName:"p"},"Job"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import kam.v1.app_configuration as ac\nimport job\nimport job.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: job.Job {}\n}\n")),(0,o.kt)("p",null,"Of course, the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instances above is not sufficient to describe an application. We still need to provide more details in the ",(0,o.kt)("inlineCode",{parentName:"p"},"workload")," section."),(0,o.kt)("h2",{id:"configure-containers"},"Configure containers"),(0,o.kt)("p",null,"Kusion is built on top of cloud-native philosophies. One of which is that applications should run as loosely coupled microservices on abstract and self-contained software units, such as containers."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"containers")," attribute in a workload instance is used to define the behavior for the containers that run application workload. The ",(0,o.kt)("inlineCode",{parentName:"p"},"containers")," attribute is a map, from the name of the container to the ",(0,o.kt)("inlineCode",{parentName:"p"},"catalog.models.schema.v1.workload.container.Container")," Object which includes the container configurations."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The name of the container is in the context of the configuration file, so you could refer to it later. It's not referring to the name of the container in the Kubernetes cluster (or any other runtime).")),(0,o.kt)("p",null,"Everything defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"containers")," attribute is considered an application container, as opposed to a sidecar container. Sidecar containers will be introduced in a different attribute in a future version."),(0,o.kt)("p",null,"In most of the cases, only one application container is needed. Ideally, we recommend mapping an ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance to a microservice in the microservice terminology."),(0,o.kt)("p",null,"We will walk through the details of configuring a container using an example of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," type."),(0,o.kt)("p",null,"To add an application container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "myapp": c.Container {}\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"application-image"},"Application image"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," attribute in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," schema specifies the application image to run. This is the only required field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," schema."),(0,o.kt)("p",null,"To specify an application image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "myapp": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v5"\n            }\n            # ...\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"resource-requirements"},"Resource Requirements"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," attribute in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," schema specifies the application resource requirements such as cpu and memory."),(0,o.kt)("p",null,"You can specify an upper limit (which maps to resource limits only) or a range as the resource requirements (which maps to resource requests and limits in Kubernetes)."),(0,o.kt)("p",null,"To specify an upper bound (only resource limits):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "myapp": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v5"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n                # ...\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"To specify a range (both resource requests and limits):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "myapp": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v5"\n                # Sets requests to cpu=250m and memory=256Mi\n                # Sets limits to cpu=500m and memory=512Mi\n                resources: {\n                    "cpu": "250m-500m"\n                    "memory": "256Mi-512Mi"\n                }\n                # ...\n            }\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"health-probes"},"Health Probes"),(0,o.kt)("p",null,"There are three types of ",(0,o.kt)("inlineCode",{parentName:"p"},"Probe")," defined in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Container"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"livenessProbe")," - used to determine if the container is healthy and running"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"readinessProbe")," - used to determine if the container is ready to accept traffic"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"startupProbe")," - used to determine if the container has started properly. Liveness and readiness probes don't start until ",(0,o.kt)("inlineCode",{parentName:"li"},"startupProbe")," succeeds. Commonly used for containers that takes a while to start")),(0,o.kt)("p",null,"The probes are optional. You can only have one Probe of each kind for a given ",(0,o.kt)("inlineCode",{parentName:"p"},"Container"),"."),(0,o.kt)("p",null,"To configure a ",(0,o.kt)("inlineCode",{parentName:"p"},"Http")," type ",(0,o.kt)("inlineCode",{parentName:"p"},"readinessProbe")," that probes the health via HTTP request and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Exec")," type ",(0,o.kt)("inlineCode",{parentName:"p"},"livenessProbe")," which executes a command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "myapp": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v5"\n                # ...\n                # Configure an Http type readiness probe at /healthz\n                readinessProbe: p.Probe {\n                    probeHandler: p.Http {\n                        url: "/healthz"\n                    }\n                    initialDelaySeconds: 10\n                    timeoutSeconds: 5\n                    periodSeconds: 15\n                    successThreshold: 3\n                    failureThreshold: 1\n                }\n                # Configure an Exec type liveness probe that executes probe.sh\n                livenessProbe: p.Probe {\n                    probeHandler: p.Exec {\n                        command: ["probe.sh"]\n                    }\n                    initialDelaySeconds: 10\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"lifecycle-hooks"},"Lifecycle Hooks"),(0,o.kt)("p",null,"You can also configure lifecycle hooks that triggers in response to container lifecycle events such as liveness/startup probe failure, preemption, resource contention, etc."),(0,o.kt)("p",null,"There are two types that is currently supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PreStop")," - triggers before the container is terminated."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PostStart")," - triggers after the container is initialized.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "myapp": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v5"\n                # ...\n                # Configure lifecycle hooks\n                lifecycle: lc.Lifecycle {\n                    # Configures an Exec type pre-stop hook that executes preStop.sh\n                    preStop: p.Exec {\n                        command: ["preStop.sh"]\n                    }\n                    # Configures an Http type pre-stop hook at /post-start\n                    postStart: p.Http {\n                        url: "/post-start"\n                    }\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"create-files"},"Create Files"),(0,o.kt)("p",null,"You can also create files on-demand during the container initialization."),(0,o.kt)("p",null,"To create a custom file and mount it to ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/admin/my-file")," when the container starts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "myapp": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v5"\n            }\n            # ...\n            # Creates a file during container startup\n            files: {\n                "/home/admin/my-file": c.FileSpec {\n                    content: "some file contents"\n                    mode: "0777"\n                }\n            }\n        }\n    }\n}\n')),(0,o.kt)("h3",{id:"customize-container-initialization"},"Customize container initialization"),(0,o.kt)("p",null,"You can also customize the container entrypoint via ",(0,o.kt)("inlineCode",{parentName:"p"},"command"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"args"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"workingDir"),". These should ",(0,o.kt)("strong",{parentName:"p"},"most likely not be required"),". In most of the cases, the entrypoint details should be baked into the application image itself."),(0,o.kt)("p",null,"To customize the container entrypoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "myapp": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v5"\n                # ...\n                # This command will overwrite the entrypoint set in the image Dockerfile\n                command: ["/usr/local/bin/my-init-script.sh"]\n                # Extra arguments append to command defined above\n                args: [\n                    "--log-dir=/home/my-app/logs"\n                    "--timeout=60s"\n                ]\n                # Run the command as defined above, in the directory "/tmp"\n                workingDir: "/tmp"\n            }\n        }\n    }\n}\n')),(0,o.kt)("h2",{id:"configure-replicas"},"Configure Replicas"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"replicas")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"workload")," instance describes the number of identical copies to run at the same time. It is generally recommended to have multiple replicas in production environments to eliminate any single point of failure. In Kubernetes, this corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.replicas")," field in the relevant workload manifests."),(0,o.kt)("p",null,"To configure a workload to have a replica count of 3:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            # ...\n        }\n        replicas: 3\n        # ...\n    }\n    # ...\n}\n")),(0,o.kt)("h2",{id:"differences-between-service-and-job"},"Differences between Service and Job"),(0,o.kt)("p",null,"The two types of workloads, namely ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Job"),", share a majority of the attributes with some minor differences."),(0,o.kt)("h3",{id:"exposure"},"Exposure"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," usually represents a long-running, scalable workload that responds to short-lived latency-sensitive requests and never go down. Hence, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," has an additional attribute that determines how it is exposed and can be accessed. A ",(0,o.kt)("inlineCode",{parentName:"p"},"Job")," does NOT have the option to be exposed. We will explore more in the ",(0,o.kt)("a",{parentName:"p",href:"networking"},"application networking walkthrough"),"."),(0,o.kt)("h3",{id:"job-schedule"},"Job Schedule"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Job")," can be configured to run in a recurring manner. In this case, the job will have a cron-format schedule that represents its recurring schedule."),(0,o.kt)("p",null,"To configure a job to run at 21:00 every night:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport job\nimport job.container as c\n\nmyjob: ac.AppConfiguration {\n    workload: job.Job {\n        containers: {\n            "busybox": c.Container {\n                image: "busybox:1.28"\n                # Run the following command as defined\n                command: ["/bin/sh", "-c", "echo hello"]\n            }\n        }\n        # Run every hour.\n        schedule: "0 * * * *"\n    }\n}\n')),(0,o.kt)("h2",{id:"workload-references"},"Workload References"),(0,o.kt)("p",null,"You can find workload references ",(0,o.kt)("a",{parentName:"p",href:"../reference/modules/developer-schemas/workload/service"},"here"),"."),(0,o.kt)("p",null,"You can find workload schema source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog/tree/main/models/schema/v1/workload"},"here"),"."))}u.isMDXComponent=!0}}]);