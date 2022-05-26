"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8313],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"\u53d8\u91cf",linkTitle:"\u53d8\u91cf",type:"docs",weight:2,description:"\u53d8\u91cf"},s=void 0,c={unversionedId:"reference/lang/lang/spec/variables",id:"reference/lang/lang/spec/variables",title:"\u53d8\u91cf",description:"\u53d8\u91cf",source:"@site/docs/reference/lang/lang/spec/variables.md",sourceDirName:"reference/lang/lang/spec",slug:"/reference/lang/lang/spec/variables",permalink:"/docs/reference/lang/lang/spec/variables",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/lang/spec/variables.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653552030,formattedLastUpdatedAt:"2022/5/26",frontMatter:{title:"\u53d8\u91cf",linkTitle:"\u53d8\u91cf",type:"docs",weight:2,description:"\u53d8\u91cf"},sidebar:"reference",previous:{title:"\u8bed\u53e5",permalink:"/docs/reference/lang/lang/spec/statements"},next:{title:"\u9519\u8bef\u548c\u5f02\u5e38",permalink:"/docs/reference/lang/lang/error/"}},p={},u=[{value:"Immutability",id:"immutability",level:2},{value:"Variable Exporting",id:"variable-exporting",level:2},{value:"Uniqueness of Exported Variable Identifier",id:"uniqueness-of-exported-variable-identifier",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In KCL, variables can be defined using assign statements. For example, the following statement defines a variable ",(0,i.kt)("inlineCode",{parentName:"p"},"spam")," to a string ",(0,i.kt)("inlineCode",{parentName:"p"},'"ham"'),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'spam = "ham"\n')),(0,i.kt)("p",null,"There are two types of variables, which are global variables and list comprehension local variables."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A global variable is defined not within any context."),(0,i.kt)("li",{parentName:"ul"},"A comprehension local variable is defined inside a comprehension.")),(0,i.kt)("p",null,"A variable can be used after definition, until the end of the current scope."),(0,i.kt)("p",null,"For a global variable, the scope is the module it is defined in. Note that a module can consists of multiple source files."),(0,i.kt)("p",null,"For a list comprehension local variable, the scope is the list comprehension it is defined in."),(0,i.kt)("p",null,"More information on modules, list comprehensions and scopes will be discussed in later chapters."),(0,i.kt)("h2",{id:"immutability"},"Immutability"),(0,i.kt)("p",null,"Global variables are immutable. In other words, once defined such a variable cannot be redefined (or, i.e., modified)."),(0,i.kt)("p",null,"The following code is illegal, and KCLVM will report an error during evaluation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'spam = "ham"\nspam = "eggs" # Error: The immutability rule is violated!\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A variable starts with the ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," character is mutable.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'_spam\ncond = True\nif cond:\n    _spam = "ham"\nelse:\n    _spam = "eggs"\n')),(0,i.kt)("h2",{id:"variable-exporting"},"Variable Exporting"),(0,i.kt)("p",null,"As shown in the preview chapter, KCLVM is able to export evaluation results to the standard output according to a target data format."),(0,i.kt)("p",null,"The rules are the followings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Living global variables at the end of an evaluation will be dumped out."),(0,i.kt)("li",{parentName:"ul"},"If the name of a variable starts with the ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," character, it will not be dumped out.")),(0,i.kt)("h2",{id:"uniqueness-of-exported-variable-identifier"},"Uniqueness of Exported Variable Identifier"),(0,i.kt)("p",null,"Each exported variable identifier must be unique in its package, so that an exported variable could be located uniquely by package location path and variable identifier, such as 'a.b.c:var', in which 'a.b.c' locates a package."),(0,i.kt)("p",null,"Two variable identifiers are different if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"they are spelled differently"),(0,i.kt)("li",{parentName:"ul"},"they are defined in different packages and are not compiled in a single execution")),(0,i.kt)("p",null,"Identifying an exported variable should be supported by the kcl compiler, which needs to provide corresponding identifying features through the command line and api form."))}f.isMDXComponent=!0}}]);