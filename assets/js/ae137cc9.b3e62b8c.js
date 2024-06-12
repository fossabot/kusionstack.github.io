"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46909],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=c(t),m=r,f=l["".concat(s,".").concat(m)]||l[m]||p[m]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=l;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},64029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={},i=void 0,d={unversionedId:"reference/commands/kusion-mod-add",id:"reference/commands/kusion-mod-add",title:"kusion-mod-add",description:"kusion mod add",source:"@site/docs/kusion/6-reference/1-commands/kusion-mod-add.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-mod-add",permalink:"/docs/next/reference/commands/kusion-mod-add",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-mod-add.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1718202711,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion init",permalink:"/docs/next/reference/commands/kusion-init"},next:{title:"kusion mod init",permalink:"/docs/next/reference/commands/kusion-mod-init"}},s={},c=[{value:"kusion mod add",id:"kusion-mod-add",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 12-Jun-2024",id:"auto-generated-by-spf13cobra-on-12-jun-2024",level:6}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"kusion-mod-add"},"kusion mod add"),(0,r.kt)("p",null,"Add a module from a workspace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion mod add MODULE_NAME [--workspace WORKSPACE] [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # Add a kusion module to the kcl.mod from the current workspace to use it in AppConfiguration\n  kusion mod add my-module\n  \n  # Add a module to the kcl.mod from a specified workspace to use it in AppConfiguration\n  kusion mod add my-module --workspace=dev\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --backend string     The backend to use, supports 'local', 'oss' and 's3'.\n  -h, --help               help for add\n  -w, --workdir string     The work directory to run Kusion CLI.\n      --workspace string   The name of target workspace to operate in.\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/reference/commands/kusion-mod"},"kusion mod"),"\t - Manage Kusion modules")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jun-2024"},"Auto generated by spf13/cobra on 12-Jun-2024"))}p.isMDXComponent=!0}}]);