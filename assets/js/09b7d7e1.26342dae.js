"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"project-stack-config-items",sidebar_label:"Project & Stack Config Items"},i="Project & Stack Config Items",l={unversionedId:"kusion/reference/model/project-stack-config-items",id:"version-v0.9/kusion/reference/model/project-stack-config-items",title:"Project & Stack Config Items",description:"In project.yaml and stack.yaml, users can add config items for their applications such as the project or stack names, generator types, Prometheus monitoring, etc. Below, we will provide the explanations for both config file.",source:"@site/versioned_docs/version-v0.9/kusion/reference/model/project-stack-config-items.md",sourceDirName:"kusion/reference/model",slug:"/kusion/reference/model/project-stack-config-items",permalink:"/docs/v0.9/kusion/reference/model/project-stack-config-items",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/reference/model/project-stack-config-items.md",tags:[],version:"v0.9",lastUpdatedBy:"Dayuan",lastUpdatedAt:1711695705,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{id:"project-stack-config-items",sidebar_label:"Project & Stack Config Items"},sidebar:"kusion",previous:{title:"Naming Conventions",permalink:"/docs/v0.9/kusion/reference/model/naming-conventions"},next:{title:"Roadmap",permalink:"/docs/v0.9/kusion/reference/roadmap"}},c={},s=[{value:"project.yaml",id:"projectyaml",level:2},{value:"Backend Configuration",id:"backend-configuration",level:3},{value:"stack.yaml",id:"stackyaml",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"project--stack-config-items"},"Project & Stack Config Items"),(0,o.kt)("p",null,"In ",(0,o.kt)("strong",{parentName:"p"},"project.yaml")," and ",(0,o.kt)("strong",{parentName:"p"},"stack.yaml"),", users can add config items for their applications such as the project or stack names, generator types, Prometheus monitoring, etc. Below, we will provide the explanations for both config file. "),(0,o.kt)("h2",{id:"projectyaml"},"project.yaml"),(0,o.kt)("p",null,"Here is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# The project basic info\nname: helloworld\nprometheus:\n  operatorMode: True\n  monitorType: Service\n")),(0,o.kt)("p",null,"The config items in ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," are explained below. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": The name of the project. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"prometheus"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operatorMode"),": Decides whether Kusion runs Prometheus in ",(0,o.kt)("strong",{parentName:"li"},"Operator")," mode. Kusion will generate a ",(0,o.kt)("strong",{parentName:"li"},"Custom Resource")," if it is ",(0,o.kt)("strong",{parentName:"li"},"true"),", while generate some annotations if it is ",(0,o.kt)("strong",{parentName:"li"},"false"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"monitorType"),": The type of the monitored resource, which can be one of ",(0,o.kt)("inlineCode",{parentName:"li"},"Service")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Pod"),". ")))),(0,o.kt)("h3",{id:"backend-configuration"},"Backend Configuration"),(0,o.kt)("p",null,"Kusion supports configuring the storage of state through the ",(0,o.kt)("inlineCode",{parentName:"p"},"backend")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," file. Detailed instructions can be found in ",(0,o.kt)("a",{parentName:"p",href:"/docs/v0.9/kusion/reference/cli/backend/backend-configuration"},"Backend Configuration")),(0,o.kt)("h2",{id:"stackyaml"},"stack.yaml"),(0,o.kt)("p",null,"Here is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"stack.yaml"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# The stack basic info\nname: dev\nkubeConfig: /Users/username/.kube/config\n")),(0,o.kt)("p",null,"The config items in ",(0,o.kt)("inlineCode",{parentName:"p"},"stack.yaml")," are explained below. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name"),": The name of the stack, typically the environment of the project, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pre")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"prod"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kubeConfig"),": The kubeconfig file path for this stack. ")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeConfig")," field in the ",(0,o.kt)("inlineCode",{parentName:"p"},"stack.yaml")," file only supports ",(0,o.kt)("strong",{parentName:"p"},"absolute path")," and ",(0,o.kt)("strong",{parentName:"p"},"relative path")," with a dot (.) or double dots (..). Expansions for tilde (~) and $HOME are not supported yet. ")))}m.isMDXComponent=!0}}]);