"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||l[m]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="kusion mod add",d={unversionedId:"reference/commands/kusion-mod-add",id:"reference/commands/kusion-mod-add",title:"kusion mod add",description:"Add a module from a workspace",source:"@site/docs/kusion/6-reference/1-commands/kusion-mod-add.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-mod-add",permalink:"/zh/docs/next/reference/commands/kusion-mod-add",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-mod-add.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727407616,formattedLastUpdatedAt:"2024\u5e749\u670827\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion init",permalink:"/zh/docs/next/reference/commands/kusion-init"},next:{title:"kusion mod init",permalink:"/zh/docs/next/reference/commands/kusion-mod-init"}},s={},c=[{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 26-Sep-2024",id:"auto-generated-by-spf13cobra-on-26-sep-2024",level:6}],p={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-mod-add"},"kusion mod add"),(0,r.kt)("p",null,"Add a module from a workspace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion mod add MODULE_NAME [--workspace WORKSPACE] [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # Add a kusion module to the kcl.mod from the current workspace to use it in AppConfiguration\n  kusion mod add my-module\n  \n  # Add a module to the kcl.mod from a specified workspace to use it in AppConfiguration\n  kusion mod add my-module --workspace=dev\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --backend string     The backend to use, supports 'local', 'oss' and 's3'.\n  -h, --help               help for add\n  -w, --workdir string     The work directory to run Kusion CLI.\n      --workspace string   The name of target workspace to operate in.\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/commands/kusion-mod"},"kusion mod"),"\t - Manage Kusion modules")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-26-sep-2024"},"Auto generated by spf13/cobra on 26-Sep-2024"))}l.isMDXComponent=!0}}]);