"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||i;return n?r.createElement(k,a(a({ref:t},m),{},{components:n})):r.createElement(k,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"Commit \u89c4\u7ea6"},a=void 0,l={unversionedId:"developer-guide/conventions/commit-conventions",id:"version-v0.4/developer-guide/conventions/commit-conventions",title:"Commit \u89c4\u7ea6",description:"Commit \u4fe1\u606f\u7ed3\u6784",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.4/4-developer-guide/2-conventions/4-commit-conventions.md",sourceDirName:"4-developer-guide/2-conventions",slug:"/developer-guide/conventions/commit-conventions",permalink:"/zh/karpor/v0.4/developer-guide/conventions/commit-conventions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/4-developer-guide/2-conventions/4-commit-conventions.md",tags:[],version:"v0.4",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728109585,formattedLastUpdatedAt:"2024\u5e7410\u67085\u65e5",sidebarPosition:4,frontMatter:{title:"Commit \u89c4\u7ea6"},sidebar:"karpor",previous:{title:"\u6d4b\u8bd5\u89c4\u7ea6",permalink:"/zh/karpor/v0.4/developer-guide/conventions/test-conventions"},next:{title:"karpor",permalink:"/zh/karpor/v0.4/references/cli-commands/karpor"}},p={},c=[{value:"Commit \u4fe1\u606f\u7ed3\u6784",id:"commit-\u4fe1\u606f\u7ed3\u6784",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"<code>&lt;\u7c7b\u578b&gt;</code>(\u5fc5\u987b)",id:"\u7c7b\u578b\u5fc5\u987b",level:2},{value:"<code>&lt;\u8303\u56f4&gt;</code>(\u53ef\u9009)",id:"\u8303\u56f4\u53ef\u9009",level:2},{value:"<code>&lt;\u63cf\u8ff0&gt;</code>(\u5fc5\u987b)",id:"\u63cf\u8ff0\u5fc5\u987b",level:2},{value:"<code>&lt;\u6b63\u6587&gt;</code>(\u53ef\u9009)",id:"\u6b63\u6587\u53ef\u9009",level:2}],m={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"commit-\u4fe1\u606f\u7ed3\u6784"},"Commit \u4fe1\u606f\u7ed3\u6784"),(0,o.kt)("p",null,"Karpor \u9075\u5faa ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/zh-hans/v1.0.0/"},"\u7ea6\u5b9a\u5f0f\u63d0\u4ea4"),"\u3002"),(0,o.kt)("p",null,"Commit \u4fe1\u606f\u5e94\u5f53\u7ec4\u7ec7\u4e3a\u4ee5\u4e0b\u7ed3\u6784\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<\u7c7b\u578b>[\u53ef\u9009 \u8303\u56f4]: <\u63cf\u8ff0>\n\n[\u53ef\u9009 \u6b63\u6587]\n")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u5e26\u8303\u56f4\u7684 Commit \u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"feat(lang): add polish language\n")),(0,o.kt)("p",null,"\u4e0d\u5e26\u6b63\u6587\u7684 Commit \u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docs: correct spelling of CHANGELOG\n")),(0,o.kt)("p",null,"\u5e26\u591a\u4e2a\u6b63\u6587\u6bb5\u843d\u7684 Commit \u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fix: correct minor typos in code\n\nsee the issue for details\n\non typos fixed.\n\nreviewed-by: Z\nrefs #133\n")),(0,o.kt)("h2",{id:"\u7c7b\u578b\u5fc5\u987b"},(0,o.kt)("inlineCode",{parentName:"h2"},"<\u7c7b\u578b>"),"(\u5fc5\u987b)"),(0,o.kt)("p",null,"\u5fc5\u987b\u586b\u5199\u7684\u7c7b\u578b\u6709\u52a9\u4e8e\u66f4\u5bb9\u6613\u786e\u5b9a\u8fd9\u6b21\u63d0\u4ea4\u7684\u8303\u56f4\uff0c\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines"},"Angular \u6307\u5357"),"\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"<\u7c7b\u578b>")," \u4f7f\u7528\u5c0f\u5199\uff0c\u4ee5\u907f\u514d\u82b1\u8d39\u65f6\u95f4\u5728\u5927\u5c0f\u5199\u654f\u611f\u95ee\u9898\u4e0a\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"<\u7c7b\u578b>")," \u53ef\u4ee5\u662f\u4ee5\u4e0b\u4e4b\u4e00\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"feat"),"\uff1a\u65b0\u7279\u6027"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"fix"),"\uff1a\u6f0f\u6d1e\u4fee\u590d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"docs"),"\uff1a\u4ec5\u6587\u6863\u6539\u52a8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"build"),"\uff1a\u5173\u4e8e\u6784\u5efa\u7cfb\u7edf\u548c\u5916\u90e8\u4f9d\u8d56\u7684\u6539\u52a8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"style"),"\uff1a\u4e0d\u5f71\u54cd\u4ee3\u7801\u542b\u4e49\u7684\u6539\u52a8\uff08\u5982\u7a7a\u884c\u3001\u683c\u5f0f\u3001\u7f3a\u5c11\u5206\u53f7\u7b49\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"refactor"),"\uff1a\u4e0d\u5c5e\u4e8e\u6f0f\u6d1e\u4fee\u590d\u6216\u8005\u589e\u52a0\u7279\u6027\u7684\u4ee3\u7801\u6539\u52a8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"perf"),"\uff1a\u63d0\u5347\u6027\u80fd\u7684\u4ee3\u7801\u6539\u52a8"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"test"),"\uff1a \u589e\u52a0\u7f3a\u5c11\u7684\u6d4b\u8bd5\u7528\u4f8b\u6216\u8005\u4fee\u6b63\u73b0\u6709\u7684\u6d4b\u8bd5\u7528\u4f8b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"chore"),"\uff1a \u6784\u5efa\u8fc7\u7a0b\u6216\u8f85\u52a9\u5de5\u5177\u548c\u5e93\uff08\u5982\u6587\u6863\u751f\u6210\uff09\u7684\u4fee\u6539")),(0,o.kt)("h2",{id:"\u8303\u56f4\u53ef\u9009"},(0,o.kt)("inlineCode",{parentName:"h2"},"<\u8303\u56f4>"),"(\u53ef\u9009)"),(0,o.kt)("p",null,"\u8303\u56f4\u662f\u53ef\u9009\u7684\uff0c\u53ef\u4ee5\u5305\u542b\u5728\u62ec\u53f7\u4e2d\u4e3a\u7c7b\u578b\u63d0\u4f9b\u66f4\u591a\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002\u53ef\u4ee5\u6307\u5b9a\u8fd9\u6b21 commit \u7684\u4efb\u4f55\u5185\u5bb9\u3002Github issue \u4e5f\u662f\u6709\u6548\u7684\u8303\u56f4\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"fix(ui)"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"feat(api)"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"fix(#233)")," \u7b49\u3002"),(0,o.kt)("p",null,"\u5f53\u6539\u52a8\u5f71\u54cd\u591a\u4e2a\u8303\u56f4\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),"\u3002"),(0,o.kt)("h2",{id:"\u63cf\u8ff0\u5fc5\u987b"},(0,o.kt)("inlineCode",{parentName:"h2"},"<\u63cf\u8ff0>"),"(\u5fc5\u987b)"),(0,o.kt)("p",null,"\u63cf\u8ff0\u5fc5\u987b\u7d27\u8ddf\u5728\u7c7b\u578b/\u8303\u56f4\u524d\u7f00\u540e\u9762\u7684\u5192\u53f7\u548c\u7a7a\u683c\u3002\u5b83\u662f\u4ee3\u7801\u66f4\u6539\u7684\u7b80\u660e\u6458\u8981\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"fix: array parsing issue when multiple spaces were contained in string"),"\uff0c\u800c\u4e0d\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"fix: bug"),"\u3002"),(0,o.kt)("h2",{id:"\u6b63\u6587\u53ef\u9009"},(0,o.kt)("inlineCode",{parentName:"h2"},"<\u6b63\u6587>"),"(\u53ef\u9009)"),(0,o.kt)("p",null,"\u5728\u7b80\u77ed\u7684\u63cf\u8ff0\u540e\u53ef\u4ee5\u6dfb\u52a0\u8f83\u957f\u7684\u6b63\u6587\uff0c\u63d0\u4f9b\u6709\u5173\u4ee3\u7801\u66f4\u6539\u7684\u66f4\u591a\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002\u6b63\u6587\u5fc5\u987b\u4f4d\u4e8e\u63cf\u8ff0\u4e4b\u540e\u4e00\u884c\u3002"))}s.isMDXComponent=!0}}]);