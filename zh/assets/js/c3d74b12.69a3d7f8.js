"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2},s="Deliver the WordPress Application on Kubernetes",i={unversionedId:"getting-started/deliver-wordpress",id:"version-v0.9/getting-started/deliver-wordpress",title:"Deliver the WordPress Application on Kubernetes",description:"In this tutorial we will walk through how to deploy a WordPress application on Kubernetes with Kusion. The WordPress application will interact with MySQL, which is declared as a database accessory in the config codes and will be automatically created and managed by Kusion.",source:"@site/docs_versioned_docs/version-v0.9/getting-started/deliver-wordpress.md",sourceDirName:"getting-started",slug:"/getting-started/deliver-wordpress",permalink:"/zh/docs/v0.9/getting-started/deliver-wordpress",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/getting-started/deliver-wordpress.md",tags:[],version:"v0.9",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718370150,formattedLastUpdatedAt:"2024\u5e746\u670814\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"kusion",previous:{title:"Install Kusion",permalink:"/zh/docs/v0.9/getting-started/install-kusion"},next:{title:"Concepts",permalink:"/zh/docs/v0.9/concepts/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Project",id:"init-project",level:2},{value:"Review Config Files",id:"review-config-files",level:3},{value:"Delivery",id:"delivery",level:2},{value:"Delete WordPress Application",id:"delete-wordpress-application",level:2}],d={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deliver-the-wordpress-application-on-kubernetes"},"Deliver the WordPress Application on Kubernetes"),(0,r.kt)("p",null,"In this tutorial we will walk through how to deploy a WordPress application on Kubernetes with Kusion. The WordPress application will interact with MySQL, which is declared as a database accessory in the config codes and will be automatically created and managed by Kusion. "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before we start to play with this example, we need to have the Kusion CLI installed and run a Kubernetes cluster. Here are some helpful documentations: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"install-kusion"},"Kusion CLI")),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," CLI and run a ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," cluster. Some light and convenient options for local deployment include ",(0,r.kt)("a",{parentName:"li",href:"https://docs.k3s.io/quick-start"},"k3s"),", ",(0,r.kt)("a",{parentName:"li",href:"https://k3d.io/v5.4.4/#installation"},"k3d"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"MiniKube"),". ")),(0,r.kt)("h2",{id:"init-project"},"Init Project"),(0,r.kt)("p",null,"We can start by initializing this tutorial project with online templates: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion init --online\n")),(0,r.kt)("p",null,"All init templates are listed as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  kusion_playground kusion init --online\n? Please choose a template:  [Use arrows to move, type to filter]\n  code-city                  Code City metaphor for visualizing Go source code in 3D.\n  deployment-multi-stack     A minimal kusion project of multiple stacks\n  deployment-single-stack    A minimal kusion project of single stack\n> wordpress                  A sample wordpress project\n  wordpress-cloud-rds        A sample wordpress project with cloud rds\n")),(0,r.kt)("p",null,"Please select ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress")," and press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),", after which we will see the hints below and use the default value to config this project and stack. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(48024).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"The directory structure looks like the following: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd wordpress && tree\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  kusion_playground cd wordpress && tree\n.\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod.lock\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n1 directory, 5 files\n\u279c  wordpress\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More details about the directory structure can be found in ",(0,r.kt)("a",{parentName:"p",href:"../concepts/glossary"},"Concepts"),". ")),(0,r.kt)("h3",{id:"review-config-files"},"Review Config Files"),(0,r.kt)("p",null,"Now let's have a glance at the configuration files at ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k"),": "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.trait as t\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.secret as sec\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.monitoring as m\nimport catalog.models.schema.v1.accessories.database as db\n\n# main.k declares reusable configurations for dev stacks.\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            wordpress: c.Container {\n                image = "wordpress:6.3"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST)"\n                    "WORDPRESS_DB_USER": "$(KUSION_DB_USERNAME)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD)"\n                    "WORDPRESS_DB_NAME": "mysql"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n    database: db.Database {\n        type: "local"\n        engine: "mysql"\n        version: "8.0"\n    }\n}\n')),(0,r.kt)("p",null,"The configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"main.k")," includes an ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," with the name of ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress")," application includes a wordload of type ",(0,r.kt)("inlineCode",{parentName:"p"},"wl.Service"),", which runs on 1 replica and exposes ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," to be accessed. Besides, it declares a local ",(0,r.kt)("inlineCode",{parentName:"p"},"db.Database")," accessory with the engine of ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql:8.0")," for the application. The necessary Kubernetes resources for deploying and using the local database will be generated, and users can get the ",(0,r.kt)("inlineCode",{parentName:"p"},"host address"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"paasword")," through the ",(0,r.kt)("a",{parentName:"p",href:"../reference/model/naming-conventions#sensitive-database-information"},"magic variables for sensitive database information")," of Kusion in application containers. "),(0,r.kt)("p",null,"This model hides the major complexity of Kubernetes resources such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),", which providing the concepts that are application-centric and infrastructure-agnostic. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More details about the Models can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog"))),(0,r.kt)("h2",{id:"delivery"},"Delivery"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd dev && kusion apply --watch\n")),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," folder and we will deliver the WordPress application into the Kubernetes cluster with one command ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply --watch"),". "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(11273).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"Check ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," status. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n wordpress get deployment\n")),(0,r.kt)("p",null,"The expected output is shown as follows: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev kubectl -n wordpress get deploy\nNAME                            READY   UP-TO-DATE   AVAILABLE   AGE\nwordpress-dev-wordpress         1/1     1            1           2m23s\nwordpress-db-local-deployment   1/1     1            1           2m23s\n")),(0,r.kt)("p",null,"Port-forward our WordPress with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n wordpress service/wordpress-dev-wordpress-private 12345:80\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev kubectl port-forward -n wordpress service/wordpress-dev-wordpress-private 12345:80\nForwarding from 127.0.0.1:12345 -> 80\nForwarding from [::1]:12345 -> 80\n\n")),(0,r.kt)("p",null,"Now we can visit ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:12345"},"http://localhost:12345")," in our browser and enjoy!"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(85773).Z,width:"1500",height:"803"})),(0,r.kt)("h2",{id:"delete-wordpress-application"},"Delete WordPress Application"),(0,r.kt)("p",null,"We can delete the WordPress application and related database resources using the following command line: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --yes\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(82864).Z,width:"2560",height:"1440"})))}c.isMDXComponent=!0},11273:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-wordpress-with-local-db-33e34e0fa75349c20a8d3c561d2d6c5c.gif"},48024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/init-wordpress-with-local-db-1a3e0c28ac010e686185e787ec2929a3.gif"},85773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-site-page-ef650e640399209d1eec5e6dfe88c454.png"},82864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-with-local-db-destroy-9a46e6e09977721984044b31e29b6b78.gif"}}]);