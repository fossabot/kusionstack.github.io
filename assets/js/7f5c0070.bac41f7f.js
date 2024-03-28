"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[357],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return r?t.createElement(m,a(a({ref:n},p),{},{components:r})):t.createElement(m,a({ref:n},p))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75941:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const i={id:"overview",sidebar_label:"Overview"},a="Overview",s={unversionedId:"kusion/reference/model/overview",id:"version-v0.9/kusion/reference/model/overview",title:"Overview",description:"KusionStack presets application configuration models described by KCL, where the model is called Kusion Model. The GitHub repository KusionStack/catalog is used to store these models, which is known as Kusion Model Library.",source:"@site/versioned_docs/version-v0.9/kusion/reference/model/1-overview.md",sourceDirName:"kusion/reference/model",slug:"/kusion/reference/model/overview",permalink:"/docs/v0.9/kusion/reference/model/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/reference/model/1-overview.md",tags:[],version:"v0.9",lastUpdatedBy:"Forest",lastUpdatedAt:1711596556,formattedLastUpdatedAt:"Mar 28, 2024",sidebarPosition:1,frontMatter:{id:"overview",sidebar_label:"Overview"},sidebar:"kusion",previous:{title:"Kusion Model Library",permalink:"/docs/v0.9/kusion/reference/model/"},next:{title:"App Configuration",permalink:"/docs/v0.9/kusion/reference/model/catalog_models/doc_app_configuration"}},c={},l=[],p={toc:l};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"KusionStack presets application configuration models described by KCL, where the model is called ",(0,o.kt)("strong",{parentName:"p"},"Kusion Model"),". The GitHub repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"KusionStack/catalog")," is used to store these models, which is known as ",(0,o.kt)("strong",{parentName:"p"},"Kusion Model Library"),"."),(0,o.kt)("p",null,"The original intention of designing Kusion Model is to enhance the efficiency and improve the experience of YAML users. Through the unified application model defined by code, abstract and encapsulate complex configuration items, omit repetitive and derivable configurations, and supplement with necessary verification logic. Only the necessary attributes get exposed, users get an out-of-the-box, easy-to-understand configuration interface, which reduces the difficulty and improves the reliability of the configuration work."),(0,o.kt)("p",null,"Kusion Model Library currently provides the Kusion Model ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),". The design of ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," is developer-centric, based on Ant Group's decades of practice in building and managing hyperscale IDP (Internal Developer Platform), and the best practice of community. ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," describes the full lifecycle of an application."),(0,o.kt)("p",null,"A simple example of using ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," to describe an application is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "wordpress": c.Container {\n                image: "wordpress:latest"\n                env: {\n                    "WORDPRESS_DB_HOST": "secret://wordpress-db/hostAddress"\n                    "WORDPRESS_DB_PASSWORD": "secret://wordpress-db/password"\n                }\n                resources: {\n                    "cpu": "1"\n                    "memory": "2Gi"\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n                public: True\n            }\n        ]\n    }\n    \n    database: db.Database {\n        type: "alicloud"\n        engine: "MySQL"\n        version: "5.7"\n        size: 20\n        instanceType: "mysql.n2.serverless.1c"\n        category: "serverless_basic"\n    }\n}\n')))}d.isMDXComponent=!0}}]);