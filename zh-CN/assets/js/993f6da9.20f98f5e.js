"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const o={sidebar_position:1},a="\u5b89\u88c5\u6307\u5357",l={unversionedId:"user_docs/getting-started/install",id:"user_docs/getting-started/install",title:"\u5b89\u88c5\u6307\u5357",description:"Homebrew (MacOS & Linux)",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/getting-started/install.md",sourceDirName:"user_docs/getting-started",slug:"/user_docs/getting-started/install",permalink:"/zh-CN/docs/user_docs/getting-started/install",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/install.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1694522671,formattedLastUpdatedAt:"2023\u5e749\u670812\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/docs/user_docs/getting-started/"},next:{title:"\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",permalink:"/zh-CN/docs/user_docs/getting-started/usecases/deliver-first-project"}},i={},c=[{value:"Homebrew (MacOS &amp; Linux)",id:"homebrew-macos--linux",level:2},{value:"Curl|sh (MacOS &amp; Linux)",id:"curlsh-macos--linux",level:2},{value:"Scoop (Windows)",id:"scoop-windows",level:2},{value:"Powershell (Windows)",id:"powershell-windows",level:2},{value:"Docker \u955c\u50cf",id:"docker-\u955c\u50cf",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5b89\u88c5\u6307\u5357"},"\u5b89\u88c5\u6307\u5357"),(0,s.kt)("h2",{id:"homebrew-macos--linux"},"Homebrew (MacOS & Linux)"),(0,s.kt)("p",null,"\u5728 Mac \u548c Linux \u4e0a\u5b89\u88c5\u7684\u9996\u9009\u65b9\u6cd5\u662f\u4f7f\u7528 brew \u5305\u7ba1\u7406\u5668\u3002"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u6700\u65b0\u7684 Kusion CLI\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"brew install KusionStack/tap/kusion\n")),(0,s.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u6309\u7167\u4e0b\u9762\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u3002"),(0,s.kt)("h2",{id:"curlsh-macos--linux"},"Curl|sh (MacOS & Linux)"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709 homebrew\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u5355\u884c\u547d\u4ee4\u5b89\u88c5 CLI\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://kusionstack.io/scripts/install.sh | sh\n")),(0,s.kt)("h2",{id:"scoop-windows"},"Scoop (Windows)"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u5b89\u88c5 Kusion CLI \u7684\u6700\u65b0\u7248\u672c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scoop bucket add KusionStack https://github.com/KusionStack/scoop-bucket.git\nscoop install KusionStack/kusion\n")),(0,s.kt)("h2",{id:"powershell-windows"},"Powershell (Windows)"),(0,s.kt)("p",null,"\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u5728 powershell \u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'powershell -Command "iwr -useb https://kusionstack.io/scripts/install.ps1 | iex"\n')),(0,s.kt)("h2",{id:"docker-\u955c\u50cf"},"Docker \u955c\u50cf"),(0,s.kt)("p",null,"\u5982\u679c\u4e0a\u9762\u7684\u5b89\u88c5\u65b9\u5f0f\u4e0d\u652f\u6301\u4f60\u7684\u73af\u5883\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9 Kusion \u955c\u50cf\u4f5c\u4e3a\u66ff\u4ee3\u3002"),(0,s.kt)("p",null,"\u9996\u5148\uff0c\u62c9\u53d6\u6700\u65b0\u955c\u50cf\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull kusionstack/kusion:latest\n")),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4ee5\u4ea4\u4e92\u5f0f\u65b9\u5f0f\u542f\u52a8 Kusion \u955c\u50cf\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it kusionstack/kusion:latest bash\n")))}p.isMDXComponent=!0}}]);