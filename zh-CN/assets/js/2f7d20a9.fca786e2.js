"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5319],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var r=i.createContext({}),u=function(e){var n=i.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(r.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),c=o,m=d["".concat(r,".").concat(c)]||d[c]||k[c]||a;return t?i.createElement(m,s(s({ref:n},p),{},{components:t})):i.createElement(m,s({ref:n},p))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(87462),o=(t(67294),t(3905));const a={sidebar_position:1},s="Kusionup \u5b89\u88c5",l={unversionedId:"user_docs/getting-started/install/kusionup",id:"user_docs/getting-started/install/kusionup",title:"Kusionup \u5b89\u88c5",description:"\u63a8\u8350\u901a\u8fc7 kusionup \u5de5\u5177\u5b89\u88c5 Kusion\uff0c\u8fd9\u662f\u4e00\u4e2a\u4f18\u96c5\u7684 kusion \u591a\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b83\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/getting-started/install/kusionup.md",sourceDirName:"user_docs/getting-started/install",slug:"/user_docs/getting-started/install/kusionup",permalink:"/zh-CN/docs/user_docs/getting-started/install/kusionup",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/install/kusionup.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1663323095,formattedLastUpdatedAt:"2022/9/16",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u4e0b\u8f7d\u548c\u5b89\u88c5",permalink:"/zh-CN/docs/user_docs/getting-started/install/"},next:{title:"Kusion \u7684 Docker \u955c\u50cf",permalink:"/zh-CN/docs/user_docs/getting-started/install/docker"}},r={},u=[{value:"1. \u5b89\u88c5 Kusionup",id:"1-\u5b89\u88c5-kusionup",level:2},{value:"2. \u7ba1\u7406 Kusion \u7248\u672c",id:"2-\u7ba1\u7406-kusion-\u7248\u672c",level:2},{value:"3. Kusionup \u5e2e\u52a9\u6587\u6863",id:"3-kusionup-\u5e2e\u52a9\u6587\u6863",level:2},{value:"4. Kusionup Tips",id:"4-kusionup-tips",level:2},{value:"5. VS Code \u63d2\u4ef6",id:"5-vs-code-\u63d2\u4ef6",level:2}],p={toc:u};function k(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusionup-\u5b89\u88c5"},"Kusionup \u5b89\u88c5"),(0,o.kt)("p",null,"\u63a8\u8350\u901a\u8fc7 kusionup \u5de5\u5177\u5b89\u88c5 Kusion\uff0c\u8fd9\u662f\u4e00\u4e2a\u4f18\u96c5\u7684 kusion \u591a\u7248\u672c\u7ba1\u7406\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5b83\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u952e\u5b89\u88c5\u4efb\u4f55\u7248\u672c\u7684 kusion"),(0,o.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u5207\u6362\u4e0d\u540c\u7248\u672c\u7684 kusion"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u672c\u5730 kusion \u7248\u672c")),(0,o.kt)("h2",{id:"1-\u5b89\u88c5-kusionup"},"1. \u5b89\u88c5 Kusionup"),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4e00\u952e\u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionup"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install KusionStack/tap/kusionup && kusionup init --skip-prompt && source $HOME/.kusionup/env\n")),(0,o.kt)("p",null,"\u5347\u7ea7 ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionup"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew upgrade KusionStack/tap/kusionup\n")),(0,o.kt)("p",null,"\u8be5\u811a\u672c\u6267\u884c\u540e\u4f1a\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.kusionup")," \u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u4e0b\u4f1a\u5305\u542b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/bin")," \u76ee\u5f55\u7528\u4e8e\u653e\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"kusionup")," \u4e8c\u8fdb\u5236\u5de5\u5177"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/env")," \u6587\u4ef6\u7528\u4e8e\u58f0\u660e ",(0,o.kt)("inlineCode",{parentName:"li"},"kusionup")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion")," \u6280\u672f\u6808\u6240\u9700\u8981\u7684\u73af\u5883\u53d8\u91cf"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/current")," \u8f6f\u94fe\u63a5\u7528\u4e8e\u6807\u8bc6\u5f53\u524d\u6fc0\u6d3b\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion")," \u7248\u672c"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/$VERSION")," \u76ee\u5f55\u4ee3\u8868\u4e0d\u540c\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion")," \u7248\u672c\u76ee\u5f55\uff0c\u6bd4\u5982\u9ed8\u8ba4\u5b89\u88c5\u7684\u6700\u65b0\u7248\u672c ",(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.kusionup/latest"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udca1 \u81ea\u5b9a\u4e49\u9ed8\u8ba4\u5b89\u88c5\u7248\u672c"),"\uff1a\n\u4e0a\u8ff0\u811a\u672c\u4f1a\u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7684 kusion \u7248\u672c\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"latest"),"\uff09\uff0c\u5982\u679c\u60f3",(0,o.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u5b89\u88c5\u7248\u672c"),"\uff0c\u53ef\u4ee5\u8fd0\u884c\u4e0b\u8ff0\u547d\u4ee4\uff08\u5c06\u6700\u540e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," \u66ff\u6362\u4e3a\u4f60\u60f3\u8981\u9ed8\u8ba4\u5b89\u88c5\u7684\u7248\u672c\u53f7\u5c31\u5c31\u884c\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew install KusionStack/tap/kusionup && kusionup init --skip-install && source $HOME/.kusionup/env && kusionup reinstall latest\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udca1 \u5b89\u88c5\u5931\u8d25\u95ee\u9898\u6392\u67e5"),"\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u2753 \u95ee\u9898 1"),"\uff1aM1 Mac Openssl dylib \u5e93\u627e\u4e0d\u5230\u6216 SSL module is not available \u7684\u95ee\u9898"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u4f60\u6709\u4e00\u4e2a homebrew arm64e-version  \u5b89\u88c5\u5728 /opt/homebrew, \u5426\u5219\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5 arm \u7248\u672c\u7684 brew")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n# \u6dfb\u52a0\u5230 path\nexport PATH=/opt/homebrew/bin:$PATH\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 brew \u5b89\u88c5 openssl 1.1 \u7248\u672c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"brew install openssl@1.1\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u2753 \u95ee\u9898 2"),"\uff1amac KCLVM gettext dylib \u627e\u4e0d\u5230\u7684\u95ee\u9898\n",(0,o.kt)("img",{parentName:"p",src:"https://intranetproxy.alipay.com/skylark/lark/0/2022/png/317257/1646538731635-b1e290a5-465d-4838-b8d1-7f22cb48e267.png#clientId=uc50abf48-5ee8-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=200&id=ub5ce78d1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=400&originWidth=1158&originalType=binary&ratio=1&rotation=0&showTitle=false&size=238920&status=done&style=none&taskId=ue75303e6-140d-450f-84de-464da45a473&title=&width=579",alt:"image.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 which \u547d\u4ee4\u627e\u5230\u81ea\u5df1 gettext \u7684\u4f4d\u7f6e (\u5047\u8bbe\u4e3a/Users/yueyi/tools/homebrew/bin/gettext)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"which gettext\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 otool -L \u547d\u4ee4\u83b7\u5f97 libintl.8.dylib \u7684\u4f4d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"C02Y90Q4JHD2:bin yueyi$ otool -L /Users/yueyi/tools/homebrew/bin/gettext\n/Users/yueyi/tools/homebrew/bin/gettext:\n  /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation (compatibility version 150.0.0, current version 1675.129.0)\n  /Users/yueyi/tools/homebrew/Cellar/gettext/0.21/lib/libintl.8.dylib (compatibility version 11.0.0, current version 11.0.0)\n  /usr/lib/libiconv.2.dylib (compatibility version 7.0.0, current version 7.0.0)\n  /usr/lib/libSystem.B.dylib (compatibility version 1.0.0, current version 1281.100.1)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5c06  ",(0,o.kt)("inlineCode",{parentName:"li"},"/Users/yueyi/tools/homebrew/Cellar/gettext/0.21/lib/libintl.8.dylib")," \u62f7\u8d1d\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/opt/gettext/lib/libintl.8.dylib"))),(0,o.kt)("h2",{id:"2-\u7ba1\u7406-kusion-\u7248\u672c"},"2. \u7ba1\u7406 Kusion \u7248\u672c"),(0,o.kt)("p",null,"\u6267\u884c\u5b8c\u5b89\u88c5\u811a\u672c\u540e\uff0c\u9ed8\u8ba4\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionup")," \u548c\u4e00\u4e2a\u9ed8\u8ba4\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion")," \u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionup")," \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6240\u6709\u7248\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kusionup\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Select a version:\n  \u25b8 latest\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionup ls-ver")," \u5217\u51fa\u6765\u81ea\u5185\u7f6e\u5b89\u88c5\u6e90\u4e2d\u7684",(0,o.kt)("strong",{parentName:"p"},"\u6240\u6709\u53ef\u5b89\u88c5\u7684 "),(0,o.kt)("inlineCode",{parentName:"p"},"**kusion**"),(0,o.kt)("strong",{parentName:"p"}," \u7248\u672c"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kusionup ls-ver\ncdn@latest\ncdn@v0.4.2\ncdn@v0.4.1\ngithub@latest\ngithub@v0.4.2\ngithub@v0.4.1\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionup install $VERSION")," \u5b89\u88c5\u6307\u5b9a\u7248\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fd9\u91cc\u5047\u8bbe\u4ece cdn \u52a0\u901f\u6e90\u5b89\u88c5 kusion \u7684\u6700\u65b0\u7248\u672c \u2193\n$ kusionup install cdn@latest\nDownloaded   0.0% (     2426 / 139988826 bytes) ...\nDownloaded  11.4% ( 16003466 / 139988826 bytes) ...\nDownloaded  21.0% ( 29433014 / 139988826 bytes) ...\nDownloaded  32.2% ( 45077686 / 139988826 bytes) ...\nDownloaded  41.9% ( 58642898 / 139988826 bytes) ...\nDownloaded  51.2% ( 71647010 / 139988826 bytes) ...\nDownloaded  61.6% ( 86258486 / 139988826 bytes) ...\nDownloaded  71.2% ( 99667706 / 139988826 bytes) ...\nDownloaded  81.5% (114078806 / 139988826 bytes) ...\nDownloaded  91.5% (128134166 / 139988826 bytes) ...\nDownloaded 100.0% (139988826 / 139988826 bytes)\nINFO[0055] Unpacking /root/.kusionup/kusion@latest/kusion-linux.tgz ...\nINFO[0061] Success: latest downloaded in /root/.kusionup/kusion@latest\nINFO[0061] Default Kusion is set to 'latest'\n\n$ kusion version\nreleaseVersion: v0.4.1\n......\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionup show")," \u67e5\u770b\u76ee\u524d\u6b63\u5728\u4f7f\u7528\u7684 kusion \u7248\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kusionup show\n|    VERSION    | ACTIVE |\n|---------------|--------|\n|  cdn@latest   |   *    |\n|  cdn@v0.4.1   |        |\n")),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionup remove $VERSION")," \u5220\u9664\u6307\u5b9a\u7248\u672c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u8fd9\u91cc\u5047\u8bbe\u5220\u9664 kusion \u7684\u6700\u65b0\u7248\u672c \u2193\n$ kusionup remove latest\nINFO[0000] Removing latest\n\n$ kusionup\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Select a version:\n  \u25b8 cdn@v0.4.1  # \u5df2\u7ecf\u6ca1\u6709 latest \u7684\u9009\u9879\u4e86\n")),(0,o.kt)("h2",{id:"3-kusionup-\u5e2e\u52a9\u6587\u6863"},"3. Kusionup \u5e2e\u52a9\u6587\u6863"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ kusionup -h\nThe Kusion installer\n\nUsage:\n  kusionup [flags]\n  kusionup [command]\n\nAvailable Commands:\n  default     Set the default Kusion version\n  help        Help about any command\n  install     Install Kusion with a version\n  ls-ver      List Kusion versions to install\n  remove      Remove Kusion with a version\n  show        Show installed Kusion\n  version     Show kusionup version\n\nFlags:\n  -h, --help      help for kusionup\n  -v, --verbose   Verbose\n\nUse "kusionup [command] --help" for more information about a command.\n')),(0,o.kt)("h2",{id:"4-kusionup-tips"},"4. Kusionup Tips"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5c06\u672c\u5730\u4efb\u4f55 kusion \u7248\u672c\u52a0\u5165\u5230 kusionup \u5207\u6362\u5217\u8868\u4e2d\uff1f")),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5c06\u672c\u5730\u7684\u4efb\u4f55\u4e00\u4e2a\u7248\u672c\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".kusion")," \u76ee\u5f55\u52a0\u5165\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"kusionup")," \u7684\u5207\u6362\u5217\u8868\u4e2d\uff0c\u53ef\u7528\u4e8e\u8c03\u8bd5\uff0c\u4f7f\u7528\u66f4\u52a0\u7075\u6d3b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5047\u8bbe\u672c\u5730\u6709\u4e2a\u8c03\u8bd5\u7248\u672c\u7684 kusion \u653e\u5728 $HOME/.kusion \u76ee\u5f55\u4e2d\n# \u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u540e\u53ef\u4ee5\u5c06\u5b83\u52a0\u5165\u5230 kusionup \u5207\u6362\u5217\u8868\u4e2d\n\n$ mv $HOME/.kusion $HOME/.kusionup/kusion-debug\n\n# \u63a5\u4e0b\u6765\u5c31\u53ef\u4ee5\u901a\u8fc7 kusionup \u5207\u6362\u5230 debug \u7248\u672c\u4e86\n$ kusionup\nUse the arrow keys to navigate: \u2193 \u2191 \u2192 \u2190\n? Select a version:\n    cdn@latest\n  \u25b8 debug\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},".kusionup")," \u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion")," \u76ee\u5f55\u5fc5\u987b\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"kusion-")," \u4e3a\u524d\u7f00\uff0c\u540e\u7f00\u662f\u7248\u672c\u53f7\uff1b"),(0,o.kt)("h2",{id:"5-vs-code-\u63d2\u4ef6"},"5. VS Code \u63d2\u4ef6"),(0,o.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8 IDE \u5f00\u53d1 KCL \u7684\u6548\u7387\uff0cKusion \u4e3a VS Code \u5728\u7ebf\u7248\u548c\u672c\u5730\u7248\u672c\u63d0\u4f9b\u4e86\u63d2\u4ef6\u652f\u6301\u3002\u5728\u7ebf\u7248\u672c\u53ef\u4ee5\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://vscode.dev"},"https://vscode.dev")," \u5730\u5740\u6253\u5f00\uff0c\u7136\u540e\u5b89\u88c5\u201cKCL for vscode.dev \u63d2\u4ef6\u201d\uff0c\u6548\u679c\u5982\u4e0b:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:t(87067).Z,width:"1604",height:"1210"})),(0,o.kt)("p",null,"\u672c\u5730 VS Code \u53ef\u4ee5\u5b89\u88c5\u5b8c\u6574\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=kcl.kcl-vscode-extension"},"KCL \u63d2\u4ef6"),"\uff0c\u63d0\u4f9b\u4e86\u9ad8\u4eae\u3001\u81ea\u52a8\u8865\u5168\uff08\u90e8\u5206\uff1a\u5173\u952e\u5b57\u8865\u5168\u7b49\uff09\u3001\u8df3\u8f6c\u3001\u60ac\u505c\u3001\u5927\u7eb2\u7b49\u529f\u80fd\u3002\u63d2\u4ef6\u867d\u7136\u4e0d\u662f Kusion \u5fc5\u987b\u7684\u90e8\u5206\uff0c\u4f46\u662f\u53ef\u4ee5\u63d0\u9ad8\u6548\u7387\u63a8\u8350\u5b89\u88c5\u3002"))}k.isMDXComponent=!0},87067:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/ide-vscode-4a5d4d1920667701ecb25a8a25b9cbb1.png"}}]);