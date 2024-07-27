"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8514],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var o=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,o,t=function(e,r){if(null==e)return{};var n,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=o.createContext({}),p=function(e){var r=o.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=t,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(k,s(s({ref:r},l),{},{components:n})):o.createElement(k,s({ref:r},l))}));function f(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94067:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),t=(n(67294),n(3905));const a={},s="kusion workspace show",i={unversionedId:"reference/commands/kusion-workspace-show",id:"version-v0.11/reference/commands/kusion-workspace-show",title:"kusion workspace show",description:"Show a workspace configuration",source:"@site/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-workspace-show.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-workspace-show",permalink:"/docs/v0.11/reference/commands/kusion-workspace-show",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-workspace-show.md",tags:[],version:"v0.11",lastUpdatedBy:"Ekjot Singh",lastUpdatedAt:1722091057,formattedLastUpdatedAt:"Jul 27, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion workspace list",permalink:"/docs/v0.11/reference/commands/kusion-workspace-list"},next:{title:"kusion workspace switch",permalink:"/docs/v0.11/reference/commands/kusion-workspace-switch"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 29-Apr-2024",id:"auto-generated-by-spf13cobra-on-29-apr-2024",level:6}],l={toc:p};function u(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,o.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"kusion-workspace-show"},"kusion workspace show"),(0,t.kt)("p",null,"Show a workspace configuration"),(0,t.kt)("h3",{id:"synopsis"},"Synopsis"),(0,t.kt)("p",null,"This command gets the current or a specified workspace configuration."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"kusion workspace show\n")),(0,t.kt)("h3",{id:"examples"},"Examples"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"  # Show current workspace configuration\n  kusion workspace show\n  \n  # Show a specified workspace configuration\n  kusion workspace show dev\n  \n  # Show a specified workspace in a specified backend\n  kusion workspace show prod --backend oss-prod\n")),(0,t.kt)("h3",{id:"options"},"Options"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"      --backend string   the backend name\n  -h, --help             help for show\n")),(0,t.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,t.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/v0.11/reference/commands/kusion-workspace"},"kusion workspace"),"\t - Workspace is a logical concept representing a target that stacks will be deployed to")),(0,t.kt)("h6",{id:"auto-generated-by-spf13cobra-on-29-apr-2024"},"Auto generated by spf13/cobra on 29-Apr-2024"))}u.isMDXComponent=!0}}]);