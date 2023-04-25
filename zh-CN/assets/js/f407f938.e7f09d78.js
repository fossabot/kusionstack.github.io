"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:99},i="KCLVM \u6574\u4f53\u67b6\u6784",l={unversionedId:"develop/design/kclvm",id:"develop/design/kclvm",title:"KCLVM \u6574\u4f53\u67b6\u6784",description:"KCLVM \u7f16\u8bd1\u5668\u5b9e\u73b0\u4ee5 Spec \u4f5c\u4e3a\u9a71\u52a8\uff08\u4e3b\u8981\u5305\u542b KCL \u8bed\u8a00\u89c4\u8303\uff0cKCL \u591a\u8bed\u8a00\u96c6\u6210\u89c4\u8303\u3001KCL OpenAPI \u89c4\u8303\uff09\uff0cKCL \u662f\u4e00\u4e2a\u7f16\u8bd1\u578b\u7684\u8bed\u8a00\uff0c\u6574\u4f53\u4fdd\u6301\u4e0e\u5e38\u89c4\u8bed\u8a00\u7f16\u8bd1\u5668\u76f8\u540c\u7684\u4e09\u6bb5\u5f0f\u67b6\u6784\uff0c\u5e76\u5728\u5176\u4e2d\u501f\u52a9\u4e86 LLVM-IR \u4f5c\u4e3a KCL \u8fde\u63a5 Native/WASM \u4ee3\u7801\u7684\u4e2d\u95f4\u7ebd\u5e26\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b 3 \u4e2a\u6838\u5fc3\u5de5\u4f5c\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/develop/design/kclvm.md",sourceDirName:"develop/design",slug:"/develop/design/kclvm",permalink:"/zh-CN/docs/develop/design/kclvm",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/design/kclvm.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1682392078,formattedLastUpdatedAt:"2023/4/25",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"develop",previous:{title:"Konfig \u5927\u5e93\u7ed3\u6784",permalink:"/zh-CN/docs/develop/design/konfig"},next:{title:"KEP \u63d0\u6848",permalink:"/zh-CN/docs/develop/kep"}},p={},c=[],s={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kclvm-\u6574\u4f53\u67b6\u6784"},"KCLVM \u6574\u4f53\u67b6\u6784"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(11036).Z,width:"1876",height:"674"})),(0,o.kt)("p",null,"KCLVM \u7f16\u8bd1\u5668\u5b9e\u73b0\u4ee5 Spec \u4f5c\u4e3a\u9a71\u52a8\uff08\u4e3b\u8981\u5305\u542b KCL \u8bed\u8a00\u89c4\u8303\uff0cKCL \u591a\u8bed\u8a00\u96c6\u6210\u89c4\u8303\u3001KCL OpenAPI \u89c4\u8303\uff09\uff0cKCL \u662f\u4e00\u4e2a\u7f16\u8bd1\u578b\u7684\u8bed\u8a00\uff0c\u6574\u4f53\u4fdd\u6301\u4e0e\u5e38\u89c4\u8bed\u8a00\u7f16\u8bd1\u5668\u76f8\u540c\u7684\u4e09\u6bb5\u5f0f\u67b6\u6784\uff0c\u5e76\u5728\u5176\u4e2d\u501f\u52a9\u4e86 LLVM-IR \u4f5c\u4e3a KCL \u8fde\u63a5 Native/WASM \u4ee3\u7801\u7684\u4e2d\u95f4\u7ebd\u5e26\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b 3 \u4e2a\u6838\u5fc3\u5de5\u4f5c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"KCL \u4ee3\u7801\u5230 LLVM-IR \u7684\u7ffb\u8bd1\uff1a\u901a\u8fc7\u904d\u5386 KCL AST\uff0c\u6839\u636e KCL \u8bed\u8a00\u89c4\u8303\u751f\u6210\u76f8\u5e94\u7684 LLVM-IR \u4ee3\u7801\uff0c\u76f8\u5f53\u4e8e\u7528\u6237\u6001\u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ul"},"KCL Runtime Lib\uff1a\u8fd0\u884c\u65f6\u8f85\u52a9\u51fd\u6570\u5e93\uff0c\u63d0\u4f9b\u8fd0\u884c\u65f6 KCL \u7684\u503c/\u7c7b\u578b\u8ba1\u7b97\u3001\u5185\u5b58\u3001\u4e0a\u4e0b\u6587\u7ba1\u7406\u3001\u5185\u7f6e\u5e93\u548c\u63d2\u4ef6\u5e93\u652f\u6301\uff0c\u76f8\u5f53\u4e8e\u7cfb\u7edf\u6001\u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u6001\u4e0e\u7cfb\u7edf\u6001\u4ee3\u7801\u94fe\u63a5\u4e0e\u6267\u884c\uff1a\u5c06\u7528\u6237\u6001\u4ee3\u7801\u4e0e\u7cfb\u7edf\u6001\u4ee3\u7801\u94fe\u63a5\u4e3a\u4e00\u4e2a\u52a8\u6001\u94fe\u63a5\u5e93/WASM Module\uff0c\u6700\u7ec8\u901a\u8fc7\u7edf\u4e00\u7684 Runner \u6a21\u5757\u6267\u884c\u7f16\u8bd1\u540e\u7684 KCL \u4ee3\u7801\u3002")),(0,o.kt)("p",null,"\u6b64\u5916 KCL \u5728\u8bed\u4e49\u68c0\u67e5\u5668\u548c\u548c Plugin \u8fd9\u5757\u505a\u4e86\u589e\u5f3a\u652f\u6301\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resolver",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u9759\u6001\u7c7b\u578b\u63a8\u5bfc\u4e0e\u68c0\u67e5"),"\uff1a\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u8fdb\u884c\u7c7b\u578b\u63a8\u5bfc\u548c\u68c0\u67e5\uff0c\u907f\u514d\u8fd0\u884c\u65f6\u7c7b\u578b\u68c0\u67e5\u5f00\u9500\uff0c\u53ef\u4ee5\u4f5c\u4e3a IDE \u63d2\u4ef6\u8df3\u8f6c\u3001\u8865\u5168\u7b49\u529f\u80fd\u652f\u6301\u548c\u8bed\u4e49 API \u6784\u5efa(\u5982 schema \u6a21\u578b\u67e5\u8be2\u3001\u4f9d\u8d56\u5206\u6790\u7b49) \u7684\u826f\u597d\u57fa\u7840"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u56fe\u5408\u5e76"),"\uff1a\u5728\u7f16\u8bd1\u8fc7\u7a0b\u5bf9\u914d\u7f6e\u6570\u636e\u4f9d\u8d56\u56fe\u8fdb\u884c\u6784\u5efa\u4e0e\u5408\u5e76\uff0c\u6700\u7ec8\u8fd0\u884c\u65f6\u4ec5\u8fdb\u884c\u5c11\u91cf\u8ba1\u7b97\u5373\u53ef\u5f97\u5230\u6700\u7ec8\u7684\u89e3"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8bed\u4e49\u4f9d\u8d56\u56fe"),"\uff1a\u901a\u8fc7\u5185\u5efa\u8bed\u4e49\u4f9d\u8d56\u56fe\uff0cKCL \u53ef\u4ee5\u5b8c\u6210\u914d\u7f6e\u53d8\u66f4\u7684\u4f9d\u8d56\u5206\u6790\uff0c \u5e76\u4e14\u6839\u636e\u914d\u7f6e\u53d8\u66f4\u7ed3\u679c\u8fdb\u884c\u589e\u91cf\u7f16\u8bd1\uff0c\u5bf9\u4e0d\u53d8\u7684\u914d\u7f6e\u8fdb\u884c\u7f13\u5b58\uff0c\u53ef\u4ee5\u63d0\u5347\u7aef\u5230\u7aef\u7f16\u8bd1\u6027\u80fd"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Schema \u4e3a\u4e2d\u5fc3\u7684\u9762\u5411\u5bf9\u8c61\u7279\u6027"),"\uff1aKCL \u8bed\u8a00\u53ea\u4fdd\u7559\u4e86\u5355\u7ee7\u627f\u7684\u8bed\u6cd5\u3002\u540c\u65f6 schema \u53ef\u4ee5\u901a\u8fc7 mixin \u548c protocol \u7b49\u7279\u6027\u6df7\u5165\u590d\u7528\u76f8\u540c\u7684\u4ee3\u7801\u7247\u6bb5\uff0c\u5bf9\u4e8e\u4e0d\u540c\u7684\u80fd\u529b\u914d\u5957\uff0c\u53ef\u4ee5\u901a\u8fc7 mixin \u673a\u5236\u7f16\u5199\uff0c\u5e76\u901a\u8fc7 mixin \u58f0\u660e\u7684\u65b9\u5f0f\u201c\u6df7\u5165\u201d\u5230\u4e0d\u540c\u7684\u7ed3\u6784\u4f53\u4e2d"))),(0,o.kt)("li",{parentName:"ul"},"Plugin: \u53ef\u4ee5\u4f7f\u7528 Python/Go \u7f16\u5199\u6269\u5c55\u5e93\uff0c\u4e3b\u8981\u5305\u542b\u4e00\u4e9b\u9886\u57df\u80fd\u529b\uff0c\u5982\u8bbf\u95ee\u7f51\u7edc\u6216\u6570\u636e\u5e93\u7b49\u3002")))}u.isMDXComponent=!0},11036:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kcl-tech-arch-80e0de63d5a17ac656650bf408117ef4.png"}}]);