"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="KCL Validation",l={unversionedId:"reference/lang/use_case/validation",id:"reference/lang/use_case/validation",title:"KCL Validation",description:"In addition to using KCL code to generate configuration formats such as JSON/YAML, KCL also supports format validation of JSON/YAML data. As a configuration language, KCL covers almost all features of OpenAPI.",source:"@site/docs/reference/lang/use_case/validation.md",sourceDirName:"reference/lang/use_case",slug:"/reference/lang/use_case/validation",permalink:"/docs/reference/lang/use_case/validation",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/use_case/validation.md",tags:[],version:"current",lastUpdatedBy:"howieyuen",lastUpdatedAt:1677568146,formattedLastUpdatedAt:"2/28/2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"Use Case",permalink:"/docs/reference/lang/use_case/"},next:{title:"Kusion Model Library",permalink:"/docs/reference/model/"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Future Plan",id:"future-plan",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kcl-validation"},"KCL Validation"),(0,r.kt)("p",null,"In addition to using KCL code to generate configuration formats such as JSON/YAML, KCL also supports format validation of JSON/YAML data. As a configuration language, KCL covers almost all features of ",(0,r.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI"),"."),(0,r.kt)("p",null,"In KCL, a structure definition can be used to validate configuration data. At the same time, it supports user-defined constraint rules through the check block, and writes validation expressions in the schema to check and validate the attributes defined by the schema. It is very clear and simple to check whether the input JSON/YAML satisfies the corresponding schema structure definition and constraints."),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In the schema we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," keyword to write the validation rules of every schema attribute. Each line in the check block corresponds to a conditional expression. When the condition is satisfied, the validation is successful. The conditional expression can be followed by ",(0,r.kt)("inlineCode",{parentName:"p"},', "check error message"')," to indicate the message to be displayed when the check fails. Here is an example of a schema with constraint expressions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema Sample:\n    foo: str  # Required, cannot be None/Undefined, and the type must be str\n    bar: int  # Required, cannot be None/Undefined, and the type must be int\n    fooList: [int]  # Required, cannot be None/Undefined, and the type must be int list\n    color: "Red" | "Yellow" | "Blue"  # Required, literal union type, and must be one of "Red", "Yellow", "Blue".\n    id?: int  # Optional, can be None/Undefined, the type must be int\n\n    check:\n        0 <= bar < 100  # bar must be greater than or equal to 0 and less than 100\n        0 < len(fooList) < 100  # fooList cannot be None/Undefined, and the length must be greater than 0 and less than 100\n        regex.match(foo, "^The.*Foo$")  # regular expression matching\n        bar in range(100)  # bar can only range from 1 to 99\n        bar in [2, 4, 6, 8]  # bar can only take 2, 4, 6, 8\n        bar % 2 == 0  # bar must be a multiple of 2\n        all foo in fooList {\n            foo > 1\n        }  # All elements in fooList must be greater than 1\n        any foo in fooList {\n            foo > 10\n        }  # At least one element in fooList must be greater than 10\n        abs(id) > 10 if id  # check expression with if guard, when id is not empty, the absolute value of id must be greater than 10\n')),(0,r.kt)("p",null,"To sum up, the validation kinds supported in KCL schema are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Kind"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Range"),(0,r.kt)("td",{parentName:"tr",align:null},"Using comparison operators such as ",(0,r.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"td"},">"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Regex"),(0,r.kt)("td",{parentName:"tr",align:null},"Using methods such as ",(0,r.kt)("inlineCode",{parentName:"td"},"match")," from the ",(0,r.kt)("inlineCode",{parentName:"td"},"regex")," system module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Length"),(0,r.kt)("td",{parentName:"tr",align:null},"Using the ",(0,r.kt)("inlineCode",{parentName:"td"},"len")," built-in function to get the length of a variable of type ",(0,r.kt)("inlineCode",{parentName:"td"},"list/dict/str"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enum"),(0,r.kt)("td",{parentName:"tr",align:null},"Using literal union types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Optional/Required"),(0,r.kt)("td",{parentName:"tr",align:null},"Using optional/required attributes of schema")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Condition"),(0,r.kt)("td",{parentName:"tr",align:null},"Using the check if conditional expression")))),(0,r.kt)("p",null,"In addition, KCL provides a corresponding ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/cli/kcl/vet"},"validation tool")," to directly validate JSON/YAML data."),(0,r.kt)("h2",{id:"future-plan"},"Future Plan"),(0,r.kt)("p",null,'The improvement of KCL validation capabilities will gradually focus on the "static" aspect, that is, at compile time, combined with the ability of formal validation, it can directly analyze whether the data meets the constraints, whether the constraints conflict with each other, etc., and can be exposed in real time through the IDE.'))}u.isMDXComponent=!0}}]);