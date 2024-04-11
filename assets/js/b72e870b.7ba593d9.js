"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[799],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>k});var o=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=o.createContext({}),p=function(e){var n=o.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),k=t,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||a;return r?o.createElement(m,s(s({ref:n},l),{},{components:r})):o.createElement(m,s({ref:n},l))}));function k(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71295:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(87462),t=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"reference/commands/kusion-workspace-show",id:"reference/commands/kusion-workspace-show",title:"kusion-workspace-show",description:"kusion workspace show",source:"@site/docs/kusion/6-reference/1-commands/kusion-workspace-show.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-workspace-show",permalink:"/docs/next/reference/commands/kusion-workspace-show",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-workspace-show.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1712803775,formattedLastUpdatedAt:"Apr 11, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion-workspace-list",permalink:"/docs/next/reference/commands/kusion-workspace-list"},next:{title:"kusion-workspace-switch",permalink:"/docs/next/reference/commands/kusion-workspace-switch"}},c={},p=[{value:"kusion workspace show",id:"kusion-workspace-show",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 29-Mar-2024",id:"auto-generated-by-spf13cobra-on-29-mar-2024",level:6}],l={toc:p};function u(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,o.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"kusion-workspace-show"},"kusion workspace show"),(0,t.kt)("p",null,"Show a workspace configuration"),(0,t.kt)("h3",{id:"synopsis"},"Synopsis"),(0,t.kt)("p",null,"This command gets the current or a specified workspace configuration."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"kusion workspace show\n")),(0,t.kt)("h3",{id:"examples"},"Examples"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"  # Show current workspace configuration\n  kusion workspace show\n  \n  # Show a specified workspace configuration\n  kusion workspace show dev\n  \n  # Show a specified workspace in a specified backend\n  kusion workspace show prod --backend oss-prod\n")),(0,t.kt)("h3",{id:"options"},"Options"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"      --backend string   the backend name\n  -h, --help             help for show\n")),(0,t.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,t.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/next/reference/commands/kusion-workspace"},"kusion workspace"),"\t - Workspace is a logical concept representing a target that stacks will be deployed to")),(0,t.kt)("h6",{id:"auto-generated-by-spf13cobra-on-29-mar-2024"},"Auto generated by spf13/cobra on 29-Mar-2024"))}u.isMDXComponent=!0}}]);