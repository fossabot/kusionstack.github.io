"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37921],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const a={},i="Configure Containers",l={unversionedId:"guides/working-with-k8s/container",id:"version-v0.9/guides/working-with-k8s/container",title:"Configure Containers",description:"You can manage container-level configurations in the AppConfiguration model via the containers field (under the workload schemas). By default, everything defined in the containers field will be treated as application containers. Sidecar containers will be supported in a future version of kusion.",source:"@site/docs_versioned_docs/version-v0.9/guides/working-with-k8s/2-container.md",sourceDirName:"guides/working-with-k8s",slug:"/guides/working-with-k8s/container",permalink:"/docs/v0.9/guides/working-with-k8s/container",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/guides/working-with-k8s/2-container.md",tags:[],version:"v0.9",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1718866078,formattedLastUpdatedAt:"Jun 20, 2024",sidebarPosition:2,frontMatter:{},sidebar:"kusion",previous:{title:"Deploy Application",permalink:"/docs/v0.9/guides/working-with-k8s/deploy-application"},next:{title:"Expose Service",permalink:"/docs/v0.9/guides/working-with-k8s/service"}},p={},s=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Example",id:"example",level:2},{value:"Apply",id:"apply",level:2},{value:"Validation",id:"validation",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-containers"},"Configure Containers"),(0,r.kt)("p",null,"You can manage container-level configurations in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,r.kt)("inlineCode",{parentName:"p"},"containers")," field (under the ",(0,r.kt)("inlineCode",{parentName:"p"},"workload")," schemas). By default, everything defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"containers")," field will be treated as application containers. Sidecar containers will be supported in a future version of kusion."),(0,r.kt)("p",null,"For the full ",(0,r.kt)("inlineCode",{parentName:"p"},"Container")," schema reference, please see ",(0,r.kt)("a",{parentName:"p",href:"../../reference/model/catalog_models/workload/doc_service#schema-container"},"here")," for more details."),(0,r.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,r.kt)("p",null,"The example below also requires you to have ",(0,r.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,r.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,r.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helloworld/dev/main.k"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.network as n\n\nhelloworld: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "helloworld": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v4"\n                env: {\n                    "env1": "VALUE"\n                    "env2": "VALUE2"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512M"\n                }\n                # Configure an HTTP readiness probe\n                readinessProbe: p.Probe {\n                    probeHandler: p.Http {\n                        url: "http://localhost:80"\n                    }\n                    initialDelaySeconds: 10\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"apply"},"Apply"),(0,r.kt)("p",null,"Re-run steps in ",(0,r.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", new container configuration can be applied."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                                                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  UnChanged\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:helloworld, skip                                                                                                                                                                                                                               \n SUCCESS  UnChanged v1:Service:helloworld:helloworld-dev-helloworld-private, skip                                                                                                                                                                                               \n SUCCESS  Update apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nUpdate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("p",null,"We can verify the container (in the deployment template) now has the updated attributes as defined in the container configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get deployment -n helloworld -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          - name: env1\n            value: VALUE\n          - name: env2\n            value: VALUE2\n          image: gcr.io/google-samples/gb-frontend:v4\n          imagePullPolicy: IfNotPresent\n          name: helloworld\n          readinessProbe:\n            failureThreshold: 3\n            httpGet:\n              host: localhost\n              path: /\n              port: 80\n              scheme: HTTP\n            initialDelaySeconds: 10\n            periodSeconds: 10\n            successThreshold: 1\n            timeoutSeconds: 1\n          resources:\n            limits:\n              cpu: 500m\n              memory: 512M\n...\n")))}d.isMDXComponent=!0}}]);