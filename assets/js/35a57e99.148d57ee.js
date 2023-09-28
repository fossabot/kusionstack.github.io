"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),p=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(a,".").concat(d)]||m[d]||u[d]||i;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={},s="kusion compile",l={unversionedId:"user_docs/reference/cli/kusion/kusion_compile",id:"user_docs/reference/cli/kusion/kusion_compile",title:"kusion compile",description:"Compile Kusion models to the Spec (intent)",source:"@site/docs/user_docs/reference/cli/kusion/kusion_compile.md",sourceDirName:"user_docs/reference/cli/kusion",slug:"/user_docs/reference/cli/kusion/kusion_compile",permalink:"/docs/user_docs/reference/cli/kusion/kusion_compile",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/reference/cli/kusion/kusion_compile.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1695875449,formattedLastUpdatedAt:"Sep 28, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"kusion apply",permalink:"/docs/user_docs/reference/cli/kusion/kusion_apply"},next:{title:"kusion destroy",permalink:"/docs/user_docs/reference/cli/kusion/kusion_destroy"}},a={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 28-Sep-2023",id:"auto-generated-by-spf13cobra-on-28-sep-2023",level:6}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kusion-compile"},"kusion compile"),(0,r.kt)("p",null,"Compile Kusion models to the Spec (intent)"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Compile Kusion models in a Stack to the Spec (intent)"),(0,r.kt)("p",null," The command must be executed in a Stack or specifying a Stack dir with the -w flag. You can specify a list of arguments to replace the placeholders defined in KCL, and output the compiled results to a file when using --output flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kusion compile [flags]\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  # Compile main.k with arguments\n  kusion compile -D name=test -D age=18\n  \n  # Compile main.k with arguments from settings.yaml\n  kusion compile -Y settings.yaml\n  \n  # Compile main.k with work directory\n  kusion compile -w appops/demo/dev\n  \n  # Compile with override\n  kusion compile -O __main__:appConfiguration.image=nginx:latest -a\n  \n  # Compile main.k and write result into output.yaml\n  kusion compile -o output.yaml\n  \n  # Compile without output style and color\n  kusion compile --no-style=true\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  -D, --argument stringToString   Specify the top-level argument (default [])\n  -n, --disable-none              Disable dumping None values\n  -h, --help                      help for compile\n      --no-style                  Disable the output style and color\n  -o, --output string             Specify the output file\n  -a, --override-AST              Specify the override option\n  -O, --overrides strings         Specify the configuration override path and value\n  -Y, --setting strings           Specify the command line setting files\n  -w, --workdir string            Specify the work directory\n")),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user_docs/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,r.kt)("h6",{id:"auto-generated-by-spf13cobra-on-28-sep-2023"},"Auto generated by spf13/cobra on 28-Sep-2023"))}u.isMDXComponent=!0}}]);