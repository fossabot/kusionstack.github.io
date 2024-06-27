"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,b=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},i="Installation",l={unversionedId:"faq/install-error",id:"version-v0.11/faq/install-error",title:"Installation",description:"1. Could not find libintl.dylib",source:"@site/docs_versioned_docs/version-v0.11/7-faq/1-install-error.md",sourceDirName:"7-faq",slug:"/faq/install-error",permalink:"/zh/docs/v0.11/faq/install-error",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/7-faq/1-install-error.md",tags:[],version:"v0.11",lastUpdatedBy:"Dayuan",lastUpdatedAt:1719479679,formattedLastUpdatedAt:"2024\u5e746\u670827\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"kusion",previous:{title:"Roadmap",permalink:"/zh/docs/v0.11/reference/roadmap"},next:{title:"KCL",permalink:"/zh/docs/v0.11/faq/kcl"}},s={},c=[{value:"1. Could not find <code>libintl.dylib</code>",id:"1-could-not-find-libintldylib",level:2},{value:"2. macOS system SSL related errors",id:"2-macos-system-ssl-related-errors",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"1-could-not-find-libintldylib"},"1. Could not find ",(0,o.kt)("inlineCode",{parentName:"h2"},"libintl.dylib")),(0,o.kt)("p",null,"This problem is that some tools depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Gettext")," library, but macOS does not have this library by default. You can try to solve it in the following ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(Skip this step for non-macOS m1) For macOS m1 operating system, make sure you have a homebrew arm64e-version installed in /opt/homebrew, otherwise install the arm version of brew with the following command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# add to path\nexport PATH=/opt/homebrew/bin:$PATH\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"brew install gettext")),(0,o.kt)("li",{parentName:"ol"},"Make sure ",(0,o.kt)("inlineCode",{parentName:"li"},"libintl.8.dylib")," exists in ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/opt/gettext/lib")," directory"),(0,o.kt)("li",{parentName:"ol"},"If brew is installed in another directory, the library can be created by copying it to the corresponding directory")),(0,o.kt)("h2",{id:"2-macos-system-ssl-related-errors"},"2. macOS system SSL related errors"),(0,o.kt)("p",null,"Openssl dylib library not found or SSL module is not available problem"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(Skip this step for non-macOS m1) For macOS m1 operating system, make sure you have a homebrew arm64e-version installed in /opt/homebrew, otherwise install the arm version of brew with the following command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# add to path\nexport PATH=/opt/homebrew/bin:$PATH\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install openssl (version 1.1) via brew")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install openssl@1.1\n")))}d.isMDXComponent=!0}}]);