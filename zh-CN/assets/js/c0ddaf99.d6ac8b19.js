"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:3},o="Validate",l={unversionedId:"reference/cli/kusionctl/validate",id:"reference/cli/kusionctl/validate",title:"Validate",description:"\u6821\u9a8c\u5f53\u524d\u76ee\u5f55\u7684 KCL \u914d\u7f6e\u662f\u5426\u53ef\u4ee5\u7f16\u8bd1",source:"@site/docs/reference/cli/kusionctl/validate.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/validate",permalink:"/zh-CN/docs/reference/cli/kusionctl/validate",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/validate.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685544974,formattedLastUpdatedAt:"2023/5/31",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reference",previous:{title:"Init Project",permalink:"/zh-CN/docs/reference/cli/kusionctl/init"},next:{title:"Compile",permalink:"/zh-CN/docs/reference/cli/kusionctl/compile"}},s={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 21-Jan-2022",id:"auto-generated-by-spf13cobra-on-21-jan-2022",level:6}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validate"},"Validate"),(0,i.kt)("p",null,"\u6821\u9a8c\u5f53\u524d\u76ee\u5f55\u7684 KCL \u914d\u7f6e\u662f\u5426\u53ef\u4ee5\u7f16\u8bd1"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"\u9a8c\u8bc1\u5f53\u524d\u76ee\u5f55\u4e2d\u7684 KCL \u914d\u7f6e\u662f\u5426\u53ef\u4ee5\u7f16\u8bd1\uff0c \u5e76\u4e14\u4e0d\u4e0e\u4efb\u4f55 backend/state/provider \u4ea4\u4e92\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion validate [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # \u9a8c\u8bc1 main.k \u4e2d\u7684\u914d\u7f6e\n  kusion validate main.k\n  \n  # \u4f7f\u7528\u53c2\u6570\u9a8c\u8bc1 main.k\n  kusion validate main.k -D name=test -D age=18\n  \n  # \u4f7f\u7528\u6765\u81ea settings.yaml \u7684\u53c2\u6570\u9a8c\u8bc1 main.k\n  kusion validate main.k -Y settings.yaml\n  \n  # \u4f7f\u7528\u5de5\u4f5c\u76ee\u5f55\u9a8c\u8bc1 main.k\n  kusion validate main.k -w Konfig/appops/demo/dev\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -D, --argument strings    \u6307\u5b9a\u9876\u7ea7\u53c2\u6570\n  -n, --disable-none        \u7981\u7528\u8f6c\u50a8 None \u503c\n  -h, --help                help for validate\n  -a, --override-AST        \u6307\u5b9a\u8986\u76d6\u9009\u9879\n  -O, --overrides strings   \u6307\u5b9a\u914d\u7f6e\u8986\u76d6\u8def\u5f84\u548c\u503c\n  -Y, --setting strings     \u6307\u5b9a\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\n  -w, --workdir string      \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --log-level string        \u8bbe\u7f6e kusion \u5f00\u53d1\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4\u4e3a INFO\uff0c\u6240\u6709\u9009\u9879\uff1aDEBUG\u3001INFO\u3001ERROR\u3001WARN\u3001FATAL (default "INFO")\n      --profile string          \u8981\u6355\u83b7\u7684\u6863\u6848\u540d\u79f0\u3002none\u3001cpu\u3001heap\u3001goroutine\u3001threadcreate\u3001block \u548c mutex \u4e4b\u4e00 (default "none")\n      --profile-output string   \u6863\u6848\u5199\u5165\u7684\u6587\u4ef6\u540d (default "profile.pprof")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusionctl/overview"},"kusion"),"\t - kusion \u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 Kubernetes")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-21-jan-2022"},"Auto generated by spf13/cobra on 21-Jan-2022"))}u.isMDXComponent=!0}}]);