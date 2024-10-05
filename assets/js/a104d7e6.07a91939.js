"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46773],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return t?o.createElement(f,i(i({ref:n},m),{},{components:t})):o.createElement(f,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},42419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={},i="kusion mod",s={unversionedId:"reference/commands/kusion-mod",id:"reference/commands/kusion-mod",title:"kusion mod",description:"Manage Kusion modules",source:"@site/docs/kusion/6-reference/1-commands/kusion-mod.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-mod",permalink:"/docs/next/reference/commands/kusion-mod",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-mod.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728109585,formattedLastUpdatedAt:"Oct 5, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion mod push",permalink:"/docs/next/reference/commands/kusion-mod-push"},next:{title:"kusion options",permalink:"/docs/next/reference/commands/kusion-options"}},l={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 26-Sep-2024",id:"auto-generated-by-spf13cobra-on-26-sep-2024",level:6}],m={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-mod"},"kusion mod"),(0,r.kt)("p",null,"Manage Kusion modules"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Commands for managing Kusion modules."),(0,r.kt)("p",null," These commands help you manage the lifecycle of Kusion modules."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion mod\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -h, --help   help for mod\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of Internal Developer Platform"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/commands/kusion-mod-add"},"kusion mod add"),"\t - Add a module from a workspace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/commands/kusion-mod-init"},"kusion mod init"),"\t - Create a kusion module along with common files and directories in the current directory"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/commands/kusion-mod-list"},"kusion mod list"),"\t - List kusion modules in a workspace "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/commands/kusion-mod-push"},"kusion mod push"),"\t - Push a module to OCI registry")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-26-sep-2024"},"Auto generated by spf13/cobra on 26-Sep-2024"))}u.isMDXComponent=!0}}]);