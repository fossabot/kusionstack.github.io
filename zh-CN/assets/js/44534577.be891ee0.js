"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:4},s="Kusion \u6574\u4f53\u67b6\u6784",c={unversionedId:"user_docs/concepts/arch",id:"user_docs/concepts/arch",title:"Kusion \u6574\u4f53\u67b6\u6784",description:"\u67b6\u6784\u56fe\u672c\u8d28\u4e0a\u53cd\u5e94\u7684\u662f Kusion \u7684\u5de5\u4f5c\u6d41\u7a0b\u548c\u5de5\u4f5c\u673a\u5236\u3002\u719f\u6089\u4e86\u6574\u4f53\u67b6\u6784\u56fe\u4e4b\u540e\uff0c\u540c\u6837\u80fd\u591f\u505a\u5230\u7eb2\u4e3e\u76ee\u5f20\u4e3a Kusion \u7684\u65e5\u5e38\u4f7f\u7528\u548c\u5f00\u53d1\u63d0\u4f9b\u6307\u5bfc\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/concepts/arch.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/arch",permalink:"/zh-CN/docs/user_docs/concepts/arch",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/arch.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1682393468,formattedLastUpdatedAt:"2023/4/25",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"user_docs",previous:{title:"Konfig",permalink:"/zh-CN/docs/user_docs/concepts/konfig"},next:{title:"KCL",permalink:"/zh-CN/docs/user_docs/concepts/kcl-lang"}},a={},u=[{value:"1. \u67b6\u6784\u7b80\u56fe",id:"1-\u67b6\u6784\u7b80\u56fe",level:2},{value:"2. \u67b6\u6784\u5927\u56fe",id:"2-\u67b6\u6784\u5927\u56fe",level:2},{value:"3. \u548c\u4e0a\u6e38\u4e0b\u6e38\u7684\u5173\u7cfb",id:"3-\u548c\u4e0a\u6e38\u4e0b\u6e38\u7684\u5173\u7cfb",level:2}],l={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-\u6574\u4f53\u67b6\u6784"},"Kusion \u6574\u4f53\u67b6\u6784"),(0,o.kt)("p",null,"\u67b6\u6784\u56fe\u672c\u8d28\u4e0a\u53cd\u5e94\u7684\u662f Kusion \u7684\u5de5\u4f5c\u6d41\u7a0b\u548c\u5de5\u4f5c\u673a\u5236\u3002\u719f\u6089\u4e86\u6574\u4f53\u67b6\u6784\u56fe\u4e4b\u540e\uff0c\u540c\u6837\u80fd\u591f\u505a\u5230\u7eb2\u4e3e\u76ee\u5f20\u4e3a Kusion \u7684\u65e5\u5e38\u4f7f\u7528\u548c\u5f00\u53d1\u63d0\u4f9b\u6307\u5bfc\u3002"),(0,o.kt)("h2",{id:"1-\u67b6\u6784\u7b80\u56fe"},"1. \u67b6\u6784\u7b80\u56fe"),(0,o.kt)("p",null,"\u5148\u4ece\u67b6\u6784\u7b80\u56fe\u5f00\u59cb\uff0c\u5176\u4e2d\u6d89\u53ca App \u548c\u57fa\u7840\u8bbe\u65bd\u5982\u4f55\u901a\u8fc7 Kusion \u6280\u672f\u6808\u8054\u901a\u76ee\u6807\u5e73\u53f0\u3002\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(47021).Z,width:"2462",height:"546"})),(0,o.kt)("p",null,"App \u548c Infra \u7684\u5f00\u53d1\u4eba\u5458\u5b8c\u6574\u6700\u57fa\u7840\u7684\u529f\u80fd\u548c\u914d\u7f6e\u5f00\u53d1\uff0cSRE \u5219\u57fa\u4e8e\u57fa\u7840\u7684\u529f\u80fd\u901a\u8fc7\u5b8c\u6210\u8fd0\u7ef4\u914d\u7f6e\u4ee3\u7801\u5316\u5de5\u4f5c\uff0c\u7136\u540e\u901a\u8fc7 Kusion \u6280\u672f\u6808\u5c06\u8fd0\u7ef4\u914d\u7f6e\u4ee3\u7801\u8f6c\u5316\u4e3a\u4e0d\u540c\u76ee\u6807\u5e73\u53f0\u7684\u5177\u4f53\u64cd\u4f5c\u3002"),(0,o.kt)("h2",{id:"2-\u67b6\u6784\u5927\u56fe"},"2. \u67b6\u6784\u5927\u56fe"),(0,o.kt)("p",null,"\u5728\u67b6\u6784\u7b80\u56fe\u7684\u4e4b\u4e0a\uff0c\u5c06 Kusion \u9762\u5bf9\u7684\u5177\u4f53\u573a\u666f\u548c\u7279\u6027\u586b\u5145\u5230\u5404\u4e2a\u5b50\u6a21\u5757\u4e2d\u7684\u5f97\u5230\u4e86\u67b6\u6784\u5927\u56fe\u3002Kusion \u5f00\u6e90\u53ef\u7f16\u7a0b\u534f\u8bae\u6808\u5904\u4e8e\u4e91\u539f\u751f\u5e94\u7528\u5230 K8S \u5e73\u53f0\u4e2d\u95f4\u5c42\uff0c\u4e0a\u9762\u627f\u63a5\u57fa\u7840\u8bbe\u65bd\u8fd0\u7ef4\u548c App \u4e1a\u52a1\u529f\u80fd\u3001\u4e0b\u9762\u5bf9\u63a5 K8S \u7b49\u4e91\u5e73\u53f0\u3002Kusion \u7684\u67b6\u6784\u5927\u56fe\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(85938).Z,width:"3126",height:"3748"})),(0,o.kt)("p",null,"Kusion \u53ef\u7f16\u7a0b\u534f\u8bae\u6808\u5185\u90e8\u53c8\u5206\u4e3a\u7528\u6237\u754c\u9762\u3001\u6838\u5fc3\u80fd\u529b\u3001\u914d\u7f6e\u8bed\u8a00\u7b49\u90e8\u5206\u3002\u5176\u4e2d\u7528\u6237\u754c\u9762\u4e3b\u8981\u9762\u8bd5\u4e0a\u5c42\u7684\u4e91\u539f\u751f\u5e94\u7528\u7684\u7528\u6237\uff0c\u901a\u8fc7 Kusion \u63d0\u4f9b\u7684 Konfig \u5927\u5e93\u81ea\u52a8\u96c6\u6210 Pipeline\u3001Operation \u64cd\u4f5c\u754c\u9762\u3001VSCode \u7684\u63d2\u4ef6\u548c\u76f8\u5173\u7684\u547d\u4ee4\u884c\u5de5\u5177\u7b49\uff0c\u548c\u5185\u90e8\u7684 Kusion \u6a21\u578b\u5e93\u3001IaC \u5f15\u64ce\u548c Kusion \u670d\u52a1\u7b49\u8fdb\u884c\u80fd\u529b\u5bf9\u63a5\u3002\u6700\u4e0b\u9762\u7684\u662f KCL \u914d\u7f6e\u7b56\u7565\u8bed\u8a00\uff0c\u4ee5\u53ca\u548c KCL \u8bed\u8a00\u76f8\u5173\u7684\u8bed\u8a00\u63d2\u4ef6\u3001\u5176\u4ed6\u9ad8\u7ea7\u8bed\u8a00\u7684 SDK \u548c\u5176\u4ed6 OpenAPI \u98ce\u683c\u7684\u914d\u7f6e\u6570\u636e\u5bf9\u63a5\u7b49\uff0c\u8bed\u8a00\u548c\u534f\u8bae\u5c42\u4e3a\u4e0a\u9762\u7684 Konfig \u5927\u5e93\u63d0\u4f9b\u7f16\u7a0b\u80fd\u529b\u3001\u4e3a IaC \u5f15\u64ce\u63d0\u4f9b\u53ef\u88ab\u7f16\u7a0b\u7684 SDK \u80fd\u529b\u7b49\u3002"),(0,o.kt)("h2",{id:"3-\u548c\u4e0a\u6e38\u4e0b\u6e38\u7684\u5173\u7cfb"},"3. \u548c\u4e0a\u6e38\u4e0b\u6e38\u7684\u5173\u7cfb"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(87759).Z,width:"2326",height:"1268"})),(0,o.kt)("p",null,"Kusion \u5c5e\u4e8e\u4e91\u539f\u751f\u8fd0\u7ef4\u3001\u57fa\u7840\u8bbe\u65bd\u7ba1\u7406\u3001\u9886\u57df\u7f16\u7a0b\u8bed\u8a00\u53ca\u7f16\u8bd1\u5668\u5f00\u6e90\u9886\u57df\u3002Kusion \u6d89\u53ca\u7684\u4e0a\u4e0b\u6e38\u76f8\u5173\u9879\u76ee\u6709\uff1aKubernetes \u81ea\u8eab\u53ca\u751f\u6001\u6280\u672f\n\u3001Kubenetes \u8fd0\u7ef4\u81ea\u52a8\u5316\u6280\u672f\u3001GitOps CICD \u7cfb\u7edf\u3001IaaS \u7ba1\u7406\u6280\u672f\u53ca\u5404\u4e2a\u4e91\u5382\u5546\u548c IaC \u9886\u57df\u8bed\u8a00\u53ca\u6570\u636e\u683c\u5f0f\u7b49\u3002"))}p.isMDXComponent=!0},47021:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/iac-arch-01-41ea60d29a5b7ec1a15e4442f511bf02.png"},85938:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/iac-arch-02-8073117c3b8770e76b3b8e488b9d72eb.png"},87759:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kusion-connect-x-01-97a1b885042857701e9884229ca743c8.png"}}]);