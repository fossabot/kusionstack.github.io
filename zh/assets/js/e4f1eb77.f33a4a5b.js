"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[22636],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44039:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={id:"service"},o="Expose Service",p={unversionedId:"user-guides/working-with-k8s/service",id:"user-guides/working-with-k8s/service",title:"Expose Service",description:"You can determine how to expose your service in the AppConfiguration model via the ports field (under the network accessory). The ports field defines a list of all the Ports you want to expose for the application (and their corresponding listening ports on the container, if they don't match the service ports), so that it can be consumed by other applications.",source:"@site/docs/kusion/5-user-guides/2-working-with-k8s/3-service.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/service",permalink:"/zh/docs/next/user-guides/working-with-k8s/service",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/5-user-guides/2-working-with-k8s/3-service.md",tags:[],version:"current",lastUpdatedBy:"cheny-alf",lastUpdatedAt:1722600707,formattedLastUpdatedAt:"2024\u5e748\u67082\u65e5",sidebarPosition:3,frontMatter:{id:"service"},sidebar:"kusion",previous:{title:"Configure Containers",permalink:"/zh/docs/next/user-guides/working-with-k8s/container"},next:{title:"Upgrade Image",permalink:"/zh/docs/next/user-guides/working-with-k8s/image-upgrade"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managing Workspace Configuration",id:"managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],c={toc:l};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expose-service"},"Expose Service"),(0,i.kt)("p",null,"You can determine how to expose your service in the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,i.kt)("inlineCode",{parentName:"p"},"ports")," field (under the ",(0,i.kt)("inlineCode",{parentName:"p"},"network")," accessory). The ",(0,i.kt)("inlineCode",{parentName:"p"},"ports")," field defines a list of all the ",(0,i.kt)("inlineCode",{parentName:"p"},"Port"),"s you want to expose for the application (and their corresponding listening ports on the container, if they don't match the service ports), so that it can be consumed by other applications."),(0,i.kt)("p",null,"Unless explicitly defined, each of the ports exposed is by default exposed privately as a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIP")," type service. You can expose a port publicly by specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Port")," schema. At the moment, the implementation for publicly access is done via Load Balancer type service backed by cloud providers. Ingress will be supported in a future version of kusion."),(0,i.kt)("p",null,"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"Port")," schema reference, please see ",(0,i.kt)("a",{parentName:"p",href:"../../reference/modules/developer-schemas/workload/service#schema-port"},"here")," for more details."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,i.kt)("p",null,"The example below also requires you to have ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will create a workspace and also generate a ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,i.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,i.kt)("h2",{id:"managing-workspace-configuration"},"Managing Workspace Configuration"),(0,i.kt)("p",null,"In the first guide in this series, we introduced a step to ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing-workspace-configuration"},"initialize a workspace")," with an empty configuration. The same empty configuration will still work in this guide, no changes are required there."),(0,i.kt)("p",null,"However, if you (or the platform team) would like to set default values for the services to standardize the behavior of applications in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," workspace, you can do so by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/dev.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'modules:\n  kusionstack/network@0.1.0: \n    default:\n      port: \n        type: alicloud\n        labels:\n            kusionstack.io/control: "true"\n        annotations:\n            service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: slb.s1.small\n')),(0,i.kt)("p",null,"The workspace configuration need to be updated with the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kusion workspace update dev -f ~/dev.yaml\n")),(0,i.kt)("p",null,"For a full reference of what can be configured in the workspace level, please see the ",(0,i.kt)("a",{parentName:"p",href:"../../reference/modules/workspace-configs/networking/network"},"workspace reference"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"simple-service/dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n\n"helloworld": ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "helloworld": c.Container {\n                image = "gcr.io/google-samples/gb-frontend:v4"\n                env: {\n                    "env1": "VALUE"\n                    "env2": "VALUE2"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n                # Configure an HTTP readiness probe\n                readinessProbe: p.Probe {\n                    probeHandler: p.Http {\n                        url: "http://localhost:80"\n                    }\n                    initialDelaySeconds: 10\n                }\n            }\n        }\n        replicas: 2\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n              n.Port {\n                  port: 8080\n                  targetPort: 80\n              }\n            ]\n        }\n    }\n}\n')),(0,i.kt)("p",null,"The code above changes the service port to expose from ",(0,i.kt)("inlineCode",{parentName:"p"},"80")," in the last guide to ",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),", but still targeting the container port ",(0,i.kt)("inlineCode",{parentName:"p"},"80")," because that's what the application is listening on."),(0,i.kt)("h2",{id:"applying"},"Applying"),(0,i.kt)("p",null,"Re-run steps in ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", new service configuration can be applied."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                     \nStack: dev  ID                                                               Action\n* \u251c\u2500     v1:Namespace:simple-service                                      UnChanged\n* \u251c\u2500     v1:Service:simple-service:simple-service-dev-helloworld-private  Update\n* \u2514\u2500     apps/v1:Deployment:simple-service:simple-service-dev-helloworld  UnChanged\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:simple-service, skip                                                                                                                                                                                         \n SUCCESS  Update v1:Service:simple-service:simple-service-dev-helloworld-private success                                                                                                                                                      \n SUCCESS  UnChanged apps/v1:Deployment:simple-service:simple-service-dev-helloworld, skip                                                                                                                                                     \nUnChanged apps/v1:Deployment:simple-service:simple-service-dev-helloworld, skip [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"We can verify the Kubernetes service now has the updated attributes (mapping service port 8080 to container port 80) as defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ports")," configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get svc -n simple-service -o yaml\n...\n  spec:\n    ...\n    ports:\n    - name: simple-service-dev-helloworld-private-8080-tcp\n      port: 8080\n      protocol: TCP\n      targetPort: 80\n...\n")),(0,i.kt)("p",null,"Exposing service port 8080:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl port-forward svc/simple-service-dev-helloworld-private -n simple-service 30000:8080\n")),(0,i.kt)("p",null,"Open browser and visit ",(0,i.kt)("a",{parentName:"p",href:"http://127.0.0.1:30000"},"http://127.0.0.1:30000"),", the application should be up and running\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"app-preview",src:t(92287).Z,width:"1830",height:"330"})))}d.isMDXComponent=!0},92287:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/app-preview-de5274f4267fa725d2a65099e47c6c2c.png"}}]);