"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7659],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},63700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o={title:"Co-configuration with config operations",linkTitle:"Co-configuration with config operations",type:"docs",weight:2,description:"Co-configuration with config operations",sidebar_position:3},r=void 0,l={unversionedId:"reference/lang/lang/codelab/collaborative",id:"reference/lang/lang/codelab/collaborative",title:"Co-configuration with config operations",description:"Co-configuration with config operations",source:"@site/docs/reference/lang/lang/codelab/collaborative.md",sourceDirName:"reference/lang/lang/codelab",slug:"/reference/lang/lang/codelab/collaborative",permalink:"/docs/reference/lang/lang/codelab/collaborative",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/lang/codelab/collaborative.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1678779307,formattedLastUpdatedAt:"3/14/2023",sidebarPosition:3,frontMatter:{title:"Co-configuration with config operations",linkTitle:"Co-configuration with config operations",type:"docs",weight:2,description:"Co-configuration with config operations",sidebar_position:3},sidebar:"reference",previous:{title:"Write complex config using KCL Schema",permalink:"/docs/reference/lang/lang/codelab/schema"},next:{title:"KCL Spec",permalink:"/docs/reference/lang/lang/spec/"}},p={},s=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"What We Will Learn",id:"what-we-will-learn",level:3},{value:"2. Define Schemas and Organize Project Directories",id:"2-define-schemas-and-organize-project-directories",level:2},{value:"Schema Definitions",id:"schema-definitions",level:3},{value:"Project Directories",id:"project-directories",level:3},{value:"3. Create multiple environment configurations via the KCL config operation features",id:"3-create-multiple-environment-configurations-via-the-kcl-config-operation-features",level:2},{value:"Create a baseline configuration",id:"create-a-baseline-configuration",level:3},{value:"Create multiple environment configurations",id:"create-multiple-environment-configurations",level:3},{value:"4. Configure compiling parameters and tests",id:"4-configure-compiling-parameters-and-tests",level:2},{value:"5. The Final Step",id:"5-the-final-step",level:2}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,i.kt)("p",null,"Kusion Configuration Language (KCL) is a simple and easy-to-use configuration language, where users can simply write the reusable configuration code."),(0,i.kt)("p",null,"In this codelab, we will learn how to write the config in a collaborative way using the KCL config operation features."),(0,i.kt)("h3",{id:"what-we-will-learn"},"What We Will Learn"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define schemas and organize project directories."),(0,i.kt)("li",{parentName:"ol"},"Create multiple environment configurations via the KCL config operation features."),(0,i.kt)("li",{parentName:"ol"},"Configure compiling parameters and tests.")),(0,i.kt)("h2",{id:"2-define-schemas-and-organize-project-directories"},"2. Define Schemas and Organize Project Directories"),(0,i.kt)("h3",{id:"schema-definitions"},"Schema Definitions"),(0,i.kt)("p",null,"Suppose we want to define a server configuration with certain attributes, we can create a simple config by creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"server.k"),", we can fill in the following code as below which defines a reusable schema of the configuration of a server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import units\n\ntype Unit = units.NumberMultiplier\n\nschema Server:\n    replicas: int = 1\n    image: str\n    resource: Resource = {}\n    mainContainer: Main = {}\n    labels?: {str:str}\n    annotations?: {str:str}\n\nschema Main:\n    name: str = "main"\n    command?: [str]\n    args?: [str]\n    ports?: [Port]\n\nschema Resource:\n    cpu?: int = 1\n    memory?: Unit = 1024Mi\n    disk?: Unit = 10Gi\n\nschema Port:\n    name?: str\n    protocol: "HTTP" | "TCP"\n    port: 80 | 443\n    targetPort: int\n\n    check:\n        targetPort > 1024, "targetPort must be larger than 1024"\n')),(0,i.kt)("p",null,"In the code above, we define a schema named ",(0,i.kt)("inlineCode",{parentName:"p"},"Server"),", which represents the configuration type that the user will write, which contains some basic type attributes (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),", etc) and some composite type attributes (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"main"),", etc). In addition to some basic types mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/lang/lang/codelab/schema"},"schema codelab"),", we can see two types in the above code ",(0,i.kt)("inlineCode",{parentName:"p"},"Unit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"units.NumberMultiplier"),". Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"units.NumberMultiplier")," denotes the KCL number unit type, which means that a natural unit or binary unit can be added after the KCL number, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"1K")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"1000"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1Ki")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"1024"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Unit")," is the type alias of ",(0,i.kt)("inlineCode",{parentName:"p"},"units.NumberMultiplier"),", which is used to simplify the writing of type annotations."),(0,i.kt)("h3",{id:"project-directories"},"Project Directories"),(0,i.kt)("p",null,"In order to complete the collaborative configuration development, we first need a configuration project, which contains the configuration of the test application and the differential configuration of different environments, so we are creating the following project directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 appops\n\u2502   \u2514\u2500\u2500 test_app\n\u2502       \u251c\u2500\u2500 base\n\u2502       \u2502   \u2514\u2500\u2500 base.k\n\u2502       \u251c\u2500\u2500 dev\n\u2502       \u2502   \u251c\u2500\u2500 ci-test\n\u2502       \u2502   \u2502   \u2514\u2500\u2500 stdout.golden.yaml\n\u2502       \u2502   \u251c\u2500\u2500 kcl.yaml\n\u2502       \u2502   \u2514\u2500\u2500 main.k\n\u2502       \u2514\u2500\u2500 prod\n\u2502           \u251c\u2500\u2500 ci-test\n\u2502           \u2502   \u2514\u2500\u2500 stdout.golden.yaml\n\u2502           \u251c\u2500\u2500 kcl.yaml\n\u2502           \u2514\u2500\u2500 main.k\n\u251c\u2500\u2500 kcl.mod\n\u2514\u2500\u2500 pkg\n    \u2514\u2500\u2500 sever.k\n")),(0,i.kt)("p",null,"The directory of the project mainly contains three parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kcl.mod"),": The file used to identify the root directory of the KCL project."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pkg"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Server")," Schema structure reused by different application configurations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"appops"),": Server configurations of different applications, currently only one application ",(0,i.kt)("inlineCode",{parentName:"li"},"test_app")," is placed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"base"),": Application common configurations for all environments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dev"),": Application configuration for the development environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prod"),": Application configuration for the production environment.")))),(0,i.kt)("p",null,"The meaning of ",(0,i.kt)("inlineCode",{parentName:"p"},"base.k"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ci-test/stdout.golden.yaml")," will be mentioned in subsequent sections."),(0,i.kt)("h2",{id:"3-create-multiple-environment-configurations-via-the-kcl-config-operation-features"},"3. Create multiple environment configurations via the KCL config operation features"),(0,i.kt)("h3",{id:"create-a-baseline-configuration"},"Create a baseline configuration"),(0,i.kt)("p",null,"After we have organized the project directory and the basic server configuration model, we can write the configuration of the user application. We can create our own test application folder ",(0,i.kt)("inlineCode",{parentName:"p"},"test_app")," and place it in the application configuration folder ",(0,i.kt)("inlineCode",{parentName:"p"},"appops"),"."),(0,i.kt)("p",null,"For the configuration of an application, we often divide it into a basic configuration and the differential configuration of multiple environments and merge them. Through the configuration merging feature of KCL, we can easily do this. Assuming that we have two configurations of development environment and production environment, we can create three folders: ",(0,i.kt)("inlineCode",{parentName:"p"},"base"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"prod")," to store baseline, development environment and production environment configurations respectively. First, we write the configuration of ",(0,i.kt)("inlineCode",{parentName:"p"},"base/base.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # Set the image with the value "nginx:1.14.2"\n    image = "nginx:1.14.2"\n    # Add a label app into labels\n    labels.app = "test_app"\n    # Add a mainContainer config, and its ports are [{protocol = "HTTP", port = 80, targetPort = 1100}]\n    mainContainer.ports = [{\n        protocol = "HTTP"\n        port = 80\n        targetPort = 1100\n    }]\n}\n')),(0,i.kt)("p",null,"As in the above code, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," keyword in ",(0,i.kt)("inlineCode",{parentName:"p"},"base.k")," to import the ",(0,i.kt)("inlineCode",{parentName:"p"},"Server")," schema placed under ",(0,i.kt)("inlineCode",{parentName:"p"},"pkg")," and use it to instantiate a configuration named ",(0,i.kt)("inlineCode",{parentName:"p"},"server"),", in which we set ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," attribute  to ",(0,i.kt)("inlineCode",{parentName:"p"},'"nginx:1.14.2"'),", and a label ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," with the value ",(0,i.kt)("inlineCode",{parentName:"p"},"test_app")," is added. In addition, we also added the configuration of the main container ",(0,i.kt)("inlineCode",{parentName:"p"},"mainContainer")," with the value ",(0,i.kt)("inlineCode",{parentName:"p"},'[{protocol = "HTTP", port = 80, targetPort = 1100}]')," for the ports attribute."),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl appops/test_app/base/base.k\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n    - protocol: HTTP\n      port: 80\n      targetPort: 1100\n  labels:\n    app: test_app\n")),(0,i.kt)("p",null,"At this point, we have a baseline configuration."),(0,i.kt)("h3",{id:"create-multiple-environment-configurations"},"Create multiple environment configurations"),(0,i.kt)("p",null,"Next we configure a differentiated multi-environment configuration. First assume that we want to use a temporary image of our own ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx:1.14.2-dev")," in the development environment, and then use it to override the server configuration in the baseline, we can write the following configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # Override the image declared in the base\n    image = "nginx:1.14.2-dev"\n}\n')),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl appops/test_app/base/base.k appops/test_app/dev/main.k\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2-dev\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n    - protocol: HTTP\n      port: 80\n      targetPort: 1100\n  labels:\n    app: test_app\n")),(0,i.kt)("p",null,"It can be seen that the ",(0,i.kt)("inlineCode",{parentName:"p"},"image")," field of the output YAML is overwritten to ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx:1.14.2-dev"),". Suppose we also want to add a label to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," environment with a key of ",(0,i.kt)("inlineCode",{parentName:"p"},"env")," and a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"dev"),", we add the following code to ",(0,i.kt)("inlineCode",{parentName:"p"},"dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # Override the image declared in the base\n    image = "nginx:1.14.2-dev"\n    # Union a new label env into base labels\n    labels.env = "dev"\n}\n')),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl appops/test_app/base/base.k appops/test_app/dev/main.k\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2-dev\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n    - protocol: HTTP\n      port: 80\n      targetPort: 1100\n  labels:\n    app: test_app\n    env: dev\n")),(0,i.kt)("p",null,"It can be seen that there are two labels in the ",(0,i.kt)("inlineCode",{parentName:"p"},"labels")," field of the output YAML."),(0,i.kt)("p",null,"In addition, we can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"+=")," operator to add new values to list type attributes, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"mainContainer.ports")," configuration in the baseline environment, continue to modify the code in ",(0,i.kt)("inlineCode",{parentName:"p"},"dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # Override the base image.\n    image = "nginx:1.14.2-dev"\n    # Union a new label env into base labels.\n    labels.env = "dev"\n    # Append a port into base ports.\n    mainContainer.ports += [{\n        protocol = "TCP"\n        port = 443\n        targetPort = 1100\n    }]\n}\n')),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl appops/test_app/base/base.k appops/test_app/dev/main.k\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2-dev\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n    - protocol: HTTP\n      port: 80\n      targetPort: 1100\n    - protocol: TCP\n      port: 443\n      targetPort: 1100\n  labels:\n    app: test_app\n    env: dev\n")),(0,i.kt)("p",null,"Using the same method, we can build the production configuration, write the code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev/main.k")," file, and add a label to it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pkg\n\nserver: pkg.Server {\n    # Union a new label env into base labels\n    labels.env = "prod"\n}\n')),(0,i.kt)("p",null,"KCL command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kcl appops/test_app/base/base.k appops/test_app/prod/main.k\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  replicas: 1\n  image: nginx:1.14.2\n  resource:\n    cpu: 1\n    memory: 1073741824\n    disk: 10737418240\n  mainContainer:\n    name: main\n    ports:\n    - protocol: HTTP\n      port: 80\n      targetPort: 1100\n  labels:\n    app: test_app\n    env: prod\n")),(0,i.kt)("h2",{id:"4-configure-compiling-parameters-and-tests"},"4. Configure compiling parameters and tests"),(0,i.kt)("p",null,"In the previous section, we built a multi-environment configuration through code. It can be seen that the KCL command line compilation parameters of different environments are similar, so we can configure these compilation parameters into a file and input them to the KCL command line for invocation. Configure the following code in ",(0,i.kt)("inlineCode",{parentName:"p"},"dev/kcl.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kcl_cli_configs:\n  files:\n    - ../base/base.k\n    - main.k\n  output: ./ci-test/stdout.golden.yaml\n")),(0,i.kt)("p",null,"Then we can compile the configuration in the development environment with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd appops/test_app/dev && kcl -Y ./kcl.yaml\n")),(0,i.kt)("p",null,"In addition, we have configured the ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"dev/kcl.yaml")," to output YAML to a file for subsequent configuration distribution or testing. You can verify that the application's configuration is as expected by walking through the ",(0,i.kt)("inlineCode",{parentName:"p"},"kcl.yaml")," builds in each environment and comparing with ",(0,i.kt)("inlineCode",{parentName:"p"},"./ci-test/stdout.golden.yaml"),"."),(0,i.kt)("h2",{id:"5-the-final-step"},"5. The Final Step"),(0,i.kt)("p",null,"Congratulations!"),(0,i.kt)("p",null,"We have completed the third lesson about KCL."))}m.isMDXComponent=!0}}]);