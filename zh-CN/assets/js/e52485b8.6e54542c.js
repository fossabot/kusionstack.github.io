"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const l={},a="\u5b89\u88c5\u95ee\u9898",i={unversionedId:"user_docs/support/install-error",id:"user_docs/support/install-error",title:"\u5b89\u88c5\u95ee\u9898",description:"1. \u627e\u4e0d\u5230 libintl.dylib",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/support/install-error.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/install-error",permalink:"/zh-CN/docs/user_docs/support/install-error",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/support/install-error.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1673264205,formattedLastUpdatedAt:"2023/1/9",frontMatter:{},sidebar:"user_docs",previous:{title:"\u547d\u4ee4\u884c\u5de5\u5177",permalink:"/zh-CN/docs/user_docs/support/faq-cli"}},s={},p=[{value:"1. \u627e\u4e0d\u5230 <code>libintl.dylib</code>",id:"1-\u627e\u4e0d\u5230-libintldylib",level:2},{value:"2. macOS \u7cfb\u7edf SSL \u76f8\u5173\u9519\u8bef",id:"2-macos-\u7cfb\u7edf-ssl-\u76f8\u5173\u9519\u8bef",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5b89\u88c5\u95ee\u9898"},"\u5b89\u88c5\u95ee\u9898"),(0,o.kt)("h2",{id:"1-\u627e\u4e0d\u5230-libintldylib"},"1. \u627e\u4e0d\u5230 ",(0,o.kt)("inlineCode",{parentName:"h2"},"libintl.dylib")),(0,o.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u662f\u6709\u4e9b\u5de5\u5177\u5e95\u5c42\u4f9d\u8d56\u4e86 Gettext \u5e93\uff0c\u4f46\u662f macOS \u9ed8\u8ba4\u6ca1\u6709\u8fd9\u4e2a\u5e93\u5bfc\u81f4\u3002\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u89e3\u51b3\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(\u975e macOS m1 \u8df3\u8fc7\u8be5\u6b65)\u5bf9\u4e8e macOS m1 \u64cd\u4f5c\u7cfb\u7edf\uff0c\u786e\u4fdd\u4f60\u6709\u4e00\u4e2a homebrew arm64e-version  \u5b89\u88c5\u5728 /opt/homebrew, \u5426\u5219\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 arm \u7248\u672c\u7684 brew")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# \u6dfb\u52a0\u5230 path\nexport PATH=/opt/homebrew/bin:$PATH\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"brew install gettext")),(0,o.kt)("li",{parentName:"ol"},"\u786e\u4fdd ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/opt/gettext/lib")," \u76ee\u5f55\u5b58\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"libintl.8.dylib")),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c brew \u5b89\u88c5\u5230\u5176\u4ed6\u76ee\u5f55\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u62f7\u8d1d\u7b49\u65b9\u5f0f\u521b\u5efa\u5e93\u5230\u5bf9\u5e94\u76ee\u5f55\u4e0b")),(0,o.kt)("h2",{id:"2-macos-\u7cfb\u7edf-ssl-\u76f8\u5173\u9519\u8bef"},"2. macOS \u7cfb\u7edf SSL \u76f8\u5173\u9519\u8bef"),(0,o.kt)("p",null,"Openssl dylib \u5e93\u627e\u4e0d\u5230\u6216 SSL module is not available \u7684\u95ee\u9898"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(\u975e macOS m1 \u8df3\u8fc7\u8be5\u6b65)\u5bf9\u4e8e macOS m1 \u64cd\u4f5c\u7cfb\u7edf\uff0c\u786e\u4fdd\u4f60\u6709\u4e00\u4e2a homebrew arm64e-version  \u5b89\u88c5\u5728 /opt/homebrew, \u5426\u5219\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 arm \u7248\u672c\u7684 brew")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# \u6dfb\u52a0\u5230 path\nexport PATH=/opt/homebrew/bin:$PATH\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 brew \u5b89\u88c5 openssl 1.1 \u7248\u672c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install openssl@1.1\n")))}u.isMDXComponent=!0}}]);