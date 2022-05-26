"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[989],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,y=f["".concat(p,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(y,a(a({ref:n},c),{},{components:t})):r.createElement(y,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},56155:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={sidebar_position:6},p="Apply",s={unversionedId:"reference/cli/kusionctl/apply",id:"reference/cli/kusionctl/apply",title:"Apply",description:"\u901a\u8fc7\u5de5\u4f5c\u76ee\u5f55\u5c06\u914d\u7f6e\u6808\u5e94\u7528\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u8d44\u6e90",source:"@site/docs/reference/cli/kusionctl/apply.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/apply",permalink:"/docs/reference/cli/kusionctl/apply",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/apply.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653552030,formattedLastUpdatedAt:"2022/5/26",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"reference",previous:{title:"Diff \u6bd4\u8f83\u6587\u6863\u5dee\u5f02",permalink:"/docs/reference/cli/kusionctl/diff"},next:{title:"\u9500\u6bc1\u8d44\u6e90",permalink:"/docs/reference/cli/kusionctl/destroy"}},c={},u=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2022",id:"auto-generated-by-spf13cobra-on-21-jan-2022",level:6}],f={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"apply"},"Apply"),(0,i.kt)("p",null,"\u901a\u8fc7\u5de5\u4f5c\u76ee\u5f55\u5c06\u914d\u7f6e\u6808\u5e94\u7528\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u8d44\u6e90"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"\u5c06\u4e00\u7cfb\u5217\u8d44\u6e90\u53d8\u66f4\u5e94\u7528\u5230\u5f53\u524d\u6808\u4e2d\u3002"),(0,i.kt)("p",null,"\u5728 Konfig \u6808\u4e2d\u6839\u636e KCL \u6587\u4ef6\u521b\u5efa\u3001\u66f4\u65b0\u3001\u5220\u9664\u8d44\u6e90\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u91c7\u53d6\u4efb\u4f55\u884c\u52a8\u4e4b\u524d\uff0ckusion \u4f1a\u751f\u6210\u4e00\u4e2a\u6267\u884c\u8ba1\u5212\uff0c\u5e76\u63d0\u4ea4\u7ed9\u4f60\u6279\u51c6\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u68c0\u67e5\u8ba1\u5212\u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u51b3\u5b9a\u662f\u5426\u5e94\u91c7\u53d6\u6216\u4e2d\u6b62\u8fd9\u4e9b\u64cd\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion apply [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\u5e94\u7528\n  kusion apply -w /path/to/workdir\n  \n  # \u6307\u5b9a\u53c2\u6570\u5e94\u7528\n  kusion apply -D name=test -D age=18\n  \n  # \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u5e94\u7528\n  kusion apply -Y settings.yaml\n  \n  # \u5e94\u7528\u524d\u8df3\u8fc7\u8ba1\u5212\u7684\u4ea4\u4e92\u5f0f\u5ba1\u6279\n  kusion apply \u2014yes\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -D, --argument strings    \u6307\u5b9a\u53c2\u6570\u5e94\u7528 KCL \u4ee3\u7801\n  -d, --detail              \u9884\u89c8\u540e\u81ea\u52a8\u5c55\u793a apply \u8ba1\u5212\u7ec6\u8282\n  -h, --help                help for apply\n      --operator string     \u6307\u5b9a\u64cd\u4f5c\u4eba\n  -O, --overrides strings   \u6307\u5b9a\u914d\u7f6e\u8986\u76d6\u8def\u5f84\u548c\u503c\n  -Y, --setting strings     \u6307\u5b9a\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\n  -w, --workdir string      \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\n  -y, --yes                 \u9884\u89c8\u540e\u81ea\u52a8\u5ba1\u6279\u5e76\u5e94\u7528\u66f4\u65b0\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --log-level string        \u8bbe\u7f6e kusion \u5f00\u53d1\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a INFO\uff0c\u6240\u6709\u9009\u9879\uff1aDEBUG\u3001INFO\u3001ERROR\u3001WARN\u3001FATAL (default "INFO")\n      --profile string          \u8981\u6355\u83b7\u7684\u6863\u6848\u540d\u79f0\u3002none\u3001cpu\u3001heap\u3001goroutine\u3001threadcreate\u3001block \u548c mutex \u4e4b\u4e00 (default "none")\n      --profile-output string   \u6863\u6848\u5199\u5165\u7684\u6587\u4ef6\u540d (default "profile.pprof")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/cli/kusionctl/overview"},"kusion"),"\t - kusion \u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 Kubernetes")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2022"},"Auto generated by spf13/cobra on 21-Jan-2022"))}d.isMDXComponent=!0}}]);