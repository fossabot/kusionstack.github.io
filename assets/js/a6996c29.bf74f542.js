"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[86248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={},a="kusion build",l={unversionedId:"reference/commands/kusion-build",id:"version-v0.10/reference/commands/kusion-build",title:"kusion build",description:"Build Kusion modules in a Stack to the Intent",source:"@site/docs_versioned_docs/version-v0.10/6-reference/1-commands/kusion-build.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-build",permalink:"/docs/v0.10/reference/commands/kusion-build",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/6-reference/1-commands/kusion-build.md",tags:[],version:"v0.10",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1718116037,formattedLastUpdatedAt:"Jun 11, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion apply",permalink:"/docs/v0.10/reference/commands/kusion-apply"},next:{title:"kusion compile",permalink:"/docs/v0.10/reference/commands/kusion-compile"}},s={},u=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Jan-2024",id:"auto-generated-by-spf13cobra-on-4-jan-2024",level:6}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-build"},"kusion build"),(0,r.kt)("p",null,"Build Kusion modules in a Stack to the Intent"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Build Kusion modules in a Stack to the Intent"),(0,r.kt)("p",null," The command must be executed in a Stack or by specifying a Stack directory with the -w flag. You can provide a list of arguments to replace the placeholders defined in KCL, and use the --output flag to output the built results to a file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion build [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # Build main.k with arguments\n  kusion build -D name=test -D age=18\n  \n  # Build main.k with work directory\n  kusion build -w appops/demo/dev\n  \n  # Build configurations and write result into an output.yaml\n  kusion build -o output.yaml\n  \n  # Build configurations with arguments from settings.yaml\n  kusion build -Y settings.yaml\n  \n  # Build without output style and color\n  kusion build --no-style=true\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -D, --argument stringToString   Specify the top-level argument (default [])\n  -h, --help                      help for build\n      --no-style                  Disable the output style and color\n  -o, --output string             Specify the output file\n  -Y, --setting strings           Specify the command line setting files\n  -w, --workdir string            Specify the work directory\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/v0.10/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of KusionStack")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-jan-2024"},"Auto generated by spf13/cobra on 4-Jan-2024"))}p.isMDXComponent=!0}}]);