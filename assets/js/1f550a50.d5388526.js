"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=a(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||s;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var a=2;a<s;a++)i[a]=n[a];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const s={sidebar_position:1},i="\u7528\u6237\u754c\u9762",c={unversionedId:"user_docs/concepts/user-interface",id:"user_docs/concepts/user-interface",title:"\u7528\u6237\u754c\u9762",description:"1. \u5355 App \u5e94\u7528\u754c\u9762",source:"@site/docs/user_docs/concepts/user-interface.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/user-interface",permalink:"/docs/user_docs/concepts/user-interface",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/user-interface.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663221548,formattedLastUpdatedAt:"9/15/2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u67b6\u6784 & \u6982\u5ff5",permalink:"/docs/user_docs/concepts/"},next:{title:"Project & Stack",permalink:"/docs/user_docs/concepts/project-stack"}},p={},a=[{value:"1. \u5355 App \u5e94\u7528\u754c\u9762",id:"1-\u5355-app-\u5e94\u7528\u754c\u9762",level:2},{value:"2. \u89c4\u6a21\u5316 App \u5e94\u7528\u754c\u9762",id:"2-\u89c4\u6a21\u5316-app-\u5e94\u7528\u754c\u9762",level:2},{value:"3. \u4e0d\u540c\u89d2\u8272\u548c\u573a\u666f\u7ec4\u5408",id:"3-\u4e0d\u540c\u89d2\u8272\u548c\u573a\u666f\u7ec4\u5408",level:2},{value:"4. \u672c\u5730\u5de5\u5177\u548c\u751f\u6001\u96c6\u6210",id:"4-\u672c\u5730\u5de5\u5177\u548c\u751f\u6001\u96c6\u6210",level:2}],u={toc:a};function l(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7528\u6237\u754c\u9762"},"\u7528\u6237\u754c\u9762"),(0,o.kt)("h2",{id:"1-\u5355-app-\u5e94\u7528\u754c\u9762"},"1. \u5355 App \u5e94\u7528\u754c\u9762"),(0,o.kt)("p",null,"Kusion \u7528\u6237\u754c\u9762\u5e76\u4e0d\u662f\u4ec5\u4ec5\u6307\u4f20\u7edf\u7684\u7f51\u9875\u63a7\u5236\u53f0\u754c\u9762\uff0c\u5b83\u662f\u7528\u6237\u5728\u4f7f\u7528 Kusion \u8fc7\u7a0b\u4e2d\u76f4\u63a5\u611f\u77e5\u7684\u80fd\u529b\u548c\u529f\u80fd\u754c\u9762\u3002\u6700\u7b80\u5355\u7684 Kusion \u7528\u6237\u754c\u9762\u5c31\u662f ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/support/faq-concepts#5-kusionctl"},"KusionCtl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(8276).Z,width:"1464",height:"314"})),(0,o.kt)("p",null,"\u4ee5\u4e0a\u53ea\u662f\u9488\u5bf9\u5355 App \u5e94\u7528\u8fd9\u79cd\u7b80\u5355\u573a\u666f\u7684\u5173\u7cfb\u56fe\uff0c\u7528\u6237\u53ea\u9762\u5bf9\u4e00\u4e2a Kusion \u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,o.kt)("h2",{id:"2-\u89c4\u6a21\u5316-app-\u5e94\u7528\u754c\u9762"},"2. \u89c4\u6a21\u5316 App \u5e94\u7528\u754c\u9762"),(0,o.kt)("p",null,"Kusion \u6700\u521d\u662f\u9488\u5bf9\u89c4\u6a21\u5316 App \u5e94\u7528\u8fd0\u7ef4\u800c\u5f00\u53d1\u7684\u53ef\u7f16\u7a0b\u914d\u7f6e\u6280\u672f\u6808\u3002\u4e3a\u4e86\u5f00\u53d1\u6548\u7387\uff0cKusion \u540c\u65f6\u4e3a kusionctl \u547d\u4ee4\u884c\u63d0\u4f9b\u4e86\u914d\u5957\u548c\u7684\u63d0\u6548\u5de5\u5177\uff1aKCL \u547d\u4ee4\u3001DevOps \u5de5\u5177\u3001IDE \u63d2\u4ef6\u7b49\u3002\u6b64\u5916\u4e3a\u4e86\u548c\u5f00\u53d1\u7cfb\u7edf\u96c6\u6210\uff0cKusion \u540c\u65f6\u4e5f\u53ef\u9488\u5bf9 Github Action\u3001Gitlab Action \u548c ArgoCD \u7b49\u7cfb\u7edf\u914d\u7f6e\u5bf9\u5e94\u7684\u80fd\u529b\u3002\u56e0\u6b64\u66f4\u8be6\u7ec6\u7684 Kusion \u7528\u6237\u754c\u9762\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(99720).Z,width:"3862",height:"936"})),(0,o.kt)("p",null,"\u73b0\u5728 Kusion \u7528\u6237\u754c\u9762\u5bf9\u5e94\u5176\u4e2d\u5411\u5de6\u5012\u4e0b\u7684\u5927\u5199 L \u5f62\u72b6\u7684\u754c\u9762\uff0c\u5305\u542b\u672c\u5730\u5de5\u5177\u548c\u5404\u79cd CICD \u96c6\u6210\u7684\u754c\u9762\u7b49\u3002"),(0,o.kt)("h2",{id:"3-\u4e0d\u540c\u89d2\u8272\u548c\u573a\u666f\u7ec4\u5408"},"3. \u4e0d\u540c\u89d2\u8272\u548c\u573a\u666f\u7ec4\u5408"),(0,o.kt)("p",null,"\u5728\u89c4\u6a21\u5316\u8fd0\u7ef4\u4e2d\uff0c\u7ecf\u5e38\u9700\u8981\u6d89\u53ca App \u548c\u57fa\u7840\u8bbe\u65bd\u4e24\u4e2a\u4e0d\u540c\u7684\u5e94\u7528\u573a\u666f\uff0c\u540c\u65f6\u6d89\u53ca\u5f00\u53d1\u8005\u548c SRE \u4e24\u79cd\u4e0d\u540c\u7684\u89d2\u8272\uff0c\u4e24\u79cd\u89d2\u8272\u548c\u4e24\u79cd\u573a\u666f\u4ea7\u751f\u7684\u591a\u79cd\u7ec4\u5408\u3002\u4e0d\u540c\u89d2\u8272\u7684\u7528\u6237\u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\u5206\u522b\u5f00\u53d1 App Ops Config \u548c Infra Ops Config\uff0c\u5e76\u7edf\u4e00\u5230 Konfig \u5927\u5e93\u4e2d\u8fdb\u884c\u5f00\u53d1\u548c\u7248\u672c\u7ba1\u7406\u3002\u8fd9\u4e9b\u914d\u7f6e\u6700\u7ec8\u6784\u6210\u4e86\u89c4\u6a21\u5316\u8fd0\u7ef4\u6d89\u53ca\u5230\u5404\u79cd\u914d\u7f6e\u4ee3\u7801\uff0c\u5b83\u4eec\u901a\u8fc7 Kusion \u7528\u6237\u754c\u9762\u5f00\u53d1\u3001\u6d4b\u8bd5\uff0c\u5e76\u6700\u7ec8\u901a\u8fc7\u5404\u79cd CICD \u7cfb\u7edf\u81ea\u52a8\u5316 Apply \u5230\u6700\u7ec8\u76ee\u6807\u5e73\u53f0\u3002"),(0,o.kt)("h2",{id:"4-\u672c\u5730\u5de5\u5177\u548c\u751f\u6001\u96c6\u6210"},"4. \u672c\u5730\u5de5\u5177\u548c\u751f\u6001\u96c6\u6210"),(0,o.kt)("p",null,"KCL \u547d\u4ee4\u884c\u5de5\u5177\u3001DevOps \u5de5\u5177\u548c IDE \u63d2\u4ef6\u7b49\u672c\u5730\u5de5\u5177\u7528\u4e8e\u63d0\u4f9b\u539f\u5b50\u7684\u80fd\u529b\uff0c\u540c\u65f6\u65b9\u4fbf\u672c\u5730\u5f00\u53d1\u5de5\u4f5c\u3002\u5f00\u53d1\u5b8c\u6210\u4e4b\u540e\u901a\u8fc7 Konfig \u5927\u5e93\u5408\u5e76\u4ee3\u7801\u65f6\u89e6\u53d1\u5404\u79cd CICD \u7cfb\u7edf\u81ea\u52a8\u5316 Apply \u5230\u6700\u7ec8\u76ee\u6807\u5e73\u53f0\u3002"))}l.isMDXComponent=!0},8276:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kusion-user-interface-01-04006761edeab7320394fb05fd4b94aa.png"},99720:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kusion-user-interface-02-255903608f10454ce8f7276097201e8f.png"}}]);