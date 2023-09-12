"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},a="kusion init templates",s={unversionedId:"reference/cli/kusion/init-templates",id:"reference/cli/kusion/init-templates",title:"kusion init templates",description:"\u5217\u51fa\u7528\u4e8e\u521d\u59cb\u5316 Project \u7684\u6a21\u677f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/cli/kusion/init-templates.md",sourceDirName:"reference/cli/kusion",slug:"/reference/cli/kusion/init-templates",permalink:"/zh-CN/docs/reference/cli/kusion/init-templates",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusion/init-templates.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1694522671,formattedLastUpdatedAt:"2023\u5e749\u670812\u65e5",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"reference",previous:{title:"kusion init",permalink:"/zh-CN/docs/reference/cli/kusion/init"},next:{title:"kusion compile",permalink:"/zh-CN/docs/reference/cli/kusion/compile"}},l={},p=[{value:"Synopsis",id:"synopsis",level:2},{value:"Examples",id:"examples",level:2},{value:"Options",id:"options",level:2},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"Auto generated by spf13/cobra on 15-Jul-2023",id:"auto-generated-by-spf13cobra-on-15-jul-2023",level:6}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kusion-init-templates"},"kusion init templates"),(0,i.kt)("p",null,"\u5217\u51fa\u7528\u4e8e\u521d\u59cb\u5316 Project \u7684\u6a21\u677f"),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"\u8be5\u6307\u4ee4\u83b7\u53d6\u7528\u4e8e\u521d\u59cb\u5316 Project \u811a\u624b\u67b6\u7684\u6a21\u677f\u7684\u63cf\u8ff0\u548c\u5b9a\u4e49\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kusion init templates\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  # \u83b7\u53d6\u5185\u7f6e\u6a21\u677f\u7684\u540d\u79f0\u548c\u63cf\u8ff0\n  kusion init templates\n  \n  # \u83b7\u53d6\u6307\u5b9a\u7684\u5728\u7ebf\u4ed3\u5e93\u4e2d\u7684\u6a21\u677f\u5217\u8868\n  kusion init templates https://github.com/<user>/<repo> \u2014online=true\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help            help for templates\n  -o, --output string   \u6307\u5b9a\u6a21\u677f\u7684\u8f93\u51fa\u683c\u5f0f\u3002\u82e5\u6307\u5b9a\uff0c\u73b0\u5728\u4ec5\u652f\u6301 json\uff1b\u82e5\u4e0d\u6307\u5b9a\uff0c\u90a3\u4e48\u5c06\u6253\u5370\u6a21\u677f\u7684\u540d\u79f0\u548c\u63cf\u8ff0\n")),(0,i.kt)("h2",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      --online   \u4f7f\u7528\u7ebf\u4e0a\u6a21\u677f\u521d\u59cb\u5316 Project\uff0c\u5426\u5219\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u6a21\u677f\n")),(0,i.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/kusion/init"},"kusion init"),"\t - \u521d\u59cb\u5316\u4e00\u4e2a Project \u7684\u811a\u624b\u67b6")),(0,i.kt)("h6",{id:"auto-generated-by-spf13cobra-on-15-jul-2023"},"Auto generated by spf13/cobra on 15-Jul-2023"))}u.isMDXComponent=!0}}]);