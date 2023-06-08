"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:2},r="Deliver the Wordpress application on Kubernetes and clouds",s={unversionedId:"user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",id:"user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",title:"Deliver the Wordpress application on Kubernetes and clouds",description:"This tutorial will demonstrate how to deploy a wordpress application using KusionStack which relies on both Kubernetes and Alicloud IaaS resources. Unlike the code-city application we previously deployed on Kubernetes, the wordpress application will also rely on Alicloud RDS (Relational Database Service) to provide a cloud-based database solution for wordpress website content such as articles, comments, users and other information.",source:"@site/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds.md",sourceDirName:"user_docs/getting-started/usecases",slug:"/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",permalink:"/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1686229274,formattedLastUpdatedAt:"6/8/2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Deliver Your First Project on Kubernetes",permalink:"/docs/user_docs/getting-started/usecases/deliver-first-project"},next:{title:"Use VS Code Kusion",permalink:"/docs/user_docs/getting-started/kusion-ide"}},l={},d=[{value:"Prerequesties",id:"prerequesties",level:2},{value:"Review Project Structure and Config Codes",id:"review-project-structure-and-config-codes",level:2},{value:"Project Structure",id:"project-structure",level:3},{value:"Config Codes",id:"config-codes",level:3},{value:"Deliver Wordpress Application",id:"deliver-wordpress-application",level:2},{value:"Verify Wordpress Application",id:"verify-wordpress-application",level:2},{value:"Modify Wordpress Application",id:"modify-wordpress-application",level:2},{value:"Compliance Check of Config Code Modification",id:"compliance-check-of-config-code-modification",level:3},{value:"Apply Config Code Modification",id:"apply-config-code-modification",level:3},{value:"Delete Wordpress Application",id:"delete-wordpress-application",level:2},{value:"Summary",id:"summary",level:2},{value:"Full Demonstration Video",id:"full-demonstration-video",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deliver-the-wordpress-application-on-kubernetes-and-clouds"},"Deliver the Wordpress application on Kubernetes and clouds"),(0,o.kt)("p",null,"This tutorial will demonstrate how to deploy a wordpress application using KusionStack which relies on both Kubernetes and Alicloud IaaS resources. Unlike the code-city application we previously deployed on Kubernetes, the wordpress application will also rely on Alicloud RDS (Relational Database Service) to provide a cloud-based database solution for wordpress website content such as articles, comments, users and other information. "),(0,o.kt)("h2",{id:"prerequesties"},"Prerequesties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Kusion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," or ",(0,o.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/"},"Terraform")),(0,o.kt)("li",{parentName:"ul"},"Prepare an Alicloud account and create a user with ",(0,o.kt)("inlineCode",{parentName:"li"},"AliyunVPCFullAccess")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"AliyunRDSFullAccess")," permissions to use the Relational Database Service (RDS). This user can be created and managed in the ",(0,o.kt)("a",{parentName:"li",href:"https://ram.console.aliyun.com/users/"},"Alicloud Resource Access Management (RAM) Console")),(0,o.kt)("li",{parentName:"ul"},"Additionally, we also need to configure the obtained AccessKey and SecretKey as environment variables: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export ALICLOUD_ACCESS_KEY="LTAI5txxx" # replace it with your AccessKey\nexport ALICLOUD_SECRET_KEY="nxuowIxxx" # replace it with your SecretKey\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Alternatively, Kusion provides a sensitive data management tool for handling the AccessKey and SecretKey mentioned above."))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(73725).Z,width:"1500",height:"629"})),(0,o.kt)("h2",{id:"review-project-structure-and-config-codes"},"Review Project Structure and Config Codes"),(0,o.kt)("h3",{id:"project-structure"},"Project Structure"),(0,o.kt)("p",null,"Firstly, let's clone the Konfig repo and enter the root directory: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/konfig.git && cd konfig\n")),(0,o.kt)("p",null,"Then we can locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress")," project under the ",(0,o.kt)("inlineCode",{parentName:"p"},"appops/")," directory, which are composed of the following files: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd appops/wordpress && tree\n.\n\u251c\u2500\u2500 README.md                       // Documentation\n\u251c\u2500\u2500 base                            // Common configuration for all stacks\n\u2502   \u2514\u2500\u2500 base.k                      // Common config code file for all stacks\n\u251c\u2500\u2500 dev                             // Stack directory\n\u2502   \u251c\u2500\u2500 ci-test                     // CI test directory, storing test scripts and data\n\u2502   \u2502   \u251c\u2500\u2500 settings.yaml           // Configuration for test data and compiling\n\u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml      // Expected Spec YAML, which can be updated using make\n\u2502   \u251c\u2500\u2500 kcl.yaml                    // Multi-file compilation configuration for current stack\n\u2502   \u251c\u2500\u2500 main.k                      // Config codes for App Dev in current stack\n\u2502   \u251c\u2500\u2500 platform.k                  // Config codes for Platform Dev in current stack\n\u2502   \u2514\u2500\u2500 stack.yaml                  // Meta information of current stack\n\u2514\u2500\u2500 project.yaml                    // Meta information of current project\n\n3 directories, 9 files\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"More details about the directory structure can be found in ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig")))),(0,o.kt)("h3",{id:"config-codes"},"Config Codes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k\nimport base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.storage\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\n# And main.k is for the configurations in concern of application developers. \n\n# defination of wordpress application frontend model\nwordpress: frontend.Server {\n    # specify application image\n    image = "wordpress:4.8-apache"\n\n    # use cloud database for the storage of wordpress\n    database = storage.DataBase {\n        # choose aliyun_rds as the cloud database\n        dataBaseType = "aliyun_rds"\n        dataBaseAttr = storage.DBAttr {\n            # choose the engine type and version of the database\n            databaseEngine = "MySQL"\n            databaseEngineVersion = "5.7"\n            # choose the charge type of the cloud database\n            cloudChargeType = "Serverless"\n            # create database account\n            databaseAccountName = "root"\n            databaseAccountPassword = option("db_password")\n            # create internet access for the cloud database\n            internetAccess = True\n        }\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# dev/platform.k\nimport base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_clouds.alicloud_backend.alicloud_config\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\n# And platform.k is for the configurations in concern of platform developers. \n\n_alicloudResourceName = "{}-{}".format(metadata.__META_APP_NAME, metadata.__META_ENV_TYPE_NAME).lower()\n_alicloudDependencyPrefix = "$kusion_path." + alicloud_config.alicloudProvider.namespace + ":" + alicloud_config.alicloudProvider.name + ":"\n\n# defination of wordpress application frontend model\nwordpress: frontend.Server {\n    # add environment variable in main container with implicit alicloud resource dependency\n    mainContainer: {\n        env += [\n            {\n                name = "WORDPRESS_DB_HOST"\n                value = _alicloudDependencyPrefix + alicloud_config.alicloudDBConnectionMeta.type + ":" + _alicloudResourceName + ".connection_string"\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"The configuration code files you need to pay attention to mainly include ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/platform.k"),". Specifically: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dev/main.k")," contains config codes for ",(0,o.kt)("strong",{parentName:"li"},"App Dev")," to concentrate on for the wordpress application deployment in dev environment. In addition to the application container image, it also assigns an instance of type ",(0,o.kt)("inlineCode",{parentName:"li"},"storage.DataBase")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"frontend.Server.database")," attribute, and thus declaring an Alicloud RDS with the charge type of ",(0,o.kt)("inlineCode",{parentName:"li"},"Serverless")," and internet access capability. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dev/platform.k")," contains config codes for ",(0,o.kt)("strong",{parentName:"li"},"Platform Dev")," to concentrate on for the wordpress application deployment in dev environment. Here, the main purpose is to specify the domain name of the cloud database to be connected to for the wordpress application container. ")),(0,o.kt)("p",null,"As shown above, benefited from the advanced features of KCL concerning variable, function and schema definition, we can abstract and encapsulate the Alicloud RDS resources, which shields many properties that App Dev does not need to be aware of (such as the network segment of VPC and vSwitch behind RDS). App Dev only needs to fill in a few necessary fields in the frontend model instance to complete the declaration of RDS resources, so that the application configuration can be organized more flexibly and efficiently. Moreover, under the collaboration of writing config codes in the Konfig repository, App Dev and Platform Dev from different teams can perform their roles, only focusing on their own respective configuration items, thereby improving the collaboration efficiency of application development and operation. "),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"More details about Konfig models can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig")))),(0,o.kt)("h2",{id:"deliver-wordpress-application"},"Deliver Wordpress Application"),(0,o.kt)("p",null,"You can complete the delivery of wordpress application using the following command line: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd appops/wordpress/dev && kusion apply --yes\n")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"apply the wordpress application",src:n(30263).Z,width:"1906",height:"926"})),(0,o.kt)("p",null,"After all the resources reconsiled, we can port-forward our local port (e.g. 12345) to the wordpress frontend service port (80) in the cluster: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n wordpress-example svc/wordpress 12345:80\n")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"kubectl port-forward for wordpress",src:n(86535).Z,width:"992",height:"150"})),(0,o.kt)("h2",{id:"verify-wordpress-application"},"Verify Wordpress Application"),(0,o.kt)("p",null,"Next, we will verify the wordpress site service we just delivered, along with the creation of Alicloud RDS instance it depends on. We can start using the wordpress site by accessing the link of local-forworded port ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:12345"},"(http://localhost:12345)")," we just configured in the browser. "),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"wordpress site page",src:n(85773).Z,width:"1500",height:"803"})),(0,o.kt)("p",null,"In addition, we can also log in to Alicloud Console page to view the RDS instance we just created. "),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"alicloud rds instance",src:n(34811).Z,width:"1500",height:"748"})),(0,o.kt)("h2",{id:"modify-wordpress-application"},"Modify Wordpress Application"),(0,o.kt)("h3",{id:"compliance-check-of-config-code-modification"},"Compliance Check of Config Code Modification"),(0,o.kt)("p",null,"Using KCL to write application config codes naturally has the ability to perform type checking on configuration items. Validation logic can also be implemented through keywords like ",(0,o.kt)("inlineCode",{parentName:"p"},"assert")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"check"),", making it more convenient to discover potential issues during the writing of application config codes and reduce the risk of delivering the application with wrong configuration. "),(0,o.kt)("p",null,"Take creating an Alicloud RDS resources as an example, according to the relevant regulations of Alicloud, if the charge type of RDS is ",(0,o.kt)("inlineCode",{parentName:"p"},"Serverless"),", we can only create ",(0,o.kt)("inlineCode",{parentName:"p"},"MySQL")," instances. The server backend model in Konfig repository has completed the validation logic through the ",(0,o.kt)("inlineCode",{parentName:"p"},"assert")," keyword. Therefor, when we try to modify the database engine of RDS to ",(0,o.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," but forget to modify the charge type of ",(0,o.kt)("inlineCode",{parentName:"p"},"Serverless"),", Kusion will throw the corresponding assertion failure during the compilation process before applying the wordpress application. "),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"KCL Assertion Failure",src:n(99309).Z,width:"1500",height:"875"})),(0,o.kt)("h3",{id:"apply-config-code-modification"},"Apply Config Code Modification"),(0,o.kt)("p",null,"As shown below, you can try to modify the config codes in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k")," to add an environment variable in the main container of the wordpress application. When using ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion apply")," to apply the config code modification, you can preview the resource changes with the capability of 3-way real-time diff of Kusion (note that we ignore the change of ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.managedFields")," field in the following example for better demonstration). "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k\n# ...\n\nwordpress: frontend.Server {\n    # Some unchanged codes are omitted\n    # image = ...\n    # database = storage.DataBase{...}\n    \n    # NOTE: this configuration is an example of adding an environment variable in the main container\n    # uncommenting and re-deploying will add the environment variable "ENV_ADD_EXAMPLE" in the \n    # main container and the differnces will be shown by the command of "kusion apply"\n    mainContainer: {\n        env += [\n            {\n                name = "ENV_ADD_EXAMPLE"\n                value = "wordpress-example"\n            }\n        ]\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kusion apply --ignore-fields "metadata.managedFields"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"kusion 3-way diff",src:n(56535).Z,width:"1902",height:"1470"})),(0,o.kt)("h2",{id:"delete-wordpress-application"},"Delete Wordpress Application"),(0,o.kt)("p",null,"You can use the following command line to delete the wordpress application and related Alicloud RDS resources. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --yes\n")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"kusion destroy",src:n(75775).Z,width:"1904",height:"896"})),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This tutorial demonstrates how to use KusionStack to deploy a wordpress application that depends on both Kubernetes and Alicloud RDS resources. During the process of writing and applying wordpress config codes, we can see that with the combination of KCL configuration and policy language, Konfig configuration code library and Kusion execution engine, KusionStack has the advantanges listed below: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hybrid resource orchestration"),": using KCL to write application config codes make it easy to orchestrate and manage different types of resources in a unified way. In the example of delivering a wordpress application with both Kubernetes and Alicloud IaaS resources, all the necessary dependencies can be declared in a single KCL code file, enabling one-click deployment of the entire application and achieving application-centric operations. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Application schema abstraction"),": using KCL's advanced features such as built-in variables, functions and schema definition can easily abstract and encapsulate the dependent resources of the application, shielding developers from configuration attributes they don't need to be aware of. App Dev only needs to fill in a few necessary fields in the frontend model instance to declare the required resources, which makes it possible to organize application configuration more flexibly and efficiently. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Multi-team and multi-role collaboration"),": under the collaboration of writing config codes in the Konfig repository, App Dev and Platform Dev from different teams can perform their roles, only focusing on their own respective configuration items, thereby improving the collaboration efficiency of application development and operation. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Shift left compliance check"),": using KCL to write application config codes naturally has the ability to perform type checking on configuration items. Additionally, keywords like ",(0,o.kt)("inlineCode",{parentName:"p"},"assert")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"check")," can be used to implement configuration validation logic, making it more convenient to identify potential issues during the writing of application config codes and reducing the risk of delivering the application with wrong configuration. Furthermore, Kusion can provide the 3-way real-time diff before the application is applied, allowing users to preview the configuration changes and thus providing a safer workflow. "))),(0,o.kt)("h2",{id:"full-demonstration-video"},"Full Demonstration Video"),(0,o.kt)("p",null,"The following video will show you a complete demonstration of how to deploy a wordpress application and related Alicloud RDS resources with Kusion command-line tool. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QHzKKsoKLQ0",title:"kusionstack-delivery-wordpress-application"},(0,o.kt)("img",{loading:"lazy",alt:"kusionstack-delivery-wordpress-application",src:n(82794).Z,width:"889",height:"500"}))))}p.isMDXComponent=!0},34811:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alicloud-rds-instance-88d560e7fdab77f7d83592ae1ded6866.png"},30263:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-wordpress-application-886535bde5df29d976078592e19c8354.png"},99309:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kcl-assertion-failure-1fcd0630f7ad52d1e9a48f34921c0cd3.png"},56535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-3-way-diff-690063924d7b01f71b0e3a7bfb6079cb.png"},75775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-destroy-wordpress-c62de368f65a6f991b0d9705d67f1f83.png"},73725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/set-rds-access-9347ae09377aeb94d9f6d1e5d8688ab5.png"},86535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-port-forward-ef4d8aa9652b51a59cbf13b66738ad24.png"},85773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-site-page-ef650e640399209d1eec5e6dfe88c454.png"},82794:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-video-cover-254599c8ae4456128ad18a86f63cab3d.png"}}]);