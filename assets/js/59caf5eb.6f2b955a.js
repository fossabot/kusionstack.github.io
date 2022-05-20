"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8643],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=s(n),m=i,f=k["".concat(l,".").concat(m)]||k[m]||c[m]||a;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,u[1]=o;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6042:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),u=["components"],o={},l="KusionStack \u7b80\u4ecb",s={unversionedId:"user_docs/intro/kusion-intro",id:"user_docs/intro/kusion-intro",title:"KusionStack \u7b80\u4ecb",description:"1. KusionStack \u662f\u4ec0\u4e48",source:"@site/docs/user_docs/intro/kusion-intro.md",sourceDirName:"user_docs/intro",slug:"/user_docs/intro/kusion-intro",permalink:"/docs/user_docs/intro/kusion-intro",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/intro/kusion-intro.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1653043736,formattedLastUpdatedAt:"2022/5/20",frontMatter:{},sidebar:"user_docs",previous:{title:"\u7b80\u4ecb",permalink:"/docs/user_docs/intro/"},next:{title:"KusionStack \u4e0e\u793e\u533a\u5de5\u5177\u5f02\u540c",permalink:"/docs/user_docs/intro/vs-x"}},p={},c=[{value:"1. KusionStack \u662f\u4ec0\u4e48",id:"1-kusionstack-\u662f\u4ec0\u4e48",level:2},{value:"2. \u4e3a\u4ec0\u4e48\u5f00\u53d1 Kusion",id:"2-\u4e3a\u4ec0\u4e48\u5f00\u53d1-kusion",level:2},{value:"3. Kusion \u6280\u672f\u6808\u7684\u7ec4\u6210",id:"3-kusion-\u6280\u672f\u6808\u7684\u7ec4\u6210",level:2},{value:"4. Kusion \u9879\u76ee\u613f\u666f",id:"4-kusion-\u9879\u76ee\u613f\u666f",level:2}],k={toc:c};function m(e){var t=e.components,o=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kusionstack-\u7b80\u4ecb"},"KusionStack \u7b80\u4ecb"),(0,a.kt)("h2",{id:"1-kusionstack-\u662f\u4ec0\u4e48"},"1. KusionStack \u662f\u4ec0\u4e48"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"KusionStack \u662f\u5f00\u6e90\u7684\u53ef\u7f16\u7a0b\u4e91\u539f\u751f\u534f\u8bae\u6808\uff01")),(0,a.kt)("p",null,"KusionStack \u4e2d\u7684 Kusion \u4e00\u8bcd\u6765\u6e90\u4e8e fusion\uff08\u610f\u4e3a\u878d\u5408\uff09 + kubernetes\uff0c\u662f\u57fa\u4e8e\u4e91\u539f\u751f\u57fa\u7840\u8bbe\u65bd\uff0c\u901a\u8fc7\u5b9a\u4e49\u4e91\u539f\u751f\u53ef\u7f16\u7a0b\u63a5\u5165\u5c42\uff0c\u63d0\u4f9b\u5305\u62ec\u914d\u7f6e\u8bed\u8a00\u3001\u6a21\u578b\u754c\u9762\u3001\u81ea\u52a8\u5316\u5de5\u5177\u3001\u6700\u4f73\u5b9e\u8df5\u5728\u5185\u7684\u4e00\u6574\u5957\u89e3\u51b3\u65b9\u6848\uff0c\u8fde\u901a\u4e91\u539f\u751f\u57fa\u7840\u8bbe\u65bd\u4e0e\u4e1a\u52a1\u5e94\u7528\uff0c\u8fde\u63a5\u5b9a\u4e49\u548c\u4f7f\u7528\u57fa\u7840\u8bbe\u65bd\u7684\u5404\u4e2a\u56e2\u961f\uff0c\u4e32\u8054\u5e94\u7528\u751f\u547d\u5468\u671f\u7684\u7814\u53d1\u3001\u6d4b\u8bd5\u3001\u96c6\u6210\u3001\u53d1\u5e03\u5404\u4e2a\u9636\u6bb5\uff0c\u670d\u52a1\u4e8e\u4e91\u539f\u751f\u81ea\u52a8\u5316\u7cfb\u7edf\u5efa\u8bbe\uff0c\u52a0\u901f\u4e91\u539f\u751f\u843d\u5730\u3002"),(0,a.kt)("h2",{id:"2-\u4e3a\u4ec0\u4e48\u5f00\u53d1-kusion"},"2. \u4e3a\u4ec0\u4e48\u5f00\u53d1 Kusion"),(0,a.kt)("p",null,"\u76ee\u524d K8S \u5df2\u7ecf\u662f\u4e91\u8ba1\u7b97\u7684\u552f\u4e00\u64cd\u4f5c\u7cfb\u7edf\uff0c\u63d0\u4f9b\u4e86\u8fd0\u7ef4\u66f4\u52a0\u53cb\u597d\u7684\u58f0\u660e\u5f0f API\uff0c\u662f\u4e91\u539f\u751f\u5e94\u7528\u7684\u6807\u51c6\u5e95\u5ea7\u3002\u4f46\u662f\u76ee\u524d\u7684\u5f88\u591a\u57fa\u7840\u8bbe\u65bd\u8fd8\u662f\u901a\u8fc7\u539f\u59cb\u6570\u636e\u7684\u65b9\u5f0f\u63cf\u8ff0(IaD)\uff0c\u539f\u59cb\u6570\u636e\u6570\u636e\u4e0d\u9002\u5408\u5927\u89c4\u6a21\u7684\u534f\u540c\u5f00\u53d1\uff0c\u56e0\u6b64\u5e0c\u671b\u901a\u8fc7\u5c06\u57fa\u7840\u8bbe\u65bd\u4ece\u6570\u636e\u5316\u5230\u4ee3\u7801\u5316(IaC)\u7684\u65b9\u5f0f\u3001\u901a\u8fc7\u5f15\u5165\u7f16\u7a0b\u9886\u57df\u66f4\u4e3a\u6210\u719f\u3001\u5b89\u5168\u3001\u9ad8\u6548\u7684\u5de5\u4f5c\u6d41\u4e3a\u8fd0\u7ef4\u5de5\u4f5c\u63d0\u6548\u3002"),(0,a.kt)("p",null,"\u4e91\u539f\u751f\u7684\u601d\u8def\u662f\u9ad8\u5ea6\u7684\u5f00\u653e\u5316\u548c\u6c11\u4e3b\u5316\uff0c\u9700\u8981\u505a\u5230\u4e07\u7269(\u6bd4\u5982 Resource\u3001Action\u3001Permission \u7b49)\u7686\u53ef\u914d\u7f6e\u3002\u4e0d\u8fc7\u76ee\u524d K8S \u5c1a\u7f3a\u5c11\u529f\u80fd\u5b8c\u5907\u7684 SHELL \u4ea4\u4e92\u754c\u9762(IaD)\uff0c\u800c\u4e14\u5f00\u6e90\u65b9\u6848\u76f8\u5bf9\u6bd4\u8f83\u5355\u8584\u65e0\u6cd5\u6ee1\u8db3\u4f01\u4e1a\u5927\u89c4\u6a21\u5de5\u7a0b\u5316\u3001\u6548\u7387\u548c\u590d\u6742\u5316\u7684\u8981\u6c42\uff0c\u5bf9\u4e8e\u8de8\u9879\u76ee\u548c\u8de8\u7ec4\u7ec7\u7684\u534f\u540c\u4e5f\u7f3a\u5c11\u5f88\u597d\u7684\u652f\u6301\u3002\u56e0\u4e3a\u4e91\u539f\u751f\u5e94\u7528\u5230 K8S \u5e73\u53f0\u4e2d\u95f4\u5c42\u7684\u7f3a\u5931\u5bfc\u81f4\u4e0a\u5c42\u7684\u4e1a\u52a1\u843d\u5730\u5230 K8S \u6709\u56f0\u96be\uff0cKusion \u7684\u76ee\u6807\u662f\u5f25\u8865\u8fd9\u4e2a Gap \u4e3a\u4e91\u539f\u751f\u4e4b\u4e0a\u7684\u8fd0\u7ef4\u63d0\u4f9b\u6280\u672f\u6293\u624b\u3002"),(0,a.kt)("h2",{id:"3-kusion-\u6280\u672f\u6808\u7684\u7ec4\u6210"},"3. Kusion \u6280\u672f\u6808\u7684\u7ec4\u6210"),(0,a.kt)("p",null,"Kusion \u53ef\u7f16\u7a0b\u4e91\u539f\u751f\u534f\u8bae\u6808\u7684\u7ec8\u6781\u76ee\u6807\u662f\u4e3a\u4e86\u89e3\u51b3\u81ea\u52a8\u5316\u8fd0\u7ef4\uff1aSRE \u7528\u6237\u53ea\u9700\u8981\u901a\u8fc7 KCL \u8bed\u8a00 +Konfig \u5927\u5e93\u63cf\u8ff0\u81ea\u5df1\u7684\u4e1a\u52a1\u7ec8\u6001\uff0cKusion \u670d\u52a1\u5f15\u64ce\u901a\u8fc7\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf\u72b6\u6001\u6839\u636e\u63cf\u8ff0\u7684\u72b6\u6001\u54cd\u5e94\u4e0d\u540c\u89c4\u5219\u81ea\u52a8\u8fdb\u884c\u5b9a\u5236\u5316\u7684\u8fd0\u7ef4\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"Kusion \u6280\u672f\u6808\u5728\u4e0d\u540c\u5c42\u6b21\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u5de5\u5177\u96c6\u3001\u670d\u52a1\u6846\u67b6\u548c\u89c4\u8303\uff0c\u5982\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(8931).Z,width:"1942",height:"942"})),(0,a.kt)("p",null,"\u5728\u6700\u4e0b\u5c42\u901a\u8fc7\u9762\u5411\u4e91\u539f\u751f\u9886\u57df\u63d0\u4f9b\u5b9a\u5236\u7684 KCL \u914d\u7f6e\u7b56\u7565\u8bed\u8a00\u3001\u8bed\u8a00\u63d2\u4ef6\u3001\u591a\u8bed\u8a00 SDK \u548c OCMP \u6307\u5bfc\u89c4\u8303\u7b49\u624b\u6bb5\u4e3a \u4e91\u539f\u751f\u5e94\u7528 IaC \u5316\u63d0\u4f9b\u6700\u57fa\u7840\u7684\u5de5\u5177\u548c\u5b9e\u8df5\u6307\u5357\u3002\u4e2d\u95f4\u5c42\u901a\u8fc7 Konfig \u5927\u5e93\u3001IaC \u5f15\u64ce\u3001Kusion \u670d\u52a1\u4e3a\u4e0a\u5c42\u4e91\u539f\u751f\u5e94\u7528\u63d0\u4f9b\u968f\u65f6\u53ef\u7528\u7684\u6a21\u578b\u6846\u67b6\u3001\u914d\u5957\u7684\u670d\u52a1\u548c\u5de5\u5177\u3002\u4e0a\u5c42\u7684 SRE \u7528\u6237\u5219\u901a\u8fc7 Kusion \u63d0\u4f9b\u7684 Kusion \u6a21\u578b\u5e93\u63cf\u8ff0\u7ec8\u6001\uff0c\u901a\u8fc7 Kusion \u547d\u4ee4\u884c\u5de5\u5177\u8fdb\u884c\u67e5\u770b\u4ed3\u5e93\u548c\u7ebf\u4e0a\u7cfb\u7edf\u5dee\u5f02\uff0c\u7136\u540e\u901a\u8fc7\u811a\u672c\u8fdb\u884c\u534a\u81ea\u52a8\u5316\u8fd0\u7ef4\u5de5\u4f5c\u3002\u901a\u8fc7\u7ed3\u5408\u6700\u4f73\u7684\u5b9e\u8df5\u548c CICD \u7cfb\u7edf\u63d0\u4f9b\u7684\u8f85\u52a9\u80fd\u529b\u5230 Kusion \u5de5\u5177\u94fe\uff0c\u53ef\u4ee5\u6781\u5927\u7b80\u5316\u591a\u96c6\u7fa4\u96c6\u6210\u3001\u6743\u9650\u7cfb\u7edf\u96c6\u6210\u3001\u98ce\u9669\u7cfb\u7edf\u96c6\u6210\u7b49\u7cfb\u7edf\u5316\u8fd0\u7ef4\u7b49\u5de5\u4f5c\u3002"),(0,a.kt)("h2",{id:"4-kusion-\u9879\u76ee\u613f\u666f"},"4. Kusion \u9879\u76ee\u613f\u666f"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f Kusion \u7684\u9879\u76ee\u613f\u666f\u5927\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:n(3151).Z,width:"1582",height:"982"})),(0,a.kt)("p",null,"\u613f\u666f\u76ee\u6807\u89e3\u91ca\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u7ef4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801(IaC)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u4e91 app \u548c \u57fa\u7840\u8bbe\u65bd"),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u3001\u8ba1\u5212\u3001\u5e94\u7528\u548c\u7248\u672c\u7ba1\u7406"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u901a\u8fc7\u4ee3\u7801\u8ffd\u6eaf\u548c\u5ba1\u8ba1\u53d8\u66f4"))),(0,a.kt)("li",{parentName:"ul"},"\u591a\u96c6\u7fa4 DevOps",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8de8\u56e2\u961f\u534f\u4f5c\u5b9a\u4e49\u548c\u7ba1\u7406\u4e91\u4e0a\u7684\u5e94\u7528\u7a0b\u5e8f"),(0,a.kt)("li",{parentName:"ul"},"\u5f00\u653e\u6a21\u578b\u662f\u552f\u4e00\u7684\u63cf\u8ff0\u6e90"),(0,a.kt)("li",{parentName:"ul"},"\u8d4b\u80fd\u591a\u96c6\u7fa4\u7684\u8de8\u56e2\u961f\u5408\u4f5c"))),(0,a.kt)("li",{parentName:"ul"},"\u6301\u7eed\u90e8\u7f72\u8fd0\u7ef4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6301\u7eed\u4e0e SCM \u548c\u81ea\u52a8\u5316\u7cfb\u7edf\u96c6\u6210"),(0,a.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u7684\u5de5\u4f5c\u6d41\u7a0b\u4ee3\u7801\u4ea4\u4ed8\u591a\u96c6\u7fa4"))))),(0,a.kt)("li",{parentName:"ul"},"\u5b89\u5168",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7b56\u7565\u5373\u4ee3\u7801(PaC)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e91\u57fa\u7840\u8bbe\u65bd\u7684\u7ba1\u7406\u7b56\u7565\u4ee5\u4ee3\u7801\u5f62\u5f0f\u521b\u5efa"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7f16\u7a0b\u624b\u6bb5\u9488\u5bf9\u8fd0\u884c\u65f6\u6784\u5efa\u7ec6\u7c92\u5ea6\u7684\u7b56\u7565"))),(0,a.kt)("li",{parentName:"ul"},"\u8eab\u4efd\u611f\u77e5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7ba1\u7406\u4e91\u4e0a\u7528\u6237\u548c\u670d\u52a1\u7684\u201cAAA\u201d \u6765\u589e\u5f3a\u5b89\u5168\u6027"),(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u57fa\u7840\u8bbe\u65bd\u7684\u654f\u611f\u914d\u7f6e\u5168\u7a0b\u52a0\u5bc6"))),(0,a.kt)("li",{parentName:"ul"},"\u6807\u51c6\u5316\u6267\u884c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6807\u51c6\u6280\u672f\u3001\u7f16\u7801\u89c4\u8303\u3001\u4ee3\u7801\u7ec4\u7ec7\u89c4\u8303\uff0c\u5b9e\u73b0\u7248\u672c\u548c\u8865\u4e01\u6807\u51c6\u5316\u7ba1\u7406"))))),(0,a.kt)("li",{parentName:"ul"},"\u4e91\u67b6\u6784",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u73b0\u4ee3\u5316",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u73b0\u4ee3\u5316\u7684\u5bb9\u5668\u548c\u5fae\u670d\u52a1\u67b6\u6784\u5b9e\u73b0\u8de8\u57fa\u7840\u8bbe\u65bd\u3001\u8de8\u5e94\u7528\u7684 DevOps"))),(0,a.kt)("li",{parentName:"ul"},"\u8de8\u96c6\u7fa4\u7edf\u4e00\u4ea4\u4ed8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8de8\u6240\u6709\u5f00\u53d1\u9636\u6bb5\u3001 Kubernetes \u96c6\u7fa4\u3001\u591a\u57fa\u7840\u8bbe\u65bd\u3001\u591a\u4e91\u5e73\u53f0\u7684\u4e00\u81f4\u7684\u5de5\u4f5c\u6d41\u7a0b\uff0c\u5b9e\u73b0\u771f\u6b63\u7684\u7edf\u4e00\u4ea4\u4ed8"))),(0,a.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u7ea7",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u4f01\u4e1a\u9700\u6c42\uff0c\u901a\u8fc7\u8bed\u8a00\u3001\u5f00\u53d1\u5de5\u5177\u548c\u53ef\u6269\u5c55\u7684\u5f15\u64ce\u63d0\u4f9b\u5f3a\u5927\u7684\u5b89\u5168\u548c\u8fd0\u7ef4\u5b9e\u8df5")))))),(0,a.kt)("p",null,"Kusion \u5e0c\u671b\u5728 \u8fd0\u7ef4\u3001\u5b89\u5168\u3001\u4e91\u67b6\u6784 \u51e0\u4e2a\u65b9\u5411\u4e3a\u4e91\u539f\u751f\u5e94\u7528\u7684\u5feb\u901f\u843d\u5730\u63d0\u4f9b\u5fc5\u8981\u7684\u5e2e\u52a9\u3002"))}m.isMDXComponent=!0},3151:function(e,t,n){t.Z=n.p+"assets/images/kusion-goals-12653444989137a781721fac61cb0622.png"},8931:function(e,t,n){t.Z=n.p+"assets/images/kusion-stack-cf4ff44739955478fe1163000eec70c1.png"}}]);