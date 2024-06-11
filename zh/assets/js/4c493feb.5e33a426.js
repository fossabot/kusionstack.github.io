"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89666],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(k,o(o({ref:n},c),{},{components:t})):i.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},92415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const r={id:"container"},o="Configure Containers",l={unversionedId:"user-guides/working-with-k8s/container",id:"user-guides/working-with-k8s/container",title:"Configure Containers",description:"You can manage container-level configurations in the AppConfiguration model via the containers field (under the workload schema). By default, everything defined in the containers field will be treated as application containers. Sidecar containers will be supported in a future version of kusion.",source:"@site/docs/kusion/5-user-guides/2-working-with-k8s/2-container.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/container",permalink:"/zh/docs/next/user-guides/working-with-k8s/container",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/5-user-guides/2-working-with-k8s/2-container.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718107126,formattedLastUpdatedAt:"2024\u5e746\u670811\u65e5",sidebarPosition:2,frontMatter:{id:"container"},sidebar:"kusion",previous:{title:"Deploy Application",permalink:"/zh/docs/next/user-guides/working-with-k8s/deploy-application"},next:{title:"Expose Service",permalink:"/zh/docs/next/user-guides/working-with-k8s/service"}},p={},s=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Managing Workspace Configuration",id:"managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Apply",id:"apply",level:2},{value:"Validation",id:"validation",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-containers"},"Configure Containers"),(0,a.kt)("p",null,"You can manage container-level configurations in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,a.kt)("inlineCode",{parentName:"p"},"containers")," field (under the ",(0,a.kt)("inlineCode",{parentName:"p"},"workload")," schema). By default, everything defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"containers")," field will be treated as application containers. Sidecar containers will be supported in a future version of kusion."),(0,a.kt)("p",null,"For the full ",(0,a.kt)("inlineCode",{parentName:"p"},"Container")," schema reference, please see ",(0,a.kt)("a",{parentName:"p",href:"../../reference/modules/developer-schemas/workload/service#schema-container"},"here")," for more details."),(0,a.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,a.kt)("p",null,"The example below also requires you to have ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will create a workspace and also generate a ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,a.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,a.kt)("h2",{id:"managing-workspace-configuration"},"Managing Workspace Configuration"),(0,a.kt)("p",null,"In the last guide, we introduced a step to ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#initializing-workspace-configuration"},"initialize a workspace")," with an empty configuration. The same empty configuration will still work in this guide, no changes are required there."),(0,a.kt)("p",null,"However, if you (or the platform team) would like to set default values for the workloads to standardize the behavior of applications in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," workspace, you can do so by updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/dev.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"modules:\n  service:\n    default:\n      replicas: 3\n      labels:\n        label-key: label-value\n      annotations:\n        annotation-key: annotation-value\n      type: CollaSet\n")),(0,a.kt)("p",null,"Please note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"replicas")," in the workspace configuration only works as a default value and will be overridden by the value set in the application configuration."),(0,a.kt)("p",null,"The workspace configuration need to be updated with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kusion workspace update dev -f ~/dev.yaml\n")),(0,a.kt)("p",null,"For a full reference of what can be configured in the workspace level, please see the ",(0,a.kt)("a",{parentName:"p",href:"../../reference/modules/workspace-configs/workload/service"},"workspace reference"),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"simple-service/dev/main.k"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n\n"helloworld": ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "helloworld": c.Container {\n                image = "gcr.io/google-samples/gb-frontend:v4"\n                env: {\n                    "env1": "VALUE"\n                    "env2": "VALUE2"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n                # Configure an HTTP readiness probe\n                readinessProbe: p.Probe {\n                    probeHandler: p.Http {\n                        url: "http://localhost:80"\n                    }\n                    initialDelaySeconds: 10\n                }\n            }\n        }\n        replicas: 2\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n              n.Port {\n                  port: 80\n              }\n            ]\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"apply"},"Apply"),(0,a.kt)("p",null,"Re-run steps in ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", new container configuration can be applied."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kusion apply\n  \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                     \nStack: dev  ID                                                               Action\n* \u251c\u2500     v1:Namespace:simple-service                                      UnChanged\n* \u251c\u2500     v1:Service:simple-service:simple-service-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:simple-service:simple-service-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:simple-service, skip                                                                                                                                                                                         \n SUCCESS  UnChanged v1:Service:simple-service:simple-service-dev-helloworld-private, skip                                                                                                                                                     \n SUCCESS  Update apps/v1:Deployment:simple-service:simple-service-dev-helloworld success                                                                                                                                                      \nUpdate apps/v1:Deployment:simple-service:simple-service-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,"We can verify the container (in the deployment template) now has the updated attributes as defined in the container configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get deployment -n simple-service -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          - name: env1\n            value: VALUE\n          - name: env2\n            value: VALUE2\n          image: gcr.io/google-samples/gb-frontend:v4\n          imagePullPolicy: IfNotPresent\n          name: helloworld\n          readinessProbe:\n            failureThreshold: 3\n            httpGet:\n              host: localhost\n              path: /\n              port: 80\n              scheme: HTTP\n            initialDelaySeconds: 10\n            periodSeconds: 10\n            successThreshold: 1\n            timeoutSeconds: 1\n          resources:\n            limits:\n              cpu: 500m\n              memory: 512M\n...\n")))}d.isMDXComponent=!0}}]);