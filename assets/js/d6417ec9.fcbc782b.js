"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5998],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||r;return t?i.createElement(d,l(l({ref:n},c),{},{components:t})):i.createElement(d,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=t(7462),o=(t(7294),t(3905));const r={sidebar_position:4},l="kusion compile",a={unversionedId:"reference/cli/kusion/compile",id:"reference/cli/kusion/compile",title:"kusion compile",description:"Compile KCL into YAML",source:"@site/docs/reference/cli/kusion/compile.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/compile",permalink:"/docs/reference/cli/kusion/compile",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusion/compile.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1694522671,formattedLastUpdatedAt:"Sep 12, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"reference",previous:{title:"kusion init templates",permalink:"/docs/reference/cli/kusion/init-templates"},next:{title:"kusion preview",permalink:"/docs/reference/cli/kusion/preview"}},s={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-compile"},"kusion compile"),(0,o.kt)("p",null,"Compile KCL into YAML"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Compile one or more KCL files."),(0,o.kt)("p",null,"The KCL filename must be specified. You can specify a list of arguments to replace the placeholders defined in KCL, and output the compiled results to a file when using --output flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion compile [flags]\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Compile configuration in main.k into YAML format\n  kusion compile main.k\n  \n  # Compile main.k with arguments\n  kusion compile main.k -D name=test -D age=18\n  \n  # Compile main.k with arguments from settings.yaml\n  kusion compile main.k -Y settings.yaml\n  \n  # Compile main.k with work directory\n  kusion compile main.k -w appops/demo/dev\n  \n  # Compile with override\n  kusion compile -O __main__:appConfiguration.image=nginx:latest -a\n  \n  # Compile main.k and write result into output.yaml\n  kusion compile main.k -o output.yaml\n  \n  # Complie without output style and color\n  kusion compile --no-style=true\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -D, --argument stringArray   Specify the top-level argument\n  -n, --disable-none           Disable dumping None values\n  -h, --help                   help for compile\n      --no-style               Disable the output style and color\n  -o, --output string          Specify the output file\n  -a, --override-AST           Specify the override option\n  -O, --overrides strings      Specify the configuration override path and value\n  -Y, --setting strings        Specify the command line setting files\n  -w, --workdir string         Specify the work directory\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/kusion/"},"kusion"),"\t - Kusion is the platform engineering engine of KusionStack")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}u.isMDXComponent=!0}}]);