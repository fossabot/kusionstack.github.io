"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[721],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,b=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(b,u(u({ref:t},s),{},{components:n})):r.createElement(b,u({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},assets:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],c={sidebar_position:2},a="\u5982\u4f55\u8d21\u732e\u4ee3\u7801",l={unversionedId:"governance/contribute/contribute-code",id:"governance/contribute/contribute-code",title:"\u5982\u4f55\u8d21\u732e\u4ee3\u7801",description:"\u6b22\u8fce\u53c2\u4e0e Kusion \u5171\u5efa\u8d21\u732e\u5b8c\u5584\u4ee3\u7801\u3001\u5b8c\u5584\u4ee3\u7801\u6587\u6863\u548c\u6d4b\u8bd5\uff0c\u540c\u65f6\u4e5f\u6b22\u8fce\u901a\u8fc7 Issue \u63d0\u4f9b\u53cd\u9988\u3002\u672c\u6587\u4e3b\u8981\u9488\u5bf9\u4fee\u6539\u548c\u5b8c\u5584\u5df2\u6709\u7684\u4ee3\u7801\uff0c\u5982\u679c\u662f\u8981\u589e\u52a0 Konfig \u65b0\u6a21\u578b\u8bf7\u5148\u901a\u8fc7 Issue \u6216\u8ba8\u8bba\u4e2d\u5145\u5206\u8ba8\u8bba\uff0c\u5982\u679c\u662f\u5e0c\u671b\u589e\u52a0 KCL \u8bed\u8a00\u8bf7\u901a\u8fc7 KEP \u6d41\u7a0b\u63d0\u4ea4\u3002",source:"@site/docs/governance/contribute/contribute-code.md",sourceDirName:"governance/contribute",slug:"/governance/contribute/contribute-code",permalink:"/docs/governance/contribute/contribute-code",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/governance/contribute/contribute-code.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653039356,formattedLastUpdatedAt:"2022/5/20",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"governance",previous:{title:"\u5982\u4f55\u8d21\u732e\u6587\u6863",permalink:"/docs/governance/contribute/contribute-docs"},next:{title:"\u65b0\u624b\u4efb\u52a1\u8ba1\u5212",permalink:"/docs/governance/contribute/tasks"}},s={},p=[{value:"1. \u4ee3\u7801\u548c\u6ce8\u91ca\u4e2d\u7684\u9519\u522b\u5b57",id:"1-\u4ee3\u7801\u548c\u6ce8\u91ca\u4e2d\u7684\u9519\u522b\u5b57",level:2},{value:"2. \u5982\u4f55\u8d21\u732e Kusion \u6a21\u578b\u5e93\u4ee3\u7801",id:"2-\u5982\u4f55\u8d21\u732e-kusion-\u6a21\u578b\u5e93\u4ee3\u7801",level:2},{value:"3. \u5982\u4f55\u8d21\u732e KusionCtl \u4ee3\u7801",id:"3-\u5982\u4f55\u8d21\u732e-kusionctl-\u4ee3\u7801",level:2},{value:"4. \u5982\u4f55\u8d21\u732e KCLVM \u4ee3\u7801",id:"4-\u5982\u4f55\u8d21\u732e-kclvm-\u4ee3\u7801",level:2},{value:"5. \u5982\u4f55\u8d21\u732e VS Code \u63d2\u4ef6\u4ee3\u7801",id:"5-\u5982\u4f55\u8d21\u732e-vs-code-\u63d2\u4ef6\u4ee3\u7801",level:2},{value:"6. \u5f00\u53d1\u6d41\u7a0b\u76f8\u5173\u4ee3\u7801",id:"6-\u5f00\u53d1\u6d41\u7a0b\u76f8\u5173\u4ee3\u7801",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5982\u4f55\u8d21\u732e\u4ee3\u7801"},"\u5982\u4f55\u8d21\u732e\u4ee3\u7801"),(0,i.kt)("p",null,"\u6b22\u8fce\u53c2\u4e0e Kusion \u5171\u5efa\u8d21\u732e\u5b8c\u5584\u4ee3\u7801\u3001\u5b8c\u5584\u4ee3\u7801\u6587\u6863\u548c\u6d4b\u8bd5\uff0c\u540c\u65f6\u4e5f\u6b22\u8fce\u901a\u8fc7 Issue \u63d0\u4f9b\u53cd\u9988\u3002\u672c\u6587\u4e3b\u8981\u9488\u5bf9\u4fee\u6539\u548c\u5b8c\u5584\u5df2\u6709\u7684\u4ee3\u7801\uff0c\u5982\u679c\u662f\u8981\u589e\u52a0 Konfig \u65b0\u6a21\u578b\u8bf7\u5148\u901a\u8fc7 Issue \u6216\u8ba8\u8bba\u4e2d\u5145\u5206\u8ba8\u8bba\uff0c\u5982\u679c\u662f\u5e0c\u671b\u589e\u52a0 KCL \u8bed\u8a00\u8bf7\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/kep"},"KEP")," \u6d41\u7a0b\u63d0\u4ea4\u3002"),(0,i.kt)("h2",{id:"1-\u4ee3\u7801\u548c\u6ce8\u91ca\u4e2d\u7684\u9519\u522b\u5b57"},"1. \u4ee3\u7801\u548c\u6ce8\u91ca\u4e2d\u7684\u9519\u522b\u5b57"),(0,i.kt)("p",null,"\u5982\u679c\u53ea\u662f\u4fee\u6539\u4ee3\u7801\u548c\u6ce8\u91ca\u4e2d\u7684\u9519\u522b\u5b57\uff0c\u4e0d\u6d89\u53ca\u4ee3\u7801\u903b\u8f91\u7684\u8c03\u6574\uff0c\u90a3\u4e48\u53ef\u4ee5\u76f4\u63a5\u5728 Github \u514b\u9686\u4ed3\u5e93\u540e\u76f4\u63a5\u4fee\u6539\u5e76\u63d0\u4ea4 PR\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\u5c3d\u91cf\u4fdd\u6301\u4ee3\u7801\u98ce\u683c\u4e00\u81f4\u3002"),(0,i.kt)("h2",{id:"2-\u5982\u4f55\u8d21\u732e-kusion-\u6a21\u578b\u5e93\u4ee3\u7801"},"2. \u5982\u4f55\u8d21\u732e Kusion \u6a21\u578b\u5e93\u4ee3\u7801"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5148\u786e\u4fdd\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u6b63\u5e38"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4ee3\u7801\u5e76\u8865\u5145\u6d4b\u8bd5"),(0,i.kt)("li",{parentName:"ul"},"\u672c\u5730\u6d4b\u8bd5\u901a\u8fc7\u540e\u63d0\u4ea4 PR")),(0,i.kt)("h2",{id:"3-\u5982\u4f55\u8d21\u732e-kusionctl-\u4ee3\u7801"},"3. \u5982\u4f55\u8d21\u732e KusionCtl \u4ee3\u7801"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5148\u786e\u4fdd\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u6b63\u5e38"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4ee3\u7801\u5e76\u8865\u5145\u6d4b\u8bd5"),(0,i.kt)("li",{parentName:"ul"},"\u672c\u5730\u6d4b\u8bd5\u901a\u8fc7\u540e\u63d0\u4ea4 PR")),(0,i.kt)("h2",{id:"4-\u5982\u4f55\u8d21\u732e-kclvm-\u4ee3\u7801"},"4. \u5982\u4f55\u8d21\u732e KCLVM \u4ee3\u7801"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5148\u786e\u4fdd\u672c\u5730\u6d4b\u8bd5\u73af\u5883\u6b63\u5e38"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4ee3\u7801\u5e76\u8865\u5145\u6d4b\u8bd5"),(0,i.kt)("li",{parentName:"ul"},"\u672c\u5730\u6d4b\u8bd5\u901a\u8fc7\u540e\u63d0\u4ea4 PR")),(0,i.kt)("h2",{id:"5-\u5982\u4f55\u8d21\u732e-vs-code-\u63d2\u4ef6\u4ee3\u7801"},"5. \u5982\u4f55\u8d21\u732e VS Code \u63d2\u4ef6\u4ee3\u7801"),(0,i.kt)("p",null,"\u8bf7\u53c2\u8003 VS Code \u63d2\u4ef6\u4ed3\u5e93\u7684\u76f8\u5173\u6587\u6863"),(0,i.kt)("h2",{id:"6-\u5f00\u53d1\u6d41\u7a0b\u76f8\u5173\u4ee3\u7801"},"6. \u5f00\u53d1\u6d41\u7a0b\u76f8\u5173\u4ee3\u7801"),(0,i.kt)("p",null,"\u6b22\u8fce\u901a\u8fc7 Issue \u548c\u8ba8\u8bba\u7ec4\u8ba8\u8bba\u3002"))}f.isMDXComponent=!0}}]);