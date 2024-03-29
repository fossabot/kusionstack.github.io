"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,p={unversionedId:"kusion/reference/commands/kusion-apply",id:"kusion/reference/commands/kusion-apply",title:"kusion-apply",description:"kusion apply",source:"@site/docs/kusion/6-reference/1-commands/kusion-apply.md",sourceDirName:"kusion/6-reference/1-commands",slug:"/kusion/reference/commands/kusion-apply",permalink:"/docs/next/kusion/reference/commands/kusion-apply",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-apply.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1711714561,formattedLastUpdatedAt:"Mar 29, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"Kusion Commands",permalink:"/docs/next/kusion/reference/commands/"},next:{title:"kusion-config-get",permalink:"/docs/next/kusion/reference/commands/kusion-config-get"}},s={},l=[{value:"kusion apply",id:"kusion-apply",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 29-Mar-2024",id:"auto-generated-by-spf13cobra-on-29-mar-2024",level:6}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kusion-apply"},"kusion apply"),(0,o.kt)("p",null,"Apply the operational intent of various resources to multiple runtimes"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Apply a series of resource changes within the stack."),(0,o.kt)("p",null," Create, update or delete resources according to the operational intent within a stack. By default, Kusion will generate an execution preview and prompt for your approval before performing any actions. You can review the preview details and make a decision to proceed with the actions or abort them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion apply [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Apply with specified work directory\n  kusion apply -w /path/to/workdir\n  \n  # Apply with specified arguments\n  kusion apply -D name=test -D age=18\n  \n  # Apply with specified intent file\n  kusion apply --intent-file intent.yaml\n  \n  # Apply with specifying intent file\n  kusion apply --intent-file intent.yaml\n  \n  # Skip interactive approval of preview details before applying\n  kusion apply --yes\n  \n  # Apply without output style and color\n  kusion apply --no-style=true\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -a, --all --detail              Automatically show all preview details, combined use with flag --detail\n  -D, --argument stringToString   Specify the top-level argument (default [])\n      --backend string            the backend name\n  -d, --detail                    Automatically show preview details with interactive options (default true)\n      --dry-run                   Preview the execution effect (always successful) without actually applying the changes\n  -h, --help                      help for apply\n      --ignore-fields strings     Ignore differences of target fields\n      --intent-file string        Specify the intent file path as input, and the intent file must be located in the working directory or its subdirectories\n      --no-style                  no-style sets to RawOutput mode and disables all of styling\n      --operator string           Specify the operator\n  -o, --output string             Specify the output format\n  -Y, --setting strings           Specify the command line setting files\n      --watch                     After creating/updating/deleting the requested object, watch for changes\n  -w, --workdir string            Specify the work directory\n      --workspace string          the workspace name\n  -y, --yes                       Automatically approve and perform the update after previewing it\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/kusion/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of KusionStack")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-29-mar-2024"},"Auto generated by spf13/cobra on 29-Mar-2024"))}u.isMDXComponent=!0}}]);