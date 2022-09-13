"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3141],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97668:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={sidebar_position:2},l="Use Cases",c={unversionedId:"user_docs/getting-started/usecase",id:"user_docs/getting-started/usecase",title:"Use Cases",description:"This tutorial will demonstrate how to deliver an App with a Loadbalancer in one Kusion command.",source:"@site/docs/user_docs/getting-started/usecase.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/usecase",permalink:"/docs/user_docs/getting-started/usecase",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecase.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663071680,formattedLastUpdatedAt:"9/13/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Kusion \u7684 Docker \u955c\u50cf",permalink:"/docs/user_docs/getting-started/install/docker"},next:{title:"KCL \u8bed\u8a00\u901f\u89c8",permalink:"/docs/user_docs/getting-started/kcl"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Project",id:"init-project",level:2},{value:"Review Config Files",id:"review-config-files",level:3},{value:"Delivery",id:"delivery",level:2}],d={toc:u};function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"This tutorial will demonstrate how to deliver an App with a Loadbalancer in one Kusion command."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Kusion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," or ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind"))),(0,a.kt)("h2",{id:"init-project"},"Init Project"),(0,a.kt)("p",null,"Let's init this tutorial project with ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init --online")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  examples git:(main) \u2717 kusion init --online\n? Please choose a template:  [Use arrows to move, type to filter]\n> code-city                  Code City metaphor for visualizing Go source code in 3D.\n  deployment-multi-stack     A minimal kusion project of multi stacks\n  deployment-single-stack    A minimal kusion project of single stack\n")),(0,a.kt)("p",null,"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"code-city")," and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter"),". After that we will see hints below and use the default value to config this project and stack."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(62521).Z,width:"800",height:"387"})),(0,a.kt)("p",null,"The whole file hierarchy is shown below. More details about the directory structure can be found in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/project-stack"},"Project & Stack"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  examples git:(main) \u2717 cd code-city\n\u279c  code-city git:(main) \u2717 tree\n.\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 ci-test\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 settings.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n3 directories, 6 files\n")),(0,a.kt)("h3",{id:"review-config-files"},"Review Config Files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# main.k\nimport .pkg\n\napp = pkg.App {\n    image = "yuanhao1223/gocity:latest"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"main.k")," only contains 5 lines (include an empty line). Line 1 imports a pkg that contains the model ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," which is an abstract model represents the App we will deliver later. This model hides the complexity of Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," and onely one field ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," is needed to make this App ready to use. "),(0,a.kt)("p",null,"More details about Konfig Models can be found in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")),(0,a.kt)("h2",{id:"delivery"},"Delivery"),(0,a.kt)("p",null,"Deliver this App into a Kubernetes cluster with one command ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(62164).Z,width:"800",height:"387"})),(0,a.kt)("p",null,"Check ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," status."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  examples git:(main) \u2717 kubectl get deploy\nNAME     READY   UP-TO-DATE   AVAILABLE   AGE\ngocity   1/1     1            1           1m\n")),(0,a.kt)("p",null,"Port-forward our App"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  examples git:(main) \u2717 kubectl port-forward svc/gocity 4000:4000\nForwarding from 127.0.0.1:4000 -> 4000\nForwarding from [::1]:4000 -> 4000\n")),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000/#/github.com/KusionStack/kusion"},"http://localhost:4000/#/github.com/KusionStack/kusion")," in your browser and enjoy."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(42585).Z,width:"2044",height:"1252"})))}m.isMDXComponent=!0},62521:function(e,t,n){t.Z=n.p+"assets/images/choose-template-fd1b2d63f0f21c292f7ea6b01f80acc9.gif"},62164:function(e,t,n){t.Z=n.p+"assets/images/compile-c47339757fc512ca096f3892a3059fce.gif"},42585:function(e,t,n){t.Z=n.p+"assets/images/gocity-d5b16c3633af00cbfdb403373399a677.png"}}]);