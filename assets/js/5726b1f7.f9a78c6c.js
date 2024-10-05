"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={},i="Platform Engineer Develop Guide",s={unversionedId:"concepts/module/develop-guide",id:"concepts/module/develop-guide",title:"Platform Engineer Develop Guide",description:"Prerequisites",source:"@site/docs/kusion/3-concepts/3-module/2-develop-guide.md",sourceDirName:"3-concepts/3-module",slug:"/concepts/module/develop-guide",permalink:"/docs/next/concepts/module/develop-guide",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/3-module/2-develop-guide.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"Oct 5, 2024",sidebarPosition:2,frontMatter:{},sidebar:"kusion",previous:{title:"Overview",permalink:"/docs/next/concepts/module/overview"},next:{title:"Application Developer User Guide",permalink:"/docs/next/concepts/module/app-dev-guide"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Set up a developing environment",id:"set-up-a-developing-environment",level:2},{value:"Developing",id:"developing",level:2},{value:"Workload",id:"workload",level:3},{value:"Implicit Resource Dependency",id:"implicit-resource-dependency",level:3},{value:"Publish",id:"publish",level:2},{value:"Register to the workspace",id:"register-to-the-workspace",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"platform-engineer-develop-guide"},"Platform Engineer Develop Guide"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To follow this guide, you will need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go 1.22 or higher installed and configured"),(0,o.kt)("li",{parentName:"ul"},"Kusion v0.12 or higher installed locally")),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("p",null,"As a platform engineer, the workflow of developing a Kusion module looks like this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Communicate with app developers and identify the fields that should exposed to them in the dev-orient schema"),(0,o.kt)("li",{parentName:"ol"},"Identify module input parameters that should be configured by platform engineers in the ",(0,o.kt)("a",{parentName:"li",href:"../workspace"},"workspace")),(0,o.kt)("li",{parentName:"ol"},"Define the app dev-orient schema"),(0,o.kt)("li",{parentName:"ol"},"Develop the module by implementing gRPC interfaces")),(0,o.kt)("p",null,"The first two steps primarily involve communication with the application development team, and the specific details are not included in this tutorial. This tutorial begins with the subsequent two steps."),(0,o.kt)("h2",{id:"set-up-a-developing-environment"},"Set up a developing environment"),(0,o.kt)("p",null,"Developing a Kusion module includes defining a KCL schema and developing a module binary in golang. We will provide a scaffold repository and a new command ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion mod init")," to help developers set up the developing environment easily."),(0,o.kt)("p",null,"After executing the command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion mod init <your-module-name>\n")),(0,o.kt)("p",null,"Kusion will download a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion-module-scaffolding"},"scaffold repository")," and rename this project with your module name. The scaffold contains code templates and all files needed for developing a Kusion module."),(0,o.kt)("h2",{id:"developing"},"Developing"),(0,o.kt)("p",null,"The scaffold repository directory structure is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree kawesome/\n.\n\u251c\u2500\u2500 example\n\u2502\xa0\xa0 \u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 example_workspace.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 project.yaml\n\u251c\u2500\u2500 kawesome.k\n\u251c\u2500\u2500 kcl.mod\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 Makefile\n    \u251c\u2500\u2500 go.mod\n    \u251c\u2500\u2500 go.sum\n    \u251c\u2500\u2500 kawesome_generator.go\n    \u2514\u2500\u2500 kawesome_generator_test.go\n")),(0,o.kt)("p",null,"When developing a Kusion module with the scaffold repository, you could follow the steps below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Define the module name and version")," "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For go files. Rename the module name in the ",(0,o.kt)("inlineCode",{parentName:"li"},"go.mod")," and related files to your Kusion module name.")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"}," module kawsome\n go 1.22\n require (\n     ...\n )\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For KCL files. Rename package name and version in the ",(0,o.kt)("inlineCode",{parentName:"li"},"kcl.mod"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-toml"},' [package]\n name = "kawesome"\n version = 0.2.0\n')),(0,o.kt)("p",{parentName:"li"}," We assume the module named is ",(0,o.kt)("inlineCode",{parentName:"p"},"kawesome")," and the version is ",(0,o.kt)("inlineCode",{parentName:"p"},"0.2.0")," in this guide.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Define the dev-orient schemas"),". They would be initialized by app developers. In this scaffold repository, we've defined a schema named Kawesome in ",(0,o.kt)("inlineCode",{parentName:"p"},"kawesome.k")," that consists of two resources ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"RandomPassword")," and they will be generated into a Kubernetes Service and a Terraform RandomPassword later."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'schema Kawesome: \n""" Kawesome is a sample module schema consisting of Service\nand RandomPassword\n\nAttributes\n----------\nservice: Service, default is Undefined, required. \n    The exposed port of Workload, which will be generated into Kubernetes Service. \nrandomPassword: RandomPassword, default is Undefined, required. \n    The sensitive random string, which will be generated into Terraform random_password. \n\nExamples\n--------\nimport kawesome as ks\n\n... ...\n\naccessories: {\n    "kawesome": kawesome.Kawesome {\n        service: kawesome.Service{\n            port: 5678\n        }\n        randomPassword: kawesome.RandomPassword {\n            length: 20\n        }\n    }\n}\n"""\n\n# The exposed port of Workload, which will be generated into Kubernetes Service. \nservice:                    Service\n\n# The sensitive random string, which will be generated into Terraform random_password. \nrandomPassword:             RandomPassword\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Implement the ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/KusionStack/kusion/blob/main/pkg/modules/proto/module.proto"},"gRPC proto")," generate interface.")," The ",(0,o.kt)("inlineCode",{parentName:"li"},"generate")," interface consumes the application developer's config described in the ",(0,o.kt)("a",{parentName:"li",href:"../app-configuration"},(0,o.kt)("inlineCode",{parentName:"a"},"AppConfiguration"))," and the platform engineer's config described in the ",(0,o.kt)("a",{parentName:"li",href:"../workspace"},(0,o.kt)("inlineCode",{parentName:"a"},"workspace"))," to generate all infrastructure resources represented by this module.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func (k *Kawesome) Generate(_ context.Context, request *module.GeneratorRequest) (*module.GeneratorResponse, error) {\n    // generate your infrastructure resoruces\n}\n\n// Patcher primarily contains patches for fields associated with Workloads, and additionally offers the capability to patch other resources.\ntype Patcher struct {\n    // Environments represent the environment variables patched to all containers in the workload.\n    Environments []v1.EnvVar `json:"environments,omitempty" yaml:"environments,omitempty"`\n    // Labels represent the labels patched to the workload.\n    Labels map[string]string `json:"labels,omitempty" yaml:"labels,omitempty"`\n    // PodLabels represent the labels patched to the pods.\n    PodLabels map[string]string `json:"podLabels,omitempty" yaml:"podLabels,omitempty"`\n    // Annotations represent the annotations patched to the workload.\n    Annotations map[string]string `json:"annotations,omitempty" yaml:"annotations,omitempty"`\n    // PodAnnotations represent the annotations patched to the pods.\n    PodAnnotations map[string]string `json:"podAnnotations,omitempty" yaml:"podAnnotations,omitempty"`\n    // JSONPatchers represents patchers that can be patched to an arbitrary resource.\n    // The key of this map represents the ResourceId of the resource to be patched.\n    JSONPatchers map[string]JSONPatcher `json:"jsonPatcher,omitempty" yaml:"jsonPatcher,omitempty"`\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GeneratorRequest")," contains the application developer's config, platform engineer's config, workload config and related metadata a module could need to generate infrastructure resources.\nIn the ",(0,o.kt)("inlineCode",{parentName:"p"},"GeneratorResponse"),", there are two fields, ",(0,o.kt)("inlineCode",{parentName:"p"},"Resources")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Patchers"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Resource")," represents resources that should operated by Kusion and they will be appended into the ",(0,o.kt)("a",{parentName:"p",href:"../spec"},"Spec"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Patchers")," are used to patch the workload and other resources."),(0,o.kt)("h3",{id:"workload"},"Workload"),(0,o.kt)("p",null,"Workload in the AppConfiguration is also a Kusion module. If the workload module only generates one resource, this resource will be regarded as the workload resource. However, if the workload module generates more than one resource, one and only one of them must contain a key-value pair in the 'extension' field, where the key is 'kusion.io/is-workload' and the value is 'true' and this resource will be regarded as the workload resource."),(0,o.kt)("h3",{id:"implicit-resource-dependency"},"Implicit Resource Dependency"),(0,o.kt)("p",null,"When you need to use an attribute of another resource as the value of a specific resource attribute, Kusion supports declaring the implicit resource dependencies with the ",(0,o.kt)("inlineCode",{parentName:"p"},"$kusion_path")," prefix. You can concatenate the implicit resource dependency path with the resource ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),", attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"$kusion_path")," prefix, for example: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Dependency path as an attribute value. \nspec: \n    resources: \n        - id: v1:Service:test-ns:test-service\n          type: Kubernetes\n          attributes: \n            metadata: \n                annotations: \n                    deployment-name: $kusion_path.v1:Deployment:test-ns:test-deployment.metadata.name\n")),(0,o.kt)("p",null,"In addition, please note that: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The implicit resource dependency path can only be used to replace the value in ",(0,o.kt)("inlineCode",{parentName:"li"},"Attributes")," field of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Resource"),", but not the key. For example, the following ",(0,o.kt)("inlineCode",{parentName:"li"},"Spec")," is ",(0,o.kt)("strong",{parentName:"li"},"invalid"),": ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Dependency path not in `attributes`. \nspec:\n    resources: \n        - id: v1:Service:test:$kusion_path.apps/v1:Deployment:test-ns:test-deployment.metadata.name\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Dependency path in the key, but not in the value. \nspec:\n    resources: \n        - id: apps/v1:Deployment:test-ns:test-deployment\n          type: Kubernetes\n          attributes: \n            metadata:\n                annotations: \n                    $kusion_path.v1:Service:test-ns:test-service.metadata.name: test-svc\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The implicit resource dependency path can only be used as a standalone value and cannot be combined with other string. For example, the following ",(0,o.kt)("inlineCode",{parentName:"li"},"Spec")," is ",(0,o.kt)("strong",{parentName:"li"},"invalid"),": ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Dependency path combined with other string. \nspec:\n    resources: \n        - id: apps/v1:Deployment:test-ns:test-deployment\n          type: Kubernetes\n          attributes: \n            metadata:\n                annotations: \n                    test-svc: $kusion_path.v1:Service:test-ns:test-service.metadata.name + "-test"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The impliciy resource dependency path does not support accessing the value in an array, so the following is currently ",(0,o.kt)("strong",{parentName:"li"},"invalid"),": ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Dependency path accessing the value in an array. \nspec:\n    resources: \n        - id: apps/v1:Deployment:test-ns:test-deployment\n          type: Kubernetes\n          attributes: \n            metadata:\n                annotations: \n                    test-svc: $kusion_path.v1:Service:test-ns:test-service.spec.ports[0].name\n")),(0,o.kt)("h2",{id:"publish"},"Publish"),(0,o.kt)("p",null,"Publish the Kusion module to an OCI registry with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion mod push"),". If your module is open to the public, we ",(0,o.kt)("strong",{parentName:"p"},"welcome and highly encourage")," you to contribute it to the module registry ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"catalog"),", so that more people can benefit from the module. Submit a pull request to this repository, once it is merged, it will be published to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/KusionStack/packages"},"KusionStack GitHub container registry"),"."),(0,o.kt)("p",null,"Publish a stable version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion mod push /path/to/my-module oci://<domain>/<org> --creds <YOUR_TOKEN>\n")),(0,o.kt)("p",null,"Publish a module of a specific OS arch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion mod push /path/to/my-module oci://<domain>/<org> --os-arch==darwin/arm64 --creds <YOUR_TOKEN>\n")),(0,o.kt)("p",null,"Publish a pre-release version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kusion mod push /path/to/my-module oci://<domain>/<org> --latest=false --creds <YOUR_TOKEN>\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The OCI URL format is ",(0,o.kt)("inlineCode",{parentName:"p"},"oci://<domain>/<org>")," and please ensure that your token has permissions to write to the registry.")),(0,o.kt)("p",null,"More details can be found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion mod push")," reference doc."),(0,o.kt)("h2",{id:"register-to-the-workspace"},"Register to the workspace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"modules: \n  kawesome: \n    path: oci://ghcr.io/kusionstack/kawesome\n    version: 0.2.0\n    configs: \n      default: \n        service: \n          labels: \n            kusionstack.io/module-name: kawesome\n          annotations: \n            kusionstack.io/module-version: 0.2.0\n")),(0,o.kt)("p",null,"Register module platform configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace.yaml")," to standardize the module's behavior. App developers can list all available modules registered in the workspace."))}m.isMDXComponent=!0}}]);