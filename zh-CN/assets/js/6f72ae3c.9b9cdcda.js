"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5714],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80308:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={sidebar_position:7},s="\u9500\u6bc1\u8d44\u6e90",c={unversionedId:"reference/cli/kusionctl/destroy",id:"reference/cli/kusionctl/destroy",title:"\u9500\u6bc1\u8d44\u6e90",description:"\u901a\u8fc7\u5de5\u4f5c\u76ee\u5f55\u9500\u6bc1\u5df2\u5e94\u7528\u5230\u8d44\u6e90\u7684\u914d\u7f6e\u6808",source:"@site/docs/reference/cli/kusionctl/destroy.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/destroy",permalink:"/zh-CN/docs/reference/cli/kusionctl/destroy",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/destroy.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663071680,formattedLastUpdatedAt:"2022/9/13",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"reference",previous:{title:"Preview",permalink:"/zh-CN/docs/reference/cli/kusionctl/preview"},next:{title:"\u7248\u672c\u4fe1\u606f",permalink:"/zh-CN/docs/reference/cli/kusionctl/version"}},u={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2022",id:"auto-generated-by-spf13cobra-on-21-jan-2022",level:6}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9500\u6bc1\u8d44\u6e90"},"\u9500\u6bc1\u8d44\u6e90"),(0,i.kt)("p",null,"\u901a\u8fc7\u5de5\u4f5c\u76ee\u5f55\u9500\u6bc1\u5df2\u5e94\u7528\u5230\u8d44\u6e90\u7684\u914d\u7f6e\u6808"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"\u901a\u8fc7\u8d44\u6e90\u89c4\u7ea6\u5220\u9664\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"\u53ea\u63a5\u53d7 KCL \u6587\u4ef6\u3002\u53ea\u80fd\u6307\u5b9a\u4e00\u79cd\u7c7b\u578b\u7684\u53c2\u6570\uff1a\u6587\u4ef6\u540d\u3001\u8d44\u6e90\u3001\u540d\u79f0\u3001\u8d44\u6e90\u6216\u6807\u7b7e\u9009\u62e9\u5668\u3002"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cdestroy \u547d\u4ee4\u4e0d\u4f1a\u8fdb\u884c\u8d44\u6e90\u7248\u672c\u68c0\u67e5\uff0c \u56e0\u6b64\u5982\u679c\u6709\u4eba\u5728\u4f60\u63d0\u4ea4\u9500\u6bc1\u65f6\u63d0\u4ea4\u4e86\u5bf9\u8d44\u6e90\u7684\u66f4\u65b0\uff0c \u4ed6\u4eec\u7684\u66f4\u65b0\u5c06\u4e0e\u8d44\u6e90\u4e00\u8d77\u4e22\u5931\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion destroy [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # Delete the configuration of current stack\n  kusion destroy\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -D, --argument strings    \u6307\u5b9a\u7f16\u8bd1 KCL \u7684\u53c2\u6570\n  -d, --detail              \u9884\u89c8\u540e\u81ea\u52a8\u5c55\u793a apply \u8ba1\u5212\u7ec6\u8282\n  -h, --help                help for destroy\n      --operator string     \u6307\u5b9a\u64cd\u4f5c\u4eba\n  -O, --overrides strings   \u6307\u5b9a\u914d\u7f6e\u8986\u76d6\u8def\u5f84\u548c\u503c\n  -Y, --setting strings     \u6307\u5b9a\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\n  -w, --workdir string      \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\n  -y, --yes                 \u9884\u89c8\u540e\u81ea\u52a8\u5ba1\u6279\u5e76\u5e94\u7528\u66f4\u65b0\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --log-level string        \u8bbe\u7f6e kusion \u5f00\u53d1\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a INFO\uff0c\u6240\u6709\u9009\u9879\uff1aDEBUG\u3001INFO\u3001ERROR\u3001WARN\u3001FATAL (default "INFO")\n      --profile string          \u8981\u6355\u83b7\u7684\u6863\u6848\u540d\u79f0\u3002none\u3001cpu\u3001heap\u3001goroutine\u3001threadcreate\u3001block \u548c mutex \u4e4b\u4e00 (default "none")\n      --profile-output string   \u6863\u6848\u5199\u5165\u7684\u6587\u4ef6\u540d (default "profile.pprof")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusionctl/overview"},"kusion"),"\t - kusion \u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 Kubernetes")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2022"},"Auto generated by spf13/cobra on 21-Jan-2022"))}f.isMDXComponent=!0}}]);