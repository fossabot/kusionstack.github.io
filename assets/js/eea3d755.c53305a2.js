"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=l,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),l=(r(67294),r(3905));const o={sidebar_position:2},a="Format",i={unversionedId:"reference/cli/kcl/fmt",id:"reference/cli/kcl/fmt",title:"Format",description:"The KCL Format tool supports reformatting KCL files to the standard code style. This article demonstrates the KCL code style and how to use the KCL Format tool.",source:"@site/docs/reference/cli/kcl/fmt.md",sourceDirName:"reference/cli/kcl",slug:"/reference/cli/kcl/fmt",permalink:"/docs/reference/cli/kcl/fmt",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kcl/fmt.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685537782,formattedLastUpdatedAt:"5/31/2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/reference/cli/kcl/overview"},next:{title:"Lint",permalink:"/docs/reference/cli/kcl/lint"}},c={},s=[{value:"Code Style",id:"code-style",level:2},{value:"How to use",id:"how-to-use",level:2},{value:"Display of formatting files",id:"display-of-formatting-files",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"format"},"Format"),(0,l.kt)("p",null,"The KCL Format tool supports reformatting KCL files to the standard code style. This article demonstrates the KCL code style and how to use the KCL Format tool."),(0,l.kt)("h2",{id:"code-style"},"Code Style"),(0,l.kt)("p",null,"The KCL Format tool modifies the files according to the KCL code style: ",(0,l.kt)("a",{parentName:"p",href:"/docs/reference/lang/lang/spec/codestyle"},"Style Guide for KCL Code")),(0,l.kt)("h2",{id:"how-to-use"},"How to use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Formatting Single File")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"kcl-fmt your_config.k\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Formatting multiple files")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"kcl-fmt your_config_path -R\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Args",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-R|--recursive")," Whether to recursively traverse subfolders"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-w|--fmt-output")," Whether to output to STDOUT, without ",(0,l.kt)("inlineCode",{parentName:"li"},"-w")," indicates in-place modification.")))),(0,l.kt)("h2",{id:"display-of-formatting-files"},"Display of formatting files"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Before formatting")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import     math\nmixin DeploymentMixin:\n    service:str ="my-service"\nschema DeploymentBase:\n    name: str\n    image  : str\nschema Deployment[replicas] ( DeploymentBase )   :\n    mixin[DeploymentMixin]\n    replicas   : int   = replicas\n    command: [str  ]\n    labels: {str:  str}\ndeploy = Deployment(replicas = 3){}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"After formatting")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import math\n\nmixin DeploymentMixin:\n    service: str = "my-service"\n\nschema DeploymentBase:\n    name: str\n    image: str\n\nschema Deployment[replicas](DeploymentBase):\n    mixin [DeploymentMixin]\n    replicas: int = replicas\n    command: [str]\n    labels: {str:str}\n\ndeploy = Deployment(replicas=3) {}\n\n')))}m.isMDXComponent=!0}}]);