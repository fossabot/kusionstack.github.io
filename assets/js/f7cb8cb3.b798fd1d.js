"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68741],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45564:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={},s="kusion workspace show",i={unversionedId:"reference/commands/kusion-workspace-show",id:"version-v0.10/reference/commands/kusion-workspace-show",title:"kusion workspace show",description:"Show a workspace configuration",source:"@site/docs_versioned_docs/version-v0.10/6-reference/1-commands/kusion-workspace-show.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-workspace-show",permalink:"/docs/v0.10/reference/commands/kusion-workspace-show",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/6-reference/1-commands/kusion-workspace-show.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1722237898,formattedLastUpdatedAt:"Jul 29, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion workspace list",permalink:"/docs/v0.10/reference/commands/kusion-workspace-list"},next:{title:"kusion workspace update",permalink:"/docs/v0.10/reference/commands/kusion-workspace-update"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Jan-2024",id:"auto-generated-by-spf13cobra-on-4-jan-2024",level:6}],l={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-workspace-show"},"kusion workspace show"),(0,o.kt)("p",null,"Show a workspace configuration"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This command gets a specified workspace configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion workspace show\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Show a workspace configuration\n  kusion workspace show dev\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for show\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/v0.10/reference/commands/kusion-workspace"},"kusion workspace"),"\t - Workspace is a logical concept representing a target that stacks will be deployed to")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-jan-2024"},"Auto generated by spf13/cobra on 4-Jan-2024"))}u.isMDXComponent=!0}}]);