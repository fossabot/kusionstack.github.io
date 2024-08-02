"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},73992:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),o=n(86010),i=n(72957),l=n(76775),s=n(75238),c=n(33609),p=n(92560);function u(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),k(e)}),[c,k,o]),tabValues:o}}var f=n(51048);const v="tabList__CuJ",b="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(u(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},47855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(73992),i=n(18679);const l={id:"expose-service"},s="Expose Application Service Deployed on CSP Kubernetes",c={unversionedId:"user-guides/cloud-resources/expose-service",id:"version-v0.11/user-guides/cloud-resources/expose-service",title:"Expose Application Service Deployed on CSP Kubernetes",description:"Deploying applications on the Kubernetes provided by CSP (Cloud Service Provider) is convenient and reliable, which is adopted by many enterprises. Kusion has a good integration with CSP Kubernetes service. You can deploy your application to the Kubernetes cluster, and expose the service in a quite easy way.",source:"@site/docs_versioned_docs/version-v0.11/5-user-guides/1-cloud-resources/2-expose-service.md",sourceDirName:"5-user-guides/1-cloud-resources",slug:"/user-guides/cloud-resources/expose-service",permalink:"/zh/docs/v0.11/user-guides/cloud-resources/expose-service",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/5-user-guides/1-cloud-resources/2-expose-service.md",tags:[],version:"v0.11",lastUpdatedBy:"cheny-alf",lastUpdatedAt:1722600707,formattedLastUpdatedAt:"2024\u5e748\u67082\u65e5",sidebarPosition:2,frontMatter:{id:"expose-service"},sidebar:"kusion",previous:{title:"Deliver the WordPress Application with Cloud RDS",permalink:"/zh/docs/v0.11/user-guides/cloud-resources/database"},next:{title:"Deploy Application",permalink:"/zh/docs/v0.11/user-guides/working-with-k8s/deploy-application"}},p={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Expose Service Publicly",id:"expose-service-publicly",level:2},{value:"Set up Workspace",id:"set-up-workspace",level:3},{value:"Init Project",id:"init-project",level:3},{value:"Update And Review Configuration Codes",id:"update-and-review-configuration-codes",level:3},{value:"Preview and Apply",id:"preview-and-apply",level:3},{value:"Verify Accessibility",id:"verify-accessibility",level:3},{value:"Expose Service Inside Cluster",id:"expose-service-inside-cluster",level:2},{value:"Summary",id:"summary",level:2}],d={toc:u};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"expose-application-service-deployed-on-csp-kubernetes"},"Expose Application Service Deployed on CSP Kubernetes"),(0,r.kt)("p",null,"Deploying applications on the Kubernetes provided by CSP (Cloud Service Provider) is convenient and reliable, which is adopted by many enterprises. Kusion has a good integration with CSP Kubernetes service. You can deploy your application to the Kubernetes cluster, and expose the service in a quite easy way. "),(0,r.kt)("p",null,"This tutorial demonstrates how to expose service of the application deployed on CSP Kubernetes. And the responsibilities of platform engineers and application developers are also clearly defined. "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Create a Kubernetes cluster provided by CSP, and complete the corresponding configurations for ",(0,r.kt)("inlineCode",{parentName:"p"},"KUBECONFIG"),". The following CSP Kubernetes services are supported: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/eks"},"Amazon Elastic Kubernetes Service (EKS)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/product/kubernetes"},"Alibaba Cloud Container Service for Kubernetes (ACK)"))),(0,r.kt)("h2",{id:"expose-service-publicly"},"Expose Service Publicly"),(0,r.kt)("p",null,"If you want the application to be accessed from outside the cluster, you should expose the service publicly. Follow the steps below, you will simply hit the goal."),(0,r.kt)("h3",{id:"set-up-workspace"},"Set up Workspace"),(0,r.kt)("p",null,"Create the workspace as the target where the application will be deployed to. The workspace is usually set up by ",(0,r.kt)("strong",{parentName:"p"},"Platform Engineers"),", which contains platform-standard and application-agnostic configurations. The workspace configurations are organized through a YAML file."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  kusionstack/network@0.1.0: \n    default: \n      port: \n        type: aws\n"))),(0,r.kt)(i.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  kusionstack/network@0.1.0: \n    default: \n      port: \n        type: alicloud\n        annotations:\n            service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: slb.s1.small\n")))),(0,r.kt)("p",null,"The YAML shown above gives an example of the workspace configuration to expose service on ",(0,r.kt)("strong",{parentName:"p"},"EKS")," and ",(0,r.kt)("strong",{parentName:"p"},"ACK"),". The block ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," contains the workspace configuration of Kusion module ",(0,r.kt)("inlineCode",{parentName:"p"},"network"),", which has the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"type: the CSP providing Kubernetes service, support ",(0,r.kt)("inlineCode",{parentName:"li"},"alicloud")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"aws")),(0,r.kt)("li",{parentName:"ul"},"annotations: annotations attached to the service, should be a map"),(0,r.kt)("li",{parentName:"ul"},"labels: labels attached to the service, should be a map")),(0,r.kt)("p",null,"Then, create the workspace with the configuration file. The following command creates a workspace named ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," with configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kusion workspace create dev -f workspace.yaml\n")),(0,r.kt)("p",null,"After that, we can switch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," workspace with the following cmd: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion workspace switch dev\n")),(0,r.kt)("p",null,"If you already create and use the configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," workspace, you can append the MySQL module configs to your workspace YAML file and use the following command line to update the workspace configuration. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion workspace update dev -f workspace.yaml\n")),(0,r.kt)("p",null,"We can use the following command lines to show the current workspace configurations for ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," workspace. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion workspace show\n")),(0,r.kt)("h3",{id:"init-project"},"Init Project"),(0,r.kt)("p",null,"After creating workspace, you should write application configuration code, which only contains simple and application-centric configurations. This step is usually accomplished by application developers."),(0,r.kt)("p",null,"We can start by initializing this tutorial project with ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion init")," cmd: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create a new directory and navigate into it. \nmkdir nginx && cd nginx\n\n# Initialize the demo project with the name of the current directory. \nkusion init\n")),(0,r.kt)("p",null,"The created project structure looks like below: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tree\n.\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n2 directories, 4 files\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More details about the directory structure can be found in ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/v0.11/concepts/project/overview"},"Project")," and ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/v0.11/concepts/stack/overview"},"Stack"),". ")),(0,r.kt)("h3",{id:"update-and-review-configuration-codes"},"Update And Review Configuration Codes"),(0,r.kt)("p",null,"The initiated configuration codes are for the demo quickstart application, we should replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/kcl.mod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")," with the below codes: "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dev/kcl.mod")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[package]\nname = "nginx"\nversion = "0.1.0"\n\n[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.1.0" }\nnetwork = { oci = "oci://ghcr.io/kusionstack/network", tag = "0.1.0" }\n\n[profile]\nentries = ["main.k"]\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dev/main.k")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.v1.app_configuration as ac\nimport kam.v1.workload as wl\nimport kam.v1.workload.container as c\nimport network as n\n\n# main.k declares customized configurations for dev stacks.\nnginx: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            nginx: c.Container {\n                image: "nginx:1.25.2"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 80\n                    protocol: "TCP"\n                    public: True\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("p",null,"The code shown above describes how to expose service publicly. Kusion use schema ",(0,r.kt)("inlineCode",{parentName:"p"},"Port")," to describe the network configuration, the primary fields of Port are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"port: port number to expose service"),(0,r.kt)("li",{parentName:"ul"},"protocol: protocol to expose service, support ",(0,r.kt)("inlineCode",{parentName:"li"},"TCP")," and  ",(0,r.kt)("inlineCode",{parentName:"li"},"UDP")),(0,r.kt)("li",{parentName:"ul"},"public: whether to public the service")),(0,r.kt)("p",null,"To public the service, you should set ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," as True. Besides, schema ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," should be used to describe the workload configuration."),(0,r.kt)("p",null,"That's all what an application developer needs to configure! Next, preview and apply the configuration, the application will get deployed and exposed publicly."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Kusion uses Load Balancer (LB) provided by the CSP to expose service publicly. For more detailed network configuration, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/kusion/configuration-walkthrough/networking"},"Application Networking"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"During the first preview and apply, the models and modules as well as the Terraform CLI (if not exists) that the application depends on will be downloaded, so it may take some time (usually within two minutes). You can take a break and have a cup of coffee. ")),(0,r.kt)("h3",{id:"preview-and-apply"},"Preview and Apply"),(0,r.kt)("p",null,"Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion preview")," under the stack path, you will get what will be created in the real infrastructure. The picture below gives the preview result of the example. A Namespace, Service and Deployment will be created, which meets the expectation. The service name has a suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),", which shows it can be accessed publicly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview-public",src:n(85091).Z,width:"1540",height:"262"})),(0,r.kt)("p",null,"Then, execute ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply --yes")," to do the real deploying job. Just a command and a few minutes, you have accomplished deploying application and expose it publicly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply-public",src:n(97932).Z,width:"1558",height:"480"})),(0,r.kt)("h3",{id:"verify-accessibility"},"Verify Accessibility"),(0,r.kt)("p",null,"In the example above, the kubernetes Namespace whose name is nginx, and a ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," under the Namespace should be created. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get")," to check, the Service whose type is ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," and Deployment are created indeed. And the Service has ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," 106.5.190.109, which means it can be accessed from outside the cluster."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"k8s-resource-public",src:n(68162).Z,width:"1662",height:"216"})),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," via browser, the correct result is returned, which illustrates the servie getting publicly exposed successfully."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"result-public",src:n(65377).Z,width:"1494",height:"682"})),(0,r.kt)("h2",{id:"expose-service-inside-cluster"},"Expose Service Inside Cluster"),(0,r.kt)("p",null,"If you only need the application to be accessed inside the cluster, just configure ",(0,r.kt)("inlineCode",{parentName:"p"},"Public")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," in schema ",(0,r.kt)("inlineCode",{parentName:"p"},"Port"),". There is no need to change the workspace, which means an application developer can easily change a service exposure range, without the involvement of platform engineers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import kam.v1.app_configuration as ac\nimport kam.v1.workload as wl\nimport kam.v1.workload.container as c\nimport network as n\n\n# main.k declares customized configurations for dev stacks.\nnginx: ac.AppConfiguration {\n    workload: wl.Service {\n        ...\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 80\n                    protocol: "TCP"\n                    public: False\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply --yes"),", the generated Service has suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"private"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply-private",src:n(96057).Z,width:"1612",height:"494"})),(0,r.kt)("p",null,"And the Service type is ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP"),", only has ",(0,r.kt)("inlineCode",{parentName:"p"},"CLUSTER_IP")," and no ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERNAL_IP"),", which means it cannot get accessed from outside the cluster. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"k8s-resource-private",src:n(64600).Z,width:"1542",height:"210"})),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This tutorial demonstrates how to expose service of the application deployed on the CSP Kubernetes. By platform engineers' setup of workspace, and application developers' configuration of schema ",(0,r.kt)("inlineCode",{parentName:"p"},"Port")," of Kusion module ",(0,r.kt)("inlineCode",{parentName:"p"},"network"),", Kusion enables you expose service simply and efficiently."))}m.isMDXComponent=!0},96057:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-private-a1d1f3a1b5afac81cea19f189d08222d.png"},97932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/apply-public-d89cdb3ba9d96904e1820bfbcf4671d8.png"},64600:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/k8s-resource-private-62ab14b1de35205866b64a0d63180450.png"},68162:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/k8s-resource-public-66ffcb206b33c5fc6f1a779bc10b3e93.png"},85091:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/preview-public-eea90eec123cd2fc13536be2b645e900.png"},65377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/result-public-4bf3f757b0a43c78464ec9bcd75a4b2f.png"}}]);