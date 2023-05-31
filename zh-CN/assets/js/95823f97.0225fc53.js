"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(l,".").concat(k)]||d[k]||c[k]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={},i="\u6784\u5efa\u6587\u6863",s={unversionedId:"develop/build-docs/build-docs",id:"develop/build-docs/build-docs",title:"\u6784\u5efa\u6587\u6863",description:"Kusion \u7684\u6587\u6863\u91c7\u7528 Docusaurus \u6846\u67b6\u6784\u5efa\uff0cDocusaurus \u662f\u57fa\u4e8e React \u6784\u5efa\u7684\u7ad9\u70b9\u751f\u6210\u5668\u3002\u5728\u6784\u5efa\u4e4b\u524d\u5148\u5b89\u88c5 Node.js 16+\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/develop/build-docs/build-docs.md",sourceDirName:"develop/build-docs",slug:"/develop/build-docs/",permalink:"/zh-CN/docs/develop/build-docs/",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/develop/build-docs/build-docs.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685503692,formattedLastUpdatedAt:"2023/5/31",frontMatter:{},sidebar:"develop",previous:{title:"\u4ed3\u5e93\u7ed3\u6784",permalink:"/zh-CN/docs/develop/repos"},next:{title:"\u6784\u5efa KusionStack",permalink:"/zh-CN/docs/develop/build-from-source/"}},l={},u=[{value:"1. \u514b\u9686\u4ed3\u5e93",id:"1-\u514b\u9686\u4ed3\u5e93",level:2},{value:"2. \u672c\u5730\u9884\u89c8",id:"2-\u672c\u5730\u9884\u89c8",level:2},{value:"3. \u6784\u5efa\u53d1\u5e03",id:"3-\u6784\u5efa\u53d1\u5e03",level:2},{value:"4. \u914d\u7f6e\u6587\u4ef6",id:"4-\u914d\u7f6e\u6587\u4ef6",level:2},{value:"5. \u4e3b\u9875\u9762\u5185\u5bb9",id:"5-\u4e3b\u9875\u9762\u5185\u5bb9",level:2},{value:"6. \u5185\u90e8\u94fe\u63a5",id:"6-\u5185\u90e8\u94fe\u63a5",level:2},{value:"7. \u66f4\u65b0\u6a21\u578b\u6587\u6863",id:"7-\u66f4\u65b0\u6a21\u578b\u6587\u6863",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6784\u5efa\u6587\u6863"},"\u6784\u5efa\u6587\u6863"),(0,r.kt)("p",null,"Kusion \u7684\u6587\u6863\u91c7\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," \u6846\u67b6\u6784\u5efa\uff0cDocusaurus \u662f\u57fa\u4e8e React \u6784\u5efa\u7684\u7ad9\u70b9\u751f\u6210\u5668\u3002\u5728\u6784\u5efa\u4e4b\u524d\u5148\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js 16+"),"\u3002"),(0,r.kt)("p",null,"\u6587\u6863\u4ed3\u5e93\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusionstack.io"},"https://github.com/KusionStack/kusionstack.io")),(0,r.kt)("h2",{id:"1-\u514b\u9686\u4ed3\u5e93"},"1. \u514b\u9686\u4ed3\u5e93"),(0,r.kt)("p",null,"\u7136\u540e\u514b\u9686\u6587\u6863\u4ed3\u5e93\u5230\u672c\u5730\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git clone git@github.com:KusionStack/kusionstack.io.git\n")),(0,r.kt)("p",null,"Markdown \u683c\u5f0f\u7684\u6587\u6863\u4e3b\u8981\u5728 docs \u548c blog \u4e24\u4e2a\u76ee\u5f55\uff0c\u76ee\u5f55\u5bf9\u5e94\u7684\u5185\u5bb9\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/docs")," - \u6587\u6863\u6839\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/docs/user_docs")," - \u4f7f\u7528\u6587\u6863\uff0c\u9488\u5bf9 Kusion \u4f7f\u7528\u8005"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/docs/develop")," - \u5f00\u53d1\u6587\u6863\uff0c\u9488\u5bf9 Kusion \u9879\u76ee\u672c\u8eab\u5f00\u53d1\u548c\u5b8c\u5584"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/docs/referece")," - \u53c2\u8003\u624b\u518c\uff0c\u5de5\u5177\u3001\u8bed\u8a00\u3001\u6a21\u578b\u7684\u53c2\u8003"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/docs/governance")," - \u6cbb\u7406\uff0c\u5f00\u6e90\u793e\u533a\u3001\u8def\u7ebf\u89c4\u5212\u7b49"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/blog")," - \u535a\u5ba2\u6587\u7ae0")),(0,r.kt)("h2",{id:"2-\u672c\u5730\u9884\u89c8"},"2. \u672c\u5730\u9884\u89c8"),(0,r.kt)("p",null,"\u9884\u89c8\u548c\u6784\u5efa\u4e4b\u524d\u9700\u8981\u5148\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," \u547d\u4ee4\u5b89\u88c5 Node.js \u4f9d\u8d56\u7684\u5305\uff0c\u7136\u540e\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run start")," \u547d\u4ee4\u542f\u52a8\u672c\u5730\u9884\u89c8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm install\n$ npm run start\n\n> website@0.1.0 start\n> docusaurus start\n\n[INFO] Starting the development server...\n[SUCCESS] Docusaurus website is running at http://localhost:3000/.\n\n\u2714 Client\n  Compiled successfully in 3.84s\n\nclient (webpack 5.69.1) compiled successfully\n\n\u2588\n")),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u901a\u8fc7\u9ed8\u8ba4\u6d4f\u89c8\u5668\u6253\u5f00 http://localhost:3000 \u9875\u9762\u3002\u5de6\u4e0a\u89d2\u7684\u5bfc\u822a\u680f\u6709\uff1a\u4f7f\u7528\u6587\u6863\u3001\u5f00\u53d1\u6587\u6863\u3001\u5185\u90e8\u6587\u6863\u3001\u53c2\u8003\u624b\u518c\u3001\u6cbb\u7406\u548c\u535a\u5ba2\u6309\u94ae\uff0c\u5206\u522b\u5bf9\u5e94\u524d\u6587\u5bf9\u5e94\u7684\u76ee\u5f55\u3002\u53f3\u4e0a\u89d2\u5bf9\u5e94\u591a\u8bed\u8a00\u3001\u6587\u6863\u4ed3\u5e93\u548c\u4e3b\u9898\u5207\u6362\u6309\u94ae\u3002\u4e3b\u4f53\u9875\u9762\u662f Kusion \u4e00\u53e5\u8bdd\u7b80\u4ecb\u548c\u5feb\u901f\u5f00\u59cb\u7684\u6309\u94ae\u94fe\u63a5\uff0c\u4e0b\u9762\u662f KCL \u914d\u7f6e\u8bed\u8a00\u3001Kusion \u6a21\u578b\u5e93\u548c Kusion \u5f15\u64ce\u7684\u4ecb\u7ecd\u3002"),(0,r.kt)("h2",{id:"3-\u6784\u5efa\u53d1\u5e03"},"3. \u6784\u5efa\u53d1\u5e03"),(0,r.kt)("p",null,"\u540c\u6837\u9700\u8981\u5148\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," \u547d\u4ee4\u5b89\u88c5 Node.js \u4f9d\u8d56\u7684\u5305\uff08\u81f3\u5c11\u6267\u884c\u4e00\u6b21\uff09\uff0c\u7136\u540e\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," \u6784\u5efa\u6700\u7ec8\u7684\u9875\u9762\u8d44\u6e90\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npm run build\n\n> website@0.1.0 build\n> docusaurus build\n\n[INFO] [zh-CN] Creating an optimized production build...\n\n\u2588\n")),(0,r.kt)("p",null,"\u6784\u5efa\u662f\u4f1a\u6709\u66f4\u4e25\u683c\u7684\u68c0\u67e5\uff0c\u6bd4\u5982\u5185\u90e8\u7684\u574f\u94fe\u63a5\u4f1a\u8f93\u51fa\u7ea2\u8272\u7684\u9519\u8bef\u4fe1\u606f\u3001\u6a58\u9ec4\u8272\u8f93\u51fa\u8b66\u544a\u4fe1\u606f\u3002\u5bf9\u4e8e\u6d4b\u8bd5\u6d4b\u8bd5\uff0c\u5982\u679c\u9047\u5230\u6bd4\u8f83\u591a\u7684\u574f\u94fe\u63a5\uff0c\u53ef\u4ee5\u5148\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \u6587\u4ef6\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onBrokenLinks")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"onBrokenMarkdownLinks")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'"ignore"')," \u5173\u95ed\u3002\u4ea7\u751f\u7684\u6587\u4ef6\u8f93\u51fa\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," \u76ee\u5f55\uff0c\u8be5\u76ee\u5f55\u53ef\u4ee5\u76f4\u63a5\u90e8\u7f72\u53d1\u5e03\u3002"),(0,r.kt)("h2",{id:"4-\u914d\u7f6e\u6587\u4ef6"},"4. \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u6709\u6587\u6863\u914d\u7f6e\u3001\u4fa7\u8fb9\u680f\u548c\u5185\u90e8\u6587\u6863\u51e0\u4e2a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/docusaurus.config.js"},"docusaurus.config.js")," \u662f ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus")," \u7684\u4e3b\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/sidebars.js"},"sidebars.js")," \u5bf9\u5e94\u6587\u6863\u7684\u4fa7\u8fb9\u680f\u914d\u7f6e\uff0c\u88ab ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/docusaurus.config.js"},"docusaurus.config.js")," \u6587\u4ef6\u5f15\u7528\u3002")),(0,r.kt)("h2",{id:"5-\u4e3b\u9875\u9762\u5185\u5bb9"},"5. \u4e3b\u9875\u9762\u5185\u5bb9"),(0,r.kt)("p",null,"\u4e3b\u9875\u9762\u5185\u5bb9\u7531\u4ee5\u4e0b\u6587\u4ef6\u6784\u5efa\u4ea7\u751f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/docusaurus.config.js"},"docusaurus.config.js")," \u662f ",(0,r.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus")," \u7684\u4e3b\u914d\u7f6e\u6587\u4ef6\uff0c\u5305\u542b\u9876\u90e8\u7684\u5bfc\u822a\u680f\u548c\u5e95\u90e8\u7684\u94fe\u63a5\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/src/pages/index.js"},"src/pages/index.js")," \u5bf9\u5e94\u9875\u9762\u4e3b\u4f53\u533a\u57df\uff0c\u5305\u542b\u5feb\u901f\u5f00\u59cb\u7684\u94fe\u63a5\u6309\u94ae\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/kusionstack.io/blob/main/src/components/HomepageFeatures.js"},"src/components/HomepageFeatures.js")," \u5bf9\u5e94 Kusion \u7684\u7279\u6027\u4ecb\u7ecd\u3002")),(0,r.kt)("h2",{id:"6-\u5185\u90e8\u94fe\u63a5"},"6. \u5185\u90e8\u94fe\u63a5"),(0,r.kt)("p",null,"\u7f51\u5740\u5185\u90e8\u7684\u76f8\u5bf9\u94fe\u63a5\u53ef\u4ee5\u901a\u8fc7 Markdown \u6587\u4ef6\u7684\u76f8\u5bf9\u8def\u5f84\u6620\u5c04\uff0c\u6bd4\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusionstack.io/docs/develop/build-docs"},(0,r.kt)("inlineCode",{parentName:"a"},"/docs/develop/build-docs"))," \u6587\u4ef6\u4e2d\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/intro/kusion-intro"},(0,r.kt)("inlineCode",{parentName:"a"},"/docs/user_docs/intro/kusion-intro"))," \u7edd\u5bf9\u8def\u5f84\u6216 ",(0,r.kt)("a",{parentName:"p",href:"../repos"},(0,r.kt)("inlineCode",{parentName:"a"},"../repos"))," \u76f8\u5bf9\u8def\u5f84\u5f15\u7528\u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u76ee\u5f55\u5185\u90e8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.md")," \u6216\u4e0e\u76ee\u5f55\u540c\u540d\u7684 Markdonwn \u6587\u4ef6\u5bf9\u5e94\u76ee\u5f55\u94fe\u63a5\u7684\u9875\u9762\u3002"),(0,r.kt)("h2",{id:"7-\u66f4\u65b0\u6a21\u578b\u6587\u6863"},"7. \u66f4\u65b0\u6a21\u578b\u6587\u6863"),(0,r.kt)("p",null,"Konfig \u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/model"},"\u6a21\u578b\u6587\u6863")," \u662f\u4ece KCL \u4ee3\u7801\uff0c\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/cli/kcl/docgen"},"docgen")," \u5de5\u5177\u81ea\u52a8\u63d0\u53d6\u4ea7\u751f\uff08\u6bd4\u5982\u81ea\u52a8\u751f\u6210\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/model/kusion_models/kube/frontend/configmap/doc_configmap"},"ConfigMap")," \u6a21\u578b\u6587\u6863\uff09\u3002\u5982\u679c\u5e0c\u671b\u5b8c\u5584\u6a21\u578b\u6587\u6863\uff0c\u9996\u5148\u9700\u8981\u5230 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig \u4ee3\u7801\u4ed3\u5e93")," \u6dfb\u52a0\u6216\u66f4\u65b0\u6587\u6863\uff0c\u7136\u540e\u91cd\u65b0\u751f\u6210\u6587\u6863\uff08\u76ee\u524d\u8fd8\u4e0d\u80fd\u81ea\u52a8\u540c\u6b65\uff0c\u6709\u5174\u8da3\u7684\u7528\u6237\u53ef\u4ee5\u5c1d\u8bd5 ",(0,r.kt)("a",{parentName:"p",href:"/docs/governance/contribute/contribute-docs"},"\u63d0\u4f9b\u5e2e\u52a9"),"\uff09\u3002"))}c.isMDXComponent=!0}}]);