"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),o=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},42774:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u591a\u96c6\u7fa4\u7ba1\u7406"},s=void 0,l={unversionedId:"user-guide/multi-cluster-management",id:"version-v0.4/user-guide/multi-cluster-management",title:"\u591a\u96c6\u7fa4\u7ba1\u7406",description:"\u591a\u96c6\u7fa4\u7ba1\u7406\u662f\u5c06\u96c6\u7fa4\u6ce8\u518c\u8fdb Karpor \u7684\u5165\u53e3\uff0c\u4f7f\u80fd\u5728\u5927\u91cf\u96c6\u7fa4\u95f4\u8fdb\u884c\u641c\u7d22\u548c\u6d1e\u5bdf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.4/3-user-guide/1-multi-cluster-management.md",sourceDirName:"3-user-guide",slug:"/user-guide/multi-cluster-management",permalink:"/zh/karpor/user-guide/multi-cluster-management",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/3-user-guide/1-multi-cluster-management.md",tags:[],version:"v0.4",lastUpdatedBy:"hexin",lastUpdatedAt:1724066016,formattedLastUpdatedAt:"2024\u5e748\u670819\u65e5",sidebarPosition:1,frontMatter:{title:"\u591a\u96c6\u7fa4\u7ba1\u7406"},sidebar:"karpor",previous:{title:"\u672f\u8bed\u8868",permalink:"/zh/karpor/concepts/glossary"},next:{title:"\u5982\u4f55\u641c\u7d22",permalink:"/zh/karpor/user-guide/search"}},c={},o=[{value:"\u6ce8\u518c\u96c6\u7fa4",id:"\u6ce8\u518c\u96c6\u7fa4",level:2},{value:"\u7f16\u8f91\u96c6\u7fa4",id:"\u7f16\u8f91\u96c6\u7fa4",level:2},{value:"\u8f6e\u6362\u8bc1\u4e66",id:"\u8f6e\u6362\u8bc1\u4e66",level:2},{value:"\u79fb\u9664\u96c6\u7fa4",id:"\u79fb\u9664\u96c6\u7fa4",level:2}],u={toc:o};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u591a\u96c6\u7fa4\u7ba1\u7406\u662f\u5c06\u96c6\u7fa4\u6ce8\u518c\u8fdb Karpor \u7684\u5165\u53e3\uff0c\u4f7f\u80fd\u5728\u5927\u91cf\u96c6\u7fa4\u95f4\u8fdb\u884c\u641c\u7d22\u548c\u6d1e\u5bdf\u3002"),(0,a.kt)("h2",{id:"\u6ce8\u518c\u96c6\u7fa4"},"\u6ce8\u518c\u96c6\u7fa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u96c6\u7fa4\u7ba1\u7406")," \u6807\u7b7e\u9875\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u6ce8\u518c\u96c6\u7fa4")," \u6309\u94ae\u3002\n",(0,a.kt)("img",{src:r(96615).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u96c6\u7fa4\u540d\u5b57\u3002\u96c6\u7fa4\u540d\u79f0\u5fc5\u987b\u552f\u4e00\u4e14\u4e00\u65e6\u521b\u5efa\u4e0d\u80fd\u66f4\u6539\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0a\u4f20\u8be5\u96c6\u7fa4\u7684 kubeconfig \u6587\u4ef6\uff08\u4e00\u4e2a\u5177\u6709\u8bfb\u6743\u9650\u7684\u6587\u4ef6\u5c31\u8db3\u591f\u4e86\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u9a8c\u8bc1\u5e76\u63d0\u4ea4")," \u6309\u94ae\u3002\n",(0,a.kt)("img",{src:r(35517).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"\u4e00\u65e6\u9a8c\u8bc1\u901a\u8fc7\uff0c\u96c6\u7fa4\u5c06\u4f1a\u88ab\u6dfb\u52a0\u5230 ",(0,a.kt)("kbd",null,"\u96c6\u7fa4\u7ba1\u7406")," \u9875\u9762\u3002\n",(0,a.kt)("img",{src:r(2377).Z,width:"1620",height:"1080"}))),(0,a.kt)("h2",{id:"\u7f16\u8f91\u96c6\u7fa4"},"\u7f16\u8f91\u96c6\u7fa4"),(0,a.kt)("kbd",null,"\u7f16\u8f91")," \u6309\u94ae\u5141\u8bb8\u4fee\u6539 ",(0,a.kt)("kbd",null,"\u663e\u793a\u540d\u79f0")," \u548c ",(0,a.kt)("kbd",null,"\u63cf\u8ff0"),"\uff0c\u4ece\u800c\u6539\u53d8\u4eea\u8868\u76d8\u4e2d\u96c6\u7fa4\u540d\u79f0\u548c\u63cf\u8ff0\u7684\u663e\u793a\u65b9\u5f0f\u3002",(0,a.kt)("p",null,(0,a.kt)("img",{src:r(44009).Z,width:"1620",height:"1080"})),(0,a.kt)("h2",{id:"\u8f6e\u6362\u8bc1\u4e66"},"\u8f6e\u6362\u8bc1\u4e66"),(0,a.kt)("p",null,"\u5f53 kubeconfig \u8fc7\u671f\u65f6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u8f6e\u6362\u8bc1\u4e66")," \u6765\u66f4\u65b0\u8bc1\u4e66\u3002\n",(0,a.kt)("img",{src:r(18892).Z,width:"1216",height:"810"}),"\n",(0,a.kt)("img",{src:r(93893).Z,width:"1620",height:"1080"}),"\n",(0,a.kt)("img",{src:r(62647).Z,width:"1620",height:"1080"})),(0,a.kt)("h2",{id:"\u79fb\u9664\u96c6\u7fa4"},"\u79fb\u9664\u96c6\u7fa4"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("kbd",null,"\u5220\u9664")," \u6309\u94ae\u65b9\u4fbf\u5730\u79fb\u9664\u5df2\u6ce8\u518c\u7684\u96c6\u7fa4\u3002\n",(0,a.kt)("img",{src:r(9825).Z,width:"1216",height:"810"})))}d.isMDXComponent=!0},9825:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-delete-cluster-d710c7d34eeffe1b4885edf986635331.png"},44009:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-edit-cluster-07e5bea950a6328a23ac3b37bb757bf2.png"},96615:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-empty-42686a32f37ccbd355e49b2ab53b1320.png"},35517:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-register-new-cluster-df17d3a7e2b322e93e55a56b9689e4c8.png"},2377:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-register-success-1eeaaeec418f80431c9b77b5cd7d027d.png"},18892:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-rotate-cluster-1-51394b403e893828990ac403a8ae8bf5.png"},93893:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-rotate-cluster-2-c840425dd672a06feafc951ed648e991.png"},62647:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/cluster-mng-rotate-cluster-3-b5fd49c780f3db5bce7e11c379a2c880.png"}}]);