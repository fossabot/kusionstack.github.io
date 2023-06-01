"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={},r="Deploy Server",l={unversionedId:"user_docs/guides/working-with-k8s/deploy-server",id:"user_docs/guides/working-with-k8s/deploy-server",title:"Deploy Server",description:"This guide shows you how to use the KCL language and Kusion CLIs to complete the deployment of an application running in Kubernetes.",source:"@site/docs/user_docs/guides/working-with-k8s/1-deploy-server.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/deploy-server",permalink:"/docs/user_docs/guides/working-with-k8s/deploy-server",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/1-deploy-server.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1685613407,formattedLastUpdatedAt:"6/1/2023",sidebarPosition:1,frontMatter:{},sidebar:"user_docs",previous:{title:"Kubernetes",permalink:"/docs/user_docs/guides/working-with-k8s/"},next:{title:"Configure Main Container",permalink:"/docs/user_docs/guides/working-with-k8s/container"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initializing",id:"initializing",level:2},{value:"Compiling",id:"compiling",level:2},{value:"Applying",id:"applying",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-server"},"Deploy Server"),(0,i.kt)("p",null,"This guide shows you how to use the KCL language and Kusion CLIs to complete the deployment of an application running in Kubernetes.\nWe call the abstraction of application operation and maintenance configuration as ",(0,i.kt)("inlineCode",{parentName:"p"},"Server"),", and its instance as ",(0,i.kt)("inlineCode",{parentName:"p"},"Application"),".\nIt is essentially an operation and maintenance model defined by ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/lang/lang/tour"},"KCL"),",\nand the complete definition can be seen ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/doc_server"},"here"),"."),(0,i.kt)("p",null,"In actual production, the application online generally needs to update several k8s resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Namespace"),(0,i.kt)("li",{parentName:"ul"},"Deployment"),(0,i.kt)("li",{parentName:"ul"},"Service")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This guide requires you to have a basic understanding of Kubernetes.\nIf you are not familiar with the relevant concepts, please refer to the links below:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"Namespace")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Deployment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/services-networking/service/"},"Service"))))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before we start, we need to complete the following steps:"),(0,i.kt)("p",null,"1\u3001Install Kusion"),(0,i.kt)("p",null,"We recommend using the official installation tool ",(0,i.kt)("em",{parentName:"p"},"kusionup")," which supports multi-version management.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"Download and Install")," for more details."),(0,i.kt)("p",null,"2\u3001Clone Konfig repo"),(0,i.kt)("p",null,"In this guide, we need some KCL models that ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig.git"},"Konfig")," offers.\nFor more details on KCL language, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/lang/lang/tour"},"Tour of KCL"),"."),(0,i.kt)("p",null,"3\u3001Running Kubernetes cluster"),(0,i.kt)("p",null,"There must be a running Kubernetes cluster and a ",(0,i.kt)("a",{parentName:"p",href:"https://Kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," command line tool.\nIf you don't have a cluster yet, you can use ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," to start one of your own."),(0,i.kt)("h2",{id:"initializing"},"Initializing"),(0,i.kt)("p",null,"This guide is to deploy an app by KCL and Kusion, relying on Kusion tools, Konfig library and Kubernetes cluster."),(0,i.kt)("p",null,"Open Konfig repo, enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"appops")," directory, and initialize the KCL project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd appops && kusion init\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," command will prompt you to enter required parameters, such as project name, project description, image address, etc.\nYou can keep pressing ",(0,i.kt)("em",{parentName:"p"},"Enter")," all the way to use the default values."),(0,i.kt)("p",null,"The output is similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u2714 deployment-single-stack    A minimal kusion project of single stack\nThis command will walk you through creating a new kusion project.\n\nEnter a value or leave blank to accept the (default), and press <ENTER>.\nPress ^C at any time to quit.\n\n\u2714 project name: deployment-single-stack\n\u2714 project description: A minimal kusion project of single stack\n\u2714 Stack: dev\n\u2714 ClusterName: kubernetes-dev\n\u2714 Image: gcr.io/google-samples/gb-frontend:v4\nCreated project 'deployment-single-stack'\n")),(0,i.kt)("p",null,"Now, we have successfully initialized a KCL project ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment-single-stack"),", which contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," stack.\n",(0,i.kt)("inlineCode",{parentName:"p"},"project name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"project description")," are provided by KCL template, and another three fields require users to fill in.\n",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," represents the name of a configuration set, which is used to isolate with other stacks.\n",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterName")," represents the cluster name, it will be recorded into ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.annotations"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"Image")," represents the image address of the app's main container."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Project&Stack")," for more details about Project and Stack."))),(0,i.kt)("p",null,"The directory structure is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"deployment-single-stack\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 base\n\u2502   \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502   \u251c\u2500\u2500 ci-test\n\u2502   \u2502   \u2514\u2500\u2500 settings.yaml\n\u2502   \u251c\u2500\u2500 kcl.yaml\n\u2502   \u251c\u2500\u2500 main.k\n\u2502   \u2514\u2500\u2500 stack.yaml\n\u251c\u2500\u2500 kusion.yaml\n\u2514\u2500\u2500 project.yaml\n\n3 directories, 8 files\n")),(0,i.kt)("p",null,"It can be seen that the project has three levels of directories, and each level has its design significance."),(0,i.kt)("p",null,"First level:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"project.yaml")," represents project-level properties."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kusion.yaml")," is the template configuration file, which is not relevant to the operation of this guide.")),(0,i.kt)("p",null,"Second level:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base")," directory stores common configurations for all stacks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev")," directory stores the customized configuration:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev/kcl.yaml")," stores static compilation configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev/main.k")," stores specific configurations of ",(0,i.kt)("inlineCode",{parentName:"li"},"dev")," stack."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev/stack.yaml")," stores stack information.")))),(0,i.kt)("p",null,"Third level:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev/ci-test")," directory stores the dynamic compilation configuration and final output.")),(0,i.kt)("p",null,"By default, the compilation output goes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout.golden.yaml")," file in this directory.\nIn general, the ",(0,i.kt)("inlineCode",{parentName:"p"},".k")," file is the KCL source code, and the ",(0,i.kt)("inlineCode",{parentName:"p"},".yaml")," is the configuration file."),(0,i.kt)("h2",{id:"compiling"},"Compiling"),(0,i.kt)("p",null,"At this point, the development of the project has been completed with the help of the built-in template provided by Kusion.\nThe programming language of the project is KCL, not JSON/YAML which Kubernetes recognizes, so it needs to be compiled to get the final output."),(0,i.kt)("p",null,"Enter stack dir ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment-single-stack/dev")," and compile:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd deployment-single-stack/dev && kusion compile\n")),(0,i.kt)("p",null,"The output is saved in the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment-single-stack/dev/ci-test/stdout.golden.yaml")," file by default."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For instructions on the kusion command line tool, execute ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion -h"),", or refer to the tool's online ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/cli/kusionctl/overview"},"documentation"),"\u3002"))),(0,i.kt)("h2",{id:"applying"},"Applying"),(0,i.kt)("p",null,"\u5b8c\u6210\u7f16\u8bd1\uff0c\u73b0\u5728\u5f00\u59cb\u4e0b\u53d1\u914d\u7f6e\u3002\u901a\u8fc7\u67e5\u770b ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout.golden.yaml")," \u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230 3 \u4e2a\u8d44\u6e90\uff1a\nCompilation is completed, and now apply the configuration. At the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout.golden.yaml")," file, you can see 3 resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a Deployment named ",(0,i.kt)("inlineCode",{parentName:"li"},"deployment-single-stackdev")),(0,i.kt)("li",{parentName:"ul"},"a Namespace named ",(0,i.kt)("inlineCode",{parentName:"li"},"deployment-single-stack")),(0,i.kt)("li",{parentName:"ul"},"a Service named ",(0,i.kt)("inlineCode",{parentName:"li"},"frontend-service"))),(0,i.kt)("p",null,"\u8be5\u6587\u4ef6\u7684\u5185\u5bb9\u5df2\u7ecf\u662f Kubernetes \u80fd\u591f\u8bc6\u522b\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f stdout.golden.yaml")," \u76f4\u63a5\u4e0b\u53d1\u914d\u7f6e\uff0c\n\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply")," \u5b8c\u6210\u914d\u7f6e\u7f16\u8bd1\u5e76\u4e0b\u53d1\uff08\u8be5\u547d\u4ee4\u5305\u542b\u4e86\u914d\u7f6e\u7f16\u8bd1\uff09\u3002\nThe content of this file can be directly accepted by Kubernetes.\nYou can run ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f stdout.golden.yaml")," to directly apply the configuration."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is recommended to use the Kusion CLI, the compilation output in this example is the complete YAML declaration,\nbut not all KCL project compilation results are the same."))),(0,i.kt)("p",null,"Execute command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,i.kt)("p",null,"The output is similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"SUCCESS  Compiling in stack dev...\n\nStack: dev    Provider                Type                           Name    Plan\n      * \u251c\u2500  kubernetes        v1:Namespace     deployment-single-stack[0]  Create\n      * \u251c\u2500  kubernetes  apps/v1:Deployment  deployment-single-stackdev[0]  Create\n      * \u2514\u2500  kubernetes          v1:Service            frontend-service[0]  Create\n\n\u2714 yes\nStart applying diffs......\n SUCCESS  Creating Namespace/deployment-single-stack     \n SUCCESS  Creating Deployment/deployment-single-stackdev\n SUCCESS  Creating Service/frontend-service\nCreating Service/frontend-service [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\n\nApply complete! Resources: 3 created, 0 updated, 0 deleted.\n")),(0,i.kt)("p",null,"After the configuration applying successfully, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to check the actual status of these resources."),(0,i.kt)("p",null,"1\u3001 Check Namespace"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get ns\n")),(0,i.kt)("p",null,"The output is similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME                      STATUS        AGE\nargocd                    Active        59d\ndefault                   Active        72d\ndeployment-single-stack   Active        10m\n")),(0,i.kt)("p",null,"2\u3001Check Deployment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deploy -n deployment-single-stack\n")),(0,i.kt)("p",null,"The output is similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME                         READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment-single-stackdev   1/1     1            1           11m\n")),(0,i.kt)("p",null,"3\u3001Check Service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get svc -n deployment-single-stack\n")),(0,i.kt)("p",null,"The output is similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NAME               TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE\nfrontend-service   NodePort   10.0.0.0       <none>        80:10001/TCP   11m\n")),(0,i.kt)("p",null,"4\u3001Validate app"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubecl")," tool, forward native port ",(0,i.kt)("inlineCode",{parentName:"p"},"30000")," to the service port ",(0,i.kt)("inlineCode",{parentName:"p"},"80"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward svc/frontend-service -n deployment-single-stack-xx 30000:80\n")),(0,i.kt)("p",null,"Open browser and visit ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:30000"},"http://127.0.0.1:30000"),"\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(66834).Z,width:"1830",height:"330"})))}d.isMDXComponent=!0},66834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-preview-de5274f4267fa725d2a65099e47c6c2c.jpg"}}]);