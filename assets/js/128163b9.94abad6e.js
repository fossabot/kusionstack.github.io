"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const l={},a="Installation",i={unversionedId:"user_docs/support/install-error",id:"user_docs/support/install-error",title:"Installation",description:"1. Could not find libintl.dylib",source:"@site/docs/user_docs/support/install-error.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/install-error",permalink:"/docs/user_docs/support/install-error",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/support/install-error.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1680176156,formattedLastUpdatedAt:"3/30/2023",frontMatter:{},sidebar:"user_docs",previous:{title:"Command Line Tool",permalink:"/docs/user_docs/support/faq-cli"}},s={},p=[{value:"1. Could not find <code>libintl.dylib</code>",id:"1-could-not-find-libintldylib",level:2},{value:"2. macOS system SSL related errors",id:"2-macos-system-ssl-related-errors",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"1-could-not-find-libintldylib"},"1. Could not find ",(0,o.kt)("inlineCode",{parentName:"h2"},"libintl.dylib")),(0,o.kt)("p",null,"This problem is that some tools depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Gettext")," library, but macOS does not have this library by default. You can try to solve it in the following ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(Skip this step for non-macOS m1) For macOS m1 operating system, make sure you have a homebrew arm64e-version installed in /opt/homebrew, otherwise install the arm version of brew with the following command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# add to path\nexport PATH=/opt/homebrew/bin:$PATH\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"brew install gettext")),(0,o.kt)("li",{parentName:"ol"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"li"},"libintl.8.dylib")," exists in ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/opt/gettext/lib")," directory"),(0,o.kt)("li",{parentName:"ol"},"If brew is installed in another directory, the library can be created by copying it to the corresponding directory")),(0,o.kt)("h2",{id:"2-macos-system-ssl-related-errors"},"2. macOS system SSL related errors"),(0,o.kt)("p",null,"Openssl dylib library not found or SSL module is not available problem"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(Skip this step for non-macOS m1) For macOS m1 operating system, make sure you have a homebrew arm64e-version installed in /opt/homebrew, otherwise install the arm version of brew with the following command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# add to path\nexport PATH=/opt/homebrew/bin:$PATH\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install openssl (version 1.1) via brew")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install openssl@1.1\n")))}u.isMDXComponent=!0}}]);