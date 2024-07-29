"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={id:"deliver-quickstart"},r="Run Your First App on Kubernetes with Kusion",s={unversionedId:"getting-started/deliver-quickstart",id:"version-v0.12/getting-started/deliver-quickstart",title:"Run Your First App on Kubernetes with Kusion",description:"In this tutorial, we will walk through how to deploy a quickstart application on Kubernetes with Kusion. The demo application can interact with a locally deployed MySQL database, which is declared as an accessory in the config codes and will be automatically created and managed by Kusion.",source:"@site/docs_versioned_docs/version-v0.12/2-getting-started/2-deliver-quickstart.md",sourceDirName:"2-getting-started",slug:"/getting-started/deliver-quickstart",permalink:"/docs/getting-started/deliver-quickstart",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/2-getting-started/2-deliver-quickstart.md",tags:[],version:"v0.12",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1722237898,formattedLastUpdatedAt:"Jul 29, 2024",sidebarPosition:2,frontMatter:{id:"deliver-quickstart"},sidebar:"kusion",previous:{title:"Install Kusion",permalink:"/docs/getting-started/install-kusion"},next:{title:"Overview",permalink:"/docs/concepts/overview"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialize Project",id:"initialize-project",level:2},{value:"Review Configuration Files",id:"review-configuration-files",level:3},{value:"Application Delivery",id:"application-delivery",level:2},{value:"Add MySQL Accessory",id:"add-mysql-accessory",level:2},{value:"Delete Application",id:"delete-application",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-your-first-app-on-kubernetes-with-kusion"},"Run Your First App on Kubernetes with Kusion"),(0,i.kt)("p",null,"In this tutorial, we will walk through how to deploy a quickstart application on Kubernetes with Kusion. The demo application can interact with a locally deployed MySQL database, which is declared as an accessory in the config codes and will be automatically created and managed by Kusion. "),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before we start to play with this example, we need to have the Kusion CLI installed and run an accessible Kubernetes cluster. Here are some helpful documents: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"/docs/getting-started/install-kusion"},"Kusion CLI"),". "),(0,i.kt)("li",{parentName:"ul"},"Run a ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io"},"Kubernetes")," cluster. Some light and convenient options for Kubernetes local deployment include ",(0,i.kt)("a",{parentName:"li",href:"https://docs.k3s.io/quick-start"},"k3s"),", ",(0,i.kt)("a",{parentName:"li",href:"https://k3d.io/v5.4.4/#installation"},"k3d"),", and ",(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node"},"MiniKube"),". ")),(0,i.kt)("h2",{id:"initialize-project"},"Initialize Project"),(0,i.kt)("p",null,"We can start by initializing this tutorial project with ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," cmd. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new directory and navigate into it. \nmkdir quickstart && cd quickstart\n\n# Initialize the demo project with the name of the current directory. \nkusion init\n")),(0,i.kt)("p",null,"The created project structure looks like below: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"tree\n.\n\u251c\u2500\u2500 default\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n2 directories, 4 files\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"More details about the project and stack structure can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/project/overview"},"Project")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/stack/overview"},"Stack"),". ")),(0,i.kt)("h3",{id:"review-configuration-files"},"Review Configuration Files"),(0,i.kt)("p",null,"Now let's have a glance at the configuration codes of ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," stack: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat default/main.k\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n\n# main.k declares the customized configuration codes for default stack.\nquickstart: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            quickstart: c.Container {\n                image: "kusionstack/kusion-quickstart:latest"\n            }\n        }\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 8080\n                }\n            ]\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k"),", usually written by the ",(0,i.kt)("strong",{parentName:"p"},"App Developers"),", declares the customized configuration codes for ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," stack, including an ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance with the name of ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart")," application consists of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Workload")," with the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"service.Service"),", which runs a container named ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart")," using the image of ",(0,i.kt)("inlineCode",{parentName:"p"},"kusionstack/kusion-quickstart:latest"),". "),(0,i.kt)("p",null,"Besides, it declares a ",(0,i.kt)("strong",{parentName:"p"},"Kusion Module")," with the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"network.Network"),", exposing ",(0,i.kt)("inlineCode",{parentName:"p"},"8080")," port to be accessed for the long-running service. "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model can hide the major complexity of Kubernetes resources such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," which will be created and managed by Kusion, providing the concepts that are ",(0,i.kt)("strong",{parentName:"p"},"application-centric")," and ",(0,i.kt)("strong",{parentName:"p"},"infrastructure-agnostic")," for a more developer-friendly experience. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"More details about the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model and built-in Kusion Module can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kam"},"kam")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"catalog"),". ")),(0,i.kt)("p",null,"The declaration of the dependency packages can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"default/kcl.mod"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cat default/kcl.mod\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.2.0" }\nservice = {oci = "oci://ghcr.io/kusionstack/service", tag = "0.1.0" }\nnetwork = { oci = "oci://ghcr.io/kusionstack/network", tag = "0.2.0" }\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"More details about the application model and module dependency declaration can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/module/app-dev-guide"},"Kusion Module guide for app dev"),". ")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The specific module versions we used in the above demonstration is only applicable for Kusion CLI after ",(0,i.kt)("strong",{parentName:"p"},"v0.12.0"),". ")),(0,i.kt)("h2",{id:"application-delivery"},"Application Delivery"),(0,i.kt)("p",null,"Use the following command to deliver the quickstart application in ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," stack on your accessible Kubernetes cluster, while watching the resource creation and automatically port-forwarding the specified port (8080) from local to the Kubernetes Service of the application. We can check the details of the resource preview results before we confirm to apply the diffs. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd default && kusion apply --port-forward 8080\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(65279).Z,width:"2872",height:"1540"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"During the first apply, the models and modules that the application depends on will be downloaded, so it may take some time (usually within one minute). You can take a break and have a cup of coffee. ")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Kusion by default will create the Kubernetes resources of the application in the namespace the same as the project name. If you want to customize the namespace, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/project/configuration#kubernetesnamespace"},"Project Namespace Extension")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/stack/configuration#kubernetesnamespace"},"Stack Namespace Extension"),". ")),(0,i.kt)("p",null,"Now we can visit ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," in our browser and play with the demo application! "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(58104).Z,width:"2872",height:"1318"})),(0,i.kt)("h2",{id:"add-mysql-accessory"},"Add MySQL Accessory"),(0,i.kt)("p",null,"As you can see, the demo application page indicates that the MySQL database is not ready yet. Hence, we will now add a MySQL database as an accessory for the workload. "),(0,i.kt)("p",null,"We can add the Kusion-provided built-in dependency in the ",(0,i.kt)("inlineCode",{parentName:"p"},"default/kcl.mod"),", so that we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"MySQL")," module in the configuration codes. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.2.0" }\nservice = {oci = "oci://ghcr.io/kusionstack/service", tag = "0.1.0" }\nnetwork = { oci = "oci://ghcr.io/kusionstack/network", tag = "0.2.0" }\nmysql = { oci = "oci://ghcr.io/kusionstack/mysql", tag = "0.2.0" }\n')),(0,i.kt)("p",null,"We can update the ",(0,i.kt)("inlineCode",{parentName:"p"},"default/main.k")," with the following configuration codes: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\nimport mysql\n\n# main.k declares the customized configuration codes for default stack. \nquickstart: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            quickstart: c.Container {\n                image: "kusionstack/kusion-quickstart:latest"\n                env: {\n                    "DB_HOST": "$(KUSION_DB_HOST_QUICKSTART_DEFAULT_QUICKSTART_MYSQL)"\n                    "DB_USERNAME": "$(KUSION_DB_USERNAME_QUICKSTART_DEFAULT_QUICKSTART_MYSQL)"\n                    "DB_PASSWORD": "$(KUSION_DB_PASSWORD_QUICKSTART_DEFAULT_QUICKSTART_MYSQL)"\n                }\n            }\n        }\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 8080\n                }\n            ]\n        }\n        "mysql": mysql.MySQL {\n            type: "local"\n            version: "8.0"\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The configuration codes above declare a local ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql.MySQL")," with the engine version of ",(0,i.kt)("inlineCode",{parentName:"p"},"8.0")," as an accessory for the application workload. The necessary Kubernetes resources for deploying and using the local MySQL database will be generated and users can get the ",(0,i.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," of the database through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/modules/developer-schemas/database/mysql#credentials-and-connectivity"},"MySQL Credentials And Connectivity")," of Kusion in application containers. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information about the naming convention of Kusion built-in MySQL module, you can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/modules/naming-conventions"},"Module Naming Convention"),". ")),(0,i.kt)("p",null,"After that, we can re-apply the application, and we can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"--watch=false")," to skip watching the resources to be reconciled: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kusion apply --port-forward 8080 --watch=false\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(38615).Z,width:"2872",height:"1540"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You may wait another minute to download the MySQL Module. ")),(0,i.kt)("p",null,"Let's visit ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080")," in our browser, and we can find that the application has successfully connected to the MySQL database. The connection information is also printed on the page. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(48968).Z,width:"2876",height:"1556"})),(0,i.kt)("p",null,"Now please feel free to enjoy the demo application!"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(73398).Z,width:"2874",height:"1566"})),(0,i.kt)("h2",{id:"delete-application"},"Delete Application"),(0,i.kt)("p",null,"We can delete the quickstart demo workload and related accessory resources with the following cmd: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --yes\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(61788).Z,width:"1886",height:"1298"})))}d.isMDXComponent=!0},65279:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion_apply_quickstart_0.12-5fffdb4e7fb963bc0a71764c1e0d1684.gif"},61788:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion_destroy_quickstart-50eb4898c1c96fc4d3914c32cec371ad.gif"},38615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion_re_apply_quickstart_0.12-91a562c87125b0a83e3c1e971940c30a.gif"},73398:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart_mysql_validation-d34684107fe5c9914b783c19d949f460.gif"},58104:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart_page-6487ce3284b33db5234a96241ef72bf7.png"},48968:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart_page_with_mysql-1900976723fa14db1d29797d882d1382.png"}}]);