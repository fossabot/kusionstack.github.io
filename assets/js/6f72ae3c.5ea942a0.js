"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80308:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:7},a="\u9500\u6bc1\u8d44\u6e90",l={unversionedId:"reference/cli/kusionctl/destroy",id:"reference/cli/kusionctl/destroy",title:"\u9500\u6bc1\u8d44\u6e90",description:"\u901a\u8fc7\u5de5\u4f5c\u76ee\u5f55\u9500\u6bc1\u5df2\u5e94\u7528\u5230\u8d44\u6e90\u7684\u914d\u7f6e\u6808",source:"@site/docs/reference/cli/kusionctl/destroy.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/destroy",permalink:"/docs/reference/cli/kusionctl/destroy",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/destroy.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1663578104,formattedLastUpdatedAt:"9/19/2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"reference",previous:{title:"Preview",permalink:"/docs/reference/cli/kusionctl/preview"},next:{title:"\u7248\u672c\u4fe1\u606f",permalink:"/docs/reference/cli/kusionctl/version"}},s={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2022",id:"auto-generated-by-spf13cobra-on-21-jan-2022",level:6}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u9500\u6bc1\u8d44\u6e90"},"\u9500\u6bc1\u8d44\u6e90"),(0,o.kt)("p",null,"\u901a\u8fc7\u5de5\u4f5c\u76ee\u5f55\u9500\u6bc1\u5df2\u5e94\u7528\u5230\u8d44\u6e90\u7684\u914d\u7f6e\u6808"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"\u901a\u8fc7\u8d44\u6e90\u89c4\u7ea6\u5220\u9664\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u53ea\u63a5\u53d7 KCL \u6587\u4ef6\u3002\u53ea\u80fd\u6307\u5b9a\u4e00\u79cd\u7c7b\u578b\u7684\u53c2\u6570\uff1a\u6587\u4ef6\u540d\u3001\u8d44\u6e90\u3001\u540d\u79f0\u3001\u8d44\u6e90\u6216\u6807\u7b7e\u9009\u62e9\u5668\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cdestroy \u547d\u4ee4\u4e0d\u4f1a\u8fdb\u884c\u8d44\u6e90\u7248\u672c\u68c0\u67e5\uff0c \u56e0\u6b64\u5982\u679c\u6709\u4eba\u5728\u4f60\u63d0\u4ea4\u9500\u6bc1\u65f6\u63d0\u4ea4\u4e86\u5bf9\u8d44\u6e90\u7684\u66f4\u65b0\uff0c \u4ed6\u4eec\u7684\u66f4\u65b0\u5c06\u4e0e\u8d44\u6e90\u4e00\u8d77\u4e22\u5931\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion destroy [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # Delete the configuration of current stack\n  kusion destroy\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -D, --argument strings    \u6307\u5b9a\u7f16\u8bd1 KCL \u7684\u53c2\u6570\n  -d, --detail              \u9884\u89c8\u540e\u81ea\u52a8\u5c55\u793a apply \u8ba1\u5212\u7ec6\u8282\n  -h, --help                help for destroy\n      --operator string     \u6307\u5b9a\u64cd\u4f5c\u4eba\n  -O, --overrides strings   \u6307\u5b9a\u914d\u7f6e\u8986\u76d6\u8def\u5f84\u548c\u503c\n  -Y, --setting strings     \u6307\u5b9a\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\n  -w, --workdir string      \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\n  -y, --yes                 \u9884\u89c8\u540e\u81ea\u52a8\u5ba1\u6279\u5e76\u5e94\u7528\u66f4\u65b0\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --log-level string        \u8bbe\u7f6e kusion \u5f00\u53d1\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a INFO\uff0c\u6240\u6709\u9009\u9879\uff1aDEBUG\u3001INFO\u3001ERROR\u3001WARN\u3001FATAL (default "INFO")\n      --profile string          \u8981\u6355\u83b7\u7684\u6863\u6848\u540d\u79f0\u3002none\u3001cpu\u3001heap\u3001goroutine\u3001threadcreate\u3001block \u548c mutex \u4e4b\u4e00 (default "none")\n      --profile-output string   \u6863\u6848\u5199\u5165\u7684\u6587\u4ef6\u540d (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/kusionctl/overview"},"kusion"),"\t - kusion \u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 Kubernetes")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2022"},"Auto generated by spf13/cobra on 21-Jan-2022"))}u.isMDXComponent=!0}}]);