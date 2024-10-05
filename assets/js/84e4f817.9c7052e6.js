"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},86323:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"Installation"},i=void 0,o={unversionedId:"getting-started/installation",id:"version-v0.4/getting-started/installation",title:"Installation",description:"Prerequisites",source:"@site/karpor_versioned_docs/version-v0.4/1-getting-started/2-installation.md",sourceDirName:"1-getting-started",slug:"/getting-started/installation",permalink:"/karpor/v0.4/getting-started/installation",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/1-getting-started/2-installation.md",tags:[],version:"v0.4",lastUpdatedBy:"elliotxx",lastUpdatedAt:1728107607,formattedLastUpdatedAt:"Oct 5, 2024",sidebarPosition:2,frontMatter:{title:"Installation"},sidebar:"karpor",previous:{title:"Overview",permalink:"/karpor/v0.4/"},next:{title:"Quick Start",permalink:"/karpor/v0.4/getting-started/quick-start"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install with helm",id:"install-with-helm",level:2},{value:"Upgrade with helm",id:"upgrade-with-helm",level:2},{value:"Install/Upgrade locally with helm",id:"installupgrade-locally-with-helm",level:2},{value:"Uninstall",id:"uninstall",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure there is Kubernetes cluster available to install Karpor. For local installations, you can use Minikube or Kind.")),(0,a.kt)("h2",{id:"install-with-helm"},"Install with helm"),(0,a.kt)("p",null,"Karpor can be installed easily with helm v3.5+, which is a simple command-line tool and you can get it from ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add kusionstack https://kusionstack.github.io/charts\nhelm repo update\nhelm install karpor kusionstack/karpor\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Install",src:r(27025).Z,width:"1136",height:"720"})),(0,a.kt)("h2",{id:"upgrade-with-helm"},"Upgrade with helm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add kusionstack https://kusionstack.github.io/charts\nhelm repo update\n\n# Upgrade to the latest version.\nhelm upgrade karpor kusionstack/karpor\n\n# Upgrade to the specified version.\nhelm upgrade karpor kusionstack/karpor --version 1.2.3\n")),(0,a.kt)("h2",{id:"installupgrade-locally-with-helm"},"Install/Upgrade locally with helm"),(0,a.kt)("p",null,"If you have problem connecting to ",(0,a.kt)("a",{parentName:"p",href:"https://kusionstack.github.io/charts/"},"https://kusionstack.github.io/charts/")," in production, you may need to manually download the chart from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/charts"},"here")," and use it to install or upgrade locally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/KusionStack/charts.git\nhelm install/upgrade karpor charts/karpor\n")),(0,a.kt)("h2",{id:"uninstall"},"Uninstall"),(0,a.kt)("p",null,"To uninstall karpor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helm uninstall karpor\n")))}u.isMDXComponent=!0},27025:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/install-88bc3ca743abac3d801e8e6f7f23471c.gif"}}]);