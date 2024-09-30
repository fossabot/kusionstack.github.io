"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[37717],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},91717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={},s="Kusion Commands",a={unversionedId:"reference/cli/kusion/index",id:"version-v0.9/reference/cli/kusion/index",title:"Kusion Commands",description:"Kusion is the platform engineering engine of KusionStack",source:"@site/docs_versioned_docs/version-v0.9/reference/cli/kusion/index.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/",permalink:"/docs/v0.9/reference/cli/kusion/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/reference/cli/kusion/index.md",tags:[],version:"v0.9",lastUpdatedBy:"Yang Yang",lastUpdatedAt:1727679683,formattedLastUpdatedAt:"Sep 30, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"Command Line Tools",permalink:"/docs/v0.9/reference/cli/"},next:{title:"kusion apply",permalink:"/docs/v0.9/reference/cli/kusion/kusion_apply"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-commands"},"Kusion Commands"),(0,o.kt)("p",null,"Kusion is the platform engineering engine of KusionStack"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Kusion is the platform engineering engine of KusionStack. It delivers intentions to Kubernetes, Clouds, and On-Premise resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for kusion\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.9/reference/cli/kusion/kusion_apply"},"kusion apply"),"\t - Apply the operation intents of various resources to multiple runtimes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.9/reference/cli/kusion/kusion_compile"},"kusion compile"),"\t - Compile KCL into YAML"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.9/reference/cli/kusion/kusion_destroy"},"kusion destroy"),"\t - Delete the specified resources in runtime"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.9/reference/cli/kusion/kusion_init"},"kusion init"),"\t - Initialize the scaffolding for a project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.9/reference/cli/kusion/kusion_preview"},"kusion preview"),"\t - Preview a series of resource changes within the stack"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.9/reference/cli/kusion/kusion_version"},"kusion version"),"\t - Print the Kusion version information for the current context")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}p.isMDXComponent=!0}}]);