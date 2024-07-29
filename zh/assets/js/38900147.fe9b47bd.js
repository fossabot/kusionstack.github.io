"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,v=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={},s="kusion preview",a={unversionedId:"reference/cli/kusion/kusion_preview",id:"version-v0.9/reference/cli/kusion/kusion_preview",title:"kusion preview",description:"Preview a series of resource changes within the stack",source:"@site/docs_versioned_docs/version-v0.9/reference/cli/kusion/kusion_preview.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/kusion_preview",permalink:"/zh/docs/v0.9/reference/cli/kusion/kusion_preview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/reference/cli/kusion/kusion_preview.md",tags:[],version:"v0.9",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1722237898,formattedLastUpdatedAt:"2024\u5e747\u670829\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion init",permalink:"/zh/docs/v0.9/reference/cli/kusion/kusion_init"},next:{title:"kusion version",permalink:"/zh/docs/v0.9/reference/cli/kusion/kusion_version"}},l={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 28-Sep-2023",id:"auto-generated-by-spf13cobra-on-28-sep-2023",level:6}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kusion-preview"},"kusion preview"),(0,i.kt)("p",null,"Preview a series of resource changes within the stack"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Preview a series of resource changes within the stack."),(0,i.kt)("p",null," Create or update or delete resources according to the KCL files within a stack. By default, Kusion will generate an execution plan and present it for your approval before taking any action."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion preview [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  # Preview with specifying work directory\n  kusion preview -w /path/to/workdir\n  \n  # Preview with specifying arguments\n  kusion preview -D name=test -D age=18\n  \n  # Preview with specifying setting file\n  kusion preview -Y settings.yaml\n  \n  # Preview with specifying spec file\n  kusion preview --spec-file spec.yaml\n  \n  # Preview with ignored fields\n  kusion preview --ignore-fields="metadata.generation,metadata.managedFields\n  \n  # Preview with json format result\n  kusion preview -o json\n  \n  # Preview without output style and color\n  kusion preview --no-style=true\n')),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -a, --all --detail              Automatically show all plan details, combined use with flag --detail\n  -D, --argument stringToString   Specify the top-level argument (default [])\n  -C, --backend-config strings    backend-config config state storage backend\n      --backend-type string       backend-type specify state storage backend\n  -d, --detail                    Automatically show plan details with interactive options\n  -h, --help                      help for preview\n      --ignore-fields strings     Ignore differences of target fields\n      --no-style                  no-style sets to RawOutput mode and disables all of styling\n      --operator string           Specify the operator\n  -o, --output string             Specify the output format\n  -O, --overrides strings         Specify the configuration override path and value\n  -Y, --setting strings           Specify the command line setting files\n      --spec-file string          Specify the spec file path as input, and the spec file must be located in the working directory or its subdirectories\n  -w, --workdir string            Specify the work directory\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/docs/v0.9/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-28-sep-2023"},"Auto generated by spf13/cobra on 28-Sep-2023"))}u.isMDXComponent=!0}}]);