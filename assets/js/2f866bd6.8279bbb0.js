"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7407],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||i;return n?l.createElement(m,o(o({ref:t},s),{},{components:n})):l.createElement(m,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var u=2;u<i;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4954:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return d}});var l=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],a={title:"math",linkTitle:"math",type:"docs",description:"math \u5305 - \u6570\u5b66\u51fd\u6570",weight:100},p=void 0,u={unversionedId:"reference/lang/model/math",id:"reference/lang/model/math",title:"math",description:"math \u5305 - \u6570\u5b66\u51fd\u6570",source:"@site/docs/reference/lang/model/math.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/math",permalink:"/docs/reference/lang/model/math",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/math.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653039356,formattedLastUpdatedAt:"2022/5/20",frontMatter:{title:"math",linkTitle:"math",type:"docs",description:"math \u5305 - \u6570\u5b66\u51fd\u6570",weight:100},sidebar:"reference",previous:{title:"json",permalink:"/docs/reference/lang/model/json"},next:{title:"net",permalink:"/docs/reference/lang/model/net"}},s={},c=[{value:"ceil",id:"ceil",level:2},{value:"factorial",id:"factorial",level:2},{value:"floor",id:"floor",level:2},{value:"gcd",id:"gcd",level:2},{value:"isfinite",id:"isfinite",level:2},{value:"isinf",id:"isinf",level:2},{value:"isnan",id:"isnan",level:2},{value:"modf",id:"modf",level:2},{value:"exp",id:"exp",level:2},{value:"expm1",id:"expm1",level:2},{value:"log",id:"log",level:2},{value:"log1p",id:"log1p",level:2},{value:"log2",id:"log2",level:2},{value:"log10",id:"log10",level:2},{value:"pow",id:"pow",level:2},{value:"sqrt",id:"sqrt",level:2}],f={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ceil"},"ceil"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ceil(x) -> int")),(0,i.kt)("p",null,"Return the ceiling of x as an Integral. This is the smallest integer >= x."),(0,i.kt)("h2",{id:"factorial"},"factorial"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"factorial(x) -> int")),(0,i.kt)("p",null,"Return x!. Raise a error if x is negative or non-integral."),(0,i.kt)("h2",{id:"floor"},"floor"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"floor(x) -> int")),(0,i.kt)("p",null,"Return the floor of x as an Integral. This is the largest integer <= x."),(0,i.kt)("h2",{id:"gcd"},"gcd"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gcd(a: int, b: int) -> int")),(0,i.kt)("p",null,"Return the greatest common divisor of x and y"),(0,i.kt)("h2",{id:"isfinite"},"isfinite"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isfinite(x) -> bool")),(0,i.kt)("p",null,"Return True if x is neither an infinity nor a NaN, and False otherwise."),(0,i.kt)("h2",{id:"isinf"},"isinf"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isinf(x) -> bool")),(0,i.kt)("p",null,"Return True if x is a positive or negative infinity, and False otherwise."),(0,i.kt)("h2",{id:"isnan"},"isnan"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"isnan(x) -> bool")),(0,i.kt)("p",null,"Return True if x is a NaN (not a number), and False otherwise."),(0,i.kt)("h2",{id:"modf"},"modf"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modf(x) -> Listfloat, float]")),(0,i.kt)("p",null,"Return the fractional and integer parts of x. Both results carry the sign of x and are floats."),(0,i.kt)("h2",{id:"exp"},"exp"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"exp(x) -> float")),(0,i.kt)("p",null,"Return e raised to the power of x."),(0,i.kt)("h2",{id:"expm1"},"expm1"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"expm1(x) -> float")),(0,i.kt)("p",null,"Return exp(x)-1. This function avoids the loss of precision involved in the direct evaluation of exp(x)-1 for small x."),(0,i.kt)("h2",{id:"log"},"log"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"log(x) -> float")),(0,i.kt)("p",null,"Return the logarithm of x to the base e."),(0,i.kt)("h2",{id:"log1p"},"log1p"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"log1p(x) -> float")),(0,i.kt)("p",null,"Return the natural logarithm of 1+x (base e). The result is computed in a way which is accurate for x near zero."),(0,i.kt)("h2",{id:"log2"},"log2"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"log2(x) -> float"),"\nReturn the base 2 logarithm of x."),(0,i.kt)("h2",{id:"log10"},"log10"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"log10(x) -> float")),(0,i.kt)("p",null,"Return the base 10 logarithm of x."),(0,i.kt)("h2",{id:"pow"},"pow"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pow(x, y) -> float")),(0,i.kt)("p",null,"Return x**y (x to the power of y)."),(0,i.kt)("h2",{id:"sqrt"},"sqrt"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sqrt(x) -> float")),(0,i.kt)("p",null,"Return the square root of x."))}d.isMDXComponent=!0}}]);