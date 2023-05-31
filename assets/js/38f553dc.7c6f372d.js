"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={},i="Drift Detection by ArgoCD",l={unversionedId:"user_docs/guides/argocd/drift-detection-by-argocd",id:"user_docs/guides/argocd/drift-detection-by-argocd",title:"Drift Detection by ArgoCD",description:"Prerequisite",source:"@site/docs/user_docs/guides/argocd/drift-detection-by-argocd.md",sourceDirName:"user_docs/guides/argocd",slug:"/user_docs/guides/argocd/drift-detection-by-argocd",permalink:"/docs/user_docs/guides/argocd/drift-detection-by-argocd",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/argocd/drift-detection-by-argocd.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685517977,formattedLastUpdatedAt:"5/31/2023",frontMatter:{},sidebar:"user_docs",previous:{title:"ArgoCD",permalink:"/docs/user_docs/guides/argocd/"},next:{title:"Recording and Alerting",permalink:"/docs/user_docs/guides/prometheus/recording-and-alerting"}},s={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Config ArgoCD Plugin with Kusion",id:"config-argocd-plugin-with-kusion",level:2},{value:"Update ArgoCD Deployment",id:"update-argocd-deployment",level:2},{value:"Create KCL Project",id:"create-kcl-project",level:2},{value:"Configure Drift Detection",id:"configure-drift-detection",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"drift-detection-by-argocd"},"Drift Detection by ArgoCD"),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Install ArgoCD:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace argocd\nkubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml\n")),(0,o.kt)("h2",{id:"config-argocd-plugin-with-kusion"},"Config ArgoCD Plugin with Kusion"),(0,o.kt)("p",null,"ArgoCD has already had some common built-in plugins, including helm, jsonnet, and kustomize.\nFor KCL, as a brand-new configuration language, if you want to use ArgoCD to complete drift detection,\nyou need to follow its plugin mechanism and configure Kusion as a third-party plugin.\nThe specific operations are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/examples/blob/main/kusion/argo-cd/patch-argocd-cm.yaml"},"patch")," file:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget -q https://raw.githubusercontent.com/KusionStack/examples/main/kusion/argo-cd/patch-argocd-cm.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Update configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n argocd patch cm/argocd-cm -p "$(cat patch-argocd-cm.yaml)"\n')),(0,o.kt)("h2",{id:"update-argocd-deployment"},"Update ArgoCD Deployment"),(0,o.kt)("p",null,"After completing the first step, ArgoCD will recognize the Kusion plugin,\nbut the Kusion plugin has not been loaded into the ArgoCD image.\nTo implement configuration drift detection, we have to tune the Deployment of argocd-repo-server."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/examples/blob/main/kusion/argo-cd/patch-argocd-repo-server.yaml"},"patch")," file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"wget -q https://raw.githubusercontent.com/KusionStack/examples/main/kusion/argo-cd/patch-argocd-repo-server.yaml\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Update configuration")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n argocd patch deploy/argocd-repo-server -p "$(cat patch-argocd-repo-server.yaml)"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Update complete")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -n argocd -l app.kubernetes.io/name=argocd-repo-server\n")),(0,o.kt)("h2",{id:"create-kcl-project"},"Create KCL Project"),(0,o.kt)("p",null,"At this point, the preparation work has been completed, and now the verification process is started.\nHere we use example projects from the open-source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")," library."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enable local port forwarding")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward svc/argocd-server -n argocd 8080:443\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Login to ArgoCD")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"argocd login localhost:8080\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create ArgoCD Application")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"argocd app create guestbook-test \\\n--repo https://github.com/KusionStack/konfig.git \\\n--path appops/guestbook-frontend/prod \\\n--dest-namespace default \\\n--dest-server https://kubernetes.default.svc \\\n--config-management-plugin kusion\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using a private repository, you need to configure the private repository access with private key credentials before executing the create command. "),(0,o.kt)("p",{parentName:"div"},"Please refer ",(0,o.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/#ssh-private-key-credential"},"Private Repositories")," for more details."))),(0,o.kt)("p",null,"After successfully creating, you can see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"application 'guestbook-test' created\n")),(0,o.kt)("p",null,"Through the ArgoCD UI, you can see that the created applications have not been synchronized yet.\nHere, you can manually synchronize or set automatic synchronization."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(72253).Z,width:"1330",height:"380"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Set synchronization policy (only ",(0,o.kt)("inlineCode",{parentName:"li"},"unsynced")," resources):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"argocd app set guestbook-test --sync-option ApplyOutOfSyncOnly=true\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For more information on synchronization strategies, see ",(0,o.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/"},"Sync Options")))),(0,o.kt)("p",null,"Sync succeeded:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(674).Z,width:"2654",height:"362"})),(0,o.kt)("h2",{id:"configure-drift-detection"},"Configure Drift Detection"),(0,o.kt)("p",null,"At this point, the ArgoCD monitoring KCL project has been completed, implement configuration drift detection and achieve result consistency.\nLet's modify the mirror version of ",(0,o.kt)("inlineCode",{parentName:"p"},"guestbook-test")," to implement configuration changes."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},' appConfiguration: frontend.Server {\n-    image = "gcr.io/google-samples/gb-frontend:v4"\n+    image = "gcr.io/google-samples/gb-frontend:v5"\n     schedulingStrategy.resource = res_tpl.tiny\n }\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Compile Again")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion compile -w appops/guestbook-frontend/prod\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Git commit and push")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'git add .\ngit commit -m "mannual drifted config for appops/guestbook-frontend/prod"\ngit push origin main\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Drift configuration auto-convergence")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:a(22292).Z,width:"2654",height:"414"})))}d.isMDXComponent=!0},72253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/out-of-sync-37f958b3a8b314e916ea330492dee2f0.jpg"},22292:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/reconcile-drifted-config-40ba407f682c028fa3ebd7cd403881a7.jpg"},674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/synced-9247a7d5a6437d211b07ae03344a8ac3.jpg"}}]);