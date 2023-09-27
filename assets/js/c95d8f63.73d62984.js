"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6134],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?t.createElement(h,a(a({ref:n},c),{},{components:r})):t.createElement(h,a({ref:n},c))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8663:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=r(7462),o=(r(7294),r(3905));const i={},a="Configure Resource Specification",l={unversionedId:"user_docs/guides/working-with-k8s/resource-spec",id:"user_docs/guides/working-with-k8s/resource-spec",title:"Configure Resource Specification",description:"You can manage container-level resource specification in the AppConfiguration model via the resources field (under the Container schema).",source:"@site/docs/user_docs/guides/working-with-k8s/5-resource-spec.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/resource-spec",permalink:"/docs/user_docs/guides/working-with-k8s/resource-spec",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/5-resource-spec.md",tags:[],version:"current",lastUpdatedBy:"shaofan-hs",lastUpdatedAt:1695784789,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:5,frontMatter:{},sidebar:"user_docs",previous:{title:"Upgrade Image",permalink:"/docs/user_docs/guides/working-with-k8s/image-upgrade"},next:{title:"Differentiated Configurations",permalink:"/docs/user_docs/guides/working-with-k8s/differentiated-configuration"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],c={toc:p};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-resource-specification"},"Configure Resource Specification"),(0,o.kt)("p",null,"You can manage container-level resource specification in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," field (under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," schema)."),(0,o.kt)("p",null,"For the full ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," schema reference, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/reference/model/catalog_models/workload/doc_service#schema-container"},"here")," for more details."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,o.kt)("p",null,"The example below also requires you to have ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#initializing"},"initialized the project")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#kclmod"},(0,o.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the project directory."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Update the resources value in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\n\nhelloworld: ac.AppConfiguration {\n    workload.containers.helloworld: {\n        # dev stack has different resource requirements\n        # set resources to your want\n        # before:\n        # resources: {\n        #     "cpu": "500m"\n        #     "memory": "512M"\n        # }\n        # after: \n        resources: {\n            "cpu": "250m"\n            "memory": "256Mi"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Everything else in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.k")," stay the same."),(0,o.kt)("h2",{id:"applying"},"Applying"),(0,o.kt)("p",null,"Re-run steps in ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#applying"},"Applying"),", resource scaling is completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion apply\n\u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                                                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  UnChanged\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:helloworld, skip                                                                                                                                                                                                                               \n SUCCESS  UnChanged v1:Service:helloworld:helloworld-dev-helloworld-private, skip                                                                                                                                                                                               \n SUCCESS  Update apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nUpdate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,o.kt)("h2",{id:"validation"},"Validation"),(0,o.kt)("p",null,"We can verify the application container (in the deployment template) now has the updated resources attributes (cpu:250m, memory:256Mi) as defined in the container configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get deployment -n helloworld -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          ...\n          image: gcr.io/google-samples/gb-frontend:v4\n          ...\n          resources:\n            limits:\n              cpu: 250m\n              memory: 256Mi\n...\n")))}d.isMDXComponent=!0}}]);