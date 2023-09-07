"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1738],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?t.createElement(m,i(i({ref:r},l),{},{components:n})):t.createElement(m,i({ref:r},l))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52979:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(87462),o=(n(67294),n(3905));const a={id:"overview",sidebar_label:"\u603b\u89c8"},i="\u603b\u89c8",s={unversionedId:"reference/model/overview",id:"reference/model/overview",title:"\u603b\u89c8",description:"KusionStack \u9884\u7f6e\u4e86\u4f7f\u7528 KCL \u63cf\u8ff0\u7684\u5e94\u7528\u914d\u7f6e\u6a21\u578b\uff0c\u8fd9\u4e9b\u6a21\u578b\u88ab\u79f0\u4e3a Kusion \u6a21\u578b\uff0c\u800c\u7528\u4e8e\u5b58\u50a8\u8fd9\u4e9b\u6a21\u578b\u7684\u4ed3\u5e93\u662f KusionStack/catalog\uff0c\u53c8\u88ab\u79f0\u4e3a Kusion \u6a21\u578b\u5e93\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/model/1-overview.md",sourceDirName:"reference/model",slug:"/reference/model/overview",permalink:"/zh-CN/docs/reference/model/overview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/1-overview.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1694077538,formattedLastUpdatedAt:"2023\u5e749\u67087\u65e5",sidebarPosition:1,frontMatter:{id:"overview",sidebar_label:"\u603b\u89c8"},sidebar:"reference",previous:{title:"Kusion \u6a21\u578b\u5e93",permalink:"/zh-CN/docs/reference/model/"},next:{title:"Server",permalink:"/zh-CN/docs/reference/model/core/server"}},c={},p=[],l={toc:p};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,o.kt)("p",null,"KusionStack \u9884\u7f6e\u4e86\u4f7f\u7528 KCL \u63cf\u8ff0\u7684\u5e94\u7528\u914d\u7f6e\u6a21\u578b\uff0c\u8fd9\u4e9b\u6a21\u578b\u88ab\u79f0\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Kusion \u6a21\u578b"),"\uff0c\u800c\u7528\u4e8e\u5b58\u50a8\u8fd9\u4e9b\u6a21\u578b\u7684\u4ed3\u5e93\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"KusionStack/catalog"),"\uff0c\u53c8\u88ab\u79f0\u4e3a ",(0,o.kt)("strong",{parentName:"p"},"Kusion \u6a21\u578b\u5e93"),"\u3002"),(0,o.kt)("p",null,"Kusion \u6a21\u578b\u8bbe\u8ba1\u7684\u521d\u8877\u662f\u63d0\u5347\u548c\u6539\u5584 YAML \u7528\u6237\u7684\u6548\u7387\u548c\u4f53\u9a8c\u3002\u901a\u8fc7\u4ee3\u7801\u5c06\u7e41\u6742\u7684\u914d\u7f6e\u9879\u62bd\u8c61\u3001\u5c01\u88c5\u5230\u7edf\u4e00\u7684\u6a21\u578b\u4e2d\uff0c\u7701\u7565\u91cd\u590d\u7684\u3001\u53ef\u63a8\u5bfc\u7684\u914d\u7f6e\uff0c\u66b4\u9732\u5fc5\u8981\u7684\u5c5e\u6027\uff0c\u5e76\u8f85\u4ee5\u5fc5\u8981\u7684\u6821\u9a8c\u903b\u8f91\uff1b\u63d0\u4f9b\u7ed9\u7528\u6237\u5f00\u7bb1\u5373\u7528\u3001\u6613\u4e8e\u7406\u89e3\u7684\u914d\u7f6e\u754c\u9762\uff0c\u964d\u4f4e\u7528\u6237\u914d\u7f6e\u7684\u96be\u5ea6\uff0c\u63d0\u9ad8\u914d\u7f6e\u7684\u53ef\u9760\u6027\u3002"),(0,o.kt)("p",null,"Kusion \u6a21\u578b\u5e93\u76ee\u524d\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," \u8fd9\u4e00 Kusion \u6a21\u578b\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," \u6a21\u578b\u7684\u8bbe\u8ba1\u4ee5\u5f00\u53d1\u8005\u4e3a\u4e2d\u5fc3\uff0c\u57fa\u4e8e\u8682\u8681\u96c6\u56e2\u6570\u5341\u5e74\u642d\u5efa\u3001\u7ba1\u7406\u8d85\u5927\u89c4\u6a21 IDP\uff08\u5185\u90e8\u5f00\u53d1\u8005\u5e73\u53f0\uff09\u7684\u7ecf\u9a8c\uff0c\u5e76\u7ed3\u5408\u793e\u533a\u6700\u4f73\u5b9e\u8df5\uff1b\u5bf9\u5e94\u7528\u7684\u5168\u751f\u547d\u5468\u671f\u8fdb\u884c\u4e86\u63cf\u8ff0\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," \u63cf\u8ff0\u5e94\u7528\u914d\u7f6e\u7684\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "wordpress": c.Container {\n                image: "wordpress:latest"\n                env: {\n                    "WORDPRESS_DB_HOST": "secret://wordpress-db/hostAddress"\n                    "WORDPRESS_DB_PASSWORD": "secret://wordpress-db/password"\n                }\n                resources: {\n                    "cpu": "1"\n                    "memory": "2Gi"\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n                public: True\n            }\n        ]\n    }\n    \n    database: db.Database {\n        type: "alicloud"\n        engine: "MySQL"\n        version: "5.7"\n        size: 20\n        instanceType: "mysql.n2.serverless.1c"\n        category: "serverless_basic"\n    }\n}\n')))}u.isMDXComponent=!0}}]);