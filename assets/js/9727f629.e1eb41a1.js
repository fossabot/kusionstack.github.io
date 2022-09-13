"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],i={},p="KEP \u63d0\u6848",u={unversionedId:"develop/kep",id:"develop/kep",title:"KEP \u63d0\u6848",description:"KEP \u662f KCL \u8bed\u8a00\u589e\u5f3a\u5efa\u8bae\uff08KCL Enhancement Proposals\uff09\u7684\u7f29\u5199\u3002\u4e00\u4e2a KEP \u662f\u4e00\u4efd\u4e3a KCL \u793e\u533a\u63d0\u4f9b\u5404\u79cd\u589e\u5f3a\u529f\u80fd\u7684\u6280\u672f\u89c4\u683c\uff0c\u4e5f\u662f\u63d0\u4ea4\u65b0\u7279\u6027\uff0c\u4ee5\u4fbf\u8ba9\u793e\u533a\u6307\u51fa\u95ee\u9898\uff0c\u7cbe\u786e\u5316\u6280\u672f\u6587\u6863\u7684\u63d0\u6848\u3002\u53ef\u4ee5\u53c2\u8003 KEP-1 \u6587\u4ef6\u683c\u5f0f\u4e66\u5199\u3002",source:"@site/docs/develop/kep.md",sourceDirName:"develop",slug:"/develop/kep",permalink:"/docs/develop/kep",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/kep.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1663063163,formattedLastUpdatedAt:"9/13/2022",frontMatter:{},sidebar:"develop",previous:{title:"KCLVM \u6574\u4f53\u67b6\u6784",permalink:"/docs/develop/design/kclvm"}},l={},s=[],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kep-\u63d0\u6848"},"KEP \u63d0\u6848"),(0,a.kt)("p",null,"KEP \u662f KCL \u8bed\u8a00\u589e\u5f3a\u5efa\u8bae\uff08KCL Enhancement Proposals\uff09\u7684\u7f29\u5199\u3002\u4e00\u4e2a KEP \u662f\u4e00\u4efd\u4e3a KCL \u793e\u533a\u63d0\u4f9b\u5404\u79cd\u589e\u5f3a\u529f\u80fd\u7684\u6280\u672f\u89c4\u683c\uff0c\u4e5f\u662f\u63d0\u4ea4\u65b0\u7279\u6027\uff0c\u4ee5\u4fbf\u8ba9\u793e\u533a\u6307\u51fa\u95ee\u9898\uff0c\u7cbe\u786e\u5316\u6280\u672f\u6587\u6863\u7684\u63d0\u6848\u3002\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KEP/blob/main/keps/KEP-0001.md"},"KEP-1")," \u6587\u4ef6\u683c\u5f0f\u4e66\u5199\u3002"),(0,a.kt)("p",null,"KEP \u4ed3\u5e93\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/KEP"},"https://github.com/KusionStack/KEP")))}d.isMDXComponent=!0}}]);