"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9822],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||k[d]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78446:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return k}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],l={sidebar_position:2},i="Kusion \u7684 Docker \u955c\u50cf",c={unversionedId:"user_docs/getting-started/install/docker",id:"user_docs/getting-started/install/docker",title:"Kusion \u7684 Docker \u955c\u50cf",description:"\u5982\u679c\u73af\u5883\u65e0\u6cd5\u5b89\u88c5\u672c\u5730\u6267\u884c\u7248\u672c\uff0c\u53ef\u4ee5\u9009\u62e9 KusionStack \u7684 Docker \u7248\u672c\u3002\u9996\u5148\u5728\u672c\u5730\u5b89\u88c5\u597d Docker \u73af\u5883\uff0c\u5e76\u542f\u52a8 Docker \u670d\u52a1\u3002\u7136\u540e\u901a\u8fc7 docker info \u547d\u4ee4\u9a8c\u8bc1\u672c\u5730\u7684 Docker \u670d\u52a1\u5df2\u7ecf\u6b63\u5e38\u542f\u52a8\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/getting-started/install/docker.md",sourceDirName:"user_docs/getting-started/install",slug:"/user_docs/getting-started/install/docker",permalink:"/zh-CN/docs/user_docs/getting-started/install/docker",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/install/docker.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663071680,formattedLastUpdatedAt:"2022/9/13",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Kusionup \u5b89\u88c5",permalink:"/zh-CN/docs/user_docs/getting-started/install/kusionup"},next:{title:"Use Cases",permalink:"/zh-CN/docs/user_docs/getting-started/usecase"}},u={},k=[{value:"1. \u62c9\u53d6\u6700\u65b0\u7248\u672c",id:"1-\u62c9\u53d6\u6700\u65b0\u7248\u672c",level:2},{value:"2. \u62c9\u53d6\u6307\u5b9a\u7248\u672c",id:"2-\u62c9\u53d6\u6307\u5b9a\u7248\u672c",level:2},{value:"3. \u6267\u884c KCL \u4ee3\u7801",id:"3-\u6267\u884c-kcl-\u4ee3\u7801",level:2}],p={toc:k};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"kusion-\u7684-docker-\u955c\u50cf"},"Kusion \u7684 Docker \u955c\u50cf"),(0,s.kt)("p",null,"\u5982\u679c\u73af\u5883\u65e0\u6cd5\u5b89\u88c5\u672c\u5730\u6267\u884c\u7248\u672c\uff0c\u53ef\u4ee5\u9009\u62e9 KusionStack \u7684 Docker \u7248\u672c\u3002\u9996\u5148\u5728\u672c\u5730\u5b89\u88c5\u597d ",(0,s.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," \u73af\u5883\uff0c\u5e76\u542f\u52a8 Docker \u670d\u52a1\u3002\u7136\u540e\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"docker info")," \u547d\u4ee4\u9a8c\u8bc1\u672c\u5730\u7684 Docker \u670d\u52a1\u5df2\u7ecf\u6b63\u5e38\u542f\u52a8\u3002"),(0,s.kt)("p",null,"Kusion \u955c\u50cf\u7684\u7f51\u5740: ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kusionstack/kusion"},"https://hub.docker.com/r/kusionstack/kusion")),(0,s.kt)("h2",{id:"1-\u62c9\u53d6\u6700\u65b0\u7248\u672c"},"1. \u62c9\u53d6\u6700\u65b0\u7248\u672c"),(0,s.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u62c9\u53d6\u6700\u65b0\u7684\u7248\u672c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull kusionstack/kusion\nUsing default tag: latest\nlatest: Pulling from kusion/kusion\n...\nkusionstack/kusion:latest\n$\n")),(0,s.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b KCL \u7248\u672c\u53f7\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it kusionstack/kusion kcl --version\nkclvm version is 0.4.1; checksum: ***\n$\n")),(0,s.kt)("h2",{id:"2-\u62c9\u53d6\u6307\u5b9a\u7248\u672c"},"2. \u62c9\u53d6\u6307\u5b9a\u7248\u672c"),(0,s.kt)("p",null,"\u67e5\u770b",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kusionstack/kusion/tags"},"\u955c\u50cf\u7248\u672c\u53f7\u5217\u8868"),"\uff0c\u6216\u8005\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u62c9\u53d6 kusion \u6700\u65b0\u955c\u50cf\uff08Kusion\u955c\u50cf\u4e2d\u5305\u542bKCL\u547d\u4ee4\u884c\u5de5\u5177\uff09\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker pull kusionstack/kusion\n...\n")),(0,s.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b KCL \u7248\u672c\u53f7\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it kusionstack/kusion:v0.4.1 kcl --version\nkclvm version is 0.4.1\n$\n")),(0,s.kt)("h2",{id:"3-\u6267\u884c-kcl-\u4ee3\u7801"},"3. \u6267\u884c KCL \u4ee3\u7801"),(0,s.kt)("p",null,"\u5982\u679c\u8981\u9a8c\u8bc1\u6267\u884c KCL \u7a0b\u5e8f\uff0c\u53ef\u4ee5\u5148\u5728\u5f53\u524d\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"hello.k")," \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'hello = "world"\n')),(0,s.kt)("p",null,"\u7136\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"hello.k")," \u6587\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run --rm -it -v `pwd`:/root/hello.k kusionstack/kusion kcl /root/hello.k\nhello: world\n$\n")),(0,s.kt)("p",null,"\u7a0b\u5e8f\u8f93\u51fa\u7684YAML\u683c\u5f0f\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"hello: world")," \u6570\u636e\uff0c\u8bf4\u660eDocker\u73af\u5883\u7684KCL\u5df2\u7ecf\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u4e86\u3002"))}d.isMDXComponent=!0}}]);