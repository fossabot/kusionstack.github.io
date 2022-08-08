"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8935],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},10340:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={sidebar_position:2},c="\u521d\u59cb\u5316\u5de5\u7a0b\u4ee3\u7801",s={unversionedId:"reference/cli/kusionctl/init",id:"reference/cli/kusionctl/init",title:"\u521d\u59cb\u5316\u5de5\u7a0b\u4ee3\u7801",description:"\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5305\u542b KCL \u6587\u4ef6\u7ed3\u6784\u548c\u57fa\u7840\u4ee3\u7801",source:"@site/docs/reference/cli/kusionctl/init.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/init",permalink:"/docs/reference/cli/kusionctl/init",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/init.md",tags:[],version:"current",lastUpdatedBy:"\u6768\u82f1\u660e",lastUpdatedAt:1659932183,formattedLastUpdatedAt:"2022/8/8",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reference",previous:{title:"\u6982\u89c8",permalink:"/docs/reference/cli/kusionctl/overview"},next:{title:"\u6821\u9a8c\u5de5\u7a0b",permalink:"/docs/reference/cli/kusionctl/validate"}},u={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2022",id:"auto-generated-by-spf13cobra-on-21-jan-2022",level:6}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521d\u59cb\u5316\u5de5\u7a0b\u4ee3\u7801"},"\u521d\u59cb\u5316\u5de5\u7a0b\u4ee3\u7801"),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5305\u542b KCL \u6587\u4ef6\u7ed3\u6784\u548c\u57fa\u7840\u4ee3\u7801"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,'kusion init \u547d\u4ee4\u53ef\u5e2e\u52a9\u4f60\u751f\u6210 KCL \u811a\u624b\u67b6\u9879\u76ee\u3002 \u5c1d\u8bd5 "kusion init" \u83b7\u53d6\u4e00\u4e2a\u7b80\u5355\u7684\u6f14\u793a\u9879\u76ee\u3002'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion init\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # \u4f7f\u7528\u9ed8\u8ba4\u67b6\u6784\u521d\u59cb\u5316\u65b0\u7684 KCL \u9879\u76ee\n  kusion init\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  -h, --help            help for init\n      --schema string   \u6307\u5b9a\u521d\u59cb\u5316 KCL \u9879\u76ee\u7684\u6a21\u5f0f\u7c7b\u578b\u3002\u9ed8\u8ba4\u503c Server (default "Server")\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --log-level string        \u8bbe\u7f6e kusion \u5f00\u53d1\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a INFO\uff0c\u6240\u6709\u9009\u9879\uff1aDEBUG\u3001INFO\u3001ERROR\u3001WARN\u3001FATAL (default "INFO")\n      --profile string          \u8981\u6355\u83b7\u7684\u6863\u6848\u540d\u79f0\u3002none\u3001cpu\u3001heap\u3001goroutine\u3001threadcreate\u3001block \u548c mutex \u4e4b\u4e00 (default "none")\n      --profile-output string   \u6863\u6848\u5199\u5165\u7684\u6587\u4ef6\u540d (default "profile.pprof")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/cli/kusionctl/overview"},"kusion"),"\t - kusion \u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 Kubernetes")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2022"},"Auto generated by spf13/cobra on 21-Jan-2022"))}d.isMDXComponent=!0}}]);