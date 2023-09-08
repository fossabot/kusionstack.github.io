"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:7},s="kusion destroy",a={unversionedId:"reference/cli/kusion/destroy",id:"reference/cli/kusion/destroy",title:"kusion destroy",description:"Delete the specified resources in runtime",source:"@site/docs/reference/cli/kusion/destroy.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/destroy",permalink:"/docs/reference/cli/kusion/destroy",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusion/destroy.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1694160251,formattedLastUpdatedAt:"Sep 8, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"reference",previous:{title:"kusion apply",permalink:"/docs/reference/cli/kusion/apply"},next:{title:"kusion version",permalink:"/docs/reference/cli/kusion/version"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-destroy"},"kusion destroy"),(0,o.kt)("p",null,"Delete the specified resources in runtime"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Delete resources by resource spec."),(0,o.kt)("p",null,"Only KCL files are accepted. Only one type of arguments may be specified: filenames, resources and names, or resources and label selector."),(0,o.kt)("p",null,"Note that the destroy command does NOT do resource version checks, so if someone submits an update to a resource right when you submit a destroy, their update will be lost along with the rest of the resource."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion destroy [flags]\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Delete the configuration of current stack\n  kusion destroy\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -D, --argument stringArray     Specify the top-level argument\n  -C, --backend-config strings   backend-config config state storage backend\n      --backend-type string      backend-type specify state storage backend\n  -d, --detail                   Automatically show plan details after previewing it\n  -h, --help                     help for destroy\n      --operator string          Specify the operator\n  -O, --overrides strings        Specify the configuration override path and value\n  -Y, --setting strings          Specify the command line setting files\n  -w, --workdir string           Specify the work directory\n  -y, --yes                      Automatically approve and perform the update after previewing it\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}u.isMDXComponent=!0}}]);