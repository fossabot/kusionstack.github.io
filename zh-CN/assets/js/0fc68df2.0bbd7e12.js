"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:7},s="kusion destroy",a={unversionedId:"reference/cli/kusion/destroy",id:"reference/cli/kusion/destroy",title:"kusion destroy",description:"\u5220\u9664\u8fd0\u884c\u65f6\u4e2d\u6307\u5b9a\u7684\u8d44\u6e90",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/cli/kusion/destroy.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/destroy",permalink:"/zh-CN/docs/reference/cli/kusion/destroy",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusion/destroy.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1690429013,formattedLastUpdatedAt:"2023\u5e747\u670827\u65e5",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"reference",previous:{title:"kusion apply",permalink:"/zh-CN/docs/reference/cli/kusion/apply"},next:{title:"kusion version",permalink:"/zh-CN/docs/reference/cli/kusion/version"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-destroy"},"kusion destroy"),(0,o.kt)("p",null,"\u5220\u9664\u8fd0\u884c\u65f6\u4e2d\u6307\u5b9a\u7684\u8d44\u6e90"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"\u901a\u8fc7\u8d44\u6e90\u89c4\u7ea6\u5220\u9664\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u53ea\u63a5\u53d7 KCL \u6587\u4ef6\u3002\u53ea\u80fd\u6307\u5b9a\u4e00\u79cd\u7c7b\u578b\u7684\u53c2\u6570\uff1a\u6587\u4ef6\u540d\u3001\u8d44\u6e90\u3001\u540d\u79f0\u3001\u8d44\u6e90\u6216\u6807\u7b7e\u9009\u62e9\u5668\u3002"),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cdestroy \u547d\u4ee4\u4e0d\u4f1a\u8fdb\u884c\u8d44\u6e90\u7248\u672c\u68c0\u67e5\uff0c \u56e0\u6b64\u5982\u679c\u6709\u4eba\u5728\u4f60\u63d0\u4ea4\u9500\u6bc1\u65f6\u63d0\u4ea4\u4e86\u5bf9\u8d44\u6e90\u7684\u66f4\u65b0\uff0c \u4ed6\u4eec\u7684\u66f4\u65b0\u5c06\u4e0e\u8d44\u6e90\u4e00\u8d77\u4e22\u5931\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion destroy [flags]\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  # \u5220\u9664 pod.k \u4e2d\u7684\u914d\u7f6e\n  kusion destroy -f ./pod.k\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -D, --argument stringArray     \u6307\u5b9a\u9876\u7ea7\u53c2\u6570\n  -C, --backend-config strings   backend-config \u914d\u7f6e\u72b6\u6001\u5b58\u50a8\u540e\u7aef\u4fe1\u606f\n      --backend-type string      backend-type \u6307\u5b9a\u72b6\u6001\u5b58\u50a8\u540e\u7aef\u7c7b\u578b\uff0c\u652f\u6301 local\u3001db\u3001oss \u548c s3\n  -d, --detail                   \u9884\u89c8\u540e\u81ea\u52a8\u5c55\u793a apply \u8ba1\u5212\u7ec6\u8282\n  -h, --help                     help for destroy\n      --operator string          \u6307\u5b9a\u64cd\u4f5c\u4eba\n  -O, --overrides strings        \u6307\u5b9a\u914d\u7f6e\u8986\u76d6\u8def\u5f84\u548c\u503c\n  -Y, --setting strings          \u6307\u5b9a\u547d\u4ee4\u884c\u914d\u7f6e\u6587\u4ef6\n  -w, --workdir string           \u6307\u5b9a\u5de5\u4f5c\u76ee\u5f55\n  -y, --yes                      \u9884\u89c8\u540e\u81ea\u52a8\u5ba1\u6279\u5e76\u5e94\u7528\u66f4\u65b0\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/"},"kusion"),"\t - Kusion \u662f KusionStack \u7684\u5e73\u53f0\u5de5\u7a0b\u5f15\u64ce")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}u.isMDXComponent=!0}}]);