"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4509],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4130:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:4},a="kusion compile",l={unversionedId:"reference/cli/kusion/compile",id:"reference/cli/kusion/compile",title:"kusion compile",description:"\u5c06 KCL \u7f16\u8bd1\u6210 YAML",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/cli/kusion/compile.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/compile",permalink:"/zh-CN/docs/reference/cli/kusion/compile",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusion/compile.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1695280149,formattedLastUpdatedAt:"2023\u5e749\u670821\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"reference",previous:{title:"kusion init",permalink:"/zh-CN/docs/reference/cli/kusion/init"},next:{title:"kusion preview",permalink:"/zh-CN/docs/reference/cli/kusion/preview"}},s={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-compile"},"kusion compile"),(0,o.kt)("p",null,"\u5c06 KCL \u7f16\u8bd1\u6210 YAML"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"\u7f16\u8bd1\u4e00\u4e2a\u6216\u591a\u4e2a KCL \u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u5fc5\u987b\u6307\u5b9a KCL \u6587\u4ef6\u540d\u3002 \u4f60\u53ef\u4ee5\u6307\u5b9a\u53c2\u6570\u5217\u8868\u6765\u66ff\u6362 KCL \u4e2d\u5b9a\u4e49\u7684\u5360\u4f4d\u7b26\uff0c \u5e76\u5728\u4f7f\u7528 --output \u6807\u5fd7\u65f6\u5c06\u7f16\u8bd1\u7ed3\u679c\u8f93\u51fa\u5230\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion compile [flags]\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # \u5c06 main.k \u4e2d\u7684\u914d\u7f6e\u7f16\u8bd1\u6210 YAML \u683c\u5f0f\n  kusion compile main.k\n  \n  # \u4f7f\u7528\u53c2\u6570\u7f16\u8bd1 main.k\n  kusion compile main.k -D name=test -D age=18\n  \n  # \u4f7f\u7528\u6765\u81ea settings.yaml \u7684\u53c2\u6570\u7f16\u8bd1 main.k\n  kusion compile main.k -Y settings.yaml\n  \n  # \u4f7f\u7528\u5de5\u4f5c\u76ee\u5f55\u7f16\u8bd1 main.k\n  kusion compile main.k -w appops/demo/dev\n  \n  # Override \u5f53\u524d Stack \u4e2d\u7684 KCL \u914d\u7f6e\n  kusion compile -O __main__:appConfiguration.image=nginx:latest -a\n  \n  # \u7f16\u8bd1 main.k \u5e76\u5c06\u7ed3\u679c\u5199\u5165 output.yaml\n  kusion compile main.k -o output.yaml\n  \n  # \u7f16\u8bd1\u8f93\u51fa\u4e0d\u5e26\u6837\u5f0f\u548c\u989c\u8272\n  kusion compile \u2014no-style=true\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -D, --argument stringArray   \u6307\u5b9a\u9876\u7ea7\u53c2\u6570\n  -n, --disable-none           \u7981\u7528\u8f6c\u50a8 None \u503c\n  -h, --help                   help for compile\n      --no-style               \u7981\u7528\u8f93\u51fa\u7684\u6837\u5f0f\u4e0e\u989c\u8272\n  -o, --output string          \u6307\u5b9a\u8f93\u51fa\u6587\u4ef6\n  -a, --override-AST           \u6307\u5b9a\u8986\u76d6\u9009\u9879\n  -O, --overrides strings      \u6307\u5b9a\u914d\u7f6e\u8986\u76d6\u8def\u5f84\u548c\u503c\n  -Y, --setting strings        \u6307\u5b9a\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\n  -w, --workdir string         \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/"},"kusion"),"\t - Kusion \u662f KusionStack \u7684\u5e73\u53f0\u5de5\u7a0b\u5f15\u64ce")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}u.isMDXComponent=!0}}]);