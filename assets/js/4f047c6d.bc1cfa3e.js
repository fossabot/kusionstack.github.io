"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[52124],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},c="kusion stack create",i={unversionedId:"reference/commands/kusion-stack-create",id:"reference/commands/kusion-stack-create",title:"kusion stack create",description:"Create a new stack",source:"@site/docs/kusion/6-reference/1-commands/kusion-stack-create.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-stack-create",permalink:"/docs/next/reference/commands/kusion-stack-create",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-stack-create.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727688217,formattedLastUpdatedAt:"Sep 30, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion resource",permalink:"/docs/next/reference/commands/kusion-resource"},next:{title:"kusion stack",permalink:"/docs/next/reference/commands/kusion-stack"}},s={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 26-Sep-2024",id:"auto-generated-by-spf13cobra-on-26-sep-2024",level:6}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-stack-create"},"kusion stack create"),(0,o.kt)("p",null,"Create a new stack"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This command creates a new stack under the target directory which by default is the current working directory."),(0,o.kt)("p",null," The stack folder to be created contains 'stack.yaml', 'kcl.mod' and 'main.k' with the specified values."),(0,o.kt)("p",null," Note that the target directory needs to be a valid project directory with project.yaml file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion stack create\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Create a new stack at current project directory\n  kusion stack create dev\n  \n  # Create a new stack in a specified target project directory\n  kusion stack create dev --target /dir/to/projects/my-project\n  \n  # Create a new stack copied from the referenced stack under the target project directory\n  kusion stack create prod --copy-from dev\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --copy-from string   specify the referenced stack path to copy from\n  -h, --help               help for create\n  -t, --target string      specify the target project directory\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/reference/commands/kusion-stack"},"kusion stack"),"\t - Stack is a folder that contains a stack.yaml file within the corresponding project directory")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-26-sep-2024"},"Auto generated by spf13/cobra on 26-Sep-2024"))}u.isMDXComponent=!0}}]);