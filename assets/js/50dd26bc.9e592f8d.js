"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8625],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(g,o(o({ref:n},c),{},{components:t})):i.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const r={},o="Upgrade Image",p={unversionedId:"kusion/user-guides/working-with-k8s/image-upgrade",id:"kusion/user-guides/working-with-k8s/image-upgrade",title:"Upgrade Image",description:"You can declare the application's container image via image field of the Container schema.",source:"@site/docs/kusion/5-user-guides/2-working-with-k8s/4-image-upgrade.md",sourceDirName:"kusion/5-user-guides/2-working-with-k8s",slug:"/kusion/user-guides/working-with-k8s/image-upgrade",permalink:"/docs/next/kusion/user-guides/working-with-k8s/image-upgrade",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/5-user-guides/2-working-with-k8s/4-image-upgrade.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1705030319,formattedLastUpdatedAt:"Jan 12, 2024",sidebarPosition:4,frontMatter:{},sidebar:"kusion",previous:{title:"Expose Service",permalink:"/docs/next/kusion/user-guides/working-with-k8s/service"},next:{title:"Configure Resource Specification",permalink:"/docs/next/kusion/user-guides/working-with-k8s/resource-spec"}},l={},s=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Managing Workspace Configuration",id:"managing-workspace-configuration",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrade-image"},"Upgrade Image"),(0,a.kt)("p",null,"You can declare the application's container image via ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," field of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Container")," schema."),(0,a.kt)("p",null,"For the full ",(0,a.kt)("inlineCode",{parentName:"p"},"Container")," schema reference, please see ",(0,a.kt)("a",{parentName:"p",href:"../../reference/modules/catalog-models/workload/service#schema-container"},"here")," for more details."),(0,a.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,a.kt)("p",null,"The example below also requires you to have ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion workspace create")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will create a workspace and also generate a ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,a.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the stack directory."),(0,a.kt)("h2",{id:"managing-workspace-configuration"},"Managing Workspace Configuration"),(0,a.kt)("p",null,"In the first guide in this series, we introduced a step to ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#initializing-workspace-configuration"},"initialize a workspace")," with an empty configuration. The same empty configuration will still work in this guide, no changes are required there."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Update the image value in ",(0,a.kt)("inlineCode",{parentName:"p"},"simple-service/dev/main.k"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\n\nhelloworld: ac.AppConfiguration {\n    workload.containers.nginx: {\n        ...\n        # before: \n        # image = "gcr.io/google-samples/gb-frontend:v4"\n        # after: \n        image = "gcr.io/google-samples/gb-frontend:v5"\n        ...\n    }\n}\n')),(0,a.kt)("p",null,"Everything else in ",(0,a.kt)("inlineCode",{parentName:"p"},"main.k")," stay the same."),(0,a.kt)("h2",{id:"applying"},"Applying"),(0,a.kt)("p",null,"Re-run steps in ",(0,a.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", update image is completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kusion apply\n \u2714\ufe0e  Generating Intent in the Stack dev...                                                                                                                                                                                                     \nStack: dev  ID                                                               Action\n* \u251c\u2500     v1:Namespace:simple-service                                      UnChanged\n* \u251c\u2500     v1:Service:simple-service:simple-service-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:simple-service:simple-service-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:simple-service, skip                                                                                                                                                                                         \n SUCCESS  UnChanged v1:Service:simple-service:simple-service-dev-helloworld-private, skip                                                                                                                                                     \n SUCCESS  Update apps/v1:Deployment:simple-service:simple-service-dev-helloworld success                                                                                                                                                      \nUpdate apps/v1:Deployment:simple-service:simple-service-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,"We can verify the application container (in the deployment template) now has the updated image (v5) as defined in the container configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get deployment -n simple-service -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          ...\n          image: gcr.io/google-samples/gb-frontend:v5\n          ...\n...\n")))}d.isMDXComponent=!0}}]);