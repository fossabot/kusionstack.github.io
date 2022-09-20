"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1},s="\u6982\u5ff5 & \u5b9a\u4e49",a={unversionedId:"user_docs/support/faq-concepts",id:"user_docs/support/faq-concepts",title:"\u6982\u5ff5 & \u5b9a\u4e49",description:"1. Kusion",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/support/faq-concepts.md",sourceDirName:"user_docs/support",slug:"/user_docs/support/faq-concepts",permalink:"/zh-CN/docs/user_docs/support/faq-concepts",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/support/faq-concepts.md",tags:[],version:"current",lastUpdatedBy:"HeiPa",lastUpdatedAt:1663660560,formattedLastUpdatedAt:"2022/9/20",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh-CN/docs/user_docs/support/"},next:{title:"KCL \u8bed\u6cd5",permalink:"/zh-CN/docs/user_docs/support/faq-kcl"}},c={},l=[{value:"1. Kusion",id:"1-kusion",level:2},{value:"2. \u5927\u5199\u7684 KCL \u8bed\u8a00",id:"2-\u5927\u5199\u7684-kcl-\u8bed\u8a00",level:2},{value:"3. \u5c0f\u5199\u7684 kcl \u547d\u4ee4",id:"3-\u5c0f\u5199\u7684-kcl-\u547d\u4ee4",level:2},{value:"4. KCLVM",id:"4-kclvm",level:2},{value:"5. KusionCtl",id:"5-kusionctl",level:2},{value:"6. Konfig",id:"6-konfig",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6982\u5ff5--\u5b9a\u4e49"},"\u6982\u5ff5 & \u5b9a\u4e49"),(0,o.kt)("h2",{id:"1-kusion"},"1. Kusion"),(0,o.kt)("p",null,"F",(0,o.kt)("strong",{parentName:"p"},"usion")," Cloud Native on ",(0,o.kt)("strong",{parentName:"p"},"K"),"ubernetes. Kusion \u4e00\u8bcd\u6765\u6e90\u4e8e fusion\uff08\u610f\u4e3a\u878d\u5408\uff09 + kubernetes\uff0c\u662f\u57fa\u4e8e\u4e91\u539f\u751f\u57fa\u7840\u8bbe\u65bd\uff0c\u901a\u8fc7\u5b9a\u4e49\u4e91\u539f\u751f\u53ef\u7f16\u7a0b\u63a5\u5165\u5c42\uff0c\u63d0\u4f9b\u5305\u62ec\u914d\u7f6e\u8bed\u8a00\u3001\u6a21\u578b\u754c\u9762\u3001\u81ea\u52a8\u5316\u5de5\u5177\u3001\u6700\u4f73\u5b9e\u8df5\u5728\u5185\u7684\u4e00\u6574\u5957\u89e3\u51b3\u65b9\u6848\uff0c\u8fde\u901a\u4e91\u539f\u751f\u57fa\u7840\u8bbe\u65bd\u4e0e\u4e1a\u52a1\u5e94\u7528\uff0c\u8fde\u63a5\u5b9a\u4e49\u548c\u4f7f\u7528\u57fa\u7840\u8bbe\u65bd\u7684\u5404\u4e2a\u56e2\u961f\uff0c\u4e32\u8054\u5e94\u7528\u751f\u547d\u5468\u671f\u7684\u7814\u53d1\u3001\u6d4b\u8bd5\u3001\u96c6\u6210\u3001\u53d1\u5e03\u5404\u4e2a\u9636\u6bb5\uff0c\u670d\u52a1\u4e8e\u4e91\u539f\u751f\u81ea\u52a8\u5316\u7cfb\u7edf\u5efa\u8bbe\uff0c\u52a0\u901f\u4e91\u539f\u751f\u843d\u5730\u3002\u6211\u4eec\u5e73\u65f6\u63d0\u5230 Kusion\uff0c\u4e00\u822c\u662f\u5bf9\u8fd9\u4e00\u6574\u5957\u89e3\u51b3\u65b9\u6848\u7684\u7edf\u79f0\uff1b\u800c Kusion \u751f\u6001\u5de5\u5177\u94fe\u5219\u5305\u542b\u4e86 kcl \u547d\u4ee4\u884c\u5de5\u5177\u3001KusionCtl \u547d\u4ee4\u884c\u5de5\u5177\u3001KCL IDE \u63d2\u4ef6\u7b49\u8d2f\u7a7f Kusion \u89e3\u51b3\u65b9\u6848\u5404\u4e2a\u90e8\u5206\u7684\u81ea\u52a8\u5316\u5de5\u5177\u3002"),(0,o.kt)("h2",{id:"2-\u5927\u5199\u7684-kcl-\u8bed\u8a00"},"2. \u5927\u5199\u7684 KCL \u8bed\u8a00"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"K"),"usion ",(0,o.kt)("strong",{parentName:"p"},"C"),"onfiguration ",(0,o.kt)("strong",{parentName:"p"},"L"),"anguage. \u662f\u7531\u4e91\u539f\u751f\u5de5\u7a0b\u5316\u7cfb\u7edf\u56e2\u961f\u8bbe\u8ba1\u548c\u7814\u53d1\u7684",(0,o.kt)("strong",{parentName:"p"},"\u4e13\u7528\u4e8e\u914d\u7f6e\u5b9a\u4e49\u3001\u6821\u9a8c\u7684\u52a8\u6001\u5f3a\u7c7b\u578b\u914d\u7f6e\u8bed\u8a00"),"\uff0c\u91cd\u70b9\u670d\u52a1\u4e8e\u914d\u7f6e\uff08configuration\uff09& \u7b56\u7565\uff08policy programing\uff09\u573a\u666f\uff0c\u4ee5\u670d\u52a1\u4e91\u539f\u751f\u914d\u7f6e\u7cfb\u7edf\u4e3a\u8bbe\u8ba1\u76ee\u6807\uff0c\u4f46\u4f5c\u4e3a\u4e00\u79cd\u914d\u7f6e\u8bed\u8a00\u4e0d\u9650\u4e8e\u4e91\u539f\u751f\u9886\u57df\u3002KCL \u5438\u6536\u4e86\u58f0\u660e\u5f0f\u3001OOP \u7f16\u7a0b\u8303\u5f0f\u7684\u7406\u5ff5\u8bbe\u8ba1\uff0c\u9488\u5bf9\u4e91\u539f\u751f\u914d\u7f6e\u573a\u666f\u8fdb\u884c\u4e86\u5927\u91cf\u4f18\u5316\u548c\u529f\u80fd\u589e\u5f3a\u3002KCL \u6700\u521d\u53d7 Python3 \u811a\u672c\u8bed\u8a00\u542f\u53d1\uff0c\u4f9d\u6258 Python \u7684\u8bed\u8a00\u751f\u6001\uff0c\u76ee\u524d\u5df2\u7ecf\u53d1\u5c55\u4e3a\u72ec\u7acb\u7684\u9762\u5411\u914d\u7f6e\u7b56\u7565\u7684\u8bed\u8a00\u3002"),(0,o.kt)("h2",{id:"3-\u5c0f\u5199\u7684-kcl-\u547d\u4ee4"},"3. \u5c0f\u5199\u7684 kcl \u547d\u4ee4"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/cli/kcl/overview"},"kcl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\u4e00\u822c\u4f7f\u7528\u5168\u5927\u5199\u5b57\u6bcd\u7684 KCL \u4ee3\u6307 KCL \u8bed\u8a00\uff0c\u800c\u7528\u5168\u5c0f\u5199\u7684 kcl \u4ee3\u6307\u80fd\u5c06 KCL \u4ee3\u7801\u7f16\u8bd1\u4e3a\u4f4e\u5c42\u6b21\u6570\u636e\u8f93\u51fa\uff08\u5982 YAML, JSON \u7b49\uff09\u7684 kcl \u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,o.kt)("h2",{id:"4-kclvm"},"4. KCLVM"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"V"),"irtual ",(0,o.kt)("strong",{parentName:"p"},"M"),"achine to parse and compile KCL\u3002\u6307\u5f00\u53d1 kcl \u547d\u4ee4\u884c\u5de5\u5177\u7684\u5de5\u7a0b\u9879\u76ee\uff0c\u4e5f\u662f kcl \u547d\u4ee4\u884c\u5de5\u5177\u7684\u4ee3\u7801\u4ed3\u5e93\u540d\u79f0\uff0cKCLVM \u4f7f\u7528 Python\u3001Rust \u7b49\u591a\u79cd\u8bed\u8a00\u6df7\u5408\u5f00\u53d1\u3002"),(0,o.kt)("h2",{id:"5-kusionctl"},"5. KusionCtl"),(0,o.kt)("p",null,"Kusion Kubernetes Client\u3002",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/cli/kusionctl/overview"},"KusionCtl")," \u547d\u4ee4\u884c\u5de5\u5177\u65e8\u5728\u7b80\u5316\u7528\u6237\u5bf9 K8S \u7684\u4f7f\u7528\uff0c\u5185\u7f6e\u652f\u6301\u5bf9 KCL \u7684\u7f16\u8bd1\u3001\u901a\u8fc7\u767b\u5f55\u529f\u80fd\u539f\u751f\u652f\u6301 Identity \u80fd\u529b\uff0c\u652f\u6301\u591a\u96c6\u7fa4\u8bbf\u95ee\uff0c\u63d0\u4f9b\u8d44\u6e90\u72b6\u6001\u6c47\u603b\u53ca\u76f8\u5e94\u7684\u767d\u5c4f\u5c55\u793a\u3001\u5bf9\u7528\u6237\u53d8\u66f4\u6a21\u578b\u53ca\u5176\u5173\u8054\u6a21\u578b\u7684\u53d8\u66f4\u8ffd\u8e2a\u3001\u94fe\u8def\u53ef\u89c6\u5316\u3001live \u5bf9\u6bd4\u3001\u5173\u952e\u8d44\u6e90\u53ef\u89c6\u5316\u3001\u5f02\u5e38\u5b9a\u4f4d\u7b49\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"6-konfig"},"6. Konfig"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"K"),"usion ",(0,o.kt)("strong",{parentName:"p"},"C"),'onfig. Konfig \u662f\u4e00\u4e2a KCL \u4ee3\u7801\u4ed3\u5e93\uff0c\u5176\u4e2d\u7ec4\u7ec7\u4e86\u8682\u8681\u57df\u5185\u5404\u5e94\u7528\u7684\u57fa\u7840\u8bbe\u65bd\u914d\u7f6e\u3002\u4f9d\u636e\u56e2\u961f\u534f\u540c\u7684\u5c42\u6b21\uff0cKonfig \u4ed3\u5e93\u5212\u5206\u4e3a"\u57fa\u7840\u914d\u7f6e\u4ee3\u7801"\u548c"\u4e1a\u52a1\u914d\u7f6e\u4ee3\u7801"\u4e24\u90e8\u5206\uff0c\u91c7\u7528\u4e3b\u5e72\u5f00\u53d1\u3001\u5206\u652f\u53d1\u5e03\u7684\u5206\u652f\u7b56\u7565\u3002'))}u.isMDXComponent=!0}}]);