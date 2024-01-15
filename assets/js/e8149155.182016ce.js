"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2839],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,k=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return t?o.createElement(k,i(i({ref:n},c),{},{components:t})):o.createElement(k,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const a={sidebar_position:5},i="Application Networking",p={unversionedId:"kusion/config-walkthrough/networking",id:"version-v0.9/kusion/config-walkthrough/networking",title:"Application Networking",description:"In addition to configuring application's container specifications, you can also configure its networking behaviors, including how to expose the application and how it can be accessed.",source:"@site/versioned_docs/version-v0.9/kusion/config-walkthrough/networking.md",sourceDirName:"kusion/config-walkthrough",slug:"/kusion/config-walkthrough/networking",permalink:"/docs/kusion/config-walkthrough/networking",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/config-walkthrough/networking.md",tags:[],version:"v0.9",lastUpdatedBy:"Forest",lastUpdatedAt:1705299749,formattedLastUpdatedAt:"Jan 15, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"kusion",previous:{title:"Workload",permalink:"/docs/kusion/config-walkthrough/workload"},next:{title:"Managed Databases",permalink:"/docs/kusion/config-walkthrough/database"}},l={},s=[{value:"Import",id:"import",level:2},{value:"Private vs Public Access",id:"private-vs-public-access",level:2},{value:"Mapping ports",id:"mapping-ports",level:2},{value:"Exposing multiple ports",id:"exposing-multiple-ports",level:2},{value:"Choosing protocol",id:"choosing-protocol",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-networking"},"Application Networking"),(0,r.kt)("p",null,"In addition to configuring application's ",(0,r.kt)("a",{parentName:"p",href:"workload#configure-containers"},"container specifications"),", you can also configure its networking behaviors, including how to expose the application and how it can be accessed."),(0,r.kt)("p",null,"In future versions, this will also include ingress-based routing strategy and DNS configurations."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," package. For more details on KCL package import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.network as n\n")),(0,r.kt)("h2",{id:"private-vs-public-access"},"Private vs Public Access"),(0,r.kt)("p",null,"Private network access means the service can only be access from within the target cluster."),(0,r.kt)("p",null,"Public access is implemented using public load balancers on the cloud as of v0.9.0. This generally requires a Kubernetes cluster that is running on the cloud with a vendor-specific service controller."),(0,r.kt)("p",null,"Any ports defined default to private access unless explicitly specified."),(0,r.kt)("p",null,"To expose port 80 to be accessed privately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n}\n")),(0,r.kt)("p",null,"To expose port 80 to be accessed publicly on AWS using an AWS Load Balancer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                type: "aws"\n                port: 80\n                public: True\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"mapping-ports"},"Mapping ports"),(0,r.kt)("p",null,"To expose a port ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," that maps to a different port ",(0,r.kt)("inlineCode",{parentName:"p"},"8088")," on the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n                targetPort: 8088\n            }\n        ]\n    }\n}\n")),(0,r.kt)("h2",{id:"exposing-multiple-ports"},"Exposing multiple ports"),(0,r.kt)("p",null,"You can also expose multiple ports and configure them separately. "),(0,r.kt)("p",null,"To expose port 80 to be accessed publicly on an AliCloud load balancer, and port 9099 for private access (to be scraped by Prometheus, for example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                type: "aliyun"\n                port: 80\n                public: True\n            }\n            n.Port {\n                port: 9099\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"choosing-protocol"},"Choosing protocol"),(0,r.kt)("p",null,"To expose a port using the ",(0,r.kt)("inlineCode",{parentName:"p"},"UDP")," protocol:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n                targetPort: 8088\n                protocol: "UDP"\n            }\n        ]\n    }\n}\n')))}u.isMDXComponent=!0}}]);