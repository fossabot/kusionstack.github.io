"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},s="\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",i={unversionedId:"user_docs/getting-started/usecases/deliver-first-project",id:"user_docs/getting-started/usecases/deliver-first-project",title:"\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",description:"\u672c\u6559\u7a0b\u5c06\u6f14\u793a\u5982\u4f55\u53ea\u4f7f\u7528\u4e00\u4e2a Kusion \u547d\u4ee4\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u60a8\u7684\u7b2c\u4e00\u4e2a\u5355\u5e94\u7528\uff0c\u5355Stack\u7684\u9879\u76ee\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/getting-started/usecases/deliver-first-project.md",sourceDirName:"user_docs/getting-started/usecases",slug:"/user_docs/getting-started/usecases/deliver-first-project",permalink:"/zh-CN/docs/user_docs/getting-started/usecases/deliver-first-project",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/getting-started/usecases/deliver-first-project.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1694145554,formattedLastUpdatedAt:"2023\u5e749\u67088\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/zh-CN/docs/user_docs/getting-started/install"},next:{title:"\u5728 Kubernetes \u548c\u4e91\u4e0a\u90e8\u7f72 WordPress \u5e94\u7528",permalink:"/zh-CN/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds"}},l={},c=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u521d\u59cb\u5316\u9879\u76ee",id:"\u521d\u59cb\u5316\u9879\u76ee",level:2},{value:"\u67e5\u770b\u914d\u7f6e\u6587\u4ef6",id:"\u67e5\u770b\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u4ea4\u4ed8",id:"\u4ea4\u4ed8",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5728-kubernetes-\u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee"},"\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u4f60\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee"),(0,a.kt)("p",null,"\u672c\u6559\u7a0b\u5c06\u6f14\u793a\u5982\u4f55\u53ea\u4f7f\u7528\u4e00\u4e2a Kusion \u547d\u4ee4\u5728 Kubernetes \u4e0a\u4ea4\u4ed8\u60a8\u7684\u7b2c\u4e00\u4e2a\u5355\u5e94\u7528\uff0c\u5355Stack\u7684\u9879\u76ee\u3002"),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u505a\u4ee5\u4e0b\u51c6\u5907\u5de5\u4f5c\uff1a"),(0,a.kt)("p",null,"1\u3001\u5b89\u88c5 Kusion \u5de5\u5177\u94fe"),(0,a.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f7f\u7528 HomeBrew(Mac)\uff0cScoop(Windows)\uff0c\u6216\u8005\u5b89\u88c5\u811a\u672c\u5b89\u88c5Kusion\u3002\u8be6\u60c5\u4fe1\u606f\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"\u4e0b\u8f7d\u548c\u5b89\u88c5"),"\u3002"),(0,a.kt)("p",null,"2\u3001\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4"),(0,a.kt)("p",null,"\u5fc5\u987b\u8981\u6709\u4e00\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u540c\u65f6 Kubernetes \u96c6\u7fa4\u6700\u597d\u5e26\u6709 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002\n\u5982\u679c\u60a8\u8fd8\u6ca1\u6709\u96c6\u7fa4\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/tutorials/multi_node/"},"Minikube")," \u6784\u5efa\u4e00\u4e2a\u60a8\u81ea\u5df1\u7684\u96c6\u7fa4\u3002"),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u9879\u76ee"},"\u521d\u59cb\u5316\u9879\u76ee"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5728\u7ebf\u6a21\u677f\u521d\u59cb\u5316\u8fd9\u4e2a\u6559\u7a0b\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kusion init --online\n")),(0,a.kt)("p",null,"\u6240\u6709\u521d\u59cb\u5316\u6a21\u677f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground$ kusion init --online\n? Please choose a template:  [Use arrows to move, type to filter]\n> code-city                  Code City metaphor for visualizing Go source code in 3D.\n  deployment-multi-stack     A minimal kusion project of multiple stacks\n  deployment-single-stack    A minimal kusion project of single stack\n  wordpress                  A sample wordpress project\n")),(0,a.kt)("p",null,"\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"code-city")," \u5e76\u6309 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," \u3002 \u4e4b\u540e\uff0c\u6211\u4eec\u5c06\u770b\u5230\u4e0b\u9762\u7684\u63d0\u793a\uff0c\u5e76\u4f7f\u7528\u9ed8\u8ba4\u503c\u6765\u914d\u7f6e\u8fd9\u4e2a\u9879\u76ee\u548c Stack\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(42548).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,"\u5728\u6b64\u8fc7\u7a0b\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u6b64\u547d\u4ee4\u83b7\u53d6\u6574\u4e2a\u6587\u4ef6\u5c42\u6b21\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd code-city && tree\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground$ tree code-city/\ncode-city/\n\u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod.lock\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2514\u2500\u2500 project.yaml\n\n2 directories, 5 files\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u5173\u4e8e\u76ee\u5f55\u7ed3\u6784\u7684\u7ec6\u8282\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/glossary"},"Concepts"),".")),(0,a.kt)("h3",{id:"\u67e5\u770b\u914d\u7f6e\u6587\u4ef6"},"\u67e5\u770b\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u770b\u4e00\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"code-city/dev/main.k"),"\u4e0b\u7684\u914d\u7f6e\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.network as n\nimport catalog.models.schema.v1.workload.container as c\n\ngocity: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "gocity": c.Container {\n                image = "howieyuen/gocity:latest"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n        ports: [\n            n.Port {\n                port: 4000\n            }\n        ]\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"main.k")," \u914d\u7f6e\u6587\u4ef6\u5305\u542b\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"gocity")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," \u5b9e\u4f8b\u3002\u5b83\u4ee3\u8868\u4e86\u4e00\u4e2a\u5e94\u7528\uff0c\u8fd9\u4e2a\u5e94\u7528\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"wl.Service"),"\u7c7b\u578b\u7684\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5de5\u4f5c\u8d1f\u8f7d\u6709\u4e00\u4e2a\u526f\u672c\uff0c\u5e76\u4e14\u5bf9\u5916\u66b4\u97324000\u7aef\u53e3\u3002\u8fd9\u4efd\u914d\u7f6e\u5c4f\u853d\u4e86\u590d\u6742\u7684 Kubernetes \u57fa\u7840\u8bbe\u65bd\u7ec6\u8282\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Deployment")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," \u7b49\uff0c\u53ea\u5bf9\u5916\u66b4\u9732\u4ee5\u5e94\u7528\u4e3a\u4e2d\u5fc3\u548c\u4e0e\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u6982\u5ff5\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u5173\u4e8e\u6a21\u578b\u7684\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"Catalog"))),(0,a.kt)("h2",{id:"\u4ea4\u4ed8"},"\u4ea4\u4ed8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd code-city/dev && kusion apply --watch\n")),(0,a.kt)("p",null,"\u8f6c\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u6587\u4ef6\u5939\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply --watch")," \u547d\u4ee4\u5c06\u6b64\u5e94\u7528\u7a0b\u5e8f\u4ea4\u4ed8\u5230 Kubernetes \u96c6\u7fa4\u4e2d"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(62270).Z,width:"2560",height:"1440"})),(0,a.kt)("p",null,"\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy")," \u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n gocity get deploy\n")),(0,a.kt)("p",null,"\u9884\u671f\u8f93\u51fa\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground/code-city/dev$ kubectl -n gocity get deploy\nNAME                READY   UP-TO-DATE   AVAILABLE   AGE\ngocity-dev-gocity   1/1     1            1           3m37s\n")),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"service")," \u8f6c\u53d1\u8be5\u5e94\u7528\u7a0b\u5e8f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n gocity svc/gocity-dev-gocity-private 4000:4000\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"~/playground/code-city/dev$ kubectl port-forward -n gocity svc/gocity-dev-gocity-private 4000:4000\nForwarding from 127.0.0.1:4000 -> 4000\nForwarding from [::1]:4000 -> 4000\n")),(0,a.kt)("p",null,"\u968f\u540e\u5728\u4f60\u7684\u6d4f\u89c8\u5668\u4e2d\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4000/#/github.com/KusionStack/kusion"},"http://localhost:4000/#/github.com/KusionStack/kusion"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(42585).Z,width:"2044",height:"1252"})))}u.isMDXComponent=!0},62270:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/apply-68751fd4a3e4510ba45df72add5af645.gif"},42585:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gocity-d5b16c3633af00cbfdb403373399a677.png"},42548:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/init-gocity-1451aa6ee1f171ea344345a6d0430a8e.gif"}}]);