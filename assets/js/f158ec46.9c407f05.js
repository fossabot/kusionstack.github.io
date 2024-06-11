"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={id:"secret"},o="Secrets",i={unversionedId:"configuration-walkthrough/secret",id:"version-v0.10/configuration-walkthrough/secret",title:"Secrets",description:"Secrets are used to store sensitive data like passwords, API keys, TLS certificates, tokens, or other credentials. Kusion provides multiple secret types, and makes it easy to be consumed in containers.",source:"@site/docs_versioned_docs/version-v0.10/4-configuration-walkthrough/7-secret.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/secret",permalink:"/docs/v0.10/configuration-walkthrough/secret",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/4-configuration-walkthrough/7-secret.md",tags:[],version:"v0.10",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1718116037,formattedLastUpdatedAt:"Jun 11, 2024",sidebarPosition:7,frontMatter:{id:"secret"},sidebar:"kusion",previous:{title:"Managed Databases",permalink:"/docs/v0.10/configuration-walkthrough/databse"},next:{title:"Application Monitoring",permalink:"/docs/v0.10/configuration-walkthrough/monitoring"}},c={},l=[{value:"Using secrets in workload",id:"using-secrets-in-workload",level:2},{value:"Consume secret in an environment variable",id:"consume-secret-in-an-environment-variable",level:3},{value:"Consume all secret keys as environment variables",id:"consume-all-secret-keys-as-environment-variables",level:3},{value:"Types of secrets",id:"types-of-secrets",level:2},{value:"Basic secrets",id:"basic-secrets",level:3},{value:"Token secrets",id:"token-secrets",level:3},{value:"Opaque secrets",id:"opaque-secrets",level:3},{value:"Certificate secrets",id:"certificate-secrets",level:3},{value:"External secrets",id:"external-secrets",level:3},{value:"Immutable secrets",id:"immutable-secrets",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"secrets"},"Secrets"),(0,a.kt)("p",null,"Secrets are used to store sensitive data like passwords, API keys, TLS certificates, tokens, or other credentials. Kusion provides multiple secret types, and makes it easy to be consumed in containers."),(0,a.kt)("p",null,"For application dependent cloud resources that are managed by Kusion, their credentials are automatically managed by Kusion (generated and injected into application runtime environment variable). You shouldn't have to manually create those."),(0,a.kt)("h2",{id:"using-secrets-in-workload"},"Using secrets in workload"),(0,a.kt)("p",null,"Secrets must be defined in AppConfiguration. The values can be generated by Kusion or reference existing secrets stored in third-party vault. Secrets can be consumed in containers by referencing them through the ",(0,a.kt)("inlineCode",{parentName:"p"},"secret://<secret_name>/<key>")," URI syntax."),(0,a.kt)("h3",{id:"consume-secret-in-an-environment-variable"},"Consume secret in an environment variable"),(0,a.kt)("p",null,"You can consume the data in Secrets as environment variable in your container. For example the db container uses an environment variable to set the root password."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import models.schema.v1 as ac\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.container as c\nimport models.schema.v1.workload.secret as sec\n\nsampledb: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "db": c.Container {\n                image: "mysql"\n                env: {\n                    # Consume db-root-password secret in environment\n                    "ROOT_PASSWORD": "secret://db-root-password/token"\n                }\n            }\n        }\n        # Secrets used to generate token\n        secrets: {\n            "init-info": sec.Secret {\n                type: "token"\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"The example shows the secret ",(0,a.kt)("inlineCode",{parentName:"p"},"root-password")," being consumed as an environment variable in the db container. The secret is of type token and will automatically be generated at runtime by Kusion."),(0,a.kt)("h3",{id:"consume-all-secret-keys-as-environment-variables"},"Consume all secret keys as environment variables"),(0,a.kt)("p",null,"Sometimes your secret contains multiple data that need to be consumed as environment variables. The example below shows how to consume all the values in a secret as environment variables named after the keys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import models.schema.v1 as ac\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.container as c\nimport models.schema.v1.workload.secret as sec\n\nsampledb: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "db": c.Container {\n                image: "mysql"\n                env: {\n                    # Consume all init-info secret keys as environment variables\n                    "secret://init-info": ""\n                }\n            }\n        }\n        # Secrets used to init mysql instance\n        secrets: {\n            "init-info": sec.Secret {\n                type: "opaque"\n                data: {\n                    "ROOT_PASSWORD": "admin"\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,'This will set the environment variable "ROOT_PASSWORD" to the value "admin" in the db container.'),(0,a.kt)("h2",{id:"types-of-secrets"},"Types of secrets"),(0,a.kt)("p",null,"Kusion provides multiple types of secrets to application developers."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Basic: Used to generate and/or store usernames and passwords."),(0,a.kt)("li",{parentName:"ol"},"Token: Used to generate and/or store secret strings for password."),(0,a.kt)("li",{parentName:"ol"},"Opaque: A generic secret that can store arbitrary user-defined data."),(0,a.kt)("li",{parentName:"ol"},"Certificate: Used to store a certificate and its associated key that are typically used for TLS."),(0,a.kt)("li",{parentName:"ol"},"External: Used to retrieve secret form third-party vault.")),(0,a.kt)("h3",{id:"basic-secrets"},"Basic secrets"),(0,a.kt)("p",null,'Basic secrets are defined in the secrets block with the type "basic".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import models.schema.v1 as ac\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.secret as sec\n\nsampleapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        secrets: {\n            "auth-info": sec.Secret {\n                type: "basic"\n                data: {\n                    "username": "admin"\n                    "password": "******"\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"The basic secret type is typically used for basic authentication. The key names must be username and password. If one or both of the fields are defined with a non-empty string, those values will be used. If the empty string, the default value, is used Acorn will generate random values for one or both."),(0,a.kt)("h3",{id:"token-secrets"},"Token secrets"),(0,a.kt)("p",null,"Token secrets are useful for generating a password or secure string used for passwords when the user is already known or not required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import models.schema.v1 as ac\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.secret as sec\n\nsampleapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        secrets: {\n            "api-token": sec.Secret {\n                type: "token"\n                data: {\n                    "token": "<the_api_token>"\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"The token secret type must be defined. The ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," field in the data object is optional and if left empty Kusion will generate the token, which is 54 characters in length by default. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"token")," is defined that value will always be used."),(0,a.kt)("h3",{id:"opaque-secrets"},"Opaque secrets"),(0,a.kt)("p",null,"Opaque secrets have no defined structure and can have arbitrary key value pairs. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import models.schema.v1 as ac\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.secret as sec\n\nsampleapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        secrets: {\n            "my-secret": sec.Secret {\n                type: "opaque"\n            }\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"certificate-secrets"},"Certificate secrets"),(0,a.kt)("p",null,"Certificate secrets are useful for storing a certificate and its associated key. One common use for TLS Secrets is to configure encryption in transit for an Ingress, but you can also use it with other resources or directly in your workload."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import models.schema.v1 as ac\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.secret as sec\n\nsampleapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        secrets: {\n            "server-cert": sec.Secret {\n                type: "certificate"\n                data: {\n                    # Please do not put private keys in configuration files\n                    "tls.crt": "The cert file content"\n                    "tls.key": "The key file content"\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"external-secrets"},"External secrets"),(0,a.kt)("p",null,"As a general principle, storing secrets in a plain text configuration file is highly discouraged, keeping secrets outside of Git is especially important for future-proofing, even encrypted secrets are not recommended to check into Git. The most common approach is to store secrets in a third-party vault (such as Hashicorp Vault, AWS Secrets Manager and Azure Key Vault, etc) and retrieve the secret in the runtime only. External secrets are used to retrieve sensitive data from external secret store to make it easy to be consumed in containers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import models.schema.v1 as ac\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.secret as sec\n\nsampleapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        secrets: {\n            "api-access-token": sec.Secret {\n                type: "external"\n                data: {\n                    # Please do not put private keys in configuration files\n                    "accessToken": "ref://api-auth-info/accessToken?version=1"\n                }\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"The value field in data object follow ",(0,a.kt)("inlineCode",{parentName:"p"},"ref://PATH[?version=<VERSION>]")," URI syntax. ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH")," is the provider-specific path for the secret to be retried. Kusion provides out-of-the-box integration with ",(0,a.kt)("inlineCode",{parentName:"p"},"Hashicorp Vault"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS Secrets Manager"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Azure Key Vault")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Alicloud Secrets Manager"),"."),(0,a.kt)("h2",{id:"immutable-secrets"},"Immutable secrets"),(0,a.kt)("p",null,"You can also declare a secret as immutable to prevent it from being changed accidentally."),(0,a.kt)("p",null,"To declare a secret as immutable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import models.schema.v1 as ac\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.secret as sec\n\nsampleapp: ac.AppConfiguration {\n    workload: wl.Service {\n        # ...\n        secrets: {\n            "my-secret": sec.Secret {\n                # ...\n                immutable: True\n            }\n        }\n    }\n}\n')),(0,a.kt)("p",null,"You can change a secret from mutable to immutable but not the other way around. That is because the Kubelet will stop watching secrets that are immutable. As the name suggests, you can only delete and re-create immutable secrets but you cannot change them."))}d.isMDXComponent=!0}}]);