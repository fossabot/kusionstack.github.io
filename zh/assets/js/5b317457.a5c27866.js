"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46853],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return t?n.createElement(h,i(i({ref:a},d),{},{components:t})):n.createElement(h,i({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49216:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={sidebar_position:6},i="Managed Databases",s={unversionedId:"config-walkthrough/database",id:"version-v0.9/config-walkthrough/database",title:"Managed Databases",description:"The database attribute in the AppConfiguration instance is used to describe the specification for any databases needed for the application.",source:"@site/docs_versioned_docs/version-v0.9/config-walkthrough/database.md",sourceDirName:"config-walkthrough",slug:"/config-walkthrough/database",permalink:"/zh/docs/v0.9/config-walkthrough/database",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/config-walkthrough/database.md",tags:[],version:"v0.9",lastUpdatedBy:"Ekjot Singh",lastUpdatedAt:1722091057,formattedLastUpdatedAt:"2024\u5e747\u670827\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"kusion",previous:{title:"Application Networking",permalink:"/zh/docs/v0.9/config-walkthrough/networking"},next:{title:"Secret Management",permalink:"/zh/docs/v0.9/config-walkthrough/secret"}},l={},p=[{value:"Import",id:"import",level:2},{value:"Types of Database offerings",id:"types-of-database-offerings",level:2},{value:"Cloud Credentials and Permissions",id:"cloud-credentials-and-permissions",level:2},{value:"Configure Database",id:"configure-database",level:2},{value:"Provision a Cloud Database",id:"provision-a-cloud-database",level:3},{value:"AWS RDS Instance",id:"aws-rds-instance",level:4},{value:"AliCloud RDS Instance",id:"alicloud-rds-instance",level:4},{value:"Local Database",id:"local-database",level:3},{value:"Database Credentials",id:"database-credentials",level:2},{value:"Configure Network Access",id:"configure-network-access",level:2},{value:"Subnet ID",id:"subnet-id",level:3},{value:"Private Routing",id:"private-routing",level:3}],d={toc:p};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managed-databases"},"Managed Databases"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," instance is used to describe the specification for any databases needed for the application."),(0,r.kt)("p",null,"You can currently have only one ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," per ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),"."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," package. For more details on KCL package import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../config-walkthrough/overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.accessories.database as db\n")),(0,r.kt)("h2",{id:"types-of-database-offerings"},"Types of Database offerings"),(0,r.kt)("p",null,"As of version 0.9.0, Kusion supports the following database offerings on the cloud:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Relational Database Service (RDS) on ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/rds/"},"AWS")),(0,r.kt)("li",{parentName:"ul"},"Relational Database Service (RDS) on ",(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/product/databases"},"AliCloud"))),(0,r.kt)("p",null,"More database types on more cloud vendors will be added in the future."),(0,r.kt)("p",null,"Alternatively, Kusion also supports creating a database at ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," for local testing needs. A local database is quicker to stand up and easier to manage. It also eliminates the need for an account and any relevant costs with the cloud providers in the case that a local testing environment is sufficient."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You do need a local Kubernetes cluster to run the database workloads. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," or ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind")," to get started.\nTo see an end-to-end use case for standing up a local testing environment including a local database, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/deliver-wordpress"},"Kusion Quickstart"),".")),(0,r.kt)("h2",{id:"cloud-credentials-and-permissions"},"Cloud Credentials and Permissions"),(0,r.kt)("p",null,"Kusion provisions databases on the cloud via ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"terraform")," providers. For it to create ",(0,r.kt)("em",{parentName:"p"},"any")," cloud resources, it requires a set of credentials that belongs to an account that has the appropriate write access, as well as a provider region so the terraform provider can be initialized properly."),(0,r.kt)("p",null,"For AWS, the environment variables needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export AWS_ACCESS_KEY_ID="xxxxxxxxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="xxxxxxx" # replace it with your SecretKey\nexport AWS_PROVIDER_REGION="xx-xxxx-x" # replace it with your AWS Region\n')),(0,r.kt)("p",null,"For AliCloud, the environment variables needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export ALICLOUD_ACCESS_KEY="xxxxxxxxx" # replace it with your AccessKey\nexport ALICLOUD_SECRET_KEY="xxxxxxxxx" # replace it with your SecretKey\nexport ALICLOUD_PROVIDER_REGION="xx-xxxxxxx" # replace it with your AliCloud Region\n')),(0,r.kt)("p",null,"The user account that owns these credentials would need to have the proper permission policies attached to create databases and security groups. If you are using the cloud-managed policies, the policies needed to provision a database and configure firewall rules are listed below."),(0,r.kt)("p",null,"For AWS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AmazonVPCFullAccess")," for creating and managing database firewall rules via security group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AmazonRDSFullAccess")," for creating and managing RDS instances")),(0,r.kt)("p",null,"For AliCloud:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AliyunVPCFullAccess")," for creating and managing database firewall rules via security group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AliyunRDSFullAccess")," for creating and managing RDS instances")),(0,r.kt)("p",null,"Alternatively, you can use customer managed policies if the cloud provider built-in policies don't meet your needs. The list of permissions needed are in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AmazonRDSFullAccess.html#AmazonRDSFullAccess-json"},"AmazonRDSFullAccess Policy Document")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AmazonVPCFullAccess.html"},"AmazonVPCFullAccess Policy Document"),". It will most likely be a subset of the permissions in the policy documents."),(0,r.kt)("h2",{id:"configure-database"},"Configure Database"),(0,r.kt)("h3",{id:"provision-a-cloud-database"},"Provision a Cloud Database"),(0,r.kt)("p",null,"Assuming the steps in the ",(0,r.kt)("a",{parentName:"p",href:"#cloud-credentials-and-permissions"},"Cloud Credentials and Permissions")," section is setup properly, you can now provision cloud databases via Kusion."),(0,r.kt)("h4",{id:"aws-rds-instance"},"AWS RDS Instance"),(0,r.kt)("p",null,"To provision an AWS RDS instance with MySQL v5.7:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wordpress: ac.AppConfiguration {\n    # ...\n    database: db.Database {\n        type: "aws"\n        engine: "MySQL"\n        version: "5.7"\n        size: 20\n        instanceType: "db.t3.micro"\n        securityIPs = ["0.0.0.0/0"]\n    }\n}\n')),(0,r.kt)("p",null,"It's highly recommended to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0/0")," and closely manage the whitelist of IPs that can access the database for security purposes. The ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0/0")," in the example above or if ",(0,r.kt)("inlineCode",{parentName:"p"},"securityIPs")," is omitted altogether will allow connections from anywhere which would typically be a security bad practice."),(0,r.kt)("p",null,"The supported ",(0,r.kt)("inlineCode",{parentName:"p"},"engine")," values are ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MariaDB"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Postgres")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLServer-SE"),". "),(0,r.kt)("p",null,"The supported engine versions can be found in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MySQL.Concepts.VersionMgmt.html"},"MySQL versions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/MariaDB.Concepts.VersionMgmt.html#MariaDB.Concepts.VersionMgmt.Supported"},"MariaDB versions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions"},"PostgreSQL versions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport"},"Microsoft SQL Server versions"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceType")," field determines the computation and memory capacity of the RDS instance. The ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3.micro")," instance type in the example above represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3")," instance class with a size of ",(0,r.kt)("inlineCode",{parentName:"p"},"micro"),". In the same ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3")," instance family there are also ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3.small"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3.medium"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3.2xlarge"),", etc."),(0,r.kt)("p",null,"The full list of supported ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceType")," values can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#Concepts.DBInstanceClass.Support"},"here"),"."),(0,r.kt)("p",null,"You can also adjust the storage capacity for the database instance by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," field which is storage size measured in gigabytes. The minimum is 20. More details can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#Concepts.Storage.GeneralSSD"},"here"),"."),(0,r.kt)("h4",{id:"alicloud-rds-instance"},"AliCloud RDS Instance"),(0,r.kt)("p",null,"To provision an AWS RDS instance with MySQL v5.7. AliCloud RDS has several additional fields such as ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"privateRouting"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wordpress: ac.AppConfiguration {\n    # ...\n    database: db.Database {\n        type: "alicloud"\n        engine: "MySQL"\n        version: "8.0"\n        size: 20\n        instanceType: "mysql.n2.serverless.1cc"\n        category = "serverless_basic"\n        subnetID = "{your-alicloud-vswitch-id}"\n        securityIPs = ["0.0.0.0/0"]\n        privateRouting = False\n    }\n}\n')),(0,r.kt)("p",null,"We will walkthrough ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"privateRouting")," in the ",(0,r.kt)("a",{parentName:"p",href:"#configure-network-access"},"Configure Network Access")," section."),(0,r.kt)("p",null,"The supported ",(0,r.kt)("inlineCode",{parentName:"p"},"engine")," values are ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MariaDB"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SQLServer"),". "),(0,r.kt)("p",null,"The supported engine versions can be found in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/major-version-lifecycle-description"},"MySQL versions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/developer-reference/api-rds-2014-08-15-createdbinstance"},"MariaDB versions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-postgresql/lifecycles-of-major-engine-versions"},"PostgreSQL versions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-sql-server/release-notes-for-minor-engine-versions-of-apsaradb-rds-for-sql-server"},"Microsoft SQL Server versions"))),(0,r.kt)("p",null,"A summarized version can be found ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/rds/developer-reference/api-rds-2014-08-15-createdbinstance"},"here")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"EngineVersion")," parameter."),(0,r.kt)("p",null,"The full list of supported ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceType")," values can be found in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#concept-2096487"},"MySQL instance types(x86)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mariadb/instance-types#concept-2096591"},"MariaDB instance types")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types#concept-2096578"},"PostgreSQL instance types")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-sql-server/primary-apsaradb-rds-for-sql-server-instance-types#concept-2096545"},"Microsoft SQL Server instance types"))),(0,r.kt)("h3",{id:"local-database"},"Local Database"),(0,r.kt)("p",null,"To deploy a local database with MySQL v8.0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wordpress: ac.AppConfiguration {\n    # ...\n    database: db.Database {\n        type: "local"\n        engine: "MySQL"\n        version: "8.0"\n        instanceType: "local"\n    }\n}\n')),(0,r.kt)("p",null,"The supported ",(0,r.kt)("inlineCode",{parentName:"p"},"engine")," values are ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MariaDB")," as of version 0.9.0. Kusion will stand up a ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," deployment and expose it as a service in the local Kubernetes cluster for local workloads to connect to."),(0,r.kt)("h2",{id:"database-credentials"},"Database Credentials"),(0,r.kt)("p",null,"There is no need to manage the database credentials manually. Kusion will automatically generate a random password, set it as the credential when creating the database, and then inject the hostname, username and password into the application runtime."),(0,r.kt)("p",null,"You have the option to BYO (Bring Your Own) username for the database credential by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"database"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wordpress: ac.AppConfiguration {\n    # ...\n    database: db.Database {\n        # ...\n        username: "my_username"\n    }\n}\n')),(0,r.kt)("p",null,"You cannot bring your own password. The password will always be managed by Kusion automatically."),(0,r.kt)("p",null,"The database credentials are injected into the environment variables of the application container. You can access them via the following env vars:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# env | grep KUSION_DB\nKUSION_DB_HOST=wordpress.xxxxxxxx.us-east-1.rds.amazonaws.com\nKUSION_DB_USERNAME=xxxxxxxxx\nKUSION_DB_PASSWORD=xxxxxxxxx\n")),(0,r.kt)("p",null,"You can use these environment variables out of the box. Or most likely, your application might retrieve the connection details from a different set of environment variables. In that case, you can map the kusion environment variables to the ones expected by your application using the ",(0,r.kt)("inlineCode",{parentName:"p"},"$()")," expression."),(0,r.kt)("p",null,"This example below will assign the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"KUSION_DB_HOST")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"WORDPRESS_DB_HOST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"WORDPRESS_DB_USER")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"WORDPRESS_DB_USER"),", likewise for ",(0,r.kt)("inlineCode",{parentName:"p"},"KUSION_DB_PASSWORD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WORDPRESS_DB_PASSWORD"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            wordpress: c.Container {\n                image = "wordpress:6.3-apache"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST)"\n                    "WORDPRESS_DB_USER": "$(KUSION_DB_USERNAME)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD)"\n                }\n                # ...\n            }\n        }\n        # ...\n    }\n    database: db.Database {\n        # ...\n    }\n}\n')),(0,r.kt)("h2",{id:"configure-network-access"},"Configure Network Access"),(0,r.kt)("p",null,"You can also optionally configure the network access to the database as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),". This is highly recommended because it dramatically increases the security posture of your cloud environment in the means of least privilege principle."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"securityIPs")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Database")," schema declares the list of network addresses that are allowed to access the database. The network addresses are in the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/what-is/cidr/"},"CIDR notation")," and can be either a private IP range (",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc1918"},"RFC-1918")," and ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6598"},"RFC-6598")," address) or a public one."),(0,r.kt)("p",null,"If the database need to be accessed from a public location (which should most likely not be the case in a production environment), ",(0,r.kt)("inlineCode",{parentName:"p"},"securityIPs")," need to include the public IP address of the traffic source (For instance, if the RDS database needs to be accessed from your computer)."),(0,r.kt)("p",null,"To configure AWS RDS to restrict network access from a VPC with a CIDR of ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.1.0/24")," and a public IP of ",(0,r.kt)("inlineCode",{parentName:"p"},"103.192.227.125"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wordpress: ac.AppConfiguration {\n    # ...\n    database: db.Database {\n        type: "aws"\n        ...\n        securityIPs = ["10.0.1.0/24", "103.192.227.125/32"]\n    }\n}\n')),(0,r.kt)("p",null,"Depending on the cloud provider, the default behavior of the database firewall settings may differ if omitted."),(0,r.kt)("h3",{id:"subnet-id"},"Subnet ID"),(0,r.kt)("p",null,"On AWS, you have the option to launch the RDS instance inside a specific VPC if a ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," is present in the application configuration. By default, if ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," is not provided, the RDS will be created in the default VPC for that account. However, the recommendation is to self-manage your VPCs to provider better isolation from a network security perspective."),(0,r.kt)("p",null,"On AliCloud, the ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," is required. The concept of subnet maps to VSwitch in AliCloud."),(0,r.kt)("p",null,"To place the RDS instance into a specific VPC on AWS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wordpress: ac.AppConfiguration {\n    # ...\n    database: db.Database {\n        type: "aws"\n        ...\n        subnetID: "subnet-xxxxxxxxxxxxxxxx" # replace it with your vpc subnet ID\n    }\n}\n')),(0,r.kt)("h3",{id:"private-routing"},"Private Routing"),(0,r.kt)("p",null,"There is an option to enforce private routing on certain cloud providers if both the workload and the database are running on the cloud."),(0,r.kt)("p",null,"On AliCloud, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"privateRouting")," flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". The database host generated will be a private FQDN that is only resolvable and accessible from within the AliCloud VPCs. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"privateRouting")," flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," is a no-op."),(0,r.kt)("p",null,"To enforce private routing on AliCloud:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wordpress: ac.AppConfiguration {\n    # ...\n    database: db.Database {\n        type: "alicloud"\n        ...\n        privateRouting: true\n    }\n}\n')),(0,r.kt)("p",null,"Kusion will then generate a private FQDN and inject it into the application runtime as the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"KUSION_DB_HOST")," for the application to use. A complete list of Kusion-managed environment variable can be found ",(0,r.kt)("a",{parentName:"p",href:"../reference/model/naming-conventions#list-of-magic-variables"},"here"),"."),(0,r.kt)("p",null,"Otherwise when using the public FQDN to connect to a database from the workload, the route will depend on cloud provider's routing preference. The options are generally either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Travel as far as possible on the cloud provider's global backbone network, or also referred to as cold potato routing, or"),(0,r.kt)("li",{parentName:"ul"},"Egress as early as possible to the public Internet and re-enter the cloud provider's datacenter later, or also referred to as hot potato routing")),(0,r.kt)("p",null,"The prior generally has better performance but is also more expensive."),(0,r.kt)("p",null,"You can find a good read on the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/architecture/internet-routing-and-traffic-engineering/"},"AWS Blog")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/routing-preference-overview"},"Microsoft Learn"),"."))}c.isMDXComponent=!0}}]);