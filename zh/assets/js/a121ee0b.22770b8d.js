"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={id:"configuration",sidebar_label:"Stack file reference"},o="Kusion stack file reference",s={unversionedId:"concepts/stack/configuration",id:"concepts/stack/configuration",title:"Kusion stack file reference",description:"Every Kusion project's stack has a stack file, stack.yaml, which specifies metadata about your stack, such as the stack name and stack description. The stack file must begin with lowercase stack and have an extension of either .yaml or .yml.",source:"@site/docs/kusion/3-concepts/2-stack/2-configuration.md",sourceDirName:"3-concepts/2-stack",slug:"/concepts/stack/configuration",permalink:"/zh/docs/next/concepts/stack/configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/3-concepts/2-stack/2-configuration.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1719481502,formattedLastUpdatedAt:"2024\u5e746\u670827\u65e5",sidebarPosition:2,frontMatter:{id:"configuration",sidebar_label:"Stack file reference"},sidebar:"kusion",previous:{title:"Overview",permalink:"/zh/docs/next/concepts/stack/overview"},next:{title:"Overview",permalink:"/zh/docs/next/concepts/kusion-module/overview"}},l={},c=[{value:"Attributes",id:"attributes",level:2},{value:"Extensions",id:"extensions",level:3},{value:"kubernetesNamespace",id:"kubernetesnamespace",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-stack-file-reference"},"Kusion stack file reference"),(0,r.kt)("p",null,"Every Kusion project's stack has a stack file, ",(0,r.kt)("inlineCode",{parentName:"p"},"stack.yaml"),", which specifies metadata about your stack, such as the stack name and stack description. The stack file must begin with lowercase ",(0,r.kt)("inlineCode",{parentName:"p"},"stack")," and have an extension of either ",(0,r.kt)("inlineCode",{parentName:"p"},".yaml")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".yml"),"."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Options"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},"required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the stack containing alphanumeric characters, hyphens, underscores."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A brief description of the stack."),(0,r.kt)("td",{parentName:"tr",align:"left"},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"extensions")),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of extensions on the stack."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#extensions"},"See blow"))))),(0,r.kt)("h3",{id:"extensions"},"Extensions"),(0,r.kt)("p",null,"Extensions allow you to customize how resources are generated or customized as part of release."),(0,r.kt)("h4",{id:"kubernetesnamespace"},"kubernetesNamespace"),(0,r.kt)("p",null,"The Kubernetes namespace extension allows you to customize namespace within your application generate Kubernetes resources. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"kind"),(0,r.kt)("td",{parentName:"tr",align:"center"},"y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The kind of extension being used. Must be 'kubernetesNamespace'"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"kubernetesNamespace"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"namespace"),(0,r.kt)("td",{parentName:"tr",align:"center"},"y"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The namespace where all application-scoped resources generate Kubernetes objects."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"default"))))))}u.isMDXComponent=!0}}]);