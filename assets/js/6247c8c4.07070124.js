"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88752],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Quick Start"},i=void 0,l={unversionedId:"getting-started/quick-start",id:"version-v0.4/getting-started/quick-start",title:"Quick Start",description:"Prerequisites",source:"@site/karpor_versioned_docs/version-v0.4/1-getting-started/3-quick-start.md",sourceDirName:"1-getting-started",slug:"/getting-started/quick-start",permalink:"/karpor/getting-started/quick-start",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.4/1-getting-started/3-quick-start.md",tags:[],version:"v0.4",lastUpdatedBy:"elliotxx",lastUpdatedAt:1717667400,formattedLastUpdatedAt:"Jun 6, 2024",sidebarPosition:3,frontMatter:{title:"Quick Start"},sidebar:"karpor",previous:{title:"Installation",permalink:"/karpor/getting-started/installation"},next:{title:"Architecture",permalink:"/karpor/concepts/architecture"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Cluster (Optional)",id:"create-cluster-optional",level:2},{value:"Installation",id:"installation",level:2},{value:"Access Karpor Dashboard",id:"access-karpor-dashboard",level:2},{value:"Register Cluster",id:"register-cluster",level:2},{value:"Search Resources",id:"search-resources",level:2},{value:"Gain Insight into Resources",id:"gain-insight-into-resources",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Next Step",id:"next-step",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure ",(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," is installed."),(0,n.kt)("li",{parentName:"ul"},"Ensure ",(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," is installed."),(0,n.kt)("li",{parentName:"ul"},"If you do not have a ready-made cluster, you still need a ",(0,n.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation/"},"kind"),".")),(0,n.kt)("h2",{id:"create-cluster-optional"},"Create Cluster (Optional)"),(0,n.kt)("p",null,"First, if you do not have a ready-made cluster, you need to create a kubernetes cluster in your local environment with the ",(0,n.kt)("inlineCode",{parentName:"p"},"kind")," tool. Follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a cluster. You can create a cluster named ",(0,n.kt)("inlineCode",{parentName:"p"},"demo-cluster")," using the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kind create cluster --name demo-cluster\n")),(0,n.kt)("p",{parentName:"li"},"This will create a new Kubernetes cluster in your local Docker environment. Wait for a moment until the cluster creation is complete.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify that the cluster is running properly by executing the command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cluster-info\n")),(0,n.kt)("p",{parentName:"li"},"If everything is set up correctly, you'll see information about your Kubernetes cluster."))),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"To install Karpor, execute the following command in your terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add kusionstack https://kusionstack.github.io/charts\nhelm repo update\nhelm install karpor kusionstack/karpor\n")),(0,n.kt)("p",null,"For more installation details, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/karpor/getting-started/installation"},"Installation Documentation"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Install",src:r(27025).Z,width:"1136",height:"720"})),(0,n.kt)("h2",{id:"access-karpor-dashboard"},"Access Karpor Dashboard"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the following command to forward the Karpor server port:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n karpor port-forward service/karpor-server 7443:7443\n")),(0,n.kt)("p",{parentName:"li"},"This will create a port forward from your local machine to the Karpor server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open your browser and enter the following URL:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"https://127.0.0.1:7443\n")),(0,n.kt)("p",{parentName:"li"},"This will take you to the karpor dashboard. \ud83d\udc47"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Open in Browser",src:r(16275).Z,width:"1048",height:"720"})),(0,n.kt)("p",null,"Congratulations! \ud83c\udf89 You have successfully installed Karpor. Now you can start using Karpor for multi-cluster search and insights."),(0,n.kt)("h2",{id:"register-cluster"},"Register Cluster"),(0,n.kt)("p",null,"To register a new cluster with Karpor, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster Management")," section in the Karpor UI."),(0,n.kt)("li",{parentName:"ol"},"Click on the ",(0,n.kt)("inlineCode",{parentName:"li"},"Register Cluster")," button."),(0,n.kt)("li",{parentName:"ol"},"Follow the on-screen instructions to complete the registration process.")),(0,n.kt)("p",null,"An example of the registration button can be found in the image below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(35517).Z,width:"1620",height:"1080"})),(0,n.kt)("p",null,"For a more detailed explanation of the registration process, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/karpor/user-guide/multi-cluster-management"},"Multi-cluster management")," Documentation."),(0,n.kt)("h2",{id:"search-resources"},"Search Resources"),(0,n.kt)("p",null,"Karpor provides a powerful search feature that allows you to quickly find resources across the registered clusters. To use this feature:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Search")," page within the Karpor UI."),(0,n.kt)("li",{parentName:"ol"},"Enter the search criteria for the resources you are looking for.")),(0,n.kt)("p",null,"Here is an example of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Search")," page:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(73730).Z,width:"1620",height:"1080"}),"\n",(0,n.kt)("img",{src:r(15004).Z,width:"1620",height:"1080"})),(0,n.kt)("p",null,"To learn more about the search capabilities and how to use them effectively, check out the ",(0,n.kt)("a",{parentName:"p",href:"/karpor/references/search-methods"},"Search Methods Documentation"),"."),(0,n.kt)("h2",{id:"gain-insight-into-resources"},"Gain Insight into Resources"),(0,n.kt)("p",null,"By clicking on a result from your search, you can delve into the ",(0,n.kt)("inlineCode",{parentName:"p"},"Insight")," page, where you'll be able to investigate risks related to the resource, see a topological view with its relevant resources, and examine its detailed information."),(0,n.kt)("p",null,"Here are examples for what you can find on the Insight page:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(55899).Z,width:"1620",height:"1080"}),"\n",(0,n.kt)("img",{src:r(80261).Z,width:"1620",height:"1080"}),"\n",(0,n.kt)("img",{src:r(10089).Z,width:"1620",height:"1080"})),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"Please note that this guide only provides a quick start for Karpor, and you may need to refer to additional documentations and resources to configure and use other features."),(0,n.kt)("p",null,"If you have any questions or concerns, check out the official documentation of Karpor or seek relevant support."),(0,n.kt)("h2",{id:"next-step"},"Next Step"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn Karpor's ",(0,n.kt)("a",{parentName:"li",href:"../concepts/architecture"},"Architecture")," and ",(0,n.kt)("a",{parentName:"li",href:"../concepts/glossary"},"Glossary"),"."),(0,n.kt)("li",{parentName:"ul"},"View ",(0,n.kt)("a",{parentName:"li",href:"../user-guide/multi-cluster-management"},"User Guide")," to look on more of what you can achieve with Karpor.")))}p.isMDXComponent=!0},27025:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-88bc3ca743abac3d801e8e6f7f23471c.gif"},16275:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/open-in-browser-5360c7e857ce699118548ab6c1975297.gif"},35517:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cluster-mng-register-new-cluster-df17d3a7e2b322e93e55a56b9689e4c8.png"},55899:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/insight-home-68b10537ffdc4adbe6ab33392d1ec7d0.png"},80261:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/insight-single-issue-91580fa18758524b38ef7477adf280fe.png"},10089:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/insight-topology-673607ffbbf80cfee39bcd28db038d47.png"},73730:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/search-auto-complete-7d14657e2f21a62806f034ba84337080.png"},15004:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/search-result-58bd2c0b969e1223c47de9c59a55599d.png"}}]);