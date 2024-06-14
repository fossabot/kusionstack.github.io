"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),g=o,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={title:"\u62d3\u6251\u7ed3\u6784"},a=void 0,l={unversionedId:"user-guide/insight/topology",id:"user-guide/insight/topology",title:"\u62d3\u6251\u7ed3\u6784",description:"\u62d3\u6251\u7ed3\u6784",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/current/3-user-guide/3-insight/5-topology.md",sourceDirName:"3-user-guide/3-insight",slug:"/user-guide/insight/topology",permalink:"/zh/karpor/next/user-guide/insight/topology",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/3-user-guide/3-insight/5-topology.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1718370150,formattedLastUpdatedAt:"2024\u5e746\u670814\u65e5",sidebarPosition:5,frontMatter:{title:"\u62d3\u6251\u7ed3\u6784"},sidebar:"karpor",previous:{title:"\u5408\u89c4\u62a5\u544a",permalink:"/zh/karpor/next/user-guide/insight/compliance-report"},next:{title:"\u544a\u522b\u96c6\u7fa4\u8bc1\u4e66\u5207\u6362\uff0c\u8ba9\u4f60\u201c\u4e00\u5361\u901a\u884c\u201d",permalink:"/zh/karpor/next/user-guide/best-production-practices/one-pass-with-proxy"}},p={},s=[{value:"\u62d3\u6251\u7ed3\u6784",id:"\u62d3\u6251\u7ed3\u6784",level:2}],c={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u62d3\u6251\u7ed3\u6784"},"\u62d3\u6251\u7ed3\u6784"),(0,o.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u7d22 Karpor \u4e2d\u7684\u62d3\u6251\u529f\u80fd\u3002\u62d3\u6251\u89c6\u56fe\u5c06\u5e2e\u52a9\u4f60\u66f4\u76f4\u89c2\u5730\u7406\u89e3\u96c6\u7fa4\u4e2d\u5404\u79cd\u8d44\u6e90\u4e4b\u95f4\u7684\u5173\u7cfb\u548c\u4f9d\u8d56\u3002\u4ee5\u4e0b\u662f\u5982\u4f55\u4f7f\u7528\u62d3\u6251\u89c6\u56fe\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6309\u7167 ",(0,o.kt)("a",{parentName:"li",href:"#%E6%A3%80%E6%9F%A5%E4%BB%BB%E4%BD%95%E8%B5%84%E6%BA%90%E7%BB%84%E5%92%8C%E8%B5%84%E6%BA%90"},"\u68c0\u67e5\u4efb\u610f\u8d44\u6e90\u7ec4\u548c\u8d44\u6e90")," \u7684\u6307\u5f15\uff0c\u5bfc\u822a\u81f3\u7279\u5b9a\u8d44\u6e90\u7ec4 / \u8d44\u6e90\u7684\u6d1e\u5bdf\u9875\u9762\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u9875\u9762\u5e95\u90e8\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u8d44\u6e90\u62d3\u6251\u56fe\u3002\n",(0,o.kt)("img",{src:r(10089).Z,width:"1620",height:"1080"})),(0,o.kt)("li",{parentName:"ol"},"\u6839\u636e\u5f53\u524d\u9875\u9762\u60c5\u51b5\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8d44\u6e90\u6d1e\u5bdf\u9875\u9762\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8be5\u56fe\u5c06\u5c55\u793a\u4e0e\u5f53\u524d\u8d44\u6e90\u76f8\u5173\u7684\u4e0a\u6e38\u548c\u4e0b\u6e38\u8d44\u6e90\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5f53\u524d\u8d44\u6e90\u662f\u4e00\u4e2a Deployment\uff08\u90e8\u7f72\uff09\uff0c\u62d3\u6251\u56fe\u5c06\u5c55\u793a Deployment \u4e0b\u7684 ReplicaSet\uff08\u526f\u672c\u96c6\uff09\u4ee5\u53ca ReplicaSet \u4e0b\u7684 Pods\uff08\u5bb9\u5668\u7ec4\uff09\u3002\n",(0,o.kt)("img",{src:r(9165).Z,width:"1620",height:"1080"})),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u8d44\u6e90\u62d3\u6251\u56fe\u4e2d\u7684\u4e00\u4e2a\u8282\u70b9\uff0c\u7b49\u540c\u4e8e\u70b9\u51fb\u7279\u5b9a\u8d44\u6e90\u7684\u951a\u70b9\uff0c\u8fd9\u5c06\u76f4\u63a5\u5bfc\u822a\u81f3\u8be5\u8d44\u6e90\u7684\u6d1e\u5bdf\u9875\u9762\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u8d44\u6e90\u7ec4\u6d1e\u5bdf\u9875\u9762\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u8be5\u56fe\u5c06\u76f4\u89c2\u663e\u793a\u5f53\u524d\u8d44\u6e90\u7ec4\u4e0b\u5404\u79cd\u8d44\u6e90\u7c7b\u578b\u7684\u6570\u91cf\u4e0e\u5173\u7cfb\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u8d44\u6e90\u62d3\u6251\u56fe\u4e2d\u7684\u4e00\u4e2a\u8282\u70b9\uff0c\u7b49\u540c\u4e8e\u70b9\u51fb\u8d44\u6e90\u7c7b\u578b\uff0c\u4e0b\u65b9\u5217\u8868\u5c06\u5237\u65b0\u663e\u793a\u5f53\u524d\u8d44\u6e90\u7ec4\u4e2d\u7279\u5b9a\u7c7b\u578b\u4e0b\u7684\u6240\u6709\u8d44\u6e90\u3002\n",(0,o.kt)("img",{src:r(31196).Z,width:"1620",height:"1080"}))))))))}u.isMDXComponent=!0},31196:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-linkage-298826c22694d9bbc4dc1bf7ecc2fb8e.png"},9165:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-topology-example-158a6b418f05651909a60beda57ff83b.png"},10089:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-topology-673607ffbbf80cfee39bcd28db038d47.png"}}]);