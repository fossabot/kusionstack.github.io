"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43438],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=o,h=u["".concat(l,".").concat(k)]||u[k]||d[k]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15012:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={id:"workspace",sidebar_label:"Workspace"},i="Workspace",s={unversionedId:"concepts/workspace",id:"concepts/workspace",title:"Workspace",description:"Workspace is a logical concept that maps to an actual target environment to deploy a stack to. In today's context, this usually represents a Kubernetes cluster for the application workload and an optional cloud account to provision infrastructure resources that the workload depends on (A database, for example). Aside from the deployment destination, workspaces are also designed to be associated with a series of platform configurations that are used by all the stacks deployed to said workspace.",source:"@site/docs/kusion/3-concepts/4-workspace.md",sourceDirName:"3-concepts",slug:"/concepts/workspace",permalink:"/docs/next/concepts/workspace",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/4-workspace.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1719481502,formattedLastUpdatedAt:"Jun 27, 2024",sidebarPosition:4,frontMatter:{id:"workspace",sidebar_label:"Workspace"},sidebar:"kusion",previous:{title:"Application Developer User Guide",permalink:"/docs/next/concepts/kusion-module/app-dev-guide"},next:{title:"AppConfiguration",permalink:"/docs/next/concepts/app-configuration"}},l={},p=[{value:"Workspace Configuration",id:"workspace-configuration",level:2},{value:"modules",id:"modules",level:3},{value:"Managing Workspace",id:"managing-workspace",level:2},{value:"Creating Workspace",id:"creating-workspace",level:3},{value:"Listing Workspace",id:"listing-workspace",level:3},{value:"Switching Workspace",id:"switching-workspace",level:3},{value:"Showing Workspace",id:"showing-workspace",level:3},{value:"Updating Workspace",id:"updating-workspace",level:3},{value:"Deleting Workspace",id:"deleting-workspace",level:3},{value:"Using Workspace",id:"using-workspace",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workspace"},"Workspace"),(0,o.kt)("p",null,"Workspace is a logical concept that maps to an actual target environment to deploy a stack to. In today's context, this ",(0,o.kt)("em",{parentName:"p"},"usually")," represents a Kubernetes cluster for the application workload and an optional cloud account to provision infrastructure resources that the workload depends on (A database, for example). Aside from the deployment destination, workspaces are also designed to be associated with a series of platform configurations that are used by all the stacks deployed to said workspace."),(0,o.kt)("p",null,"When executing the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion generate"),', Kusion will "match" the AppConfiguration and the approriate workspace configuration to dynamically generate the ',(0,o.kt)("inlineCode",{parentName:"p"},"Spec"),", which contains the complete manifest to describe the resources in the stack. The relationship of the Project, Stack and Workspace is shown as below. Notice that all three ways to organize stacks are valid."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project-stack-workspace",src:a(3682).Z,width:"1572",height:"1006"})),(0,o.kt)("p",null,'Workspace is designed to address separation of concerns. As opposed to the development-time concept of a "stack", a workspace is a deploy-time concept that represents a deployment target, a.k.a an actual runtime environment. Workspaces should be entirely managed by Platform Engineers to alleviate the burden on developers to understand environment-specific details.'),(0,o.kt)("p",null,"To dig a little deeper, a workspace represents the need for a distinct set of \"platform opinions\". That includes things that application developer either don't want to or shouldn't need to worry about, such as which Kubernetes cluster to deploy to, the credentials to deploy to said clusters, and other infrastructure details like what database instance to provision."),(0,o.kt)("p",null,"Workspace is intended to be flexible so you can map them as your see fit to the boundaries that are relevant to your use case. For example, you can map a workspace to a cloud region (aws-us-east-1), provided that regional isolation is sufficient for you (this is an extreme case). Alternatively, a workspace can be map to the combination of a cloud region and an SDLC phase (aws-dev-us-east-1), provided that it represents the right boundary from a platform perspective."),(0,o.kt)("p",null,"The workspace configuration is in a deterministic format and currently written in YAML. The subcommands of ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion workspace")," are provided to manage the workspaces. When using ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion workspace"),", the workspace configuration will be saved as YAML file in local file system. To avoid the possible risks, the environment variables are provided to hold the sensitive data such as Access Keys and Secret keys."),(0,o.kt)("h2",{id:"workspace-configuration"},"Workspace Configuration"),(0,o.kt)("p",null,"The configuration of a Workspace is stored in a single YAML file, which consists of ",(0,o.kt)("inlineCode",{parentName:"p"},"modules"),". An example of Workspace configuration is shown as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# The platform configuration for Modules or KAMs.\n# For each Module or KAM, the configuration format is as below. \n# # ${module_identifier} or ${KAM_name}:\n# #   path: oci://ghcr.io/kusionstack/module-name # url of the module artifact\n# #   version: 0.2.0 # version of the module\n# #   configs: \n# #     default: # default configuration, applied to all projects\n# #       ${field1}: ${value1}\n# #       #{field2}: ${value2}\n# #       ...\n# #     ${patcher_name}: #patcher configuration, applied to the projects assigned in projectSelector\n# #       ${field1}: ${value1_override}\n# #       ...\n# #       projectSelector:\n# #       - ${project1_name}\n# #       - ${project2_name}\n# #       ...\nmodules:\n   mysql: \n    path: oci://ghcr.io/kusionstack/mysql\n    version: 0.2.0\n    configs:\n      default:\n         cloud: alicloud\n         size: 20\n         instanceType: mysql.n2.serverless.1c\n         category: serverless_basic\n         privateRouting: false\n         subnetID: ${mysql_subnet_id}\n         databaseName: kusion\n      largeSize:\n        size: 50\n        projectSelector:\n        - foo\n        - bar\n")),(0,o.kt)("h3",{id:"modules"},"modules"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"modules")," are the platform-part configurations of Modules and KAMs, where the identifier of them are ",(0,o.kt)("inlineCode",{parentName:"p"},"${namespace}/${module_name}@${module_tag}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"${kam_name}"),". For each Module or KAM configuration, it is composed of a ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," and several ",(0,o.kt)("inlineCode",{parentName:"p"},"patcher")," blocks. The ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," block contains the universal configuration of the Workspace, and can be applied to all Stacks in the Workspace, which is composed of the values of the Module's or KAM's fields. The ",(0,o.kt)("inlineCode",{parentName:"p"},"patcher")," block contains the exclusive configuration for certain Stacks, which includes not only the fields' values, but also the applied Projects."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"patcher")," block is designed to increase the flexibility for platform engineers managing Workspaces. Cause the Workspace should map to the real physical environment, in the actual production practice, it's almost impossible that all the Stacks share the same platform configuration, although we want them the same. "),(0,o.kt)("p",null,"The values of the same fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"patcher")," will override the ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),", and one field in multiple patchers is forbidden to assign to the same Project. That is, if there are more than one ",(0,o.kt)("inlineCode",{parentName:"p"},"patcher")," declaring the same field with different values, the applied Projects are prohibited to overlap. And, The name of ",(0,o.kt)("inlineCode",{parentName:"p"},"patcher")," must not be ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"patcher"),", the applied Projects are assigned by the field ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectSelector"),", which is an array of the Project names. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectSelector")," is provided rather than something may like ",(0,o.kt)("inlineCode",{parentName:"p"},"StackSelector"),', which specifies the applied Stacks. Here are the reasons. Explaining from the perspective of using Workspace, the mapping of Workspace and Stack is specified by the Kusion operation commands\' users. While explaining from the perspective of the relationship among Project, Stack and Workspace, Workspace is designed for the reuse of platform-level configuration among multiple Projects. When a Project "encounters" a Workspace, it becomes a "Stack instance", which can be applied to a series of real resources. If using something like ',(0,o.kt)("inlineCode",{parentName:"p"},"StackSelector"),", the reuse would not get realized, and Workspace would also lose its relevance. For more information of the relationship, please refer to ",(0,o.kt)("a",{parentName:"p",href:"project/overview"},"Project")," and ",(0,o.kt)("a",{parentName:"p",href:"stack/overview"},"Stack"),". "),(0,o.kt)("p",null,"Different Module and KAM has different name, fields, and corresponding format and restrictions. When writing the configuration, check the corresponding Module's or KAM's description, and make sure all the requisite Modules and KAMs have correctly configured. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"kusion-module/overview"},"Kuiosn Module")," and find more information. The example above gives a sample of the Module ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql"),"."),(0,o.kt)("h2",{id:"managing-workspace"},"Managing Workspace"),(0,o.kt)("p",null,"The subcommands of ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion workspace")," are used to manage Workspaces, including ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"show"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"switch"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),". Cause the Workspace configurations are stored persistently, the current or a specified Backend will be used. For more information of Backend, please refer to ",(0,o.kt)("a",{parentName:"p",href:"backend"},"Backend"),"."),(0,o.kt)("p",null,"Kusion will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," Workspace with empty configuration in every Backend automatically, and set it as the current. When first using Kusion, or no configuration of Workspace, the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," Workspace will be used.  "),(0,o.kt)("h3",{id:"creating-workspace"},"Creating Workspace"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion workspace create ${name} -f ${configuration_file_path}")," to create a new Workspace with the configuration in a YAML file. The Workspace is identified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),", and must be a new one, while the configuration must be written in a YAML file with correct format. "),(0,o.kt)("p",null,"The command above will create the Workspace in current Backend. If to create a Workspace in another backend, please use flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--backend")," to specify. The Workspace names in a Backend must be different, but allow the same in different Backends."),(0,o.kt)("p",null,"In some scenarios, when a Workspace is created, it is expected to be the current. For simplification, the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--current")," is provided to set the Workspace current alongside the creation."),(0,o.kt)("p",null,"Be attention, creating ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," Workspace is not allowed, because it's created by Kusion automatically."),(0,o.kt)("p",null,"The example is shown as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# create a workspace in current backend\nkusion workspace create dev -f dev.yaml\n\n# create a workspace in current backend ans set it as current\nkusion workspace create dev -f dev.yaml --current\n\n# create a workspace in specified backend\nkusion workspace create dev -f dev.yaml --backend oss-pre\n")),(0,o.kt)("p",null,"The Workspaces to create are decided by the platform engineers. We recommend that they are organized by the following rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SDLC phases"),", such as ",(0,o.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pre"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"prod"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cloud vendors"),", such as ",(0,o.kt)("inlineCode",{parentName:"li"},"aws"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"alicloud"),";"),(0,o.kt)("li",{parentName:"ul"},"combination of the two above, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"dev-aws"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"prod-alicloud"),".")),(0,o.kt)("p",null,"In design, Kusion does not support deploying Stack to multiple clouds or regions within a single Workspace. While users can technically define a Module that provisions resources across multiple clouds or regions, Kusion does not recommend this practice, and will not provide technical support for such configuration. If the platform engineers need to manage resources across multiple clouds or regions, they should create separate Workspaces."),(0,o.kt)("h3",{id:"listing-workspace"},"Listing Workspace"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion workspace list")," to get all the workspace names."),(0,o.kt)("p",null,"The example is shown as below. In order to simplify, The following examples will not give using specified backend, which is supported by ",(0,o.kt)("inlineCode",{parentName:"p"},"--backend")," flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# list all the workspace names\nkusion workspace list\n")),(0,o.kt)("h3",{id:"switching-workspace"},"Switching Workspace"),(0,o.kt)("p",null,"In order not to specify the Workspace name for each Kusion operation command, ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion workspace switch ${name}")," is provided to switch the current Workspace. Then when executing ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion generate"),", the current Workspace will be used. The to-switch Workspace must be created."),(0,o.kt)("p",null,"The example is shown as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# switch workspace\nkusion workspace switch dev\n")),(0,o.kt)("h3",{id:"showing-workspace"},"Showing Workspace"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion workspace show ${name}")," to get the Workspace configuration. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is not specified, the configuration of current Workspace will get returned."),(0,o.kt)("p",null,"The example is shown as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# show a specified workspace configuration\nkusion workspace show dev\n\n# show the current workspace configuration\nkusion workspace show\n")),(0,o.kt)("h3",{id:"updating-workspace"},"Updating Workspace"),(0,o.kt)("p",null,"When the Workspace needs to update, use ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion workspace update ${name} -f ${configuration_file_path}")," to update with the new configuration file. The whole updated configuration is asked to provide, and the Workspace must be created. Get the Workspace configuration first, then refresh the configuration and execute the command, which are the recommended steps. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is not specified, the current Workspace will be used."),(0,o.kt)("p",null,"Updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," Workspace is allowed. And the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--current")," is also supported to set it as the current."),(0,o.kt)("p",null,"The example is shown as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# update a specified workspace\nkusion workspace update dev -f dev_new.yaml\n\n# update a specified workspace and set it as current\nkusion workspace update dev -f dev_new.yaml --current\n\n# update the current workspace\nkusion workspace update -f dev_new.yaml\n")),(0,o.kt)("h3",{id:"deleting-workspace"},"Deleting Workspace"),(0,o.kt)("p",null,"When a Workspace is not in use anymore, use ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion workspace delete ${name}")," to delete a Workspace. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," is not specified, the current Workspace will get deleted, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," Workspace will be set as the current Workspace. Therefore, deleting the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," Workspace is not allowed. "),(0,o.kt)("p",null,"The example is shown as below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# delete a specified workspace\nkusion workspace delete dev \n\n# delete the current workspace\nkusion workspace delete\n")),(0,o.kt)("h2",{id:"using-workspace"},"Using Workspace"),(0,o.kt)("p",null,"Workspace is used in the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion generate"),", the following steps help smooth the operation process."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write the Workspace configuration file with the format shown above, and fulfill all the necessary fields;"),(0,o.kt)("li",{parentName:"ol"},"Create the workspace with ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion workspace create"),", then Kusion perceives the Workspace. The flag ",(0,o.kt)("inlineCode",{parentName:"li"},"--current")," can be used to set it as the current."),(0,o.kt)("li",{parentName:"ol"},"Execute ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion generate")," in a Stack to generate the whole Spec, the AppConfiguration and Workspace configuration get rendered automatically, and can be applied to the real infrastructure. If the appointed Workspace or Backend is asked, the flags ",(0,o.kt)("inlineCode",{parentName:"li"},"--workspace")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--backend")," will help achieve that. "),(0,o.kt)("li",{parentName:"ol"},"If the Workspace needs to update, delete, switch, etc. Use the above commands to achieve that.")))}d.isMDXComponent=!0},3682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/project-stack-workspace-565b997b82d65f1f62a943184916c510.png"}}]);