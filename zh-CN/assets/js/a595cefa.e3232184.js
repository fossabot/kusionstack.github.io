"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6303],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"Errors",linkTitle:"Errors",type:"docs",weight:2,description:"Errors"},s=void 0,i={unversionedId:"reference/lang/lang/spec/error",id:"reference/lang/lang/spec/error",title:"Errors",description:"Errors",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/lang/spec/error.md",sourceDirName:"reference/lang/lang/spec",slug:"/reference/lang/lang/spec/error",permalink:"/zh-CN/docs/reference/lang/lang/spec/error",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/lang/spec/error.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1666603369,formattedLastUpdatedAt:"2022/10/24",frontMatter:{title:"Errors",linkTitle:"Errors",type:"docs",weight:2,description:"Errors"},sidebar:"reference",previous:{title:"Data Types",permalink:"/zh-CN/docs/reference/lang/lang/spec/datatypes"},next:{title:"Expressions",permalink:"/zh-CN/docs/reference/lang/lang/spec/expressions"}},l={},p=[{value:"Syntax",id:"syntax",level:2},{value:"The Implementation",id:"the-implementation",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When errors happen, developers should be able to detect the error and abort\nexecution. Thus, KCL introduce the ",(0,a.kt)("inlineCode",{parentName:"p"},"assert")," syntax."),(0,a.kt)("p",null,"In the previous topic of ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," syntax. Errors can also be raised when a\nschema is violated."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The syntax of the ",(0,a.kt)("inlineCode",{parentName:"p"},"assert")," statement is the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"assert_stmt: 'assert' test [',' test]\n")),(0,a.kt)("p",null,"In the basic form, an ",(0,a.kt)("inlineCode",{parentName:"p"},"assert")," statement evaluates an expression. If the\nexpression is evaluated to ",(0,a.kt)("inlineCode",{parentName:"p"},"False"),", the assertion is failed, and an error\nshould be reported."),(0,a.kt)("p",null,"In the extended form, an error message can be provided. The error message is\nanother expression. It is only evaluated when the expression to be evaluated\nis evaluated to ",(0,a.kt)("inlineCode",{parentName:"p"},"False"),". The evaluation result of the error message is printed\nwhen reporting the error."),(0,a.kt)("p",null,"The following is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'a = 1\nb = 3\n# a != b evaluates to True, therefore no error should happen.\nassert a != b\n# a == b is False, in the reported error message, the message "SOS" should be printed.\nassert a == b, "SOS"\n')),(0,a.kt)("h2",{id:"the-implementation"},"The Implementation"),(0,a.kt)("p",null,"When an error happens, no matter it is caused by the ",(0,a.kt)("inlineCode",{parentName:"p"},"assert")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," syntax,\nthe virtual machine should exit with an exit code greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("p",null,"The virtual machine may choose to dump the back trace information, and it is strongly\nrecommended to implement it."),(0,a.kt)("p",null,"In practice, KCLVM can dump back trace by default, and an argument can be introduced\nto disable it."))}u.isMDXComponent=!0}}]);