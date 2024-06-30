"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4"},o=void 0,p={unversionedId:"user-guide/insight/custom-resource-group",id:"version-v0.4/user-guide/insight/custom-resource-group",title:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4",description:"\u521b\u5efa\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.4/3-user-guide/3-insight/2-custom-resource-group.md",sourceDirName:"3-user-guide/3-insight",slug:"/user-guide/insight/custom-resource-group",permalink:"/zh/karpor/user-guide/insight/custom-resource-group",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/3-user-guide/3-insight/2-custom-resource-group.md",tags:[],version:"v0.4",lastUpdatedBy:"TonyAdo",lastUpdatedAt:1719756905,formattedLastUpdatedAt:"2024\u5e746\u670830\u65e5",sidebarPosition:2,frontMatter:{title:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4"},sidebar:"karpor",previous:{title:"\u68c0\u67e5\u4efb\u4f55\u8d44\u6e90\u7ec4\u548c\u8d44\u6e90",permalink:"/zh/karpor/user-guide/insight/inspecting-any-resource-group-and-resource"},next:{title:"\u6982\u89c8",permalink:"/zh/karpor/user-guide/insight/summary"}},s={},l=[{value:"\u521b\u5efa\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4",id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4",level:2},{value:"\u7f16\u8f91\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4",id:"\u7f16\u8f91\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4",level:2},{value:"\u5220\u9664\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4",id:"\u5220\u9664\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4",level:2}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521b\u5efa\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4"),(0,a.kt)("p",null,"\u672c\u8282\u5c06\u91cd\u70b9\u4ecb\u7ecd\u5982\u4f55\u5728 Karpor \u4e2d\u521b\u5efa\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4\u3002\u901a\u8fc7\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u548c\u903b\u8f91\u6982\u5ff5\uff0c\u5728 Karpor \u4e2d\u7075\u6d3b\u7ba1\u7406\u548c\u7ec4\u7ec7\u8d44\u6e90\u3002\u6211\u4eec\u5c06\u9010\u6b65\u6307\u5bfc\u4f60\u521b\u5efa\u548c\u5b9a\u4e49\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4\uff0c\u5e76\u5c55\u793a\u5982\u4f55\u4f7f\u7528\u8fd9\u4e9b\u7ec4\u8fdb\u884c\u8d44\u6e90\u6d1e\u5bdf\u548c\u7ba1\u7406\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u719f\u6089",(0,a.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u7ec4"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u7ec4\u89c4\u5219"),"\u76f8\u5173\u6982\u5ff5\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/karpor/concepts/glossary"},"\u8bcd\u6c47\u8868")," \u90e8\u5206\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5047\u8bbe"),"\u5728\u4f60\u7684\u7ec4\u7ec7\u6216\u516c\u53f8\u5185\uff0c\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528\u5355\u5143")," \u7684\u6982\u5ff5\uff0c\u4ee3\u8868",(0,a.kt)("strong",{parentName:"p"},"\u67d0\u4e2a\u73af\u5883\u4e2d\u5e94\u7528\u7684\u6240\u6709\u8d44\u6e90"),"\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5728",(0,a.kt)("strong",{parentName:"p"},"\u6807\u7b7e\u4e2d\u6807\u8bb0\u5e94\u7528\u7684\u540d\u79f0\u548c\u73af\u5883"),"\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"\u751f\u4ea7\u73af\u5883")," \u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"mock-apple")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528\u5355\u5143"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  labels:\n    app.kubernetes.io/name: mock-apple\n  name: mock-apple\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app.kubernetes.io/environment: prod\n    app.kubernetes.io/name: mock-apple\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app.kubernetes.io/environment: prod\n      app.kubernetes.io/name: mock-apple\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/environment: prod\n        app.kubernetes.io/name: mock-apple\n        fruit: apple\n    spec:\n      containers:\n        - image: nginx:latest\n          name: mock-container\n      dnsPolicy: ClusterFirst\n      restartPolicy: Always\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.kubernetes.io/environment: prod\n    app.kubernetes.io/name: mock-apple\n  name: mock-service-apple-prod\n  namespace: mock-apple\nspec:\n  ports:\n    - port: 80\n      protocol: TCP\n      targetPort: 80\n  selector:\n    app.kubernetes.io/environment: prod\n    app.kubernetes.io/name: mock-apple\n  type: ClusterIP\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u5c06\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528\u5355\u5143")," \u7684\u81ea\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8d44\u6e90\u7ec4\u89c4\u5219"),"\u3002\u5b83\u5c06\u6839\u636e\u7528\u6237\u6307\u5b9a\u7684\u89c4\u5219\u5bf9\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8d44\u6e90\u8fdb\u884c\u5206\u7c7b\uff0c\u5e76\u5217\u51fa\u6240\u6709\u7b26\u5408\u89c4\u5219\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8d44\u6e90\u7ec4"),"\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u6d1e\u5bdf")," \u6807\u7b7e\u8fdb\u5165\u6d1e\u5bdf\u9996\u9875\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u9875\u9762\u5e95\u90e8\uff0c\u4f60\u5c06\u770b\u5230\u4e00\u4e2a\u9ed8\u8ba4\u7684\u8d44\u6e90\u7ec4\u89c4\u5219 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u547d\u540d\u7a7a\u95f4"),"\uff0c\u8fd9\u662f\u6309\u547d\u540d\u7a7a\u95f4\u5206\u7c7b\u7684\u5355\u4e00\u89c4\u5219\u3002\n",(0,a.kt)("img",{src:n(36594).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u521b\u5efa\u8d44\u6e90\u7ec4\u6309\u94ae ",(0,a.kt)("kbd",null,"+"),"\uff0c\u5e76\u5728\u5f39\u51fa\u7a97\u53e3\u4e2d\u586b\u5165 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5e94\u7528\u5355\u5143")," \u7684",(0,a.kt)("strong",{parentName:"li"},"\u57fa\u672c\u4fe1\u606f\u548c\u5206\u7c7b\u89c4\u5219"),"\u3002\n",(0,a.kt)("img",{src:n(67192).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u63d0\u4ea4")," \u6309\u94ae\uff0c\u7136\u540e\u70b9\u51fb\u65b0\u51fa\u73b0\u7684 ",(0,a.kt)("kbd",null,"\u5e94\u7528\u5355\u5143")," \u6807\u7b7e\uff0c\u5217\u51fa\u6240\u6709\u5e94\u7528\u5355\u5143\u3002\n",(0,a.kt)("img",{src:n(56445).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u5728\u641c\u7d22\u6846\u4e2d\u8f93\u5165\u5173\u952e\u8bcd\uff0c\u5feb\u901f\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u751f\u4ea7")," \u73af\u5883\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"mock-apple")," \u5e94\u7528\u5355\u5143\u3002\n",(0,a.kt)("img",{src:n(27444).Z,width:"1620",height:"1080"})),(0,a.kt)("li",{parentName:"ol"},"\u4f60\u53ef\u4ee5\u70b9\u51fb\u8d44\u6e90\u7ec4\u5361\u7247\u4e0a\u7684 ",(0,a.kt)("kbd",null,"\u67e5\u770b")," \u6309\u94ae\uff0c\u8df3\u8f6c\u5230\u76f8\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u8d44\u6e90\u7ec4\u6d1e\u5bdf\u9875\u9762"),"\uff0c\u67e5\u770b\u67d0\u4e2a\u5e94\u7528\u5355\u5143\u7684\u6240\u6709\u8d44\u6e90\u3001\u62d3\u6251\u5173\u7cfb\u3001\u5408\u89c4\u62a5\u544a\u7b49\u805a\u5408\u4fe1\u606f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u6709\u9700\u8981\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u6b65\u9aa4\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"\u73af\u5883\u8d44\u6e90\u7ec4"),"\u3002\n",(0,a.kt)("img",{src:n(8858).Z,width:"1620",height:"1080"}),(0,a.kt)("img",{src:n(78744).Z,width:"1620",height:"1080"}))),(0,a.kt)("h2",{id:"\u7f16\u8f91\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4"},"\u7f16\u8f91\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u70b9\u51fb\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4\u9009\u9879\u5361\u53f3\u4fa7\u7684\u6309\u94ae ",(0,a.kt)("kbd",null,(0,a.kt)("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"edit",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},(0,a.kt)("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"})))," \u6765\u4fee\u6539\u5f39\u51fa\u7a97\u53e3\u4e2d\u7684\u57fa\u672c\u4fe1\u606f\u548c\u5206\u7c7b\u89c4\u5219\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(47139).Z,width:"1620",height:"1080"})),(0,a.kt)("h2",{id:"\u5220\u9664\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4"},"\u5220\u9664\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u70b9\u51fb\u81ea\u5b9a\u4e49\u8d44\u6e90\u7ec4\u6807\u7b7e\u53f3\u4fa7\u7684\u6309\u94ae ",(0,a.kt)("kbd",null,(0,a.kt)("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"edit",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},(0,a.kt)("path",{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"})))," \u7136\u540e\u5728\u5f39\u51fa\u7a97\u53e3\u4e2d\u70b9\u51fb ",(0,a.kt)("kbd",null,"\u5220\u9664"),"\uff0c\u4ee5\u5220\u9664\u5f53\u524d\u8d44\u6e90\u7ec4\u89c4\u5219\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(61205).Z,width:"1620",height:"1080"})))}u.isMDXComponent=!0},67192:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-create-app-resource-group-rule-c3410262c29d1dd1c270830bc55efec3.png"},8858:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-create-env-resource-group-rule-8605c4f079b99385fada2089d6f93579.png"},61205:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-delete-env-resource-group-10db0d78ed6ee87c853f6ce6f432c79d.png"},47139:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-edit-env-resource-group-c86cb37aad96a9c6fc1011af1025b56f.png"},36594:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-homepage-8dada26c5c9ba28cc1a3a6f1da474892.png"},56445:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-list-app-resource-groups-c5159e1fe0a86d465fb52a9f0fb19289.png"},78744:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-list-env-resource-groups-7ac8951b8cb78afb6f93658ad2ab84ff.png"},27444:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/insight-search-app-resource-group-850a616a497f903157688a4caca6d702.png"}}]);