"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),k=p(n),f=a,d=k["".concat(c,".").concat(f)]||k[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},77463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Quick Start",l={unversionedId:"reference/cli/openapi/quick-start",id:"reference/cli/openapi/quick-start",title:"Quick Start",description:"1. \u5b89\u88c5 KCLOpenAPI tool",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/cli/openapi/quick-start.md",sourceDirName:"reference/cli/openapi",slug:"/reference/cli/openapi/quick-start",permalink:"/zh-CN/docs/reference/cli/openapi/quick-start",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/openapi/quick-start.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1685674152,formattedLastUpdatedAt:"2023/6/2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"OpenAPI Tools",permalink:"/zh-CN/docs/reference/cli/openapi/"},next:{title:"CRD to KCL",permalink:"/zh-CN/docs/reference/cli/openapi/crd-to-kcl"}},c={},p=[{value:"1. \u5b89\u88c5 KCLOpenAPI tool",id:"1-\u5b89\u88c5-kclopenapi-tool",level:2},{value:"1.1 \u901a\u8fc7 kusionctl \u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5",id:"11-\u901a\u8fc7-kusionctl-\u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5",level:2},{value:"1.2 \u5355\u72ec\u5b89\u88c5 KCLOpenAPI \u5de5\u5177\uff1a",id:"12-\u5355\u72ec\u5b89\u88c5-kclopenapi-\u5de5\u5177",level:2},{value:"1.3 \u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",id:"13-\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("h2",{id:"1-\u5b89\u88c5-kclopenapi-tool"},"1. \u5b89\u88c5 KCLOpenAPI tool"),(0,a.kt)("p",null,"\u76ee\u524d\u6709\u4e24\u79cd\u5b89\u88c5\u65b9\u5f0f\u53ef\u9009\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#11-%E9%80%9A%E8%BF%87-kusionctl-%E5%B7%A5%E5%85%B7%E9%9B%86%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85"},"\u901a\u8fc7 kusionctl \u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5\uff08\u63a8\u8350\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#12-%E5%8D%95%E7%8B%AC%E5%AE%89%E8%A3%85-kclopenapi-%E5%B7%A5%E5%85%B7"},"\u5355\u72ec\u5b89\u88c5 KCLOpenAPI \u5de5\u5177"))),(0,a.kt)("h2",{id:"11-\u901a\u8fc7-kusionctl-\u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5"},"1.1 \u901a\u8fc7 kusionctl \u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\uff1a\u63a8\u8350\u76f4\u63a5\u5b89\u88c5 kusionctl \u5de5\u5177\u96c6\uff0c\u5b83\u5185\u7f6e\u4e86 kusionCtl\uff0cKCLVM\uff0cKCLOpenAPI \u7b49\u591a\u79cd\u5de5\u5177\u3002\u5173\u4e8e kusionctl \u5b89\u88c5\uff0c\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"kusion \u5feb\u901f\u4e0a\u624b\u6587\u6863"),"\u3002")),(0,a.kt)("h2",{id:"12-\u5355\u72ec\u5b89\u88c5-kclopenapi-\u5de5\u5177"},"1.2 \u5355\u72ec\u5b89\u88c5 KCLOpenAPI \u5de5\u5177\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\uff1a\u60a8\u4e5f\u53ef\u4ee5\u5355\u72ec\u5b89\u88c5 KCLOpenapi\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# 1. \u4e0b\u8f7d\u4e8c\u8fdb\u5236\u7a0b\u5e8f\n# https://github.com/KusionStack/kcl-openapi/releases\n\n# 2. \u5c06\u547d\u4ee4\u6dfb\u52a0\u81f3PATH\nexport PATH="<Your directory to store KCLOpenapi binary>:$PATH"\n')),(0,a.kt)("h2",{id:"13-\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c"},"1.3 \u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c"),(0,a.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u60a8\u53ef\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"kcl-openapi generate model -h"),"\uff0c\u5982\u679c\u770b\u5230\u5982\u4e0b\u4fe1\u606f\u5219\u8bf4\u660e\u5b89\u88c5\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi command helps you to generate KCL schema structure from K8s CRD YAML/JSON file.\n  1. Translate Swagger Openapi Spec to KCL code\n  2. Translate Kubernetes CRD to KCL code\n\nExamples:\n\n  # convert a K8s CRD file into KCL files\n  kcl-openapi generate model -f FILENAME --crd --skip-validation\n\nOptions:\n      --crd=false: Set the spec file is a kube crd\n  -f, --filename='': The filename to convert\n      --skip-validation=false: Skips validation of spec prior to generation\n  -t, --target='': The location to write output kcl files\n      --version=false: Show the KCLOpenAPI version\n\nUsage:\n  kcl-openapi generate model -f FILENAME [options]\n")),(0,a.kt)("h1",{id:"2-\u751f\u6210-kcl-\u6587\u4ef6"},"2. \u751f\u6210 KCL \u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/openapi/openapi-to-kcl"},"\u5c06 OpenAPI \u63cf\u8ff0\u6587\u4ef6\u8f6c\u6362\u4e3a KCL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh-CN/docs/reference/cli/openapi/crd-to-kcl"},"\u5c06 Kubernetes CRD \u8f6c\u6362\u4e3a KCL"))))}u.isMDXComponent=!0}}]);