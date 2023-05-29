"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3975],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36331:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={sidebar_position:4},a="Compile",l={unversionedId:"reference/cli/kusionctl/compile",id:"reference/cli/kusionctl/compile",title:"Compile",description:"\u5c06 KCL \u7f16\u8bd1\u6210 YAML",source:"@site/docs/reference/cli/kusionctl/compile.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/compile",permalink:"/zh-CN/docs/reference/cli/kusionctl/compile",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/compile.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1685356618,formattedLastUpdatedAt:"2023/5/29",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"reference",previous:{title:"Validate",permalink:"/zh-CN/docs/reference/cli/kusionctl/validate"},next:{title:"Diff",permalink:"/zh-CN/docs/reference/cli/kusionctl/diff"}},p={},s=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2022",id:"auto-generated-by-spf13cobra-on-21-jan-2022",level:6}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compile"},"Compile"),(0,o.kt)("p",null,"\u5c06 KCL \u7f16\u8bd1\u6210 YAML"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"\u7f16\u8bd1\u4e00\u4e2a\u6216\u591a\u4e2a KCL \u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u5fc5\u987b\u6307\u5b9a KCL \u6587\u4ef6\u540d\u3002 \u4f60\u53ef\u4ee5\u6307\u5b9a\u53c2\u6570\u5217\u8868\u6765\u66ff\u6362 KCL \u4e2d\u5b9a\u4e49\u7684\u5360\u4f4d\u7b26\uff0c \u5e76\u5728\u4f7f\u7528 --output \u6807\u5fd7\u65f6\u5c06\u7f16\u8bd1\u7ed3\u679c\u8f93\u51fa\u5230\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion compile [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # \u5c06 main.k \u4e2d\u7684\u914d\u7f6e\u7f16\u8bd1\u6210 YAML \u683c\u5f0f\n  kusion compile main.k\n  \n  # \u4f7f\u7528\u53c2\u6570\u7f16\u8bd1 main.k\n  kusion compile main.k -D name=test -D age=18\n  \n  # \u4f7f\u7528\u6765\u81ea settings.yaml \u7684\u53c2\u6570\u7f16\u8bd1 main.k\n  kusion compile main.k -Y settings.yaml\n  \n  # \u4f7f\u7528\u5de5\u4f5c\u76ee\u5f55\u7f16\u8bd1 main.k\n  kusion compile main.k -w Konfig/appops/demo/dev\n  \n  # Override \u5f53\u524d Stack \u4e2d\u7684 KCL \u914d\u7f6e\n  kusion compile -O __main__:appConfiguration.image=nginx:latest -a\n  \n  # \u7f16\u8bd1 main.k \u5e76\u5c06\u7ed3\u679c\u5199\u5165 output.yaml\n  kusion compile main.k -o output.yaml\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -D, --argument strings    \u6307\u5b9a\u9876\u7ea7\u53c2\u6570\n  -n, --disable-none        \u7981\u7528\u8f6c\u50a8 None \u503c\n  -h, --help                help for compile\n  -o, --output string       \u6307\u5b9a\u8f93\u51fa\u6587\u4ef6\n  -a, --override-AST        \u6307\u5b9a\u8986\u76d6\u9009\u9879\n  -O, --overrides strings   \u6307\u5b9a\u914d\u7f6e\u8986\u76d6\u8def\u5f84\u548c\u503c\n  -Y, --setting strings     \u6307\u5b9a\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\n  -w, --workdir string      \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --log-level string        \u8bbe\u7f6e kusion \u5f00\u53d1\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a INFO\uff0c\u6240\u6709\u9009\u9879\uff1aDEBUG\u3001INFO\u3001ERROR\u3001WARN\u3001FATAL (default "INFO")\n      --profile string          \u8981\u6355\u83b7\u7684\u6863\u6848\u540d\u79f0\u3002none\u3001cpu\u3001heap\u3001goroutine\u3001threadcreate\u3001block \u548c mutex \u4e4b\u4e00 (default "none")\n      --profile-output string   \u6863\u6848\u5199\u5165\u7684\u6587\u4ef6\u540d (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusionctl/overview"},"kusion"),"\t - kusion \u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 Kubernetes")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2022"},"Auto generated by spf13/cobra on 21-Jan-2022"))}m.isMDXComponent=!0}}]);