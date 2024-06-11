"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"configuration",sidebar_label:"Project file reference"},i="Kusion project file reference",p={unversionedId:"concepts/project/configuration",id:"concepts/project/configuration",title:"Kusion project file reference",description:"Every Kusion project has a project file, project.yaml, which specifies metadata about your project, such as the project name and project description. The project file must begin with lowercase project and have an extension of either .yaml or .yml.",source:"@site/docs/kusion/3-concepts/1-project/2-configuration.md",sourceDirName:"3-concepts/1-project",slug:"/concepts/project/configuration",permalink:"/docs/next/concepts/project/configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/1-project/2-configuration.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718107126,formattedLastUpdatedAt:"Jun 11, 2024",sidebarPosition:2,frontMatter:{id:"configuration",sidebar_label:"Project file reference"},sidebar:"kusion",previous:{title:"Overview",permalink:"/docs/next/concepts/project/overview"},next:{title:"Overview",permalink:"/docs/next/concepts/stack/overview"}},l={},c=[{value:"Attributes",id:"attributes",level:2},{value:"Extensions",id:"extensions",level:3},{value:"kubernetesNamespace",id:"kubernetesnamespace",level:4}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kusion-project-file-reference"},"Kusion project file reference"),(0,a.kt)("p",null,"Every Kusion project has a project file, ",(0,a.kt)("inlineCode",{parentName:"p"},"project.yaml"),", which specifies metadata about your project, such as the project name and project description. The project file must begin with lowercase ",(0,a.kt)("inlineCode",{parentName:"p"},"project")," and have an extension of either ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".yml"),"."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Options"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"name")),(0,a.kt)("td",{parentName:"tr",align:"left"},"required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Name of the project containing alphanumeric characters, hyphens, underscores."),(0,a.kt)("td",{parentName:"tr",align:"left"},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"description")),(0,a.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A brief description of the project."),(0,a.kt)("td",{parentName:"tr",align:"left"},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"extensions")),(0,a.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"List of extensions on the project."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#extensions"},"See blow"))))),(0,a.kt)("h3",{id:"extensions"},"Extensions"),(0,a.kt)("p",null,"Extensions allow you to customize how resources are generated or customized as part of release."),(0,a.kt)("h4",{id:"kubernetesnamespace"},"kubernetesNamespace"),(0,a.kt)("p",null,"The Kubernetes namespace extension allows you to customize namespace within your application generate Kubernetes resources. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"kind"),(0,a.kt)("td",{parentName:"tr",align:"center"},"y"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The kind of extension being used. Must be 'kubernetesNamespace'"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"kubernetesNamespace"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"namespace"),(0,a.kt)("td",{parentName:"tr",align:"center"},"y"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The namespace where all application-scoped resources generate Kubernetes objects."),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"default"))))))}u.isMDXComponent=!0}}]);