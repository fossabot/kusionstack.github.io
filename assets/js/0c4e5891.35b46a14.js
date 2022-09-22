"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},o="Use Cases",s={unversionedId:"user_docs/getting-started/usecase",id:"user_docs/getting-started/usecase",title:"Use Cases",description:"This tutorial will demonstrate how to deliver an App with a Loadbalancer in one Kusion command.",source:"@site/docs/user_docs/getting-started/usecase.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/usecase",permalink:"/docs/user_docs/getting-started/usecase",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecase.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663850372,formattedLastUpdatedAt:"9/22/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Docker",permalink:"/docs/user_docs/getting-started/install/docker"},next:{title:"KCL Quick Start",permalink:"/docs/user_docs/getting-started/kcl"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Project",id:"init-project",level:2},{value:"Review Config Files",id:"review-config-files",level:3},{value:"Delivery",id:"delivery",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"This tutorial will demonstrate how to deliver an App with a Loadbalancer in one Kusion command."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Kusion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," or ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind"))),(0,r.kt)("h2",{id:"init-project"},"Init Project"),(0,r.kt)("p",null,"Let's init this tutorial project with ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion init --online")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  examples git:(main) \u2717 kusion init --online\n? Please choose a template:  [Use arrows to move, type to filter]\n> code-city                  Code City metaphor for visualizing Go source code in 3D.\n  deployment-multi-stack     A minimal kusion project of multi stacks\n  deployment-single-stack    A minimal kusion project of single stack\n")),(0,r.kt)("p",null,"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"code-city")," and press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),". After that, we will see hints below and use the default value to config this project and stack."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(62521).Z,width:"800",height:"387"})),(0,r.kt)("p",null,"The whole file hierarchy is shown below. More details about the directory structure can be found in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  examples git:(main) \u2717 cd code-city\n\u279c  code-city git:(main) \u2717 tree\n.\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 ci-test\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 settings.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n3 directories, 6 files\n")),(0,r.kt)("h3",{id:"review-config-files"},"Review Config Files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# main.k\nimport .pkg\n\napp = pkg.App {\n    image = "yuanhao1223/gocity:latest"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," only contains 5 lines (including an empty line). Line 1 imports a pkg that contains the model ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," which is an abstract model representing the App we will deliver later. This model hides the complexity of Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," and only one field ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," is needed to make this App ready to use. "),(0,r.kt)("p",null,"More details about Konfig Models can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")),(0,r.kt)("h2",{id:"delivery"},"Delivery"),(0,r.kt)("p",null,"Deliver this App into a Kubernetes cluster with one command ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(62164).Z,width:"800",height:"387"})),(0,r.kt)("p",null,"Check ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy")," status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  examples git:(main) \u2717 kubectl get deploy\nNAME     READY   UP-TO-DATE   AVAILABLE   AGE\ngocity   1/1     1            1           1m\n")),(0,r.kt)("p",null,"Port-forward our App"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  examples git:(main) \u2717 kubectl port-forward svc/gocity 4000:4000\nForwarding from 127.0.0.1:4000 -> 4000\nForwarding from [::1]:4000 -> 4000\n")),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:4000/#/github.com/KusionStack/kusion"},"http://localhost:4000/#/github.com/KusionStack/kusion")," in your browser and enjoy."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:n(42585).Z,width:"2044",height:"1252"})))}d.isMDXComponent=!0},62521:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/choose-template-fd1b2d63f0f21c292f7ea6b01f80acc9.gif"},62164:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/compile-c47339757fc512ca096f3892a3059fce.gif"},42585:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/gocity-d5b16c3633af00cbfdb403373399a677.png"}}]);