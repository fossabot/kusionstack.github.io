"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44708],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={},a="kusion release show",i={unversionedId:"reference/commands/kusion-release-show",id:"reference/commands/kusion-release-show",title:"kusion release show",description:"Show details of a release of the current or specified stack",source:"@site/docs/kusion/6-reference/1-commands/kusion-release-show.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-release-show",permalink:"/zh/docs/next/reference/commands/kusion-release-show",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-release-show.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"2024\u5e7410\u67085\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion release list",permalink:"/zh/docs/next/reference/commands/kusion-release-list"},next:{title:"kusion release unlock",permalink:"/zh/docs/next/reference/commands/kusion-release-unlock"}},l={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 26-Sep-2024",id:"auto-generated-by-spf13cobra-on-26-sep-2024",level:6}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-release-show"},"kusion release show"),(0,o.kt)("p",null,"Show details of a release of the current or specified stack"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Show details of a release of the current or specified stack."),(0,o.kt)("p",null," This command displays detailed information about a release of the current project in the current or a specified workspace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion release show [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Show details of the latest release of the current project in the current workspace\n  kusion release show\n  \n  # Show details of a specific release of the current project in the current workspace\n  kusion release show --revision=1\n  \n  # Show details of a specific release of the specified project in the specified workspace\n  kusion release show --revision=1 --project=hoangndst --workspace=dev\n  \n  # Show details of the latest release with specified backend\n  kusion release show --backend=local\n  \n  # Show details of the latest release with specified output format\n  kusion release show --output=json\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --backend string     The backend to use, supports 'local', 'oss' and 's3'\n  -h, --help               help for show\n  -o, --output string      Specify the output format\n      --project string     The project name\n      --revision uint      The revision number of the release\n      --workspace string   The workspace name\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/commands/kusion-release"},"kusion release"),"\t - Manage Kusion release files")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-26-sep-2024"},"Auto generated by spf13/cobra on 26-Sep-2024"))}u.isMDXComponent=!0}}]);