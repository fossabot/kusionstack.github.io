"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=i,m=d["".concat(c,".").concat(g)]||d[g]||l[g]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={title:"\u68c0\u67e5\u4efb\u4f55\u8d44\u6e90\u7ec4\u548c\u8d44\u6e90"},o=void 0,s={unversionedId:"user-guide/insight/inspecting-any-resource-group-and-resource",id:"user-guide/insight/inspecting-any-resource-group-and-resource",title:"\u68c0\u67e5\u4efb\u4f55\u8d44\u6e90\u7ec4\u548c\u8d44\u6e90",description:"\u5728\u8fd9\u90e8\u5206\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u6e05\u6670\u7684\u6b65\u9aa4\u548c\u5b9e\u4f8b\u8be6\u7ec6\u89e3\u91ca\u5982\u4f55\u4f7f\u7528 Karpor \u6765\u68c0\u67e5\u4efb\u4f55\u8d44\u6e90\u7ec4\u6216\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/current/3-user-guide/3-insight/1-inspecting-any-resource-group-and-resource.md",sourceDirName:"3-user-guide/3-insight",slug:"/user-guide/insight/inspecting-any-resource-group-and-resource",permalink:"/zh/karpor/next/user-guide/insight/inspecting-any-resource-group-and-resource",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/3-user-guide/3-insight/1-inspecting-any-resource-group-and-resource.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1719479679,formattedLastUpdatedAt:"2024\u5e746\u670827\u65e5",sidebarPosition:1,frontMatter:{title:"\u68c0\u67e5\u4efb\u4f55\u8d44\u6e90\u7ec4\u548c\u8d44\u6e90"},sidebar:"karpor",previous:{title:"\u5982\u4f55\u6d1e\u5bdf",permalink:"/zh/karpor/next/user-guide/insight/"},next:{title:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4",permalink:"/zh/karpor/next/user-guide/insight/custom-resource-group"}},c={},p=[{value:"\u68c0\u67e5\u5177\u4f53\u8d44\u6e90",id:"\u68c0\u67e5\u5177\u4f53\u8d44\u6e90",level:2},{value:"\u68c0\u67e5\u5177\u4f53\u8d44\u6e90\u7ec4",id:"\u68c0\u67e5\u5177\u4f53\u8d44\u6e90\u7ec4",level:2},{value:"\u5728\u8d44\u6e90\u7ec4 / \u8d44\u6e90\u95f4\u7075\u6d3b\u5207\u6362",id:"\u5728\u8d44\u6e90\u7ec4--\u8d44\u6e90\u95f4\u7075\u6d3b\u5207\u6362",level:2}],u={toc:p};function l(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u8fd9\u90e8\u5206\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u6e05\u6670\u7684\u6b65\u9aa4\u548c\u5b9e\u4f8b\u8be6\u7ec6\u89e3\u91ca\u5982\u4f55\u4f7f\u7528 Karpor \u6765\u68c0\u67e5\u4efb\u4f55\u8d44\u6e90\u7ec4\u6216\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u719f\u6089\u76f8\u5173\u6982\u5ff5\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh/karpor/next/concepts/glossary"},"\u672f\u8bed\u8868")," \u7ae0\u8282\u3002"),(0,i.kt)("h2",{id:"\u68c0\u67e5\u5177\u4f53\u8d44\u6e90"},"\u68c0\u67e5\u5177\u4f53\u8d44\u6e90"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u641c\u7d22\u4f60\u611f\u5174\u8da3\u7684\u8d44\u6e90\uff1a\n",(0,i.kt)("img",{src:r(17193).Z,width:"1620",height:"1080"})),(0,i.kt)("li",{parentName:"ol"},"\u5728\u641c\u7d22\u7ed3\u679c\u9875\uff0c\u6240\u6709\u901a\u8fc7\u6761\u4ef6\u7b5b\u9009\u7684\u8d44\u6e90\u5c06\u4f1a\u88ab\u5217\u51fa\uff1a\n",(0,i.kt)("img",{src:r(15004).Z,width:"1620",height:"1080"})),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4efb\u610f\u8d44\u6e90\u540d\u79f0\uff0c\u5373\u53ef\u8df3\u8f6c\u5230\u8be5\u8d44\u6e90\u7684\u6d1e\u5bdf\u9875\u9762\uff1a\n",(0,i.kt)("img",{src:r(55899).Z,width:"1620",height:"1080"}))),(0,i.kt)("h2",{id:"\u68c0\u67e5\u5177\u4f53\u8d44\u6e90\u7ec4"},"\u68c0\u67e5\u5177\u4f53\u8d44\u6e90\u7ec4"),(0,i.kt)("p",null,"\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\uff0c\u5728\u6bcf\u4e00\u4e2a\u641c\u7d22\u7ed3\u679c\u6761\u76ee\u4e2d\uff0c\u8d44\u6e90\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Kind"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"Namespace")," \u7b49\u6807\u7b7e\u90fd\u5217\u4e86\u51fa\u6765\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e9b\u6807\u7b7e\u662f",(0,i.kt)("strong",{parentName:"p"},"\u8d85\u94fe\u63a5"),'\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a "',(0,i.kt)("strong",{parentName:"p"},"\u951a\u70b9"),'"\u3002\u5b83\u4eec\u4ee3\u8868\u4e86\u6307\u5411\u7279\u5b9a\u8d44\u6e90\u7ec4\u6216\u8d44\u6e90\u7684\u94fe\u63a5\u3002\u901a\u8fc7\u70b9\u51fb\u8fd9\u4e9b',(0,i.kt)("strong",{parentName:"p"},"\u951a\u70b9"),"\uff0c\u4f60\u53ef\u4ee5\u5feb\u901f\u8df3\u8f6c\u5230\u8be5\u8d44\u6e90\u7ec4\u6216\u8d44\u6e90\u7684\u6d1e\u5bdf\u9875\u9762\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(15004).Z,width:"1620",height:"1080"})),(0,i.kt)("h2",{id:"\u5728\u8d44\u6e90\u7ec4--\u8d44\u6e90\u95f4\u7075\u6d3b\u5207\u6362"},"\u5728\u8d44\u6e90\u7ec4 / \u8d44\u6e90\u95f4\u7075\u6d3b\u5207\u6362"),(0,i.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u9664\u4e86\u524d\u8ff0\u641c\u7d22\u7ed3\u679c\u4e2d\u7684\u6807\u7b7e\u5916\uff0c\u5728\u4efb\u4f55\u9875\u9762\u4e0a\u770b\u5230\u7684\u4efb\u4f55\u8d44\u6e90 / \u8d44\u6e90\u7ec4\u540d\u79f0\uff0c\u90fd\u53ef\u4ee5\u4f5c\u4e3a",(0,i.kt)("strong",{parentName:"p"},"\u951a\u70b9"),"\u91cd\u5b9a\u5411\uff0c\u5c31\u50cf\u662f\u65f6\u7a7a\u866b\u6d1e\uff0c\u5141\u8bb8\u4f60\u5728\u4efb\u4f55\u7ef4\u5ea6\u4e4b\u95f4\u6765\u56de\u7a7f\u68ad\uff0c\u76f4\u5230\u627e\u5230\u4f60\u6b63\u5728\u641c\u7d22\u7684\u8d44\u6e90\u3002\u641c\u7d22\u548c\u951a\u70b9\u90fd\u662f\u52a0\u901f\u68c0\u7d22\u7684\u624b\u6bb5\uff0c\u5b83\u4eec\u662f Karpor \u4f5c\u4e3a Kubernetes \u63a2\u7d22\u5668\u7684\u5173\u952e\u7279\u6027\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(85681).Z,width:"1620",height:"1080"})))}l.isMDXComponent=!0},85681:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-breadcrumbs-78f6e0adefb8fe33d3e9b3283f0826c1.png"},55899:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/insight-home-68b10537ffdc4adbe6ab33392d1ec7d0.png"},17193:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/search-home-a8f5b070e7b508cef4fc78ba1215fc5f.png"},15004:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/search-result-58bd2c0b969e1223c47de9c59a55599d.png"}}]);