"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,k=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},a="Kusion",s={unversionedId:"user_docs/concepts/kusion",id:"user_docs/concepts/kusion",title:"Kusion",description:"Kusion \u662f KusionStack \u7684\u5e73\u53f0\u5de5\u7a0b\u5f15\u64ce\uff0c\u53ef\u4ee5\u89e3\u6790\u7528\u6237\u4f7f\u7528 Catalog \u4e2d\u7684 Kusion \u6a21\u578b\u63cf\u8ff0\u7684\u8fd0\u7ef4\u610f\u56fe\uff0c\u5bf9 Kubernetes\u3001IaaS \u4e91\u8d44\u6e90\u548c\u81ea\u5b9a\u4e49\u57fa\u7840\u8bbe\u65bd\u8fdb\u884c\u8fd0\u7ef4",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/concepts/kusion.md",sourceDirName:"user_docs/concepts",slug:"/user_docs/concepts/kusion",permalink:"/zh-CN/docs/user_docs/concepts/kusion",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/kusion.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1694522671,formattedLastUpdatedAt:"2023\u5e749\u670812\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"\u6574\u4f53\u67b6\u6784",permalink:"/zh-CN/docs/user_docs/concepts/arch"},next:{title:"KCL",permalink:"/zh-CN/docs/user_docs/concepts/kcl-lang"}},c={},u=[{value:"\u64cd\u4f5c\u5f15\u64ce",id:"\u64cd\u4f5c\u5f15\u64ce",level:2},{value:"\u8fd0\u884c\u65f6",id:"\u8fd0\u884c\u65f6",level:2},{value:"\u72b6\u6001",id:"\u72b6\u6001",level:2},{value:"Kusion \u662f\u5982\u4f55\u5de5\u4f5c\u7684",id:"kusion-\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:2}],p={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion"},"Kusion"),(0,o.kt)("p",null,"Kusion \u662f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack"},"KusionStack")," \u7684\u5e73\u53f0\u5de5\u7a0b\u5f15\u64ce\uff0c\u53ef\u4ee5\u89e3\u6790\u7528\u6237\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog")," \u4e2d\u7684 Kusion \u6a21\u578b\u63cf\u8ff0\u7684\u8fd0\u7ef4\u610f\u56fe\uff0c\u5bf9 Kubernetes\u3001IaaS \u4e91\u8d44\u6e90\u548c\u81ea\u5b9a\u4e49\u57fa\u7840\u8bbe\u65bd\u8fdb\u884c\u8fd0\u7ef4"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/arch.png",width:"50%",height:"50%"})),(0,o.kt)("p",null,"\u5b83\u5305\u542b\u4e09\u90e8\u5206: ",(0,o.kt)("inlineCode",{parentName:"p"},"Operation Engine\uff08\u64cd\u4f5c\u5f15\u64ce\uff09"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Runtimes\uff08\u8fd0\u884c\u65f6\uff09"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"State\uff08\u72b6\u6001\uff09"),"\uff0c\u6211\u4eec\u5c06\u5728\u4e0b\u9762\u5bf9\u6bcf\u4e2a\u7ec4\u4ef6\u8fdb\u884c\u63cf\u8ff0\u3002"),(0,o.kt)("h2",{id:"\u64cd\u4f5c\u5f15\u64ce"},"\u64cd\u4f5c\u5f15\u64ce"),(0,o.kt)("p",null,"\u64cd\u4f5c\u5f15\u64ce\u662f\u6574\u4e2a Kusion \u5f15\u64ce\u7684\u5165\u53e3\uff0c\u8d1f\u8d23 Kusion \u7684\u57fa\u672c\u64cd\u4f5c\uff0c\u5982 preview\uff08\u9884\u89c8\uff09\u3001apply\uff08\u5e94\u7528\uff09\u3001destroy\uff08\u9500\u6bc1\uff09\u7b49\u3002\u8be5\u90e8\u5206\u7684\u4e3b\u8981\u5de5\u4f5c\u6d41\u7a0b\u662f\u89e3\u6790\u64cd\u4f5c\u610f\u56fe\uff08Spec\uff09\u4e2d\u63cf\u8ff0\u7684\u8d44\u6e90\uff0c\u6839\u636e\u64cd\u4f5c\u547d\u4ee4\u786e\u5b9a\u5e94\u8be5\u4fee\u6539\u54ea\u4e2a\u8d44\u6e90\uff0c\u5e76\u5c06\u6b64\u64cd\u4f5c\u751f\u6548\u5230\u771f\u5b9e\u7684\u57fa\u7840\u8bbe\u65bd\u8d44\u6e90\u4e0a\u3002\u5728\u8fd9\u4e2a\u5de5\u4f5c\u6d41\u7a0b\u4e2d\uff0c\u8fd8\u6d89\u53ca\u5230\u8fd0\u884c\u65f6\u548c\u72b6\u6001\u3002"),(0,o.kt)("h2",{id:"\u8fd0\u884c\u65f6"},"\u8fd0\u884c\u65f6"),(0,o.kt)("p",null,"\u8fd0\u884c\u65f6\u662f\u5b9e\u9645\u57fa\u7840\u8bbe\u65bd\u548c Kusion \u4e4b\u95f4\u7684\u63a5\u53e3\u3002\u6240\u6709\u5bf9\u57fa\u7840\u8bbe\u65bd\u8d44\u6e90\u7684\u64cd\u4f5c\u90fd\u5e94\u8be5\u59d4\u6258\u7ed9\u4e00\u4e2a\u8fd0\u884c\u65f6\uff0c\u8fd0\u884c\u65f6\u5c06\u5177\u4f53\u64cd\u4f5c\u547d\u4ee4\u751f\u6548\u5230\u5b9e\u9645\u7684\u57fa\u7840\u8bbe\u65bd\u4e0a\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u4efb\u4f55\u5b9e\u73b0\u4e86\u8fd0\u884c\u65f6\u63a5\u53e3\u7684\u57fa\u7840\u8bbe\u65bd\u90fd\u53ef\u4ee5\u88ab Kusion \u7ba1\u7406\u3002"),(0,o.kt)("h2",{id:"\u72b6\u6001"},"\u72b6\u6001"),(0,o.kt)("p",null,"\u72b6\u6001\u662f\u5bf9\u64cd\u4f5c\u7ed3\u679c\u7684\u8bb0\u5f55\u3002\u5b83\u662f Kusion \u7ba1\u7406\u7684\u8d44\u6e90\u548c\u5b9e\u9645\u57fa\u7840\u8bbe\u65bd\u8d44\u6e90\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002\u72b6\u6001\u901a\u5e38\u7528\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"apply")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"preview")," \u547d\u4ee4\u91cc\u4e09\u8def\u5408\u5e76/\u5bf9\u6bd4\u4e2d\u7684\u4e00\u8def\u6570\u636e\u6e90\u3002"),(0,o.kt)("p",null,"\u72b6\u6001\u53ef\u4ee5\u5b58\u50a8\u5728\u591a\u79cd\u5b58\u50a8\u4ecb\u8d28\u4e2d\uff0c\u4f8b\u5982\u6587\u4ef6\u7cfb\u7edf\u3001\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\uff08OSS\uff09\u3001\u6570\u636e\u5e93\u3001HTTP\u670d\u52a1\u5668\u7b49\u3002"),(0,o.kt)("h2",{id:"kusion-\u662f\u5982\u4f55\u5de5\u4f5c\u7684"},"Kusion \u662f\u5982\u4f55\u5de5\u4f5c\u7684"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"preview"),"\u64cd\u4f5c\u4e3a\u4f8b\uff0c\u6f14\u793a\u8fd9\u4e09\u4e2a\u90e8\u5206\u5982\u4f55\u5728\u5b9e\u9645\u64cd\u4f5c\u4e2d\u76f8\u4e92\u534f\u4f5c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u64cd\u4f5c\u5f15\u64ce\u89e3\u6790\u64cd\u4f5c\u610f\u56fe\uff08Spec\uff09\u4e2d\u7684\u8d44\u6e90\uff0c\u5e76\u5c06\u5b83\u4eec\u8f6c\u6362\u6210\u4e00\u4e2aDAG\uff08\u6709\u5411\u65e0\u73af\u56fe\uff09\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u904d\u5386\u8fd9\u4e2aDAG\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u8fd0\u884c\u65f6\u83b7\u53d6\u5b9e\u9645\u57fa\u7840\u8bbe\u65bd\u4e2d\u7684\u6700\u65b0\u72b6\u6001\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4ece\u72b6\u6001\u5b58\u50a8\u4ecb\u8d28\u4e2d\u83b7\u53d6\u4e0a\u6b21\u7684\u64cd\u4f5c\u72b6\u6001\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u5408\u5e76/\u6bd4\u5bf9\u4e09\u4e2a\u72b6\u6001\uff1a\u64cd\u4f5c\u610f\u56fe\uff08Spec\uff09\u4e2d\u63cf\u8ff0\u7684\u671f\u671b\u72b6\u6001\u3001\u8fd0\u884c\u65f6\u83b7\u53d6\u7684\u5b9e\u65f6\u72b6\u6001\uff0c\u72b6\u6001\u4e2d\u8bb0\u5f55\u7684\u4e0a\u6b21\u72b6\u6001\uff0c\u5e76\u5c06\u5dee\u5f02\u7ed3\u679c\u8fd4\u56de\u5230\u63a7\u5236\u53f0\u3002")))}l.isMDXComponent=!0}}]);