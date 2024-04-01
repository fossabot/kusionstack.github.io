"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5385],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,k=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return t?i.createElement(k,s(s({ref:n},p),{},{components:t})):i.createElement(k,s({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},18620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const o={},s="kusion preview",a={unversionedId:"kusion/reference/cli/kusion/kusion_preview",id:"version-v0.9/kusion/reference/cli/kusion/kusion_preview",title:"kusion preview",description:"Preview a series of resource changes within the stack",source:"@site/versioned_docs/version-v0.9/kusion/reference/cli/kusion/kusion_preview.md",sourceDirName:"kusion/reference/cli/kusion",slug:"/kusion/reference/cli/kusion/kusion_preview",permalink:"/docs/v0.9/kusion/reference/cli/kusion/kusion_preview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/reference/cli/kusion/kusion_preview.md",tags:[],version:"v0.9",lastUpdatedBy:"Dayuan",lastUpdatedAt:1711964844,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion init",permalink:"/docs/v0.9/kusion/reference/cli/kusion/kusion_init"},next:{title:"kusion version",permalink:"/docs/v0.9/kusion/reference/cli/kusion/kusion_version"}},l={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 28-Sep-2023",id:"auto-generated-by-spf13cobra-on-28-sep-2023",level:6}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-preview"},"kusion preview"),(0,r.kt)("p",null,"Preview a series of resource changes within the stack"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Preview a series of resource changes within the stack."),(0,r.kt)("p",null," Create or update or delete resources according to the KCL files within a stack. By default, Kusion will generate an execution plan and present it for your approval before taking any action."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion preview [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  # Preview with specifying work directory\n  kusion preview -w /path/to/workdir\n  \n  # Preview with specifying arguments\n  kusion preview -D name=test -D age=18\n  \n  # Preview with specifying setting file\n  kusion preview -Y settings.yaml\n  \n  # Preview with specifying spec file\n  kusion preview --spec-file spec.yaml\n  \n  # Preview with ignored fields\n  kusion preview --ignore-fields="metadata.generation,metadata.managedFields\n  \n  # Preview with json format result\n  kusion preview -o json\n  \n  # Preview without output style and color\n  kusion preview --no-style=true\n')),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -a, --all --detail              Automatically show all plan details, combined use with flag --detail\n  -D, --argument stringToString   Specify the top-level argument (default [])\n  -C, --backend-config strings    backend-config config state storage backend\n      --backend-type string       backend-type specify state storage backend\n  -d, --detail                    Automatically show plan details with interactive options\n  -h, --help                      help for preview\n      --ignore-fields strings     Ignore differences of target fields\n      --no-style                  no-style sets to RawOutput mode and disables all of styling\n      --operator string           Specify the operator\n  -o, --output string             Specify the output format\n  -O, --overrides strings         Specify the configuration override path and value\n  -Y, --setting strings           Specify the command line setting files\n      --spec-file string          Specify the spec file path as input, and the spec file must be located in the working directory or its subdirectories\n  -w, --workdir string            Specify the work directory\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.9/kusion/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-28-sep-2023"},"Auto generated by spf13/cobra on 28-Sep-2023"))}u.isMDXComponent=!0}}]);