"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?t.createElement(m,a(a({ref:r},p),{},{components:n})):t.createElement(m,a({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1530:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=n(7462),o=(n(7294),n(3905));const i={id:"overview",sidebar_label:"Overview"},a="Overview",s={unversionedId:"user_docs/reference/model/overview",id:"user_docs/reference/model/overview",title:"Overview",description:"KusionStack presets application configuration models described by KCL, where the model is called Kusion Model. The GitHub repository KusionStack/catalog is used to store these models, which is known as Kusion Model Library.",source:"@site/docs/user_docs/reference/model/1-overview.md",sourceDirName:"user_docs/reference/model",slug:"/user_docs/reference/model/overview",permalink:"/docs/user_docs/reference/model/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/reference/model/1-overview.md",tags:[],version:"current",lastUpdatedBy:"Kan Wu",lastUpdatedAt:1702459024,formattedLastUpdatedAt:"Dec 13, 2023",sidebarPosition:1,frontMatter:{id:"overview",sidebar_label:"Overview"},sidebar:"user_docs",previous:{title:"Kusion Model Library",permalink:"/docs/user_docs/reference/model/"},next:{title:"App Configuration",permalink:"/docs/user_docs/reference/model/catalog_models/doc_app_configuration"}},c={},l=[],p={toc:l};function d(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"KusionStack presets application configuration models described by KCL, where the model is called ",(0,o.kt)("strong",{parentName:"p"},"Kusion Model"),". The GitHub repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"KusionStack/catalog")," is used to store these models, which is known as ",(0,o.kt)("strong",{parentName:"p"},"Kusion Model Library"),"."),(0,o.kt)("p",null,"The original intention of designing Kusion Model is to enhance the efficiency and improve the experience of YAML users. Through the unified application model defined by code, abstract and encapsulate complex configuration items, omit repetitive and derivable configurations, and supplement with necessary verification logic. Only the necessary attributes get exposed, users get an out-of-the-box, easy-to-understand configuration interface, which reduces the difficulty and improves the reliability of the configuration work."),(0,o.kt)("p",null,"Kusion Model Library currently provides the Kusion Model ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),". The design of ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," is developer-centric, based on Ant Group's decades of practice in building and managing hyperscale IDP (Internal Developer Platform), and the best practice of community. ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," describes the full lifecycle of an application."),(0,o.kt)("p",null,"A simple example of using ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," to describe an application is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "wordpress": c.Container {\n                image: "wordpress:latest"\n                env: {\n                    "WORDPRESS_DB_HOST": "secret://wordpress-db/hostAddress"\n                    "WORDPRESS_DB_PASSWORD": "secret://wordpress-db/password"\n                }\n                resources: {\n                    "cpu": "1"\n                    "memory": "2Gi"\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n                public: True\n            }\n        ]\n    }\n    \n    database: db.Database {\n        type: "alicloud"\n        engine: "MySQL"\n        version: "5.7"\n        size: 20\n        instanceType: "mysql.n2.serverless.1c"\n        category: "serverless_basic"\n    }\n}\n')))}d.isMDXComponent=!0}}]);