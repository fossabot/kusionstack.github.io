"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61628],{3905:(e,t,l)=>{l.d(t,{Zo:()=>k,kt:()=>c});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},k=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=p(l),c=r,d=m["".concat(o,".").concat(c)]||m[c]||s[c]||a;return l?n.createElement(d,u(u({ref:t},k),{},{components:l})):n.createElement(d,u({ref:t},k))}));function c(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,u=new Array(a);u[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var p=2;p<a;p++)u[p]=l[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},89440:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=l(87462),r=(l(67294),l(3905));const a={title:"\u4ee3\u7801\u8d21\u732e\u6307\u5357"},u=void 0,i={unversionedId:"developer-guide/contribution-guide/code-contribute",id:"developer-guide/contribution-guide/code-contribute",title:"\u4ee3\u7801\u8d21\u732e\u6307\u5357",description:"\u5728\u672c\u4ee3\u7801\u8d21\u732e\u6307\u5357\uff0c\u4f60\u5c06\u4f1a\u4e86\u89e3\u4e0b\u5217\u5185\u5bb9\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/current/4-developer-guide/1-contribution-guide/2-code-contribute.md",sourceDirName:"4-developer-guide/1-contribution-guide",slug:"/developer-guide/contribution-guide/code-contribute",permalink:"/zh/karpor/next/developer-guide/contribution-guide/code-contribute",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/4-developer-guide/1-contribution-guide/2-code-contribute.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1720065334,formattedLastUpdatedAt:"2024\u5e747\u67084\u65e5",sidebarPosition:2,frontMatter:{title:"\u4ee3\u7801\u8d21\u732e\u6307\u5357"},sidebar:"karpor",previous:{title:"\u975e\u4ee3\u7801\u8d21\u732e\u6307\u5357",permalink:"/zh/karpor/next/developer-guide/contribution-guide/non-code-contribute"},next:{title:"\u89d2\u8272",permalink:"/zh/karpor/next/developer-guide/contribution-guide/roles"}},o={},p=[{value:"\u5982\u4f55\u5728\u672c\u5730\u8fd0\u884c Karpor",id:"\u5982\u4f55\u5728\u672c\u5730\u8fd0\u884c-karpor",level:2},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:3},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3},{value:"\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09",id:"\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42pull-request",level:2},{value:"\u5728\u4f60\u5f00\u59cb\u4e4b\u524d",id:"\u5728\u4f60\u5f00\u59cb\u4e4b\u524d",level:3},{value:"\u4f60\u7684\u7b2c\u4e00\u4e2a Pull Request",id:"\u4f60\u7684\u7b2c\u4e00\u4e2a-pull-request",level:3},{value:"\u4ee3\u7801\u5ba1\u67e5",id:"\u4ee3\u7801\u5ba1\u67e5",level:2},{value:"Pull request \u683c\u5f0f\u6307\u5357",id:"pull-request-\u683c\u5f0f\u6307\u5357",level:2},{value:"Commit \u4fe1\u606f\u683c\u5f0f",id:"commit-\u4fe1\u606f\u683c\u5f0f",level:3},{value:"Pull Request \u6807\u9898",id:"pull-request-\u6807\u9898",level:3},{value:"\u901a\u8fc7\u6240\u6709 CI \u68c0\u67e5",id:"\u901a\u8fc7\u6240\u6709-ci-\u68c0\u67e5",level:3},{value:"\u66f4\u65b0\u6587\u6863\u548c\u7f51\u7ad9",id:"\u66f4\u65b0\u6587\u6863\u548c\u7f51\u7ad9",level:2}],k={toc:p};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u672c\u4ee3\u7801\u8d21\u732e\u6307\u5357\uff0c\u4f60\u5c06\u4f1a\u4e86\u89e3\u4e0b\u5217\u5185\u5bb9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%A6%82%E4%BD%95%E5%9C%A8%E6%9C%AC%E5%9C%B0%E8%BF%90%E8%A1%8C-karpor"},"\u5982\u4f55\u5728\u672c\u5730\u8fd0\u884c Karpor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%88%9B%E5%BB%BA%E6%8B%89%E5%8F%96%E8%AF%B7%E6%B1%82pull-request"},"\u5982\u4f55\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42\uff08pull request\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E4%BB%A3%E7%A0%81%E5%AE%A1%E6%9F%A5"},"\u4ee3\u7801\u5ba1\u67e5\u6307\u5bfc\u89c4\u5219")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#pull-request-%E6%A0%BC%E5%BC%8F%E6%8C%87%E5%8D%97"},"Pull request \u683c\u5f0f\u6307\u5357")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%9B%B4%E6%96%B0%E6%96%87%E6%A1%A3%E5%92%8C%E7%BD%91%E7%AB%99"},"\u66f4\u65b0\u6587\u6863\u548c\u7f51\u7ad9"))),(0,r.kt)("h2",{id:"\u5982\u4f55\u5728\u672c\u5730\u8fd0\u884c-karpor"},"\u5982\u4f55\u5728\u672c\u5730\u8fd0\u884c Karpor"),(0,r.kt)("p",null,"\u672c\u6307\u5357\u5c06\u4f1a\u5e2e\u52a9\u4f60\u5f00\u59cb Karpor \u5f00\u53d1\u3002"),(0,r.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Golang \u7248\u672c 1.19+")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u5b89\u88c5 Golang"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4ece ",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"\u5b98\u65b9\u7f51\u7ad9")," \u5b89\u88c5 golang 1.19+\u3002\u89e3\u538b\u4e8c\u8fdb\u5236\u6587\u4ef6\u5e76\u653e\u7f6e\u5230\u67d0\u4e2a\u4f4d\u7f6e\uff0c\u5047\u8bbe\u8be5\u4f4d\u7f6e\u662f home \u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/go/"),"\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u547d\u4ee4\uff0c\u4f60\u5e94\u5f53\u9009\u62e9\u9002\u5408\u4f60\u7cfb\u7edf\u7684\u6b63\u786e\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://go.dev/dl/go1.20.2.linux-amd64.tar.gz\ntar xzf go1.20.2.linux-amd64.tar.gz\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u7ef4\u62a4\u591a\u4e2a golang \u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u4e0b\u8f7d\u5305\u5e76\u89e3\u538b\u5230\u67d0\u4e2a\u4f4d\u7f6e\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/go/go1.19.1"),"\uff0c\u7136\u540e\u6839\u636e\u4e0b\u9762\u7684\u547d\u4ee4\u76f8\u5e94\u5730\u6539\u53d8\u8def\u5f84\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e3a Golang \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export PATH=~/go/bin/:$PATH\nexport GOROOT=~/go/\nexport GOPATH=~/gopath/\n")),(0,r.kt)("p",null,"\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"p"},"gopath")," \u76ee\u5f55\u4e0d\u5b58\u5728\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdir ~/gopath")," \u521b\u5efa\u3002\u8fd9\u4e9b\u547d\u4ee4\u5c06\u4f1a\u628a go \u4e8c\u8fdb\u5236\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," \u73af\u5883\u53d8\u91cf (\u8ba9\u5176\u6210\u4e3a go \u547d\u4ee4\u7684\u4f18\u5148\u9009\u62e9\uff09\u5e76\u4e14\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"GOROOT")," \u73af\u5883\u5230\u8be5 go \u76ee\u5f55\u3002\u5982\u679c\u5c06\u8fd9\u4e9b\u884c\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," \u6587\u4ef6\uff0c\u4f60\u5c31\u4e0d\u7528\u6bcf\u6b21\u6253\u5f00\u65b0\u7684\u7ec8\u7aef\u65f6\u8bbe\u7f6e\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"(\u53ef\u9009) \u5728\u4e00\u4e9b\u5730\u533a\uff0c\u4f8b\u5982\u4e2d\u56fd\u5927\u9646\uff0c\u8fde\u63a5\u5230\u9ed8\u8ba4\u7684 go \u4ed3\u5e93\u53ef\u80fd\u4f1a\u5f88\u6162\uff1b\u4f60\u53ef\u4ee5\u914d\u7f6e GOPROXY \u6765\u52a0\u901f\u4e0b\u8f7d\u8fc7\u7a0b\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go env -w GOPROXY=https://goproxy.cn,direct\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes \u7248\u672c v1.20+ \uff0c\u4e14\u914d\u7f6e\u6587\u4ef6\u4fdd\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.kube/config"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"golangci-lint \u7248\u672c v1.52.2+\uff0c \u901a\u8fc7\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"make lint")," \u53ef\u4ee5\u81ea\u52a8\u5b89\u88c5\uff0c\u5982\u679c\u81ea\u52a8\u5b89\u88c5\u5931\u8d25\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u3002")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u624b\u52a8\u5b89\u88c5 golangci-lint"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e ",(0,r.kt)("a",{parentName:"p",href:"https://golangci-lint.run/welcome/install"},"\u5b89\u88c5\u6307\u5357"),"\u624b\u52a8\u5b89\u88c5\uff0c\u6216\u8005\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~/go/ && curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s v1.52.2\n"))),(0,r.kt)("h3",{id:"\u6784\u5efa"},"\u6784\u5efa"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u514b\u9686\u9879\u76ee")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/karpor.git\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u6784\u5efa")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"make build-all")," \u5c06\u4f1a\u4e3a\u6240\u6709\u5e73\u53f0\u521b\u5efa\u53ef\u6267\u884c\u6587\u4ef6\uff1b\u5982\u679c\u4f60\u53ea\u60f3\u4e3a\u7279\u5b9a\u5e73\u53f0\u6784\u5efa\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"make build-${PlatformName}"),"\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"make build-darwin"),"\u3002\u67e5\u770b\u6240\u6709\u53ef\u7528\u547d\u4ee4\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"make help"),"\u3002"),(0,r.kt)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u4ee3\u7801\u8d28\u91cf\uff0c\u7f16\u5199\u6d4b\u8bd5\u4ee3\u7801\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6267\u884c\u5355\u5143\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make test\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u751f\u6210\u989d\u5916\u7684\u8986\u76d6\u7387\u62a5\u544a\uff0c\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make cover\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u6267\u884c\u4e0b\u5217\u547d\u4ee4\uff0c\u6765\u4ece\u6d4f\u89c8\u5668\u4e2d\u9605\u8bfb\u6d4b\u8bd5\u8986\u76d6\u7387\u62a5\u544a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make cover-html\n")),(0,r.kt)("h2",{id:"\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42pull-request"},"\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42\uff08Pull Request\uff09"),(0,r.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u4f60\u8003\u8651\u4e3a Karpor \u9879\u76ee\u4f5c\u51fa\u8d21\u732e\uff01"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u5c06\u4f1a\u6307\u5bfc\u4f60\u5b8c\u6210 ",(0,r.kt)("a",{parentName:"p",href:"/zh/karpor/next/developer-guide/contribution-guide/#contribute-a-pull-request"},"\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42")," \u7684\u8fc7\u7a0b\u3002"),(0,r.kt)("h3",{id:"\u5728\u4f60\u5f00\u59cb\u4e4b\u524d"},"\u5728\u4f60\u5f00\u59cb\u4e4b\u524d"),(0,r.kt)("p",null,"\u6211\u4eec\u77e5\u9053\u4f60\u5bf9\u4e8e\u521b\u5efa\u7b2c\u4e00\u4e2a pull request \u975e\u5e38\u5174\u594b\u3002\u5728\u6211\u4eec\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u7684\u4ee3\u7801\u7b26\u5408\u76f8\u5173\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/zh/karpor/next/developer-guide/conventions/code-conventions"},"\u4ee3\u7801\u89c4\u7ea6"),"\u3002"),(0,r.kt)("h3",{id:"\u4f60\u7684\u7b2c\u4e00\u4e2a-pull-request"},"\u4f60\u7684\u7b2c\u4e00\u4e2a Pull Request"),(0,r.kt)("p",null,"\u5728\u63d0\u4ea4\u4f60\u7684 PR \u4e4b\u524d\uff0c\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u5e76\u786e\u4fdd\u5b83\u4eec\u90fd\u6210\u529f\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make test\nmake lint\n")),(0,r.kt)("p",null,"\u5982\u679c\u8fd9\u662f\u4f60\u7b2c\u4e00\u6b21\u5411 Github \u4e0a\u7684\u5f00\u6e90\u9879\u76ee\u8d21\u732e\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u9605\u8bfb\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"\u521b\u5efa\u62c9\u53d6\u8bf7\u6c42"),"\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u4f60\u7684 pull request \u88ab\u63a5\u53d7\u7684\u673a\u4f1a\uff0c\u8bf7\u786e\u4fdd\u4f60\u7684 pull rquest \u7b26\u5408\u4ee5\u4e0b\u6307\u5bfc\u89c4\u5219\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6807\u9898\u548c\u63cf\u8ff0\u4e0e\u5b9e\u73b0\u76f8\u7b26\u3002"),(0,r.kt)("li",{parentName:"ul"},"pull request \u4e2d\u7684\u6240\u6709 commit \u90fd\u7b26\u5408 ",(0,r.kt)("a",{parentName:"li",href:"#Formatting-guidelines"},"\u683c\u5f0f\u6307\u5357"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"pull request \u4f1a\u5173\u95ed\u4e00\u4e2a\u76f8\u5173 issue\u3002"),(0,r.kt)("li",{parentName:"ul"},"pull request \u5305\u542b\u4e86\u5fc5\u8981\u7684\u6d4b\u8bd5\uff0c\u4ee5\u9a8c\u8bc1\u9884\u671f\u884c\u4e3a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u7684 pull request \u6709\u51b2\u7a81\uff0c\u8bf7\u5c06\u4f60\u7684\u5206\u652f rebase \u5230 main \u5206\u652f\u3002")),(0,r.kt)("p",null,"\u5982\u679c pull request \u4fee\u590d\u4e86\u4e00\u4e2a\u6f0f\u6d1e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pull request \u7684\u63cf\u8ff0\u4e2d\u5fc5\u987b\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"li"},"Closes #<issue number>")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"Fixes #<issue number>"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u907f\u514d\u56de\u5f52\u95ee\u9898\uff0cpull request \u5fc5\u987b\u5305\u542b\u9a8c\u8bc1\u8be5\u6f0f\u6d1e\u88ab\u4fee\u590d\u7684\u6d4b\u8bd5\u3002")),(0,r.kt)("h2",{id:"\u4ee3\u7801\u5ba1\u67e5"},"\u4ee3\u7801\u5ba1\u67e5"),(0,r.kt)("p",null,"\u4e00\u65e6\u4f60\u521b\u5efa\u4e86\u4e00\u4e2a pull requset\uff0c\u4e0b\u4e00\u6b65\u5c31\u662f\u8ba9\u5176\u4ed6\u4eba\u5ba1\u67e5\u4f60\u7684\u6539\u52a8\u3002\u4ee3\u7801\u5ba1\u67e5\u5bf9\u5ba1\u67e5\u8005\u548c pull request \u4f5c\u8005\u90fd\u662f\u5f88\u597d\u7684\u5b66\u4e60\u673a\u4f1a\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u89c9\u5f97\u67d0\u4e2a\u7279\u5b9a\u7684\u4eba\u5e94\u5f53\u5ba1\u67e5\u4f60\u7684 pull request\uff0c\u4f60\u53ef\u4ee5\u5728\u63cf\u8ff0\u6216\u8bc4\u8bba\u4e2d\u6807\u8bb0\u4ed6\u4eec\u3002\n\u901a\u8fc7\u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," \u7b26\u53f7\u548c\u5176\u7528\u6237\u540d\u6765\u6807\u8bb0\u7528\u6237\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f60\u9605\u8bfb ",(0,r.kt)("a",{parentName:"p",href:"https://google.github.io/eng-practices/review/reviewer/"},"\u5982\u4f55\u8fdb\u884c\u4ee3\u7801\u5ba1\u67e5")," \u6765\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u4ee3\u7801\u5ba1\u67e5\u7684\u77e5\u8bc6\u3002"),(0,r.kt)("h2",{id:"pull-request-\u683c\u5f0f\u6307\u5357"},"Pull request \u683c\u5f0f\u6307\u5357"),(0,r.kt)("p",null,"\u7cbe\u5fc3\u7f16\u5199\u7684 pull request \u53ef\u4ee5\u6700\u5927\u7a0b\u5ea6\u5730\u7f29\u77ed\u4f60\u7684\u66f4\u6539\u88ab\u63a5\u53d7\u7684\u65f6\u95f4\u3002\u8fd9\u4e9b\u6307\u5357\u5c06\u5e2e\u52a9\u4f60\u4e3a pull requset \u7f16\u5199\u6761\u7406\u6e05\u6670\u7684\u63d0\u4ea4\u6d88\u606f\u548c\u8bf4\u660e\u3002"),(0,r.kt)("h3",{id:"commit-\u4fe1\u606f\u683c\u5f0f"},"Commit \u4fe1\u606f\u683c\u5f0f"),(0,r.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/karpor/next/developer-guide/conventions/commit-conventions"},"Commit \u89c4\u7ea6")),(0,r.kt)("h3",{id:"pull-request-\u6807\u9898"},"Pull Request \u6807\u9898"),(0,r.kt)("p",null,"\u5728\u63a5\u53d7 pull request \u65f6\uff0cKarpor \u56e2\u961f\u4f1a\u5c06\u6240\u6709\u7684 commit \u5408\u5e76\u4e3a\u4e00\u4e2a\u3002"),(0,r.kt)("p",null,"Pull request \u7684\u6807\u9898\u5c06\u4f1a\u6210\u4e3a\u5408\u5e76\u540e\u7684 commit \u4fe1\u606f\u7684\u63cf\u8ff0\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4ecd\u7136\u9f13\u52b1\u8d21\u732e\u8005\u64b0\u5199\u8be6\u7ec6\u7684 commit \u4fe1\u606f\uff0c\u56e0\u4e3a\u5b83\u4eec\u5c06\u4f1a\u4f5c\u4e3a git commit \u6b63\u6587\u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u751f\u6210\u53d1\u5e03\u66f4\u65b0\u65e5\u5fd7\u65f6\u5c06\u4f1a\u4f7f\u7528 pull request \u7684\u6807\u9898\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4f1a\u52aa\u529b\u4f7f\u6807\u9898\u5c3d\u53ef\u80fd\u5177\u6709\u4fe1\u606f\u91cf\u3002"),(0,r.kt)("p",null,"\u786e\u4fdd\u4f60\u7684 pull request \u6807\u9898\u4f7f\u7528\u4e0e commit \u4fe1\u606f\u76f8\u540c\u7684\u683c\u5f0f\u3002\u5982\u679c\u4e0d\u9075\u5faa\u8be5\u683c\u5f0f\uff0c\u6211\u4eec\u5c06\u4f1a\u5728\u8be5 pull request \u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"title-needs-formatting")," \u6807\u7b7e\u3002"),(0,r.kt)("h3",{id:"\u901a\u8fc7\u6240\u6709-ci-\u68c0\u67e5"},"\u901a\u8fc7\u6240\u6709 CI \u68c0\u67e5"),(0,r.kt)("p",null,"\u5728\u5408\u5e76\u4e4b\u524d\uff0c\u6240\u6709\u7684\u6d4b\u8bd5 CI \u90fd\u5e94\u8be5\u901a\u8fc7\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8986\u76d6\u7387\u4e0d\u5e94\u8be5\u4e0b\u964d\u3002\u5f53\u524d\uff0cpull request \u7684\u8986\u76d6\u7387\u5e94\u5f53\u81f3\u5c11\u4e3a 70%\u3002"),(0,r.kt)("li",{parentName:"ul"},"Karpor \u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"li"},"CLA")," \u4f5c\u4e3a\u8d21\u732e\u8005\u534f\u8bae\u3002\u5b83\u8981\u6c42\u4f60\u5728\u7b2c\u4e00\u6b21\u5408\u5e76 pull request \u4e4b\u524d\u7b7e\u7f72\u3002")),(0,r.kt)("h2",{id:"\u66f4\u65b0\u6587\u6863\u548c\u7f51\u7ad9"},"\u66f4\u65b0\u6587\u6863\u548c\u7f51\u7ad9"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684 pull request \u88ab\u5408\u5e76\u4e86\uff0c\u800c\u4e14\u5b83\u5f15\u5165\u4e86\u65b0\u7684\u7279\u6027\u6216\u589e\u5f3a\uff0c\u4f60\u9700\u8981\u66f4\u65b0\u6587\u6863\u5e76\u4e14\u63d0\u4ea4 pull requset \u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusionstack.io"},"kusionstack.io")," \u4ed3\u5e93\u3002"),(0,r.kt)("p",null,"\u6839\u636e\u4e0b\u9762\u7684\u6587\u6863\u4e86\u89e3\u5982\u4f55\u7f16\u5199\u6587\u6863\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/README.md"},"kusionstack.io \u5f00\u53d1\u8005\u6307\u5357"))),(0,r.kt)("p",null,"\u592a\u68d2\u4e86\uff0c\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u4ee3\u7801\u8d21\u732e\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\uff01"))}s.isMDXComponent=!0}}]);