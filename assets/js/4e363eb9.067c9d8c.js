"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4588],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(i,".").concat(k)]||d[k]||u[k]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},s="kusion workspace delete",c={unversionedId:"reference/commands/kusion-workspace-delete",id:"reference/commands/kusion-workspace-delete",title:"kusion workspace delete",description:"Delete a workspace",source:"@site/docs/kusion/6-reference/1-commands/kusion-workspace-delete.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-workspace-delete",permalink:"/docs/next/reference/commands/kusion-workspace-delete",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-workspace-delete.md",tags:[],version:"current",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1718866078,formattedLastUpdatedAt:"Jun 20, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion workspace create",permalink:"/docs/next/reference/commands/kusion-workspace-create"},next:{title:"kusion workspace list",permalink:"/docs/next/reference/commands/kusion-workspace-list"}},i={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 12-Jun-2024",id:"auto-generated-by-spf13cobra-on-12-jun-2024",level:6}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-workspace-delete"},"kusion workspace delete"),(0,o.kt)("p",null,"Delete a workspace"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This command deletes the current or a specified workspace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion workspace delete\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Delete the current workspace\n  kusion workspace delete\n  \n  # Delete a specified workspace\n  kusion workspace delete dev\n  \n  # Delete a specified workspace in a specified backend\n  kusion workspace delete prod --backend oss-prod\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --backend string   the backend name\n  -h, --help             help for delete\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/reference/commands/kusion-workspace"},"kusion workspace"),"\t - Workspace is a logical concept representing a target that stacks will be deployed to")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-12-jun-2024"},"Auto generated by spf13/cobra on 12-Jun-2024"))}u.isMDXComponent=!0}}]);