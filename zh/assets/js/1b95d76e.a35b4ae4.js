"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"project-stack-config-items",sidebar_label:"Project & Stack Config Items"},i="Project & Stack Config Items",l={unversionedId:"reference/model/project-stack-config-items",id:"version-v0.9/reference/model/project-stack-config-items",title:"Project & Stack Config Items",description:"In project.yaml and stack.yaml, users can add config items for their applications such as the project or stack names, generator types, Prometheus monitoring, etc. Below, we will provide the explanations for both config file.",source:"@site/docs_versioned_docs/version-v0.9/reference/model/project-stack-config-items.md",sourceDirName:"reference/model",slug:"/reference/model/project-stack-config-items",permalink:"/zh/docs/v0.9/reference/model/project-stack-config-items",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/reference/model/project-stack-config-items.md",tags:[],version:"v0.9",lastUpdatedBy:"cheny-alf",lastUpdatedAt:1722600707,formattedLastUpdatedAt:"2024\u5e748\u67082\u65e5",frontMatter:{id:"project-stack-config-items",sidebar_label:"Project & Stack Config Items"},sidebar:"kusion",previous:{title:"Naming Conventions",permalink:"/zh/docs/v0.9/reference/model/naming-conventions"},next:{title:"Roadmap",permalink:"/zh/docs/v0.9/reference/roadmap"}},c={},p=[{value:"project.yaml",id:"projectyaml",level:2},{value:"Backend Configuration",id:"backend-configuration",level:3},{value:"stack.yaml",id:"stackyaml",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"project--stack-config-items"},"Project & Stack Config Items"),(0,a.kt)("p",null,"In ",(0,a.kt)("strong",{parentName:"p"},"project.yaml")," and ",(0,a.kt)("strong",{parentName:"p"},"stack.yaml"),", users can add config items for their applications such as the project or stack names, generator types, Prometheus monitoring, etc. Below, we will provide the explanations for both config file. "),(0,a.kt)("h2",{id:"projectyaml"},"project.yaml"),(0,a.kt)("p",null,"Here is an example of ",(0,a.kt)("inlineCode",{parentName:"p"},"project.yaml"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# The project basic info\nname: helloworld\nprometheus:\n  operatorMode: True\n  monitorType: Service\n")),(0,a.kt)("p",null,"The config items in ",(0,a.kt)("inlineCode",{parentName:"p"},"project.yaml")," are explained below. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": The name of the project. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"prometheus"),": ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operatorMode"),": Decides whether Kusion runs Prometheus in ",(0,a.kt)("strong",{parentName:"li"},"Operator")," mode. Kusion will generate a ",(0,a.kt)("strong",{parentName:"li"},"Custom Resource")," if it is ",(0,a.kt)("strong",{parentName:"li"},"true"),", while generate some annotations if it is ",(0,a.kt)("strong",{parentName:"li"},"false"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"monitorType"),": The type of the monitored resource, which can be one of ",(0,a.kt)("inlineCode",{parentName:"li"},"Service")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Pod"),". ")))),(0,a.kt)("h3",{id:"backend-configuration"},"Backend Configuration"),(0,a.kt)("p",null,"Kusion supports configuring the storage of state through the ",(0,a.kt)("inlineCode",{parentName:"p"},"backend")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"project.yaml")," file. Detailed instructions can be found in ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/v0.9/reference/cli/backend/backend-configuration"},"Backend Configuration")),(0,a.kt)("h2",{id:"stackyaml"},"stack.yaml"),(0,a.kt)("p",null,"Here is an example of ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# The stack basic info\nname: dev\nkubeConfig: /Users/username/.kube/config\n")),(0,a.kt)("p",null,"The config items in ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml")," are explained below. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": The name of the stack, typically the environment of the project, e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"pre")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"prod"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubeConfig"),": The kubeconfig file path for this stack. ")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"kubeConfig")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml")," file only supports ",(0,a.kt)("strong",{parentName:"p"},"absolute path")," and ",(0,a.kt)("strong",{parentName:"p"},"relative path")," with a dot (.) or double dots (..). Expansions for tilde (~) and $HOME are not supported yet. ")))}m.isMDXComponent=!0}}]);