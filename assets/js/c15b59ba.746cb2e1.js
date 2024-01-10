"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={},a="kusion build",u={unversionedId:"kusion/reference/commands/kusion-build",id:"kusion/reference/commands/kusion-build",title:"kusion build",description:"Build Kusion modules in a Stack to the Intent",source:"@site/docs/kusion/6-reference/1-commands/kusion-build.md",sourceDirName:"kusion/6-reference/1-commands",slug:"/kusion/reference/commands/kusion-build",permalink:"/docs/next/kusion/reference/commands/kusion-build",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-build.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1704877157,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"kusion apply",permalink:"/docs/next/kusion/reference/commands/kusion-apply"},next:{title:"kusion compile",permalink:"/docs/next/kusion/reference/commands/kusion-compile"}},s={},l=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Jan-2024",id:"auto-generated-by-spf13cobra-on-4-jan-2024",level:6}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-build"},"kusion build"),(0,r.kt)("p",null,"Build Kusion modules in a Stack to the Intent"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Build Kusion modules in a Stack to the Intent"),(0,r.kt)("p",null," The command must be executed in a Stack or by specifying a Stack directory with the -w flag. You can provide a list of arguments to replace the placeholders defined in KCL, and use the --output flag to output the built results to a file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion build [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # Build main.k with arguments\n  kusion build -D name=test -D age=18\n  \n  # Build main.k with work directory\n  kusion build -w appops/demo/dev\n  \n  # Build configurations and write result into an output.yaml\n  kusion build -o output.yaml\n  \n  # Build configurations with arguments from settings.yaml\n  kusion build -Y settings.yaml\n  \n  # Build without output style and color\n  kusion build --no-style=true\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -D, --argument stringToString   Specify the top-level argument (default [])\n  -h, --help                      help for build\n      --no-style                  Disable the output style and color\n  -o, --output string             Specify the output file\n  -Y, --setting strings           Specify the command line setting files\n  -w, --workdir string            Specify the work directory\n")),(0,r.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/kusion/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of KusionStack")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-jan-2024"},"Auto generated by spf13/cobra on 4-Jan-2024"))}c.isMDXComponent=!0}}]);