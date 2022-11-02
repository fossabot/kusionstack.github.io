"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3177],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(g,o(o({ref:n},p),{},{components:t})):i.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},70863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const r={sidebar_position:99},o="KCLVM Architecture",c={unversionedId:"develop/design/kclvm",id:"develop/design/kclvm",title:"KCLVM Architecture",description:"The implementation of KCLVM compiler is driven by many specifications (mainly including KCL language specification, KCL multilingual integration specification, and KCL OpenAPI specification). Besides, KCL is a compiled language, maintaining the same three-stage architecture as the regular programming language compiler, and using LLVM-IR as the intermediate link between KCL and Native/WASM code.",source:"@site/docs/develop/design/kclvm.md",sourceDirName:"develop/design",slug:"/develop/design/kclvm",permalink:"/docs/develop/design/kclvm",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/design/kclvm.md",tags:[],version:"current",lastUpdatedBy:"xduo",lastUpdatedAt:1667394044,formattedLastUpdatedAt:"11/2/2022",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"develop",previous:{title:"Konfig Dir Struct",permalink:"/docs/develop/design/konfig"},next:{title:"KEP",permalink:"/docs/develop/kep"}},l={},s=[],p={toc:s};function d(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kclvm-architecture"},"KCLVM Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:t(11036).Z,width:"1876",height:"674"})),(0,a.kt)("p",null,"The implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"KCLVM")," compiler is driven by many specifications (mainly including KCL language specification, KCL multilingual integration specification, and KCL OpenAPI specification). Besides, KCL is a compiled language, maintaining the same three-stage architecture as the regular programming language compiler, and using LLVM-IR as the intermediate link between KCL and Native/WASM code."),(0,a.kt)("p",null,"KCL has the following three core stages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Translation KCL code to LLVM-IR. By parsing the KCL code and traversing the KCL AST, the corresponding LLVM-IR code is generated according to the KCL language specification."),(0,a.kt)("li",{parentName:"ul"},"KCL runtime library integration. KCL runtime library provides runtime KCL value calculation, memory, context management, built-in library and plug-in library support."),(0,a.kt)("li",{parentName:"ul"},"User mode and system mode code linking and execution. Link user mode code and system mode code into a dynamic link library, and finally execute the compiled KCL code through the unified runner module.")),(0,a.kt)("p",null,"In addition, KCL provides enhanced support for the semantic resolver and plugins:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resolver",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Static type inference and checking"),". Type inference and checking can be performed at compile time to avoid the overhead of type check at runtime, which can be used as the basis for IDE plug-in and semantic API support (such as schema model query, dependency analysis, etc.)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configuration graph unification"),". By building and merging the configuration data dependency graph during the compilation process, the final configuration data can be obtained through only a few calculations during the runtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Semantic dependency graph"),". Through the built-in semantic dependency graph, KCL can complete the dependency analysis when the configuration changes, which can improve the end-to-end compilation performance by performing incremental compilation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Schema-centric OOP"),". KCL language only retains the syntax of single inheritance, but the schema can mix and reuse the same code fragments through the features such as ",(0,a.kt)("inlineCode",{parentName:"li"},"mixin")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"protocol"),"."))),(0,a.kt)("li",{parentName:"ul"},"Plugin. We can use Python/Go to write plugin libraries, which mainly include some domain capabilities, such as accessing networks or databases.")))}d.isMDXComponent=!0},11036:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/kcl-tech-arch-80e0de63d5a17ac656650bf408117ef4.png"}}]);