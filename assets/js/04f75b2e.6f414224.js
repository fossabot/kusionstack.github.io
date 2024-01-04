"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={},s="kusion init",a={unversionedId:"user_docs/reference/cli/kusion/kusion_init",id:"user_docs/reference/cli/kusion/kusion_init",title:"kusion init",description:"Initialize the scaffolding for a project",source:"@site/docs/user_docs/reference/cli/kusion/kusion_init.md",sourceDirName:"user_docs/reference/cli/kusion",slug:"/user_docs/reference/cli/kusion/kusion_init",permalink:"/docs/next/user_docs/reference/cli/kusion/kusion_init",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/reference/cli/kusion/kusion_init.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1704363490,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{},sidebar:"user_docs",previous:{title:"kusion destroy",permalink:"/docs/next/user_docs/reference/cli/kusion/kusion_destroy"},next:{title:"kusion preview",permalink:"/docs/next/user_docs/reference/cli/kusion/kusion_preview"}},l={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 28-Sep-2023",id:"auto-generated-by-spf13cobra-on-28-sep-2023",level:6}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-init"},"kusion init"),(0,r.kt)("p",null,"Initialize the scaffolding for a project"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"This command initializes the scaffolding for a project, generating a project from an appointed template with correct structure."),(0,r.kt)("p",null," The scaffold templates can be retrieved from local or online. The built-in templates are used by default, self-defined templates are also supported by assigning the template repository path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion init\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # Initialize a project from internal templates\n  kusion init\n  \n  # Initialize a project from default online templates\n  kusion init --online=true\n  \n  # Initialize a project from a specific online template\n  kusion init https://github.com/<user>/<repo> --online=true\n  \n  # Initialize a project from a specific local template\n  kusion init /path/to/templates\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --custom-params string   Custom params in JSON. If specified, it will be used as the template default value and skip prompts\n      --force                  Force generating the scaffolding files, even if it would change the existing files\n  -h, --help                   help for init\n      --online                 Use templates from online repository to initialize project, or use locally cached templates\n      --project-name string    Initialize with specified project name. If not specified, a prompt will request it\n      --template-name string   Initialize with specified template. If not specified, a prompt will request it\n      --yes                    Skip prompts and proceed with default values\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/user_docs/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-28-sep-2023"},"Auto generated by spf13/cobra on 28-Sep-2023"))}u.isMDXComponent=!0}}]);