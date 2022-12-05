"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2400],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=c(a),m=r,d=g["".concat(s,".").concat(m)]||g[m]||p[m]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},86698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2},o="KCL",l={unversionedId:"user_docs/concepts/kcl-lang",id:"user_docs/concepts/kcl-lang",title:"KCL",description:"Kusion Configuration Language (KCL) is an open source constraint-based record and functional language. KCL improves the writing of a large number of complex configurations through mature programming language technology and practice, and is committed to building better modularity, scalability and stability around configuration, simpler logic writing, fast automation and good ecological extensionality.",source:"@site/docs/user_docs/concepts/kcl-lang.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/kcl-lang",permalink:"/docs/user_docs/concepts/kcl-lang",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/kcl-lang.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1670242264,formattedLastUpdatedAt:"12/5/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Architecture",permalink:"/docs/user_docs/concepts/arch"},next:{title:"Konfig",permalink:"/docs/user_docs/concepts/konfig"}},s={},c=[{value:"Features",id:"features",level:2},{value:"What is it for?",id:"what-is-it-for",level:2}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl"},"KCL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KCLVM"},"Kusion Configuration Language (KCL)")," is an open source constraint-based record and functional language. KCL improves the writing of a large number of complex configurations through mature programming language technology and practice, and is committed to building better modularity, scalability and stability around configuration, simpler logic writing, fast automation and good ecological extensionality."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",src:a(45814).Z,width:"597",height:"576"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Easy-to-use"),": Originated from high-level languages \u200b\u200bsuch as Python and Golang, incorporating functional language features with low side effects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Well-designed"),": Independent Spec-driven syntax, semantics, runtime and system modules design."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Quick modeling"),": ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour#schema"},"Schema"),"-centric configuration types and modular abstraction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rich capabilities"),": Configuration with type, logic and policy based on ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/codelab/simple"},"Config"),", ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#schema"},"Schema"),", ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#function"},"Lambda"),", ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#rule"},"Rule"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stability"),": Configuration stability built on ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#type-system"},"static type system"),", ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#validation"},"constraints"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour#rule"},"rules"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalability"),": High scalability through ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#-operators-1"},"automatic merge mechanism")," of isolated config blocks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fast automation"),": Gradient automation scheme of ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/lang/tour/#kcl-cli-variable-override"},"CRUD APIs"),", ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/lang/xlang-api/overview"},"multilingual SDKs"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kcl-plugin"},"language plugin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"High performance"),": High compile time and runtime performance using Rust & C and ",(0,r.kt)("a",{parentName:"li",href:"https://llvm.org/"},"LLVM"),", and support compilation to native code and ",(0,r.kt)("a",{parentName:"li",href:"https://webassembly.org/"},"WASM"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"API affinity"),": Native support API ecological specifications such as ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kcl-openapi"},"OpenAPI"),", Kubernetes CRD, Kubernetes YAML spec."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Development friendly"),": Friendly development experiences with rich ",(0,r.kt)("a",{parentName:"li",href:"https://kusionstack.io/docs/reference/cli/kcl/"},"language tools")," (Format, Lint, Test, Vet, Doc, etc.) and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/vscode-kcl"},"IDE plugins"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Safety & maintainable"),": Domain-oriented, no system-level functions such as native threads and IO, low noise and security risk, easy maintenance and governance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Production-ready"),": Widely used in production practice of platform engineering and automation at Ant Group.")),(0,r.kt)("h2",{id:"what-is-it-for"},"What is it for?"),(0,r.kt)("p",null,"You can use KCL to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate low-level static configuration data like JSON, YAML, etc."),(0,r.kt)("li",{parentName:"ul"},"Reduce boilerplate in configuration data with the schema modeling."),(0,r.kt)("li",{parentName:"ul"},"Define schemas with rule constraints for configuration data and validate them automatically."),(0,r.kt)("li",{parentName:"ul"},"Organize, simplify, unify and manage large configurations without side effects."),(0,r.kt)("li",{parentName:"ul"},"Manage large configurations scalably with isolated configuration blocks."),(0,r.kt)("li",{parentName:"ul"},"Used as a platform engineering lang to deliver modern app with KusionStack.")))}p.isMDXComponent=!0},45814:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kcl-79d6584aff8f7dcf814ba187f3d276ef.png"}}]);