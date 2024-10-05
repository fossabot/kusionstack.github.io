"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72392],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},99518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const o={id:"k8s-manifest"},r="Apply the Raw K8s Manifest YAML",s={unversionedId:"user-guides/working-with-k8s/k8s-manifest",id:"version-v0.12/user-guides/working-with-k8s/k8s-manifest",title:"Apply the Raw K8s Manifest YAML",description:"The guides above provide examples on how to configure workloads and accessories with KCL, and generate the related Kubernetes resources with Kusion Module generators, which is the usage method we recommend, as it can achieve the separation of concerns between developers and platform engineers, reducing the cognitive burden on developers.",source:"@site/docs_versioned_docs/version-v0.12/5-user-guides/2-working-with-k8s/8-k8s-manifest.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/k8s-manifest",permalink:"/docs/v0.12/user-guides/working-with-k8s/k8s-manifest",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/5-user-guides/2-working-with-k8s/8-k8s-manifest.md",tags:[],version:"v0.12",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"Oct 5, 2024",sidebarPosition:8,frontMatter:{id:"k8s-manifest"},sidebar:"kusion",previous:{title:"Schedule a Job",permalink:"/docs/v0.12/user-guides/working-with-k8s/job"},next:{title:"Configure Monitoring Behavior With Prometheus",permalink:"/docs/v0.12/user-guides/observability/prometheus"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managing Workspace Configuration",id:"managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Generate and Applying",id:"generate-and-applying",level:2},{value:"Validation",id:"validation",level:2}],d={toc:l};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"apply-the-raw-k8s-manifest-yaml"},"Apply the Raw K8s Manifest YAML"),(0,i.kt)("p",null,"The guides above provide examples on how to configure workloads and accessories with KCL, and generate the related Kubernetes resources with Kusion Module generators, which is the usage method we recommend, as it can achieve the separation of concerns between developers and platform engineers, reducing the cognitive burden on developers. "),(0,i.kt)("p",null,"However, in some specific scenario, users may also have the need to directly use Kusion to apply and manage the raw Kubernetes manifest YAML files, such as taking over some existing resources and deploying CRD (CustomResourceDefinition), or other special resources. "),(0,i.kt)("p",null,"To help users directly apply raw K8s manifests, the KusionStack community has provided the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v0.12/reference/modules/developer-schemas/k8s_manifest/"},"k8s_manifest")," Kusion Module. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The module definition and implementation, as well as the example can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog/tree/main/modules/k8s_manifest"},"here"),". ")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application. "),(0,i.kt)("p",null,"The example below also requires you to have ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion workspace create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion project create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion stack create")," command, which will create a workspace and project, and also generate a ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},"kcl.mod")," file under the stack directory. "),(0,i.kt)("h2",{id:"managing-workspace-configuration"},"Managing Workspace Configuration"),(0,i.kt)("p",null,"In the first guide in this series, we introduced a step to ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing-workspace-configuration"},"initialize a workspace")," with an empty configuration. The same empty configuration will still work in this guide, no changes are required there. Alternatively, if you have updated your workspace config in the previous guides, no changes need to be made either."),(0,i.kt)("p",null,"However, if you (or the platform team) would like to set some default paths for the raw K8s manifest YAML files to standardize the behavior of applications in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," workspace, you can do so by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev.yaml")," with the following config block: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"modules: \n    k8s_manifest: \n        path: oci://ghcr.io/kusionstack/k8s_manifest\n        version: 0.1.0\n        configs: \n            default: \n                # The default paths to apply for the raw K8s manifest YAML files. \n                paths: \n                    - /path/to/k8s_manifest.yaml\n                    - /dir/to/k8s_manifest/\n")),(0,i.kt)("p",null,"Please note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"paths")," decalred by the platform engineers in the workspace configs will be merged with the ones declared by the developers in the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k"),". "),(0,i.kt)("p",null,"The workspace configuration needs to be updated with the command: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kusion workspace update dev -f dev.yaml\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"To apply the specified raw K8s manifest YAML files with ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s_manifest")," module, please use the ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.2.1")," version of ",(0,i.kt)("inlineCode",{parentName:"p"},"kam"),", whose ",(0,i.kt)("inlineCode",{parentName:"p"},"workload")," is no longer a required field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model. An example is shown below: "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"kcl.mod"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'[dependencies]\nkam = { git = "https://github.com/KusionStack/kam.git", tag = "v0.2.1" }\nk8s_manifest = { oci = "oci://ghcr.io/kusionstack/k8s_manifest", tag = "0.1.0" }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"stack.yaml"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# Generate a specified namespace \nname: dev\nextensions: \n  - kind: kubernetesNamespace\n    kubernetesNamespace: \n      namespace: test\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"main.k"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import kam.v1.app_configuration as ac\nimport k8s_manifest\n\ntest: ac.AppConfiguration {\n    accessories: {\n        "k8s_manifests": k8s_manifest.K8sManifest {\n            paths: [\n                # The `test.yaml` should be placed under the stack directory, \n                # as it is declared using a relative path. \n                "./test.yaml"\n            ]\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test.yaml"),": "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  namespace: test\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.14.2\n        ports:\n        - containerPort: 80\n")),(0,i.kt)("h2",{id:"generate-and-applying"},"Generate and Applying"),(0,i.kt)("p",null,"Execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion generate")," command, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"test.yaml")," will be generated into a Kusion ",(0,i.kt)("inlineCode",{parentName:"p"},"Resource")," with a Kusion ID in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  dev git:(main) \u2717 kusion generate\n \u2714\ufe0e  Generating Spec in the Stack dev...\nresources:\n    - id: v1:Namespace:test\n      type: Kubernetes\n      attributes:\n        apiVersion: v1\n        kind: Namespace\n        metadata:\n            creationTimestamp: null\n            name: test\n        spec: {}\n        status: {}\n      extensions:\n        GVK: /v1, Kind=Namespace\n    - id: apps/v1:Deployment:test:nginx-deployment\n      type: Kubernetes\n      attributes:\n        apiVersion: apps/v1\n        kind: Deployment\n        metadata:\n            labels:\n                app: nginx\n            name: nginx-deployment\n            namespace: test\n        spec:\n            replicas: 3\n            selector:\n                matchLabels:\n                    app: nginx\n            template:\n                metadata:\n                    labels:\n                        app: nginx\n                spec:\n                    containers:\n                        - image: nginx:1.14.2\n                          name: nginx\n                          ports:\n                            - containerPort: 80\n      dependsOn:\n        - v1:Namespace:test\nsecretStore: null\ncontext: {}\n")),(0,i.kt)("p",null,"Execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply")," command, you may get the output like the following: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u279c  dev git:(main) \u2717 kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...\nStack: dev\nID                                        Action\nv1:Namespace:test                         Create\napps/v1:Deployment:test:nginx-deployment  Create\n\n\nDo you want to apply these diffs?:\n  > yes\n\nStart applying diffs ...\n \u2714\ufe0e  Succeeded v1:Namespace:test\n \u2714\ufe0e  Succeeded apps/v1:Deployment:test:nginx-deployment\nApply complete! Resources: 2 created, 0 updated, 0 deleted.\n\n[v1:Namespace:test]\nType   Kind       Name  Detail\nREADY  Namespace  test  Phase: Active\n[apps/v1:Deployment:test:nginx-deployment]\nType   Kind        Name                               Detail\nREADY  Deployment  nginx-deployment                   Ready: 3/3, Up-to-date: 3, Available: 3\nREADY  ReplicaSet  nginx-deployment-7fb96c846b        Desired: 3, Current: 3, Ready: 3\nREADY  Pod         nginx-deployment-7fb96c846b-d9pp4  Ready: 1/1, Status: Running, Restart: 0, Age: 2s\n")),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"We can verify the ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Pod")," we have just applied: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev git:(main) \u2717 kubectl get deployment -n test\nNAME               READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-deployment   3/3     3            3           70s\n\u279c  dev git:(main) \u2717 kubectl get pod -n test\nNAME                                READY   STATUS    RESTARTS   AGE\nnginx-deployment-7fb96c846b-d9pp4   1/1     Running   0          87s\nnginx-deployment-7fb96c846b-j45nt   1/1     Running   0          87s\nnginx-deployment-7fb96c846b-tnz5f   1/1     Running   0          87s\n")))}c.isMDXComponent=!0}}]);