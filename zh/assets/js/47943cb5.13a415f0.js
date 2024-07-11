"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),k=c(n),u=i,m=k["".concat(l,".").concat(u)]||k[u]||d[u]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=k;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},39687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={id:"backend",sidebar_label:"Backend"},s="Backend",r={unversionedId:"concepts/backend",id:"version-v0.11/concepts/backend",title:"Backend",description:"Backend is Kusion's storage, which defines the place to store Workspace, Spec and State. By default, Kusion uses the local type of backend to store the state on the local disk. While in the scenario of team collaboration, the Workspace, Spec and State can be stored on a remote backend, such as mysql, oss and s3, to allow multiple users' access.",source:"@site/docs_versioned_docs/version-v0.11/3-concepts/7-backend.md",sourceDirName:"3-concepts",slug:"/concepts/backend",permalink:"/zh/docs/v0.11/concepts/backend",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/3-concepts/7-backend.md",tags:[],version:"v0.11",lastUpdatedBy:"Dayuan",lastUpdatedAt:1720688154,formattedLastUpdatedAt:"2024\u5e747\u670811\u65e5",sidebarPosition:7,frontMatter:{id:"backend",sidebar_label:"Backend"},sidebar:"kusion",previous:{title:"Spec",permalink:"/zh/docs/v0.11/concepts/spec"},next:{title:"Configuration",permalink:"/zh/docs/v0.11/concepts/configuration"}},l={},c=[{value:"Available Backend Types",id:"available-backend-types",level:2},{value:"local",id:"local",level:3},{value:"mysql",id:"mysql",level:3},{value:"oss",id:"oss",level:3},{value:"s3",id:"s3",level:3},{value:"Setting a Backend",id:"setting-a-backend",level:2},{value:"Setting a Whole Backend",id:"setting-a-whole-backend",level:3},{value:"Setting a Backend Type",id:"setting-a-backend-type",level:3},{value:"Setting a Whole Set of Backend Config Items",id:"setting-a-whole-set-of-backend-config-items",level:3},{value:"Setting a Backend Config Item",id:"setting-a-backend-config-item",level:3},{value:"Unsetting a Backend",id:"unsetting-a-backend",level:2},{value:"Setting the Current Backend",id:"setting-the-current-backend",level:2},{value:"Getting Backend Configuration",id:"getting-backend-configuration",level:2},{value:"Using Backend",id:"using-backend",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"backend"},"Backend"),(0,i.kt)("p",null,"Backend is Kusion's storage, which defines the place to store Workspace, Spec and State. By default, Kusion uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," type of backend to store the state on the local disk. While in the scenario of team collaboration, the Workspace, Spec and State can be stored on a remote backend, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oss")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s3"),", to allow multiple users' access. "),(0,i.kt)("p",null,"The command ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config")," is used to configure the backend configuration. Configuring a whole backend or an individual config item are both supported. For the sensitive data, the environment variables are supported, and with higher priority."),(0,i.kt)("p",null,"Furthermore, Kusion provides the operation of setting current backend. Thus, the trouble of specifying backend can be saved when executing operation commands and managing ",(0,i.kt)("inlineCode",{parentName:"p"},"workspace"),". "),(0,i.kt)("h2",{id:"available-backend-types"},"Available Backend Types"),(0,i.kt)("p",null,"There are four available backend types: ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oss"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"s3"),"."),(0,i.kt)("h3",{id:"local"},"local"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," type backend uses local file system as storage, which is suitable for local operations, but not ideal for multi-user collaboration. The supported config items are as below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"path"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),", specify the directory to store the Workspace, Spec, and State files. The subdirectories ",(0,i.kt)("inlineCode",{parentName:"li"},"workspaces"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"specs")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"states")," are used to store the corresponding files separately. It's recommended to use an empty or a Kusion exclusive directory as the local backend path. If not set, the default path ",(0,i.kt)("inlineCode",{parentName:"li"},"${KUSION_HOME}")," is in use.")),(0,i.kt)("p",null,"The whole local type backend configuration is as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "type": "local",\n  "configs": {\n    "path": "${local_path}" # type string, optional, the directory to store files.\n  }\n}\n')),(0,i.kt)("h3",{id:"mysql"},"mysql"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")," type backend uses mysql database as storage. The supported config items are as below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dbName"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", the name of the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"user"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", the username of the database. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"password"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),", the password of the database, support declaring by environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"KUSION_BACKEND_MYSQL_PASSWORD"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"host")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", the access address for the database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"port")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"type int"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),", the port of the database. If not set, the default value ",(0,i.kt)("inlineCode",{parentName:"li"},"3306")," will be used.")),(0,i.kt)("p",null,"Please be attention, mysql type are not supported to store Spec for now. For Workspace and State, the table ",(0,i.kt)("inlineCode",{parentName:"p"},"worksapce")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," are used to store the corresponding content separately, whose structures are determinate. The table structures are shown below. "),(0,i.kt)("p",null,"Noted that there are not fields ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gmt_create(created_at)"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gmt_modified(updated_at)"),", etc., which are usually automatically controlled by the database. Kusion does not use these fields, while the existence of them does not affect the normal operation of Kusion. And the length of the varchar can be changed according to the real scenario."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"-- table workspace\nCREATE TABLE `workspace` (\n    `workspace` varchar(127) NOT NULL COMMENT 'workspace name',\n    `content` longtext NOT NULL COMMENT 'workspace content, in JSON format',\n    `is_current` tinyint(1) DEFAULT NULL COMMENT 'specify is current workspace or not',\n    UNIQUE KEY `uk_workspace` (`name`),\n    KEY `idx_is_current` (`is_current`)\n);\n\n-- table state\nCREATE TABLE `state` (\n    `project` varchar(127) NOT NULL COMMENT 'project name',\n    `stack` varchar(127) NOT NULL COMMENT 'stack name',\n    `workspace` varchar(127) NOT NULL COMMENT 'workspace name',\n    `content` longtext NOT NULL COMMENT 'state content, in JSON format',\n    UNIQUE KEY `uk_state` (`project`, `stack`, `worksapce`)\n);\n")),(0,i.kt)("p",null,"The whole mysql type backend configuration is as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "type": "mysql",\n  "configs": {\n    "dbName": "${mysql_db_name}", # type string, required, the database name.\n    "user": "${mysql_user}", # type string, required, the database user.\n    "password": "${mysql_password}", # type string, optional, the database password.\n    "host": "${mysql_host}", # type string, required, the database host.\n    "port": "${mysql_port}" # type string, optional, the database port. If not set, use the default port 3306.\n  }\n}\n')),(0,i.kt)("p",null,"The supported environment variable is as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export KUSION_BACKEND_MYSQL_PASSWORD="${mysql_password}" # configure password\n')),(0,i.kt)("h3",{id:"oss"},"oss"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"oss")," type backend uses the Alicloud Object Storage Service (OSS) as storage. The supported config items are as below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"endpoint"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", specify the access endpoint for alicloud oss bucket. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"accessKeyID"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", specify the alicloud account accessKeyID, support declaring by environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"OSS_ACCESS_KEY_ID"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"accessKeySecret"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", specify the alicloud account accessKeySecret, support declaring by environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"OSS_ACCESS_KEY_SECRET"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bucket"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", specify the name of the alicloud oss bucket."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"prefix"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),", constitute the prefix to store the Workspace, Spec, and State files, whose prefixes are ",(0,i.kt)("inlineCode",{parentName:"li"},"${prefix}/workspaces"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"${prefix}/specs")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"${prefix}/states"),' respectively. Using prefix can create a "dedicated space" for the Kusion data, which is beneficial for the management and reuse of the bucket. If not set, there is no prefix, the files are stored in the root path of the bucket if analogy to a file system.')),(0,i.kt)("p",null,"Noted that ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKeyID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKeySecret")," are required for the whole configuration combined by the configuration managed by the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config")," and the environment variables. For the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config")," alone, they are not obligatory. And for the safety reason, using environment variables is the recommended way."),(0,i.kt)("p",null,"The whole oss type backend configuration is as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "type": "oss",\n  "configs": {\n    "endpoint": "${oss_endpoint}", # type string, required, the oss endpoint.\n    "accessKeyID": "${oss_access_key_id}", # type string, ooptional for the command "kusion config", the oss access key id.\n    "accessKeySecret": "${oss_access_key_secret}", # type string, optional for the command "kusion config", the oss access key secret.\n    "bucket": "${oss_bucket}", # type string, required, the oss bucket.\n    "prefix": "${oss_prefix}" # type string, optional, the prefix to store the files.\n  }\n}\n')),(0,i.kt)("p",null,"The supported environment variables are as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export OSS_ACCESS_KEY_ID="${oss-access-key-id}" # configure accessKeyID\nexport OSS_ACCESS_KEY_SECRET="${oss-access-key-secret}" # configure accessKeySecret\n')),(0,i.kt)("h3",{id:"s3"},"s3"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," type backend uses the AWS Simple Storage Service (S3) as storage. The supported config items are as below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"region"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", specify the region of aws s3 bucket, support declaring by environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_DEFAULT_REGION")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_REGION"),", where the latter has higher priority."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"endpoint"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),", specify the access endpoint for aws s3 bucket."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"accessKeyID"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", specify the aws account accessKeyID, support declaring by environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"accessKeySecret"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", specify the aws account.accessKeySecret, support declaring by environment variable ",(0,i.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bucket"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"required"),", specify the name of the aws s3 bucket."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"prefix"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"type string"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),", constitute the prefix to store the Workspace, Spec, and State files, whose prefixes are ",(0,i.kt)("inlineCode",{parentName:"li"},"${prefix}/workspaces"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"${prefix}/specs")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"${prefix}/states")," respectively.")),(0,i.kt)("p",null,"Noted that ",(0,i.kt)("inlineCode",{parentName:"p"},"region"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKeyID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKeySecret")," are optional for the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config")," command."),(0,i.kt)("p",null,"The whole s3 type backend configuration is as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "type": "s3",\n  "configs": {\n    "region": "${s3_region}", # type string, optional for the command "kusion config", the aws region.\n    "endpoint": "${s3_endpoint}", # type string, optional, the aws endpoint.   \n    "accessKeyID": "${s3_access_key_id}", # type string, optional for the command "kusion config", the aws access key id.\n    "accessKeySecret": "${s3_access_key_secret}", # type string, optional for the command "kusion config", the aws access key secret.\n    "bucket": "${s3_bucket}", # type string, required, the s3 bucket.\n    "prefix": "${s3_prefix}" # type string, optional, the prefix to store the files.\n  }\n}\n')),(0,i.kt)("p",null,"The supported environment variables are as below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_DEFAULT_REGION="${s3_region}" # configure region, lower priority than AWS_REGION\nexport AWS_REGION="${s3_region}" # configure region, higher priority than AWS_DEFAULT_REGION\nexport AWS_ACCESS_KEY_ID="${s3_access_key_id}" # configure accessKeyID\nexport AWS_SECRET_ACCESS_KEY="${s3_access_key_secret}" # configure accessKeySecret\n')),(0,i.kt)("h2",{id:"setting-a-backend"},"Setting a Backend"),(0,i.kt)("p",null,"When there is a new backend or the backend configuration needs to update, use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config set ${key} ${value}")," to set a backend. A backend is identified by a unique name, and its whole configuration is made up of the backend type and its corresponding config items. "),(0,i.kt)("p",null,"Be attention, do not confuse backend with backend type. For example, a backend named ",(0,i.kt)("inlineCode",{parentName:"p"},"s3_prod")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," as its storage, the ",(0,i.kt)("inlineCode",{parentName:"p"},"s3_prod")," is the backend, while the ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," is the backend type."),(0,i.kt)("p",null,"There are four configuration modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"setting a whole backend"),(0,i.kt)("li",{parentName:"ul"},"setting a backend type "),(0,i.kt)("li",{parentName:"ul"},"setting a whole set of backend config items"),(0,i.kt)("li",{parentName:"ul"},"setting a backend config item")),(0,i.kt)("p",null,"A unique backend name is required to do the configuration. Take ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," type backend with name ",(0,i.kt)("inlineCode",{parentName:"p"},"s3_prod")," for an example to explain how these modes work."),(0,i.kt)("h3",{id:"setting-a-whole-backend"},"Setting a Whole Backend"),(0,i.kt)("p",null,"The key to configure a whole backend is ",(0,i.kt)("inlineCode",{parentName:"p"},"backends.${name}"),", whose value must be the JSON marshal result in a specified format, which is determined by the backend type. Enclosing the value in single quotation marks is a good choice, which can keep the format correct. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# set a whole backend\nkusion config set backends.s3_prod \'{"type":"s3","configs":{"bucket":"kusion"}}\'\n')),(0,i.kt)("h3",{id:"setting-a-backend-type"},"Setting a Backend Type"),(0,i.kt)("p",null,"The key to set a backend type is ",(0,i.kt)("inlineCode",{parentName:"p"},"backends.${name}.type"),", whose value must be ",(0,i.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"oss")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"s3"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# set a backend type\nkusion config set backends.s3_prod.type s3\n")),(0,i.kt)("h3",{id:"setting-a-whole-set-of-backend-config-items"},"Setting a Whole Set of Backend Config Items"),(0,i.kt)("p",null,"The key to set a whole set of backend config items is ",(0,i.kt)("inlineCode",{parentName:"p"},"backends.${name}.configs"),", whose value must be the JSON marshal result in a specified format, which is determined by the backend type. The backend config must be set after the backend type, and corresponds to the backend type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# set a whole backend config\nkusion config set backends.s3_prod.configs \'{"bucket":"kusion"}\'\n')),(0,i.kt)("h3",{id:"setting-a-backend-config-item"},"Setting a Backend Config Item"),(0,i.kt)("p",null,"The key to set a backend config item is ",(0,i.kt)("inlineCode",{parentName:"p"},"backends.${name}.configs.${item}"),". The item name and value type both depend on the backend type. Like the whole backend config, the config item must be valid and set after the backend type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# set a backend config item\nkusion config set backends.s3_prod.configs.bucket kusion\n")),(0,i.kt)("p",null,"When executing ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config set"),", the configuration will be stored in a local file. For security reason, the environment variables are supported to configure some config items, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKeyID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"accessKeySecret"),". Using environment variables rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config")," set to set sensitive data is the best practice. If both configured, the environment variables have higher priority. For details about the supported environment variables, please see above."),(0,i.kt)("p",null,"Kusion has a default backend with ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," type and the path is ",(0,i.kt)("inlineCode",{parentName:"p"},"$KUSION_HOME"),", whose name is exactly ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," backend is forbidden to modification, that is setting or unsetting the default backend is not allowed. Besides, the keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"current")," is also used by Kusion itself, please do not use it as the backend name."),(0,i.kt)("h2",{id:"unsetting-a-backend"},"Unsetting a Backend"),(0,i.kt)("p",null,"When a backend is not in use, or the configuration is out of date, use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config unset ${key}")," to unset a backend or a specified config item. Same as the setting, there are also four modes of unsetting."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"unsetting a whole backend"),(0,i.kt)("li",{parentName:"ul"},"unsetting a backend type"),(0,i.kt)("li",{parentName:"ul"},"unsetting a whole set of backend config items"),(0,i.kt)("li",{parentName:"ul"},"unsetting a backend config item")),(0,i.kt)("p",null,"When unsetting a whole backend, the backend must not be the current backend. When unsetting the backend type, the config items must be empty and the backend not be the current."),(0,i.kt)("p",null,"Unsetting the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," backend is forbidden."),(0,i.kt)("h2",{id:"setting-the-current-backend"},"Setting the Current Backend"),(0,i.kt)("p",null,"In order not to specify backend for every operation command. Kusion provides the mechanism of setting current backend, then the current workspace will be use by default. This is very useful when you execute a series of Kusion operation commands, for they usually use the same backend."),(0,i.kt)("p",null,"Use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config set backends.current ${name}")," to set the current backend, where the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," must be the already set backend."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# set the current workspace\nkusion config set backends.current s3_prod\n")),(0,i.kt)("p",null,"Setting the current backend to ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," is legal. Actually, if there is no backend related configuration, the current backend is the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," backend."),(0,i.kt)("h2",{id:"getting-backend-configuration"},"Getting Backend Configuration"),(0,i.kt)("p",null,"Use the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config get ${key}")," to get a whole backend configuration or a specified backend config item. The ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," is same as setting and unsetting operation, the whole list can be found in the ",(0,i.kt)("a",{parentName:"p",href:"configuration"},"Configuration"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# get a whole backend\nkusion config get backends.s3_prod\n\n# get a specified config item\nkusion config get backends.s3_prod.configs.bucekt\n")),(0,i.kt)("p",null,"Besides, the command ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion config list")," can also be used, which returns the whole kusion configuration, while the backend configuration is included."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# get the whole Kusion configuration \nkusion config list\n")),(0,i.kt)("h2",{id:"using-backend"},"Using Backend"),(0,i.kt)("p",null,"The backend is used to store Workspace, Spec, and State. Thus, the following commands use the backend, shown as below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"subcommands of ",(0,i.kt)("inlineCode",{parentName:"li"},"kusion workspace"),": use to store the Workspace;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kusion generate"),": use to store the Spec;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kusion preview"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kusion apply"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"kusion destroy"),": use to store the State;")),(0,i.kt)("p",null,"For all the commands above, the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--backend")," is provided to specify the backend, or using the current backend. When using backend, you usually need to specify the sensitive data by environment variables. The example is shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# set environment variables of sensitive and other necessary data\nexport AWS_REGION="${s3_region}"\nexport AWS_ACCESS_KEY_ID="${s3_access_key_id}"\nexport AWS_SECRET_ACCESS_KEY="${s3_access_key_secret}"\n\n# use current backend\nkusion apply\n\n# use a specified backend\nkusion apply --backend s3_prod\n')))}d.isMDXComponent=!0}}]);