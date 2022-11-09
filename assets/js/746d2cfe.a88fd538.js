"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?o.createElement(k,a(a({ref:t},u),{},{components:n})):o.createElement(k,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={},a="Enable Monitoring",s={unversionedId:"user_docs/guides/working-with-k8s/monitoring",id:"user_docs/guides/working-with-k8s/monitoring",title:"Enable Monitoring",description:"This guide shows you how to use the KCL language and its corresponding CLI tool Kusion to complete the monitoring and deployment of a Kubernetes application Prometheus.",source:"@site/docs/user_docs/guides/working-with-k8s/3-monitoring.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/monitoring",permalink:"/docs/user_docs/guides/working-with-k8s/monitoring",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/3-monitoring.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1667964995,formattedLastUpdatedAt:"11/9/2022",sidebarPosition:3,frontMatter:{},sidebar:"user_docs",previous:{title:"Configure Main Container",permalink:"/docs/user_docs/guides/working-with-k8s/container"},next:{title:"Expose Service",permalink:"/docs/user_docs/guides/working-with-k8s/service"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validate Result",id:"validate-result",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enable-monitoring"},"Enable Monitoring"),(0,r.kt)("p",null,"This guide shows you how to use the KCL language and its corresponding CLI tool Kusion to complete the monitoring and deployment of a Kubernetes application Prometheus.\nThe demo sample is mainly composed of the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespace"),(0,r.kt)("li",{parentName:"ul"},"Deployment"),(0,r.kt)("li",{parentName:"ul"},"PodMonitor")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This guide requires you to have a basic understanding of Kubernetes and Prometheus.\nIf you are not familiar with the relevant concepts, please refer to the links below:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Learn Kubernetes Basics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/introduction/overview/"},"Prometheus Introduction"))))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before starting, in addition to referring ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#prerequisites"},"here"),",\nthe following preparations need to be completed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deploy Prometheus Operator in your cluster")),(0,r.kt)("p",null,"Follow the steps in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus"},"kube-prometheus")," to deploy the Prometheus Operator in your cluster"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Enable monitoring by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"enableMonitoring")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),", and add the business container port number configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.container\nimport base.pkg.kusion_models.kube.frontend.container.env as e\nimport base.pkg.kusion_models.kube.frontend.container.port as cp\nimport base.pkg.kusion_models.kube.frontend.container.probe as p\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\nappConfiguration: frontend.Server {\n    # Main container configuration\n    mainContainer: container.Main {\n        name = "prometheus-example-app"\n        ports = [\n            cp.ContainerPort {\n                name = "web"\n                containerPort = 8080\n            }\n        ]\n    }\n    enableMonitoring = True\n}\n')),(0,r.kt)("h2",{id:"applying"},"Applying"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion apply\n")),(0,r.kt)("p",null,"The output is similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," SUCCESS  Compiling in stack prod...                                                                                                  \n\nStack: prod    Provider                                 Type                           Name    Plan\n       * \u251c\u2500  kubernetes                         v1:Namespace      prometheus-example-app[0]  Create\n       * \u251c\u2500  kubernetes  monitoring.coreos.com/v1:PodMonitor  prometheus-example-appprod[0]  Create\n       * \u2514\u2500  kubernetes                   apps/v1:Deployment  prometheus-example-appprod[0]  Create\n")),(0,r.kt)("h2",{id:"validate-result"},"Validate Result"),(0,r.kt)("p",null,"We can see that in addition to deploying k8s ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace")," resources,\n",(0,r.kt)("inlineCode",{parentName:"p"},"PodMonitor")," is also deployed to configure Prometheus to monitor target pods.\nAfter the resources are created, you can use the following commands to check the Prometheus monitoring panel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl --namespace monitoring port-forward svc/prometheus-k8s 9090\n")),(0,r.kt)("p",null,"Finally, access the monitoring panel via ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9090"},"http://localhost:9090")," and see the monitoring metrics of the application."))}c.isMDXComponent=!0}}]);