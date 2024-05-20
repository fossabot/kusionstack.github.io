"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2789],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},37793:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={id:"base-override"},i="Base and Override",s={unversionedId:"configuration-walkthrough/base-override",id:"configuration-walkthrough/base-override",title:"Base and Override",description:"In practice, what we have observed for production-grade applications is that they usually need to be deployed to a wide range of different targets, be it different environments in the SDLC, or different clouds, regions or runtimes for cost/regulation/performance or disaster recovery related reasons.",source:"@site/docs/kusion/4-configuration-walkthrough/3-base-override.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/base-override",permalink:"/docs/next/configuration-walkthrough/base-override",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/4-configuration-walkthrough/3-base-override.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1716172883,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:3,frontMatter:{id:"base-override"},sidebar:"kusion",previous:{title:"KCL Basics",permalink:"/docs/next/configuration-walkthrough/kcl-basics"},next:{title:"Workload",permalink:"/docs/next/configuration-walkthrough/workload"}},c={},p=[],l={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"base-and-override"},"Base and Override"),(0,o.kt)("p",null,"In practice, what we have observed for production-grade applications is that they usually need to be deployed to a wide range of different targets, be it different environments in the SDLC, or different clouds, regions or runtimes for cost/regulation/performance or disaster recovery related reasons."),(0,o.kt)("p",null,"In that context, we advocate for a pattern where you can leverage some Kusion and KCL features to minimize the amount of duplicate configurations, by separating the common base application configuration and environment-specific ones."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The file names in the below examples don't matter as long as they are called out and appear in the correct order in the ",(0,o.kt)("inlineCode",{parentName:"p"},"entries")," field (the field is a list) in ",(0,o.kt)("inlineCode",{parentName:"p"},"kcl.mod"),". The files with common configurations should appear first in the list and stack-specific ones last. The latter one takes precedence."),(0,o.kt)("p",{parentName:"admonition"},"The configurations also don't have be placed into a single ",(0,o.kt)("inlineCode",{parentName:"p"},".k")," file. For complex projects, they can be broken down into smaller organized ",(0,o.kt)("inlineCode",{parentName:"p"},".k")," files for better readability. ")),(0,o.kt)("p",null,"Base configuration defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"base/base.k"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\nimport kam.v1.workload as wl\nimport kam.v1.workload.container as c\nimport network.network as n\n\nmyapp: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "myapp": c.Container {\n                image: "<no value>"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n    }\n    accessories: {\n        "network": n.Network {\n            ports: [\n                n.Port {\n                    port: 80\n                    public: True\n                }\n            ]\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Environment-specific configuration defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev/main.k"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\n\n# main.k declares customized configurations for dev stack.\nmyapp: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "myapp": c.Container {\n                # dev stack has different app configuration from the base\n                image = "gcr.io/google-samples/gb-frontend:v5"\n                resources = {\n                    "cpu": "250m"\n                    "memory": "256Mi"\n                }\n            }\n        }\n        replicas = 2\n    }\n}\n')),(0,o.kt)("p",null,"Alternatively, you could locate a specific property (in this case below, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container")," object) in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," object using the dot selector shorthand(such as ",(0,o.kt)("inlineCode",{parentName:"p"},"workload.containers.myapp")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"workload.replicas")," below):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import kam.v1.app_configuration as ac\n\n# main.k declares customized configurations for dev stack.\nmyapp: ac.AppConfiguration {\n    workload.replicas = 2\n    workload.containers.myapp: {\n        # dev stack has different app configuration\n        image = "gcr.io/google-samples/gb-frontend:v5"\n        resources = {\n            "cpu": "250m"\n            "memory": "256Mi"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"This is especially useful when the application configuration is complex but the override is relatively straightforward."),(0,o.kt)("p",null,"The two examples above are equivalent when overriding the base."))}d.isMDXComponent=!0}}]);