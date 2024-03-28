"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={id:"deliver-wordpress"},i="Deliver the WordPress Application on Kubernetes",l={unversionedId:"kusion/getting-started/deliver-wordpress",id:"kusion/getting-started/deliver-wordpress",title:"Deliver the WordPress Application on Kubernetes",description:"In this tutorial we will walk through how to deploy a WordPress application on Kubernetes with Kusion. The WordPress application will interact with a locally deployed MySQL, which is declared as a database accessory in the config codes and will be automatically created and managed by Kusion.",source:"@site/docs/kusion/2-getting-started/2-deliver-wordpress.md",sourceDirName:"kusion/2-getting-started",slug:"/kusion/getting-started/deliver-wordpress",permalink:"/docs/next/kusion/getting-started/deliver-wordpress",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/2-getting-started/2-deliver-wordpress.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1711596556,formattedLastUpdatedAt:"Mar 28, 2024",sidebarPosition:2,frontMatter:{id:"deliver-wordpress"},sidebar:"kusion",previous:{title:"Install Kusion",permalink:"/docs/next/kusion/getting-started/install-kusion"},next:{title:"Overview",permalink:"/docs/next/kusion/concepts/project/overview"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Workspace",id:"init-workspace",level:2},{value:"Init Project",id:"init-project",level:2},{value:"Review Configuration Files",id:"review-configuration-files",level:3},{value:"Application Delivery",id:"application-delivery",level:2},{value:"Delete WordPress Application",id:"delete-wordpress-application",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deliver-the-wordpress-application-on-kubernetes"},"Deliver the WordPress Application on Kubernetes"),(0,o.kt)("p",null,"In this tutorial we will walk through how to deploy a WordPress application on Kubernetes with Kusion. The WordPress application will interact with a locally deployed MySQL, which is declared as a database accessory in the config codes and will be automatically created and managed by Kusion. "),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before we start to play with this example, we need to have the Kusion CLI installed and run a Kubernetes cluster. Here are some helpful documentations: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/kusion/getting-started/install-kusion"},"Kusion")," CLI"),(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," CLI and run a ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," cluster. Some light and convenient options for local deployment include ",(0,o.kt)("a",{parentName:"li",href:"https://docs.k3s.io/quick-start"},"k3s"),", ",(0,o.kt)("a",{parentName:"li",href:"https://k3d.io/v5.4.4/#installation"},"k3d"),", and ",(0,o.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"MiniKube"),". ")),(0,o.kt)("h2",{id:"init-workspace"},"Init Workspace"),(0,o.kt)("p",null,"To deploy the WordPress application, we need to first initiate a ",(0,o.kt)("inlineCode",{parentName:"p"},"Workspace")," for the targeted stack (we are using ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," here). Please copy the following example YAML file to your local ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace.yaml"),". "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"workspace.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# example workspace configs for local mysql database\nruntimes: \n  kubernetes: \n    kubeConfig: /etc/kubeconfig.yaml # Please replace with your own kubeconfig file path\n\nmodules: \n  mysql: \n    default: \n      suffix: "-mysql" # The suffix of the MySQL database name\n')),(0,o.kt)("p",null,"You can replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"runtimes.kubernetes.kubeConfig")," field with your own kubeconfig file path in ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace.yaml")," and execute the following command line to initiate the workspace configuration for ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," stack. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion workspace create dev -f workspace.yaml\n")),(0,o.kt)("p",null,"You can use the following command lines to list and show the workspace configurations for ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," stack. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion workspace list\n\nkusion workspace show dev\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace.yaml")," is a sample configuration file for workspace management, including ",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," runtime config and ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQL")," module config. Workspace configurations are usually declared by ",(0,o.kt)("strong",{parentName:"p"},"Platform Engineers")," and will take effect through the corresponding stack. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More details about the configuration of Workspace can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/docs/design/workspace_management/workspace_management.md"},"Workspace Management"),". ")),(0,o.kt)("h2",{id:"init-project"},"Init Project"),(0,o.kt)("p",null,"We can start by initializing this tutorial project with online templates: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion init --online\n")),(0,o.kt)("p",null,"All init templates are listed as follows: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  kusion_playground kusion init --online\n? Please choose a template: wordpress-local-db         A sample wordpress project with local database\nThis command will walk you through creating a new kusion project.\n\nEnter a value or leave blank to accept the (default), and press <ENTER>.\nPress ^C at any time to quit.\n\nProject Config:\n? ProjectName: wordpress-local-db\n? AppName: wordpress\nStack Config: dev\n? Image: wordpress:6.3\nCreated project 'wordpress-local-db'\n")),(0,o.kt)("p",null,"Please select ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress-local-db")," and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),", after which we will see the hints below and use the default values to configure this project and stack. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(63617).Z,width:"2560",height:"1440"})),(0,o.kt)("p",null,"The directory structure looks like the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd wordpress-local-db/dev && tree\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  kusion_playground cd wordpress-local-db/dev && tree\n.\n\u251c\u2500\u2500 kcl.mod\n\u251c\u2500\u2500 main.k\n\u2514\u2500\u2500 stack.yaml\n\n1 directory, 3 files\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More details about the directory structure can be found in ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/kusion/concepts/project/overview"},"Project")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/kusion/concepts/stack/overview"},"Stack"),". ")),(0,o.kt)("h3",{id:"review-configuration-files"},"Review Configuration Files"),(0,o.kt)("p",null,"Now let's have a glance at the configuration file of ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k"),": "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.accessories.mysql\n\n# main.k declares customized configurations for dev stack.\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            wordpress: c.Container {\n                image: "wordpress:6.3"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_USER": "$(KUSION_DB_USERNAME_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_NAME": "mysql"\n                }\n            }\n        }\n        replicas: 1\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n    database: {\n        wordpress: mysql.MySQL {\n            type: "local"\n            version: "8.0"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The configuration file ",(0,o.kt)("inlineCode",{parentName:"p"},"main.k"),", usually written by the ",(0,o.kt)("strong",{parentName:"p"},"App Developers"),", declares customized configurations for ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," stack, which includes an ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," with the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress"),". And the ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress")," application includes a workload of type ",(0,o.kt)("inlineCode",{parentName:"p"},"workload.Service"),", which runs on 1 replica and exposes ",(0,o.kt)("inlineCode",{parentName:"p"},"80")," port to be accessed. Besides, it declares a local ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql.MySQL")," as the database accessory with the engine version of ",(0,o.kt)("inlineCode",{parentName:"p"},"8.0")," for the application. The necessary Kubernetes resources for deploying and using the local database will be generated, and users can get the ",(0,o.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"paasword")," of the database through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/kusion/reference/modules/catalog-models/database/mysql#credentials-and-connectivity"},"mysql credentials and connectivity")," of Kusion in application containers. "),(0,o.kt)("p",null,"This model hides the major complexity of Kubernetes resources such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Namespace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),", providing the concepts that are application-centric and infrastructure-agnostic. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More details about the Models can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The collaboration paradigm between App Developers and Platform Engineers with Kusion can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/docs/design/collaboration/collaboration_paradigm.md"},"Collaboration Paradigm"))),(0,o.kt)("h2",{id:"application-delivery"},"Application Delivery"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion apply --watch\n")),(0,o.kt)("p",null,"We will deliver the WordPress application in the ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress-local-db/dev")," folder into the Kubernetes cluster with one command ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion apply --watch"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(41809).Z,width:"2560",height:"1440"})),(0,o.kt)("p",null,"Check ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment")," status. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n wordpress-local-db get deployment\n")),(0,o.kt)("p",null,"The expected output is shown as follows: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev kubectl -n wordpress-local-db get deployment\nNAME                               READY   UP-TO-DATE   AVAILABLE   AGE\nwordpress-local-db-dev-wordpress   1/1     1            1           2m56s\nwordpress-mysql                    1/1     1            1           2m56s\n")),(0,o.kt)("p",null,"In the above two resources, ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress-local-db-dev-wordpress")," corresponds to the Kubernetes ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment")," of the WordPress application, while ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress-mysql")," corresponds to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment")," of the local MySQL database. "),(0,o.kt)("p",null,"Port-forward our WordPress with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Service"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n wordpress-local-db service/wordpress-local-db-dev-wordpress-private 12345:80\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev kubectl port-forward -n wordpress-local-db service/wordpress-local-db-dev-wordpress-private 12345:80\nForwarding from 127.0.0.1:12345 -> 80\nForwarding from [::1]:12345 -> 80\n\n")),(0,o.kt)("p",null,"Now we can visit ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:12345"},"http://localhost:12345")," in our browser and enjoy!"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85773).Z,width:"1500",height:"803"})),(0,o.kt)("h2",{id:"delete-wordpress-application"},"Delete WordPress Application"),(0,o.kt)("p",null,"We can delete the WordPress application and related database resources using the following command line: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --yes\n")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(21192).Z,width:"2560",height:"1440"})))}c.isMDXComponent=!0},41809:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-wordpress-local-db-6a391cbf9576c88494710eb17f8c8396.gif"},21192:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/destroy-wordpress-local-db-93038beed84dadd31cbefdbbfb632ee1.gif"},63617:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/init-wordpress-local-db-34d0778e8b48028ad7a1394543a1dfb2.gif"},85773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-site-page-ef650e640399209d1eec5e6dfe88c454.png"}}]);