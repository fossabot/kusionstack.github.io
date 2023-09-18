"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},a="kusion init",s={unversionedId:"reference/cli/kusion/init",id:"reference/cli/kusion/init",title:"kusion init",description:"\u521d\u59cb\u5316\u4e00\u4e2a Project \u7684\u811a\u624b\u67b6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/cli/kusion/init.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/init",permalink:"/zh-CN/docs/reference/cli/kusion/init",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusion/init.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1695040082,formattedLastUpdatedAt:"2023\u5e749\u670818\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"reference",previous:{title:"kusion",permalink:"/zh-CN/docs/reference/cli/kusion/"},next:{title:"kusion init templates",permalink:"/zh-CN/docs/reference/cli/kusion/init-templates"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kusion-init"},"kusion init"),(0,i.kt)("p",null,"\u521d\u59cb\u5316\u4e00\u4e2a Project \u7684\u811a\u624b\u67b6"),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"\u8be5\u6307\u4ee4\u7528\u4e8e\u521d\u59cb\u5316\u4e00\u4e2a Project \u811a\u624b\u67b6\uff0c\u4ece\u9009\u5b9a\u7684\u6a21\u677f\u751f\u6210\u5177\u5907\u6b63\u786e\u7ed3\u6784\u7684 Project\u3002"),(0,i.kt)("p",null,"\u811a\u624b\u67b6\u6a21\u677f\u53ef\u4ee5\u4ece\u672c\u5730\u6216\u8005\u7ebf\u4e0a\u83b7\u53d6\u3002\u9ed8\u8ba4\u4f7f\u7528\u5185\u7f6e\u6a21\u677f\uff1b\u82e5\u9700\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u6a21\u677f\uff0c\u9700\u8981\u6307\u5b9a\u6a21\u677f\u4ed3\u5e93\u7684\u5730\u5740\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion init\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # \u4ece\u672c\u5730\u5185\u7f6e\u6a21\u677f\u4e2d\u521d\u59cb\u5316\u4e00\u4e2a Project\n  kusion init\n  \n  # \u4ece\u9ed8\u8ba4\u7684\u5728\u7ebf\u6a21\u677f\u4e2d\u521d\u59cb\u5316\u4e00\u4e2a Project\n  kusion init --online=true\n  \n  # \u4ece\u6307\u5b9a\u7684\u5728\u7ebf\u6a21\u677f\u521d\u59cb\u5316\u4e00\u4e2a Project\n  kusion init https://github.com/<user>/<repo> --online=true\n  \n  # \u4ece\u6307\u5b9a\u7684\u672c\u5730\u6a21\u677f\u521d\u59cb\u5316\u4e00\u4e2a Project\n  kusion init /path/to/templates\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --custom-params string   JSON \u683c\u5f0f\u7684\u81ea\u5b9a\u4e49\u53c2\u6570\u3002\u82e5\u6307\u5b9a\uff0c\u90a3\u4e48\u4f1a\u7528\u5176\u4f5c\u4e3a\u9ed8\u8ba4\u7684\u6a21\u677f\u53c2\u6570\uff0c\u5e76\u8df3\u8fc7\u63d0\u793a\n      --force                  \u5f3a\u5236\u751f\u6210\u811a\u624b\u67b6\u6587\u4ef6\uff0c\u5373\u4f7f\u4f1a\u66f4\u6539\u73b0\u6709\u6587\u4ef6\n  -h, --help                   help for init\n      --online                 \u4f7f\u7528\u7ebf\u4e0a\u6a21\u677f\u521d\u59cb\u5316 Project\uff0c\u5426\u5219\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u6a21\u677f\n      --project-name string    \u7528\u6307\u5b9a\u7684 Project \u540d\u79f0\u521d\u59cb\u5316\u3002\u82e5\u4e0d\u6307\u5b9a\uff0c\u5c06\u6709\u63d0\u793a\u8bf7\u6c42\u83b7\u53d6\n      --template-name string   \u7528\u6307\u5b9a\u7684\u6a21\u677f\u521d\u59cb\u5316\u3002\u82e5\u4e0d\u6307\u5b9a\uff0c\u5c06\u6709\u63d0\u793a\u8bf7\u6c42\u83b7\u53d6\n      --yes                    \u8df3\u8fc7\u63d0\u793a\uff0c\u4f7f\u7528\u9ed8\u8ba4\u503c\u521d\u59cb\u5316 Project\n")),(0,i.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/"},"kusion"),"\t - Kusion \u662f KusionStack \u7684\u5e73\u53f0\u5de5\u7a0b\u5f15\u64ce"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"init-templates"},"kusion init templates"),"\t - \u5217\u51fa\u7528\u4e8e\u521d\u59cb\u5316 Project \u7684\u6a21\u677f")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}p.isMDXComponent=!0}}]);