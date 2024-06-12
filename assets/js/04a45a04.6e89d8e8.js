"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="kusion apply",p={unversionedId:"reference/commands/kusion-apply",id:"version-v0.12/reference/commands/kusion-apply",title:"kusion apply",description:"Apply the operational intent of various resources to multiple runtimes",source:"@site/docs_versioned_docs/version-v0.12/6-reference/1-commands/kusion-apply.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-apply",permalink:"/docs/reference/commands/kusion-apply",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/6-reference/1-commands/kusion-apply.md",tags:[],version:"v0.12",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718187043,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"Kusion Commands",permalink:"/docs/reference/commands/"},next:{title:"kusion config get",permalink:"/docs/reference/commands/kusion-config-get"}},s={},l=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 29-Apr-2024",id:"auto-generated-by-spf13cobra-on-29-apr-2024",level:6}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-apply"},"kusion apply"),(0,o.kt)("p",null,"Apply the operational intent of various resources to multiple runtimes"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Apply a series of resource changes within the stack."),(0,o.kt)("p",null," Create, update or delete resources according to the operational intent within a stack. By default, Kusion will generate an execution preview and prompt for your approval before performing any actions. You can review the preview details and make a decision to proceed with the actions or abort them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion apply [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Apply with specified work directory\n  kusion apply -w /path/to/workdir\n  \n  # Apply with specified arguments\n  kusion apply -D name=test -D age=18\n  \n  # Skip interactive approval of preview details before applying\n  kusion apply --yes\n  \n  # Apply without output style and color\n  kusion apply --no-style=true\n  \n  # Apply with localhost port forwarding\n  kusion apply --port-forward=8080\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -a, --all --detail            Automatically show all preview details, combined use with flag --detail\n      --backend string          The backend to use, supports 'local', 'oss' and 's3'.\n  -d, --detail                  Automatically show preview details with interactive options (default true)\n      --dry-run                 Preview the execution effect (always successful) without actually applying the changes\n  -h, --help                    help for apply\n      --ignore-fields strings   Ignore differences of target fields\n      --no-style                no-style sets to RawOutput mode and disables all of styling\n      --operator string         Specify the operator\n  -o, --output string           Specify the output format\n      --port-forward int        Forward the specified port from local to service\n      --watch                   After creating/updating/deleting the requested object, watch for changes\n  -w, --workdir string          The work directory to run Kusion CLI.\n      --workspace string        The name of target workspace to operate in.\n  -y, --yes                     Automatically approve and perform the update after previewing it\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of Internal Developer Platform")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-29-apr-2024"},"Auto generated by spf13/cobra on 29-Apr-2024"))}u.isMDXComponent=!0}}]);