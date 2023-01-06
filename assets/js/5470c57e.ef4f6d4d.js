"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:2},r="KusionStack Quick Start Trial with CloudIDE",s={unversionedId:"user_docs/getting-started/cloudide",id:"user_docs/getting-started/cloudide",title:"KusionStack Quick Start Trial with CloudIDE",description:"KusionStack now supports a quick start free trial on cloud IDE without any installation or configuration! Try configuring and deploying an application with KusionStack, and all you need is a browser connected to the internet.",source:"@site/docs/user_docs/getting-started/cloudide.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/cloudide",permalink:"/docs/user_docs/getting-started/cloudide",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/cloudide.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1672990124,formattedLastUpdatedAt:"1/6/2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Installation Guide",permalink:"/docs/user_docs/getting-started/install"},next:{title:"Use Cases",permalink:"/docs/user_docs/getting-started/usecase"}},c={},l=[{value:"Quick Start with Kusion X GitHub Codespaces",id:"quick-start-with-kusion-x-github-codespaces",level:2},{value:"Step1: Create a Workspace of Konfig",id:"step1-create-a-workspace-of-konfig",level:3},{value:"Step2: Deploy with Kusion",id:"step2-deploy-with-kusion",level:3},{value:"Review and Summary",id:"review-and-summary",level:2}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kusionstack-quick-start-trial-with-cloudide"},"KusionStack Quick Start Trial with CloudIDE"),(0,i.kt)("p",null,"KusionStack now supports a quick start free trial on cloud IDE without any installation or configuration! Try configuring and deploying an application with KusionStack, and all you need is a browser connected to the internet."),(0,i.kt)("h2",{id:"quick-start-with-kusion-x-github-codespaces"},"Quick Start with Kusion X GitHub Codespaces"),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/features/codespaces"},"GitHub Codespaces"),", you can create a workspace of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig repo")," on the cloud, with the KusionStack develop environment preset and the VS Code extensions installed."),(0,i.kt)("h3",{id:"step1-create-a-workspace-of-konfig"},"Step1: Create a Workspace of Konfig"),(0,i.kt)("p",null,"You can click the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=488867056&machine=standardLinux32gb&devcontainer_path=.devcontainer.json"},"Open in GitHub Codespaces link"),", or click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Open in GitHub Codespaces")," badge at the home page of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"the Konfig repo"),", and then confirm to ",(0,i.kt)("inlineCode",{parentName:"p"},"Create codespace")," at the create page. And a 4-core \u2022 8GB RAM \u2022 32GB storage workspace of Konfig main branch will be created."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"create codespace",src:n(28737).Z,width:"1194",height:"810"})),(0,i.kt)("p",null,"It takes about 30s to wait for the codespace to prepare the environment. Then in the workspace and you'll see a progress notification indicating that the minikube is starting, which provides a local Kubernetes cluster for the quick start application to deploy to. The minikube starting costs about 1 minute, and during that please take your time and you could glance over the KCL configurations of the application we are going to deploy. "),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"minikube start",src:n(46949).Z,width:"1194",height:"810"})),(0,i.kt)("p",null,"The two configuration files ",(0,i.kt)("inlineCode",{parentName:"p"},"appops/guestbook-frontend/base/base.k")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"appops/guestbook-frontend/dev/main.k")," will be opened automatically by the codespace. Together the two files declare the infra configuration of the guestbook-frontend application in the dev environment. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev/main.k")," declares that dev version of the application image will be ",(0,i.kt)("inlineCode",{parentName:"p"},"gcr.io/google-samples/gb-frontend:v5"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"base/base.k")," file contains the common and basic configurations among the environments -- for example, a service named ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend")," that expose the application through port 80."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"view code",src:n(78075).Z,width:"1194",height:"810"})),(0,i.kt)("h3",{id:"step2-deploy-with-kusion"},"Step2: Deploy with Kusion"),(0,i.kt)("p",null,"With the minikube started, we can now simulate the ",(0,i.kt)("inlineCode",{parentName:"p"},"guestbook-frontend")," deployment to the dev environment locally: preview the live-diff with the running resources in the cluster, confirm the change, continue monitoring the deployment process and verify that the service serves as expected."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"right click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Kusion: Preview Live Diff and Apply")," button on the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k")," file in the editor.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"in the interactive console shown later, toggle with the keyboard up/down key to select your next move. For example, for ",(0,i.kt)("inlineCode",{parentName:"p"},"Do you want to apply these diffs?")," select ",(0,i.kt)("inlineCode",{parentName:"p"},"details")," to preview a list of resources that will be changed, and for ",(0,i.kt)("inlineCode",{parentName:"p"},"Which diff detail do you want to see?")," select ",(0,i.kt)("inlineCode",{parentName:"p"},"all")," to view the change detail of all the resources. Since the application does not exist in the cluster before we deploy it, we can see that all three kinds of resources(Service, Deployment and Namespace) are displayed with an intended action ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"after selecting 'yes' to confirm the change, we can continue to watch the resources status and trace scrolling through the console, until a ",(0,i.kt)("inlineCode",{parentName:"p"},"Watch Finish! All resources have been reconciled")," message indicating that all relevant resources have been reconciled.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"then the service changes in the cluster will be detected and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Port forwarding")," notification prompts to hint that we can forward a local port to the guestbook-frontend service port 80 within the minikube so that we can further access and verify the service locally. We can click the button and select ",(0,i.kt)("inlineCode",{parentName:"p"},"Open in Browser")," in the following notification and verify the service through the browser."))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"apply to cloud",src:n(27969).Z,width:"1194",height:"810"})),(0,i.kt)("h2",{id:"review-and-summary"},"Review and Summary"),(0,i.kt)("p",null,"Now we've completed the quick start trial of KusionStack: preview, deploy and verify an application with the minikube."),(0,i.kt)("p",null,"After the trial, you can stop the codespace in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/codespaces"},"GitHub Codespaces Management Page")," and it can be restored for later use. Or you can just delete it and everything will return to the beginning."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"delete codespace",src:n(52090).Z,width:"1194",height:"810"})))}d.isMDXComponent=!0},27969:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-3f9cc329eb3fcbd4b191139be2224b3e.gif"},28737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-codespace-393c63cbf9cf47963cd2691b9e6c5dd6.gif"},52090:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/delete-codespace-1767fd884d7cc9d5c847c190029e10a5.gif"},46949:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/minikube-start-41707befe2c44983faf468032ef56f11.gif"},78075:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/view-code-3ee4a9f05e3fd5363bfbecccd9a56f97.gif"}}]);