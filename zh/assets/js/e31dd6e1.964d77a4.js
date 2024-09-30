"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return n?o.createElement(m,a(a({ref:t},s),{},{components:n})):o.createElement(m,a({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={id:"networking"},a="Application Networking",p={unversionedId:"configuration-walkthrough/networking",id:"version-v0.10/configuration-walkthrough/networking",title:"Application Networking",description:"In addition to configuring application's container specifications, you can also configure its networking behaviors, including how to expose the application and how it can be accessed.",source:"@site/docs_versioned_docs/version-v0.10/4-configuration-walkthrough/5-networking.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/networking",permalink:"/zh/docs/v0.10/configuration-walkthrough/networking",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/4-configuration-walkthrough/5-networking.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727679725,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:5,frontMatter:{id:"networking"},sidebar:"kusion",previous:{title:"Workload",permalink:"/zh/docs/v0.10/configuration-walkthrough/workload"},next:{title:"Managed Databases",permalink:"/zh/docs/v0.10/configuration-walkthrough/databse"}},l={},c=[{value:"Import",id:"import",level:2},{value:"Private vs Public Access",id:"private-vs-public-access",level:2},{value:"Mapping ports",id:"mapping-ports",level:2},{value:"Exposing multiple ports",id:"exposing-multiple-ports",level:2},{value:"Choosing protocol",id:"choosing-protocol",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-networking"},"Application Networking"),(0,r.kt)("p",null,"In addition to configuring application's ",(0,r.kt)("a",{parentName:"p",href:"workload#configure-containers"},"container specifications"),", you can also configure its networking behaviors, including how to expose the application and how it can be accessed."),(0,r.kt)("p",null,"In future versions, this will also include ingress-based routing strategy and DNS configurations."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," package. For more details on KCL package import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.network as n\n")),(0,r.kt)("h2",{id:"private-vs-public-access"},"Private vs Public Access"),(0,r.kt)("p",null,"Private network access means the service can only be access from within the target cluster."),(0,r.kt)("p",null,"Public access is implemented using public load balancers on the cloud. This generally requires a Kubernetes cluster that is running on the cloud with a vendor-specific service controller."),(0,r.kt)("p",null,"Any ports defined default to private access unless explicitly specified."),(0,r.kt)("p",null,"To expose port 80 to be accessed privately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n}\n")),(0,r.kt)("p",null,"To expose port 80 to be accessed publicly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n                public: True\n            }\n        ]\n    }\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The CSP (Cloud Service Provider) used to provide load balancers is defined by platform engineers in workspace.")),(0,r.kt)("h2",{id:"mapping-ports"},"Mapping ports"),(0,r.kt)("p",null,"To expose a port ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," that maps to a different port ",(0,r.kt)("inlineCode",{parentName:"p"},"8088")," on the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n                targetPort: 8088\n            }\n        ]\n    }\n}\n")),(0,r.kt)("h2",{id:"exposing-multiple-ports"},"Exposing multiple ports"),(0,r.kt)("p",null,"You can also expose multiple ports and configure them separately. "),(0,r.kt)("p",null,"To expose port 80 to be accessed publicly, and port 9099 for private access (to be scraped by Prometheus, for example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n                public: True\n            }\n            n.Port {\n                port: 9099\n            }\n        ]\n    }\n}\n")),(0,r.kt)("h2",{id:"choosing-protocol"},"Choosing protocol"),(0,r.kt)("p",null,"To expose a port using the ",(0,r.kt)("inlineCode",{parentName:"p"},"UDP")," protocol:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        ports: [\n            n.Port {\n                port: 80\n                targetPort: 8088\n                protocol: "UDP"\n            }\n        ]\n    }\n}\n')))}u.isMDXComponent=!0}}]);