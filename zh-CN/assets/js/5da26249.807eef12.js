"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1982],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},k=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),k=p(n),m=o,d=k["".concat(l,".").concat(m)]||k[m]||u[m]||a;return n?i.createElement(d,r(r({ref:e},c),{},{components:n})):i.createElement(d,r({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=k;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},49223:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1},r="\u901a\u8fc7 GitHub Actions \u4fdd\u8bc1 Konfig \u914d\u7f6e\u4ee3\u7801\u8d28\u91cf",s={unversionedId:"user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions",id:"user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions",title:"\u901a\u8fc7 GitHub Actions \u4fdd\u8bc1 Konfig \u914d\u7f6e\u4ee3\u7801\u8d28\u91cf",description:"\u5728\u591a\u4eba\u534f\u4f5c\u7684\u573a\u666f\u4e0b\uff0cKonfig \u5927\u5e93\u4e2d\u7684\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u5f80\u5f80\u7531\u6765\u81ea\u4e0d\u540c\u56e2\u961f\u7684 Developer \u548c Platform \u5171\u540c\u5b8c\u6210\uff0c\u914d\u7f6e\u4ee3\u7801\u7684\u6b63\u786e\u6027\u9700\u8981\u901a\u8fc7\u53ef\u9760\u7684\u673a\u5236\u4fdd\u8bc1\u3002GitHub Actions \u4f5c\u4e3a\u4e00\u79cd CI/CD \u7684\u5e73\u53f0\uff0c\u53ef\u4ee5\u81ea\u52a8\u6267\u884c\u6784\u5efa\u3001\u6d4b\u8bd5\u3001\u90e8\u7f72\u7b49\u6d41\u6c34\u7ebf\u3002\u901a\u8fc7\u81ea\u5b9a\u4e49 GitHub Actions \u5de5\u4f5c\u6d41\uff0c\u60a8\u53ef\u4ee5\u4fdd\u8bc1 Konfig \u5927\u5e93\u4e2d\u7528\u4e8e\u751f\u4ea7\u7684\u914d\u7f6e\u4ee3\u7801\u7684\u6b63\u786e\u6027\u4e0e\u53ef\u9760\u6027\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions.md",sourceDirName:"user_docs/guides/github-actions",slug:"/user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions",permalink:"/zh-CN/docs/user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/github-actions/ensure-configuration-code-quality-of-konfig-via-github-actions.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1689248321,formattedLastUpdatedAt:"2023\u5e747\u670813\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u5dee\u5f02\u5316\u914d\u7f6e",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/differentiated-configuration"},next:{title:"ArgoCD",permalink:"/zh-CN/docs/user_docs/guides/argocd/"}},l={},p=[{value:"\u521b\u5efa\u60a8\u7684 Konfig \u5927\u5e93",id:"\u521b\u5efa\u60a8\u7684-konfig-\u5927\u5e93",level:2},{value:"\u521b\u5efa\u60a8\u7684 GitHub Actions \u5de5\u4f5c\u6d41",id:"\u521b\u5efa\u60a8\u7684-github-actions-\u5de5\u4f5c\u6d41",level:2},{value:"\u53d8\u66f4\u5f71\u54cd\u9762\u5206\u6790",id:"\u53d8\u66f4\u5f71\u54cd\u9762\u5206\u6790",level:3},{value:"\u5de5\u7a0b\u7ed3\u6784\u6821\u9a8c",id:"\u5de5\u7a0b\u7ed3\u6784\u6821\u9a8c",level:3},{value:"\u4ee3\u7801\u6b63\u786e\u6027\u6d4b\u8bd5",id:"\u4ee3\u7801\u6b63\u786e\u6027\u6d4b\u8bd5",level:3},{value:"Lint \u98ce\u683c\u68c0\u67e5",id:"lint-\u98ce\u683c\u68c0\u67e5",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:p};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u901a\u8fc7-github-actions-\u4fdd\u8bc1-konfig-\u914d\u7f6e\u4ee3\u7801\u8d28\u91cf"},"\u901a\u8fc7 GitHub Actions \u4fdd\u8bc1 Konfig \u914d\u7f6e\u4ee3\u7801\u8d28\u91cf"),(0,o.kt)("p",null,"\u5728\u591a\u4eba\u534f\u4f5c\u7684\u573a\u666f\u4e0b\uff0cKonfig \u5927\u5e93\u4e2d\u7684\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u5f80\u5f80\u7531\u6765\u81ea\u4e0d\u540c\u56e2\u961f\u7684 Developer \u548c Platform \u5171\u540c\u5b8c\u6210\uff0c\u914d\u7f6e\u4ee3\u7801\u7684\u6b63\u786e\u6027\u9700\u8981\u901a\u8fc7\u53ef\u9760\u7684\u673a\u5236\u4fdd\u8bc1\u3002",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions"},"GitHub Actions")," \u4f5c\u4e3a\u4e00\u79cd CI/CD \u7684\u5e73\u53f0\uff0c\u53ef\u4ee5\u81ea\u52a8\u6267\u884c\u6784\u5efa\u3001\u6d4b\u8bd5\u3001\u90e8\u7f72\u7b49\u6d41\u6c34\u7ebf\u3002\u901a\u8fc7\u81ea\u5b9a\u4e49 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/using-workflows/about-workflows"},"GitHub Actions \u5de5\u4f5c\u6d41"),"\uff0c\u60a8\u53ef\u4ee5\u4fdd\u8bc1 Konfig \u5927\u5e93\u4e2d\u7528\u4e8e\u751f\u4ea7\u7684\u914d\u7f6e\u4ee3\u7801\u7684\u6b63\u786e\u6027\u4e0e\u53ef\u9760\u6027\u3002"),(0,o.kt)("p",null,"KusionStack\u63d0\u4f9b\u4e86\u591a\u79cd\u5de5\u5177\u4e0eGithub Actions\u96c6\u6210\uff0c\u672c\u6559\u7a0b\u5bf9\u96c6\u6210\u7684\u65b9\u6cd5\u8fdb\u884c\u4ecb\u7ecd\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u60a8\u7684-konfig-\u5927\u5e93"},"\u521b\u5efa\u60a8\u7684 Konfig \u5927\u5e93"),(0,o.kt)("p",null,"KusionStack \u63d0\u4f9b\u4e86\u5b98\u65b9\u7684\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u4ed3\u5e93\u2014\u2014 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"KusionStack/konfig"),"\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u57fa\u7840\u6a21\u578b"),"\uff0c\u5982 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},"Server"),"\uff0c\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"/base")," \u76ee\u5f55\u4e0b\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u793a\u4f8b\u7684\u5e94\u7528\u914d\u7f6e\u4ee3\u7801"),"\uff0c\u5982 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/tree/main/appops/wordpress"},"Wordpress"),"\u3001",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/tree/main/appops/guestbook"},"Guestbook"),"\uff0c\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"/appops")," \u76ee\u5f55\u4e0b\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u4ee3\u7801\u7ba1\u7406\u5de5\u5177"),"\uff0c\u5982",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/hack/verify-project-structure.py"},"\u5de5\u7a0b\u7ed3\u6784\u6821\u9a8c"),"\u3001",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/hack/test_konfig.py"},"\u4ee3\u7801\u6b63\u786e\u6027\u6d4b\u8bd5"),"\u3001",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/hack/lint_check.py"},"lint \u98ce\u683c\u68c0\u67e5"),"\uff0c\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"li"},"/hack")," \u76ee\u5f55\u4e0b\u3002")),(0,o.kt)("p",null,"Fork KusionStack/konfig\uff0c\u521b\u5efa\u60a8\u7684 Konfig \u5927\u5e93\uff0c\u7ef4\u62a4\u60a8\u81ea\u5df1\u7684\u5e94\u7528\u914d\u7f6e\u4ee3\u7801\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u57fa\u7840\u6a21\u578b\u4e0e\u7ba1\u7406\u5de5\u5177\u7684\u589e\u5f3a\uff0cKusionStack/konfig \u671f\u5f85\u60a8\u7684",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig#contribution-guidelines"},"\u8d21\u732e"),"\u3002")),(0,o.kt)("h2",{id:"\u521b\u5efa\u60a8\u7684-github-actions-\u5de5\u4f5c\u6d41"},"\u521b\u5efa\u60a8\u7684 GitHub Actions \u5de5\u4f5c\u6d41"),(0,o.kt)("p",null,"KusionStack/konfig \u63d0\u4f9b\u4e86 GitHub Actions \u5de5\u4f5c\u6d41 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml"},"main.yml"),"\uff0c\u89e6\u53d1\u6761\u4ef6\u662f main \u5206\u652f\u4e0a\u7684 push \u6216 pull request \u8bf7\u6c42\u3002main.yml \u5305\u62ec\u591a\u4e2a job\uff0c\u4fdd\u8bc1\u4e86 main \u5206\u652f\u4e0a\u914d\u7f6e\u4ee3\u7801\u7684\u53ef\u9760\u6027\u3002\n\u63a5\u4e0b\u6765\uff0c\u672c\u6559\u7a0b\u5c06\u5bf9\u8fd9\u4e9b Github Actions job \u7684\u542b\u4e49\u548c\u529f\u80fd\u8fdb\u884c\u4ecb\u7ecd\uff0c\u5e76\u7ed3\u5408",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/pull/113"},"\u589e\u52a0\u5e94\u7528 Wordpress \u73af\u5883\u53d8\u91cf"),"\u8fd9\u4e00\u793a\u4f8b\uff08\u540e\u7b80\u79f0\u4e3a\u201c\u793a\u4f8b\u201d\uff09\uff0c\u8fdb\u884c\u8bf4\u660e\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wordpress-workflow",src:n(97955).Z,width:"1500",height:"617"})),(0,o.kt)("h3",{id:"\u53d8\u66f4\u5f71\u54cd\u9762\u5206\u6790"},"\u53d8\u66f4\u5f71\u54cd\u9762\u5206\u6790"),(0,o.kt)("p",null,"Konfig \u5927\u5e93\u4e2d\u7ef4\u62a4\u7740\u4e24\u79cd\u7c7b\u578b\u7684\u4ee3\u7801\uff0c\u5206\u522b\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u5e94\u7528\u914d\u7f6e"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u57fa\u7840\u6a21\u578b"),"\u3002\u82e5\u4fee\u6539\u524d\u8005\u4ee3\u7801\uff0c\u90a3\u4e48\u53ea\u4f1a\u5f71\u54cd\u5bf9\u5e94\u7684\u5e94\u7528\uff1b\u82e5\u4fee\u6539\u540e\u8005\u4ee3\u7801\uff0c\u90a3\u4e48\u4f1a\u5f71\u54cd\u6240\u6709\u4f9d\u8d56\u8fd9\u4e9b\u4ee3\u7801\u7684\u5e94\u7528\u3002\u82e5\u60a8\u5e0c\u671b\u4fdd\u8bc1\u6bcf\u6b21\u53d8\u66f4\u540e\u6240\u6709\u5e94\u7528\u914d\u7f6e\u7684\u6b63\u786e\u6027\uff0c\u9996\u5148\u9700\u8981\u83b7\u5f97\u8fd9\u6b21\u53d8\u66f4\u5f71\u54cd\u7684\u6240\u6709\u5e94\u7528\uff0c\u7136\u540e\u518d\u5bf9\u53d8\u66f4\u7684\u5e94\u7528\u8fdb\u884c\u6b63\u786e\u6027\u6821\u9a8c\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L10"},"diff")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L20"},"deps")," \u4e24\u4e2a job \u5b8c\u7f8e\u5730\u5b8c\u6210\u4e86\u53d8\u66f4\u5f71\u54cd\u9762\u5206\u6790\u3002\u4e3b\u8981\u6267\u884c\u903b\u8f91\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"git diff")," \u547d\u4ee4\u83b7\u53d6\u6b64\u6b21\u53d8\u66f4\u7684\u6587\u4ef6\u5217\u8868\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u53d8\u66f4\u7684\u6587\u4ef6\u5217\u8868\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion deps")," \u547d\u4ee4\u83b7\u53d6\u53d8\u66f4\u6587\u4ef6\u5f71\u54cd\u7684 project \u548c stack \u5217\u8868\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/5132912522/jobs/9234827063?pr=113"},"\u793a\u4f8b"),"\u53d8\u66f4\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"/appops/wordpress/dev/main.k")," \u6587\u4ef6\uff0c\u5f71\u54cd\u7684 project \u548c stack \u5206\u522b\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"appops/wordpress")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"appops/wordpress/dev"),"\uff0c\u7ed3\u679c\u7b26\u5408\u6211\u4eec\u7684\u9884\u671f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"deps",src:n(73091).Z,width:"1500",height:"931"})),(0,o.kt)("h3",{id:"\u5de5\u7a0b\u7ed3\u6784\u6821\u9a8c"},"\u5de5\u7a0b\u7ed3\u6784\u6821\u9a8c"),(0,o.kt)("p",null,"Konfig \u5927\u5e93\u5e94\u5f53\u9075\u5faa",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig#directory-structure"},"\u6b63\u786e\u7684\u5de5\u7a0b\u7ed3\u6784"),", job ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L121"},"structure-check")," \u5bf9\u53d8\u66f4\u5e94\u7528\u7684\u5de5\u7a0b\u7ed3\u6784\u8fdb\u884c\u5408\u6cd5\u6027\u68c0\u67e5\uff0c\u68c0\u67e5\u9879\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"project \u76ee\u5f55\u4e0b\u5fc5\u987b\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"project.yaml")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"OWNERS")," \u6587\u4ef6\uff1b"),(0,o.kt)("li",{parentName:"ul"},"stack \u76ee\u5f55\u4e0b\u5fc5\u987b\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"stack.yaml"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"main.k"),"\u3001",(0,o.kt)("inlineCode",{parentName:"li"},"ci-test/settings.yaml")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"ci-test/stdout.golden.yaml")," \u6587\u4ef6\uff1b"),(0,o.kt)("li",{parentName:"ul"},"project.yaml \u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," \u5b57\u6bb5\u5fc5\u586b\uff1b"),(0,o.kt)("li",{parentName:"ul"},"stack.yaml \u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," \u5b57\u6bb5\u5fc5\u586b\u4e14\u5fc5\u987b\u4e0e\u76ee\u5f55\u540d\u4fdd\u6301\u4e00\u81f4\u3002")),(0,o.kt)("p",null,"\u5de5\u7a0b\u7ed3\u6784\u6821\u9a8c\u7684\u6210\u529f\u610f\u5473\u7740\u76ee\u5f55\u7ed3\u6784\u7684\u6b63\u786e\u6027\uff0cstructure-check \u4f1a\u751f\u6210 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.3.x/"},"pytest")," \u6d4b\u8bd5\u62a5\u544a ",(0,o.kt)("inlineCode",{parentName:"p"},"structure-check-report"),"\uff0c\u60a8\u53ef\u4ee5\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/managing-workflow-runs/downloading-workflow-artifacts"},"Artifacts")," \u754c\u9762\u83b7\u53d6\u5230\u5b83\u3002\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/5132912522/jobs/9234834632"},"\u793a\u4f8b"),"\u901a\u8fc7\u4e86\u5de5\u7a0b\u7ed3\u6784\u6821\u9a8c\u3002\u53ef\u4ee5\u4ece\u6d4b\u8bd5\u62a5\u544a\u4e2d\u6e05\u6670\u5730\u770b\u51fa\uff0c\u5b83\u5bf9\u6b64\u6b21\u53d8\u66f4\u7684\u5e94\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"appops/wordpress")," \u8fdb\u884c\u4e86\u68c0\u67e5\uff0c\u68c0\u67e5\u7ed3\u679c\u4e3a\u901a\u8fc7\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"structure-check",src:n(46382).Z,width:"1500",height:"842"})),(0,o.kt)("h3",{id:"\u4ee3\u7801\u6b63\u786e\u6027\u6d4b\u8bd5"},"\u4ee3\u7801\u6b63\u786e\u6027\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u9664\u4e86\u9700\u8981\u9075\u5faa\u5408\u6cd5\u7684\u5de5\u7a0b\u7ed3\u6784\uff0c\u914d\u7f6e\u4ee3\u7801\u7684\u53d8\u66f4\u8fd8\u5fc5\u987b\u6709\u6b63\u786e\u7684\u8bed\u6cd5\u548c\u8bed\u4e49\uff0c\u5e76\u4e14\u7b26\u5408 Developer \u6216 Platform \u7684\u9884\u671f\u3002stack \u8def\u5f84\u4e0b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"ci-test")," \u76ee\u5f55\u4fdd\u8bc1\u4e86\u914d\u7f6e\u4ee3\u7801\u7684\u6b63\u786e\u6027\uff0c\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Developer \u6216 Platform \u5728\u672c\u5730\u5b8c\u6210\u914d\u7f6e\u4ee3\u7801\u5f00\u53d1\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"make check-${changedProject}")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"make check-all"),"\uff08\u5373\uff0c\u5bf9\u53d8\u66f4\u7684 stack \u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion compile")," \u547d\u4ee4\uff09\uff0c\u66f4 ",(0,o.kt)("inlineCode",{parentName:"li"},"ci-test/stdout.golden.yaml")," \u6587\u4ef6\u3002Developer \u548c Platform \u9700\u8981\u786e\u8ba4 ",(0,o.kt)("inlineCode",{parentName:"li"},"ci-test/stdout.golden.yaml")," \u4e2d\u7684\u53d8\u66f4\u7b26\u5408\u9884\u671f\uff0c\u4fdd\u8bc1\u914d\u7f6e\u7684\u6b63\u786e\u6027\uff1b"),(0,o.kt)("li",{parentName:"ul"},"push \u6216 pull request \u89e6\u53d1\u5de5\u4f5c\u6d41\uff0cmain.yml \u4e2d\u7684 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L144"},"test")," \u5bf9\u6240\u6709\u53d8\u66f4\u7684 stack \u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion compile")," \u547d\u4ee4\uff0c\u751f\u6210\u65b0\u7684\u7f16\u8bd1\u7ed3\u679c\uff0c\u5e76\u4e0e ",(0,o.kt)("inlineCode",{parentName:"li"},"ci-test/stdout.golden.yaml")," \u8fdb\u884c\u5bf9\u6bd4\u3002\u82e5\u5bf9\u6bd4\u7ed3\u679c\u4e00\u81f4\uff0c\u5219\u8bf4\u660e\u914d\u7f6e\u4ee3\u7801\u7684\u53d8\u66f4\u7b26\u5408\u9884\u671f\uff0c\u786e\u5b9a\u5176\u6b63\u786e\u6027\uff1b\u82e5\u5931\u8d25\u6216\u5bf9\u6bd4\u7ed3\u679c\u4e0d\u4e00\u81f4\uff0c\u5219\u8bf4\u660e\u8bed\u6cd5\u9519\u8bef\u6216\u8005\u4e0d\u7b26\u5408 Developer \u6216 Platform \u7684\u9884\u671f\uff0c\u6b63\u786e\u6027\u68c0\u6d4b\u5931\u8d25\u3002")),(0,o.kt)("p",null,"test \u4f1a\u751f\u6210\u6d4b\u8bd5\u62a5\u544a ",(0,o.kt)("inlineCode",{parentName:"p"},"test-report"),"\uff0c\u60a8\u53ef\u4ee5\u4ece Artifacts \u754c\u9762\u83b7\u53d6\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/5132912522/jobs/9234834490"},"\u793a\u4f8b"),"\u901a\u8fc7\u4e86\u4ee3\u7801\u6b63\u786e\u6027\u6d4b\u8bd5\u3002\u6d4b\u8bd5\u62a5\u544a\u4e2d\u7ed9\u51fa\u4e86\u6d4b\u8bd5\u7684 stack \u5217\u8868 ",(0,o.kt)("inlineCode",{parentName:"p"},"appops/wordpress/dev"),"\uff0c\u4ee5\u53ca\u5bf9\u5e94\u7684\u7ed3\u679c Passed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"test",src:n(51551).Z,width:"1500",height:"929"})),(0,o.kt)("h3",{id:"lint-\u98ce\u683c\u68c0\u67e5"},"Lint \u98ce\u683c\u68c0\u67e5"),(0,o.kt)("p",null,"\u4e3a\u4fdd\u8bc1 Konfig \u5927\u5e93\u7684\u6613\u7ef4\u62a4\u6027\u4e0e\u53ef\u62d3\u5c55\u6027\uff0cmain.yml \u63d0\u4f9b\u4e86 job ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/.github/workflows/main.yml#L89"},"lint"),"\uff0c\u5bf9\u4e8e\u53d8\u66f4\u7684\u5e94\u7528\u914d\u7f6e\u8fdb\u884c lint \u98ce\u683c\u68c0\u67e5\u3002job lint \u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://kusionstack.io/docs/reference/cli/kcl/lint/"},"kcl lint")," \u6307\u4ee4\u642d\u5efa\uff0c\u4f1a\u8fdb\u884c import \u5408\u89c4\u6027\u7b49\u8fdb\u884c\u68c0\u67e5\u3002"),(0,o.kt)("p",null,"\u4e0e\u4e0a\u9762\u7684 job \u7c7b\u4f3c\uff0cjob lint \u4e5f\u4f1a\u751f\u6210\u6d4b\u8bd5\u62a5\u544a ",(0,o.kt)("inlineCode",{parentName:"p"},"link-report"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/actions/runs/5132912522/jobs/9234834286"},"\u793a\u4f8b"),"\u901a\u8fc7\u4e86 lint \u98ce\u683c\u68c0\u67e5\uff0c\u62a5\u544a\u5185\u5bb9\u5982\u4e0b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"lint",src:n(74960).Z,width:"1500",height:"915"})),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u672c\u6559\u7a0b\u6f14\u793a\u4e86 Konfig \u5927\u5e93\u5982\u4f55\u4e0e GitHub Actions \u8fdb\u884c\u96c6\u6210\uff0c\u5728\u591a\u4eba\u534f\u4f5c\u7684\u573a\u666f\u4e0b\uff0c\u8fdb\u884c\u5927\u5e93\u8d28\u91cf\u7684\u4fdd\u8bc1\uff0c\u4f7f\u60a8\u53ef\u4ee5\u9ad8\u6548\u3001\u53ef\u9760\u5730\u8fdb\u884c\u5e94\u7528\u914d\u7f6e\u7684\u7ba1\u7406\u3002"))}u.isMDXComponent=!0},73091:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/deps-905e9fdc74ee7d19130d648111131ca7.png"},74960:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/lint-6f27b54bf6ab94c7fbcf537311bb2849.png"},46382:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/structure-check-addafa4edf6ca1a8854e359dfb24c916.png"},51551:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/test-0fac8858edce43c915daace31be2839d.png"},97955:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/wordpress-workflow-dd1f36e5c1a989adb4075e11981bcb14.png"}}]);