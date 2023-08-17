"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),o=n(67294),i=n(86010),r=n(12466),s=n(76775),l=n(91980),c=n(67392),d=n(50012);function p(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,o.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=u(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,c]=m({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=l??p;return f({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,i]),tabValues:i}}var g=n(72389);const k="tabList__CuJ",b="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:u},r,{className:(0,i.Z)("tabs__item",b,null==r?void 0:r.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",k)},o.createElement(w,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},55822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),o=(n(67294),n(3905)),i=n(74866),r=n(85162);const s={sidebar_position:2},l="Deliver the WordPress application on Kubernetes and clouds",c={unversionedId:"user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",id:"user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",title:"Deliver the WordPress application on Kubernetes and clouds",description:"This tutorial will demonstrate how to deploy a WordPress application using KusionStack, which relies on both Kubernetes and IaaS resources provided by cloud vendors. Unlike the code-city application we previously deployed on Kubernetes, the WordPress application will also rely on RDS (Relational Database Service) to provide a cloud-based database solution for WordPress website content, such as articles, comments, users, and other information.",source:"@site/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds.md",sourceDirName:"user_docs/getting-started/usecases",slug:"/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",permalink:"/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds.md",tags:[],version:"current",lastUpdatedBy:"zoumo",lastUpdatedAt:1692261210,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Deliver Your First Project on Kubernetes",permalink:"/docs/user_docs/getting-started/usecases/deliver-first-project"},next:{title:"Use VS Code Kusion",permalink:"/docs/user_docs/getting-started/kusion-ide"}},d={},p=[{value:"Full Demonstration Video",id:"full-demonstration-video",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Review Project Structure and Config Codes",id:"review-project-structure-and-config-codes",level:2},{value:"Project Structure",id:"project-structure",level:3},{value:"Config Codes",id:"config-codes",level:3},{value:"Deliver WordPress Application",id:"deliver-wordpress-application",level:2},{value:"Verify WordPress Application",id:"verify-wordpress-application",level:2},{value:"Modify WordPress Application",id:"modify-wordpress-application",level:2},{value:"Compliance Check of Config Code Modification",id:"compliance-check-of-config-code-modification",level:3},{value:"Apply Config Code Modification",id:"apply-config-code-modification",level:3},{value:"Delete WordPress Application",id:"delete-wordpress-application",level:2},{value:"Summary",id:"summary",level:2}],u={toc:p};function f(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deliver-the-wordpress-application-on-kubernetes-and-clouds"},"Deliver the WordPress application on Kubernetes and clouds"),(0,o.kt)("p",null,"This tutorial will demonstrate how to deploy a WordPress application using KusionStack, which relies on both Kubernetes and IaaS resources provided by cloud vendors. Unlike the code-city application we previously deployed on Kubernetes, the WordPress application will also rely on RDS (Relational Database Service) to provide a cloud-based database solution for WordPress website content, such as articles, comments, users, and other information. "),(0,o.kt)("h2",{id:"full-demonstration-video"},"Full Demonstration Video"),(0,o.kt)("p",null,"The following video will show you a complete demonstration of how to deploy a WordPress application and related Alicloud RDS resources with the Kusion command-line tool."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QHzKKsoKLQ0",title:"kusionstack-delivery-wordpress-application"},(0,o.kt)("img",{alt:"kusionstack-delivery-wordpress-application",src:n(82794).Z,width:"889",height:"500"}))),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Install Kusion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Deploy Kubernetes")," or ",(0,o.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/"},"Install Terraform")),(0,o.kt)("li",{parentName:"ul"},"Prepare a cloud service account and create a user with ",(0,o.kt)("inlineCode",{parentName:"li"},"VPCFullAccess")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"RDSFullAccess")," permissions to use the Relational Database Service (RDS). This kind of user can be created and managed in the Identity and Access Management (IAM) console")),(0,o.kt)("p",null,"Additionally, we also need to configure the obtained AccessKey and SecretKey as environment variables: "),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"AWS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID="AKIAQZDxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="oE/xxxx" # replace it with your SecretKey\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"aws iam account",src:n(24838).Z,width:"2874",height:"1398"}))),(0,o.kt)(r.Z,{value:"Alicloud",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export ALICLOUD_ACCESS_KEY="LTAI5txxx" # replace it with your AccessKey\nexport ALICLOUD_SECRET_KEY="nxuowIxxx" # replace it with your SecretKey\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alicloud iam account",src:n(73725).Z,width:"1500",height:"629"})))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Alternatively, Kusion provides a ",(0,o.kt)("strong",{parentName:"p"},"Secret as Code")," solution for handling the AccessKey and SecretKey mentioned above.")),(0,o.kt)("h2",{id:"review-project-structure-and-config-codes"},"Review Project Structure and Config Codes"),(0,o.kt)("h3",{id:"project-structure"},"Project Structure"),(0,o.kt)("p",null,"Firstly, let's clone the Konfig repo and enter the root directory: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/konfig.git && cd konfig\n")),(0,o.kt)("p",null,"Then we can locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress")," project under the ",(0,o.kt)("inlineCode",{parentName:"p"},"appops/")," directory, which is composed of the following files: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd appops/wordpress && tree\n.\n\u251c\u2500\u2500 README.md                       // Documentation\n\u251c\u2500\u2500 base                            // Common configuration for all stacks\n\u2502   \u2514\u2500\u2500 base.k                      // Common config code file for all stacks\n\u251c\u2500\u2500 dev                             // Stack directory\n\u2502   \u251c\u2500\u2500 ci-test                     // CI test directory, storing test scripts and data\n\u2502   \u2502   \u251c\u2500\u2500 settings.yaml           // Configuration for test data and compiling\n\u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml      // Expected Spec YAML, which can be updated using make\n\u2502   \u251c\u2500\u2500 kcl.yaml                    // Multi-file compilation configuration for current stack\n\u2502   \u251c\u2500\u2500 main.k                      // Config codes for Developer in current stack\n\u2502   \u251c\u2500\u2500 platform.k                  // Config codes for Platform in current stack\n\u2502   \u2514\u2500\u2500 stack.yaml                  // Meta information of current stack\n\u2514\u2500\u2500 project.yaml                    // Meta information of current project\n\n3 directories, 9 files\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More details about the directory structure can be found in ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig"))),(0,o.kt)("h3",{id:"config-codes"},"Config Codes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k\nimport base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.storage\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\n# And main.k is for the configurations in concern of application developers. \n\n# defination of wordpress application frontend model\nwordpress: frontend.Server {\n    # specify application image\n    image = "wordpress:4.8-apache"\n\n    # use cloud database for the storage of wordpress\n    database = storage.DataBase {\n        # choose aws_rds as the cloud database\n        dataBaseType = "aws_rds"\n        dataBaseAttr = storage.DBAttr {\n            # choose the engine type and version of the database\n            databaseEngine = "MySQL"\n            databaseEngineVersion = "5.7"\n            # create database account\n            databaseAccountName = "root"\n            databaseAccountPassword = option("db_password")\n            # create internet access for the cloud database\n            internetAccess = True\n        }\n    }\n\n    # NOTE: this configuration is an example of adding an environment variable in the main container\n    # uncommenting and re-deploying will add the environment variable "ENV_ADD_EXAMPLE" in the \n    # main container and the differnces will be shown by the command of "kusion apply"\n    mainContainer: {\n        env += [\n            {\n                name = "ENV_ADD_EXAMPLE"\n                value = "wordpress-example"\n            }\n        ]\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# dev/platform.k\nimport base.pkg.kusion_models.kube.frontend\nimport base.pkg.kusion_models.kube.frontend.storage\nimport base.pkg.kusion_models.kube.metadata\nimport base.pkg.kusion_clouds.aws_backend.aws_config\n\n# The application configuration in stack will overwrite \n# the configuration with the same attribute in base.\n# And platform.k is for the configurations in concern of platform developers. \n\n_cloudResourceName = "{}-{}".format(metadata.__META_APP_NAME, metadata.__META_ENV_TYPE_NAME).lower()\n_awsDependencyPrefix = "$kusion_path." + aws_config.awsProvider.namespace + ":" + aws_config.awsProvider.name + ":"\n\n# defination of wordpress application frontend model\nwordpress: frontend.Server {\n    # add environment variable in main container with implicit alicloud resource dependency\n    mainContainer: {\n        env += [\n            {\n                name = "WORDPRESS_DB_HOST"\n                value = _awsDependencyPrefix + aws_config.awsDBInstanceMeta.type + ":" + _cloudResourceName + ".address"\n            }\n        ]\n    }\n\n    # supplement database related configuration code on the platform side\n    database: storage.DataBase {\n        dataBaseAttr: storage.DBAttr {\n            # specify instance type for aws or alicloud rds\n            # for aws rds\n            instanceType = "db.t3.micro" \n\n            # for alicloud rds\n            # instanceType = "mysql.n2.serverless.1c" \n\n            # specify cloud charge type for alicloud rds\n            # extraMap = {\n            #     "cloudChargeType": "Serverless"\n            # }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"The configuration code files you need to pay attention to mainly include ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/platform.k"),". Specifically: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dev/main.k")," contains config codes for ",(0,o.kt)("strong",{parentName:"li"},"Developer")," to concentrate on for the WordPress application deployment in the dev environment. In addition to the application container image, it also assigns an instance of a type ",(0,o.kt)("inlineCode",{parentName:"li"},"storage.DataBase")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"frontend.Server.database")," attribute, and thus declaring an RDS with MySQL as the database engine. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dev/platform.k")," contains config codes for ",(0,o.kt)("strong",{parentName:"li"},"Platform")," to concentrate on for the WordPress application deployment in the dev environment. Here, the main purpose is to specify the domain name of the cloud database to be connected to for the WordPress application container and the RDS instance type. In addition, we can also declare the RDS charging type and other configurations in ",(0,o.kt)("inlineCode",{parentName:"li"},"dev/platform.k"),".  ")),(0,o.kt)("p",null,"As shown above, benefiting from the advanced features of KCL concerning variable, function, and schema definition, we can abstract and encapsulate the RDS resources, which shields many properties that the Developer does not need to be aware of (such as the network segment of VPC and vSwitch behind RDS). The developer only needs to fill in a few necessary fields in the frontend model instance to complete the declaration of RDS resources, so that the application configuration can be organized more flexibly and efficiently. Moreover, under the collaboration of writing config codes in the Konfig repository, Developers and Platforms from different teams can perform their roles, only focusing on their own respective configuration items, thereby improving the collaboration efficiency of application development and operation. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More details about Konfig models can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig"))),(0,o.kt)("h2",{id:"deliver-wordpress-application"},"Deliver WordPress Application"),(0,o.kt)("p",null,"You can complete the delivery of the WordPress application using the following command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd appops/wordpress/dev && kusion apply --yes\n")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"AWS",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"apply the wordpress application with aws rds",src:n(87103).Z,width:"2276",height:"766"}))),(0,o.kt)(r.Z,{value:"Alicloud",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"apply the wordpress application with alicloud rds",src:n(30263).Z,width:"1906",height:"926"})))),(0,o.kt)("p",null,"After all the resources reconciled, we can port-forward our local port (e.g. 12345) to the WordPress frontend service port (80) in the cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n wordpress-example svc/wordpress 12345:80\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubectl port-forward for wordpress",src:n(86535).Z,width:"992",height:"150"})),(0,o.kt)("h2",{id:"verify-wordpress-application"},"Verify WordPress Application"),(0,o.kt)("p",null,"Next, we will verify the WordPress site service we just delivered, along with the creation of the RDS instance it depends on. We can start using the WordPress site by accessing the link of local-forwarded port ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:12345"},"(http://localhost:12345)")," we just configured in the browser. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wordpress site page",src:n(85773).Z,width:"1500",height:"803"})),(0,o.kt)("p",null,"In addition, we can also log in to the cloud service console page to view the RDS instance we just created."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"AWS",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"aws rds instance",src:n(68678).Z,width:"2876",height:"964"}),"\n",(0,o.kt)("img",{alt:"aws rds instance detailed information",src:n(86915).Z,width:"1224",height:"274"}))),(0,o.kt)(r.Z,{value:"Alicloud",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alicloud rds instance",src:n(34811).Z,width:"1500",height:"748"})))),(0,o.kt)("h2",{id:"modify-wordpress-application"},"Modify WordPress Application"),(0,o.kt)("h3",{id:"compliance-check-of-config-code-modification"},"Compliance Check of Config Code Modification"),(0,o.kt)("p",null,"Using KCL to write application config codes naturally has the ability to perform type-checking on configuration items. Validation logic can also be implemented through keywords like ",(0,o.kt)("inlineCode",{parentName:"p"},"assert")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"check"),", making it more convenient to discover potential issues during the writing of application config codes and reduce the risk of delivering the application with the wrong configuration. "),(0,o.kt)("p",null,"When creating an RDS resource, for different types of cloud service vendors, we can declare the corresponding RDS instance type, and the Konfig backend model has added the validation logic for the RDS instance type through the ",(0,o.kt)("inlineCode",{parentName:"p"},"assert")," keyword, so when we accidentally modify the RDS instance type to an invalid value in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/platform.k"),", Kusion will throw a corresponding error during the compilation process before applying the resource. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"KCL Assertion Failure",src:n(6746).Z,width:"1962",height:"1272"})),(0,o.kt)("h3",{id:"apply-config-code-modification"},"Apply Config Code Modification"),(0,o.kt)("p",null,"As shown below, you can try to modify the config codes in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k")," to add an environment variable in the main container of the WordPress application. When using ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion apply")," to apply the config code modification, you can preview the resource changes with the capability of 3-way real-time diff of Kusion (note that we ignore the change of ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.managedFields")," field in the following example for better demonstration). "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k\n# ...\n\nwordpress: frontend.Server {\n    # Some unchanged codes are omitted\n    # image = ...\n    # database = storage.DataBase{...}\n    \n    # NOTE: this configuration is an example of adding an environment variable in the main container\n    # uncommenting and re-deploying will add the environment variable "ENV_ADD_EXAMPLE" in the \n    # main container and the differnces will be shown by the command of "kusion apply"\n    mainContainer: {\n        env += [\n            {\n                name = "ENV_ADD_EXAMPLE"\n                value = "wordpress-example"\n            }\n        ]\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kusion apply --ignore-fields "metadata.managedFields"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kusion 3-way diff",src:n(56535).Z,width:"1902",height:"1470"})),(0,o.kt)("h2",{id:"delete-wordpress-application"},"Delete WordPress Application"),(0,o.kt)("p",null,"You can delete the WordPress application and related RDS resources using the following command line. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --yes\n")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"AWS",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kusion destroy wordpress with aws rds",src:n(37589).Z,width:"2184",height:"730"}))),(0,o.kt)(r.Z,{value:"Alicloud",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kusion destroy wordpress with alicloud rds",src:n(75775).Z,width:"1904",height:"896"})))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This tutorial demonstrates how to use KusionStack to deploy a WordPress application that depends on both Kubernetes and RDS resources. During the process of writing and applying WordPress config codes, we can see that with the combination of KCL configuration and policy language, Konfig configuration code library, and Kusion execution engine, KusionStack has the advantages listed below: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hybrid resource orchestration"),": using KCL to write application config codes make it easy to orchestrate and manage different types of resources in a unified way. In the example of delivering a WordPress application with both Kubernetes and IaaS resources provided by cloud vendors, all the necessary dependencies can be declared in a single KCL code file, enabling the one-click deployment of the entire application and achieving application-centric operations. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Application schema abstraction"),": using KCL\u2019s advanced features such as built-in variables, functions, and schema definition can easily abstract and encapsulate the dependent resources of the application, shielding developers from configuration attributes they don\u2019t need to be aware of. The developer only needs to fill in a few necessary fields in the frontend model instance to declare the required resources, which makes it possible to organize application configuration more flexibly and efficiently. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Multi-team and multi-role collaboration"),": under the cooperation of writing config codes in the Konfig repository, Developers and Platforms from different teams can perform their roles, only focusing on their own respective configuration items, thereby improving the collaboration efficiency of application development and operation. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Shift left compliance check"),": using KCL to write application config codes naturally has the ability to perform type checking on configuration items. Additionally, keywords like ",(0,o.kt)("inlineCode",{parentName:"p"},"assert")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"check")," can be used to implement configuration validation logic, making it more convenient to identify potential issues during the writing of application config codes and reducing the risk of delivering the application with the wrong configuration. Furthermore, Kusion can provide the 3-way real-time diff before the application is applied, allowing users to preview the configuration changes and thus providing a safer workflow."))))}f.isMDXComponent=!0},34811:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alicloud-rds-instance-88d560e7fdab77f7d83592ae1ded6866.png"},87103:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-wordpress-application-with-aws-rds-580915491e85e04d050cf19bbf0f96cd.png"},30263:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-wordpress-application-886535bde5df29d976078592e19c8354.png"},6746:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assert-rds-instance-type-76dc6d198327400aa1a60e93b68043bb.png"},24838:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-iam-account-2216105e7fa18fb2f7bf4be7e19f98bd.png"},86915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-rds-instance-detail-e0f1e737f54491f738769b152de96806.png"},68678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-rds-instance-12f87b94fbc4a76319d8d9d39fd465d2.png"},56535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-3-way-diff-690063924d7b01f71b0e3a7bfb6079cb.png"},37589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-destroy-wordpress-with-aws-rds-304a7051e2646ad78490fb641fe5a776.png"},75775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-destroy-wordpress-c62de368f65a6f991b0d9705d67f1f83.png"},73725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/set-rds-access-9347ae09377aeb94d9f6d1e5d8688ab5.png"},86535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-port-forward-ef4d8aa9652b51a59cbf13b66738ad24.png"},85773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-site-page-ef650e640399209d1eec5e6dfe88c454.png"},82794:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-video-cover-254599c8ae4456128ad18a86f63cab3d.png"}}]);