"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1242],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},57887:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={sidebar_position:3},s="\u6821\u9a8c\u5de5\u7a0b",c={unversionedId:"reference/cli/kusionctl/validate",id:"reference/cli/kusionctl/validate",title:"\u6821\u9a8c\u5de5\u7a0b",description:"\u6821\u9a8c\u5f53\u524d\u76ee\u5f55\u7684 KCL \u914d\u7f6e\u662f\u5426\u53ef\u4ee5\u7f16\u8bd1",source:"@site/docs/reference/cli/kusionctl/validate.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/validate",permalink:"/docs/reference/cli/kusionctl/validate",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/validate.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1661751584,formattedLastUpdatedAt:"2022/8/29",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reference",previous:{title:"\u521d\u59cb\u5316\u5de5\u7a0b\u4ee3\u7801",permalink:"/docs/reference/cli/kusionctl/init"},next:{title:"\u7f16\u8bd1\u5de5\u7a0b",permalink:"/docs/reference/cli/kusionctl/compile"}},u={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2022",id:"auto-generated-by-spf13cobra-on-21-jan-2022",level:6}],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6821\u9a8c\u5de5\u7a0b"},"\u6821\u9a8c\u5de5\u7a0b"),(0,o.kt)("p",null,"\u6821\u9a8c\u5f53\u524d\u76ee\u5f55\u7684 KCL \u914d\u7f6e\u662f\u5426\u53ef\u4ee5\u7f16\u8bd1"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"\u9a8c\u8bc1\u5f53\u524d\u76ee\u5f55\u4e2d\u7684 KCL \u914d\u7f6e\u662f\u5426\u53ef\u4ee5\u7f16\u8bd1\uff0c \u5e76\u4e14\u4e0d\u4e0e\u4efb\u4f55 backend/state/provider \u4ea4\u4e92\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion validate [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # \u9a8c\u8bc1 main.k \u4e2d\u7684\u914d\u7f6e\n  kusion validate main.k\n  \n  # \u4f7f\u7528\u53c2\u6570\u9a8c\u8bc1 main.k\n  kusion validate main.k -D name=test -D age=18\n  \n  # \u4f7f\u7528\u6765\u81ea settings.yaml \u7684\u53c2\u6570\u9a8c\u8bc1 main.k\n  kusion validate main.k -Y settings.yaml\n  \n  # \u4f7f\u7528\u5de5\u4f5c\u76ee\u5f55\u9a8c\u8bc1 main.k\n  kusion validate main.k -w Konfig/appops/demo/dev\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -D, --argument strings    \u6307\u5b9a\u9876\u7ea7\u53c2\u6570\n  -n, --disable-none        \u7981\u7528\u8f6c\u50a8 None \u503c\n  -h, --help                help for validate\n  -a, --override-AST        \u6307\u5b9a\u8986\u76d6\u9009\u9879\n  -O, --overrides strings   \u6307\u5b9a\u914d\u7f6e\u8986\u76d6\u8def\u5f84\u548c\u503c\n  -Y, --setting strings     \u6307\u5b9a\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\n  -w, --workdir string      \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --log-level string        \u8bbe\u7f6e kusion \u5f00\u53d1\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a INFO\uff0c\u6240\u6709\u9009\u9879\uff1aDEBUG\u3001INFO\u3001ERROR\u3001WARN\u3001FATAL (default "INFO")\n      --profile string          \u8981\u6355\u83b7\u7684\u6863\u6848\u540d\u79f0\u3002none\u3001cpu\u3001heap\u3001goroutine\u3001threadcreate\u3001block \u548c mutex \u4e4b\u4e00 (default "none")\n      --profile-output string   \u6863\u6848\u5199\u5165\u7684\u6587\u4ef6\u540d (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cli/kusionctl/overview"},"kusion"),"\t - kusion \u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 Kubernetes")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2022"},"Auto generated by spf13/cobra on 21-Jan-2022"))}f.isMDXComponent=!0}}]);