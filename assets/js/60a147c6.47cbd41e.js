"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={sidebar_position:6},a="Preview",s={unversionedId:"reference/cli/kusionctl/preview",id:"reference/cli/kusionctl/preview",title:"Preview",description:"Preview a series of resource changes within the stack",source:"@site/docs/reference/cli/kusionctl/preview.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/preview",permalink:"/docs/reference/cli/kusionctl/preview",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/preview.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663826453,formattedLastUpdatedAt:"9/22/2022",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"reference",previous:{title:"Apply",permalink:"/docs/reference/cli/kusionctl/apply"},next:{title:"\u9500\u6bc1\u8d44\u6e90",permalink:"/docs/reference/cli/kusionctl/destroy"}},c={},l=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 13-Sep-2022",id:"auto-generated-by-spf13cobra-on-13-sep-2022",level:6}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preview"},"Preview"),(0,i.kt)("p",null,"Preview a series of resource changes within the stack"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Preview a series of resource changes within the stack."),(0,i.kt)("p",null,"Create or update or delete resources according to the KCL files within a stack. By default, Kusion will generate an execution plan and present it for your approval before taking any action."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion preview [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  # Preview with specifying work directory\n  kusion preview -w /path/to/workdir\n  \n  # Preview with specifying arguments\n  kusion preview -D name=test -D age=18\n  \n  # Preview with specifying setting file\n  kusion preview -Y settings.yaml\n  \n  # Preview with ignored fields\n  kusion preview --ignore-fields="metadata.generation,metadata.managedFields"\n')),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -D, --argument stringArray     Specify the top-level argument\n  -C, --backend-config strings   backend-config config state storage backend\n      --backend-type string      backend-type specify state storage backend\n  -d, --detail                   Automatically show plan details after previewing it\n  -h, --help                     help for preview\n      --ignore-fields strings    Ignore differences of target fields\n      --operator string          Specify the operator\n  -O, --overrides strings        Specify the configuration override path and value\n  -Y, --setting strings          Specify the command line setting files\n  -w, --workdir string           Specify the work directory\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/cli/kusionctl/overview"},"kusion")," - kusion manages the Kubernetes cluster by code")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-13-sep-2022"},"Auto generated by spf13/cobra on 13-Sep-2022"))}u.isMDXComponent=!0}}]);