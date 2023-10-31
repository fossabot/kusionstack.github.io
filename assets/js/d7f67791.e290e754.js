"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8922],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,k=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?t.createElement(k,s(s({ref:n},l),{},{components:r})):t.createElement(k,s({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6758:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=r(7462),o=(r(7294),r(3905));const i={},s="kusion",a={unversionedId:"user_docs/reference/cli/kusion/index",id:"user_docs/reference/cli/kusion/index",title:"kusion",description:"Kusion is the platform engineering engine of KusionStack",source:"@site/docs/user_docs/reference/cli/kusion/index.md",sourceDirName:"user_docs/reference/cli/kusion",slug:"/user_docs/reference/cli/kusion/",permalink:"/docs/user_docs/reference/cli/kusion/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/reference/cli/kusion/index.md",tags:[],version:"current",lastUpdatedBy:"Chaer",lastUpdatedAt:1698723213,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Command Line Tools",permalink:"/docs/user_docs/reference/cli/"},next:{title:"kusion apply",permalink:"/docs/user_docs/reference/cli/kusion/kusion_apply"}},c={},u=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],l={toc:u};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion"},"kusion"),(0,o.kt)("p",null,"Kusion is the platform engineering engine of KusionStack"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Kusion is the platform engineering engine of KusionStack. It delivers intentions to Kubernetes, Clouds, and On-Premise resources."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for kusion\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/reference/cli/kusion/kusion_apply"},"kusion apply"),"\t - Apply the operation intents of various resources to multiple runtimes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/reference/cli/kusion/kusion_compile"},"kusion compile"),"\t - Compile KCL into YAML"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/reference/cli/kusion/kusion_destroy"},"kusion destroy"),"\t - Delete the specified resources in runtime"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/reference/cli/kusion/kusion_init"},"kusion init"),"\t - Initialize the scaffolding for a project"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/reference/cli/kusion/kusion_preview"},"kusion preview"),"\t - Preview a series of resource changes within the stack"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/reference/cli/kusion/kusion_version"},"kusion version"),"\t - Print the Kusion version information for the current context")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}p.isMDXComponent=!0}}]);