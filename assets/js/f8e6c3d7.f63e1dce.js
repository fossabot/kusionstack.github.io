"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:5},i="Application Networking",p={unversionedId:"config-walkthrough/networking",id:"version-v0.9/config-walkthrough/networking",title:"Application Networking",description:"In addition to configuring application's container specifications, you can also configure its networking behaviors, including how to expose the application and how it can be accessed.",source:"@site/docs_versioned_docs/version-v0.9/config-walkthrough/networking.md",sourceDirName:"config-walkthrough",slug:"/config-walkthrough/networking",permalink:"/docs/v0.9/config-walkthrough/networking",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/config-walkthrough/networking.md",tags:[],version:"v0.9",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728109585,formattedLastUpdatedAt:"Oct 5, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"kusion",previous:{title:"Workload",permalink:"/docs/v0.9/config-walkthrough/workload"},next:{title:"Managed Databases",permalink:"/docs/v0.9/config-walkthrough/database"}},l={},c=[{value:"Import",id:"import",level:2},{value:"Private vs Public Access",id:"private-vs-public-access",level:2},{value:"Mapping ports",id:"mapping-ports",level:2},{value:"Exposing multiple ports",id:"exposing-multiple-ports",level:2},{value:"Choosing protocol",id:"choosing-protocol",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-networking"},"Application Networking"),(0,r.kt)("p",null,"In addition to configuring application's ",(0,r.kt)("a",{parentName:"p",href:"workload#configure-containers"},"container specifications"),", you can also configure its networking behaviors, including how to expose the application and how it can be accessed."),(0,r.kt)("p",null,"In future versions, this will also include ingress-based routing strategy and DNS configurations."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," package. For more details on KCL package import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.network as n\n")),(0,r.kt)("h2",{id:"private-vs-public-access"},"Private vs Public Access"),(0,r.kt)("p",null,"Private network access means the service can only be access from within the target cluster."),(0,r.kt)("p",null,"Public access is implemented using public load balancers on the cloud as of v0.9.0. This generally requires a Kubernetes cluster that is running on the cloud with a vendor-specific service controller."),(0,r.kt)("p",null,"Any ports defined default to private access unless explicitly specified."),(0,r.kt)("p",null,"To expose port 80 to be accessed privately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n}\n")),(0,r.kt)("p",null,"To expose port 80 to be accessed publicly on AWS using an AWS Load Balancer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                type: "aws"\n                port: 80\n                public: True\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"mapping-ports"},"Mapping ports"),(0,r.kt)("p",null,"To expose a port ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," that maps to a different port ",(0,r.kt)("inlineCode",{parentName:"p"},"8088")," on the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n                targetPort: 8088\n            }\n        ]\n    }\n}\n")),(0,r.kt)("h2",{id:"exposing-multiple-ports"},"Exposing multiple ports"),(0,r.kt)("p",null,"You can also expose multiple ports and configure them separately. "),(0,r.kt)("p",null,"To expose port 80 to be accessed publicly on an AliCloud load balancer, and port 9099 for private access (to be scraped by Prometheus, for example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                type: "aliyun"\n                port: 80\n                public: True\n            }\n            n.Port {\n                port: 9099\n            }\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"choosing-protocol"},"Choosing protocol"),(0,r.kt)("p",null,"To expose a port using the ",(0,r.kt)("inlineCode",{parentName:"p"},"UDP")," protocol:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n                targetPort: 8088\n                protocol: "UDP"\n            }\n        ]\n    }\n}\n')))}u.isMDXComponent=!0}}]);