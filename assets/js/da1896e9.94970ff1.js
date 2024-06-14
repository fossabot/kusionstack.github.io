"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41356],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(g,o(o({ref:n},c),{},{components:r})):t.createElement(g,o({ref:n},c))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6807:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(87462),i=(r(67294),r(3905));const a={id:"resource-spec"},o="Configure Resource Specification",s={unversionedId:"user-guides/working-with-k8s/resource-spec",id:"version-v0.12/user-guides/working-with-k8s/resource-spec",title:"Configure Resource Specification",description:"You can manage container-level resource specification in the AppConfiguration model via the resources field (under the Container schema).",source:"@site/docs_versioned_docs/version-v0.12/5-user-guides/2-working-with-k8s/5-resource-spec.md",sourceDirName:"5-user-guides/2-working-with-k8s",slug:"/user-guides/working-with-k8s/resource-spec",permalink:"/docs/user-guides/working-with-k8s/resource-spec",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/5-user-guides/2-working-with-k8s/5-resource-spec.md",tags:[],version:"v0.12",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718370150,formattedLastUpdatedAt:"Jun 14, 2024",sidebarPosition:5,frontMatter:{id:"resource-spec"},sidebar:"kusion",previous:{title:"Upgrade Image",permalink:"/docs/user-guides/working-with-k8s/image-upgrade"},next:{title:"Set up Operational Rules",permalink:"/docs/user-guides/working-with-k8s/set-up-operational-rules"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Managing Workspace Configuration",id:"managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],c={toc:l};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-resource-specification"},"Configure Resource Specification"),(0,i.kt)("p",null,"You can manage container-level resource specification in the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," field (under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," schema)."),(0,i.kt)("p",null,"For the full ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," schema reference, please see ",(0,i.kt)("a",{parentName:"p",href:"../../reference/modules/developer-schemas/workload/service#schema-container"},"here")," for more details."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,i.kt)("p",null,"The example below also requires you to have ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will create a workspace and also generate a ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,i.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,i.kt)("h2",{id:"managing-workspace-configuration"},"Managing Workspace Configuration"),(0,i.kt)("p",null,"In the first guide in this series, we introduced a step to ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#initializing-workspace-configuration"},"initialize a workspace")," with an empty configuration. The same empty configuration will still work in this guide, no changes are required there."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Update the resources value in ",(0,i.kt)("inlineCode",{parentName:"p"},"simple-service/dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import kam.v1.app_configuration as ac\n\nhelloworld: ac.AppConfiguration {\n    workload.containers.helloworld: {\n        ...\n        # before:\n        # resources: {\n        #     "cpu": "500m"\n        #     "memory": "512M"\n        # }\n        # after: \n        resources: {\n            "cpu": "250m"\n            "memory": "256Mi"\n        }\n        ...\n    }\n}\n')),(0,i.kt)("p",null,"Everything else in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k")," stay the same."),(0,i.kt)("h2",{id:"applying"},"Applying"),(0,i.kt)("p",null,"Re-run steps in ",(0,i.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", resource scaling is completed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                     \nStack: dev  ID                                                               Action\n* \u251c\u2500     v1:Namespace:simple-service                                      UnChanged\n* \u251c\u2500     v1:Service:simple-service:simple-service-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:simple-service:simple-service-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:simple-service, skip                                                                                                                                                                                         \n SUCCESS  UnChanged v1:Service:simple-service:simple-service-dev-helloworld-private, skip                                                                                                                                                     \n SUCCESS  Update apps/v1:Deployment:simple-service:simple-service-dev-helloworld success                                                                                                                                                      \nUpdate apps/v1:Deployment:simple-service:simple-service-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"We can verify the application container (in the deployment template) now has the updated resources attributes (cpu:250m, memory:256Mi) as defined in the container configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get deployment -n simple-service -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          ...\n          image: gcr.io/google-samples/gb-frontend:v5\n          ...\n          resources:\n            limits:\n              cpu: 250m\n              memory: 256Mi\n...\n")))}u.isMDXComponent=!0}}]);