"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},o="\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",s={unversionedId:"user_docs/getting-started/usecases/deliver-first-project",id:"user_docs/getting-started/usecases/deliver-first-project",title:"\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",description:"\u672c\u6559\u7a0b\u5c06\u6f14\u793a\u5982\u4f55\u53ea\u4f7f\u7528\u4e00\u4e2a Kusion \u547d\u4ee4\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee\uff08\u5e26\u6709\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u5e94\u7528\u7a0b\u5e8f\uff09\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/getting-started/usecases/deliver-first-project.md",sourceDirName:"user_docs/getting-started/usecases",slug:"/user_docs/getting-started/usecases/deliver-first-project",permalink:"/zh-CN/docs/user_docs/getting-started/usecases/deliver-first-project",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecases/deliver-first-project.md",tags:[],version:"current",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1689479289,formattedLastUpdatedAt:"2023\u5e747\u670816\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u4f7f\u7528 VS Code Kusion",permalink:"/zh-CN/docs/user_docs/getting-started/kusion-ide"},next:{title:"\u5728 Kubernetes \u548c\u4e91\u4e0a\u90e8\u7f72 WordPress \u5e94\u7528",permalink:"/zh-CN/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds"}},l={},c=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u521d\u59cb\u5316\u9879\u76ee",id:"\u521d\u59cb\u5316\u9879\u76ee",level:2},{value:"\u67e5\u770b\u914d\u7f6e\u6587\u4ef6",id:"\u67e5\u770b\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u4ea4\u4ed8",id:"\u4ea4\u4ed8",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5728-kubernetes-\u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee"},"\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee"),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u5c06\u6f14\u793a\u5982\u4f55\u53ea\u4f7f\u7528\u4e00\u4e2a Kusion \u547d\u4ee4\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee\uff08\u5e26\u6709\u8d1f\u8f7d\u5747\u8861\u5668\u7684\u5e94\u7528\u7a0b\u5e8f\uff09\u3002"),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/user_docs/getting-started/install"},"Kusion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/"},"Kubernetes")," \u6216\u8005 ",(0,a.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},"Kind"))),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u9879\u76ee"},"\u521d\u59cb\u5316\u9879\u76ee"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u514b\u9686 Konfig \u4ed3\u5e93\u5e76\u8fdb\u5165\u6839\u76ee\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:KusionStack/konfig.git && cd konfig\n")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5728\u7ebf\u6a21\u677f\u521d\u59cb\u5316\u8fd9\u4e2a\u6559\u7a0b\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kusion init --online\n")),(0,a.kt)("p",null,"\u6240\u6709\u521d\u59cb\u5316\u6a21\u677f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  konfig git:(main) \u2717 kusion init --online\n? Please choose a template:  [Use arrows to move, type to filter]\n> code-city                  Code City metaphor for visualizing Go source code in 3D.\n  deployment-multi-stack     A minimal kusion project of multi stacks\n  deployment-single-stack    A minimal kusion project of single stack\n")),(0,a.kt)("p",null,"\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"code-city")," \u5e76\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," \u3002 \u4e4b\u540e\uff0c\u6211\u4eec\u5c06\u770b\u5230\u4e0b\u9762\u7684\u63d0\u793a\uff0c\u5e76\u4f7f\u7528\u9ed8\u8ba4\u503c\u6765\u914d\u7f6e\u8fd9\u4e2a\u9879\u76ee\u548c Stack\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(62521).Z,width:"802",height:"448"})),(0,a.kt)("p",null,"\u5728\u6b64\u8fc7\u7a0b\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6b64\u547d\u4ee4\u83b7\u53d6\u6574\u4e2a\u6587\u4ef6\u5c42\u6b21\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd code-city && tree\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  konfig git:(main) \u2717 cd code-city && tree\n.\n\u251c\u2500\u2500 base\n\u2502\xa0\xa0 \u2514\u2500\u2500 base.k\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 ci-test\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 settings.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n3 directories, 6 files\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," \u66f4\u591a\u5173\u4e8e\u76ee\u5f55\u7ed3\u6784\u7684\u7ec6\u8282\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/konfig"},"Konfig"),".")),(0,a.kt)("h3",{id:"\u67e5\u770b\u914d\u7f6e\u6587\u4ef6"},"\u67e5\u770b\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# main.k\nimport base.pkg.kusion_models.kube.frontend\n\n# \u5806\u6808\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\u5c06\u88ab\u8986\u76d6 base \u4e2d\u5177\u6709\u76f8\u540c\u5c5e\u6027\u7684\u914d\u7f6e\u3002\nappConfiguration: frontend.Server {\n    image = "howieyuen/gocity:latest"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"main.k")," \u53ea\u5305\u542b 4 \u884c\u3002 \u7b2c 1 \u884c\u5bfc\u5165\u4e00\u4e2a\u5305\u542b\u6a21\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"Server")," \u7684 \u5305\uff0c\u5b83\u662f\u4e00\u4e2a\u62bd\u8c61\u6a21\u578b\uff0c\u8868\u793a\u6211\u4eec\u7a0d\u540e\u5c06\u4ea4\u4ed8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u8fd9\u79cd\u6a21\u578b\u9690\u85cf\u4e86 Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," \u7684\u590d\u6742\u6027\uff0c\u53ea\u9700\u8981\u4e00\u4e2a\u5b57\u6bb5 ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," \u5c31\u53ef\u4ee5\u8ba9\u8fd9\u4e2a App \u51c6\u5907\u597d\u88ab\u4f7f\u7528\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u5173\u4e8e Konfig \u6a21\u578b\u7684\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig"},"Konfig"))),(0,a.kt)("h2",{id:"\u4ea4\u4ed8"},"\u4ea4\u4ed8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd dev && kusion apply --watch\n")),(0,a.kt)("p",null,"\u8f6c\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u6587\u4ef6\u5939\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply --watch")," \u547d\u4ee4\u5c06\u6b64\u5e94\u7528\u7a0b\u5e8f\u4ea4\u4ed8\u5230 Kubernetes \u96c6\u7fa4\u4e2d"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(62270).Z,width:"1223",height:"593"})),(0,a.kt)("p",null,"\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," \u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -ncode-city get deploy\n")),(0,a.kt)("p",null,"\u9884\u671f\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev git:(main) \u2717 kubectl -ncode-city get deploy\nNAME           READY   UP-TO-DATE   AVAILABLE   AGE\ncode-citydev   1/1     1            1           1m\n")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"service")," \u8f6c\u53d1\u8be5\u5e94\u7528\u7a0b\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -ncode-city svc/gocity 4000:4000\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  dev git:(main) \u2717 kubectl port-forward -ncode-city svc/gocity 4000:4000\nForwarding from 127.0.0.1:4000 -> 4000\nForwarding from [::1]:4000 -> 4000\n")),(0,a.kt)("p",null,"\u968f\u540e\u5728\u4f60\u7684\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000/#/github.com/KusionStack/kusion"},"http://localhost:4000/#/github.com/KusionStack/kusion"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(42585).Z,width:"2044",height:"1252"})))}u.isMDXComponent=!0},62270:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/apply-1cc90f7fe294b3b1414b4dd3a27a2d2b.gif"},62521:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/choose-template-ee4085ef94eafca6a6f724c9fdec9aae.gif"},42585:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gocity-d5b16c3633af00cbfdb403373399a677.png"}}]);