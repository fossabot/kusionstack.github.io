"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42045],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var k=r.createContext({}),m=function(t){var e=r.useContext(k),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(k.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,k=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=m(a),s=n,N=u["".concat(k,".").concat(s)]||u[s]||o[s]||l;return a?r.createElement(N,i(i({ref:e},d),{},{components:a})):r.createElement(N,i({ref:e},d))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var k in e)hasOwnProperty.call(e,k)&&(p[k]=e[k]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50690:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"\u5b89\u88c5"},i=void 0,p={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"\u5b89\u88c5",description:"\u4f7f\u7528 Helm \u5b89\u88c5",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/current/1-getting-started/2-installation.md",sourceDirName:"1-getting-started",slug:"/getting-started/installation",permalink:"/zh/karpor/next/getting-started/installation",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/docs/karpor/1-getting-started/2-installation.md",tags:[],version:"current",lastUpdatedBy:"hexin",lastUpdatedAt:1724678822,formattedLastUpdatedAt:"2024\u5e748\u670826\u65e5",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5"},sidebar:"karpor",previous:{title:"\u6982\u89c8",permalink:"/zh/karpor/next/"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/karpor/next/getting-started/quick-start"}},k={},m=[{value:"\u4f7f\u7528 Helm \u5b89\u88c5",id:"\u4f7f\u7528-helm-\u5b89\u88c5",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"\u8fdc\u7a0b\u5b89\u88c5",id:"\u8fdc\u7a0b\u5b89\u88c5",level:3},{value:"\u67e5\u770b\u6240\u6709\u53ef\u7528\u7248\u672c",id:"\u67e5\u770b\u6240\u6709\u53ef\u7528\u7248\u672c",level:3},{value:"\u5347\u7ea7\u5230\u6307\u5b9a\u7248\u672c",id:"\u5347\u7ea7\u5230\u6307\u5b9a\u7248\u672c",level:3},{value:"\u672c\u5730\u5b89\u88c5",id:"\u672c\u5730\u5b89\u88c5",level:3},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:3},{value:"\u4e2d\u56fd\u955c\u50cf\u4ee3\u7406",id:"\u4e2d\u56fd\u955c\u50cf\u4ee3\u7406",level:3},{value:"Chart \u53c2\u6570",id:"chart-\u53c2\u6570",level:3},{value:"\u901a\u7528\u53c2\u6570",id:"\u901a\u7528\u53c2\u6570",level:4},{value:"\u5168\u5c40\u53c2\u6570",id:"\u5168\u5c40\u53c2\u6570",level:4},{value:"Karpor Server",id:"karpor-server",level:4},{value:"Karpor Syncer",id:"karpor-syncer",level:4},{value:"ElasticSearch",id:"elasticsearch",level:4},{value:"ETCD",id:"etcd",level:4},{value:"Job",id:"job",level:4}],d={toc:m};function o(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f7f\u7528-helm-\u5b89\u88c5"},"\u4f7f\u7528 Helm \u5b89\u88c5"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u62e5\u6709 Kubernetes \u96c6\u7fa4\uff0cHelm \u662f\u63a8\u8350\u7684\u5b89\u88c5\u65b9\u6cd5\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u6559\u7a0b\u5c06\u6307\u5bfc\u60a8\u4f7f\u7528 Helm \u5b89\u88c5 Karpor\uff0c\u8fd9\u5c06\u5728\u547d\u540d\u7a7a\u95f4 ",(0,n.kt)("inlineCode",{parentName:"p"},"karpor")," \u4e2d\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"karpor-release")," \u4e3a Release \u540d\u79f0\u5b89\u88c5 Chart\u3002"),(0,n.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Helm v3+"),(0,n.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\uff08\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"kind")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"minikube")," \u5728\u672c\u5730\u90e8\u7f72 Kubernetes \u96c6\u7fa4\uff09")),(0,n.kt)("h3",{id:"\u8fdc\u7a0b\u5b89\u88c5"},"\u8fdc\u7a0b\u5b89\u88c5"),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u5c06 karpor chart \u4ed3\u5e93\u6dfb\u52a0\u5230\u60a8\u7684\u672c\u5730\u4ed3\u5e93\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add kusionstack https://kusionstack.github.io/charts\nhelm repo update\n")),(0,n.kt)("p",null,"\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5 Karpor \u7684\u6700\u65b0\u7248\u672c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install karpor-release kusionstack/karpor\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5b89\u88c5",src:a(22683).Z,width:"1136",height:"720"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u76f4\u63a5\u5b89\u88c5\u6b64 Chart \u610f\u5473\u7740\u5b83\u5c06\u4f7f\u7528 Karpor \u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/charts/blob/master/charts/karpor/values.yaml"},"\u9ed8\u8ba4\u6a21\u677f\u503c"),"\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u5c06\u5176\u90e8\u7f72\u5230\u751f\u4ea7\u96c6\u7fa4\u4e2d\uff0c\u6216\u8005\u60a8\u60f3\u8981\u81ea\u5b9a\u4e49 Chart \u914d\u7f6e\uff0c\u5982 ",(0,n.kt)("inlineCode",{parentName:"p"},"resources"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"replicas"),"\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"port")," \u7b49\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--set")," \u53c2\u6570\u8986\u76d6\u9ed8\u8ba4\u503c\u3002"),(0,n.kt)("p",null,"Karpor Chart \u7684\u6240\u6709\u53ef\u914d\u7f6e\u53c2\u6570\u90fd\u8be6\u7ec6\u8bf4\u660e\u5728 ",(0,n.kt)("a",{parentName:"p",href:"#chart-%E5%8F%82%E6%95%B0"},"\u8fd9\u91cc"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install karpor-release kusionstack/karpor --set server.replicas=3 --set syncer.port=7654\n")),(0,n.kt)("h3",{id:"\u67e5\u770b\u6240\u6709\u53ef\u7528\u7248\u672c"},"\u67e5\u770b\u6240\u6709\u53ef\u7528\u7248\u672c"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b\u6240\u6709\u53ef\u5b89\u88c5\u7684 Karpor Chart \u7248\u672c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo update\nhelm search repo kusionstack/karpor --versions\n")),(0,n.kt)("h3",{id:"\u5347\u7ea7\u5230\u6307\u5b9a\u7248\u672c"},"\u5347\u7ea7\u5230\u6307\u5b9a\u7248\u672c"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"--version")," \u6307\u5b9a\u8981\u5347\u7ea7\u7684\u7248\u672c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\nhelm upgrade karpor-release kusionstack/karpor\n\n# \u5347\u7ea7\u5230\u6307\u5b9a\u7248\u672c\nhelm upgrade karpor-release kusionstack/karpor --version 1.2.3\n")),(0,n.kt)("h3",{id:"\u672c\u5730\u5b89\u88c5"},"\u672c\u5730\u5b89\u88c5"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5728\u751f\u4ea7\u4e2d\u8fde\u63a5 ",(0,n.kt)("a",{parentName:"p",href:"https://kusionstack.github.io/charts/"},"https://kusionstack.github.io/charts/")," \u6709\u95ee\u9898\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u4ece ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/charts"},"\u8fd9\u91cc")," \u624b\u52a8\u4e0b\u8f7d Chart\uff0c\u5e76\u5728\u672c\u5730\u4f7f\u7528\u5b83\u6765\u5b89\u88c5\u6216\u5347\u7ea7 Karpor \u7248\u672c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/KusionStack/charts.git\nhelm install karpor-release charts/karpor\nhelm upgrade karpor-release charts/karpor\n")),(0,n.kt)("h3",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,n.kt)("p",null,"\u5378\u8f7d/\u5220\u9664\u547d\u540d\u7a7a\u95f4 ",(0,n.kt)("inlineCode",{parentName:"p"},"karpor")," \u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"karpor-release")," Helm Release\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall karpor-release\n")),(0,n.kt)("h3",{id:"\u4e2d\u56fd\u955c\u50cf\u4ee3\u7406"},"\u4e2d\u56fd\u955c\u50cf\u4ee3\u7406"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4e2d\u56fd\u3001\u5e76\u4e14\u4ece\u5b98\u65b9 DockerHub \u4e0a\u62c9\u53d6\u955c\u50cf\u65f6\u9047\u5230\u56f0\u96be\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u7684\u955c\u50cf\u4ee3\u7406\u670d\u52a1\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install karpor-release kusionstack/karpor --set registryProxy=docker.m.daocloud.io\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u4ee5\u4e0a\u53ea\u662f\u4e00\u4e2a\u6837\u4f8b\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u66ff\u6362 ",(0,n.kt)("inlineCode",{parentName:"p"},"registryProxy")," \u7684\u503c\u3002"),(0,n.kt)("h3",{id:"chart-\u53c2\u6570"},"Chart \u53c2\u6570"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u8868\u683c\u5217\u51fa\u4e86 Chart \u7684\u6240\u6709\u53ef\u914d\u7f6e\u53c2\u6570\u53ca\u5176\u9ed8\u8ba4\u503c\u3002"),(0,n.kt)("h4",{id:"\u901a\u7528\u53c2\u6570"},"\u901a\u7528\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"namespace"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"karpor"')),(0,n.kt)("td",{parentName:"tr",align:null},"\u90e8\u7f72\u7684\u76ee\u6807\u547d\u540d\u7a7a\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"namespaceEnabled"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true")),(0,n.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u751f\u6210\u547d\u540d\u7a7a\u95f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"registryProxy"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'""')),(0,n.kt)("td",{parentName:"tr",align:null},"\u955c\u50cf\u4ee3\u7406\u5730\u5740\uff0c\u914d\u7f6e\u540e\u5c06\u4f5c\u4e3a\u6240\u6709\u7ec4\u4ef6\u955c\u50cf\u7684\u524d\u7f00\u3002 \u6bd4\u5982\uff0c",(0,n.kt)("inlineCode",{parentName:"td"},"golang:latest")," \u5c06\u66ff\u6362\u4e3a ",(0,n.kt)("inlineCode",{parentName:"td"},"<registryProxy>/golang:latest"))))),(0,n.kt)("h4",{id:"\u5168\u5c40\u53c2\u6570"},"\u5168\u5c40\u53c2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"global.image.imagePullPolicy"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"IfNotPresent"')),(0,n.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u4e8e\u6240\u6709 Karpor \u7ec4\u4ef6\u7684\u955c\u50cf\u62c9\u53d6\u7b56\u7565")))),(0,n.kt)("h4",{id:"karpor-server"},"Karpor Server"),(0,n.kt)("p",null,"Karpor Server \u7ec4\u4ef6\u662f\u4e3b\u8981\u7684\u540e\u7aef\u670d\u52a1\u3002\u5b83\u672c\u8eab\u5c31\u662f\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"apiserver"),"\uff0c\u4e5f\u63d0\u4f9b ",(0,n.kt)("inlineCode",{parentName:"p"},"/rest-api")," \u6765\u670d\u52a1 Web UI"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"kusionstack/karpor"')),(0,n.kt)("td",{parentName:"tr",align:null},"Karpor Server \u955c\u50cf\u7684\u4ed3\u5e93")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'""')),(0,n.kt)("td",{parentName:"tr",align:null},"Karpor Server \u955c\u50cf\u7684\u6807\u7b7e\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4e3a Chart \u7684 appVersion")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"karpor-server"')),(0,n.kt)("td",{parentName:"tr",align:null},"Karpor Server \u7684\u7ec4\u4ef6\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"7443")),(0,n.kt)("td",{parentName:"tr",align:null},"Karpor Server \u7684\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.replicas"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8981\u8fd0\u884c\u7684 Karpor Server pod \u7684\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"server.resources"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"limits":{"cpu":"500m","ephemeral-storage":"10Gi","memory":"1Gi"},"requests":{"cpu":"250m","ephemeral-storage":"2Gi","memory":"256Mi"}}')),(0,n.kt)("td",{parentName:"tr",align:null},"Karpor Server pod \u7684\u8d44\u6e90\u89c4\u683c")))),(0,n.kt)("h4",{id:"karpor-syncer"},"Karpor Syncer"),(0,n.kt)("p",null,"Karpor Syncer \u7ec4\u4ef6\u662f\u72ec\u7acb\u7684\u670d\u52a1\uff0c\u7528\u4e8e\u5b9e\u65f6\u540c\u6b65\u96c6\u7fa4\u8d44\u6e90\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"kusionstack/karpor"')),(0,n.kt)("td",{parentName:"tr",align:null},"Karpor Syncer \u955c\u50cf\u7684\u4ed3\u5e93")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'""')),(0,n.kt)("td",{parentName:"tr",align:null},"Karpor Syncer \u955c\u50cf\u7684\u6807\u7b7e\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4e3a Chart \u7684 appVersion")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"karpor-syncer"')),(0,n.kt)("td",{parentName:"tr",align:null},"karpor Syncer \u7684\u7ec4\u4ef6\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"7443")),(0,n.kt)("td",{parentName:"tr",align:null},"karpor Syncer \u7684\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.replicas"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8981\u8fd0\u884c\u7684 karpor Syncer pod \u7684\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"syncer.resources"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"limits":{"cpu":"500m","ephemeral-storage":"10Gi","memory":"1Gi"},"requests":{"cpu":"250m","ephemeral-storage":"2Gi","memory":"256Mi"}}')),(0,n.kt)("td",{parentName:"tr",align:null},"karpor Syncer pod \u7684\u8d44\u6e90\u89c4\u683c")))),(0,n.kt)("h4",{id:"elasticsearch"},"ElasticSearch"),(0,n.kt)("p",null,"ElasticSearch \u7ec4\u4ef6\u7528\u4e8e\u5b58\u50a8\u540c\u6b65\u7684\u8d44\u6e90\u548c\u7528\u6237\u6570\u636e\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"docker.elastic.co/elasticsearch/elasticsearch"')),(0,n.kt)("td",{parentName:"tr",align:null},"ElasticSearch \u955c\u50cf\u7684\u4ed3\u5e93")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"8.6.2"')),(0,n.kt)("td",{parentName:"tr",align:null},"ElasticSearch \u955c\u50cf\u7684\u7279\u5b9a\u6807\u7b7e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"elasticsearch"')),(0,n.kt)("td",{parentName:"tr",align:null},"ElasticSearch \u7684\u7ec4\u4ef6\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"9200")),(0,n.kt)("td",{parentName:"tr",align:null},"ElasticSearch \u7684\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.replicas"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8981\u8fd0\u884c\u7684 ElasticSearch pod \u7684\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"elasticsearch.resources"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"limits":{"cpu":"2","ephemeral-storage":"10Gi","memory":"4Gi"},"requests":{"cpu":"2","ephemeral-storage":"10Gi","memory":"4Gi"}}')),(0,n.kt)("td",{parentName:"tr",align:null},"karpor elasticsearch pod \u7684\u8d44\u6e90\u89c4\u683c")))),(0,n.kt)("h4",{id:"etcd"},"ETCD"),(0,n.kt)("p",null,"ETCD \u7ec4\u4ef6\u662f Karpor Server \u4f5c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"apiserver")," \u80cc\u540e\u7684\u5b58\u50a8\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"quay.io/coreos/etcd"')),(0,n.kt)("td",{parentName:"tr",align:null},"ETCD \u955c\u50cf\u7684\u4ed3\u5e93")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"v3.5.11"')),(0,n.kt)("td",{parentName:"tr",align:null},"ETCD \u955c\u50cf\u7684\u6807\u7b7e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"etcd"')),(0,n.kt)("td",{parentName:"tr",align:null},"ETCD \u7684\u7ec4\u4ef6\u540d\u79f0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.port"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"2379")),(0,n.kt)("td",{parentName:"tr",align:null},"ETCD \u7684\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.replicas"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:null},"\u8981\u8fd0\u884c\u7684 etcd pod \u7684\u6570\u91cf")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"etcd.resources"),(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"limits":{"cpu":"500m","ephemeral-storage":"10Gi","memory":"1Gi"},"requests":{"cpu":"250m","ephemeral-storage":"2Gi","memory":"256Mi"}}')),(0,n.kt)("td",{parentName:"tr",align:null},"karpor etcd pod \u7684\u8d44\u6e90\u89c4\u683c")))),(0,n.kt)("h4",{id:"job"},"Job"),(0,n.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u4e00\u6b21\u6027 Kubernetes Job\uff0c\u7528\u4e8e\u751f\u6210\u6839\u8bc1\u4e66\u548c\u4e00\u4e9b\u524d\u7f6e\u5de5\u4f5c\u3002Karpor Server \u548c Karpor Syncer \u90fd\u9700\u8981\u4f9d\u8d56\u5b83\u5b8c\u6210\u624d\u80fd\u6b63\u5e38\u542f\u52a8\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u952e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"job.image.repo"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"kusionstack/karpor"')),(0,n.kt)("td",{parentName:"tr",align:null},"Job \u955c\u50cf\u7684\u4ed3\u5e93")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"job.image.tag"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'""')),(0,n.kt)("td",{parentName:"tr",align:null},"Karpor \u955c\u50cf\u7684\u6807\u7b7e\u3002\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4e3a Chart \u7684 appVersion")))))}o.isMDXComponent=!0},22683:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/install-88bc3ca743abac3d801e8e6f7f23471c.gif"}}]);