"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2074],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},l=void 0,i={unversionedId:"reference/lang/model/yaml",id:"reference/lang/model/yaml",title:"yaml",description:"yaml \u7f16\u7801\u89e3\u7801",source:"@site/docs/reference/lang/model/yaml.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/yaml",permalink:"/docs/reference/lang/model/yaml",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/yaml.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663160649,formattedLastUpdatedAt:"9/14/2022",frontMatter:{title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},sidebar:"reference",previous:{title:"units",permalink:"/docs/reference/lang/model/units"},next:{title:"Multi-Language",permalink:"/docs/reference/lang/xlang-api/"}},c={},p=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2},{value:"dump_to_file",id:"dump_to_file",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"encode"},"encode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"encode(\n    data: any,\n    sort_keys: bool = False,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,a.kt)("p",null,"Serialize a KCL object ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," to a YAML formatted str."),(0,a.kt)("h2",{id:"decode"},"decode"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"decode(value: str) -> any")),(0,a.kt)("p",null,"Deserialize ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," (a string instance containing a YAML document) to a KCL object."),(0,a.kt)("h2",{id:"dump_to_file"},"dump_to_file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dump_to_file(\n    data: any,\n    filename: str,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> None\n")),(0,a.kt)("p",null,"Serialize a KCL object ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," to a YAML formatted str and write it into the file ",(0,a.kt)("inlineCode",{parentName:"p"},"filename"),"."))}s.isMDXComponent=!0}}]);