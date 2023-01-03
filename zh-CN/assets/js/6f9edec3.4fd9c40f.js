"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5493],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),d=o(n),c=r,s=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(s,i(i({ref:e},k),{},{components:n})):a.createElement(s,i({ref:e},k))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84954:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1},i="Overview",p={unversionedId:"reference/cli/kusionctl/overview",id:"reference/cli/kusionctl/overview",title:"Overview",description:"1. \u524d\u8a00",source:"@site/docs/reference/cli/kusionctl/overview.md",sourceDirName:"reference/cli/kusionctl",slug:"/reference/cli/kusionctl/overview",permalink:"/zh-CN/docs/reference/cli/kusionctl/overview",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/kusionctl/overview.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1672715784,formattedLastUpdatedAt:"2023/1/3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"Kusion Tools",permalink:"/zh-CN/docs/reference/cli/kusionctl/"},next:{title:"Init Project",permalink:"/zh-CN/docs/reference/cli/kusionctl/init"}},u={},o=[{value:"1. \u524d\u8a00",id:"1-\u524d\u8a00",level:2},{value:"2. Kusion CLI \u5305\u62ec\u4ec0\u4e48\uff1f",id:"2-kusion-cli-\u5305\u62ec\u4ec0\u4e48",level:2},{value:"3. Kusionctl \u5b50\u547d\u4ee4\u6982\u89c8",id:"3-kusionctl-\u5b50\u547d\u4ee4\u6982\u89c8",level:2}],k={toc:o};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("h2",{id:"1-\u524d\u8a00"},"1. \u524d\u8a00"),(0,r.kt)("p",null,"Kusion CLI \u5373 Kusion \u5de5\u5177\u94fe\u7684\u7b80\u79f0\uff0c\u662f\u57fa\u4e8e KCL \u7684 DevOps \u5de5\u5177\u96c6\u5408\uff0c\u4e3b\u8981\u5305\u62ec\u4e3b\u5de5\u5177\u3001\u8f6c\u6362\u5de5\u5177\u96c6\u3001\u63d2\u4ef6\u96c6\u7b49\u3002"),(0,r.kt)("p",null,"Kusion CLI \u7684\u8fb9\u754c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kusion CLI \u805a\u7126 DevOps \u9886\u57df"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e KCL\uff0c\u975e KCL \u7684\u914d\u7f6e\u8bed\u8a00\u9700\u8981\u5148\u8f6c\u6362\u4e3a KCL \u624d\u80fd\u8bc6\u522b"),(0,r.kt)("li",{parentName:"ul"},"\u591a Runtime\uff0c\u63d0\u4f9b\u7684\u80fd\u529b\u4e00\u5b9a\u662f\u591a Runtime \u95f4\u901a\u7528\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u5236\u80fd\u529b\u901a\u8fc7 Plugin \u63d0\u4f9b")),(0,r.kt)("h2",{id:"2-kusion-cli-\u5305\u62ec\u4ec0\u4e48"},"2. Kusion CLI \u5305\u62ec\u4ec0\u4e48\uff1f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u522b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5de5\u5177\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3b\u5de5\u5177\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kusionctl")),(0,r.kt)("td",{parentName:"tr",align:null},"kusionctl \u662f\u57fa\u4e8e KCL \u8bed\u8a00\u7684 DevOps \u5de5\u5177\uff0c\u7ba1\u7406 KCL \u914d\u7f6e\u4ece\u751f\u6210\u5230\u751f\u6548\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kusionup")),(0,r.kt)("td",{parentName:"tr",align:null},"kusionup \u662f\u4e00\u4e2a\u4f18\u96c5\u7684 kusion \u591a\u7248\u672c\u7ba1\u7406\u5de5\u5177")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8f6c\u6362\u5de5\u5177\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"kube2kcl")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece yaml/kustomize \u8f6c\u6362\u6210 KCL \u914d\u7f6e\u7684\u5de5\u5177")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"crd2kcl")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece crd yaml \u8f6c\u6362\u4e3a KCL \u6a21\u578b\u5b9a\u4e49\u7684\u5de5\u5177")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"tf2kcl")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece tf \u8f6c\u6362\u4e3a KCL \u6a21\u578b\u5b9a\u4e49\u7684\u5de5\u5177")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"openapi2kcl")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece openapi yaml \u8f6c\u6362\u4e3a KCL \u6a21\u578b\u5b9a\u4e49\u7684\u5de5\u5177")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u65e0\u7f1d\u96c6\u6210 kusionctl \u7684 plugin")))),(0,r.kt)("h2",{id:"3-kusionctl-\u5b50\u547d\u4ee4\u6982\u89c8"},"3. Kusionctl \u5b50\u547d\u4ee4\u6982\u89c8"),(0,r.kt)("p",null,"kusionctl \u662f\u57fa\u4e8e KCL \u8bed\u8a00\u7684 DevOps \u5de5\u5177\uff0c\u7ba1\u7406 KCL \u914d\u7f6e\u7684\u751f\u547d\u5468\u671f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u80fd\u529b\u7c7b\u522b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u80fd\u529b\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5305\u542b\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u811a\u624b\u67b6"),(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion init \u547d\u4ee4\u7528\u4e8e\u4ece\u6307\u5b9a\u6a21\u677f\u521d\u59cb\u5316\u4e00\u4e2a\u5de5\u4f5c\u76ee\u5f55\uff0c\u5176\u4e2d\u5305\u62ec KCL \u63cf\u8ff0\u7684\u914d\u7f6e\u6e05\u5355\u3001project.yaml\u3001stack.yaml \u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bed\u8a00\u96c6\u6210"),(0,r.kt)("td",{parentName:"tr",align:null},"compile"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion compile \u547d\u4ee4\u7528\u4e8e\u7f16\u8bd1\u6307\u5b9a\u7684 KCL \u914d\u7f6e\u6587\u4ef6\u4ee5\u67e5\u770b\u7ed3\u679c\u662f\u5426\u7b26\u5408\u9884\u671f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8bed\u6cd5\u6821\u9a8c"),(0,r.kt)("td",{parentName:"tr",align:null},"validate"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion validate \u547d\u4ee4\u7528\u4e8e\u9a8c\u8bc1\u5f53\u524d\u76ee\u5f55\u7684 KCL \u914d\u7f6e\u662f\u5426\u80fd\u591f\u6b63\u5e38\u7f16\u8bd1\uff0c\u800c\u4e0d\u548c backend\u3001state\u3001provider \u8fdb\u884c\u4ea4\u4e92\uff1b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u4fe1\u606f\u67e5\u770b"),(0,r.kt)("td",{parentName:"tr",align:null},"ls"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion ls \u547d\u4ee4\u7528\u4e8e\u67e5\u770b Project \u548c Stack \u57fa\u672c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u7ba1\u7406"),(0,r.kt)("td",{parentName:"tr",align:null},"preview"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion preview \u547d\u4ee4\u7528\u4e8e\u9884\u89c8\u5373\u5c06\u53d1\u5e03\u7684\u914d\u7f6e\uff0c\u5305\u62ec\u8d44\u6e90\u52a8\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"apply"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion apply \u547d\u4ee4\u7528\u4e8e\u5c06\u914d\u7f6e\u751f\u6548\uff0c\u8be5\u547d\u4ee4\u6267\u884c\u540e\u4f1a\u5148\u6267\u884c preview\uff0c\u786e\u8ba4\u540e\u624d\u4f1a\u771f\u6b63\u4e0b\u53d1\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion delete \u547d\u4ee4\u7528\u4e8e\u5c06\u914d\u7f6e\u5bf9\u5e94\u7684\u8d44\u6e90\u5220\u9664\uff0c\u8be5\u547d\u4ee4\u4f1a\u5148\u6267\u884c preview\uff0c\u786e\u8ba4\u540e\u624d\u4f1a\u771f\u6b63\u5220\u9664\u8d44\u6e90")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"watch"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion watch \u547d\u4ee4\u7528\u4e8e\u67e5\u770b\u5f53\u524d Stack \u7684\u8d44\u6e90\u72b6\u6001")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5176\u5b83"),(0,r.kt)("td",{parentName:"tr",align:null},"\u63d2\u4ef6\u7ba1\u7406"),(0,r.kt)("td",{parentName:"tr",align:null},"plugin"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion plugin \u7528\u4e8e\u7ba1\u7406\u672c\u5730\u5b89\u88c5\u7684 plugin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7248\u672c\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion version \u7528\u4e8e\u663e\u793a\u7248\u672c\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},"env"),(0,r.kt)("td",{parentName:"tr",align:null},"kusion env \u7528\u4e8e\u67e5\u770b kusion \u76f8\u5173\u7684\u73af\u5883\u53d8\u91cf")))),(0,r.kt)("p",null,"\u5907\u6ce8\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u914d\u7f6e"),"\uff1a\u662f\u6307\u7528 KCL \u63cf\u8ff0\u7684\u914d\u7f6e\u6e05\u5355\n\u200b")))}m.isMDXComponent=!0}}]);