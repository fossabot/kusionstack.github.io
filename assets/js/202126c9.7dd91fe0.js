"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:1},o="Deliver Your First Project on Kubernetes",s={unversionedId:"user_docs/getting-started/usecases/deliver-first-project",id:"user_docs/getting-started/usecases/deliver-first-project",title:"Deliver Your First Project on Kubernetes",description:"This tutorial will demonstrate how to deliver your first project(an App with a Loadbalancer) on Kubernetes in one Kusion command.",source:"@site/docs/user_docs/getting-started/usecases/deliver-first-project.md",sourceDirName:"user_docs/getting-started/usecases",slug:"/user_docs/getting-started/usecases/deliver-first-project",permalink:"/docs/user_docs/getting-started/usecases/deliver-first-project",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecases/deliver-first-project.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1680091886,formattedLastUpdatedAt:"3/29/2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"Quick Start Trial with CloudIDE",permalink:"/docs/user_docs/getting-started/cloudide"},next:{title:"Deliver Project with Hybrid Resources",permalink:"/docs/user_docs/getting-started/usecases/deliver-hybrid-resources-project"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Project",id:"init-project",level:2},{value:"Review Config Files",id:"review-config-files",level:3},{value:"Delivery",id:"delivery",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deliver-your-first-project-on-kubernetes"},"Deliver Your First Project on Kubernetes"),(0,a.kt)("p",null,"This tutorial will demonstrate how to deliver your first project(an App with a Loadbalancer) on Kubernetes in one Kusion command."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Kusion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," or ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind"))),(0,a.kt)("h2",{id:"init-project"},"Init Project"),(0,a.kt)("p",null,"Firstly, let's clone the Konfig repo and enter the root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/konfig.git && cd konfig\n")),(0,a.kt)("p",null,"After this step, we can init this tutorial project with online templates"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kusion init --online\n")),(0,a.kt)("p",null,"All init templates are listed as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  konfig git:(main) \u2717 kusion init --online\n? Please choose a template:  [Use arrows to move, type to filter]\n> code-city                  Code City metaphor for visualizing Go source code in 3D.\n  deployment-multi-stack     A minimal kusion project of multi stacks\n  deployment-single-stack    A minimal kusion project of single stack\n")),(0,a.kt)("p",null,"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"code-city")," and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter"),". After that, we will see hints below and use the default value to config this project and stack."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(62521).Z,width:"802",height:"448"})),(0,a.kt)("p",null,"After this process, we can get the whole file hierarchy with this command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd code-city && tree\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  konfig git:(main) \u2717 cd code-city && tree\n.\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 ci-test\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 settings.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n3 directories, 6 files\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," More details about the directory structure can be found in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig"),"."))),(0,a.kt)("h3",{id:"review-config-files"},"Review Config Files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# main.k\nimport base.pkg.kusion_models.kube.frontend\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    image = "howieyuen/gocity:latest"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"main.k")," only contains 4 lines. Line 1 imports a pkg that contains the model ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," which is an abstract model representing the App we will deliver later. This model hides the complexity of Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," and only one field ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," is needed to make this App ready to use. "),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"More details about Konfig Models can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")))),(0,a.kt)("h2",{id:"delivery"},"Delivery"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd dev && kusion apply --watch\n")),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," folder and we will deliver this App into a Kubernetes cluster with one command ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply --watch")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(62270).Z,width:"1223",height:"593"})),(0,a.kt)("p",null,"Check ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -ncode-city get deploy\n")),(0,a.kt)("p",null,"The expected output is shown as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev git:(main) \u2717 kubectl -ncode-city get deploy\nNAME           READY   UP-TO-DATE   AVAILABLE   AGE\ncode-citydev   1/1     1            1           1m\n")),(0,a.kt)("p",null,"Port-forward our App with the ",(0,a.kt)("inlineCode",{parentName:"p"},"service")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -ncode-city svc/gocity 4000:4000\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev git:(main) \u2717 kubectl port-forward -ncode-city svc/gocity 4000:4000\nForwarding from 127.0.0.1:4000 -> 4000\nForwarding from [::1]:4000 -> 4000\n")),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000/#/github.com/KusionStack/kusion"},"http://localhost:4000/#/github.com/KusionStack/kusion")," in your browser and enjoy."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(42585).Z,width:"2044",height:"1252"})))}d.isMDXComponent=!0},62270:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/apply-1cc90f7fe294b3b1414b4dd3a27a2d2b.gif"},62521:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/choose-template-ee4085ef94eafca6a6f724c9fdec9aae.gif"},42585:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gocity-d5b16c3633af00cbfdb403373399a677.png"}}]);