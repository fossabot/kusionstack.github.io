"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40799],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),k=r,f=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return t?o.createElement(f,s(s({ref:n},l),{},{components:t})):o.createElement(f,s({ref:n},l))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},46598:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={},s="kusion workspace show",i={unversionedId:"reference/commands/kusion-workspace-show",id:"reference/commands/kusion-workspace-show",title:"kusion workspace show",description:"Show a workspace configuration",source:"@site/docs/kusion/6-reference/1-commands/kusion-workspace-show.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-workspace-show",permalink:"/zh/docs/next/reference/commands/kusion-workspace-show",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-workspace-show.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1720065334,formattedLastUpdatedAt:"2024\u5e747\u67084\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion workspace list",permalink:"/zh/docs/next/reference/commands/kusion-workspace-list"},next:{title:"kusion workspace switch",permalink:"/zh/docs/next/reference/commands/kusion-workspace-switch"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 12-Jun-2024",id:"auto-generated-by-spf13cobra-on-12-jun-2024",level:6}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-workspace-show"},"kusion workspace show"),(0,r.kt)("p",null,"Show a workspace configuration"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"This command gets the current or a specified workspace configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion workspace show\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # Show current workspace configuration\n  kusion workspace show\n  \n  # Show a specified workspace configuration\n  kusion workspace show dev\n  \n  # Show a specified workspace in a specified backend\n  kusion workspace show prod --backend oss-prod\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --backend string   the backend name\n  -h, --help             help for show\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/commands/kusion-workspace"},"kusion workspace"),"\t - Workspace is a logical concept representing a target that stacks will be deployed to")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jun-2024"},"Auto generated by spf13/cobra on 12-Jun-2024"))}u.isMDXComponent=!0}}]);