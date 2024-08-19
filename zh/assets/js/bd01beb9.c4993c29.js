"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u5b89\u88c5"},i=void 0,o={unversionedId:"getting-started/installation",id:"version-v0.4/getting-started/installation",title:"\u5b89\u88c5",description:"\u524d\u63d0\u6761\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.4/1-getting-started/2-installation.md",sourceDirName:"1-getting-started",slug:"/getting-started/installation",permalink:"/zh/karpor/getting-started/installation",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/1-getting-started/2-installation.md",tags:[],version:"v0.4",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1724060961,formattedLastUpdatedAt:"2024\u5e748\u670819\u65e5",sidebarPosition:2,frontMatter:{title:"\u5b89\u88c5"},sidebar:"karpor",previous:{title:"\u6982\u89c8",permalink:"/zh/karpor/"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/karpor/getting-started/quick-start"}},s={},p=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u4f7f\u7528 Helm \u5b89\u88c5",id:"\u4f7f\u7528-helm-\u5b89\u88c5",level:2},{value:"\u4f7f\u7528 Helm \u5347\u7ea7",id:"\u4f7f\u7528-helm-\u5347\u7ea7",level:2},{value:"\u672c\u5730\u4f7f\u7528 Helm \u5b89\u88c5/\u5347\u7ea7",id:"\u672c\u5730\u4f7f\u7528-helm-\u5b89\u88c5\u5347\u7ea7",level:2},{value:"\u5378\u8f7d",id:"\u5378\u8f7d",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6709\u4e00\u4e2a\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4\u6765\u5b89\u88c5 Karpor\u3002\u5bf9\u4e8e\u672c\u5730\u5b89\u88c5\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Minikube \u6216 Kind\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528-helm-\u5b89\u88c5"},"\u4f7f\u7528 Helm \u5b89\u88c5"),(0,a.kt)("p",null,"Karpor \u53ef\u4ee5\u901a\u8fc7 Helm v3.5+ \u8f7b\u677e\u5b89\u88c5\uff0c\u5b83\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"\u8fd9\u91cc")," \u83b7\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add kusionstack https://kusionstack.github.io/charts \nhelm repo update\nhelm install karpor kusionstack/karpor\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u5b89\u88c5",src:r(66292).Z,width:"1136",height:"720"})),(0,a.kt)("h2",{id:"\u4f7f\u7528-helm-\u5347\u7ea7"},"\u4f7f\u7528 Helm \u5347\u7ea7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add kusionstack https://kusionstack.github.io/charts \nhelm repo update\n\n# \u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\nhelm upgrade karpor kusionstack/karpor\n\n# \u5347\u7ea7\u5230\u6307\u5b9a\u7248\u672c\nhelm upgrade karpor kusionstack/karpor --version 1.2.3\n")),(0,a.kt)("h2",{id:"\u672c\u5730\u4f7f\u7528-helm-\u5b89\u88c5\u5347\u7ea7"},"\u672c\u5730\u4f7f\u7528 Helm \u5b89\u88c5/\u5347\u7ea7"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fde\u63a5\u5230 ",(0,a.kt)("a",{parentName:"p",href:"https://kusionstack.github.io/charts/"},"https://kusionstack.github.io/charts/")," \u6709\u95ee\u9898\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/charts"},"\u8fd9\u91cc")," \u624b\u52a8\u4e0b\u8f7d chart\uff0c\u5e76\u4f7f\u7528\u5b83\u6765\u672c\u5730\u5b89\u88c5\u6216\u5347\u7ea7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/KusionStack/charts.git \nhelm install/upgrade karpor charts/karpor\n")),(0,a.kt)("h2",{id:"\u5378\u8f7d"},"\u5378\u8f7d"),(0,a.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5378\u8f7d karpor\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall karpor\n")))}u.isMDXComponent=!0},66292:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/install-88bc3ca743abac3d801e8e6f7f23471c.gif"}}]);