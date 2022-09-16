"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=c(r),m=a,f=k["".concat(s,".").concat(m)]||k[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4},l="KCL",i={unversionedId:"user_docs/concepts/kcl-lang",id:"user_docs/concepts/kcl-lang",title:"KCL",description:"KCL \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u3002KCL \u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u5feb\u7684\u81ea\u52a8\u5316\u96c6\u6210\u548c\u826f\u597d\u7684\u751f\u6001\u5ef6\u5c55\u6027\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/concepts/kcl-lang.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/kcl-lang",permalink:"/zh-CN/docs/user_docs/concepts/kcl-lang",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/kcl-lang.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663313028,formattedLastUpdatedAt:"2022/9/16",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"user_docs",previous:{title:"Kusion \u6574\u4f53\u67b6\u6784",permalink:"/zh-CN/docs/user_docs/concepts/arch"},next:{title:"\u7528\u6237\u6307\u5357",permalink:"/zh-CN/docs/user_docs/guides/"}},s={},c=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u573a\u666f",id:"\u573a\u666f",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kcl"},"KCL"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM"},"KCL")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u57fa\u4e8e\u7ea6\u675f\u7684\u8bb0\u5f55\u53ca\u51fd\u6570\u8bed\u8a00\u3002KCL \u901a\u8fc7\u6210\u719f\u7684\u7f16\u7a0b\u8bed\u8a00\u6280\u672f\u548c\u5b9e\u8df5\u6765\u6539\u8fdb\u5bf9\u5927\u91cf\u7e41\u6742\u914d\u7f6e\u7684\u7f16\u5199\uff0c\u81f4\u529b\u4e8e\u6784\u5efa\u56f4\u7ed5\u914d\u7f6e\u7684\u66f4\u597d\u7684\u6a21\u5757\u5316\u3001\u6269\u5c55\u6027\u548c\u7a33\u5b9a\u6027\uff0c\u66f4\u7b80\u5355\u7684\u903b\u8f91\u7f16\u5199\uff0c\u4ee5\u53ca\u66f4\u5feb\u7684\u81ea\u52a8\u5316\u96c6\u6210\u548c\u826f\u597d\u7684\u751f\u6001\u5ef6\u5c55\u6027\u3002"),(0,a.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:r(45814).Z,width:"597",height:"576"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u7b80\u5355\u6613\u7528"),"\uff1a\u6e90\u4e8e Python\u3001Golang \u7b49\u9ad8\u7ea7\u8bed\u8a00\uff0c\u91c7\u7eb3\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u8a00\u7279\u6027\uff0c\u4f4e\u526f\u4f5c\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8bbe\u8ba1\u826f\u597d"),"\uff1a\u72ec\u7acb\u7684 Spec \u9a71\u52a8\u7684\u8bed\u6cd5\u3001\u8bed\u4e49\u3001\u8fd0\u884c\u65f6\u548c\u7cfb\u7edf\u5e93\u8bbe\u8ba1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5feb\u901f\u5efa\u6a21"),"\uff1a\u4ee5 ",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour#schema"},"Schema")," \u4e3a\u4e2d\u5fc3\u7684\u914d\u7f6e\u7c7b\u578b\u53ca\u6a21\u5757\u5316\u62bd\u8c61"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u529f\u80fd\u5b8c\u5907"),"\uff1a\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/codelab/simple"},"Config"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#schema"},"Schema"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#function"},"Lambda"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#rule"},"Rule")," \u7684\u914d\u7f6e\u53ca\u5176\u6a21\u578b\u3001\u903b\u8f91\u548c\u7b56\u7565\u7f16\u5199"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u53ef\u9760\u7a33\u5b9a"),"\uff1a\u4f9d\u8d56",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#type-system"},"\u9759\u6001\u7c7b\u578b\u7cfb\u7edf"),"\u3001",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#validation"},"\u7ea6\u675f"),"\u548c",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour#rule"},"\u81ea\u5b9a\u4e49\u89c4\u5219"),"\u7684\u914d\u7f6e\u7a33\u5b9a\u6027"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5f3a\u53ef\u6269\u5c55"),"\uff1a\u901a\u8fc7\u72ec\u7acb\u914d\u7f6e\u5757",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#-operators-1"},"\u81ea\u52a8\u5408\u5e76\u673a\u5236"),"\u4fdd\u8bc1\u914d\u7f6e\u7f16\u5199\u7684\u9ad8\u53ef\u6269\u5c55\u6027"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6613\u81ea\u52a8\u5316"),"\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#kcl-cli-variable-override"},"CRUD APIs"),"\uff0c",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/xlang-api/overview"},"\u591a\u8bed\u8a00 SDK"),"\uff0c",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kcl-plugin"},"\u8bed\u8a00\u63d2\u4ef6")," \u6784\u6210\u7684\u68af\u5ea6\u81ea\u52a8\u5316\u65b9\u6848"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6781\u81f4\u6027\u80fd"),"\uff1a\u4f7f\u7528 Rust & C\uff0c",(0,a.kt)("a",{parentName:"li",href:"https://llvm.org/"},"LLVM")," \u5b9e\u73b0\uff0c\u652f\u6301\u7f16\u8bd1\u5230\u672c\u5730\u4ee3\u7801\u548c ",(0,a.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WASM")," \u7684\u9ad8\u6027\u80fd\u7f16\u8bd1\u65f6\u548c\u8fd0\u884c\u65f6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"API \u4eb2\u548c"),"\uff1a\u539f\u751f\u652f\u6301 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kcl-openapi"},"OpenAPI"),"\u3001 Kubernetes CRD\uff0c Kubernetes YAML \u7b49 API \u751f\u6001\u89c4\u8303"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u53cb\u597d"),"\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/cli/kcl/"},"\u8bed\u8a00\u5de5\u5177")," (Format\uff0cLint\uff0cTest\uff0cVet\uff0cDoc \u7b49)\u3001 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/vscode-kcl"},"IDE \u63d2\u4ef6")," \u6784\u5efa\u826f\u597d\u7684\u7814\u53d1\u4f53\u9a8c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5b89\u5168\u53ef\u63a7"),"\uff1a\u9762\u5411\u9886\u57df\uff0c\u4e0d\u539f\u751f\u63d0\u4f9b\u7ebf\u7a0b\u3001IO \u7b49\u7cfb\u7edf\u7ea7\u529f\u80fd\uff0c\u4f4e\u566a\u97f3\uff0c\u4f4e\u5b89\u5168\u98ce\u9669\uff0c\u6613\u7ef4\u62a4\uff0c\u6613\u6cbb\u7406"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u53ef\u7528"),"\uff1a\u5e7f\u6cdb\u5e94\u7528\u5728\u8682\u8681\u96c6\u56e2\u5e73\u53f0\u5de5\u7a0b\u53ca\u81ea\u52a8\u5316\u7684\u751f\u4ea7\u73af\u5883\u5b9e\u8df5\u4e2d")),(0,a.kt)("h2",{id:"\u573a\u666f"},"\u573a\u666f"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06 KCL \u7528\u4e8e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210\u9759\u6001\u914d\u7f6e\u6570\u636e\u5982 JSON, YAML \u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 schema \u5bf9\u914d\u7f6e\u6570\u636e\u8fdb\u884c\u5efa\u6a21\u5e76\u51cf\u5c11\u914d\u7f6e\u6570\u636e\u4e2d\u7684\u6837\u677f\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u914d\u7f6e\u6570\u636e\u5b9a\u4e49\u5e26\u6709\u89c4\u5219\u7ea6\u675f\u7684 schema \u5e76\u5bf9\u6570\u636e\u8fdb\u884c\u81ea\u52a8\u9a8c\u8bc1"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u526f\u4f5c\u7528\u5730\u7ec4\u7ec7\u3001\u7b80\u5316\u3001\u7edf\u4e00\u548c\u7ba1\u7406\u5e9e\u5927\u7684\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5206\u5757\u7f16\u5199\u914d\u7f6e\u6570\u636e\u53ef\u6269\u5c55\u5730\u7ba1\u7406\u5e9e\u5927\u7684\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u4e0e ",(0,a.kt)("a",{parentName:"li",href:"https://kusionstack.io"},"Kusion Stack")," \u4e00\u8d77\uff0c\u7528\u4f5c\u5e73\u53f0\u5de5\u7a0b\u8bed\u8a00\u6765\u4ea4\u4ed8\u73b0\u4ee3\u5e94\u7528\u7a0b\u5e8f")))}u.isMDXComponent=!0},45814:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kcl-79d6584aff8f7dcf814ba187f3d276ef.png"}}]);