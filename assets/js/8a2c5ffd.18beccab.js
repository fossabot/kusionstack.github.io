"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=o,m=k["".concat(c,".").concat(d)]||k[d]||u[d]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},54759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},s="kusion workspace",i={unversionedId:"kusion/reference/commands/kusion-workspace",id:"version-v0.10/kusion/reference/commands/kusion-workspace",title:"kusion workspace",description:"Workspace is a logical concept representing a target that stacks will be deployed to",source:"@site/versioned_docs/version-v0.10/kusion/6-reference/1-commands/kusion-workspace.md",sourceDirName:"kusion/6-reference/1-commands",slug:"/kusion/reference/commands/kusion-workspace",permalink:"/docs/kusion/reference/commands/kusion-workspace",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.10/kusion/6-reference/1-commands/kusion-workspace.md",tags:[],version:"v0.10",lastUpdatedBy:"Forest",lastUpdatedAt:1711632562,formattedLastUpdatedAt:"Mar 28, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion workspace update",permalink:"/docs/kusion/reference/commands/kusion-workspace-update"},next:{title:"Kusion Modules",permalink:"/docs/kusion/reference/modules/"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Jan-2024",id:"auto-generated-by-spf13cobra-on-4-jan-2024",level:6}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-workspace"},"kusion workspace"),(0,o.kt)("p",null,"Workspace is a logical concept representing a target that stacks will be deployed to"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Workspace is a logical concept representing a target that stacks will be deployed to."),(0,o.kt)("p",null," Workspace is managed by platform engineers, which contains a set of configurations that application developers do not want or should not concern, and is reused by multiple stacks belonging to different projects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion workspace [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for workspace\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/kusion/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of KusionStack"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/kusion/reference/commands/kusion-workspace-create"},"kusion workspace create"),"\t - Create a new workspace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/kusion/reference/commands/kusion-workspace-delete"},"kusion workspace delete"),"\t - Delete a workspace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/kusion/reference/commands/kusion-workspace-list"},"kusion workspace list"),"\t - List all workspace names"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/kusion/reference/commands/kusion-workspace-show"},"kusion workspace show"),"\t - Show a workspace configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/kusion/reference/commands/kusion-workspace-update"},"kusion workspace update"),"\t - Update a workspace configuration")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-jan-2024"},"Auto generated by spf13/cobra on 4-Jan-2024"))}u.isMDXComponent=!0}}]);