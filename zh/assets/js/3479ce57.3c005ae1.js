"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[83595],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=i,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||r;return a?t.createElement(f,o(o({ref:n},c),{},{components:a})):t.createElement(f,o({ref:n},c))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5867:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=a(87462),i=(a(67294),a(3905));const r={id:"inference"},o="Provide LLM Service with Inference Module for AI Application",l={unversionedId:"user-guides/llm-ops/inference",id:"user-guides/llm-ops/inference",title:"Provide LLM Service with Inference Module for AI Application",description:"In the wave of Artificial Intelligence (AI), Large Language Models (LLMs) are gradually becoming a key factor in driving innovation and productivity. As a result, researchers and developers are looking for a more efficient way to deploy and manage complex LLM models and AI applications.",source:"@site/docs/kusion/5-user-guides/6-llm-ops/1-inference.md",sourceDirName:"5-user-guides/6-llm-ops",slug:"/user-guides/llm-ops/inference",permalink:"/zh/docs/next/user-guides/llm-ops/inference",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/5-user-guides/6-llm-ops/1-inference.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:1,frontMatter:{id:"inference"},sidebar:"kusion",previous:{title:"Achieving Team Collaboration in Production Practice with GitHub Actions",permalink:"/zh/docs/next/user-guides/production-practice-case/collaborate-with-github-actions"},next:{title:"Kusion Commands",permalink:"/zh/docs/next/reference/commands/"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initializing and Managing Workspace Configuration",id:"initializing-and-managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Testing",id:"testing",level:2}],c={toc:s};function m(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"provide-llm-service-with-inference-module-for-ai-application"},"Provide LLM Service with Inference Module for AI Application"),(0,i.kt)("p",null,"In the wave of Artificial Intelligence (AI), Large Language Models (LLMs) are gradually becoming a key factor in driving innovation and productivity. As a result, researchers and developers are looking for a more efficient way to deploy and manage complex LLM models and AI applications. "),(0,i.kt)("p",null,"To simplify the process from model construction, deployment and interaction with applications, the KusionStack community has provided an ",(0,i.kt)("inlineCode",{parentName:"p"},"inference")," module. We will explore in detail how to deploy an AI application using LLM service provided by this module in this article. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The module definition and implementation, as well as the example application we are about to show can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog/tree/main/modules/inference"},"here"),". ")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before we begin, we need to perform the following steps to set up the environment required by Kusion: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Kusion "),(0,i.kt)("li",{parentName:"ul"},"Running Kubernetes cluster")),(0,i.kt)("p",null,"For more details, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/user-guides/working-with-k8s/deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application with Kusion. "),(0,i.kt)("h2",{id:"initializing-and-managing-workspace-configuration"},"Initializing and Managing Workspace Configuration"),(0,i.kt)("p",null,"For information on how to initialize and switch a workspace with ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion workspace switch"),", please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/user-guides/working-with-k8s/deploy-application#initializing-workspace-configuration"},"this document"),". "),(0,i.kt)("p",null,"For the current version of the ",(0,i.kt)("inlineCode",{parentName:"p"},"inference")," module, an empty configuration for workspace initialization is enough, and users may need to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"network")," module as an accessory to provide the network service for the AI application, whose workload is described with ",(0,i.kt)("inlineCode",{parentName:"p"},"service")," module. Users can also add other modules' platform configurations in the workspace according to their need. "),(0,i.kt)("p",null,"An example is shown below: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"modules: \n    service: \n        path: oci://ghcr.io/kusionstack/service\n        version: 0.2.0\n        configs: \n            default: {}\n    network: \n        path: oci://ghcr.io/kusionstack/network\n        version: 0.2.0\n        configs: \n            default: {}\n    inference: \n        path: oci://ghcr.io/kusionstack/inference\n        version: 0.1.0-beta.4\n        configs: \n            default: {}\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"After creating and switching to the workspace shown above, we can initialize the example ",(0,i.kt)("inlineCode",{parentName:"p"},"Project")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Stack")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion project create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion stack create"),". Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/user-guides/working-with-k8s/deploy-application#initializing-application-configuration"},"this document")," for more details. "),(0,i.kt)("p",null,"The directory structure, and configuration file contents of the example project is shown below: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"example/\n.\n\u251c\u2500\u2500 default\n\u2502   \u251c\u2500\u2500 kcl.mod\n\u2502   \u251c\u2500\u2500 main.k\n\u2502   \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"project.yaml"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: example\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stack.yaml"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: default\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "0.2.0" }\nservice = {oci = "oci://ghcr.io/kusionstack/service", tag = "0.1.0" }\nnetwork = { oci = "oci://ghcr.io/kusionstack/network", tag = "0.2.0" }\ninference = { oci = "oci://ghcr.io/kusionstack/inference", tag = "0.1.0-beta.4" } \n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"main.k"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\nimport inference.v1.inference\n\ninference: ac.AppConfiguration {\n    # Declare the workload configurations. \n    workload: service.Service {\n        containers: {\n            myct: c.Container {image: "kangy126/app"}\n        }\n        replicas: 1\n    }\n    # Declare the inference module configurations. \n    accessories: {\n        "inference": inference.Inference {\n            model: "llama3"\n            framework: "Ollama"\n        }\n        "network": n.Network {ports: [n.Port {\n            port: 80\n            targetPort: 5000\n        }]}\n    }\n}\n')),(0,i.kt)("p",null,"In the above example, we configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"framework")," item of the ",(0,i.kt)("inlineCode",{parentName:"p"},"inference")," module, which are two required configuration items for this module. The inference service of different models with different inference frameworks could be quickly built up by changing these two configuration items. "),(0,i.kt)("p",null,"As for how the AI application use the LLM service provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"inference")," module, an environment variable named ",(0,i.kt)("inlineCode",{parentName:"p"},"INFERENCE_URL")," will be injected by the module and the application can call the LLM service with the address. "),(0,i.kt)("p",null,"There are also some optional configuration items in the ",(0,i.kt)("inlineCode",{parentName:"p"},"inference")," module for adjusting the LLM service, whose details can be found ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/next/reference/modules/developer-schemas/inference/"},"here"),". "),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"Now we can generate and deploy the ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec")," containing all the relevant resources the AI application needs with Kusion. "),(0,i.kt)("p",null,"First, we should navigate to the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"example/default")," and execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion generate")," command, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec")," will be generated. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  default git:(main) \u2717 kusion generate\n \u2714\ufe0e  Generating Spec in the Stack default...\nresources:\n    - id: v1:Namespace:example\n      type: Kubernetes\n      attributes:\n        apiVersion: v1\n        kind: Namespace\n        metadata:\n            creationTimestamp: null\n            name: example\n        spec: {}\n        status: {}\n      extensions:\n        GVK: /v1, Kind=Namespace\n    - id: apps/v1:Deployment:example:example-default-inference\n      type: Kubernetes\n      attributes:\n        apiVersion: apps/v1\n        kind: Deployment\n        metadata:\n            creationTimestamp: null\n            labels:\n                app.kubernetes.io/name: inference\n                app.kubernetes.io/part-of: example\n            name: example-default-inference\n            namespace: example\n        spec:\n            replicas: 1\n            selector:\n                matchLabels:\n                    app.kubernetes.io/name: inference\n                    app.kubernetes.io/part-of: example\n            strategy: {}\n            template:\n                metadata:\n                    creationTimestamp: null\n                    labels:\n                        app.kubernetes.io/name: inference\n                        app.kubernetes.io/part-of: example\n                spec:\n                    containers:\n                        - env:\n                            - name: INFERENCE_URL\n                              value: ollama-infer-service\n                          image: kangy126/app\n                          name: myct\n                          resources: {}\n        status: {}\n      dependsOn:\n        - v1:Namespace:example\n        - v1:Service:example:ollama-infer-service\n        - v1:Service:example:example-default-inference-private\n      extensions:\n        GVK: apps/v1, Kind=Deployment\n        kusion.io/is-workload: true\n    - id: apps/v1:Deployment:example:ollama-infer-deployment\n      type: Kubernetes\n      attributes:\n        apiVersion: apps/v1\n        kind: Deployment\n        metadata:\n            creationTimestamp: null\n            name: ollama-infer-deployment\n            namespace: example\n        spec:\n            selector:\n                matchLabels:\n                    accessory: ollama\n            strategy: {}\n            template:\n                metadata:\n                    creationTimestamp: null\n                    labels:\n                        accessory: ollama\n                spec:\n                    containers:\n                        - command:\n                            - /bin/sh\n                            - -c\n                            - |-\n                              echo 'FROM llama3\n                              PARAMETER top_k 40\n                              PARAMETER top_p 0.900000\n                              PARAMETER temperature 0.800000\n                              PARAMETER num_predict 128\n                              PARAMETER num_ctx 2048\n                              ' > Modelfile && ollama serve & OLLAMA_SERVE_PID=$! && sleep 5 && ollama create llama3 -f Modelfile && wait $OLLAMA_SERVE_PID\n                          image: ollama/ollama\n                          name: ollama-infer-container\n                          ports:\n                            - containerPort: 11434\n                              name: ollama-port\n                          resources: {}\n                          volumeMounts:\n                            - mountPath: /root/.ollama\n                              name: ollama-infer-storage\n                    volumes:\n                        - emptyDir: {}\n                          name: ollama-infer-storage\n        status: {}\n      dependsOn:\n        - v1:Namespace:example\n        - v1:Service:example:ollama-infer-service\n        - v1:Service:example:example-default-inference-private\n      extensions:\n        GVK: apps/v1, Kind=Deployment\n    - id: v1:Service:example:ollama-infer-service\n      type: Kubernetes\n      attributes:\n        apiVersion: v1\n        kind: Service\n        metadata:\n            creationTimestamp: null\n            labels:\n                accessory: ollama\n            name: ollama-infer-service\n            namespace: example\n        spec:\n            ports:\n                - port: 80\n                  targetPort: 11434\n            selector:\n                accessory: ollama\n            type: ClusterIP\n        status:\n            loadBalancer: {}\n      dependsOn:\n        - v1:Namespace:example\n      extensions:\n        GVK: /v1, Kind=Service\n    - id: v1:Service:example:example-default-inference-private\n      type: Kubernetes\n      attributes:\n        apiVersion: v1\n        kind: Service\n        metadata:\n            creationTimestamp: null\n            labels:\n                app.kubernetes.io/name: inference\n                app.kubernetes.io/part-of: example\n            name: example-default-inference-private\n            namespace: example\n        spec:\n            ports:\n                - name: example-default-inference-private-80-tcp\n                  port: 80\n                  protocol: TCP\n                  targetPort: 5000\n            selector:\n                app.kubernetes.io/name: inference\n                app.kubernetes.io/part-of: example\n            type: ClusterIP\n        status:\n            loadBalancer: {}\n      dependsOn:\n        - v1:Namespace:example\n      extensions:\n        GVK: /v1, Kind=Service\nsecretStore: null\ncontext: {}\n")),(0,i.kt)("p",null,"Next, we can execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion preview")," command and review the resource three-way diffs for a more secure deployment. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  default git:(main) \u2717 kusion preview\n \u2714\ufe0e  Generating Spec in the Stack default...\nStack: default\nID                                                    Action\nv1:Namespace:example                                  Create\nv1:Service:example:ollama-infer-service               Create\nv1:Service:example:example-default-inference-private  Create\napps/v1:Deployment:example:example-default-inference  Create\napps/v1:Deployment:example:ollama-infer-deployment    Create\n\n\nWhich diff detail do you want to see?:\n> all\n  v1:Namespace:example Create\n  v1:Service:example:ollama-infer-service Create\n  v1:Service:example:example-default-inference-private Create\n  apps/v1:Deployment:example:example-default-inference Create\n")),(0,i.kt)("p",null,"Finally, execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply")," command to deploy the related Kubernetes resources. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  default git:(main) \u2717 kusion apply\n \u2714\ufe0e  Generating Spec in the Stack default...\nStack: default\nID                                                    Action\nv1:Namespace:example                                  Create\nv1:Service:example:ollama-infer-service               Create\nv1:Service:example:example-default-inference-private  Create\napps/v1:Deployment:example:ollama-infer-deployment    Create\napps/v1:Deployment:example:example-default-inference  Create\n\n\nDo you want to apply these diffs?:\n  > yes\n\nStart applying diffs ...\n \u2714\ufe0e  Succeeded v1:Namespace:example\n \u2714\ufe0e  Succeeded v1:Service:example:ollama-infer-service\n \u2714\ufe0e  Succeeded v1:Service:example:example-default-inference-private\n \u2714\ufe0e  Succeeded apps/v1:Deployment:example:ollama-infer-deployment\n \u2714\ufe0e  Succeeded apps/v1:Deployment:example:example-default-inference\nApply complete! Resources: 5 created, 0 updated, 0 deleted.\n\n")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get all -n example")," command, and the deployed Kubernetes resources will be shown. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  ~ kubectl get all -n example\nNAME                                           READY   STATUS    RESTARTS   AGE\npod/example-dev-inference-5cf6c74574-7w92f     1/1     Running   0          2d6h\npod/mynginx                                    1/1     Running   0          2d6h\npod/ollama-infer-deployment-7c56845496-s5snb   1/1     Running   0          2d6h\n\nNAME                                   TYPE           CLUSTER-IP        EXTERNAL-IP     PORT(S)        AGE\nservice/example-dev-inference-public   ClusterIP      192.168.116.121   <none>          80:32693/TCP         2d6h\nservice/ollama-infer-service           ClusterIP      192.168.28.208    <none>          80/TCP         2d6h\n\nNAME                                      READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/example-dev-inference     1/1     1            1           2d6h\ndeployment.apps/ollama-infer-deployment   1/1     1            1           2d6h\n\nNAME                                                 DESIRED   CURRENT   READY   AGE\nreplicaset.apps/example-dev-inference-5cf6c74574     1         1         1       2d6h\nreplicaset.apps/ollama-infer-deployment-7c56845496   1         1         1       2d6h\n")),(0,i.kt)("p",null,"The AI application in the example provides a simple service that returns the LLM responses when sending a GET request with the ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt")," parameter. "),(0,i.kt)("p",null,"We can run a new pod (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx"),") in the same cluster and send requests to the AI application's service to perform a simple test. The relevant commands and test results are as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl run mynginx --image=nginx -n example\nkubectl exec -it pod/mynginx -n example -- /bin/bash\n\n# mynginx\ncurl 'http://example-dev-inference-public?prompt=Who%20are%20you'\n")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(78832).Z,width:"2528",height:"522"})))}m.isMDXComponent=!0},78832:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/inference-test-57c883f23ca754c9c3d1a8724d3c1bcd.png"}}]);