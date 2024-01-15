"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:7},i="Secret Management",s={unversionedId:"kusion/config-walkthrough/secret",id:"version-v0.9/kusion/config-walkthrough/secret",title:"Secret Management",description:"You can manage application secrets via the secrets attribute in the workload schema. Depending on the context of your application, this might include pieces of credentials required to access a third-party application.",source:"@site/versioned_docs/version-v0.9/kusion/config-walkthrough/secret.md",sourceDirName:"kusion/config-walkthrough",slug:"/kusion/config-walkthrough/secret",permalink:"/docs/v0.9/kusion/config-walkthrough/secret",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/config-walkthrough/secret.md",tags:[],version:"v0.9",lastUpdatedBy:"KK",lastUpdatedAt:1705317687,formattedLastUpdatedAt:"Jan 15, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"kusion",previous:{title:"Managed Databases",permalink:"/docs/v0.9/kusion/config-walkthrough/database"},next:{title:"Application Monitoring",permalink:"/docs/v0.9/kusion/config-walkthrough/monitoring"}},c={},l=[{value:"Import",id:"import",level:2},{value:"Creating a secret",id:"creating-a-secret",level:2},{value:"Immutable secrets",id:"immutable-secrets",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"secret-management"},"Secret Management"),(0,r.kt)("p",null,"You can manage application secrets via the ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"workload")," schema. Depending on the context of your application, this might include pieces of credentials required to access a third-party application."),(0,r.kt)("p",null,"If your application depends on any cloud resources that are managed by Kusion, their credentials are automatically managed by Kusion (generated and injected into application runtime environment variable). You shouldn't have to manually create those."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If your application workloads are also running on the cloud, it's recommended to leverage identity-based keyless authentication as much as possible to minimize the nuisance of secret management. Application identities will be supported in a future version of Kusion.")),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"catalog")," package. For more details on KCL package import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.secret as sec\n")),(0,r.kt)("h2",{id:"creating-a-secret"},"Creating a secret"),(0,r.kt)("p",null,"As of version 0.9.0, Kusion supports creating secrets by turning the ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets")," declared in the configuration files into Kubernetes secrets."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As a general principle, storing secrets in a plain text configuration file is highly discouraged. The recommended approach is to store the secrets in a third-party vault (such as Hashicorp Vault, AWS Secrets Manager and KMS, Azure Key Vault, etc) and retrieve the secret in the runtime only.")),(0,r.kt)("p",null,"Create a secret with the type ",(0,r.kt)("inlineCode",{parentName:"p"},"Opaque"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        secrets: {\n            "my-secret": sec.Secret {\n                type: "opaque"\n                data: {\n                    "hello": "world"\n                    "foo": "bar"\n                }\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Create a secret with the type ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/basic-auth"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        secrets: {\n            "my-secret": sec.Secret {\n                type: "basic"\n                data: {\n                    "username": "admin"\n                    "password": "******"\n                }\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"When creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/basic-auth")," type secret, the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field must have at least one of ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,r.kt)("p",null,"For more details about the secret types, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Kubernetes secret documentation"),"."),(0,r.kt)("h2",{id:"immutable-secrets"},"Immutable secrets"),(0,r.kt)("p",null,"You can also declare a secret as immutable to prevent it from being changed accidentally."),(0,r.kt)("p",null,"To declare a secret as immutable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'myapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        secrets: {\n            "my-secret": sec.Secret {\n                # ...\n                immutable: True\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"You can change a secret from mutable to immutable but not the other way around. That is because the Kubelet will stop watching secrets that are immutable. As the name suggests, you can only delete and re-create immutable secrets but you cannot change them."))}u.isMDXComponent=!0}}]);