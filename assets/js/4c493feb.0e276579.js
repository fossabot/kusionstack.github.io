"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9666],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},i="Configure Containers",l={unversionedId:"kusion/user-guides/working-with-k8s/container",id:"kusion/user-guides/working-with-k8s/container",title:"Configure Containers",description:"You can manage container-level configurations in the AppConfiguration model via the containers field (under the workload schemas). By default, everything defined in the containers field will be treated as application containers. Sidecar containers will be supported in a future version of kusion.",source:"@site/docs/kusion/5-user-guides/2-working-with-k8s/2-container.md",sourceDirName:"kusion/5-user-guides/2-working-with-k8s",slug:"/kusion/user-guides/working-with-k8s/container",permalink:"/docs/next/kusion/user-guides/working-with-k8s/container",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/5-user-guides/2-working-with-k8s/2-container.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1704877157,formattedLastUpdatedAt:"Jan 10, 2024",sidebarPosition:2,frontMatter:{},sidebar:"kusion",previous:{title:"Deploy Application",permalink:"/docs/next/kusion/user-guides/working-with-k8s/deploy-application"},next:{title:"Expose Service",permalink:"/docs/next/kusion/user-guides/working-with-k8s/service"}},p={},s=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Example",id:"example",level:2},{value:"Apply",id:"apply",level:2},{value:"Validation",id:"validation",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-containers"},"Configure Containers"),(0,o.kt)("p",null,"You can manage container-level configurations in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,o.kt)("inlineCode",{parentName:"p"},"containers")," field (under the ",(0,o.kt)("inlineCode",{parentName:"p"},"workload")," schemas). By default, everything defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"containers")," field will be treated as application containers. Sidecar containers will be supported in a future version of kusion."),(0,o.kt)("p",null,"For the full ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," schema reference, please see ",(0,o.kt)("a",{parentName:"p",href:"../../reference/modules/workload/service#schema-container"},"here")," for more details."),(0,o.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,o.kt)("p",null,"The example below also requires you to have ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,o.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"helloworld/dev/main.k"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.container.probe as p\nimport catalog.models.schema.v1.workload.network as n\n\nhelloworld: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "helloworld": c.Container {\n                image: "gcr.io/google-samples/gb-frontend:v4"\n                env: {\n                    "env1": "VALUE"\n                    "env2": "VALUE2"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512M"\n                }\n                # Configure an HTTP readiness probe\n                readinessProbe: p.Probe {\n                    probeHandler: p.Http {\n                        url: "http://localhost:80"\n                    }\n                    initialDelaySeconds: 10\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n}\n')),(0,o.kt)("h2",{id:"apply"},"Apply"),(0,o.kt)("p",null,"Re-run steps in ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", new container configuration can be applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                                                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  UnChanged\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:helloworld, skip                                                                                                                                                                                                                               \n SUCCESS  UnChanged v1:Service:helloworld:helloworld-dev-helloworld-private, skip                                                                                                                                                                                               \n SUCCESS  Update apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nUpdate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,o.kt)("h2",{id:"validation"},"Validation"),(0,o.kt)("p",null,"We can verify the container (in the deployment template) now has the updated attributes as defined in the container configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get deployment -n helloworld -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          - name: env1\n            value: VALUE\n          - name: env2\n            value: VALUE2\n          image: gcr.io/google-samples/gb-frontend:v4\n          imagePullPolicy: IfNotPresent\n          name: helloworld\n          readinessProbe:\n            failureThreshold: 3\n            httpGet:\n              host: localhost\n              path: /\n              port: 80\n              scheme: HTTP\n            initialDelaySeconds: 10\n            periodSeconds: 10\n            successThreshold: 1\n            timeoutSeconds: 1\n          resources:\n            limits:\n              cpu: 500m\n              memory: 512M\n...\n")))}d.isMDXComponent=!0}}]);