"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=u(n),s=o,d=m["".concat(p,".").concat(s)]||m[s]||k[s]||i;return n?l.createElement(d,a(a({ref:t},c),{},{components:n})):l.createElement(d,a({ref:t},c))}));function s(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var u=2;u<i;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>k,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var l=n(87462),o=(n(67294),n(3905));const i={sidebar_position:4},a="Windows/X64",r={unversionedId:"develop/build-from-source/windows",id:"develop/build-from-source/windows",title:"Windows/X64",description:"Windows \u662f\u6700\u6d41\u884c\u7684\u684c\u9762\u7cfb\u7edf\uff0c\u6709\u7740\u5e9e\u5927\u7684\u7528\u6237\u7fa4\u4f53\uff0c\u4f46\u662f\u9ed8\u8ba4\u7f3a\u5c11\u5b8c\u6574\u7684\u5f00\u53d1\u73af\u5883\u3002\u5982\u679c\u9700\u8981\u5728 Windows \u4e0b\u6784\u5efa KusionStack \u5de5\u5177\uff0c\u9996\u5148\u9700\u8981\u5b89\u88c5\u5f00\u53d1\u73af\u5883\u3002",source:"@site/docs/develop/build-from-source/windows.md",sourceDirName:"develop/build-from-source",slug:"/develop/build-from-source/windows",permalink:"/docs/develop/build-from-source/windows",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/build-from-source/windows.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1664259847,formattedLastUpdatedAt:"9/27/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"develop",previous:{title:"Docker & Ubuntu",permalink:"/docs/develop/build-from-source/docker"},next:{title:"Design and Implementation",permalink:"/docs/develop/design/"}},p={},u=[{value:"1. \u6784\u5efa KCLVM",id:"1-\u6784\u5efa-kclvm",level:2},{value:"2. \u6784\u5efa kclvm-go \u548c kcl-go",id:"2-\u6784\u5efa-kclvm-go-\u548c-kcl-go",level:2},{value:"3. \u6784\u5efa Kusion \u547d\u4ee4",id:"3-\u6784\u5efa-kusion-\u547d\u4ee4",level:2},{value:"4. KCLOpenapi",id:"4-kclopenapi",level:2},{value:"5. \u5176\u5b83",id:"5-\u5176\u5b83",level:2}],c={toc:u};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windowsx64"},"Windows/X64"),(0,o.kt)("p",null,"Windows \u662f\u6700\u6d41\u884c\u7684\u684c\u9762\u7cfb\u7edf\uff0c\u6709\u7740\u5e9e\u5927\u7684\u7528\u6237\u7fa4\u4f53\uff0c\u4f46\u662f\u9ed8\u8ba4\u7f3a\u5c11\u5b8c\u6574\u7684\u5f00\u53d1\u73af\u5883\u3002\u5982\u679c\u9700\u8981\u5728 Windows \u4e0b\u6784\u5efa KusionStack \u5de5\u5177\uff0c\u9996\u5148\u9700\u8981\u5b89\u88c5\u5f00\u53d1\u73af\u5883\u3002"),(0,o.kt)("p",null,"\u5047\u8bbe\u662f Windows/X64 \u73af\u5883\uff0c\u9996\u5148\u5b89\u88c5\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 VC2019\uff0c\u786e\u4fdd\uff0c\u9ed8\u8ba4\u7684 C++ \u5de5\u5177\u90fd\u5df2\u7ecf\u5b89\u88c5\u597d",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/zh-hans/downloads/"},"https://visualstudio.microsoft.com/zh-hans/downloads/")))),(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Rust \u548c cargo",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://forge.rust-lang.org/infra/other-installation-methods.html"},"https://forge.rust-lang.org/infra/other-installation-methods.html")),(0,o.kt)("li",{parentName:"ul"},"\u5b89\u88c5 x86_64-pc-windows-msvc \u7248\u672c\uff0c\u914d\u5957 MSVC \u7f16\u8bd1\u5668\uff08\u5f85\u786e\u8ba4\uff09"))),(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Go1.16+\uff0c\u5fc5\u8981\u65f6\u53ef\u4ee5\u6839\u636e\u7f51\u7edc\u73af\u5883\u914d\u7f6e\u4ee3\u7406\u670d\u52a1",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"https://go.dev/dl/")))),(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 TDM-GCC-x64 \u5de5\u5177",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://jmeubank.github.io/tdm-gcc/download/"},"https://jmeubank.github.io/tdm-gcc/download/")))),(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 LLVM-12.0.1-win64",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/PLC-lang/llvm-package-windows/releases/tag/v12.0.1"},"https://github.com/PLC-lang/llvm-package-windows/releases/tag/v12.0.1")),(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"LLVM_SYS_120_PREFIX")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"LLVM_SYS_70_PREFIX")," \u73af\u5883\u53d8\u91cf\u4e3a\u5b89\u88c5\u7684\u76ee\u5f55"))),(0,o.kt)("li",{parentName:"ol"},"\u6253\u5f00 VS2019-x64 \u547d\u4ee4\u884c")),(0,o.kt)("h2",{id:"1-\u6784\u5efa-kclvm"},"1. \u6784\u5efa KCLVM"),(0,o.kt)("p",null,"KCLVM \u662f Kusion \u4e2d KCL \u914d\u7f6e\u8bed\u8a00\u7684\u5b9e\u73b0\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u514b\u9686 KCLVM \u4ee3\u7801\u5230\u4e00\u4e2a\u65b0\u7684\u76ee\u5f55\uff0c\u5730\u5740\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"git@github.com:KusionStack/KCLVM.git"),"\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u5728 VS2019-x64 \u547d\u4ee4\u884c\u73af\u5883\u5207\u6362\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"KCLVM")," \u76ee\u5f55\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo build")," \u6d4b\u8bd5 Rust \u7b49\u73af\u5883\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u5728 VS2019-x64 \u547d\u4ee4\u884c\u73af\u5883\u5207\u6362\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},".\\Scripts\\build-windows")," \u76ee\u5f55\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"build.bat")," \u6279\u5904\u7406\u811a\u672c\u8fdb\u884c\u6784\u5efa\u3002\u8f93\u51fa\u7684\u6587\u4ef6\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},".\\Scripts\\build-windows\\_output\\kclvm-windows")," \u76ee\u5f55\u3002"),(0,o.kt)("p",null,"\u6784\u5efa\u6210\u529f\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6d4b\u8bd5 KCL \u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"_output\\kclvm-windows\\kclvm.exe -m kclvm ..\\..\\hello.k\n_output\\kclvm-windows\\kcl-go.exe run     ..\\..\\hello.k\n_output\\kclvm-windows\\kcl.exe            ..\\..\\hello.k\n")),(0,o.kt)("p",null,"\u4e00\u5207\u6b63\u5e38\u5c31\u8bf4\u660e\u6784\u5efa\u6210\u529f\u4e86\u3002"),(0,o.kt)("h2",{id:"2-\u6784\u5efa-kclvm-go-\u548c-kcl-go"},"2. \u6784\u5efa kclvm-go \u548c kcl-go"),(0,o.kt)("p",null,"kclvm-go \u662f\u57fa\u4e8e KCLVM \u547d\u4ee4\u5305\u88c5\u7684 Go \u8bed\u8a00 SDK\uff0c\u4e0a\u5c42\u7684 Kusion \u547d\u4ee4\u4e5f\u662f\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"kclvm-go")," \u4f7f\u7528 KCLVM \u7684\u529f\u80fd\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"kcl-go")," \u662f\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"kclvm-go")," SDK\uff0c\u91c7\u7528 Go \u8bed\u8a00\u5b9e\u73b0\u4e86\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5176\u4e2d\u5305\u542b KCL \u8bed\u8a00\u7684 Playground \u548c\u5355\u5143\u6d4b\u8bd5\u7b49\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u9996\u5148\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"kclvm.exe")," \u547d\u4ee4\u6240\u5728\u76ee\u5f55\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," \u73af\u5883\u53d8\u91cf\uff0c\u7136\u540e\u91cd\u65b0\u767b\u9646\u7cfb\u7edf\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"where kclvm")," \u547d\u4ee4\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u627e\u5230 kclvm \u547d\u4ee4\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u514b\u9686 kclvm-go \u4ed3\u5e93\uff0c\u5730\u5740\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"git@github.com:KusionStack/kclvm-go.git"),"\u3002\u7136\u540e\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"kclvm-go")," \u547d\u4ee4\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"go run ./examples/hello")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"go run ./cmds/kcl-go"))),(0,o.kt)("p",null,"\u6d4b\u8bd5\u7a0b\u5e8f\u6b63\u5e38\u8fd0\u884c\u8bf4\u660e ",(0,o.kt)("inlineCode",{parentName:"p"},"kclvm-go")," \u7684\u6784\u5efa\u5df2\u7ecf\u6210\u529f\u4e86\u3002"),(0,o.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"go run ./cmds/kcl-go run hello.k")," \u547d\u4ee4\u884c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"kclvm-go/hello.k"),"\uff0c\u8f93\u51fa\u4ee5\u4e0b\u7ed3\u679c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"age: 1\nname: kcl\ntwo: 2\nx0:\n    age: 1\n    name: kcl\nx1:\n    age: 101\n    name: kcl\n")),(0,o.kt)("p",null,"\u6216\u8005\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"go run ./cmds/kcl-go play")," \u542f\u52a8 Playground \u670d\u52a1\uff0c\u7136\u540e\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:2021"},"http://127.0.0.1:2021")," \u9875\u9762\u6d4b\u8bd5\u3002"),(0,o.kt)("h2",{id:"3-\u6784\u5efa-kusion-\u547d\u4ee4"},"3. \u6784\u5efa Kusion \u547d\u4ee4"),(0,o.kt)("p",null,"Kusion \u662f\u66f4\u4e0a\u5c42\u7684\u5de5\u5177\u96c6\u5408\uff0c\u5176\u6838\u5fc3\u547d\u4ee4\u662f\u91c7\u7528 Go \u8bed\u8a00\u5b9e\u73b0\uff0c\u5e95\u5c42\u548c KCLVM \u7684\u4ea4\u4e92\u662f\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"kclvm-go")," \u5305\u5b8c\u6210\u3002"),(0,o.kt)("p",null,"\u514b\u9686 Kusion \u4ed3\u5e93\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"git@github.com:KusionStack/kusion.git")),(0,o.kt)("p",null,"\u7136\u540e\u8fdb\u5165 kusion \u76ee\u5f55\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"go run ./cmd/kusionctl")," \u547d\u4ee4\u3002\u6b63\u5e38\u60c5\u51b5\u53ef\u4ee5\u770b\u5230 kusion \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"4-kclopenapi"},"4. KCLOpenapi"),(0,o.kt)("p",null,"KCLOpenapi \u662f KCL \u8bed\u8a00\u7248\u672c\u7684 OpenAPI \u5de5\u5177\uff0c\u4ed3\u5e93\u5730\u5740\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"git@github.com:aKusionStack/kcl-openapi.git"),"\u3002"),(0,o.kt)("p",null,"KCLOpenapi \u662f\u7eaf Go \u8bed\u8a00\u5b9e\u73b0\u7684\u5de5\u5177\uff0c\u6309\u7167\u6b63\u5e38\u7684 Go \u7a0b\u5e8f\u6784\u5efa\u6d41\u884c\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"go run ./cmd/swagger -h")," \u67e5\u770b\u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"5-\u5176\u5b83"},"5. \u5176\u5b83"),(0,o.kt)("p",null,"KCLVM\u3001KusionCtl \u662f\u672c\u5730\u5f00\u53d1\u9700\u8981\u7ecf\u5e38\u6784\u5efa\u7684\u4ed3\u5e93\uff0c\u76ee\u524d\u56e0\u4e3a\u5f00\u53d1\u8d44\u6e90\u548c\u65f6\u95f4\u7684\u539f\u56e0\u5bfc\u81f4\u5f00\u53d1\u6587\u6863\u8fd8\u4e0d\u591f\u5b8c\u5584\uff0c\u5e0c\u671b\u793e\u533a\u540c\u5b66\u591a\u591a\u53cd\u9988\u5171\u540c\u53c2\u4e0e\u5b8c\u5584\u3002\u6b64\u5916\u8fd8\u6709 VSCode \u63d2\u4ef6\u7b49\u5916\u56f4\u5de5\u5177\u7684\u6784\u5efa\uff0c\u7528\u6237\u53ef\u4ee5\u53c2\u8003\u4ed3\u5e93\u5185\u90e8\u5b9e\u73b0\u4ee3\u7801\u548c\u6587\u6863\u64cd\u4f5c\u3002"))}k.isMDXComponent=!0}}]);