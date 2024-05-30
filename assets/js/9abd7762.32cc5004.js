"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={},a="kusion init",s={unversionedId:"reference/cli/kusion/kusion_init",id:"version-v0.9/reference/cli/kusion/kusion_init",title:"kusion init",description:"Initialize the scaffolding for a project",source:"@site/docs_versioned_docs/version-v0.9/reference/cli/kusion/kusion_init.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/kusion_init",permalink:"/docs/v0.9/reference/cli/kusion/kusion_init",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/reference/cli/kusion/kusion_init.md",tags:[],version:"v0.9",lastUpdatedBy:"elliotxx",lastUpdatedAt:1717041280,formattedLastUpdatedAt:"May 30, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion destroy",permalink:"/docs/v0.9/reference/cli/kusion/kusion_destroy"},next:{title:"kusion preview",permalink:"/docs/v0.9/reference/cli/kusion/kusion_preview"}},l={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 28-Sep-2023",id:"auto-generated-by-spf13cobra-on-28-sep-2023",level:6}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-init"},"kusion init"),(0,r.kt)("p",null,"Initialize the scaffolding for a project"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"This command initializes the scaffolding for a project, generating a project from an appointed template with correct structure."),(0,r.kt)("p",null," The scaffold templates can be retrieved from local or online. The built-in templates are used by default, self-defined templates are also supported by assigning the template repository path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion init\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # Initialize a project from internal templates\n  kusion init\n  \n  # Initialize a project from default online templates\n  kusion init --online=true\n  \n  # Initialize a project from a specific online template\n  kusion init https://github.com/<user>/<repo> --online=true\n  \n  # Initialize a project from a specific local template\n  kusion init /path/to/templates\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"      --custom-params string   Custom params in JSON. If specified, it will be used as the template default value and skip prompts\n      --force                  Force generating the scaffolding files, even if it would change the existing files\n  -h, --help                   help for init\n      --online                 Use templates from online repository to initialize project, or use locally cached templates\n      --project-name string    Initialize with specified project name. If not specified, a prompt will request it\n      --template-name string   Initialize with specified template. If not specified, a prompt will request it\n      --yes                    Skip prompts and proceed with default values\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.9/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-28-sep-2023"},"Auto generated by spf13/cobra on 28-Sep-2023"))}u.isMDXComponent=!0}}]);