"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2},s="Kusion vs. Other Software",i={unversionedId:"user_docs/intro/kusion-vs-x",id:"user_docs/intro/kusion-vs-x",title:"Kusion vs. Other Software",description:"It can be difficult to understand how different software compare to each other. Is one a replacement for the other? Are they complementary? etc. In this section, we compare Kusion to other software.",source:"@site/docs/user_docs/intro/kusion-vs-x.md",sourceDirName:"user_docs/intro",slug:"/user_docs/intro/kusion-vs-x",permalink:"/docs/user_docs/intro/kusion-vs-x",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/intro/kusion-vs-x.md",tags:[],version:"current",lastUpdatedBy:"Forest",lastUpdatedAt:1701845339,formattedLastUpdatedAt:"Dec 6, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"Overview",permalink:"/docs/user_docs/intro/overview"},next:{title:"Get Started",permalink:"/docs/user_docs/getting-started/"}},p={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kusion-vs-other-software"},"Kusion vs. Other Software"),(0,a.kt)("p",null,"It can be difficult to understand how different software compare to each other. Is one a replacement for the other? Are they complementary? etc. In this section, we compare Kusion to other software."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"vs. GitOps (ArgoCD, FluxCD, etc.)")),(0,a.kt)("p",null,"According to the ",(0,a.kt)("a",{parentName:"p",href:"https://opengitops.dev/"},"open GitOps principles"),", GitOps systems typically have its desired state expressed declaratively, continuously observe actual system state and attempt to apply the desired state. In the design of Kusion toolchain, we refer to those principles but have no intention to reinvent any GitOps systems wheel. "),(0,a.kt)("p",null,"Kusion adopts your GitOps process and improves it with richness of features. The declarative ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/appconfiguration"},"AppConfiguration")," model can be used to express desired intent, once intent is declared ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/reference/cli/kusion"},"Kusion CLI")," takes the role to make production match intent as safely as possible. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"vs. PaaS (Heroku, Vercel, etc.)")),(0,a.kt)("p",null,"Kusion shares the same goal with traditional PaaS platforms to provide application delivery and management capabilities. The intuitive difference from the full functionality PaaS platforms is that Kusion is a client-side toolchain, not a complete PaaS platform. "),(0,a.kt)("p",null,"Also traditional PaaS platforms typically constrain the type of applications they can run but there is no such constrain for Kusion which means Kusion provides greater flexibility."),(0,a.kt)("p",null,"Kusion allows you to have platform-like features without the constraints of a traditional PaaS. However, Kusion is not attempting to replace any PaaS platforms, instead Kusion can be used to deploy to a platform such as Heroku."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"vs. KubeVela")),(0,a.kt)("p",null,"KubeVela is a modern software delivery and management control plane. KubeVela makes it easier to deploy and operate applications on top of Kubernetes."),(0,a.kt)("p",null,"Kusion is not a control plane. Kusion is a client-side tool for describing application intent in  a declarative way and providing consistent workflow to apply that desired state."),(0,a.kt)("p",null,"With proper Generator implementation, the target Spec of ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/concepts/appconfiguration"},"AppConfiguration")," can be ",(0,a.kt)("a",{parentName:"p",href:"https://kubevela.io/docs/getting-started/core-concept/"},"KubeVela Application"),' and Kusion can use KubeVela to satisfy the "apply" step.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"vs. Helm")),(0,a.kt)("p",null,"The concept of Helm originates from the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Package_manager"},"package management")," mechanism of the operating system. It is a package management tool based on templated YAML files and supports the execution and management of resources in the package. "),(0,a.kt)("p",null,"Kusion is not a package manager. Kusion naturally provides a superset of Helm capabilities with the modeled key-value pairs, so that developers can use Kusion directly as a programable alternative to avoid the pain of writing text templates. For users who have adopted Helm, the stack compilation results in Kusion can be packaged and used in Helm format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"vs. Kubernetes")),(0,a.kt)("p",null,'Kubernetes(K8s) is a container scheduling and management runtime widely used around the world, an "operating system" core for containers, and a platform for building platforms. Above the Kubernetes API layer, Kusion aims to provide app-centric ',(0,a.kt)("strong",{parentName:"p"},"abstraction")," and unified ",(0,a.kt)("strong",{parentName:"p"},"workspace"),", better ",(0,a.kt)("strong",{parentName:"p"},"user experience")," and automation ",(0,a.kt)("strong",{parentName:"p"},"workflow"),", and helps developers build the app delivery model easily and collaboratively."))}u.isMDXComponent=!0}}]);