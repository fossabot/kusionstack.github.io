"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,g=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Custom Resource Group"},i=void 0,s={unversionedId:"user-guide/insight/custom-resource-group",id:"user-guide/insight/custom-resource-group",title:"Custom Resource Group",description:"Creating Custom Resource Group",source:"@site/docs/karpor/3-user-guide/3-insight/2-custom-resource-group.md",sourceDirName:"3-user-guide/3-insight",slug:"/user-guide/insight/custom-resource-group",permalink:"/karpor/next/user-guide/insight/custom-resource-group",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/3-user-guide/3-insight/2-custom-resource-group.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1721873571,formattedLastUpdatedAt:"Jul 25, 2024",sidebarPosition:2,frontMatter:{title:"Custom Resource Group"},sidebar:"karpor",previous:{title:"Inspecting Any Resource Group and Resource",permalink:"/karpor/next/user-guide/insight/inspecting-any-resource-group-and-resource"},next:{title:"Summary",permalink:"/karpor/next/user-guide/insight/summary"}},c={},p=[{value:"Creating Custom Resource Group",id:"creating-custom-resource-group",level:2},{value:"Edit Custom Resource Group",id:"edit-custom-resource-group",level:2},{value:"Delete Custom Resource Group",id:"delete-custom-resource-group",level:2}],u={toc:p};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-custom-resource-group"},"Creating Custom Resource Group"),(0,o.kt)("p",null,"This section will focus on how to create custom resource group within Karpor. Through custom resource group, you can flexibly manage and organize resources in Karpor according to your own needs and logical concepts. We will guide you step by step to create and define custom resource group and show you how to use these groups for resource insight and management."),(0,o.kt)("p",null,"If you're not familiar with ",(0,o.kt)("strong",{parentName:"p"},"Resource Group")," and ",(0,o.kt)("strong",{parentName:"p"},"Resource Group Rule")," related concepts, you can refer to the ",(0,o.kt)("a",{parentName:"p",href:"/karpor/next/concepts/glossary"},"Glossary")," section."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Let's assume")," that within your organization or company, there is a concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"application unit")," that represent ",(0,o.kt)("strong",{parentName:"p"},"all resources of an application in a certain environment"),"."),(0,o.kt)("p",null,"We mark the ",(0,o.kt)("strong",{parentName:"p"},"name and environment of the application in the label"),". For example, the following is the ",(0,o.kt)("inlineCode",{parentName:"p"},"application unit")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"mock-apple")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"production environment"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  labels:\n    app.kubernetes.io/name: mock-apple\n  name: mock-apple\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.kubernetes.io/environment: prod\n    app.kubernetes.io/name: mock-apple\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app.kubernetes.io/environment: prod\n      app.kubernetes.io/name: mock-apple\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/environment: prod\n        app.kubernetes.io/name: mock-apple\n        fruit: apple\n    spec:\n      containers:\n        - image: nginx:latest\n          name: mock-container\n      dnsPolicy: ClusterFirst\n      restartPolicy: Always\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/environment: prod\n    app.kubernetes.io/name: mock-apple\n  name: mock-service-apple-prod\n  namespace: mock-apple\nspec:\n  ports:\n    - port: 80\n      protocol: TCP\n      targetPort: 80\n  selector:\n    app.kubernetes.io/environment: prod\n    app.kubernetes.io/name: mock-apple\n  type: ClusterIP\n")),(0,o.kt)("p",null,"Now, we will create a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"resource group rule")," called the ",(0,o.kt)("inlineCode",{parentName:"p"},"application unit")," by following the steps below. It will classify all resources in the cluster according to the rules specified by the user and list all ",(0,o.kt)("inlineCode",{parentName:"p"},"resource groups")," that comply with the rules."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("kbd",null,"Insight")," tab to enter the insight homepage."),(0,o.kt)("li",{parentName:"ol"},"At the bottom of the page, you will see a default resource group rule ",(0,o.kt)("inlineCode",{parentName:"li"},"namespace"),", which is a single rule classified by a namespace.\n",(0,o.kt)("img",{src:n(36594).Z,width:"1620",height:"1080"})),(0,o.kt)("li",{parentName:"ol"},"Click on the create button ",(0,o.kt)("kbd",null,"+")," of the resource group and fill in the ",(0,o.kt)("strong",{parentName:"li"},"basic information and classification rules")," of the ",(0,o.kt)("inlineCode",{parentName:"li"},"application unit")," in the pop-up window.\n",(0,o.kt)("img",{src:n(67192).Z,width:"1620",height:"1080"})),(0,o.kt)("li",{parentName:"ol"},"Click on the ",(0,o.kt)("kbd",null,"Submit")," button, then click on the newly appearing ",(0,o.kt)("kbd",null,"application unit")," tab to list all application units.\n",(0,o.kt)("img",{src:n(56445).Z,width:"1620",height:"1080"})),(0,o.kt)("li",{parentName:"ol"},"You can enter keywords in the search box to quickly find the ",(0,o.kt)("inlineCode",{parentName:"li"},"application unit")," of ",(0,o.kt)("inlineCode",{parentName:"li"},"mock-apple")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"production"),".\n",(0,o.kt)("img",{src:n(27444).Z,width:"1620",height:"1080"})),(0,o.kt)("li",{parentName:"ol"},"You can click the ",(0,o.kt)("kbd",null,"View")," button on a resource group card to jump to the corresponding ",(0,o.kt)("inlineCode",{parentName:"li"},"resource group insight page")," and view aggregated information such as all resources, topology relationships, compliance reports, etc. of a certain application unit."),(0,o.kt)("li",{parentName:"ol"},"If necessary, you can also use the same steps to create an ",(0,o.kt)("inlineCode",{parentName:"li"},"environment resource group"),".\n",(0,o.kt)("img",{src:n(8858).Z,width:"1620",height:"1080"}),(0,o.kt)("img",{src:n(78744).Z,width:"1620",height:"1080"}))),(0,o.kt)("h2",{id:"edit-custom-resource-group"},"Edit Custom Resource Group"),(0,o.kt)("p",null,"You can click the ",(0,o.kt)("kbd",null,(0,o.kt)("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"edit",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},(0,o.kt)("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"})))," button on the right side of the custom resource group tab to modify basic information and classification rules in the pop-up window."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(47139).Z,width:"1620",height:"1080"})),(0,o.kt)("h2",{id:"delete-custom-resource-group"},"Delete Custom Resource Group"),(0,o.kt)("p",null,"You can click the ",(0,o.kt)("kbd",null,(0,o.kt)("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"edit",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},(0,o.kt)("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"})))," button on the right side of the custom resource group tab, then click on the ",(0,o.kt)("kbd",null,"Delete")," to delete current resource group rule in the pop-up window."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(61205).Z,width:"1620",height:"1080"})))}l.isMDXComponent=!0},67192:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-create-app-resource-group-rule-c3410262c29d1dd1c270830bc55efec3.png"},8858:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-create-env-resource-group-rule-8605c4f079b99385fada2089d6f93579.png"},61205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-delete-env-resource-group-10db0d78ed6ee87c853f6ce6f432c79d.png"},47139:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-edit-env-resource-group-c86cb37aad96a9c6fc1011af1025b56f.png"},36594:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-homepage-8dada26c5c9ba28cc1a3a6f1da474892.png"},56445:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-list-app-resource-groups-c5159e1fe0a86d465fb52a9f0fb19289.png"},78744:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-list-env-resource-groups-7ac8951b8cb78afb6f93658ad2ab84ff.png"},27444:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-search-app-resource-group-850a616a497f903157688a4caca6d702.png"}}]);