"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2650],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const l={sidebar_position:1},i="Introduction",o={unversionedId:"reference/lang/xlang-api/overview",id:"reference/lang/xlang-api/overview",title:"Introduction",description:"KCL \u8bed\u8a00\u63d0\u4f9b C/Rust/Go/Python/Java \u7b49\u901a\u7528\u7f16\u7a0b\u8bed\u8a00\u63a5\u53e3\uff0c\u76f8\u5173\u8bed\u8a00\u6b63\u5728\u5f00\u53d1\u5b8c\u6574\u4e2d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/xlang-api/overview.md",sourceDirName:"reference/lang/xlang-api",slug:"/reference/lang/xlang-api/overview",permalink:"/zh-CN/docs/reference/lang/xlang-api/overview",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/xlang-api/overview.md",tags:[],version:"current",lastUpdatedBy:"amyxia",lastUpdatedAt:1678779307,formattedLastUpdatedAt:"2023/3/14",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"Multi-Language",permalink:"/zh-CN/docs/reference/lang/xlang-api/"},next:{title:"Rest API",permalink:"/zh-CN/docs/reference/lang/xlang-api/rest-api"}},p={},s=[{value:"1. C/Rust \u8bed\u8a00",id:"1-crust-\u8bed\u8a00",level:2},{value:"2. Go \u8bed\u8a00",id:"2-go-\u8bed\u8a00",level:2},{value:"2.1. API \u62bd\u8c61\u6a21\u578b",id:"21-api-\u62bd\u8c61\u6a21\u578b",level:3},{value:"2.2. \u4f8b\u5b50",id:"22-\u4f8b\u5b50",level:3},{value:"3. REST-API",id:"3-rest-api",level:2},{value:"3.1. \u542f\u52a8 REST \u670d\u52a1",id:"31-\u542f\u52a8-rest-\u670d\u52a1",level:3},{value:"3.2. <code>BuiltinService</code> \u670d\u52a1",id:"32-builtinservice-\u670d\u52a1",level:3},{value:"3.3. <code>KclvmService</code> \u670d\u52a1",id:"33-kclvmservice-\u670d\u52a1",level:3},{value:"4. Python \u8bed\u8a00",id:"4-python-\u8bed\u8a00",level:2},{value:"5. Java \u8bed\u8a00",id:"5-java-\u8bed\u8a00",level:2},{value:"6. \u5176\u5b83\u8bed\u8a00",id:"6-\u5176\u5b83\u8bed\u8a00",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"KCL \u8bed\u8a00\u63d0\u4f9b C/Rust/Go/Python/Java \u7b49\u901a\u7528\u7f16\u7a0b\u8bed\u8a00\u63a5\u53e3\uff0c\u76f8\u5173\u8bed\u8a00\u6b63\u5728\u5f00\u53d1\u5b8c\u6574\u4e2d\u3002"),(0,a.kt)("h2",{id:"1-crust-\u8bed\u8a00"},"1. C/Rust \u8bed\u8a00"),(0,a.kt)("p",null,"KCL \u6838\u5fc3\u91c7\u7528 Rust \u8bed\u8a00\u5f00\u53d1\uff0c\u5bf9\u5916\u5bfc\u51fa C \u8bed\u8a00 API \u4f9b Go/Python/Java \u7b49\u9ad8\u7ea7\u8bed\u8a00\u5305\u88c5\u548c\u96c6\u6210\u3002"),(0,a.kt)("h2",{id:"2-go-\u8bed\u8a00"},"2. Go \u8bed\u8a00"),(0,a.kt)("p",null,"Go \u8bed\u8a00\u662f\u901a\u8fc7 CGO \u5305\u88c5 KCL \u63d0\u4f9b\u7684 C-API\uff0c\u540c\u65f6\u63d0\u4f9b\u66f4\u6df1\u5ea6\u7684\u5b9a\u5236\u7279\u6027\u4ee5\u6ee1\u8db3 KusionCtl \u7b49\u4e0a\u5c42\u5de5\u5177\u7684\u9700\u6c42\u3002"),(0,a.kt)("h3",{id:"21-api-\u62bd\u8c61\u6a21\u578b"},"2.1. API \u62bd\u8c61\u6a21\u578b"),(0,a.kt)("p",null,"Go \u8bed\u8a00 API \u7684\u62bd\u8c61\u6a21\u578b\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510           \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     kcl files   \u2502         \u2502   KCLVM-Go-API  \u2502           \u2502  KCLResultList  \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2502    1.k    \u2502  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("a.b.c") \u2502\n\u2502  \u2502    2.k    \u2502  \u2502         \u2502  \u2502 Run(path) \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502\u2500\u2500\u2500\u2500\u2510    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2502    3.k    \u2502  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.Get("k", &v) \u2502\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502    \u251c\u2500\u2500\u2500\u25b6\u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502                 \u2502\n\u2502  \u2502setting.yml\u2502  \u2502    \u2502    \u2502  \u2502RunFiles() \u2502  \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502    \u2502    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.JSONString() \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502    \u2502                 \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                       \u2502    \u2502                 \u2502           \u2502                 \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502    \u2502                 \u2502           \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502         \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     Options     \u2502    \u2502    \u2502  \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510  \u2502           \u2502  \u2502 KCLResult \u2502\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25b6\u2502x.YAMLString() \u2502\n\u2502WithOptions      \u2502    \u2502    \u2502  \u2502MustRun()  \u2502  \u2502           \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502WithOverrides    \u2502\u2500\u2500\u2500\u2500\u2518    \u2502  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  \u2502           \u2502                 \u2502\n\u2502WithWorkDir      \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2502WithDisableNone  \u2502         \u2502                 \u2502           \u2502                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518         \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n')),(0,a.kt)("p",null,"\u5176\u4e2d\u8f93\u5165\u7684\u6587\u4ef6\u5305\u542b KCL \u6587\u4ef6\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"setting.yml")," \u914d\u7f6e\u6587\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Options")," \u53ef\u4ee5\u7528\u4e8e\u6307\u5b9a\u989d\u5916\u7684\u53c2\u6570\u548c\u5de5\u4f5c\u76ee\u5f55\u7b49\u4fe1\u606f\u3002\u201cKCLVM-Go-API\u201d\u90e8\u5206\u662f\u63d0\u4f9b\u7684 KCLVM \u6267\u884c\u51fd\u6570\uff0c\u6267\u884c\u51fd\u6570\u6839\u636e\u8f93\u5165\u6587\u4ef6\u548c\u989d\u5916\u7684\u53c2\u6570\u6267\u884c KCL \u7a0b\u5e8f\uff0c\u6700\u7ec8\u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"KCLResultList")," \u7ed3\u679c\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"KCLResultList")," \u662f\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"KCLResult")," \u6784\u6210\u7684\u5217\u8868\uff0c\u6bcf\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"KCLResult")," \u5bf9\u5e94\u4e00\u4e2a\u751f\u6210\u7684\u914d\u7f6e\u6587\u4ef6\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"map[string]interface{}"),"\u3002"),(0,a.kt)("h3",{id:"22-\u4f8b\u5b50"},"2.2. \u4f8b\u5b50"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    "kusionstack.io/kclvm-go/api/kcl"\n)\n\n\nfunc main() {\n    const k_code = `\nimport kcl_plugin.hello\n\nname = "kcl"\nage = 1\n\ntwo = hello.add(1, 1)\n\nschema Person:\n    name: str = "kcl"\n    age: int = 1\n\nx0 = Person{}\nx1 = Person{age:101}\n`\n\n    result := kcl.MustRun("hello.k", kcl.WithCode(k_code)).First()\n    fmt.Println(result.YAMLString())\n\n    fmt.Println("----")\n    fmt.Println("x0.name:", result.Get("x0.name"))\n    fmt.Println("x1.age:", result.Get("x1.age"))\n\n    fmt.Println("----")\n\n    var person struct {\n        Name string\n        Age  int\n    }\n    fmt.Printf("person: %+v\\n", result.Get("x1", &person))\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"age: 1\nname: kcl\ntwo: 2\nx0:\n    age: 1\n    name: kcl\nx1:\n    age: 101\n    name: kcl\n\n----\nx0.name: kcl\nx1.age: 101\n----\nperson: &{Name:kcl Age:101}\n")),(0,a.kt)("h2",{id:"3-rest-api"},"3. REST-API"),(0,a.kt)("p",null,"KCL \u63d0\u4f9b\u7684 C-API \u5e76\u6ca1\u6709 REST-API\uff0cREST-API \u662f\u901a\u8fc7 Protobuf \u5b9a\u4e49\uff0c\u6700\u7ec8\u7531\u4e0a\u5c42\u7684 Go-SDK \u63d0\u4f9b\u5b9e\u73b0\u3002"),(0,a.kt)("h3",{id:"31-\u542f\u52a8-rest-\u670d\u52a1"},"3.1. \u542f\u52a8 REST \u670d\u52a1"),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u53ef\u4ee5\u542f\u52a8 RestAPI \u670d\u52a1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u591a\u4e2a KCLVM \u8fdb\u7a0b: ",(0,a.kt)("inlineCode",{parentName:"li"},"kcl-go rest-server -http=:2021")),(0,a.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u4e00\u4e2a KCLVM \u8fdb\u7a0b: ",(0,a.kt)("inlineCode",{parentName:"li"},"kclvm -m kclvm.program.rpc-server -http=:2021"))),(0,a.kt)("p",null,"\u7136\u540e\u53ef\u4ee5\u901a\u8fc7 POST \u534f\u8bae\u8bf7\u6c42\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST http://127.0.0.1:2021/api:protorpc/BuiltinService.Ping --data \'{}\'\n{\n    "error": "",\n    "result": {}\n}\n')),(0,a.kt)("p",null,"\u5176\u4e2d POST \u8bf7\u6c42\u548c\u8fd4\u56de\u7684 JSON \u6570\u636e\u548c Protobuf \u5b9a\u4e49\u7684\u7ed3\u6784\u4fdd\u6301\u4e00\u81f4\u3002"),(0,a.kt)("h3",{id:"32-builtinservice-\u670d\u52a1"},"3.2. ",(0,a.kt)("inlineCode",{parentName:"h3"},"BuiltinService")," \u670d\u52a1"),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"/api:protorpc/BuiltinService.Ping")," \u8def\u5f84\u8868\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"BuiltinService")," \u670d\u52a1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ping")," \u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u5b8c\u6574\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"BuiltinService")," \u7531 Protobuf \u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"service BuiltinService {\n    rpc Ping(Ping_Args) returns(Ping_Result);\n    rpc ListMethod(ListMethod_Args) returns(ListMethod_Result);\n}\n\nmessage Ping_Args {\n    string value = 1;\n}\nmessage Ping_Result {\n    string value = 1;\n}\n\nmessage ListMethod_Args {\n    // empty\n}\nmessage ListMethod_Result {\n    repeated string method_name_list = 1;\n}\n")),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"Ping")," \u65b9\u6cd5\u53ef\u4ee5\u9a8c\u8bc1\u670d\u52a1\u662f\u5426\u6b63\u5e38\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ListMethod")," \u65b9\u6cd5\u53ef\u4ee5\u67e5\u8be2\u63d0\u4f9b\u7684\u5168\u90e8\u670d\u52a1\u548c\u51fd\u6570\u5217\u8868\u3002"),(0,a.kt)("h3",{id:"33-kclvmservice-\u670d\u52a1"},"3.3. ",(0,a.kt)("inlineCode",{parentName:"h3"},"KclvmService")," \u670d\u52a1"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"KclvmService")," \u670d\u52a1\u662f\u548c KCLVM \u529f\u80fd\u76f8\u5173\u7684\u670d\u52a1\u3002\u7528\u6cd5\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"BuiltinService")," \u670d\u52a1\u4e00\u6837\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u6709\u4ee5\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u7ed3\u6784\u5b9a\u4e49\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"schema Person:\n    key: str\n\n    check:\n        \"value\" in key  # 'key' is required and 'key' must contain \"value\"\n")),(0,a.kt)("p",null,"\u7136\u540e\u5e0c\u671b\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u6765\u6821\u9a8c\u4ee5\u4e0b\u7684 JSON \u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"key": "value"}\n')),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"KclvmService")," \u670d\u52a1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateCode")," \u65b9\u6cd5\u5b8c\u6210\u3002\u53c2\u8003 ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateCode")," \u65b9\u6cd5\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," \u53c2\u6570\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"message ValidateCode_Args {\n    string data = 1;\n    string code = 2;\n    string schema = 3;\n    string attribute_name = 4;\n    string format = 5;\n}\n")),(0,a.kt)("p",null,"\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"p"},"ValidateCode_Args")," \u53c2\u6570\u7ed3\u6784\u6784\u9020 POST \u8bf7\u6c42\u9700\u8981\u7684 JSON \u6570\u636e\uff0c\u5176\u4e2d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"Person")," \u5b9a\u4e49\u548c\u8981\u6821\u9a8c\u7684 JSON \u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "\\nschema Person:\\n    key: str\\n\\n    check:\\n        \\"value\\" in key  # \'key\' is required and \'key\' must contain \\"value\\"\\n",\n    "data": "{\\"attr_name\\": {\\"key\\": \\"value\\"}}"\n}\n')),(0,a.kt)("p",null,"\u5c06\u8be5 JSON \u6570\u636e\u4fdd\u5b58\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"vet-hello.json")," \u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u6821\u9a8c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -X POST \\\n        http://127.0.0.1:2021/api:protorpc/KclvmService.ValidateCode \\\n        -H  "accept: application/json" \\\n        --data @./vet-hello.json\n{\n    "error": "",\n    "result": {\n        "success": true\n    }\n}\n')),(0,a.kt)("p",null,"\u8bf4\u660e\u6821\u9a8c\u6210\u529f\u3002"),(0,a.kt)("h2",{id:"4-python-\u8bed\u8a00"},"4. Python \u8bed\u8a00"),(0,a.kt)("p",null,"Python \u901a\u8fc7 SWIG \u5305\u88c5 Rust \u63d0\u4f9b\u7684 C-API\u3002\u540c\u65f6\u63d0\u4f9b\u8bbf\u95ee RestAPI \u7684\u5ba2\u6237\u7aef\u3002\u5177\u4f53\u7ec6\u8282\u5f85\u5b8c\u5584\u3002"),(0,a.kt)("h2",{id:"5-java-\u8bed\u8a00"},"5. Java \u8bed\u8a00"),(0,a.kt)("p",null,"Java \u901a\u8fc7 Jni \u5305\u88c5 Rust \u63d0\u4f9b\u7684 C-API\u3002\u540c\u65f6\u63d0\u4f9b\u8bbf\u95ee RestAPI \u7684\u5ba2\u6237\u7aef\u3002\u5177\u4f53\u7ec6\u8282\u5f85\u5b8c\u5584\u3002"),(0,a.kt)("h2",{id:"6-\u5176\u5b83\u8bed\u8a00"},"6. \u5176\u5b83\u8bed\u8a00"),(0,a.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u57fa\u4e8e C-API \u548c RestAPI \u5305\u88c5\u5176\u5b83\u8bed\u8a00\u7684 SDK\u3002"))}c.isMDXComponent=!0}}]);