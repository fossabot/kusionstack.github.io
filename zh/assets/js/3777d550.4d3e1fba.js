"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25420],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(k,i(i({ref:n},p),{},{components:t})):a.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38435:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={id:"backend-configuration",sidebar_label:"Backend Configuration"},i="Backend Configuration",s={unversionedId:"concepts/backend-configuration",id:"version-v0.10/concepts/backend-configuration",title:"Backend Configuration",description:"The backend configuration defines the place where Kusion stores its state data file. By default, Kusion uses the local type of backend to store the state on the local disk. While for team collaboration projects, the state can be stored on a remote backend, such as mysql, oss and s3 to allow multiple users access it.",source:"@site/docs_versioned_docs/version-v0.10/3-concepts/7-backend-configuration.md",sourceDirName:"3-concepts",slug:"/concepts/backend-configuration",permalink:"/zh/docs/v0.10/concepts/backend-configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/3-concepts/7-backend-configuration.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727679725,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:7,frontMatter:{id:"backend-configuration",sidebar_label:"Backend Configuration"},sidebar:"kusion",previous:{title:"Intent",permalink:"/zh/docs/v0.10/concepts/intent"},next:{title:"How Kusion Works?",permalink:"/zh/docs/v0.10/concepts/how-kusion-works"}},l={},c=[{value:"Configuring State Backend",id:"configuring-state-backend",level:2},{value:"Workspace Configuration File",id:"workspace-configuration-file",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Command Line Parameters",id:"command-line-parameters",level:3},{value:"Configuration Combination",id:"configuration-combination",level:3},{value:"Available Backend",id:"available-backend",level:2},{value:"local",id:"local",level:3},{value:"mysql",id:"mysql",level:3},{value:"oss",id:"oss",level:3},{value:"s3",id:"s3",level:3}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backend-configuration"},"Backend Configuration"),(0,r.kt)("p",null,"The backend configuration defines the place where Kusion stores its ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," data file. By default, Kusion uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," type of backend to store the state on the local disk. While for team collaboration projects, the state can be stored on a remote backend, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"oss")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," to allow multiple users access it. "),(0,r.kt)("h2",{id:"configuring-state-backend"},"Configuring State Backend"),(0,r.kt)("p",null,"There are three ways to configure the backend:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"workspace configuration file"),(0,r.kt)("li",{parentName:"ul"},"environment variables"),(0,r.kt)("li",{parentName:"ul"},"command line parameters")),(0,r.kt)("h3",{id:"workspace-configuration-file"},"Workspace Configuration File"),(0,r.kt)("p",null,"Users can configure the storage of the state with the ",(0,r.kt)("inlineCode",{parentName:"p"},"backends")," block in the workspace file, where a map with the backend type as the key and the corresponding config items as the value to declare the backend configuration. Be attention, only one kind of backend type is allowed, more than one backend types are illegal."),(0,r.kt)("p",null,"The following gives an example of the backend configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"backends:\n  mysql:\n    dbName: <your-db-name> \n    user: <your-user>\n    password: <your-password>\n    host: <your-host>\n    port: <your-port>\n")),(0,r.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"For the sensitive information, Kusion supports configuring them by environment variables. Not all the configuration items are enabled, and the items differ from backend type. For example, users can configure mysql password by environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"KUSION_BACKEND_MYSQL_PASSWORD"),"."),(0,r.kt)("h3",{id:"command-line-parameters"},"Command Line Parameters"),(0,r.kt)("p",null,"Users can specify the type of backend with the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--backend-type"),", and configure the detailed information with ",(0,r.kt)("inlineCode",{parentName:"p"},"--backend-config")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-C"),", for instance: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion apply --backend-type mysql -C dbName=<your-db-name> -C user=<your-user> -C password=<your-password> -C host=<your-host> -C port=<your-port>\n")),(0,r.kt)("h3",{id:"configuration-combination"},"Configuration Combination"),(0,r.kt)("p",null,"When more than one configuration methods are in use, Kusion will merge them to generate the whole backend configuration. Workspace configuration file, environment variables, command line parameter: the priority of these three configuration methods increases gradually. If there is no conflict of backend type, the latter will overlay the former by configuration items. If there is conflict of backend type, which only occurs between workspace configuration file and command line parameters, use the backend type specified by command line, and the configuration items from workspace are deprecated."),(0,r.kt)("h2",{id:"available-backend"},"Available Backend"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"local"),(0,r.kt)("li",{parentName:"ul"},"mysql"),(0,r.kt)("li",{parentName:"ul"},"oss"),(0,r.kt)("li",{parentName:"ul"},"s3")),(0,r.kt)("h3",{id:"local"},"local"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," storage type stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," on the local file system, which is suitable for local operations while not ideal for multi-user collaboration. "),(0,r.kt)("p",null,"There is no configuration items for ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," backend. When neither the workspace configuration file nor the command line parameters declare the backend configuration, Kusion by default uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),"."),(0,r.kt)("h3",{id:"mysql"},"mysql"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," storage type stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," into a ",(0,r.kt)("strong",{parentName:"p"},"mysql database"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# workspace configuration file\nbackends:\n  mysql:\n    dbName: <your-db-name>\n    user: <your-user>\n    password: <your-password>\n    host: <your-host>\n    port: <your-port>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# environment variables\nexport KUSION_BACKEND_MYSQL_PASSWORD=<your-password>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# command line parameters\nkusion apply --backend-type mysql -C dbName=<your-db-name> -C user=<your-user> -C password=<your-password> -C host=<your-host> -C port=<your-port>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dbName - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the name of the database"),(0,r.kt)("li",{parentName:"ul"},"user - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the username of the database"),(0,r.kt)("li",{parentName:"ul"},"password - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the password of the database, support declaring by environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"KUSION_BACKEND_MYSQL_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},"host - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the access address for the database"),(0,r.kt)("li",{parentName:"ul"},"port - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the port of the database")),(0,r.kt)("p",null,"Note that the table name in the database used by Kusion is ",(0,r.kt)("strong",{parentName:"p"},"state"),". Below is an example SQL statement for creating this table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `state` (\n   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'primary key',\n   `tenant` varchar(100) DEFAULT NULL COMMENT 'tenant',\n   `project` varchar(100) NOT NULL COMMENT 'project',\n   `kusion_version` varchar(50) DEFAULT NULL COMMENT 'kusion version',\n   `version` int(10) unsigned NOT NULL COMMENT 'current state format version\uff0cmay upgrade in the future',\n   `serial` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT 'modification times for state\uff0ccan be used in concurrent control',\n   `operator` varchar(100) DEFAULT NULL COMMENT 'last modifier',\n   `resources` longtext DEFAULT NULL COMMENT 'state of the resources\uff0cjson array',\n   `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'creation time',\n   `modified_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'update time',\n   `stack` varchar(100) DEFAULT NULL COMMENT 'stack',\n   `cluster` varchar(100) DEFAULT NULL COMMENT 'logical isolation in a stack\uff0cusually clustername__cellname',\n   PRIMARY KEY (`id`),\n   UNIQUE KEY `uk_state_latest` (`tenant`, `project`, `stack`, `serial`, `cluster`),\n   KEY `idx_tenant` (`tenant`),\n   KEY `idx_project` (`project`),\n   KEY `idx_kusion_version` (`kusion_version`),\n   KEY `idx_version` (`version`),\n   KEY `idx_create_time` (`create_time`),\n   KEY `idx_modified_time` (`modified_time`),\n   KEY `idx_stack` (`stack`),\n   KEY `idx_cluster` (`cluster`)\n);\n")),(0,r.kt)("h3",{id:"oss"},"oss"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"oss")," storage type stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," on the ",(0,r.kt)("strong",{parentName:"p"},"Alicloud Object Storage Service (OSS)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# workspace configuration file\nbackends:\n  oss:\n    endpoint: <your-endpoint>\n    bucket: <your-bucket>\n    accessKeyID: <your-access-key-ID>\n    access-key-secret: <your-access-key-secret>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# environment variables\nexport OSS_ACCESS_KEY_ID=<your-access-key-ID>\nexport OSS_ACCESS_KEY_SECRET=<your-access-key-secret>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# command line parameters\nkusion apply --backend-type oss -C endpoint=<your-endpoint> -C bucket=<your-bucket> -C accessKeyID=<your-access-key-ID> -C accessKeySecret=<your-access-key-secret>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"endpoint - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the access endpoint for alicloud oss bucket"),(0,r.kt)("li",{parentName:"ul"},"bucket - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the name of the alicloud oss bucket"),(0,r.kt)("li",{parentName:"ul"},"accessKeyID - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the alicloud account accessKeyID, support declaring by environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"OSS_ACCESS_KEY_ID")),(0,r.kt)("li",{parentName:"ul"},"accessKeySecret - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the alicloud account accessKeySecret, support declaring by environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"OSS_ACCESS_KEY_SECRET"))),(0,r.kt)("h3",{id:"s3"},"s3"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," storage type stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," on the ",(0,r.kt)("strong",{parentName:"p"},"AWS Simple Storage Service (S3)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# workspace configuration file\nbackend: \n  s3:\n    endpoint: <your-endpoint>\n    bucket: <your-bucket>\n    accessKeyID: <your-access-key-ID>\n    access-key-secret: <your-access-key-secret>\n    region: <your-region>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# environment variables\nexport AWS_ACCESS_KEY_ID=<your-access-key-ID>\nexport AWS_SECRET_ACCESS_KEY=<your-access-key-secret>\nexport AWS_REGION=<your-region>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# command line parameters\nkusion apply --backend-type s3 -C endpoint=<your-endpoint> -C bucket=<your-bucket> -C accessKeyID=<your-access-key-ID> -C accessKeySecret=<your-access-key-secret> -C region=<your-region>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"endpoint - ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")," specify the access endpoint for aws s3 bucket"),(0,r.kt)("li",{parentName:"ul"},"bucket - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the name of the aws s3 bucket"),(0,r.kt)("li",{parentName:"ul"},"accessKeyID - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the aws account accessKeyID, support declaring by environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID")),(0,r.kt)("li",{parentName:"ul"},"accessKeySecret - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the aws account accessKeySecret, support declaring by environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")),(0,r.kt)("li",{parentName:"ul"},"region - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the region of  aws s3 bucket, support declaring by environment variable ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_DEFAULT_REGION")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_REGION"))))}u.isMDXComponent=!0}}]);