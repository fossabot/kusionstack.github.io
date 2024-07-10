"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75436],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(h,a(a({ref:n},c),{},{components:t})):r.createElement(h,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77645:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={},a="Configure Resource Specification",l={unversionedId:"guides/working-with-k8s/resource-spec",id:"version-v0.9/guides/working-with-k8s/resource-spec",title:"Configure Resource Specification",description:"You can manage container-level resource specification in the AppConfiguration model via the resources field (under the Container schema).",source:"@site/docs_versioned_docs/version-v0.9/guides/working-with-k8s/5-resource-spec.md",sourceDirName:"guides/working-with-k8s",slug:"/guides/working-with-k8s/resource-spec",permalink:"/zh/docs/v0.9/guides/working-with-k8s/resource-spec",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/guides/working-with-k8s/5-resource-spec.md",tags:[],version:"v0.9",lastUpdatedBy:"elliotxx",lastUpdatedAt:1720600765,formattedLastUpdatedAt:"2024\u5e747\u670810\u65e5",sidebarPosition:5,frontMatter:{},sidebar:"kusion",previous:{title:"Upgrade Image",permalink:"/zh/docs/v0.9/guides/working-with-k8s/image-upgrade"},next:{title:"Configure Monitoring Behavior With Prometheus",permalink:"/zh/docs/v0.9/guides/observability/prometheus"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-resource-specification"},"Configure Resource Specification"),(0,o.kt)("p",null,"You can manage container-level resource specification in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," model via the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," field (under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," schema)."),(0,o.kt)("p",null,"For the full ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," schema reference, please see ",(0,o.kt)("a",{parentName:"p",href:"../../reference/model/catalog_models/workload/doc_service#schema-container"},"here")," for more details."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,o.kt)("p",null,"The example below also requires you to have ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#initializing"},"initialized the project")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#kclmod"},(0,o.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the project directory."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Update the resources value in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\n\nhelloworld: ac.AppConfiguration {\n    workload.containers.helloworld: {\n        # dev stack has different resource requirements\n        # set resources to your want\n        # before:\n        # resources: {\n        #     "cpu": "500m"\n        #     "memory": "512M"\n        # }\n        # after: \n        resources: {\n            "cpu": "250m"\n            "memory": "256Mi"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Everything else in ",(0,o.kt)("inlineCode",{parentName:"p"},"main.k")," stay the same."),(0,o.kt)("h2",{id:"applying"},"Applying"),(0,o.kt)("p",null,"Re-run steps in ",(0,o.kt)("a",{parentName:"p",href:"deploy-application#applying"},"Applying"),", resource scaling is completed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kusion apply\n\u2714\ufe0e  Generating Spec in the Stack dev...                                                                                                                                                                                                                                         \nStack: dev  ID                                                       Action\n* \u251c\u2500     v1:Namespace:helloworld                                  UnChanged\n* \u251c\u2500     v1:Service:helloworld:helloworld-dev-helloworld-private  UnChanged\n* \u2514\u2500     apps/v1:Deployment:helloworld:helloworld-dev-helloworld  Update\n\n\n? Do you want to apply these diffs? yes\nStart applying diffs ...\n SUCCESS  UnChanged v1:Namespace:helloworld, skip                                                                                                                                                                                                                               \n SUCCESS  UnChanged v1:Service:helloworld:helloworld-dev-helloworld-private, skip                                                                                                                                                                                               \n SUCCESS  Update apps/v1:Deployment:helloworld:helloworld-dev-helloworld success                                                                                                                                                                                                \nUpdate apps/v1:Deployment:helloworld:helloworld-dev-helloworld success [3/3] \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 100% | 0s\nApply complete! Resources: 0 created, 1 updated, 0 deleted.\n")),(0,o.kt)("h2",{id:"validation"},"Validation"),(0,o.kt)("p",null,"We can verify the application container (in the deployment template) now has the updated resources attributes (cpu:250m, memory:256Mi) as defined in the container configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get deployment -n helloworld -o yaml\n...\n    template:\n      ...\n      spec:\n        containers:\n        - env:\n          ...\n          image: gcr.io/google-samples/gb-frontend:v4\n          ...\n          resources:\n            limits:\n              cpu: 250m\n              memory: 256Mi\n...\n")))}d.isMDXComponent=!0}}]);