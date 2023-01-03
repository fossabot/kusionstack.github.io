"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:3},o="Use Cases",l={unversionedId:"user_docs/getting-started/usecase",id:"user_docs/getting-started/usecase",title:"Use Cases",description:"This tutorial will demonstrate how to deliver an App with a Loadbalancer in one Kusion command.",source:"@site/docs/user_docs/getting-started/usecase.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/usecase",permalink:"/docs/user_docs/getting-started/usecase",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecase.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1672749906,formattedLastUpdatedAt:"1/3/2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"KusionStack Quick Start Trial with CloudIDE",permalink:"/docs/user_docs/getting-started/cloudide"},next:{title:"KCL Quick Start",permalink:"/docs/user_docs/getting-started/kcl"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Project",id:"init-project",level:2},{value:"Review Config Files",id:"review-config-files",level:3},{value:"Delivery",id:"delivery",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,"This tutorial will demonstrate how to deliver an App with a Loadbalancer in one Kusion command."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Kusion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," or ",(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind"))),(0,i.kt)("h2",{id:"init-project"},"Init Project"),(0,i.kt)("p",null,"Firstly, let's clone the Konfig repo and enter the root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/konfig.git && cd konfig\n")),(0,i.kt)("p",null,"After this step, we can init this tutorial project with online templates"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kusion init --online\n")),(0,i.kt)("p",null,"All init templates are listed as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  konfig git:(main) \u2717 kusion init --online\n? Please choose a template:  [Use arrows to move, type to filter]\n> code-city                  Code City metaphor for visualizing Go source code in 3D.\n  deployment-multi-stack     A minimal kusion project of multi stacks\n  deployment-single-stack    A minimal kusion project of single stack\n")),(0,i.kt)("p",null,"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"code-city")," and press ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),". After that, we will see hints below and use the default value to config this project and stack."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(62521).Z,width:"802",height:"448"})),(0,i.kt)("p",null,"After this process, we can get the whole file hierarchy with this command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd code-city && tree\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  konfig git:(main) \u2717 cd code-city && tree\n.\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 ci-test\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 settings.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n3 directories, 6 files\n")),(0,i.kt)("p",null," More details about the directory structure can be found in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig"),"."),(0,i.kt)("h3",{id:"review-config-files"},"Review Config Files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# main.k\nimport base.pkg.kusion_models.kube.frontend\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    image = "howieyuen/gocity:latest"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"main.k")," only contains 4 lines. Line 1 imports a pkg that contains the model ",(0,i.kt)("inlineCode",{parentName:"p"},"Server")," which is an abstract model representing the App we will deliver later. This model hides the complexity of Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," and only one field ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," is needed to make this App ready to use. "),(0,i.kt)("p",null,"More details about Konfig Models can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")),(0,i.kt)("h2",{id:"delivery"},"Delivery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd dev && kusion apply --watch\n")),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," folder and we will deliver this App into a Kubernetes cluster with one command ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply --watch")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(62270).Z,width:"802",height:"448"})),(0,i.kt)("p",null,"Check ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," status"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -ncode-city get deploy\n")),(0,i.kt)("p",null,"The expected output is shown as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev git:(main) \u2717 kubectl -ncode-city get deploy\nNAME           READY   UP-TO-DATE   AVAILABLE   AGE\ncode-citydev   1/1     1            1           1m\n")),(0,i.kt)("p",null,"Port-forward our App with the ",(0,i.kt)("inlineCode",{parentName:"p"},"service")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -ncode-city svc/gocity 4000:4000\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev git:(main) \u2717 kubectl port-forward -ncode-city svc/gocity 4000:4000\nForwarding from 127.0.0.1:4000 -> 4000\nForwarding from [::1]:4000 -> 4000\n")),(0,i.kt)("p",null,"Visit ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:4000/#/github.com/KusionStack/kusion"},"http://localhost:4000/#/github.com/KusionStack/kusion")," in your browser and enjoy."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(42585).Z,width:"2044",height:"1252"})))}d.isMDXComponent=!0},62270:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-30acfe738fbda046d76f2996b2bf51b5.gif"},62521:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/choose-template-ee4085ef94eafca6a6f724c9fdec9aae.gif"},42585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gocity-d5b16c3633af00cbfdb403373399a677.png"}}]);