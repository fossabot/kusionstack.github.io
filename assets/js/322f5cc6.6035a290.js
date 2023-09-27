"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),s=n(6775),l=n(1980),c=n(7392),d=n(12);function p(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,c]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=l??p;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,r]),tabValues:r}}var g=n(2389);const k="tabList__CuJ",b="tabItem_LNqP";function w(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==s&&(p(t),l(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},i,{className:(0,r.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k)},o.createElement(w,(0,a.Z)({},e,t)),o.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},5822:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),i=n(5162);const s={sidebar_position:2},l="Deliver the WordPress application on Kubernetes and clouds",c={unversionedId:"user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",id:"user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",title:"Deliver the WordPress application on Kubernetes and clouds",description:"This tutorial will demonstrate how to deploy a WordPress application using KusionStack, which relies on both Kubernetes and IaaS resources provided by cloud vendors. Unlike the code-city application we previously deployed on Kubernetes, the WordPress application will also rely on RDS (Relational Database Service) to provide a cloud-based database solution for WordPress website content, such as articles, comments, users, and other information.",source:"@site/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds.md",sourceDirName:"user_docs/getting-started/usecases",slug:"/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",permalink:"/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds.md",tags:[],version:"current",lastUpdatedBy:"Kan Wu",lastUpdatedAt:1695782872,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Deliver Your First Project on Kubernetes",permalink:"/docs/user_docs/getting-started/usecases/deliver-first-project"},next:{title:"Use VS Code Kusion",permalink:"/docs/user_docs/getting-started/kusion-ide"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Init Project",id:"init-project",level:2},{value:"Review Config Files",id:"review-config-files",level:3},{value:"Deliver WordPress Application",id:"deliver-wordpress-application",level:2},{value:"Verify WordPress Application",id:"verify-wordpress-application",level:2},{value:"Modify WordPress Application",id:"modify-wordpress-application",level:2},{value:"Apply Config Code Modification",id:"apply-config-code-modification",level:3},{value:"Delete WordPress Application",id:"delete-wordpress-application",level:2},{value:"Summary",id:"summary",level:2}],u={toc:p};function m(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deliver-the-wordpress-application-on-kubernetes-and-clouds"},"Deliver the WordPress application on Kubernetes and clouds"),(0,o.kt)("p",null,"This tutorial will demonstrate how to deploy a WordPress application using KusionStack, which relies on both Kubernetes and IaaS resources provided by cloud vendors. Unlike the code-city application we previously deployed on Kubernetes, the WordPress application will also rely on RDS (Relational Database Service) to provide a cloud-based database solution for WordPress website content, such as articles, comments, users, and other information. "),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Install Kusion")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Deploy Kubernetes")," or ",(0,o.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind")," or ",(0,o.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/"},"Install Terraform")),(0,o.kt)("li",{parentName:"ul"},"Prepare a cloud service account and create a user with ",(0,o.kt)("inlineCode",{parentName:"li"},"VPCFullAccess")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"RDSFullAccess")," permissions to use the Relational Database Service (RDS). This kind of user can be created and managed in the Identity and Access Management (IAM) console"),(0,o.kt)("li",{parentName:"ul"},"The environment that executes ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion")," need to have connectivity to terraform registry to download the terraform providers")),(0,o.kt)("p",null,"Additionally, we also need to configure the obtained AccessKey and SecretKey as environment variables, along with the region if you are using certain cloud provider: "),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"AWS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID="AKIAQZDxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="oE/xxxx" # replace it with your SecretKey\nexport AWS_PROVIDER_REGION="xx-xxxx-x" # replace it with your AWS Region\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"aws iam account",src:n(4838).Z,width:"2874",height:"1398"}))),(0,o.kt)(i.Z,{value:"Alicloud",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export ALICLOUD_ACCESS_KEY="LTAI5txxx" # replace it with your AccessKey\nexport ALICLOUD_SECRET_KEY="nxuowIxxx" # replace it with your SecretKey\nexport ALICLOUD_PROVIDER_REGION="xx-xxxxxxx" # replace it with your AliCloud Region\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alicloud iam account",src:n(3725).Z,width:"1500",height:"629"})))),(0,o.kt)("h2",{id:"init-project"},"Init Project"),(0,o.kt)("p",null,"We can start by initializing this tutorial project with online templates:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion init --online\n")),(0,o.kt)("p",null,"All init templates are listed as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground$ kusion init --online\n? Please choose a template:  [Use arrows to move, type to filter]\n> code-city                  Code City metaphor for visualizing Go source code in 3D.\n  deployment-multi-stack     A minimal kusion project of multiple stacks\n  deployment-single-stack    A minimal kusion project of single stack\n  wordpress                  A sample wordpress project\n")),(0,o.kt)("p",null,"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress")," and press ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter"),". After that, we will see hints below and use the default value to config this project and stack."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8814).Z,width:"2560",height:"1440"})),(0,o.kt)("p",null,"The directory structure looks like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground$ tree wordpress\nwordpress\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod.lock\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u251c\u2500\u2500 platform.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n2 directories, 6 files\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More details about the directory structure can be found in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/glossary"},"Concepts"),".")),(0,o.kt)("h3",{id:"review-config-files"},"Review Config Files"),(0,o.kt)("p",null,"Let's take a look at the configuration files located in ",(0,o.kt)("inlineCode",{parentName:"p"},"wordpress/dev"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.trait as t\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.secret as sec\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.monitoring as m\nimport catalog.models.schema.v1.accessories.database as db\n\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            wordpress: c.Container {\n                image = "wordpress:4.8-apache"\n                env: {\n                    "WORDPRESS_DB_HOST": "secret://wordpress-db/hostAddress"\n                    "WORDPRESS_DB_PASSWORD": "secret://wordpress-db/password"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n    database: db.Database {\n        type: "alicloud"\n        engine: "MySQL"\n        version: "5.7"\n        size: 20\n        instanceType: "mysql.n2.serverless.1c"\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dev/platform.k")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import catalog.models.schema.v1 as ac\n\n# platform.k declares customized configurations for a given platform\nwordpress: ac.AppConfiguration {\n    database: {\n        category = "serverless_basic"\n        # SubnetID defines the virtual subnet ID associated with the VPC that the rds\n        # instance will be created in. The rds instance won\'t be created in user\'s own VPC\n        # if this field is not provided.\n        subnetID = "{your-subnet-goes-here}"\n        securityIPs = ["0.0.0.0/0"]\n        privateRouting = False\n    }\n}\n')),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/platform.k"),", you need to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"{your-subnet-goes-here}")," with the subnetID to provision the database in."),(0,o.kt)("p",null,"If you would like to try creating the ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS")," RDS instance, you could modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/platform.k")," to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import catalog.models.schema.v1 as ac\n\n# platform.k declares customized configurations for a given platform\nwordpress: ac.AppConfiguration {\n    database: {\n        type = "aws"\n        # This instance type is AWS specific\n        instanceType = "db.t3.micro"\n        category = "serverless_basic"\n        securityIPs = ["0.0.0.0/0"]\n        privateRouting = False\n    }\n}\n')),(0,o.kt)("p",null,"The configuration code files you need to pay attention are mainly ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/platform.k"),". Specifically: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dev/main.k")," contains configurations for the ",(0,o.kt)("strong",{parentName:"li"},"Development team")," to fill out on how the application should run in the dev environment. In addition to declaring its application container attributes such as image, environment variables, resource requirements, its network attributes such as opening the port 80 to provide service, it also declares that it needs an RDS instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dev/platform.k")," contains config codes for ",(0,o.kt)("strong",{parentName:"li"},"Platform team")," to fill out for the WordPress application deployment in the dev environment on AliCloud. Here, the main purpose is to specify the details on the cloud database (such as how network access is managed, what category of service to get from the cloud vendor) for it to be connected from the WordPress application container.")),(0,o.kt)("p",null,"As shown above, benefiting from the advanced features of KCL concerning variable, function, and schema definition, we can abstract and encapsulate the RDS resources, which shields many properties that the Developer does not need to be aware of. The developer only needs to fill in a few necessary fields in the AppConfiguration instance to complete the declaration of RDS resources, so that the application configuration can be organized more flexibly and efficiently. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More details about Catalog models can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog"))),(0,o.kt)("h2",{id:"deliver-wordpress-application"},"Deliver WordPress Application"),(0,o.kt)("p",null,"You can complete the delivery of the WordPress application using the following command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd wordpress/dev && kusion apply --yes\n")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"AWS",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"apply the wordpress application with aws rds",src:n(7103).Z,width:"2276",height:"766"}))),(0,o.kt)(i.Z,{value:"Alicloud",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"apply the wordpress application with alicloud rds",src:n(263).Z,width:"2504",height:"1996"})))),(0,o.kt)("p",null,"After all the resources reconciled, we can port-forward our local port (e.g. 12345) to the WordPress frontend service port (80) in the cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n wordpress svc/wordpress-dev-wordpress-private 12345:80\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kubectl port-forward for wordpress",src:n(6535).Z,width:"2384",height:"234"})),(0,o.kt)("h2",{id:"verify-wordpress-application"},"Verify WordPress Application"),(0,o.kt)("p",null,"Next, we will verify the WordPress site service we just delivered, along with the creation of the RDS instance it depends on. We can start using the WordPress site by accessing the link of local-forwarded port ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:12345"},"(http://localhost:12345)")," we just configured in the browser. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wordpress site page",src:n(5773).Z,width:"1500",height:"803"})),(0,o.kt)("p",null,"In addition, we can also log in to the cloud service console page to view the RDS instance we just created."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"AWS",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"aws rds instance",src:n(8678).Z,width:"2876",height:"964"}),"\n",(0,o.kt)("img",{alt:"aws rds instance detailed information",src:n(6915).Z,width:"1224",height:"274"}))),(0,o.kt)(i.Z,{value:"Alicloud",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alicloud rds instance",src:n(4811).Z,width:"1500",height:"748"})))),(0,o.kt)("h2",{id:"modify-wordpress-application"},"Modify WordPress Application"),(0,o.kt)("h3",{id:"apply-config-code-modification"},"Apply Config Code Modification"),(0,o.kt)("p",null,"As shown below, you can try to modify the config codes in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k")," to add an environment variable in the container of the WordPress application. When using ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion apply")," to apply the config code modification, you can preview the resource changes with the capability of 3-way real-time diff of Kusion (note that we ignore the change of ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata.managedFields")," field in the following example for better demonstration). "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# dev/main.k\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            wordpress: c.Container {\n                # Some unchanged codes are omitted\n                # image = ...\n                env: {\n                    "WORDPRESS_DB_HOST": "secret://wordpress-db/hostAddress"\n                    "WORDPRESS_DB_PASSWORD": "secret://wordpress-db/password"\n                    "ENV_ADD_EXAMPLE": "wordpress-example"\n                }\n                ...\n            }\n        }\n        ...\n    }\n    ...\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kusion apply --watch --ignore-fields "metadata.managedFields"\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kusion 3-way diff",src:n(2720).Z,width:"2504",height:"1582"})),(0,o.kt)("h2",{id:"delete-wordpress-application"},"Delete WordPress Application"),(0,o.kt)("p",null,"You can delete the WordPress application and related RDS resources using the following command line. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion destroy --yes\n")),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"AWS",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kusion destroy wordpress with aws rds",src:n(7589).Z,width:"2184",height:"730"}))),(0,o.kt)(i.Z,{value:"Alicloud",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kusion destroy wordpress with alicloud rds",src:n(5775).Z,width:"1462",height:"776"})))),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"This tutorial demonstrates how to use KusionStack to deploy a WordPress application that depends on both Kubernetes and RDS resources. During the process of writing and applying WordPress config codes, we can see that with the combination of KCL configuration and policy language, Catalog models library, and Kusion execution engine, KusionStack has the advantages listed below: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hybrid resource orchestration"),": using KCL to write application config codes make it easy to orchestrate and manage different types of resources in a unified way. In the example of delivering a WordPress application with both Kubernetes and IaaS resources provided by cloud vendors, all the necessary dependencies can be declared in a single KCL code file, enabling the one-click deployment of the entire application and achieving application-centric operations. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Application schema abstraction"),": using KCL\u2019s advanced features such as built-in variables, functions, and schema definition can easily abstract and encapsulate the dependent resources of the application, shielding developers from configuration attributes they don\u2019t need to be aware of. The developer only needs to fill in a few necessary fields in the frontend model instance to declare the required resources, which makes it possible to organize application configuration more flexibly and efficiently. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Multi-team and multi-role collaboration"),": under the cooperation of defining models in the model repository and writing configurations, Developers and Platforms from different teams can perform their roles, only focusing on their own respective configuration items, thereby improving the collaboration efficiency of application development and operation. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Shift left compliance check"),": using KCL to write application config codes naturally has the ability to perform type checking on configuration items. Additionally, keywords like ",(0,o.kt)("inlineCode",{parentName:"p"},"assert")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"check")," can be used to implement configuration validation logic, making it more convenient to identify potential issues during the writing of application config codes and reducing the risk of delivering the application with the wrong configuration. Furthermore, Kusion can provide the 3-way real-time diff before the application is applied, allowing users to preview the configuration changes and thus providing a safer workflow."))))}m.isMDXComponent=!0},4811:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/alicloud-rds-instance-88d560e7fdab77f7d83592ae1ded6866.png"},7103:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-wordpress-application-with-aws-rds-580915491e85e04d050cf19bbf0f96cd.png"},263:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-wordpress-application-b757aedd0d5513207e0bd65019d7a4c2.png"},4838:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-iam-account-2216105e7fa18fb2f7bf4be7e19f98bd.png"},6915:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-rds-instance-detail-e0f1e737f54491f738769b152de96806.png"},8678:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws-rds-instance-12f87b94fbc4a76319d8d9d39fd465d2.png"},8814:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/init-wordpress-eb503124b9450c0f8a17ddd6a0eb9574.gif"},2720:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-3-way-diff-ff45398773a72f78989553ff8383720a.png"},7589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-destroy-wordpress-with-aws-rds-304a7051e2646ad78490fb641fe5a776.png"},5775:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kusion-destroy-wordpress-917a4bf29dfb33b39f8b306df03d9f6a.png"},3725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/set-rds-access-9347ae09377aeb94d9f6d1e5d8688ab5.png"},6535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-port-forward-2a83514580f7cf81d890841495f9441e.png"},5773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress-site-page-ef650e640399209d1eec5e6dfe88c454.png"}}]);