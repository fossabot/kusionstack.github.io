"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6138],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const o={},i="Deploy Application",r={unversionedId:"kusion/guides/working-with-k8s/deploy-application",id:"version-v0.9/kusion/guides/working-with-k8s/deploy-application",title:"Deploy Application",description:"This guide shows you how to use Kusion CLIs to complete the deployment of an application running in Kubernetes.",source:"@site/versioned_docs/version-v0.9/kusion/guides/working-with-k8s/1-deploy-application.md",sourceDirName:"kusion/guides/working-with-k8s",slug:"/kusion/guides/working-with-k8s/deploy-application",permalink:"/docs/v0.9/kusion/guides/working-with-k8s/deploy-application",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/guides/working-with-k8s/1-deploy-application.md",tags:[],version:"v0.9",lastUpdatedBy:"Dayuan",lastUpdatedAt:1706096606,formattedLastUpdatedAt:"Jan 24, 2024",sidebarPosition:1,frontMatter:{},sidebar:"kusion",previous:{title:"Kubernetes",permalink:"/docs/v0.9/kusion/guides/working-with-k8s/"},next:{title:"Configure Containers",permalink:"/docs/v0.9/kusion/guides/working-with-k8s/container"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initializing",id:"initializing",level:2},{value:"kcl.mod",id:"kclmod",level:3},{value:"Compiling",id:"compiling",level:2},{value:"Applying",id:"applying",level:2}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-application"},"Deploy Application"),(0,l.kt)("p",null,"This guide shows you how to use Kusion CLIs to complete the deployment of an application running in Kubernetes.\nWe call the abstraction of application operation and maintenance configuration as ",(0,l.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),", and its instance as ",(0,l.kt)("inlineCode",{parentName:"p"},"Application"),".\nIt is essentially an configuration model that describes an application. The complete definition can be seen ",(0,l.kt)("a",{parentName:"p",href:"../../reference/model/catalog_models/doc_app_configuration"},"here"),"."),(0,l.kt)("p",null,"In production, the application generally includes minimally several k8s resources:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Namespace"),(0,l.kt)("li",{parentName:"ul"},"Deployment"),(0,l.kt)("li",{parentName:"ul"},"Service")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This guide requires you to have a basic understanding of Kubernetes.\nIf you are not familiar with the relevant concepts, please refer to the links below:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service")))),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"Before we start, we need to complete the following steps:"),(0,l.kt)("p",null,"1\u3001Install Kusion"),(0,l.kt)("p",null,"We recommend using HomeBrew(Mac), Scoop(Windows), or an installation shell script to download and install Kusion.\nSee ",(0,l.kt)("a",{parentName:"p",href:"../../getting-started/install-kusion"},"Download and Install")," for more details."),(0,l.kt)("p",null,"2\u3001Running Kubernetes cluster"),(0,l.kt)("p",null,"There must be a running Kubernetes cluster and a ",(0,l.kt)("a",{parentName:"p",href:"https://Kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," command line tool.\nIf you don't have a cluster yet, you can use ",(0,l.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," to start one of your own."),(0,l.kt)("h2",{id:"initializing"},"Initializing"),(0,l.kt)("p",null,"This guide is to deploy an app using Kusion, relying on the Kusion CLI and a Kubernetes cluster."),(0,l.kt)("p",null,"To initialize the application configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusion init\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion init")," command will prompt you to enter required parameters, such as project name, project description, image address, etc.\nYou can keep pressing ",(0,l.kt)("em",{parentName:"p"},"Enter")," all the way to use the default values."),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u2714 single-stack-sample    A minimal kusion project of single stack\nThis command will walk you through creating a new kusion project.\n\nEnter a value or leave blank to accept the (default), and press <ENTER>.\nPress ^C at any time to quit.\n\nProject Config:\n\u2714 Project Name: helloworld\n\u2714 AppName: helloworld\n\u2714 ProjectName: helloworld\nStack Config: dev\n\u2714 Image: gcr.io/google-samples/gb-frontend:v4\n\nCreated project 'helloworld'\n")),(0,l.kt)("p",null,"Now, we have successfully initialized a project ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld")," using the ",(0,l.kt)("inlineCode",{parentName:"p"},"single-stack-sample")," template, which contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"dev")," stack. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AppName")," represents the name of the sample application, which is recorded in the generated ",(0,l.kt)("inlineCode",{parentName:"li"},"main.k")," as the name of the ",(0,l.kt)("inlineCode",{parentName:"li"},"AppConfiguration")," instance."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ProjectName")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Project Name")," represent the name of the sample project, which is used as the generated folder name and then recorded in the generated ",(0,l.kt)("inlineCode",{parentName:"li"},"project.yaml"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Image")," represents the image address of the application container.")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"See ",(0,l.kt)("a",{parentName:"p",href:"../../concepts/glossary"},"Project&Stack")," for more details about Project and Stack.")),(0,l.kt)("p",null,"The directory structure is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helloworld\n  \u251c\u2500\u2500 README.md\n  \u251c\u2500\u2500 dev\n  \u2502   \u251c\u2500\u2500 main.k\n  \u2502   \u251c\u2500\u2500 kcl.mod\n  \u2502   \u251c\u2500\u2500 kcl.mod.lock\n  \u2502   \u2514\u2500\u2500 stack.yaml\n  \u2514\u2500\u2500 project.yaml\n\n1 directory, 6 files\n")),(0,l.kt)("p",null,"The project directory has the following files that are automatically generated:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"README.md")," contains the generated README from a template."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"project.yaml")," represents project-level configurations."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev")," directory stores the customized stack configuration:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev/main.k")," stores configurations in the ",(0,l.kt)("inlineCode",{parentName:"li"},"dev")," stack."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev/stack.yaml")," stores stack-level configurations."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev/kcl.mod")," stores stack-level dependencies."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev/kcl.mod.lock")," stores version-sensitive dependencies.")))),(0,l.kt)("p",null,"In general, the ",(0,l.kt)("inlineCode",{parentName:"p"},".k")," files are the KCL source code that represents the application configuration, and the ",(0,l.kt)("inlineCode",{parentName:"p"},".yaml")," is the static configuration file that describes behavior at the project or stack level."),(0,l.kt)("h3",{id:"kclmod"},"kcl.mod"),(0,l.kt)("p",null,"There should be a ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file generated automatically under the project directory. The ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl.mod")," file describes the dependency for the current project or stack. By default, it should contain a reference to the official ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},(0,l.kt)("inlineCode",{parentName:"a"},"catalog")," repository")," which holds some common model definitions that fits best practices. You can also create your own models library and reference that."),(0,l.kt)("h2",{id:"compiling"},"Compiling"),(0,l.kt)("p",null,"At this point, the project has been initialized with the Kusion built-in template.\nThe configuration is written in KCL, not JSON/YAML which Kubernetes recognizes, so it needs to be compiled to get the final output."),(0,l.kt)("p",null,"Enter stack dir ",(0,l.kt)("inlineCode",{parentName:"p"},"helloworld/dev")," and compile:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd helloworld/dev && kusion compile\n")),(0,l.kt)("p",null,"The output is printed to ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout")," by default. You can save it to a file using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-o/--output")," flag when running ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion compile"),"."),(0,l.kt)("p",null,"The output of ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion compile")," is the spec format."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"For instructions on the kusion command line tool, execute ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion -h"),", or refer to the tool's online ",(0,l.kt)("a",{parentName:"p",href:"../../reference/cli/kusion"},"documentation"),".")),(0,l.kt)("h2",{id:"applying"},"Applying"),(0,l.kt)("p",null,"Compilation is now completed. We can apply the configuration as the next step. In the output from ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion compile"),", you can see 3 resources:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a Namespace named ",(0,l.kt)("inlineCode",{parentName:"li"},"helloworld")),(0,l.kt)("li",{parentName:"ul"},"a Deployment named ",(0,l.kt)("inlineCode",{parentName:"li"},"helloworld-dev-helloworld")," in the ",(0,l.kt)("inlineCode",{parentName:"li"},"helloworld")," namespace"),(0,l.kt)("li",{parentName:"ul"},"a Service named ",(0,l.kt)("inlineCode",{parentName:"li"},"helloworld-dev-helloworld-private")," in the ",(0,l.kt)("inlineCode",{parentName:"li"},"helloworld")," namespace")),(0,l.kt)("p",null,"Execute command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"}," \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                                                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  Create\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  Create\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Create\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  Create v1:Namespace:helloworld success                                                                                                                                                                                                                                \n SUCCESS  Create v1:Service:helloworld:helloworld-dev-helloworld-private success                                                                                                                                                                                                \n SUCCESS  Create apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nCreate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 3 created, 0 updated, 0 deleted.\n")),(0,l.kt)("p",null,"After the configuration applying successfully, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," to check the actual status of these resources."),(0,l.kt)("p",null,"1\u3001 Check Namespace"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                   STATUS   AGE\ndefault                Active   117d\nhelloworld             Active   63s\nkube-system            Active   117d\n...\n")),(0,l.kt)("p",null,"2\u3001Check Deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deploy -n helloworld\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                        READY   UP-TO-DATE   AVAILABLE   AGE\nhelloworld-dev-helloworld   2/2     2            2           111s\n")),(0,l.kt)("p",null,"3\u3001Check Service"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n helloworld\n")),(0,l.kt)("p",null,"The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME                                TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE\nhelloworld-dev-helloworld-private   ClusterIP   10.111.183.0   <none>        80/TCP   2m6s\n")),(0,l.kt)("p",null,"4\u3001Validate app"),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," tool, forward native port ",(0,l.kt)("inlineCode",{parentName:"p"},"30000")," to the service port ",(0,l.kt)("inlineCode",{parentName:"p"},"80"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/helloworld-dev-helloworld-private -n helloworld 30000:80\n")),(0,l.kt)("p",null,"Open browser and visit ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:30000"},"http://127.0.0.1:30000"),"\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"app-preview",src:n(92287).Z,width:"1830",height:"330"})))}u.isMDXComponent=!0},92287:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-preview-de5274f4267fa725d2a65099e47c6c2c.png"}}]);