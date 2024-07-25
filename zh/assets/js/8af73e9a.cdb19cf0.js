"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={},r="Deploy Application",l={unversionedId:"user-guides/working-with-k8s/deploy-application",id:"version-v0.10/user-guides/working-with-k8s/deploy-application",title:"Deploy Application",description:"This guide shows you how to use Kusion CLIs to complete the deployment of an application running in Kubernetes.",source:"@site/docs_versioned_docs/version-v0.10/5-user-guides/2-working-with-k8s/1-deploy-application.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/deploy-application",permalink:"/zh/docs/v0.10/user-guides/working-with-k8s/deploy-application",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/5-user-guides/2-working-with-k8s/1-deploy-application.md",tags:[],version:"v0.10",lastUpdatedBy:"elliotxx",lastUpdatedAt:1721873571,formattedLastUpdatedAt:"2024\u5e747\u670825\u65e5",sidebarPosition:1,frontMatter:{},sidebar:"kusion",previous:{title:"Expose Application Service Deployed on CSP Kubernetes",permalink:"/zh/docs/v0.10/user-guides/cloud-resources/expose-service"},next:{title:"Configure Containers",permalink:"/zh/docs/v0.10/user-guides/working-with-k8s/container"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initializing",id:"initializing",level:2},{value:"Initializing workspace configuration",id:"initializing-workspace-configuration",level:2},{value:"Initializing application configuration",id:"initializing-application-configuration",level:2},{value:"kcl.mod",id:"kclmod",level:3},{value:"Building",id:"building",level:2},{value:"Applying",id:"applying",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-application"},"Deploy Application"),(0,a.kt)("p",null,"This guide shows you how to use Kusion CLIs to complete the deployment of an application running in Kubernetes.\nWe call the abstraction of application operation and maintenance configuration as ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),", and its instance as ",(0,a.kt)("inlineCode",{parentName:"p"},"Application"),".\nIt is essentially a configuration model that describes an application. The complete definition can be seen ",(0,a.kt)("a",{parentName:"p",href:"../../reference/modules/catalog-models/app-configuration"},"here"),"."),(0,a.kt)("p",null,"In production, the application generally includes minimally several k8s resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Namespace"),(0,a.kt)("li",{parentName:"ul"},"Deployment"),(0,a.kt)("li",{parentName:"ul"},"Service")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This guide requires you to have a basic understanding of Kubernetes.\nIf you are not familiar with the relevant concepts, please refer to the links below:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service")))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before we start, we need to complete the following steps:"),(0,a.kt)("p",null,"1\u3001Install Kusion"),(0,a.kt)("p",null,"We recommend using HomeBrew(Mac), Scoop(Windows), or an installation shell script to download and install Kusion.\nSee ",(0,a.kt)("a",{parentName:"p",href:"../../getting-started/install-kusion"},"Download and Install")," for more details."),(0,a.kt)("p",null,"2\u3001Running Kubernetes cluster"),(0,a.kt)("p",null,"There must be a running Kubernetes cluster and a ",(0,a.kt)("a",{parentName:"p",href:"https://Kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," command line tool.\nIf you don't have a cluster yet, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," to start one of your own."),(0,a.kt)("h2",{id:"initializing"},"Initializing"),(0,a.kt)("p",null,"This guide is to deploy an app using Kusion, relying on the Kusion CLI and an existing a Kubernetes cluster."),(0,a.kt)("h2",{id:"initializing-workspace-configuration"},"Initializing workspace configuration"),(0,a.kt)("p",null,"In version 0.10.0, we have introduced the new concept of ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/workspace"},"workspaces"),', which is a logical layer whose configurations represent an opinionated set of defaults, often appointed by the platform team. In most cases workspaces are represented with an "environment" in traditional SDLC terms. These workspaces provide a means to separate the concerns between the application developers who wish to focus on business logic, and a group of platform engineers who wish to standardize the applications on the platform.'),(0,a.kt)("p",null,"Driven by the discipline of Platform Engineering, management of the workspaces, including create/updating/deleting workspaces and their configurations should be done by dedicated platform engineers in a large software organizations to facilitate a more mature and scalable collaboration pattern."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"More on the collaboration pattern can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/docs/design/collaboration/collaboration_paradigm.md"},"design doc"),".")),(0,a.kt)("p",null,"However, if that does NOT apply to your scenario, e.g. if you work in a smaller org without platform engineers or if you are an individual developer, we wish Kusion can still be a value tool to have when delivering an application. In this guide, we are NOT distinctively highlighting the different roles or what the best practices entails (the design doc above has all that) but rather the steps needed to get Kusion tool to work."),(0,a.kt)("p",null,"As of version 0.10.0, workspace configurations in Kusion are managed on the local filesystem and their values are sourced from YAML files. Remotely-managed workspaces will be supported in future versions."),(0,a.kt)("p",null,"To initialize the workspace configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"~/playground$ touch ~/dev.yaml\n~/playground$ kusion workspace create dev -f ~/dev.yaml\ncreate workspace dev successfully\n")),(0,a.kt)("p",null,"To verify the workspace has been created properly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"~/playground$ kusion workspace list\n- dev\n~/playground$ kusion workspace show dev\n{}\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," command tells us the workspace configuration is currently empty, which is expected because we created the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," workspace with an empty YAML file. An empty workspace configuration will suffice in some cases, where no platform configurations are needed."),(0,a.kt)("p",null,"We will progressively add more workspace configurations throughout this user guide."),(0,a.kt)("h2",{id:"initializing-application-configuration"},"Initializing application configuration"),(0,a.kt)("p",null,"Now that workspaces are properly initialized, we can begin by initializing the application configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kusion init\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," command will prompt you to enter required parameters, such as project name, project description, image address, etc.\nYou can keep pressing ",(0,a.kt)("em",{parentName:"p"},"Enter")," all the way to use the default values."),(0,a.kt)("p",null,"The output is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u2714 single-stack-sample    A minimal kusion project of single stack\nThis command will walk you through creating a new kusion project.\n\nEnter a value or leave blank to accept the (default), and press <ENTER>.\nPress ^C at any time to quit.\n\nProject Config:\n\u2714 Project Name: simple-service\n\u2714 AppName: helloworld\n\u2714 ProjectName: simple-service\nStack Config: dev\n\u2714 Image: gcr.io/google-samples/gb-frontend:v4\nCreated project 'simple-service'\n")),(0,a.kt)("p",null,"Now, we have successfully initialized a project ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-service")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"single-stack-sample")," template, which contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," stack. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AppName")," represents the name of the sample application, which is recorded in the generated ",(0,a.kt)("inlineCode",{parentName:"li"},"main.k")," as the name of the ",(0,a.kt)("inlineCode",{parentName:"li"},"AppConfiguration")," instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ProjectName")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Project Name")," represent the name of the sample project, which is used as the generated folder name and then recorded in the generated ",(0,a.kt)("inlineCode",{parentName:"li"},"project.yaml"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Image")," represents the image address of the application container.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/project/overview"},"Project")," and ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/stack/overview"},"Stack")," for more details about Project and Stack.")),(0,a.kt)("p",null,"The directory structure is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"simple-service/\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod.lock\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n2 directories, 6 files\n")),(0,a.kt)("p",null,"The project directory has the following files that are automatically generated:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"README.md")," contains the generated README from a template."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project.yaml")," represents project-level configurations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev")," directory stores the customized stack configuration:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev/main.k")," stores configurations in the ",(0,a.kt)("inlineCode",{parentName:"li"},"dev")," stack."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev/stack.yaml")," stores stack-level configurations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev/kcl.mod")," stores stack-level dependencies."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dev/kcl.mod.lock")," stores version-sensitive dependencies.")))),(0,a.kt)("p",null,"In general, the ",(0,a.kt)("inlineCode",{parentName:"p"},".k")," files are the KCL source code that represents the application configuration, and the ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," is the static configuration file that describes behavior at the project or stack level."),(0,a.kt)("h3",{id:"kclmod"},"kcl.mod"),(0,a.kt)("p",null,"There should be a ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file generated automatically under the project directory. The ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file describes the dependency for the current project or stack. By default, it should contain a reference to the official ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},(0,a.kt)("inlineCode",{parentName:"a"},"catalog")," repository")," which holds some common model definitions that fits best practices. You can also create your own models library and reference that."),(0,a.kt)("h2",{id:"building"},"Building"),(0,a.kt)("p",null,"At this point, the project has been initialized with the Kusion built-in template.\nThe configuration is written in KCL, not JSON/YAML which Kubernetes recognizes, so it needs to be built to get the final output."),(0,a.kt)("p",null,"Enter stack dir ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-service/dev")," and build:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd simple-service/dev && kusion build\n")),(0,a.kt)("p",null,"The output is printed to ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")," by default. You can save it to a file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-o/--output")," flag when running ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion build"),"."),(0,a.kt)("p",null,"The output of ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion build")," is the ",(0,a.kt)("a",{parentName:"p",href:"../../concepts/intent"},"intent")," format."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For instructions on the kusion command line tool, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion -h"),", or refer to the tool's online ",(0,a.kt)("a",{parentName:"p",href:"../../reference/commands"},"documentation"),".")),(0,a.kt)("h2",{id:"applying"},"Applying"),(0,a.kt)("p",null,"Build is now completed. We can apply the configuration as the next step. In the output from ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion build"),", you can see 3 resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a Namespace named ",(0,a.kt)("inlineCode",{parentName:"li"},"simple-service")),(0,a.kt)("li",{parentName:"ul"},"a Deployment named ",(0,a.kt)("inlineCode",{parentName:"li"},"simple-service-dev-helloworld")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"simple-service")," namespace"),(0,a.kt)("li",{parentName:"ul"},"a Service named ",(0,a.kt)("inlineCode",{parentName:"li"},"simple-service-dev-helloworld-private")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},"simple-service")," namespace")),(0,a.kt)("p",null,"Execute command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,a.kt)("p",null,"The output is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," \u2714\ufe0e  Generating Intent in the Stack dev...                                                                                                                                                                                                     \nStack: dev  ID                                                               Action\n* \u251c\u2500     v1:Namespace:simple-service                                      Create\n* \u251c\u2500     v1:Service:simple-service:simple-service-dev-helloworld-private  Create\n* \u2514\u2500     apps/v1:Deployment:simple-service:simple-service-dev-helloworld  Create\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  Create v1:Namespace:simple-service success                                                                                                                                                                                          \n SUCCESS  Create v1:Service:simple-service:simple-service-dev-helloworld-private success                                                                                                                                                      \n SUCCESS  Create apps/v1:Deployment:simple-service:simple-service-dev-helloworld success                                                                                                                                                      \nCreate apps/v1:Deployment:simple-service:simple-service-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 3 created, 0 updated, 0 deleted.\n")),(0,a.kt)("p",null,"After the configuration applying successfully, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," to check the actual status of these resources."),(0,a.kt)("p",null,"1\u3001 Check Namespace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns\n")),(0,a.kt)("p",null,"The output is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                   STATUS   AGE\ndefault                Active   117d\nsimple-service         Active   38s\nkube-system            Active   117d\n...\n")),(0,a.kt)("p",null,"2\u3001Check Deployment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deploy -n simple-service\n")),(0,a.kt)("p",null,"The output is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                            READY   UP-TO-DATE   AVAILABLE   AGE\nsimple-service-dev-helloworld   1/1     1            1           59s\n")),(0,a.kt)("p",null,"3\u3001Check Service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n simple-service\n")),(0,a.kt)("p",null,"The output is similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                                    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE\nsimple-service-dev-helloworld-private   ClusterIP   10.98.89.104   <none>        80/TCP    79s\n")),(0,a.kt)("p",null,"4\u3001Validate app"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," tool, forward native port ",(0,a.kt)("inlineCode",{parentName:"p"},"30000")," to the service port ",(0,a.kt)("inlineCode",{parentName:"p"},"80"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/simple-service-dev-helloworld-private -n simple-service 30000:80\n")),(0,a.kt)("p",null,"Open browser and visit ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1:30000"},"http://127.0.0.1:30000"),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"app-preview",src:n(92287).Z,width:"1830",height:"330"})))}u.isMDXComponent=!0},92287:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/app-preview-de5274f4267fa725d2a65099e47c6c2c.png"}}]);