"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[25795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,m=c["".concat(l,".").concat(k)]||c[k]||d[k]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},36019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={title:"\u544a\u522b\u96c6\u7fa4\u8bc1\u4e66\u5207\u6362\uff0c\u8ba9\u4f60\u201c\u4e00\u5361\u901a\u884c\u201d"},o=void 0,p={unversionedId:"user-guide/best-production-practices/one-pass-with-proxy",id:"version-v0.4/user-guide/best-production-practices/one-pass-with-proxy",title:"\u544a\u522b\u96c6\u7fa4\u8bc1\u4e66\u5207\u6362\uff0c\u8ba9\u4f60\u201c\u4e00\u5361\u901a\u884c\u201d",description:"\u6311\u6218\u4e0e\u9700\u6c42",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.4/3-user-guide/4-best-production-practices/1-one-pass-with-proxy.md",sourceDirName:"3-user-guide/4-best-production-practices",slug:"/user-guide/best-production-practices/one-pass-with-proxy",permalink:"/zh/karpor/v0.4/user-guide/best-production-practices/one-pass-with-proxy",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/3-user-guide/4-best-production-practices/1-one-pass-with-proxy.md",tags:[],version:"v0.4",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1727679725,formattedLastUpdatedAt:"2024\u5e749\u670830\u65e5",sidebarPosition:1,frontMatter:{title:"\u544a\u522b\u96c6\u7fa4\u8bc1\u4e66\u5207\u6362\uff0c\u8ba9\u4f60\u201c\u4e00\u5361\u901a\u884c\u201d"},sidebar:"karpor",previous:{title:"\u62d3\u6251\u7ed3\u6784",permalink:"/zh/karpor/v0.4/user-guide/insight/topology"},next:{title:"\u8d21\u732e\u6307\u5357",permalink:"/zh/karpor/v0.4/developer-guide/contribution-guide/"}},l={},s=[{value:"\u6311\u6218\u4e0e\u9700\u6c42",id:"\u6311\u6218\u4e0e\u9700\u6c42",level:2},{value:"\u5927\u89c4\u6a21\u591a\u96c6\u7fa4\u7684\u89c4\u6a21\u6311\u6218",id:"\u5927\u89c4\u6a21\u591a\u96c6\u7fa4\u7684\u89c4\u6a21\u6311\u6218",level:3},{value:"\u591a\u96c6\u7fa4\u8bbf\u95ee\u8005\u7684\u57fa\u672c\u9700\u6c42",id:"\u591a\u96c6\u7fa4\u8bbf\u95ee\u8005\u7684\u57fa\u672c\u9700\u6c42",level:3},{value:"&quot;\u4e00\u7ad9\u5f0f\u901a\u884c&quot; \u7684\u7406\u5ff5",id:"\u4e00\u7ad9\u5f0f\u901a\u884c-\u7684\u7406\u5ff5",level:2},{value:"\u591a\u96c6\u7fa4\u8bf7\u6c42\u8def\u7531\u548c\u4ee3\u7406",id:"\u591a\u96c6\u7fa4\u8bf7\u6c42\u8def\u7531\u548c\u4ee3\u7406",level:3},{value:"\u652f\u6301\u6240\u6709 Kubernetes \u539f\u751f\u8bf7\u6c42",id:"\u652f\u6301\u6240\u6709-kubernetes-\u539f\u751f\u8bf7\u6c42",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6311\u6218\u4e0e\u9700\u6c42"},"\u6311\u6218\u4e0e\u9700\u6c42"),(0,i.kt)("h3",{id:"\u5927\u89c4\u6a21\u591a\u96c6\u7fa4\u7684\u89c4\u6a21\u6311\u6218"},"\u5927\u89c4\u6a21\u591a\u96c6\u7fa4\u7684\u89c4\u6a21\u6311\u6218"),(0,i.kt)("p",null,"2014 \u5e74 6 \u6708\uff0cKubernetes \u4ece Google \u7684\u5185\u90e8 Borg \u9879\u76ee\u8bde\u751f\uff0c\u5f15\u4eba\u6ce8\u76ee\u5730\u4eae\u76f8\u3002\u5728\u79d1\u6280\u5de8\u5934\u7684\u652f\u6301\u548c\u4e00\u4e2a\u84ec\u52c3\u53d1\u5c55\u7684\u5f00\u6e90\u793e\u533a\u7684\u5e2e\u52a9\u4e0b\uff0c\u5b83\u9010\u6e10\u6210\u4e3a\u4e86\u5bb9\u5668\u7f16\u6392\u9886\u57df\u7684\u4e8b\u5b9e\u6807\u51c6\u3002\u968f\u7740\u516c\u53f8\u5f00\u59cb\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u90e8\u7f72 Kubernetes\uff0c\u5355\u4e2a Kubernetes \u96c6\u7fa4\u65e0\u6cd5\u518d\u6ee1\u8db3\u5185\u90e8\u65e5\u76ca\u590d\u6742\u7684\u9700\u6c42\u3002\u5355\u4e2a\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u6570\u91cf\u8d85\u8fc7\u793e\u533a\u63a8\u8350\u7684\u9650\u5236\uff085,000\uff09\u662f\u5f88\u5e38\u89c1\u7684\uff0c\u4f7f\u5f97\u6269\u5c55\u5230\u591a\u96c6\u7fa4\u6210\u4e3a\u4e00\u4e2a\u81ea\u7136\u7684\u9009\u62e9\u3002"),(0,i.kt)("h3",{id:"\u591a\u96c6\u7fa4\u8bbf\u95ee\u8005\u7684\u57fa\u672c\u9700\u6c42"},"\u591a\u96c6\u7fa4\u8bbf\u95ee\u8005\u7684\u57fa\u672c\u9700\u6c42"),(0,i.kt)("p",null,"\u968f\u7740\u591a\u96c6\u7fa4\u7684\u84ec\u52c3\u53d1\u5c55\uff0c\u5404\u79cd\u5e73\u53f0\u53ef\u80fd\u9700\u8981\u8de8\u4e0d\u540c\u96c6\u7fa4\u8bbf\u95ee\u8d44\u6e90\uff0c\u9700\u8981\u83b7\u53d6\u6bcf\u4e2a\u96c6\u7fa4\u7684 KubeConfig\u3002"),(0,i.kt)("p",null,"\u968f\u7740\u7528\u6237\u548c\u96c6\u7fa4\u6570\u91cf\u7684\u589e\u52a0\uff0c\u96c6\u7fa4\u7ba1\u7406\u5458\u9762\u4e34\u7740\u5de8\u5927\u7684\u65f6\u95f4\u6210\u672c\uff1a\u5982\u679c\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"M")," \u4e2a\u96c6\u7fa4\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," \u4e2a\u7528\u6237\uff0c\u7ba1\u7406 KubeConfig \u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5c06\u53d8\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"O (M*N)"),"\u3002\u6b64\u5916\uff0c\u7528\u6237\u5728\u8bbf\u95ee\u4e0d\u540c\u96c6\u7fa4\u65f6\u9700\u8981\u5207\u6362\u4e0d\u540c\u7684 KubeConfig\uff0c\u4e0d\u540c\u96c6\u7fa4\u7684 KubeConfig \u5bf9\u5e94\u7684\u6743\u9650\u4e5f\u5404\u4e0d\u76f8\u540c\uff0c\u65e0\u7591\u589e\u52a0\u4e86\u4f7f\u7528\u7684\u590d\u6742\u5ea6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u76f4\u63a5\u8fde\u63a5\uff1a\u7528\u6237\u9700\u8981\u7ef4\u62a4\u591a\u4e2a KubeConfigs",src:n(19563).Z,width:"1820",height:"1368"})),(0,i.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6709\u6ca1\u6709\u4e00\u79cd\u65b9\u6cd5\u80fd\u65b9\u4fbf\u5730\u8bbf\u95ee\u4e0d\u540c\u96c6\u7fa4\u4e2d\u7684\u8d44\u6e90\uff0c\u800c\u65e0\u9700\u7ef4\u62a4\u5927\u91cf\u7684 KubeConfig \u548c\u7ba1\u7406\u8de8\u96c6\u7fa4\u7684\u5404\u79cd\u7528\u6237\u6743\u9650\u95ee\u9898\uff1f\u6b64\u5916\uff0c\u8fd9\u79cd\u65b9\u6cd5\u7406\u60f3\u5730\u5e94\u8be5\u662f\u4e91\u539f\u751f\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7 kubectl \u548c Kubernetes \u5b98\u65b9\u5ba2\u6237\u7aef\u8bbf\u95ee\uff0c\u4ee5\u964d\u4f4e\u8fc7\u6e21\u5230\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\u7684\u6210\u672c\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u7684\u51fa\u73b0\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002"),(0,i.kt)("h2",{id:"\u4e00\u7ad9\u5f0f\u901a\u884c-\u7684\u7406\u5ff5"},'"\u4e00\u7ad9\u5f0f\u901a\u884c" \u7684\u7406\u5ff5'),(0,i.kt)("p",null,"\u6211\u4eec\u5f00\u53d1\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor"),"\uff0c\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\u3002\u4f5c\u4e3a\u4e00\u4e2a Kubernetes \u8d44\u6e90\u63a2\u7d22\u5668\uff0c\u5728\u641c\u7d22\u548c\u6d1e\u5bdf\u96c6\u7fa4\u8d44\u6e90\u65b9\u9762\u5177\u6709\u72ec\u7279\u4f18\u52bf\uff0c\u5b83\u7684\u57fa\u7840\u591a\u96c6\u7fa4\u7ba1\u7406\u7ec4\u4ef6\uff0c\u5177\u5907\u96c6\u7fa4\u8bc1\u4e66\u9881\u53d1\u548c\u591a\u96c6\u7fa4\u8bf7\u6c42\u4ee3\u7406\u7684\u7279\u70b9\uff0c\u4f7f\u5176\u9ad8\u5ea6\u9002\u5408\u4f5c\u4e3a\u5e73\u53f0\u5bf9\u591a\u4e2a\u96c6\u7fa4\u7684\u7edf\u4e00\u8bbf\u95ee\u5165\u53e3\u3002\u8be5\u7ec4\u4ef6\u652f\u6301\u4ee5\u4e91\u539f\u751f\u65b9\u5f0f\u8f6c\u53d1\u7528\u6237\u8bf7\u6c42\u5230\u6307\u5b9a\u96c6\u7fa4\uff0c\u5141\u8bb8\u7528\u6237\u7ef4\u62a4\u4e00\u5957 KubeConfig \u6765\u8bbf\u95ee\u4e0d\u540c\u7684\u96c6\u7fa4\uff0c\u4f7f\u8bbf\u95ee\u591a\u96c6\u7fa4\u50cf\u8bbf\u95ee\u5355\u4e2a\u96c6\u7fa4\u4e00\u6837\u7b80\u5355\u3002\u90a3\u4e48\uff0c\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u5462\uff1f\u4e0b\u9762\uff0c\u6211\u4eec\u4ecb\u7ecd ",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u7684\u67b6\u6784\u548c\u529f\u80fd\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u4f7f\u7528\u591a\u96c6\u7fa4\u7f51\u5173\uff1a\u7528\u6237\u53ea\u9700\u8981\u7ef4\u62a4\u4e00\u5957 KubeConfigs",src:n(13942).Z,width:"1820",height:"1608"})),(0,i.kt)("h3",{id:"\u591a\u96c6\u7fa4\u8bf7\u6c42\u8def\u7531\u548c\u4ee3\u7406"},"\u591a\u96c6\u7fa4\u8bf7\u6c42\u8def\u7531\u548c\u4ee3\u7406"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u5305\u542b\u4e00\u4e2a\u5e94\u7528\u5c42\u7f51\u5173\uff0c\u80fd\u591f\u5c06\u4efb\u4f55 Kubernetes \u98ce\u683c\u7684\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u6307\u5b9a\u7684 Kubernetes \u96c6\u7fa4\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u4e5f\u662f\u57fa\u4e8e Kubernetes \u6846\u67b6\u5f00\u53d1\u7684\uff0c\u4f5c\u4e3a kube-apiserver\uff0c\u53ef\u4ee5\u72ec\u7acb\u8fd0\u884c\u6216\u4f5c\u4e3a\u73b0\u6709 kube-apiserver \u7684\u6269\u5c55\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u652f\u6301\u5904\u7406\u4e24\u79cd\u7c7b\u578b\u7684\u6269\u5c55\u8d44\u6e90\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster/Proxy"),"\uff0c\u524d\u8005\u7528\u4e8e\u5b58\u50a8\u96c6\u7fa4\u4fe1\u606f\uff0c\u540e\u8005\u7528\u4e8e\u5c06\u7528\u6237\u8bf7\u6c42\u8f6c\u53d1\u5230\u7279\u5b9a\u96c6\u7fa4\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Kubernetes \u5b98\u65b9 CLI\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"\uff09\u6216 SDK\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"client-go"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"client-java")," \u7b49\uff09\u8fdb\u884c\u8bbf\u95ee\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u5c06\u6240\u6709\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster/Proxy")," \u5b50\u8d44\u6e90\u7684\u8bbf\u95ee\u4ee3\u7406\u5230\u76ee\u6807\u96c6\u7fa4\u3002\u4f8b\u5982\uff0c\u8981\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster1")," \u96c6\u7fa4\u68c0\u7d22 Pod \u4fe1\u606f\uff0c\u7528\u6237\u9700\u8981\u5411 ",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u53d1\u9001 ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /apis/kusionstack.io/Cluster/cluster1/proxy/api/v1/pods")," \u8bf7\u6c42\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u5c06\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster/Cluster1")," \u8d44\u6e90\u751f\u6210\u4e00\u4e2a KubeConfig \u4ee5\u8bbf\u95ee\u8be5\u96c6\u7fa4\uff0c\u5e76\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/pods")," \u8bf7\u6c42\u4ee3\u7406\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster1")," \u96c6\u7fa4\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u4f7f\u7528 kubectl \u548c karpor \u8bc1\u4e66\u8bbf\u95ee\u4efb\u4f55\u7ba1\u7406\u7684\u96c6\u7fa4",src:n(57559).Z,width:"1246",height:"574"})),(0,i.kt)("h3",{id:"\u652f\u6301\u6240\u6709-kubernetes-\u539f\u751f\u8bf7\u6c42"},"\u652f\u6301\u6240\u6709 Kubernetes \u539f\u751f\u8bf7\u6c42"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u652f\u6301\u8f6c\u53d1\u6240\u6709 kube-apiserver \u8bf7\u6c42\u3002\u5177\u4f53\u6765\u8bf4\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u662f\u4e00\u4e2a\u5e94\u7528\u5c42\u7f51\u5173\uff0c\u901a\u8fc7 HTTP connect \u534f\u8bae\u4ee3\u7406 HTTP \u8bf7\u6c42\u3002\u9664\u4e86\u652f\u6301\u5bf9\u8d44\u6e90\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"create"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"update")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"delete")," \u64cd\u4f5c\u5916\uff0c\u5b83\u8fd8\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"watch"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"log"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"exec"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"attach")," \u7b49\u3002\uff08\u7531\u4e8e\u7528\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"attach")," \u7684 SPDY \u534f\u8bae\u4e0d\u652f\u6301 http2\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u5728\u8f6c\u53d1\u8fd9\u4e9b\u8bf7\u6c42\u65f6\u4f1a\u7981\u7528 http2\uff0c\u5207\u6362\u5230 http1.1 \u5e76\u652f\u6301 hijacker \u5904\u7406\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(93570).Z,width:"1300",height:"888"})),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"\u4ece\u4e0a\u6587\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Karpor")," \u7684\u591a\u96c6\u7fa4\u7ba1\u7406\u7ec4\u4ef6\uff0c\u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u63a7\u6743\u9650\u7684 \u201c\u591a\u96c6\u7fa4\u901a\u884c\u8bc1\u201d\u3002\u7528\u6237\u4e0d\u518d\u9700\u8981\u5173\u5fc3\u9891\u7e41\u5207\u6362\u96c6\u7fa4\u8bc1\u4e66\u548c\u65b0\u96c6\u7fa4\u7684\u63a5\u5165\u7b49\u95ee\u9898\u3002\u6709\u4e86\u8fd9\u4e2a\u201c\u4e00\u8bc1\u901a\u884c\u201d\uff0c\u8bbf\u95ee\u591a\u4e2a\u96c6\u7fa4\u7684\u6210\u672c\u964d\u4f4e\u4e86\uff0c\u6ee1\u8db3\u4e86\u5927\u591a\u6570\u7528\u6237\u5728\u591a\u96c6\u7fa4\u5e73\u53f0\u4e0a\u7684\u6700\u57fa\u672c\u9700\u6c42\u3002"))}d.isMDXComponent=!0},19563:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20240326163622363-8c92f17aa1abdebcf4caf86a62b849ff.png"},13942:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20240326164141400-e674819a47d47ad0e09b272d8333c191.png"},57559:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20240326165247891-2dd2decd1f8caf371be5ebe4fe9429f0.png"},93570:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20240326165632158-8a9a4fd137d861a36b419f91b7a0c8eb.png"}}]);