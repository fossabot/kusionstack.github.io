"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1511],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={},a="Differentiated Configurations",s={unversionedId:"user_docs/guides/working-with-k8s/differentiated-configuration",id:"user_docs/guides/working-with-k8s/differentiated-configuration",title:"Differentiated Configurations",description:"When describing an application, you can set different, stack-specific values in main.k in the stack directory, while keeping the common configuration in base/base.k in the project directory.",source:"@site/docs/user_docs/guides/working-with-k8s/6-differentiated-configuration.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/differentiated-configuration",permalink:"/docs/user_docs/guides/working-with-k8s/differentiated-configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/6-differentiated-configuration.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1695803180,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:6,frontMatter:{},sidebar:"user_docs",previous:{title:"Configure Resource Specification",permalink:"/docs/user_docs/guides/working-with-k8s/resource-spec"},next:{title:"Configure Monitoring Behavior With Prometheus",permalink:"/docs/user_docs/guides/observability/prometheus"}},c={},l=[{value:"Pre-requisite",id:"pre-requisite",level:2},{value:"Example",id:"example",level:2}],p={toc:l};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"differentiated-configurations"},"Differentiated Configurations"),(0,i.kt)("p",null,"When describing an application, you can set different, stack-specific values in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.k")," in the stack directory, while keeping the common configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"base/base.k")," in the project directory."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"About Project and Stack, please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/glossary"},"Project&Stack")," for more details.")),(0,i.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,i.kt)("p",null,"The example below also requires you to have ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#initializing"},"initialized the project")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,i.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#kclmod"},(0,i.kt)("inlineCode",{parentName:"a"},"kcl.mod")," file")," under the project directory."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Base config in the ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld/base/base.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.workload.container.probe as p\n\nhelloworld: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "helloworld": c.Container {\n                image: "nginx"\n                # Two environment variables will be set\n                env: {\n                    "env1": "VALUE"\n                    "env2": "VALUE2"\n                }\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n                # Configure an HTTP readiness probe\n                readinessProbe: p.Probe {\n                    probeHandler: p.Http {\n                        url: "http://localhost:80"\n                    }\n                    initialDelaySeconds: 10\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 8080\n                targetPort: 80\n            }\n        ]\n    }\n}\n')),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," stack config in the ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld/dev/main.k"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import catalog.models.schema.v1 as ac\n\n# main.k declares customized configurations for dev stack.\nhelloworld: ac.AppConfiguration {\n    workload.containers.helloworld: {\n        # dev stack has different app configuration\n        image = "gcr.io/google-samples/gb-frontend:v5"\n        resources = {\n            "cpu": "250m"\n            "memory": "256Mi"\n        }\n    }\n    workload.replicas = 3\n}\n')),(0,i.kt)("p",null,"This will be merged with the ",(0,i.kt)("inlineCode",{parentName:"p"},"helloworld")," AppConfiguration in ",(0,i.kt)("inlineCode",{parentName:"p"},"base.k")," and override the common configuration defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"base.k"),", such as ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas"),"."))}d.isMDXComponent=!0}}]);