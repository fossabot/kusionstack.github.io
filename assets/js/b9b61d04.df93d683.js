"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4491],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90999:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const i={},a="Kusion Modules",s={unversionedId:"kusion/reference/modules/index",id:"kusion/reference/modules/index",title:"Kusion Modules",description:"KusionStack presets application configuration models described by KCL, where the model is called Kusion Model. The GitHub repository KusionStack/catalog is used to store these models, which is known as Kusion Model Library.",source:"@site/docs/kusion/6-reference/2-modules/index.md",sourceDirName:"kusion/6-reference/2-modules",slug:"/kusion/reference/modules/",permalink:"/docs/next/kusion/reference/modules/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/index.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1709209592,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion workspace",permalink:"/docs/next/kusion/reference/commands/kusion-workspace"},next:{title:"appconfiguration",permalink:"/docs/next/kusion/reference/modules/catalog-models/app-configuration"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-modules"},"Kusion Modules"),(0,o.kt)("p",null,"KusionStack presets application configuration models described by KCL, where the model is called ",(0,o.kt)("strong",{parentName:"p"},"Kusion Model"),". The GitHub repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"KusionStack/catalog")," is used to store these models, which is known as ",(0,o.kt)("strong",{parentName:"p"},"Kusion Model Library"),"."),(0,o.kt)("p",null,"The original intention of designing Kusion Model is to enhance the efficiency and improve the experience of YAML users. Through the unified application model defined by code, abstract and encapsulate complex configuration items, omit repetitive and derivable configurations, and supplement with necessary verification logic. Only the necessary attributes get exposed, users get an out-of-the-box, easy-to-understand configuration interface, which reduces the difficulty and improves the reliability of the configuration work."),(0,o.kt)("p",null,"Kusion Model Library currently provides the Kusion Model ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),". The design of ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," is developer-centric, based on Ant Group's decades of practice in building and managing hyperscale IDP (Internal Developer Platform), and the best practice of community. ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," describes the full lifecycle of an application."),(0,o.kt)("p",null,"A simple example of using ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," to describe an application is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "wordpress": c.Container {\n                image: "wordpress:latest"\n                env: {\n                    "WORDPRESS_DB_HOST": "secret://wordpress-db/hostAddress"\n                    "WORDPRESS_DB_PASSWORD": "secret://wordpress-db/password"\n                }\n                resources: {\n                    "cpu": "1"\n                    "memory": "2Gi"\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n                public: True\n            }\n        ]\n    }\n    \n    database: db.Database {\n        type: "alicloud"\n        engine: "MySQL"\n        version: "5.7"\n        size: 20\n        instanceType: "mysql.n2.serverless.1c"\n        category: "serverless_basic"\n    }\n}\n')))}u.isMDXComponent=!0}}]);