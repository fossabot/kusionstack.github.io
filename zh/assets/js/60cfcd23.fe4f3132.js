"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={},a="kusion init",s={unversionedId:"reference/commands/kusion-init",id:"version-v0.10/reference/commands/kusion-init",title:"kusion init",description:"Initialize the scaffolding for a project",source:"@site/docs_versioned_docs/version-v0.10/6-reference/1-commands/kusion-init.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-init",permalink:"/zh/docs/v0.10/reference/commands/kusion-init",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/6-reference/1-commands/kusion-init.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727407616,formattedLastUpdatedAt:"2024\u5e749\u670827\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion destroy",permalink:"/zh/docs/v0.10/reference/commands/kusion-destroy"},next:{title:"kusion preview",permalink:"/zh/docs/v0.10/reference/commands/kusion-preview"}},l={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Jan-2024",id:"auto-generated-by-spf13cobra-on-4-jan-2024",level:6}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kusion-init"},"kusion init"),(0,i.kt)("p",null,"Initialize the scaffolding for a project"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"This command initializes the scaffolding for a project, generating a project from an appointed template with correct structure."),(0,i.kt)("p",null," The scaffold templates can be retrieved from local or online. The built-in templates are used by default, self-defined templates are also supported by assigning the template repository path."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion init\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # Initialize a project from internal templates\n  kusion init\n  \n  # Initialize a project from default online templates\n  kusion init --online=true\n  \n  # Initialize a project from a specific online template\n  kusion init https://github.com/<user>/<repo> --online=true\n  \n  # Initialize a project from a specific local template\n  kusion init /path/to/templates\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --custom-params string   Custom params in JSON. If specified, it will be used as the template default value and skip prompts\n      --force                  Force generating the scaffolding files, even if it would change the existing files\n  -h, --help                   help for init\n      --online                 Use templates from online repository to initialize project, or use locally cached templates\n      --project-name string    Initialize with specified project name. If not specified, a prompt will request it\n      --template-name string   Initialize with specified template. If not specified, a prompt will request it\n      --yes                    Skip prompts and proceed with default values\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.10/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of KusionStack")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-jan-2024"},"Auto generated by spf13/cobra on 4-Jan-2024"))}u.isMDXComponent=!0}}]);