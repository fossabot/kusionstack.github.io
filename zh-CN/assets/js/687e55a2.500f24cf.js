"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,k=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="kusion",l={unversionedId:"reference/cli/kusion/index",id:"reference/cli/kusion/index",title:"kusion",description:"Kusion \u662f KusionStack \u7684\u5e73\u53f0\u5de5\u7a0b\u5f15\u64ce",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/cli/kusion/index.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/",permalink:"/zh-CN/docs/reference/cli/kusion/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusion/index.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1694160251,formattedLastUpdatedAt:"2023\u5e749\u67088\u65e5",frontMatter:{},sidebar:"reference",previous:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/zh-CN/docs/reference/cli/"},next:{title:"kusion init",permalink:"/zh-CN/docs/reference/cli/kusion/init"}},c={},s=[{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion"},"kusion"),(0,o.kt)("p",null,"Kusion \u662f KusionStack \u7684\u5e73\u53f0\u5de5\u7a0b\u5f15\u64ce"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Kusion \u662f KusionStack \u7684\u5e73\u53f0\u5de5\u7a0b\u5f15\u64ce\u3002 \u5b83\u5c06\u8fd0\u7ef4\u610f\u56fe\u4ea4\u4ed8\u81f3 Kubernetes\u3001\u4e91\u670d\u52a1\u548c\u672c\u5730\u90e8\u7f72\u7684\u8d44\u6e90\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion [flags]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for kusion\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/apply"},"kusion apply"),"\t - \u5c06\u5404\u7c7b\u8d44\u6e90\u7684\u8fd0\u7ef4\u610f\u56fe apply \u81f3\u591a\u79cd\u8fd0\u884c\u65f6\u91cc (Kubernetes\u3001AWS/\u963f\u91cc\u4e91\u4ee5\u53ca\u81ea\u5efa\u7cfb\u7edf\u7b49)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/compile"},"kusion compile"),"\t - \u5c06 KCL \u7f16\u8bd1\u6210 YAML"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/destroy"},"kusion destroy"),"\t - \u5220\u9664\u8fd0\u884c\u65f6\u4e2d\u6307\u5b9a\u7684\u8d44\u6e90"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/init"},"kusion init"),"\t - \u521d\u59cb\u5316\u4e00\u4e2a Project \u7684\u811a\u624b\u67b6"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/preview"},"kusion preview"),"\t - \u9884\u89c8 Stack \u4e2d\u7684\u4e00\u7cfb\u5217\u8d44\u6e90\u66f4\u6539"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/version"},"kusion version"),"\t - \u6253\u5370\u5f53\u524d Kusion \u7684\u7248\u672c\u4fe1\u606f")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}p.isMDXComponent=!0}}]);