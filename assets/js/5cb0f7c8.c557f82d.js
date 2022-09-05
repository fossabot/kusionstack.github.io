"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9833],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,f=m["".concat(c,".").concat(s)]||m[s]||u[s]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79509:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime \u5305 - \u65f6\u95f4\u5904\u7406",weight:100},c=void 0,d={unversionedId:"reference/lang/model/datetime",id:"reference/lang/model/datetime",title:"datetime",description:"datetime \u5305 - \u65f6\u95f4\u5904\u7406",source:"@site/docs/reference/lang/model/datetime.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/datetime",permalink:"/docs/reference/lang/model/datetime",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/datetime.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1662367362,formattedLastUpdatedAt:"2022/9/5",frontMatter:{title:"datetime",linkTitle:"datetime",type:"docs",description:"datetime \u5305 - \u65f6\u95f4\u5904\u7406",weight:100},sidebar:"reference",previous:{title:"crypto",permalink:"/docs/reference/lang/model/crypto"},next:{title:"json",permalink:"/docs/reference/lang/model/json"}},p={},u=[{value:"time",id:"time",level:2},{value:"date",id:"date",level:2},{value:"now",id:"now",level:2},{value:"today",id:"today",level:2}],m={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"datetime",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ticks() -> float\nReturn the current time in seconds since the Epoch. Fractions of a second may be present if the system clock provides them."),(0,i.kt)("li",{parentName:"ul"},"date() -> str\nReturn the ",(0,i.kt)("inlineCode",{parentName:"li"},"%Y-%m-%d %H:%M:%S")," format date."),(0,i.kt)("li",{parentName:"ul"},"now() -> str\nReturn the local time. e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"'Sat Jun 06 16:26:11 1998'")),(0,i.kt)("li",{parentName:"ul"},"today() -> str\nReturn the ",(0,i.kt)("inlineCode",{parentName:"li"},"%Y-%m-%d %H:%M:%S.%{ticks}")," format date.")))),(0,i.kt)("h2",{id:"time"},"time"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ticks() -> float")),(0,i.kt)("p",null,"Return the current time in seconds since the Epoch. Fractions of a second may be present if the system clock provides them."),(0,i.kt)("h2",{id:"date"},"date"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"date() -> str")),(0,i.kt)("p",null,"Return the ",(0,i.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S")," format date."),(0,i.kt)("h2",{id:"now"},"now"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"now() -> str")),(0,i.kt)("p",null,"Return the local time. e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"'Sat Jun 06 16:26:11 1998'")),(0,i.kt)("h2",{id:"today"},"today"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"today() -> str")),(0,i.kt)("p",null,"Return the ",(0,i.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%M:%S.%{ticks}")," format date."))}s.isMDXComponent=!0}}]);