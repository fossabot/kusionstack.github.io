"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||c[g]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="Upgrade Image",l={unversionedId:"user_docs/guides/working-with-k8s/image-upgrade",id:"user_docs/guides/working-with-k8s/image-upgrade",title:"Upgrade Image",description:"You can declare the application's container image via image field of the Container schema.",source:"@site/docs/user_docs/guides/working-with-k8s/4-image-upgrade.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/image-upgrade",permalink:"/docs/user_docs/guides/working-with-k8s/image-upgrade",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/4-image-upgrade.md",tags:[],version:"current",lastUpdatedBy:"shaofan-hs",lastUpdatedAt:1700126042,formattedLastUpdatedAt:"Nov 16, 2023",sidebarPosition:4,frontMatter:{},sidebar:"user_docs",previous:{title:"Expose Service",permalink:"/docs/user_docs/guides/working-with-k8s/service"},next:{title:"Configure Resource Specification",permalink:"/docs/user_docs/guides/working-with-k8s/resource-spec"}},p={},s=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrade-image"},"Upgrade Image"),(0,a.kt)("p",null,"You can declare the application's container image via ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," field of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Container")," schema."),(0,a.kt)("p",null,"For the full ",(0,a.kt)("inlineCode",{parentName:"p"},"Container")," schema reference, please see ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/reference/model/catalog_models/workload/doc_service#schema-container"},"here")," for more details."),(0,a.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,a.kt)("p",null,"The example below also requires you to have ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#initializing"},"initialized the project")," using the ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#kclmod"},(0,a.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the project directory."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Update the image value in ",(0,a.kt)("inlineCode",{parentName:"p"},"dev/main.k"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\n\nhelloworld: ac.AppConfiguration {\n    workload.containers.nginx: {\n        # dev stack has different image\n        # set image to your want\n        # before: \n        # image = "gcr.io/google-samples/gb-frontend:v4"\n        # after: \n        image = "gcr.io/google-samples/gb-frontend:v5"\n    }\n}\n')),(0,a.kt)("p",null,"Everything else in ",(0,a.kt)("inlineCode",{parentName:"p"},"main.k")," stay the same."),(0,a.kt)("h2",{id:"applying"},"Applying"),(0,a.kt)("p",null,"Re-run steps in ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#applying"},"Applying"),", update image is completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kusion apply\n\u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                                                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  UnChanged\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:helloworld, skip                                                                                                                                                                                                                               \n SUCCESS  UnChanged v1:Service:helloworld:helloworld-dev-helloworld-private, skip                                                                                                                                                                                               \n SUCCESS  Update apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nUpdate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,a.kt)("h2",{id:"validation"},"Validation"),(0,a.kt)("p",null,"We can verify the application container (in the deployment template) now has the updated image (v5) as defined in the container configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get deployment -n helloworld -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          ...\n          image: gcr.io/google-samples/gb-frontend:v5\n          ...\n...\n")))}c.isMDXComponent=!0}}]);