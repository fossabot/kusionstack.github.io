"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3177],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},863:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),l=["components"],a={sidebar_position:99},c="KCLVM \u6574\u4f53\u67b6\u6784",u={unversionedId:"develop/design/kclvm",id:"develop/design/kclvm",title:"KCLVM \u6574\u4f53\u67b6\u6784",description:"1. \u6f14\u5316\u5386\u53f2",source:"@site/docs/develop/design/kclvm.md",sourceDirName:"develop/design",slug:"/develop/design/kclvm",permalink:"/docs/develop/design/kclvm",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/design/kclvm.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653039356,formattedLastUpdatedAt:"2022/5/20",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"develop",previous:{title:"Konfig \u5927\u5e93\u7ed3\u6784",permalink:"/docs/develop/design/konfig"},next:{title:"KEP \u63d0\u6848",permalink:"/docs/develop/kep/"}},p={},s=[{value:"1. \u6f14\u5316\u5386\u53f2",id:"1-\u6f14\u5316\u5386\u53f2",level:2},{value:"2. \u6700\u65b0\u67b6\u6784",id:"2-\u6700\u65b0\u67b6\u6784",level:2},{value:"3. \u5c55\u671b",id:"3-\u5c55\u671b",level:2}],d={toc:s};function f(e){var t=e.components,a=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kclvm-\u6574\u4f53\u67b6\u6784"},"KCLVM \u6574\u4f53\u67b6\u6784"),(0,i.kt)("h2",{id:"1-\u6f14\u5316\u5386\u53f2"},"1. \u6f14\u5316\u5386\u53f2"),(0,i.kt)("p",null,"KCLVM \u662f KCL \u914d\u7f6e\u8bed\u8a00\u7684\u5b9e\u73b0\u3002KCL \u8bed\u8a00\u4ece 2019 \u5e74\u5f00\u59cb\u521d\u671f\u7684\u8c03\u7814\u548c\u8bbe\u8ba1\u5de5\u4f5c\u3002\u5230 2020 \u5e74 3 \u6708\u53d1\u5e03 kcl-0.1\uff0c\u57fa\u4e8ePython\u5b9a\u5236\u8bed\u6cd5\uff0c\u91c7\u7528 Python \u53cd\u5c04\u65b9\u5f0f\u5de5\u4f5c\u30022020 \u5e74\u4e0b\u534a\u5e74\u6539\u7528 Python \u8bed\u8a00\u5e76\u52a0\u5feb\u4e86\u5f00\u53d1\u548c\u8fed\u4ee3\u901f\u5ea6\uff0c\u53d1\u5e03\u7684 kcl-0.2.x \u5f15\u5165\u4e86\u5927\u91cf\u8bed\u8a00\u7279\u6027\u3001\u589e\u52a0\u4e86 Plugin \u6269\u5c55\u652f\u6301\u3001\u540c\u65f6\u652f\u6301 IDEA \u63d2\u4ef6\u30022021 \u5e74\u4e0a\u534a\u5e74\u5f00\u59cb\u7edf\u4e00\u4f18\u5316\u548c\u6574\u5408\u8bed\u8a00\u7279\u6027\uff0c\u53d1\u5e03\u7684 kcl-0.3 \u4f18\u5316\u7c7b\u578b\u7cfb\u7edf\u3001\u96c6\u6210\u5355\u5143\u6d4b\u8bd5\u5de5\u5177\u3001\u4f18\u5316\u6267\u884c\u6027\u80fd\u5e76\u63d0\u4f9b\u4e86 Go \u7b49\u591a\u8bed\u8a00\u7684 API \u652f\u6301\u3001\u540c\u65f6\u901a\u8fc7 LSP \u4e3a VSCode \u63d0\u4f9b\u652f\u6301\u30022021 \u5e74\u4e0b\u534a\u5e74\u5f00\u59cb\u91c7\u7528 Rust \u8bed\u8a00\u8fdb\u884c\u6e10\u8fdb\u5f0f\u91cd\u6784\uff0c\u540c\u65f6\u5f15\u5165\u9759\u6001\u7c7b\u578b\u68c0\u67e5\u548c\u4f18\u5316\u6027\u80fd\uff0c\u5b8c\u5584\u8bed\u8a00\u7684\u6587\u6863\u652f\u6301\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(6164).Z,width:"2584",height:"484"})),(0,i.kt)("h2",{id:"2-\u6700\u65b0\u67b6\u6784"},"2. \u6700\u65b0\u67b6\u6784"),(0,i.kt)("p",null,"2021 \u5e74\u5f00\u59cb\u7528 Rust \u91cd\u6784\u540e\u7684 KCLVM \u67b6\u6784\u56fe\u5982\u4e0b\u56fe\u6240\u793a\uff08\u9884\u8ba1\u5728 2022.05 \u5b8c\u6210\u91cd\u6784\uff09\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:n(9192).Z,width:"2212",height:"1442"})),(0,i.kt)("p",null,"\u7531\u4e8e\u5386\u53f2\u539f\u56e0\uff0c\u67b6\u6784\u4e2d AST \u7684\u89e3\u6790\u548c\u5b57\u8282\u7801\u7248\u672c\u7684\u6267\u884c\u76ee\u524d\u4f9d\u7136\u662f\u91c7\u7528 Python \u5b9e\u73b0\u3002\u57fa\u4e8e Rust \u91cd\u6784\u7684\u5de5\u4f5c\u4ece\u540e\u7aef\u5f00\u59cb\u5411\u524d\u7aef\u9010\u6b65\u8fdb\u884c\uff0c\u524d\u671f\u501f\u52a9 Python \u4ea7\u51fa\u7684 AST \u548c\u7c7b\u578b\u68c0\u67e5\u7b49\u7279\u6027\uff0c\u7136\u540e\u901a\u8fc7 Rust \u5b9e\u73b0\u540e\u7aef LLVM-IR \u7684\u8f93\u51fa\uff0c\u6700\u7ec8\u5b8c\u6210\u540e\u6838\u5fc3\u529f\u80fd\u5c06\u5168\u90e8\u7528 Rust \u5b9e\u73b0\u3002"),(0,i.kt)("p",null,"KCLVM \u7f16\u8bd1\u5668\u6574\u4f53\u4e3a\u4e09\u6bb5\u5f0f\u67b6\u6784\uff0c\u5e76\u5728\u5176\u4e2d\u501f\u52a9\u4e86 LLVM-IR \u4f5c\u4e3a KCL \u8fde\u63a5 Native/WASM \u4ee3\u7801\u7684\u4e2d\u95f4\u7ebd\u5e26\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b 3 \u4e2a\u6838\u5fc3\u5de5\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"KCL AST \u5230 LLVM-IR \u7684\u7ffb\u8bd1\uff1a\u901a\u8fc7\u904d\u5386 KCL AST\uff0c\u6839\u636e KCL \u8bed\u8a00\u89c4\u8303\u751f\u6210\u76f8\u5e94\u7684 LLVM-IR \u4ee3\u7801\uff0c\u76f8\u5f53\u4e8e\u7528\u6237\u6001\u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"KCL Runtime Lib\uff1a\u8fd0\u884c\u65f6\u8f85\u52a9\u51fd\u6570\u5e93\uff0c\u63d0\u4f9b\u8fd0\u884c\u65f6 KCL \u7684\u503c/\u7c7b\u578b\u8ba1\u7b97\u3001\u5185\u5b58\u3001\u4e0a\u4e0b\u6587\u7ba1\u7406\u3001\u5185\u7f6e\u5e93\u548c\u63d2\u4ef6\u5e93\u652f\u6301\uff0c\u76f8\u5f53\u4e8e\u7cfb\u7edf\u6001\u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u6001\u4e0e\u7cfb\u7edf\u6001\u4ee3\u7801\u94fe\u63a5\u4e0e\u6267\u884c\uff1a\u5c06\u7528\u6237\u6001\u4ee3\u7801\u4e0e\u7cfb\u7edf\u6001\u4ee3\u7801\u94fe\u63a5\u4e3a\u4e00\u4e2a\u52a8\u6001\u94fe\u63a5\u5e93/WASM Module\uff0c\u6700\u7ec8\u901a\u8fc7\u7edf\u4e00\u7684 Runner \u6a21\u5757\u6267\u884c\u7f16\u8bd1\u540e\u7684 KCL \u4ee3\u7801\u3002")),(0,i.kt)("h2",{id:"3-\u5c55\u671b"},"3. \u5c55\u671b"),(0,i.kt)("p",null,"\u5e0c\u671b\u80fd\u591f\u5c06 KCLVM \u7684\u4e2d\u901a\u7528\u7684\u5f00\u53d1\u7ecf\u9a8c\u63d0\u70bc\u4e3a DSL \u8bed\u8a00\u5b9e\u73b0\u7684\u7f16\u7a0b\u6846\u67b6\uff0c\u540c\u65f6\u80fd\u591f\u652f\u6301\u66f4\u591a\u7684\u540e\u7aef\u3001\u96c6\u6210\u66f4\u591a\u7684\u793e\u533a\u751f\u6001\u3002"))}f.isMDXComponent=!0},9192:function(e,t,n){t.Z=n.p+"assets/images/kcl-arch-4d6e8b2cae61915da1945d588da7a32d.png"},6164:function(e,t,n){t.Z=n.p+"assets/images/kcl-dev-history-0045e3c440bdf5f45936b397052d2e0a.png"}}]);