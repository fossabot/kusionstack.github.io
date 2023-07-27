"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7044],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const i={},a="Configure Main Container",s={unversionedId:"user_docs/guides/working-with-k8s/container",id:"user_docs/guides/working-with-k8s/container",title:"Configure Main Container",description:"The attribute mainContainer of the Server model is used to declare the main container configuration of the application.",source:"@site/docs/user_docs/guides/working-with-k8s/2-container.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/container",permalink:"/docs/user_docs/guides/working-with-k8s/container",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/2-container.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1690428760,formattedLastUpdatedAt:"Jul 27, 2023",sidebarPosition:2,frontMatter:{},sidebar:"user_docs",previous:{title:"Deploy Server",permalink:"/docs/user_docs/guides/working-with-k8s/deploy-server"},next:{title:"Enable Monitoring",permalink:"/docs/user_docs/guides/working-with-k8s/monitoring"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2}],l={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-main-container"},"Configure Main Container"),(0,o.kt)("p",null,"The attribute ",(0,o.kt)("inlineCode",{parentName:"p"},"mainContainer")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"the Server")," model is used to declare the main container configuration of the application.\nFor the abstract definition of the main container, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/container/doc_container"},"here")," for more details."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-server#prerequisites"},"prerequisites")," in the guide for deploying an application."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'appConfiguration: frontend.Server {\n    # main container\n    mainContainer = container.Main {\n        # container name\n        name = "main"\n        # container envs\n        env = [\n            {\n                name = "HOST_NAME"\n                value = "example.com"\n            }\n        ]\n        # container ports\n        ports = [\n            { containerPort = 80 }\n        ]\n    }\n}\n')))}p.isMDXComponent=!0}}]);