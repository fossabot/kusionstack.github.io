"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45804],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},40577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={},s="Kusion Modules",a={unversionedId:"reference/modules/index",id:"version-v0.13/reference/modules/index",title:"Kusion Modules",description:"KusionStack presets application configuration models described by KCL, where the model is called Kusion Model. The GitHub repository KusionStack/catalog is used to store these models, which is known as Kusion Model Library.",source:"@site/docs_versioned_docs/version-v0.13/6-reference/2-modules/index.md",sourceDirName:"6-reference/2-modules",slug:"/reference/modules/",permalink:"/zh/docs/reference/modules/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.13/6-reference/2-modules/index.md",tags:[],version:"v0.13",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727681527,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion workspace",permalink:"/zh/docs/reference/commands/kusion-workspace"},next:{title:"appconfiguration",permalink:"/zh/docs/reference/modules/developer-schemas/app-configuration"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-modules"},"Kusion Modules"),(0,o.kt)("p",null,"KusionStack presets application configuration models described by KCL, where the model is called ",(0,o.kt)("strong",{parentName:"p"},"Kusion Model"),". The GitHub repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"KusionStack/catalog")," is used to store these models, which is known as ",(0,o.kt)("strong",{parentName:"p"},"Kusion Model Library"),"."),(0,o.kt)("p",null,"The original intention of designing Kusion Model is to enhance the efficiency and improve the experience of YAML users. Through the unified application model defined by code, abstract and encapsulate complex configuration items, omit repetitive and derivable configurations, and supplement with necessary verification logic. Only the necessary attributes get exposed, users get an out-of-the-box, easy-to-understand configuration interface, which reduces the difficulty and improves the reliability of the configuration work."),(0,o.kt)("p",null,"Kusion Model Library currently provides the Kusion Model ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),". The design of ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," is developer-centric, based on Ant Group's decades of practice in building and managing hyperscale IDP (Internal Developer Platform), and the best practice of community. ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," describes the full lifecycle of an application."),(0,o.kt)("p",null,"A simple example of using ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," to describe an application is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wordpress: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            "wordpress": c.Container {\n                image: "wordpress:latest"\n                env: {\n                    "WORDPRESS_DB_HOST": "secret://wordpress-db/hostAddress"\n                    "WORDPRESS_DB_PASSWORD": "secret://wordpress-db/password"\n                }\n                resources: {\n                    "cpu": "1"\n                    "memory": "2Gi"\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n                public: True\n            }\n        ]\n    }\n    \n    database: db.Database {\n        type: "alicloud"\n        engine: "MySQL"\n        version: "5.7"\n        size: 20\n        instanceType: "mysql.n2.serverless.1c"\n        category: "serverless_basic"\n    }\n}\n')))}u.isMDXComponent=!0}}]);