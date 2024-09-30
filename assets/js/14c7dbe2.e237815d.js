"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30606],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||i;return t?o.createElement(m,a(a({ref:n},l),{},{components:t})):o.createElement(m,a({ref:n},l))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20634:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={id:"networking"},a="Application Networking",p={unversionedId:"configuration-walkthrough/networking",id:"version-v0.12/configuration-walkthrough/networking",title:"Application Networking",description:"In addition to configuring application's container specifications, you can also configure its networking behaviors, including how to expose the application and how it can be accessed. You can specify a network module in the accessories field in AppConfiguration to achieve that.",source:"@site/docs_versioned_docs/version-v0.12/4-configuration-walkthrough/5-networking.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/networking",permalink:"/docs/v0.12/configuration-walkthrough/networking",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/4-configuration-walkthrough/5-networking.md",tags:[],version:"v0.12",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727688217,formattedLastUpdatedAt:"Sep 30, 2024",sidebarPosition:5,frontMatter:{id:"networking"},sidebar:"kusion",previous:{title:"Workload",permalink:"/docs/v0.12/configuration-walkthrough/workload"},next:{title:"Managed Databases",permalink:"/docs/v0.12/configuration-walkthrough/databse"}},c={},s=[{value:"Import",id:"import",level:2},{value:"Private vs Public Access",id:"private-vs-public-access",level:2},{value:"Mapping ports",id:"mapping-ports",level:2},{value:"Exposing multiple ports",id:"exposing-multiple-ports",level:2},{value:"Choosing protocol",id:"choosing-protocol",level:2}],l={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-networking"},"Application Networking"),(0,r.kt)("p",null,"In addition to configuring application's ",(0,r.kt)("a",{parentName:"p",href:"workload#configure-containers"},"container specifications"),", you can also configure its networking behaviors, including how to expose the application and how it can be accessed. You can specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," module in the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessories")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," to achieve that."),(0,r.kt)("p",null,"In future versions, this will also include ingress-based routing strategy and DNS configurations."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kam")," package and the ",(0,r.kt)("inlineCode",{parentName:"p"},"network")," Kusion Module. For more details on KCL package and module import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," must contain reference to the network module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#...\n\n[dependencies]\nnetwork = { oci = "oci://ghcr.io/kusionstack/network", tag = "0.2.0" }\n\n#...\n')),(0,r.kt)("h2",{id:"private-vs-public-access"},"Private vs Public Access"),(0,r.kt)("p",null,"Private network access means the service can only be access from within the target cluster."),(0,r.kt)("p",null,"Public access is implemented using public load balancers on the cloud. This generally requires a Kubernetes cluster that is running on the cloud with a vendor-specific service controller."),(0,r.kt)("p",null,"Any ports defined default to private access unless explicitly specified."),(0,r.kt)("p",null,"To expose port 80 to be accessed privately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        # ...\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 80\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("p",null,"To expose port 80 to be accessed publicly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        # ...\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 80\n                    public: True\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The CSP (Cloud Service Provider) used to provide load balancers is defined by platform engineers in workspace.")),(0,r.kt)("h2",{id:"mapping-ports"},"Mapping ports"),(0,r.kt)("p",null,"To expose a port ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," that maps to a different port ",(0,r.kt)("inlineCode",{parentName:"p"},"8088")," on the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        # ...\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 80\n                    targetPort: 8088\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"exposing-multiple-ports"},"Exposing multiple ports"),(0,r.kt)("p",null,"You can also expose multiple ports and configure them separately. "),(0,r.kt)("p",null,"To expose port 80 to be accessed publicly, and port 9099 for private access (to be scraped by Prometheus, for example):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        # ...\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 80\n                    public: True\n                }\n                n.Port {\n                    port: 9099\n                }\n            ]\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"choosing-protocol"},"Choosing protocol"),(0,r.kt)("p",null,"To expose a port using the ",(0,r.kt)("inlineCode",{parentName:"p"},"UDP")," protocol:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport network as n\n\nmyapp: ac.AppConfiguration {\n    workload: service.Service {\n        # ...\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 80\n                    targetPort: 8088\n                    protocol: "UDP"\n                }\n            ]\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);