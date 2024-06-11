"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55932],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},48663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const a={},o="Configure Resource Specification",s={unversionedId:"user-guides/working-with-k8s/resource-spec",id:"version-v0.10/user-guides/working-with-k8s/resource-spec",title:"Configure Resource Specification",description:"You can manage container-level resource specification in the AppConfiguration model via the resources field (under the Container schema).",source:"@site/docs_versioned_docs/version-v0.10/5-user-guides/2-working-with-k8s/5-resource-spec.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/resource-spec",permalink:"/zh/docs/v0.10/user-guides/working-with-k8s/resource-spec",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/5-user-guides/2-working-with-k8s/5-resource-spec.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718107126,formattedLastUpdatedAt:"2024\u5e746\u670811\u65e5",sidebarPosition:5,frontMatter:{},sidebar:"kusion",previous:{title:"Upgrade Image",permalink:"/zh/docs/v0.10/user-guides/working-with-k8s/image-upgrade"},next:{title:"Set up Operational Rules",permalink:"/zh/docs/v0.10/user-guides/working-with-k8s/set-up-operational-rules"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managing Workspace Configuration",id:"managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],c={toc:l};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-resource-specification"},"Configure Resource Specification"),(0,i.kt)("p",null,"You can manage container-level resource specification in the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," field (under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," schema)."),(0,i.kt)("p",null,"For the full ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," schema reference, please see ",(0,i.kt)("a",{parentName:"p",href:"../../reference/modules/catalog-models/workload/service#schema-container"},"here")," for more details."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,i.kt)("p",null,"The example below also requires you to have ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will create a workspace and also generate a ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,i.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,i.kt)("h2",{id:"managing-workspace-configuration"},"Managing Workspace Configuration"),(0,i.kt)("p",null,"In the first guide in this series, we introduced a step to ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing-workspace-configuration"},"initialize a workspace")," with an empty configuration. The same empty configuration will still work in this guide, no changes are required there."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Update the resources value in ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-service/dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\n\nhelloworld: ac.AppConfiguration {\n    workload.containers.helloworld: {\n        ...\n        # before:\n        # resources: {\n        #     "cpu": "500m"\n        #     "memory": "512M"\n        # }\n        # after: \n        resources: {\n            "cpu": "250m"\n            "memory": "256Mi"\n        }\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"Everything else in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k")," stay the same."),(0,i.kt)("h2",{id:"applying"},"Applying"),(0,i.kt)("p",null,"Re-run steps in ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", resource scaling is completed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Intent in the Stack dev...                                                                                                                                                                                                     \nStack: dev  ID                                                               Action\n* \u251c\u2500     v1:Namespace:simple-service                                      UnChanged\n* \u251c\u2500     v1:Service:simple-service:simple-service-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:simple-service:simple-service-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:simple-service, skip                                                                                                                                                                                         \n SUCCESS  UnChanged v1:Service:simple-service:simple-service-dev-helloworld-private, skip                                                                                                                                                     \n SUCCESS  Update apps/v1:Deployment:simple-service:simple-service-dev-helloworld success                                                                                                                                                      \nUpdate apps/v1:Deployment:simple-service:simple-service-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"We can verify the application container (in the deployment template) now has the updated resources attributes (cpu:250m, memory:256Mi) as defined in the container configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get deployment -n simple-service -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          ...\n          image: gcr.io/google-samples/gb-frontend:v5\n          ...\n          resources:\n            limits:\n              cpu: 250m\n              memory: 256Mi\n...\n")))}u.isMDXComponent=!0}}]);