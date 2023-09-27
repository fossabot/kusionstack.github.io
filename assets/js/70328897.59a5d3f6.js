"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8104],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:6},a="kusion apply",s={unversionedId:"user_docs/reference/cli/kusion/apply",id:"user_docs/reference/cli/kusion/apply",title:"kusion apply",description:"Apply the operation intents of various resources to multiple runtimes",source:"@site/docs/user_docs/reference/cli/kusion/apply.md",sourceDirName:"user_docs/reference/cli/kusion",slug:"/user_docs/reference/cli/kusion/apply",permalink:"/docs/user_docs/reference/cli/kusion/apply",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/reference/cli/kusion/apply.md",tags:[],version:"current",lastUpdatedBy:"WeichengWang1",lastUpdatedAt:1695782732,formattedLastUpdatedAt:"Sep 27, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"user_docs",previous:{title:"kusion preview",permalink:"/docs/user_docs/reference/cli/kusion/preview"},next:{title:"kusion destroy",permalink:"/docs/user_docs/reference/cli/kusion/destroy"}},l={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-apply"},"kusion apply"),(0,o.kt)("p",null,"Apply the operation intents of various resources to multiple runtimes"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Apply a series of resource changes within the stack."),(0,o.kt)("p",null,"Create or update or delete resources according to the KCL files within a stack. By default, Kusion will generate an execution plan and present it for your approval before taking any action."),(0,o.kt)("p",null,"You can check the plan details and then decide if the actions should be taken or aborted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion apply [flags]\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Apply with specifying work directory\n  kusion apply -w /path/to/workdir\n  \n  # Apply with specifying arguments\n  kusion apply -D name=test -D age=18\n  \n  # Apply with specifying setting file\n  kusion apply -Y settings.yaml\n  \n  # Skip interactive approval of plan details before applying\n  kusion apply --yes\n  \n  # Apply without output style and color\n  kusion apply --no-style=true\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -a, --all --detail             Automatically show all plan details, combined use with flag --detail\n  -D, --argument stringArray     Specify the top-level argument\n  -C, --backend-config strings   backend-config config state storage backend\n      --backend-type string      backend-type specify state storage backend\n  -d, --detail                   Automatically show plan details with interactive options\n      --dry-run                  Preview the execution effect (always successful) without actually applying the changes\n  -h, --help                     help for apply\n      --ignore-fields strings    Ignore differences of target fields\n      --no-style                 no-style sets to RawOutput mode and disables all of styling\n      --operator string          Specify the operator\n  -o, --output string            Specify the output format\n  -O, --overrides strings        Specify the configuration override path and value\n  -Y, --setting strings          Specify the command line setting files\n      --watch                    After creating/updating/deleting the requested object, watch for changes\n  -w, --workdir string           Specify the work directory\n  -y, --yes                      Automatically approve and perform the update after previewing it\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user_docs/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}u.isMDXComponent=!0}}]);