"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(87462),r=a(67294),o=a(86010),s=a(12466),i=a(76775),l=a(91980),c=a(67392),d=a(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var k=a(72389);const g="tabList__CuJ",v="tabItem_LNqP";function w(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==i&&(p(t),l(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},s,{className:(0,o.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":i===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(w,(0,n.Z)({},e,t)),r.createElement(b,(0,n.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},60825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),s=a(85162);const i={},l="Deliver the WordPress Application with Cloud RDS",c={unversionedId:"kusion/guides/cloud-resources/database",id:"version-v0.9/kusion/guides/cloud-resources/database",title:"Deliver the WordPress Application with Cloud RDS",description:"This tutorial will demonstrate how to deploy a WordPress application with Kusion, which relies on both Kubernetes and IaaS resources provided by cloud vendors. We can learn how to declare the Relational Database Service (RDS) to provide a cloud-based database solution for our application from this article.",source:"@site/versioned_docs/version-v0.9/kusion/guides/cloud-resources/database.md",sourceDirName:"kusion/guides/cloud-resources",slug:"/kusion/guides/cloud-resources/database",permalink:"/docs/v0.9/kusion/guides/cloud-resources/database",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/guides/cloud-resources/database.md",tags:[],version:"v0.9",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1711703238,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"User Guide",permalink:"/docs/v0.9/kusion/guides/"},next:{title:"Expose Application Service Deployed on CSP Kubernetes",permalink:"/docs/v0.9/kusion/guides/cloud-resources/expose-service"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Project",id:"init-project",level:2},{value:"Review Config Files",id:"review-config-files",level:3},{value:"Deliver WordPress Application",id:"deliver-wordpress-application",level:2},{value:"Verify WordPress Application",id:"verify-wordpress-application",level:2},{value:"Delete WordPress Application",id:"delete-wordpress-application",level:2}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deliver-the-wordpress-application-with-cloud-rds"},"Deliver the WordPress Application with Cloud RDS"),(0,r.kt)("p",null,"This tutorial will demonstrate how to deploy a WordPress application with Kusion, which relies on both Kubernetes and IaaS resources provided by cloud vendors. We can learn how to declare the Relational Database Service (RDS) to provide a cloud-based database solution for our application from this article. "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../getting-started/install-kusion"},"Install Kusion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Deploy Kubernetes")," or ",(0,r.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind")," or ",(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.terraform.io/"},"Install Terraform")),(0,r.kt)("li",{parentName:"ul"},"Prepare a cloud service account and create a user with ",(0,r.kt)("inlineCode",{parentName:"li"},"VPCFullAccess")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"RDSFullAccess")," permissions to use the Relational Database Service (RDS). This kind of user can be created and managed in the Identity and Access Management (IAM) console"),(0,r.kt)("li",{parentName:"ul"},"The environment that executes ",(0,r.kt)("inlineCode",{parentName:"li"},"kusion")," need to have connectivity to terraform registry to download the terraform providers")),(0,r.kt)("p",null,"Additionally, we also need to configure the obtained AccessKey and SecretKey as environment variables, along with the region if you are using certain cloud provider: "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID="AKIAQZDxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="oE/xxxx" # replace it with your SecretKey\nexport AWS_PROVIDER_REGION="xx-xxxx-x" # replace it with your AWS Region\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aws iam account",src:a(24838).Z,width:"2874",height:"1398"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export ALICLOUD_ACCESS_KEY="LTAI5txxx" # replace it with your AccessKey\nexport ALICLOUD_SECRET_KEY="nxuowIxxx" # replace it with your SecretKey\nexport ALICLOUD_PROVIDER_REGION="xx-xxxxxxx" # replace it with your AliCloud Region\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alicloud iam account",src:a(73725).Z,width:"1500",height:"629"})))),(0,r.kt)("h2",{id:"init-project"},"Init Project"),(0,r.kt)("p",null,"We can start by initializing this tutorial project with online templates: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion init --online\n")),(0,r.kt)("p",null,"All init templates are listed as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  kusion_playground kusion init --online\n? Please choose a template: wordpress-cloud-rds        A sample wordpress project with cloud rds\nThis command will walk you through creating a new kusion project.\n\nEnter a value or leave blank to accept the (default), and press <ENTER>.\nPress ^C at any time to quit.\n\nProject Config:\n? Project Name: wordpress-cloud-rds\n? AppName: wordpress\n? ProjectName: wordpress\nStack Config: dev\n? Image: wordpress:6.3\nCreated project 'wordpress-cloud-rds'\n")),(0,r.kt)("p",null,"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress-cloud-rds")," and press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter"),". After that, we will see hints below and use the default value to config this project and stack."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(82605).Z,width:"2560",height:"1440"})),(0,r.kt)("p",null,"The directory structure looks like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  kusion_playground tree wordpress-cloud-rds\nwordpress-cloud-rds\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod.lock\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u251c\u2500\u2500 platform.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n1 directory, 6 files\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More details about the directory structure can be found in\n",(0,r.kt)("a",{parentName:"p",href:"../../concepts/glossary"},"Concepts"),".")),(0,r.kt)("h3",{id:"review-config-files"},"Review Config Files"),(0,r.kt)("p",null,"Let's take a look at the configuration files located in ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress-cloud-rds/dev"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.trait as t\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.secret as sec\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.monitoring as m\nimport catalog.models.schema.v1.accessories.database as db\n\n# main.k declares reusable configurations for dev stacks.\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            wordpress: c.Container {\n                image = "wordpress:6.3"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST)"\n                    "WORDPRESS_DB_USER": "$(KUSION_DB_USERNAME)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD)"\n                    "WORDPRESS_DB_NAME": "mysql"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n    database: db.Database {\n        type: "aws"\n        engine: "MySQL"\n        version: "8.0"\n        size: 20\n        instanceType: "db.t3.micro"\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dev/platform.k")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import catalog.models.schema.v1 as ac\n\n# platform.k declares customized configurations\nwordpress: ac.AppConfiguration {\n    database: {\n        privateRouting = False\n\n        # SubnetID defines the virtual subnet ID associated with the VPC that the rds\n        # instance will be created in. The rds instance won't be created in user's own VPC\n        # but in default VPC of cloud vendor, if this field is not provided.\n        # subnetID = [your-subnet-id]\n\n        # category = \"serverless_basic\"\n    }\n}\n")),(0,r.kt)("p",null,"The template project defaults to use ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS")," RDS instance for the WordPress application. If you would like to try creating the ",(0,r.kt)("inlineCode",{parentName:"p"},"Alicloud")," RDS instance, you could modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/platform.k")," to the following and replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"[your-subnet-id]")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/platform.k")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"vSwitchID")," to provision the database in. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.trait as t\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.secret as sec\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.monitoring as m\nimport catalog.models.schema.v1.accessories.database as db\n\n# main.k declares reusable configurations for dev stacks.\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            wordpress: c.Container {\n                image = "wordpress:6.3"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST)"\n                    "WORDPRESS_DB_USER": "$(KUSION_DB_USERNAME)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD)"\n                    "WORDPRESS_DB_NAME": "mysql"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n    database: db.Database {\n        type: "alicloud"\n        engine: "MySQL"\n        version: "8.0"\n        size: 20\n        instanceType: "mysql.n2.serverless.1c"\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dev/platform.k")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import catalog.models.schema.v1 as ac\n\n# platform.k declares customized configurations\nwordpress: ac.AppConfiguration {\n    database: {\n        privateRouting = False\n\n        # SubnetID defines the virtual subnet ID associated with the VPC that the rds\n        # instance will be created in. The rds instance won't be created in user's own VPC\n        # but in default VPC of cloud vendor, if this field is not provided.\n        subnetID = [your-subnet-id]\n\n        category = \"serverless_basic\"\n    }\n}\n")),(0,r.kt)("p",null,"The configuration code files you need to pay attention are mainly ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/platform.k"),". Specifically: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev/main.k")," contains configurations for the ",(0,r.kt)("strong",{parentName:"li"},"Development team")," to fill out on how the application should run in the dev environment. In addition to declaring its application container attributes such as image, environment variables, resource requirements, its network attributes such as opening the port 80 to provide service, it also declares that it needs an RDS instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev/platform.k")," contains config codes for ",(0,r.kt)("strong",{parentName:"li"},"Platform team")," to fill out for the WordPress application deployment in the dev environment on AliCloud. Here, the main purpose is to specify the details on the cloud database (such as how network access is managed, what category of service to get from the cloud vendor) for it to be connected from the WordPress application container.")),(0,r.kt)("p",null,"As shown above, benefiting from the advanced features of KCL concerning variable, function, and schema definition, we can abstract and encapsulate the RDS resources, which shields many properties that the Developer does not need to be aware of. The developer only needs to fill in a few necessary fields in the AppConfiguration instance to complete the declaration of RDS resources, so that the application configuration can be organized more flexibly and efficiently. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More details about Catalog models can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog"))),(0,r.kt)("h2",{id:"deliver-wordpress-application"},"Deliver WordPress Application"),(0,r.kt)("p",null,"You can complete the delivery of the WordPress application using the following command line: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd wordpress-cloud-rds && kusion apply --yes\n")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply the wordpress application with aws rds",src:a(87103).Z,width:"2276",height:"766"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply the wordpress application with alicloud rds",src:a(30263).Z,width:"2504",height:"1996"})))),(0,r.kt)("p",null,"After all the resources reconciled, we can port-forward our local port (e.g. 12345) to the WordPress frontend service port (80) in the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n wordpress svc/wordpress-dev-wordpress-private 12345:80\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kubectl port-forward for wordpress",src:a(86535).Z,width:"2384",height:"234"})),(0,r.kt)("h2",{id:"verify-wordpress-application"},"Verify WordPress Application"),(0,r.kt)("p",null,"Next, we will verify the WordPress site service we just delivered, along with the creation of the RDS instance it depends on. We can start using the WordPress site by accessing the link of local-forwarded port ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:12345"},"(http://localhost:12345)")," we just configured in the browser. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"wordpress site page",src:a(85773).Z,width:"1500",height:"803"})),(0,r.kt)("p",null,"In addition, we can also log in to the cloud service console page to view the RDS instance we just created."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aws rds instance",src:a(68678).Z,width:"2876",height:"964"}),"\n",(0,r.kt)("img",{alt:"aws rds instance detailed information",src:a(86915).Z,width:"1224",height:"274"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alicloud rds instance",src:a(34811).Z,width:"1500",height:"748"})))),(0,r.kt)("h2",{id:"delete-wordpress-application"},"Delete WordPress Application"),(0,r.kt)("p",null,"You can delete the WordPress application and related RDS resources using the following command line. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --yes\n")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusion destroy wordpress with aws rds",src:a(37589).Z,width:"2184",height:"730"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kusion destroy wordpress with alicloud rds",src:a(75775).Z,width:"1462",height:"776"})))))}m.isMDXComponent=!0},34811:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/alicloud-rds-instance-88d560e7fdab77f7d83592ae1ded6866.png"},87103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-wordpress-application-with-aws-rds-580915491e85e04d050cf19bbf0f96cd.png"},30263:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-wordpress-application-b757aedd0d5513207e0bd65019d7a4c2.png"},24838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-iam-account-2216105e7fa18fb2f7bf4be7e19f98bd.png"},86915:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-rds-instance-detail-e0f1e737f54491f738769b152de96806.png"},68678:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-rds-instance-12f87b94fbc4a76319d8d9d39fd465d2.png"},82605:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/init-wordpress-with-rds-d6c58387ae3d8ce26394e6e2f7402efd.gif"},37589:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusion-destroy-wordpress-with-aws-rds-304a7051e2646ad78490fb641fe5a776.png"},75775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusion-destroy-wordpress-917a4bf29dfb33b39f8b306df03d9f6a.png"},73725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/set-rds-access-9347ae09377aeb94d9f6d1e5d8688ab5.png"},86535:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wordpress-port-forward-2a83514580f7cf81d890841495f9441e.png"},85773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/wordpress-site-page-ef650e640399209d1eec5e6dfe88c454.png"}}]);