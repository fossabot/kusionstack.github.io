"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[13334],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(86010),s=a(12466),l=a(76775),i=a(91980),c=a(67392),u=a(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=k({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=a(72389);const w="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(d(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",w)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},45413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),s=a(85162);const l={id:"database"},i="Deliver the WordPress Application with Cloud RDS",c={unversionedId:"user-guides/cloud-resources/database",id:"user-guides/cloud-resources/database",title:"Deliver the WordPress Application with Cloud RDS",description:"This tutorial will demonstrate how to deploy a WordPress application with Kusion, which relies on both Kubernetes and IaaS resources provided by cloud vendors. We can learn how to declare the Relational Database Service (RDS) to provide a cloud-based database solution with Kusion for our application from this article.",source:"@site/docs/kusion/5-user-guides/1-cloud-resources/1-database.md",sourceDirName:"5-user-guides/1-cloud-resources",slug:"/user-guides/cloud-resources/database",permalink:"/zh/docs/next/user-guides/cloud-resources/database",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/5-user-guides/1-cloud-resources/1-database.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1717674687,formattedLastUpdatedAt:"2024\u5e746\u67086\u65e5",sidebarPosition:1,frontMatter:{id:"database"},sidebar:"kusion",previous:{title:"Operational Rules",permalink:"/zh/docs/next/configuration-walkthrough/operational-rules"},next:{title:"Expose Application Service Deployed on CSP Kubernetes",permalink:"/zh/docs/next/user-guides/cloud-resources/expose-service"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Workspace",id:"init-workspace",level:2},{value:"Create Project And Stack",id:"create-project-and-stack",level:2},{value:"Update And Review Configuration Codes",id:"update-and-review-configuration-codes",level:3},{value:"Application Delivery",id:"application-delivery",level:2},{value:"Verify WordPress Application",id:"verify-wordpress-application",level:2},{value:"Delete WordPress Application",id:"delete-wordpress-application",level:2}],p={toc:d};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deliver-the-wordpress-application-with-cloud-rds"},"Deliver the WordPress Application with Cloud RDS"),(0,r.kt)("p",null,"This tutorial will demonstrate how to deploy a WordPress application with Kusion, which relies on both Kubernetes and IaaS resources provided by cloud vendors. We can learn how to declare the Relational Database Service (RDS) to provide a cloud-based database solution with Kusion for our application from this article. "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/getting-started/install-kusion"},"Kusion"),". "),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl CLI")," and run a ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," or ",(0,r.kt)("a",{parentName:"li",href:"https://docs.k3s.io/quick-start"},"k3s")," or ",(0,r.kt)("a",{parentName:"li",href:"https://k3d.io/v5.4.4/#installation"},"k3d")," or ",(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node"},"MiniKube")," cluster. "),(0,r.kt)("li",{parentName:"ul"},"Prepare a cloud service account and create a user with at least ",(0,r.kt)("strong",{parentName:"li"},"VPCFullAccess")," and ",(0,r.kt)("strong",{parentName:"li"},"RDSFullAccess")," related permissions to use the Relational Database Service (RDS). This kind of user can be created and managed in the Identity and Access Management (IAM) console of the cloud vendor. "),(0,r.kt)("li",{parentName:"ul"},"The environment that executes ",(0,r.kt)("inlineCode",{parentName:"li"},"kusion")," needs to have connectivity to terraform registry to download the terraform providers. ")),(0,r.kt)("p",null,"Additionally, we also need to configure the obtained AccessKey and SecretKey as well as the cloud resource region as environment variables for specific cloud provider: "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID="AKIAQZDxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="oE/xxxx" # replace it with your SecretKey\nexport AWS_REGION=us-east-1            # replace it with your region\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aws iam account",src:a(24838).Z,width:"2874",height:"1398"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export ALICLOUD_ACCESS_KEY="LTAI5txxx" # replace it with your AccessKey\nexport ALICLOUD_SECRET_KEY="nxuowIxxx" # replace it with your SecretKey\nexport ALICLOUD_REGION=cn-hangzhou     # replace it with your region\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alicloud iam account",src:a(73725).Z,width:"1500",height:"629"})))),(0,r.kt)("h2",{id:"init-workspace"},"Init Workspace"),(0,r.kt)("p",null,"To deploy the WordPress application with cloud rds, we first need to initiate a ",(0,r.kt)("inlineCode",{parentName:"p"},"Workspace")," for the targeted stack (here we are using ",(0,r.kt)("inlineCode",{parentName:"p"},"dev"),"). Please copy the following example YAML file to your local ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml"),". "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# MySQL configurations for AWS RDS\nmodules: \n  kusionstack/mysql@0.1.0: \n    default: \n      cloud: aws\n      size: 20\n      instanceType: db.t3.micro\n      privateRouting: false\n      databaseName: "wordpress-mysql"\n'))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# MySQL configurations for Alicloud RDS\nmodules: \n  kusionstack/mysql@0.1.0: \n    default: \n      cloud: alicloud\n      size: 20\n      instanceType: mysql.n2.serverless.1c\n      category: serverless_basic\n      privateRouting: false\n      subnetID: [your-subnet-id]\n      databaseName: "wordpress-mysql"\n')))),(0,r.kt)("p",null,"If you would like to try creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"Alicloud")," RDS instance, you should replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"[your-subnet-id]")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"modules.kusionstack/mysql@0.1.0.default.subnetID")," field with the Alicloud ",(0,r.kt)("inlineCode",{parentName:"p"},"vSwitchID")," to which the database will be provisioned in. After that, you can execute the following command line to initiate the configuration for ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," workspace. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion workspace create dev -f workspace.yaml\n")),(0,r.kt)("p",null,"Since Kusion by default use the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," workspace, we can switch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," workspace with the following cmd: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion workspace switch dev\n")),(0,r.kt)("p",null,"If you have already created and used the configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," workspace, you can append the MySQL module configs to your workspace YAML file and use the following command line to update the workspace configuration. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion workspace update dev -f workspace.yaml\n")),(0,r.kt)("p",null,"We can use the following command lines to show the current workspace configurations for ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," workspace. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion workspace show\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml")," is a sample configuration file for workspace management, including ",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL")," module configs. Workspace configurations are usually declared by ",(0,r.kt)("strong",{parentName:"p"},"Platform Engineers")," and will take effect through the corresponding stack. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More details about the configuration of Workspace can be found in ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/concepts/workspace"},"Concepts of Workspace"),". ")),(0,r.kt)("h2",{id:"create-project-and-stack"},"Create Project And Stack"),(0,r.kt)("p",null,"We can create a new project named ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress-rds-cloud")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion project create")," command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new directory and navigate into it. \nmkdir wordpress-rds-cloud && cd wordpress-rds-cloud\n\n# Create a new project with the name of the current directory. \nkusion project create\n")),(0,r.kt)("p",null,"After creating the new project, we can create a new stack named ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion stack create")," command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new stack with the specified name under current project directory. \nkusion stack create dev\n")),(0,r.kt)("p",null,"The created project and stack structure looks like below: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tree\n.\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n2 directories, 4 files\n")),(0,r.kt)("h3",{id:"update-and-review-configuration-codes"},"Update And Review Configuration Codes"),(0,r.kt)("p",null,"The configuration codes in the created stack are basically empty, thus we should replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/kcl.mod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," with the below codes: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# dev/kcl.mod\n[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.1.0" }\nnetwork = { oci = "oci://ghcr.io/kusionstack/network", tag = "0.1.0" }\nmysql = { oci = "oci://ghcr.io/kusionstack/mysql", tag = "0.1.0" }\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k \nimport kam.v1.app_configuration as ac\nimport kam.v1.workload as wl\nimport kam.v1.workload.container as c\nimport network as n\nimport mysql\n\n# main.k declares customized configurations for dev stacks.\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            wordpress: c.Container {\n                image: "wordpress:6.3"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_USER": "$(KUSION_DB_USERNAME_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_NAME": "mysql"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n              n.Port {\n                  port: 80\n              }\n            ]\n        }\n        "mysql": mysql.MySQL {\n            type: "cloud"\n            version: "8.0"\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"application-delivery"},"Application Delivery"),(0,r.kt)("p",null,"You can complete the delivery of the WordPress application in the folder of ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress-cloud-rds/dev")," using the following command line. Kusion will enable the watching of the application resource creation and automatic port-forwarding of the specified port (80) from local to the Kubernetes Service. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd dev && kusion apply --watch\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"During the first apply, the models and modules as well as the Terraform CLI (if not exists) that the application depends on will be downloaded, so it may take some time (usually within two minutes). You can take a break and have a cup of coffee. ")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply the wordpress application with aws rds",src:a(5721).Z,width:"2874",height:"802"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply the wordpress application with alicloud rds",src:a(91609).Z,width:"2876",height:"858"})))),(0,r.kt)("p",null,"After all the resources reconciled, we can port-forward our local port (e.g. 12345) to the WordPress frontend service port (80) in the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n wordpress-cloud-rds svc/wordpress-cloud-rds-dev-wordpress-private 12345:80\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubectl port-forward for wordpress",src:a(76831).Z,width:"2874",height:"150"})),(0,r.kt)("h2",{id:"verify-wordpress-application"},"Verify WordPress Application"),(0,r.kt)("p",null,"Next, we will verify the WordPress site service we just delivered, along with the creation of the RDS instance it depends on. We can start using the WordPress site by accessing the link of local-forwarded port ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:12345"},"(http://localhost:12345)")," we just configured in the browser. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wordpress site page",src:a(85773).Z,width:"1500",height:"803"})),(0,r.kt)("p",null,"In addition, we can also log in to the cloud service console page to view the RDS instance we just created."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aws rds instance",src:a(42229).Z,width:"2298",height:"706"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alicloud rds instance",src:a(99782).Z,width:"2870",height:"616"})))),(0,r.kt)("h2",{id:"delete-wordpress-application"},"Delete WordPress Application"),(0,r.kt)("p",null,"You can delete the WordPress application and related RDS resources using the following command line. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --yes\n")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusion destroy wordpress with aws rds",src:a(74068).Z,width:"2874",height:"788"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusion destroy wordpress with alicloud rds",src:a(72557).Z,width:"2874",height:"820"})))))}m.isMDXComponent=!0},91609:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-wordpress-cloud-rds-alicloud-14224502ce1c4d077fa1ed3777b1add9.png"},5721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-wordpress-cloud-rds-aws-9c72f8fd79000427958c5376085a65b8.png"},24838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-iam-account-2216105e7fa18fb2f7bf4be7e19f98bd.png"},99782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-rds-instance-alicloud-e2062c7a477d445b3decf429105ab3d6.png"},42229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cloud-rds-instance-aws-64d6371851d55e05fb05353bbd9a19b1.png"},72557:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/destroy-wordpress-cloud-rds-alicloud-9c5da68051d92f6a8b3a11db9dd49273.png"},74068:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/destroy-wordpress-cloud-rds-aws-04a2cf44dbce1bcac488f8ce3dcdae81.png"},73725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/set-rds-access-9347ae09377aeb94d9f6d1e5d8688ab5.png"},76831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wordpress-cloud-rds-port-forward-611c4f17d055d9ee941b9ff87a0727f5.png"},85773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wordpress-site-page-ef650e640399209d1eec5e6dfe88c454.png"}}]);