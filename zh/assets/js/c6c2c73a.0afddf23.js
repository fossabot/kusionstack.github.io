"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},a="kusion preview",s={unversionedId:"reference/commands/kusion-preview",id:"version-v0.11/reference/commands/kusion-preview",title:"kusion preview",description:"Preview a series of resource changes within the stack",source:"@site/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-preview.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-preview",permalink:"/zh/docs/v0.11/reference/commands/kusion-preview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/6-reference/1-commands/kusion-preview.md",tags:[],version:"v0.11",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1720085825,formattedLastUpdatedAt:"2024\u5e747\u67084\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion options",permalink:"/zh/docs/v0.11/reference/commands/kusion-options"},next:{title:"kusion project create",permalink:"/zh/docs/v0.11/reference/commands/kusion-project-create"}},p={},l=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 29-Apr-2024",id:"auto-generated-by-spf13cobra-on-29-apr-2024",level:6}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-preview"},"kusion preview"),(0,o.kt)("p",null,"Preview a series of resource changes within the stack"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Preview a series of resource changes within the stack."),(0,o.kt)("p",null," Create, update or delete resources according to the intent described in the stack. By default, Kusion will generate an execution preview and present it for your approval before taking any action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion preview [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  # Preview with specified work directory\n  kusion preview -w /path/to/workdir\n  \n  # Preview with specified arguments\n  kusion preview -D name=test -D age=18\n  \n  # Preview with ignored fields\n  kusion preview --ignore-fields="metadata.generation,metadata.managedFields\n  \n  # Preview with json format result\n  kusion preview -o json\n  \n  # Preview without output style and color\n  kusion preview --no-style=true\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -a, --all --detail            Automatically show all preview details, combined use with flag --detail\n      --backend string          The backend to use, supports 'local', 'oss' and 's3'.\n  -d, --detail                  Automatically show preview details with interactive options (default true)\n  -h, --help                    help for preview\n      --ignore-fields strings   Ignore differences of target fields\n      --no-style                no-style sets to RawOutput mode and disables all of styling\n      --operator string         Specify the operator\n  -o, --output string           Specify the output format\n  -w, --workdir string          The work directory to run Kusion CLI.\n      --workspace string        The name of target workspace to operate in.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/v0.11/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of Internal Developer Platform")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-29-apr-2024"},"Auto generated by spf13/cobra on 29-Apr-2024"))}u.isMDXComponent=!0}}]);