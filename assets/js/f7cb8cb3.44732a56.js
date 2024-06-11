"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68741],{3905:(e,n,o)=>{o.d(n,{Zo:()=>l,kt:()=>m});var r=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=r.createContext({}),p=function(e){var n=r.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=t,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(f,s(s({ref:n},l),{},{components:o})):r.createElement(f,s({ref:n},l))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},66509:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(87462),t=(o(67294),o(3905));const a={},s="kusion workspace show",i={unversionedId:"reference/commands/kusion-workspace-show",id:"version-v0.10/reference/commands/kusion-workspace-show",title:"kusion workspace show",description:"Show a workspace configuration",source:"@site/docs_versioned_docs/version-v0.10/6-reference/1-commands/kusion-workspace-show.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-workspace-show",permalink:"/docs/v0.10/reference/commands/kusion-workspace-show",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/6-reference/1-commands/kusion-workspace-show.md",tags:[],version:"v0.10",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1718116037,formattedLastUpdatedAt:"Jun 11, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion workspace list",permalink:"/docs/v0.10/reference/commands/kusion-workspace-list"},next:{title:"kusion workspace update",permalink:"/docs/v0.10/reference/commands/kusion-workspace-update"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Jan-2024",id:"auto-generated-by-spf13cobra-on-4-jan-2024",level:6}],l={toc:p};function u(e){let{components:n,...o}=e;return(0,t.kt)("wrapper",(0,r.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"kusion-workspace-show"},"kusion workspace show"),(0,t.kt)("p",null,"Show a workspace configuration"),(0,t.kt)("h3",{id:"synopsis"},"Synopsis"),(0,t.kt)("p",null,"This command gets a specified workspace configuration."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"kusion workspace show\n")),(0,t.kt)("h3",{id:"examples"},"Examples"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"  # Show a workspace configuration\n  kusion workspace show dev\n")),(0,t.kt)("h3",{id:"options"},"Options"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"  -h, --help   help for show\n")),(0,t.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,t.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/docs/v0.10/reference/commands/kusion-workspace"},"kusion workspace"),"\t - Workspace is a logical concept representing a target that stacks will be deployed to")),(0,t.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-jan-2024"},"Auto generated by spf13/cobra on 4-Jan-2024"))}u.isMDXComponent=!0}}]);