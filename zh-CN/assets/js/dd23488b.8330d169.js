"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8458],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>s});var o=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),s=l,d=m["".concat(i,".").concat(s)]||m[s]||k[s]||r;return t?o.createElement(d,u(u({ref:n},p),{},{components:t})):o.createElement(d,u({ref:n},p))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,u=new Array(r);u[0]=m;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,u[1]=a;for(var c=2;c<r;c++)u[c]=t[c];return o.createElement.apply(null,u)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>k,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(87462),l=(t(67294),t(3905));const r={sidebar_position:1},u="Docker \u548c Ubuntu \u73af\u5883",a={unversionedId:"develop/build-from-source/docker",id:"develop/build-from-source/docker",title:"Docker \u548c Ubuntu \u73af\u5883",description:"KusionStack \u4e3b\u8981\u5de5\u5177\u4ee5 Rust\u3001Golang \u7b49\u8bed\u8a00\u4e3a\u4e3b\u5f00\u53d1\uff0cKCL \u8bed\u8a00\u901a\u8fc7 Python \u63d0\u4f9b\u4e00\u4e9b\u6269\u5c55\u63d2\u4ef6\uff0c\u540c\u65f6\u8fd8\u9700\u8981\u4f9d\u8d56 Git\u3001Makefile \u7b49\u5de5\u5177\u3002\u4e3a\u4e86\u65b9\u4fbf\u914d\u7f6e\u5f00\u53d1\u73af\u5883\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u57fa\u4e8e ubuntu//github.com/KusionStack/KCLVM/blob/main/Dockerfile \u3002\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u8be5\u81ea\u884c\u6784\u5efa\u955c\u50cf\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 docker pull kusionstack/kclvm-builder-ubuntu \u547d\u4ee4\u62c9\u53d6\u955c\u50cf\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/develop/build-from-source/docker.md",sourceDirName:"develop/build-from-source",slug:"/develop/build-from-source/docker",permalink:"/zh-CN/docs/develop/build-from-source/docker",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/build-from-source/docker.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1684845731,formattedLastUpdatedAt:"2023/5/23",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"develop",previous:{title:"\u6784\u5efa KusionStack",permalink:"/zh-CN/docs/develop/build-from-source/"},next:{title:"Windows/X64 \u73af\u5883",permalink:"/zh-CN/docs/develop/build-from-source/windows"}},i={},c=[{value:"1. \u6784\u5efa KCLVM",id:"1-\u6784\u5efa-kclvm",level:2},{value:"2. \u6784\u5efa kclvm-go \u548c kcl-go",id:"2-\u6784\u5efa-kclvm-go-\u548c-kcl-go",level:2},{value:"3. \u6784\u5efa Kusion \u547d\u4ee4",id:"3-\u6784\u5efa-kusion-\u547d\u4ee4",level:2},{value:"4. KCLOpenapi",id:"4-kclopenapi",level:2},{value:"5. \u5176\u5b83",id:"5-\u5176\u5b83",level:2}],p={toc:c};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"docker-\u548c-ubuntu-\u73af\u5883"},"Docker \u548c Ubuntu \u73af\u5883"),(0,l.kt)("p",null,"KusionStack \u4e3b\u8981\u5de5\u5177\u4ee5 Rust\u3001Golang \u7b49\u8bed\u8a00\u4e3a\u4e3b\u5f00\u53d1\uff0cKCL \u8bed\u8a00\u901a\u8fc7 Python \u63d0\u4f9b\u4e00\u4e9b\u6269\u5c55\u63d2\u4ef6\uff0c\u540c\u65f6\u8fd8\u9700\u8981\u4f9d\u8d56 Git\u3001Makefile \u7b49\u5de5\u5177\u3002\u4e3a\u4e86\u65b9\u4fbf\u914d\u7f6e\u5f00\u53d1\u73af\u5883\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u57fa\u4e8e ubuntu:20.04 \u7684 Dockerfile \u914d\u7f6e\u6587\u4ef6\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM/blob/main/Dockerfile"},"https://github.com/KusionStack/KCLVM/blob/main/Dockerfile")," \u3002\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u8be5\u81ea\u884c\u6784\u5efa\u955c\u50cf\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"docker pull kusionstack/kclvm-builder-ubuntu")," \u547d\u4ee4\u62c9\u53d6\u955c\u50cf\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u672c\u5730\u7684 Ubuntu \u73af\u5883\uff0c\u53ef\u4ee5\u53c2\u8003 Dockerfile \u6587\u4ef6\u7684\u547d\u4ee4\u5b89\u88c5\u4f9d\u8d56\u73af\u5883\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u672c\u5730\u9664\u4e86 Docker \u4e4b\u5916\uff0c\u8fd8\u9700\u8981\u6709 Bash \u548c GMake \u7b49\u5de5\u5177"),(0,l.kt)("li",{parentName:"ol"},"macOS m1 \u7cfb\u7edf\u5bf9 Docker \u7684\u652f\u6301\u8fd8\u6709\u5f85\u5b8c\u5584\uff0c\u6784\u5efa\u65f6\u53ef\u80fd\u9047\u5230\u963b\u585e\u7b49\u95ee\u9898")),(0,l.kt)("h2",{id:"1-\u6784\u5efa-kclvm"},"1. \u6784\u5efa KCLVM"),(0,l.kt)("p",null,"KCLVM \u662f Kusion \u4e2d KCL \u914d\u7f6e\u8bed\u8a00\u7684\u5b9e\u73b0\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u514b\u9686 KCLVM \u4ee3\u7801\u5230\u4e00\u4e2a\u65b0\u7684\u76ee\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git clone git@github.com:KusionStack/KCLVM.git\n")),(0,l.kt)("p",null,"\u7136\u540e\u5728\u547d\u4ee4\u884c\u73af\u5883\u5207\u6362\u5230 KCLVM \u4ee3\u7801\u6839\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ make sh-in-docker\nroot@ubuntu:~/kclvm# pwd\n/root/kclvm\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u547d\u4ee4\u4f1a\u5c06\u5bbf\u4e3b\u673a\u5668\u5f53\u524d\u7684 KCLVM \u76ee\u5f55\u6620\u5c04\u5230\u5bb9\u5668\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"/root/kclvm")," \u76ee\u5f55\uff0c\u540c\u65f6\u8fdb\u5165 Bash \u73af\u5883\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"run.sh")," \u811a\u672c\u6784\u5efa CPython\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~/kclvm# ./run.sh \n1) build          3) build-kclvm    5) test           7) lint-check     9) release-arm64\n2) build-cpython  4) update-kclvm   6) format         8) release\nPlease select the action: 2\n...\n")),(0,l.kt)("p",null,"\u9009\u62e9 2 \u8fdb\u884c CPython \u6784\u5efa\uff0c\u6784\u5efa\u65f6\u95f4\u51e0\u5341\u5206\u949f\u4e0d\u7b49\u3002\u6784\u5efa\u7684\u7ed3\u679c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/root/kclvm/_build/dist/ubuntu/cpython")," \u76ee\u5f55\uff0cCPython \u53ea\u9700\u8981\u6784\u5efa\u4e00\u6b21\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u662f\u6784\u5efa KCLVM \u7684 Python \u548c Rust \u7248\u672c\uff0c\u540c\u65f6\u5b89\u88c5\u4f9d\u8d56\u7684\u5305\uff08\u5305\u62ec\u4f9d\u8d56\u7684\u63d2\u4ef6\u7b49\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~/kclvm# ./run.sh \n1) build          3) build-kclvm    5) test           7) lint-check     9) release-arm64\n2) build-cpython  4) update-kclvm   6) format         8) release\nPlease select the action: 3\n...\n")),(0,l.kt)("p",null,"\u6784\u5efa\u7ed3\u679c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/root/kclvm/_build/dist/ubuntu/kclvm")," \u76ee\u5f55\uff0c\u5176\u4e2d\u63d2\u4ef6\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"plugins")," \u5b50\u76ee\u5f55\uff0c\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"bin")," \u5b50\u76ee\u5f55\u3002\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"/root/kclvm/_build/dist/ubuntu/kclvm/bin")," \u76ee\u5f55\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," \u73af\u5883\u53d8\u91cf\uff0c\u7136\u540e\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"which kcl")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl -h")," \u6d4b\u8bd5 KCL \u547d\u4ee4\u884c\u3002"),(0,l.kt)("p",null,"\u7136\u540e\u7f16\u8bd1\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"/root/kclvm/hello.k")," \u914d\u7f6e\u7a0b\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~/kclvm# kcl hello.k\nname: kcl\nage: 1\ntwo: 2\nx0:\n  name: kcl\n  age: 1\nx1:\n  name: kcl\n  age: 101\n")),(0,l.kt)("p",null,"\u4e00\u5207\u6b63\u5e38\u5c31\u8bf4\u660e\u6784\u5efa\u6210\u529f\u4e86\u3002"),(0,l.kt)("h2",{id:"2-\u6784\u5efa-kclvm-go-\u548c-kcl-go"},"2. \u6784\u5efa kclvm-go \u548c kcl-go"),(0,l.kt)("p",null,"kclvm-go \u662f\u57fa\u4e8e KCLVM \u547d\u4ee4\u5305\u88c5\u7684 Go \u8bed\u8a00 SDK\uff0c\u4e0a\u5c42\u7684 Kusion \u547d\u4ee4\u4e5f\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"kclvm-go")," \u4f7f\u7528 KCLVM \u7684\u529f\u80fd\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"kcl-go")," \u662f\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"kclvm-go")," SDK\uff0c\u91c7\u7528 Go \u8bed\u8a00\u5b9e\u73b0\u4e86\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u5176\u4e2d\u5305\u542b KCL \u8bed\u8a00\u7684 Playground \u548c\u5355\u5143\u6d4b\u8bd5\u7b49\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u5728 Docker \u955c\u50cf\u4e2d\u5df2\u7ecf\u5b89\u88c5\u4e86 Go \u7248\u672c\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~/kclvm# go version\ngo version go1.16.3 linux/amd64\n")),(0,l.kt)("p",null,"\u514b\u9686 ",(0,l.kt)("inlineCode",{parentName:"p"},"kclvm-go")," \u4ed3\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~/kclvm# cd\nroot@ubuntu:~# git clone git@github.com:KusionStack/kclvm-go.git\n")),(0,l.kt)("p",null,"\u7136\u540e\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kclvm-go/examples/hello/main.go"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~# cd kclvm-go\nroot@ubuntu:~/kclvm-go# go run ./examples/hello\nage: 1\nname: kcl\ntwo: 2\nx0:\n    age: 1\n    name: kcl\nx1:\n    age: 101\n    name: kcl\n")),(0,l.kt)("p",null,"\u6d4b\u8bd5\u7a0b\u5e8f\u6b63\u5e38\u8fd0\u884c\u8bf4\u660e ",(0,l.kt)("inlineCode",{parentName:"p"},"kclvm-go")," \u7684\u6784\u5efa\u5df2\u7ecf\u6210\u529f\u4e86\u3002\u73b0\u5728\u53ef\u4ee5\u6267\u884c\u66f4\u590d\u6742\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl-go")," \u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~/kclvm-go# go run ./cmds/kcl-go\nNAME:\n   kcl-go - K Configuration Language Virtual Machine\n\nUSAGE:\n   kcl-go\n   kcl-go [global options] command [command options] [arguments...]\n\n   kcl-go kcl -h\n   kcl-go -h\n...\n")),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"kcl-go")," \u547d\u4ee4\u884c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kclvm-go/hello.k"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~/kclvm-go# go run ./cmds/kcl-go run hello.k\nage: 1\nname: kcl\ntwo: 2\nx0:\n    age: 1\n    name: kcl\nx1:\n    age: 101\n    name: kcl\n")),(0,l.kt)("p",null,"\u6216\u8005\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"go run ./cmds/kcl-go play")," \u542f\u52a8 Playground \u670d\u52a1\uff0c\u7136\u540e\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:2021"},"http://127.0.0.1:2021")," \u9875\u9762\u6d4b\u8bd5\u3002"),(0,l.kt)("h2",{id:"3-\u6784\u5efa-kusion-\u547d\u4ee4"},"3. \u6784\u5efa Kusion \u547d\u4ee4"),(0,l.kt)("p",null,"Kusion \u662f\u66f4\u4e0a\u5c42\u7684\u5de5\u5177\u96c6\u5408\uff0c\u5176\u6838\u5fc3\u547d\u4ee4\u662f\u91c7\u7528 Go \u8bed\u8a00\u5b9e\u73b0\uff0c\u5e95\u5c42\u548c KCLVM \u7684\u4ea4\u4e92\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"kclvm-go")," \u5305\u5b8c\u6210\u3002"),(0,l.kt)("p",null,"\u514b\u9686 Kusion \u4ed3\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~/kclvm# cd\nroot@ubuntu:~# git clone git@github.com:KusionStack/kusion.git\n")),(0,l.kt)("p",null,"\u7136\u540e\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"kusion/cmds/kusionctl")," \u7a0b\u5e8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"root@ubuntu:~/kusion# go run ./cmd/kusionctl\nkusion \u4f5c\u4e3a\u4e91\u539f\u751f\u53ef\u7f16\u7a0b\u6280\u672f\u6808\uff0c\u901a\u8fc7\u4ee3\u7801\u7ba1\u7406 kubernetes \u96c6\u7fa4\u3002\n...\n")),(0,l.kt)("p",null,"\u6b63\u5e38\u60c5\u51b5\u53ef\u4ee5\u770b\u5230 kusion \u547d\u4ee4\u7684\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"4-kclopenapi"},"4. KCLOpenapi"),(0,l.kt)("p",null,"KCLOpenapi \u662f KCL \u8bed\u8a00\u7248\u672c\u7684 OpenAPI \u5de5\u5177\uff0c\u5b8c\u6574\u91c7\u7528 Go \u8bed\u8a00\u5b9e\u73b0\u3002\u56e0\u6b64\u53ef\u4ee5\u5728\u4efb\u4f55\u4e00\u4e2a\u5b89\u88c5\u4e86 Go 1.16+ \u7684\u73af\u5883\u7f16\u8bd1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git clone git@github.com:KusionStack/kcl-openapi.git\n$ cd kcl-openapi\n$ go run ./cmd/swagger -h\nUsage:\n  swagger [OPTIONS] <generate | validate>\n\nSwagger tries to support you as best as possible when building APIs.\n\nIt aims to represent the contract of your API with a language agnostic\ndescription of your application in json or yaml.\n...\n")),(0,l.kt)("p",null,"\u6b63\u5e38\u53ef\u4ee5\u770b\u5230\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"5-\u5176\u5b83"},"5. \u5176\u5b83"),(0,l.kt)("p",null,"KCLVM\u3001KusionCtl \u662f\u672c\u5730\u5f00\u53d1\u9700\u8981\u7ecf\u5e38\u6784\u5efa\u7684\u4ed3\u5e93\uff0c\u76ee\u524d\u56e0\u4e3a\u5f00\u53d1\u8d44\u6e90\u548c\u65f6\u95f4\u7684\u539f\u56e0\u5bfc\u81f4\u5f00\u53d1\u6587\u6863\u8fd8\u4e0d\u591f\u5b8c\u5584\uff0c\u5e0c\u671b\u793e\u533a\u540c\u5b66\u591a\u591a\u53cd\u9988\u5171\u540c\u53c2\u4e0e\u5b8c\u5584\u3002\u6b64\u5916\u8fd8\u6709 VSCode \u63d2\u4ef6\u7b49\u5916\u56f4\u5de5\u5177\u7684\u6784\u5efa\uff0c\u7528\u6237\u53ef\u4ee5\u53c2\u8003\u4ed3\u5e93\u5185\u90e8\u5b9e\u73b0\u4ee3\u7801\u548c\u6587\u6863\u64cd\u4f5c\u3002"))}k.isMDXComponent=!0}}]);