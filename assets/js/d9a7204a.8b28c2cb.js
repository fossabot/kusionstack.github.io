"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,f=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="\u5feb\u901f\u5f00\u59cb",l={unversionedId:"reference/cli/openapi/quick-start",id:"reference/cli/openapi/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"1. \u5b89\u88c5 KCLOpenAPI tool",source:"@site/docs/reference/cli/openapi/quick-start.md",sourceDirName:"reference/cli/openapi",slug:"/reference/cli/openapi/quick-start",permalink:"/docs/reference/cli/openapi/quick-start",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/openapi/quick-start.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663311235,formattedLastUpdatedAt:"9/16/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"OpenAPI \u5de5\u5177",permalink:"/docs/reference/cli/openapi/"},next:{title:"CRD \u8f6c KCL",permalink:"/docs/reference/cli/openapi/crd-to-kcl"}},p={},c=[{value:"1. \u5b89\u88c5 KCLOpenAPI tool",id:"1-\u5b89\u88c5-kclopenapi-tool",level:2},{value:"1.1 \u901a\u8fc7 kusionctl \u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5",id:"11-\u901a\u8fc7-kusionctl-\u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5",level:2},{value:"1.2 \u5355\u72ec\u5b89\u88c5 KCLOpenAPI \u5de5\u5177\uff1a",id:"12-\u5355\u72ec\u5b89\u88c5-kclopenapi-\u5de5\u5177",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,a.kt)("h2",{id:"1-\u5b89\u88c5-kclopenapi-tool"},"1. \u5b89\u88c5 KCLOpenAPI tool"),(0,a.kt)("p",null,"\u76ee\u524d\u6709\u4e24\u79cd\u5b89\u88c5\u65b9\u5f0f\u53ef\u9009\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#joYJh"},"\u901a\u8fc7 kusionctl \u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5\uff08\u63a8\u8350\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#BjyR3"},"\u5355\u72ec\u5b89\u88c5 KCLOpenAPI \u5de5\u5177"))),(0,a.kt)("h2",{id:"11-\u901a\u8fc7-kusionctl-\u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5"},"1.1 \u901a\u8fc7 kusionctl \u5de5\u5177\u96c6\u4e00\u952e\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\uff1a\u63a8\u8350\u76f4\u63a5\u5b89\u88c5 kusionctl \u5de5\u5177\u96c6\uff0c\u5b83\u5185\u7f6e\u4e86 kusionCtl\uff0cKCLVM\uff0cKCLOpenAPI \u7b49\u591a\u79cd\u5de5\u5177\u3002\u5173\u4e8e kusionctl \u5b89\u88c5\uff0c\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"kusion \u5feb\u901f\u4e0a\u624b\u6587\u6863"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"kclopenapi generate model -h"),"\uff0c\u770b\u5230\u5982\u4e0b\u4fe1\u606f\u8bf4\u660e\u5b89\u88c5\u6210\u529f\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kclopenapi command helps you to generate KCL schema structure from K8s CRD YAML/JSON file.\n  1. Translate Swagger Openapi Spec to KCL code\n  2. Translate Kubernetes CRD to KCL code\n\nExamples:\n\n  # convert a K8s CRD file into KCL files\n  kclopenapi generate model -f FILENAME --crd --skip-validation\n\nOptions:\n      --crd=false: Set the spec file is a kube crd\n  -f, --filename='': The filename to convert\n      --skip-validation=false: Skips validation of spec prior to generation\n  -t, --target='': The location to write output kcl files\n      --version=false: Show the KCLOpenAPI version\n\nUsage:\n  kclopenapi generate model -f FILENAME [options]\n")),(0,a.kt)("h2",{id:"12-\u5355\u72ec\u5b89\u88c5-kclopenapi-\u5de5\u5177"},"1.2 \u5355\u72ec\u5b89\u88c5 KCLOpenAPI \u5de5\u5177\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b89\u88c5\uff1a\u60a8\u4e5f\u53ef\u4ee5\u5355\u72ec\u5b89\u88c5 KCLOpenapi\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# 1. \u4e0b\u8f7d\u4e8c\u8fdb\u5236\u7a0b\u5e8f\n# https://github.com/KusionStack/kcl-openapi/releases\n\n# 2. \u5c06\u547d\u4ee4\u6dfb\u52a0\u81f3PATH\nexport PATH="<Your directory to store KCLOpenapi binary>:$PATH"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"kclopenapi -h"),"\uff0c\u770b\u5230\u5982\u4e0b\u4fe1\u606f\u8bf4\u660e\u5b89\u88c5\u6210\u529f\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Usage:\n  kclopenapi [OPTIONS] <generate | validate>\n\nSwagger tries to support you as best as possible when building APIs.\n\nIt aims to represent the contract of your API with a language agnostic description of your application in json or yaml.\n\n\nApplication Options:\n  -q, --quiet                  silence logs\n      --log-output=LOG-FILE    redirect logs to file\n\nHelp Options:\n  -h, --help                   Show this help message\n\nAvailable commands:\n  generate  generate kcl code\n  validate  validate the swagger document\n")),(0,a.kt)("h1",{id:"2-\u751f\u6210-kcl-\u6587\u4ef6"},"2. \u751f\u6210 KCL \u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/cli/openapi/openapi-to-kcl"},"OpenAPI to KCL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/cli/openapi/crd-to-kcl"},"CRD to KCL"))))}u.isMDXComponent=!0}}]);