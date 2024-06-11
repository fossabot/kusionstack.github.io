"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[38427],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={},a="Expose Service",l={unversionedId:"guides/working-with-k8s/service",id:"version-v0.9/guides/working-with-k8s/service",title:"Expose Service",description:"You can determine how to expose your service in the AppConfiguration model via the ports field (under the workload schemas). The ports field defines a list of all the Ports you want to expose for the application (and their corresponding listening ports on the container, if they don't match the service ports), so that it can be consumed by other applications.",source:"@site/docs_versioned_docs/version-v0.9/guides/working-with-k8s/3-service.md",sourceDirName:"guides/working-with-k8s",slug:"/guides/working-with-k8s/service",permalink:"/zh/docs/v0.9/guides/working-with-k8s/service",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/guides/working-with-k8s/3-service.md",tags:[],version:"v0.9",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718107126,formattedLastUpdatedAt:"2024\u5e746\u670811\u65e5",sidebarPosition:3,frontMatter:{},sidebar:"kusion",previous:{title:"Configure Containers",permalink:"/zh/docs/v0.9/guides/working-with-k8s/container"},next:{title:"Upgrade Image",permalink:"/zh/docs/v0.9/guides/working-with-k8s/image-upgrade"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],d={toc:s};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"expose-service"},"Expose Service"),(0,o.kt)("p",null,"You can determine how to expose your service in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ports")," field (under the ",(0,o.kt)("inlineCode",{parentName:"p"},"workload")," schemas). The ",(0,o.kt)("inlineCode",{parentName:"p"},"ports")," field defines a list of all the ",(0,o.kt)("inlineCode",{parentName:"p"},"Port"),"s you want to expose for the application (and their corresponding listening ports on the container, if they don't match the service ports), so that it can be consumed by other applications."),(0,o.kt)("p",null,"Unless explicitly defined, each of the ports exposed is by default exposed privately as a ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterIP")," type service. You can expose a port publicly by specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"exposeInternet")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Port")," schema. At the moment, the implementation for publicly access is done via Load Balancer type service backed by cloud providers. Ingress will be supported in a future version of kusion."),(0,o.kt)("p",null,"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"Port")," schema reference, please see ",(0,o.kt)("a",{parentName:"p",href:"../../reference/model/catalog_models/workload/doc_service#schema-port"},"here")," for more details."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,o.kt)("p",null,"The example below also requires you to have ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,o.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the project directory."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"helloworld/dev/main.k"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.network as n\n\nhelloworld: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "helloworld": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v4"\n                env: {\n                    "env1": "VALUE"\n                    "env2": "VALUE2"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512M"\n                }\n                # Configure an HTTP readiness probe\n                readinessProbe: p.Probe {\n                    probeHandler: p.Http {\n                        url: "http://localhost:80"\n                    }\n                    initialDelaySeconds: 10\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 8080\n                targetPort: 80\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"The code above changes the service port to expose from ",(0,o.kt)("inlineCode",{parentName:"p"},"80")," in the last guide to ",(0,o.kt)("inlineCode",{parentName:"p"},"8080"),", but still targeting the container port ",(0,o.kt)("inlineCode",{parentName:"p"},"80")," because that's what the application is listening on."),(0,o.kt)("h2",{id:"applying"},"Applying"),(0,o.kt)("p",null,"Re-run steps in ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", new service configuration can be applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  UnChanged\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  Update\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  UnChanged\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:helloworld, skip                                                                                                                                                                                                                               \n SUCCESS  Update v1:Service:helloworld:helloworld-dev-helloworld-private success                                                                                                                                                                                                \n SUCCESS  UnChanged apps/v1:Deployment:helloworld:helloworld-dev-helloworld, skip                                                                                                                                                                                               \nUnChanged apps/v1:Deployment:helloworld:helloworld-dev-helloworld, skip [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,o.kt)("h2",{id:"validation"},"Validation"),(0,o.kt)("p",null,"We can verify the Kubernetes service now has the updated attributes (mapping service port 8080 to container port 80) as defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ports")," configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get svc -n helloworld -o yaml\n...\n  spec:\n    ...\n    ports:\n    - name: helloworld-dev-helloworld-private-8080-tcp\n      port: 8080\n      protocol: TCP\n      targetPort: 80\n...\n")),(0,o.kt)("p",null,"Exposing service port 8080:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward svc/helloworld-dev-helloworld-private -n helloworld 30000:8080\n")),(0,o.kt)("p",null,"Open browser and visit ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:30000"},"http://127.0.0.1:30000"),", the application should be up and running\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"app-preview",src:n(92287).Z,width:"1830",height:"330"})))}c.isMDXComponent=!0},92287:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/app-preview-de5274f4267fa725d2a65099e47c6c2c.png"}}]);