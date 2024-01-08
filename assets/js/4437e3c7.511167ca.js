"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="Backend Configuration",l={unversionedId:"user_docs/reference/cli/backend/backend-configuration",id:"user_docs/reference/cli/backend/backend-configuration",title:"Backend Configuration",description:"The backend configuration defines the place where Kusion stores its state data file. By default, Kusion uses the local type of backend to store the state on the local disk, while for team collaboration projects, the state can be stored on a remote type of backend, such as database, oss and s3 to allow multiple users access it.",source:"@site/docs/user_docs/reference/cli/backend/backend-configuration.md",sourceDirName:"user_docs/reference/cli/backend",slug:"/user_docs/reference/cli/backend/backend-configuration",permalink:"/docs/next/user_docs/reference/cli/backend/backend-configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/reference/cli/backend/backend-configuration.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1704715344,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{},sidebar:"user_docs",previous:{title:"kusion workspace update",permalink:"/docs/next/user_docs/reference/cli/kusion/kusion_workspace_update"},next:{title:"Kusion Model Library",permalink:"/docs/next/user_docs/reference/model/"}},s={},c=[{value:"Configuring State Backend",id:"configuring-state-backend",level:2},{value:"Command Line Parameters",id:"command-line-parameters",level:3},{value:"Configuration File",id:"configuration-file",level:3},{value:"Configuration Combination",id:"configuration-combination",level:3},{value:"Available Backend",id:"available-backend",level:2},{value:"Default Backend",id:"default-backend",level:3},{value:"local",id:"local",level:3},{value:"oss",id:"oss",level:3},{value:"s3",id:"s3",level:3},{value:"db",id:"db",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backend-configuration"},"Backend Configuration"),(0,r.kt)("p",null,"The backend configuration defines the place where Kusion stores its ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," data file. By default, Kusion uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," type of backend to store the state on the local disk, while for team collaboration projects, the state can be stored on a ",(0,r.kt)("inlineCode",{parentName:"p"},"remote")," type of backend, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"database"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"oss")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," to allow multiple users access it. "),(0,r.kt)("h2",{id:"configuring-state-backend"},"Configuring State Backend"),(0,r.kt)("p",null,"Kusion configures the storage of state through command line parameters or the ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," file. "),(0,r.kt)("h3",{id:"command-line-parameters"},"Command Line Parameters"),(0,r.kt)("p",null,"Users can specify the type of backend with the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--backend-type"),", and configure the detailed information with ",(0,r.kt)("inlineCode",{parentName:"p"},"--backend-config")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-C"),", for instance: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion apply --backend-type local --backend-config path=kusion_state.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --backend-type local --backend-config path=kusion_state.json\n")),(0,r.kt)("h3",{id:"configuration-file"},"Configuration File"),(0,r.kt)("p",null,"Users can configure the storage of the state with the ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," file: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# project.yaml\nbackend: \n    storageType: local\n    config: \n        path: kusion_state.json\n")),(0,r.kt)("p",null,"In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"storageType")," is used to declare the type of storage for the state backend, and ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," is used to declare the required parameters for the corresponding storage type. "),(0,r.kt)("h3",{id:"configuration-combination"},"Configuration Combination"),(0,r.kt)("p",null,"When both of the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"--backend-config")," option in the command line are configured, Kusion will merge the entire configuration, combining both the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," file and the command line options. When there comes a conflict between the options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," file and the command line, the options in the ",(0,r.kt)("strong",{parentName:"p"},"command line")," will take precedence. This way, users can pass the sensitive information like ",(0,r.kt)("inlineCode",{parentName:"p"},"accessKeyID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"accessKeySecret")," to Kusion through command line parameters. "),(0,r.kt)("h2",{id:"available-backend"},"Available Backend"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"local"),(0,r.kt)("li",{parentName:"ul"},"oss"),(0,r.kt)("li",{parentName:"ul"},"s3"),(0,r.kt)("li",{parentName:"ul"},"db")),(0,r.kt)("h3",{id:"default-backend"},"Default Backend"),(0,r.kt)("p",null,"When neither the ",(0,r.kt)("inlineCode",{parentName:"p"},"project.yaml")," file nor the command line parameters declare the backend configuration, Kusion by default uses the ",(0,r.kt)("a",{parentName:"p",href:"#local"},"local"),". "),(0,r.kt)("h3",{id:"local"},"local"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," storage type stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," on the local file system, which is suitable for local operations while not ideal for multi-user collaboration. "),(0,r.kt)("p",null,"Here is an example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# project.yaml\nbackend: \n    storageType: local\n    config: \n        path: kusion_state.json\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"storageType - local, using local file system to store the state"),(0,r.kt)("li",{parentName:"ul"},"path - ",(0,r.kt)("inlineCode",{parentName:"li"},"optional")," specify the local file path to store the state")),(0,r.kt)("h3",{id:"oss"},"oss"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"oss")," storage type stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," on the ",(0,r.kt)("strong",{parentName:"p"},"Alicloud Object Storage Service (OSS)"),". "),(0,r.kt)("p",null,"Here is an example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# project.yaml\nbackend:\n    storageType: oss\n    config: \n        endpoint: oss-cn-beijing.aliyuncs.com\n        bucket: kusion-oss\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion apply -C accessKeyID=******* -C accessKeySecret=*******\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy -C accessKeyID=******* -C accessKeySecret=*******\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"storageType - oss, using alicloud oss as the storage backend for state"),(0,r.kt)("li",{parentName:"ul"},"endpoint - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the access endpoint for alicloud oss bucket"),(0,r.kt)("li",{parentName:"ul"},"bucket - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the name of the alicloud oss bucket"),(0,r.kt)("li",{parentName:"ul"},"accessKeyID - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the alicloud account accessKeyID"),(0,r.kt)("li",{parentName:"ul"},"accessKeySecret - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the alicloud account accessKeySecret")),(0,r.kt)("h3",{id:"s3"},"s3"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," storage type stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," on the ",(0,r.kt)("strong",{parentName:"p"},"AWS Simple Storage Service (S3)"),". "),(0,r.kt)("p",null,"Here is an example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# project.yaml\nbackend: \n    storageType: s3\n    config: \n        endpoint: s3.us-east-1.amazonaws.com\n        bucket: kusion-s3\n        region: us-east-1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion apply -C accessKeyID=******* -C accessKeySecret=*******\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy -C accessKeyID=******* -C accessKeySecret=*******\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"storageType - s3, using aws s3 as the storage backend for state"),(0,r.kt)("li",{parentName:"ul"},"endpoint - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the access endpoint for aws s3 bucket"),(0,r.kt)("li",{parentName:"ul"},"bucket - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the name of the aws s3 bucket"),(0,r.kt)("li",{parentName:"ul"},"accessKeyID - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the aws account accessKeyID"),(0,r.kt)("li",{parentName:"ul"},"accessKeySecret - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," specify the aws account accessKeySecret")),(0,r.kt)("h3",{id:"db"},"db"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"db")," storage type stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," into a ",(0,r.kt)("strong",{parentName:"p"},"database"),". "),(0,r.kt)("p",null,"Here is an example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# project.yaml\nbackend: \n    storageType: db\n    config: \n        dbHost: 127.0.0.1\n        dbName: kusion-db\n        dbPort: 3306\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion apply -C dbUser=******* -C dbPassword=*******\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"storageType - db, using database as the storage backend for state"),(0,r.kt)("li",{parentName:"ul"},"dbHost - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the access address for the database"),(0,r.kt)("li",{parentName:"ul"},"dbName - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the name of the database"),(0,r.kt)("li",{parentName:"ul"},"dbPort - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the port of the database"),(0,r.kt)("li",{parentName:"ul"},"dbUser - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the user name of the database"),(0,r.kt)("li",{parentName:"ul"},"dbPassword - ",(0,r.kt)("inlineCode",{parentName:"li"},"required")," the password of the database")),(0,r.kt)("p",null,"Note that the table name in the database used by Kusion is ",(0,r.kt)("strong",{parentName:"p"},"state"),". Below is an example SQL statement for creating this table: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `state` (\n   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'primary key',\n   `tenant` varchar(100) DEFAULT NULL COMMENT 'tenant',\n   `project` varchar(100) NOT NULL COMMENT 'project',\n   `kusion_version` varchar(50) DEFAULT NULL COMMENT 'kusion version',\n   `version` int(10) unsigned NOT NULL COMMENT 'current state format version\uff0cmay upgrade in the future',\n   `serial` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT 'modification times for state\uff0ccan be used in concurrent control',\n   `operator` varchar(100) DEFAULT NULL COMMENT 'last modifier',\n   `resources` longtext DEFAULT NULL COMMENT 'state of the resources\uff0cjson array',\n   `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'creation time',\n   `modified_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT 'update time',\n   `stack` varchar(100) DEFAULT NULL COMMENT 'stack',\n   `cluster` varchar(100) DEFAULT NULL COMMENT 'logical isolation in a stack\uff0cusually clustername__cellname',\n   PRIMARY KEY (`id`),\n   UNIQUE KEY `uk_state_latest` (`tenant`, `project`, `stack`, `serial`, `cluster`),\n   KEY `idx_tenant` (`tenant`),\n   KEY `idx_project` (`project`),\n   KEY `idx_kusion_version` (`kusion_version`),\n   KEY `idx_version` (`version`),\n   KEY `idx_create_time` (`create_time`),\n   KEY `idx_modified_time` (`modified_time`),\n   KEY `idx_stack` (`stack`),\n   KEY `idx_cluster` (`cluster`)\n);\n")))}d.isMDXComponent=!0}}]);