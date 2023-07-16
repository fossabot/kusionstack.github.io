"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5365],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=s(t),d=o,f=y["".concat(l,".").concat(d)]||y[d]||u[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},80592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:6},i="kusion apply",p={unversionedId:"reference/cli/kusion/apply",id:"reference/cli/kusion/apply",title:"kusion apply",description:"\u5c06\u5404\u7c7b\u8d44\u6e90\u7684\u8fd0\u7ef4\u610f\u56fe apply \u81f3\u591a\u79cd\u8fd0\u884c\u65f6\u91cc (Kubernetes\u3001AWS/\u963f\u91cc\u4e91\u4ee5\u53ca\u81ea\u5efa\u7cfb\u7edf\u7b49)",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/cli/kusion/apply.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/apply",permalink:"/zh-CN/docs/reference/cli/kusion/apply",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusion/apply.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1689479289,formattedLastUpdatedAt:"2023\u5e747\u670816\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"reference",previous:{title:"kusion preview",permalink:"/zh-CN/docs/reference/cli/kusion/preview"},next:{title:"kusion destroy",permalink:"/zh-CN/docs/reference/cli/kusion/destroy"}},l={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-apply"},"kusion apply"),(0,o.kt)("p",null,"\u5c06\u5404\u7c7b\u8d44\u6e90\u7684\u8fd0\u7ef4\u610f\u56fe apply \u81f3\u591a\u79cd\u8fd0\u884c\u65f6\u91cc (Kubernetes\u3001AWS/\u963f\u91cc\u4e91\u4ee5\u53ca\u81ea\u5efa\u7cfb\u7edf\u7b49)"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"\u5c06\u4e00\u7cfb\u5217\u8d44\u6e90\u53d8\u66f4 apply \u5230\u5f53\u524d\u6808\u4e2d\u3002"),(0,o.kt)("p",null,"\u5728\u5f53\u524d Stack \u4e2d\u6839\u636e KCL \u6587\u4ef6\u521b\u5efa\u3001\u66f4\u65b0\u3001\u5220\u9664\u8d44\u6e90\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u91c7\u53d6\u4efb\u4f55\u884c\u52a8\u4e4b\u524d\uff0cKusion \u4f1a\u751f\u6210\u4e00\u4e2a\u6267\u884c\u8ba1\u5212\uff0c\u5e76\u63d0\u4ea4\u7ed9\u4f60\u6279\u51c6\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u68c0\u67e5\u8ba1\u5212\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u51b3\u5b9a\u662f\u5426\u5e94\u91c7\u53d6\u6216\u4e2d\u6b62\u8fd9\u4e9b\u64cd\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion apply [flags]\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55 apply\n  kusion apply -w /path/to/workdir\n  \n  # \u6307\u5b9a\u53c2\u6570 apply\n  kusion apply -D name=test -D age=18\n  \n  # \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6 apply\n  kusion apply -Y settings.yaml\n  \n  # apply \u524d\u8df3\u8fc7\u8ba1\u5212\u7684\u4ea4\u4e92\u5f0f\u5ba1\u6279\n  kusion apply \u2014yes\n  \n  # apply \u8f93\u51fa\u7ed3\u679c\u4e0d\u5e26\u6837\u5f0f\u548c\u989c\u8272\n  kusion apply \u2014no-style=true\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -a, --all                      \u9884\u89c8\u540e\u81ea\u52a8\u5c55\u793a\u6267\u884c\u8ba1\u5212\u7ec6\u8282\n  -D, --argument stringArray     \u6307\u5b9a\u9876\u7ea7\u53c2\u6570\n  -C, --backend-config strings   backend-config \u914d\u7f6e\u72b6\u6001\u5b58\u50a8\u540e\u7aef\u4fe1\u606f\n      --backend-type string      backend-type \u6307\u5b9a\u72b6\u6001\u5b58\u50a8\u540e\u7aef\u7c7b\u578b\uff0c\u652f\u6301 local\u3001db\u3001oss \u548c s3\n  -d, --detail                   \u9884\u89c8\u540e\u81ea\u52a8\u5c55\u793a apply \u8ba1\u5212\u7ec6\u8282\n      --dry-run                  dry-run \u9884\u89c8\u6267\u884c\u6548\u679c\uff08\u603b\u662f\u6210\u529f\uff09\u800c\u4e0d\u5b9e\u9645 apply \u66f4\u6539\n  -h, --help                     help for apply\n      --ignore-fields strings    \u5ffd\u7565\u76ee\u6807\u5b57\u6bb5\u7684\u5dee\u5f02\n      --no-style                 no-style \u8bbe\u7f6e\u539f\u59cb\u8f93\u51fa\u6a21\u5f0f\u5e76\u7981\u7528\u6240\u6709\u6837\u5f0f\n      --operator string          \u6307\u5b9a\u64cd\u4f5c\u4eba\n  -o, --output string            \u6307\u5b9a\u8f93\u51fa\u6587\u4ef6\n  -O, --overrides strings        \u6307\u5b9a\u914d\u7f6e\u8986\u76d6\u8def\u5f84\u548c\u503c\n  -Y, --setting strings          \u6307\u5b9a\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\n      --watch                    \u5728\u521b\u5efa/\u66f4\u65b0/\u5220\u9664\u8bf7\u6c42\u7684\u5bf9\u8c61\u540e\uff0c\u89c2\u6d4b\u53d8\u66f4\n  -w, --workdir string           \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\n  -y, --yes                      \u9884\u89c8\u540e\u81ea\u52a8\u5ba1\u6279\u5e76\u5e94\u7528\u66f4\u65b0\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/"},"kusion"),"\t - Kusion \u662f KusionStack \u7684\u5e73\u53f0\u5de5\u7a0b\u5f15\u64ce")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}u.isMDXComponent=!0}}]);