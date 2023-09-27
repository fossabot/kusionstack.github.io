"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1},i="Deliver Your First Project on Kubernetes",s={unversionedId:"user_docs/getting-started/usecases/deliver-first-project",id:"user_docs/getting-started/usecases/deliver-first-project",title:"Deliver Your First Project on Kubernetes",description:"This tutorial will demonstrate how to deliver a simple single-app, single-stack project on Kubernetes in one Kusion command.",source:"@site/docs/user_docs/getting-started/usecases/deliver-first-project.md",sourceDirName:"user_docs/getting-started/usecases",slug:"/user_docs/getting-started/usecases/deliver-first-project",permalink:"/docs/user_docs/getting-started/usecases/deliver-first-project",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecases/deliver-first-project.md",tags:[],version:"current",lastUpdatedBy:"Chaer",lastUpdatedAt:1695780896,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"Installation Guide",permalink:"/docs/user_docs/getting-started/install"},next:{title:"Deliver the WordPress application on Kubernetes and clouds",permalink:"/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Project",id:"init-project",level:2},{value:"Review Config Files",id:"review-config-files",level:3},{value:"Delivery",id:"delivery",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deliver-your-first-project-on-kubernetes"},"Deliver Your First Project on Kubernetes"),(0,r.kt)("p",null,"This tutorial will demonstrate how to deliver a simple single-app, single-stack project on Kubernetes in one Kusion command."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before we start, we need to complete the following steps:"),(0,r.kt)("p",null,"1\u3001Install Kusion"),(0,r.kt)("p",null,"We recommend using HomeBrew(Mac), Scoop(Windows), or an installation shell script to manage Kusion installation.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"Download and Install")," for more details."),(0,r.kt)("p",null,"2\u3001Running Kubernetes cluster"),(0,r.kt)("p",null,"There must be a running Kubernetes cluster and a ",(0,r.kt)("a",{parentName:"p",href:"https://Kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," command line tool.\nIf you don't have a cluster yet, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," to start one of your own."),(0,r.kt)("h2",{id:"init-project"},"Init Project"),(0,r.kt)("p",null,"We can start by initializing this tutorial project with online templates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion init --online\n")),(0,r.kt)("p",null,"All init templates are listed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground$ kusion init --online\n? Please choose a template:  [Use arrows to move, type to filter]\n> code-city                  Code City metaphor for visualizing Go source code in 3D.\n  deployment-multi-stack     A minimal kusion project of multiple stacks\n  deployment-single-stack    A minimal kusion project of single stack\n  wordpress                  A sample wordpress project\n")),(0,r.kt)("p",null,"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"code-city")," and press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),". After that, we will see hints below and use the default value to config this project and stack."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2548).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"The directory structure looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd code-city && tree\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground$ tree code-city/\ncode-city/\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod.lock\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n2 directories, 5 files\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More details about the directory structure can be found in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/glossary"},"Concepts"),".")),(0,r.kt)("h3",{id:"review-config-files"},"Review Config Files"),(0,r.kt)("p",null,"Let's take a look at the configuration files located at ",(0,r.kt)("inlineCode",{parentName:"p"},"code-city/dev/main.k"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.workload.container as c\n\ngocity: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "gocity": c.Container {\n                image = "howieyuen/gocity:latest"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n        ports: [\n            n.Port {\n                port: 4000\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"The configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," includes an ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"gocity"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"gocity")," application includes a workload of type ",(0,r.kt)("inlineCode",{parentName:"p"},"wl.Service"),", which runs on 1 replica and exposes port 4000 to be accessed. This model hides the major complexity of Kubernetes resources such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),",",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),", while providing the concepts that are application-centric and infrastructure-agnostic."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More details about the Models can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog"))),(0,r.kt)("h2",{id:"delivery"},"Delivery"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd code-city/dev && kusion apply --watch\n")),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," folder and we will deliver this App into a Kubernetes cluster with one command ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply --watch")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2270).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"Check ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n gocity get deploy\n")),(0,r.kt)("p",null,"The expected output is shown as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground/code-city/dev$ kubectl -n gocity get deploy\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\ngocity-dev-gocity   1/1     1            1           3m37s\n")),(0,r.kt)("p",null,"Port-forward our App with the ",(0,r.kt)("inlineCode",{parentName:"p"},"service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n gocity svc/gocity-dev-gocity-private 4000:4000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground/code-city/dev$ kubectl port-forward -n gocity svc/gocity-dev-gocity-private 4000:4000\nForwarding from 127.0.0.1:4000 -> 4000\nForwarding from [::1]:4000 -> 4000\n")),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:4000/#/github.com/KusionStack/kusion"},"http://localhost:4000/#/github.com/KusionStack/kusion")," in your browser and enjoy."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2585).Z,width:"2044",height:"1252"})))}d.isMDXComponent=!0},2270:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/apply-68751fd4a3e4510ba45df72add5af645.gif"},2585:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/gocity-d5b16c3633af00cbfdb403373399a677.png"},2548:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/init-gocity-1451aa6ee1f171ea344345a6d0430a8e.gif"}}]);