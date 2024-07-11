"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={},a="kusion apply",s={unversionedId:"reference/cli/kusion/kusion_apply",id:"version-v0.9/reference/cli/kusion/kusion_apply",title:"kusion apply",description:"Apply the operation intents of various resources to multiple runtimes",source:"@site/docs_versioned_docs/version-v0.9/reference/cli/kusion/kusion_apply.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/kusion_apply",permalink:"/docs/v0.9/reference/cli/kusion/kusion_apply",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.9/reference/cli/kusion/kusion_apply.md",tags:[],version:"v0.9",lastUpdatedBy:"Dayuan",lastUpdatedAt:1720688154,formattedLastUpdatedAt:"Jul 11, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"Kusion Commands",permalink:"/docs/v0.9/reference/cli/kusion/"},next:{title:"kusion build",permalink:"/docs/v0.9/reference/cli/kusion/kusion_build"}},l={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 28-Sep-2023",id:"auto-generated-by-spf13cobra-on-28-sep-2023",level:6}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kusion-apply"},"kusion apply"),(0,i.kt)("p",null,"Apply the operation intents of various resources to multiple runtimes"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Apply a series of resource changes within the stack."),(0,i.kt)("p",null," Create or update or delete resources according to the KCL files within a stack. By default, Kusion will generate an execution plan and present it for your approval before taking any action."),(0,i.kt)("p",null," You can check the plan details and then decide if the actions should be taken or aborted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion apply [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # Apply with specifying work directory\n  kusion apply -w /path/to/workdir\n  \n  # Apply with specifying arguments\n  kusion apply -D name=test -D age=18\n  \n  # Apply with specifying setting file\n  kusion apply -Y settings.yaml\n  \n  # Apply with specifying spec file\n  kusion apply --spec-file spec.yaml\n  \n  # Skip interactive approval of plan details before applying\n  kusion apply --yes\n  \n  # Apply without output style and color\n  kusion apply --no-style=true\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -a, --all --detail              Automatically show all plan details, combined use with flag --detail\n  -D, --argument stringToString   Specify the top-level argument (default [])\n  -C, --backend-config strings    backend-config config state storage backend\n      --backend-type string       backend-type specify state storage backend\n  -d, --detail                    Automatically show plan details with interactive options\n      --dry-run                   Preview the execution effect (always successful) without actually applying the changes\n  -h, --help                      help for apply\n      --ignore-fields strings     Ignore differences of target fields\n      --no-style                  no-style sets to RawOutput mode and disables all of styling\n      --operator string           Specify the operator\n  -o, --output string             Specify the output format\n  -O, --overrides strings         Specify the configuration override path and value\n  -Y, --setting strings           Specify the command line setting files\n      --spec-file string          Specify the spec file path as input, and the spec file must be located in the working directory or its subdirectories\n      --watch                     After creating/updating/deleting the requested object, watch for changes\n  -w, --workdir string            Specify the work directory\n  -y, --yes                       Automatically approve and perform the update after previewing it\n")),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/v0.9/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-28-sep-2023"},"Auto generated by spf13/cobra on 28-Sep-2023"))}u.isMDXComponent=!0}}]);